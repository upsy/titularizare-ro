import { BibliographyItem } from "@/types/programa";

export const bibliografie: BibliographyItem[] = [
  // Limba și Comunicarea
  {
    id: "bib-1",
    title: "Limba română - Manual pentru instituțiile de învățământ",
    author: "Academia Română",
    category: "Limba Română",
    essential: true,
  },
  {
    id: "bib-2",
    title: "Gramatica limbii române",
    author: "Gheorghe Constantinescu-Dobridor",
    publisher: "Editura Didactică și Pedagogică",
    category: "Limba Română",
    essential: true,
  },
  {
    id: "bib-3",
    title: "Dicționar ortografic, ortoepic și morfologic al limbii române",
    author: "Academia Română",
    publisher: "Editura Univers Enciclopedic",
    category: "Limba Română",
    essential: false,
  },
  {
    id: "bib-4",
    title: "Limba și literatura română - Pregătire pentru titularizare",
    author: "Colectiv autori",
    publisher: "Editura Paralela 45",
    category: "Limba Română",
    essential: true,
  },
  // Pedagogie
  {
    id: "bib-8",
    title: "Pedagogie",
    author: "Ioan Cerghit, Ion-Ovidiu Pânișoară",
    publisher: "Editura Polirom",
    category: "Pedagogie",
    essential: true,
  },
  {
    id: "bib-9",
    title: "Psihopedagogie pentru examenele de definitivare și grade didactice",
    author: "Dan Potolea, Ioan Neacșu, Romiță Iucu, Ion-Ovidiu Pânișoară",
    publisher: "Editura Polirom",
    category: "Pedagogie",
    essential: true,
  },
  {
    id: "bib-10",
    title: "Instruire și învățare",
    author: "Ioan Cerghit",
    publisher: "Editura Polirom",
    category: "Pedagogie",
    essential: false,
  },
  {
    id: "bib-11",
    title: "Didactica activităților instructiv-educative în grădiniță",
    author: "Colectiv autori",
    publisher: "Editura Didactică și Pedagogică",
    category: "Pedagogie",
    essential: true,
  },
  {
    id: "bib-12",
    title: "Managementul clasei de elevi",
    author: "Romiță Iucu",
    publisher: "Editura Polirom",
    category: "Pedagogie",
    essential: false,
  },
  // Didactică
  {
    id: "bib-13",
    title: "Metodica activităților de educare a limbajului în învățământul preșcolar",
    author: "Vasile Molan",
    publisher: "Editura Miniped",
    category: "Didactică",
    essential: true,
  },
  {
    id: "bib-14",
    title: "Metodica activităților matematice în grădiniță",
    author: "Colectiv autori",
    publisher: "Editura Didactică și Pedagogică",
    category: "Didactică",
    essential: true,
  },
  // Legislație și documente oficiale
  {
    id: "bib-15",
    title: "Programa școlară pentru disciplinele din învățământul primar",
    author: "Ministerul Educației",
    category: "Legislație",
    essential: true,
  },
  {
    id: "bib-16",
    title: "Curriculum pentru educație timpurie",
    author: "Ministerul Educației",
    category: "Legislație",
    essential: true,
  },
  {
    id: "bib-17",
    title: "Metodologia de organizare și desfășurare a concursului de titularizare",
    author: "Ministerul Educației",
    category: "Legislație",
    essential: true,
  },
];

export const categoriisBibliografie = [
  "Limba Română",
  "Pedagogie",
  "Didactică",
  "Legislație",
] as const;
