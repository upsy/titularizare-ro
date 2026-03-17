import { Lesson } from "@/types/lectii";

export const eduPedagogieStiinteExercitiuLessons: Lesson[] = [
  {
    topicId: "edu-ped-stiinte-exercitiu",
    title: "Exercițiul cu material individual — model de eseu (Subiectul 3)",
    duration: "55 min",
    objectives: [
      "Să definească exercițiul cu material individual ca modalitate specifică în educația timpurie",
      "Să identifice domeniul exclusiv: Științe — Activitate matematică",
      "Să diferențieze limitele numerației pe grupe: mică 1-3, mijlocie 1-5, mare 1-10",
      "Să descrie cele două sarcini de lucru: formarea mulțimilor și raportarea număr-cantitate",
      "Să explice etapa de retenție și transfer (greșeala intenționată la tabla magnetică)",
      "Să aplice structura eseului la diferite grupe de vârstă și teme anuale",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    chapters: [
      {
        id: "exercitiu-definitie",
        title: "Definiția, domeniul și specificul exercițiului cu material individual",
        duration: "25 min",
        sections: [
          {
            title: "Definiția exercițiului cu material individual",
            content:
              "Exercițiul cu material individual este o modalitate specifică de realizare " +
              "a unor activități didactice în educația timpurie, ce se desfășoară în cadrul " +
              "activităților matematice, unde preșcolarii execută sarcinile date de educatoare " +
              "cu scopul de a-și forma deprinderi de muncă independentă și însușirea unui " +
              "limbaj matematic corect și coerent.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Exercițiul cu material individual** este o modalitate specifică " +
                  "de realizare a unor activități didactice **în educația timpurie**, " +
                  "ce se desfășoară **în cadrul activităților matematice**, unde " +
                  "preșcolarii execută sarcinile date de educatoare cu scopul de a-și " +
                  "forma **deprinderi de muncă independentă** și **însușirea unui " +
                  "limbaj matematic corect și coerent**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Definiția trebuie să conțină: (1) «modalitate specifică», " +
                    "(2) «în educația timpurie», (3) «activități matematice», " +
                    "(4) scopul — deprinderi de muncă independentă + limbaj matematic.",
                },
              },
            ],
          },
          {
            title: "Domeniul experiențial",
            content:
              "Exercițiul cu material individual se realizează exclusiv la Științe — " +
              "Activitate matematică. Nu se face la DLC sau alte domenii.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Exercițiul cu material individual se realizează **exclusiv** la:\n\n" +
                  "**Științe** — Activitate matematică\n\n" +
                  "Nu se face la DLC, DOS sau alte domenii experiențiale. " +
                  "Este singura modalitate specifică legată exclusiv de matematică.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Dacă la examen te întreabă de exercițiu cu material individual " +
                    "la DLC sau DOS, nu se poate! Ăsta e chiar la Științe, la matematică.",
                },
              },
            ],
          },
          {
            title: "Limitele numerației pe grupe de vârstă",
            content:
              "Grupa mică: 1-3. Grupa mijlocie: 1-5. Grupa mare: 1-10.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Limitele numerației variază în funcție de grupa de vârstă:\n\n" +
                  "| Grupă | Vârstă | Limite numerație | Nr. mulțimi |\n" +
                  "|-------|--------|------------------|-------------|\n" +
                  "| Mică | 3-4 ani | **1-3** | 1 (sau 2) |\n" +
                  "| Mijlocie | 4-5 ani | **1-5** | 2 |\n" +
                  "| Mare | 5-6 ani | **1-10** | 3 |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Propoziția «Numerația se va realiza în limitele 1-10» " +
                    "arată corectorului că știi să predai! E propoziția care " +
                    "face diferența între grupe — dacă ai altă grupă, schimbi " +
                    "doar limita (1-3 sau 1-5).",
                },
              },
            ],
          },
          {
            title: "Numărul de mulțimi pe grupe",
            content:
              "Grupa mică: 1-2 mulțimi. Grupa mijlocie: 2 mulțimi. Grupa mare: 3 mulțimi.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Numărul de mulțimi (tipuri de fructe) pe care le formează " +
                  "copiii variază:\n\n" +
                  "- **Grupa mică**: 1 mulțime (sau 2)\n" +
                  "- **Grupa mijlocie**: 2 mulțimi\n" +
                  "- **Grupa mare**: 3 mulțimi\n\n" +
                  "Exemplu (grupa mare): mulțimea cireșelor, mulțimea " +
                  "vișinelor, mulțimea caiselor — fructe de vară " +
                  "(tema «Când, cum și de ce se întâmplă»).",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Fructele se aleg în funcție de tema anuală de studiu. " +
                    "Dacă tema e «Când, cum și de ce se întâmplă» — fructe de vară. " +
                    "Numărul de elemente din fiecare mulțime trebuie să fie " +
                    "în limitele numerației grupei (max 10 la grupa mare).",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Adaptare la grupa mică (1-3)",
            description:
              "Grupa mică: numerația 1-3, 1-2 mulțimi de fructe, " +
              "jetoane cu maxim 3 elemente per mulțime. " +
              "Sarcinile sunt simplificate, dar structura e aceeași.",
          },
          {
            title: "Diferența față de jocul didactic",
            description:
              "Exercițiul cu material individual are etapă de retenție și transfer " +
              "(greșeala intenționată), pe când jocul didactic are reguli de joc. " +
              "Ambele sunt la Științe/Matematică, dar structura diferă.",
          },
        ],
        keyPoints: [
          {
            text: "Exercițiul cu material individual = modalitate specifică, exclusiv Științe/Matematică, scop: deprinderi de muncă independentă + limbaj matematic",
            important: true,
          },
          {
            text: "Limite numerație: mică = 1-3, mijlocie = 1-5, mare = 1-10",
            important: true,
          },
          {
            text: "Nr. mulțimi: mică = 1-2, mijlocie = 2, mare = 3",
          },
          {
            text: "Copiii lucrează individual — fiecare are coșuleț cu jetoane",
          },
          {
            text: "Propoziția cu limitele numerației arată corectorului că știi să predai",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-sti-ex-mq1-1",
              type: "multiple-choice",
              question:
                "La ce domeniu experiențial se realizează exercițiul cu material individual?",
              options: [
                "DLC — Limbă și comunicare",
                "DOS — Om și societate",
                "Științe — Activitate matematică",
                "La toate domeniile experiențiale",
              ],
              correctIndex: 2,
              explanation:
                "Exercițiul cu material individual se realizează exclusiv " +
                "la Științe — Activitate matematică.",
            },
            {
              id: "edu-ped-sti-ex-mq1-2",
              type: "true-false",
              question:
                "La grupa mică, numerația se realizează în limitele 1-5.",
              correct: false,
              explanation:
                "La grupa mică, numerația se realizează în limitele 1-3. " +
                "Limitele 1-5 sunt pentru grupa mijlocie.",
            },
            {
              id: "edu-ped-sti-ex-mq1-3",
              type: "fill-blank",
              question:
                "La grupa mare, numerația se realizează în limitele 1-_______.",
              correctAnswers: [
                "10",
                "zece",
                "Zece",
                "ZECE",
              ],
              explanation:
                "La grupa mare (5-6 ani), numerația se realizează " +
                "în limitele 1-10.",
            },
            {
              id: "edu-ped-sti-ex-mq1-4",
              type: "multiple-choice",
              question:
                "Câte mulțimi formează copiii la grupa mare?",
              options: [
                "1 mulțime",
                "2 mulțimi",
                "3 mulțimi",
                "5 mulțimi",
              ],
              correctIndex: 2,
              explanation:
                "La grupa mare se formează 3 mulțimi (3 tipuri de fructe). " +
                "Grupa mijlocie: 2, grupa mică: 1-2.",
            },
            {
              id: "edu-ped-sti-ex-mq1-5",
              type: "true-false",
              question:
                "Exercițiul cu material individual poate fi realizat și la DLC.",
              correct: false,
              explanation:
                "Nu! Exercițiul cu material individual se realizează " +
                "exclusiv la Științe — Activitate matematică.",
            },
            {
              id: "edu-ped-sti-ex-mq1-6",
              type: "multiple-choice",
              question:
                "Care este scopul exercițiului cu material individual?",
              options: [
                "Formarea deprinderilor de comunicare",
                "Formarea deprinderilor de muncă independentă și însușirea unui limbaj matematic",
                "Dezvoltarea memoriei și vocabularului",
                "Formarea capacității de analiză și identificare",
              ],
              correctIndex: 1,
              explanation:
                "Scopul exercițiului cu material individual: formarea " +
                "deprinderilor de muncă independentă și însușirea unui " +
                "limbaj matematic corect și coerent.",
            },
            {
              id: "edu-ped-sti-ex-mq1-7",
              type: "fill-blank",
              question:
                "Exercițiul cu material individual este o _______ specifică de realizare a unor activități didactice.",
              correctAnswers: [
                "modalitate",
                "Modalitate",
                "MODALITATE",
              ],
              explanation:
                "Exercițiul cu material individual este o modalitate " +
                "specifică — termenul-cheie comun tuturor definițiilor.",
            },
            {
              id: "edu-ped-sti-ex-mq1-8",
              type: "multiple-choice",
              question:
                "Care este limita numerației la grupa mijlocie?",
              options: [
                "1-3",
                "1-5",
                "1-10",
                "1-7",
              ],
              correctIndex: 1,
              explanation:
                "Grupa mijlocie (4-5 ani): numerația în limitele 1-5.",
            },
            {
              id: "edu-ped-sti-ex-mq1-9",
              type: "true-false",
              question:
                "Fiecare copil are propriul coșuleț cu jetoane pe care le manipulează individual.",
              correct: true,
              explanation:
                "Da, preșcolarii vor avea în coșulețele de pe măsuțe " +
                "jetoane pe care le vor manipula conform indicațiilor educatoarei.",
            },
            {
              id: "edu-ped-sti-ex-mq1-10",
              type: "multiple-choice",
              question:
                "Ce propoziție arată corectorului că știi să predai la grupa specifică?",
              options: [
                "Educatoarea va introduce preșcolarii în activitate",
                "Numerația se va realiza în limitele 1-10 (sau 1-5, 1-3)",
                "Preșcolarii vor forma mulțimi",
                "Educatoarea va face aprecieri verbale",
              ],
              correctIndex: 1,
              explanation:
                "Propoziția «Numerația se va realiza în limitele...» " +
                "face diferența între grupe și arată corectorului " +
                "că știi să predai la grupa respectivă.",
            },
          ],
        },
      },
      {
        id: "exercitiu-eseu",
        title: "Model complet de eseu — Spune câte sunt (grupa mare)",
        duration: "30 min",
        sections: [
          {
            title: "Cerința-model",
            content:
              "Prezentați o activitate de exercițiu cu material individual " +
              "ca una dintre modalitățile specifice de realizare a activităților " +
              "didactice în educația timpurie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Cerința completă:** Prezentați o activitate de exercițiu " +
                  "cu material individual ca una dintre modalitățile specifice " +
                  "de realizare a activităților didactice în educația timpurie, " +
                  "având în vedere următoarele repere:\n\n" +
                  "1. Definirea conceptului de exercițiu cu material individual\n" +
                  "2. Prezentarea desfășurării unei activități de exercițiu cu " +
                  "material individual — pentru grupa de vârstă **5-6 ani**, " +
                  "la domeniul experiențial **Științe, Activitate matematică**",
              },
            ],
          },
          {
            title: "Introducerea în activitate (surpriza)",
            content:
              "Educatoarea introduce preșcolarii în activitate aducând " +
              "sub formă de surpriză materialul didactic.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Informații organizatorice:**\n" +
                  "- Domeniu: Științe, Activitate matematică\n" +
                  "- Tema anuală: «Când, cum și de ce se întâmplă»\n" +
                  "- Sub-tema: «Spune câte sunt»\n" +
                  "- Grupa: 5-6 ani (grupa mare) — 3 mulțimi, numerație 1-10\n" +
                  "- Material: coșulețe cu jetoane (fructe de vară)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Elementul-surpriză la exercițiu cu material individual este " +
                    "**materialul didactic adus sub formă de surpriză** " +
                    "(coșulețe cu jetoane, săculeț magic). Nu imagini sugestive " +
                    "ca la memorizare, nu scrisoare ca la convorbire!",
                },
              },
              {
                kind: "text",
                text:
                  "Educatoarea va introduce preșcolarii în activitate, " +
                  "aducând sub formă de **surpriză** materialul didactic " +
                  "folosit în activitate.\n\n" +
                  "Exemplu: un săculeț magic cu jetoane ilustrând fructe " +
                  "de vară, sau o cutie cu lalele — copiii trebuie să " +
                  "vadă câte sunt și cum pot fi grupate.",
              },
            ],
          },
          {
            title: "Informarea preșcolarilor",
            content:
              "Preșcolarii vor fi informați că vor compara mulțimi, " +
              "vor forma grupe cu tot atâtea elemente câte indică cifra, vor număra.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Preșcolarii vor fi informați că vor **compara mulțimi**, " +
                  "vor **forma grupe** cu tot atâtea elemente câte indică cifra, " +
                  "vor **număra** în ordine crescătoare și descrescătoare.",
              },
            ],
          },
          {
            title: "Numerația (propoziția-cheie)",
            content:
              "Numerația se va realiza în limitele 1-10 (grupa mare).",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Numerația se va realiza în limitele 1-10.**\n\n" +
                  "Adaptare pe grupe:\n" +
                  "- Grupa mică: «în limitele 1-3»\n" +
                  "- Grupa mijlocie: «în limitele 1-5»\n" +
                  "- Grupa mare: «în limitele 1-10»",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Subliniază-ți această propoziție! Dacă primești altă " +
                    "grupă în loc de grupa mare, schimbi doar limita " +
                    "(1-5 sau 1-3). O singură propoziție face diferența!",
                },
              },
            ],
          },
          {
            title: "Materialul individual (coșulețele cu jetoane)",
            content:
              "Preșcolarii vor avea în coșulețele de pe măsuțe jetoane " +
              "pe care le vor manipula conform indicațiilor educatoarei.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Preșcolarii vor avea în **coșulețele de pe măsuțe** " +
                  "jetoane care ilustrează **fructele de vară** și pe care " +
                  "le vor manipula conform indicațiilor educatoarei.\n\n" +
                  "Fiecare copil are coșulețul lui. În coșuleț se află " +
                  "jetoane cu cireșe, vișine, caise (3 tipuri de fructe " +
                  "pentru grupa mare), amestecate.",
              },
            ],
          },
          {
            title: "Explicare și demonstrare",
            content:
              "Educatoarea va explica și demonstra preșcolarilor modul " +
              "de desfășurare al exercițiului.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Educatoarea va **explica și demonstra** preșcolarilor " +
                  "modul de desfășurare al exercițiului cu material individual.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Pasul de explicare și demonstrare e obligatoriu — " +
                    "educatoarea explică și demonstrează cum se lucrează " +
                    "înainte ca preșcolarii să lucreze individual.",
                },
              },
            ],
          },
          {
            title: "Prima sarcină de lucru — formarea mulțimilor",
            content:
              "Preșcolarii vor forma mulțimea cireșelor, mulțimea vișinelor, " +
              "mulțimea caiselor și vor verbaliza acțiunile.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Prima sarcină de lucru:**\n\n" +
                  "Preșcolarii vor forma:\n" +
                  "- Mulțimea **cireșelor**\n" +
                  "- Mulțimea **vișinelor**\n" +
                  "- Mulțimea **caiselor**\n\n" +
                  "(3 mulțimi — grupa mare; 2 — mijlocie; 1-2 — mică)\n\n" +
                  "Preșcolarii vor **verbaliza acțiunile** făcute, " +
                  "folosind un **limbaj matematic corespunzător**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Fructele sunt amestecate în coșuleț — copiii trebuie să " +
                    "le sorteze pe mulțimi (fiecare fruct la grupa lui). " +
                    "Poți adăuga «adaptat vârstei» după «limbaj matematic " +
                    "corespunzător» pentru puncte extra.",
                },
              },
            ],
          },
          {
            title: "A doua sarcină de lucru — raportarea număr la cantitate",
            content:
              "Preșcolarii vor raporta numărul la cantitate, așezând " +
              "sub fiecare mulțime cifra corespunzătoare pe jeton.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**A doua sarcină de lucru:**\n\n" +
                  "Preșcolarii vor trebui să **raporteze numărul la cantitate**, " +
                  "așezând sub fiecare mulțime **cifra corespunzătoare** " +
                  "ilustrată pe jeton.\n\n" +
                  "Exemplu: numără 3 cireșe → pune jetonul cu cifra 3; " +
                  "numără 10 vișine → pune jetonul cu cifra 10.",
              },
            ],
          },
          {
            title: "Formarea perechilor (comparare cantități)",
            content:
              "Preșcolarii vor forma perechi între vișine și cireșe, verificând " +
              "corespondența unu la unu.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Preșcolarii vor forma **perechi** între vișine și cireșe, " +
                  "verificând dacă fiecare cireașă are drept corespondent " +
                  "o vișină.\n\n" +
                  "Scopul: compararea cantităților — sunt mai multe, " +
                  "mai puține sau tot atâtea?",
              },
            ],
          },
          {
            title: "Retenția și transferul (greșeala intenționată)",
            content:
              "Educatoarea lucrează la tabla magnetică și greșește " +
              "intenționat. Preșcolarii corectează greșeala.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Retenția și transferul** — etapă specifică exercițiului " +
                  "cu material individual!\n\n" +
                  "Pentru a asigura retenția și transferul, educatoarea va " +
                  "lucra la **tabla magnetică** și va **greși intenționat**.\n\n" +
                  "Preșcolarii vor trebui să descopere greșeala și " +
                  "să o **corecteze**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Etapa de retenție și transfer este specifică DOAR " +
                    "exercițiului cu material individual! Nu apare la " +
                    "memorizare, convorbire sau alte modalități. " +
                    "Dacă o menționezi corect, primești puncte bonus!",
                },
              },
            ],
          },
          {
            title: "Fișa de lucru și încheierea",
            content:
              "Preșcolarii colorează pe fișa de lucru, apoi educatoarea " +
              "face aprecieri verbale.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Preșcolarii vor trebui **să coloreze** tot atâtea cireșe " +
                  "câte coșuri sunt ilustrate (pe fișa de lucru).\n\n" +
                  "Pe parcursul activității, educatoarea va corecta " +
                  "eventualele greșeli, urmând ca la final să facă " +
                  "**aprecieri verbale** asupra modului de participare " +
                  "la activitate.",
              },
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model complet de eseu — Grupa mare (5-6 ani), Spune câte sunt",
                  source: "claude",
                  content:
                    "**Exercițiul cu material individual** este o modalitate " +
                    "specifică de realizare a unor activități didactice **în " +
                    "educația timpurie**, ce se desfășoară **în cadrul activităților " +
                    "matematice**, unde preșcolarii execută sarcinile date de " +
                    "educatoare cu scopul de a-și forma **deprinderi de muncă " +
                    "independentă** și **însușirea unui limbaj matematic corect " +
                    "și coerent**.\n\n" +
                    "Pentru a desfășura exercițiul cu material individual la " +
                    "grupa de vârstă **5-6 ani**, domeniul experiențial " +
                    "**Științe**, Activitate matematică, având ca temă anuală " +
                    "de studiu **«Când, cum și de ce se întâmplă»**, sub-tema " +
                    "**«Spune câte sunt»**, educatoarea va introduce preșcolarii " +
                    "în activitate, aducând sub formă de **surpriză** materialul " +
                    "didactic folosit în activitate.\n\n" +
                    "Preșcolarii vor fi informați că vor compara mulțimi, vor " +
                    "forma grupe cu tot atâtea elemente câte indică cifra, " +
                    "vor număra în ordine crescătoare și descrescătoare.\n\n" +
                    "**Numerația** se va realiza **în limitele 1-10**.\n\n" +
                    "Preșcolarii vor avea în **coșulețele de pe măsuțe** " +
                    "jetoane care ilustrează fructele de vară și pe care le " +
                    "vor manipula conform indicațiilor educatoarei.\n\n" +
                    "Educatoarea va **explica și demonstra** preșcolarilor modul " +
                    "de desfășurare al exercițiului cu material individual.\n\n" +
                    "**Prima sarcină de lucru:** preșcolarii vor forma mulțimea " +
                    "cireșelor, mulțimea vișinelor, mulțimea caiselor. " +
                    "Preșcolarii vor verbaliza acțiunile făcute, folosind un " +
                    "**limbaj matematic corespunzător**.\n\n" +
                    "**A doua sarcină de lucru:** preșcolarii vor trebui " +
                    "să **raporteze numărul la cantitate**, așezând sub fiecare " +
                    "mulțime **cifra corespunzătoare** ilustrată pe jeton.\n\n" +
                    "Preșcolarii vor forma **perechi** între vișine și cireșe, " +
                    "verificând dacă fiecare cireașă are drept corespondent " +
                    "o vișină.\n\n" +
                    "Pentru a asigura **retenția și transferul**, educatoarea " +
                    "va lucra la **tabla magnetică** și va **greși intenționat**. " +
                    "Preșcolarii vor trebui să descopere greșeala și să o " +
                    "corecteze.\n\n" +
                    "Preșcolarii vor trebui **să coloreze** tot atâtea cireșe " +
                    "câte coșuri sunt ilustrate (pe fișa de lucru).\n\n" +
                    "Pe parcursul activității, educatoarea va corecta " +
                    "eventualele greșeli, urmând ca la final să facă " +
                    "**aprecieri verbale** asupra modului de participare " +
                    "la activitate.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Adaptare la grupa mijlocie (1-5)",
            description:
              "Grupa mijlocie: numerație 1-5, 2 mulțimi de fructe " +
              "(ex: cireșe și vișine), rest identic. Schimbi doar " +
              "limitele numerației și nr. mulțimi.",
          },
          {
            title: "Adaptare la grupa mică (1-3)",
            description:
              "Grupa mică: numerație 1-3, 1-2 mulțimi de fructe, " +
              "jetoane cu maxim 3 elemente. Sarcinile sunt simplificate " +
              "dar structura e aceeași.",
          },
          {
            title: "Diferența: exercițiu cu material individual vs. joc didactic",
            description:
              "Exercițiul are etapă de retenție și transfer (greșeala " +
              "intenționată). Jocul didactic are reguli de joc. " +
              "Ambele sunt la Științe/Matematică.",
          },
        ],
        keyPoints: [
          {
            text: "Eseul urmează: definiție → introducere (surpriză) → informare → numerație (propoziția-cheie) → coșulețe cu jetoane → explicare + demonstrare → sarcina 1 (mulțimi) → sarcina 2 (raportare) → perechi → retenție + transfer (greșeala la tablă) → fișă de lucru → încheiere",
            important: true,
          },
          {
            text: "Retenția și transferul: educatoarea greșește intenționat la tabla magnetică, copiii corectează — etapă specifică DOAR exercițiului cu material individual",
            important: true,
          },
          {
            text: "Elementul-surpriză = materialul didactic adus sub formă de surpriză (coșulețe, săculeț magic)",
          },
          {
            text: "Un singur eseu se adaptează la orice grupă: schimbi doar limitele numerației și nr. mulțimi",
          },
          {
            text: "Preșcolarii verbalizează acțiunile folosind limbaj matematic corespunzător",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-sti-ex-mq2-1",
              type: "multiple-choice",
              question:
                "Ce etapă este specifică DOAR exercițiului cu material individual?",
              options: [
                "Recitarea model",
                "Retenția și transferul (greșeala intenționată)",
                "Anunțarea titlului și autorului",
                "Împărțirea pe strofe",
              ],
              correctIndex: 1,
              explanation:
                "Retenția și transferul, cu greșeala intenționată la " +
                "tabla magnetică, este etapă specifică doar exercițiului " +
                "cu material individual.",
            },
            {
              id: "edu-ped-sti-ex-mq2-2",
              type: "true-false",
              question:
                "Prima sarcină de lucru este raportarea număr la cantitate.",
              correct: false,
              explanation:
                "Prima sarcină este formarea mulțimilor (sortarea fructelor). " +
                "A doua sarcină este raportarea număr la cantitate.",
            },
            {
              id: "edu-ped-sti-ex-mq2-3",
              type: "multiple-choice",
              question:
                "Ce aduce educatoarea ca element-surpriză la exercițiu cu material individual?",
              options: [
                "Imagini sugestive din poezie",
                "O scrisoare de la un personaj",
                "Materialul didactic sub formă de surpriză (coșulețe, săculeț)",
                "Un tablou cu o imagine complexă",
              ],
              correctIndex: 2,
              explanation:
                "La exercițiu cu material individual, elementul-surpriză " +
                "este materialul didactic adus sub formă de surpriză. " +
                "Imaginile sugestive sunt la memorizare, scrisoarea la convorbire.",
            },
            {
              id: "edu-ped-sti-ex-mq2-4",
              type: "fill-blank",
              question:
                "Preșcolarii vor trebui să _______ numărul la cantitate, așezând cifra sub fiecare mulțime.",
              correctAnswers: [
                "raporteze",
                "Raporteze",
                "RAPORTEZE",
              ],
              explanation:
                "A doua sarcină: preșcolarii raportează numărul la cantitate, " +
                "așezând cifra corespunzătoare sub fiecare mulțime.",
            },
            {
              id: "edu-ped-sti-ex-mq2-5",
              type: "true-false",
              question:
                "Educatoarea va greși intenționat la tabla magnetică în etapa de retenție și transfer.",
              correct: true,
              explanation:
                "Da, pentru a asigura retenția și transferul, educatoarea " +
                "lucrează la tabla magnetică și greșește intenționat — " +
                "copiii trebuie să descopere și să corecteze greșeala.",
            },
            {
              id: "edu-ped-sti-ex-mq2-6",
              type: "multiple-choice",
              question:
                "Ce fac preșcolarii după ce formează mulțimile?",
              options: [
                "Recită o poezie",
                "Verbalizează acțiunile folosind limbaj matematic",
                "Desenează pe fișa de lucru",
                "Închid ochii și ascultă educatoarea",
              ],
              correctIndex: 1,
              explanation:
                "După formarea mulțimilor, preșcolarii verbalizează " +
                "acțiunile făcute, folosind un limbaj matematic corespunzător.",
            },
            {
              id: "edu-ped-sti-ex-mq2-7",
              type: "fill-blank",
              question:
                "Educatoarea va explica și _______ preșcolarilor modul de desfășurare al exercițiului.",
              correctAnswers: [
                "demonstra",
                "Demonstra",
                "DEMONSTRA",
              ],
              explanation:
                "Educatoarea va explica și demonstra preșcolarilor " +
                "modul de desfășurare al exercițiului cu material individual.",
            },
            {
              id: "edu-ped-sti-ex-mq2-8",
              type: "true-false",
              question:
                "Formarea perechilor se face înainte de formarea mulțimilor.",
              correct: false,
              explanation:
                "Formarea perechilor se face după cele două sarcini " +
                "(formarea mulțimilor și raportarea număr la cantitate), " +
                "nu înainte.",
            },
            {
              id: "edu-ped-sti-ex-mq2-9",
              type: "multiple-choice",
              question:
                "Ce face educatoarea ÎNAINTE de a lăsa preșcolarii să lucreze individual?",
              options: [
                "Face aprecieri verbale",
                "Greșește intenționat la tablă",
                "Explică și demonstrează modul de desfășurare",
                "Distribuie fișele de lucru",
              ],
              correctIndex: 2,
              explanation:
                "Educatoarea explică și demonstrează modul de desfășurare " +
                "al exercițiului înainte ca preșcolarii să lucreze individual.",
            },
            {
              id: "edu-ped-sti-ex-mq2-10",
              type: "multiple-choice",
              question:
                "La final, pe fișa de lucru, preșcolarii trebuie să:",
              options: [
                "Deseneze personaje din poveste",
                "Scrie cifre și litere",
                "Coloreze tot atâtea cireșe câte coșuri sunt ilustrate",
                "Decupeze jetoanele și le lipească",
              ],
              correctIndex: 2,
              explanation:
                "Preșcolarii trebuie să coloreze tot atâtea cireșe " +
                "câte coșuri sunt ilustrate pe fișa de lucru.",
            },
          ],
        },
      },
    ],
    transcript:
      "## Exercițiul cu material individual\n\n" +
      "### Definiție\n" +
      "Exercițiul cu material individual este o modalitate specifică de realizare a unor activități " +
      "didactice în educația timpurie, ce se desfășoară în cadrul activităților matematice, " +
      "unde preșcolarii execută sarcinile date de educatoare cu scopul de a-și forma deprinderi " +
      "de muncă independentă și însușirea unui limbaj matematic corect și coerent.\n\n" +
      "### Domeniu\n" +
      "Exclusiv Științe — Activitate matematică\n\n" +
      "### Numerație\n" +
      "Mică: 1-3 | Mijlocie: 1-5 | Mare: 1-10\n\n" +
      "### Nr. mulțimi\n" +
      "Mică: 1-2 | Mijlocie: 2 | Mare: 3\n\n" +
      "### Pași eseu\n" +
      "Definiție + scop → introducere (surpriză material) → informare preșcolari → numerație " +
      "(propoziția-cheie) → coșulețe cu jetoane → explicare + demonstrare → sarcina 1 " +
      "(formarea mulțimilor + verbalizare) → sarcina 2 (raportare număr-cantitate, cifra sub mulțime) " +
      "→ formare perechi (comparare) → retenție + transfer (greșeala la tablă) → fișă de lucru " +
      "(colorare) → încheiere (aprecieri verbale)",
    quiz: {
      topicId: "edu-ped-stiinte-exercitiu",
      questions: [
        {
          id: "edu-ped-sti-ex-fq1",
          type: "multiple-choice",
          question:
            "Ce diferențiază exercițiul cu material individual de jocul didactic matematic?",
          options: [
            "Exercițiul are etapă de retenție și transfer, jocul are reguli de joc",
            "Nu există nicio diferență între cele două",
            "Exercițiul se face la DLC, jocul la Științe",
            "Exercițiul e doar pentru grupa mare, jocul pentru toate grupele",
          ],
          correctIndex: 0,
          explanation:
            "Exercițiul cu material individual are etapă de retenție " +
            "și transfer (greșeala intenționată), pe când jocul didactic " +
            "are reguli de joc. Ambele sunt la Științe/Matematică.",
        },
        {
          id: "edu-ped-sti-ex-fq2",
          type: "multiple-choice",
          question:
            "Care este ordinea corectă a sarcinilor în exercițiul cu material individual?",
          options: [
            "Raportare → formare mulțimi → perechi",
            "Formare mulțimi → raportare număr-cantitate → formare perechi",
            "Perechi → mulțimi → raportare",
            "Raportare → perechi → mulțimi",
          ],
          correctIndex: 1,
          explanation:
            "Ordinea: (1) formarea mulțimilor, (2) raportarea număr " +
            "la cantitate (cifra sub mulțime), (3) formarea perechilor " +
            "(comparare cantități).",
        },
        {
          id: "edu-ped-sti-ex-fq3",
          type: "multiple-choice",
          question:
            "O educatoare primește cerința: exercițiu cu material individual, grupa mijlocie. Care sunt limitele numerației?",
          options: [
            "1-3",
            "1-5",
            "1-10",
            "1-7",
          ],
          correctIndex: 1,
          explanation:
            "Grupa mijlocie (4-5 ani): numerația se realizează " +
            "în limitele 1-5.",
        },
        {
          id: "edu-ped-sti-ex-fq4",
          type: "fill-blank",
          question:
            "Exercițiul cu material individual se desfășoară exclusiv în cadrul activităților _______.",
          correctAnswers: [
            "matematice",
            "Matematice",
            "MATEMATICE",
          ],
          explanation:
            "Exercițiul cu material individual se desfășoară exclusiv " +
            "în cadrul activităților matematice (Științe).",
        },
        {
          id: "edu-ped-sti-ex-fq5",
          type: "multiple-choice",
          question:
            "Ce face educatoarea la tabla magnetică în etapa de retenție și transfer?",
          options: [
            "Demonstrează corect exercițiul",
            "Desenează un model pentru copii",
            "Greșește intenționat pentru ca preșcolarii să corecteze",
            "Scrie numerele în ordine",
          ],
          correctIndex: 2,
          explanation:
            "În etapa de retenție și transfer, educatoarea greșește " +
            "intenționat la tabla magnetică — preșcolarii trebuie să " +
            "descopere și să corecteze greșeala.",
        },
        {
          id: "edu-ped-sti-ex-fq6",
          type: "true-false",
          question:
            "Exercițiul cu material individual poate fi realizat la DOS (Om și societate).",
          correct: false,
          explanation:
            "Nu! Exercițiul cu material individual se realizează " +
            "exclusiv la Științe — Activitate matematică. " +
            "Nu se face la DLC, DOS sau alte domenii.",
        },
        {
          id: "edu-ped-sti-ex-fq7",
          type: "multiple-choice",
          question:
            "Câte mulțimi formează copiii la grupa mijlocie?",
          options: [
            "1 mulțime",
            "2 mulțimi",
            "3 mulțimi",
            "4 mulțimi",
          ],
          correctIndex: 1,
          explanation:
            "Grupa mijlocie: 2 mulțimi (2 tipuri de fructe). " +
            "Grupa mică: 1-2, grupa mare: 3.",
        },
        {
          id: "edu-ped-sti-ex-fq8",
          type: "fill-blank",
          question:
            "Preșcolarii vor verbaliza acțiunile făcute, folosind un limbaj _______ corespunzător.",
          correctAnswers: [
            "matematic",
            "Matematic",
            "MATEMATIC",
          ],
          explanation:
            "Preșcolarii verbalizează folosind un limbaj matematic " +
            "corespunzător — termen-cheie în eseu.",
        },
        {
          id: "edu-ped-sti-ex-fq9",
          type: "true-false",
          question:
            "La grupa mică, copiii pot forma maxim 3 mulțimi de fructe.",
          correct: false,
          explanation:
            "La grupa mică se formează 1-2 mulțimi (nu 3). " +
            "3 mulțimi sunt pentru grupa mare.",
        },
        {
          id: "edu-ped-sti-ex-fq10",
          type: "true-false",
          question:
            "La finalul activității, preșcolarii colorează pe fișa de lucru, apoi educatoarea face aprecieri verbale.",
          correct: true,
          explanation:
            "Da, la final preșcolarii colorează pe fișa de lucru, " +
            "apoi educatoarea face aprecieri verbale asupra " +
            "modului de participare la activitate.",
        },
      ],
    },
  },
];
