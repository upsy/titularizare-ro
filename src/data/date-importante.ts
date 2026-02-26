export interface ImportantDate {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "exam" | "deadline" | "milestone" | "info";
  urgent?: boolean;
}

export const dateImportante: ImportantDate[] = [
  {
    id: "di-1",
    date: "2026-04-15",
    title: "Început perioadă înscriere (estimativ)",
    description: "Perioada de depunere a dosarelor la inspectoratele școlare. Verifică data exactă!",
    type: "deadline",
    urgent: true,
  },
  {
    id: "di-2",
    date: "2026-05-15",
    title: "Termen limită depunere dosar (estimativ)",
    description: "Ultimul termen pentru depunerea dosarului de înscriere la ISJ",
    type: "deadline",
    urgent: true,
  },
  {
    id: "di-3",
    date: "2026-06-01",
    title: "Publicare posturi vacante (estimativ)",
    description: "Lista posturilor/catedrelor vacante disponibile pentru repartizare",
    type: "info",
  },
  {
    id: "di-4",
    date: "2026-07-21",
    title: "EXAMEN TITULARIZARE - Proba scrisă",
    description: "Ziua examenului de titularizare! Proba scrisă, durata 4 ore.",
    type: "exam",
    urgent: true,
  },
  {
    id: "di-5",
    date: "2026-07-28",
    title: "Afișare rezultate (estimativ)",
    description: "Afișarea rezultatelor probei scrise și deschiderea perioadei de contestații",
    type: "info",
  },
  {
    id: "di-6",
    date: "2026-08-10",
    title: "Repartizare pe posturi (estimativ)",
    description: "Ședințele de repartizare pe posturi în ordinea mediilor",
    type: "milestone",
  },
];
