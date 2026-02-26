import Link from "next/link";
import type { Metadata } from "next";
import { GraduationCap, ArrowRight, Clock, ChevronDown, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { courseSessions, type ExamCategory } from "@/data/cursuri";
import { hasLesson, getLessonByTopicId } from "@/data/lectii";

const categoryBadgeVariant: Record<
  ExamCategory,
  "primary" | "secondary" | "warning"
> = {
  "Limba Română": "secondary",
  Pedagogie: "primary",
  Metodica: "warning",
};

export const metadata: Metadata = {
  title: "Cursuri",
  description:
    "Sesiunile de curs pentru pregătirea examenului de titularizare 2026",
};

export default function CursuriPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-3">
          <GraduationCap className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold sm:text-3xl">Cursuri</h1>
        </div>
        <p className="max-w-2xl text-muted">
          Sesiunile de curs, în ordine cronologică. Fiecare sesiune acoperă
          teme din programa de titularizare.
        </p>
      </div>

      <div className="space-y-4">
        {courseSessions.map((session) => {
          const availableTopics = session.topicIds
            .filter((id) => hasLesson(id))
            .map((id) => ({ id, lesson: getLessonByTopicId(id)! }));
          const hasAvailableLesson =
            session.status === "complete" && availableTopics.length > 0;
          const isMultiLesson = availableTopics.length > 1;

          return (
            <Card
              key={session.id}
              className={`border-l-4 ${
                session.status === "complete"
                  ? "border-l-emerald-500"
                  : "border-l-slate-300"
              }`}
            >
              <CardContent>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-muted">
                        {session.displayDate}
                      </span>
                      <Badge variant={categoryBadgeVariant[session.category]}>
                        {session.category}
                      </Badge>
                      <Badge variant="default">{session.examSubject}</Badge>
                      {hasAvailableLesson ? (
                        <Badge variant="success">
                          {isMultiLesson
                            ? `${availableTopics.length} lecții`
                            : "Lecție disponibilă"}
                        </Badge>
                      ) : (
                        <Badge variant="default">
                          <Clock className="mr-1 h-3 w-3" />
                          În curând
                        </Badge>
                      )}
                    </div>
                    <h2 className="text-lg font-semibold text-foreground">
                      {session.title}
                    </h2>

                    {isMultiLesson ? (
                      <details className="mt-2 group">
                        <summary className="cursor-pointer text-sm text-muted hover:text-foreground transition-colors flex items-center gap-1">
                          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                          {session.description}
                        </summary>
                        <ul className="mt-3 space-y-2 pl-5">
                          {availableTopics.map(({ id, lesson }) => (
                            <li key={id}>
                              <Link
                                href={`/lectii/${id}?from=cursuri`}
                                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm transition-colors hover:border-primary hover:bg-blue-50"
                              >
                                <BookOpen className="h-4 w-4 shrink-0 text-primary" />
                                <span className="font-medium text-foreground">
                                  {lesson.title}
                                </span>
                                <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0 text-muted" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <p className="mt-1 text-sm text-muted">
                        {session.description}
                      </p>
                    )}
                  </div>

                  {hasAvailableLesson && !isMultiLesson && (
                    <Link href={`/lectii/${availableTopics[0].id}?from=cursuri`} className="shrink-0">
                      <Button size="sm">
                        Învață <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
