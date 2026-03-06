import { Lesson } from "@/types/lectii";
import { chapter1Audio, chapter2Audio } from "./audio/edu-ped-dlc-lectura-dupa-imagini-audio";

export const eduPedagogieDlcLecturaDupaImaginiLessons: Lesson[] = [
  {
    topicId: "edu-ped-dlc-lectura-dupa-imagini",
    title:
      "Lectura după imagini — model de eseu (Subiectul 3)",
    duration: "50 min",
    objectives: [
      "Să definească lectura după imagini ca modalitate specifică în educația timpurie",
      "Să identifice cele 3 planuri de intuire: central, secundar, îndepărtat",
      "Să formuleze întrebări adecvate pentru fiecare plan de intuire",
      "Să descrie mecanismul sintezelor parțiale și al sintezei finale (poveste)",
      "Să adapteze eseul la diferite domenii experiențiale (Științe și DLC)",
      "Să diferențieze numărul de imagini pe grupe de vârstă (mică/mijlocie vs. mare)",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    chapters: [
      {
        id: "lectura-imagini-definitie",
        title: "Definiția și planurile de intuire",
        duration: "20 min",
        audio: chapter1Audio,
        sections: [
          {
            title: "Definiția lecturii după imagini",
            content:
              "Lectura după imagini este o modalitate specifică de realizare a unor " +
              "activități didactice în educația timpurie, care are ca scop dezvoltarea " +
              "limbajului și a vocabularului, dezvoltarea capacității de analiză, " +
              "interpretare și descriere a datelor și a acțiunilor prezentate în imagini " +
              "și a imaginației.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Lectura după imagini** este o modalitate specifică de realizare " +
                  "a unor activități didactice **în educația timpurie**, care are ca scop " +
                  "**dezvoltarea limbajului și a vocabularului**, **dezvoltarea capacității " +
                  "de analiză, interpretare și descriere** a datelor și a acțiunilor " +
                  "prezentate în imagini și a **imaginației**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Dacă nu scrii «în educația timpurie» în definiție, pierzi 2-3 " +
                    "puncte din cele 15 disponibile. Răspunsul se află mereu în cerință — " +
                    "este «jumătate din întrebare».",
                },
              },
              {
                kind: "text",
                text:
                  "Lectura după imagini se poate desfășura atât la domeniul " +
                  "experiențial **Științe** (cunoașterea mediului), cât și la " +
                  "**DLC** (domeniul limbă și comunicare, educarea limbajului). " +
                  "Eseul este **comun** pentru ambele domenii — se schimbă doar " +
                  "câteva cuvinte în funcție de cerință.",
              },
            ],
          },
          {
            title: "Cele 3 planuri de intuire",
            content:
              "Imaginea se intuiește pe 3 planuri: central (ce vezi prima dată), " +
              "secundar (ce e în spate) și îndepărtat (fundalul). Pentru fiecare plan " +
              "se adresează întrebări și se realizează o sinteză parțială.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Lectura după imagini se bazează pe **3 planuri de intuire**:\n\n" +
                  "1. **Planul central** — ce vezi prima dată când te uiți la imagine " +
                  "(personajele principale, acțiunea centrală)\n" +
                  "2. **Planul secundar** — detaliile din spate, elementele secundare " +
                  "(ex: un copil care urcă dealul, un animal)\n" +
                  "3. **Planul îndepărtat** — fundalul imaginii, cel mai departe " +
                  "(ex: cerul, copacii, clădirile din depărtare)",
              },
              {
                kind: "text",
                text:
                  "**Mecanismul de intuire:**\n\n" +
                  "- Pentru **fiecare plan** → se adresează **întrebări** preșcolarilor\n" +
                  "- Preșcolarii răspund → pe baza răspunsurilor se face o **sinteză " +
                  "parțială** (un rezumat al ce au răspuns copiii)\n" +
                  "- La final → pe baza celor **3 sinteze parțiale** se realizează o " +
                  "**sinteză finală sub formă de poveste**, căreia preșcolarii îi " +
                  "dau un **titlu corespunzător**",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "**Nu scriem răspunsurile copiilor** la examen — tu nu ai de " +
                    "unde să știi ce răspund. Dacă scrii răspunsurile, se consideră " +
                    "semn de identificare. Scriem doar **întrebările** pe care le punem.",
                },
              },
            ],
          },
          {
            title: "Imagini pe grupe de vârstă",
            content:
              "Grupa mică și mijlocie: 2 imagini. Grupa mare: 3 imagini. " +
              "La examen: doar 1 imagine.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "| Grupă | Nr. imagini (practică) | La examen |\n" +
                  "|-------|------------------------|----------|\n" +
                  "| Mică și Mijlocie | 2 imagini | 1 imagine |\n" +
                  "| Mare | 3 imagini | 1 imagine |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen prezinți activitatea pentru **o singură imagine**. " +
                    "Poți menționa la final «La fel se va proceda și pentru " +
                    "celelalte imagini», dar nu repeta eseul de mai multe ori — " +
                    "ți-ar lua 3 pagini degeaba.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Sinteză parțială — plan central",
            description:
              "«În imagine observăm anotimpul iarna, totul este acoperit cu zăpadă. " +
              "Vedem copii care se joacă cu bulgări, o fată care se dă pe patine...» " +
              "— adică iei răspunsurile copiilor și le sintetizezi într-un text.",
          },
          {
            title: "Adaptare la alt domeniu",
            description:
              "La **DOS** (educație pentru societate): schimbi contextul — imaginea " +
              "arată copii la trecerea de pietoni. Zâna devine «Zâna faptelor bune» " +
              "sau se cere «Regulile de circulație corespunzătoare».",
          },
        ],
        keyPoints: [
          {
            text: "Lectura după imagini funcționează pe 3 planuri: central, secundar, îndepărtat",
            important: true,
          },
          {
            text: "Fiecare plan → întrebări → sinteză parțială; la final → sinteză finală = poveste",
            important: true,
          },
          {
            text: "Nu scriem răspunsurile copiilor la examen — doar întrebările",
            important: true,
          },
          {
            text: "La examen: doar 1 imagine (nu 2-3 ca în practică)",
          },
          {
            text: "Eseul e comun pentru Științe (cunoașterea mediului) și DLC",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-dlc-ldi-mq1-1",
              type: "multiple-choice",
              question:
                "Câte planuri de intuire are lectura după imagini?",
              options: [
                "2 — central și secundar",
                "3 — central, secundar și îndepărtat",
                "4 — central, secundar, îndepărtat și detaliu",
                "1 — doar planul central",
              ],
              correctIndex: 1,
              explanation:
                "Lectura după imagini are 3 planuri de intuire: planul central (ce vezi " +
                "prima dată), planul secundar (detalii din spate) și planul îndepărtat (fundalul).",
            },
            {
              id: "edu-ped-dlc-ldi-mq1-2",
              type: "true-false",
              question:
                "La examen, educatoarea prezintă lectura după imagini pe o singură imagine.",
              correct: true,
              explanation:
                "La examen se prezintă activitatea pentru o singură imagine, deși " +
                "în practică se folosesc 2 (mică/mijlocie) sau 3 (mare).",
            },
            {
              id: "edu-ped-dlc-ldi-mq1-3",
              type: "multiple-choice",
              question:
                "Ce se realizează pe baza răspunsurilor copiilor la fiecare plan?",
              options: [
                "Un desen colectiv",
                "O sinteză parțială (rezumat)",
                "O fișă de evaluare",
                "O dramatizare",
              ],
              correctIndex: 1,
              explanation:
                "Pe baza răspunsurilor copiilor la întrebările unui plan de intuire " +
                "se realizează o sinteză parțială — un rezumat al ce au răspuns.",
            },
            {
              id: "edu-ped-dlc-ldi-mq1-4",
              type: "true-false",
              question:
                "La examen se scriu și răspunsurile pe care le-ar da copiii la întrebări.",
              correct: false,
              explanation:
                "NU se scriu răspunsurile copiilor la examen. Nu ai de unde să știi " +
                "ce răspund — dacă scrii, se consideră semn de identificare. " +
                "Scriem doar întrebările.",
            },
            {
              id: "edu-ped-dlc-ldi-mq1-5",
              type: "fill-blank",
              question:
                "Lectura după imagini are ca scop dezvoltarea limbajului și a _______.",
              correctAnswers: [
                "vocabularului",
                "Vocabularului",
                "VOCABULARULUI",
              ],
              explanation:
                "Lectura după imagini are ca scop dezvoltarea limbajului și a " +
                "vocabularului, dezvoltarea capacității de analiză, interpretare " +
                "și descriere, și a imaginației.",
            },
            {
              id: "edu-ped-dlc-ldi-mq1-6",
              type: "multiple-choice",
              question:
                "La ce domenii experiențiale se poate desfășura lectura după imagini?",
              options: [
                "Doar la DLC (limba și comunicare)",
                "La Științe (cunoașterea mediului) și DLC (limba și comunicare)",
                "Doar la Științe (cunoașterea mediului)",
                "La DEC (estetic și creativ) și DOS (om și societate)",
              ],
              correctIndex: 1,
              explanation:
                "Lectura după imagini se poate face atât la Științe (cunoașterea " +
                "mediului), cât și la DLC (domeniul limbă și comunicare). " +
                "Eseul este comun pentru ambele domenii.",
            },
            {
              id: "edu-ped-dlc-ldi-mq1-7",
              type: "multiple-choice",
              question:
                "Ce cuprinde planul central al imaginii?",
              options: [
                "Cerul și elementele din depărtare",
                "Ce vezi prima dată — personajele principale, acțiunea centrală",
                "Doar fundația imaginii",
                "Textul explicativ de sub imagine",
              ],
              correctIndex: 1,
              explanation:
                "Planul central cuprinde ce vezi prima dată când te uiți la imagine: " +
                "personajele principale, acțiunea centrală.",
            },
            {
              id: "edu-ped-dlc-ldi-mq1-8",
              type: "true-false",
              question:
                "La grupa mică și mijlocie se folosesc 3 imagini în practică.",
              correct: false,
              explanation:
                "La grupa mică și mijlocie se folosesc 2 imagini. La grupa mare " +
                "se folosesc 3 imagini.",
            },
            {
              id: "edu-ped-dlc-ldi-mq1-9",
              type: "fill-blank",
              question:
                "Pe baza sintezelor parțiale se va realiza o sinteză finală sub formă de _______.",
              correctAnswers: [
                "poveste",
                "Poveste",
                "POVESTE",
                "povestire",
                "Povestire",
                "POVESTIRE",
              ],
              explanation:
                "La final, pe baza celor 3 sinteze parțiale, preșcolarii vor crea " +
                "o poveste pe baza imaginii și îi vor da un titlu corespunzător.",
            },
            {
              id: "edu-ped-dlc-ldi-mq1-10",
              type: "multiple-choice",
              question:
                "De ce nu scriem răspunsurile copiilor la examen?",
              options: [
                "Pentru că nu încap pe foaia de concurs",
                "Pentru că nu ai de unde să știi ce răspund — se consideră semn de identificare",
                "Pentru că răspunsurile nu sunt evaluate",
                "Pentru că sunt prea multe variante posibile",
              ],
              correctIndex: 1,
              explanation:
                "Nu ai de unde să știi ce răspund copiii. Dacă scrii răspunsurile, " +
                "iar altcineva scrie la fel, se consideră semn de identificare.",
            },
          ],
        },
      },
      {
        id: "lectura-imagini-eseu",
        title: "Model complet de eseu — Tablou de iarnă",
        duration: "25 min",
        audio: chapter2Audio,
        sections: [
          {
            title: "Cerința-model",
            content:
              "Prezentați o activitate de lectură după imagini, ca una dintre " +
              "modalitățile specifice de realizare a unor activități didactice " +
              "în educația timpurie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Cerința completă:** Prezentați o activitate de lectură după " +
                  "imagini, ca una dintre modalitățile specifice de realizare a " +
                  "unor activități didactice în educația timpurie, având în vedere " +
                  "următoarele repere:\n\n" +
                  "1. Definirea conceptului de lectură după imagini (15 puncte)\n" +
                  "2. Prezentarea desfășurării unei activități de lectură după imagini — " +
                  "pentru grupa de vârstă **5-6 ani**, la domeniul experiențial " +
                  "**Științe, cunoașterea mediului**, tema anuală «Când, cum și de ce " +
                  "se întâmplă?»",
              },
            ],
          },
          {
            title: "Pașii eseului complet",
            content:
              "Definiție → introducere → localizare timp/spațiu → intuire plan central " +
              "→ sinteză parțială → plan secundar → sinteză parțială → plan îndepărtat " +
              "→ sinteză parțială → sinteză finală (poveste) → încheiere.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Structura eseului, pas cu pas:\n\n" +
                  "1. **Definiția** — lectura după imagini este o modalitate specifică " +
                  "de realizare a unor activități didactice **în educația timpurie**, " +
                  "cu scopul dezvoltării limbajului, vocabularului, capacității de " +
                  "analiză, interpretare și descriere, și a imaginației\n" +
                  "2. **Informații organizatorice** — domeniu, temă anuală, sub-temă " +
                  "(«Tablou de iarnă»), grupa de vârstă\n" +
                  "3. **Introducerea în activitate** — educatoarea aduce sub formă " +
                  "de surpriză un tablou + context (ex: «trimis de zâna iarnă»)\n" +
                  "4. **Localizare și personaje** — întrebări despre timp și loc, " +
                  "preșcolarii denumesc personajele\n" +
                  "5. **Intuirea planului central** → întrebări → sinteză parțială\n" +
                  "6. **Intuirea planului secundar** → întrebări → sinteză parțială\n" +
                  "7. **Intuirea planului îndepărtat** → întrebări → sinteză parțială\n" +
                  "8. **Sinteză finală** — preșcolarii creează o **poveste** pe baza " +
                  "imaginii și îi dau un **titlu corespunzător**\n" +
                  "9. **Încheierea** — aprecieri verbale și recompense stimulante",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Puteți înlocui «educatoarea» cu «cadru didactic» pentru a evita " +
                    "repetiția excesivă în eseu.",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model complet de eseu — Grupa mare (5-6 ani), Tablou de iarnă",
                  source: "claude",
                  content:
                    "**Lectura după imagini** este o modalitate specifică de realizare " +
                    "a unor activități didactice **în educația timpurie**, care are ca scop " +
                    "**dezvoltarea limbajului și a vocabularului**, dezvoltarea capacității " +
                    "de **analiză, interpretare și descriere** a datelor și a acțiunilor " +
                    "prezentate în imagini și a **imaginației**.\n\n" +
                    "Pentru grupa de vârstă **5-6 ani**, la domeniul experiențial " +
                    "**Științe, cunoașterea mediului** sau **DLC** — domeniul limbă și " +
                    "comunicare, educarea limbajului, având ca temă anuală de studiu " +
                    "**«Când, cum și de ce se întâmplă?»**, sub-tema **«Tablou de iarnă»**, " +
                    "educatoarea va introduce preșcolarii în activitate aducând sub formă " +
                    "de surpriză un tablou de iarnă.\n\n" +
                    "Educatoarea va spune preșcolarilor: «Acest tablou a fost trimis de " +
                    "către zâna iarnă, care dorește să vadă dacă preșcolarii cunosc " +
                    "caracteristicile anotimpului iarnă.»\n\n" +
                    "Desfășurarea activității va presupune ghidarea preșcolarilor de " +
                    "către educatoare în intuirea aspectelor din intermediul următoarelor " +
                    "întrebări: «Când se întâmplă acțiunea din imagine?», «Unde se află " +
                    "copiii din imagine?». Se va cere preșcolarilor să denumească fiecare " +
                    "personaj din imagine.\n\n" +
                    "Se va trece la intuirea **planului central** al imaginii, educatoarea " +
                    "adresând preșcolarilor următoarele întrebări: «Ce vedem în imagine?», " +
                    "«Ce fac copiii din imagine?», «Cum se simt ei?», «Cum sunt îmbrăcați?». " +
                    "Preșcolarii vor răspunde la întrebări și pe baza lor **se va realiza " +
                    "o sinteză parțială**.\n\n" +
                    "Se va trece la intuirea **planului secundar** al imaginii, educatoarea " +
                    "adresându-le preșcolarilor următoarele întrebări: «Ce observăm în " +
                    "spatele copiilor?», «Ce sport practică băiatul?», «Cum este îmbrăcat?», " +
                    "«Unde merge acesta?». Pe baza răspunsurilor primite de la preșcolari, " +
                    "**se va realiza sinteza parțială a planului secundar**.\n\n" +
                    "În continuare, se va trece la intuirea **planului îndepărtat** al " +
                    "imaginii, educatoarea adresând următoarele întrebări: «Ce vedem în " +
                    "îndepărtare?», «Cu ce sunt acoperiți copacii?», «Cum este cerul?», " +
                    "«Ce se vede pe cer?». Preșcolarii vor răspunde la întrebări și " +
                    "**se va realiza sinteza parțială**.\n\n" +
                    "Se va realiza pentru fixarea cunoștințelor o **sinteză finală**, unde " +
                    "preșcolarii **vor crea o poveste** pe baza imaginii și îi **vor da " +
                    "un titlu corespunzător**.\n\n" +
                    "În încheierea activității, educatoarea face **aprecieri verbale** " +
                    "asupra modului de participare la activitate și oferă **recompense " +
                    "stimulante**.",
                },
              },
            ],
          },
          {
            title: "Adaptarea la diferite teme și domenii",
            content:
              "Eseul se adaptează ușor la alte domenii și teme schimbând câteva cuvinte.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Eseul se adaptează schimbând:\n\n" +
                  "- **Tema**: iarna → familia, circulația, faptele bune\n" +
                  "- **Personajul**: zâna iarnă → zâna faptelor bune, polițistul etc.\n" +
                  "- **Scopul**: «să vadă dacă cunosc caracteristicile» → «să creeze " +
                  "o poveste despre...» (pentru DLC)\n" +
                  "- **Întrebările**: adaptate la imaginea aleasă\n\n" +
                  "**Exemple de adaptare:**\n\n" +
                  "| Tema anuală | Domeniu | Context |\n" +
                  "|-------------|---------|----------|\n" +
                  "| Când, cum și de ce se întâmplă? | Științe | Tablou de iarnă — caracteristici |\n" +
                  "| Când, cum și de ce se întâmplă? | DLC | Tablou de iarnă — creare poveste |\n" +
                  "| Cine sunt / suntem? | DOS | Familie — membrii familiei |\n" +
                  "| Cum exprimăm ceea ce simțim? | DEC | Tablou cu emoții |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La **DLC**, în loc de «să vadă dacă preșcolarii cunosc " +
                    "caracteristicile anotimpului iarnă», scrieți: «să vadă dacă " +
                    "preșcolarii pot crea o poveste despre iarnă pe baza imaginii». " +
                    "Restul eseului rămâne identic.",
                },
              },
              {
                kind: "text",
                text:
                  "**Legătura cu observarea:** Activitatea de **observare** (la " +
                  "cunoașterea mediului) funcționează similar cu lectura după imagini — " +
                  "tot pe bază de întrebări, cu sinteze parțiale. Diferența: la observare " +
                  "copilul observă un obiect real (cățel, frunză, plantă), nu o imagine.",
              },
            ],
          },
        ],
        examples: [
          {
            title: "Întrebări plan central — Tablou de iarnă",
            description:
              "«Ce vedem în imagine?», «Ce fac copiii din imagine?», " +
              "«Cum se simt ei?», «Cum sunt îmbrăcați?»",
          },
          {
            title: "Întrebări plan secundar — Tablou de iarnă",
            description:
              "«Ce observăm în spatele copiilor?», «Ce sport practică băiatul?», " +
              "«Cum este îmbrăcat?», «Unde merge acesta?»",
          },
          {
            title: "Întrebări plan îndepărtat — Tablou de iarnă",
            description:
              "«Ce vedem în îndepărtare?», «Cu ce sunt acoperiți copacii?», " +
              "«Cum este cerul?», «Ce se vede pe cer?»",
          },
        ],
        keyPoints: [
          {
            text: "Eseul urmează: definiție → introducere → 3 planuri cu întrebări → sinteză finală (poveste) → încheiere",
            important: true,
          },
          {
            text: "Se poate adapta la Științe (cunoașterea mediului) și DLC — același eseu, câteva cuvinte diferite",
            important: true,
          },
          {
            text: "La DLC: «să creeze o poveste», la Științe: «să cunoască caracteristicile»",
          },
          {
            text: "La grupa mică: reduci întrebările (de la ~4 la ~2 per plan)",
          },
          {
            text: "«Educatoarea» poate fi înlocuit cu «cadru didactic» pentru a evita repetiția",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-dlc-ldi-mq2-1",
              type: "multiple-choice",
              question:
                "Care este primul pas după introducerea în activitate la lectura după imagini?",
              options: [
                "Se trece direct la intuirea planului central",
                "Se adresează întrebări de localizare (timp și spațiu) și se denumesc personajele",
                "Se realizează sinteza finală",
                "Se face Explozia Stelară",
              ],
              correctIndex: 1,
              explanation:
                "După introducere, se adresează întrebări de localizare (când și unde " +
                "se întâmplă) și se cere preșcolarilor să denumească personajele din imagine.",
            },
            {
              id: "edu-ped-dlc-ldi-mq2-2",
              type: "true-false",
              question:
                "La lectura după imagini, la final copiii creează o poveste pe baza imaginii.",
              correct: true,
              explanation:
                "Da, la final se realizează o sinteză finală sub formă de poveste, " +
                "pe baza sintezelor parțiale de la cele 3 planuri de intuire. " +
                "Preșcolarii îi dau și un titlu corespunzător.",
            },
            {
              id: "edu-ped-dlc-ldi-mq2-3",
              type: "multiple-choice",
              question:
                "Cum se încheie activitatea de lectură după imagini?",
              options: [
                "Cu metoda Explozia Stelară",
                "Cu repovestirea integrală",
                "Cu aprecieri verbale și recompense stimulante",
                "Cu citirea unei povești din carte",
              ],
              correctIndex: 2,
              explanation:
                "Activitatea se încheie cu aprecieri verbale asupra modului de participare " +
                "și cu oferirea de recompense stimulante. Lectura după imagini NU " +
                "folosește Explozia Stelară (aceasta este specifică povestirii, " +
                "lecturii educatoarei și repovestirii).",
            },
            {
              id: "edu-ped-dlc-ldi-mq2-4",
              type: "true-false",
              question:
                "La Științe (cunoașterea mediului), contextul poate fi «să vadă dacă preșcolarii cunosc caracteristicile anotimpului iarnă».",
              correct: true,
              explanation:
                "Da, la domeniul Științe, scopul este ca preșcolarii să demonstreze " +
                "cunoașterea caracteristicilor temei. La DLC, scopul se schimbă " +
                "în «să creeze o poveste».",
            },
            {
              id: "edu-ped-dlc-ldi-mq2-5",
              type: "fill-blank",
              question:
                "La final, preșcolarii vor crea o poveste pe baza imaginii și îi vor da un _______ corespunzător.",
              correctAnswers: [
                "titlu",
                "Titlu",
                "TITLU",
              ],
              explanation:
                "Sinteza finală presupune crearea unei povești pe baza imaginii, " +
                "căreia preșcolarii îi vor da un titlu corespunzător.",
            },
            {
              id: "edu-ped-dlc-ldi-mq2-6",
              type: "multiple-choice",
              question:
                "Care este diferența între lectura după imagini la Științe și la DLC?",
              options: [
                "Structura eseului este complet diferită",
                "La Științe se folosesc 5 planuri, la DLC doar 3",
                "La Științe: «să cunoască caracteristicile», la DLC: «să creeze o poveste»",
                "La DLC nu se fac sinteze parțiale",
              ],
              correctIndex: 2,
              explanation:
                "Eseul este comun. Singura diferență este scopul din introducere: " +
                "la Științe — «să vadă dacă cunosc caracteristicile»; " +
                "la DLC — «să creeze o poveste pe baza imaginii».",
            },
            {
              id: "edu-ped-dlc-ldi-mq2-7",
              type: "multiple-choice",
              question:
                "Câte întrebări pe plan de intuire ar trebui adresate la grupa mică?",
              options: [
                "Același număr ca la grupa mare (4)",
                "Mai puține — aproximativ 2 per plan",
                "Nu se fac întrebări la grupa mică",
                "Mai multe — aproximativ 6 per plan",
              ],
              correctIndex: 1,
              explanation:
                "La grupa mică se reduc întrebările de la ~4 la ~2 per plan, " +
                "deoarece copiii sunt mici și își pierd atenția repede.",
            },
            {
              id: "edu-ped-dlc-ldi-mq2-8",
              type: "true-false",
              question:
                "Observarea funcționează similar cu lectura după imagini, dar pe obiecte reale.",
              correct: true,
              explanation:
                "Da, observarea (la cunoașterea mediului) funcționează similar — tot pe " +
                "bază de întrebări, cu sinteze parțiale. Diferența: la observare copilul " +
                "observă un obiect real, nu o imagine.",
            },
            {
              id: "edu-ped-dlc-ldi-mq2-9",
              type: "fill-blank",
              question:
                "Educatoarea va introduce preșcolarii în activitate aducând sub formă de _______ un tablou de iarnă.",
              correctAnswers: [
                "surpriză",
                "surpriza",
                "Surpriză",
                "Surpriza",
                "SURPRIZĂ",
                "SURPRIZA",
              ],
              explanation:
                "Educatoarea introduce preșcolarii în activitate aducând sub formă de " +
                "surpriză un tablou (element de captare a atenției).",
            },
            {
              id: "edu-ped-dlc-ldi-mq2-10",
              type: "multiple-choice",
              question:
                "Care este ordinea corectă a planurilor de intuire?",
              options: [
                "Îndepărtat → secundar → central",
                "Secundar → central → îndepărtat",
                "Central → secundar → îndepărtat",
                "Central → îndepărtat → secundar",
              ],
              correctIndex: 2,
              explanation:
                "Ordinea corectă: 1) Planul central (ce vezi prima dată), " +
                "2) Planul secundar (detalii din spate), 3) Planul îndepărtat (fundalul).",
            },
          ],
        },
      },
    ],
    transcript:
      "## Lectura după imagini\n\n" +
      "### Definiție\n" +
      "Lectura după imagini este o modalitate specifică de realizare a unor activități didactice " +
      "în educația timpurie, care are ca scop dezvoltarea limbajului și a vocabularului, " +
      "dezvoltarea capacității de analiză, interpretare și descriere a datelor și acțiunilor " +
      "prezentate în imagini și a imaginației.\n\n" +
      "### Cele 3 planuri de intuire\n" +
      "1. Planul central — ce vezi prima dată\n" +
      "2. Planul secundar — detalii din spate\n" +
      "3. Planul îndepărtat — fundalul\n\n" +
      "### Mecanism\n" +
      "- Fiecare plan → întrebări → sinteză parțială\n" +
      "- La final → sinteză finală = poveste cu titlu\n" +
      "- NU se scriu răspunsurile copiilor la examen\n\n" +
      "### Imagini pe grupe\n" +
      "Mică/Mijlocie: 2 | Mare: 3 | La examen: doar 1\n\n" +
      "### Pași eseu\n" +
      "Definiție → introducere (surpriză) → localizare (timp, spațiu, personaje) → " +
      "plan central + sinteză → plan secundar + sinteză → plan îndepărtat + sinteză → " +
      "sinteză finală (poveste + titlu) → încheiere (aprecieri + recompense)\n\n" +
      "### Adaptare domenii\n" +
      "Științe: «să cunoască caracteristicile» | DLC: «să creeze o poveste»",
    quiz: {
      topicId: "edu-ped-dlc-lectura-dupa-imagini",
      questions: [
        {
          id: "edu-ped-dlc-ldi-fq1",
          type: "multiple-choice",
          question:
            "Care este scopul principal al lecturii după imagini?",
          options: [
            "Dezvoltarea abilităților de citit-scris",
            "Dezvoltarea limbajului, vocabularului, capacității de analiză și a imaginației",
            "Formarea deprinderilor motrice",
            "Dezvoltarea competențelor matematice",
          ],
          correctIndex: 1,
          explanation:
            "Lectura după imagini are ca scop dezvoltarea limbajului și a vocabularului, " +
            "dezvoltarea capacității de analiză, interpretare și descriere a datelor " +
            "și acțiunilor prezentate în imagini și a imaginației.",
        },
        {
          id: "edu-ped-dlc-ldi-fq2",
          type: "true-false",
          question:
            "Lectura după imagini se desfășoară doar la domeniul experiențial Științe.",
          correct: false,
          explanation:
            "Lectura după imagini se poate desfășura atât la Științe (cunoașterea " +
            "mediului), cât și la DLC (domeniul limbă și comunicare). " +
            "Eseul este comun pentru ambele domenii.",
        },
        {
          id: "edu-ped-dlc-ldi-fq3",
          type: "multiple-choice",
          question:
            "Ce reprezintă planul secundar al imaginii?",
          options: [
            "Ce vezi prima dată — personajele principale",
            "Fundalul imaginii, elementele din depărtare",
            "Detaliile din spatele elementelor principale",
            "Titlul și autorul imaginii",
          ],
          correctIndex: 2,
          explanation:
            "Planul secundar cuprinde detaliile din spate, elementele secundare " +
            "(ex: un copil care urcă dealul, un animal în fundal).",
        },
        {
          id: "edu-ped-dlc-ldi-fq4",
          type: "fill-blank",
          question:
            "Lectura după imagini are 3 planuri de intuire: central, secundar și _______.",
          correctAnswers: [
            "îndepărtat",
            "indepartat",
            "Îndepărtat",
            "Indepartat",
            "ÎNDEPĂRTAT",
            "INDEPARTAT",
          ],
          explanation:
            "Cele 3 planuri sunt: planul central (ce vezi prima dată), planul " +
            "secundar (detalii din spate) și planul îndepărtat (fundalul).",
        },
        {
          id: "edu-ped-dlc-ldi-fq5",
          type: "multiple-choice",
          question:
            "Câte imagini se folosesc în practică la grupa mare?",
          options: [
            "1 imagine",
            "2 imagini",
            "3 imagini",
            "5 imagini",
          ],
          correctIndex: 2,
          explanation:
            "La grupa mare se folosesc 3 imagini în practică. " +
            "La examen se prezintă activitatea doar pentru 1 imagine.",
        },
        {
          id: "edu-ped-dlc-ldi-fq6",
          type: "true-false",
          question:
            "Sinteza finală presupune că preșcolarii creează o poveste și îi dau un titlu.",
          correct: true,
          explanation:
            "Da, la final, pe baza sintezelor parțiale de la cele 3 planuri, " +
            "preșcolarii vor crea o poveste pe baza imaginii și îi vor da " +
            "un titlu corespunzător.",
        },
        {
          id: "edu-ped-dlc-ldi-fq7",
          type: "multiple-choice",
          question:
            "Care este ordinea pașilor din eseul de lectură după imagini?",
          options: [
            "Definiție → 3 planuri → introducere → sinteză finală",
            "Introducere → definiție → 3 planuri → încheiere",
            "Definiție → introducere → localizare → 3 planuri cu sinteze parțiale → sinteză finală → încheiere",
            "Definiție → Explozia Stelară → 3 planuri → încheiere",
          ],
          correctIndex: 2,
          explanation:
            "Ordinea corectă: definiție → introducere (surpriză) → localizare " +
            "(timp, spațiu, personaje) → 3 planuri (central, secundar, îndepărtat) " +
            "cu câte o sinteză parțială → sinteză finală (poveste cu titlu) → " +
            "încheiere (aprecieri + recompense).",
        },
        {
          id: "edu-ped-dlc-ldi-fq8",
          type: "fill-blank",
          question:
            "Pe baza răspunsurilor copiilor la întrebările unui plan se realizează o sinteză _______.",
          correctAnswers: [
            "parțială",
            "partiala",
            "Parțială",
            "Partiala",
            "PARȚIALĂ",
            "PARTIALA",
          ],
          explanation:
            "Pentru fiecare plan de intuire, pe baza răspunsurilor copiilor, " +
            "se realizează o sinteză parțială (un rezumat). La final, din cele " +
            "3 sinteze parțiale se creează sinteza finală.",
        },
        {
          id: "edu-ped-dlc-ldi-fq9",
          type: "true-false",
          question:
            "La lectura după imagini se aplică metoda Explozia Stelară pentru fixarea cunoștințelor.",
          correct: false,
          explanation:
            "Lectura după imagini NU folosește Explozia Stelară. Fixarea cunoștințelor " +
            "se face prin sinteza finală (crearea unei povești). Explozia Stelară " +
            "este specifică povestirii educatoarei, lecturii educatoarei și repovestirii.",
        },
        {
          id: "edu-ped-dlc-ldi-fq10",
          type: "multiple-choice",
          question:
            "Ce element folosește educatoarea pentru a capta atenția la lectura după imagini?",
          options: [
            "O carte cu povești",
            "Un tablou adus sub formă de surpriză",
            "O marionetă-personaj",
            "Un videoclip educativ",
          ],
          correctIndex: 1,
          explanation:
            "La lectura după imagini, educatoarea introduce preșcolarii în activitate " +
            "aducând sub formă de surpriză un tablou (imagine). La povestirea/lectura " +
            "educatoarei se folosește marioneta-personaj.",
        },
      ],
    },
  },
];
