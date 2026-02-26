// === Lesson Content Types ===

export interface FormatorNote {
  type: "exam-tip" | "practical" | "experience";
  content: string;
}

export interface ExpandableContent {
  label: string;
  content: string;
  source?: "claude";
}

export interface ContentBlock {
  kind: "text" | "formator-note" | "expandable";
  text?: string;
  formatorNote?: FormatorNote;
  expandable?: ExpandableContent;
}

export interface LessonSection {
  title: string;
  content: string;
  contentBlocks?: ContentBlock[];
}

export interface LessonExample {
  title: string;
  description: string;
  context?: string;
}

export interface KeyPoint {
  text: string;
  important?: boolean;
}

export interface ExternalResource {
  title: string;
  url: string;
  source: string;
  description?: string;
}

export interface MiniQuiz {
  questions: QuizQuestion[];
}

export interface LessonChapter {
  id: string;
  title: string;
  duration: string;
  sections: LessonSection[];
  examples: LessonExample[];
  keyPoints: KeyPoint[];
  resources: ExternalResource[];
  miniQuiz: MiniQuiz;
}

export interface QuizVariant {
  variantId: string;
  label: string;
  description?: string;
  questions: QuizQuestion[];
}

export interface Lesson {
  topicId: string;
  title: string;
  duration: string;
  objectives: string[];
  theory: LessonSection[];
  examples: LessonExample[];
  keyPoints: KeyPoint[];
  quiz: Quiz;
  chapters?: LessonChapter[];
  quizVariants?: QuizVariant[];
  transcript?: string;
}

// === Quiz Types ===

export interface MultipleChoiceQuestion {
  id: string;
  type: "multiple-choice";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TrueFalseQuestion {
  id: string;
  type: "true-false";
  question: string;
  correct: boolean;
  explanation: string;
}

export interface FillBlankQuestion {
  id: string;
  type: "fill-blank";
  question: string;
  correctAnswers: string[];
  explanation: string;
}

export type QuizQuestion = MultipleChoiceQuestion | TrueFalseQuestion | FillBlankQuestion;

export interface Quiz {
  topicId: string;
  questions: QuizQuestion[];
}

// === Quiz Progress ===

export interface QuizAttempt {
  topicId: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
  variantId?: string;
}

export interface QuizProgressState {
  attempts: QuizAttempt[];
  bestScores: Record<string, number>;
}
