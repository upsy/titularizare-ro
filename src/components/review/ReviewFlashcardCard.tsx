"use client";

import { useState } from "react";
import { FlashcardReviewContext } from "@/lib/question-lookup";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Check, X, Eye } from "lucide-react";

interface ReviewFlashcardCardProps {
  context: FlashcardReviewContext;
  box: number;
  onAnswer: (cardId: string, correct: boolean) => void;
}

const boxColors = [
  "", // box 0 unused
  "bg-red-500",
  "bg-orange-500",
  "bg-amber-500",
  "bg-blue-500",
  "bg-emerald-500",
];

export function ReviewFlashcardCard({ context, box, onAnswer }: ReviewFlashcardCardProps) {
  const [revealed, setRevealed] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleReveal = () => setRevealed(true);

  const handleAnswer = (correct: boolean) => {
    if (answered) return;
    setAnswered(true);
    onAnswer(context.card.id, correct);
  };

  return (
    <div>
      {/* Origin badge + box indicator */}
      <div className="mb-2 flex items-center gap-2 flex-wrap">
        <Badge variant="warning" className="text-xs">
          {context.topicTitle}
        </Badge>
        <Badge variant="default" className="text-xs">Barem</Badge>
        <div className="flex items-center gap-1 ml-auto">
          {[1, 2, 3, 4, 5].map((b) => (
            <span
              key={b}
              className={`h-2 w-2 rounded-full ${
                b <= box ? boxColors[b] : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Card content */}
      <div className="rounded-xl border border-amber-200 bg-card p-6">
        {/* Front */}
        <p className="text-lg font-medium text-foreground mb-4">
          {context.card.front}
        </p>

        {/* Back (revealed) */}
        {revealed ? (
          <>
            <div className="rounded-lg bg-amber-50 border border-amber-100 p-4 mb-4">
              <p className="text-base text-foreground whitespace-pre-line leading-relaxed">
                {context.card.back}
              </p>
            </div>

            {/* Self-rating buttons */}
            {!answered ? (
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
                  onClick={() => handleAnswer(false)}
                >
                  <X className="h-4 w-4" />
                  Nu știam
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                  onClick={() => handleAnswer(true)}
                >
                  <Check className="h-4 w-4" />
                  Știam
                </Button>
              </div>
            ) : (
              <p className="text-center text-sm text-muted">Răspuns înregistrat</p>
            )}
          </>
        ) : (
          <Button
            variant="outline"
            className="w-full"
            onClick={handleReveal}
          >
            <Eye className="h-4 w-4" />
            Arată răspunsul
          </Button>
        )}
      </div>
    </div>
  );
}
