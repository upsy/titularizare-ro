export interface ProgressState {
  completedTopics: string[];
  completedDocuments: string[];
  studyStreak: number;
  lastStudyDate: string | null;
  startDate: string;
}

export interface SubjectProgress {
  subjectId: string;
  subjectTitle: string;
  totalTopics: number;
  completedTopics: number;
  percentage: number;
}
