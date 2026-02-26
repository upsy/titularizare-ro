"use client";

import { useState, useEffect, useCallback } from "react";
import { QuizAttempt, QuizProgressState } from "@/types/lectii";
import {
  getQuizProgress,
  saveQuizAttempt,
  getTotalQuizStats,
} from "@/lib/quiz-progress";

export function useQuizProgress() {
  const [quizProgress, setQuizProgress] = useState<QuizProgressState | null>(null);

  useEffect(() => {
    setQuizProgress(getQuizProgress());
  }, []);

  const handleSaveAttempt = useCallback((attempt: QuizAttempt) => {
    const newState = saveQuizAttempt(attempt);
    setQuizProgress(newState);
  }, []);

  const getBestScoreForTopic = useCallback(
    (topicId: string, variantId?: string): number | null => {
      const key = variantId ? `${topicId}::${variantId}` : topicId;
      return quizProgress?.bestScores[key] ?? null;
    },
    [quizProgress]
  );

  const totalQuizStats = useCallback(() => {
    if (!quizProgress) return { attempted: 0, avgScore: 0 };
    return getTotalQuizStats();
  }, [quizProgress]);

  return {
    quizProgress,
    saveAttempt: handleSaveAttempt,
    getBestScore: getBestScoreForTopic,
    totalQuizStats,
  };
}
