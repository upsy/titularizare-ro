"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, Clock, Target, Lightbulb, BookOpen, Star, ListOrdered } from "lucide-react";
import { Lesson } from "@/types/lectii";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QuizSection } from "./QuizSection";
import { ChapteredLessonPage } from "./ChapteredLessonPage";
import { renderSectionContent, renderFormattedText } from "./formatters";
import { cn } from "@/lib/utils";

export interface BackTo {
  href: string;
  label: string;
}

interface LessonPageProps {
  lesson: Lesson;
  backTo?: BackTo;
}

export function LessonPage({ lesson, backTo }: LessonPageProps) {
  const hasChapters = lesson.chapters && lesson.chapters.length > 0;
  const back = backTo ?? { href: "/programa/educatoare", label: "Înapoi la programă" };
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showToc = lesson.theory.length > 4;

  if (hasChapters) {
    return <ChapteredLessonPage lesson={lesson} backTo={back} />;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Navigation */}
      <div className="mb-6">
        <Link href={back.href}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
            {back.label}
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
        </div>

        {/* Objectives */}
        <Card className="border-l-4 border-l-blue-500">
          <CardContent>
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
          </CardContent>
        </Card>
      </header>

      {/* Table of Contents */}
      {showToc && (
        <nav className="mb-8">
          <Card className="border-l-4 border-l-primary">
            <CardContent>
              <div className="flex items-center gap-2 mb-3">
                <ListOrdered className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">Cuprins</h2>
              </div>
              <ol className="space-y-1.5">
                {lesson.theory.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="flex items-start gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      <span className="shrink-0 font-medium text-muted">{i + 1}.</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </nav>
      )}

      {/* Theory Sections */}
      <section className="mb-10 space-y-6">
        {lesson.theory.map((section, i) => (
          <div key={i} id={`section-${i}`} className="scroll-mt-20">
            <div className="mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
            </div>
            <div className="prose-sm rounded-xl border border-border bg-card p-5">
              {renderSectionContent(section)}
            </div>
          </div>
        ))}
      </section>

      {/* Examples */}
      {lesson.examples.length > 0 && (
        <section className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <h2 className="text-lg font-semibold text-foreground">Exemple Practice</h2>
          </div>
          <div className="space-y-4">
            {lesson.examples.map((example, i) => (
              <Card key={i} className="border-l-4 border-l-amber-400">
                <CardContent>
                  <h3 className="mb-2 font-semibold text-foreground">{example.title}</h3>
                  <div className="text-sm leading-relaxed text-muted">
                    {example.description.split("\n\n").map((paragraph, j) => (
                      <p key={j} className={cn(j > 0 && "mt-2")}>
                        {renderFormattedText(paragraph)}
                      </p>
                    ))}
                  </div>
                  {example.context && (
                    <p className="mt-2 text-xs italic text-muted">{example.context}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Key Points */}
      {lesson.keyPoints.length > 0 && (
        <section className="mb-10">
          <div className="mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-emerald-500" />
            <h2 className="text-lg font-semibold text-foreground">Puncte Cheie</h2>
          </div>
          <Card className="border-l-4 border-l-emerald-500">
            <CardContent>
              <ul className="space-y-2">
                {lesson.keyPoints.map((kp, i) => (
                  <li
                    key={i}
                    className={cn(
                      "flex items-start gap-2 text-sm",
                      kp.important ? "font-medium text-foreground" : "text-muted"
                    )}
                  >
                    <span className={cn(
                      "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                      kp.important ? "bg-emerald-500" : "bg-slate-300"
                    )} />
                    <span>{renderFormattedText(kp.text)}</span>
                    {kp.important && (
                      <Badge variant="success" className="ml-1 shrink-0">Important</Badge>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Quiz */}
      <QuizSection quiz={lesson.quiz} backTo={back} />

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

