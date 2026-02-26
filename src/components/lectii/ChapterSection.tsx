"use client";

import { LessonChapter } from "@/types/lectii";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Lightbulb, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { renderSectionContent, renderFormattedText } from "./formatters";
import { ExternalResources } from "./ExternalResources";
import { MiniQuizSection } from "./MiniQuizSection";

interface ChapterSectionProps {
  chapter: LessonChapter;
  onMiniQuizComplete?: () => void;
}

export function ChapterSection({ chapter, onMiniQuizComplete }: ChapterSectionProps) {
  return (
    <div>
      {/* Theory sections */}
      <div className="mb-6 space-y-5">
        {chapter.sections.map((section, i) => (
          <div key={i}>
            <div className="mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">{section.title}</h3>
            </div>
            {renderSectionContent(section)}
          </div>
        ))}
      </div>

      {/* Examples */}
      {chapter.examples.length > 0 && (
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-amber-500" />
            <h3 className="text-base font-semibold text-foreground">Exemple Practice</h3>
          </div>
          <div className="space-y-3">
            {chapter.examples.map((example, i) => (
              <div key={i} className="border-l-3 border-amber-400 pl-4 py-2">
                <h4 className="mb-1.5 font-semibold text-foreground">{example.title}</h4>
                <div className="text-sm leading-relaxed text-muted">
                  {example.description.split("\n\n").map((paragraph, j) => (
                    <p key={j} className={cn(j > 0 && "mt-2")}>
                      {renderFormattedText(paragraph)}
                    </p>
                  ))}
                </div>
                {example.context && (
                  <p className="mt-1.5 text-xs italic text-muted">{example.context}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* External Resources */}
      {chapter.resources.length > 0 && (
        <div className="mb-6">
          <ExternalResources resources={chapter.resources} />
        </div>
      )}

      {/* Key Points */}
      {chapter.keyPoints.length > 0 && (
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <Star className="h-4 w-4 text-emerald-500" />
            <h3 className="text-base font-semibold text-foreground">Puncte Cheie</h3>
          </div>
          <div className="border-l-3 border-emerald-500 pl-4 py-3">
            <ul className="space-y-2">
              {chapter.keyPoints.map((kp, i) => (
                <li
                  key={i}
                  className={cn(
                    "flex items-start gap-2 text-sm",
                    kp.important ? "font-medium text-foreground" : "text-muted"
                  )}
                >
                  <span className={cn(
                    "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                    kp.important ? "bg-emerald-500" : "bg-slate-300"
                  )} />
                  <span>{renderFormattedText(kp.text)}</span>
                  {kp.important && (
                    <Badge variant="success" className="ml-1 shrink-0">Important</Badge>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Mini Quiz */}
      <div className="mb-6">
        <MiniQuizSection miniQuiz={chapter.miniQuiz} onComplete={onMiniQuizComplete} />
      </div>
    </div>
  );
}
