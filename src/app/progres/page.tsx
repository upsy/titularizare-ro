"use client";

import {
  BarChart3,
  CheckCircle2,
  Flame,
  Clock,
  BookOpen,
  Target,
  TrendingUp,
  ClipboardCheck,
  RotateCcw,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { useProgress } from "@/hooks/useProgress";
import { useQuizProgress } from "@/hooks/useQuizProgress";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";
import { programaEducatoare } from "@/data/programa-educatoare";
import { getDaysUntil, getPercentage } from "@/lib/utils";
import { EXAM_DATE } from "@/lib/constants";

export default function ProgresPage() {
  const { totalCompleted, streak, getSubjectProgress, progress } = useProgress();
  const { totalQuizStats } = useQuizProgress();
  const quizStats = totalQuizStats();
  const { totalTracked, totalReviews, boxDistribution, dueQuestions } = useSpacedRepetition();

  const allSubjects = [...programaEducatoare];
  const totalTopics = allSubjects.reduce(
    (acc, s) => acc + s.chapters.reduce((a, c) => a + c.topics.length, 0),
    0
  );
  const overallPercentage = getPercentage(totalCompleted, totalTopics);
  const daysLeft = getDaysUntil(EXAM_DATE);

  const educatoareProgress = getSubjectProgress(programaEducatoare);

  // Calculate recommended pace
  const topicsPerDay = daysLeft > 0 ? ((totalTopics - totalCompleted) / daysLeft).toFixed(1) : "0";

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold sm:text-3xl">Progresul Tău</h1>
        </div>
        <p className="text-muted max-w-2xl">
          Urmărește progresul în studiu. Toate datele sunt salvate local în browser.
        </p>
      </div>

      {/* Stats grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="rounded-lg bg-blue-100 p-3">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{overallPercentage}%</p>
              <p className="text-sm text-muted">progres total</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="rounded-lg bg-emerald-100 p-3">
              <CheckCircle2 className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-2xl font-bold">{totalCompleted}</p>
              <p className="text-sm text-muted">din {totalTopics} teme</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="rounded-lg bg-amber-100 p-3">
              <Flame className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{streak}</p>
              <p className="text-sm text-muted">zile consecutive</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4">
            <div className="rounded-lg bg-purple-100 p-3">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{topicsPerDay}</p>
              <p className="text-sm text-muted">teme/zi recomandat</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Overall progress bar */}
      <Card className="mb-8">
        <CardContent>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Progres General</h2>
            <span className="text-sm font-medium text-muted">{totalCompleted}/{totalTopics}</span>
          </div>
          <ProgressBar value={totalCompleted} max={totalTopics} size="lg" color="primary" showLabel />
          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <Clock className="h-4 w-4" />
            <span>{daysLeft} zile rămase până la examen</span>
          </div>
        </CardContent>
      </Card>

      {/* Per subject progress */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <BookOpen className="h-5 w-5 text-emerald-600" />
          Educatoare
        </h2>
        <div className="space-y-4">
          {educatoareProgress.map((sp) => (
            <Card key={sp.subjectId}>
              <CardContent>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{sp.subjectTitle}</h3>
                  <Badge variant={sp.percentage >= 100 ? "success" : sp.percentage > 50 ? "primary" : "default"}>
                    {sp.percentage}%
                  </Badge>
                </div>
                <ProgressBar
                  value={sp.completedTopics}
                  max={sp.totalTopics}
                  size="md"
                  color={sp.percentage >= 100 ? "success" : "primary"}
                />
                <p className="mt-1 text-xs text-muted">{sp.completedTopics}/{sp.totalTopics} teme</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quiz stats */}
      {quizStats.attempted > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <ClipboardCheck className="h-5 w-5 text-purple-600" />
            Rezultate Quiz-uri
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="rounded-lg bg-purple-100 p-3">
                  <ClipboardCheck className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{quizStats.attempted}</p>
                  <p className="text-sm text-muted">quiz-uri completate</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Target className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{quizStats.avgScore}%</p>
                  <p className="text-sm text-muted">scor mediu</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Spaced Repetition Stats */}
      {totalTracked > 0 && (
        <section className="mt-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <RotateCcw className="h-5 w-5 text-violet-600" />
            Revizuire Spațiată
          </h2>
          <div className="grid gap-4 sm:grid-cols-3 mb-4">
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="rounded-lg bg-violet-100 p-3">
                  <RotateCcw className="h-5 w-5 text-violet-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalTracked}</p>
                  <p className="text-sm text-muted">întrebări în sistem</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-100 p-3">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalReviews}</p>
                  <p className="text-sm text-muted">revizuiri totale</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-4">
                <div className="rounded-lg bg-amber-100 p-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{dueQuestions.length}</p>
                  <p className="text-sm text-muted">de revizuit azi</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Box distribution */}
          <Card>
            <CardContent>
              <h3 className="mb-3 font-medium text-foreground">Distribuție pe nivele</h3>
              <div className="flex items-end gap-2 h-20">
                {([1, 2, 3, 4, 5] as const).map((box) => {
                  const count = boxDistribution[box] || 0;
                  const maxCount = Math.max(...Object.values(boxDistribution), 1);
                  const height = count > 0 ? Math.max((count / maxCount) * 100, 10) : 0;
                  const colors = ["", "bg-red-400", "bg-orange-400", "bg-amber-400", "bg-blue-400", "bg-emerald-400"];
                  const labels = ["", "1 zi", "3 zile", "7 zile", "14 zile", "30 zile"];
                  return (
                    <div key={box} className="flex flex-1 flex-col items-center gap-1">
                      <span className="text-xs font-medium text-foreground">{count}</span>
                      <div
                        className={`w-full rounded-t ${colors[box]}`}
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-[10px] text-muted">{labels[box]}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Study info */}
      {progress?.startDate && (
        <div className="mt-8 text-center text-sm text-muted">
          Progres salvat local în browser. Început pe: {new Date(progress.startDate).toLocaleDateString("ro-RO")}
        </div>
      )}
    </div>
  );
}
