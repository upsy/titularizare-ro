import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { programaEducatoare } from "@/data/programa-educatoare";

export const metadata: Metadata = {
  title: "Programa de Examen",
  description: "Programa completă pentru examenul de titularizare 2026 - Educatoare",
};

export default function ProgramaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold sm:text-3xl">Programa de Examen</h1>
        </div>
        <p className="text-muted max-w-2xl">
          Programa completă pentru concursul de titularizare 2026 — Educatoare.
          Parcurge temele cu checkbox-uri pentru a-ți urmări progresul.
        </p>
      </div>

      {/* Educatoare */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Educatoare / Educator Puericultor</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programaEducatoare.map((subject) => {
            const topicCount = subject.chapters.reduce((a, c) => a + c.topics.length, 0);
            return (
              <Link key={subject.id} href={`/programa/educatoare?materie=${subject.id}`}>
                <Card hover className="h-full">
                  <CardContent>
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{subject.shortTitle}</h3>
                      <Badge variant="success">{topicCount} teme</Badge>
                    </div>
                    <p className="mb-3 text-sm text-muted">{subject.title}</p>
                    <div className="space-y-1">
                      {subject.chapters.slice(0, 3).map((ch) => (
                        <p key={ch.id} className="text-xs text-muted">• {ch.title}</p>
                      ))}
                      {subject.chapters.length > 3 && (
                        <p className="text-xs text-muted">+ {subject.chapters.length - 3} capitole</p>
                      )}
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
                      Deschide <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
