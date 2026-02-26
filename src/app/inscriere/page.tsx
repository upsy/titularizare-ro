"use client";

import {
  FileText,
  CheckCircle2,
  Circle,
  Clock,
  AlertTriangle,
  Trophy,
  CalendarDays,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Checkbox } from "@/components/ui/Checkbox";
import { useProgress } from "@/hooks/useProgress";
import { documenteNecesare, timelineInscriere, sfaturiInscriere } from "@/data/inscriere";

const timelineIcons = {
  deadline: Clock,
  event: CalendarDays,
  exam: AlertTriangle,
  results: Trophy,
};

const timelineColors = {
  deadline: "bg-amber-100 text-amber-600 border-amber-300",
  event: "bg-blue-100 text-blue-600 border-blue-300",
  exam: "bg-red-100 text-red-600 border-red-300",
  results: "bg-emerald-100 text-emerald-600 border-emerald-300",
};

export default function InscrierePage() {
  const { isDocumentDone, toggleDocument } = useProgress();

  const docsCompleted = documenteNecesare.filter((d) => isDocumentDone(d.id)).length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <FileText className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold sm:text-3xl">Informații Înscriere</h1>
        </div>
        <p className="text-muted max-w-2xl">
          Tot ce trebuie să știi despre procesul de înscriere la concursul de titularizare 2026:
          documente necesare, termene și calendar.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Documents checklist */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Documente Necesare</h2>
            <Badge variant={docsCompleted === documenteNecesare.length ? "success" : "primary"}>
              {docsCompleted}/{documenteNecesare.length} pregătite
            </Badge>
          </div>
          <Card>
            <CardContent className="space-y-3">
              {documenteNecesare.map((doc) => {
                const done = isDocumentDone(doc.id);
                return (
                  <label
                    key={doc.id}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-slate-50"
                  >
                    <Checkbox
                      checked={done}
                      onCheckedChange={() => toggleDocument(doc.id)}
                      className="mt-0.5"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${done ? "text-muted line-through" : "text-foreground"}`}>
                          {doc.title}
                        </span>
                        {doc.important && <Badge variant="danger">Obligatoriu</Badge>}
                      </div>
                      <p className={`mt-0.5 text-sm ${done ? "text-muted/60" : "text-muted"}`}>
                        {doc.description}
                      </p>
                    </div>
                    {done ? (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                    ) : (
                      <Circle className="h-5 w-5 shrink-0 text-slate-300" />
                    )}
                  </label>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Tips sidebar */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Sfaturi Utile</h2>
          <Card className="bg-amber-50/50">
            <CardContent className="space-y-3">
              {sfaturiInscriere.map((sfat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-sm text-foreground">{sfat}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Timeline */}
      <section className="mt-10">
        <h2 className="mb-6 text-xl font-semibold">Calendar Înscriere și Examen</h2>
        <div className="relative">
          {/* Line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border sm:left-6" />

          <div className="space-y-6">
            {timelineInscriere.map((event) => {
              const Icon = timelineIcons[event.type];
              return (
                <div key={event.id} className="relative flex gap-4 sm:gap-5">
                  <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 sm:h-12 sm:w-12 ${timelineColors[event.type]}`}>
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="pb-2">
                    <p className="text-sm font-medium text-muted">{event.date}</p>
                    <h3 className="text-base font-semibold text-foreground">{event.title}</h3>
                    <p className="mt-0.5 text-sm text-muted">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
