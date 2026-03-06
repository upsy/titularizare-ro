import { ReviewSummaryData } from "@/types/spaced-repetition";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, TrendingUp, TrendingDown, Star } from "lucide-react";
import Link from "next/link";

interface ReviewSummaryProps {
  summary: ReviewSummaryData;
}

export function ReviewSummary({ summary }: ReviewSummaryProps) {
  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div className="text-center">
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-emerald-500" />
        <h2 className="text-xl font-bold text-foreground">Sesiune completă!</h2>
        <p className="mt-1 text-muted">
          Ai revizuit {summary.totalReviewed} întrebări
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardContent className="text-center py-4">
            <TrendingUp className="mx-auto mb-1 h-5 w-5 text-emerald-500" />
            <p className="text-2xl font-bold text-foreground">{summary.advanced}</p>
            <p className="text-xs text-muted">Avansate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-4">
            <TrendingDown className="mx-auto mb-1 h-5 w-5 text-red-500" />
            <p className="text-2xl font-bold text-foreground">{summary.demoted}</p>
            <p className="text-xs text-muted">Revenite</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center py-4">
            <Star className="mx-auto mb-1 h-5 w-5 text-amber-500" />
            <p className="text-2xl font-bold text-foreground">{summary.mastered}</p>
            <p className="text-xs text-muted">Stăpânite</p>
          </CardContent>
        </Card>
      </div>

      {/* Per-topic breakdown */}
      {Object.keys(summary.byTopic).length > 0 && (
        <Card>
          <CardContent>
            <h3 className="mb-3 font-medium text-foreground">Pe lecție</h3>
            <div className="space-y-2">
              {Object.entries(summary.byTopic).map(([topicId, data]) => (
                <div key={topicId} className="flex items-center justify-between text-sm">
                  <span className="text-muted truncate max-w-[200px]">{topicId}</span>
                  <Badge variant={data.correct === data.reviewed ? "success" : "default"}>
                    {data.correct}/{data.reviewed}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex gap-3 justify-center">
        <Link href="/">
          <Button variant="outline">Acasă</Button>
        </Link>
        <Link href="/flashcards">
          <Button variant="primary">Flashcards</Button>
        </Link>
      </div>
    </div>
  );
}
