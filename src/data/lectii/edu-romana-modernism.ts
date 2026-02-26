import { Lesson } from "@/types/lectii";

export const eduRomanaModernismLessons: Lesson[] = [
  {
    topicId: "romana-sub1-modernism",
    title: "Modernism: «Testament» — Tudor Arghezi",
    duration: "45 min",
    objectives: [
      "Să definească genul liric și să încadreze «Testament» în modernism",
      "Să exemplifice două trăsături ale modernismului din poem",
      "Să aplice structura standard de eseu pentru «Testament»",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "romana-sub1-modernism",
      questions: [
        {
          id: "romana-sub1-modernism-fq1",
          type: "multiple-choice",
          question: "Ce concept literar ilustrează «Testament»?",
          options: [
            "Estetica frumosului",
            "Estetica urâtului",
            "Teoria artei pentru artă",
            "Clasicismul poetic",
          ],
          correctIndex: 1,
          explanation:
            "«Testament» ilustrează estetica urâtului — concept preluat de la " +
            "Baudelaire — prin care urâtul este transformat în frumos: «Din bube, " +
            "mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi.»",
        },
        {
          id: "romana-sub1-modernism-fq2",
          type: "fill-blank",
          question:
            "Primul volum al lui Arghezi se numește «___ potrivite» (1927).",
          correctAnswers: ["Cuvinte"],
          explanation:
            "Primul volum al lui Tudor Arghezi se numește «Cuvinte potrivite» " +
            "și a fost publicat în 1927. Poezia «Testament» deschide acest volum.",
        },
        {
          id: "romana-sub1-modernism-fq3",
          type: "true-false",
          question:
            "Titlul «Testament» se referă la moștenirea materială.",
          correct: false,
          explanation:
            "Titlul «Testament» se referă la moștenirea spirituală a poetului, " +
            "reprezentată de opera sa, nu la bunuri materiale.",
        },
        {
          id: "romana-sub1-modernism-fq4",
          type: "multiple-choice",
          question:
            "Care este tema poeziei «Testament»?",
          options: [
            "Iubirea neîmplinită",
            "Rolul artistului (artă poetică)",
            "Natura și trecerea timpului",
            "Nostalgia copilăriei",
          ],
          correctIndex: 1,
          explanation:
            "Tema textului este rolul artistului, poezia fiind o artă poetică " +
            "în care Arghezi își exprimă viziunea despre creație.",
        },
        {
          id: "romana-sub1-modernism-fq5",
          type: "true-false",
          question:
            "Arghezi folosește exclusiv un vocabular elevat, neologic.",
          correct: false,
          explanation:
            "Arghezi combinează diverse registre stilistice: arhaisme " +
            "(«plavani», «hrisov»), regionalisme («făcui», «grămădii»), " +
            "neologisme («canapea», «obscure»), termeni religioși și " +
            "cuvinte populare («bube», «zdrențe»).",
        },
        {
          id: "romana-sub1-modernism-fq6",
          type: "fill-blank",
          question:
            "Oximoronul din «Testament» este «izbăvește ___».",
          correctAnswers: ["pedepsitor"],
          explanation:
            "«Izbăvește pedepsitor» este un oximoron — îmbinarea a două " +
            "cuvinte cu sens contrar: izbăvirea (eliberare) și pedeapsa.",
        },
        {
          id: "romana-sub1-modernism-fq7",
          type: "multiple-choice",
          question:
            "Cine remarca despre Arghezi că «se mișcă cu succes estetic pe cel mai întins registru al limbii române»?",
          options: [
            "Titu Maiorescu",
            "George Călinescu",
            "Garabet Ibrăileanu",
            "Eugen Lovinescu",
          ],
          correctIndex: 2,
          explanation:
            "Garabet Ibrăileanu remarca despre Arghezi că «se mișcă cu succes " +
            "estetic pe cel mai întins registru al limbii române».",
        },
        {
          id: "romana-sub1-modernism-fq8",
          type: "fill-blank",
          question:
            "Estetica urâtului a fost ilustrată de Charles Baudelaire în «___ răului».",
          correctAnswers: ["Florile"],
          explanation:
            "Conceptul de «estetică a urâtului» a fost ilustrat de Charles " +
            "Baudelaire în volumul «Florile răului».",
        },
        {
          id: "romana-sub1-modernism-fq9",
          type: "multiple-choice",
          question:
            "Ce tipuri de metafore sunt prezente în «Testament»?",
          options: [
            "Doar metafore vizuale",
            "Metafore vizuale, auditive și gustative",
            "Doar metafore auditive și olfactive",
            "Metafore tactile și kinestezice",
          ],
          correctIndex: 1,
          explanation:
            "«Testament» conține metafore vizuale («cenușa morților din vatră»), " +
            "auditive («durerea… pe-o singură vioară») și gustative («veninul " +
            "preschimbat în miere»), reflectând bogăția limbajului arghezian.",
        },
        {
          id: "romana-sub1-modernism-fq10",
          type: "true-false",
          question:
            "Poezia «Testament» este ultima poezie din volumul «Cuvinte potrivite».",
          correct: false,
          explanation:
            "«Testament» nu este ultima, ci deschide volumul «Cuvinte potrivite» " +
            "(1927). Plasarea sa la începutul volumului subliniază caracterul " +
            "programatic al poeziei — este un manifest artistic al lui Arghezi.",
        },
      ],
    },

    chapters: [
      // ─── Chapter 1: Modernism — «Testament» de Tudor Arghezi ───
      {
        id: "romana-sub1-modernism-ch1",
        title: "Modernism — «Testament» de Tudor Arghezi",
        duration: "~25 min",
        sections: [
          {
            title: "Definiția genului liric",
            content:
              "Genul liric este genul literar care exprimă sentimentele, " +
              "gândurile și stările sufletești ale eului liric, printr-o voce " +
              "subiectivă și o exprimare artistică concentrată, în versuri. " +
              "«Testament» de Tudor Arghezi este o poezie lirică ce aparține " +
              "modernismului interbelic.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Genul liric** este genul literar care exprimă sentimentele, " +
                  "gândurile și stările sufletești ale **eului liric**, printr-o voce " +
                  "subiectivă și o exprimare artistică concentrată, în versuri.\n\n" +
                  "**«Testament»** de **Tudor Arghezi** este o poezie lirică ce " +
                  "aparține **modernismului interbelic**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La «Testament», cele două trăsături cele mai ușoare sunt: " +
                    "(1) combinarea diverselor registre stilistice (arhaisme, " +
                    "regionalisme, neologisme) și (2) estetica urâtului — " +
                    "urâtul transformat în frumos. Titlul = moștenirea spirituală.",
                },
              },
            ],
          },
          {
            title: "Date despre operă și autor",
            content:
              "Tudor Arghezi se impune în prima jumătate a secolului al XX-lea, " +
              "ilustrând modernismul interbelic. A avut o contribuție remarcabilă " +
              "la înnoirea lirismului românesc. Poezia «Testament» deschide " +
              "primul volum, «Cuvinte potrivite» (1927).",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tudor Arghezi** se impune în prima jumătate a secolului al XX-lea, " +
                  "ilustrând **modernismul interbelic**. A avut o contribuție remarcabilă " +
                  "la **înnoirea lirismului românesc**.\n\n" +
                  "Poezia **«Testament»** deschide primul volum, **«Cuvinte potrivite»** " +
                  "(**1927**).",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Poți face un mic intro în eseu: «Tudor Arghezi, unul " +
                    "dintre cei mai importanți poeți ai modernismului interbelic, " +
                    "a avut o contribuție remarcabilă la înnoirea lirismului " +
                    "românesc. «Testament» deschide primul său volum, «Cuvinte " +
                    "potrivite» (1927).»",
                },
              },
            ],
          },
          {
            title: "Trăsătura 1: Combinarea diverselor registre stilistice",
            content:
              "O primă trăsătură care confirmă apartenența poeziei la modernism " +
              "este folosirea și combinarea diverselor registre stilistice. " +
              "Arghezi consideră că scriitorul are la dispoziție întreaga limbă " +
              "a poporului. Garabet Ibrăileanu remarca: «se mișcă cu succes " +
              "estetic pe cel mai întins registru al limbii române». " +
              "Registrele: arhaisme, regionalisme, neologisme, termeni " +
              "religioși, cuvinte populare.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "O primă trăsătură care confirmă apartenența poeziei la modernism " +
                  "este **folosirea și combinarea diverselor registre stilistice**.\n\n" +
                  "Arghezi consideră că scriitorul are la dispoziție **întreaga limbă " +
                  "a poporului**, nu doar un vocabular restrâns. **Garabet Ibrăileanu** " +
                  "remarca: «se mișcă cu succes estetic pe cel mai întins registru al " +
                  "limbii române».\n\n" +
                  "Registrele stilistice din «Testament»:\n" +
                  "• **Arhaisme:** «plavani», «hrisov»\n" +
                  "• **Regionalisme:** «făcui», «grămădii»\n" +
                  "• **Neologisme:** «canapea», «obscure»\n" +
                  "• **Termeni religioși:** «Dumnezeu», «Domnul»\n" +
                  "• **Cuvinte populare:** «bube», «zdrențe»",
              },
            ],
          },
          {
            title: "Trăsătura 2: Estetica urâtului",
            content:
              "A doua trăsătură este estetica urâtului — concept ilustrat " +
              "de Charles Baudelaire în «Florile răului». Arghezi nu " +
              "folosește antiteza (ca în romantism), ci transformă urâtul " +
              "în frumos: «Din bube, mucegaiuri și noroi / Iscat-am " +
              "frumuseți și prețuri noi.»",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "A doua trăsătură este **estetica urâtului** — concept ilustrat " +
                  "de **Charles Baudelaire** în **«Florile răului»**.\n\n" +
                  "Arghezi **nu folosește antiteza** (ca în romantism), ci " +
                  "**transformă urâtul în frumos**:\n\n" +
                  "> «Din bube, mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi.»\n\n" +
                  "Această formulă rezumă esența esteticii urâtului la Arghezi: " +
                  "poetul are capacitatea de a prelua elemente considerate lipsite " +
                  "de valoare estetică și de a le transforma în artă.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Reține formula-cheie: «Din bube, mucegaiuri și noroi / " +
                    "Iscat-am frumuseți și prețuri noi» — aceasta rezumă " +
                    "estetica urâtului. La examen, e suficient să citezi " +
                    "această formulă ca exemplificare.",
                },
              },
            ],
          },
          {
            title: "Tema și titlul",
            content:
              "Tema textului este rolul artistului, poezia fiind o artă " +
              "poetică. Idee 1: limbajul artistic — scriitorul este artizan. " +
              "Idee 2: vocea poporului. Titlul, un substantiv abstract, are " +
              "în sens figurat referire la moștenirea spirituală a poetului, " +
              "reprezentată de opera sa. Termenul trimite și la texte sacre.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tema** textului este **rolul artistului**, poezia fiind o " +
                  "**artă poetică**.\n\n" +
                  "**Idee 1 — Limbajul artistic:** scriitorul este artizan, " +
                  "artizanul cuvintelor.\n\n" +
                  "**Idee 2 — Vocea poporului:** poetul exprimă durerea " +
                  "înaintașilor:\n" +
                  "> «De la străbunii mei până la tine / Prin râpi și gropi " +
                  "adânci / Suite de bătrânii mei pe brânci.»\n" +
                  "> «Durerea noastră surdă și amară / O-ngrămădii pe-o " +
                  "singură vioară.»\n\n" +
                  "**Titlul** — substantiv abstract — are în sens figurat " +
                  "referire la **moștenirea spirituală** a poetului, " +
                  "reprezentată de opera sa. Trimite la texte sacre:\n" +
                  "> «Am luat cenușa morților din vatră / Și am făcut-o " +
                  "Dumnezeu de piatră.»",
              },
            ],
          },
          {
            title: "Prozodia",
            content:
              "Elementele de prozodie evidențiază modernitatea: strofe " +
              "inegale, ritm variabil, rimă împerecheată. Măsura versurilor " +
              "variază între 9 și 11 silabe.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Elementele de **prozodie** evidențiază modernitatea:\n\n" +
                  "• **Strofe inegale** — nu respectă o formă fixă\n" +
                  "• **Ritm variabil** — adaugă dinamism\n" +
                  "• **Rimă împerecheată** (AABB)\n" +
                  "• **Măsura:** 9-11 silabe",
              },
            ],
          },
          {
            title: "Figuri de stil",
            content:
              "Figuri de stil: epitetul dublu «durerea noastră surdă și " +
              "amară», oximoronul «izbăvește pedepsitor», inversiunea " +
              "«iscat-am», metafore vizuale, auditive și gustative.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Figuri de stil:**\n\n" +
                  "• **Epitetul dublu:** «durerea noastră **surdă și amară**»\n" +
                  "• **Oximoronul:** «izbăvește **pedepsitor**»\n" +
                  "• **Inversiunea:** «**iscat-am**» (forma inversată a verbului)\n" +
                  "• **Metafore vizuale:** «cenușa morților din vatră»\n" +
                  "• **Metafore auditive:** «durerea… pe-o singură vioară»\n" +
                  "• **Metafore gustative:** «veninul preschimbat în miere»",
              },
            ],
          },
        ],
        examples: [
          {
            title: "Fragment-cheie pentru estetica urâtului",
            description:
              "«Din bube, mucegaiuri și noroi / Iscat-am frumuseți și " +
              "prețuri noi.» — Acest fragment este esențial pentru " +
              "exemplificarea esteticii urâtului în eseu.",
          },
        ],
        keyPoints: [
          {
            text: "«Testament» = artă poetică, modernism interbelic, «Cuvinte potrivite» 1927",
            important: true,
          },
          {
            text: "Trăsătura 1: combinarea registrelor stilistice (arhaisme, regionalisme, neologisme, termeni religioși, cuvinte populare)",
            important: true,
          },
          {
            text: "Trăsătura 2: estetica urâtului — «Din bube, mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi»",
            important: true,
          },
          { text: "Tema: rolul artistului (artă poetică)" },
          { text: "Titlul = moștenirea spirituală a poetului" },
          {
            text: "Figuri de stil: epitet dublu, oximoron, inversiune, metafore vizuale/auditive/gustative",
            important: true,
          },
          { text: "Prozodie: strofe inegale, ritm variabil, rimă împerecheată" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-modernism-mq1-1",
              type: "multiple-choice",
              question: "Ce concept literar ilustrează «Testament»?",
              options: [
                "Estetica frumosului",
                "Estetica urâtului",
                "Teoria artei pentru artă",
                "Clasicismul poetic",
              ],
              correctIndex: 1,
              explanation:
                "«Testament» ilustrează estetica urâtului — concept preluat " +
                "de la Baudelaire — prin care urâtul este transformat în frumos: " +
                "«Din bube, mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi.»",
            },
            {
              id: "romana-sub1-modernism-mq1-2",
              type: "true-false",
              question:
                "Titlul «Testament» se referă la moștenirea materială.",
              correct: false,
              explanation:
                "Titlul «Testament» se referă la moștenirea spirituală a poetului, " +
                "reprezentată de opera sa, nu la bunuri materiale.",
            },
            {
              id: "romana-sub1-modernism-mq1-3",
              type: "fill-blank",
              question:
                "Primul volum al lui Arghezi se numește «___ potrivite» (1927).",
              correctAnswers: ["Cuvinte"],
              explanation:
                "Primul volum al lui Tudor Arghezi se numește «Cuvinte potrivite» " +
                "și a fost publicat în 1927. Poezia «Testament» deschide acest volum.",
            },
            {
              id: "romana-sub1-modernism-mq1-4",
              type: "multiple-choice",
              question:
                "Care este tema poeziei «Testament»?",
              options: [
                "Iubirea neîmplinită",
                "Rolul artistului (artă poetică)",
                "Natura și trecerea timpului",
                "Nostalgia copilăriei",
              ],
              correctIndex: 1,
              explanation:
                "Tema textului este rolul artistului, poezia fiind o artă " +
                "poetică în care Arghezi își exprimă viziunea despre " +
                "creație și despre menirea scriitorului.",
            },
            {
              id: "romana-sub1-modernism-mq1-5",
              type: "true-false",
              question:
                "Arghezi folosește exclusiv un vocabular elevat, neologic.",
              correct: false,
              explanation:
                "Arghezi combinează diverse registre stilistice: arhaisme " +
                "(«plavani», «hrisov»), regionalisme («făcui», «grămădii»), " +
                "neologisme («canapea», «obscure»), termeni religioși și " +
                "cuvinte populare («bube», «zdrențe»).",
            },
            {
              id: "romana-sub1-modernism-mq1-6",
              type: "fill-blank",
              question:
                "Oximoronul din «Testament» este «izbăvește ___».",
              correctAnswers: ["pedepsitor"],
              explanation:
                "«Izbăvește pedepsitor» este un oximoron — îmbinarea a " +
                "două cuvinte cu sens contrar: izbăvirea (eliberare) și " +
                "pedeapsa. Oximoronul subliniază complexitatea actului creativ.",
            },
            {
              id: "romana-sub1-modernism-mq1-7",
              type: "multiple-choice",
              question:
                "Cine a remarcat despre Arghezi că «se mișcă cu succes estetic pe cel mai întins registru al limbii române»?",
              options: [
                "Titu Maiorescu",
                "George Călinescu",
                "Garabet Ibrăileanu",
                "Eugen Lovinescu",
              ],
              correctIndex: 2,
              explanation:
                "Garabet Ibrăileanu a remarcat despre Arghezi această " +
                "apreciere, subliniind capacitatea poetului de a folosi " +
                "întreaga gamă a limbii române în creația sa poetică.",
            },
            {
              id: "romana-sub1-modernism-mq1-8",
              type: "true-false",
              question:
                "Estetica urâtului la Arghezi constă în opunerea frumosului față de urât, ca în romantism.",
              correct: false,
              explanation:
                "Arghezi nu folosește antiteza (ca în romantism), ci " +
                "transformă urâtul în frumos. Nu opune cele două concepte, " +
                "ci scoate frumusețea din materialul brut: «Din bube, " +
                "mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi.»",
            },
            {
              id: "romana-sub1-modernism-mq1-9",
              type: "multiple-choice",
              question:
                "Ce tip de rimă predomină în «Testament»?",
              options: [
                "Rimă îmbrățișată (ABBA)",
                "Rimă împerecheată (AABB)",
                "Rimă alternată (ABAB)",
                "Vers alb (fără rimă)",
              ],
              correctIndex: 1,
              explanation:
                "În «Testament» predomină rima împerecheată (AABB), " +
                "alături de strofe inegale și ritm variabil — elemente " +
                "care evidențiază modernitatea prozodică a poeziei.",
            },
            {
              id: "romana-sub1-modernism-mq1-10",
              type: "fill-blank",
              question:
                "Estetica urâtului a fost ilustrată de Charles Baudelaire în «___ răului».",
              correctAnswers: ["Florile"],
              explanation:
                "Conceptul de «estetică a urâtului» a fost ilustrat de " +
                "Charles Baudelaire în volumul «Florile răului». Arghezi " +
                "preia și adaptează acest concept în literatura română, " +
                "transformând elemente lipsite de valoare estetică în artă.",
            },
          ],
        },
      },

      // ─── Chapter 2: Model de eseu — Modernism ───
      {
        id: "romana-sub1-modernism-ch2",
        title: "Model de eseu — Modernism",
        duration: "~15 min",
        sections: [
          {
            title: "Structura recomandată a eseului",
            content:
              "1. Definiția genului liric + date despre autor/operă + încadrare în modernism\n" +
              "2. Trăsătura 1 cu exemplificare din text (registrele stilistice)\n" +
              "3. Trăsătura 2 cu exemplificare din text (estetica urâtului)\n" +
              "4. Element de construcție 1 (recomandat: tema — artă poetică)\n" +
              "5. Element de construcție 2 (recomandat: titlul + prozodia)\n" +
              "6. Concluzie (opțional)",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Structura recomandată a eseului:**\n\n" +
                  "1. **Definiția genului liric** + date despre autor și volum + încadrare în **modernism**\n" +
                  "2. **Trăsătura 1** cu exemplificare concretă din text (registrele stilistice)\n" +
                  "3. **Trăsătura 2** cu exemplificare concretă din text (estetica urâtului)\n" +
                  "4. **Element de construcție 1** — recomandat: **tema** (rolul artistului, artă poetică)\n" +
                  "5. **Element de construcție 2** — recomandat: **titlul** + elemente de prozodie\n" +
                  "6. **Concluzie** (opțional, dacă mai ai spațiu)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La «Testament», tema și titlul sunt cele mai sigure " +
                    "elemente de construcție — sunt ușor de exemplificat. " +
                    "Tema = rolul artistului (artă poetică), Titlul = " +
                    "moștenirea spirituală. La final poți adăuga și elemente " +
                    "de prozodie (strofe inegale, rimă împerecheată).",
                },
              },
            ],
          },
          {
            title: "Model complet de eseu — «Testament»",
            content:
              "Un model complet de eseu despre «Testament» de Tudor Arghezi, " +
              "structurat conform cerințelor de la Subiectul 1B.",
            contentBlocks: [
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model de eseu — «Testament» de Tudor Arghezi (Modernism)",
                  source: "claude",
                  content:
                    "Genul liric este genul literar care exprimă sentimentele, " +
                    "gândurile și stările sufletești ale eului liric, printr-o " +
                    "voce subiectivă și o exprimare artistică concentrată. Tudor " +
                    "Arghezi, ilustrând modernismul interbelic, a avut o contribuție " +
                    "remarcabilă la înnoirea lirismului românesc. Poezia «Testament» " +
                    "deschide primul volum, «Cuvinte potrivite» (1927).\n\n" +
                    "O trăsătură care confirmă apartenența poeziei la modernism " +
                    "este folosirea și combinarea diverselor registre stilistice. " +
                    "Arghezi consideră că scriitorul are la dispoziție întreaga " +
                    "limbă a poporului, nu doar un vocabular restrâns. Garabet " +
                    "Ibrăileanu remarca că Arghezi «se mișcă cu succes estetic pe " +
                    "cel mai întins registru al limbii române». În «Testament» " +
                    "regăsim arhaisme («plavani», «hrisov»), regionalisme («făcui», " +
                    "«grămădii»), neologisme («canapea», «obscure»), termeni " +
                    "religioși («Dumnezeu», «Domnul») și cuvinte din limbajul " +
                    "popular («bube», «zdrențe»).\n\n" +
                    "A doua trăsătură este estetica urâtului — concept ilustrat " +
                    "de Charles Baudelaire în «Florile răului». Arghezi nu " +
                    "folosește antiteza, ca în romantism, ci transformă urâtul " +
                    "în frumos: «Din bube, mucegaiuri și noroi / Iscat-am " +
                    "frumuseți și prețuri noi.» Poetul demonstrează astfel " +
                    "capacitatea artei de a transfigura orice material.\n\n" +
                    "Tema textului este rolul artistului, poezia fiind o artă " +
                    "poetică. Arghezi consideră că scriitorul este un artizan al " +
                    "cuvintelor, iar vocea sa trebuie să exprime durerea " +
                    "înaintașilor: «De la străbunii mei până la tine / Prin " +
                    "râpi și gropi adânci / Suite de bătrânii mei pe brânci.» " +
                    "«Durerea noastră surdă și amară / O-ngrămădii pe-o singură " +
                    "vioară.»\n\n" +
                    "Titlul, un substantiv abstract, are în sens figurat referire " +
                    "la moștenirea spirituală a poetului, reprezentată de opera sa. " +
                    "Termenul trimite și la texte sacre, subliniind caracterul " +
                    "aproape sacru al creației: «Am luat cenușa morților din vatră / " +
                    "Și am făcut-o Dumnezeu de piatră.» Elementele de prozodie " +
                    "evidențiază modernitatea: strofe inegale, ritm variabil, rimă " +
                    "împerecheată. Figurile de stil adaugă expresivitate: epitetul " +
                    "dublu «durerea noastră surdă și amară», oximoronul «izbăvește " +
                    "pedepsitor», metafore vizuale («cenușa morților din vatră»), " +
                    "auditive («durerea… pe-o singură vioară») și gustative " +
                    "(«veninul preschimbat în miere»).\n\n" +
                    "Astfel, «Testament» se constituie într-o artă poetică în care " +
                    "autorul își exprimă viziunea artistică despre creator, un text " +
                    "programatic care creează un univers liric singular în literatura " +
                    "română.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Nu trebuie reprodus mot-à-mot! Modelul de mai sus este " +
                    "un exemplu de structură. Personalizați eseul cu cuvintele " +
                    "voastre, păstrând ideile-cheie și exemplificările concrete. " +
                    "Formula «Din bube, mucegaiuri și noroi / Iscat-am frumuseți " +
                    "și prețuri noi» este esențială — nu o uitați!",
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
            text: "Structura: definiție gen liric → trăsături + exemplificare → temă + titlu/prozodie → concluzie",
            important: true,
          },
          { text: "Tema și titlul sunt cele mai sigure elemente de construcție pentru «Testament»" },
          {
            text: "Formula-cheie: «Din bube, mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi»",
            important: true,
          },
          { text: "Menționează citatul lui Ibrăileanu despre registrele stilistice" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-modernism-mq2-1",
              type: "multiple-choice",
              question:
                "Care sunt cele două elemente de construcție recomandate pentru eseul despre «Testament»?",
              options: [
                "Conflictul și personajele",
                "Tema și titlul",
                "Momentele subiectului și acțiunea",
                "Reperele spațio-temporale și conflictul",
              ],
              correctIndex: 1,
              explanation:
                "Tema (rolul artistului / artă poetică) și titlul (moștenirea " +
                "spirituală) sunt cele mai sigure elemente de construcție " +
                "pentru eseul despre «Testament».",
            },
            {
              id: "romana-sub1-modernism-mq2-2",
              type: "true-false",
              question:
                "Arghezi folosește antiteza, ca în romantism, pentru a ilustra estetica urâtului.",
              correct: false,
              explanation:
                "Arghezi nu folosește antiteza (ca în romantism), ci " +
                "transformă urâtul în frumos. Nu opune frumosul urâtului, " +
                "ci scoate frumusețea din materialul brut.",
            },
            {
              id: "romana-sub1-modernism-mq2-3",
              type: "fill-blank",
              question:
                "«Testament» este o artă ___, un text programatic în care Arghezi își exprimă viziunea despre creație.",
              correctAnswers: ["poetica", "poetică"],
              explanation:
                "«Testament» este o artă poetică — o poezie în care autorul " +
                "își exprimă concepția despre rolul artistului și al creației.",
            },
            {
              id: "romana-sub1-modernism-mq2-4",
              type: "multiple-choice",
              question:
                "Care sunt cele două elemente de construcție recomandate pentru «Testament»?",
              options: [
                "Conflictul și personajele",
                "Tema și titlul",
                "Momentele subiectului și acțiunea",
                "Reperele spațio-temporale",
              ],
              correctIndex: 1,
              explanation:
                "Tema (rolul artistului / artă poetică) și titlul " +
                "(moștenirea spirituală) sunt cele mai sigure elemente de " +
                "construcție pentru eseul despre «Testament», oferind " +
                "material suficient pentru exemplificare.",
            },
            {
              id: "romana-sub1-modernism-mq2-5",
              type: "true-false",
              question:
                "Eseul despre «Testament» poate să nu conțină formula «Din bube, mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi».",
              correct: false,
              explanation:
                "Această formulă este esențială pentru exemplificarea " +
                "esteticii urâtului — trăsătura principală a modernismului " +
                "în «Testament». Lipsa ei din eseu ar lăsa argumentul " +
                "incomplet.",
            },
            {
              id: "romana-sub1-modernism-mq2-6",
              type: "fill-blank",
              question:
                "Titlul «Testament» se referă la moștenirea ___ a poetului.",
              correctAnswers: ["spirituala", "spirituală"],
              explanation:
                "Titlul, un substantiv abstract, are în sens figurat " +
                "referire la moștenirea spirituală a poetului, reprezentată " +
                "de opera sa. Termenul trimite și la texte sacre.",
            },
            {
              id: "romana-sub1-modernism-mq2-7",
              type: "multiple-choice",
              question:
                "Ce figură de stil este «durerea noastră surdă și amară»?",
              options: [
                "Comparație",
                "Epitet dublu",
                "Oximoron",
                "Inversiune",
              ],
              correctIndex: 1,
              explanation:
                "«Durerea noastră surdă și amară» este un epitet dublu — " +
                "două adjective (surdă, amară) califică substantivul " +
                "«durerea», sporind expresivitatea versului.",
            },
            {
              id: "romana-sub1-modernism-mq2-8",
              type: "true-false",
              question:
                "La finalul eseului se poate adăuga o secțiune despre prozodie: strofe inegale, rimă împerecheată.",
              correct: true,
              explanation:
                "Da, elementele de prozodie (strofe inegale, ritm variabil, " +
                "rimă împerecheată) pot fi adăugate la final, subliniind " +
                "modernitatea formală a poeziei.",
            },
            {
              id: "romana-sub1-modernism-mq2-9",
              type: "multiple-choice",
              question:
                "Care este citatul recomandat pentru ideea «vocea poporului»?",
              options: [
                "«Din bube, mucegaiuri și noroi / Iscat-am frumuseți și prețuri noi»",
                "«De la străbunii mei până la tine / Prin râpi și gropi adânci»",
                "«Izbăvește pedepsitor»",
                "«Veninul preschimbat în miere»",
              ],
              correctIndex: 1,
              explanation:
                "Citatul «De la străbunii mei până la tine / Prin râpi și " +
                "gropi adânci / Suite de bătrânii mei pe brânci» ilustrează " +
                "ideea că poetul exprimă durerea înaintașilor — vocea " +
                "poporului.",
            },
            {
              id: "romana-sub1-modernism-mq2-10",
              type: "fill-blank",
              question:
                "Metafora «veninul preschimbat în ___» este de tip gustativ.",
              correctAnswers: ["miere"],
              explanation:
                "«Veninul preschimbat în miere» este o metaforă gustativă — " +
                "transformarea veninului (suferința, urâtul) în miere " +
                "(frumusețe, artă) ilustrează estetica urâtului la Arghezi.",
            },
          ],
        },
      },
    ],
  },
];
