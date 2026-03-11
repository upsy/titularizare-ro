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
  {
    id: "curs-2026-02-26",
    date: "2026-02-26",
    displayDate: "26 Februarie 2026",
    title: "Lectura educatoarei și Repovestirea — modele de eseu (Subiectul III, Ex. 1)",
    description:
      "Definiția și desfășurarea lecturii educatoarei (citire din carte + explicare cuvinte necunoscute), " +
      "definiția și desfășurarea repovestirii pe bază de imagini (realizată de copii), " +
      "diferențele între lectură, povestire și repovestire, imagini pe grupe de vârstă.",
    topicIds: ["edu-ped-dlc-lectura-repovestire"],
    status: "complete",
    category: "Metodica",
    examSubject: "Subiectul III",
  },
  {
    id: "curs-2026-02-27",
    date: "2026-02-27",
    displayDate: "27 Februarie 2026",
    title: "Lectura după imagini — model de eseu (Subiectul III, Ex. 1)",
    description:
      "Definiția lecturii după imagini, cele 3 planuri de intuire (central, secundar, îndepărtat), " +
      "mecanismul sintezelor parțiale și sinteză finală (poveste), model complet de eseu pe tema " +
      "«Tablou de iarnă», adaptare la Științe și DLC.",
    topicIds: ["edu-ped-dlc-lectura-dupa-imagini"],
    status: "complete",
    category: "Metodica",
    examSubject: "Subiectul III",
  },
  {
    id: "curs-2026-03-03",
    date: "2026-03-03",
    displayDate: "3 Martie 2026",
    title: "Convorbirea — model de eseu (Subiectul III, Ex. 1)",
    description:
      "Definiția și scopul convorbirii (succesiune de întrebări și răspunsuri), " +
      "principiul de la general la particular, diferențierea pe grupe (mică/mijlocie: 2 seturi, " +
      "mare: 3 seturi de întrebări), adaptare la Științe, DLC și DOS, " +
      "convorbirea fără suport intuitiv la grădiniță.",
    topicIds: ["edu-ped-dlc-convorbire"],
    status: "complete",
    category: "Metodica",
    examSubject: "Subiectul III",
  },
  {
    id: "curs-2026-03-05",
    date: "2026-03-05",
    displayDate: "5 Martie 2026",
    title: "Observarea — model de eseu (Subiectul III, Ex. 1)",
    description:
      "Definiția observării (analiză + identificare caracteristici), " +
      "exclusiv Științe — Cunoașterea Mediului, diferențiere pe grupe " +
      "(mică: 1 obiect, mijlocie: 1-2, mare: 2+ prin comparație), " +
      "regula originalului, Diagrama Venn vs. Explozia Stelară, " +
      "model complet de eseu pe tema «Vișina și căpșuna».",
    topicIds: ["edu-ped-stiinte-observare"],
    status: "complete",
    category: "Metodica",
    examSubject: "Subiectul III",
  },
  {
    id: "curs-2026-03-06",
    date: "2026-03-06",
    displayDate: "6 Martie 2026",
    title: "Memorizarea — model de eseu (Subiectul III, Ex. 1)",
    description:
      "Definiția memorizării (formarea cunoștințelor și deprinderilor), " +
      "diferențierea pe grupe (mică: 1 strofă, mijlocie: 2, mare: 3), " +
      "domenii DLC și DOS, poezii recomandate (Piramida Cunoașterii p. 240), " +
      "structura eseului cu metoda recitării vers cu vers (legarea), " +
      "model complet de eseu pe «Doi frați cuminți» de Elena Farago.",
    topicIds: ["edu-ped-dlc-memorizare"],
    status: "complete",
    category: "Metodica",
    examSubject: "Subiectul III",
  },
];
