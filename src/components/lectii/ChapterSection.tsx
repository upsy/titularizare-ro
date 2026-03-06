"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import { LessonChapter } from "@/types/lectii";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Lightbulb, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { renderSectionContent, renderFormattedText } from "./formatters";
import { ExternalResources } from "./ExternalResources";
import { MiniQuizSection } from "./MiniQuizSection";
import { WordHighlightOverlay } from "./WordHighlightOverlay";

interface ActiveBlock {
  sectionIndex: number;
  blockIndex: number;
}

interface ChapterSectionProps {
  chapter: LessonChapter;
  onMiniQuizComplete?: () => void;
  activeBlock?: ActiveBlock | null;
  activeWordIdx?: number;
}

export function ChapterSection({ chapter, onMiniQuizComplete, activeBlock, activeWordIdx = -1 }: ChapterSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isBlockActive = useCallback(
    (sectionIndex: number, blockIndex: number) => {
      if (!activeBlock) return false;
      return activeBlock.sectionIndex === sectionIndex && activeBlock.blockIndex === blockIndex;
    },
    [activeBlock]
  );

  const isSectionTitleActive = useCallback(
    (sectionIndex: number) => {
      if (!activeBlock) return false;
      return activeBlock.sectionIndex === sectionIndex && activeBlock.blockIndex === -1;
    },
    [activeBlock]
  );

  // Check if this chapter has any word-level timestamps
  const hasWordTimes = useMemo(() => {
    if (!chapter.audio) return false;
    return chapter.audio.segments.some((s) => s.wordTimes && s.wordTimes.length > 0);
  }, [chapter.audio]);

  // Build a map: for each (sectionIndex, blockIndex) → global word offset
  const wordOffsetMap = useMemo(() => {
    if (!hasWordTimes || !chapter.audio) return null;
    const map = new Map<string, number>();
    let offset = 0;
    for (const seg of chapter.audio.segments) {
      if (seg.wordTimes) {
        map.set(`${seg.sectionIndex}-${seg.blockIndex}`, offset);
        offset += seg.wordTimes.length;
      }
    }
    return map;
  }, [hasWordTimes, chapter.audio]);

  const getBlockWordStart = useCallback(
    (sectionIndex: number, blockIndex: number): number => {
      if (!wordOffsetMap) return 0;
      return wordOffsetMap.get(`${sectionIndex}-${blockIndex}`) ?? 0;
    },
    [wordOffsetMap]
  );

  const hasBlockWordTimes = useCallback(
    (sectionIndex: number, blockIndex: number): boolean => {
      if (!wordOffsetMap) return false;
      return wordOffsetMap.has(`${sectionIndex}-${blockIndex}`);
    },
    [wordOffsetMap]
  );

  // Auto-scroll to active word or block.
  // Debounced to avoid jitter when activeBlock + activeWordIdx change in quick succession
  // (e.g., section transitions where title → block → word all fire within frames).
  useEffect(() => {
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);

    scrollTimerRef.current = setTimeout(() => {
      if (!containerRef.current) return;

      let target: Element | null = null;

      // Prefer scrolling to active word
      if (activeWordIdx >= 0) {
        target = containerRef.current.querySelector(`[data-word-idx="${activeWordIdx}"]`);
      }

      // Fall back to block-level scroll
      if (!target && activeBlock) {
        const selector = activeBlock.blockIndex === -1
          ? `[data-audio-section-title="${activeBlock.sectionIndex}"]`
          : `[data-audio-block="${activeBlock.sectionIndex}-${activeBlock.blockIndex}"]`;
        target = containerRef.current.querySelector(selector);
      }

      if (!target) return;

      // Only scroll if the element is outside the visible viewport (with margin)
      const rect = target.getBoundingClientRect();
      const margin = window.innerHeight * 0.2;
      const isVisible = rect.top >= margin && rect.bottom <= window.innerHeight - margin;
      if (!isVisible) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 250);

    return () => {
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, [activeBlock, activeWordIdx]);

  const wordHighlightOptions = hasWordTimes ? { getBlockWordStart, hasBlockWordTimes } : undefined;

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* Word highlight overlay */}
      {hasWordTimes && (
        <WordHighlightOverlay containerRef={containerRef} activeWordIdx={activeWordIdx} />
      )}
      {/* Theory sections */}
      <div className="mb-6 space-y-5">
        {chapter.sections.map((section, i) => (
          <div key={i}>
            <div
              data-audio-section-title={i}
              className={cn(
                "mb-2 flex items-center gap-2 rounded-lg px-3 py-1.5 -mx-3 transition-all duration-500",
                isSectionTitleActive(i) && "bg-blue-50/80 ring-1 ring-blue-200"
              )}
            >
              <BookOpen className="h-4 w-4 text-primary" />
              <h3 className="text-base font-semibold text-foreground">{section.title}</h3>
            </div>
            {renderSectionContent(section, activeBlock ? { sectionIndex: i, isBlockActive, wordHighlight: wordHighlightOptions } : undefined)}
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
