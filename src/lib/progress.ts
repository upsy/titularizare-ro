import { ProgressState } from "@/types/progress";
import { STORAGE_KEY } from "./constants";

const DEFAULT_STATE: ProgressState = {
  completedTopics: [],
  completedDocuments: [],
  studyStreak: 0,
  lastStudyDate: null,
  startDate: new Date().toISOString().split("T")[0],
};

export function getProgress(): ProgressState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return DEFAULT_STATE;
    return JSON.parse(stored) as ProgressState;
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveProgress(state: ProgressState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function toggleTopic(topicId: string): ProgressState {
  const state = getProgress();
  const idx = state.completedTopics.indexOf(topicId);
  if (idx === -1) {
    state.completedTopics.push(topicId);
  } else {
    state.completedTopics.splice(idx, 1);
  }
  updateStreak(state);
  saveProgress(state);
  return { ...state };
}

export function toggleDocument(docId: string): ProgressState {
  const state = getProgress();
  const idx = state.completedDocuments.indexOf(docId);
  if (idx === -1) {
    state.completedDocuments.push(docId);
  } else {
    state.completedDocuments.splice(idx, 1);
  }
  saveProgress(state);
  return { ...state };
}

export function isTopicCompleted(topicId: string): boolean {
  const state = getProgress();
  return state.completedTopics.includes(topicId);
}

function updateStreak(state: ProgressState): void {
  const today = new Date().toISOString().split("T")[0];
  if (state.lastStudyDate === today) return;

  if (state.lastStudyDate) {
    const lastDate = new Date(state.lastStudyDate);
    const todayDate = new Date(today);
    const diff = Math.floor(
      (todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diff === 1) {
      state.studyStreak += 1;
    } else if (diff > 1) {
      state.studyStreak = 1;
    }
  } else {
    state.studyStreak = 1;
  }
  state.lastStudyDate = today;
}
