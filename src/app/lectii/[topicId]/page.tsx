"use client";

import { Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { getLessonByTopicId } from "@/data/lectii";
import { LessonPage } from "@/components/lectii/LessonPage";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

function LectiiContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const topicId = params.topicId as string;
  const from = searchParams.get("from");
  const lesson = getLessonByTopicId(topicId);

  const backTo =
    from === "cursuri"
      ? { href: "/cursuri", label: "Înapoi la curs" }
      : { href: "/programa/educatoare", label: "Înapoi la programă" };

  if (!lesson) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted" />
        <h1 className="mb-2 text-2xl font-bold text-foreground">Lecția nu este disponibilă</h1>
        <p className="mb-6 text-muted">
          Conținutul pentru această temă nu a fost încă adăugat. Revino în curând!
        </p>
        <Link href={backTo.href}>
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4" />
            {backTo.label}
          </Button>
        </Link>
      </div>
    );
  }

  return <LessonPage lesson={lesson} backTo={backTo} />;
}

export default function LectiiPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <div className="h-8 w-48 animate-pulse rounded bg-slate-100" />
          <div className="mt-6 h-64 animate-pulse rounded-lg bg-slate-50" />
        </div>
      }
    >
      <LectiiContent />
    </Suspense>
  );
}
