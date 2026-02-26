import { Lesson } from "@/types/lectii";

export const eduRomanaNuvelaLessons: Lesson[] = [
  {
    topicId: "romana-sub1-nuvela",
    title: "Nuvela: «Moara cu noroc» — Ioan Slavici",
    duration: "40 min",
    objectives: [
      "Să definească nuvela ca specie a genului epic",
      "Să exemplifice două trăsături ale nuvelei din «Moara cu noroc»",
      "Să ilustreze tema și acțiunea ca elemente de construcție a discursului narativ",
      "Să caracterizeze personajul Ghiță prin raportare la secvențe semnificative",
      "Să aplice structura recomandată pentru scrierea eseului la Subiectul 1",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "romana-sub1-nuvela",
      questions: [
        {
          id: "romana-sub1-nuvela-fq1",
          type: "multiple-choice",
          question:
            "Care este tema nuvelei «Moara cu noroc»?",
          options: [
            "Iubirea neîmplinită",
            "Dezumanizarea provocată de setea de înavuțire",
            "Conflictul dintre generații",
            "Condiția intelectualului",
          ],
          correctIndex: 1,
          explanation:
            "Tema nuvelei este dezumanizarea provocată de setea de înavuțire, " +
            "ilustrată prin degradarea morală a lui Ghiță.",
        },
        {
          id: "romana-sub1-nuvela-fq2",
          type: "true-false",
          question:
            "Personajul antagonist din «Moara cu noroc» este Ana.",
          correct: false,
          explanation:
            "Personajul antagonist este Lică Sămădăul, nu Ana. Ana este soția " +
            "lui Ghiță și este victimă a circumstanțelor.",
        },
        {
          id: "romana-sub1-nuvela-fq3",
          type: "fill-blank",
          question:
            "Avertismentul bătrânei din incipitul nuvelei: «nu bogăția, ci ___ colibei te face fericit».",
          correctAnswers: ["linistea", "liniștea"],
          explanation:
            "Bătrâna avertizează: «nu bogăția, ci liniștea colibei te face " +
            "fericit» — avertisment reluat în final prin simetria incipit/final.",
        },
        {
          id: "romana-sub1-nuvela-fq4",
          type: "multiple-choice",
          question:
            "Care este ocupația inițială a lui Ghiță, înainte de a arenda Moara cu noroc?",
          options: [
            "Morar",
            "Cizmar",
            "Fierar",
            "Hangiu",
          ],
          correctIndex: 1,
          explanation:
            "Ghiță este inițial cizmar sărac, care ia în arendă Moara cu " +
            "noroc pentru a oferi o viață mai bună familiei sale.",
        },
        {
          id: "romana-sub1-nuvela-fq5",
          type: "true-false",
          question:
            "Nuvela are o acțiune desfășurată pe mai multe planuri narative.",
          correct: false,
          explanation:
            "Nuvela are o acțiune constituită pe baza unui singur plan narativ, " +
            "nu pe mai multe planuri (aceasta este trăsătura romanului).",
        },
        {
          id: "romana-sub1-nuvela-fq6",
          type: "fill-blank",
          question:
            "Personajele nuvelei sunt caractere ___, deja formate.",
          correctAnswers: ["complexe", "puternice"],
          explanation:
            "O trăsătură a nuvelei este complexitatea personajelor — caractere " +
            "puternice, deja formate, nu în devenire.",
        },
        {
          id: "romana-sub1-nuvela-fq7",
          type: "multiple-choice",
          question:
            "Ce relație de construcție există între incipitul și finalul nuvelei «Moara cu noroc»?",
          options: [
            "Relație de contrast",
            "Relație de simetrie",
            "Relație de cauzalitate",
            "Relație de succesiune",
          ],
          correctIndex: 1,
          explanation:
            "Între incipit și final există o relație de simetrie: incipitul conține " +
            "avertismentul bătrânei, iar finalul reia vorbele acesteia.",
        },
        {
          id: "romana-sub1-nuvela-fq8",
          type: "fill-blank",
          question:
            "Ioan Slavici este reprezentant de seamă al generației de scriitori ai secolului al ___-lea.",
          correctAnswers: ["XIX", "xix", "19"],
          explanation:
            "Ioan Slavici face parte din generația marilor scriitori ai secolului " +
            "al XIX-lea, alături de Ion Creangă, I.L. Caragiale și Mihai Eminescu.",
        },
        {
          id: "romana-sub1-nuvela-fq9",
          type: "multiple-choice",
          question:
            "Cum caracterizează Lică indirect pe Ghiță?",
          options: [
            "«Un om de treabă, dar slab la minte»",
            "«Tu ești om, Ghiță, cu multă ură în sufletul tău, și ești om cu minte»",
            "«Un om harnic și sârguitor, dar fără voință»",
            "«Un om bun la suflet, dar prea credul»",
          ],
          correctIndex: 1,
          explanation:
            "Lică îl caracterizează indirect pe Ghiță prin replica: «Tu ești om, " +
            "Ghiță, cu multă ură în sufletul tău, și ești om cu minte…» — aceasta " +
            "este o modalitate de caracterizare indirectă, prin vorbele altor personaje.",
        },
        {
          id: "romana-sub1-nuvela-fq10",
          type: "true-false",
          question:
            "Nuvela «Moara cu noroc» are acțiunea desfășurată pe mai multe planuri narative, ca un roman.",
          correct: false,
          explanation:
            "Nuvela are o acțiune constituită pe baza unui singur plan narativ, " +
            "nu pe mai multe planuri. Acțiunea pe mai multe planuri este o " +
            "trăsătură specifică romanului, nu nuvelei.",
        },
      ],
    },

    chapters: [
      // ─── Chapter 1: Nuvela — «Moara cu noroc» ───
      {
        id: "romana-sub1-nuvela-ch1",
        title: "Nuvela — «Moara cu noroc»",
        duration: "~25 min",
        sections: [
          {
            title: "Definiția nuvelei",
            content:
              "Nuvela este specia genului epic, în proză, de întindere medie, cu o " +
              "acțiune constituită pe baza unui singur plan narativ, cu o intrigă bine " +
              "structurată, în care accentul nu este pus pe desfășurarea acțiunii, ci " +
              "pe caracterizarea personajelor, caractere complexe, deja formate.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Nuvela** este specia genului epic, în proză, de **întindere medie**, " +
                  "cu o acțiune constituită pe baza unui **singur plan narativ**, cu o " +
                  "intrigă bine structurată, în care accentul nu este pus pe desfășurarea " +
                  "acțiunii, ci pe **caracterizarea personajelor**, caractere **complexe**, " +
                  "**deja formate**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La nuvelă, cele două trăsături cele mai ușoare sunt: " +
                    "(1) existența reperelor precise de timp și spațiu și " +
                    "(2) complexitatea personajelor (caractere puternice, deja formate). " +
                    "Nu uita relația de simetrie între incipit și final!",
                },
              },
            ],
          },
          {
            title: "Date despre operă și autor",
            content:
              "«Moara cu noroc» este o nuvelă scrisă de Ioan Slavici, " +
              "reprezentant de seamă al generației de scriitori ai secolului al XIX-lea, " +
              "alături de Ion Creangă, I.L. Caragiale și Mihai Eminescu.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**«Moara cu noroc»** este o nuvelă scrisă de **Ioan Slavici**, " +
                  "reprezentant de seamă al generației de scriitori ai secolului al XIX-lea, " +
                  "alături de **Ion Creangă**, **I.L. Caragiale** și **Mihai Eminescu**.\n\n" +
                  "Slavici a fost un scriitor moralist, preocupat de viața socială " +
                  "și de dramele umane din mediul rural ardelenesc.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Poți face un mic intro în eseu: «Ioan Slavici, reprezentant de seamă " +
                    "al generației de scriitori ai secolului al XIX-lea, este cunoscut prin " +
                    "nuvela Moara cu noroc.» Dacă știi detalii despre autor, le treci scurt " +
                    "— nu e greșit, dar nu insista prea mult pe biografie.",
                },
              },
            ],
          },
          {
            title: "Trăsătura 1: Reperele precise de timp și spațiu",
            content:
              "O primă trăsătură a nuvelei o constituie existența reperelor de timp și " +
              "de spațiu care încadrează exact acțiunea, fiind precise: perioada de " +
              "început a secolului al XIX-lea, într-un loc numit Moara cu noroc, din " +
              "zona satelor ardelenești.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "O primă trăsătură a nuvelei o constituie **existența reperelor de timp și " +
                  "de spațiu** care încadrează exact acțiunea, fiind **precise**.\n\n" +
                  "**Reperul temporal:** perioada de început a secolului al XIX-lea\n\n" +
                  "**Reperul spațial:** un loc numit **Moara cu noroc**, din zona satelor " +
                  "ardelenești — un han la marginea drumului mare\n\n" +
                  "Spre deosebire de basm, unde timpul și spațiul sunt vagi " +
                  "(«a fost odată ca niciodată»), în nuvelă acestea sunt **concrete și " +
                  "verificabile**, ancorând acțiunea în realitate.",
              },
            ],
          },
          {
            title: "Trăsătura 2: Complexitatea personajelor",
            content:
              "A doua trăsătură a nuvelei este reprezentată de complexitatea " +
              "personajelor, care sunt caractere puternice, deja formate. " +
              "Ghiță — inițial om puternic, care știe exact ce vrea; " +
              "Lică — personalitate și influență extrem de puternică.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "A doua trăsătură a nuvelei este reprezentată de **complexitatea " +
                  "personajelor**, care sunt **caractere puternice, deja formate**.\n\n" +
                  "**Ghiță** — inițial om puternic, care știe exact ce vrea; dorește " +
                  "să plece din sat pentru a oferi o viață mai bună familiei. Este descris " +
                  "ca «om harnic și sârguitor», «înalt și spătos».\n\n" +
                  "**Lică Sămădăul** — personalitate și influență extrem de puternică; " +
                  "personajul antagonist care declanșează degradarea morală a lui Ghiță.\n\n" +
                  "**Ana** — soția lui Ghiță, victimă a circumstanțelor, reprezentând " +
                  "valorile familiei și ale moralei tradiționale.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Diferența dintre nuvelă și roman la nivel de personaje: în nuvelă, " +
                    "personajele sunt deja formate (nu evoluează fundamental), pe când în " +
                    "roman personajele pot suferi transformări profunde pe parcursul acțiunii. " +
                    "La Ghiță nu e vorba de o evoluție, ci de o degradare a unui caracter deja constituit.",
                },
              },
            ],
          },
          {
            title: "Tema nuvelei",
            content:
              "Tema nuvelei este dezumanizarea provocată de setea de înavuțire, " +
              "ilustrată prin degradarea morală a lui Ghiță, care, cinstit inițial, " +
              "devine din ce în ce mai atras de mirajul banilor și în final ajunge " +
              "să se degradeze moral.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tema** nuvelei este **dezumanizarea provocată de setea de înavuțire**.\n\n" +
                  "Ea este ilustrată prin modul de acțiune al personajului principal care, " +
                  "**cinstit inițial**, devine din ce în ce mai atras de mirajul banilor și " +
                  "în final ajunge **să se degradeze moral**.\n\n" +
                  "Slavici transmite un mesaj moralizator: lăcomia distruge nu doar individul, " +
                  "ci întreaga familie și comunitate.",
              },
            ],
          },
          {
            title: "Acțiunea — momentele subiectului",
            content:
              "Ghiță, inițial cizmar sărac, ia în arendă Moara cu noroc. O perioadă, " +
              "lucrurile merg bine. Cu sosirea lui Lică Sămădăul, viața se schimbă. " +
              "Lică înțelege că slăbiciunea lui Ghiță sunt banii. Treptat, Ghiță se " +
              "degradează, depune mărturie falsă. O trimite pe Ana singură cu Lică. " +
              "Ana îl acceptă pe Lică. Ghiță o omoară pe Ana, Lică ordonă să fie " +
              "împușcat Ghiță, apoi se sinucide izbindu-se cu capul de un stejar.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Acțiunea** operei urmărește o perioadă din viața lui Ghiță:\n\n" +
                  "**Expozițiunea:** Ghiță, inițial **cizmar sărac**, ia în arendă " +
                  "**Moara cu noroc**, unde se mută cu întreaga familie. O perioadă, " +
                  "lucrurile merg bine.\n\n" +
                  "**Intriga:** Odată cu sosirea lui **Lică Sămădăul**, viața lui Ghiță " +
                  "se schimbă. Lică înțelege că slăbiciunea lui Ghiță o constituie **banii** " +
                  "și profită pentru a-l ademeni.\n\n" +
                  "**Desfășurarea acțiunii:** Treptat, Ghiță se degradează, ajungând " +
                  "să **depună mărturie falsă**. O trimite pe Ana singură cu Lică, " +
                  "fără s-o avertizeze, iar Ana îl acceptă pe Lică.\n\n" +
                  "**Punctul culminant și deznodământul:** Ghiță se întoarce la moară, " +
                  "**o omoară pe Ana**, iar Lică ordonă ca Ghiță **să fie împușcat**, " +
                  "apoi **se sinucide** lovindu-se cu capul de un stejar.\n\n" +
                  "**Simetria incipit/final:** Incipitul conține avertismentul bătrânei: " +
                  "«nu bogăția, ci liniștea colibei te face fericit». Finalul reia " +
                  "vorbele acesteia: «Simțeam eu că n-are să iasă bine.»",
              },
            ],
          },
          {
            title: "Personajul Ghiță",
            content:
              "Ghiță este personajul principal al nuvelei. Inițial «om harnic și " +
              "sârguitor», «înalt și spătos»; moral, e onest; psihologic, oscilează " +
              "între Ana (valorile familiei) și Lică (tentația bogăției). Monolog " +
              "interior: «Ce să-mi fac dacă e în mine ceva mai tare decât voința mea?» " +
              "Lică îl caracterizează: «Tu ești om, Ghiță, cu multă ură în sufletul " +
              "tău, și ești om cu minte…»",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Ghiță** este personajul principal al nuvelei.\n\n" +
                  "**Portret fizic:** «înalt și spătos» — un om impunător la exterior.\n\n" +
                  "**Portret moral:** inițial «om **harnic și sârguitor**», onest, " +
                  "preocupat de binele familiei. Treptat se degradează sub influența " +
                  "lăcomiei.\n\n" +
                  "**Portret psihologic:** oscilează între **Ana** (valorile familiei, " +
                  "moralitatea) și **Lică** (tentația bogăției, degradarea). Această " +
                  "oscilație este redată prin **monolog interior**: «Ce să-mi fac dacă " +
                  "e în mine ceva mai tare decât voința mea?»\n\n" +
                  "**Caracterizare indirectă** (prin vorbele altor personaje) — Lică " +
                  "îl caracterizează: «Tu ești om, Ghiță, cu multă ură în sufletul " +
                  "tău, și ești om cu minte…»\n\n" +
                  "Ghiță nu evoluează pozitiv — suferă o **involuție morală** de la " +
                  "omul cinstit la criminalul împins de patima banilor.",
              },
            ],
          },
        ],
        examples: [
          {
            title: "Fragment-cheie din nuvelă",
            description:
              "Monologul interior al lui Ghiță — «Ce să-mi fac dacă e în mine " +
              "ceva mai tare decât voința mea?» — relevă conflictul interior al " +
              "personajului și este util pentru caracterizarea psihologică în eseu.",
          },
        ],
        keyPoints: [
          {
            text: "Nuvela = specie epică, întindere medie, un singur plan narativ, personaje complexe, deja formate",
            important: true,
          },
          {
            text: "Ioan Slavici — reprezentant de seamă al generației scriitorilor sec. al XIX-lea",
          },
          {
            text: "Trăsătura 1: repere precise de timp și spațiu (sec. XIX, Moara cu noroc, sate ardelenești)",
            important: true,
          },
          {
            text: "Trăsătura 2: complexitatea personajelor — caractere puternice, deja formate (Ghiță, Lică)",
            important: true,
          },
          {
            text: "Tema: dezumanizarea provocată de setea de înavuțire — degradarea morală a lui Ghiță",
          },
          {
            text: "Simetria incipit/final: avertismentul bătrânei → confirmarea în final",
            important: true,
          },
          {
            text: "Ghiță oscilează între Ana (familia) și Lică (banii) — monolog interior «Ce să-mi fac…»",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-nuvela-mq1-1",
              type: "multiple-choice",
              question:
                "Care este tema nuvelei «Moara cu noroc»?",
              options: [
                "Iubirea neîmplinită",
                "Dezumanizarea provocată de setea de înavuțire",
                "Conflictul dintre generații",
                "Condiția intelectualului",
              ],
              correctIndex: 1,
              explanation:
                "Tema nuvelei este dezumanizarea provocată de setea de înavuțire, " +
                "ilustrată prin degradarea morală a lui Ghiță.",
            },
            {
              id: "romana-sub1-nuvela-mq1-2",
              type: "true-false",
              question:
                "Personajul antagonist din «Moara cu noroc» este Ana.",
              correct: false,
              explanation:
                "Personajul antagonist este Lică Sămădăul, nu Ana. Ana este soția " +
                "lui Ghiță și este victimă a circumstanțelor.",
            },
            {
              id: "romana-sub1-nuvela-mq1-3",
              type: "fill-blank",
              question:
                "Avertismentul bătrânei din incipitul nuvelei: «nu bogăția, ci ___ colibei te face fericit».",
              correctAnswers: ["linistea", "liniștea"],
              explanation:
                "Bătrâna avertizează: «nu bogăția, ci liniștea colibei te face " +
                "fericit» — avertisment reluat în final prin simetria incipit/final.",
            },
            {
              id: "romana-sub1-nuvela-mq1-4",
              type: "multiple-choice",
              question:
                "Care este ocupația inițială a lui Ghiță, înainte de a arenda Moara cu noroc?",
              options: [
                "Morar",
                "Cizmar",
                "Fierar",
                "Hangiu",
              ],
              correctIndex: 1,
              explanation:
                "Ghiță este inițial cizmar sărac. El ia în arendă Moara cu noroc " +
                "pentru a oferi o viață mai bună familiei sale, ceea ce declanșează " +
                "lanțul evenimentelor tragice.",
            },
            {
              id: "romana-sub1-nuvela-mq1-5",
              type: "true-false",
              question:
                "Nuvela «Moara cu noroc» are o acțiune desfășurată pe mai multe planuri narative.",
              correct: false,
              explanation:
                "Nuvela are o acțiune constituită pe baza unui singur plan narativ — " +
                "aceasta este o trăsătură distinctivă. Acțiunea desfășurată pe mai " +
                "multe planuri este specifică romanului, nu nuvelei.",
            },
            {
              id: "romana-sub1-nuvela-mq1-6",
              type: "multiple-choice",
              question:
                "Ce monolog interior relevă conflictul psihologic al lui Ghiță?",
              options: [
                "«Nu bogăția, ci liniștea colibei te face fericit.»",
                "«Ce să-mi fac dacă e în mine ceva mai tare decât voința mea?»",
                "«Simțeam eu că n-are să iasă bine.»",
                "«Tu ești om, Ghiță, cu multă ură în sufletul tău.»",
              ],
              correctIndex: 1,
              explanation:
                "Monologul interior «Ce să-mi fac dacă e în mine ceva mai tare " +
                "decât voința mea?» relevă conflictul psihologic al lui Ghiță — " +
                "oscilația dintre conștiința morală și atracția irezistibilă a banilor.",
            },
            {
              id: "romana-sub1-nuvela-mq1-7",
              type: "fill-blank",
              question:
                "Lică Sămădăul înțelege că slăbiciunea lui Ghiță sunt ___.",
              correctAnswers: ["banii"],
              explanation:
                "Lică descoperă că banii sunt punctul vulnerabil al lui Ghiță " +
                "și profită de această slăbiciune pentru a-l ademeni și a-l " +
                "transforma treptat în complice.",
            },
            {
              id: "romana-sub1-nuvela-mq1-8",
              type: "true-false",
              question:
                "Între incipitul și finalul nuvelei «Moara cu noroc» există o relație de simetrie.",
              correct: true,
              explanation:
                "Incipitul conține avertismentul bătrânei: «nu bogăția, ci liniștea " +
                "colibei te face fericit». Finalul reia vorbele acesteia: «Simțeam eu " +
                "că n-are să iasă bine.» Această simetrie subliniază mesajul moralizator.",
            },
            {
              id: "romana-sub1-nuvela-mq1-9",
              type: "multiple-choice",
              question:
                "Cum moare Lică Sămădăul la finalul nuvelei?",
              options: [
                "Este împușcat de Ghiță",
                "Fuge din sat",
                "Se sinucide lovindu-se cu capul de un stejar",
                "Este arestat de jandarmi",
              ],
              correctIndex: 2,
              explanation:
                "După ce ordonă ca Ghiță să fie împușcat, Lică se sinucide " +
                "lovindu-se cu capul de un stejar — un deznodământ tragic care " +
                "completează distrugerea tuturor personajelor principale.",
            },
            {
              id: "romana-sub1-nuvela-mq1-10",
              type: "fill-blank",
              question:
                "Ghiță este descris fizic ca fiind «înalt și ___».",
              correctAnswers: ["spatos", "spătos"],
              explanation:
                "Portretul fizic al lui Ghiță — «înalt și spătos» — sugerează " +
                "un om impunător la exterior, în contrast cu degradarea sa morală " +
                "interioară provocată de setea de înavuțire.",
            },
          ],
        },
      },

      // ─── Chapter 2: Model de eseu — Nuvela ───
      {
        id: "romana-sub1-nuvela-ch2",
        title: "Model de eseu — Nuvela",
        duration: "~15 min",
        sections: [
          {
            title: "Structura recomandată a eseului",
            content:
              "1. Definiția speciei literare + date despre autor/operă\n" +
              "2. Trăsătura 1 cu exemplificare din text\n" +
              "3. Trăsătura 2 cu exemplificare din text\n" +
              "4. Element de construcție 1 (recomandat: tema)\n" +
              "5. Element de construcție 2 (recomandat: acțiunea + simetria incipit/final)\n" +
              "6. Concluzie (opțional)",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Structura recomandată a eseului:**\n\n" +
                  "1. **Definiția speciei literare** + câteva date despre autor\n" +
                  "2. **Trăsătura 1** — reperele precise de timp și spațiu, cu exemplificare\n" +
                  "3. **Trăsătura 2** — complexitatea personajelor, cu exemplificare\n" +
                  "4. **Element de construcție 1** — recomandat: **tema** (dezumanizarea prin setea de înavuțire)\n" +
                  "5. **Element de construcție 2** — recomandat: **acțiunea** (cu referire la momentele subiectului + simetria incipit/final)\n" +
                  "6. **Concluzie** (opțional, dacă mai ai spațiu)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Tema și acțiunea sunt cele mai sigure elemente de construcție — " +
                    "sunt ușor de exemplificat și nu riscați să greșiți. " +
                    "La nuvelă, simetria incipit/final este un bonus excelent " +
                    "pe care-l puteți integra în secțiunea acțiunii.",
                },
              },
            ],
          },
          {
            title: "Model complet de eseu — Nuvela",
            content:
              "Un model complet de eseu despre nuvela «Moara cu noroc» " +
              "de Ioan Slavici, structurat conform cerințelor de la Subiectul 1B.",
            contentBlocks: [
              {
                kind: "expandable",
                expandable: {
                  label: "Model de eseu — Nuvela «Moara cu noroc» de Ioan Slavici",
                  source: "claude",
                  content:
                    "Nuvela este specia genului epic, în proză, de întindere medie, cu o " +
                    "acțiune constituită pe baza unui singur plan narativ, cu o intrigă bine " +
                    "structurată, în care accentul nu este pus pe desfășurarea acțiunii, ci " +
                    "pe caracterizarea personajelor, caractere complexe, deja formate. " +
                    "Reprezentant de seamă al generației de scriitori ai secolului al XIX-lea, " +
                    "Ioan Slavici este cunoscut prin nuvela «Moara cu noroc».\n\n" +
                    "O primă trăsătură a nuvelei o constituie existența reperelor de timp și " +
                    "de spațiu care încadrează exact acțiunea, fiind precise: perioada de " +
                    "început a secolului al XIX-lea, într-un loc numit Moara cu noroc, din " +
                    "zona satelor ardelenești.\n\n" +
                    "O a doua trăsătură a nuvelei este reprezentată de complexitatea " +
                    "personajelor, care sunt caractere puternice, deja formate: Ghiță, " +
                    "personajul principal, este inițial un om puternic, care știe exact ce " +
                    "vrea, dorind să plece din sat pentru a oferi o viață mai bună familiei, " +
                    "iar Lică, personajul antagonist, are o personalitate și o influență " +
                    "extrem de puternică.\n\n" +
                    "Un element de construcție a discursului narativ este tema. Tema nuvelei " +
                    "este dezumanizarea provocată de setea de înavuțire. Ea este ilustrată " +
                    "prin modul de acțiune al personajului principal care, cinstit inițial, " +
                    "devine din ce în ce mai atras de mirajul banilor și în final ajunge să " +
                    "se degradeze moral.\n\n" +
                    "Un al doilea element de construcție este acțiunea. Aceasta urmărește " +
                    "o perioadă din viața lui Ghiță, inițial cizmar sărac. El ia în arendă " +
                    "Moara cu noroc, unde se mută cu întreaga familie. O perioadă, lucrurile " +
                    "merg bine. Ulterior, odată cu sosirea lui Lică Sămădăul, viața lui " +
                    "Ghiță se schimbă. Lică înțelege că slăbiciunea lui Ghiță o constituie " +
                    "banii și profită pentru a-l ademeni. Treptat, Ghiță se degradează, " +
                    "ajungând să depună mărturie falsă. O trimite pe Ana singură cu Lică, " +
                    "fără s-o avertizeze, iar Ana îl acceptă pe Lică. Ghiță se întoarce la " +
                    "moară, o omoară pe Ana, iar Lică ordonă ca Ghiță să fie împușcat, " +
                    "apoi se sinucide lovindu-se cu capul de un stejar.\n\n" +
                    "În nuvelă există o relație de simetrie între incipit și final. Incipitul " +
                    "conține avertismentul bătrânei: «nu bogăția, ci liniștea colibei te face " +
                    "fericit». Finalul reia vorbele acesteia: «Simțeam eu că n-are să iasă " +
                    "bine.»\n\n" +
                    "Nuvela «Moara cu noroc» rămâne una dintre cele mai reprezentative opere " +
                    "ale literaturii secolului al XIX-lea, din ea transpărând spiritul " +
                    "moralizator al lui Slavici.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Dacă se cere caracterizarea lui Ghiță: inițial «om harnic și sârguitor», " +
                    "«înalt și spătos»; moral, e onest; psihologic, oscilează între Ana " +
                    "(valorile familiei) și Lică (tentația bogăției). Monolog interior: " +
                    "«Ce să-mi fac dacă e în mine ceva mai tare decât voința mea?» " +
                    "Lică îl caracterizează indirect: «Tu ești om, Ghiță, cu multă ură " +
                    "în sufletul tău, și ești om cu minte…»",
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
              "Modelul de mai sus are aproximativ 320 de cuvinte — perfect în limita cerută.",
          },
        ],
        keyPoints: [
          {
            text: "Structura: definiție → trăsături + exemplificare → elemente de construcție → concluzie",
            important: true,
          },
          {
            text: "Tema și acțiunea sunt cele mai sigure elemente de construcție",
          },
          {
            text: "Exemplifică concret din text — nu e nevoie de citate exacte, dar ajută",
            important: true,
          },
          {
            text: "Simetria incipit/final este un bonus ușor de integrat în secțiunea acțiunii",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-nuvela-mq2-1",
              type: "multiple-choice",
              question:
                "Cu ce ar trebui să înceapă eseul despre o specie literară?",
              options: [
                "Cu biografia completă a autorului",
                "Cu definiția speciei literare",
                "Cu momentele subiectului",
                "Cu citarea unui fragment din operă",
              ],
              correctIndex: 1,
              explanation:
                "Eseul trebuie să înceapă cu definiția speciei literare, " +
                "urmată de câteva date despre autor și operă.",
            },
            {
              id: "romana-sub1-nuvela-mq2-2",
              type: "true-false",
              question:
                "Dacă scrii mai mult de 400 de cuvinte, primești puncte suplimentare.",
              correct: false,
              explanation:
                "Nu primești puncte suplimentare pentru depășirea limitei. " +
                "Dimpotrivă, pierzi 1 punct la redactare pentru neîncadrarea " +
                "în limita de spațiu (300-400 cuvinte).",
            },
            {
              id: "romana-sub1-nuvela-mq2-3",
              type: "fill-blank",
              question:
                "Cele două elemente de construcție recomandate pentru eseul despre nuvelă sunt ___ și acțiunea.",
              correctAnswers: ["tema"],
              explanation:
                "Tema și acțiunea sunt cele mai sigure și accesibile elemente " +
                "de construcție — oferă suficient material și sunt ușor de exemplificat.",
            },
            {
              id: "romana-sub1-nuvela-mq2-4",
              type: "multiple-choice",
              question:
                "Ce bonus poate fi integrat în secțiunea acțiunii la eseul despre nuvelă?",
              options: [
                "Biografia completă a lui Ioan Slavici",
                "Simetria incipit/final",
                "Lista tuturor personajelor secundare",
                "Comparația cu alte nuvele",
              ],
              correctIndex: 1,
              explanation:
                "Simetria incipit/final este un bonus excelent care poate fi " +
                "integrat ușor în secțiunea acțiunii: incipitul conține avertismentul " +
                "bătrânei, iar finalul reia vorbele acesteia.",
            },
            {
              id: "romana-sub1-nuvela-mq2-5",
              type: "true-false",
              question:
                "Este nevoie de citate exacte din operă pentru a obține punctaj la eseu.",
              correct: false,
              explanation:
                "Nu este obligatoriu să citezi exact din text — ajută, dar nu e " +
                "necesar. Important este să exemplifici concret, referindu-te la " +
                "episoade, personaje și fapte din operă.",
            },
            {
              id: "romana-sub1-nuvela-mq2-6",
              type: "fill-blank",
              question:
                "La nuvelă, cele două trăsături recomandate sunt reperele precise de timp și spațiu și ___ personajelor.",
              correctAnswers: ["complexitatea"],
              explanation:
                "Cele două trăsături sunt: (1) existența reperelor precise de timp " +
                "și spațiu (sec. XIX, Moara cu noroc, sate ardelenești) și " +
                "(2) complexitatea personajelor (caractere puternice, deja formate).",
            },
            {
              id: "romana-sub1-nuvela-mq2-7",
              type: "multiple-choice",
              question:
                "Câte cuvinte ar trebui să numere eseul de la examen?",
              options: [
                "Maximum 200 de cuvinte",
                "Între 300 și 400 de cuvinte",
                "Minimum 500 de cuvinte",
                "Nu există limită de cuvinte",
              ],
              correctIndex: 1,
              explanation:
                "Eseul trebuie să aibă între 300 și 400 de cuvinte. Depășirea " +
                "sau neatingerea acestei limite duce la pierderea punctelor " +
                "pentru redactare.",
            },
            {
              id: "romana-sub1-nuvela-mq2-8",
              type: "true-false",
              question:
                "Dacă scrii mai mult de 400 de cuvinte la eseu, primești puncte suplimentare.",
              correct: false,
              explanation:
                "Nu primești puncte suplimentare pentru depășirea limitei. " +
                "Dimpotrivă, pierzi 1 punct la redactare pentru neîncadrarea " +
                "în limita de spațiu (300-400 cuvinte).",
            },
            {
              id: "romana-sub1-nuvela-mq2-9",
              type: "multiple-choice",
              question:
                "Ce conține primul paragraf al eseului despre nuvelă?",
              options: [
                "Momentele subiectului ale nuvelei",
                "Definiția speciei literare și date despre autor",
                "Caracterizarea completă a personajului principal",
                "Comparația cu alte opere ale aceluiași autor",
              ],
              correctIndex: 1,
              explanation:
                "Primul paragraf conține definiția speciei literare (nuvela = " +
                "specie a genului epic, în proză, de întindere medie...) urmată " +
                "de câteva date concise despre autor și operă.",
            },
            {
              id: "romana-sub1-nuvela-mq2-10",
              type: "fill-blank",
              question:
                "Structura eseului urmează ordinea: definiție → trăsături + exemplificare → elemente de construcție → ___.",
              correctAnswers: ["concluzie"],
              explanation:
                "Structura recomandată se încheie cu o concluzie opțională, " +
                "care sintetizează ideile principale ale eseului. Se scrie " +
                "doar dacă mai ai spațiu în limita de cuvinte.",
            },
          ],
        },
      },
    ],
  },
];
