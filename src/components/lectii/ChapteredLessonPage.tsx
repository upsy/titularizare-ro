"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUp,
  Clock,
  Target,
  Check,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  FileText,
} from "lucide-react";
import { Lesson } from "@/types/lectii";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { cn } from "@/lib/utils";
import { ChapterSection } from "./ChapterSection";
import { QuizVariantSection } from "./QuizVariantSection";
import { QuizSection } from "./QuizSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";

interface ChapteredLessonPageProps {
  lesson: Lesson;
  backTo: { href: string; label: string };
}

export function ChapteredLessonPage({ lesson, backTo }: ChapteredLessonPageProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const stepperRef = useRef<HTMLDivElement>(null);
  const chapters = lesson.chapters!;

  // Total steps = chapters + 1 (quiz step at the end)
  const totalSteps = chapters.length + 1;
  const quizStepIndex = chapters.length;
  const isOnQuiz = currentStep === quizStepIndex;

  // Chapter progress — persisted
  const [completedChapters, setCompletedChapters, isProgressLoaded] = useLocalStorage<string[]>(
    `titularizare-chapter-progress-${lesson.topicId}`,
    []
  );

  const isChapterDone = useCallback(
    (index: number) => completedChapters.includes(`chapter-${index}`),
    [completedChapters]
  );

  const markChapterDone = useCallback(
    (index: number) => {
      const id = `chapter-${index}`;
      setCompletedChapters((prev) => (prev.includes(id) ? prev : [...prev, id]));
    },
    [setCompletedChapters]
  );

  // Scroll listener for back-to-top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToStep = useCallback((index: number) => {
    setCurrentStep(index);
    stepperRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Navigation */}
      <div className="mb-6">
        <Link href={backTo.href}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
            {backTo.label}
          </Button>
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8">
        <h1 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
          {lesson.title}
        </h1>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Badge variant="primary">
            <Clock className="mr-1 h-3 w-3" />
            {lesson.duration}
          </Badge>
          <Badge variant="default">Lecție</Badge>
          <Badge variant="secondary">{chapters.length} capitole</Badge>
        </div>

        {/* Objectives — border-l accent, no card */}
        <div className="border-l-3 border-blue-500 pl-4 py-3">
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-5 w-5 text-blue-600" />
            <h2 className="font-semibold text-foreground">Obiective</h2>
          </div>
          <ul className="space-y-1.5">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Transcript accordion */}
        {lesson.transcript && (
          <div className="mt-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="transcript" className="rounded-lg border border-slate-200">
                <AccordionTrigger className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-800">
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Transcriere curs (notițe originale)
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  <div className="max-h-96 overflow-y-auto rounded bg-slate-50 p-4">
                    <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed text-slate-700">
                      {lesson.transcript}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </header>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Progres lecție</span>
          <span className="text-sm text-muted">
            {completedChapters.length}/{chapters.length} capitole
          </span>
        </div>
        <ProgressBar
          value={completedChapters.length}
          max={chapters.length}
          color={completedChapters.length === chapters.length ? "success" : "primary"}
        />
      </div>

      {/* Stepper — chapters + quiz as final step */}
      <div ref={stepperRef} className="mb-8 scroll-mt-4 overflow-x-auto">
        <div className="flex items-center justify-center gap-1">
          {chapters.map((ch, i) => {
            const done = isChapterDone(i);
            const active = i === currentStep;
            return (
              <button
                key={ch.id}
                onClick={() => goToStep(i)}
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all",
                  done && !active && "bg-emerald-500 text-white",
                  active && "bg-blue-600 text-white ring-2 ring-blue-300 ring-offset-2",
                  !done && !active && "border-2 border-slate-300 text-slate-400 hover:border-blue-400 hover:text-blue-500"
                )}
                aria-label={`Capitolul ${i + 1}: ${ch.title}`}
                aria-current={active ? "step" : undefined}
              >
                {done && !active ? (
                  <Check className="h-4 w-4" />
                ) : (
                  i + 1
                )}
              </button>
            );
          })}
          {/* Quiz step */}
          <button
            onClick={() => goToStep(quizStepIndex)}
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all",
              isOnQuiz && "bg-violet-600 text-white ring-2 ring-violet-300 ring-offset-2",
              !isOnQuiz && "border-2 border-slate-300 text-slate-400 hover:border-violet-400 hover:text-violet-500"
            )}
            aria-label="Evaluare finală"
            aria-current={isOnQuiz ? "step" : undefined}
          >
            <ClipboardCheck className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Step Content */}
      {isProgressLoaded ? (
        <div>
          {isOnQuiz ? (
            /* Quiz step */
            <div>
              {lesson.quizVariants && lesson.quizVariants.length > 0 ? (
                <QuizVariantSection
                  topicId={lesson.topicId}
                  variants={lesson.quizVariants}
                  backTo={backTo}
                />
              ) : (
                <QuizSection quiz={lesson.quiz} backTo={backTo} />
              )}

              {/* Back button */}
              <div className="mt-8 flex items-center border-t border-border pt-6">
                <Button
                  variant="ghost"
                  onClick={() => goToStep(currentStep - 1)}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Anterior
                </Button>
              </div>
            </div>
          ) : (
            /* Chapter step */
            <div>
              {/* Chapter heading */}
              <div className="mb-6 border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <span className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white",
                    isChapterDone(currentStep) ? "bg-emerald-500" : "bg-blue-600"
                  )}>
                    {isChapterDone(currentStep) ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      currentStep + 1
                    )}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-foreground sm:text-xl">
                      {chapters[currentStep].title}
                    </h2>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="default">
                        <Clock className="mr-1 h-3 w-3" />
                        {chapters[currentStep].duration}
                      </Badge>
                      {isChapterDone(currentStep) && (
                        <Badge variant="success">Completat</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter content */}
              <ChapterSection
                chapter={chapters[currentStep]}
                onMiniQuizComplete={() => markChapterDone(currentStep)}
              />

              {/* Prev / Next navigation */}
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                {!isFirst ? (
                  <Button
                    variant="ghost"
                    onClick={() => goToStep(currentStep - 1)}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Anterior
                  </Button>
                ) : (
                  <div />
                )}

                <Button
                  variant="primary"
                  onClick={() => goToStep(currentStep + 1)}
                >
                  {currentStep === chapters.length - 1 ? "Evaluare finală" : "Următorul"}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        // Skeleton placeholder while localStorage loads
        <div className="space-y-4">
          <div className="h-12 animate-pulse rounded-lg bg-slate-100" />
          <div className="h-64 animate-pulse rounded-lg bg-slate-50" />
        </div>
      )}

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-opacity hover:bg-blue-700 sm:h-12 sm:w-12"
          aria-label="Înapoi sus"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
