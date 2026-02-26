"use client";

import { useState } from "react";
import { QuizQuestion as QuizQuestionType } from "@/types/lectii";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  index: number;
  answer: string | number | boolean | undefined;
  onAnswer: (questionId: string, answer: string | number | boolean) => void;
  isSubmitted: boolean;
  immediateMode?: boolean;
}

export function QuizQuestion({ question, index, answer, onAnswer, isSubmitted, immediateMode }: QuizQuestionProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const effectiveSubmitted = immediateMode ? isRevealed : isSubmitted;

  const handleImmediateAnswer = (questionId: string, value: string | number | boolean) => {
    if (isRevealed) return;
    onAnswer(questionId, value);
    setIsRevealed(true);
  };

  const effectiveOnAnswer = immediateMode ? handleImmediateAnswer : onAnswer;
  const isCorrect = checkAnswer(question, answer);

  return (
    <div className={cn(
      "rounded-xl border p-5",
      effectiveSubmitted
        ? isCorrect
          ? "border-emerald-300 bg-emerald-50/50"
          : "border-red-300 bg-red-50/50"
        : "border-border bg-card"
    )}>
      <div className="mb-3 flex items-start gap-2">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
          {index + 1}
        </span>
        <p className="font-medium text-foreground">{question.question}</p>
      </div>

      {question.type === "multiple-choice" && (
        <MultipleChoiceInput
          question={question}
          answer={answer as number | undefined}
          onAnswer={effectiveOnAnswer}
          isSubmitted={effectiveSubmitted}
        />
      )}

      {question.type === "true-false" && (
        <TrueFalseInput
          question={question}
          answer={answer as boolean | undefined}
          onAnswer={effectiveOnAnswer}
          isSubmitted={effectiveSubmitted}
        />
      )}

      {question.type === "fill-blank" && (
        <FillBlankInput
          question={question}
          answer={answer as string | undefined}
          onAnswer={effectiveOnAnswer}
          isSubmitted={effectiveSubmitted}
        />
      )}

      {effectiveSubmitted && (
        <div className={cn(
          "mt-3 flex items-start gap-2 rounded-lg p-3 text-sm",
          isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
        )}>
          {isCorrect ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          <span>{question.explanation}</span>
        </div>
      )}
    </div>
  );
}

function MultipleChoiceInput({
  question,
  answer,
  onAnswer,
  isSubmitted,
}: {
  question: QuizQuestionType & { type: "multiple-choice" };
  answer: number | undefined;
  onAnswer: (id: string, value: number) => void;
  isSubmitted: boolean;
}) {
  return (
    <div className="ml-4 sm:ml-8 space-y-2">
      {question.options.map((option, i) => {
        const isSelected = answer === i;
        const isCorrectOption = i === question.correctIndex;
        return (
          <label
            key={i}
            className={cn(
              "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors",
              isSubmitted
                ? isCorrectOption
                  ? "border-emerald-400 bg-emerald-50 font-medium text-emerald-800"
                  : isSelected
                    ? "border-red-400 bg-red-50 text-red-800"
                    : "border-transparent bg-white text-muted"
                : isSelected
                  ? "border-blue-400 bg-blue-50 text-blue-800"
                  : "border-slate-200 bg-white text-foreground hover:bg-slate-50"
            )}
          >
            <input
              type="radio"
              name={question.id}
              value={i}
              checked={isSelected}
              onChange={() => onAnswer(question.id, i)}
              disabled={isSubmitted}
              className="h-4 w-4 accent-blue-600"
            />
            <span>{option}</span>
          </label>
        );
      })}
    </div>
  );
}

function TrueFalseInput({
  question,
  answer,
  onAnswer,
  isSubmitted,
}: {
  question: QuizQuestionType & { type: "true-false" };
  answer: boolean | undefined;
  onAnswer: (id: string, value: boolean) => void;
  isSubmitted: boolean;
}) {
  const options = [
    { value: true, label: "Adevărat" },
    { value: false, label: "Fals" },
  ];

  return (
    <div className="ml-4 sm:ml-8 flex gap-3">
      {options.map(({ value, label }) => {
        const isSelected = answer === value;
        const isCorrectOption = value === question.correct;
        return (
          <label
            key={label}
            className={cn(
              "flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors",
              isSubmitted
                ? isCorrectOption
                  ? "border-emerald-400 bg-emerald-50 text-emerald-800"
                  : isSelected
                    ? "border-red-400 bg-red-50 text-red-800"
                    : "border-transparent bg-white text-muted"
                : isSelected
                  ? "border-blue-400 bg-blue-50 text-blue-800"
                  : "border-slate-200 bg-white text-foreground hover:bg-slate-50"
            )}
          >
            <input
              type="radio"
              name={question.id}
              checked={isSelected}
              onChange={() => onAnswer(question.id, value)}
              disabled={isSubmitted}
              className="h-4 w-4 accent-blue-600"
            />
            {label}
          </label>
        );
      })}
    </div>
  );
}

function FillBlankInput({
  question,
  answer,
  onAnswer,
  isSubmitted,
}: {
  question: QuizQuestionType & { type: "fill-blank" };
  answer: string | undefined;
  onAnswer: (id: string, value: string) => void;
  isSubmitted: boolean;
}) {
  const isCorrect = answer !== undefined && checkFillBlank(answer, question.correctAnswers);
  return (
    <div className="ml-4 sm:ml-8">
      <input
        type="text"
        value={answer ?? ""}
        onChange={(e) => onAnswer(question.id, e.target.value)}
        disabled={isSubmitted}
        placeholder="Scrie răspunsul..."
        className={cn(
          "w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition-colors",
          isSubmitted
            ? isCorrect
              ? "border-emerald-400 bg-emerald-50 text-emerald-800"
              : "border-red-400 bg-red-50 text-red-800"
            : "border-slate-200 bg-white text-foreground focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        )}
      />
      {isSubmitted && !isCorrect && (
        <p className="mt-1 text-xs text-muted">
          Răspuns corect: <strong>{question.correctAnswers[0]}</strong>
        </p>
      )}
    </div>
  );
}

// Helper functions
function normalizeDiacritics(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[ăâ]/g, "a")
    .replace(/[îì]/g, "i")
    .replace(/[șş]/g, "s")
    .replace(/[țţ]/g, "t");
}

function checkFillBlank(answer: string, correctAnswers: string[]): boolean {
  const normalized = normalizeDiacritics(answer);
  return correctAnswers.some((ca) => normalizeDiacritics(ca) === normalized);
}

function checkAnswer(
  question: QuizQuestionType,
  answer: string | number | boolean | undefined
): boolean {
  if (answer === undefined) return false;
  switch (question.type) {
    case "multiple-choice":
      return answer === question.correctIndex;
    case "true-false":
      return answer === question.correct;
    case "fill-blank":
      return checkFillBlank(answer as string, question.correctAnswers);
  }
}

export { checkAnswer };
