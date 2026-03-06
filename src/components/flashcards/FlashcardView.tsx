"use client";

import { cn } from "@/lib/utils";
import { Flashcard } from "@/types/flashcards";
import { Badge } from "@/components/ui/Badge";

interface FlashcardViewProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

const sourceLabels: Record<string, string> = {
  quiz: "Quiz",
  "mini-quiz": "Mini-quiz",
  "key-point": "Punct cheie",
  barem: "Barem",
  "exam-tip": "Sfat examen",
};

const isBaremSource = (source: string) => source === "barem" || source === "exam-tip";

export function FlashcardView({ card, isFlipped, onFlip }: FlashcardViewProps) {
  const barem = isBaremSource(card.source);

  return (
    <div
      className="flashcard-container cursor-pointer select-none"
      onClick={onFlip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          onFlip();
        }
      }}
      aria-label={isFlipped ? "Apasă pentru a vedea întrebarea" : "Apasă pentru a vedea răspunsul"}
    >
      <div className={cn("flashcard-inner", isFlipped && "flipped")}>
        {/* Front */}
        <div className="flashcard-face border border-border bg-card shadow-sm">
          <div className="flex w-full flex-col items-center gap-4">
            <Badge variant={barem ? "warning" : "default"} className="text-xs">
              {sourceLabels[card.source] ?? card.source}
            </Badge>
            <p className="text-center text-lg font-medium text-foreground leading-relaxed">
              {card.front}
            </p>
            <p className="text-xs text-muted">Click pentru răspuns</p>
          </div>
        </div>

        {/* Back */}
        <div className={cn(
          "flashcard-face flashcard-back shadow-sm",
          barem
            ? "border border-amber-200 bg-amber-50"
            : "border border-blue-200 bg-blue-50"
        )}>
          <div className="flex w-full flex-col items-center gap-3 overflow-y-auto max-h-[250px]">
            <Badge variant={barem ? "warning" : "primary"} className="text-xs">Răspuns</Badge>
            <p className="text-center text-base text-foreground leading-relaxed whitespace-pre-line">
              {card.back}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
