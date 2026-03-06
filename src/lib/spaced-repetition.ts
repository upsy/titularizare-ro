import { SRQuestionState, SpacedRepetitionState } from "@/types/spaced-repetition";

const SR_STORAGE_KEY = "titularizare-spaced-repetition";

// Leitner box intervals in days
const BOX_INTERVALS: Record<number, number> = {
  1: 1,
  2: 3,
  3: 7,
  4: 14,
  5: 30,
};

const DEFAULT_STATE: SpacedRepetitionState = {
  questions: {},
  totalReviews: 0,
  lastSessionDate: null,
};

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

function todayStr(): string {
  return new Date().toISOString().split("T")[0];
}

export function getSRState(): SpacedRepetitionState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const stored = localStorage.getItem(SR_STORAGE_KEY);
    if (!stored) return DEFAULT_STATE;
    return JSON.parse(stored) as SpacedRepetitionState;
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveSRState(state: SpacedRepetitionState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SR_STORAGE_KEY, JSON.stringify(state));
}

/** Process a single answer during review. Returns updated state. */
export function processAnswer(
  state: SpacedRepetitionState,
  questionId: string,
  correct: boolean
): SpacedRepetitionState {
  const q = state.questions[questionId];
  if (!q) return state;

  const today = todayStr();
  const newBox = correct ? Math.min(q.box + 1, 5) : 1;
  const interval = BOX_INTERVALS[newBox];

  const updated: SRQuestionState = {
    ...q,
    box: newBox,
    lastReviewed: today,
    nextReview: addDays(today, interval),
  };

  return {
    ...state,
    questions: { ...state.questions, [questionId]: updated },
    totalReviews: state.totalReviews + 1,
    lastSessionDate: today,
  };
}

/** Get all questions due for review (nextReview <= today). */
export function getDueQuestions(state: SpacedRepetitionState): SRQuestionState[] {
  const today = todayStr();
  return Object.values(state.questions).filter((q) => q.nextReview <= today);
}

/** Seed questions from quiz results. Only adds questions not already tracked. */
export function seedFromQuizResults(
  state: SpacedRepetitionState,
  topicId: string,
  results: { questionId: string; correct: boolean; chapterId?: string }[]
): SpacedRepetitionState {
  const today = todayStr();
  const newQuestions = { ...state.questions };

  for (const r of results) {
    // Don't overwrite existing state
    if (newQuestions[r.questionId]) continue;

    const box = r.correct ? 2 : 1;
    const interval = BOX_INTERVALS[box];

    newQuestions[r.questionId] = {
      questionId: r.questionId,
      topicId,
      chapterId: r.chapterId,
      box,
      lastReviewed: today,
      nextReview: addDays(today, interval),
    };
  }

  return {
    ...state,
    questions: newQuestions,
  };
}

/** Get the next review date when nothing is due now. */
export function getNextReviewDate(state: SpacedRepetitionState): string | null {
  const questions = Object.values(state.questions);
  if (questions.length === 0) return null;

  const today = todayStr();
  const futureDates = questions
    .map((q) => q.nextReview)
    .filter((d) => d > today)
    .sort();

  return futureDates[0] ?? null;
}

/** Get box distribution for stats. */
export function getBoxDistribution(state: SpacedRepetitionState): Record<number, number> {
  const dist: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const q of Object.values(state.questions)) {
    dist[q.box] = (dist[q.box] || 0) + 1;
  }
  return dist;
}
