"use client";

import { useState, useEffect, useCallback } from "react";
import { SpacedRepetitionState, SRQuestionState } from "@/types/spaced-repetition";
import {
  getSRState,
  saveSRState,
  processAnswer,
  getDueQuestions,
  seedFromQuizResults,
  getNextReviewDate,
  getBoxDistribution,
} from "@/lib/spaced-repetition";

export function useSpacedRepetition() {
  const [state, setState] = useState<SpacedRepetitionState | null>(null);

  useEffect(() => {
    setState(getSRState()); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const dueQuestions: SRQuestionState[] = state ? getDueQuestions(state) : [];

  const handleProcessAnswer = useCallback(
    (questionId: string, correct: boolean) => {
      setState((prev) => {
        if (!prev) return prev;
        const next = processAnswer(prev, questionId, correct);
        saveSRState(next);
        return next;
      });
    },
    []
  );

  const handleSeedFromQuiz = useCallback(
    (
      topicId: string,
      results: { questionId: string; correct: boolean; chapterId?: string }[]
    ) => {
      setState((prev) => {
        if (!prev) return prev;
        const next = seedFromQuizResults(prev, topicId, results);
        saveSRState(next);
        return next;
      });
    },
    []
  );

  /** Convenience: seed a single answer (used by flashcard "Știu"/"Nu știu"). */
  const seedAnswer = useCallback(
    (questionId: string, topicId: string, correct: boolean, chapterId?: string) => {
      setState((prev) => {
        if (!prev) return prev;
        const next = seedFromQuizResults(prev, topicId, [
          { questionId, correct, chapterId },
        ]);
        saveSRState(next);
        return next;
      });
    },
    []
  );

  const nextReview = state ? getNextReviewDate(state) : null;
  const boxDist = state ? getBoxDistribution(state) : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const totalTracked = state ? Object.keys(state.questions).length : 0;

  return {
    state,
    dueQuestions,
    processAnswer: handleProcessAnswer,
    seedFromQuiz: handleSeedFromQuiz,
    seedAnswer,
    nextReview,
    boxDistribution: boxDist,
    totalTracked,
    totalReviews: state?.totalReviews ?? 0,
  };
}
