export type BaremCategory =
  | "essay-structure"    // structura eseului
  | "scoring-criteria"   // criterii de punctaj
  | "template"           // șablon de răspuns
  | "exam-strategy";     // strategie + capcane

export type ExamSubjectId = "barem-sub1" | "barem-sub2" | "barem-sub3" | "barem-general";

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  source: "quiz" | "mini-quiz" | "key-point" | "barem" | "exam-tip";
  questionId?: string; // links to QuizQuestion.id for SR integration
  chapterId?: string;
  category?: BaremCategory;
}

export interface FlashcardDeck {
  topicId: string;
  title: string;
  cards: Flashcard[];
}

export interface BaremDeck {
  deckId: ExamSubjectId;
  title: string;
  subtitle: string;
  examSubject: string;
  totalPoints: number;
  color: "amber" | "blue" | "orange" | "violet";
  cards: Flashcard[];
}

export interface FlashcardProgress {
  known: string[]; // card IDs marked "Știu"
  unknown: string[]; // card IDs marked "Nu știu"
}

export interface FlashcardProgressState {
  decks: Record<string, FlashcardProgress>; // keyed by topicId
}
