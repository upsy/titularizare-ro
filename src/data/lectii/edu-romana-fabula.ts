import { Lesson } from "@/types/lectii";

export const eduRomanaFabulaLessons: Lesson[] = [
  {
    topicId: "romana-sub1-fabula",
    title: "Fabula: «Câinele și cățelul» — Gr. Alexandrescu",
    duration: "45 min",
    objectives: [
      "Să definească fabula ca specie a genului epic",
      "Să exemplifice două trăsături ale fabulei din «Câinele și cățelul»",
      "Să aplice structura standard de eseu pentru fabulă",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "romana-sub1-fabula",
      questions: [
        {
          id: "romana-sub1-fabula-fq1",
          type: "multiple-choice",
          question: "Ce simbolizează dulăul Samson?",
          options: [
            "Omul naiv",
            "Omul ipocrit și viclean",
            "Spectatorul pasiv",
            "Omul cinstit",
          ],
          correctIndex: 1,
          explanation:
            "Samson reprezintă omul ipocrit și viclean, care predică " +
            "egalitatea doar când îi convine, dar vrea să păstreze privilegiile.",
        },
        {
          id: "romana-sub1-fabula-fq2",
          type: "true-false",
          question:
            "Morala fabulei este exprimată direct, în primele versuri.",
          correct: false,
          explanation:
            "Morala fabulei este exprimată indirect, în finalul operei, " +
            "prin afirmația lui Samson: «Vreau egalitate, dar nu pentru căței!»",
        },
        {
          id: "romana-sub1-fabula-fq3",
          type: "fill-blank",
          question:
            "Fabula este structurată compozițional în două părți: narațiunea și ___.",
          correctAnswers: ["morala"],
          explanation:
            "Compozițional, fabula este structurată în două părți: " +
            "narațiunea (întâmplarea propriu-zisă) și morala.",
        },
        {
          id: "romana-sub1-fabula-fq4",
          type: "multiple-choice",
          question: "Care este tema fabulei «Câinele și cățelul»?",
          options: [
            "Critica lipsei de educație",
            "Critica ipocriziei și a dorinței de parvenire",
            "Iubirea față de animale",
            "Conflictul dintre generații",
          ],
          correctIndex: 1,
          explanation:
            "Tema fabulei este critica ipocriziei și a dorinței de parvenire. " +
            "Samson susține egalitatea doar în teorie, dar o respinge în practică.",
        },
        {
          id: "romana-sub1-fabula-fq5",
          type: "true-false",
          question:
            "Fabula «Câinele și cățelul» este scrisă în proză.",
          correct: false,
          explanation:
            "Fabula este scrisă în versuri, nu în proză. Versurile au " +
            "măsură inegală, purtând amprenta dialogului.",
        },
        {
          id: "romana-sub1-fabula-fq6",
          type: "fill-blank",
          question:
            "Cățelul din fabulă se numește ___.",
          correctAnswers: ["Samurache"],
          explanation:
            "Cățelul se numește Samurache și simbolizează omul naiv, " +
            "ușor de manipulat prin vorbe frumoase.",
        },
        {
          id: "romana-sub1-fabula-fq7",
          type: "multiple-choice",
          question:
            "Care este figura de stil dominantă în fabulă?",
          options: [
            "Metafora",
            "Personificarea",
            "Hiperbola",
            "Comparația",
          ],
          correctIndex: 1,
          explanation:
            "Personificarea este figura de stil dominantă în fabulă — " +
            "animalele gândesc, vorbesc și acționează ca oamenii.",
        },
        {
          id: "romana-sub1-fabula-fq8",
          type: "true-false",
          question:
            "Boul din fabulă simbolizează spectatorul pasiv.",
          correct: true,
          explanation:
            "Boul reprezintă spectatorul pasiv, cel care asistă la " +
            "nedreptate fără a interveni.",
        },
        {
          id: "romana-sub1-fabula-fq9",
          type: "multiple-choice",
          question:
            "Din ce tradiție fabulistică europeană se revendică Grigore Alexandrescu?",
          options: [
            "Tradiția romantică germană",
            "Tradiția fabulistică a lui La Fontaine și Esop",
            "Tradiția satirică a lui Swift",
            "Tradiția realistă a lui Balzac",
          ],
          correctIndex: 1,
          explanation:
            "Grigore Alexandrescu este considerat un continuator al tradiției " +
            "fabulistice europene, inspirându-se din opera lui La Fontaine (Franța) " +
            "și Esop (Grecia Antică), adaptând teme universale la realitățile românești.",
        },
        {
          id: "romana-sub1-fabula-fq10",
          type: "true-false",
          question:
            "Fabula «Câinele și cățelul» critică doar ipocrizia lui Samson, nu și naivitatea lui Samurache.",
          correct: false,
          explanation:
            "Fabula critică atât ipocrizia lui Samson (care predică egalitatea " +
            "dar o respinge în practică), cât și naivitatea lui Samurache (care " +
            "crede orbește promisiunile) și pasivitatea boului (care asistă " +
            "fără a interveni).",
        },
      ],
    },

    chapters: [
      // ==================== CHAPTER 1 — Theory ====================
      {
        id: "romana-sub1-fabula-ch1",
        title: "Fabula — «Câinele și cățelul»",
        duration: "~25 min",
        sections: [
          // --- Section 1: Definition ---
          {
            title: "Definiția fabulei",
            content:
              "Fabula este o specie a genului epic, în versuri, cu caracter satiric, " +
              "care prezintă prin intermediul animalelor personificate o critică la " +
              "adresa defectelor morale ale oamenilor.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Fabula** este o specie a **genului epic**, **în versuri**, cu " +
                  "**caracter satiric**, care prezintă prin intermediul **animalelor " +
                  "personificate** o critică la adresa defectelor morale ale oamenilor.\n\n" +
                  "Cele două trăsături esențiale ale fabulei sunt:\n" +
                  "- **caracterul alegoric** — animalele simbolizează tipuri umane;\n" +
                  "- **prezența moralei** — exprimată direct sau indirect, de obicei în final.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen, definiția fabulei trebuie să conțină obligatoriu: " +
                    "(1) specie a genului epic, (2) în versuri, (3) caracter satiric, " +
                    "(4) animale personificate. Cele două trăsături cerute sunt " +
                    "caracterul alegoric și prezența moralei. Compozițional: " +
                    "narațiune + morală.",
                },
              },
            ],
          },
          // --- Section 2: Author ---
          {
            title: "Despre operă și autor",
            content:
              "Grigore Alexandrescu este unul dintre cei mai importanți fabuliști " +
              "ai literaturii române, aparținând generației pașoptiste. «Câinele " +
              "și cățelul» este una dintre fabulele sale cele mai cunoscute.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Grigore Alexandrescu** (1810–1885) este unul dintre cei mai " +
                  "importanți **fabuliști** ai literaturii române, aparținând " +
                  "**generației pașoptiste**. A scris fabule, meditații și elegii, " +
                  "fiind considerat un continuator al tradiției fabulistice europene " +
                  "(La Fontaine, Esop).\n\n" +
                  "«Câinele și cățelul» este una dintre fabulele sale cele mai " +
                  "cunoscute și frecvent cerute la examenul de titularizare.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Nu este nevoie să memorezi biografia completă a lui Alexandrescu. " +
                    "La examen, este suficient să menționezi: fabulist important al " +
                    "literaturii române, generația pașoptistă, continuator al tradiției " +
                    "europene a fabulei.",
                },
              },
            ],
          },
          // --- Section 3: Trait 1 — Allegoric character ---
          {
            title: "Trăsătura 1: Caracterul alegoric",
            content:
              "Personajele sunt animale care simbolizează tipuri umane: dulăul " +
              "Samson reprezintă omul ipocrit și viclean, cățelul Samurache " +
              "este omul naiv, iar boul este spectatorul pasiv.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "O primă trăsătură esențială a fabulei este **caracterul alegoric**. " +
                  "Personajele sunt animale care **simbolizează tipuri umane**:\n\n" +
                  "- **Dulăul Samson** = omul ipocrit și viclean, care predică " +
                  "egalitatea doar când îi convine, dar vrea să păstreze privilegiile;\n" +
                  "- **Cățelul Samurache** = omul naiv, ușor de manipulat prin vorbe " +
                  "frumoase;\n" +
                  "- **Boul** = spectatorul pasiv, cel care asistă la nedreptate fără " +
                  "a interveni.\n\n" +
                  "Samson îi spune boului: el vrea egalitate, toți sunt egali — " +
                  "dar când Samurache, încurajat, îi sare în spinare, Samson își " +
                  "arată adevărata fire: «Noi, frații tăi? Ia caută-ți semenii, " +
                  "lichea nerușinată!»",
              },
            ],
          },
          // --- Section 4: Trait 2 — Moral ---
          {
            title: "Trăsătura 2: Prezența moralei",
            content:
              "Morala este exprimată indirect în finalul operei. Samson afirmă: " +
              "«Vreau egalitate, dar nu pentru căței!», subliniind importanța " +
              "sincerității și demascând ipocrizia.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "O a doua trăsătură specifică fabulei este **prezența moralei**, " +
                  "exprimată **indirect** în finalul operei.\n\n" +
                  "Samson afirmă fără echivoc: «**Vreau egalitate, dar nu pentru " +
                  "căței!**», ceea ce scoate la iveală contradicția dintre ceea ce " +
                  "spune și ceea ce face. Morala subliniază importanța **sincerității** " +
                  "și a **respectului** față de toți, indiferent de condiția socială.\n\n" +
                  "Morala nu este formulată explicit de autor într-un vers separat, " +
                  "ci reiese din comportamentul și replicile personajelor — de aceea " +
                  "este o morală **indirectă**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "La examen, precizează clar dacă morala este directă sau indirectă. " +
                    "În «Câinele și cățelul», morala este INDIRECTĂ — reiese din " +
                    "comportamentul personajelor, nu dintr-o formulare explicită a " +
                    "autorului. Citatul cheie: «Vreau egalitate, dar nu pentru căței!»",
                },
              },
            ],
          },
          // --- Section 5: Theme ---
          {
            title: "Tema fabulei",
            content:
              "Tema fabulei este critica ipocriziei și a dorinței de parvenire. " +
              "Alexandrescu satirizează oamenii care susțin principii frumoase " +
              "în teorie, dar le încalcă în practică.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tema** fabulei este **critica ipocriziei și a dorinței de " +
                  "parvenire**.\n\n" +
                  "Prin comportamentul lui Samson, autorul satirizează oamenii care " +
                  "susțin principii frumoase în teorie, dar le încalcă în practică. " +
                  "Samson vorbește despre egalitate, dar o respinge în momentul în " +
                  "care aceasta l-ar dezavantaja.\n\n" +
                  "În același timp, fabula critică și **naivitatea** celor care cred " +
                  "orbește în promisiunile altora (Samurache) și **pasivitatea** " +
                  "celor care asistă la nedreptate fără a reacționa (boul).",
              },
            ],
          },
          // --- Section 6: Composition & Verse ---
          {
            title: "Compoziție și versificație",
            content:
              "Fabula este structurată în două părți: narațiunea (întâmplarea " +
              "propriu-zisă) și morala. Versurile au măsură inegală, purtând " +
              "amprenta dialogului.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Compozițional, fabula este structurată în **două părți**:\n" +
                  "- **Narațiunea** (întâmplarea propriu-zisă) — dulăul Samson își " +
                  "exprimă nemulțumirea față de mândria celor «de neam» și susține " +
                  "aparent egalitatea. Când cățelul Samurache îl crede și i se " +
                  "alătură, este aspru respins și jignit;\n" +
                  "- **Morala** — reiese indirect din finalul operei.\n\n" +
                  "**Versificația**: versurile au **măsură inegală**, care poartă " +
                  "amprenta dialogului. Falsa modestie a lui Samson este transmisă " +
                  "prin **versuri ample**, în timp ce accesul de mânie este redat " +
                  "prin **versuri scurte**, sacadate.",
              },
            ],
          },
          // --- Section 7: Figures of speech ---
          {
            title: "Figuri de stil",
            content:
              "Personificarea este dominantă. Epitetele, repetițiile, exclamațiile " +
              "și interogațiile retorice completează arsenalul stilistic.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Fabula este bogată în **figuri de stil**:\n\n" +
                  "- **Personificarea** (dominantă) — animalele gândesc, vorbesc și " +
                  "acționează ca oamenii;\n" +
                  "- **Epitetele** — «dulău de curte», «lichea nerușinată» — " +
                  "evidențiază statutul și caracterul personajelor;\n" +
                  "- **Repetițiile** — «Noi, frații tăi?» — accentuează indignarea " +
                  "și ipocrizia lui Samson;\n" +
                  "- **Exclamațiile și interogațiile retorice** — «Noi, frații tăi?» " +
                  "— subliniază tensiunea conflictului.",
              },
            ],
          },
        ],
        examples: [
          {
            title: "Fragment din «Câinele și cățelul»",
            description:
              "«Noi, frații tăi? Ia caută-ți semenii, lichea nerușinată!» — " +
              "Reacția lui Samson când Samurache încearcă să-i fie egal, " +
              "dezvăluind ipocrizia discursului despre egalitate.",
          },
        ],
        keyPoints: [
          {
            text: "Fabula = specie epică, în versuri, caracter satiric",
            important: true,
          },
          { text: "Trăsătura 1: caracterul alegoric", important: true },
          { text: "Trăsătura 2: prezența moralei (indirectă)", important: true },
          {
            text: "Samson = ipocrit, Samurache = naiv, Boul = pasiv",
            important: true,
          },
          { text: "Tema: critica ipocriziei și a dorinței de parvenire" },
          { text: "Compozițional: narațiune + morală" },
          { text: "Figuri de stil: personificarea (dominantă), epitete, repetiții" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-fabula-mq1-1",
              type: "multiple-choice",
              question: "Ce simbolizează dulăul Samson?",
              options: [
                "Omul naiv",
                "Omul ipocrit și viclean",
                "Spectatorul pasiv",
                "Omul cinstit",
              ],
              correctIndex: 1,
              explanation:
                "Samson reprezintă omul ipocrit și viclean, care predică " +
                "egalitatea doar când îi convine, dar vrea să păstreze privilegiile.",
            },
            {
              id: "romana-sub1-fabula-mq1-2",
              type: "true-false",
              question:
                "Morala fabulei este exprimată direct, în primele versuri.",
              correct: false,
              explanation:
                "Morala fabulei este exprimată indirect, în finalul operei, " +
                "prin afirmația lui Samson: «Vreau egalitate, dar nu pentru căței!»",
            },
            {
              id: "romana-sub1-fabula-mq1-3",
              type: "fill-blank",
              question:
                "Fabula este structurată compozițional în două părți: narațiunea și ___.",
              correctAnswers: ["morala"],
              explanation:
                "Compozițional, fabula este structurată în două părți: " +
                "narațiunea (întâmplarea propriu-zisă) și morala.",
            },
            {
              id: "romana-sub1-fabula-mq1-4",
              type: "multiple-choice",
              question:
                "Care este tema fabulei «Câinele și cățelul»?",
              options: [
                "Critica lipsei de educație",
                "Critica ipocriziei și a dorinței de parvenire",
                "Iubirea față de animale",
                "Conflictul dintre generații",
              ],
              correctIndex: 1,
              explanation:
                "Tema fabulei este critica ipocriziei și a dorinței de parvenire. " +
                "Samson susține egalitatea doar în teorie, dar o respinge în " +
                "practică, atunci când aceasta l-ar dezavantaja.",
            },
            {
              id: "romana-sub1-fabula-mq1-5",
              type: "true-false",
              question:
                "Fabula «Câinele și cățelul» este scrisă în proză.",
              correct: false,
              explanation:
                "Fabula este scrisă în versuri, nu în proză. Versurile au " +
                "măsură inegală, purtând amprenta dialogului — versuri ample " +
                "pentru falsa modestie și versuri scurte pentru accesul de mânie.",
            },
            {
              id: "romana-sub1-fabula-mq1-6",
              type: "multiple-choice",
              question:
                "Ce simbolizează cățelul Samurache în fabulă?",
              options: [
                "Omul ipocrit",
                "Spectatorul pasiv",
                "Omul naiv, ușor de manipulat",
                "Omul cinstit și drept",
              ],
              correctIndex: 2,
              explanation:
                "Samurache simbolizează omul naiv, ușor de manipulat prin vorbe " +
                "frumoase. El crede discursul despre egalitate al lui Samson și " +
                "încearcă să i se alăture, dar este aspru respins și jignit.",
            },
            {
              id: "romana-sub1-fabula-mq1-7",
              type: "fill-blank",
              question:
                "Grigore Alexandrescu aparține generației ___ din literatura română.",
              correctAnswers: ["pasoptiste", "pașoptiste"],
              explanation:
                "Grigore Alexandrescu (1810-1885) aparține generației pașoptiste. " +
                "A scris fabule, meditații și elegii, fiind un continuator al " +
                "tradiției fabulistice europene (La Fontaine, Esop).",
            },
            {
              id: "romana-sub1-fabula-mq1-8",
              type: "true-false",
              question:
                "Boul din fabulă simbolizează spectatorul pasiv, cel care asistă la nedreptate fără a interveni.",
              correct: true,
              explanation:
                "Boul reprezintă spectatorul pasiv care asistă la nedreptate " +
                "fără a reacționa. Prin acest personaj, fabula critică " +
                "pasivitatea celor care tolerează ipocrizia și nedreptatea.",
            },
            {
              id: "romana-sub1-fabula-mq1-9",
              type: "multiple-choice",
              question:
                "Ce replică dezvăluie ipocrizia lui Samson când Samurache încearcă să-i fie egal?",
              options: [
                "«Vreau egalitate pentru toți!»",
                "«Noi, frații tăi? Ia caută-ți semenii, lichea nerușinată!»",
                "«Suntem cu toții egali în fața legii.»",
                "«Tu ești fratele meu, Samurache!»",
              ],
              correctIndex: 1,
              explanation:
                "Când Samurache, încurajat de discursul despre egalitate, " +
                "încearcă să i se alăture, Samson reacționează violent: " +
                "«Noi, frații tăi? Ia caută-ți semenii, lichea nerușinată!» — " +
                "dezvăluind contradicția dintre vorbe și fapte.",
            },
            {
              id: "romana-sub1-fabula-mq1-10",
              type: "multiple-choice",
              question:
                "Ce tip de morală are fabula «Câinele și cățelul»?",
              options: [
                "Morală directă, exprimată de autor în primele versuri",
                "Morală directă, exprimată de autor în ultimele versuri",
                "Morală indirectă, care reiese din comportamentul personajelor",
                "Nu are morală",
              ],
              correctIndex: 2,
              explanation:
                "Morala este indirectă — nu este formulată explicit de autor " +
                "într-un vers separat, ci reiese din comportamentul și replicile " +
                "personajelor, culminând cu «Vreau egalitate, dar nu pentru căței!»",
            },
          ],
        },
      },

      // ==================== CHAPTER 2 — Essay Model ====================
      {
        id: "romana-sub1-fabula-ch2",
        title: "Model de eseu — Fabula",
        duration: "~15 min",
        sections: [
          // --- Section 1: Recommended essay structure ---
          {
            title: "Structura recomandată a eseului despre fabulă",
            content:
              "Eseul despre fabulă la Subiectul 1B trebuie să urmeze o structură " +
              "clară: definiție, cele două trăsături cu exemple, temă, compoziție, " +
              "figuri de stil și concluzie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Eseul despre fabulă la **Subiectul 1B** trebuie să urmeze " +
                  "următoarea structură:\n\n" +
                  "**Paragraf 1 — Definiție + încadrare:**\n" +
                  "Fabula = specie a genului epic, în versuri, caracter satiric, " +
                  "animale personificate. Menționează autorul și titlul operei.\n\n" +
                  "**Paragraf 2 — Trăsătura 1 (caracterul alegoric):**\n" +
                  "Prezintă personajele-animale și ce tip uman simbolizează fiecare. " +
                  "Folosește citate din text.\n\n" +
                  "**Paragraf 3 — Trăsătura 2 (prezența moralei):**\n" +
                  "Precizează dacă morala e directă sau indirectă. Citează morala " +
                  "sau fragmentul din care reiese.\n\n" +
                  "**Paragraf 4 — Tema:**\n" +
                  "Identifică tema și leag-o de comportamentul personajelor.\n\n" +
                  "**Paragraf 5 — Compoziție + versificație:**\n" +
                  "Cele două părți (narațiune + morală), măsura versurilor, figuri " +
                  "de stil relevante.\n\n" +
                  "**Paragraf 6 — Concluzie:**\n" +
                  "Sintetizează ideile principale, subliniind valoarea operei.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen, eseul trebuie să conțină minimum 400 de cuvinte. " +
                    "Asigură-te că ai cel puțin 2 citate din text și că fiecare " +
                    "trăsătură este exemplificată. Structura clară pe paragrafe " +
                    "asigură punctaj maxim la organizare.",
                },
              },
            ],
          },
          // --- Section 2: Full essay ---
          {
            title: "Eseu complet — Fabula «Câinele și cățelul»",
            content:
              "Un model complet de eseu despre fabula «Câinele și cățelul» " +
              "de Gr. Alexandrescu, structurat conform cerințelor de la " +
              "Subiectul 1B.",
            contentBlocks: [
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model de eseu — Fabula «Câinele și cățelul» de Gr. Alexandrescu",
                  source: "claude",
                  content:
                    "Fabula este o specie a genului epic, în versuri, cu caracter satiric, " +
                    "care prezintă, prin intermediul animalelor personificate, o critică la " +
                    "adresa defectelor morale ale oamenilor. «Câinele și cățelul» de Grigore " +
                    "Alexandrescu, fabulist important al literaturii române din generația " +
                    "pașoptistă, folosește mijloace artistice specifice pentru a atrage " +
                    "atenția asupra ipocriziei și dorinței de parvenire.\n\n" +
                    "O primă trăsătură esențială a fabulei este caracterul alegoric. " +
                    "Personajele sunt animale — dulăul Samson, cățelul Samurache și un bou — " +
                    "dar ele simbolizează tipuri umane. Samson reprezintă omul ipocrit și " +
                    "viclean, care predică egalitatea doar când îi convine, dar vrea să " +
                    "păstreze privilegiile. Samurache întruchipează omul naiv, ușor de " +
                    "manipulat prin vorbe frumoase, iar boul simbolizează spectatorul pasiv, " +
                    "cel care asistă la nedreptate fără a interveni. Samson îi spune boului " +
                    "că toți sunt egali, dar când Samurache, încurajat de aceste vorbe, " +
                    "încearcă să i se alăture, este aspru respins: «Noi, frații tăi? Ia " +
                    "caută-ți semenii, lichea nerușinată!»\n\n" +
                    "O a doua trăsătură specifică este prezența moralei, exprimată indirect " +
                    "în finalul operei. Samson afirmă fără echivoc: «Vreau egalitate, dar nu " +
                    "pentru căței!», ceea ce scoate la iveală contradicția dintre ceea ce " +
                    "spune și ceea ce face. Morala subliniază importanța sincerității și a " +
                    "respectului față de toți, indiferent de condiția socială.\n\n" +
                    "Tema fabulei este critica ipocriziei și a dorinței de parvenire. Prin " +
                    "comportamentul lui Samson, autorul satirizează oamenii care susțin " +
                    "principii frumoase în teorie, dar le încalcă în practică. Totodată, " +
                    "fabula critică naivitatea celor care cred orbește în promisiunile " +
                    "altora și pasivitatea celor care asistă la nedreptate.\n\n" +
                    "Compozițional, fabula este structurată în două părți: narațiunea " +
                    "(întâmplarea propriu-zisă) și morala. În prima parte, dulăul Samson își " +
                    "exprimă nemulțumirea față de mândria celor «de neam» și susține, aparent, " +
                    "ideea egalității. Când cățelul Samurache îl crede și i se alătură, este " +
                    "aspru respins și jignit. Versurile cu o măsură inegală poartă amprenta " +
                    "dialogului, transpunând sentimentele personajelor: falsa modestie " +
                    "transmisă prin versuri ample și accesul de mânie redat prin versuri " +
                    "scurte, sacadate.\n\n" +
                    "Fabula este bogată în figuri de stil: personificarea este dominantă " +
                    "(animalele gândesc și vorbesc ca oamenii), epitetele («dulău de curte», " +
                    "«lichea nerușinată») evidențiază statutul și caracterul personajelor, " +
                    "iar repetițiile («Noi, frații tăi?») și interogațiile retorice " +
                    "accentuează ipocrizia lui Samson.\n\n" +
                    "În concluzie, fabula «Câinele și cățelul» este o creație alegorică în " +
                    "care Grigore Alexandrescu critică ipocrizia și falsitatea, folosind " +
                    "personaje animale pentru a evidenția defecte umane universale. Cele " +
                    "două trăsături — caracterul alegoric și prezența moralei — fac din " +
                    "această fabulă un exemplu reprezentativ al speciei.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "La fabulă, nu uita să menționezi și figurile de stil: personificarea " +
                    "(animalele gândesc și vorbesc), epitetele, repetițiile. De asemenea, " +
                    "menționează că versurile au măsură inegală — specifică dialogului. " +
                    "Dacă se cere și caracterizarea personajelor, insistă pe Samson: " +
                    "predică egalitatea, dar o respinge când îl afectează personal.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Sfat pentru eseu",
            description:
              "Începe întotdeauna cu definiția speciei (fabula = ...), apoi treci " +
              "la autor și titlu. Acest «tipar» funcționează la toate speciile " +
              "literare cerute la Subiectul 1B.",
          },
        ],
        keyPoints: [
          {
            text: "Structura eseului: definiție → trăsătură 1 → trăsătură 2 → temă → compoziție → concluzie",
            important: true,
          },
          {
            text: "Minimum 2 citate din text pentru punctaj maxim",
            important: true,
          },
          { text: "Fiecare trăsătură trebuie exemplificată cu referire la operă" },
          { text: "Morala indirectă: reiese din replicile personajelor, nu din formulare a autorului" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-fabula-mq2-1",
              type: "multiple-choice",
              question:
                "Cu ce trebuie să începi eseul despre o fabulă?",
              options: [
                "Cu prezentarea autorului",
                "Cu definiția speciei literare",
                "Cu morala fabulei",
                "Cu o opinie personală",
              ],
              correctIndex: 1,
              explanation:
                "Eseul trebuie să înceapă cu definiția speciei literare " +
                "(fabula = specie a genului epic, în versuri, caracter satiric...), " +
                "urmată de menționarea autorului și a titlului operei.",
            },
            {
              id: "romana-sub1-fabula-mq2-2",
              type: "true-false",
              question:
                "La examen, este suficient să menționezi o singură trăsătură a fabulei.",
              correct: false,
              explanation:
                "La examen se cer de obicei două trăsături ale speciei, fiecare " +
                "exemplificată cu referire la opera studiată. O singură trăsătură " +
                "nu asigură punctaj complet.",
            },
            {
              id: "romana-sub1-fabula-mq2-3",
              type: "fill-blank",
              question:
                "Figura de stil dominantă în fabulă, prin care animalele gândesc și vorbesc ca oamenii, este ___.",
              correctAnswers: ["personificarea"],
              explanation:
                "Personificarea este figura de stil dominantă în fabulă, deoarece " +
                "animalele sunt înzestrate cu trăsături umane — gândesc, vorbesc și " +
                "acționează ca oamenii.",
            },
            {
              id: "romana-sub1-fabula-mq2-4",
              type: "multiple-choice",
              question:
                "Ce paragraf al eseului despre fabulă trebuie să conțină informații despre compoziție și versificație?",
              options: [
                "Paragraful 1 (definiție)",
                "Paragraful 3 (trăsătura 2)",
                "Paragraful 5 (compoziție + versificație)",
                "Paragraful 6 (concluzie)",
              ],
              correctIndex: 2,
              explanation:
                "Paragraful 5 tratează compoziția (cele două părți: narațiune + morală) " +
                "și versificația (măsura versurilor, figuri de stil relevante). " +
                "Acesta este un element specific eseului despre fabulă.",
            },
            {
              id: "romana-sub1-fabula-mq2-5",
              type: "true-false",
              question:
                "La examen, este suficient să menționezi o singură trăsătură a fabulei pentru punctaj complet.",
              correct: false,
              explanation:
                "La examen se cer de obicei două trăsături ale speciei, fiecare " +
                "exemplificată cu referire la opera studiată. O singură trăsătură " +
                "nu asigură punctaj complet.",
            },
            {
              id: "romana-sub1-fabula-mq2-6",
              type: "fill-blank",
              question:
                "La examen, eseul trebuie să conțină minimum 2 ___ din text pentru punctaj maxim.",
              correctAnswers: ["citate"],
              explanation:
                "Minimum 2 citate din text sunt necesare pentru a obține punctaj " +
                "maxim. De exemplu: «Noi, frații tăi? Ia caută-ți semenii, lichea " +
                "nerușinată!» și «Vreau egalitate, dar nu pentru căței!»",
            },
            {
              id: "romana-sub1-fabula-mq2-7",
              type: "multiple-choice",
              question:
                "Care sunt cele două trăsături ale fabulei cerute de obicei la examen?",
              options: [
                "Reperele de timp și complexitatea personajelor",
                "Caracterul alegoric și prezența moralei",
                "Narațiunea la persoana I și introspecția",
                "Perspectiva narativă dublă și caracterul subiectiv",
              ],
              correctIndex: 1,
              explanation:
                "Cele două trăsături specifice fabulei sunt: (1) caracterul alegoric " +
                "(animalele simbolizează tipuri umane) și (2) prezența moralei " +
                "(directă sau indirectă, de obicei în final).",
            },
            {
              id: "romana-sub1-fabula-mq2-8",
              type: "true-false",
              question:
                "Structura eseului despre fabulă este identică cu structura eseului despre nuvelă.",
              correct: false,
              explanation:
                "Eseul despre fabulă include elemente specifice acestei specii: " +
                "compoziția (narațiune + morală), versificația (măsura versurilor) " +
                "și figurile de stil. La nuvelă, accentul cade pe repere de timp/spațiu " +
                "și complexitatea personajelor.",
            },
            {
              id: "romana-sub1-fabula-mq2-9",
              type: "multiple-choice",
              question:
                "Ce tip de versuri are fabula «Câinele și cățelul»?",
              options: [
                "Versuri cu măsură egală (14 silabe)",
                "Versuri libere, fără rimă",
                "Versuri cu măsură inegală, purtând amprenta dialogului",
                "Versuri clasice cu rimă împerecheată",
              ],
              correctIndex: 2,
              explanation:
                "Versurile au măsură inegală și poartă amprenta dialogului. " +
                "Falsa modestie a lui Samson este transmisă prin versuri ample, " +
                "iar accesul de mânie este redat prin versuri scurte, sacadate.",
            },
            {
              id: "romana-sub1-fabula-mq2-10",
              type: "fill-blank",
              question:
                "Eseul despre fabulă se încheie cu o ___ care sintetizează ideile principale.",
              correctAnswers: ["concluzie"],
              explanation:
                "Concluzia (paragraful 6) sintetizează ideile principale ale eseului, " +
                "subliniind valoarea operei și reafirmând cele două trăsături ale " +
                "speciei exemplificate pe parcursul eseului.",
            },
          ],
        },
      },
    ],
  },
];
