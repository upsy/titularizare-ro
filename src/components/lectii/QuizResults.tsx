"use client";

import { Trophy, RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface QuizResultsProps {
  score: number;
  total: number;
  percentage: number;
  onRetry: () => void;
  backTo?: { href: string; label: string };
}

export function QuizResults({ score, total, percentage, onRetry, backTo }: QuizResultsProps) {
  const getColor = () => {
    if (percentage >= 80) return "text-emerald-600";
    if (percentage >= 50) return "text-amber-600";
    return "text-red-600";
  };

  const getBg = () => {
    if (percentage >= 80) return "bg-emerald-50 border-emerald-200";
    if (percentage >= 50) return "bg-amber-50 border-amber-200";
    return "bg-red-50 border-red-200";
  };

  const getMessage = () => {
    if (percentage >= 80) return "Excelent! Ai stăpânit bine această temă.";
    if (percentage >= 50) return "Bine! Mai repetă punctele unde ai greșit.";
    return "Mai ai de lucru. Recitește lecția și încearcă din nou.";
  };

  return (
    <div className={cn("rounded-xl border-2 p-6 text-center", getBg())}>
      <Trophy className={cn("mx-auto mb-3 h-10 w-10", getColor())} />
      <p className={cn("mb-1 text-3xl font-bold", getColor())}>{percentage}%</p>
      <p className="mb-2 text-sm text-muted">
        {score} din {total} răspunsuri corecte
      </p>
      <p className="mb-6 font-medium text-foreground">{getMessage()}</p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Button variant="outline" size="sm" onClick={onRetry}>
          <RotateCcw className="h-4 w-4" />
          Reîncearcă
        </Button>
        <Link href={backTo?.href ?? "/programa/educatoare"}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4" />
            {backTo?.label ?? "Înapoi la programă"}
          </Button>
        </Link>
      </div>
    </div>
  );
}
