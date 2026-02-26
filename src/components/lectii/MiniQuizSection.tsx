"use client";

import { useState, useEffect, useRef } from "react";
import { MiniQuiz } from "@/types/lectii";
import { QuizQuestion } from "./QuizQuestion";
import { Badge } from "@/components/ui/Badge";
import { HelpCircle, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MiniQuizSectionProps {
  miniQuiz: MiniQuiz;
  onComplete?: () => void;
}

export function MiniQuizSection({ miniQuiz, onComplete }: MiniQuizSectionProps) {
  const [answers, setAnswers] = useState<Record<string, string | number | boolean>>({});
  const [isExpanded, setIsExpanded] = useState(false);
  const hasFiredComplete = useRef(false);

  const totalQuestions = miniQuiz.questions.length;
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === totalQuestions;

  useEffect(() => {
    if (isComplete && !hasFiredComplete.current) {
      hasFiredComplete.current = true;
      onComplete?.();
    }
  }, [isComplete, onComplete]);

  const handleAnswer = (questionId: string, value: string | number | boolean) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  return (
    <div className="rounded-lg bg-violet-50/60">
      {/* Collapsible header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-violet-600" />
          <h4 className="font-semibold text-foreground">Verifică-ți înțelegerea</h4>
        </div>
        <div className="flex items-center gap-2">
          {isComplete ? (
            <Badge variant="success">
              <Check className="mr-1 h-3 w-3" />
              Completat
            </Badge>
          ) : answeredCount > 0 ? (
            <Badge variant="default">{answeredCount}/{totalQuestions}</Badge>
          ) : null}
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted transition-transform duration-200",
              isExpanded && "rotate-180"
            )}
          />
        </div>
      </button>

      {/* Collapsible content */}
      {isExpanded && (
        <div className="space-y-3 px-5 pb-5">
          {miniQuiz.questions.map((q, i) => (
            <QuizQuestion
              key={q.id}
              question={q}
              index={i}
              answer={answers[q.id]}
              onAnswer={handleAnswer}
              isSubmitted={false}
              immediateMode
            />
          ))}
        </div>
      )}
    </div>
  );
}
