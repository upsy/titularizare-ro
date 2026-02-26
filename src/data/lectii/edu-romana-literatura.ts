import { Lesson } from "@/types/lectii";

export const eduRomanaLiteraturaLessons: Lesson[] = [
  {
    topicId: "romana-sub1-basm",
    title: "Basmul cult: Povestea lui Harap Alb — Ion Creangă",
    duration: "60 min",
    objectives: [
      "Să cunoască structura Subiectului 1 (eseu 300-400 cuvinte, 25p) și cerințele posibile",
      "Să identifice toate operele literare din programa de titularizare (proză, poezie, dramaturgie)",
      "Să definească basmul cult ca specie a genului epic și să enumere trăsăturile sale",
      "Să exemplifice două trăsături ale basmului cult din «Povestea lui Harap Alb»",
      "Să ilustreze tema și acțiunea ca elemente de construcție a discursului narativ",
      "Să aplice structura recomandată pentru scrierea eseului la Subiectul 1",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "romana-sub1-basm",
      questions: [
        {
          id: "romana-sub1-basm-fq1",
          type: "multiple-choice",
          question:
            "Câte puncte are Subiectul 1B la examenul de titularizare?",
          options: [
            "15 puncte",
            "20 puncte",
            "25 puncte",
            "30 puncte",
          ],
          correctIndex: 2,
          explanation:
            "Subiectul 1B are 25 de puncte: 10p conținut + 5p redactare + " +
            "10p pentru ilustrarea elementelor de construcție.",
        },
        {
          id: "romana-sub1-basm-fq2",
          type: "true-false",
          question:
            "La număratul cuvintelor din eseu, cuvintele de legătură (și, ca, în) nu sunt incluse.",
          correct: false,
          explanation:
            "Toate cuvintele contează la număratul cuvintelor, inclusiv " +
            "cele de legătură (și, ca, în, la etc.).",
        },
        {
          id: "romana-sub1-basm-fq3",
          type: "multiple-choice",
          question:
            "Cine este autorul basmului cult «Povestea lui Harap Alb»?",
          options: [
            "Mihail Sadoveanu",
            "Ion Creangă",
            "Ion Luca Caragiale",
            "Ioan Slavici",
          ],
          correctIndex: 1,
          explanation:
            "«Povestea lui Harap Alb» a fost scrisă de Ion Creangă și publicată " +
            "la 1 august 1877, în revista Convorbiri Literare.",
        },
        {
          id: "romana-sub1-basm-fq4",
          type: "fill-blank",
          question:
            "Formula inițială a basmului «Povestea lui Harap Alb» este «Amu cică era ___».",
          correctAnswers: ["odată", "odata"],
          explanation:
            "Formula inițială «Amu cică era odată» are rolul de a introduce " +
            "cititorul în lumea fabulosului.",
        },
        {
          id: "romana-sub1-basm-fq5",
          type: "multiple-choice",
          question:
            "Care este tema basmului «Povestea lui Harap Alb»?",
          options: [
            "Dragostea neîmplinită",
            "Lupta dintre bine și rău + formarea adolescentului",
            "Conflictul dintre generații",
            "Critica societății",
          ],
          correctIndex: 1,
          explanation:
            "Tema basmului este lupta dintre bine și rău, iar Creangă " +
            "evidențiază formarea unui adolescent — drumul inițiatic " +
            "parcurs de Harap Alb spre maturizare.",
        },
        {
          id: "romana-sub1-basm-fq6",
          type: "true-false",
          question:
            "Fata Împăratului Roșu face parte din forțele binelui.",
          correct: false,
          explanation:
            "Fata Împăratului Roșu are un rol neutru — ea se " +
            "metamorfozează și nu este încadrată clar în forțele " +
            "binelui sau ale răului.",
        },
        {
          id: "romana-sub1-basm-fq7",
          type: "multiple-choice",
          question:
            "Care sunt cele două elemente de construcție recomandate pentru eseul despre basm?",
          options: [
            "Titlul și personajele",
            "Tema și acțiunea",
            "Conflictul și momentele subiectului",
            "Reperele spațio-temporale și personajele",
          ],
          correctIndex: 1,
          explanation:
            "Tema și acțiunea sunt cele mai sigure și mai accesibile " +
            "elemente de construcție — sunt ușor de exemplificat și " +
            "oferă suficient material pentru eseu.",
        },
        {
          id: "romana-sub1-basm-fq8",
          type: "fill-blank",
          question:
            "Basmul cult este o specie a genului ___, în proză.",
          correctAnswers: ["epic"],
          explanation:
            "Basmul cult este o specie a genului epic, în proză, de " +
            "dimensiune medie, cu acțiune desfășurată pe un singur plan narativ.",
        },
        {
          id: "romana-sub1-basm-fq9",
          type: "multiple-choice",
          question:
            "Care este a doua trăsătură a basmului cult prezentată în lecție?",
          options: [
            "Prezența formulelor specifice (inițială, mediană, finală)",
            "Prezența cifrei magice 3",
            "Existența unui singur plan narativ",
            "Folosirea registrului popular al limbii",
          ],
          correctIndex: 1,
          explanation:
            "A doua trăsătură a basmului cult prezentată în lecție este " +
            "prezența cifrei magice 3: trei fii, trei probe, Harap Alb se " +
            "întâlnește de 3 ori cu Spânul, iar calul însumi cere de 3 ori " +
            "ajutor.",
        },
        {
          id: "romana-sub1-basm-fq10",
          type: "true-false",
          question:
            "Spânul face parte din forțele binelui în «Povestea lui Harap Alb».",
          correct: false,
          explanation:
            "Spânul face parte din forțele răului. El îl păcălește pe " +
            "Harap Alb și îi ia locul, devenind antagonistul principal al basmului. " +
            "Forțele răului includ Spânul și Împăratul Roșu.",
        },
      ],
    },

    chapters: [
      // ─── Chapter 1: Structura examenului — Subiectul 1 ───
      {
        id: "romana-sub1-basm-ch1",
        title: "Structura examenului — Subiectul 1",
        duration: "~10 min",
        sections: [
          {
            title: "Cerința-model la Subiectul 1B",
            content:
              "La examen, Subiectul 1B cere redactarea unui **eseu de 300-400 de cuvinte** " +
              "despre o operă literară din programă.\n\n" +
              "**Cerința-model:** «Redactați un eseu de 300-400 de cuvinte în care să " +
              "prezentați particularitățile unei [specii literare] incluse în programa de concurs.»",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "La examen, Subiectul 1B cere redactarea unui **eseu de 300-400 de cuvinte** " +
                  "despre o operă literară din programă.\n\n" +
                  "**Cerința-model:**\n" +
                  "> «Redactați un eseu de 300-400 de cuvinte în care să prezentați " +
                  "particularitățile unei [specii literare] incluse în programa de concurs.»\n\n" +
                  "Specia literară din cerință poate fi: **basm cult, nuvelă, schiță, povestire, " +
                  "roman, fabulă, pastel sau comedie**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Cerința se schimbă doar prin înlocuirea speciei literare " +
                    "(în loc de «nuvelă» poate fi «basm cult», «schiță» etc.). " +
                    "Când ai deja cerința și înveți pe cerință, examenul devine mult mai ușor.",
                },
              },
            ],
          },
          {
            title: "Punctajul — 25 de puncte",
            content:
              "**Conținut — 10 puncte:**\n" +
              "• Indicarea a două trăsături ale speciei literare\n" +
              "• Exemplificarea celor două trăsături din operă\n" +
              "• Ilustrarea a două elemente de construcție a discursului narativ\n\n" +
              "**Redactare — 5 puncte:**\n" +
              "• 1p organizarea ideilor\n" +
              "• 1p utilizarea limbii literare\n" +
              "• 1p abilități de analiză și argumentare\n" +
              "• 1p ortografie, punctuație, așezare în pagină\n" +
              "• 1p încadrarea în limita de spațiu (300-400 cuvinte)\n\n" +
              "**Analiză — 10 puncte:**\n" +
              "• Ilustrarea elementelor prin referire la secvențe semnificative din text",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Conținut — 10 puncte:**\n" +
                  "• Indicarea a **două** trăsături ale speciei literare\n" +
                  "• Exemplificarea celor două trăsături din operă\n" +
                  "• Ilustrarea a **două** elemente de construcție a discursului narativ\n\n" +
                  "**Redactare — 5 puncte:**\n" +
                  "• 1p organizarea ideilor\n" +
                  "• 1p utilizarea limbii literare\n" +
                  "• 1p abilități de analiză și argumentare\n" +
                  "• 1p ortografie, punctuație, așezare în pagină\n" +
                  "• 1p încadrarea în limita de spațiu (300-400 cuvinte)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Dacă cerința spune «două», scrii exact **două** trăsături — nu trei, nu patru. " +
                    "Nu ești punctat pentru informație suplimentară, iar corectorul pierde timp " +
                    "citind material în plus.",
                },
              },
            ],
          },
          {
            title: "Sfaturi practice pentru eseu",
            content:
              "• 300 de cuvinte ≈ 30 de rânduri de caiet studențesc (~10 cuvinte/rând)\n" +
              "• O foaie de caiet studențesc are 32 de rânduri\n" +
              "• Toate cuvintele contează (inclusiv «și», «ca», «în»)\n" +
              "• Ordinea integrării reperelor în eseu este la alegere\n" +
              "• Elementele de construcție sunt: acțiune, temă, conflict, " +
              "momentele subiectului, repere spațio-temporale, personaje",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Sfaturi practice:**\n" +
                  "• 300 de cuvinte ≈ **30 de rânduri** de caiet studențesc (~10 cuvinte/rând)\n" +
                  "• O foaie de caiet studențesc are 32 de rânduri\n" +
                  "• **Toate cuvintele contează** (inclusiv «și», «ca», «în»)\n" +
                  "• Ordinea integrării reperelor în eseu este **la alegere**",
              },
              {
                kind: "text",
                text:
                  "**Elementele de construcție a discursului narativ:**\n" +
                  "1. Acțiune\n" +
                  "2. Temă\n" +
                  "3. Conflict\n" +
                  "4. Momentele subiectului\n" +
                  "5. Repere spațio-temporale\n" +
                  "6. Personaje",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "experience",
                  content:
                    "La examen, poți face o scurtă simulare: numeri câte cuvinte ai pe un rând " +
                    "și înmulțești cu numărul de rânduri. Dacă ai ~10 cuvinte/rând, la 30 de " +
                    "rânduri ai 300 de cuvinte.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Posibil să apară în cerință și o liniuță suplimentară: " +
                    "**caracterizarea unui personaj** sau **relația dintre două personaje**. " +
                    "Trebuie să fii pregătit/ă și pentru acest caz.",
                },
              },
            ],
          },
        ],
        examples: [],
        keyPoints: [
          { text: "Subiectul 1B cere un eseu de 300-400 de cuvinte, în valoare de 25 de puncte", important: true },
          { text: "Cerința poate viza orice specie literară din programă (basm, nuvelă, schiță, roman etc.)" },
          { text: "Dacă cerința cere «două», scrii exact două — nu mai mult", important: true },
          { text: "Toate cuvintele contează la număratul cuvintelor (inclusiv cele de legătură)" },
          { text: "Elementele de construcție: acțiune, temă, conflict, momentele subiectului, repere spațio-temporale, personaje" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-basm-mq1-1",
              type: "multiple-choice",
              question: "Câte cuvinte trebuie să aibă eseul de la Subiectul 1B?",
              options: [
                "200-300 de cuvinte",
                "300-400 de cuvinte",
                "400-500 de cuvinte",
                "500-600 de cuvinte",
              ],
              correctIndex: 1,
              explanation:
                "Cerința de la Subiectul 1B specifică un eseu de 300-400 de cuvinte.",
            },
            {
              id: "romana-sub1-basm-mq1-2",
              type: "true-false",
              question: "La număratul cuvintelor, cuvintele de legătură nu sunt incluse.",
              correct: false,
              explanation:
                "Toate cuvintele contează: «și», «ca», «în», «la» etc. sunt incluse.",
            },
            {
              id: "romana-sub1-basm-mq1-3",
              type: "fill-blank",
              question: "Subiectul 1B are un punctaj total de ___ puncte.",
              correctAnswers: ["25"],
              explanation:
                "Subiectul 1B are 25 de puncte: 10p conținut + 5p redactare + 10p analiză.",
            },
            {
              id: "romana-sub1-basm-mq1-4",
              type: "multiple-choice",
              question: "Care sunt cele trei componente ale punctajului la Subiectul 1B?",
              options: [
                "5p conținut + 10p redactare + 10p analiză",
                "10p conținut + 5p redactare + 10p analiză",
                "15p conținut + 5p redactare + 5p analiză",
                "10p conținut + 10p redactare + 5p analiză",
              ],
              correctIndex: 1,
              explanation:
                "Punctajul Subiectului 1B este: 10 puncte pentru conținut, 5 puncte pentru " +
                "redactare și 10 puncte pentru ilustrarea elementelor de construcție a discursului narativ.",
            },
            {
              id: "romana-sub1-basm-mq1-5",
              type: "true-false",
              question:
                "Cerința de la Subiectul 1B poate solicita ilustrarea a două elemente de construcție a discursului narativ.",
              correct: true,
              explanation:
                "Da, cerința poate cere ilustrarea a două elemente de construcție precum: acțiune, " +
                "temă, conflict, momentele subiectului, repere spațio-temporale sau personaje.",
            },
            {
              id: "romana-sub1-basm-mq1-6",
              type: "multiple-choice",
              question:
                "Ce cerință poate apărea la Subiectul 1B, pe lângă prezentarea trăsăturilor speciei?",
              options: [
                "Traducerea textului în engleză",
                "Caracterizarea unui personaj sau relația dintre două personaje",
                "Scrierea unei poezii pe aceeași temă",
                "Analiza fonetică a textului",
              ],
              correctIndex: 1,
              explanation:
                "Cerința poate cere și caracterizarea unui personaj sau prezentarea relației " +
                "dintre două personaje, pe lângă trăsăturile speciei și elementele de construcție.",
            },
            {
              id: "romana-sub1-basm-mq1-7",
              type: "true-false",
              question:
                "Dacă cerința cere «două trăsături», poți scrie trei pentru a obține un punctaj mai mare.",
              correct: false,
              explanation:
                "Dacă cerința cere exact «două», scrii exact două — nu mai mult. Scrisul " +
                "în plus nu aduce puncte suplimentare și poate fi penalizat ca nerespectare a cerinței.",
            },
            {
              id: "romana-sub1-basm-mq1-8",
              type: "fill-blank",
              question:
                "La Subiectul 1B, cerința poate solicita ilustrarea a două elemente de construcție a discursului ___.",
              correctAnswers: ["narativ", "Narativ"],
              explanation:
                "Elementele de construcție a discursului narativ includ: acțiunea, tema, " +
                "conflictul, momentele subiectului, reperele spațio-temporale și personajele.",
            },
            {
              id: "romana-sub1-basm-mq1-9",
              type: "multiple-choice",
              question: "Care dintre următoarele NU este un element de construcție a discursului narativ?",
              options: [
                "Acțiunea",
                "Tema",
                "Rima",
                "Personajele",
              ],
              correctIndex: 2,
              explanation:
                "Rima este un element specific poeziei, nu al discursului narativ. " +
                "Elementele de construcție a discursului narativ sunt: acțiunea, tema, " +
                "conflictul, momentele subiectului, reperele spațio-temporale și personajele.",
            },
            {
              id: "romana-sub1-basm-mq1-10",
              type: "multiple-choice",
              question: "Ce specii literare pot fi solicitate la Subiectul 1B?",
              options: [
                "Doar basmul cult și nuvela",
                "Orice specie literară din programa de concurs (basm, nuvelă, schiță, roman etc.)",
                "Doar speciile de proză",
                "Doar poezia lirică",
              ],
              correctIndex: 1,
              explanation:
                "Cerința poate viza orice specie literară din programă: basm cult, schiță, " +
                "povestire, nuvelă, roman, fabulă, poezie lirică, comedie.",
            },
          ],
        },
      },

      // ─── Chapter 2: Operele literare din programă ───
      {
        id: "romana-sub1-basm-ch2",
        title: "Operele literare din programă",
        duration: "~10 min",
        sections: [
          {
            title: "A. Proză",
            content:
              "Operele din genul epic (proză) incluse în programa de titularizare:\n\n" +
              "• **Basm cult:** «Povestea lui Harap Alb» — Ion Creangă\n" +
              "• **Schiță:** «Domnul Goe» sau «Vizită» — I.L. Caragiale\n" +
              "• **Povestire:** «Hanu Ancuței» — Mihail Sadoveanu\n" +
              "• **Nuvelă:** «Moara cu noroc» — Ioan Slavici\n" +
              "• **Roman:** «Ultima noapte de dragoste, întâia noapte de război» — Camil Petrescu",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Proză — operele din programă:**\n\n" +
                  "| Specie | Operă | Autor |\n" +
                  "|--------|-------|-------|\n" +
                  "| Basm cult | Povestea lui Harap Alb | **Ion Creangă** |\n" +
                  "| Schiță | Domnul Goe / Vizită | **I.L. Caragiale** |\n" +
                  "| Povestire | Hanu Ancuței (una din 9) | **Mihail Sadoveanu** |\n" +
                  "| Nuvelă | Moara cu noroc | **Ioan Slavici** |\n" +
                  "| Roman | Ultima noapte de dragoste, întâia noapte de război | **Camil Petrescu** |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Scrieți-vă și autorul lângă fiecare operă! La examen, din cauza " +
                    "stresului, se poate uita autorul — pierdere de timp prețios.",
                },
              },
            ],
          },
          {
            title: "B. Poezie",
            content:
              "**Poezie epică (fabulă):**\n" +
              "• Grigore Alexandrescu — «Câinele și cățelul»\n\n" +
              "**Poezie lirică:**\n" +
              "• Mihai Eminescu — «Luceafărul» (Romantism)\n" +
              "• Vasile Alecsandri — «Mezul iernii» (Pașoptism, pastel)\n" +
              "• Tudor Arghezi — «Testament» (Modernism)\n" +
              "• Nichita Stănescu — «Leoaică tânără, iubirea» (Neomodernism)",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Poezie epică (fabulă):**\n" +
                  "• **Grigore Alexandrescu** — «Câinele și cățelul»\n\n" +
                  "**Poezie lirică:**\n\n" +
                  "| Curent literar | Poet | Operă |\n" +
                  "|----------------|------|-------|\n" +
                  "| Romantism | **Mihai Eminescu** | Luceafărul |\n" +
                  "| Pașoptism | **Vasile Alecsandri** | Mezul iernii (pastel) |\n" +
                  "| Modernism | **Tudor Arghezi** | Testament |\n" +
                  "| Neomodernism | **Nichita Stănescu** | Leoaică tânără, iubirea |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Autorii sunt puși în programă ca reprezentanți ai curentelor literare. " +
                    "Cerința poate menționa curentul literar (romantism, neomodernism etc.) " +
                    "sau specia (pastel) — trebuie să faci legătura cu autorul potrivit.",
                },
              },
            ],
          },
          {
            title: "C. Dramaturgie",
            content:
              "• **Comedie:** «O scrisoare pierdută» — I.L. Caragiale",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Dramaturgie:**\n" +
                  "• **Comedie:** «O scrisoare pierdută» — **I.L. Caragiale**\n\n" +
                  "Aceasta este singura operă dramatică din programă.",
              },
            ],
          },
        ],
        examples: [],
        keyPoints: [
          { text: "5 opere de proză: basm cult, schiță, povestire, nuvelă, roman", important: true },
          { text: "5 poeți cu câte o operă reprezentativă + legătura cu curentul literar" },
          { text: "O comedie: «O scrisoare pierdută» de I.L. Caragiale" },
          { text: "Memorează autorul lângă fiecare operă — la examen se poate uita din cauza stresului", important: true },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-basm-mq2-1",
              type: "multiple-choice",
              question: "Cine este autorul nuvelei «Moara cu noroc»?",
              options: [
                "Ion Creangă",
                "Mihail Sadoveanu",
                "Ioan Slavici",
                "Camil Petrescu",
              ],
              correctIndex: 2,
              explanation:
                "«Moara cu noroc» este o nuvelă scrisă de Ioan Slavici.",
            },
            {
              id: "romana-sub1-basm-mq2-2",
              type: "fill-blank",
              question:
                "Vasile Alecsandri este reprezentantul curentului literar ___.",
              correctAnswers: ["pasoptism", "pașoptism", "pașoptismul", "pasoptismul"],
              explanation:
                "Vasile Alecsandri este poetul reprezentativ al curentului literar pașoptism, " +
                "cunoscut pentru pastelurile sale (ex: «Mezul iernii»).",
            },
            {
              id: "romana-sub1-basm-mq2-3",
              type: "true-false",
              question: "«Hanu Ancuței» de Mihail Sadoveanu este o nuvelă.",
              correct: false,
              explanation:
                "«Hanu Ancuței» este o povestire (povestire în ramă, cu 9 povestiri). " +
                "Nuvela din programă este «Moara cu noroc» de Ioan Slavici.",
            },
            {
              id: "romana-sub1-basm-mq2-4",
              type: "multiple-choice",
              question: "Cine a scris «Ultima noapte de dragoste, întâia noapte de război»?",
              options: [
                "Mihail Sadoveanu",
                "Ion Creangă",
                "Camil Petrescu",
                "I.L. Caragiale",
              ],
              correctIndex: 2,
              explanation:
                "«Ultima noapte de dragoste, întâia noapte de război» este un roman scris " +
                "de Camil Petrescu, singura operă de gen roman din programa de titularizare.",
            },
            {
              id: "romana-sub1-basm-mq2-5",
              type: "fill-blank",
              question:
                "Nichita Stănescu, autorul poeziei «Leoaică tânără, iubirea», este reprezentantul curentului literar ___.",
              correctAnswers: ["neomodernism", "neomodernismul", "Neomodernism", "Neomodernismul"],
              explanation:
                "Nichita Stănescu este poetul reprezentativ al neomodernismului din programa " +
                "de titularizare, cu poezia «Leoaică tânără, iubirea».",
            },
            {
              id: "romana-sub1-basm-mq2-6",
              type: "true-false",
              question:
                "«O scrisoare pierdută» de I.L. Caragiale este singura operă dramatică din programa de titularizare.",
              correct: true,
              explanation:
                "Da, «O scrisoare pierdută» — comedie de I.L. Caragiale — este singura " +
                "operă din genul dramatic inclusă în programa de concurs.",
            },
            {
              id: "romana-sub1-basm-mq2-7",
              type: "multiple-choice",
              question: "Ce specie literară reprezintă «Câinele și cățelul» de Grigore Alexandrescu?",
              options: [
                "Poezie lirică",
                "Baladă",
                "Fabulă (poezie epică)",
                "Pastel",
              ],
              correctIndex: 2,
              explanation:
                "«Câinele și cățelul» de Grigore Alexandrescu este o fabulă, adică " +
                "o poezie epică — singura specie de poezie epică din programă.",
            },
            {
              id: "romana-sub1-basm-mq2-8",
              type: "multiple-choice",
              question: "Ce curent literar reprezintă Tudor Arghezi cu poezia «Testament»?",
              options: [
                "Romantismul",
                "Pașoptismul",
                "Modernismul",
                "Neomodernismul",
              ],
              correctIndex: 2,
              explanation:
                "Tudor Arghezi este reprezentantul modernismului în programa de titularizare, " +
                "cu opera «Testament».",
            },
            {
              id: "romana-sub1-basm-mq2-9",
              type: "true-false",
              question: "I.L. Caragiale apare în programă atât cu proză (schiță), cât și cu dramaturgie (comedie).",
              correct: true,
              explanation:
                "I.L. Caragiale este prezent în programă cu două specii diferite: schița " +
                "(«Domnul Goe» sau «Vizită» — proză) și comedia («O scrisoare pierdută» — dramaturgie).",
            },
            {
              id: "romana-sub1-basm-mq2-10",
              type: "fill-blank",
              question:
                "Mihai Eminescu, autorul «Luceafărului», este reprezentantul curentului literar ___.",
              correctAnswers: ["romantism", "romantismul", "Romantism", "Romantismul"],
              explanation:
                "Mihai Eminescu este poetul reprezentativ al romantismului în programa de " +
                "titularizare, cu capodopera sa «Luceafărul».",
            },
          ],
        },
      },

      // ─── Chapter 3: Basmul cult — «Povestea lui Harap Alb» ───
      {
        id: "romana-sub1-basm-ch3",
        title: "Basmul cult — «Povestea lui Harap Alb»",
        duration: "~25 min",
        sections: [
          {
            title: "Definiția basmului cult",
            content:
              "Basmul cult este o specie a genului epic, în proză, de dimensiune medie, cu " +
              "o acțiune desfășurată pe un singur plan narativ, cu un număr mare de personaje, " +
              "reprezentând valori morale, în care este prezentă lupta dintre bine și rău.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Basmul cult** este o specie a genului epic, în proză, de dimensiune medie, cu " +
                  "o acțiune desfășurată pe **un singur plan narativ**, cu un **număr mare de personaje**, " +
                  "reprezentând **valori morale**, în care este prezentă **lupta dintre bine și rău**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen, începi ÎNTOTDEAUNA cu definiția speciei literare. " +
                    "Este primul lucru pe care corectorul vrea să-l vadă — că știi ce " +
                    "este specia despre care scrii.",
                },
              },
            ],
          },
          {
            title: "Date despre operă și autor",
            content:
              "«Povestea lui Harap Alb» este cel mai reprezentativ basm al lui Ion Creangă, " +
              "fiind publicat în revista Convorbiri Literare, la 1 august 1877.\n\n" +
              "Ion Creangă este unul dintre cei mai importanți scriitori ai literaturii române, " +
              "cunoscut atât prin «Amintiri din copilărie», cât și prin poveștile și povestirile sale.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**«Povestea lui Harap Alb»** este cel mai reprezentativ basm al lui " +
                  "**Ion Creangă**, fiind publicat în revista **Convorbiri Literare**, " +
                  "la **1 august 1877**.\n\n" +
                  "Ion Creangă este unul dintre cei mai importanți scriitori ai literaturii " +
                  "române, cunoscut prin «Amintiri din copilărie» și prin poveștile sale.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Poți face un mic intro în eseu: «Ion Creangă, reprezentant de seamă " +
                    "al literaturii române, este cunoscut atât prin Amintiri din copilărie, " +
                    "cât și prin poveștile sale. Povestea lui Harap Alb, publicată în " +
                    "Convorbiri Literare la 1 august 1877, este cel mai reprezentativ basm " +
                    "al său.» Dacă știi, treci — nu e greșit!",
                },
              },
            ],
          },
          {
            title: "Trăsătura 1: Prezența formulelor specifice",
            content:
              "O primă trăsătură a basmului cult este prezența formulelor specifice.\n\n" +
              "• Formula inițială: «Amu cică era odată» — are rolul de a introduce " +
              "cititorul în lumea fabulosului\n" +
              "• Formula mediană: «Și merseră și merseră și merseră» — menține trează " +
              "atenția cititorului\n" +
              "• Formula finală: «Cine are bani, bea și mănâncă; cine nu, se uită și rabdă» — " +
              "are rolul de a scoate cititorul din lumea ficțională",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "O primă trăsătură a basmului cult este **prezența formulelor specifice**.\n\n" +
                  "**Formula inițială:** «Amu cică era odată»\n" +
                  "→ Are rolul de a introduce cititorul în **lumea fabulosului** (lumea basmului)\n\n" +
                  "**Formula mediană:** «Și merseră și merseră și merseră»\n" +
                  "→ **Menține trează atenția** cititorului\n\n" +
                  "**Formula finală:** «Cine are bani, bea și mănâncă; cine nu, se uită și rabdă»\n" +
                  "→ Are rolul de a **scoate cititorul din lumea ficțională**",
              },
            ],
          },
          {
            title: "Trăsătura 2: Prezența cifrei magice 3",
            content:
              "A doua trăsătură a basmului cult o reprezintă prezența cifrei magice 3.\n\n" +
              "Cifra 3 apare în «Povestea lui Harap Alb» astfel:\n" +
              "• 3 frați la curtea Craiului\n" +
              "• 3 surori la curtea lui Verde Împărat\n" +
              "• 3 probe la curtea lui Roșu Împărat\n" +
              "• Se întâlnește de 3 ori cu Spânul\n" +
              "• Calul vine să mănânce jăratic de 3 ori\n" +
              "• Harap Alb se înalță la cer de 3 ori\n" +
              "• Tatăl se îmbracă în urs de 3 ori",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "A doua trăsătură a basmului cult o reprezintă **prezența cifrei magice 3**.\n\n" +
                  "Cifra 3 apare în «Povestea lui Harap Alb»:\n" +
                  "• **3 frați** la curtea Craiului\n" +
                  "• **3 surori** la curtea lui Verde Împărat\n" +
                  "• **3 probe** la curtea lui Roșu Împărat (salata din grădina ursului, " +
                  "capul de cerb cu stele de diamant, aducerea fetei)\n" +
                  "• Se întâlnește **de 3 ori** cu Spânul\n" +
                  "• Calul vine să mănânce jăratic **de 3 ori**\n" +
                  "• Harap Alb se înalță la cer **de 3 ori**\n" +
                  "• Tatăl se îmbracă în urs **de 3 ori** (proba feciorilor)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Alternativă: dacă nu vrei trăsătura cu cifra 3, poți alege " +
                    "**oralitatea** (folosirea dialogului, a expresiilor populare) sau " +
                    "**tipologia umană bine conturată a personajelor**. Dar pentru " +
                    "non-profesorii de română, cifra 3 este cea mai ușoară.",
                },
              },
            ],
          },
          {
            title: "Tema basmului",
            content:
              "Tema basmului este lupta dintre bine și rău, prezentă în orice basm.\n\n" +
              "Creangă evidențiază formarea unui adolescent. Transformarea lui Harap Alb " +
              "reprezintă drumul parcurs de acesta spre maturizare (basm inițiatic / drum inițiatic).",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tema** basmului este **lupta dintre bine și rău**, prezentă în orice basm.\n\n" +
                  "Creangă evidențiază **formarea unui adolescent**. Transformarea lui Harap Alb " +
                  "reprezintă **drumul parcurs de acesta spre maturizare** (bildungsroman / " +
                  "roman de inițiere).",
              },
            ],
          },
          {
            title: "Acțiunea — tiparul clasic",
            content:
              "Acțiunea se desfășoară după tiparul clasic al basmelor: " +
              "echilibru inițial → dezechilibru → restabilirea echilibrului.\n\n" +
              "1. Un Crai cu trei feciori primește un mesaj de la Verde Împărat, " +
              "care îi cere să-i trimită un moștenitor\n" +
              "2. Mezinul trece proba tatălui (primii doi frați eșuiază) și pornește " +
              "la drum alături de calul său\n" +
              "3. Nesocotind sfatul tatălui, se asociază cu Spânul și devine slujitorul " +
              "acestuia. Primește numele de Harap Alb (la fântână)\n" +
              "4. La curtea lui Roșu Împărat trece prin cele trei probe cu ajutorul " +
              "prietenilor: salata din grădina ursului, capul de cerb, aducerea fetei\n" +
              "5. Finalul aduce victoria binelui și maturizarea eroului",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Acțiunea se desfășoară după **tiparul clasic al basmelor**: " +
                  "**echilibru inițial → dezechilibru → restabilirea echilibrului**.\n\n" +
                  "**Echilibrul inițial:** Un Crai cu trei feciori primește un mesaj de la " +
                  "fratele său, Verde Împărat, care îi cere să-i trimită un moștenitor.\n\n" +
                  "**Dezechilibrul:** Mezinul trece proba tatălui (primii doi frați eșuiază) și " +
                  "pornește la drum alături de calul său. Nesocotind sfatul tatălui, " +
                  "se asociază cu Spânul și devine slujitorul acestuia. Primește " +
                  "numele de **Harap Alb** (la fântână).\n\n" +
                  "**Probele:** La curtea lui Roșu Împărat este supus la trei probe:\n" +
                  "1. Aducerea salatei din grădina ursului\n" +
                  "2. Aducerea capului de cerb cu stele de diamant\n" +
                  "3. Aducerea fetei Împăratului Roșu\n\n" +
                  "Cu ajutorul prietenilor săi (Gerilă, Flămânzilă, Setilă etc.), " +
                  "reușește să îndeplinească probele.\n\n" +
                  "**Restabilirea echilibrului:** Finalul aduce victoria binelui și " +
                  "maturizarea eroului, care dovedește că a învățat din greșelile lui.",
              },
            ],
          },
          {
            title: "Personajele — forțele binelui și ale răului",
            content:
              "Forțele binelui: Harap Alb, Gerilă, Flămânzilă, Setilă, Păsări-Lăți-Lungilă, " +
              "Ochilă, Sfânta Duminică, Calul, Regina Furnicilor, Regina Albinelor, Verde Împărat.\n\n" +
              "Forțele răului: Spânul, Împăratul Roșu.\n\n" +
              "Fata Împăratului Roșu are un rol neutru — se metamorfozează.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Forțele binelui:**\n" +
                  "Harap Alb, Gerilă, Flămânzilă, Setilă, Păsări-Lăți-Lungilă, Ochilă, " +
                  "Sfânta Duminică, Calul, Regina Furnicilor, Regina Albinelor, Verde Împărat\n\n" +
                  "**Forțele răului:**\n" +
                  "Spânul, Împăratul Roșu\n\n" +
                  "*Fata Împăratului Roșu are un rol **neutru** — se metamorfozează.*",
              },
            ],
          },
        ],
        examples: [
          {
            title: "Fragment introductiv pentru eseu",
            description:
              "«Povestea lui Harap Alb este cel mai reprezentativ basm al lui Ion Creangă, " +
              "fiind publicat în revista Convorbiri Literare, la 1 august 1877.» — Poți " +
              "începe eseul cu un astfel de paragraf introductiv, urmat de definiția basmului cult.",
          },
        ],
        keyPoints: [
          { text: "Basmul cult = specie a genului epic, în proză, un singur plan narativ, nr. mare de personaje, lupta bine vs. rău", important: true },
          { text: "Publicare: 1 august 1877, în Convorbiri Literare" },
          { text: "Trăsătura 1: formulele specifice (inițială, mediană, finală)", important: true },
          { text: "Trăsătura 2: prezența cifrei magice 3 (frați, surori, probe, întâlniri cu spânul etc.)", important: true },
          { text: "Tema: lupta bine vs. rău + formarea adolescentului (drum inițiatic)" },
          { text: "Acțiunea: echilibru → dezechilibru → restabilirea echilibrului" },
          { text: "Forțele binelui (Harap Alb + ajutoarele) vs. forțele răului (Spânul, Roșu Împărat)" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-basm-mq3-1",
              type: "multiple-choice",
              question: "Unde a fost publicată «Povestea lui Harap Alb»?",
              options: [
                "În revista Junimea",
                "În revista Convorbiri Literare",
                "În ziarul Timpul",
                "În revista Viața Românească",
              ],
              correctIndex: 1,
              explanation:
                "«Povestea lui Harap Alb» a fost publicată în revista " +
                "Convorbiri Literare, la 1 august 1877.",
            },
            {
              id: "romana-sub1-basm-mq3-2",
              type: "fill-blank",
              question:
                "Formula mediană «Și merseră și merseră și merseră» are rolul de a menține trează ___ cititorului.",
              correctAnswers: ["atentia", "atenția"],
              explanation:
                "Formula mediană menține trează atenția cititorului pe " +
                "parcursul narațiunii.",
            },
            {
              id: "romana-sub1-basm-mq3-3",
              type: "true-false",
              question:
                "Spânul face parte din forțele binelui în «Povestea lui Harap Alb».",
              correct: false,
              explanation:
                "Spânul face parte din forțele răului. El îl păcălește pe " +
                "Harap Alb și devine stăpânul lui.",
            },
            {
              id: "romana-sub1-basm-mq3-4",
              type: "multiple-choice",
              question: "Ce este basmul cult, conform definiției din lecție?",
              options: [
                "O specie a genului liric, în versuri, cu personaje alegorice",
                "O specie a genului epic, în proză, de dimensiune medie, cu lupta dintre bine și rău",
                "O specie a genului dramatic, cu dialog și didascalii",
                "O specie a genului epic, în versuri, cu tematică istorică",
              ],
              correctIndex: 1,
              explanation:
                "Basmul cult este o specie a genului epic, în proză, de dimensiune medie, " +
                "cu o acțiune pe un singur plan narativ, cu un număr mare de personaje " +
                "reprezentând valori morale, în care este prezentă lupta dintre bine și rău.",
            },
            {
              id: "romana-sub1-basm-mq3-5",
              type: "fill-blank",
              question:
                "Formula inițială a basmului «Amu cică era odată» are rolul de a introduce cititorul în lumea ___.",
              correctAnswers: ["fabulosului", "Fabulosului", "fabuloasă", "fabulosului (lumea basmului)"],
              explanation:
                "Formula inițială are rolul de a introduce cititorul în lumea fabulosului, " +
                "adică în lumea fictivă a basmului, unde totul este posibil.",
            },
            {
              id: "romana-sub1-basm-mq3-6",
              type: "true-false",
              question:
                "«Povestea lui Harap Alb» a fost publicată în revista Viața Românească.",
              correct: false,
              explanation:
                "«Povestea lui Harap Alb» a fost publicată în revista Convorbiri Literare, " +
                "la 1 august 1877, nu în Viața Românească.",
            },
            {
              id: "romana-sub1-basm-mq3-7",
              type: "multiple-choice",
              question: "Câte probe trebuie să treacă Harap Alb la curtea lui Roșu Împărat?",
              options: [
                "2 probe",
                "3 probe",
                "4 probe",
                "5 probe",
              ],
              correctIndex: 1,
              explanation:
                "Harap Alb trece prin 3 probe la curtea lui Roșu Împărat: aducerea salatei " +
                "din grădina ursului, capul de cerb cu stele de diamant și aducerea fetei. " +
                "Cifra 3 este cifra magică a basmului.",
            },
            {
              id: "romana-sub1-basm-mq3-8",
              type: "multiple-choice",
              question: "Care este tema basmului «Povestea lui Harap Alb»?",
              options: [
                "Dragostea neîmplinită",
                "Lupta dintre bine și rău + formarea adolescentului",
                "Conflictul dintre generații",
                "Critica societății contemporane",
              ],
              correctIndex: 1,
              explanation:
                "Tema basmului este lupta dintre bine și rău, prezentă în orice basm. " +
                "Creangă evidențiază formarea unui adolescent — drumul lui Harap Alb " +
                "spre maturizare (drum inițiatic).",
            },
            {
              id: "romana-sub1-basm-mq3-9",
              type: "true-false",
              question:
                "Formula finală «Cine are bani, bea și mănâncă; cine nu, se uită și rabdă» scoate cititorul din lumea ficțională.",
              correct: true,
              explanation:
                "Formula finală are rolul de a scoate cititorul din lumea ficțională, " +
                "readucându-l în realitate, după ce formula inițială l-a introdus în lumea fabulosului.",
            },
            {
              id: "romana-sub1-basm-mq3-10",
              type: "fill-blank",
              question:
                "Acțiunea basmului urmează tiparul clasic: echilibru → ___ → restabilirea echilibrului.",
              correctAnswers: ["dezechilibru", "Dezechilibru", "dezechilibrul", "Dezechilibrul"],
              explanation:
                "Acțiunea basmului se desfășoară după tiparul: echilibru inițial → dezechilibru " +
                "(Harap Alb se lasă păcălit de Spân) → restabilirea echilibrului (victoria binelui).",
            },
          ],
        },
      },

      // ─── Chapter 4: Model de eseu ───
      {
        id: "romana-sub1-basm-ch4",
        title: "Model de eseu — Basmul cult",
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
                  "1. **Definiția speciei literare** + câteva date despre autor și publicare\n" +
                  "2. **Trăsătura 1** cu exemplificare concretă din text\n" +
                  "3. **Trăsătura 2** cu exemplificare concretă din text\n" +
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
                    "sunt ușor de exemplificat și nu riscați să greșiți. " +
                    "La BAC merge și titlul, dar la titularizare alegeți tema și acțiunea.",
                },
              },
            ],
          },
          {
            title: "Model complet de eseu — Basmul cult",
            content:
              "Un model complet de eseu despre basmul cult, structurat conform cerințelor " +
              "de la Subiectul 1B.",
            contentBlocks: [
              {
                kind: "expandable",
                expandable: {
                  label: "Model de eseu — Basmul cult «Povestea lui Harap Alb»",
                  source: "claude",
                  content:
                    "Basmul cult este o specie a genului epic, în proză, de dimensiune medie, " +
                    "cu o acțiune desfășurată pe un singur plan narativ, cu un număr mare " +
                    "de personaje, reprezentând valori morale, în care este prezentă lupta " +
                    "dintre bine și rău. «Povestea lui Harap Alb» este cel mai reprezentativ " +
                    "basm al lui Ion Creangă, publicat în revista Convorbiri Literare la " +
                    "1 august 1877.\n\n" +
                    "O primă trăsătură a basmului cult este prezența formulelor specifice. " +
                    "Formula inițială «Amu cică era odată» are rolul de a introduce cititorul " +
                    "în lumea fabulosului, creând o atmosferă specifică basmului. Formula mediană " +
                    "«Și merseră și merseră și merseră» menține trează atenția cititorului pe " +
                    "parcursul narațiunii, marcând trecerea timpului și a spațiului. Formula " +
                    "finală «Cine are bani, bea și mănâncă; cine nu, se uită și rabdă» are " +
                    "rolul de a scoate cititorul din lumea ficțională, readucându-l în " +
                    "realitate.\n\n" +
                    "A doua trăsătură a basmului cult o reprezintă prezența cifrei magice trei. " +
                    "În opera lui Ion Creangă, cifra trei apare în mod recurent: sunt trei " +
                    "frați la curtea Craiului, trei surori la curtea lui Verde Împărat, " +
                    "iar Harap Alb este supus la trei probe la curtea lui Roșu Împărat. " +
                    "De asemenea, eroul se întâlnește de trei ori cu Spânul, iar calul " +
                    "vine să mănânce jăratic de trei ori.\n\n" +
                    "Un element de construcție a discursului narativ este tema. Tema basmului " +
                    "este lupta dintre bine și rău, prezentă în orice basm. Creangă " +
                    "evidențiază formarea unui adolescent — transformarea lui Harap Alb " +
                    "reprezintă drumul parcurs de acesta spre maturizare.\n\n" +
                    "Un al doilea element de construcție este acțiunea. Aceasta se desfășoară " +
                    "după tiparul clasic al basmelor: o situație inițială de echilibru (un Crai " +
                    "primește mesajul fratelui său, Verde Împărat), dezechilibrul (mezinul " +
                    "trece proba tatălui, pornește la drum, dar se lasă păcălit de Spân, " +
                    "devenind slujitorul acestuia) și restabilirea echilibrului. La curtea " +
                    "lui Roșu Împărat, Harap Alb trece prin cele trei probe cu ajutorul " +
                    "prietenilor săi: Gerilă, Flămânzilă, Setilă și ceilalți. Finalul " +
                    "aduce victoria binelui și maturizarea eroului, care dovedește că a " +
                    "învățat din greșelile lui.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Nu trebuie reprodus mot-à-mot! Modelul de mai sus este un exemplu " +
                    "de structură. Personalizați eseul cu cuvintele voastre, păstrând " +
                    "ideile-cheie și exemplificările concrete.",
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
          { text: "Structura: definiție → trăsături + exemplificare → elemente de construcție → concluzie", important: true },
          { text: "Tema și acțiunea sunt cele mai sigure elemente de construcție" },
          { text: "Exemplifică concret din text (nu neapărat citate exacte)", important: true },
          { text: "Nu depăși limita de cuvinte — corectorul nu acordă puncte suplimentare" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-basm-mq4-1",
              type: "multiple-choice",
              question: "Cu ce ar trebui să înceapă eseul despre o specie literară?",
              options: [
                "Cu o citire expresivă a textului",
                "Cu definiția speciei literare",
                "Cu biografia autorului",
                "Cu momentele subiectului",
              ],
              correctIndex: 1,
              explanation:
                "Eseul trebuie să înceapă cu definiția speciei literare, " +
                "urmată de date despre autor și operă.",
            },
            {
              id: "romana-sub1-basm-mq4-2",
              type: "true-false",
              question:
                "Dacă scrii mai mult de 400 de cuvinte, primești puncte suplimentare.",
              correct: false,
              explanation:
                "Nu primești puncte suplimentare pentru depășirea limitei. " +
                "Dimpotrivă, pierzi 1 punct la redactare pentru neîncadrarea " +
                "în limita de spațiu.",
            },
            {
              id: "romana-sub1-basm-mq4-3",
              type: "multiple-choice",
              question:
                "Care sunt cele două elemente de construcție recomandate pentru eseu?",
              options: [
                "Conflictul și personajele",
                "Tema și acțiunea",
                "Titlul și reperele spațio-temporale",
                "Momentele subiectului și conflictul",
              ],
              correctIndex: 1,
              explanation:
                "Tema și acțiunea sunt cele mai sigure și accesibile — " +
                "oferă suficient material și sunt ușor de exemplificat.",
            },
            {
              id: "romana-sub1-basm-mq4-4",
              type: "true-false",
              question:
                "La eseul despre o specie literară, este obligatoriu să citezi exact din textul operei.",
              correct: false,
              explanation:
                "Nu este obligatoriu să citezi exact. Poți exemplifica concret din text " +
                "(parafrazând acțiuni, personaje, situații) fără a reproduce citate exacte.",
            },
            {
              id: "romana-sub1-basm-mq4-5",
              type: "multiple-choice",
              question: "Ce trebuie să conțină primul paragraf al eseului de la Subiectul 1B?",
              options: [
                "Biografia completă a autorului",
                "Definiția speciei literare și date despre autor/operă",
                "Rezumatul complet al operei",
                "Opinia personală despre operă",
              ],
              correctIndex: 1,
              explanation:
                "Eseul trebuie să înceapă cu definiția speciei literare (basmul cult este...), " +
                "urmată de câteva date despre autor și publicarea operei.",
            },
            {
              id: "romana-sub1-basm-mq4-6",
              type: "fill-blank",
              question:
                "La verificarea numărului de cuvinte, un rând de caiet studențesc conține aproximativ ___ cuvinte.",
              correctAnswers: ["10", "zece"],
              explanation:
                "Un rând de caiet studențesc conține aproximativ 10 cuvinte. La 30 de rânduri " +
                "scrise obții ~300 de cuvinte. O foaie de caiet studențesc are 32 de rânduri.",
            },
            {
              id: "romana-sub1-basm-mq4-7",
              type: "true-false",
              question:
                "Dacă depășești limita de 400 de cuvinte, pierzi 1 punct la redactare.",
              correct: true,
              explanation:
                "Da, neîncadrarea în limita de spațiu (300-400 de cuvinte) atrage pierderea " +
                "unui punct la secțiunea de redactare. Nu se acordă puncte suplimentare " +
                "pentru text mai lung.",
            },
            {
              id: "romana-sub1-basm-mq4-8",
              type: "multiple-choice",
              question:
                "În structura recomandată a eseului, după definiția speciei și datele despre autor, ce urmează?",
              options: [
                "Concluzia",
                "Elementele de construcție",
                "Trăsătura 1 cu exemplificare concretă din text",
                "Rezumatul operei",
              ],
              correctIndex: 2,
              explanation:
                "Structura recomandată: 1) Definiția speciei + date autor → 2) Trăsătura 1 " +
                "cu exemplificare → 3) Trăsătura 2 cu exemplificare → 4-5) Elemente de " +
                "construcție → 6) Concluzie opțională.",
            },
            {
              id: "romana-sub1-basm-mq4-9",
              type: "multiple-choice",
              question: "De ce sunt tema și acțiunea cele mai recomandate elemente de construcție?",
              options: [
                "Sunt cele mai scurte de prezentat",
                "Sunt singurele acceptate de corectori",
                "Oferă suficient material și sunt ușor de exemplificat concret",
                "Nu necesită cunoașterea textului",
              ],
              correctIndex: 2,
              explanation:
                "Tema și acțiunea sunt recomandate deoarece oferă suficient material de " +
                "discutat și sunt cele mai ușor de exemplificat concret din orice operă " +
                "literară, fără risc de confuzie.",
            },
            {
              id: "romana-sub1-basm-mq4-10",
              type: "fill-blank",
              question:
                "O foaie de caiet studențesc are ___ de rânduri, deci aproape o foaie completă corespunde limitei de ~300 de cuvinte.",
              correctAnswers: ["32", "treizeci și două"],
              explanation:
                "O foaie de caiet studențesc are 32 de rânduri. Cu ~10 cuvinte pe rând, " +
                "30 de rânduri dau ~300 de cuvinte, deci o foaie completă este suficientă " +
                "pentru încadrarea în limita de 300-400 de cuvinte.",
            },
          ],
        },
      },
    ],
    transcript:
      `# Curs Titularizare — 24.02.2026 (Limba Română)

## Subiectul 1 — Structura și cerința

### Cerința-model

> Redactați un eseu de 300-400 de cuvinte în care să prezentați particularitățile unei [specii literare] incluse în programa de concurs.

### Punctajul

- **10 puncte** — conținutul eseului
- **5 puncte** — redactare (organizarea ideilor, limbă literară, analiză, ortografie, încadrare în limită)
- **Total: 25 puncte** (Subiectul 1B)

### Ce poate cere cerința

1. Indicarea a două trăsături ale speciei literare
2. Exemplificarea celor două trăsături din operă
3. Ilustrarea a două elemente de construcție a discursului narativ (acțiune, temă, conflict, momentele subiectului, repere spațio-temporale, personaje)
4. Posibil: caracterizarea unui personaj sau relația dintre două personaje

---

## Programa literară

### Proză
- Basm cult: «Povestea lui Harap Alb» — Ion Creangă
- Schiță: «Domnul Goe» sau «Vizită» — I.L. Caragiale
- Povestire: «Hanu Ancuței» — Mihail Sadoveanu
- Nuvelă: «Moara cu noroc» — Ioan Slavici
- Roman: «Ultima noapte de dragoste, întâia noapte de război» — Camil Petrescu

### Poezie
- Fabulă: «Câinele și cățelul» — Grigore Alexandrescu
- Romantism: «Luceafărul» — Mihai Eminescu
- Pașoptism (pastel): «Mezul iernii» — Vasile Alecsandri
- Modernism: «Testament» — Tudor Arghezi
- Neomodernism: «Leoaică tânără, iubirea» — Nichita Stănescu

### Dramaturgie
- Comedie: «O scrisoare pierdută» — I.L. Caragiale

---

## Basmul cult — «Povestea lui Harap Alb»

### Definiție
Basmul cult este o specie a genului epic, în proză, de dimensiune medie, cu o acțiune desfășurată pe un singur plan narativ, cu un număr mare de personaje, reprezentând valori morale, în care este prezentă lupta dintre bine și rău.

### Publicare
Ion Creangă — 1 august 1877, Convorbiri Literare

### Trăsătura 1: Formulele specifice
- Formula inițială: «Amu cică era odată» — introduce cititorul în lumea fabulosului
- Formula mediană: «Și merseră și merseră și merseră» — menține trează atenția
- Formula finală: «Cine are bani, bea și mănâncă; cine nu, se uită și rabdă» — scoate cititorul din ficțiune

### Trăsătura 2: Cifra magică 3
- 3 frați la curtea Craiului
- 3 surori la curtea lui Verde Împărat
- 3 probe la curtea lui Roșu Împărat
- Se întâlnește de 3 ori cu Spânul
- Calul vine la jăratic de 3 ori
- Harap Alb se înalță la cer de 3 ori

### Tema
Lupta bine vs. rău + formarea adolescentului (drum inițiatic)

### Acțiunea
Echilibru inițial → dezechilibru (asocierea cu Spânul) → probe → restabilirea echilibrului

### Personajele
- Forțele binelui: Harap Alb, Gerilă, Flămânzilă, Setilă, Păsări-Lăți-Lungilă, Ochilă, Sfânta Duminică, Calul, Regina Furnicilor, Regina Albinelor, Verde Împărat
- Forțele răului: Spânul, Împăratul Roșu
- Neutru: Fata Împăratului Roșu

---

## Model de eseu — Structura recomandată
1. Definiția speciei literare + date autor/operă
2. Trăsătura 1 cu exemplificare
3. Trăsătura 2 cu exemplificare
4. Element de construcție 1 (tema)
5. Element de construcție 2 (acțiunea)
6. Concluzie (opțional)

### Sfaturi practice
- 300 cuvinte ≈ 30 rânduri caiet studențesc
- Toate cuvintele contează (inclusiv cele de legătură)
- Tema și acțiunea = cele mai sigure elemente de construcție`,
  },
];
