import { Lesson } from "@/types/lectii";

export const eduPedagogieLessons: Lesson[] = [
  {
    topicId: "edu-ped-met-2",
    title: "Jocul didactic: structură, organizare, conducere",
    duration: "25 min",
    objectives: [
      "Să cunoască structura și componentele jocului didactic",
      "Să identifice etapele de organizare și conducere a jocului didactic",
      "Să diferențieze jocul didactic de alte tipuri de joc",
    ],
    theory: [
      {
        title: "Definiție și caracteristici",
        content:
          "Jocul didactic este o metodă de învățământ și, în același timp, o formă de activitate " +
          "în grădiniță care îmbină elementul de joc cu sarcina didactică. Spre deosebire de jocul liber, " +
          "jocul didactic are un scop educativ precis, reguli clare și este condus de educatoare.\n\n" +
          "**Caracteristici esențiale:**\n" +
          "• Combină elementul ludic (distracția) cu cel instructiv (învățarea)\n" +
          "• Are reguli prestabilite\n" +
          "• Este organizat și condus de educatoare\n" +
          "• Implică o sarcină didactică ce trebuie rezolvată\n" +
          "• Folosește material didactic (obiecte, imagini, jetoane)\n\n" +
          "**Diferența față de jocul liber:** În jocul liber, copilul alege singur tema, regulile și " +
          "partenerii. În jocul didactic, educatoarea stabilește scopul, regulile și materialele, " +
          "dar copilul participă activ și cu plăcere datorită elementului ludic.",
      },
      {
        title: "Structura jocului didactic",
        content:
          "Jocul didactic are o structură precisă cu componente obligatorii:\n\n" +
          "**1. Scopul didactic:** Obiectivul de învățare urmărit " +
          "(ex: «consolidarea cunoștințelor despre formele geometrice»).\n\n" +
          "**2. Sarcina didactică (problema de joc):** Ce trebuie copilul să facă concret " +
          "(ex: «sortează jetoanele după formă» sau «găsește perechea care rimează»).\n\n" +
          "**3. Regulile jocului:** Prescripțiile care reglementează desfășurarea: " +
          "ce este permis, ce nu, în ce ordine se acționează. Regulile disciplinează " +
          "și dau structură.\n\n" +
          "**4. Elementele de joc:** Componenta ludică care face activitatea atractivă: " +
          "competiție, surpriză, recompensă, aplauze, mișcare, elemente de dramatizare.\n\n" +
          "**5. Materialul didactic:** Obiecte, imagini, jetoane, planșe, jucării necesare " +
          "desfășurării.\n\n" +
          "**6. Conținutul jocului:** Cunoștințele, deprinderile sau atitudinile vizate.",
      },
      {
        title: "Etapele conducerii jocului didactic",
        content:
          "Educatoarea conduce jocul didactic parcurgând următoarele etape:\n\n" +
          "**I. Organizarea (pregătirea):**\n" +
          "• Aranjarea mobilierului și a spațiului\n" +
          "• Pregătirea materialelor didactice\n" +
          "• Captarea atenției (surpriză, ghicitoare, personaj)\n\n" +
          "**II. Prezentarea și explicarea jocului:**\n" +
          "• Anunțarea titlului jocului\n" +
          "• Prezentarea materialelor\n" +
          "• Explicarea regulilor, clar și pe înțelesul copiilor\n" +
          "• Demonstrarea jocului (joc de probă)\n\n" +
          "**III. Desfășurarea propriu-zisă:**\n" +
          "• Jocul se desfășoară conform regulilor\n" +
          "• Educatoarea supervizează, intervine doar când e necesar\n" +
          "• Se repetă de 3-4 ori cu variante noi (complicarea jocului)\n\n" +
          "**IV. Complicarea jocului:**\n" +
          "• Se introduc elemente noi: reguli suplimentare, material nou, timp limitat\n" +
          "• Sarcina didactică devine mai complexă\n" +
          "• Se menține interesul și se aprofundează învățarea\n\n" +
          "**V. Încheierea:**\n" +
          "• Evaluarea rezultatelor\n" +
          "• Recompensarea (aplauze, stele, laude)\n" +
          "• Formularea concluziilor",
      },
    ],
    examples: [
      {
        title: "Jocul didactic «Magazinul de fructe»",
        description:
          "Scop: consolidarea cunoștințelor despre fructe (denumire, culoare, gust). " +
          "Material: fructe de jucărie, coșulețe, bani de jucărie. " +
          "Regulă: copilul «cumpărător» descrie fructul dorit fără a-l numi (culoare, formă, gust), " +
          "iar copilul «vânzător» trebuie să-l identifice. " +
          "Element de joc: rolurile de cumpărător și vânzător, banii de jucărie. " +
          "Complicare: fructele se grupează după culoare/anotimp.",
        context: "Grupa mijlocie (4-5 ani), DȘ — Cunoașterea Mediului, 20 minute",
      },
      {
        title: "Jocul didactic «Trenulețul silabelor»",
        description:
          "Scop: dezvoltarea conștiinței silabice. " +
          "Material: imagini cu obiecte, vagoane de carton cu 1, 2, 3, 4 cercuri. " +
          "Regulă: copilul numără silabele (bate din palme), apoi pune imaginea " +
          "în vagonul cu numărul corespunzător de cercuri. " +
          "Element de joc: trenulețul «pleacă» doar când toate imaginile sunt așezate corect. " +
          "Complicare: se adaugă imagini cu cuvinte de 4-5 silabe.",
        context: "Grupa mare (5-6 ani), DLC, 15 minute",
      },
      {
        title: "Complicarea jocului în practică",
        description:
          "Jocul inițial: copiii sortează jetoane cu animale în două cercuri — «animale domestice» " +
          "și «animale sălbatice». Complicarea 1: se adaugă un al treilea cerc — «animale de la zoo». " +
          "Complicarea 2: copiii trebuie să motiveze oral alegerea. " +
          "Complicarea 3: timp limitat (clepsidră).",
        context: "Exemplu de complicare progresivă în cadrul aceluiași joc",
      },
    ],
    keyPoints: [
      { text: "Jocul didactic combină elementul ludic cu sarcina didactică", important: true },
      { text: "Cele 6 componente: scop, sarcină didactică, reguli, elemente de joc, material, conținut", important: true },
      { text: "Etapele conducerii: organizare → prezentare/explicare → desfășurare → complicare → încheiere" },
      { text: "Jocul de probă (demonstrare) este obligatoriu înainte de desfășurarea propriu-zisă" },
      { text: "Complicarea jocului menține interesul și aprofundează învățarea", important: true },
      { text: "Educatoarea supervizează, dar nu domină — copiii trebuie să fie activi" },
      { text: "Diferența esențială față de jocul liber: scopul educativ prestabilit și regulile impuse" },
    ],
    quiz: {
      topicId: "edu-ped-met-2",
      questions: [
        {
          id: "edu-ped-met-2-q1",
          type: "multiple-choice",
          question: "Care NU este o componentă a structurii jocului didactic?",
          options: [
            "Sarcina didactică",
            "Regulile jocului",
            "Improvizația liberă",
            "Elementele de joc",
          ],
          correctIndex: 2,
          explanation:
            "Jocul didactic are structură precisă (scop, sarcină, reguli, elemente de joc, " +
            "material, conținut). Improvizația liberă este caracteristică jocului liber, nu celui didactic.",
        },
        {
          id: "edu-ped-met-2-q2",
          type: "true-false",
          question: "În jocul didactic, copilul alege singur regulile și tema jocului.",
          correct: false,
          explanation:
            "În jocul didactic, educatoarea stabilește scopul, regulile, materialele și tema. " +
            "Copilul participă activ în cadrul structurii prestabilite. " +
            "Alegerea liberă a temei și regulilor este specifică jocului liber.",
        },
        {
          id: "edu-ped-met-2-q3",
          type: "fill-blank",
          question:
            "Etapa în care se introduc elemente noi pentru a menține interesul se numește ___ jocului.",
          correctAnswers: ["complicarea", "complicare"],
          explanation:
            "Complicarea jocului este etapa în care se adaugă reguli suplimentare, " +
            "material nou sau timp limitat, pentru a aprofunda învățarea.",
        },
        {
          id: "edu-ped-met-2-q4",
          type: "multiple-choice",
          question: "Care este ordinea corectă a etapelor conducerii jocului didactic?",
          options: [
            "Desfășurare → organizare → complicare → prezentare → încheiere",
            "Organizare → prezentare/explicare → desfășurare → complicare → încheiere",
            "Prezentare → organizare → desfășurare → încheiere → complicare",
            "Organizare → desfășurare → complicare → prezentare → încheiere",
          ],
          correctIndex: 1,
          explanation:
            "Etapele se parcurg în ordine: organizare (pregătire) → prezentare și explicare " +
            "(inclusiv joc de probă) → desfășurare propriu-zisă → complicare → încheiere.",
        },
        {
          id: "edu-ped-met-2-q5",
          type: "true-false",
          question:
            "Jocul de probă (demonstrarea) se poate omite dacă regulile sunt simple.",
          correct: false,
          explanation:
            "Jocul de probă este o etapă obligatorie — asigură că toți copiii au înțeles " +
            "regulile și sarcina înainte de desfășurarea propriu-zisă.",
        },
        {
          id: "edu-ped-met-2-q6",
          type: "multiple-choice",
          question:
            "Ce diferențiază esențial jocul didactic de jocul liber?",
          options: [
            "Jocul didactic nu implică mișcare",
            "Jocul didactic are scop educativ prestabilit și reguli impuse",
            "Jocul liber nu dezvoltă nicio competență",
            "Jocul didactic nu include elemente ludice",
          ],
          correctIndex: 1,
          explanation:
            "Diferența esențială este că jocul didactic are un scop educativ precis și " +
            "reguli prestabilite de educatoare, în timp ce jocul liber este inițiat și " +
            "condus de copil.",
        },
        {
          id: "edu-ped-met-2-q7",
          type: "multiple-choice",
          question:
            "Ce rol are «jocul de probă» (demonstrarea) în desfășurarea jocului didactic?",
          options: [
            "Este un joc separat, fără legătură cu jocul principal",
            "Servește la evaluarea finală a copiilor",
            "Asigură că toți copiii au înțeles regulile și sarcina înainte de jocul propriu-zis",
            "Înlocuiește etapa de complicare a jocului",
          ],
          correctIndex: 2,
          explanation:
            "Jocul de probă este o etapă obligatorie din faza de prezentare și explicare. " +
            "Prin demonstrare, educatoarea se asigură că toți copiii au înțeles regulile, " +
            "sarcina didactică și modul de desfășurare, prevenind confuziile în etapa următoare.",
        },
        {
          id: "edu-ped-met-2-q8",
          type: "true-false",
          question:
            "Materialul didactic (obiecte, imagini, jetoane) este o componentă obligatorie a structurii jocului didactic.",
          correct: true,
          explanation:
            "Materialul didactic este una dintre cele 6 componente ale structurii jocului didactic, " +
            "alături de scop, sarcină didactică, reguli, elemente de joc și conținut. " +
            "Fără material adecvat, jocul didactic nu se poate desfășura conform structurii sale.",
        },
        {
          id: "edu-ped-met-2-q9",
          type: "fill-blank",
          question:
            "Componenta jocului didactic care face activitatea atractivă prin competiție, surpriză sau recompensă se numește elementele de ___.",
          correctAnswers: ["joc"],
          explanation:
            "Elementele de joc reprezintă componenta ludică a jocului didactic: competiție, surpriză, " +
            "recompensă, aplauze, mișcare sau dramatizare. Ele fac distincția între o activitate " +
            "didactică obișnuită și un joc didactic propriu-zis.",
        },
        {
          id: "edu-ped-met-2-q10",
          type: "multiple-choice",
          question:
            "De câte ori se recomandă repetarea jocului didactic în etapa de desfășurare propriu-zisă?",
          options: [
            "O singură dată, pentru a nu plictisi copiii",
            "De 3-4 ori, cu variante noi (complicarea jocului)",
            "De 10 ori, pentru a asigura memorarea",
            "Nu se repetă niciodată — se trece direct la alt joc",
          ],
          correctIndex: 1,
          explanation:
            "Jocul se repetă de 3-4 ori cu variante noi prin complicarea jocului. " +
            "Repetarea consolidează învățarea, iar introducerea de elemente noi " +
            "(reguli suplimentare, material nou, timp limitat) menține interesul copiilor " +
            "și aprofundează cunoștințele.",
        },
      ],
    },
  },
  {
    topicId: "edu-ped-eval-1",
    title: "Evaluarea în educația timpurie: specificul evaluării la preșcolari",
    duration: "20 min",
    objectives: [
      "Să înțeleagă specificul evaluării în educația preșcolară",
      "Să cunoască principiile și funcțiile evaluării la preșcolari",
      "Să diferențieze evaluarea în grădiniță de evaluarea din școală",
    ],
    theory: [
      {
        title: "Specificul evaluării în grădiniță",
        content:
          "Evaluarea în educația timpurie are un caracter specific, fundamental diferit de evaluarea școlară:\n\n" +
          "**Nu se acordă note sau calificative.** Evaluarea vizează progresul individual al copilului " +
          "raportat la propriul nivel anterior, nu la un standard fix sau la performanța grupului.\n\n" +
          "**Este holistică.** Se evaluează dezvoltarea globală a copilului pe toate domeniile: " +
          "fizic, cognitiv, socio-emoțional, limbaj și comunicare, capacități și atitudini de învățare.\n\n" +
          "**Este continuă și contextualizată.** Nu există «teste» formale. Evaluarea se realizează " +
          "în contexte naturale de joc și activitate, pe parcursul întregii zile.\n\n" +
          "**Scopul principal:** Identificarea nivelului de dezvoltare al fiecărui copil, " +
          "a punctelor tari și a ariilor care necesită sprijin, pentru a adapta intervențiile " +
          "educaționale la nevoile individuale.",
      },
      {
        title: "Principiile evaluării la preșcolari",
        content:
          "**1. Evaluarea autentică:** Se observă copilul în situații reale de joc și activitate, " +
          "nu în condiții artificiale de testare.\n\n" +
          "**2. Evaluarea pozitivă:** Accentul cade pe ce poate și ce știe copilul (achiziții), " +
          "nu pe ce nu știe (lacune). Se evidențiază progresul, nu eșecul.\n\n" +
          "**3. Individualizarea:** Fiecare copil este evaluat raportat la propriul traseu de dezvoltare. " +
          "Nu se fac comparații între copii.\n\n" +
          "**4. Continuitatea:** Evaluarea se desfășoară permanent, nu doar la momente prestabilite. " +
          "Educatoarea observă și notează zilnic.\n\n" +
          "**5. Diversitatea metodelor:** Se utilizează metode variate: observarea, conversația, " +
          "analiza produselor activității, portofoliul.\n\n" +
          "**6. Parteneriat cu familia:** Părinții sunt informați despre progresul copilului " +
          "și implicați în procesul de evaluare.",
      },
      {
        title: "Funcțiile evaluării în grădiniță",
        content:
          "**Funcția diagnostică:** Identifică nivelul actual de dezvoltare al copilului — " +
          "la intrarea în grădiniță (evaluare inițială) și pe parcurs. Permite detectarea " +
          "timpurie a dificultăților de dezvoltare.\n\n" +
          "**Funcția formativă (de reglare):** Oferă informații educatoarei pentru a-și adapta " +
          "strategiile didactice. Este funcția cea mai importantă în grădiniță. " +
          "Exemplu: dacă mai mulți copii nu recunosc formele geometrice, educatoarea " +
          "va introduce mai multe activități cu materiale concrete.\n\n" +
          "**Funcția prognostică:** Estimează potențialul de dezvoltare al copilului " +
          "și pregătirea pentru școală.\n\n" +
          "**Funcția motivațională:** Aprecierea pozitivă încurajează copilul să " +
          "persevereze și să participe activ. La preșcolari, motivația extrinsecă " +
          "(laude, recompense simbolice) este foarte importantă.",
      },
    ],
    examples: [
      {
        title: "Evaluare inițială la grupa mică",
        description:
          "La începutul anului școlar, educatoarea observă timp de 2 săptămâni fiecare copil " +
          "pe domeniile de dezvoltare. Completează o fișă de observare cu: nivel de limbaj " +
          "(cuvinte, propoziții), autonomie (se îmbracă singur, mănâncă singur), " +
          "socializare (interacțiune cu ceilalți copii), motricitate fină (ține creionul, decupează). " +
          "Pe baza observațiilor, stabilește obiective individualizate.",
        context: "Septembrie, grupa mică (3-4 ani), evaluare inițială",
      },
      {
        title: "Evaluarea formativă prin observare",
        description:
          "În timpul activității de joc liber, educatoarea observă că Maria (4 ani) " +
          "nu reușește să sorteze jetoanele după culoare. Notează în caietul de observații. " +
          "A doua zi, organizează un joc didactic special de sortare cu Maria și alți " +
          "2-3 copii cu dificultăți similare, folosind obiecte mari și colorate.",
        context: "Exemplu de evaluare formativă cu adaptare a intervenției",
      },
    ],
    keyPoints: [
      { text: "Nu se acordă note sau calificative în grădiniță — se evaluează progresul individual", important: true },
      { text: "Evaluarea este holistică: toate domeniile de dezvoltare, nu doar cel cognitiv" },
      { text: "Se realizează în contexte naturale de joc, nu prin teste formale", important: true },
      { text: "Principiu central: evaluare pozitivă — accent pe ce poate copilul, nu pe lacune" },
      { text: "Funcția cea mai importantă în grădiniță este cea formativă (de reglare)", important: true },
      { text: "Evaluarea este individualizată: fiecare copil raportat la propriul traseu" },
      { text: "Parteneriat cu familia: părinții sunt informați și implicați" },
      { text: "Evaluarea inițială se face la începutul anului, prin observare timp de 2 săptămâni" },
    ],
    quiz: {
      topicId: "edu-ped-eval-1",
      questions: [
        {
          id: "edu-ped-eval-1-q1",
          type: "true-false",
          question: "În grădiniță se acordă calificative (Foarte Bine, Bine, Suficient) la fel ca în ciclul primar.",
          correct: false,
          explanation:
            "Nu se acordă note sau calificative în grădiniță. Evaluarea vizează progresul " +
            "individual al copilului raportat la propriul nivel anterior.",
        },
        {
          id: "edu-ped-eval-1-q2",
          type: "multiple-choice",
          question: "Care este funcția cea mai importantă a evaluării în grădiniță?",
          options: [
            "Funcția sumativă",
            "Funcția de certificare",
            "Funcția formativă (de reglare)",
            "Funcția de clasificare",
          ],
          correctIndex: 2,
          explanation:
            "Funcția formativă este cea mai importantă în grădiniță — oferă educatoarei " +
            "informații pentru a-și adapta strategiile didactice la nevoile copiilor.",
        },
        {
          id: "edu-ped-eval-1-q3",
          type: "fill-blank",
          question:
            "Evaluarea care se realizează în situații reale de joc și activitate se numește evaluare ___.",
          correctAnswers: ["autentica", "autentică"],
          explanation:
            "Evaluarea autentică se desfășoară în contexte naturale de joc și activitate, " +
            "nu în condiții artificiale de testare.",
        },
        {
          id: "edu-ped-eval-1-q4",
          type: "true-false",
          question:
            "La preșcolari, evaluarea se face prin compararea performanței copilului cu cea a colegilor de grupă.",
          correct: false,
          explanation:
            "Evaluarea este individualizată: fiecare copil este evaluat raportat la " +
            "propriul traseu de dezvoltare, nu prin comparație cu alți copii.",
        },
        {
          id: "edu-ped-eval-1-q5",
          type: "multiple-choice",
          question:
            "Ce înseamnă principiul «evaluării pozitive» în grădiniță?",
          options: [
            "Se acordă numai note de 8-10",
            "Accentul cade pe ce poate și ce știe copilul, nu pe lacune",
            "Copiii sunt lăudați indiferent de performanță",
            "Nu se corectează niciodată greșelile copiilor",
          ],
          correctIndex: 1,
          explanation:
            "Evaluarea pozitivă evidențiază achizițiile și progresul copilului, " +
            "nu eșecurile sau lacunele. Se focalizează pe ce poate copilul.",
        },
        {
          id: "edu-ped-eval-1-q6",
          type: "multiple-choice",
          question: "Ce tip de evaluare identifică nivelul de dezvoltare la intrarea în grădiniță?",
          options: [
            "Evaluarea formativă",
            "Evaluarea sumativă",
            "Evaluarea inițială (diagnostică)",
            "Evaluarea finală",
          ],
          correctIndex: 2,
          explanation:
            "Evaluarea inițială (diagnostică) se realizează la începutul anului școlar " +
            "și identifică nivelul actual de dezvoltare al fiecărui copil.",
        },
        {
          id: "edu-ped-eval-1-q7",
          type: "multiple-choice",
          question:
            "Care dintre următoarele NU este o metodă de evaluare utilizată în grădiniță?",
          options: [
            "Observarea în contexte naturale de joc",
            "Testul scris cu itemi de tip grilă",
            "Analiza produselor activității copilului",
            "Portofoliul copilului",
          ],
          correctIndex: 1,
          explanation:
            "În grădiniță nu se folosesc teste scrise formale. Metodele de evaluare sunt " +
            "variate și adaptate vârstei: observarea, conversația, analiza produselor activității " +
            "și portofoliul — toate realizate în contexte naturale, nu artificiale.",
        },
        {
          id: "edu-ped-eval-1-q8",
          type: "true-false",
          question:
            "Evaluarea în grădiniță vizează doar domeniul cognitiv al dezvoltării copilului.",
          correct: false,
          explanation:
            "Evaluarea în educația timpurie este holistică: acoperă toate domeniile de dezvoltare — " +
            "fizic, cognitiv, socio-emoțional, limbaj și comunicare, capacități și atitudini " +
            "de învățare. Nu se limitează doar la cel cognitiv.",
        },
        {
          id: "edu-ped-eval-1-q9",
          type: "fill-blank",
          question:
            "Funcția evaluării care estimează potențialul de dezvoltare al copilului și pregătirea pentru școală se numește funcția ___.",
          correctAnswers: ["prognostica", "prognostică"],
          explanation:
            "Funcția prognostică a evaluării permite estimarea potențialului de dezvoltare " +
            "al copilului și a gradului de pregătire pentru intrarea în școală. " +
            "Se bazează pe datele acumulate prin evaluarea continuă pe parcursul frecventării grădiniței.",
        },
        {
          id: "edu-ped-eval-1-q10",
          type: "multiple-choice",
          question:
            "Ce face educatoarea dacă, în urma evaluării formative, constată că mai mulți copii nu recunosc formele geometrice?",
          options: [
            "Trece mai departe la altă temă, considerând că vor învăța singuri",
            "Introduce mai multe activități cu materiale concrete pentru formele geometrice",
            "Le dă copiilor note mici pentru a-i motiva",
            "Anunță părinții că acei copii au probleme de dezvoltare",
          ],
          correctIndex: 1,
          explanation:
            "Funcția formativă (de reglare) a evaluării oferă educatoarei informații pentru " +
            "a-și adapta strategiile didactice. Dacă mai mulți copii au dificultăți, " +
            "educatoarea va introduce activități suplimentare cu materiale concrete, " +
            "nu va trece peste temă sau nu va sancționa copiii.",
        },
      ],
    },
  },
];
