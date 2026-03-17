import { Lesson } from "@/types/lectii";

export const eduPedagogieJocDidacticLessons: Lesson[] = [
  {
    topicId: "edu-ped-joc-didactic",
    title: "Jocul didactic — model de eseu (Subiectul 3)",
    duration: "55 min",
    objectives: [
      "Să definească jocul didactic ca modalitate specifică de realizare a activităților didactice în educația timpurie",
      "Să enumere și să descrie cele 7 componente ale jocului didactic (scop, sarcină, reguli, elemente de joc, materiale, acțiune de joc, complicare)",
      "Să diferențieze materialul didactic de mijlocul de învățământ",
      "Să identifice semnele distinctive ale jocului didactic: jocul de probă și complicarea jocului",
      "Să aplice structura eseului la exemplul «Trăistuța cu povești» (DLC, grupa 4-5 ani)",
      "Să precizeze numărul de variante de joc pe grupe (practică vs. examen)",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    chapters: [
      {
        id: "joc-didactic-definitie",
        title: "Definiția, componentele și specificul jocului didactic",
        duration: "25 min",
        sections: [
          {
            title: "Definiția jocului didactic în educația timpurie",
            content:
              "Jocul didactic în educația timpurie este o modalitate specifică de realizare " +
              "a unor activități didactice din educația timpurie, care sunt integrate în demersul " +
              "educațional, având obiective bine precizate, reprezentând forma ideală prin care " +
              "jocul sprijină învățarea dirijată, pregătind preșcolarul pentru integrarea " +
              "ulterioară în învățământul primar.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Jocul didactic** în educația timpurie este o **modalitate specifică** " +
                  "de realizare a unor activități didactice din educația timpurie, care sunt " +
                  "integrate **în demersul educațional**, având obiective bine precizate, " +
                  "reprezentând **forma ideală** prin care jocul **sprijină învățarea dirijată**, " +
                  "pregătind preșcolarul pentru **integrarea ulterioară în învățământul primar**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Definiția trebuie să conțină: (1) «modalitate specifică», " +
                    "(2) «în educația timpurie», (3) «integrate în demersul educațional», " +
                    "(4) «sprijină învățarea dirijată», (5) «pregătind preșcolarul " +
                    "pentru învățământul primar».",
                },
              },
              {
                kind: "text",
                text:
                  "**De ce pregătește pentru învățământul primar?** Pentru că este " +
                  "o activitate **dirijată** de educatoare, cu obiective clare, reguli, " +
                  "scopuri și variante de joc. Copilul trebuie să respecte concret " +
                  "ceea ce i se cere — să fie atent, să asculte cerința și să " +
                  "îndeplinească sarcinile.",
              },
            ],
          },
          {
            title: "Scopul jocului didactic",
            content:
              "Scopul jocului didactic este de a dezvolta preșcolarii global, " +
              "stimulând totodată și spiritul de cooperare. La orice joc didactic, " +
              "scopul se formulează: de a fixa și consolida.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Scopul general** al jocului didactic este **de a dezvolta " +
                  "preșcolarii global**, stimulând totodată și spiritul de cooperare.\n\n" +
                  "La **orice joc didactic**, indiferent de domeniu, scopul se formulează:\n\n" +
                  "**«de a fixa și consolida»** + ce anume (poveștile, formele " +
                  "geometrice, vocabularul etc.)\n\n" +
                  "Jocurile didactice sunt activități de **consolidare**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Scopul este mereu «de a fixa și consolida». " +
                    "Ce fixezi și ce consolidezi depinde de domeniu: " +
                    "la matematică — forme geometrice; la comunicare — " +
                    "vocabularul, poeziile, poveștile.",
                },
              },
            ],
          },
          {
            title: "Componentele jocului didactic",
            content:
              "Jocul didactic are 7 componente: scopul, sarcina didactică, " +
              "regulile jocului, elementele de joc, materialele didactice, " +
              "acțiunea de joc, complicarea jocului.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Componentele jocului didactic (trebuie știute și verificate " +
                  "în eseu — dacă lipsește ceva, e o problemă!):\n\n" +
                  "| Nr. | Componentă | Cum se formulează |\n" +
                  "|-----|-----------|-------------------|\n" +
                  "| 1 | **Scopul** | «de a fixa și consolida» + conținut |\n" +
                  "| 2 | **Sarcina didactică** | «de a identifica, de a denumi, de a plasa...» |\n" +
                  "| 3 | **Regulile jocului** | mereu cu «vor»: vor extrage, vor recunoaște... |\n" +
                  "| 4 | **Elemente de joc** | aplauze, recompense, element-surpriză, închisul/deschisul ochilor |\n" +
                  "| 5 | **Materialele didactice** | jetoane, imagini, tabla magnetică |\n" +
                  "| 6 | **Acțiunea de joc** | jocul de probă + jocul propriu-zis (2 variante) |\n" +
                  "| 7 | **Complicarea jocului** | o variantă mai grea, posibil cu metodă modernă |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen, numără-ți componentele: am scop, am sarcină, " +
                    "am reguli, am elemente, am materiale, am acțiune de joc " +
                    "(cu joc de probă!), am complicare. Dacă ceva lipsește, " +
                    "e o problemă!",
                },
              },
            ],
          },
          {
            title: "Material didactic vs. mijloc de învățământ",
            content:
              "Tot ce se bagă în priză (aparat, digital) nu este material didactic, " +
              "ci mijloc de învățământ. Material didactic: jetoane, imagini, tabla magnetică.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Distincția importantă:**\n\n" +
                  "| Categorie | Exemple | Caracteristică |\n" +
                  "|-----------|---------|----------------|\n" +
                  "| **Material didactic** | jetoane, imagini, tabla magnetică | nu se bagă în priză |\n" +
                  "| **Mijloc de învățământ** | tabla interactivă/digitală, boxa | se bagă în priză |\n\n" +
                  "În proiectele didactice apar ca «mijloace didactice» și se referă la ambele, " +
                  "dar în eseul de la examen **nu** folosim echipamente electrice " +
                  "drept materiale didactice.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Regulă simplă: tot ce se bagă în priză = mijloc de " +
                    "învățământ, nu material didactic. Nici boxa, nici " +
                    "tabla interactivă nu sunt materiale didactice!",
                },
              },
            ],
          },
          {
            title: "Acțiunea de joc: jocul de probă și jocul propriu-zis",
            content:
              "Acțiunea de joc are mai multe etape: jocul de probă (demonstrativ), " +
              "jocul propriu-zis (2 variante la examen) și complicarea jocului.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Acțiunea de joc** cuprinde:\n\n" +
                  "1. **Jocul de probă** (= jocul demonstrativ — același lucru, " +
                  "dar termenul actual este «joc de probă»)\n" +
                  "   - Educatoarea explică și demonstrează cum se joacă\n" +
                  "   - La grupa mică: împreună cu copiii\n" +
                  "   - La grupele mari: copiii participă mai activ\n\n" +
                  "2. **Jocul propriu-zis** — la examen, prezintă **2 variante de joc**\n\n" +
                  "3. **Complicarea jocului** — o variantă mai grea",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Niciodată la examen să nu uiți de jocul de probă — " +
                    "e specific jocului didactic! Subliniază-l. " +
                    "Jocul de probă și complicarea jocului sunt semnele " +
                    "distinctive ale jocului didactic (față de jocul exercițiu).",
                },
              },
            ],
          },
          {
            title: "Variante de joc pe grupe de vârstă",
            content:
              "În practică: mică 1-2, mijlocie 2-3, mare 5-9 variante. " +
              "La examen: mereu 2 variante, indiferent de grupă.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Numărul de variante de joc diferă în practică:\n\n" +
                  "| Grupă | Nr. variante (practică) |\n" +
                  "|-------|------------------------|\n" +
                  "| Mică | 1-2 variante |\n" +
                  "| Mijlocie | 2-3 variante |\n" +
                  "| Mare | 5-9 variante |\n" +
                  "| **La examen** | **mereu 2 variante** |\n\n" +
                  "**Complicarea jocului** este valabilă pentru **toate grupele** " +
                  "(mică, mijlocie și mare) — altfel nu ar fi joc didactic.\n\n" +
                  "Jocurile didactice se fac **doar la domeniile experiențiale**, " +
                  "nu la centre.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Cele 2 variante de joc de la examen semnifică " +
                    "că copiii sunt împărțiți în 2 grupe — de la sine " +
                    "înțeles, nu trebuie scris explicit în eseu.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Diferența: joc didactic vs. joc exercițiu",
            description:
              "Jocul didactic are joc de probă și complicarea jocului — " +
              "acestea sunt semnele distinctive. Jocul exercițiu nu le are. " +
              "Dacă lipsesc din eseu, poți fi confundat cu alt tip de activitate.",
          },
          {
            title: "Jocuri didactice la diferite domenii",
            description:
              "La DLC: fixezi și consolidezi poveștile, vocabularul, poeziile. " +
              "La Științe/Matematică: fixezi și consolidezi formele geometrice. " +
              "Structura eseului e aceeași, se schimbă conținutul.",
          },
        ],
        keyPoints: [
          {
            text: "Jocul didactic = modalitate specifică, pregătește pentru învățământul primar, dirijat de educatoare",
            important: true,
          },
          {
            text: "Scopul mereu: «de a fixa și consolida» + conținutul specific",
            important: true,
          },
          {
            text: "7 componente: scop, sarcină, reguli, elemente de joc, materiale, acțiune de joc, complicare",
            important: true,
          },
          {
            text: "Regulile se formulează mereu cu «vor»: vor extrage, vor recunoaște, vor identifica",
          },
          {
            text: "Tot ce se bagă în priză = mijloc de învățământ, NU material didactic",
          },
          {
            text: "Jocul de probă + complicarea jocului = semne distinctive ale jocului didactic",
          },
          {
            text: "La examen: mereu 2 variante de joc, indiferent de grupă",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-jd-mq1-1",
              type: "multiple-choice",
              question:
                "Care este scopul jocului didactic, indiferent de domeniu?",
              options: [
                "De a preda conținuturi noi",
                "De a fixa și consolida",
                "De a evalua cunoștințele",
                "De a forma deprinderi de muncă independentă",
              ],
              correctIndex: 1,
              explanation:
                "Scopul jocului didactic este mereu «de a fixa și consolida». " +
                "Jocurile didactice sunt activități de consolidare.",
            },
            {
              id: "edu-ped-jd-mq1-2",
              type: "multiple-choice",
              question:
                "Câte componente are jocul didactic?",
              options: [
                "3 componente",
                "5 componente",
                "7 componente",
                "10 componente",
              ],
              correctIndex: 2,
              explanation:
                "Jocul didactic are 7 componente: scopul, sarcina didactică, " +
                "regulile jocului, elementele de joc, materialele didactice, " +
                "acțiunea de joc, complicarea jocului.",
            },
            {
              id: "edu-ped-jd-mq1-3",
              type: "true-false",
              question:
                "Tabla interactivă (digitală) este material didactic.",
              correct: false,
              explanation:
                "Tot ce se bagă în priză (tabla interactivă, boxa) este " +
                "mijloc de învățământ, NU material didactic.",
            },
            {
              id: "edu-ped-jd-mq1-4",
              type: "true-false",
              question:
                "Jocul de probă și complicarea jocului sunt semne distinctive ale jocului didactic.",
              correct: true,
              explanation:
                "Da, jocul de probă și complicarea jocului sunt semnele " +
                "distinctive ale jocului didactic, care îl diferențiază " +
                "de jocul exercițiu.",
            },
            {
              id: "edu-ped-jd-mq1-5",
              type: "multiple-choice",
              question:
                "Cum se formulează regulile jocului didactic în eseu?",
              options: [
                "Cu verbul la prezent: extrag, recunosc, identific",
                "Cu verbul la trecut: au extras, au recunoscut",
                "Mereu cu «vor»: vor extrage, vor recunoaște, vor identifica",
                "Cu verbul la infinitiv: a extrage, a recunoaște",
              ],
              correctIndex: 2,
              explanation:
                "Regulile jocului se formulează mereu cu «vor»: " +
                "vor extrage, vor recunoaște, vor identifica, vor descrie.",
            },
            {
              id: "edu-ped-jd-mq1-6",
              type: "fill-blank",
              question:
                "Jocul didactic pregătește preșcolarul pentru integrarea ulterioară în învățământul _______.",
              correctAnswers: [
                "primar",
                "Primar",
                "PRIMAR",
              ],
              explanation:
                "Jocul didactic pregătește preșcolarul pentru integrarea " +
                "ulterioară în învățământul primar, fiind o activitate " +
                "dirijată cu reguli și obiective clare.",
            },
            {
              id: "edu-ped-jd-mq1-7",
              type: "multiple-choice",
              question:
                "Câte variante de joc se prezintă la examen?",
              options: [
                "1 variantă",
                "2 variante",
                "3 variante",
                "5-9 variante",
              ],
              correctIndex: 1,
              explanation:
                "La examen se prezintă mereu 2 variante de joc, " +
                "indiferent de grupa de vârstă.",
            },
            {
              id: "edu-ped-jd-mq1-8",
              type: "true-false",
              question:
                "Complicarea jocului este valabilă doar pentru grupa mare.",
              correct: false,
              explanation:
                "Complicarea jocului este valabilă pentru toate grupele " +
                "(mică, mijlocie și mare) — altfel nu ar fi joc didactic.",
            },
            {
              id: "edu-ped-jd-mq1-9",
              type: "fill-blank",
              question:
                "Jocul de probă mai este numit și jocul _______.",
              correctAnswers: [
                "demonstrativ",
                "Demonstrativ",
                "DEMONSTRATIV",
              ],
              explanation:
                "Jocul de probă = jocul demonstrativ (același lucru). " +
                "Termenul actual este «joc de probă».",
            },
            {
              id: "edu-ped-jd-mq1-10",
              type: "multiple-choice",
              question:
                "Unde se fac jocurile didactice?",
              options: [
                "La centre",
                "Doar la domeniile experiențiale",
                "La centre și la domenii",
                "Oriunde în programul zilnic",
              ],
              correctIndex: 1,
              explanation:
                "Jocurile didactice se fac doar la domeniile experiențiale, " +
                "nu la centre.",
            },
          ],
        },
      },
      {
        id: "joc-didactic-eseu",
        title: "Model complet de eseu — Trăistuța cu povești (grupa 4-5 ani)",
        duration: "30 min",
        sections: [
          {
            title: "Cerința-model",
            content:
              "Prezentați o activitate de joc didactic ca una dintre modalitățile specifice " +
              "de realizare a activităților didactice în educația timpurie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Cerința completă:** Prezentați o activitate de joc didactic " +
                  "ca una dintre modalitățile specifice de realizare a activităților " +
                  "didactice în educația timpurie, având în vedere următoarele repere:\n\n" +
                  "1. Definirea conceptului de joc didactic\n" +
                  "2. Prezentarea desfășurării unui joc didactic, pentru grupa de " +
                  "vârstă **4-5 ani**, la domeniul experiențial **Limbă și comunicare**, " +
                  "în care să apelați la cunoștințele preșcolarilor referitoare " +
                  "la poveștile învățate anterior",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La jocurile didactice, cerința NU conține temă anuală de studiu " +
                    "sau sub-temă. Îți dă un punct de plecare " +
                    "(«poveștile învățate anterior»). Poți primi jocul didactic " +
                    "atât la exercițiul 1 cât și la exercițiul 2 de la subiectul 3.",
                },
              },
            ],
          },
          {
            title: "Definiția + introducerea + scopul",
            content:
              "Definiția jocului didactic, introducerea cu titlul jocului și scopul de a fixa și consolida.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**[Definiția]** — se preia definiția jocului didactic " +
                  "(vezi capitolul 1).\n\n" +
                  "**Introducerea:** Pentru a desfășura jocul didactic " +
                  "«Trăistuța cu povești», la domeniul experiențial Limbă și comunicare, " +
                  "Educarea limbajului, nivel de vârstă 4-5 ani, vom apela la " +
                  "cunoștințele preșcolarilor referitoare la poveștile învățate anterior.\n\n" +
                  "**Scopul** jocului didactic «Trăistuța cu povești» este " +
                  "**de a fixa și consolida** poveștile învățate anterior.",
              },
            ],
          },
          {
            title: "Sarcina didactică și regulile jocului",
            content:
              "Sarcina didactică cu acțiunile copiilor și regulile formulate cu «vor».",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Sarcina didactică** este de a identifica personajele din povești " +
                  "ilustrate pe jeton, de a recunoaște povestea din care fac parte, " +
                  "de a plasa imaginile cronologic și de a completa cercurile " +
                  "corespunzător.\n\n" +
                  "**Regulile jocului:** pentru a respecta regulile jocului, preșcolarii " +
                  "**vor trebui** să extragă din trăistuță un jeton, **vor trebui** " +
                  "să identifice personajul ilustrat, **vor trebui** să recunoască " +
                  "povestea din care face parte, **vor plasa** imaginile cronologic și " +
                  "**vor completa** cercurile corespunzător.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Observă cum regulile repetă acțiunile din sarcina didactică, " +
                    "dar formulate cu «vor»: vor trebui să extragă, vor identifica, " +
                    "vor recunoaște. Sarcina zice CE fac, regulile zic CUM trebuie să facă.",
                },
              },
            ],
          },
          {
            title: "Elementele de joc și materialele didactice",
            content:
              "Elementele de joc: surpriza, recompensele, aplauzele. Materialele: trăistuța, jetoane, imagini, tabla magnetică.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Elementele de joc** sunt: surpriza, recompensele și aplauzele.\n\n" +
                  "**Materialul didactic** folosit în cadrul jocului: " +
                  "trăistuța, jetoanele, imagini din poveste și tabla magnetică.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Elementele de joc pot varia: la acest joc nu se folosesc " +
                    "închisul și deschisul ochilor (se folosesc doar când le " +
                    "integrezi în joc). Nu pune elemente pe care nu le-ai gândit!",
                },
              },
            ],
          },
          {
            title: "Introducerea în activitate și jocul de probă",
            content:
              "Preșcolarii sunt introduși prin element-surpriză, educatoarea prezintă materialele " +
              "și demonstrează prin jocul de probă.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Preșcolarii **vor fi introduși** în activitate de către " +
                  "educatoare, aceasta aducând **sub formă de surpriză** " +
                  "materialele didactice folosite în cadrul jocului.\n\n" +
                  "Educatoarea va prezenta preșcolarilor materialele didactice " +
                  "și va **explica și demonstra** regulile și sarcinile " +
                  "jocului prin desfășurarea **jocului de probă**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Jocul de probă este obligatoriu! Educatoarea explică " +
                    "și demonstrează ÎNAINTE de jocul propriu-zis. " +
                    "Dacă uiți jocul de probă, pierzi un semn distinctiv " +
                    "al jocului didactic.",
                },
              },
            ],
          },
          {
            title: "Varianta 1, varianta 2 și complicarea jocului",
            content:
              "Prima variantă cu trăistuța din mână în mână, a doua cu plasarea cronologică, " +
              "complicarea cu Diagrama Venn.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Prima variantă a jocului** presupune ca trăistuța să meargă din mână " +
                  "în mână, iar preșcolarul la care aceasta s-a oprit va extrage " +
                  "un jeton și **va denumi personajul** și **povestea** din care face parte.\n\n" +
                  "**A doua variantă a jocului:** preșcolarii vor trebui **să plaseze** " +
                  "imaginile din poveste **în ordine cronologică** pe tabla magnetică.\n\n" +
                  "**Complicarea jocului** se va realiza prin aplicarea metodei moderne " +
                  "**Diagrama Venn**, unde preșcolarii vor completa cercurile desenate " +
                  "pe tabla magnetică cu **caracteristicile a două personaje** din poveste. " +
                  "La **intersecția** celor două cercuri, preșcolarii vor plasa " +
                  "**asemănările** dintre cele două personaje.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Copiii plasează jetoane (nu scriu!). La intersecția " +
                    "cercurilor se pun asemănările dintre personaje.",
                },
              },
            ],
          },
          {
            title: "Încheierea activității",
            content:
              "La finalul jocului, educatoarea face aprecieri verbale, oferind recompense stimulante.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "La finalul jocului, educatoarea face **aprecieri verbale**, " +
                  "oferind **recompense stimulante**.",
              },
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model complet de eseu — Trăistuța cu povești (grupa 4-5 ani, DLC)",
                  source: "claude",
                  content:
                    "**Jocul didactic** în educația timpurie este o **modalitate " +
                    "specifică** de realizare a unor activități didactice din educația " +
                    "timpurie, care sunt integrate **în demersul educațional**, " +
                    "având obiective bine precizate, reprezentând **forma ideală** " +
                    "prin care jocul **sprijină învățarea dirijată**, pregătind " +
                    "preșcolarul pentru **integrarea ulterioară în învățământul primar**.\n\n" +
                    "Pentru a desfășura jocul didactic «Trăistuța cu povești», la " +
                    "domeniul experiențial **Limbă și comunicare**, Educarea limbajului, " +
                    "nivel de vârstă **4-5 ani**, vom apela la cunoștințele preșcolarilor " +
                    "referitoare la poveștile învățate anterior.\n\n" +
                    "**Scopul** jocului didactic «Trăistuța cu povești» este " +
                    "**de a fixa și consolida** poveștile învățate anterior.\n\n" +
                    "**Sarcina didactică** este de a identifica personajele din povești " +
                    "ilustrate pe jeton, de a recunoaște povestea din care fac parte, " +
                    "de a plasa imaginile cronologic și de a completa cercurile " +
                    "corespunzător.\n\n" +
                    "**Regulile jocului:** pentru a respecta regulile jocului, preșcolarii " +
                    "vor trebui să extragă din trăistuță un jeton, vor trebui " +
                    "să identifice personajul ilustrat, vor trebui să recunoască " +
                    "povestea din care face parte, vor plasa imaginile cronologic și " +
                    "vor completa cercurile corespunzător.\n\n" +
                    "**Elementele de joc** sunt: surpriza, recompensele și aplauzele.\n\n" +
                    "**Materialul didactic** folosit în cadrul jocului: " +
                    "trăistuța, jetoanele, imagini din poveste și tabla magnetică.\n\n" +
                    "Preșcolarii vor fi introduși în activitate de către educatoare, " +
                    "aceasta aducând **sub formă de surpriză** materialele didactice " +
                    "folosite în cadrul jocului. Educatoarea va prezenta preșcolarilor " +
                    "materialele didactice și va **explica și demonstra** regulile " +
                    "și sarcinile jocului prin desfășurarea **jocului de probă**.\n\n" +
                    "**Prima variantă a jocului** presupune ca trăistuța să meargă din mână " +
                    "în mână, iar preșcolarul la care aceasta s-a oprit va extrage " +
                    "un jeton și va denumi personajul și povestea din care face parte.\n\n" +
                    "**A doua variantă a jocului:** preșcolarii vor trebui să plaseze " +
                    "imaginile din poveste în ordine cronologică pe tabla magnetică.\n\n" +
                    "**Complicarea jocului** se va realiza prin aplicarea metodei moderne " +
                    "**Diagrama Venn**, unde preșcolarii vor completa cercurile desenate " +
                    "pe tabla magnetică cu caracteristicile a două personaje din poveste. " +
                    "La intersecția celor două cercuri, preșcolarii vor plasa " +
                    "asemănările dintre cele două personaje.\n\n" +
                    "La finalul jocului, educatoarea face **aprecieri verbale**, " +
                    "oferind **recompense stimulante**.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Adaptare la grupa mare (5-6 ani)",
            description:
              "La grupa mare, în practică se fac 5-9 variante, dar la examen " +
              "rămân tot 2. Se pot adăuga mai multe povești (Albă ca Zăpada, " +
              "Cenușăreasa etc.) și jetoane din mai multe surse.",
          },
          {
            title: "Adaptare la grupa mică (3-4 ani)",
            description:
              "La grupa mică se poate lucra și pe o singură poveste. " +
              "Jocul de probă se face împreună cu copiii. " +
              "Structura eseului rămâne aceeași.",
          },
          {
            title: "Diferența exercițiu 1 vs. exercițiu 2 la subiectul 3",
            description:
              "La exercițiul 1 se cere definiția + desfășurarea jocului. " +
              "La exercițiul 2 se poate adăuga un mijloc de învățământ modern " +
              "(digitalizare). Eseul se învață o singură dată și se adaptează.",
          },
        ],
        keyPoints: [
          {
            text: "Eseul urmează: definiție → introducere (titlu, domeniu, vârstă) → scop → sarcină → reguli → elemente de joc → materiale → surpriză + joc de probă → varianta 1 → varianta 2 → complicare (Diagrama Venn) → aprecieri verbale",
            important: true,
          },
          {
            text: "Jocul de probă este obligatoriu — educatoarea explică și demonstrează ÎNAINTE de jocul propriu-zis",
            important: true,
          },
          {
            text: "Un singur eseu se folosește pentru toate grupele — structura e aceeași, se schimbă doar conținutul",
          },
          {
            text: "La complicare, dacă e posibil, folosește o metodă modernă (Diagrama Venn)",
          },
          {
            text: "Cerința la jocul didactic NU conține temă anuală de studiu sau sub-temă",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-jd-mq2-1",
              type: "multiple-choice",
              question:
                "Care este scopul jocului didactic «Trăistuța cu povești»?",
              options: [
                "De a preda povești noi",
                "De a fixa și consolida poveștile învățate anterior",
                "De a dezvolta vocabularul nou",
                "De a evalua cunoștințele de matematică",
              ],
              correctIndex: 1,
              explanation:
                "Scopul este «de a fixa și consolida poveștile învățate anterior» — " +
                "jocul didactic consolidează, nu predă conținut nou.",
            },
            {
              id: "edu-ped-jd-mq2-2",
              type: "multiple-choice",
              question:
                "Ce metodă modernă se folosește la complicarea jocului «Trăistuța cu povești»?",
              options: [
                "Explozia Stelară",
                "Ciorchinele",
                "Diagrama Venn",
                "Brainstorming-ul",
              ],
              correctIndex: 2,
              explanation:
                "Complicarea jocului se realizează prin Diagrama Venn — " +
                "preșcolarii completează cercurile cu caracteristicile " +
                "a două personaje, la intersecție asemănările.",
            },
            {
              id: "edu-ped-jd-mq2-3",
              type: "true-false",
              question:
                "La jocul didactic, cerința de la examen conține temă anuală de studiu și sub-temă.",
              correct: false,
              explanation:
                "La jocurile didactice, cerința NU conține temă anuală " +
                "de studiu sau sub-temă. Îți dă doar un punct de plecare " +
                "(ex: «poveștile învățate anterior»).",
            },
            {
              id: "edu-ped-jd-mq2-4",
              type: "multiple-choice",
              question:
                "Ce face educatoarea ÎNAINTE de jocul propriu-zis?",
              options: [
                "Distribuie fișe de lucru",
                "Explică și demonstrează prin jocul de probă",
                "Face aprecieri verbale",
                "Împarte copiii pe grupe",
              ],
              correctIndex: 1,
              explanation:
                "Educatoarea prezintă materialele și explică și demonstrează " +
                "regulile prin desfășurarea jocului de probă.",
            },
            {
              id: "edu-ped-jd-mq2-5",
              type: "true-false",
              question:
                "În prima variantă a jocului, trăistuța merge din mână în mână, iar preșcolarul extrage un jeton.",
              correct: true,
              explanation:
                "Da, prima variantă presupune ca trăistuța să meargă din mână " +
                "în mână, iar preșcolarul la care s-a oprit extrage un jeton " +
                "și denumește personajul și povestea.",
            },
            {
              id: "edu-ped-jd-mq2-6",
              type: "multiple-choice",
              question:
                "Ce plasează preșcolarii la intersecția cercurilor din Diagrama Venn?",
              options: [
                "Diferențele dintre personaje",
                "Imaginile cronologice",
                "Asemănările dintre cele două personaje",
                "Jetoanele cu cifre",
              ],
              correctIndex: 2,
              explanation:
                "La intersecția celor două cercuri din Diagrama Venn, " +
                "preșcolarii plasează asemănările dintre cele două personaje.",
            },
            {
              id: "edu-ped-jd-mq2-7",
              type: "fill-blank",
              question:
                "Preșcolarii vor fi introduși în activitate prin aducerea sub formă de _______ a materialelor didactice.",
              correctAnswers: [
                "surpriză",
                "surpriza",
                "Surpriză",
                "Surpriza",
                "SURPRIZĂ",
              ],
              explanation:
                "Educatoarea aduce sub formă de surpriză materialele didactice " +
                "folosite în cadrul jocului — acesta este elementul de captare " +
                "a atenției.",
            },
            {
              id: "edu-ped-jd-mq2-8",
              type: "multiple-choice",
              question:
                "Ce face educatoarea la finalul jocului didactic?",
              options: [
                "Distribuie fișe de lucru",
                "Predă o poveste nouă",
                "Face aprecieri verbale, oferind recompense stimulante",
                "Greșește intenționat la tabla magnetică",
              ],
              correctIndex: 2,
              explanation:
                "La final, educatoarea face aprecieri verbale, oferind " +
                "recompense stimulante.",
            },
            {
              id: "edu-ped-jd-mq2-9",
              type: "true-false",
              question:
                "A doua variantă a jocului presupune plasarea imaginilor în ordine cronologică pe tabla magnetică.",
              correct: true,
              explanation:
                "Da, a doua variantă presupune ca preșcolarii să plaseze " +
                "imaginile din poveste în ordine cronologică pe tabla magnetică.",
            },
            {
              id: "edu-ped-jd-mq2-10",
              type: "fill-blank",
              question:
                "Educatoarea va explica și demonstra regulile jocului prin desfășurarea jocului de _______.",
              correctAnswers: [
                "probă",
                "proba",
                "Probă",
                "Proba",
                "PROBĂ",
              ],
              explanation:
                "Educatoarea explică și demonstrează regulile și sarcinile " +
                "jocului prin desfășurarea jocului de probă — etapă specifică " +
                "și obligatorie a jocului didactic.",
            },
          ],
        },
      },
    ],
    transcript:
      "## Jocul didactic\n\n" +
      "### Definiție\n" +
      "Jocul didactic în educația timpurie este o modalitate specifică de realizare a unor activități " +
      "didactice din educația timpurie, care sunt integrate în demersul educațional, având obiective " +
      "bine precizate, reprezentând forma ideală prin care jocul sprijină învățarea dirijată, " +
      "pregătind preșcolarul pentru integrarea ulterioară în învățământul primar.\n\n" +
      "### Scop general\n" +
      "De a dezvolta preșcolarii global, stimulând spiritul de cooperare.\n" +
      "La orice joc: «de a fixa și consolida» + conținut specific.\n\n" +
      "### 7 componente\n" +
      "Scop | Sarcina didactică | Regulile jocului (cu «vor») | Elemente de joc (aplauze, recompense, " +
      "element-surpriză, închisul/deschisul ochilor) | Materialele didactice (nu ce se bagă în priză!) | " +
      "Acțiunea de joc (joc de probă + joc propriu-zis, 2 variante) | Complicarea jocului (variantă " +
      "mai grea, metodă modernă)\n\n" +
      "### Variante pe grupe (practică)\n" +
      "Mică: 1-2 | Mijlocie: 2-3 | Mare: 5-9 | Examen: mereu 2\n\n" +
      "### Semne distinctive\n" +
      "Jocul de probă + complicarea jocului = diferențiază jocul didactic de jocul exercițiu\n\n" +
      "### Pași eseu (Trăistuța cu povești, DLC, 4-5 ani)\n" +
      "Definiție → introducere (titlu + domeniu + vârstă) → scop (fixa și consolida poveștile) → " +
      "sarcină didactică (identifica, recunoaște, plasa, completa) → reguli (cu «vor») → " +
      "elemente de joc (surpriza, recompense, aplauze) → material (trăistuță, jetoane, imagini, " +
      "tablă magnetică) → surpriză + joc de probă → varianta 1 (trăistuța din mână în mână, " +
      "extrage jeton, denumește personaj + poveste) → varianta 2 (plasează imagini cronologic) → " +
      "complicare (Diagrama Venn, caracteristici personaje, la intersecție asemănări) → " +
      "aprecieri verbale + recompense stimulante",
    quiz: {
      topicId: "edu-ped-joc-didactic",
      questions: [
        {
          id: "edu-ped-jd-fq1",
          type: "multiple-choice",
          question:
            "Ce diferențiază jocul didactic de jocul exercițiu?",
          options: [
            "Jocul didactic are fișe de lucru, jocul exercițiu nu",
            "Jocul didactic are jocul de probă și complicarea jocului, jocul exercițiu nu",
            "Jocul didactic se face la centre, jocul exercițiu la domenii",
            "Nu există nicio diferență",
          ],
          correctIndex: 1,
          explanation:
            "Jocul de probă și complicarea jocului sunt semnele distinctive " +
            "ale jocului didactic. Jocul exercițiu nu le are.",
        },
        {
          id: "edu-ped-jd-fq2",
          type: "multiple-choice",
          question:
            "Care este ordinea corectă a componentelor în eseul despre jocul didactic?",
          options: [
            "Reguli → scop → sarcină → materiale",
            "Definiție → scop → sarcină → reguli → elemente → materiale → joc de probă → variante → complicare",
            "Materiale → reguli → scop → complicare",
            "Sarcină → definiție → reguli → variante",
          ],
          correctIndex: 1,
          explanation:
            "Ordinea corectă: definiție → scop → sarcină didactică → reguli → " +
            "elemente de joc → materiale → introducere cu joc de probă → " +
            "variante → complicare → aprecieri.",
        },
        {
          id: "edu-ped-jd-fq3",
          type: "true-false",
          question:
            "Jocul de probă și jocul demonstrativ sunt același lucru.",
          correct: true,
          explanation:
            "Da, jocul de probă = jocul demonstrativ. Termenul actual " +
            "este «joc de probă».",
        },
        {
          id: "edu-ped-jd-fq4",
          type: "fill-blank",
          question:
            "Scopul oricărui joc didactic se formulează: «de a _______ și consolida».",
          correctAnswers: [
            "fixa",
            "Fixa",
            "FIXA",
          ],
          explanation:
            "Scopul jocului didactic este mereu «de a fixa și consolida» — " +
            "jocurile didactice sunt activități de consolidare.",
        },
        {
          id: "edu-ped-jd-fq5",
          type: "multiple-choice",
          question:
            "O educatoare scrie în eseu că folosește tabla interactivă drept material didactic. Este corect?",
          options: [
            "Da, tabla interactivă este material didactic",
            "Nu, tabla interactivă este mijloc de învățământ (se bagă în priză)",
            "Da, dar doar la grupa mare",
            "Depinde de tipul jocului didactic",
          ],
          correctIndex: 1,
          explanation:
            "Tot ce se bagă în priză (tabla interactivă, boxa) este " +
            "mijloc de învățământ, nu material didactic.",
        },
        {
          id: "edu-ped-jd-fq6",
          type: "multiple-choice",
          question:
            "Câte variante de joc se prezintă la examen pentru grupa mare?",
          options: [
            "5-9 variante",
            "3 variante",
            "2 variante",
            "1 variantă",
          ],
          correctIndex: 2,
          explanation:
            "La examen se prezintă mereu 2 variante, indiferent de grupă. " +
            "5-9 variante sunt în practică la grupa mare.",
        },
        {
          id: "edu-ped-jd-fq7",
          type: "true-false",
          question:
            "Jocurile didactice se pot face și la centre, nu doar la domeniile experiențiale.",
          correct: false,
          explanation:
            "Jocurile didactice se fac doar la domeniile experiențiale, " +
            "NU la centre.",
        },
        {
          id: "edu-ped-jd-fq8",
          type: "multiple-choice",
          question:
            "La complicarea jocului «Trăistuța cu povești», ce plasează preșcolarii în cercurile Diagramei Venn?",
          options: [
            "Cifre și litere",
            "Imagini cronologice din poveste",
            "Caracteristicile a două personaje, la intersecție asemănările",
            "Jetoane cu forme geometrice",
          ],
          correctIndex: 2,
          explanation:
            "La complicare, preșcolarii completează cercurile cu " +
            "caracteristicile a două personaje din poveste, iar la " +
            "intersecție plasează asemănările.",
        },
        {
          id: "edu-ped-jd-fq9",
          type: "fill-blank",
          question:
            "Regulile jocului se formulează mereu cu verbul la viitor: «_______».",
          correctAnswers: [
            "vor",
            "Vor",
            "VOR",
          ],
          explanation:
            "Regulile se formulează mereu cu «vor»: vor extrage, " +
            "vor recunoaște, vor identifica, vor descrie.",
        },
        {
          id: "edu-ped-jd-fq10",
          type: "true-false",
          question:
            "Eseul despre jocul didactic se scrie diferit pentru fiecare grupă de vârstă.",
          correct: false,
          explanation:
            "Nu, un singur eseu se folosește pentru toate grupele de vârstă. " +
            "Structura este aceeași, se adaptează doar conținutul specific.",
        },
      ],
    },
  },
];
