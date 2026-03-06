"use client";

import { useState } from "react";
import { QuestionWithContext } from "@/lib/question-lookup";
import { Badge } from "@/components/ui/Badge";
import { QuizQuestion } from "@/components/lectii/QuizQuestion";

interface ReviewQuestionCardProps {
  context: QuestionWithContext;
  box: number;
  index: number;
  onAnswer: (questionId: string, correct: boolean) => void;
}

const boxColors = [
  "", // box 0 unused
  "bg-red-500",
  "bg-orange-500",
  "bg-amber-500",
  "bg-blue-500",
  "bg-emerald-500",
];

const boxLabels = ["", "Box 1", "Box 2", "Box 3", "Box 4", "Box 5"];

export function ReviewQuestionCard({ context, box, index, onAnswer }: ReviewQuestionCardProps) {
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string | number | boolean | undefined>(undefined);

  const handleAnswer = (questionId: string, value: string | number | boolean) => {
    if (answered) return;
    setUserAnswer(value);
    setAnswered(true);

    // Determine if correct
    const q = context.question;
    let correct = false;
    switch (q.type) {
      case "multiple-choice":
        correct = value === q.correctIndex;
        break;
      case "true-false":
        correct = value === q.correct;
        break;
      case "fill-blank":
        correct = q.correctAnswers.some(
          (ca) =>
            ca.toLowerCase().trim() === String(value).toLowerCase().trim()
        );
        break;
    }

    onAnswer(questionId, correct);
  };

  return (
    <div>
      {/* Origin badge + box indicator */}
      <div className="mb-2 flex items-center gap-2 flex-wrap">
        <Badge variant="default" className="text-xs">
          {context.topicTitle}
        </Badge>
        {context.chapterTitle && (
          <Badge variant="secondary" className="text-xs">
            {context.chapterTitle}
          </Badge>
        )}
        <div className="flex items-center gap-1 ml-auto">
          {[1, 2, 3, 4, 5].map((b) => (
            <span
              key={b}
              className={`h-2 w-2 rounded-full ${
                b <= box ? boxColors[b] : "bg-slate-200"
              }`}
              title={boxLabels[b]}
            />
          ))}
        </div>
      </div>

      <QuizQuestion
        question={context.question}
        index={index}
        answer={userAnswer}
        onAnswer={handleAnswer}
        isSubmitted={false}
        immediateMode
      />
    </div>
  );
}
