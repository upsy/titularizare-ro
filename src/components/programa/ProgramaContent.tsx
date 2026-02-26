"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Subject } from "@/types/programa";
import { useProgress } from "@/hooks/useProgress";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import { hasLesson } from "@/data/lectii";
import { Checkbox } from "@/components/ui/Checkbox";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";
import { getPercentage } from "@/lib/utils";

interface ProgramaContentProps {
  subject: Subject;
}

export function ProgramaContent({ subject }: ProgramaContentProps) {
  const { isTopicDone, toggleTopic, progress } = useProgress();
  const { getBestScore } = useQuizProgress();

  const totalTopics = subject.chapters.reduce((a, c) => a + c.topics.length, 0);
  const completedTopics = subject.chapters.reduce(
    (a, c) => a + c.topics.filter((t) => progress?.completedTopics.includes(t.id)).length,
    0
  );
  const percentage = getPercentage(completedTopics, totalTopics);

  return (
    <div className="mb-6 rounded-xl border border-border bg-card p-6">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-foreground">{subject.title}</h2>
          <p className="text-sm text-muted">{completedTopics} / {totalTopics} teme completate</p>
        </div>
        <Badge variant={percentage >= 100 ? "success" : percentage > 0 ? "primary" : "default"}>
          {percentage}%
        </Badge>
      </div>
      <ProgressBar
        value={completedTopics}
        max={totalTopics}
        size="md"
        color={percentage >= 100 ? "success" : "primary"}
        className="mb-4"
      />

      <Accordion type="multiple" defaultValue={subject.chapters.map((c) => c.id)}>
        {subject.chapters.map((chapter) => {
          const chapterDone = chapter.topics.filter((t) => isTopicDone(t.id)).length;
          const chapterTotal = chapter.topics.length;
          return (
            <AccordionItem key={chapter.id} value={chapter.id}>
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <span>{chapter.title}</span>
                  <Badge variant={chapterDone === chapterTotal ? "success" : "default"}>
                    {chapterDone}/{chapterTotal}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-1">
                  {chapter.topics.map((topic) => {
                    const done = isTopicDone(topic.id);
                    const lessonAvailable = hasLesson(topic.id);
                    const bestScore = getBestScore(topic.id);
                    return (
                      <div
                        key={topic.id}
                        className="flex items-center justify-between gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50"
                      >
                        <label className="flex flex-1 cursor-pointer items-start gap-3">
                          <Checkbox
                            checked={done}
                            onCheckedChange={() => toggleTopic(topic.id)}
                            className="mt-0.5"
                          />
                          <span className={`text-sm ${done ? "text-muted line-through" : "text-foreground"}`}>
                            {topic.title}
                          </span>
                        </label>
                        <div className="flex shrink-0 items-center gap-2">
                          {bestScore !== null && (
                            <Badge variant={bestScore >= 80 ? "success" : bestScore >= 50 ? "secondary" : "danger"}>
                              {bestScore}%
                            </Badge>
                          )}
                          {lessonAvailable && (
                            <Link href={`/lectii/${topic.id}`}>
                              <Button variant="outline" size="sm">
                                <BookOpen className="h-3.5 w-3.5" />
                                Învață
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
