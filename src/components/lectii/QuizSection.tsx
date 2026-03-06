"use client";

import { useState, useCallback } from "react";
import { Quiz, QuizAttempt } from "@/types/lectii";
import { QuizQuestion, checkAnswer } from "./QuizQuestion";
import { QuizResults } from "./QuizResults";
import { Button } from "@/components/ui/Button";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";
import { ClipboardCheck } from "lucide-react";

interface QuizSectionProps {
  quiz: Quiz;
  variantId?: string;
  backTo?: { href: string; label: string };
}

export function QuizSection({ quiz, variantId, backTo }: QuizSectionProps) {
  const [answers, setAnswers] = useState<Record<string, string | number | boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const { saveAttempt } = useQuizProgress();
  const { seedFromQuiz } = useSpacedRepetition();

  const handleAnswer = useCallback(
    (questionId: string, value: string | number | boolean) => {
      if (isSubmitted) return;
      setAnswers((prev) => ({ ...prev, [questionId]: value }));
    },
    [isSubmitted]
  );

  const handleSubmit = useCallback(() => {
    let correct = 0;
    for (const q of quiz.questions) {
      if (checkAnswer(q, answers[q.id])) correct++;
    }
    setScore(correct);
    setIsSubmitted(true);

    const attempt: QuizAttempt = {
      topicId: quiz.topicId,
      score: correct,
      total: quiz.questions.length,
      percentage: Math.round((correct / quiz.questions.length) * 100),
      date: new Date().toISOString(),
      ...(variantId ? { variantId } : {}),
    };
    saveAttempt(attempt);

    // Seed spaced repetition
    const srResults = quiz.questions.map((q) => ({
      questionId: q.id,
      correct: checkAnswer(q, answers[q.id]),
    }));
    seedFromQuiz(quiz.topicId, srResults);
  }, [quiz, answers, saveAttempt, seedFromQuiz, variantId]);

  const handleRetry = useCallback(() => {
    setAnswers({});
    setIsSubmitted(false);
    setScore(0);
  }, []);

  const allAnswered = quiz.questions.every((q) => answers[q.id] !== undefined);
  const percentage = quiz.questions.length > 0
    ? Math.round((score / quiz.questions.length) * 100)
    : 0;

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center gap-3">
        <ClipboardCheck className="h-6 w-6 text-primary" />
        <h2 className="text-xl font-semibold">Testează-te</h2>
      </div>

      <div className="space-y-4">
        {quiz.questions.map((q, i) => (
          <QuizQuestion
            key={q.id}
            question={q}
            index={i}
            answer={answers[q.id]}
            onAnswer={handleAnswer}
            isSubmitted={isSubmitted}
          />
        ))}
      </div>

      {!isSubmitted && (
        <div className="mt-6 text-center">
          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            size="lg"
          >
            Verifică răspunsurile
          </Button>
          {!allAnswered && (
            <p className="mt-2 text-xs text-muted">
              Răspunde la toate întrebările pentru a putea verifica.
            </p>
          )}
        </div>
      )}

      {isSubmitted && (
        <div className="mt-6">
          <QuizResults
            score={score}
            total={quiz.questions.length}
            percentage={percentage}
            onRetry={handleRetry}
            backTo={backTo}
          />
        </div>
      )}
    </section>
  );
}
