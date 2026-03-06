"use client";

import Link from "next/link";
import {
  Calendar,
  BookOpen,
  FileText,
  BarChart3,
  ArrowRight,
  Flame,
  CheckCircle2,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Countdown } from "@/components/ui/Countdown";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { useProgress } from "@/hooks/useProgress";
import { programaEducatoare } from "@/data/programa-educatoare";
import { dateImportante } from "@/data/date-importante";
import { courseSessions } from "@/data/cursuri";
import { hasLesson } from "@/data/lectii";
import { formatDate, getDaysUntil } from "@/lib/utils";
import { EXAM_DATE } from "@/lib/constants";
import { DueReviewWidget } from "@/components/review/DueReviewWidget";

export default function HomePage() {
  const { totalCompleted, streak, getSubjectProgress } = useProgress();

  const allSubjects = [...programaEducatoare];
  const totalTopics = allSubjects.reduce(
    (acc, s) => acc + s.chapters.reduce((a, c) => a + c.topics.length, 0),
    0
  );
  const overallPercentage = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;

  const daysLeft = getDaysUntil(EXAM_DATE);

  const now = new Date();

  // Recent course sessions (latest 3)
  const recentSessions = [...courseSessions]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  // Upcoming important dates
  const upcomingDates = dateImportante
    .filter((d) => new Date(d.date) > now)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Hero Section */}
      <section className="mb-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-10 text-white sm:px-10 sm:py-14">
        <div className="mb-2 text-sm font-medium text-blue-200">
          Examen Titularizare - {formatDate(EXAM_DATE)}
        </div>
        <h1 className="mb-3 text-3xl font-bold sm:text-4xl">
          Ghid de Pregătire Titularizare 2026
        </h1>
        <p className="mb-8 max-w-2xl text-blue-100">
          Educatoare — Cursuri, programa de examen, resurse de studiu și
          tracking al progresului tău.
        </p>
        <Countdown />
      </section>

      {/* Quick Stats */}
      <section className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="rounded-lg bg-blue-100 p-3">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{daysLeft}</p>
              <p className="text-sm text-muted">zile rămase</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="rounded-lg bg-emerald-100 p-3">
              <CheckCircle2 className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{totalCompleted}</p>
              <p className="text-sm text-muted">teme completate</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="rounded-lg bg-amber-100 p-3">
              <Flame className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{streak}</p>
              <p className="text-sm text-muted">zile consecutive</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="rounded-lg bg-purple-100 p-3">
              <BarChart3 className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{overallPercentage}%</p>
              <p className="text-sm text-muted">progres total</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Due Review Widget */}
      <section className="mb-10">
        <DueReviewWidget />
      </section>

      {/* Progress Overview */}
      <section className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Progres General</h2>
          <Link href="/progres" className="text-sm font-medium text-primary hover:underline">
            Vezi detalii →
          </Link>
        </div>
        <Card>
          <CardContent>
            <div className="mb-4">
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-muted">Progres total</span>
                <span className="font-medium">{totalCompleted} / {totalTopics} teme</span>
              </div>
              <ProgressBar value={totalCompleted} max={totalTopics} size="lg" color="primary" />
            </div>
            {getSubjectProgress(programaEducatoare).map((sp) => (
              <div key={sp.subjectId} className="mb-3 last:mb-0">
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-muted">{sp.subjectTitle}</span>
                  <span className="font-medium">{sp.percentage}%</span>
                </div>
                <ProgressBar
                  value={sp.completedTopics}
                  max={sp.totalTopics}
                  size="sm"
                  color={sp.percentage >= 100 ? "success" : "primary"}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Quick Links + Important Dates */}
      <div className="mb-10 grid gap-6 lg:grid-cols-2">
        {/* Quick Links */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Navigare Rapidă</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { href: "/cursuri", icon: Calendar, label: "Cursuri", desc: "Sesiunile de curs", color: "bg-blue-100 text-blue-600" },
              { href: "/programa", icon: BookOpen, label: "Programa de Examen", desc: "Teme și capitole", color: "bg-emerald-100 text-emerald-600" },
              { href: "/inscriere", icon: FileText, label: "Info Înscriere", desc: "Documente și termene", color: "bg-amber-100 text-amber-600" },
              { href: "/resurse", icon: BookOpen, label: "Resurse & Bibliografie", desc: "Materiale de studiu", color: "bg-purple-100 text-purple-600" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <Card hover className="h-full">
                  <CardContent className="flex items-start gap-3">
                    <div className={`rounded-lg p-2 ${item.color}`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Important Dates */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Date Importante</h2>
          <Card>
            <CardContent className="space-y-4">
              {upcomingDates.map((d) => (
                <div key={d.id} className="flex items-start gap-3">
                  <div className={`mt-0.5 rounded-lg p-2 ${
                    d.type === "exam" ? "bg-red-100" :
                    d.type === "deadline" ? "bg-amber-100" : "bg-blue-100"
                  }`}>
                    {d.type === "exam" ? (
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                    ) : d.type === "deadline" ? (
                      <Clock className="h-4 w-4 text-amber-600" />
                    ) : (
                      <Calendar className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-foreground">{d.title}</p>
                      {d.urgent && <Badge variant="danger">Important</Badge>}
                    </div>
                    <p className="text-sm text-muted">{d.date}</p>
                  </div>
                </div>
              ))}
              <Link href="/inscriere" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Toate detaliile <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Ultimele Cursuri */}
      {recentSessions.length > 0 && (
        <section className="mb-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Ultimele Cursuri</h2>
            <Link href="/cursuri" className="text-sm font-medium text-primary hover:underline">
              Toate cursurile →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {recentSessions.map((session) => {
              const firstLessonId = session.topicIds.find((id) => hasLesson(id));
              const hasAvailableLesson = session.status === "complete" && !!firstLessonId;

              return (
                <Card key={session.id} className={`border-l-4 ${hasAvailableLesson ? "border-l-emerald-500" : "border-l-slate-300"}`}>
                  <CardContent>
                    <p className="mb-1 text-xs font-medium text-muted">{session.displayDate}</p>
                    <p className="font-medium text-foreground">{session.title}</p>
                    <p className="mt-1 text-sm text-muted line-clamp-2">{session.description}</p>
                    {hasAvailableLesson && firstLessonId && (
                      <Link href={`/lectii/${firstLessonId}`} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                        Învață <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                    {!hasAvailableLesson && (
                      <Badge variant="default" className="mt-3">În curând</Badge>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
