"use client";

import Link from "next/link";
import { RotateCcw, CalendarCheck, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";

export function DueReviewWidget() {
  const { dueQuestions, totalTracked, nextReview } = useSpacedRepetition();

  // No questions tracked yet
  if (totalTracked === 0) {
    return (
      <Card>
        <CardContent>
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-lg bg-violet-100 p-2">
              <RotateCcw className="h-5 w-5 text-violet-600" />
            </div>
            <h3 className="font-semibold text-foreground">Revizuire Spațiată</h3>
          </div>
          <p className="text-sm text-muted mb-3">
            Completează primul quiz pentru a activa sistemul de revizuire spațiată.
          </p>
          <Link href="/programa">
            <Button variant="outline" size="sm">
              <BookOpen className="h-3.5 w-3.5" />
              Vezi lecțiile
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  // Nothing due
  if (dueQuestions.length === 0) {
    const nextDate = nextReview
      ? new Date(nextReview).toLocaleDateString("ro-RO", {
          day: "numeric",
          month: "long",
        })
      : null;

    return (
      <Card>
        <CardContent>
          <div className="flex items-center gap-3 mb-3">
            <div className="rounded-lg bg-emerald-100 p-2">
              <CalendarCheck className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="font-semibold text-foreground">Ești la zi!</h3>
          </div>
          <p className="text-sm text-muted">
            {nextDate
              ? `Următoarea revizuire: ${nextDate}`
              : "Toate întrebările sunt revizuite."}
          </p>
        </CardContent>
      </Card>
    );
  }

  // Group by topic
  const byTopic = new Map<string, number>();
  for (const q of dueQuestions) {
    byTopic.set(q.topicId, (byTopic.get(q.topicId) || 0) + 1);
  }

  return (
    <Card className="border-l-4 border-l-violet-500">
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-violet-100 p-2">
              <RotateCcw className="h-5 w-5 text-violet-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">De revizuit azi</h3>
              <p className="text-sm text-muted">
                {dueQuestions.length} întrebări din {byTopic.size} {byTopic.size === 1 ? "lecție" : "lecții"}
              </p>
            </div>
          </div>
          <Badge variant="primary" className="text-lg px-3 py-1">
            {dueQuestions.length}
          </Badge>
        </div>

        <Link href="/review">
          <Button variant="primary" size="md" className="w-full">
            Începe revizuirea
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
