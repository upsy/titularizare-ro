export type ExamCategory =
  | "Limba Română"
  | "Pedagogie"
  | "Metodica";

export type ExamSubject =
  | "Subiectul I"   // Limba și Literatura Română (30p: 15p gramatică + 15p eseu literar)
  | "Subiectul II"  // Pedagogia Preșcolară (30p: eseu argumentativ 1-2 pagini)
  | "Subiectul III"; // Metodica activităților instructiv-educative (30p: 15p modalitate + 15p evaluare)

export interface CourseSession {
  id: string;
  date: string; // ISO format for sorting
  displayDate: string;
  title: string;
  description: string;
  topicIds: string[];
  status: "complete" | "placeholder";
  category: ExamCategory;
  examSubject: ExamSubject;
}

export const courseSessions: CourseSession[] = [
  {
    id: "curs-2026-02-19",
    date: "2026-02-19",
    displayDate: "19 Februarie 2026",
    title: "Activități de învățare, ADP-uri, rutine și întâlnirea de dimineață",
    description:
      "Prima sesiune: definiția activităților de învățare, activitățile de dezvoltare personală, " +
      "cele 8 rutine din programul zilnic și eseul despre întâlnirea de dimineață (6 etape).",
    topicIds: ["edu-ped-act-3"],
    status: "complete",
    category: "Metodica",
    examSubject: "Subiectul III",
  },
  {
    id: "curs-2026-02-20",
    date: "2026-02-20",
    displayDate: "20 Februarie 2026",
    title: "Activități de dezvoltare personală: rutine, tranziții, opționale",
    description:
      "Tipuri de ADP-uri, rolul rutinelor și tranzițiilor în programul zilnic, activități opționale și extinderi.",
    topicIds: ["edu-ped-act-3"],
    status: "complete",
    category: "Metodica",
    examSubject: "Subiectul III",
  },
  {
    id: "curs-2026-02-23",
    date: "2026-02-23",
    displayDate: "23 Februarie 2026",
    title: "Extrașcolare, domenii experiențiale, DLC — modalități",
    description:
      "Activitățile extrașcolare (definiție, ROFUIP), cele 5 domenii experiențiale, " +
      "și modalitățile de realizare la Limbă și comunicare (memorizare, povestire, lectură etc.).",
    topicIds: ["edu-ped-act-3", "edu-ped-act-1"],
    status: "complete",
    category: "Metodica",
    examSubject: "Subiectul III",
  },
  {
    id: "curs-2026-02-24",
    date: "2026-02-24",
    displayDate: "24 Februarie 2026",
    title: "Limba Română — Basmul cult: Povestea lui Harap Alb",
    description:
      "Structura Subiectului 1, catalogul operelor literare din programă, " +
      "analiza detaliată a basmului cult «Povestea lui Harap Alb» (Ion Creangă) și model de eseu.",
    topicIds: ["romana-sub1-basm"],
    status: "complete",
    category: "Limba Română",
    examSubject: "Subiectul I",
  },
  {
    id: "curs-2026-02-24-bonus",
    date: "2026-02-24",
    displayDate: "24 Februarie 2026 — Bonus",
    title: "★ Modele de eseuri — Toate operele din programă",
    description:
      "10 modele complete de eseu pentru Subiectul 1B, câte unul pentru fiecare operă literară din programă. " +
      "Fiecare lecție conține definiția speciei, model de eseu structurat și quiz de verificare.",
    topicIds: [
      "romana-sub1-schita",
      "romana-sub1-povestirea",
      "romana-sub1-nuvela",
      "romana-sub1-romanul",
      "romana-sub1-fabula",
      "romana-sub1-luceafarul",
      "romana-sub1-pastelul",
      "romana-sub1-modernism",
      "romana-sub1-neomodernism",
      "romana-sub1-comedia",
    ],
    status: "complete",
    category: "Limba Română",
    examSubject: "Subiectul I",
  },
  {
    id: "curs-2026-02-25",
    date: "2026-02-25",
    displayDate: "25 Februarie 2026",
    title: "Povestirea educatoarei — model de eseu (Subiectul III, Ex. 1)",
    description:
      "Definiția povestirii educatoarei, povești recomandate pe grupe de vârstă (Piramida Cunoașterii p. 218), " +
      "structura eseului universal, metoda Explozia Stelară (diferențiat mică/mijlocie vs. mare) " +
      "și temele anuale de studiu.",
    topicIds: ["edu-ped-dlc-povestire"],
    status: "complete",
    category: "Metodica",
    examSubject: "Subiectul III",
  },
];
