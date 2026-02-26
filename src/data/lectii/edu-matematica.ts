import { Lesson } from "@/types/lectii";

export const eduMatematicaLessons: Lesson[] = [
  {
    topicId: "edu-mat-numere-4",
    title: "Forme geometrice: cerc, pătrat, triunghi, dreptunghi",
    duration: "20 min",
    objectives: [
      "Să cunoască particularitățile predării formelor geometrice la preșcolari",
      "Să identifice metodele și mijloacele adecvate pentru învățarea formelor",
      "Să proiecteze activități de recunoaștere și clasificare a formelor geometrice",
    ],
    theory: [
      {
        title: "Formele geometrice în curriculumul preșcolar",
        content:
          "În educația timpurie, formele geometrice se studiază la nivel intuitiv, " +
          "concret-acțional, nu abstract. Copilul nu învață definiții matematice, " +
          "ci recunoaște, denumește, compară și clasifică forme din mediul înconjurător.\n\n" +
          "**Formele de bază introduse:**\n" +
          "• **Cercul** — «forma rotundă», fără colțuri, se rostogolește\n" +
          "• **Pătratul** — 4 laturi egale, 4 colțuri\n" +
          "• **Triunghiul** — 3 laturi, 3 colțuri\n" +
          "• **Dreptunghiul** — 4 colțuri, 2 laturi lungi și 2 scurte\n\n" +
          "**Ordinea introducerii:** Cerc → pătrat → triunghi → dreptunghi. " +
          "Cercul este primul deoarece este cel mai ușor de recunoscut (fără colțuri). " +
          "Dreptunghiul este ultimul deoarece copiii îl confundă adesea cu pătratul.",
      },
      {
        title: "Etapele predării formelor geometrice",
        content:
          "Predarea urmează principiul «de la concret la abstract»:\n\n" +
          "**Etapa 1 — Explorare senzorială:** Copiii ating, mânuiesc obiecte reale cu forme " +
          "geometrice: mingi (cerc), cuburi (pătrat pe față), piese de puzzle. " +
          "Se compară prin atingere: «aceasta are colțuri», «aceasta nu are colțuri».\n\n" +
          "**Etapa 2 — Recunoaștere și denumire:** Educatoarea prezintă forma, o denumește, " +
          "descrie proprietățile. Copiii caută obiecte din sala de grupă care au aceeași formă: " +
          "«ceasul este rotund — seamănă cu cercul».\n\n" +
          "**Etapa 3 — Comparare și clasificare:** Copiii sortează obiecte și imagini după formă. " +
          "Compară forme între ele: «pătratul are 4 colțuri ca și dreptunghiul, dar toate " +
          "laturile sale sunt la fel de lungi».\n\n" +
          "**Etapa 4 — Reproducere și creație:** Copiii desenează, decupează, modelează forme. " +
          "Creează tablouri sau compoziții din forme geometrice (casă = pătrat + triunghi).",
      },
      {
        title: "Metode și jocuri didactice",
        content:
          "**Jocuri de recunoaștere:**\n" +
          "• «Sacul cu forme» — copilul ghicește forma doar prin atingere\n" +
          "• «Vânătoare de forme» — copiii caută forme în sala de grupă sau în curtea grădiniței\n" +
          "• «Forma zilei» — pe parcursul zilei, copiii identifică obiecte cu forma aleasă\n\n" +
          "**Jocuri de clasificare:**\n" +
          "• Sortarea blocurilor logice după formă (apoi culoare, mărime)\n" +
          "• «Trenulețul formelor» — fiecare vagon conține doar o anumită formă\n\n" +
          "**Activități de creație:**\n" +
          "• Construirea de imagini din forme geometrice decupate (tangram simplificat)\n" +
          "• Pictura cu ștampile geometrice\n" +
          "• Modelarea din plastilină a formelor\n\n" +
          "**Erori frecvente ale copiilor:**\n" +
          "• Confundarea pătratului cu dreptunghiul\n" +
          "• Nerecunoașterea formei când este rotită sau de altă dimensiune\n" +
          "• Asocierea formei doar cu o singură culoare («triunghiul e roșu»)",
      },
    ],
    examples: [
      {
        title: "Activitate «Casa din forme»",
        description:
          "Copiii primesc forme geometrice decupate din carton colorat: pătrate, triunghiuri, " +
          "dreptunghiuri, cercuri. Sarcina: construiesc o casă lipind formele pe o foaie. " +
          "Discuție: «Ce formă ați folosit pentru acoperiș? Dar pentru fereastră?». " +
          "Se numără câte forme de fiecare tip au folosit.",
        context: "Grupa mijlocie (4-5 ani), activitate DȘ, 25 minute",
      },
      {
        title: "Jocul «Sacul cu forme»",
        description:
          "Într-un sac opac se pun corpuri geometrice din lemn sau plastic. Copilul introduce " +
          "mâna, atinge un corp și spune: «Are colțuri / nu are colțuri», «Are 3 laturi / 4 laturi». " +
          "Apoi ghicește forma și o scoate pentru verificare. " +
          "Jocul dezvoltă percepția tactilă și vocabularul geometric.",
        context: "Grupa mare (5-6 ani), joc didactic, 15 minute",
      },
    ],
    keyPoints: [
      { text: "Formele se predau intuitiv, prin manipulare concretă, nu prin definiții abstracte", important: true },
      { text: "Ordinea introducerii: cerc → pătrat → triunghi → dreptunghi" },
      { text: "Etapele: explorare senzorială → recunoaștere → comparare/clasificare → reproducere", important: true },
      { text: "Dreptunghiul se introduce ultimul (confuzie frecventă cu pătratul)" },
      { text: "Blocurile logice sunt materialul didactic principal pentru formele geometrice" },
      { text: "Copiii trebuie să recunoască forma indiferent de culoare, mărime sau orientare", important: true },
      { text: "Activitățile de creație (tangram, colaje) consolidează recunoașterea formelor" },
    ],
    quiz: {
      topicId: "edu-mat-numere-4",
      questions: [
        {
          id: "edu-mat-numere-4-q1",
          type: "multiple-choice",
          question: "Care este ordinea recomandată de introducere a formelor geometrice la preșcolari?",
          options: [
            "Pătrat → cerc → triunghi → dreptunghi",
            "Cerc → pătrat → triunghi → dreptunghi",
            "Triunghi → cerc → pătrat → dreptunghi",
            "Cerc → triunghi → pătrat → dreptunghi",
          ],
          correctIndex: 1,
          explanation:
            "Cercul este primul (cel mai ușor de recunoscut, fără colțuri), urmat de pătrat, " +
            "triunghi și dreptunghi (ultimul, deoarece se confundă cu pătratul).",
        },
        {
          id: "edu-mat-numere-4-q2",
          type: "true-false",
          question:
            "La vârsta preșcolară, copiii trebuie să învețe definiția matematică a fiecărei forme geometrice.",
          correct: false,
          explanation:
            "La preșcolari, formele se predau la nivel intuitiv, concret-acțional: " +
            "recunoaștere, denumire, comparare, clasificare — nu definiții abstracte.",
        },
        {
          id: "edu-mat-numere-4-q3",
          type: "fill-blank",
          question:
            "Prima etapă în predarea formelor geometrice este explorarea ___.",
          correctAnswers: ["senzoriala", "senzorială", "senzorial"],
          explanation:
            "Explorarea senzorială este prima etapă: copiii ating și mânuiesc obiecte reale, " +
            "compară prin atingere (cu colțuri / fără colțuri).",
        },
        {
          id: "edu-mat-numere-4-q4",
          type: "multiple-choice",
          question: "De ce se introduce dreptunghiul ultimul?",
          options: [
            "Este cea mai complexă formă",
            "Copiii îl confundă adesea cu pătratul",
            "Nu apare frecvent în mediul copilului",
            "Necesită cunoașterea numerelor",
          ],
          correctIndex: 1,
          explanation:
            "Dreptunghiul se introduce ultimul deoarece copiii îl confundă frecvent cu pătratul " +
            "(ambele au 4 colțuri). Diferența subtilă (laturi inegale vs. egale) necesită " +
            "capacitate de observare mai dezvoltată.",
        },
        {
          id: "edu-mat-numere-4-q5",
          type: "true-false",
          question:
            "Copiii trebuie să recunoască o formă geometrică indiferent de culoarea, mărimea sau orientarea ei.",
          correct: true,
          explanation:
            "Un obiectiv important este ca preșcolarii să înțeleagă că proprietățile " +
            "formei (laturi, colțuri) rămân aceleași indiferent de atributele variabile " +
            "(culoare, mărime, orientare).",
        },
        {
          id: "edu-mat-numere-4-q6",
          type: "multiple-choice",
          question: "Care sunt etapele predării formelor geometrice, în ordine?",
          options: [
            "Denumire → clasificare → explorare → reproducere",
            "Clasificare → explorare → denumire → reproducere",
            "Explorare senzorială → recunoaștere/denumire → comparare/clasificare → reproducere/creație",
            "Reproducere → comparare → explorare → denumire",
          ],
          correctIndex: 2,
          explanation:
            "Etapele urmează principiul de la concret la abstract: explorare senzorială → " +
            "recunoaștere și denumire → comparare și clasificare → reproducere și creație.",
        },
        {
          id: "edu-mat-numere-4-q7",
          type: "multiple-choice",
          question:
            "Ce joc didactic dezvoltă percepția tactilă și vocabularul geometric prin ghicirea formei doar prin atingere?",
          options: [
            "«Vânătoare de forme»",
            "«Forma zilei»",
            "«Sacul cu forme»",
            "«Trenulețul formelor»",
          ],
          correctIndex: 2,
          explanation:
            "«Sacul cu forme» este jocul în care copilul introduce mâna într-un sac opac, " +
            "atinge un corp geometric și trebuie să-l descrie și să ghicească forma fără a-l vedea. " +
            "Acest joc dezvoltă simultan percepția tactilă și vocabularul geometric (colțuri, laturi).",
        },
        {
          id: "edu-mat-numere-4-q8",
          type: "fill-blank",
          question:
            "Predarea formelor geometrice la preșcolari urmează principiul «de la ___ la abstract».",
          correctAnswers: ["concret", "concret-acțional"],
          explanation:
            "Principiul fundamental în predarea formelor geometrice la preșcolari este «de la concret " +
            "la abstract». Copiii încep cu manipularea obiectelor reale (concret-acțional), apoi trec " +
            "la recunoaștere vizuală și, în final, la clasificare și reproducere.",
        },
        {
          id: "edu-mat-numere-4-q9",
          type: "true-false",
          question:
            "Blocurile logice sunt materialul didactic principal utilizat pentru predarea formelor geometrice la preșcolari.",
          correct: true,
          explanation:
            "Blocurile logice (Dienes) sunt într-adevăr materialul didactic principal pentru " +
            "formele geometrice. Ele permit sortarea și clasificarea după mai multe criterii " +
            "(formă, culoare, mărime, grosime), ajutând copiii să izoleze proprietățile esențiale " +
            "ale fiecărei forme.",
        },
        {
          id: "edu-mat-numere-4-q10",
          type: "multiple-choice",
          question:
            "Care este o eroare frecventă a copiilor în învățarea formelor geometrice?",
          options: [
            "Confundă cercul cu triunghiul",
            "Asociază forma doar cu o singură culoare (ex: «triunghiul e roșu»)",
            "Numesc corect toate formele de la prima întâlnire",
            "Refuză să atingă formele din lemn sau plastic",
          ],
          correctIndex: 1,
          explanation:
            "O eroare frecventă este asocierea formei cu o singură culoare (de exemplu, " +
            "copilul crede că «triunghiul e roșu» pentru că primul triunghi văzut era roșu). " +
            "De aceea este important ca formele să fie prezentate în culori, mărimi și orientări " +
            "variate, pentru ca preșcolarii să înțeleagă că forma rămâne aceeași indiferent de " +
            "atributele variabile.",
        },
      ],
    },
  },
];
