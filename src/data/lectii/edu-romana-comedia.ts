import { Lesson } from "@/types/lectii";

export const eduRomanaComediaLessons: Lesson[] = [
  {
    topicId: "romana-sub1-comedia",
    title: "Comedia: «O scrisoare pierdută» — I.L. Caragiale",
    duration: "40 min",
    objectives: [
      "Să definească comedia ca specie a genului dramatic",
      "Să exemplifice două trăsături ale comediei din «O scrisoare pierdută»",
      "Să prezinte tema, acțiunea și personajele operei",
      "Să aplice structura standard de eseu pentru comedie",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "romana-sub1-comedia",
      questions: [
        {
          id: "romana-sub1-comedia-fq1",
          type: "multiple-choice",
          question:
            "Cine găsește scrisoarea pierdută în final?",
          options: [
            "Cațavencu",
            "Tipătescu",
            "Cetățeanul turmentat",
            "Pristanda",
          ],
          correctIndex: 2,
          explanation:
            "Scrisoarea este găsită de cetățeanul turmentat și înapoiată " +
            "lui Zoe, rezolvând conflictul piesei.",
        },
        {
          id: "romana-sub1-comedia-fq2",
          type: "true-false",
          question: "Cațavencu câștigă alegerile.",
          correct: false,
          explanation:
            "Cațavencu nu câștigă alegerile. Alegerile sunt câștigate de " +
            "Agamiță Dandanache, candidatul impus de la centru.",
        },
        {
          id: "romana-sub1-comedia-fq3",
          type: "fill-blank",
          question:
            "Ticul verbal al lui Trahanache este «ai puțintică ___».",
          correctAnswers: ["rabdare", "răbdare"],
          explanation:
            "Ticul verbal al lui Zaharia Trahanache este «ai puțintică " +
            "răbdare», repetarea acestei expresii contribuind la comicul " +
            "de limbaj.",
        },
        {
          id: "romana-sub1-comedia-fq4",
          type: "multiple-choice",
          question:
            "Ce formă a comicului ilustrează numele Farfuridi și Brânzovenescu?",
          options: [
            "Comic de situație",
            "Comic de limbaj",
            "Comic de nume",
            "Comic de caracter",
          ],
          correctIndex: 2,
          explanation:
            "Farfuridi și Brânzovenescu sunt exemple de comic de nume — " +
            "denumirile sugestive ridiculizează personajele prin derivarea " +
            "lor din cuvinte comune (farfurie, brânză).",
        },
        {
          id: "romana-sub1-comedia-fq5",
          type: "true-false",
          question:
            "«O scrisoare pierdută» are 5 acte.",
          correct: false,
          explanation:
            "Piesa «O scrisoare pierdută» are 4 acte, nu 5.",
        },
        {
          id: "romana-sub1-comedia-fq6",
          type: "fill-blank",
          question:
            "Expresia nonsens «să se revizuiască, dar să nu se schimbe ___» ilustrează comicul de limbaj.",
          correctAnswers: ["nimica"],
          explanation:
            "Nonsensul «să se revizuiască, dar să nu se schimbe nimica» " +
            "este un exemplu clasic de comic de limbaj — contradicția " +
            "logică stârnește râsul.",
        },
        {
          id: "romana-sub1-comedia-fq7",
          type: "multiple-choice",
          question:
            "Care este tema piesei «O scrisoare pierdută»?",
          options: [
            "Iubirea și sacrificiul",
            "Lupta pentru putere, corupția și imoralitatea",
            "Educația greșită din familie",
            "Conflictul dintre generații",
          ],
          correctIndex: 1,
          explanation:
            "Tema piesei este lupta pentru putere într-un oraș de provincie, " +
            "reflectând corupția, imoralitatea și haosul vieții politice.",
        },
        {
          id: "romana-sub1-comedia-fq8",
          type: "true-false",
          question:
            "Zoe este un personaj pasiv, care se lasă manipulată de ceilalți.",
          correct: false,
          explanation:
            "Zoe este un personaj activ: lucidă, manipulatoare, puternică. " +
            "Ea găsește soluții, negociază, dă ordine și manipulează " +
            "situația în favoarea ei.",
        },
        {
          id: "romana-sub1-comedia-fq9",
          type: "multiple-choice",
          question:
            "Care este tema piesei «O scrisoare pierdută»?",
          options: [
            "Iubirea neîmpărtășită într-un mediu rural",
            "Lupta pentru putere și corupția vieții politice",
            "Conflictul dintre generații într-o familie de boieri",
            "Decăderea aristocrației la sfârșitul secolului al XIX-lea",
          ],
          correctIndex: 1,
          explanation:
            "Tema piesei este lupta pentru putere într-un oraș de " +
            "provincie, reflectând corupția, imoralitatea și haosul " +
            "vieții politice românești. Scrisoarea de amor devine " +
            "instrument de șantaj politic.",
        },
        {
          id: "romana-sub1-comedia-fq10",
          type: "true-false",
          question:
            "«O scrisoare pierdută» este singura comedie scrisă de I.L. Caragiale.",
          correct: false,
          explanation:
            "Caragiale a scris trei comedii: «O noapte furtunoasă», " +
            "«D'ale carnavalului» și «O scrisoare pierdută». «O scrisoare " +
            "pierdută» este cea mai importantă și cea mai des cerută la examen.",
        },
      ],
    },

    chapters: [
      // ─── Chapter 1: Comedia — «O scrisoare pierdută» de I.L. Caragiale ───
      {
        id: "romana-sub1-comedia-ch1",
        title:
          "Comedia — «O scrisoare pierdută» de I.L. Caragiale",
        duration: "~25 min",
        sections: [
          {
            title: "Definiția comediei",
            content:
              "Comedia este o specie a genului dramatic, caracterizată prin " +
              "folosirea comicului pentru a evidenția contrastele dintre aparență " +
              "și esență, stârnind râsul și vizând defecte umane sau sociale.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Comedia** este o specie a **genului dramatic**, caracterizată " +
                  "prin folosirea **comicului** pentru a evidenția contrastele " +
                  "dintre **aparență și esență**, stârnind râsul și vizând " +
                  "**defecte umane sau sociale**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Începe eseul cu definiția: «Comedia este o specie a genului " +
                    "dramatic, caracterizată prin folosirea comicului pentru a " +
                    "evidenția contrastele dintre aparență și esență.» Cele două " +
                    "trăsături: (1) prezența comicului în multiple forme și " +
                    "(2) finalul fericit.",
                },
              },
            ],
          },
          {
            title: "Date despre operă și autor",
            content:
              "Ion Luca Caragiale, scriitor marcant al secolului al XIX-lea, " +
              "este autorul comediilor «O noapte furtunoasă», «D'ale carnavalului» " +
              "și «O scrisoare pierdută». «O scrisoare pierdută» are 4 acte și " +
              "satirizează viața politică dintr-un oraș de provincie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Ion Luca Caragiale**, scriitor marcant al secolului al XIX-lea, " +
                  "este autorul comediilor:\n" +
                  "• «O noapte furtunoasă»\n" +
                  "• «D'ale carnavalului»\n" +
                  "• **«O scrisoare pierdută»**\n\n" +
                  "«O scrisoare pierdută» are **4 acte** și satirizează viața " +
                  "politică dintr-un oraș de provincie.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Reține cele trei comedii ale lui Caragiale — s-ar putea cere " +
                    "la examen. «O scrisoare pierdută» este cea mai importantă " +
                    "și cea mai des cerută.",
                },
              },
            ],
          },
          {
            title: "Trăsătura 1: Prezența comicului în multiple forme",
            content:
              "Comic de nume: Farfuridi, Brânzovenescu, Trahanache, Pristanda, " +
              "Cațavencu, Dandanache. Comic de limbaj: ticuri verbale, greșeli, " +
              "nonsensuri. Comic de caracter: Zoe, Tipătescu, Cațavencu. " +
              "Comic de situație: pierderea scrisorii, apariția lui Dandanache. " +
              "Comic de moravuri: șantaj, corupție, demagogie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "O primă trăsătură a comediei este **prezența comicului în multiple " +
                  "forme**:\n\n" +
                  "**Comic de NUME** — denumiri sugestive care ridiculizează:\n" +
                  "• **Farfuridi**, **Brânzovenescu** — derivate din cuvinte comune\n" +
                  "• **Zaharia Trahanache** — trahanaua = mâncare simplă\n" +
                  "• **Pristanda** — bate pasul pe loc\n" +
                  "• **Cațavencu** — duplicitar\n" +
                  "• **Dandanache** — încurcă-lume\n" +
                  "• **Agamiță** — referire ironică la nevinovăție\n\n" +
                  "**Comic de LIMBAJ** — ticuri verbale și greșeli:\n" +
                  "• «ai puțintică răbdare» — ticul lui Trahanache\n" +
                  "• «renumerație» — în loc de «remunerație»\n" +
                  "• «să se revizuiască, dar să nu se schimbe nimica» — nonsens logic\n\n" +
                  "**Comic de CARACTER** — tipologii exagerate:\n" +
                  "• **Zoe** — femeia adulterină\n" +
                  "• **Tipătescu** — amantul elegant\n" +
                  "• **Cațavencu** — demagogul\n\n" +
                  "**Comic de SITUAȚIE:**\n" +
                  "• Pierderea scrisorii de amor\n" +
                  "• Apariția neașteptată a lui Dandanache\n\n" +
                  "**Comic de MORAVURI:**\n" +
                  "• Șantaj politic, corupție, demagogie",
              },
            ],
          },
          {
            title: "Trăsătura 2: Finalul fericit",
            content:
              "Scrisoarea este găsită de cetățeanul turmentat și înapoiată " +
              "lui Zoe. Alegerile sunt câștigate de Agamiță Dandanache, " +
              "impus de la centru. Toți se felicită absurd.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "A doua trăsătură a comediei este **finalul fericit**.\n\n" +
                  "• **Scrisoarea** este găsită de **cetățeanul turmentat** și " +
                  "înapoiată lui Zoe — conflictul dispare\n" +
                  "• **Alegerile** sunt câștigate de **Agamiță Dandanache**, " +
                  "candidatul impus de la centru\n" +
                  "• Toți se felicită absurd, ca și cum nimic grav nu s-ar fi " +
                  "întâmplat — semn al ipocriziei generalizate",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Finalul fericit e ușor de argumentat: scrisoarea e înapoiată, " +
                    "toți sunt mulțumiți. Dar ironia e că «fericit» nu înseamnă " +
                    "drept — Dandanache câștigă impus de la centru, corupția continuă. " +
                    "Poți menționa această ironie în eseu.",
                },
              },
            ],
          },
          {
            title: "Tema piesei",
            content:
              "Tema: lupta pentru putere într-un oraș de provincie, corupția " +
              "și imoralitatea vieții politice.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tema** piesei este **lupta pentru putere** într-un oraș de " +
                  "provincie, reflectând **corupția**, **imoralitatea** și haosul " +
                  "vieții politice românești.\n\n" +
                  "Scrisoarea de amor devine instrument de șantaj politic — iubirea " +
                  "și politica se amestecă într-un mod grotesc, expunând ipocrizia " +
                  "tuturor personajelor.",
              },
            ],
          },
          {
            title: "Acțiunea — momentele subiectului",
            content:
              "4 acte. Expozițiune — personajele și contextul alegerilor. " +
              "Intriga — pierderea scrisorii de amor Zoe–Tipătescu. Desfășurarea — " +
              "Cațavencu șantajează pentru candidatură, apare candidatul de la centru. " +
              "Punctul culminant — ședința electorală, Cațavencu înlocuit cu " +
              "Dandanache. Deznodământul — scrisoarea înapoiată Zoei.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Acțiunea se desfășoară în **4 acte**, pe **momentele subiectului**:\n\n" +
                  "**Expozițiunea:** Sunt prezentate personajele și contextul — " +
                  "alegerile electorale dintr-un oraș de provincie.\n\n" +
                  "**Intriga:** Pierderea scrisorii de amor dintre **Zoe** și " +
                  "**Tipătescu** — scrisoarea ajunge în mâinile lui Cațavencu.\n\n" +
                  "**Desfășurarea acțiunii:** **Cațavencu** încearcă să șantajeze " +
                  "pentru a obține candidatura. Apare **candidatul de la centru** " +
                  "(Dandanache), complicând situația.\n\n" +
                  "**Punctul culminant:** Ședința electorală — Cațavencu este " +
                  "înlocuit cu **Agamiță Dandanache**.\n\n" +
                  "**Deznodământul:** Scrisoarea este înapoiată Zoei de cetățeanul " +
                  "turmentat. Toți se comportă ca și cum nimic grav nu s-a întâmplat.",
              },
            ],
          },
          {
            title: "Personajul Zoe",
            content:
              "Soția lui Trahanache, amanta lui Tipătescu. Lucidă, manipulatoare, " +
              "puternică. «Sunt nenorocită, Fanică!» — dar nu-și pierde stăpânirea " +
              "de sine. Comic de nume: «coana Joițica» — familiaritate și ipocrizie. " +
              "Găsește soluții, negociază, dă ordine, manipulează.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Zoe** — personaj complex, central în acțiune:\n\n" +
                  "• **Soția** lui Trahanache, **amanta** lui Tipătescu\n" +
                  "• **Lucidă**, **manipulatoare**, **puternică** — nu se lasă " +
                  "copleșită de situație\n" +
                  "• «Sunt nenorocită, Fanică!» — replică dramatică, dar nu-și " +
                  "pierde **stăpânirea de sine**\n" +
                  "• **Comic de nume:** «coana Joițica» — familiaritate și ipocrizie\n" +
                  "• Găsește **soluții**, negociază, dă ordine, manipulează pe " +
                  "toți din jurul ei",
              },
            ],
          },
        ],
        examples: [
          {
            title: "Fragment introductiv pentru eseu",
            description:
              "«Comedia este o specie a genului dramatic, caracterizată prin " +
              "folosirea comicului pentru a evidenția contrastele dintre aparență " +
              "și esență, stârnind râsul și vizând defecte umane sau sociale. " +
              "Ion Luca Caragiale este cunoscut pentru comediile sale satirice, " +
              "printre care se remarcă «O scrisoare pierdută».» — Un paragraf " +
              "introductiv eficient, urmat de trăsăturile comediei.",
          },
        ],
        keyPoints: [
          {
            text: "Comedia = specie a genului dramatic, bazată pe comic",
            important: true,
          },
          {
            text: "I.L. Caragiale — comedii: «O noapte furtunoasă», «D'ale carnavalului», «O scrisoare pierdută»",
            important: true,
          },
          {
            text: "Trăsătura 1: comicul — de nume, limbaj, caracter, situație, moravuri",
            important: true,
          },
          {
            text: "Trăsătura 2: finalul fericit (scrisoarea înapoiată, toți se felicită)",
            important: true,
          },
          { text: "Tema: lupta pentru putere, corupția, imoralitatea" },
          { text: "Piesa are 4 acte, acțiunea se desfășoară pe momentele subiectului" },
          { text: "Zoe: lucidă, manipulatoare, puternică — «coana Joițica»" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-comedia-mq1-1",
              type: "multiple-choice",
              question:
                "Cine găsește scrisoarea pierdută în final?",
              options: [
                "Cațavencu",
                "Tipătescu",
                "Cetățeanul turmentat",
                "Pristanda",
              ],
              correctIndex: 2,
              explanation:
                "Scrisoarea este găsită de cetățeanul turmentat și înapoiată " +
                "lui Zoe, rezolvând conflictul piesei.",
            },
            {
              id: "romana-sub1-comedia-mq1-2",
              type: "true-false",
              question: "Cațavencu câștigă alegerile.",
              correct: false,
              explanation:
                "Cațavencu nu câștigă alegerile. Alegerile sunt câștigate de " +
                "Agamiță Dandanache, candidatul impus de la centru.",
            },
            {
              id: "romana-sub1-comedia-mq1-3",
              type: "fill-blank",
              question:
                "Ticul verbal al lui Trahanache este «ai puțintică ___».",
              correctAnswers: ["rabdare", "răbdare"],
              explanation:
                "Ticul verbal al lui Zaharia Trahanache este «ai puțintică " +
                "răbdare», repetarea acestei expresii contribuind la comicul " +
                "de limbaj.",
            },
            {
              id: "romana-sub1-comedia-mq1-4",
              type: "multiple-choice",
              question:
                "Ce formă a comicului ilustrează numele Farfuridi și Brânzovenescu?",
              options: [
                "Comic de situație",
                "Comic de limbaj",
                "Comic de nume",
                "Comic de caracter",
              ],
              correctIndex: 2,
              explanation:
                "Farfuridi și Brânzovenescu sunt exemple de comic de " +
                "nume — denumirile sugestive ridiculizează personajele " +
                "prin derivarea lor din cuvinte comune (farfurie, brânză).",
            },
            {
              id: "romana-sub1-comedia-mq1-5",
              type: "true-false",
              question:
                "«O scrisoare pierdută» are 5 acte.",
              correct: false,
              explanation:
                "Piesa «O scrisoare pierdută» are 4 acte, nu 5. Acțiunea " +
                "se desfășoară pe momentele subiectului: expozițiune, " +
                "intrigă, desfășurarea acțiunii, punct culminant și " +
                "deznodământ.",
            },
            {
              id: "romana-sub1-comedia-mq1-6",
              type: "fill-blank",
              question:
                "Nonsensul «să se revizuiască, dar să nu se schimbe ___» ilustrează comicul de limbaj.",
              correctAnswers: ["nimica"],
              explanation:
                "Nonsensul «să se revizuiască, dar să nu se schimbe nimica» " +
                "este un exemplu clasic de comic de limbaj — contradicția " +
                "logică stârnește râsul și dezvăluie superficialitatea " +
                "discursului politic.",
            },
            {
              id: "romana-sub1-comedia-mq1-7",
              type: "multiple-choice",
              question:
                "Care este tema piesei «O scrisoare pierdută»?",
              options: [
                "Iubirea și sacrificiul",
                "Lupta pentru putere, corupția și imoralitatea",
                "Educația greșită din familie",
                "Conflictul dintre generații",
              ],
              correctIndex: 1,
              explanation:
                "Tema piesei este lupta pentru putere într-un oraș de " +
                "provincie, reflectând corupția, imoralitatea și haosul " +
                "vieții politice. Scrisoarea de amor devine instrument " +
                "de șantaj politic.",
            },
            {
              id: "romana-sub1-comedia-mq1-8",
              type: "true-false",
              question:
                "Zoe este un personaj pasiv, care se lasă manipulată de ceilalți.",
              correct: false,
              explanation:
                "Zoe este un personaj activ: lucidă, manipulatoare, " +
                "puternică. Ea găsește soluții, negociază, dă ordine și " +
                "manipulează situația în favoarea ei. «Sunt nenorocită, " +
                "Fanică!» — dar nu-și pierde stăpânirea de sine.",
            },
            {
              id: "romana-sub1-comedia-mq1-9",
              type: "multiple-choice",
              question:
                "Ce tip de comic este ilustrat de pierderea scrisorii de amor?",
              options: [
                "Comic de nume",
                "Comic de limbaj",
                "Comic de situație",
                "Comic de moravuri",
              ],
              correctIndex: 2,
              explanation:
                "Pierderea scrisorii de amor dintre Zoe și Tipătescu este " +
                "un exemplu de comic de situație — o întâmplare neașteptată " +
                "care generează confuzie și complicații comice în " +
                "desfășurarea acțiunii.",
            },
            {
              id: "romana-sub1-comedia-mq1-10",
              type: "fill-blank",
              question:
                "Cuvântul «renumerație» folosit în loc de «remunerație» este un exemplu de comic de ___.",
              correctAnswers: ["limbaj"],
              explanation:
                "«Renumerație» în loc de «remunerație» este un exemplu de " +
                "comic de limbaj — greșeala involuntară expune lipsa de " +
                "cultură a personajului și stârnește râsul.",
            },
          ],
        },
      },

      // ─── Chapter 2: Model de eseu — Comedia ───
      {
        id: "romana-sub1-comedia-ch2",
        title: "Model de eseu — Comedia",
        duration: "~15 min",
        sections: [
          {
            title: "Structura recomandată a eseului",
            content:
              "1. Definiția comediei + date despre autor/operă\n" +
              "2. Trăsătura 1 (comicul în multiple forme) cu exemplificare din text\n" +
              "3. Trăsătura 2 (finalul fericit) cu exemplificare din text\n" +
              "4. Element de construcție 1 (recomandat: tema)\n" +
              "5. Element de construcție 2 (recomandat: acțiunea)\n" +
              "6. Concluzie (opțional)",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Structura recomandată a eseului:**\n\n" +
                  "1. **Definiția comediei** + câteva date despre autor și operă\n" +
                  "2. **Trăsătura 1** (prezența comicului în multiple forme) cu exemplificare concretă din text\n" +
                  "3. **Trăsătura 2** (finalul fericit) cu exemplificare concretă din text\n" +
                  "4. **Element de construcție 1** — recomandat: **tema** (lupta pentru putere, corupția)\n" +
                  "5. **Element de construcție 2** — recomandat: **acțiunea** (cele 4 acte, momentele subiectului)\n" +
                  "6. **Concluzie** (opțional, dacă mai ai spațiu)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La comedie, comicul e cel mai ușor de exemplificat — ai cinci " +
                    "forme (de nume, de limbaj, de caracter, de situație, de moravuri). " +
                    "Nu trebuie să le dai pe toate — alege 3-4 și exemplifică concret. " +
                    "Eseul trebuie să aibă 300-400 de cuvinte.",
                },
              },
            ],
          },
          {
            title: "Model complet de eseu — «O scrisoare pierdută»",
            content:
              "Un model complet de eseu despre comedia «O scrisoare pierdută» " +
              "de I.L. Caragiale, structurat conform cerințelor de la Subiectul 1B.",
            contentBlocks: [
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model de eseu — «O scrisoare pierdută» de I.L. Caragiale " +
                    "(Comedie)",
                  source: "claude",
                  content:
                    "Comedia este o specie a genului dramatic, caracterizată prin " +
                    "folosirea comicului pentru a evidenția contrastele dintre " +
                    "aparență și esență, stârnind râsul și vizând defecte umane " +
                    "sau sociale. Ion Luca Caragiale este cunoscut pentru comediile " +
                    "sale satirice, printre care se remarcă «O scrisoare " +
                    "pierdută».\n\n" +
                    "O primă trăsătură a comediei este prezența comicului în " +
                    "multiple forme. Comicul de nume este evident în denumiri " +
                    "sugestive: Farfuridi, Brânzovenescu, Zaharia Trahanache, " +
                    "Pristanda (care bate pasul pe loc), Cațavencu (duplicitar), " +
                    "Dandanache (încurcă-lume). Comicul de limbaj apare prin ticuri " +
                    "verbale («ai puțintică răbdare»), greșeli («renumerație»), " +
                    "nonsensuri («să se revizuiască, dar să nu se schimbe nimica»). " +
                    "Comicul de caracter reiese din tipologii exagerate: Zoe — " +
                    "femeia adulterină, Tipătescu — amantul elegant, Cațavencu — " +
                    "demagogul. Comicul de situație constă în pierderea scrisorii " +
                    "și apariția neașteptată a lui Dandanache.\n\n" +
                    "A doua trăsătură a comediei este finalul fericit. Scrisoarea " +
                    "este găsită de cetățeanul turmentat și înapoiată lui Zoe, " +
                    "iar conflictul dispare. Alegerile sunt câștigate de Agamiță " +
                    "Dandanache, impus de la centru, iar toți se felicită " +
                    "absurd.\n\n" +
                    "Tema piesei este lupta pentru putere într-un oraș de provincie, " +
                    "reflectând corupția, imoralitatea și haosul vieții politice " +
                    "românești.\n\n" +
                    "Acțiunea se desfășoară conform momentelor subiectului. În " +
                    "expozițiune, sunt prezentate personajele și contextul " +
                    "alegerilor. Intriga este pierderea scrisorii de amor dintre " +
                    "Zoe și Tipătescu. În desfășurarea acțiunii, Cațavencu " +
                    "încearcă să șantajeze pentru a obține candidatura și este " +
                    "introdus candidatul de la centru. Punctul culminant este " +
                    "ședința electorală, unde Cațavencu este înlocuit cu " +
                    "Dandanache. Deznodământul aduce rezolvarea: scrisoarea este " +
                    "înapoiată Zoei, iar toți se comportă ca și cum nimic grav " +
                    "nu s-a întâmplat.\n\n" +
                    "În concluzie, «O scrisoare pierdută» este o comedie " +
                    "remarcabilă prin umor, limbaj și critică socială, rămânând " +
                    "actuală prin satira vieții politice.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Dacă se cere caracterizarea Zoei: personaj-cheie, soția lui " +
                    "Trahanache, amanta lui Tipătescu. Lucidă, manipulatoare, " +
                    "puternică. «Sunt nenorocită, Fanică!» — dar nu-și pierde " +
                    "stăpânirea de sine. Comicul de nume: «coana Joițica» sugerează " +
                    "familiaritate și ipocrizie. Găsește soluții, negociază, dă " +
                    "ordine, manipulează.",
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
            text: "Structura: definiție comedie → trăsături + exemplificare → elemente de construcție → concluzie",
            important: true,
          },
          { text: "Tema și acțiunea sunt cele mai sigure elemente de construcție" },
          {
            text: "Exemplifică concret comicul (alege 3-4 forme din cele 5)",
            important: true,
          },
          { text: "Nu depăși limita de 300-400 cuvinte" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-comedia-mq2-1",
              type: "multiple-choice",
              question:
                "Cu ce ar trebui să înceapă eseul despre comedie?",
              options: [
                "Cu biografia completă a lui I.L. Caragiale",
                "Cu definiția comediei ca specie a genului dramatic",
                "Cu momentele subiectului",
                "Cu o citire expresivă a textului",
              ],
              correctIndex: 1,
              explanation:
                "Eseul trebuie să înceapă cu definiția comediei ca specie a genului " +
                "dramatic, urmată de date despre autor și operă.",
            },
            {
              id: "romana-sub1-comedia-mq2-2",
              type: "true-false",
              question:
                "La eseul despre comedie, este obligatoriu să prezinți toate cele 5 forme ale comicului.",
              correct: false,
              explanation:
                "Nu este obligatoriu să prezinți toate cele 5 forme ale comicului. " +
                "Este suficient să alegi 3-4 forme și să le exemplifici concret " +
                "din text.",
            },
            {
              id: "romana-sub1-comedia-mq2-3",
              type: "fill-blank",
              question:
                "Cele două trăsături ale comediei sunt prezența comicului și finalul ___.",
              correctAnswers: ["fericit"],
              explanation:
                "Cele două trăsături sunt: (1) prezența comicului în multiple forme " +
                "și (2) finalul fericit — scrisoarea e înapoiată, toți se felicită.",
            },
            {
              id: "romana-sub1-comedia-mq2-4",
              type: "multiple-choice",
              question:
                "Care sunt cele două elemente de construcție recomandate pentru eseul despre comedie?",
              options: [
                "Versificația și rima",
                "Metaforele și epitetele",
                "Tema și acțiunea (momentele subiectului)",
                "Figurile de stil și câmpurile semantice",
              ],
              correctIndex: 2,
              explanation:
                "La comedie (gen dramatic), cele mai sigure elemente de " +
                "construcție sunt tema (lupta pentru putere, corupția) și " +
                "acțiunea (cele 4 acte, momentele subiectului).",
            },
            {
              id: "romana-sub1-comedia-mq2-5",
              type: "true-false",
              question:
                "La eseul despre comedie este obligatoriu să prezinți toate cele 5 forme ale comicului.",
              correct: false,
              explanation:
                "Nu este obligatoriu să prezinți toate cele 5 forme ale " +
                "comicului. Este suficient să alegi 3-4 forme și să le " +
                "exemplifici concret din text. Calitatea exemplificării " +
                "contează mai mult decât cantitatea.",
            },
            {
              id: "romana-sub1-comedia-mq2-6",
              type: "fill-blank",
              question:
                "Comedia este o specie a genului ___.",
              correctAnswers: ["dramatic"],
              explanation:
                "Comedia este o specie a genului dramatic, nu liric sau " +
                "epic. Această definiție trebuie să deschidă eseul despre " +
                "«O scrisoare pierdută».",
            },
            {
              id: "romana-sub1-comedia-mq2-7",
              type: "multiple-choice",
              question:
                "Ce reprezintă punctul culminant al piesei?",
              options: [
                "Pierderea scrisorii",
                "Apariția lui Dandanache",
                "Ședința electorală, unde Cațavencu este înlocuit cu Dandanache",
                "Scrisoarea înapoiată Zoei",
              ],
              correctIndex: 2,
              explanation:
                "Punctul culminant este ședința electorală, în care " +
                "Cațavencu este înlocuit cu Agamiță Dandanache, candidatul " +
                "impus de la centru. Această răsturnare de situație " +
                "reprezintă momentul de maximă tensiune.",
            },
            {
              id: "romana-sub1-comedia-mq2-8",
              type: "true-false",
              question:
                "Finalul «fericit» al comediei înseamnă că dreptatea triumfă în final.",
              correct: false,
              explanation:
                "Finalul e «fericit» doar în aparență: scrisoarea e " +
                "înapoiată și toți se felicită, dar Dandanache câștigă " +
                "impus de la centru, iar corupția continuă. Ironia este " +
                "că «fericit» nu înseamnă drept — un detaliu valoros " +
                "de menționat în eseu.",
            },
            {
              id: "romana-sub1-comedia-mq2-9",
              type: "multiple-choice",
              question:
                "Care este intriga piesei «O scrisoare pierdută»?",
              options: [
                "Apariția lui Dandanache",
                "Ședința electorală",
                "Pierderea scrisorii de amor dintre Zoe și Tipătescu",
                "Felicitările absurde din final",
              ],
              correctIndex: 2,
              explanation:
                "Intriga este pierderea scrisorii de amor dintre Zoe și " +
                "Tipătescu — aceasta declanșează conflictul piesei, " +
                "deoarece scrisoarea ajunge în mâinile lui Cațavencu, " +
                "care o folosește ca instrument de șantaj politic.",
            },
            {
              id: "romana-sub1-comedia-mq2-10",
              type: "fill-blank",
              question:
                "Eseul trebuie să aibă între 300 și ___ de cuvinte.",
              correctAnswers: ["400"],
              explanation:
                "Eseul de la Subiectul 1B trebuie să aibă între 300 și " +
                "400 de cuvinte. Un sfat practic: numeri câte cuvinte " +
                "ai pe un rând (~10) și înmulțești cu numărul de rânduri " +
                "scrise.",
            },
          ],
        },
      },
    ],
  },
];
