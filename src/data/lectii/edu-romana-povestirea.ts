import { Lesson } from "@/types/lectii";

export const eduRomanaPovestireaLessons: Lesson[] = [
  {
    topicId: "romana-sub1-povestirea",
    title: "Povestirea: «Negustor lipscan» (Hanu Ancuței) — M. Sadoveanu",
    duration: "40 min",
    objectives: [
      "Să definească povestirea ca specie a genului epic",
      "Să exemplifice două trăsături ale povestirii din «Negustor lipscan»",
      "Să prezinte tema, acțiunea și personajele operei",
      "Să aplice structura standard de eseu pentru povestirea în ramă",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "romana-sub1-povestirea",
      questions: [
        {
          id: "romana-sub1-povestirea-fq1",
          type: "multiple-choice",
          question:
            "Cum se numește personajul-narator din «Negustor lipscan»?",
          options: [
            "Neculai Isac",
            "Damian Cristișor",
            "Moș Leonte",
            "Comisul Ionică",
          ],
          correctIndex: 1,
          explanation:
            "Personajul-narator din «Negustor lipscan» este Damian Cristișor, " +
            "care povestește despre călătoria sa în «țara nemțească».",
        },
        {
          id: "romana-sub1-povestirea-fq2",
          type: "true-false",
          question:
            "«Negustor lipscan» este o povestire în ramă din volumul «Hanu Ancuței» (1928).",
          correct: true,
          explanation:
            "«Negustor lipscan» este a șaptea povestire din volumul " +
            "Hanu Ancuței (1928), fiind o povestire în ramă.",
        },
        {
          id: "romana-sub1-povestirea-fq3",
          type: "fill-blank",
          question:
            "Punctul culminant al povestirii este episodul cu morarul prusac care câștigă un proces împotriva ___.",
          correctAnswers: ["regelui"],
          explanation:
            "Morarul prusac câștigă un proces împotriva regelui, semn al " +
            "justiției drepte — acesta este punctul culminant al povestirii.",
        },
        {
          id: "romana-sub1-povestirea-fq4",
          type: "multiple-choice",
          question:
            "Ce tip de perspectivă narativă are «Negustor lipscan»?",
          options: [
            "Perspectivă narativă unică, la persoana a III-a",
            "Perspectivă narativă dublă: narator-martor și personaj-narator",
            "Perspectivă narativă omniscientă",
            "Perspectivă narativă obiectivă",
          ],
          correctIndex: 1,
          explanation:
            "«Negustor lipscan» are perspectivă narativă dublă: un narator la persoana " +
            "a III-a fixează cadrul hanului, iar Damian Cristișor povestește la persoana I.",
        },
        {
          id: "romana-sub1-povestirea-fq5",
          type: "true-false",
          question:
            "Damian Cristișor călătorește spre Leipzig pentru a studia la universitate.",
          correct: false,
          explanation:
            "Damian Cristișor este negustor, nu student. El călătorește " +
            "spre Leipzig într-o expediție comercială, de unde și titlul " +
            "«Negustor lipscan» (= negustor din Leipzig).",
        },
        {
          id: "romana-sub1-povestirea-fq6",
          type: "fill-blank",
          question:
            "Povestirea este o specie a genului epic, în care faptele sunt prezentate cu un pronunțat caracter ___.",
          correctAnswers: ["subiectiv"],
          explanation:
            "Povestirea se caracterizează prin pronunțatul caracter subiectiv " +
            "al prezentării faptelor, din perspectiva unui narator martor " +
            "sau participant direct.",
        },
        {
          id: "romana-sub1-povestirea-fq7",
          type: "multiple-choice",
          question:
            "Cine este gazda de la Hanul Ancuței?",
          options: [
            "Damian Cristișor",
            "Moș Leonte",
            "Ancuța",
            "Comisul Ionică",
          ],
          correctIndex: 2,
          explanation:
            "Ancuța este gazda hanului care poartă numele ei. Ea oferă " +
            "ospitalitatea tradițională călătorilor.",
        },
        {
          id: "romana-sub1-povestirea-fq8",
          type: "true-false",
          question:
            "Moș Leonte îl descrie pe Damian Cristișor ca pe un om aspru și neprietenos.",
          correct: false,
          explanation:
            "Moș Leonte spune despre Damian că «se va arăta pururi blajin " +
            "și cu prietinie», deci este prezentat ca un om prietenos, nu aspru.",
        },
        {
          id: "romana-sub1-povestirea-fq9",
          type: "multiple-choice",
          question:
            "Ce element narativ conferă povestirii «Negustor lipscan» structura de «povestire în povestire»?",
          options: [
            "Folosirea dialogului",
            "Rama narativă (cadrul hanului + narațiunea interioară)",
            "Descrierile detaliate ale naturii",
            "Prezența unui singur narator la persoana I",
          ],
          correctIndex: 1,
          explanation:
            "Povestirea în ramă presupune o «povestire în povestire»: la început " +
            "și sfârșit, un narator la persoana a III-a fixează cadrul hanului (rama), " +
            "iar la mijloc Damian Cristișor povestește la persoana I (narațiunea interioară).",
        },
        {
          id: "romana-sub1-povestirea-fq10",
          type: "true-false",
          question:
            "Volumul «Hanu Ancuței» cuprinde povestiri spuse de un singur călător.",
          correct: false,
          explanation:
            "Volumul cuprinde nouă povestiri spuse de diverși călători la un han " +
            "moldovenesc, fiecare aducând o întâmplare din viața sa. Nu un singur " +
            "călător, ci mai mulți contribuie cu povestiri diferite.",
        },
      ],
    },

    chapters: [
      // ─── Chapter 1: Povestirea — «Negustor lipscan» de M. Sadoveanu ───
      {
        id: "romana-sub1-povestirea-ch1",
        title: "Povestirea — «Negustor lipscan» de M. Sadoveanu",
        duration: "~25 min",
        sections: [
          {
            title: "Definiția povestirii",
            content:
              "Povestirea este o specie a genului epic, în care faptele sunt prezentate " +
              "cu un pronunțat caracter subiectiv, din perspectiva unui narator martor " +
              "sau participant direct la întâmplările relatate.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Povestirea** este o specie a genului epic, în care faptele sunt " +
                  "prezentate cu un **pronunțat caracter subiectiv**, din perspectiva " +
                  "unui **narator martor** sau **participant direct** la întâmplările relatate.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La povestire, cele două trăsături cele mai ușoare sunt: " +
                    "(1) caracterul subiectiv și (2) perspectiva narativă dublă " +
                    "(povestire în ramă). Pornești cu definiția, apoi treci " +
                    "la cele două trăsături cu exemplificare din text.",
                },
              },
            ],
          },
          {
            title: "Date despre operă și autor",
            content:
              "«Negustor lipscan» este a șaptea povestire din volumul Hanu Ancuței " +
              "(1928), operă de maturitate a lui Mihail Sadoveanu, și se înscrie în " +
              "specia povestirii în ramă. Volumul cuprinde nouă povestiri spuse de " +
              "diverși călători la un han moldovenesc.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**«Negustor lipscan»** este a **șaptea povestire** din volumul " +
                  "**Hanu Ancuței** (1928), operă de maturitate a lui **Mihail Sadoveanu**, " +
                  "și se înscrie în specia **povestirii în ramă**.\n\n" +
                  "Volumul cuprinde **nouă povestiri** spuse de diverși călători la un " +
                  "han moldovenesc, fiecare aducând o întâmplare din viața sa.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Un intro bun în eseu: «Mihail Sadoveanu, unul dintre cei mai " +
                    "prolifici scriitori români, este cunoscut prin volumul Hanu Ancuței " +
                    "(1928), care cuprinde nouă povestiri în ramă. «Negustor lipscan» " +
                    "este a șaptea povestire din acest volum.»",
                },
              },
            ],
          },
          {
            title: "Trăsătura 1: Caracterul subiectiv",
            content:
              "O primă trăsătură definitorie a povestirii este caracterul subiectiv. " +
              "Întâmplările sunt relatate din perspectiva unui personaj-narator, Damian " +
              "Cristișor, care își evocă propria călătorie în «țara nemțească». " +
              "Utilizarea persoanei I singular («am văzut», «mi s-a părut») accentuează " +
              "autenticitatea și implicarea afectivă.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "O primă trăsătură definitorie a povestirii este **caracterul subiectiv**.\n\n" +
                  "Întâmplările sunt relatate din perspectiva unui personaj-narator, " +
                  "**Damian Cristișor**, care își evocă propria călătorie în «țara nemțească» " +
                  "și impresiile personale despre obiceiurile și oamenii de acolo.\n\n" +
                  "Utilizarea **persoanei I singular** în istorisirea principală " +
                  "(«am văzut», «mi s-a părut») accentuează **autenticitatea** și " +
                  "**implicarea afectivă** a naratorului.",
              },
            ],
          },
          {
            title: "Trăsătura 2: Perspectiva narativă dublă",
            content:
              "A doua trăsătură specifică este perspectiva narativă dublă: narator-martor " +
              "și personaj-narator. La început și sfârșit, un narator la persoana a III-a, " +
              "omniscient, fixează cadrul hanului și ceremonialul ospitalității oferite de " +
              "Ancuța, conturând rama narativă. Apoi, Damian preia firul și povestește la " +
              "persoana I, conferind narațiunii dinamism și culoare locală.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "A doua trăsătură specifică este **perspectiva narativă dublă**: " +
                  "narator-martor și personaj-narator.\n\n" +
                  "**Rama narativă** (persoana a III-a): La începutul și sfârșitul " +
                  "povestirii, un narator **omniscient** fixează cadrul hanului " +
                  "moldovenesc și ceremonialul ospitalității oferite de Ancuța.\n\n" +
                  "**Narațiunea interioară** (persoana I): **Damian Cristișor** preia " +
                  "firul și povestește la persoana I, conferind narațiunii " +
                  "**dinamism** și **culoare locală**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Povestirea în ramă = «o povestire în povestire». La început " +
                    "și sfârșit e cadrul hanului (rama), la mijloc e povestirea lui " +
                    "Damian (narațiunea interioară). Această structură se regăsește " +
                    "în toate cele nouă povestiri din Hanu Ancuței.",
                },
              },
            ],
          },
          {
            title: "Tema povestirii",
            content:
              "Tema povestirii este călătoria unui negustor moldovean într-o lume " +
              "străină, plină de noutăți și contraste. Călătoria are o dublă " +
              "semnificație: una economică — negustorul merge să cumpere marfă — " +
              "și una simbolică — el descoperă o lume civilizată, dar lipsită de " +
              "savoarea vieții moldovenești.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tema** povestirii este **călătoria unui negustor moldovean într-o " +
                  "lume străină**, plină de noutăți și contraste.\n\n" +
                  "Călătoria are o **dublă semnificație**:\n" +
                  "• **Economică** — negustorul merge să cumpere marfă la Leipzig\n" +
                  "• **Simbolică** — el descoperă o lume civilizată, dar lipsită de " +
                  "savoarea vieții moldovenești",
              },
            ],
          },
          {
            title: "Acțiunea — momentele subiectului",
            content:
              "Expozițiunea: cadrul hanului moldovenesc, sosirea lui Damian Cristișor. " +
              "Intriga: dorința lui Damian de a împărtăși o întâmplare din expediția " +
              "comercială către Leipzig. Desfășurarea acțiunii: călătoria prin țări " +
              "străine, impactul civilizației occidentale. Punctul culminant: morarul " +
              "prusac câștigă un proces împotriva regelui. Deznodământul: readuce " +
              "narațiunea la Hanul Ancuței.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Acțiunea se desfășoară pe **momentele subiectului**:\n\n" +
                  "**Expozițiunea:** Cadrul hanului moldovenesc, sosirea lui Damian " +
                  "Cristișor. Ancuța pregătește ospățul, călătorii se adună.\n\n" +
                  "**Intriga:** Dorința lui Damian de a împărtăși o întâmplare " +
                  "din expediția comercială către **Leipzig**.\n\n" +
                  "**Desfășurarea acțiunii:** Călătoria prin țări străine, impactul " +
                  "civilizației occidentale. Damian descrie cu uimire și admirație " +
                  "obiceiurile și realizările lumii apusene.\n\n" +
                  "**Punctul culminant:** Morarul prusac **câștigă un proces " +
                  "împotriva regelui** — semn al justiției drepte, care-l " +
                  "impresionează profund pe Damian.\n\n" +
                  "**Deznodământul:** Readuce narațiunea la **Hanul Ancuței**, " +
                  "unde călătorii rămân uimiți de cele auzite.",
              },
            ],
          },
          {
            title: "Personajul principal — Damian Cristișor",
            content:
              "Damian Cristișor: om plăcut, vesel, modest («vă rog să mă socotiți " +
              "ca cel mai umil rob»), responsabil și credincios. Portret fizic: " +
              "«un bărbat cu căciulă și giubea, barba-i era astâmpărată și rotunjită». " +
              "Moș Leonte: «se va arăta pururi blajin și cu prietinie.»",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Damian Cristișor** este personajul principal și naratorul " +
                  "povestirii interioare.\n\n" +
                  "**Portret fizic** (caracterizare directă):\n" +
                  "• «un bărbat cu căciulă și giubea, barba-i era astâmpărată " +
                  "și rotunjită»\n\n" +
                  "**Portret moral** (caracterizare directă și indirectă):\n" +
                  "• Om **plăcut, vesel, modest**: «vă rog să mă socotiți ca cel " +
                  "mai umil rob»\n" +
                  "• **Responsabil și credincios** — își îndeplinește cu seriozitate " +
                  "misiunea comercială\n" +
                  "• Moș Leonte: «se va arăta pururi **blajin** și cu **prietinie**»",
              },
            ],
          },
        ],
        examples: [
          {
            title: "Fragment introductiv pentru eseu",
            description:
              "«Mihail Sadoveanu, unul dintre cei mai prolifici scriitori români, " +
              "este cunoscut prin volumul Hanu Ancuței (1928). «Negustor lipscan», " +
              "a șaptea povestire din volum, se înscrie în specia povestirii în ramă.» " +
              "— Un paragraf introductiv eficient, urmat de definiția povestirii.",
          },
        ],
        keyPoints: [
          {
            text: "Povestirea = specie epică, caracter subiectiv, narator martor/participant",
            important: true,
          },
          {
            text: "«Negustor lipscan» — Hanu Ancuței (1928), Mihail Sadoveanu",
            important: true,
          },
          { text: "Trăsătura 1: caracterul subiectiv (persoana I — «am văzut»)", important: true },
          {
            text: "Trăsătura 2: perspectiva narativă dublă — povestire în ramă (pers. III + pers. I)",
            important: true,
          },
          { text: "Tema: călătoria ca descoperire — semnificație economică și simbolică" },
          { text: "Punct culminant: morarul prusac câștigă procesul împotriva regelui" },
          { text: "Damian Cristișor: modest, vesel, blajin — «cel mai umil rob»" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-povestirea-mq1-1",
              type: "multiple-choice",
              question:
                "Cum se numește personajul-narator din «Negustor lipscan»?",
              options: [
                "Neculai Isac",
                "Damian Cristișor",
                "Moș Leonte",
                "Comisul Ionică",
              ],
              correctIndex: 1,
              explanation:
                "Personajul-narator din «Negustor lipscan» este Damian Cristișor, " +
                "care povestește despre călătoria sa în «țara nemțească».",
            },
            {
              id: "romana-sub1-povestirea-mq1-2",
              type: "true-false",
              question:
                "«Negustor lipscan» este o povestire în ramă din volumul «Hanu Ancuței» (1928).",
              correct: true,
              explanation:
                "«Negustor lipscan» este a șaptea povestire din volumul " +
                "Hanu Ancuței (1928), fiind o povestire în ramă.",
            },
            {
              id: "romana-sub1-povestirea-mq1-3",
              type: "fill-blank",
              question:
                "Punctul culminant al povestirii este episodul cu morarul prusac care câștigă un proces împotriva ___.",
              correctAnswers: ["regelui"],
              explanation:
                "Morarul prusac câștigă un proces împotriva regelui, semn al " +
                "justiției drepte — acesta este punctul culminant al povestirii.",
            },
            {
              id: "romana-sub1-povestirea-mq1-4",
              type: "multiple-choice",
              question:
                "Câte povestiri cuprinde volumul «Hanu Ancuței»?",
              options: [
                "Cinci povestiri",
                "Șapte povestiri",
                "Nouă povestiri",
                "Doisprezece povestiri",
              ],
              correctIndex: 2,
              explanation:
                "Volumul «Hanu Ancuței» (1928) cuprinde nouă povestiri spuse de " +
                "diverși călători la un han moldovenesc, fiecare aducând o " +
                "întâmplare din viața sa.",
            },
            {
              id: "romana-sub1-povestirea-mq1-5",
              type: "true-false",
              question:
                "Povestirea «Negustor lipscan» folosește exclusiv perspectiva narativă la persoana I.",
              correct: false,
              explanation:
                "Povestirea are perspectivă narativă dublă: la început și sfârșit, " +
                "un narator la persoana a III-a fixează cadrul hanului (rama narativă), " +
                "iar la mijloc Damian Cristișor povestește la persoana I (narațiunea interioară).",
            },
            {
              id: "romana-sub1-povestirea-mq1-6",
              type: "fill-blank",
              question:
                "Călătoria lui Damian Cristișor are o dublă semnificație: una economică și una ___.",
              correctAnswers: ["simbolica", "simbolică"],
              explanation:
                "Călătoria are semnificație economică (negustorul merge să cumpere " +
                "marfă la Leipzig) și simbolică (el descoperă o lume civilizată, " +
                "dar lipsită de savoarea vieții moldovenești).",
            },
            {
              id: "romana-sub1-povestirea-mq1-7",
              type: "multiple-choice",
              question:
                "Ce tip de portret moral are Damian Cristișor?",
              options: [
                "Om aspru și neprietenos",
                "Om plăcut, vesel și modest",
                "Om distant și rece",
                "Om agresiv și impulsiv",
              ],
              correctIndex: 1,
              explanation:
                "Damian Cristișor este descris ca un om plăcut, vesel și modest. " +
                "El însuși spune: «vă rog să mă socotiți ca cel mai umil rob», " +
                "iar Moș Leonte confirmă: «se va arăta pururi blajin și cu prietinie».",
            },
            {
              id: "romana-sub1-povestirea-mq1-8",
              type: "true-false",
              question:
                "Titlul «Negustor lipscan» se referă la un negustor din Leipzig.",
              correct: true,
              explanation:
                "«Lipscan» înseamnă «din Leipzig» (Lipsia, în română veche). " +
                "Damian Cristișor este negustor, nu student, și călătorește " +
                "spre Leipzig într-o expediție comercială.",
            },
            {
              id: "romana-sub1-povestirea-mq1-9",
              type: "multiple-choice",
              question:
                "Ce rol are Ancuța în structura volumului «Hanu Ancuței»?",
              options: [
                "Este naratorul principal al tuturor povestirilor",
                "Este personajul antagonist",
                "Este gazda hanului care oferă ospitalitate călătorilor",
                "Este soția lui Damian Cristișor",
              ],
              correctIndex: 2,
              explanation:
                "Ancuța este gazda hanului care poartă numele ei. Ea oferă " +
                "ospitalitatea tradițională călătorilor și creează cadrul în care " +
                "aceștia povestesc întâmplări din viața lor.",
            },
            {
              id: "romana-sub1-povestirea-mq1-10",
              type: "fill-blank",
              question:
                "Utilizarea persoanei I singular în narațiune («am văzut», «mi s-a părut») accentuează ___ și implicarea afectivă.",
              correctAnswers: ["autenticitatea"],
              explanation:
                "Persoana I singular accentuează autenticitatea narațiunii — " +
                "faptele sunt prezentate din perspectiva directă a naratorului " +
                "participant, ceea ce conferă povestirii un pronunțat caracter subiectiv.",
            },
          ],
        },
      },

      // ─── Chapter 2: Model de eseu — Povestirea ───
      {
        id: "romana-sub1-povestirea-ch2",
        title: "Model de eseu — Povestirea",
        duration: "~15 min",
        sections: [
          {
            title: "Structura recomandată a eseului",
            content:
              "1. Definiția speciei literare + date despre autor/operă\n" +
              "2. Trăsătura 1 cu exemplificare din text\n" +
              "3. Trăsătura 2 cu exemplificare din text\n" +
              "4. Element de construcție 1 (recomandat: tema)\n" +
              "5. Element de construcție 2 (recomandat: acțiunea)\n" +
              "6. Concluzie (opțional)",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Structura recomandată a eseului:**\n\n" +
                  "1. **Definiția speciei literare** + câteva date despre autor și volum\n" +
                  "2. **Trăsătura 1** (caracterul subiectiv) cu exemplificare concretă din text\n" +
                  "3. **Trăsătura 2** (perspectiva narativă dublă) cu exemplificare concretă din text\n" +
                  "4. **Element de construcție 1** — recomandat: **tema** (cu referire la secvență)\n" +
                  "5. **Element de construcție 2** — recomandat: **acțiunea** (cu referire la secvență)\n" +
                  "6. **Concluzie** (opțional, dacă mai ai spațiu)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Tema și acțiunea sunt cele mai sigure elemente de construcție — " +
                    "sunt ușor de exemplificat și nu riscați să greșiți. La povestire, " +
                    "nu uita să menționezi perspectiva narativă dublă cu exemple " +
                    "concrete (persoana a III-a în ramă, persoana I în narațiunea interioară).",
                },
              },
            ],
          },
          {
            title: "Model complet de eseu — Povestirea «Negustor lipscan»",
            content:
              "Un model complet de eseu despre povestirea «Negustor lipscan» " +
              "de M. Sadoveanu, structurat conform cerințelor de la Subiectul 1B.",
            contentBlocks: [
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model de eseu — Povestirea «Negustor lipscan» de M. Sadoveanu",
                  source: "claude",
                  content:
                    "Povestirea este o specie a genului epic, în care faptele sunt prezentate " +
                    "cu un pronunțat caracter subiectiv, din perspectiva unui narator martor " +
                    "sau participant direct la întâmplările relatate. «Negustor lipscan» este " +
                    "a șaptea povestire din volumul Hanu Ancuței (1928), operă de maturitate " +
                    "a lui Mihail Sadoveanu, și se înscrie în specia povestirii în ramă.\n\n" +
                    "O primă trăsătură definitorie a povestirii este caracterul subiectiv. " +
                    "Întâmplările sunt relatate din perspectiva unui personaj-narator, Damian " +
                    "Cristișor, care își evocă propria călătorie în «țara nemțească» și " +
                    "impresiile personale despre obiceiurile și oamenii de acolo. Utilizarea " +
                    "persoanei I singular în istorisirea principală («am văzut», «mi s-a " +
                    "părut») accentuează autenticitatea și implicarea afectivă.\n\n" +
                    "A doua trăsătură specifică este perspectiva narativă dublă: narator-martor " +
                    "și personaj-narator. La începutul și sfârșitul povestirii, un narator la " +
                    "persoana a III-a, omniscient, fixează cadrul hanului și ceremonialul " +
                    "ospitalității oferite de Ancuța, conturând rama narativă. Apoi, Damian " +
                    "preia firul și povestește la persoana I, conferind narațiunii dinamism " +
                    "și culoare locală.\n\n" +
                    "Tema povestirii este călătoria unui negustor moldovean într-o lume " +
                    "străină, plină de noutăți și contraste. Călătoria are o dublă " +
                    "semnificație: una economică — negustorul merge să cumpere marfă — și " +
                    "una simbolică — el descoperă o lume civilizată, dar lipsită de savoarea " +
                    "vieții moldovenești.\n\n" +
                    "Acțiunea se desfășoară pe momentele subiectului. În expozițiune, suntem " +
                    "introduși în cadrul hanului moldovenesc. Intriga este declanșată de " +
                    "dorința lui Damian de a împărtăși o întâmplare dintr-o expediție " +
                    "comercială către Leipzig. Desfășurarea acțiunii urmărește călătoria " +
                    "prin țări străine, evidențiind impactul civilizației occidentale. " +
                    "Punctul culminant este momentul în care Damian povestește despre morarul " +
                    "prusac care câștigă un proces împotriva regelui, semn al justiției " +
                    "drepte. Deznodământul readuce narațiunea la Hanul Ancuței, unde " +
                    "călătorii rămân uimiți.\n\n" +
                    "În concluzie, povestirea «Negustor lipscan» ilustrează stilul sadovenian " +
                    "prin echilibrul dintre epicul narativ și lirismul evocării, prin umorul " +
                    "blând și reflecția asupra contrastului dintre lumea moldovenească și " +
                    "civilizația apuseană.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Dacă se cere caracterizarea lui Damian Cristișor: este un om plăcut, " +
                    "vesel, modest («vă rog să mă socotiți ca cel mai umil rob»), responsabil " +
                    "și credincios. Portret fizic: «un bărbat cu căciulă și giubea, " +
                    "barba-i era astâmpărată și rotunjită». Moș Leonte: «se va arăta " +
                    "pururi blajin și cu prietinie.»",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Verificarea numărului de cuvinte",
            description:
              "Numeri câte cuvinte ai pe un rând (~10) și înmulțești cu " +
              "numărul de rânduri scrise. La 30 de rânduri ai ~300 de cuvinte. " +
              "O foaie de caiet studențesc are 32 de rânduri — deci aproape o foaie completă.",
          },
        ],
        keyPoints: [
          {
            text: "Structura: definiție → trăsături + exemplificare → elemente de construcție → concluzie",
            important: true,
          },
          { text: "Tema și acțiunea sunt cele mai sigure elemente de construcție" },
          {
            text: "Exemplifică cu citate concrete: «am văzut», «mi s-a părut» (pers. I), rama la pers. III",
            important: true,
          },
          { text: "Nu depăși limita de 300-400 cuvinte" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-povestirea-mq2-1",
              type: "multiple-choice",
              question:
                "Cu ce ar trebui să înceapă eseul despre o specie literară?",
              options: [
                "Cu biografia completă a autorului",
                "Cu definiția speciei literare",
                "Cu momentele subiectului",
                "Cu o citire expresivă a textului",
              ],
              correctIndex: 1,
              explanation:
                "Eseul trebuie să înceapă cu definiția speciei literare, " +
                "urmată de date despre autor și operă.",
            },
            {
              id: "romana-sub1-povestirea-mq2-2",
              type: "true-false",
              question:
                "La eseul despre povestire, este suficient să menționezi doar narațiunea interioară, fără rama narativă.",
              correct: false,
              explanation:
                "Perspectiva narativă dublă presupune ambele planuri: rama " +
                "narativă (persoana a III-a) și narațiunea interioară (persoana I). " +
                "Trebuie menționate ambele pentru a exemplifica trăsătura.",
            },
            {
              id: "romana-sub1-povestirea-mq2-3",
              type: "fill-blank",
              question:
                "Cele două elemente de construcție recomandate pentru eseu sunt tema și ___.",
              correctAnswers: ["actiunea", "acțiunea"],
              explanation:
                "Tema și acțiunea sunt cele mai sigure și accesibile " +
                "elemente de construcție — sunt ușor de exemplificat și " +
                "oferă suficient material pentru eseu.",
            },
            {
              id: "romana-sub1-povestirea-mq2-4",
              type: "true-false",
              question:
                "La eseul despre povestire, perspectiva narativă dublă se exemplifică menționând doar persoana a III-a din ramă.",
              correct: false,
              explanation:
                "Perspectiva narativă dublă presupune ambele planuri: rama narativă " +
                "(persoana a III-a, naratorul omniscient) și narațiunea interioară " +
                "(persoana I, Damian Cristișor). Trebuie menționate și exemplificate ambele.",
            },
            {
              id: "romana-sub1-povestirea-mq2-5",
              type: "multiple-choice",
              question:
                "Care este ordinea corectă a elementelor în eseul despre povestire?",
              options: [
                "Tema → Definiția → Trăsături → Concluzie",
                "Definiția speciei → Trăsătura 1 → Trăsătura 2 → Tema → Acțiunea",
                "Acțiunea → Tema → Trăsătura 1 → Definiția speciei",
                "Concluzia → Definiția → Trăsătura 1 → Trăsătura 2",
              ],
              correctIndex: 1,
              explanation:
                "Ordinea recomandată este: (1) definiția speciei literare + date despre " +
                "autor, (2) trăsătura 1 cu exemplificare, (3) trăsătura 2 cu " +
                "exemplificare, (4) tema, (5) acțiunea, (6) concluzie opțională.",
            },
            {
              id: "romana-sub1-povestirea-mq2-6",
              type: "fill-blank",
              question:
                "Povestirea în ramă înseamnă «o povestire în ___».",
              correctAnswers: ["povestire"],
              explanation:
                "Povestirea în ramă este «o povestire în povestire»: la început și " +
                "sfârșit apare cadrul hanului (rama), iar la mijloc se desfășoară " +
                "povestirea lui Damian Cristișor (narațiunea interioară).",
            },
            {
              id: "romana-sub1-povestirea-mq2-7",
              type: "multiple-choice",
              question:
                "Ce citate concrete sunt recomandate pentru exemplificarea caracterului subiectiv?",
              options: [
                "«A fost odată ca niciodată»",
                "«am văzut», «mi s-a părut»",
                "«Vreau egalitate, dar nu pentru căței!»",
                "«Nu bogăția, ci liniștea colibei»",
              ],
              correctIndex: 1,
              explanation:
                "Verbele la persoana I singular din narațiunea lui Damian — «am văzut», " +
                "«mi s-a părut» — sunt exemple concrete ale caracterului subiectiv, " +
                "arătând implicarea afectivă a naratorului.",
            },
            {
              id: "romana-sub1-povestirea-mq2-8",
              type: "true-false",
              question:
                "Depășirea limitei de 400 de cuvinte aduce puncte suplimentare la examen.",
              correct: false,
              explanation:
                "Depășirea limitei nu aduce puncte suplimentare. Dimpotrivă, " +
                "neîncadrarea în limita de cuvinte cerută duce la pierderea " +
                "punctajului pentru redactare.",
            },
            {
              id: "romana-sub1-povestirea-mq2-9",
              type: "multiple-choice",
              question:
                "Ce trăsătură a povestirii se referă la faptul că faptele sunt prezentate din perspectiva personajului-narator?",
              options: [
                "Perspectiva narativă dublă",
                "Caracterul subiectiv",
                "Caracterul dramatizat",
                "Complexitatea personajelor",
              ],
              correctIndex: 1,
              explanation:
                "Caracterul subiectiv se referă la faptul că întâmplările sunt " +
                "relatate din perspectiva personajului-narator, cu implicare afectivă " +
                "și utilizarea persoanei I.",
            },
            {
              id: "romana-sub1-povestirea-mq2-10",
              type: "fill-blank",
              question:
                "Rama narativă din «Negustor lipscan» este fixată de un narator la persoana a ___.",
              correctAnswers: ["III-a", "treia", "IIIa", "3-a"],
              explanation:
                "Rama narativă (cadrul hanului moldovenesc) este prezentată de un " +
                "narator omniscient la persoana a III-a, care fixează decorul și " +
                "ceremonialul ospitalității oferite de Ancuța.",
            },
          ],
        },
      },
    ],
  },
];
