import { Lesson } from "@/types/lectii";

export const eduPedagogieDlcPovestireLessons: Lesson[] = [
  {
    topicId: "edu-ped-dlc-povestire",
    title: "Povestirea educatoarei — model de eseu (Subiectul 3)",
    duration: "50 min",
    objectives: [
      "Să definească povestirea educatoarei ca modalitate specifică DLC în educația timpurie",
      "Să cunoască poveștile recomandate pentru fiecare grupă de vârstă (mică, mijlocie, mare)",
      "Să descrie desfășurarea activității de povestire: captare, expunere, fixare",
      "Să aplice metoda Explozia Stelară diferențiat pe grupe de vârstă",
      "Să cunoască cele 6 teme anuale de studiu și legătura lor cu poveștile",
      "Să redacteze un eseu complet la Subiectul 3, Exercițiul 1 pentru povestirea educatoarei",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "edu-ped-dlc-povestire",
      questions: [
        {
          id: "edu-ped-dlc-povestire-fq1",
          type: "multiple-choice",
          question: "Ce dezvoltă povestirea educatoarei la preșcolari?",
          options: [
            "Abilitățile motrice și coordonarea",
            "Limbajul și vocabularul",
            "Gândirea matematică",
            "Competențele digitale",
          ],
          correctIndex: 1,
          explanation:
            "Povestirea educatoarei are ca scop dezvoltarea limbajului și a vocabularului " +
            "la preșcolari, precum și a imaginației, gândirii și atenției.",
        },
        {
          id: "edu-ped-dlc-povestire-fq2",
          type: "true-false",
          question:
            "La povestirea educatoarei, educatoarea citește povestea din carte.",
          correct: false,
          explanation:
            "La povestirea educatoarei, educatoarea spune povestea cu propriile cuvinte, " +
            "modulându-și vocea și folosind marionete. Citirea din carte este " +
            "caracteristica lecturii educatoarei, nu a povestirii.",
        },
        {
          id: "edu-ped-dlc-povestire-fq3",
          type: "multiple-choice",
          question:
            "De unde se iau titlurile de povești recomandate pe grupe de vârstă?",
          options: [
            "Din programa școlară, capitolul 3",
            "Din Piramida Cunoașterii, p. 218",
            "Din manualul educatoarei, p. 50",
            "Se aleg liber de către candidat",
          ],
          correctIndex: 1,
          explanation:
            "Titlurile de povești recomandate pe grupe de vârstă se regăsesc " +
            "în Piramida Cunoașterii, pagina 218.",
        },
        {
          id: "edu-ped-dlc-povestire-fq4",
          type: "fill-blank",
          question:
            "Povestirea educatoarei este o modalitate specifică de realizare a activităților didactice în ___.",
          correctAnswers: ["educația timpurie"],
          explanation:
            "Definiția trebuie ancorată «în educația timpurie». Fără această " +
            "precizare, se punctează ca definiție generală și se scade.",
        },
        {
          id: "edu-ped-dlc-povestire-fq5",
          type: "true-false",
          question:
            "La titularizare, cerința de la Subiectul 3 cere prezentarea a 3 etape ale activității.",
          correct: false,
          explanation:
            "Cele 3 etape se cer doar la definitivat, nu la titularizare. La " +
            "titularizare, cerința cere definiția și desfășurarea activității. " +
            "Dacă scrieți etape fără să fie cerute, pierdeți puncte.",
        },
        {
          id: "edu-ped-dlc-povestire-fq6",
          type: "multiple-choice",
          question:
            "Care poveste se recomandă la grupa mare pe tema «Când, cum și de ce se întâmplă?»?",
          options: [
            "Scufița Roșie",
            "Capra cu Trei Iezi",
            "Crăiasa Zăpezii",
            "Ridichea Uriașă",
          ],
          correctIndex: 2,
          explanation:
            "Crăiasa Zăpezii (Hans Christian Andersen) este recomandată pentru " +
            "grupa mare (5-6 ani) și se potrivește temei «Când, cum și de ce se " +
            "întâmplă?» prin legătura cu anotimpurile și fenomenele naturii.",
        },
        {
          id: "edu-ped-dlc-povestire-fq7",
          type: "true-false",
          question:
            "La Explozia Stelară pentru grupa mică, copiii se împart în 5 echipe.",
          correct: false,
          explanation:
            "Împărțirea în 5 echipe se face doar la grupa mare (5-6 ani). " +
            "La grupa mică și mijlocie, educatoarea adresează ea întrebările, " +
            "iar copiii răspund fără a fi împărțiți în echipe.",
        },
        {
          id: "edu-ped-dlc-povestire-fq8",
          type: "multiple-choice",
          question: "Câte întrebări are metoda Explozia Stelară?",
          options: ["3", "4", "5", "7"],
          correctIndex: 2,
          explanation:
            "Metoda Explozia Stelară are 5 întrebări: Cine? Unde? Ce? Când? De ce? " +
            "Fiecare întrebare este plasată pe câte o steluță din jurul temei centrale.",
        },
        {
          id: "edu-ped-dlc-povestire-fq9",
          type: "fill-blank",
          question:
            "Steluțele din Explozia Stelară sunt plasate ___ pe tabla magnetică.",
          correctAnswers: ["frontal"],
          explanation:
            "Steluțele cu întrebările și răspunsurile-imagini sunt plasate " +
            "frontal pe tabla magnetică, vizibile pentru toți preșcolarii.",
        },
        {
          id: "edu-ped-dlc-povestire-fq10",
          type: "multiple-choice",
          question: "Ce face educatoarea la încheierea activității?",
          options: [
            "Dă o notă fiecărui copil",
            "Citește povestea încă o dată",
            "Face aprecieri verbale și oferă stimulente",
            "Trece la o altă activitate fără tranziție",
          ],
          correctIndex: 2,
          explanation:
            "La încheierea activității, educatoarea face aprecieri verbale " +
            "asupra modului de implicare/participare și oferă stimulente " +
            "sau recompense.",
        },
      ],
    },

    chapters: [
      // ─── Chapter 1: Definiția și structura eseului ───
      {
        id: "edu-ped-dlc-povestire-ch1",
        title: "Definiția și structura eseului",
        duration: "~30 min",
        sections: [
          {
            title: "Cerința-model la Subiectul 3, Exercițiul 1",
            content:
              "Cerința-model sună astfel: «Prezentați o activitate de povestire a " +
              "educatoarei, ca una dintre modalitățile specifice de realizare a " +
              "activităților didactice în educația timpurie, având în vedere: " +
              "1. Definiția povestirii educatoarei; 2. Prezentarea desfășurării " +
              "unei activități de povestire a educatoarei — pentru grupa de … ani.» " +
              "Cerința cere exact două lucruri: definiția și desfășurarea. Nu se " +
              "cere proiect didactic, nu se cer etape, nu se cere scop sau obiective.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Cerința-model sună astfel: «Prezentați o activitate de **povestire a " +
                  "educatoarei**, ca una dintre modalitățile specifice de realizare a " +
                  "activităților didactice **în educația timpurie**, având în vedere:\n" +
                  "1. Definiția povestirii educatoarei\n" +
                  "2. Prezentarea desfășurării unei activități de povestire a educatoarei " +
                  "— pentru grupa de … ani»\n\n" +
                  "Cerința cere exact **două lucruri**: definiția și desfășurarea. Nu se " +
                  "cere proiect didactic, nu se cer etape, nu se cere scop sau obiective.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Citește cerința cu atenție — dacă nu cere etape, nu le scrieți. " +
                    "Dacă scrieți proiect didactic, primiți 0.",
                },
              },
            ],
          },
          {
            title: "Definiția povestirii educatoarei",
            content:
              "Povestirea educatoarei este o modalitate specifică de realizare a " +
              "unor activități didactice în educația timpurie, care are ca scop " +
              "dezvoltarea limbajului și a vocabularului la preșcolari, a imaginației, " +
              "a gândirii și a atenției, unde educatoarea va expune povestea cu " +
              "propriile cuvinte, folosind o tonalitate adecvată, modulându-și vocea " +
              "pentru a imita personajele. Educatoarea va folosi câte o marionetă " +
              "pentru fiecare personaj din poveste.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Povestirea educatoarei** este o modalitate specifică de realizare a " +
                  "unor activități didactice **în educația timpurie**, care are ca scop " +
                  "dezvoltarea **limbajului și a vocabularului** la preșcolari, a " +
                  "**imaginației**, a **gândirii** și a **atenției**, unde educatoarea " +
                  "va expune povestea **cu propriile cuvinte**, folosind o **tonalitate " +
                  "adecvată**, **modulându-și vocea** pentru a imita personajele. " +
                  "Educatoarea va folosi câte o **marionetă** pentru fiecare personaj " +
                  "din poveste.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Nu uitați «în educația timpurie» în definiție — fără ea, se " +
                    "punctează ca definiție generală.",
                },
              },
            ],
          },
          {
            title: "Povești recomandate pe grupe de vârstă",
            content:
              "Grupa mică (3-4 ani): Scufița Roșie, Ridichea Uriașă, Ursul Păcălit " +
              "de Vulpe. Grupa mijlocie (4-5 ani): Capra cu Trei Iezi, Legenda " +
              "Ghiocelului. Grupa mare (5-6 ani): Crăiasa Zăpezii, Fata Babei și " +
              "Fata Moșneagului. Sursa: Piramida Cunoașterii, p. 218.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Grupa mică (3-4 ani):** Scufița Roșie, Ridichea Uriașă, Ursul " +
                  "Păcălit de Vulpe\n\n" +
                  "**Grupa mijlocie (4-5 ani):** Capra cu Trei Iezi, Cei Trei " +
                  "Purceluși, Povestea Ursului Cafeniu, Legenda Ghiocelului sau " +
                  "Legenda Rândunicii\n\n" +
                  "**Grupa mare (5-6 ani):** Iedul cu Trei Capre, Crăiasa Zăpezii " +
                  "(Hans Christian Andersen), Rățușca cea Urâtă, Legenda Mărțișorului, " +
                  "Fata Babei și Fata Moșneagului",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Alegeți povești cunoscute — corectorii le recunosc și nu creează " +
                    "suspiciuni. Sursa: Piramida Cunoașterii, p. 218.",
                },
              },
            ],
          },
          {
            title: "Desfășurarea activității — model universal",
            content:
              "Pașii eseului: (1) informații organizatorice — domeniul DLC, tema " +
              "anuală, sub-tema (titlul poveștii), nivelul de vârstă; (2) captarea " +
              "atenției — educatoarea aduce sub formă de surpriză o marionetă-personaj; " +
              "(3) anunțarea titlului și autorului; (4) expunerea poveștii — tonalitate, " +
              "mimică, gestică, câte o marionetă per personaj; (5) evidențierea relațiilor " +
              "între personaje, repovestire pe baza imaginilor; (6) fixare — metoda " +
              "Explozia Stelară; (7) încheiere — aprecieri verbale și stimulente.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Pașii eseului, în ordine:\n\n" +
                  "1. **Informații organizatorice:** domeniul experiențial DLC, tema " +
                  "anuală de studiu (din cerință), sub-tema = titlul poveștii, nivelul " +
                  "de vârstă (din cerință)\n" +
                  "2. **Captarea atenției:** educatoarea aduce sub formă de surpriză o " +
                  "marionetă-personaj care dorește să spună preșcolarilor povestea sa\n" +
                  "3. **Anunțarea titlului și autorului** poveștii\n" +
                  "4. **Expunerea poveștii:** educatoarea expune povestea modulându-și " +
                  "vocea, folosind mimică și gestică; pentru fiecare personaj folosește " +
                  "câte o marionetă\n" +
                  "5. **Evidențierea relațiilor** între personaje; preșcolarii așează " +
                  "imagini în ordine cronologică, repovestind pe baza lor\n" +
                  "6. **Fixarea cunoștințelor** — metoda modernă Explozia Stelară\n" +
                  "7. **Încheierea activității** — aprecieri verbale și stimulente",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Eseul este universal — se schimbă doar titlul poveștii și nivelul " +
                    "de vârstă. Învățați unul singur și îl adaptați.",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model complet de eseu — Grupa mare (5-6 ani), Crăiasa Zăpezii",
                  source: "claude",
                  content:
                    "**Povestirea educatoarei** este o modalitate specifică de realizare " +
                    "a unor activități didactice **în educația timpurie**, care are ca " +
                    "scop dezvoltarea **limbajului și a vocabularului** la preșcolari, " +
                    "a **imaginației**, a **gândirii** și a **atenției**, unde " +
                    "educatoarea va expune povestea **cu propriile cuvinte**, folosind " +
                    "o **tonalitate adecvată**, **modulându-și vocea** pentru a imita " +
                    "personajele. Educatoarea va folosi câte o **marionetă** pentru " +
                    "fiecare personaj din poveste.\n\n" +
                    "Pentru a desfășura activitatea de povestire a educatoarei, la " +
                    "domeniul experiențial **Limbă și comunicare**, având ca temă " +
                    "anuală de studiu **«Când, cum și de ce se întâmplă?»**, sub-tema " +
                    "**«Crăiasa Zăpezii»** de Hans Christian Andersen, pentru grupa " +
                    "de **5-6 ani**, educatoarea va introduce preșcolarii în activitate " +
                    "aducând sub formă de surpriză o **marionetă-personaj** care " +
                    "dorește să spună preșcolarilor povestea sa.\n\n" +
                    "Educatoarea va anunța **titlul și autorul poveștii** și se va " +
                    "desfășura activitatea.\n\n" +
                    "**Expunerea poveștii** se va realiza de către educatoare, folosind " +
                    "o tonalitate și intonație adecvată, modulându-și vocea și " +
                    "ajutându-se de **mimică și gestică** pentru a imita personajele " +
                    "din poveste. Pentru fiecare personaj prezentat în poveste, " +
                    "educatoarea va folosi câte o **marionetă** care apare în fața " +
                    "preșcolarilor la momentul povestit în poveste.\n\n" +
                    "Pe parcursul poveștii, educatoarea **evidențiază relațiile " +
                    "existente între personaje**, urmând ca la finalul povestirii, " +
                    "preșcolarii să așeze **în ordine cronologică** imagini din " +
                    "poveste, repovestind pe baza lor.\n\n" +
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
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model complet de eseu — Grupa mică (3-4 ani), Ursul Păcălit de Vulpe",
                  source: "claude",
                  content:
                    "**Povestirea educatoarei** este o modalitate specifică de realizare " +
                    "a unor activități didactice **în educația timpurie**, care are ca " +
                    "scop dezvoltarea **limbajului și a vocabularului** la preșcolari, " +
                    "a **imaginației**, a **gândirii** și a **atenției**, unde " +
                    "educatoarea va expune povestea **cu propriile cuvinte**, folosind " +
                    "o **tonalitate adecvată**, **modulându-și vocea** pentru a imita " +
                    "personajele. Educatoarea va folosi câte o **marionetă** pentru " +
                    "fiecare personaj din poveste.\n\n" +
                    "Pentru a desfășura activitatea de povestire a educatoarei, la " +
                    "domeniul experiențial **Limbă și comunicare**, având ca temă " +
                    "anuală de studiu **«Când, cum și de ce se întâmplă?»**, sub-tema " +
                    "**«Ursul Păcălit de Vulpe»**, pentru grupa de **3-4 ani**, " +
                    "educatoarea va introduce preșcolarii în activitate aducând sub " +
                    "formă de surpriză o **marionetă-personaj** care dorește să spună " +
                    "preșcolarilor povestea sa.\n\n" +
                    "Educatoarea va anunța **titlul și autorul poveștii** și se va " +
                    "desfășura activitatea.\n\n" +
                    "**Expunerea poveștii** se va realiza de către educatoare, folosind " +
                    "o tonalitate și intonație adecvată, modulându-și vocea și " +
                    "ajutându-se de **mimică și gestică** pentru a imita personajele " +
                    "din poveste. Pentru fiecare personaj prezentat în poveste, " +
                    "educatoarea va folosi câte o **marionetă** care apare în fața " +
                    "preșcolarilor la momentul povestit în poveste.\n\n" +
                    "Pe parcursul poveștii, educatoarea **evidențiază relațiile " +
                    "existente între personaje**, urmând ca la finalul povestirii, " +
                    "preșcolarii să așeze **în ordine cronologică** imagini din " +
                    "poveste, repovestind pe baza lor.\n\n" +
                    "Se va aplica metoda modernă **Explozia Stelară** pentru fixarea " +
                    "cunoștințelor, unde preșcolarii vor trebui să răspundă la " +
                    "întrebările aflate pe steluțe, din jurul temei centrale, " +
                    "**adresate de către educatoare**: «Cine sunt personajele din " +
                    "poveste?», «Unde se petrece acțiunea din poveste?», «Ce titlu " +
                    "are povestea?», «Când se petrece acțiunea?», «De ce v-a plăcut " +
                    "povestea?». Preșcolarii vor răspunde la întrebări, plasând pe " +
                    "steluțe **imaginea care ilustrează răspunsul corect**. Steluțele " +
                    "sunt plasate frontal pe **tabla magnetică**.\n\n" +
                    "Educatoarea face **aprecieri verbale** asupra modului de " +
                    "implicare la activitate și oferă **stimulente**.",
                },
              },
            ],
          },
          {
            title: "Ce NU scriem la titularizare",
            content:
              "Nu se scrie proiect didactic. Nu se scriu etape (doar la definitivat). " +
              "Nu se scriu scop și obiective. Nu se descrie povestea în detaliu. " +
              "Nu se scrie despre importanță dacă nu se cere.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Nu scriem la titularizare:**\n\n" +
                  "- **Nu** proiect didactic / proiect de activitate\n" +
                  "- **Nu** etape ale activității (acestea se cer doar la definitivat)\n" +
                  "- **Nu** scop și obiective\n" +
                  "- **Nu** descrierea detaliată a poveștii\n" +
                  "- **Nu** importanța activității (dacă nu este cerută explicit)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Dacă scrieți «proiect de activitate» sau «etape», nota începe " +
                    "de la 7 maxim.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Model de captare a atenției",
            description:
              "Educatoarea aduce sub formă de surpriză o marionetă-personaj " +
              "care dorește să spună preșcolarilor povestea sa.",
          },
          {
            title: "Model de expunere",
            description:
              "Educatoarea expune povestea modulându-și vocea, folosind mimică " +
              "și gestică, iar pentru fiecare personaj folosește câte o marionetă.",
          },
        ],
        keyPoints: [
          {
            text:
              "Povestirea educatoarei = educatoarea spune povestea cu propriile " +
              "cuvinte (nu citește)",
            important: true,
          },
          {
            text: "Definiția trebuie ancorată «în educația timpurie»",
            important: true,
          },
          {
            text:
              "Eseul este universal — se adaptează doar titlul poveștii și " +
              "nivelul de vârstă",
          },
          {
            text:
              "Nu se cere proiect didactic la titularizare — doar definiție + " +
              "desfășurare",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-dlc-povestire-ch1-q1",
              type: "multiple-choice",
              question:
                "Ce instrument folosește educatoarea pentru fiecare personaj?",
              options: [
                "Câte o planșă ilustrată",
                "Câte o marionetă",
                "Câte un desen pe tablă",
                "Câte un sunet înregistrat",
              ],
              correctIndex: 1,
              explanation:
                "Educatoarea folosește câte o marionetă pentru fiecare " +
                "personaj din poveste, creând un mic teatru.",
            },
            {
              id: "edu-ped-dlc-povestire-ch1-q2",
              type: "true-false",
              question:
                "La titularizare trebuie să menționăm scopul și obiectivele activității.",
              correct: false,
              explanation:
                "La titularizare nu se cer scopul și obiectivele. Cerința " +
                "cere doar definiția și desfășurarea activității. Dacă adăugați " +
                "informații nesolicitate, pierdeți puncte.",
            },
            {
              id: "edu-ped-dlc-povestire-ch1-q3",
              type: "fill-blank",
              question: "Educatoarea spune povestea cu ___ cuvinte.",
              correctAnswers: ["propriile"],
              explanation:
                "La povestirea educatoarei, educatoarea spune povestea cu " +
                "propriile cuvinte, nu citește de nicăieri. Aceasta este " +
                "diferența față de lectura educatoarei.",
            },
            {
              id: "edu-ped-dlc-povestire-ch1-q4",
              type: "multiple-choice",
              question:
                "Care poveste este recomandată pentru grupa mică (3-4 ani)?",
              options: [
                "Crăiasa Zăpezii",
                "Fata Babei și Fata Moșneagului",
                "Scufița Roșie",
                "Iedul cu Trei Capre",
              ],
              correctIndex: 2,
              explanation:
                "Scufița Roșie este una dintre poveștile recomandate pentru grupa " +
                "mică (3-4 ani), alături de Ridichea Uriașă și Ursul Păcălit de " +
                "Vulpe. Sursa: Piramida Cunoașterii, p. 218.",
            },
            {
              id: "edu-ped-dlc-povestire-ch1-q5",
              type: "true-false",
              question:
                "La titularizare, cerința cere să scrieți proiect didactic pentru activitatea de povestire.",
              correct: false,
              explanation:
                "La titularizare NU se cere proiect didactic. Cerința cere doar " +
                "definiția și desfășurarea activității. Dacă scrieți proiect didactic, " +
                "primiți 0 puncte.",
            },
            {
              id: "edu-ped-dlc-povestire-ch1-q6",
              type: "multiple-choice",
              question:
                "Care este primul pas din desfășurarea activității de povestire?",
              options: [
                "Expunerea poveștii",
                "Anunțarea titlului și autorului",
                "Informații organizatorice (domeniu, temă, sub-temă, vârstă)",
                "Fixarea cunoștințelor prin Explozia Stelară",
              ],
              correctIndex: 2,
              explanation:
                "Primul pas din eseu este precizarea informațiilor organizatorice: " +
                "domeniul experiențial (DLC), tema anuală de studiu, sub-tema " +
                "(titlul poveștii) și nivelul de vârstă.",
            },
            {
              id: "edu-ped-dlc-povestire-ch1-q7",
              type: "fill-blank",
              question:
                "Educatoarea folosește câte o ___ pentru fiecare personaj din poveste.",
              correctAnswers: ["marionetă", "marioneta"],
              explanation:
                "Educatoarea folosește câte o marionetă pentru fiecare personaj " +
                "din poveste, creând un mic teatru. Aceasta ajută la captarea " +
                "atenției și la implicarea preșcolarilor.",
            },
            {
              id: "edu-ped-dlc-povestire-ch1-q8",
              type: "true-false",
              question:
                "Eseul pentru povestirea educatoarei este universal — se schimbă doar titlul poveștii și nivelul de vârstă.",
              correct: true,
              explanation:
                "Eseul este universal: structura și formulările-cheie rămân " +
                "identice. Se adaptează doar titlul poveștii, nivelul de vârstă " +
                "și varianta de Explozia Stelară (cu sau fără echipe).",
            },
            {
              id: "edu-ped-dlc-povestire-ch1-q9",
              type: "multiple-choice",
              question:
                "Ce folosește educatoarea în timpul expunerii poveștii pentru a imita personajele?",
              options: [
                "Texte scrise pe tablă",
                "Tonalitate adecvată, mimică și gestică",
                "Fișe de lucru individuale",
                "Filmulețe animate",
              ],
              correctIndex: 1,
              explanation:
                "Expunerea poveștii se realizează folosind o tonalitate și intonație " +
                "adecvată, modulându-și vocea și ajutându-se de mimică și gestică " +
                "pentru a imita personajele din poveste.",
            },
            {
              id: "edu-ped-dlc-povestire-ch1-q10",
              type: "multiple-choice",
              question:
                "Ce fac preșcolarii la finalul povestirii, înainte de Explozia Stelară?",
              options: [
                "Desenează personajele",
                "Scriu titlul poveștii",
                "Așează în ordine cronologică imagini din poveste, repovestind pe baza lor",
                "Memorează o poezie legată de poveste",
              ],
              correctIndex: 2,
              explanation:
                "La finalul povestirii, preșcolarii așează în ordine cronologică " +
                "imagini din poveste, repovestind pe baza lor. Acest pas evidențiază " +
                "relațiile între personaje și verifică înțelegerea poveștii.",
            },
          ],
        },
      },

      // ─── Chapter 2: Explozia Stelară și temele anuale ───
      {
        id: "edu-ped-dlc-povestire-ch2",
        title: "Explozia Stelară și temele anuale",
        duration: "~20 min",
        sections: [
          {
            title: "Explozia Stelară — grupa mare (5-6 ani)",
            content:
              "Preșcolarii grupei mari se împart în 5 echipe. Din fiecare echipă " +
              "se alege un reprezentant care extrage una din cele 5 întrebări: " +
              "Cine? Unde? Ce? Când? De ce? Preșcolarii reformulează întrebarea " +
              "pe baza poveștii, își adresează întrebări între echipe și plasează " +
              "răspunsurile-imagini pe steluța corespunzătoare, pe tabla magnetică.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Preșcolarii grupei mari vor fi împărțiți în **5 echipe**. Din " +
                  "fiecare echipă se va alege un reprezentant care va extrage una " +
                  "din cele **5 întrebări**:\n\n" +
                  "- **Cine?** — Cine sunt personajele din poveste?\n" +
                  "- **Unde?** — Unde se petrece acțiunea?\n" +
                  "- **Ce?** — Ce titlu are povestea? / Ce s-a întâmplat cu …?\n" +
                  "- **Când?** — Când se petrece acțiunea?\n" +
                  "- **De ce?** — De ce v-a plăcut povestea? / De ce s-a întâmplat …?\n\n" +
                  "Preșcolarii **reformulează** întrebarea extrasă în conformitate cu " +
                  "povestea, apoi își adresează întrebări între echipe și plasează " +
                  "**răspunsurile-imagini** pe steluța corespunzătoare întrebării, din " +
                  "jurul steluței mari unde se află tema centrală. Steluțele sunt " +
                  "plasate **frontal** pe tabla magnetică.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Doar la grupa mare se împart copiii în 5 echipe. La mică și " +
                    "mijlocie — educatoarea pune întrebările.",
                },
              },
            ],
          },
          {
            title: "Explozia Stelară — grupa mică și mijlocie",
            content:
              "La grupa mică și mijlocie, educatoarea adresează ea întrebările " +
              "de pe steluțe, iar copiii răspund plasând imaginea-răspuns pe " +
              "steluța corespunzătoare. Nu se împart copiii în echipe.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "La grupa mică și mijlocie, se aplică tot metoda Explozia Stelară, " +
                  "dar **fără împărțirea în echipe**.\n\n" +
                  "**Educatoarea adresează întrebările** (Cine? Unde? Ce? Când? De ce?), " +
                  "iar preșcolarii răspund plasând pe steluțe **imaginea care ilustrează " +
                  "răspunsul corect**.\n\n" +
                  "Se folosesc aceleași 5 întrebări ca la grupa mare, dar activitatea " +
                  "este ghidată integral de educatoare.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Faceți-vă un chenar separat în caiet cu varianta pentru " +
                    "mică/mijlocie — la examen bifați varianta potrivită.",
                },
              },
            ],
          },
          {
            title: "Temele anuale de studiu",
            content:
              "Cele 6 teme anuale: (1) Cine sunt/suntem? — corpul, familia, " +
              "localitatea; (2) Când, cum și de ce se întâmplă? — anotimpuri, " +
              "animale, fenomene; (3) Cine și cum planifică/organizează o " +
              "activitate? — transport, programul meu; (4) Cum este, a fost și " +
              "va fi aici pe Pământ? — tradiții, legende; (5) Ce și cum vreau " +
              "să fiu? — meserii; (6) Cu ce și cum exprimăm ceea ce simțim? — emoții," +
              "simțuri. Tema anuală vine dată în cerință.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Cele **6 teme anuale de studiu**:\n\n" +
                  "1. **«Cine sunt/suntem?»** — corpul meu, chipul meu, familia, " +
                  "localitatea mea, orașul meu\n" +
                  "2. **«Când, cum și de ce se întâmplă?»** — anotimpuri, animale, " +
                  "fructe și legume, fenomene ale naturii\n" +
                  "3. **«Cine și cum planifică/organizează o activitate?»** — " +
                  "mijloace de transport, programul meu, timpul (grupa mare)\n" +
                  "4. **«Cum este, a fost și va fi aici pe Pământ?»** — tradiții " +
                  "și obiceiuri, legende diverse, dinozauri\n" +
                  "5. **«Ce și cum vreau să fiu?»** — meserii; «Azi la grădiniță, " +
                  "mâine la școală» (doar grupa mare)\n" +
                  "6. **«Cu ce și cum exprimăm ceea ce simțim?»** — emoțiile mele, trăirile " +
                  "mele, simțurile",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Tema anuală vă este dată în cerință. Voi alegeți doar sub-tema " +
                    "(= titlul poveștii). Legătura temă → poveste se discută în " +
                    "sesiunile următoare.",
                },
              },
            ],
          },
          {
            title: "Cerință-model cu altă temă anuală + rezolvare",
            content:
              "Demonstrație a adaptării eseului universal: aceeași structură, " +
              "altă temă anuală, altă grupă de vârstă, altă poveste.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Cerință:** Prezentați o activitate de povestire a educatoarei, " +
                  "ca una dintre modalitățile specifice de realizare a activităților " +
                  "didactice în educația timpurie, având în vedere următoarele repere:\n" +
                  "1. Definiția povestirii educatoarei\n" +
                  "2. Prezentarea desfășurării unei activități de povestire a " +
                  "educatoarei — pentru grupa mijlocie (4-5 ani)\n\n" +
                  "**Domeniul experiențial:** Limbă și comunicare\n" +
                  "**Tema anuală de studiu:** «Cine sunt/suntem?»",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Observă ce se schimbă față de eseul din Capitolul 1: (1) grupa " +
                    "de vârstă → 4-5 ani, (2) tema anuală → «Cine sunt/suntem?», " +
                    "(3) sub-tema → o poveste despre familie (Capra cu Trei Iezi), " +
                    "(4) Explozia Stelară → fără echipe (grupa mijlocie). Restul " +
                    "rămâne identic.",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Rezolvare — Grupa mijlocie (4-5 ani), Capra cu Trei Iezi",
                  source: "claude",
                  content:
                    "**Povestirea educatoarei** este o modalitate specifică de realizare " +
                    "a unor activități didactice **în educația timpurie**, care are ca " +
                    "scop dezvoltarea **limbajului și a vocabularului** la preșcolari, " +
                    "a **imaginației**, a **gândirii** și a **atenției**, unde " +
                    "educatoarea va expune povestea **cu propriile cuvinte**, folosind " +
                    "o **tonalitate adecvată**, **modulându-și vocea** pentru a imita " +
                    "personajele. Educatoarea va folosi câte o **marionetă** pentru " +
                    "fiecare personaj din poveste.\n\n" +
                    "Pentru a desfășura activitatea de povestire a educatoarei, la " +
                    "domeniul experiențial **Limbă și comunicare**, având ca temă " +
                    "anuală de studiu **«Cine sunt/suntem?»**, sub-tema **«Capra cu " +
                    "Trei Iezi»**, pentru grupa de **4-5 ani**, educatoarea va " +
                    "introduce preșcolarii în activitate aducând sub formă de surpriză " +
                    "o **marionetă-personaj** care dorește să spună preșcolarilor " +
                    "povestea sa.\n\n" +
                    "Educatoarea va anunța **titlul și autorul poveștii** și se va " +
                    "desfășura activitatea.\n\n" +
                    "**Expunerea poveștii** se va realiza de către educatoare, folosind " +
                    "o tonalitate și intonație adecvată, modulându-și vocea și " +
                    "ajutându-se de **mimică și gestică** pentru a imita personajele " +
                    "din poveste. Pentru fiecare personaj prezentat în poveste, " +
                    "educatoarea va folosi câte o **marionetă** care apare în fața " +
                    "preșcolarilor la momentul povestit în poveste.\n\n" +
                    "Pe parcursul poveștii, educatoarea **evidențiază relațiile " +
                    "existente între personaje**, urmând ca la finalul povestirii, " +
                    "preșcolarii să așeze **în ordine cronologică** imagini din " +
                    "poveste, repovestind pe baza lor.\n\n" +
                    "Se va aplica metoda modernă **Explozia Stelară** pentru fixarea " +
                    "cunoștințelor, unde preșcolarii vor trebui să răspundă la " +
                    "întrebările aflate pe steluțe, din jurul temei centrale, " +
                    "**adresate de către educatoare**: «Cine sunt personajele din " +
                    "poveste?», «Unde se petrece acțiunea din poveste?», «Ce titlu " +
                    "are povestea?», «Când pleacă capra de acasă?», «De ce nu " +
                    "trebuie să deschidem ușa la persoane necunoscute?».\n\n" +
                    "Preșcolarii vor răspunde la întrebări, plasând pe steluțe " +
                    "**imaginea care ilustrează răspunsul corect**. Steluțele sunt " +
                    "plasate frontal pe **tabla magnetică**.\n\n" +
                    "Educatoarea face **aprecieri verbale** asupra modului de " +
                    "implicare la activitate și oferă **stimulente**.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Compară acest eseu cu cele din Capitolul 1. S-au schimbat doar: " +
                    "tema anuală (Cine sunt/suntem?), povestea (Capra cu Trei Iezi), " +
                    "vârsta (4-5 ani) și tipul de Explozia Stelară (fără echipe). " +
                    "Structura și formulările-cheie sunt identice — exact asta " +
                    "înseamnă «eseu universal».",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Exemplu de întrebări reformulate (Crăiasa Zăpezii)",
            description:
              "Cine sunt personajele? Unde se petrece acțiunea? Ce s-a " +
              "întâmplat cu Kai? Când se petrece acțiunea? De ce s-a topit " +
              "gheața din inima lui Kai?",
          },
          {
            title: "Adaptare sub-temă pe tema anuală",
            description:
              "Tema «Când, cum și de ce se întâmplă?»: grupa mare — Crăiasa " +
              "Zăpezii; grupa mijlocie — Legenda Ghiocelului; grupa mică — " +
              "Ursul Păcălit de Vulpe.",
          },
        ],
        keyPoints: [
          {
            text: "Explozia Stelară: 5 echipe doar la grupa mare",
            important: true,
          },
          {
            text: "6 teme anuale de studiu — tema vine dată în cerință",
          },
          {
            text:
              "Sub-tema = titlul poveștii, ales de candidat în funcție de " +
              "tema anuală și grupa de vârstă",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-dlc-povestire-ch2-q1",
              type: "multiple-choice",
              question:
                "La grupa mare, câte echipe se formează pentru Explozia Stelară?",
              options: ["3", "4", "5", "6"],
              correctIndex: 2,
              explanation:
                "La grupa mare, preșcolarii se împart în 5 echipe, câte una " +
                "pentru fiecare întrebare: Cine? Unde? Ce? Când? De ce?",
            },
            {
              id: "edu-ped-dlc-povestire-ch2-q2",
              type: "true-false",
              question:
                "Tema anuală de studiu este aleasă de candidat la examen.",
              correct: false,
              explanation:
                "Tema anuală de studiu este dată în cerința de examen. " +
                "Candidatul alege doar sub-tema (= titlul poveștii) " +
                "potrivită pentru tema anuală primită.",
            },
            {
              id: "edu-ped-dlc-povestire-ch2-q3",
              type: "fill-blank",
              question:
                "Cele 5 întrebări din Explozia Stelară sunt: Cine, Unde, Ce, Când și ___.",
              correctAnswers: ["De ce"],
              explanation:
                "Cele 5 întrebări din metoda Explozia Stelară sunt: Cine? " +
                "Unde? Ce? Când? De ce? — fiecare plasată pe câte o steluță " +
                "în jurul temei centrale.",
            },
            {
              id: "edu-ped-dlc-povestire-ch2-q4",
              type: "true-false",
              question:
                "La grupa mică și mijlocie, copiii se împart în echipe pentru Explozia Stelară.",
              correct: false,
              explanation:
                "Împărțirea în echipe se face doar la grupa mare (5-6 ani). La " +
                "grupa mică și mijlocie, educatoarea adresează ea întrebările, " +
                "iar copiii răspund plasând imaginea-răspuns pe steluță.",
            },
            {
              id: "edu-ped-dlc-povestire-ch2-q5",
              type: "multiple-choice",
              question:
                "Care este tema anuală de studiu care include anotimpuri, animale și fenomene ale naturii?",
              options: [
                "«Cine sunt/suntem?»",
                "«Când, cum și de ce se întâmplă?»",
                "«Ce și cum vreau să fiu?»",
                "«Cu ce și cum exprimăm ceea ce simțim?»",
              ],
              correctIndex: 1,
              explanation:
                "Tema «Când, cum și de ce se întâmplă?» include anotimpuri, animale, " +
                "fructe și legume, fenomene ale naturii. Este una dintre cele 6 teme " +
                "anuale de studiu din curriculum.",
            },
            {
              id: "edu-ped-dlc-povestire-ch2-q6",
              type: "multiple-choice",
              question:
                "Câte teme anuale de studiu sunt în curriculumul pentru educația timpurie?",
              options: ["4", "5", "6", "8"],
              correctIndex: 2,
              explanation:
                "Sunt 6 teme anuale de studiu: «Cine sunt/suntem?», «Când, cum și " +
                "de ce se întâmplă?», «Cine și cum planifică o activitate?», «Cum " +
                "este, a fost și va fi aici pe Pământ?», «Ce și cum vreau să fiu?», " +
                "«Cu ce și cum exprimăm ceea ce simțim?».",
            },
            {
              id: "edu-ped-dlc-povestire-ch2-q7",
              type: "fill-blank",
              question:
                "Sub-tema eseului de povestire este de fapt ___ poveștii, ales de candidat.",
              correctAnswers: ["titlul"],
              explanation:
                "Sub-tema din eseu este chiar titlul poveștii. Candidatul alege " +
                "titlul potrivit pentru tema anuală primită în cerință și pentru " +
                "grupa de vârstă specificată.",
            },
            {
              id: "edu-ped-dlc-povestire-ch2-q8",
              type: "true-false",
              question:
                "Tema anuală «Ce și cum vreau să fiu?» include sub-tema «Azi la grădiniță, mâine la școală», valabilă pentru toate grupele.",
              correct: false,
              explanation:
                "Sub-tema «Azi la grădiniță, mâine la școală» este disponibilă " +
                "doar pentru grupa mare (5-6 ani), nu pentru toate grupele. " +
                "Această temă tratează meserii și pregătirea pentru școală.",
            },
            {
              id: "edu-ped-dlc-povestire-ch2-q9",
              type: "multiple-choice",
              question:
                "La Explozia Stelară, unde sunt plasate steluțele cu întrebări?",
              options: [
                "Pe perete, în spatele copiilor",
                "Pe podea, în cerc",
                "Frontal pe tabla magnetică",
                "Pe mesele copiilor",
              ],
              correctIndex: 2,
              explanation:
                "Steluțele cu întrebările și răspunsurile-imagini sunt plasate " +
                "frontal pe tabla magnetică, vizibile pentru toți preșcolarii, " +
                "în jurul steluței mari unde se află tema centrală.",
            },
            {
              id: "edu-ped-dlc-povestire-ch2-q10",
              type: "multiple-choice",
              question:
                "Ce poveste se potrivește temei «Cine sunt/suntem?» la grupa mijlocie?",
              options: [
                "Crăiasa Zăpezii",
                "Capra cu Trei Iezi",
                "Ridichea Uriașă",
                "Legenda Mărțișorului",
              ],
              correctIndex: 1,
              explanation:
                "Capra cu Trei Iezi se potrivește temei «Cine sunt/suntem?» " +
                "(legătura cu familia) și este recomandată pentru grupa mijlocie " +
                "(4-5 ani). Eseul se adaptează doar prin schimbarea acestor elemente.",
            },
          ],
        },
      },
    ],

    transcript: `# Curs Titularizare — 25.02.2026 (Pedagogie / DLC)

## Subiectul 3, Exercițiu 1 — Povestirea educatoarei

### Cerința-model

> Prezentați o activitate de povestire a educatoarei, ca una dintre modalitățile specifice de realizare a activităților didactice în educația timpurie, având în vedere următoarele repere:
> 1. Definiția povestirii educatoarei
> 2. Prezentarea desfășurării unei activități de povestire a educatoarei — pentru grupa de … puncte, puncte (vârsta se va adapta)

### Observații importante

- Eseurile sunt create universal — se schimbă doar titlul poveștii și nivelul de vârstă
- **Nu se cere proiect didactic** — dacă cerința nu menționează etape/secvențe, nu le scrieți
- Dacă cerința zice „definiția" și „desfășurarea activității", scrieți exact asta
- Nu scrieți scop, obiective, proiect de activitate — se punctează cu 0
- Dacă scrieți despre importanță (nesolicitată), primiți 0 puncte

---

## Povești pe grupe de vârstă

**Sursa:** Piramida Cunoașterii, pagina 218

### Grupa mică (3-4 ani)

- Scufița Roșie
- Ridichea Uriașă
- Ursul Păcălit de Vulpe

### Grupa mijlocie (4-5 ani)

- Capra cu Trei Iezi
- Cei Trei Purceluși
- Povestea Ursului Cafeniu
- Legenda Ghiocelului sau Legenda Rândunicii

### Grupa mare (5-6 ani)

- Iedul cu Trei Capre
- Crăiasa Zăpezii (Hans Christian Andersen)
- Rățușca cea Urâtă
- Legenda Mărțișorului
- Fata Babei și Fata Moșneagului

### Observații la alegerea poveștilor

- Unele povești merg la mai multe grupe (ex: Legenda Moș Crăciun — mică și mare)
- Punguța cu Doi Bani — se recomandă la grupa mare (conceptul „bani" e specific grupei mari)
- Alegeți povești cunoscute, care nu creează suspiciuni la corectori
- Nu trebuie să descrieți povestea în detaliu — doar urmăriți pașii metodici

---

## Definiția povestirii educatoarei

> **Povestirea educatoarei** este o modalitate specifică de realizare a unor activități didactice **în educația timpurie**, care are ca scop dezvoltarea **limbajului și a vocabularului** la preșcolari, a **imaginației**, a **gândirii** și a **atenției**, unde educatoarea va expune povestea **cu propriile cuvinte**, folosind o **tonalitate adecvată**, **modelându-și vocea** pentru a imita personajele. Educatoarea va folosi câte o **marionetă** pentru fiecare personaj din poveste.

### Precizări

- Nu uitați să includeți „în educația timpurie" — altfel definiți în general și se scade
- Orice concept definit pe foaia de examen trebuie ancorat „în educația timpurie"
- Este un „mic teatru" — educatoarea spune povestea cu propriile cuvinte, nu citește de nicăieri
- Titlurile de povești se iau din Piramida Cunoașterii, p. 218

---

## Desfășurarea activității de povestire a educatoarei

### Structura eseului (model universal)

Eseul urmează acești pași, în ordine:

1. **Informații organizatorice:**
   - Domeniul experiențial: Limbă și comunicare (DLC)
   - Tema anuală de studiu: (conform cerinței, ex: „Când, cum și de ce se întâmplă?")
   - Sub-tema: titlul poveștii (ex: Crăiasa Zăpezii — Hans Christian Andersen)
   - Nivelul de vârstă: conform cerinței (ex: 5-6 ani)

2. **Introducerea în activitate:**
   - Educatoarea va introduce preșcolarii în activitate aducând sub formă de surpriză o marionetă-personaj care dorește să le spună preșcolarilor povestea sa
   - Alternative: scrisoare, ghicitoare, alt element-surpriză

3. **Anunțarea titlului și autorului:**
   - Educatoarea va anunța titlul și autorul poveștii
   - Până aici — totul este general, valabil pentru orice poveste și orice grupă

4. **Expunerea poveștii:**
   - Expunerea poveștii se va realiza de către educatoare, folosind o tonalitate și intonație adecvată, modelându-și vocea și ajutându-se de mimică și gestică pentru a imita personajele din poveste
   - Pentru fiecare personaj prezentat în poveste, educatoarea va folosi câte o marionetă care apare în fața preșcolarilor la momentul povestit în poveste

5. **Pe parcursul poveștii:**
   - Educatoarea evidențiază relațiile existente între personaje
   - La finalul povestirii, preșcolarii așează în ordine cronologică imagini din poveste, repovestind pe baza lor

6. **Fixarea cunoștințelor — Metoda modernă Explozia Stelară:**
   - Se va aplica metoda modernă Explozia Stelară pentru fixarea cunoștințelor
   - **Pentru grupa mare** → vezi secțiunea dedicată
   - **Pentru grupa mică și mijlocie** → vezi secțiunea dedicată

7. **Încheierea activității:**
   - Educatoarea face aprecieri verbale asupra modului de implicare/participare la activitate
   - Oferă stimulente sau recompense

---

## Explozia Stelară — Grupa mare (5-6 ani)

Preșcolarii grupei mari vor fi împărțiți în **5 echipe**. Din fiecare echipă se va alege un reprezentant care va extrage una din cele 5 întrebări:

| Întrebare | Exemplu general | Exemplu pe poveste (Crăiasa Zăpezii) |
|-----------|----------------|--------------------------------------|
| **Cine?** | Cine sunt personajele din poveste? | Cine sunt personajele din poveste? |
| **Unde?** | Unde se petrece acțiunea din poveste? | Unde se petrece acțiunea? |
| **Ce?** | Ce titlu are povestea? | Ce s-a întâmplat cu Kai? |
| **Când?** | Când se petrece acțiunea? | Când se petrece acțiunea? (iarna) |
| **De ce?** | De ce v-a plăcut povestea? | De ce s-a topit gheața din inima lui Kai? |

Pe baza acestora, preșcolarii vor avea de **reformulat** întrebarea extrasă în conformitate cu povestea.

La expirarea timpului, preșcolarii își vor adresa întrebări între echipe și vor plasa răspunsurile — ilustrate în **imagini** — pe steluța corespunzătoare întrebării, din jurul steluței mari unde se află **tema centrală**.

Steluțele sunt plasate **frontal** pe tabla magnetică.

---

## Explozia Stelară — Grupa mică și mijlocie (3-5 ani)

Se va aplica metoda modernă Explozia Stelară, unde preșcolarii vor trebui să răspundă la întrebările aflate pe steluțe din jurul temei centrale, **adresate de către educatoare**.

- **Nu se împart copiii în echipe** (doar la grupa mare)
- Educatoarea pune întrebările, copiii răspund
- Se folosesc aceleași 5 întrebări (Cine? Unde? Ce? Când? De ce?)
- Preșcolarii vor răspunde la întrebări, plasând pe steluțe imaginea care ilustrează răspunsul corect

---

## Temele anuale de studiu

| Tema anuală | Conținut / Exemple |
|-------------|-------------------|
| **Cine sunt/suntem?** | Corpul meu, chipul meu, familia, localitatea mea, orașul meu |
| **Când, cum și de ce se întâmplă?** | Anotimpuri, animale, fructe și legume, fenomene ale naturii |
| **Cine și cum planifică/organizează o activitate?** | Mijloace de transport, programul meu, timpul (grupa mare) |
| **Cum este, a fost și va fi aici pe Pământ?** | Tradiții și obiceiuri, legende diverse, dinozauri |
| **Ce și cum vreau să fiu?** | Meserii; „Azi la grădiniță, mâine la școală" (doar grupa mare) |
| **Cu ce și cum exprimăm ceea ce simțim?** | Emoțiile mele, trăirile mele, simțurile |

### Observații

- Tema anuală **va fi dată în cerință** — nu o alegeți voi
- Voi alegeți **sub-tema** (= titlul poveștii) potrivită pentru tema anuală primită
- Legăturile temă anuală → povești se discută în sesiunile următoare

---

## Sfaturi pentru examen (de la formator)

- **Nu scrieți proiect didactic** — nu se punctează, primiți 0
- **Nu adăugați etape** dacă cerința nu le cere — la definitivat se cer 3 etape, la titularizare NU
- **Nu descrieți povestea în detaliu** — interesează pașii metodici, nu conținutul poveștii
- **Scrieți cuvânt cu cuvânt** modelul de eseu — nu inventați, nu adăugați
- **Mergeți centrat pe pregătire** — nu ascultați alte surse contradictorii
- Teoria învățării = Piaget; Teoria psihologică a învățării = teoria inteligențelor multiple — **nu le combinați!** (minus 30 puncte la pedagogie)
- Dacă nu cunoașteți o poveste, puteți inventa un titlu, dar e recomandat să învățați poveștile
- Nu rezolvați teste din cărți — rezolvați după modelul cerințelor de examen
- **Programa s-a schimbat din 2015** — eseurile vechi (cu proiecte de activitate) nu mai sunt valabile`,
  },
];
