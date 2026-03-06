"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";
import { allLessons } from "@/data/lectii";
import { allBaremDecks } from "@/data/barem";
import { buildCombinedReviewIndex } from "@/lib/question-lookup";
import { ReviewQuestionCard } from "@/components/review/ReviewQuestionCard";
import { ReviewFlashcardCard } from "@/components/review/ReviewFlashcardCard";
import { ReviewSummary } from "@/components/review/ReviewSummary";
import { ReviewSummaryData } from "@/types/spaced-repetition";

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function ReviewPage() {
  const { dueQuestions, processAnswer, state } = useSpacedRepetition();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [summary, setSummary] = useState<ReviewSummaryData>({
    totalReviewed: 0,
    advanced: 0,
    demoted: 0,
    mastered: 0,
    byTopic: {},
  });

  const combinedIndex = useMemo(
    () => buildCombinedReviewIndex(allLessons, allBaremDecks),
    []
  );

  // Capture due questions once at session start so the list stays stable
  // as processAnswer updates SR state during the review.
  const frozenDue = useRef<typeof dueQuestions | null>(null);
  if (frozenDue.current === null && dueQuestions.length > 0) {
    frozenDue.current = shuffleArray(dueQuestions);
  }
  const shuffledDue = frozenDue.current ?? [];

  const currentQuestion = shuffledDue[currentIndex];
  const currentContext = currentQuestion
    ? combinedIndex.get(currentQuestion.questionId)
    : undefined;

  const handleAnswer = useCallback(
    (questionId: string, correct: boolean) => {
      const q = state?.questions[questionId];
      const oldBox = q?.box ?? 1;
      const newBox = correct ? Math.min(oldBox + 1, 5) : 1;

      processAnswer(questionId, correct);

      setSummary((prev) => {
        const topicId = q?.topicId ?? "unknown";
        const topicData = prev.byTopic[topicId] ?? { reviewed: 0, correct: 0 };
        return {
          totalReviewed: prev.totalReviewed + 1,
          advanced: prev.advanced + (newBox > oldBox ? 1 : 0),
          demoted: prev.demoted + (newBox < oldBox ? 1 : 0),
          mastered: prev.mastered + (newBox === 5 && oldBox < 5 ? 1 : 0),
          byTopic: {
            ...prev.byTopic,
            [topicId]: {
              reviewed: topicData.reviewed + 1,
              correct: topicData.correct + (correct ? 1 : 0),
            },
          },
        };
      });

      // Move to next after short delay
      setTimeout(() => {
        if (currentIndex < shuffledDue.length - 1) {
          setCurrentIndex((i) => i + 1);
        } else {
          setIsComplete(true);
        }
      }, 1500);
    },
    [processAnswer, state, currentIndex, shuffledDue.length]
  );

  // No questions due
  if (shuffledDue.length === 0 && !isComplete) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
              Acasă
            </Button>
          </Link>
        </div>

        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <RotateCcw className="mx-auto mb-3 h-10 w-10 text-slate-300" />
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Nicio întrebare de revizuit
          </h2>
          <p className="text-sm text-muted mb-4">
            Completează quiz-uri din lecții sau studiază flashcard-urile de barem
            pentru a adăuga întrebări în sistemul de revizuire.
          </p>
          <Link href="/programa">
            <Button variant="primary">
              <BookOpen className="h-4 w-4" />
              Vezi lecțiile
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Review complete
  if (isComplete) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
              Acasă
            </Button>
          </Link>
        </div>
        <ReviewSummary summary={summary} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Navigation */}
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
            Acasă
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <RotateCcw className="h-6 w-6 text-violet-600" />
          <h1 className="text-xl font-bold sm:text-2xl">Revizuire Spațiată</h1>
        </div>
        <div className="mb-1 flex justify-between text-sm text-muted">
          <span>Întrebarea {currentIndex + 1} din {shuffledDue.length}</span>
          <span>{summary.totalReviewed} răspunse</span>
        </div>
        <ProgressBar
          value={currentIndex + 1}
          max={shuffledDue.length}
          size="sm"
          color="primary"
        />
      </header>

      {/* Render appropriate card type */}
      {currentContext && currentQuestion && currentContext.type === "question" && (
        <ReviewQuestionCard
          key={currentQuestion.questionId}
          context={currentContext.data}
          box={currentQuestion.box}
          index={currentIndex}
          onAnswer={handleAnswer}
        />
      )}

      {currentContext && currentQuestion && currentContext.type === "flashcard" && (
        <ReviewFlashcardCard
          key={currentQuestion.questionId}
          context={currentContext.data}
          box={currentQuestion.box}
          onAnswer={handleAnswer}
        />
      )}

      {/* If item not found in index, skip */}
      {!currentContext && currentQuestion && (
        <div className="rounded-xl border border-border bg-card p-6 text-center">
          <p className="text-muted mb-3">Întrebarea nu a fost găsită în baza de date.</p>
          <Button
            variant="outline"
            onClick={() => {
              if (currentIndex < shuffledDue.length - 1) {
                setCurrentIndex((i) => i + 1);
              } else {
                setIsComplete(true);
              }
            }}
          >
            Următoarea
          </Button>
        </div>
      )}
    </div>
  );
}
