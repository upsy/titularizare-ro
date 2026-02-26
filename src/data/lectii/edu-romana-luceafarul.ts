import { Lesson } from "@/types/lectii";

export const eduRomanaLuceafarulLessons: Lesson[] = [
  {
    topicId: "romana-sub1-luceafarul",
    title: "«Luceafărul» — M. Eminescu (Romantism)",
    duration: "45 min",
    objectives: [
      "Să definească genul liric și să încadreze «Luceafărul» în romantism",
      "Să exemplifice două trăsături ale romantismului din poem",
      "Să aplice structura standard de eseu pentru «Luceafărul»",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "romana-sub1-luceafarul",
      questions: [
        {
          id: "romana-sub1-luceafarul-fq1",
          type: "multiple-choice",
          question: "Câte tablouri are poemul «Luceafărul»?",
          options: ["2", "3", "4", "5"],
          correctIndex: 2,
          explanation:
            "Poemul «Luceafărul» este structurat în patru tablouri: " +
            "(I) fata privește spre cer, (II) iubirea Cătălina–Cătălin, " +
            "(III) călătoria la Demiurg, (IV) detașarea lui Hyperion.",
        },
        {
          id: "romana-sub1-luceafarul-fq2",
          type: "true-false",
          question:
            "În tabloul III, Demiurgul acceptă să-l facă pe Luceafăr muritor.",
          correct: false,
          explanation:
            "Demiurgul refuză cererea Luceafărului de a deveni muritor, " +
            "subliniind diferența ireductibilă dintre cele două lumi.",
        },
        {
          id: "romana-sub1-luceafarul-fq3",
          type: "fill-blank",
          question:
            "Tema poeziei «Luceafărul» este condiția omului de ___.",
          correctAnswers: ["geniu"],
          explanation:
            "Tema centrală a poemului este condiția omului de geniu, " +
            "ilustrată prin personajul Hyperion, ființă superioară care " +
            "aspiră spre cunoaștere și absolut.",
        },
        {
          id: "romana-sub1-luceafarul-fq4",
          type: "multiple-choice",
          question:
            "Care este incipitul poemului «Luceafărul»?",
          options: [
            "«Eu sunt luceafărul de sus»",
            "«A fost o dată, ca-n povești»",
            "«Ce-ți pasă ție, chip de lut»",
            "«Din umbra falnicelor bolți»",
          ],
          correctIndex: 1,
          explanation:
            "Incipitul poemului este «A fost o dată, ca-n povești» — " +
            "formulă specifică basmului, care subliniază caracterul " +
            "epico-liric al operei.",
        },
        {
          id: "romana-sub1-luceafarul-fq5",
          type: "true-false",
          question:
            "Eminescu s-a inspirat din basmul «Fata din grădina de aur» și mitul Zburătorului.",
          correct: true,
          explanation:
            "Eminescu a preluat elemente din basmele «Fata din grădina de aur» " +
            "și «Miron și frumoasa fără corp», precum și din mitul Zburătorului.",
        },
        {
          id: "romana-sub1-luceafarul-fq6",
          type: "fill-blank",
          question:
            "Poemul are 98 de strofe, de tip ___.",
          correctAnswers: ["catren"],
          explanation:
            "Poemul «Luceafărul» este alcătuit din 98 de strofe de tip catren " +
            "(strofe de câte 4 versuri), cu măsura de 7-8 silabe.",
        },
        {
          id: "romana-sub1-luceafarul-fq7",
          type: "multiple-choice",
          question:
            "Ce personaj simbolizează iubirea pământească, efemeră?",
          options: [
            "Hyperion",
            "Demiurgul",
            "Cătălin",
            "Fata de împărat",
          ],
          correctIndex: 2,
          explanation:
            "Cătălin reprezintă iubirea pământească, efemeră și accesibilă, " +
            "în opoziție cu Luceafărul/Hyperion, care simbolizează aspirația " +
            "spre absolut.",
        },
        {
          id: "romana-sub1-luceafarul-fq8",
          type: "true-false",
          question:
            "«Luceafărul» este un poem exclusiv liric, fără elemente epice.",
          correct: false,
          explanation:
            "«Luceafărul» este un poem epico-liric. Incipitul «A fost o dată, " +
            "ca-n povești» indică prezența elementelor epice (narațiune, " +
            "personaje, acțiune), alături de cele lirice.",
        },
        {
          id: "romana-sub1-luceafarul-fq9",
          type: "multiple-choice",
          question:
            "Ce exprimă pronumele «ei» și «noi» din versurile poemului?",
          options: [
            "Diferența dintre bogați și săraci",
            "Opoziția dintre lumea muritorilor și cea a ființelor eterne",
            "Conflictul dintre bărbați și femei",
            "Diferența dintre natură și civilizație",
          ],
          correctIndex: 1,
          explanation:
            "Pronumele «ei» și «noi» subliniază antiteza fundamentală din poem: " +
            "«Ei au doar stele cu noroc / Și prigoniri de soarte» (muritorii) vs. " +
            "«Noi nu avem nici timp, nici loc / Și nu cunoaștem moarte» (ființele eterne).",
        },
        {
          id: "romana-sub1-luceafarul-fq10",
          type: "true-false",
          question:
            "Fata de împărat rămâne credincioasă Luceafărului și refuză iubirea lui Cătălin.",
          correct: false,
          explanation:
            "Fata de împărat, deși inițial fascinată de Luceafăr, alege în cele " +
            "din urmă iubirea pământească a lui Cătălin. Această alegere subliniază " +
            "drama geniului: ființa superioară nu poate fi înțeleasă de lumea obișnuită.",
        },
      ],
    },

    chapters: [
      // ==================== CHAPTER 1 — Theory ====================
      {
        id: "romana-sub1-luceafarul-ch1",
        title: "«Luceafărul» — M. Eminescu (Romantism)",
        duration: "~25 min",
        sections: [
          // --- Section 1: Definition ---
          {
            title: "Definiția genului liric",
            content:
              "Genul liric cuprinde operele literare în care autorul își exprimă " +
              "direct sentimentele, trăirile și gândurile, folosind un limbaj " +
              "artistic și imagini sugestive.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Genul liric** cuprinde operele literare în care autorul își " +
                  "exprimă **direct** sentimentele, trăirile și gândurile, folosind " +
                  "un **limbaj artistic** și **imagini sugestive**.\n\n" +
                  "Două trăsături ale **romantismului** ușor de exemplificat din " +
                  "«Luceafărul»:\n" +
                  "- **antiteza** (opoziția dintre lumi diferite);\n" +
                  "- **inspirația din folclor** (basme și mituri populare).",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La «Luceafărul», cele două trăsături ale romantismului sunt: " +
                    "(1) folosirea antitezei (lumea pământească vs. lumea cerească) " +
                    "și (2) inspirația din folclor (basmele și mitul Zburătorului). " +
                    "Două elemente de compoziție: incipitul cu formulă de basm + " +
                    "cele 4 tablouri.",
                },
              },
            ],
          },
          // --- Section 2: About work & author ---
          {
            title: "Despre operă și autor",
            content:
              "«Luceafărul» de Mihai Eminescu este considerată capodopera " +
              "poeziei românești, scrisă în secolul al XIX-lea. Poemul se " +
              "încadrează în curentul literar romantism.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "«Luceafărul» de **Mihai Eminescu** (1850–1889) este considerată " +
                  "**capodopera poeziei românești**, scrisă în secolul al XIX-lea. " +
                  "Publicată în **1883** în «Almanahul Societății Academice " +
                  "Social-Literare România Jună» (Viena), " +
                  "poezia a fost elaborată de-a lungul mai multor ani, existând " +
                  "cinci variante manuscrise.\n\n" +
                  "Poemul se încadrează în curentul literar **romantism** și este " +
                  "un **poem epico-liric** — îmbină elemente lirice (exprimarea " +
                  "sentimentelor) cu elemente epice (narațiunea, personajele, " +
                  "acțiunea).",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Nu este nevoie să memorezi toate cele cinci variante manuscrise. " +
                    "La examen, este suficient să menționezi: Mihai Eminescu, " +
                    "capodopera poeziei românești, curentul romantic, poem epico-liric.",
                },
              },
            ],
          },
          // --- Section 3: Trait 1 — Antithesis ---
          {
            title: "Trăsătura 1: Antiteza (opoziția dintre lumi)",
            content:
              "Antiteza este prezentă în opoziția dintre lumea pământească a " +
              "fetei de împărat și lumea cerească a Luceafărului, precum și " +
              "în contrastul dintre Cătălin și Hyperion.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "O primă trăsătură a romantismului în poem este **antiteza** — " +
                  "opoziția dintre lumi diferite.\n\n" +
                  "**Lumea pământească** a fetei de împărat: «Din umbra falnicelor " +
                  "bolți», «Spre umbra vechiului castel» — este lumea concretă, " +
                  "a oamenilor muritori.\n\n" +
                  "**Lumea cerească** a Luceafărului: «Colo-n palate de mărgăran», " +
                  "«Eu sunt luceafărul de sus» — este lumea abstractă, a " +
                  "absolutului și eternității.\n\n" +
                  "Antiteza apare și între **Cătălin** (iubirea pământească, " +
                  "efemeră) și **Luceafăr/Hyperion** (aspirația spre ideal). " +
                  "Pronumele «ei» și «noi» subliniază diferența:\n" +
                  "- «**Ei** au doar stele cu noroc / Și prigoniri de soarte»\n" +
                  "- «**Noi** nu avem nici timp, nici loc / Și nu cunoaștem moarte»",
              },
            ],
          },
          // --- Section 4: Trait 2 — Folklore inspiration ---
          {
            title: "Trăsătura 2: Inspirația din folclor",
            content:
              "Eminescu preia elemente din basmele «Fata din grădina de aur» " +
              "și «Miron și frumoasa fără corp», precum și mitul Zburătorului.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "A doua trăsătură a romantismului este **inspirația din folclor**. " +
                  "Eminescu preia elemente din:\n\n" +
                  "- basmul «**Fata din grădina de aur**» (de Kunisch) — motivul fetei " +
                  "iubite de o ființă supranaturală;\n" +
                  "- basmul «**Miron și frumoasa fără corp**» — tema iubirii imposibile " +
                  "între lumi diferite;\n" +
                  "- **mitul Zburătorului** — ființa cerească care coboară noaptea " +
                  "la fereastra fetelor, simbolizând visarea și aspirația spre ideal.\n\n" +
                  "Incipitul operei, «**A fost o dată, ca-n povești**», folosește " +
                  "formula specifică basmului, confirmând legătura cu folclorul și " +
                  "anunțând caracterul epico-liric al poemului.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "La examen, pentru trăsătura «inspirația din folclor» este " +
                    "suficient să menționezi 2 surse folclorice + incipitul cu " +
                    "formulă de basm. Nu trebuie să cunoști conținutul basmelor, " +
                    "ci doar titlurile și legătura cu poemul.",
                },
              },
            ],
          },
          // --- Section 5: Theme ---
          {
            title: "Tema poeziei",
            content:
              "Tema este condiția omului de geniu, ilustrată prin Hyperion, " +
              "ființă superioară care aspiră spre cunoaștere și absolut.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tema** poeziei este **condiția omului de geniu**, ilustrată " +
                  "prin personajul **Hyperion**.\n\n" +
                  "Hyperion este o ființă superioară, care aspiră spre **cunoaștere** " +
                  "și **absolut**. Diferența dintre cele două lumi — cea a geniului " +
                  "și cea a oamenilor obișnuiți — este subliniată în final prin " +
                  "celebrul vers: «**Ce-ți pasă ție, chip de lut…**»\n\n" +
                  "Geniul este condamnat la **singurătate**, deoarece nu poate " +
                  "coborî la nivelul lumii obișnuite, iar lumea nu poate urca " +
                  "la nivelul său. Aceasta este drama fundamentală a poemului.",
              },
            ],
          },
          // --- Section 6: Composition ---
          {
            title: "Compoziție și versificație",
            content:
              "Poemul are 98 strofe tip catren, măsura 7-8 silabe, ritm iambic " +
              "combinat cu amfibrahic. Este structurat în 4 tablouri.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Incipitul** operei este formula specifică basmului: «**A fost " +
                  "o dată, ca-n povești**», prin care se anunță caracterul epico-liric.\n\n" +
                  "Poemul este structurat în **4 tablouri**:\n" +
                  "- **Tabloul I**: fata de împărat, visătoare, privește spre cer " +
                  "și este fascinată de Luceafăr;\n" +
                  "- **Tabloul II**: iubirea pământească dintre Cătălina și Cătălin;\n" +
                  "- **Tabloul III**: Luceafărul călătorește prin univers la " +
                  "Demiurg, cerând să devină muritor — dar i se refuză;\n" +
                  "- **Tabloul IV**: Hyperion se detașează de lumea oamenilor, " +
                  "acceptând condiția sa superioară, dar singuratică.\n\n" +
                  "**Versificația**: 98 de strofe de tip **catren** (4 versuri " +
                  "per strofă), cu măsura de **7-8 silabe** și ritm **iambic** " +
                  "combinat cu **amfibrahic**. Compoziția simetrică: tablourile " +
                  "I și IV constituie **cadrul** (perspectiva pământească), iar " +
                  "II și III formează **miezul** (întâlnirile și călătoria cosmică).",
              },
            ],
          },
          // --- Section 7: Characters ---
          {
            title: "Personajele poemului",
            content:
              "Principalele personaje: Hyperion (Luceafărul), fata de împărat, " +
              "Cătălin, Demiurgul. Fiecare reprezintă un plan al operei.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Principalele personaje ale poemului:\n\n" +
                  "- **Hyperion/Luceafărul** — ființă cerească, simbol al geniului. " +
                  "Aspiră spre cunoaștere și absolut, dar este condamnat la " +
                  "singurătate eternă;\n" +
                  "- **Fata de împărat** — frumoasă și visătoare, «o prea frumoasă " +
                  "fată», «mândră-n toate cele». Inițial fascinată de Luceafăr, " +
                  "în cele din urmă alege iubirea pământească;\n" +
                  "- **Cătălin** — pajul, simbol al iubirii pământești, concrete " +
                  "și efemere. Opus polar al Luceafărului;\n" +
                  "- **Demiurgul** — creatorul universului, cel care refuză cererea " +
                  "Luceafărului de a deveni muritor, subliniind diferența " +
                  "ireductibilă dintre cele două lumi.",
              },
            ],
          },
        ],
        examples: [
          {
            title: "Fragment — antiteza ei/noi",
            description:
              "«Ei au doar stele cu noroc / Și prigoniri de soarte» vs. " +
              "«Noi nu avem nici timp, nici loc / Și nu cunoaștem moarte» — " +
              "Opoziția fundamentală dintre lumea muritorilor și cea a " +
              "ființelor eterne.",
          },
        ],
        keyPoints: [
          {
            text: "Luceafărul = poem epico-liric, curent: romantism",
            important: true,
          },
          {
            text: "Trăsătura 1: antiteza — lumea pământească vs. cerească",
            important: true,
          },
          {
            text: "Trăsătura 2: inspirația din folclor (basme + mit)",
            important: true,
          },
          {
            text: "Tema: condiția omului de geniu (Hyperion)",
            important: true,
          },
          { text: "Incipit cu formulă de basm: «A fost o dată, ca-n povești»" },
          { text: "4 tablouri: I-fata, II-Cătălin, III-Demiurg, IV-detașarea" },
          { text: "98 strofe catren, 7-8 silabe, ritm iambic + amfibrahic" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-luceafarul-mq1-1",
              type: "multiple-choice",
              question: "Câte tablouri are poemul «Luceafărul»?",
              options: ["2", "3", "4", "5"],
              correctIndex: 2,
              explanation:
                "Poemul «Luceafărul» este structurat în patru tablouri: " +
                "(I) fata privește spre cer, (II) iubirea Cătălina–Cătălin, " +
                "(III) călătoria la Demiurg, (IV) detașarea lui Hyperion.",
            },
            {
              id: "romana-sub1-luceafarul-mq1-2",
              type: "true-false",
              question:
                "În tabloul III, Demiurgul acceptă să-l facă pe Luceafăr muritor.",
              correct: false,
              explanation:
                "Demiurgul refuză cererea Luceafărului de a deveni muritor, " +
                "subliniind diferența ireductibilă dintre cele două lumi.",
            },
            {
              id: "romana-sub1-luceafarul-mq1-3",
              type: "fill-blank",
              question:
                "Tema poeziei «Luceafărul» este condiția omului de ___.",
              correctAnswers: ["geniu"],
              explanation:
                "Tema centrală a poemului este condiția omului de geniu, " +
                "ilustrată prin personajul Hyperion, ființă superioară care " +
                "aspiră spre cunoaștere și absolut.",
            },
            {
              id: "romana-sub1-luceafarul-mq1-4",
              type: "multiple-choice",
              question:
                "În ce an a fost publicat poemul «Luceafărul»?",
              options: ["1870", "1883", "1889", "1875"],
              correctIndex: 1,
              explanation:
                "«Luceafărul» a fost publicat în 1883, în «Almanahul Societății " +
                "Academice Social-Literare România Jună» (Viena). Eminescu a " +
                "lucrat la poem mai mulți ani, existând cinci variante manuscrise.",
            },
            {
              id: "romana-sub1-luceafarul-mq1-5",
              type: "true-false",
              question:
                "Poemul «Luceafărul» este un poem exclusiv liric.",
              correct: false,
              explanation:
                "«Luceafărul» este un poem epico-liric, nu exclusiv liric. " +
                "Incipitul «A fost o dată, ca-n povești» anunță prezența " +
                "elementelor epice (narațiune, personaje, acțiune) alături " +
                "de cele lirice (exprimarea sentimentelor).",
            },
            {
              id: "romana-sub1-luceafarul-mq1-6",
              type: "multiple-choice",
              question:
                "Ce personaj refuză cererea Luceafărului de a deveni muritor?",
              options: [
                "Fata de împărat",
                "Cătălin",
                "Demiurgul",
                "Un angel ceresc",
              ],
              correctIndex: 2,
              explanation:
                "Demiurgul, creatorul universului, refuză cererea Luceafărului " +
                "de a deveni muritor în tabloul III, subliniind diferența " +
                "ireductibilă dintre cele două lumi.",
            },
            {
              id: "romana-sub1-luceafarul-mq1-7",
              type: "fill-blank",
              question:
                "Eminescu s-a inspirat din basmul «Fata din grădina de ___» de Kunisch.",
              correctAnswers: ["aur"],
              explanation:
                "Basmul «Fata din grădina de aur» de Kunisch conține motivul " +
                "fetei iubite de o ființă supranaturală, element preluat de " +
                "Eminescu în construcția poemului «Luceafărul».",
            },
            {
              id: "romana-sub1-luceafarul-mq1-8",
              type: "true-false",
              question:
                "Antiteza din poem se manifestă prin opoziția dintre lumea pământească și lumea cerească.",
              correct: true,
              explanation:
                "Antiteza este o trăsătură fundamentală a romantismului în " +
                "poem. Lumea pământească («Din umbra falnicelor bolți») se " +
                "opune lumii cerești («Eu sunt luceafărul de sus»), iar " +
                "Cătălin (iubirea efemeră) se opune lui Hyperion (aspirația " +
                "spre absolut).",
            },
            {
              id: "romana-sub1-luceafarul-mq1-9",
              type: "multiple-choice",
              question:
                "Ce rimă și măsură are poemul «Luceafărul»?",
              options: [
                "Versuri libere, fără rimă",
                "7-8 silabe, ritm iambic combinat cu amfibrahic",
                "12 silabe, ritm trohaic",
                "5-6 silabe, ritm dactilic",
              ],
              correctIndex: 1,
              explanation:
                "Poemul are 98 de strofe de tip catren cu măsura de 7-8 " +
                "silabe și ritm iambic combinat cu amfibrahic. Compoziția " +
                "simetrică subliniază echilibrul dintre tablourile terestre " +
                "și cele cosmice.",
            },
            {
              id: "romana-sub1-luceafarul-mq1-10",
              type: "true-false",
              question:
                "Tablourile I și IV formează miezul poemului (întâlnirile și călătoria cosmică).",
              correct: false,
              explanation:
                "Tablourile I și IV constituie cadrul (perspectiva " +
                "pământească), nu miezul. Tablourile II și III formează " +
                "miezul poemului (întâlnirile și călătoria cosmică la Demiurg).",
            },
          ],
        },
      },

      // ==================== CHAPTER 2 — Essay Model ====================
      {
        id: "romana-sub1-luceafarul-ch2",
        title: "Model de eseu — «Luceafărul» (Romantism)",
        duration: "~15 min",
        sections: [
          // --- Section 1: Recommended essay structure ---
          {
            title: "Structura recomandată a eseului despre «Luceafărul»",
            content:
              "Eseul despre «Luceafărul» la Subiectul 1B trebuie să urmeze o " +
              "structură clară: definiție gen liric, încadrare în romantism, " +
              "cele două trăsături cu exemple, temă, compoziție, concluzie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Eseul despre «Luceafărul» la **Subiectul 1B** trebuie să urmeze " +
                  "următoarea structură:\n\n" +
                  "**Paragraf 1 — Definiție + încadrare:**\n" +
                  "Genul liric = operele în care autorul exprimă direct sentimentele. " +
                  "Menționează: Mihai Eminescu, capodoperă, curent romantic, poem " +
                  "epico-liric.\n\n" +
                  "**Paragraf 2 — Trăsătura 1 (antiteza):**\n" +
                  "Prezintă opoziția dintre lumea pământească și cea cerească. " +
                  "Folosește citate: «Din umbra falnicelor bolți» vs. «Eu sunt " +
                  "luceafărul de sus». Menționează și antiteza Cătălin–Luceafăr " +
                  "și pronumele «ei» vs. «noi».\n\n" +
                  "**Paragraf 3 — Trăsătura 2 (inspirația din folclor):**\n" +
                  "Menționează sursele: basmele «Fata din grădina de aur», " +
                  "«Miron și frumoasa fără corp», mitul Zburătorului. Citează " +
                  "incipitul.\n\n" +
                  "**Paragraf 4 — Tema:**\n" +
                  "Condiția omului de geniu (Hyperion). Citatul: «Ce-ți pasă " +
                  "ție, chip de lut…»\n\n" +
                  "**Paragraf 5 — Compoziție:**\n" +
                  "Incipitul + cele 4 tablouri + versificația (98 catrene, " +
                  "7-8 silabe, ritm iambic + amfibrahic).\n\n" +
                  "**Paragraf 6 — Concluzie:**\n" +
                  "Sintetizează ideile și subliniază importanța operei.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen, eseul trebuie să conțină minimum 400 de cuvinte. " +
                    "Pentru «Luceafărul», ai multe citate disponibile — folosește " +
                    "cel puțin 3-4 în eseu. Reține cele 4 tablouri pe scurt: " +
                    "I-fata, II-Cătălin, III-Demiurg, IV-detașarea.",
                },
              },
            ],
          },
          // --- Section 2: Full essay ---
          {
            title: "Eseu complet — «Luceafărul» de M. Eminescu",
            content:
              "Un model complet de eseu despre «Luceafărul» de M. Eminescu, " +
              "structurat conform cerințelor de la Subiectul 1B.",
            contentBlocks: [
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model de eseu — «Luceafărul» de M. Eminescu (Romantism)",
                  source: "claude",
                  content:
                    "Genul liric cuprinde operele literare în care autorul își " +
                    "exprimă direct sentimentele, trăirile și gândurile, folosind " +
                    "un limbaj artistic și imagini sugestive. «Luceafărul» de Mihai " +
                    "Eminescu, scrisă în secolul al XIX-lea, este considerată o " +
                    "capodoperă a poeziei românești. Poemul se încadrează în curentul " +
                    "literar romantism și este un poem epico-liric, îmbinând elementele " +
                    "lirice (exprimarea sentimentelor) cu cele epice (narațiunea, " +
                    "personajele, acțiunea).\n\n" +
                    "O primă trăsătură a romantismului în poem este antiteza — opoziția " +
                    "dintre lumi diferite. Contrastul fundamental se realizează între " +
                    "lumea pământească a fetei de împărat: «Din umbra falnicelor bolți», " +
                    "«Spre umbra vechiului castel» și lumea cerească a Luceafărului: " +
                    "«Colo-n palate de mărgăran», «Eu sunt luceafărul de sus». Antiteza " +
                    "apare și între Cătălin (iubirea pământească, efemeră) și Luceafăr " +
                    "(aspirația spre absolut). Pronumele «ei» și «noi» subliniază această " +
                    "diferență: «Ei au doar stele cu noroc / Și prigoniri de soarte» " +
                    "versus «Noi nu avem nici timp, nici loc / Și nu cunoaștem moarte».\n\n" +
                    "A doua trăsătură a romantismului este inspirația din folclor. " +
                    "Eminescu preia elemente din basmele «Fata din grădina de aur» " +
                    "și «Miron și frumoasa fără corp», precum și mitul Zburătorului, " +
                    "ființa cerească care coboară noaptea la fereastra fetelor, " +
                    "simbolizând visarea și aspirația spre ideal. Incipitul operei, " +
                    "«A fost o dată, ca-n povești», folosește formula specifică basmului, " +
                    "confirmând legătura strânsă cu folclorul.\n\n" +
                    "Tema poeziei este condiția omului de geniu, ilustrată prin " +
                    "personajul Hyperion. Acesta este o ființă superioară, care aspiră " +
                    "spre cunoaștere, ideal și absolut. Diferența ireductibilă dintre " +
                    "cele două lumi este subliniată în final: «Ce-ți pasă ție, chip de " +
                    "lut…» Geniul este condamnat la singurătate, deoarece nu poate " +
                    "coborî la nivelul lumii obișnuite, iar lumea nu poate urca la " +
                    "nivelul său.\n\n" +
                    "Incipitul operei începe cu formula specifică basmului: «A fost " +
                    "o dată, ca-n povești», prin care cititorul este anunțat că " +
                    "textul este un poem epico-liric. Fata de împărat este descrisă " +
                    "ca «o prea frumoasă fată», «mândră-n toate cele». Poemul este " +
                    "structurat în patru tablouri. În tabloul I, fata de împărat " +
                    "privește visătoare spre cer și este fascinată de Luceafăr. " +
                    "Tabloul II arată iubirea pământească dintre Cătălina și Cătălin, " +
                    "iubire concretă și accesibilă. În tabloul III, Luceafărul " +
                    "călătorește prin univers pentru a cere Demiurgului să devină " +
                    "muritor, dar i se refuză. Tabloul IV îl arată pe Hyperion " +
                    "detașat de lumea oamenilor, acceptând condiția sa superioară, " +
                    "dar singuratică.\n\n" +
                    "Poemul are 98 de strofe de tip catren, cu măsura versurilor de " +
                    "7-8 silabe și ritm iambic combinat cu amfibrahic. Compoziția " +
                    "este simetrică: tablourile I și IV constituie cadrul (perspectiva " +
                    "pământească), iar II și III formează miezul (întâlnirile și " +
                    "călătoria cosmică).\n\n" +
                    "În concluzie, «Luceafărul» explorează tema geniului și singurătății " +
                    "sale, arătând lupta dintre aspirațiile spre absolut și realitatea " +
                    "lumii muritoare. Cele două trăsături ale romantismului — antiteza " +
                    "și inspirația din folclor — fac din acest poem o capodoperă a " +
                    "literaturii române.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Reține cele 4 tablouri — sunt ușor de confundat la examen! " +
                    "Un truc mnemic: F-C-D-H (Fata, Cătălin, Demiurg, Hyperion). " +
                    "Dacă se cere caracterizarea unui personaj, cel mai ușor de " +
                    "dezvoltat este Hyperion: ființă cerească, geniu, aspiră spre " +
                    "absolut, condamnat la singurătate.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Sfat pentru eseu",
            description:
              "La «Luceafărul», ai foarte multe citate disponibile. Folosește " +
              "cel puțin câte un citat pentru fiecare trăsătură și pentru temă. " +
              "Citatul «Ce-ți pasă ție, chip de lut…» poate fi folosit atât la " +
              "temă, cât și la antiteză.",
          },
        ],
        keyPoints: [
          {
            text: "Structura eseului: definiție → trăsătură 1 (antiteză) → trăsătură 2 (folclor) → temă → compoziție → concluzie",
            important: true,
          },
          {
            text: "Cel puțin 3-4 citate din text pentru punctaj maxim",
            important: true,
          },
          { text: "Mnemic tablouri: F-C-D-H (Fata, Cătălin, Demiurg, Hyperion)" },
          { text: "Concluzia trebuie să reia cele două trăsături menționate" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-luceafarul-mq2-1",
              type: "multiple-choice",
              question:
                "Care sunt cele două trăsături ale romantismului recomandate pentru eseu?",
              options: [
                "Personificarea și metafora",
                "Antiteza și inspirația din folclor",
                "Ironia și satira",
                "Simbolismul și hermetismul",
              ],
              correctIndex: 1,
              explanation:
                "Cele două trăsături ale romantismului cele mai ușor de " +
                "exemplificat din «Luceafărul» sunt antiteza (opoziția " +
                "dintre lumi) și inspirația din folclor (basme + mit).",
            },
            {
              id: "romana-sub1-luceafarul-mq2-2",
              type: "true-false",
              question:
                "Eseul despre «Luceafărul» poate fi scris fără niciun citat din text.",
              correct: false,
              explanation:
                "Eseul trebuie să conțină citate din text pentru a obține " +
                "punctaj complet. La «Luceafărul» sunt recomandate cel puțin " +
                "3-4 citate: pentru antiteză, folclor și temă.",
            },
            {
              id: "romana-sub1-luceafarul-mq2-3",
              type: "fill-blank",
              question:
                "Incipitul poemului folosește formula specifică ___: «A fost o dată, ca-n povești».",
              correctAnswers: ["basmului"],
              explanation:
                "Incipitul «A fost o dată, ca-n povești» folosește formula " +
                "specifică basmului, subliniind legătura cu folclorul și " +
                "caracterul epico-liric al poemului.",
            },
            {
              id: "romana-sub1-luceafarul-mq2-4",
              type: "multiple-choice",
              question:
                "Câte citate din text sunt recomandate pentru eseul despre «Luceafărul»?",
              options: ["1-2", "3-4", "5-6", "Nu sunt necesare citate"],
              correctIndex: 1,
              explanation:
                "Pentru punctaj maxim, eseul despre «Luceafărul» trebuie " +
                "să conțină cel puțin 3-4 citate din text: pentru antiteză, " +
                "folclor și temă.",
            },
            {
              id: "romana-sub1-luceafarul-mq2-5",
              type: "true-false",
              question:
                "Citatul «Ce-ți pasă ție, chip de lut…» poate fi folosit doar la antiteză, nu și la temă.",
              correct: false,
              explanation:
                "Citatul «Ce-ți pasă ție, chip de lut…» poate fi folosit " +
                "atât la temă (condiția geniului), cât și la antiteză " +
                "(opoziția dintre lumea cerească și cea pământească). Este " +
                "un citat versatil și foarte util în eseu.",
            },
            {
              id: "romana-sub1-luceafarul-mq2-6",
              type: "multiple-choice",
              question:
                "Care este mnemonicul recomandat pentru cele 4 tablouri?",
              options: [
                "F-C-D-H (Fata, Cătălin, Demiurg, Hyperion)",
                "H-D-C-F (Hyperion, Demiurg, Cătălin, Fata)",
                "L-Z-D-G (Luceafăr, Zburător, Demiurg, Geniu)",
                "C-H-F-D (Cătălin, Hyperion, Fata, Demiurg)",
              ],
              correctIndex: 0,
              explanation:
                "Mnemonicul F-C-D-H corespunde ordinii tablourilor: " +
                "(I) Fata de împărat, (II) Cătălin, (III) Demiurgul, " +
                "(IV) Hyperion se detașează. Este cel mai simplu mod de a " +
                "reține structura poemului.",
            },
            {
              id: "romana-sub1-luceafarul-mq2-7",
              type: "fill-blank",
              question:
                "Eseul trebuie să conțină minimum ___ de cuvinte.",
              correctAnswers: ["400"],
              explanation:
                "La examen, eseul despre «Luceafărul» trebuie să conțină " +
                "minimum 400 de cuvinte. Având multe citate disponibile din " +
                "text, această cerință este ușor de atins.",
            },
            {
              id: "romana-sub1-luceafarul-mq2-8",
              type: "true-false",
              question:
                "Concluzia eseului trebuie să reia cele două trăsături ale romantismului menționate anterior.",
              correct: true,
              explanation:
                "Concluzia unui eseu bun sintetizează ideile principale, " +
                "inclusiv cele două trăsături ale romantismului (antiteza " +
                "și inspirația din folclor). Aceasta oferă coerență și " +
                "rotunjime eseului.",
            },
            {
              id: "romana-sub1-luceafarul-mq2-9",
              type: "multiple-choice",
              question:
                "Ce element de compoziție are un rol esențial în primul paragraf al eseului?",
              options: [
                "Comicul de nume",
                "Incipitul cu formulă de basm",
                "Definiția genului liric și încadrarea în romantism",
                "Figurile de stil din tabloul IV",
              ],
              correctIndex: 2,
              explanation:
                "Primul paragraf al eseului trebuie să cuprindă definiția " +
                "genului liric și încadrarea operei în curentul romantic, " +
                "menționând: Mihai Eminescu, capodoperă, poem epico-liric.",
            },
            {
              id: "romana-sub1-luceafarul-mq2-10",
              type: "true-false",
              question:
                "Cel mai ușor personaj de dezvoltat la cerința de caracterizare este Cătălin.",
              correct: false,
              explanation:
                "Cel mai ușor personaj de dezvoltat este Hyperion: ființă " +
                "cerească, geniu, aspiră spre absolut, condamnat la " +
                "singurătate. Cătălin are mai puțin material în text " +
                "pentru o caracterizare detaliată.",
            },
          ],
        },
      },
    ],
  },
];
