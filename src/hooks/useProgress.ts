"use client";

import { useState, useEffect, useCallback } from "react";
import { ProgressState, SubjectProgress } from "@/types/progress";
import { Subject } from "@/types/programa";
import { getProgress, toggleTopic, toggleDocument } from "@/lib/progress";
import { getPercentage } from "@/lib/utils";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState | null>(null);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const handleToggleTopic = useCallback((topicId: string) => {
    const newState = toggleTopic(topicId);
    setProgress(newState);
  }, []);

  const handleToggleDocument = useCallback((docId: string) => {
    const newState = toggleDocument(docId);
    setProgress(newState);
  }, []);

  const isTopicDone = useCallback(
    (topicId: string) => {
      return progress?.completedTopics.includes(topicId) ?? false;
    },
    [progress]
  );

  const isDocumentDone = useCallback(
    (docId: string) => {
      return progress?.completedDocuments.includes(docId) ?? false;
    },
    [progress]
  );

  const getSubjectProgress = useCallback(
    (subjects: Subject[]): SubjectProgress[] => {
      if (!progress) return [];
      return subjects.map((subject) => {
        const totalTopics = subject.chapters.reduce(
          (acc, ch) => acc + ch.topics.length,
          0
        );
        const completedTopics = subject.chapters.reduce(
          (acc, ch) =>
            acc +
            ch.topics.filter((t) => progress.completedTopics.includes(t.id))
              .length,
          0
        );
        return {
          subjectId: subject.id,
          subjectTitle: subject.title,
          totalTopics,
          completedTopics,
          percentage: getPercentage(completedTopics, totalTopics),
        };
      });
    },
    [progress]
  );

  const totalCompleted = progress?.completedTopics.length ?? 0;
  const streak = progress?.studyStreak ?? 0;

  return {
    progress,
    toggleTopic: handleToggleTopic,
    toggleDocument: handleToggleDocument,
    isTopicDone,
    isDocumentDone,
    getSubjectProgress,
    totalCompleted,
    streak,
  };
}
