import { Lesson } from "@/types/lectii";

export const eduPedagogieDlcLecturaRepovestireLessons: Lesson[] = [
  {
    topicId: "edu-ped-dlc-lectura-repovestire",
    title:
      "Lectura educatoarei și Repovestirea — modele de eseu (Subiectul 3)",
    duration: "55 min",
    objectives: [
      "Să definească lectura educatoarei ca modalitate specifică DLC în educația timpurie",
      "Să descrie desfășurarea activității de lectură: captare, citire, explicare cuvinte, fixare",
      "Să definească repovestirea ca modalitate specifică DLC în educația timpurie",
      "Să descrie desfășurarea activității de repovestire pe bază de imagini",
      "Să diferențieze lectura, povestirea și repovestirea educatoarei",
      "Să adapteze numărul de imagini în funcție de grupa de vârstă (mică/mijlocie/mare)",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    chapters: [
      {
        id: "lectura-educatoarei",
        title: "Lectura educatoarei",
        duration: "25 min",
        sections: [
          {
            title: "Definiția lecturii educatoarei",
            content:
              "Lectura educatoarei este o modalitate specifică de realizare a unor " +
              "activități didactice în educația timpurie, având ca scop dezvoltarea " +
              "vocabularului și a limbajului, a gândirii, a atenției și a imaginației la preșcolari.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Lectura educatoarei** este o modalitate specifică de realizare a " +
                  "unor activități didactice **în educația timpurie**, având ca scop " +
                  "dezvoltarea **vocabularului** și a **limbajului**, a **gândirii**, " +
                  "a **atenției** și a **imaginației** la preșcolari.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Mereu includeți «în educația timpurie» în definiție — " +
                    "dacă lipsește, se scad puncte din cele 15 disponibile.",
                },
              },
              {
                kind: "text",
                text:
                  "La lectură, educatoarea **citește povestea dintr-o carte** specifică vârstei " +
                  "(spre deosebire de povestire, unde spune cu propriile cuvinte). " +
                  "Aceeași poveste poate fi predată prin **lectură** SAU prin **povestire** — " +
                  "sunt modalități diferite de realizare a activității.",
              },
            ],
          },
          {
            title: "Desfășurarea activității — model universal",
            content:
              "Structura eseului pentru lectură urmează aceiași pași ca la povestire, " +
              "cu o diferență importantă: după citire se explică cuvintele necunoscute.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Pașii eseului, în ordine:\n\n" +
                  "1. **Informații organizatorice:** domeniul experiențial **DLC** — " +
                  "Educarea limbajului, tema anuală de studiu (din cerință), subtema " +
                  "= titlul poveștii, nivelul de vârstă (din cerință)\n" +
                  "2. **Introducerea în activitate:** educatoarea aduce sub formă de " +
                  "surpriză un **personaj din poveste** (marionetă-personaj) care " +
                  "dorește să le spună preșcolarilor povestea sa\n" +
                  "3. **Citirea poveștii:** se va citi povestea de către educatoare, " +
                  "având o **tonalitate și intonație potrivită**, modelându-și vocea " +
                  "pentru a imita personajele\n" +
                  "4. **Explicarea cuvintelor necunoscute** (**SPECIFIC lecturii** — NU " +
                  "există la povestire): educatoarea va explica preșcolarilor cuvintele " +
                  "necunoscute și va **formula propoziții** cu acestea\n" +
                  "5. **Fixarea cunoștințelor** — metoda modernă **Explozia Stelară** " +
                  "(identică cu cea de la povestirea educatoarei)\n" +
                  "6. **Încheierea activității** — aprecieri verbale și stimulente",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Eseul este aproape identic cu cel de la povestire — se schimbă doar " +
                    "pasul 3 (citire în loc de expunere) și se adaugă pasul 4 (explicare " +
                    "cuvinte necunoscute). Învățați un singur model și îl adaptați.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Alegeți cărți cu cuvinte uzuale, potrivite vârstei. Explicarea cuvintelor " +
                    "necunoscute trebuie să fie scurtă și clară " +
                    "(ex: «gigant» = «mare», pus în context cu propoziții).",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model complet de eseu — Grupa mare (5-6 ani), Crăiasa Zăpezii",
                  source: "claude",
                  content:
                    "**Lectura educatoarei** este o modalitate specifică de realizare " +
                    "a unor activități didactice **în educația timpurie**, având ca scop " +
                    "dezvoltarea **vocabularului** și a **limbajului**, a **gândirii**, " +
                    "a **atenției** și a **imaginației** la preșcolari.\n\n" +
                    "Pentru a desfășura activitatea de lectură a educatoarei, la " +
                    "domeniul experiențial **Limbă și comunicare** — Educarea limbajului, " +
                    "având ca temă anuală de studiu **«Când, cum și de ce se întâmplă?»**, " +
                    "subtema **«Crăiasa Zăpezii»** de Hans Christian Andersen, pentru " +
                    "grupa de **5-6 ani**, educatoarea va introduce preșcolarii în " +
                    "activitate aducând sub formă de surpriză un **personaj din poveste** " +
                    "care dorește să le spună preșcolarilor povestea sa.\n\n" +
                    "Se va **citi povestea** de către educatoare, având o **tonalitate** " +
                    "și **intonație potrivită**, modelându-și vocea pentru a imita " +
                    "personajele.\n\n" +
                    "După citirea poveștii, educatoarea va explica preșcolarilor " +
                    "**cuvintele necunoscute** și va **formula propoziții** cu acestea, " +
                    "pentru a se asigura că toți preșcolarii au înțeles.\n\n" +
                    "Se va aplica metoda modernă **Explozia Stelară** pentru fixarea " +
                    "cunoștințelor, unde preșcolarii grupei mari vor fi împărțiți " +
                    "în **5 echipe**. Din fiecare echipă se va alege un reprezentant " +
                    "care va extrage una din cele cinci întrebări: **«Cine?», «Unde?», " +
                    "«De ce?», «Când?» și «Ce?»**. Pe baza acestora, preșcolarii vor " +
                    "avea de reformulat întrebarea extrasă în conformitate cu povestea.\n\n" +
                    "La expirarea timpului, preșcolarii își vor adresa întrebări între " +
                    "ei și vor plasa răspunsurile, ilustrate în **imagini**, pe steluța " +
                    "corespunzătoare întrebării, din jurul steluței mari unde se află " +
                    "**tema centrală**. Steluțele sunt plasate frontal pe **tabla magnetică**.\n\n" +
                    "Educatoarea face **aprecieri verbale** asupra modului de implicare " +
                    "la activitate și oferă **stimulente**.",
                },
              },
            ],
          },
          {
            title: "Diferența cheie: Lectură vs. Povestire",
            content:
              "La povestirea educatoarei, educatoarea spune povestea cu propriile cuvinte " +
              "și folosește marionete — povestea este filtrată prin educatoare, deci NU se " +
              "explică cuvinte necunoscute. La lectura educatoarei, educatoarea citește " +
              "din carte, deci se explică cuvinte necunoscute după citire.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "| Aspect | Povestirea educatoarei | Lectura educatoarei |\n" +
                  "|--------|----------------------|---------------------|\n" +
                  "| Mod de expunere | Cu propriile cuvinte + marionete | Citește din carte |\n" +
                  "| Cuvinte necunoscute | NU se explică (povestea e filtrată) | DA — se explică după citire |\n" +
                  "| Restul structurii | Identic | Identic |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "La povestire, educatoarea a **filtrat** povestea prin propriile " +
                    "cuvinte, adaptând vocabularul la nivelul copiilor — de ce i-ar zice " +
                    "un cuvânt necunoscut? La lectură, citește din carte, deci pot apărea " +
                    "cuvinte pe care copiii nu le cunosc.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Model de captare a atenției",
            description:
              "Educatoarea aduce sub formă de surpriză un **personaj din poveste** " +
              "(marionetă-personaj) care dorește să le spună preșcolarilor povestea sa.",
          },
          {
            title: "Model de citire",
            description:
              "Se va **citi povestea** de către educatoare, având o **tonalitate și " +
              "intonație potrivită**, modelându-și vocea pentru a imita personajele.",
          },
          {
            title: "Model de explicare a cuvintelor",
            description:
              "Educatoarea va explica preșcolarilor **cuvintele necunoscute** și va " +
              "**formula propoziții** cu acestea (ex: «gigant» = «mare»).",
          },
        ],
        keyPoints: [
          {
            text: "Lectura educatoarei = educatoarea CITEȘTE povestea din carte",
            important: true,
          },
          {
            text: "Se explică cuvinte necunoscute după citire (diferența față de povestire)",
            important: true,
          },
          {
            text: "Restul structurii este identic cu povestirea educatoarei",
          },
          {
            text: "Se termină cu metoda Explozia Stelară (identică la toate cele 3 modalități)",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-dlc-lr-mq1-1",
              type: "multiple-choice",
              question:
                "Ce face educatoarea în cadrul lecturii educatoarei?",
              options: [
                "Spune povestea cu propriile cuvinte",
                "Citește povestea dintr-o carte",
                "Îi pune pe copii să citească",
                "Dramatizează povestea pe roluri",
              ],
              correctIndex: 1,
              explanation:
                "La lectura educatoarei, educatoarea CITEȘTE povestea dintr-o carte " +
                "specifică vârstei, spre deosebire de povestire, unde spune cu propriile cuvinte.",
            },
            {
              id: "edu-ped-dlc-lr-mq1-2",
              type: "true-false",
              question:
                "La lectura educatoarei, educatoarea explică cuvintele necunoscute după citirea poveștii.",
              correct: true,
              explanation:
                "Da, explicarea cuvintelor necunoscute este un pas specific lecturii educatoarei. " +
                "Educatoarea explică cuvintele necunoscute și formulează propoziții cu acestea.",
            },
            {
              id: "edu-ped-dlc-lr-mq1-3",
              type: "multiple-choice",
              question:
                "Care este scopul lecturii educatoarei, conform definiției?",
              options: [
                "Dezvoltarea abilităților motrice fine",
                "Dezvoltarea vocabularului, limbajului, gândirii, atenției și imaginației",
                "Formarea deprinderilor de citit-scris",
                "Dezvoltarea competențelor matematice",
              ],
              correctIndex: 1,
              explanation:
                "Lectura educatoarei are ca scop dezvoltarea vocabularului și a limbajului, " +
                "a gândirii, a atenției și a imaginației la preșcolari.",
            },
            {
              id: "edu-ped-dlc-lr-mq1-4",
              type: "true-false",
              question:
                "La povestirea educatoarei, se explică și cuvintele necunoscute, la fel ca la lectură.",
              correct: false,
              explanation:
                "La povestirea educatoarei NU se explică cuvinte necunoscute, deoarece " +
                "educatoarea a filtrat deja povestea prin propriile cuvinte, adaptând " +
                "vocabularul la nivelul copiilor. Explicarea cuvintelor necunoscute " +
                "este specifică DOAR lecturii.",
            },
            {
              id: "edu-ped-dlc-lr-mq1-5",
              type: "fill-blank",
              question:
                "După citirea poveștii, educatoarea va explica preșcolarilor cuvintele _______ și va formula propoziții cu acestea.",
              correctAnswers: [
                "necunoscute",
                "Necunoscute",
                "NECUNOSCUTE",
              ],
              explanation:
                "Educatoarea explică cuvintele necunoscute și formulează propoziții cu " +
                "acestea, pentru a se asigura că toți preșcolarii au înțeles conținutul.",
            },
            {
              id: "edu-ped-dlc-lr-mq1-6",
              type: "multiple-choice",
              question:
                "Ce element surpriză se folosește pentru introducerea în activitatea de lectură?",
              options: [
                "Un puzzle cu scena din poveste",
                "Un personaj din poveste (marionetă-personaj)",
                "Un videoclip cu povestea",
                "Un desen realizat de copii",
              ],
              correctIndex: 1,
              explanation:
                "Educatoarea introduce preșcolarii în activitate aducând sub formă de " +
                "surpriză un personaj din poveste (marionetă-personaj) care dorește " +
                "să le spună preșcolarilor povestea sa.",
            },
            {
              id: "edu-ped-dlc-lr-mq1-7",
              type: "multiple-choice",
              question:
                "La ce domeniu experiențial se încadrează lectura educatoarei?",
              options: [
                "Domeniul Om și societate (DOS)",
                "Domeniul Limbă și comunicare (DLC) — Educarea limbajului",
                "Domeniul Estetic și creativ (DEC)",
                "Domeniul Științe (DȘ)",
              ],
              correctIndex: 1,
              explanation:
                "Lectura educatoarei se încadrează la domeniul experiențial " +
                "Limbă și comunicare (DLC) — Educarea limbajului.",
            },
            {
              id: "edu-ped-dlc-lr-mq1-8",
              type: "true-false",
              question:
                "Metoda Explozia Stelară se aplică diferit la lectura educatoarei față de povestirea educatoarei.",
              correct: false,
              explanation:
                "Metoda Explozia Stelară se aplică identic la toate cele 3 modalități " +
                "(povestire, lectură, repovestire). Diferențierea se face doar între " +
                "grupa mare (5 echipe) și grupele mică/mijlocie (educatoarea pune întrebările).",
            },
            {
              id: "edu-ped-dlc-lr-mq1-9",
              type: "fill-blank",
              question:
                "Lectura educatoarei este o modalitate specifică de realizare a unor activități didactice în educația _______.",
              correctAnswers: [
                "timpurie",
                "Timpurie",
                "TIMPURIE",
              ],
              explanation:
                "Expresia «în educația timpurie» trebuie inclusă mereu în definiție. " +
                "Dacă lipsește, se scad puncte din cele 15 disponibile.",
            },
            {
              id: "edu-ped-dlc-lr-mq1-10",
              type: "multiple-choice",
              question:
                "Ce face educatoarea după ce citește povestea și explică cuvintele necunoscute?",
              options: [
                "Recitește povestea de la început",
                "Aplică metoda modernă Explozia Stelară pentru fixarea cunoștințelor",
                "Pune copiii să deseneze scene din poveste",
                "Distribuie fișe de lucru individuale",
              ],
              correctIndex: 1,
              explanation:
                "După explicarea cuvintelor necunoscute, se aplică metoda modernă " +
                "Explozia Stelară pentru fixarea cunoștințelor, identică cu cea de " +
                "la povestirea educatoarei.",
            },
          ],
        },
      },
      {
        id: "repovestirea",
        title: "Repovestirea",
        duration: "25 min",
        sections: [
          {
            title: "Definiția repovestirii",
            content:
              "Repovestirea este o modalitate specifică de realizare a unor " +
              "activități didactice în educația timpurie, care are ca scop " +
              "dezvoltarea și exersarea vorbirii sub toate aspectele sale, " +
              "dezvoltarea exprimării cursive și a imaginației la preșcolari.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Repovestirea** este o modalitate specifică de realizare a " +
                  "unor activități didactice **în educația timpurie**, care are ca " +
                  "scop **dezvoltarea și exersarea vorbirii** sub toate aspectele " +
                  "sale, dezvoltarea **exprimării cursive** și a **imaginației** " +
                  "la preșcolari.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Repovestirea este făcută de **COPII**, nu de educatoare! " +
                    "Copiii repovestesc ce a spus educatoarea (fie prin lectură, fie prin povestire). " +
                    "Tipul folosit la examen: **repovestirea pe bază de imagini**.",
                },
              },
              {
                kind: "text",
                text:
                  "Există **4 tipuri** de repovestire în teorie, dar la examen se cere " +
                  "doar **repovestirea pe bază de imagini**. Nu detaliați celelalte tipuri " +
                  "în eseu — mergeți direct pe structura cerută.",
              },
            ],
          },
          {
            title: "Desfășurarea activității — model universal",
            content:
              "Structura eseului pentru repovestire pe bază de imagini:",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Pașii eseului, în ordine:\n\n" +
                  "1. **Informații organizatorice:** domeniul experiențial **DLC** — " +
                  "Educarea limbajului, tema anuală de studiu (din cerință), **textul suport** " +
                  "= titlul poveștii, nivelul de vârstă (din cerință)\n" +
                  "2. **Introducerea în activitate:** educatoarea aduce sub formă de " +
                  "surpriză un **personaj din poveste** care dorește să vadă dacă " +
                  "preșcolarii **își amintesc** de povestea lui\n" +
                  "3. **Anunțarea titlului și autorului:** se va reaminti pe scurt " +
                  "conținutul poveștii\n" +
                  "4. **Repovestirea pe bază de imagini:** pe **tabla magnetică** se vor " +
                  "afișa imagini din poveste (celelalte sunt întoarse, se afișează " +
                  "câte o imagine pe rând). Fiecare episod va fi povestit de **alt " +
                  "preșcolar**. Dacă este cazul, alți preșcolari completează expunerea\n" +
                  "5. **Formule de incipit și final:** se va insista pe «A fost " +
                  "odată...» și pe **exprimare corectă și coerentă**\n" +
                  "6. **Repovestirea integrală:** **2-3 preșcolari** repovestesc " +
                  "folosindu-se **cât mai puțin** de imagini (grupa mare) / **cât mai " +
                  "mult** (grupa mică/mijlocie)\n" +
                  "7. **Fixarea cunoștințelor** — metoda modernă **Explozia Stelară** " +
                  "(identică cu povestirea și lectura educatoarei)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Toate cele 3 modalități (povestire, lectură, repovestire) au " +
                    "**același final** — Explozia Stelară. Învățați-l o singură dată " +
                    "și aplicați-l la toate.",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model complet de eseu — Grupa mare (5-6 ani), Crăiasa Zăpezii",
                  source: "claude",
                  content:
                    "**Repovestirea** este o modalitate specifică de realizare a " +
                    "unor activități didactice **în educația timpurie**, care are ca " +
                    "scop **dezvoltarea și exersarea vorbirii** sub toate aspectele " +
                    "sale, dezvoltarea **exprimării cursive** și a **imaginației** " +
                    "la preșcolari.\n\n" +
                    "Pentru a desfășura activitatea de repovestire, la domeniul " +
                    "experiențial **Limbă și comunicare** — Educarea limbajului, " +
                    "având ca temă anuală de studiu **«Când, cum și de ce se " +
                    "întâmplă?»**, textul suport **«Crăiasa Zăpezii»** de Hans " +
                    "Christian Andersen, pentru grupa de **5-6 ani**, educatoarea " +
                    "va introduce preșcolarii în activitate aducând sub formă de " +
                    "surpriză un **personaj din poveste** care dorește să vadă dacă " +
                    "preșcolarii își amintesc de povestea lui.\n\n" +
                    "Se va anunța **titlul și autorul poveștii** și se va reaminti " +
                    "pe scurt conținutul poveștii.\n\n" +
                    "Pe **tabla magnetică** se vor afișa imagini din poveste. " +
                    "Preșcolarii vor povesti episodul prezentat în imagine. Fiecare " +
                    "episod (corespunzător unei imagini) va fi povestit de către " +
                    "**alt preșcolar**. Dacă este cazul, vor fi solicitați și alți " +
                    "preșcolari să completeze expunerea.\n\n" +
                    "Se va insista pe folosirea **formulelor de incipit și final** " +
                    "și pe utilizarea unei **exprimări corecte și coerente**.\n\n" +
                    "Pentru a se realiza **repovestirea integrală**, vor fi " +
                    "solicitați **2-3 preșcolari** care vor repovesti folosindu-se " +
                    "**cât mai puțin** de imagini.\n\n" +
                    "Se va aplica metoda modernă **Explozia Stelară** pentru fixarea " +
                    "cunoștințelor, unde preșcolarii grupei mari vor fi împărțiți " +
                    "în **5 echipe**. Din fiecare echipă se va alege un reprezentant " +
                    "care va extrage una din cele cinci întrebări: **«Cine?», " +
                    "«Unde?», «De ce?», «Când?» și «Ce?»**. Pe baza acestora, " +
                    "preșcolarii vor avea de reformulat întrebarea extrasă în " +
                    "conformitate cu povestea: «Cine sunt personajele din poveste?», " +
                    "«Unde se petrece acțiunea din poveste?», «Ce s-a întâmplat cu " +
                    "Kai?», «Când se petrece acțiunea?», «De ce s-a topit gheața " +
                    "din inima lui Kai?».\n\n" +
                    "La expirarea timpului, preșcolarii își vor adresa întrebări " +
                    "între ei și vor plasa răspunsurile, ilustrate în **imagini**, " +
                    "pe steluța corespunzătoare întrebării, din jurul steluței mari " +
                    "unde se află **tema centrală**. Steluțele sunt plasate frontal " +
                    "pe **tabla magnetică**.\n\n" +
                    "Educatoarea face **aprecieri verbale** asupra modului de " +
                    "implicare la activitate și oferă **stimulente**.",
                },
              },
            ],
          },
          {
            title: "Imagini pe grupe de vârstă",
            content:
              "Grupa mică (3-4 ani): 1-2 imagini mari — copiii se uită și zic ce văd. " +
              "Grupa mijlocie (4-5 ani): 3-4 imagini — ajutor moderat. " +
              "Grupa mare (5-6 ani): până la 5 imagini — copiii se folosesc cât mai puțin de ele.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "| Grupă | Nr. imagini | Dependența de imagini la repovestire |\n" +
                  "|-------|-------------|--------------------------------------|\n" +
                  "| Mică (3-4 ani) | 1-2 mari | Se bazează MULT pe imagini (se uită și zic ce văd) |\n" +
                  "| Mijlocie (4-5 ani) | 3-4 | Dependență moderată |\n" +
                  "| Mare (5-6 ani) | Până la 5 | Se bazează cât mai PUȚIN pe imagini |",
              },
              {
                kind: "text",
                text:
                  "**Atenție la distincție:** grupa mică are mai **puține** imagini (1-2, dar mari), " +
                  "însă copiii se **bazează mult** pe ele — se uită și zic ce văd. Grupa mare " +
                  "are mai **multe** imagini (până la 5), dar copiii trebuie să repovestească " +
                  "**cât mai puțin ajutați** de ele — cunosc deja povestea.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "**Nu** scrieți în eseu câte imagini folosiți. " +
                    "Scrieți doar: «folosindu-se **cât mai puțin** de imagini» (grupa mare) " +
                    "sau «folosindu-se **cât mai mult** de imagini» (grupa mică/mijlocie).",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Model de introducere — Repovestire",
            description:
              "Educatoarea aduce sub formă de surpriză un **personaj din poveste** " +
              "care dorește să vadă dacă preșcolarii **își amintesc** de povestea lui " +
              "(nu le mai zice povestea — vrea să vadă cu ce au rămas).",
          },
          {
            title: "Model de repovestire pe bază de imagini",
            description:
              "Pe **tabla magnetică** se afișează imagini din poveste, câte una pe " +
              "rând. Fiecare episod va fi povestit de **alt preșcolar**. Se insistă " +
              "pe **formule de incipit și final** și pe exprimare corectă.",
          },
          {
            title: "Model de repovestire integrală",
            description:
              "**2-3 preșcolari** repovestesc întreaga poveste, folosindu-se " +
              "**cât mai puțin** de imagini (la grupa mare).",
          },
        ],
        keyPoints: [
          {
            text: "Repovestirea este făcută de COPII, nu de educatoare",
            important: true,
          },
          {
            text: "La examen se cere repovestirea pe bază de imagini",
            important: true,
          },
          {
            text: "Grupa mare: cât mai puțin de imagini; Grupa mică/mijlocie: cât mai mult",
            important: true,
          },
          {
            text: "Se va insista pe formule de incipit/final și pe exprimare corectă",
          },
          {
            text: "2-3 preșcolari repovestesc integral la final",
          },
          {
            text: "Se termină cu metoda Explozia Stelară (identică la toate cele 3 modalități)",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-dlc-lr-mq2-1",
              type: "multiple-choice",
              question: "Cine realizează repovestirea?",
              options: [
                "Educatoarea, cu propriile cuvinte",
                "Copiii (preșcolarii)",
                "Un actor invitat",
                "Educatoarea, citind din carte",
              ],
              correctIndex: 1,
              explanation:
                "Repovestirea este făcută de copii. Ei repovestesc ce a spus " +
                "educatoarea, fie prin lectură, fie prin povestire.",
            },
            {
              id: "edu-ped-dlc-lr-mq2-2",
              type: "true-false",
              question:
                "La examen, repovestirea se face pe bază de imagini.",
              correct: true,
              explanation:
                "Există 4 tipuri de repovestire în teorie, dar la examen se cere " +
                "doar repovestirea pe bază de imagini.",
            },
            {
              id: "edu-ped-dlc-lr-mq2-3",
              type: "multiple-choice",
              question:
                "Ce scop are repovestirea, conform definiției?",
              options: [
                "Dezvoltarea competențelor digitale și STEM",
                "Dezvoltarea și exersarea vorbirii, exprimării cursive și imaginației",
                "Formarea deprinderilor de citit-scris",
                "Dezvoltarea gândirii logico-matematice",
              ],
              correctIndex: 1,
              explanation:
                "Repovestirea are ca scop dezvoltarea și exersarea vorbirii sub toate " +
                "aspectele sale, dezvoltarea exprimării cursive și a imaginației la preșcolari.",
            },
            {
              id: "edu-ped-dlc-lr-mq2-4",
              type: "true-false",
              question:
                "La grupa mare, copiii se folosesc cât mai mult de imaginile de pe tablă când repovestesc.",
              correct: false,
              explanation:
                "La grupa mare, copiii se folosesc cât mai PUȚIN de imagini. " +
                "La grupele mică și mijlocie se folosesc cât mai mult de imagini.",
            },
            {
              id: "edu-ped-dlc-lr-mq2-5",
              type: "fill-blank",
              question:
                "Repovestirea are ca scop dezvoltarea și exersarea _______ sub toate aspectele sale.",
              correctAnswers: [
                "vorbirii",
                "Vorbirii",
                "VORBIRII",
              ],
              explanation:
                "Repovestirea are ca scop dezvoltarea și exersarea vorbirii sub " +
                "toate aspectele sale, plus dezvoltarea exprimării cursive și a imaginației.",
            },
            {
              id: "edu-ped-dlc-lr-mq2-6",
              type: "multiple-choice",
              question:
                "Câte imagini se folosesc la grupa mică (3-4 ani)?",
              options: [
                "Până la 5 imagini mici",
                "1-2 imagini mari",
                "3-4 imagini medii",
                "Nu se folosesc imagini",
              ],
              correctIndex: 1,
              explanation:
                "La grupa mică se folosesc 1-2 imagini mari. Copiii se uită " +
                "în imagine și zic ce văd.",
            },
            {
              id: "edu-ped-dlc-lr-mq2-7",
              type: "multiple-choice",
              question:
                "Ce dorește personajul-surpriză la introducerea activității de repovestire?",
              options: [
                "Să le spună copiilor o poveste nouă",
                "Să vadă dacă preșcolarii își amintesc de povestea lui",
                "Să le citească din carte",
                "Să le învețe un cântec",
              ],
              correctIndex: 1,
              explanation:
                "La repovestire, personajul-surpriză dorește să vadă dacă preșcolarii " +
                "își amintesc de povestea lui. Nu le mai zice povestea, vrea să vadă " +
                "cu ce au rămas ei.",
            },
            {
              id: "edu-ped-dlc-lr-mq2-8",
              type: "true-false",
              question:
                "Fiecare episod din poveste este repovestit de același preșcolar.",
              correct: false,
              explanation:
                "Fiecare episod (corespunzător unei imagini) va fi povestit de către " +
                "ALT preșcolar. Dacă este cazul, vor fi solicitați și alți preșcolari " +
                "să completeze expunerea.",
            },
            {
              id: "edu-ped-dlc-lr-mq2-9",
              type: "fill-blank",
              question:
                "Se va insista pe folosirea formulelor de _______ și final.",
              correctAnswers: [
                "incipit",
                "încipit",
                "Incipit",
                "Încipit",
                "INCIPIT",
                "ÎNCIPIT",
              ],
              explanation:
                "Se va insista pe folosirea formulelor de incipit (ex: «A fost odată...») " +
                "și final, precum și pe utilizarea unei exprimări corecte și coerente.",
            },
            {
              id: "edu-ped-dlc-lr-mq2-10",
              type: "multiple-choice",
              question:
                "Câți preșcolari sunt solicitați pentru repovestirea integrală?",
              options: [
                "1 preșcolar",
                "2-3 preșcolari",
                "5 preșcolari (câte unul din fiecare echipă)",
                "Toți preșcolarii din grupă",
              ],
              correctIndex: 1,
              explanation:
                "Pentru a se realiza repovestirea integrală, vor fi solicitați " +
                "2-3 preșcolari care vor repovesti.",
            },
          ],
        },
      },
    ],
    transcript:
      "## Lectura educatoarei\n\n" +
      "### Definiție\n" +
      "Lectura educatoarei este o modalitate specifică de realizare a unor activități didactice " +
      "în educația timpurie, având ca scop dezvoltarea vocabularului și a limbajului, a gândirii, " +
      "a atenției și a imaginației la preșcolari.\n\n" +
      "### Desfășurare\n" +
      "- Informații organizatorice (DLC, tema anuală, subtema, vârsta)\n" +
      "- Introducere: surpriză cu personaj/marionetă\n" +
      "- Citirea poveștii cu tonalitate potrivită\n" +
      "- Explicarea cuvintelor necunoscute + propoziții\n" +
      "- Explozia Stelară (identică cu povestirea)\n\n" +
      "### Diferența față de povestire\n" +
      "Povestire = cu propriile cuvinte + marionete → NU se explică cuvinte\n" +
      "Lectură = citit din carte → DA se explică cuvinte necunoscute\n\n" +
      "---\n\n" +
      "## Repovestirea\n\n" +
      "### Definiție\n" +
      "Repovestirea este o modalitate specifică de realizare a unor activități didactice " +
      "în educația timpurie, care are ca scop dezvoltarea și exersarea vorbirii sub toate " +
      "aspectele sale, dezvoltarea exprimării cursive și a imaginației la preșcolari.\n\n" +
      "### Desfășurare\n" +
      "- Informații organizatorice (DLC, tema anuală, textul suport, vârsta)\n" +
      "- Introducere: personaj care vrea să vadă dacă își amintesc povestea\n" +
      "- Anunțare titlu + reamintire pe scurt conținut\n" +
      "- Repovestire pe bază de imagini (alt copil per episod)\n" +
      "- Formule de incipit/final, exprimare corectă\n" +
      "- Repovestire integrală (2-3 preșcolari)\n" +
      "- Explozia Stelară\n\n" +
      "### Imagini pe grupe\n" +
      "Mică: 1-2 mari | Mijlocie: 3-4 | Mare: până la 5 (cât mai puțin)",
    quiz: {
      topicId: "edu-ped-dlc-lectura-repovestire",
      questions: [
        {
          id: "edu-ped-dlc-lr-fq1",
          type: "multiple-choice",
          question:
            "Care este diferența principală între lectura și povestirea educatoarei?",
          options: [
            "Lectura se face cu marionete, povestirea fără",
            "La lectură educatoarea citește din carte, la povestire spune cu propriile cuvinte",
            "Lectura se face doar la grupa mare, povestirea la toate grupele",
            "La lectură nu se aplică Explozia Stelară",
          ],
          correctIndex: 1,
          explanation:
            "La lectura educatoarei, educatoarea citește dintr-o carte. " +
            "La povestirea educatoarei, educatoarea spune povestea cu propriile cuvinte " +
            "și folosește marionete.",
        },
        {
          id: "edu-ped-dlc-lr-fq2",
          type: "true-false",
          question:
            "Repovestirea este făcută de educatoare, care repovestește conținutul citit.",
          correct: false,
          explanation:
            "Repovestirea este făcută de COPII (preșcolari), nu de educatoare. " +
            "Copiii repovestesc ce a spus educatoarea, pentru a verifica înțelegerea.",
        },
        {
          id: "edu-ped-dlc-lr-fq3",
          type: "multiple-choice",
          question:
            "De ce NU se explică cuvinte necunoscute la povestirea educatoarei?",
          options: [
            "Pentru că povestea este prea scurtă",
            "Pentru că educatoarea a filtrat povestea prin propriile cuvinte, adaptând vocabularul",
            "Pentru că nu e timp suficient în activitate",
            "Pentru că preșcolarii cunosc deja toate cuvintele",
          ],
          correctIndex: 1,
          explanation:
            "Educatoarea a adaptat povestea la nivelul copiilor, filtrând-o prin propriile cuvinte. " +
            "De ce i-ar zice un cuvânt necunoscut, dacă ea alege cum spune povestea?",
        },
        {
          id: "edu-ped-dlc-lr-fq4",
          type: "fill-blank",
          question:
            "Repovestirea care se face la examen este pe bază de _______.",
          correctAnswers: [
            "imagini",
            "Imagini",
            "IMAGINI",
          ],
          explanation:
            "La examen se cere repovestirea pe bază de imagini, deși în teorie " +
            "există 4 tipuri de repovestire.",
        },
        {
          id: "edu-ped-dlc-lr-fq5",
          type: "multiple-choice",
          question:
            "Câte imagini se folosesc la grupa mijlocie (4-5 ani) la repovestire?",
          options: [
            "1-2 imagini mari",
            "3-4 imagini",
            "Până la 5 imagini",
            "Nu se folosesc imagini",
          ],
          correctIndex: 1,
          explanation:
            "La grupa mijlocie se folosesc 3-4 imagini, oferind un ajutor moderat. " +
            "La grupa mică: 1-2 mari, la grupa mare: până la 5 (cât mai puțin).",
        },
        {
          id: "edu-ped-dlc-lr-fq6",
          type: "true-false",
          question:
            "Toate cele 3 modalități (povestire, lectură, repovestire) se termină cu metoda Explozia Stelară.",
          correct: true,
          explanation:
            "Da, toate cele 3 modalități DLC au același final: metoda modernă " +
            "Explozia Stelară pentru fixarea cunoștințelor.",
        },
        {
          id: "edu-ped-dlc-lr-fq7",
          type: "multiple-choice",
          question:
            "Cum diferă rolul personajului-surpriză la lectura educatoarei față de repovestire?",
          options: [
            "La lectură vine să citească, la repovestire vine să povestească",
            "La lectură dorește să le spună povestea, la repovestire dorește să vadă dacă o țin minte",
            "La lectură nu se folosește personaj-surpriză, doar la repovestire",
            "Rolul este identic la ambele modalități",
          ],
          correctIndex: 1,
          explanation:
            "La lectura educatoarei, personajul-surpriză dorește să le spună preșcolarilor " +
            "povestea sa. La repovestire, personajul dorește să vadă dacă preșcolarii " +
            "își amintesc de povestea lui — o distincție importantă.",
        },
        {
          id: "edu-ped-dlc-lr-fq8",
          type: "fill-blank",
          question:
            "La lectura educatoarei, educatoarea va explica cuvintele necunoscute și va formula _______ cu acestea.",
          correctAnswers: [
            "propoziții",
            "propozitii",
            "Propoziții",
            "Propozitii",
            "PROPOZIȚII",
            "PROPOZITII",
          ],
          explanation:
            "Educatoarea va formula propoziții cu cuvintele necunoscute, " +
            "pentru a se asigura că toți preșcolarii au înțeles conținutul.",
        },
        {
          id: "edu-ped-dlc-lr-fq9",
          type: "true-false",
          question:
            "La repovestire, un singur preșcolar povestește toată povestea de la început la final.",
          correct: false,
          explanation:
            "Fiecare episod (corespunzător unei imagini) va fi povestit de către ALT preșcolar. " +
            "La final, 2-3 preșcolari sunt solicitați pentru repovestirea integrală.",
        },
        {
          id: "edu-ped-dlc-lr-fq10",
          type: "multiple-choice",
          question:
            "Care este ordinea corectă a pașilor la lectura educatoarei?",
          options: [
            "Citire → Explicare cuvinte → Explozia Stelară → Introducere",
            "Introducere → Citire → Explozia Stelară → Explicare cuvinte",
            "Introducere → Citire → Explicare cuvinte necunoscute → Explozia Stelară",
            "Explicare cuvinte → Introducere → Citire → Explozia Stelară",
          ],
          correctIndex: 2,
          explanation:
            "Ordinea corectă: 1) Introducere în activitate (surpriză), 2) Citirea poveștii, " +
            "3) Explicarea cuvintelor necunoscute, 4) Explozia Stelară pentru fixare.",
        },
      ],
    },
  },
];
