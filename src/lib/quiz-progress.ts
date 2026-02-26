import { QuizAttempt, QuizProgressState } from "@/types/lectii";

const QUIZ_STORAGE_KEY = "titularizare-quiz-progress";

const DEFAULT_STATE: QuizProgressState = {
  attempts: [],
  bestScores: {},
};

export function getQuizProgress(): QuizProgressState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const stored = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!stored) return DEFAULT_STATE;
    return JSON.parse(stored) as QuizProgressState;
  } catch {
    return DEFAULT_STATE;
  }
}

function saveQuizProgress(state: QuizProgressState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(state));
}

function getQuizKey(topicId: string, variantId?: string): string {
  return variantId ? `${topicId}::${variantId}` : topicId;
}

export function saveQuizAttempt(attempt: QuizAttempt): QuizProgressState {
  const state = getQuizProgress();
  state.attempts.unshift(attempt);
  const key = getQuizKey(attempt.topicId, attempt.variantId);
  const currentBest = state.bestScores[key] ?? 0;
  if (attempt.percentage > currentBest) {
    state.bestScores[key] = attempt.percentage;
  }
  saveQuizProgress(state);
  return { ...state };
}

export function getBestScore(topicId: string, variantId?: string): number | null {
  const state = getQuizProgress();
  const key = getQuizKey(topicId, variantId);
  return state.bestScores[key] ?? null;
}

export function getTopicAttempts(topicId: string, variantId?: string): QuizAttempt[] {
  const state = getQuizProgress();
  if (variantId) {
    return state.attempts.filter((a) => a.topicId === topicId && a.variantId === variantId);
  }
  return state.attempts.filter((a) => a.topicId === topicId);
}

export function getTotalQuizStats(): { attempted: number; avgScore: number } {
  const state = getQuizProgress();
  const topicIds = Object.keys(state.bestScores);
  const attempted = topicIds.length;
  if (attempted === 0) return { attempted: 0, avgScore: 0 };
  const sum = topicIds.reduce((acc, id) => acc + state.bestScores[id], 0);
  return { attempted, avgScore: Math.round(sum / attempted) };
}
