import React from "react";
import { LessonSection } from "@/types/lectii";
import { FormatorNoteCard } from "./FormatorNote";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";
import { Info, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Renders a section's content — uses contentBlocks when available, falls back to content string.
 */
export function renderSectionContent(section: LessonSection): React.ReactNode {
  if (section.contentBlocks && section.contentBlocks.length > 0) {
    return (
      <div className="space-y-4">
        {section.contentBlocks.map((block, i) => {
          if (block.kind === "text" && block.text) {
            return (
              <div key={i}>
                {block.text.split("\n\n").map((paragraph, j) => (
                  <p key={j} className={cn("text-sm leading-relaxed text-foreground", j > 0 && "mt-3")}>
                    {renderFormattedText(paragraph)}
                  </p>
                ))}
              </div>
            );
          }
          if (block.kind === "formator-note" && block.formatorNote) {
            return <FormatorNoteCard key={i} note={block.formatorNote} />;
          }
          if (block.kind === "expandable" && block.expandable) {
            const isClaude = block.expandable.source === "claude";
            const wordCount = block.expandable.content.trim().split(/\s+/).length;
            return (
              <Accordion key={i} type="single" collapsible>
                <AccordionItem
                  value={`expandable-${i}`}
                  className={cn(
                    "rounded-lg border",
                    isClaude ? "border-amber-200 bg-amber-50/50" : "border-blue-200 bg-blue-50/50"
                  )}
                >
                  <AccordionTrigger className={cn(
                    "px-4 py-3 text-sm font-medium",
                    isClaude ? "text-amber-700 hover:text-amber-800" : "text-blue-700 hover:text-blue-800"
                  )}>
                    <span className="flex items-center gap-2 flex-wrap">
                      {isClaude ? <Sparkles className="h-4 w-4" /> : <Info className="h-4 w-4" />}
                      {block.expandable.label}
                      {isClaude && (
                        <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700">
                          Claude
                        </span>
                      )}
                      <span className={cn(
                        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold",
                        wordCount >= 300 && wordCount <= 400
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-600"
                      )}>
                        {wordCount} cuvinte
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3">
                    <div className="text-sm leading-relaxed text-foreground">
                      {block.expandable.content.split("\n\n").map((paragraph, j) => (
                        <p key={j} className={cn(j > 0 && "mt-2")}>
                          {renderFormattedText(paragraph)}
                        </p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          }
          return null;
        })}
      </div>
    );
  }

  // Fallback: render content string as paragraphs
  return (
    <div>
      {section.content.split("\n\n").map((paragraph, j) => (
        <p key={j} className={cn("text-sm leading-relaxed text-foreground", j > 0 && "mt-3")}>
          {renderFormattedText(paragraph)}
        </p>
      ))}
    </div>
  );
}

/**
 * Detect whether a block of text is a markdown table (lines starting with |)
 */
function isMarkdownTable(text: string): boolean {
  const lines = text.split("\n").filter((l) => l.trim());
  return lines.length >= 2 && lines.every((l) => l.trim().startsWith("|"));
}

/**
 * Parse and render a markdown table into an HTML <table>
 */
function renderMarkdownTable(text: string, key: number): React.ReactNode {
  const lines = text.split("\n").filter((l) => l.trim());
  // Filter out separator row (|---|---|)
  const dataLines = lines.filter((l) => !/^\|[\s\-:|]+\|$/.test(l.trim()));
  if (dataLines.length === 0) return null;

  const parseRow = (line: string) =>
    line.split("|").slice(1, -1).map((cell) => cell.trim());

  const headerCells = parseRow(dataLines[0]);
  const bodyRows = dataLines.slice(1).map(parseRow);

  return (
    <div key={key} className="overflow-x-auto my-2">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-slate-200">
            {headerCells.map((cell, ci) => (
              <th key={ci} className="py-2 px-3 text-left font-semibold text-slate-700 bg-slate-50">
                {renderBold(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, ri) => (
            <tr key={ri} className="border-b border-slate-100 even:bg-slate-50/50">
              {row.map((cell, ci) => (
                <td key={ci} className="py-2 px-3 text-foreground">
                  {renderBold(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Simple inline formatter for **bold**, bullet points, and markdown tables
 */
export function renderFormattedText(text: string): React.ReactNode[] {
  // Handle markdown tables
  if (isMarkdownTable(text)) {
    return [renderMarkdownTable(text, 0)];
  }

  // Handle bullet points (lines starting with •)
  if (text.includes("\n")) {
    const lines = text.split("\n");
    // Check if some lines are a table embedded within other content
    // (tables are handled at paragraph level, so this shouldn't happen often)
    return lines.map((line, i) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("•")) {
        return (
          <span key={i} className="block pl-4">
            {renderBold(trimmed)}
          </span>
        );
      }
      if (i > 0 && trimmed) {
        return (
          <span key={i} className="block">
            {renderBold(trimmed)}
          </span>
        );
      }
      return <span key={i}>{renderBold(trimmed)}</span>;
    });
  }
  return [<span key={0}>{renderBold(text)}</span>];
}

export function renderBold(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}
