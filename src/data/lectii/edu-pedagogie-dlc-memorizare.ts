import { Lesson } from "@/types/lectii";

export const eduPedagogieDlcMemorizareLessons: Lesson[] = [
  {
    topicId: "edu-ped-dlc-memorizare",
    title: "Memorizarea — model de eseu (Subiectul 3)",
    duration: "60 min",
    objectives: [
      "Să definească memorizarea ca modalitate specifică în educația timpurie",
      "Să identifice scopul memorizării: formarea cunoștințelor și deprinderilor, dezvoltând memoria, logica, atenția, gândirea și vocabularul",
      "Să diferențieze numărul de strofe pe grupe de vârstă (mică: 1, mijlocie: 2, mare: 3)",
      "Să asocieze poeziile recomandate cu grupele de vârstă și temele anuale de studiu",
      "Să descrie structura eseului de memorizare cu metoda recitării vers cu vers",
      "Să aplice adaptarea activității de memorizare la domeniile DLC și DOS",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    chapters: [
      {
        id: "memorizare-definitie",
        title: "Definiția, scopul și specificul memorizării",
        duration: "25 min",
        sections: [
          {
            title: "Definiția memorizării",
            content:
              "Memorizarea este o modalitate specifică de realizare a unor " +
              "activități didactice în educația timpurie, care are ca scop " +
              "formarea cunoștințelor și deprinderilor la preșcolar, " +
              "dezvoltând memoria, logica, atenția, gândirea și vocabularul.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Memorizarea** este o modalitate specifică de realizare " +
                  "a unor activități didactice **în educația timpurie**, " +
                  "care are ca scop **formarea cunoștințelor și deprinderilor** " +
                  "la preșcolar, dezvoltând **memoria**, **logica**, " +
                  "**atenția**, **gândirea** și **vocabularul**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Definiția trebuie să conțină: (1) «modalitate specifică», " +
                    "(2) «în educația timpurie», (3) scopul — formarea " +
                    "cunoștințelor și deprinderilor. Pentru definiție primești 5 puncte!",
                },
              },
            ],
          },
          {
            title: "Diferențierea pe grupe de vârstă",
            content:
              "Grupa mică: 1 strofă. Grupa mijlocie: 2 strofe. " +
              "Grupa mare: 3 strofe.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Numărul de strofe memorate variază în funcție de " +
                  "grupa de vârstă:\n\n" +
                  "| Grupă | Vârstă | Nr. strofe |\n" +
                  "|-------|--------|------------|\n" +
                  "| Mică | 3-4 ani | **1 strofă** |\n" +
                  "| Mijlocie | 4-5 ani | **2 strofe** |\n" +
                  "| Mare | 5-6 ani | **3 strofe** |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Dacă la examen primești grupa mare (5-6 ani), " +
                    "trebuie să descrii memorizarea tuturor celor 3 strofe. " +
                    "Dacă primești grupa mică, descrii doar o singură strofă — " +
                    "eseul e mai scurt, dar structura e aceeași.",
                },
              },
            ],
          },
          {
            title: "Domenii experiențiale",
            content:
              "Memorizarea se poate realiza la DLC (Limbă și comunicare) " +
              "sau la DOS (Om și societate).",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Memorizarea se poate realiza la două domenii " +
                  "experiențiale:\n\n" +
                  "1. **DLC** — Domeniul Limbă și comunicare, " +
                  "Educarea limbajului\n" +
                  "   - Poezii despre natură, anotimpuri, familie\n" +
                  "   - Majoritatea poeziilor din programă\n\n" +
                  "2. **DOS** — Domeniul Om și societate, " +
                  "Educație pentru societate\n" +
                  "   - Poezii cu morală, despre igienă, educație rutieră\n" +
                  "   - Ex: «Sunt curat ca ghiocelul», «Doi frați cuminți»",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen, cerința poate specifica domeniul DLC sau DOS. " +
                    "Dacă primești DOS, alege o poezie cu morală (igienă, " +
                    "comportament, educație rutieră). Dacă primești DLC, " +
                    "alege o poezie despre natură, anotimpuri sau familie.",
                },
              },
            ],
          },
          {
            title: "Poezii recomandate pe grupe de vârstă",
            content:
              "Poeziile se regăsesc la pagina 240 în Piramida Cunoașterii. " +
              "Fiecare poezie corespunde unei teme anuale de studiu.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Poeziile recomandate se regăsesc la **pagina 240** " +
                  "în **Piramida Cunoașterii**.",
              },
              {
                kind: "text",
                text:
                  "**Grupa mică (1 strofă)**\n\n" +
                  "| Temă anuală | Poezie | Autor |\n" +
                  "|-------------|--------|-------|\n" +
                  "| Cine sunt/suntem | Prima zi de grădiniță | Lidia Constantinescu |\n" +
                  "| Cum exprimăm ceea ce simțim | Mamei | Elena Dragoș |\n" +
                  "| Când, cum și de ce se întâmplă | Ninge | Otilia Cazimir |\n" +
                  "| DOS — Educație pentru societate | Sunt curat ca ghiocelul | Grigore Vieru |",
              },
              {
                kind: "text",
                text:
                  "**Grupa mijlocie (2 strofe)**\n\n" +
                  "| Temă anuală | Poezie | Autor |\n" +
                  "|-------------|--------|-------|\n" +
                  "| Cine sunt/suntem | Dorotiniță, te-ai trezit | Viorel Cosma |\n" +
                  "| Cum exprimăm ceea ce simțim | Mamei | Elena Dragoș |\n" +
                  "| Când, cum și de ce se întâmplă | Ghiocelul / Primăvara | Sorin Comăniță / Elena Dragoș |\n" +
                  "| DOS | Puișorul Moțat / Și degetele | Elena Farago / George Coșbuc |",
              },
              {
                kind: "text",
                text:
                  "**Grupa mare (3 strofe)**\n\n" +
                  "| Temă anuală | Poezie | Autor |\n" +
                  "|-------------|--------|-------|\n" +
                  "| Cine sunt/suntem | Doi frați cuminți | Elena Farago |\n" +
                  "| Cum exprimăm ceea ce simțim | Mama / Lumea ta copilărie | Virgil Carianopol / Elena Dragoș |\n" +
                  "| DOS | Doi frați cuminți / Să fim politicoși | Elena Farago / Elena Dragoș |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Dacă la examen nu-ți amintești titlul exact al poeziei, " +
                    "inventează un titlu care se potrivește cu tema anuală. " +
                    "Nu lăsa activitatea fără titlu! Titlul trebuie să " +
                    "corespundă temei anuale de studiu.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Asociere temă — poezie (grupa mică)",
            description:
              "Tema «Cine sunt/suntem» → «Prima zi de grădiniță» de Lidia Constantinescu. " +
              "Tema «Cum exprimăm ceea ce simțim» → «Mamei» de Elena Dragoș. " +
              "DOS (educație pentru societate) → «Sunt curat ca ghiocelul» de Grigore Vieru.",
          },
          {
            title: "Doi frați cuminți — poezie universală",
            description:
              "«Doi frați cuminți» de Elena Farago merge atât la DLC " +
              "(tema «Cine sunt/suntem»), cât și la DOS " +
              "(educație pentru societate) — e o poezie cu morală.",
          },
        ],
        keyPoints: [
          {
            text: "Memorizarea = modalitate specifică, scop: formarea cunoștințelor și deprinderilor, dezvoltând memoria, logica, atenția, gândirea, vocabularul",
            important: true,
          },
          {
            text: "Număr strofe: mică = 1, mijlocie = 2, mare = 3",
            important: true,
          },
          {
            text: "Domenii: DLC (limbă și comunicare) sau DOS (om și societate)",
          },
          {
            text: "Poeziile se găsesc la p. 240 în Piramida Cunoașterii",
          },
          {
            text: "Fiecare poezie corespunde unei teme anuale de studiu (Cine sunt/suntem, Cum exprimăm ceea ce simțim, Când/cum/de ce se întâmplă)",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-dlc-mem-mq1-1",
              type: "multiple-choice",
              question:
                "Ce dezvoltă memorizarea la preșcolari?",
              options: [
                "Doar memoria și vocabularul",
                "Memoria, logica, atenția, gândirea și vocabularul",
                "Doar capacitatea de a recita poezii",
                "Capacitatea de analiză și identificare",
              ],
              correctIndex: 1,
              explanation:
                "Memorizarea dezvoltă memoria, logica, atenția, gândirea " +
                "și vocabularul — toate cinci capacitățile trebuie menționate.",
            },
            {
              id: "edu-ped-dlc-mem-mq1-2",
              type: "true-false",
              question:
                "La grupa mică se memorează 2 strofe ale unei poezii.",
              correct: false,
              explanation:
                "La grupa mică se memorează doar 1 strofă. " +
                "2 strofe sunt pentru grupa mijlocie.",
            },
            {
              id: "edu-ped-dlc-mem-mq1-3",
              type: "fill-blank",
              question:
                "La grupa mare se memorează _______ strofe ale unei poezii.",
              correctAnswers: [
                "3",
                "trei",
                "Trei",
                "TREI",
              ],
              explanation:
                "La grupa mare (5-6 ani) se memorează 3 strofe.",
            },
            {
              id: "edu-ped-dlc-mem-mq1-4",
              type: "multiple-choice",
              question:
                "La ce domenii experiențiale se poate realiza memorizarea?",
              options: [
                "Doar la DLC (Limbă și comunicare)",
                "La DLC și DOS (Om și societate)",
                "La Științe și DLC",
                "La toate cele 5 domenii experiențiale",
              ],
              correctIndex: 1,
              explanation:
                "Memorizarea se realizează la DLC (Limbă și comunicare, " +
                "Educarea limbajului) sau la DOS (Om și societate, " +
                "Educație pentru societate).",
            },
            {
              id: "edu-ped-dlc-mem-mq1-5",
              type: "true-false",
              question:
                "Poezia «Doi frați cuminți» de Elena Farago poate fi folosită atât la DLC, cât și la DOS.",
              correct: true,
              explanation:
                "Da, «Doi frați cuminți» merge atât la DLC (tema " +
                "«Cine sunt/suntem») cât și la DOS (educație pentru " +
                "societate), fiind o poezie cu morală.",
            },
            {
              id: "edu-ped-dlc-mem-mq1-6",
              type: "multiple-choice",
              question:
                "Ce poezie se recomandă la grupa mică, tema «Când, cum și de ce se întâmplă»?",
              options: [
                "Mamei de Elena Dragoș",
                "Doi frați cuminți de Elena Farago",
                "Ninge de Otilia Cazimir",
                "Dorotiniță, te-ai trezit de Viorel Cosma",
              ],
              correctIndex: 2,
              explanation:
                "La grupa mică, tema «Când, cum și de ce se întâmplă», " +
                "se recomandă «Ninge» de Otilia Cazimir.",
            },
            {
              id: "edu-ped-dlc-mem-mq1-7",
              type: "multiple-choice",
              question:
                "La ce pagină din Piramida Cunoașterii se regăsesc poeziile recomandate pentru memorizare?",
              options: [
                "Pagina 200",
                "Pagina 218",
                "Pagina 240",
                "Pagina 260",
              ],
              correctIndex: 2,
              explanation:
                "Poeziile recomandate se găsesc la pagina 240 " +
                "în Piramida Cunoașterii.",
            },
            {
              id: "edu-ped-dlc-mem-mq1-8",
              type: "true-false",
              question:
                "Dacă la examen primești domeniul DOS, trebuie să alegi o poezie despre natură și anotimpuri.",
              correct: false,
              explanation:
                "La DOS (Om și societate) alegi o poezie cu morală — " +
                "despre igienă, comportament, educație rutieră. " +
                "Poeziile despre natură și anotimpuri sunt pentru DLC.",
            },
            {
              id: "edu-ped-dlc-mem-mq1-9",
              type: "multiple-choice",
              question:
                "La ce temă anuală de studiu se potrivește poezia «Sunt curat ca ghiocelul» de Grigore Vieru?",
              options: [
                "Cine sunt/suntem",
                "Cum exprimăm ceea ce simțim",
                "Când, cum și de ce se întâmplă",
                "DOS — Educație pentru societate",
              ],
              correctIndex: 3,
              explanation:
                "«Sunt curat ca ghiocelul» de Grigore Vieru este o poezie " +
                "cu morală (igienă), potrivită pentru DOS — Educație " +
                "pentru societate.",
            },
            {
              id: "edu-ped-dlc-mem-mq1-10",
              type: "fill-blank",
              question:
                "Memorizarea este o _______ specifică de realizare a unor activități didactice în educația timpurie.",
              correctAnswers: [
                "modalitate",
                "Modalitate",
                "MODALITATE",
              ],
              explanation:
                "Memorizarea este o modalitate specifică — acesta este " +
                "termenul-cheie din definiție.",
            },
          ],
        },
      },
      {
        id: "memorizare-eseu",
        title: "Model complet de eseu — Doi frați cuminți",
        duration: "30 min",
        sections: [
          {
            title: "Cerința-model",
            content:
              "Prezentați o activitate de memorizare ca una dintre " +
              "modalitățile specifice de realizare a activităților didactice " +
              "în educația timpurie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Cerința completă:** Prezentați o activitate de memorizare " +
                  "ca una dintre modalitățile specifice de realizare a " +
                  "activităților didactice în educația timpurie, având în vedere " +
                  "următoarele repere:\n\n" +
                  "1. Definirea conceptului de activitate de memorizare\n" +
                  "2. Prezentarea desfășurării unei activități de memorizare — " +
                  "pentru grupa de vârstă **5-6 ani**, la domeniul experiențial " +
                  "**Limbă și comunicare, Educarea limbajului**",
              },
            ],
          },
          {
            title: "Introducerea în activitate (imagini sugestive)",
            content:
              "Educatoarea introduce preșcolarii în activitate prin " +
              "aducerea unor imagini sugestive din poezie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Informații organizatorice:**\n" +
                  "- Domeniu: Limbă și comunicare, Educarea limbajului\n" +
                  "- Tema anuală: «Cine sunt/suntem?»\n" +
                  "- Poezia: «Doi frați cuminți» de Elena Farago\n" +
                  "- Grupa: 5-6 ani (grupa mare) — 3 strofe\n" +
                  "- Mijloace de învățământ: imagini sugestive din poezie",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Elementul-surpriză la memorizare sunt **imagini sugestive** " +
                    "din poezie (nu coș cu obiecte ca la observare, " +
                    "nu scrisoare ca la convorbire, nu tablou ca la lectura " +
                    "după imagini).",
                },
              },
              {
                kind: "text",
                text:
                  "Educatoarea va introduce preșcolarii în activitate " +
                  "prin aducerea unor **imagini sugestive** din conținutul " +
                  "poeziei.\n\n" +
                  "Preșcolarii vor observa imaginile și vor discuta " +
                  "despre ceea ce văd, creând astfel contextul pentru " +
                  "învățarea poeziei.",
              },
            ],
          },
          {
            title: "Anunțarea titlului și autorului",
            content:
              "Educatoarea anunță titlul și autorul poeziei, " +
              "iar preșcolarii îl vor repeta.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Educatoarea va anunța **titlul și autorul** poeziei, " +
                  "iar preșcolarii îl vor repeta.\n\n" +
                  "**Exemplu:** «Astăzi vom învăța poezia «Doi frați cuminți» " +
                  "de Elena Farago. Haideți să repetăm împreună titlul!»",
              },
            ],
          },
          {
            title: "Recitarea model și explicarea cuvintelor",
            content:
              "Educatoarea recită poezia model, explică cuvintele " +
              "necunoscute și formulează propoziții cu acestea.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Educatoarea va **recita poezia model**, va **explica " +
                  "cuvintele necunoscute** preșcolarilor și va **formula " +
                  "propoziții** cu acestea.\n\n" +
                  "**Model de poezie — Doi frați cuminți (Elena Farago):**\n\n" +
                  "> *Noi suntem doi frații-n casă*\n" +
                  "> *Și nu ne certăm deloc,*\n" +
                  "> *Și suntem tăcuți la masă*\n" +
                  "> *Și cu minți în orice loc.*",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Nu trebuie să scrii poezia propriu-zisă la examen — " +
                    "nu e proiect didactic! Menționezi doar titlul, autorul " +
                    "și descrii pașii metodici.",
                },
              },
            ],
          },
          {
            title: "Împărțirea pe strofe și recitarea vers cu vers",
            content:
              "Se împarte poezia pe strofe, se recită primul vers, " +
              "apoi al doilea, se leagă, și se continuă.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Se va împărți poezia pe **strofe sau secvențe logice**.\n\n" +
                  "**Metoda recitării vers cu vers (legarea):**\n\n" +
                  "1. Se recită **primul vers** — preșcolarii repetă\n" +
                  "2. Se recită **al doilea vers** — preșcolarii repetă\n" +
                  "3. Se leagă **primul cu al doilea vers** — " +
                  "preșcolarii recită împreună\n" +
                  "4. Se recită **al treilea vers** — preșcolarii repetă\n" +
                  "5. Se leagă **primul, al doilea și al treilea vers**\n" +
                  "6. Se continuă până la ultimul vers din strofă\n" +
                  "7. Se recită **întreaga strofă**",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen trebuie să descrii metoda legării: " +
                    "nu sari direct la «se recită întreaga strofă». " +
                    "Arată procesul pas cu pas: vers 1, vers 2, legare " +
                    "1+2, vers 3, legare 1+2+3... apoi toată strofa.",
                },
              },
            ],
          },
          {
            title: "Recitarea celorlalte strofe (grupa mijlocie și mare)",
            content:
              "La fel se va proceda cu celelalte strofe, urmând " +
              "ca la final să se recite întreaga poezie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Pentru grupa mică (1 strofă):** se oprește după " +
                  "recitarea întregii strofe.\n\n" +
                  "**Pentru grupa mijlocie și mare:** la fel se va proceda " +
                  "și cu celelalte strofe (strofa a doua, respectiv " +
                  "a treia), urmând ca la final să se recite " +
                  "**întreaga poezie**.\n\n" +
                  "**Grup mare (3 strofe):** Strofele se leagă progresiv:\n" +
                  "- Strofa 1 (vers cu vers → toată strofa)\n" +
                  "- Strofa 2 (vers cu vers → toată strofa) → " +
                  "Legare: Strofa 1 + Strofa 2\n" +
                  "- Strofa 3 (vers cu vers → toată strofa) → " +
                  "Legare: Strofa 1 + Strofa 2 + Strofa 3\n" +
                  "- **Recitare finală**: întreaga poezie (toate 3 strofele)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Dacă la examen ai grupa mică, eseul e mai scurt — " +
                    "nu mai scrii despre celelalte strofe. Scrii doar: " +
                    "«Se va recita întreaga strofă». Pentru mijlocie și mare " +
                    "adaugi: «La fel se va proceda cu celelalte strofe, " +
                    "urmând ca la final să se recite întreaga poezie».",
                },
              },
            ],
          },
          {
            title: "Încheierea activității",
            content:
              "Educatoarea face aprecieri verbale și oferă stimulente " +
              "sau recompense.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "În încheierea activității, educatoarea face **aprecieri " +
                  "verbale** și oferă **stimulente sau recompense**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Dacă uiți grupa de vârstă sau tema anuală la început, " +
                    "le poți trece la final — nu e o greșeală gravă. " +
                    "Important e să nu lipsească din eseu.",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model complet de eseu — Grupa mare (5-6 ani), Doi frați cuminți",
                  source: "claude",
                  content:
                    "**Memorizarea** este o modalitate specifică de realizare " +
                    "a unor activități didactice **în educația timpurie**, " +
                    "care are ca scop **formarea cunoștințelor și deprinderilor** " +
                    "la preșcolar, dezvoltând memoria, logica, atenția, " +
                    "gândirea și vocabularul.\n\n" +
                    "Pentru a desfășura activitatea de memorizare la grupa de " +
                    "vârstă **5-6 ani**, domeniul experiențial **Limbă și " +
                    "comunicare**, Educarea limbajului, având ca temă anuală " +
                    "de studiu **«Cine sunt/suntem?»**, poezia **«Doi frați " +
                    "cuminți»** de Elena Farago, educatoarea va introduce " +
                    "preșcolarii în activitate prin aducerea unor **imagini " +
                    "sugestive** din conținutul poeziei.\n\n" +
                    "Educatoarea va anunța **titlul și autorul** poeziei, " +
                    "iar preșcolarii îl vor repeta.\n\n" +
                    "Educatoarea va **recita poezia model**, va **explica " +
                    "cuvintele necunoscute** preșcolarilor și va **formula " +
                    "propoziții** cu acestea.\n\n" +
                    "Se va împărți poezia pe **strofe sau secvențe logice**.\n\n" +
                    "Se va recita **primul vers**. Apoi **al doilea vers**. " +
                    "Se vor lega **primul cu al doilea vers**. Se continuă cu " +
                    "**al treilea vers**, legându-l cu precedentele, și ulterior " +
                    "se va recita **întreaga primă strofă**.\n\n" +
                    "La fel se va proceda și cu **a doua** și **a treia strofă**, " +
                    "urmând ca la final să se recite **întreaga poezie**.\n\n" +
                    "În încheierea activității, educatoarea face **aprecieri " +
                    "verbale** și oferă **stimulente sau recompense**.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Doi frați cuminți — DLC + DOS",
            description:
              "Poezia «Doi frați cuminți» de Elena Farago funcționează " +
              "atât la DLC (tema «Cine sunt/suntem»), cât și la DOS " +
              "(educație pentru societate). Înveți un singur eseu, " +
              "schimbi doar domeniul în funcție de cerință.",
          },
          {
            title: "Adaptare la grupa mică",
            description:
              "La grupa mică (3-4 ani): aceeași structură, dar " +
              "eseul se oprește la «Se va recita întreaga strofă» " +
              "(o singură strofă). Nu mai adaugi pașii pentru " +
              "celelalte strofe.",
          },
          {
            title: "Adaptare la DOS — Sunt curat ca ghiocelul",
            description:
              "Dacă cerința e la DOS, alegi o poezie cu morală: " +
              "«Sunt curat ca ghiocelul» de Grigore Vieru (grupa mică), " +
              "«Puișorul Moțat» de Elena Farago (grupa mijlocie), " +
              "«Doi frați cuminți» de Elena Farago (grupa mare).",
          },
        ],
        keyPoints: [
          {
            text: "Eseul urmează: definiție + scop → introducere (imagini sugestive) → anunțare titlu/autor → recitare model + explicare cuvinte → împărțire pe strofe → recitare vers cu vers (metoda legării) → întreaga strofă → celelalte strofe → întreaga poezie → încheiere",
            important: true,
          },
          {
            text: "Metoda legării: vers 1 → vers 2 → legare 1+2 → vers 3 → legare 1+2+3 → ... → toată strofa",
            important: true,
          },
          {
            text: "Elementul-surpriză la memorizare = imagini sugestive din poezie (nu coș, nu scrisoare, nu tablou)",
          },
          {
            text: "Un singur eseu se poate adapta la orice grupă/domeniu: schimbi doar titlul poeziei, nr. strofe și domeniul",
          },
          {
            text: "Nu scrii poezia la examen — nu e proiect didactic, doar descrii pașii metodici",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-dlc-mem-mq2-1",
              type: "multiple-choice",
              question:
                "Ce aduce educatoarea ca element-surpriză la memorizare?",
              options: [
                "Un coș cu obiecte reale",
                "O scrisoare de la un personaj",
                "Imagini sugestive din poezie",
                "Un tablou cu o imagine",
              ],
              correctIndex: 2,
              explanation:
                "La memorizare, elementul-surpriză sunt imagini sugestive " +
                "din conținutul poeziei. Coșul e la observare, " +
                "scrisoarea e la convorbire, tabloul e la lectura după imagini.",
            },
            {
              id: "edu-ped-dlc-mem-mq2-2",
              type: "true-false",
              question:
                "După anunțarea titlului și autorului, preșcolarii îl vor repeta.",
              correct: true,
              explanation:
                "Da, educatoarea anunță titlul și autorul, iar " +
                "preșcolarii îl vor repeta — pas important în structură.",
            },
            {
              id: "edu-ped-dlc-mem-mq2-3",
              type: "multiple-choice",
              question:
                "Care este ordinea corectă în metoda legării?",
              options: [
                "Vers 1 → vers 2 → vers 3 → toată strofa",
                "Vers 1 → vers 2 → legare 1+2 → vers 3 → legare 1+2+3 → toată strofa",
                "Toată strofa → apoi vers cu vers",
                "Vers 1+2 → vers 3+4 → toată strofa",
              ],
              correctIndex: 1,
              explanation:
                "Metoda legării: vers 1, vers 2, legare 1+2, " +
                "vers 3, legare 1+2+3, și așa mai departe " +
                "până la întreaga strofă.",
            },
            {
              id: "edu-ped-dlc-mem-mq2-4",
              type: "fill-blank",
              question:
                "Educatoarea va recita poezia model, va explica cuvintele necunoscute și va formula _______ cu acestea.",
              correctAnswers: [
                "propoziții",
                "Propoziții",
                "PROPOZIȚII",
                "propozitii",
                "Propozitii",
                "PROPOZITII",
              ],
              explanation:
                "Educatoarea formulează propoziții cu cuvintele " +
                "necunoscute pentru a le clarifica sensul.",
            },
            {
              id: "edu-ped-dlc-mem-mq2-5",
              type: "true-false",
              question:
                "La examen trebuie să scrii textul complet al poeziei în eseu.",
              correct: false,
              explanation:
                "Nu! La examen nu scrii poezia — nu e proiect didactic. " +
                "Menționezi doar titlul, autorul și descrii pașii metodici.",
            },
            {
              id: "edu-ped-dlc-mem-mq2-6",
              type: "multiple-choice",
              question:
                "Ce face educatoarea imediat după recitarea model?",
              options: [
                "Trece la recitarea vers cu vers",
                "Explică cuvintele necunoscute și formulează propoziții",
                "Cere preșcolarilor să recite toată poezia",
                "Împarte imagini sugestive",
              ],
              correctIndex: 1,
              explanation:
                "După recitarea model, educatoarea explică cuvintele " +
                "necunoscute și formulează propoziții cu acestea. " +
                "Abia apoi se trece la împărțirea pe strofe și recitare.",
            },
            {
              id: "edu-ped-dlc-mem-mq2-7",
              type: "fill-blank",
              question:
                "Poezia se împarte pe strofe sau _______ logice.",
              correctAnswers: [
                "secvențe",
                "Secvențe",
                "SECVENȚE",
                "secvente",
                "Secvente",
                "SECVENTE",
              ],
              explanation:
                "Se va împărți poezia pe strofe sau secvențe logice.",
            },
            {
              id: "edu-ped-dlc-mem-mq2-8",
              type: "true-false",
              question:
                "Pentru grupa mică, după recitarea primei strofe, se trece la a doua strofă.",
              correct: false,
              explanation:
                "La grupa mică se memorează doar 1 strofă. " +
                "Nu se trece la a doua strofă.",
            },
            {
              id: "edu-ped-dlc-mem-mq2-9",
              type: "multiple-choice",
              question:
                "Ce se întâmplă la finalul activității de memorizare (grupa mare)?",
              options: [
                "Se recită doar ultima strofă",
                "Se desenează personajele din poezie",
                "Se recită întreaga poezie (toate 3 strofele)",
                "Se scrie poezia pe tablă",
              ],
              correctIndex: 2,
              explanation:
                "La grupa mare, la final se recită întreaga poezie " +
                "(toate cele 3 strofe legate împreună).",
            },
            {
              id: "edu-ped-dlc-mem-mq2-10",
              type: "multiple-choice",
              question:
                "Dacă la examen uiți să scrii tema anuală de studiu la început, ce faci?",
              options: [
                "Nu mai scrii deloc, e prea târziu",
                "Tragi linii și inserezi la început",
                "O treci la final — nu e o greșeală gravă",
                "Inventezi o altă temă complet diferită",
              ],
              correctIndex: 2,
              explanation:
                "Dacă uiți grupa de vârstă sau tema anuală la început, " +
                "le poți trece la final — nu e o greșeală gravă. " +
                "Nu tragi linii, nu depunctează mult.",
            },
          ],
        },
      },
    ],
    transcript:
      "## Memorizarea\n\n" +
      "### Definiție\n" +
      "Memorizarea este o modalitate specifică de realizare a unor activități didactice " +
      "în educația timpurie, care are ca scop formarea cunoștințelor și deprinderilor " +
      "la preșcolar, dezvoltând memoria, logica, atenția, gândirea și vocabularul.\n\n" +
      "### Număr strofe\n" +
      "Mică: 1 strofă | Mijlocie: 2 strofe | Mare: 3 strofe\n\n" +
      "### Domenii\n" +
      "DLC (Limbă și comunicare) sau DOS (Om și societate)\n\n" +
      "### Poezii recomandate\n" +
      "Piramida Cunoașterii, p. 240. Fiecare poezie corespunde unei teme anuale.\n\n" +
      "### Pași eseu\n" +
      "Definiție + scop → introducere (imagini sugestive) → anunțare titlu/autor (preșcolarii repetă) " +
      "→ recitare model + explicare cuvinte necunoscute + formulare propoziții " +
      "→ împărțire pe strofe/secvențe logice → recitare vers cu vers (metoda legării: " +
      "v1, v2, legare 1+2, v3, legare 1+2+3...) → întreaga strofă " +
      "→ la fel cu celelalte strofe (mijlocie/mare) → întreaga poezie → încheiere",
    quiz: {
      topicId: "edu-ped-dlc-memorizare",
      questions: [
        {
          id: "edu-ped-dlc-mem-fq1",
          type: "multiple-choice",
          question:
            "Ce diferențiază memorizarea de povestirea educatoarei ca modalitate didactică?",
          options: [
            "La memorizare copiii învață o poezie vers cu vers, la povestire educatoarea narează o poveste",
            "Nu există nicio diferență între cele două",
            "La memorizare se folosesc tablouri, la povestire nu",
            "Memorizarea se face doar la grupa mare, povestirea la toate grupele",
          ],
          correctIndex: 0,
          explanation:
            "Memorizarea presupune învățarea unei poezii vers cu vers " +
            "(metoda legării), pe când povestirea educatoarei implică " +
            "nararea unei povești de către educatoare.",
        },
        {
          id: "edu-ped-dlc-mem-fq2",
          type: "multiple-choice",
          question:
            "Ce poezie se recomandă la grupa mare, tema «Cine sunt/suntem»?",
          options: [
            "Mamei de Elena Dragoș",
            "Doi frați cuminți de Elena Farago",
            "Ninge de Otilia Cazimir",
            "Prima zi de grădiniță de Lidia Constantinescu",
          ],
          correctIndex: 1,
          explanation:
            "La grupa mare, tema «Cine sunt/suntem», se recomandă " +
            "«Doi frați cuminți» de Elena Farago.",
        },
        {
          id: "edu-ped-dlc-mem-fq3",
          type: "multiple-choice",
          question:
            "Ce element-surpriză este specific activității de memorizare?",
          options: [
            "Un coș cu obiecte reale",
            "O scrisoare de la un personaj",
            "Un tablou cu o imagine complexă",
            "Imagini sugestive din conținutul poeziei",
          ],
          correctIndex: 3,
          explanation:
            "La memorizare, elementul-surpriză sunt imagini sugestive " +
            "din poezie. Coș = observare, scrisoare = convorbire, " +
            "tablou = lectura după imagini.",
        },
        {
          id: "edu-ped-dlc-mem-fq4",
          type: "fill-blank",
          question:
            "După recitarea model, educatoarea va explica cuvintele _______ preșcolarilor.",
          correctAnswers: [
            "necunoscute",
            "Necunoscute",
            "NECUNOSCUTE",
          ],
          explanation:
            "Educatoarea explică cuvintele necunoscute și formulează " +
            "propoziții cu acestea.",
        },
        {
          id: "edu-ped-dlc-mem-fq5",
          type: "multiple-choice",
          question:
            "O educatoare primește cerința: memorizare, grupa mijlocie, DLC, tema «Când, cum și de ce se întâmplă». Ce poezie poate alege?",
          options: [
            "Doi frați cuminți de Elena Farago",
            "Mamei de Elena Dragoș",
            "Ghiocelul de Sorin Comăniță",
            "Sunt curat ca ghiocelul de Grigore Vieru",
          ],
          correctIndex: 2,
          explanation:
            "La grupa mijlocie, DLC, tema «Când, cum și de ce se întâmplă», " +
            "se recomandă «Ghiocelul» de Sorin Comăniță (sau «Primăvara» " +
            "de Elena Dragoș).",
        },
        {
          id: "edu-ped-dlc-mem-fq6",
          type: "true-false",
          question:
            "La memorizare, educatoarea împarte poezia pe strofe ÎNAINTE de a o recita model.",
          correct: false,
          explanation:
            "Nu! Ordinea corectă: mai întâi educatoarea recită poezia model " +
            "și explică cuvintele necunoscute, apoi împarte poezia pe strofe.",
        },
        {
          id: "edu-ped-dlc-mem-fq7",
          type: "multiple-choice",
          question:
            "Ce metodă se folosește pentru învățarea versurilor?",
          options: [
            "Metoda Diagramei Venn",
            "Metoda legării (vers cu vers)",
            "Metoda Exploziei Stelare",
            "Metoda repovestirii",
          ],
          correctIndex: 1,
          explanation:
            "Se folosește metoda legării: vers 1, vers 2, legare 1+2, " +
            "vers 3, legare 1+2+3, și așa mai departe.",
        },
        {
          id: "edu-ped-dlc-mem-fq8",
          type: "fill-blank",
          question:
            "Memorizarea se poate realiza la DLC sau la domeniul _______ și societate.",
          correctAnswers: [
            "Om",
            "om",
            "OM",
          ],
          explanation:
            "Memorizarea se realizează la DLC (Limbă și comunicare) " +
            "sau la DOS (Om și societate).",
        },
        {
          id: "edu-ped-dlc-mem-fq9",
          type: "true-false",
          question:
            "Dacă la examen nu-ți amintești titlul exact al poeziei, poți inventa un titlu potrivit cu tema anuală.",
          correct: true,
          explanation:
            "Da! Dacă nu-ți amintești titlul exact, inventezi un titlu " +
            "care se potrivește cu tema anuală de studiu. " +
            "Important e să nu lași activitatea fără titlu.",
        },
        {
          id: "edu-ped-dlc-mem-fq10",
          type: "multiple-choice",
          question:
            "Ce se întâmplă la finalul activității de memorizare?",
          options: [
            "Educatoarea recită singură poezia încă o dată",
            "Se recită întreaga poezie, apoi aprecieri verbale și recompense",
            "Se face Diagrama Venn cu versurile",
            "Se desenează personajele din poezie",
          ],
          correctIndex: 1,
          explanation:
            "La final se recită întreaga poezie, apoi educatoarea face " +
            "aprecieri verbale și oferă stimulente/recompense.",
        },
      ],
    },
  },
];
