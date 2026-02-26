export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  important?: boolean;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "deadline" | "event" | "exam" | "results";
}

export const documenteNecesare: DocumentItem[] = [
  {
    id: "doc-1",
    title: "Cerere de înscriere",
    description: "Cerere tip, completată cu datele personale și opțiunile pentru posturi",
    important: true,
  },
  {
    id: "doc-2",
    title: "Copie act de identitate",
    description: "Copie CI/BI valabilă la data înscrierii",
    important: true,
  },
  {
    id: "doc-3",
    title: "Certificat de naștere - copie",
    description: "Copie conformă cu originalul",
  },
  {
    id: "doc-4",
    title: "Certificat de căsătorie - copie (dacă este cazul)",
    description: "Pentru schimbarea numelui prin căsătorie",
  },
  {
    id: "doc-5",
    title: "Diplomă de studii - copie legalizată",
    description: "Diploma de absolvire a studiilor care atestă formarea inițială pentru profesia didactică (diplomă de licență sau echivalent)",
    important: true,
  },
  {
    id: "doc-6",
    title: "Foaia matricolă / Supliment la diplomă - copie",
    description: "Document care atestă disciplinele studiate și notele obținute",
    important: true,
  },
  {
    id: "doc-7",
    title: "Certificat/Adeverință de absolvire a modulului pedagogic",
    description: "Nivel I (inițial) minim 30 credite sau Nivel II (aprofundat) 60 credite",
    important: true,
  },
  {
    id: "doc-8",
    title: "Adeverință medicală",
    description: "Adeverință de la medicul de familie care atestă starea de sănătate, apt pentru funcția didactică",
    important: true,
  },
  {
    id: "doc-9",
    title: "Cazier judiciar",
    description: "Cazier judiciar în original sau declarație pe proprie răspundere (cazierul se va depune ulterior)",
    important: true,
  },
  {
    id: "doc-10",
    title: "Declarație pe proprie răspundere",
    description: "Declarație că nu ai fost sancționat disciplinar sau că nu ți-a fost interzisă profesia didactică",
  },
  {
    id: "doc-11",
    title: "Adeverință de vechime (dacă este cazul)",
    description: "Pentru candidații care au activitate didactică anterioară",
  },
  {
    id: "doc-12",
    title: "Avizul/Acordul inspectoratului școlar (dacă este cazul)",
    description: "Pentru candidații care participă la concurs în alt județ decât cel de domiciliu",
  },
];

export const timelineInscriere: TimelineEvent[] = [
  {
    id: "tl-1",
    date: "Aprilie 2026",
    title: "Publicarea metodologiei și a calendarului",
    description: "Ministerul Educației publică metodologia și calendarul concursului de titularizare",
    type: "event",
  },
  {
    id: "tl-2",
    date: "Aprilie - Mai 2026",
    title: "Depunerea dosarelor de înscriere",
    description: "Perioada de depunere a dosarelor la inspectoratele școlare județene. Verifică termenele exacte la ISJ-ul tău!",
    type: "deadline",
  },
  {
    id: "tl-3",
    date: "Mai 2026",
    title: "Verificarea și validarea dosarelor",
    description: "Inspectoratele verifică dosarele depuse și afișează listele candidaților admiși/respinși",
    type: "event",
  },
  {
    id: "tl-4",
    date: "Iunie 2026",
    title: "Publicarea listelor de posturi/catedre vacante",
    description: "Se publică lista posturilor disponibile pe care candidații le pot ocupa",
    type: "event",
  },
  {
    id: "tl-5",
    date: "21 Iulie 2026",
    title: "PROBA SCRISĂ - Examenul de titularizare",
    description: "Proba scrisă a concursului național de titularizare. Durata: 4 ore.",
    type: "exam",
  },
  {
    id: "tl-6",
    date: "Iulie 2026 (după examen)",
    title: "Afișarea rezultatelor",
    description: "Se afișează rezultatele probei scrise. Perioada de contestații.",
    type: "results",
  },
  {
    id: "tl-7",
    date: "August 2026",
    title: "Repartizarea pe posturi",
    description: "Ședințele de repartizare pe posturi/catedre, în ordinea descrescătoare a mediilor",
    type: "event",
  },
];

export const sfaturiInscriere = [
  "Verifică din timp toate documentele necesare și termenele de depunere",
  "Fă copii legalizate din timp - evită aglomerația de ultim moment",
  "Contactează ISJ-ul județean pentru detalii specifice și formulare",
  "Pregătește dosarul cu cel puțin 2 săptămâni înainte de termen",
  "Păstrează copii ale tuturor documentelor depuse",
  "Verifică periodic site-ul ISJ pentru actualizări ale calendarului",
];
