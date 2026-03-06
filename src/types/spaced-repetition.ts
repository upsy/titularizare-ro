export interface SRQuestionState {
  questionId: string;
  topicId: string;
  chapterId?: string;
  box: number; // 1-5 (Leitner box)
  lastReviewed: string; // ISO date string
  nextReview: string; // ISO date string
}

export interface SpacedRepetitionState {
  questions: Record<string, SRQuestionState>; // keyed by questionId
  totalReviews: number;
  lastSessionDate: string | null;
}

export interface ReviewSummaryData {
  totalReviewed: number;
  advanced: number; // moved up a box
  demoted: number; // moved back to box 1
  mastered: number; // reached box 5
  byTopic: Record<string, { reviewed: number; correct: number }>;
}

export interface DueReviewInfo {
  totalDue: number;
  byTopic: { topicId: string; topicTitle: string; count: number }[];
  nextReviewDate: string | null; // when nothing is due now
}
