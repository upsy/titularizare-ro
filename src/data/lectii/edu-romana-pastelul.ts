import { Lesson } from "@/types/lectii";

export const eduRomanaPastelulLessons: Lesson[] = [
  {
    topicId: "romana-sub1-pastelul",
    title: "Pastelul: «Mezul iernii» — V. Alecsandri (Pașoptism)",
    duration: "45 min",
    objectives: [
      "Să definească pastelul ca specie a genului liric",
      "Să exemplifice două trăsături ale pastelului din «Mezul iernii»",
      "Să aplice structura standard de eseu pentru pastel",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "romana-sub1-pastelul",
      questions: [
        {
          id: "romana-sub1-pastelul-fq1",
          type: "multiple-choice",
          question: "Din ce ciclu face parte «Mezul iernii»?",
          options: [
            "Ciclul Baladelor",
            "Ciclul Pastelurilor",
            "Ciclul Elegiilor",
            "Ciclul Meditațiilor",
          ],
          correctIndex: 1,
          explanation:
            "«Mezul iernii» face parte din Ciclul Pastelurilor (1868-1869) " +
            "al lui Vasile Alecsandri.",
        },
        {
          id: "romana-sub1-pastelul-fq2",
          type: "true-false",
          question:
            "Ultima strofă continuă atmosfera de încremenire.",
          correct: false,
          explanation:
            "Ultima strofă introduce dinamism prin imaginea lupului care " +
            "cutreieră peisajul înghețat, în antiteză cu încremenirea " +
            "naturii din strofele anterioare.",
        },
        {
          id: "romana-sub1-pastelul-fq3",
          type: "fill-blank",
          question:
            "«Mezul iernii» este o operă reprezentativă a literaturii ___.",
          correctAnswers: ["pasoptiste", "pașoptiste"],
          explanation:
            "«Mezul iernii» este o operă reprezentativă a literaturii " +
            "pașoptiste, aparținând lui Vasile Alecsandri.",
        },
        {
          id: "romana-sub1-pastelul-fq4",
          type: "multiple-choice",
          question:
            "Care este tema poeziei «Mezul iernii»?",
          options: [
            "Dragostea de patrie",
            "Natura încremenită în iarna aspră",
            "Trecerea timpului",
            "Condiția poetului",
          ],
          correctIndex: 1,
          explanation:
            "Tema poeziei surprinde natura încremenită în iarna aspră, " +
            "zugrăvind un tablou «fantastic» al nopții friguroase.",
        },
        {
          id: "romana-sub1-pastelul-fq5",
          type: "true-false",
          question:
            "Pastelul este o specie a genului epic.",
          correct: false,
          explanation:
            "Pastelul este o specie a genului liric, nu epic. Se " +
            "caracterizează prin descrierea unui peisaj natural.",
        },
        {
          id: "romana-sub1-pastelul-fq6",
          type: "fill-blank",
          question:
            "În strofele 2-3, natura este descrisă ca un ___ măreț, cu «coloane», «făclii» și «altare».",
          correctAnswers: ["templu"],
          explanation:
            "Strofele 2-3 extind imaginea în plan cosmic, descriind " +
            "natura ca un templu măreț, cu «coloane», «făclii» și «altare».",
        },
        {
          id: "romana-sub1-pastelul-fq7",
          type: "multiple-choice",
          question:
            "Ce figură de stil este «luna își aprinde farul tainic»?",
          options: [
            "Epitet",
            "Comparație",
            "Personificare",
            "Hiperbolă",
          ],
          correctIndex: 2,
          explanation:
            "«Luna își aprinde farul tainic» este o personificare — " +
            "luna primește atribute umane (acțiunea de a aprinde).",
        },
        {
          id: "romana-sub1-pastelul-fq8",
          type: "fill-blank",
          question:
            "Câmpurile semantice ale poeziei sunt: iarna, noaptea și ___.",
          correctAnswers: ["templul"],
          explanation:
            "Cele trei câmpuri semantice sunt: iarna (ger, zăpadă, cristalină), " +
            "noaptea (lună, far, umbre) și templul (coloane, făclii, altare).",
        },
        {
          id: "romana-sub1-pastelul-fq9",
          type: "multiple-choice",
          question:
            "Câte secvențe compoziție are poezia «Mezul iernii»?",
          options: [
            "O singură secvență unitară",
            "Două secvențe: tabloul nopții (strofele 1-3) și antiteza din ultima strofă",
            "Trei secvențe: introducere, cuprins, concluzie",
            "Patru secvențe, câte una per strofă",
          ],
          correctIndex: 1,
          explanation:
            "Poezia are 4 catrene împărțite în 2 secvențe: prima secvență (strofele 1-3) " +
            "zugrăvește tabloul nopții de iarnă cu extindere în plan cosmic, iar a doua " +
            "secvență (strofa 4) introduce dinamism prin imaginea lupului, în antiteză " +
            "cu încremenirea naturii.",
        },
        {
          id: "romana-sub1-pastelul-fq10",
          type: "true-false",
          question:
            "Vasile Alecsandri aparține generației marilor clasici, fiind contemporan cu Mihai Eminescu.",
          correct: false,
          explanation:
            "Vasile Alecsandri aparține generației pașoptiste, nu generației lui Eminescu. " +
            "El este considerat poetul național al României dinainte de Eminescu, fiind " +
            "figura centrală a literaturii pașoptiste din secolul al XIX-lea.",
        },
      ],
    },

    chapters: [
      // ─── Chapter 1: Pastelul — «Mezul iernii» ───
      {
        id: "romana-sub1-pastelul-ch1",
        title: "Pastelul — «Mezul iernii» de V. Alecsandri",
        duration: "~25 min",
        sections: [
          {
            title: "Definiția pastelului",
            content:
              "Genul liric este genul literar care exprimă sentimentele, " +
              "gândurile și stările sufletești ale eului liric, printr-o voce " +
              "subiectivă și o exprimare artistică concentrată, în versuri. " +
              "Pastelul este o specie a genului liric, caracterizată prin " +
              "descrierea vie și detaliată a unui peisaj natural, a unui " +
              "anotimp sau a unui moment din natură, cu scopul de a evoca o " +
              "atmosferă.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Genul liric** este genul literar care exprimă sentimentele, " +
                  "gândurile și stările sufletești ale **eului liric**, printr-o voce " +
                  "subiectivă și o exprimare artistică concentrată, în versuri.\n\n" +
                  "**Pastelul** este o specie a genului liric, caracterizată prin " +
                  "descrierea **vie și detaliată** a unui **peisaj natural**, a unui " +
                  "anotimp sau a unui moment din natură, cu scopul de a **evoca o " +
                  "atmosferă**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen, începi ÎNTOTDEAUNA cu definiția genului liric, " +
                    "apoi cu definiția pastelului. Este primul lucru pe care " +
                    "corectorul vrea să-l vadă — că știi ce este specia " +
                    "despre care scrii.",
                },
              },
            ],
          },
          {
            title: "Date despre operă și autor",
            content:
              "«Mezul iernii» de Vasile Alecsandri face parte din ciclul " +
              "Pastelurilor (1868-1869), operă reprezentativă a literaturii " +
              "pașoptiste. Vasile Alecsandri este considerat poetul național " +
              "al României dinainte de Eminescu, fiind figura centrală a " +
              "generației pașoptiste.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**«Mezul iernii»** de **Vasile Alecsandri** face parte din ciclul " +
                  "**Pastelurilor** (**1868-1869**), operă reprezentativă a literaturii " +
                  "**pașoptiste**.\n\n" +
                  "Vasile Alecsandri este considerat poetul național al României " +
                  "dinainte de Eminescu, fiind figura centrală a generației pașoptiste.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Poți face un mic intro în eseu: «Vasile Alecsandri, " +
                    "reprezentant de seamă al pașoptismului, este cunoscut " +
                    "pentru ciclul Pastelurilor (1868-1869). «Mezul iernii» " +
                    "este una dintre cele mai reprezentative poezii ale " +
                    "ciclului.» Dacă știi, treci — nu e greșit!",
                },
              },
            ],
          },
          {
            title: "Trăsătura 1: Predominanța imaginilor vizuale și auditive",
            content:
              "O primă trăsătură a pastelului este predominanța imaginilor " +
              "vizuale și auditive care creează un tablou al naturii. " +
              "În prima secvență, tabloul nopții de iarnă prezintă păduri " +
              "și câmpii sub ger «amar, cumplit». Imaginile vizuale și " +
              "auditive alternează: «trăsnesc stejarii!», «scârțâie». " +
              "Epitetele și metaforele creează o atmosferă feerică: " +
              "«zăpada cristalină», «lan de diamanturi».",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "O primă trăsătură a pastelului este **predominanța imaginilor " +
                  "vizuale și auditive** care creează un tablou al naturii.\n\n" +
                  "În **prima secvență**, tabloul nopții de iarnă prezintă păduri " +
                  "și câmpii sub ger **«amar, cumplit»**. Imaginile vizuale și " +
                  "auditive alternează:\n" +
                  "• Imagini auditive: **«trăsnesc stejarii!»**, **«scârțâie»**\n" +
                  "• Imagini vizuale: **«zăpada cristalină»**, **«lan de diamanturi»**\n\n" +
                  "Epitetele și metaforele creează o **atmosferă feerică**, în care " +
                  "peisajul de iarnă capătă strălucirea pietrelor prețioase.",
              },
            ],
          },
          {
            title: "Trăsătura 2: Prezența figurilor de stil cu rol expresiv",
            content:
              "A doua trăsătură specifică este prezența figurilor de stil " +
              "care contribuie la expresivitate. Strofele 2-3 extind " +
              "imaginea în plan cosmic, descriind natura ca un templu " +
              "măreț, cu «coloane», «făclii» și «altare». Personificările " +
              "(«luna își aprinde farul tainic») și hiperbolele sporesc " +
              "impresia de sublim.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "A doua trăsătură specifică este **prezența figurilor de stil** " +
                  "care contribuie la expresivitate.\n\n" +
                  "**Strofele 2-3** extind imaginea în **plan cosmic**, descriind " +
                  "natura ca un **templu măreț**, cu **«coloane»**, **«făclii»** și " +
                  "**«altare»**.\n\n" +
                  "Figurile de stil:\n" +
                  "• **Personificări:** «luna își aprinde farul tainic»\n" +
                  "• **Hiperbolă:** sporește impresia de sublim\n" +
                  "• **Epitete:** «zăpada cristalină», «ger amar, cumplit»\n" +
                  "• **Metafore:** «lan de diamanturi»\n" +
                  "• **Comparații:** asocierea naturii cu un templu",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "La pastel, cele două trăsături recomandate sunt: " +
                    "(1) predominanța imaginilor vizuale și auditive și " +
                    "(2) prezența figurilor de stil (epitete, metafore, " +
                    "personificări, hiperbolă). Sunt ușor de exemplificat " +
                    "și oferă suficient material pentru eseu.",
                },
              },
            ],
          },
          {
            title: "Tema poeziei",
            content:
              "Tema poeziei surprinde natura încremenită în iarna aspră, " +
              "zugrăvind un tablou «fantastic» al nopții friguroase. " +
              "Atitudinea poetului este de admirație față de măreția și " +
              "liniștea cosmică. Titlul reflectă esența poemului: " +
              "anotimpul rece, când zăpada strălucește pe întinderi albe.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tema** poeziei surprinde **natura încremenită în iarna aspră**, " +
                  "zugrăvind un tablou **«fantastic»** al nopții friguroase.\n\n" +
                  "Atitudinea poetului este de **admirație** față de măreția și " +
                  "**liniștea cosmică**.\n\n" +
                  "**Titlul** reflectă esența poemului: anotimpul rece, când " +
                  "zăpada strălucește pe întinderi albe.",
              },
            ],
          },
          {
            title: "Compoziția și elementele de construcție",
            content:
              "Poezia are 4 catrene împărțite în 2 secvențe: " +
              "prima secvență (strofele 1-3) = tabloul nopții de iarnă, " +
              "cu păduri și câmpii sub ger, extins în plan cosmic; " +
              "ultima strofă = antiteză, introduce dinamism prin " +
              "imaginea lupului care cutreieră peisajul înghețat. " +
              "Aceasta aduce o notă subiectivă și vie în contrast " +
              "cu încremenirea naturii.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Poezia are **4 catrene** împărțite în **2 secvențe**:\n\n" +
                  "**Prima secvență (strofele 1-3):**\n" +
                  "• Tabloul nopții de iarnă, cu păduri și câmpii sub ger\n" +
                  "• Extindere în plan cosmic — natura ca templu măreț\n" +
                  "• Imagini vizuale și auditive dominante\n\n" +
                  "**A doua secvență (strofa 4 — ultima):**\n" +
                  "• **Antiteză** cu cele anterioare\n" +
                  "• Introduce **dinamism** prin imaginea **lupului** care " +
                  "cutreieră peisajul înghețat\n" +
                  "• Aduce o **notă subiectivă** în contrast cu încremenirea naturii",
              },
            ],
          },
          {
            title: "Figuri de stil și câmpuri semantice",
            content:
              "Figuri de stil: epitete («zăpada cristalină», «ger amar, " +
              "cumplit»), metafore («lan de diamanturi»), comparații, " +
              "personificări («luna își aprinde farul tainic»), hiperbolă. " +
              "Câmpuri semantice: iarna (ger, zăpadă, cristalină), " +
              "noaptea (lună, far, umbre), templul (coloane, făclii, altare).",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Figuri de stil:**\n" +
                  "• **Epitete:** «zăpada cristalină», «ger amar, cumplit»\n" +
                  "• **Metafore:** «lan de diamanturi»\n" +
                  "• **Comparații:** asocierea naturii cu un templu\n" +
                  "• **Personificări:** «luna își aprinde farul tainic»\n" +
                  "• **Hiperbolă:** amplificarea grandorii peisajului\n\n" +
                  "**Câmpuri semantice:**\n\n" +
                  "| Câmp semantic | Cuvinte |\n" +
                  "|---------------|---------|\n" +
                  "| Iarna | ger, zăpadă, cristalină |\n" +
                  "| Noaptea | lună, far, umbre |\n" +
                  "| Templul | coloane, făclii, altare |",
              },
            ],
          },
        ],
        examples: [
          {
            title: "Fragment-cheie din «Mezul iernii»",
            description:
              "Strofele 2-3 conțin compararea naturii cu un templu: " +
              "«coloane», «făclii», «altare». Acest fragment este ideal " +
              "pentru exemplificarea trăsăturii figurilor de stil și a " +
              "planului cosmic în eseu.",
          },
        ],
        keyPoints: [
          {
            text: "Pastelul = specie a genului liric, descrierea unui peisaj natural",
            important: true,
          },
          {
            text: "Trăsătura 1: predominanța imaginilor vizuale și auditive",
            important: true,
          },
          {
            text: "Trăsătura 2: prezența figurilor de stil (epitete, metafore, personificări, hiperbolă)",
            important: true,
          },
          { text: "Tema: natura încremenită în iarna aspră" },
          { text: "Compoziție: 4 catrene, 2 secvențe (prima = tablou, ultima = antiteză cu lupul)" },
          {
            text: "Câmpuri semantice: iarna, noaptea, templul",
            important: true,
          },
          { text: "Ultima strofă — antiteză, dinamism prin imaginea lupului" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-pastelul-mq1-1",
              type: "multiple-choice",
              question: "Din ce ciclu face parte «Mezul iernii»?",
              options: [
                "Ciclul Baladelor",
                "Ciclul Pastelurilor",
                "Ciclul Elegiilor",
                "Ciclul Meditațiilor",
              ],
              correctIndex: 1,
              explanation:
                "«Mezul iernii» face parte din Ciclul Pastelurilor (1868-1869) " +
                "al lui Vasile Alecsandri.",
            },
            {
              id: "romana-sub1-pastelul-mq1-2",
              type: "true-false",
              question:
                "Ultima strofă continuă atmosfera de încremenire.",
              correct: false,
              explanation:
                "Ultima strofă introduce dinamism prin imaginea lupului care " +
                "cutreieră peisajul înghețat, în antiteză cu încremenirea " +
                "naturii din strofele anterioare.",
            },
            {
              id: "romana-sub1-pastelul-mq1-3",
              type: "fill-blank",
              question:
                "«Mezul iernii» este o operă reprezentativă a literaturii ___.",
              correctAnswers: ["pasoptiste", "pașoptiste"],
              explanation:
                "«Mezul iernii» este o operă reprezentativă a literaturii " +
                "pașoptiste, aparținând lui Vasile Alecsandri.",
            },
            {
              id: "romana-sub1-pastelul-mq1-4",
              type: "multiple-choice",
              question:
                "Câte catrene are poezia «Mezul iernii»?",
              options: ["2", "3", "4", "5"],
              correctIndex: 2,
              explanation:
                "Poezia «Mezul iernii» are 4 catrene (strofe de câte 4 " +
                "versuri), împărțite în 2 secvențe: prima secvență " +
                "(strofele 1-3) și a doua secvență (strofa 4 — ultima).",
            },
            {
              id: "romana-sub1-pastelul-mq1-5",
              type: "true-false",
              question:
                "Pastelul este o specie a genului epic.",
              correct: false,
              explanation:
                "Pastelul este o specie a genului liric, nu epic. Se " +
                "caracterizează prin descrierea vie și detaliată a unui " +
                "peisaj natural, a unui anotimp sau a unui moment din natură.",
            },
            {
              id: "romana-sub1-pastelul-mq1-6",
              type: "fill-blank",
              question:
                "«Luna își aprinde farul tainic» este un exemplu de ___.",
              correctAnswers: ["personificare"],
              explanation:
                "«Luna își aprinde farul tainic» este o personificare — " +
                "luna primește atribute umane (acțiunea de a aprinde). " +
                "Personificarea contribuie la expresivitatea pastelului.",
            },
            {
              id: "romana-sub1-pastelul-mq1-7",
              type: "multiple-choice",
              question:
                "Care este atitudinea poetului față de peisajul descris?",
              options: [
                "Tristețe și melancolie",
                "Frică și neliniște",
                "Admirație față de măreție și liniștea cosmică",
                "Indiferență totală",
              ],
              correctIndex: 2,
              explanation:
                "Atitudinea poetului este de admirație față de măreția și " +
                "liniștea cosmică a peisajului de iarnă. Pastelul surprinde " +
                "natura încremenită cu o privire contemplativă și solemnă.",
            },
            {
              id: "romana-sub1-pastelul-mq1-8",
              type: "true-false",
              question:
                "Metafora «lan de diamanturi» face parte din câmpul semantic al templului.",
              correct: false,
              explanation:
                "Metafora «lan de diamanturi» face parte din câmpul semantic " +
                "al iernii, nu al templului. Câmpul semantic al templului " +
                "include: coloane, făclii, altare. Cel al iernii include: " +
                "ger, zăpadă, cristalină, lan de diamanturi.",
            },
            {
              id: "romana-sub1-pastelul-mq1-9",
              type: "multiple-choice",
              question:
                "Ce introduce ultima strofă a poeziei «Mezul iernii»?",
              options: [
                "O reflecție filosofică a poetului",
                "Dinamism, prin imaginea lupului",
                "O descriere a soarelui de dimineață",
                "O comparație cu primăvara",
              ],
              correctIndex: 1,
              explanation:
                "Ultima strofă introduce dinamism prin imaginea lupului care " +
                "cutreieră peisajul înghețat, în antiteză cu încremenirea " +
                "naturii din strofele anterioare. Aceasta aduce o notă " +
                "subiectivă și vie.",
            },
            {
              id: "romana-sub1-pastelul-mq1-10",
              type: "multiple-choice",
              question:
                "Ce rol au epitetele «zăpada cristalină» și «ger amar, cumplit»?",
              options: [
                "Creează suspans dramatic",
                "Creează o atmosferă feerică",
                "Introduc un conflict interior",
                "Descriu un personaj uman",
              ],
              correctIndex: 1,
              explanation:
                "Epitetele «zăpada cristalină» și «ger amar, cumplit» " +
                "contribuie la crearea unei atmosfere feerice, în care " +
                "peisajul de iarnă capătă strălucirea pietrelor prețioase.",
            },
          ],
        },
      },

      // ─── Chapter 2: Model de eseu — Pastelul ───
      {
        id: "romana-sub1-pastelul-ch2",
        title: "Model de eseu — Pastelul",
        duration: "~15 min",
        sections: [
          {
            title: "Structura recomandată a eseului",
            content:
              "1. Definiția genului liric + definiția pastelului + date despre autor/operă\n" +
              "2. Trăsătura 1 cu exemplificare din text (imagini vizuale și auditive)\n" +
              "3. Trăsătura 2 cu exemplificare din text (figuri de stil)\n" +
              "4. Element de construcție 1 (recomandat: tema)\n" +
              "5. Element de construcție 2 (recomandat: compoziția — cele 2 secvențe)\n" +
              "6. Concluzie (opțional)",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Structura recomandată a eseului:**\n\n" +
                  "1. **Definiția genului liric** + **definiția pastelului** + câteva date despre autor și ciclul poetic\n" +
                  "2. **Trăsătura 1** cu exemplificare concretă din text (imagini vizuale și auditive)\n" +
                  "3. **Trăsătura 2** cu exemplificare concretă din text (figuri de stil)\n" +
                  "4. **Element de construcție 1** — recomandat: **tema** (cu referire la secvență)\n" +
                  "5. **Element de construcție 2** — recomandat: **compoziția** (cele 2 secvențe, antiteza din ultima strofă)\n" +
                  "6. **Concluzie** (opțional, dacă mai ai spațiu)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La pastel, elementele de compoziție sunt cele mai ușoare " +
                    "de exemplificat: cele două secvențe (prima = tabloul nopții, " +
                    "ultima strofă = dinamism prin imaginea lupului) și figurile " +
                    "de stil. Tema și compoziția sunt cele mai sigure alegeri.",
                },
              },
            ],
          },
          {
            title: "Model complet de eseu — Pastelul «Mezul iernii»",
            content:
              "Un model complet de eseu despre pastelul «Mezul iernii» " +
              "de V. Alecsandri, structurat conform cerințelor de la Subiectul 1B.",
            contentBlocks: [
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model de eseu — «Mezul iernii» de V. Alecsandri (Pastel)",
                  source: "claude",
                  content:
                    "Genul liric este genul literar care exprimă sentimentele, " +
                    "gândurile și stările sufletești ale eului liric, printr-o " +
                    "voce subiectivă și o exprimare artistică concentrată, în " +
                    "versuri. Pastelul este o specie a genului liric, caracterizată " +
                    "prin descrierea vie și detaliată a unui peisaj natural, a unui " +
                    "anotimp sau a unui moment din natură, cu scopul de a evoca o " +
                    "atmosferă. «Mezul iernii» de Vasile Alecsandri face parte din " +
                    "ciclul Pastelurilor (1868-1869), operă reprezentativă a " +
                    "literaturii pașoptiste.\n\n" +
                    "O primă trăsătură a pastelului este predominanța imaginilor " +
                    "vizuale și auditive care creează un tablou al naturii. În " +
                    "«Mezul iernii», prima secvență prezintă tabloul nopții de " +
                    "iarnă, cu păduri și câmpii încremenite sub gerul «amar, " +
                    "cumplit». Imaginile vizuale și auditive alternează: «trăsnesc " +
                    "stejarii!», «scârțâie», iar epitetele și metaforele creează " +
                    "o atmosferă feerică: «zăpada cristalină», «lan de diamanturi».\n\n" +
                    "A doua trăsătură specifică este prezența figurilor de stil care " +
                    "contribuie la expresivitate. Strofele a doua și a treia extind " +
                    "imaginea în plan cosmic, descriind natura ca un templu măreț, " +
                    "cu «coloane», «făclii» și «altare». Personificările («luna își " +
                    "aprinde farul tainic») și hiperbolele sporesc impresia de " +
                    "sublim.\n\n" +
                    "Tema poeziei surprinde natura încremenită în iarna aspră, " +
                    "zugrăvind un tablou «fantastic» al nopții friguroase. Atitudinea " +
                    "poetului este de admirație față de măreția și liniștea cosmică. " +
                    "Titlul reflectă esența poemului: anotimpul rece, când zăpada " +
                    "strălucește pe întinderi albe.\n\n" +
                    "Compozițional, poezia are patru catrene împărțite în două " +
                    "secvențe. Prima secvență zugrăvește tabloul nopții de iarnă, " +
                    "cu păduri și câmpii sub ger, extinzând imaginea în plan cosmic. " +
                    "Ultima strofă, în antiteză cu cele anterioare, introduce dinamism " +
                    "prin imaginea lupului care cutreieră peisajul înghețat. Aceasta " +
                    "aduce o notă subiectivă și vie în contrast cu încremenirea naturii.\n\n" +
                    "În concluzie, «Mezul iernii» este un pastel clasic prin " +
                    "echilibrul compozițional și claritatea imaginii, oferind un " +
                    "tablou grandios și solemn al nopții de iarnă.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "La nivel lexical, reține câmpurile semantice: iarna (ger, " +
                    "zăpadă, cristalină), noaptea (lună, far, umbre) și templul " +
                    "(coloane, făclii, altare). Figuri de stil: epitete, metafore, " +
                    "personificări, comparații. Menționează cel puțin un exemplu " +
                    "concret din fiecare categorie.",
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
            text: "Structura: definiție gen liric + definiție pastel → trăsături + exemplificare → temă + compoziție → concluzie",
            important: true,
          },
          { text: "Tema și compoziția sunt cele mai sigure elemente de construcție pentru pastel" },
          {
            text: "Exemplifică concret din text (epitete, metafore, personificări)",
            important: true,
          },
          { text: "Menționează câmpurile semantice: iarna, noaptea, templul" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-pastelul-mq2-1",
              type: "multiple-choice",
              question:
                "Cu ce ar trebui să înceapă eseul despre pastel?",
              options: [
                "Cu biografia lui V. Alecsandri",
                "Cu definiția genului liric și a pastelului",
                "Cu momentele subiectului",
                "Cu figurile de stil",
              ],
              correctIndex: 1,
              explanation:
                "Eseul trebuie să înceapă cu definiția genului liric " +
                "și a pastelului, urmată de date despre autor și operă.",
            },
            {
              id: "romana-sub1-pastelul-mq2-2",
              type: "true-false",
              question:
                "La pastel, cele mai sigure elemente de construcție sunt conflictul și personajele.",
              correct: false,
              explanation:
                "La pastel (gen liric), cele mai sigure elemente de construcție " +
                "sunt tema și compoziția (cele 2 secvențe, antiteza). " +
                "Conflictul și personajele sunt specifice genului epic.",
            },
            {
              id: "romana-sub1-pastelul-mq2-3",
              type: "fill-blank",
              question:
                "Cele două secvențe ale pastelului sunt: tabloul nopții de iarnă (strofele 1-3) și ___ din ultima strofă.",
              correctAnswers: ["antiteza", "antiteza cu lupul", "dinamismul"],
              explanation:
                "Prima secvență zugrăvește tabloul nopții (strofele 1-3), " +
                "iar ultima strofă introduce antiteza — dinamismul prin " +
                "imaginea lupului.",
            },
            {
              id: "romana-sub1-pastelul-mq2-4",
              type: "true-false",
              question:
                "La pastel, conflictul și personajele sunt cele mai sigure elemente de construcție.",
              correct: false,
              explanation:
                "Conflictul și personajele sunt specifice genului epic. " +
                "La pastel (gen liric), cele mai sigure elemente de " +
                "construcție sunt tema și compoziția (cele 2 secvențe, " +
                "antiteza din ultima strofă).",
            },
            {
              id: "romana-sub1-pastelul-mq2-5",
              type: "multiple-choice",
              question:
                "Care sunt cele două trăsături ale pastelului recomandate pentru eseu?",
              options: [
                "Antiteza și inspirația din folclor",
                "Predominanța imaginilor vizuale/auditive și prezența figurilor de stil",
                "Estetica urâtului și versul liber",
                "Comicul de limbaj și finalul fericit",
              ],
              correctIndex: 1,
              explanation:
                "Cele două trăsături recomandate pentru eseul despre pastel " +
                "sunt: (1) predominanța imaginilor vizuale și auditive și " +
                "(2) prezența figurilor de stil (epitete, metafore, " +
                "personificări, hiperbolă).",
            },
            {
              id: "romana-sub1-pastelul-mq2-6",
              type: "fill-blank",
              question:
                "Strofele 2-3 descriu natura ca un ___ măreț.",
              correctAnswers: ["templu"],
              explanation:
                "Strofele 2-3 extind imaginea în plan cosmic, descriind " +
                "natura ca un templu măreț, cu «coloane», «făclii» și " +
                "«altare». Această imagine este esențială în eseu.",
            },
            {
              id: "romana-sub1-pastelul-mq2-7",
              type: "multiple-choice",
              question:
                "Care este ordinea corectă a paragrafelor în eseul despre pastel?",
              options: [
                "Temă → definiție → trăsături → concluzie",
                "Definiție gen liric + pastel → trăsături → temă + compoziție → concluzie",
                "Figuri de stil → autor → compoziție → temă",
                "Concluzie → trăsături → definiție → temă",
              ],
              correctIndex: 1,
              explanation:
                "Structura recomandată este: (1) definiția genului liric și " +
                "a pastelului, (2) trăsătura 1 cu exemplificare, (3) " +
                "trăsătura 2 cu exemplificare, (4) tema, (5) compoziția, " +
                "(6) concluzie opțională.",
            },
            {
              id: "romana-sub1-pastelul-mq2-8",
              type: "true-false",
              question:
                "Vasile Alecsandri este considerat poetul național al României dinainte de Eminescu.",
              correct: true,
              explanation:
                "Vasile Alecsandri este considerat poetul național al " +
                "României dinainte de Eminescu, fiind figura centrală a " +
                "generației pașoptiste. Acest detaliu poate fi menționat " +
                "în introducerea eseului.",
            },
            {
              id: "romana-sub1-pastelul-mq2-9",
              type: "true-false",
              question:
                "Eseul despre pastel trebuie să conțină exclusiv analiza figurilor de stil.",
              correct: false,
              explanation:
                "Eseul nu trebuie să conțină exclusiv analiza figurilor de " +
                "stil. Structura completă include: definiția genului liric " +
                "și a pastelului, cele două trăsături cu exemplificare, " +
                "tema, compoziția și, opțional, o concluzie.",
            },
            {
              id: "romana-sub1-pastelul-mq2-10",
              type: "multiple-choice",
              question:
                "Care câmpuri semantice sunt cele mai relevante pentru «Mezul iernii»?",
              options: [
                "Marea, soarele, vara",
                "Iarna, noaptea, templul",
                "Primăvara, zorii, câmpia",
                "Pădurea, ploaia, vântul",
              ],
              correctIndex: 1,
              explanation:
                "Cele trei câmpuri semantice relevante sunt: iarna (ger, " +
                "zăpadă, cristalină), noaptea (lună, far, umbre) și templul " +
                "(coloane, făclii, altare). Menționarea lor în eseu " +
                "demonstrează o analiză atentă a textului.",
            },
          ],
        },
      },
    ],
  },
];
