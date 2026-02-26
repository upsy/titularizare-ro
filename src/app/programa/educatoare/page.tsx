"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { programaEducatoare } from "@/data/programa-educatoare";
import { ProgramaContent } from "@/components/programa/ProgramaContent";

function EducatoareContent() {
  const searchParams = useSearchParams();
  const materieId = searchParams.get("materie");

  const selectedSubject = materieId
    ? programaEducatoare.find((s) => s.id === materieId)
    : null;

  return selectedSubject ? (
    <ProgramaContent subject={selectedSubject} />
  ) : (
    <div className="space-y-4">
      {programaEducatoare.map((subject) => (
        <ProgramaContent key={subject.id} subject={subject} />
      ))}
    </div>
  );
}

export default function EducatoarePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Link href="/programa" className="mb-6 inline-flex items-center gap-1 text-sm text-muted hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Înapoi la Programa
      </Link>

      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
        Programa Educatoare
      </h1>
      <p className="mb-8 text-muted">
        Parcurge temele și bifează ce ai studiat. Progresul se salvează automat.
      </p>

      <Suspense fallback={<div className="text-muted">Se încarcă...</div>}>
        <EducatoareContent />
      </Suspense>
    </div>
  );
}
