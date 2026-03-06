import { Lesson } from "@/types/lectii";

export const eduPedagogieStiinteObservareLessons: Lesson[] = [
  {
    topicId: "edu-ped-stiinte-observare",
    title: "Observarea — model de eseu (Subiectul 3)",
    duration: "60 min",
    objectives: [
      "Să definească observarea ca modalitate specifică în educația timpurie",
      "Să identifice scopul observării: dezvoltarea capacității de analiză și identificare a caracteristicilor",
      "Să diferențieze numărul de obiecte observate pe grupe de vârstă (mică: 1, mijlocie: 1-2, mare: 2+)",
      "Să descrie structura eseului de observare cu sinteze parțiale și sinteză finală",
      "Să aplice Diagrama Venn (grupa mare) și Explozia Stelară (grupa mică/mijlocie)",
      "Să argumenteze de ce la observare trebuie adus originalul (obiectul real)",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    chapters: [
      {
        id: "observare-definitie",
        title: "Definiția, scopul și specificul observării",
        duration: "20 min",
        sections: [
          {
            title: "Definiția observării",
            content:
              "Observarea este o modalitate specifică de realizare a unor " +
              "activități didactice în educația timpurie, având ca scop " +
              "dezvoltarea capacității de analiză, de identificare a " +
              "caracteristicilor obiectelor, fenomenelor naturii și a " +
              "ființelor, sub îndrumarea educatoarei.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Observarea** este o modalitate specifică de realizare " +
                  "a unor activități didactice **în educația timpurie**, " +
                  "având ca scop **dezvoltarea capacității de analiză**, " +
                  "de **identificare a caracteristicilor** obiectelor, " +
                  "fenomenelor naturii și a ființelor, **sub îndrumarea " +
                  "educatoarei**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Nu uita sintagma «în educația timpurie» în definiție — " +
                    "fără ea pierzi puncte. Răspunsul se află mereu în cerință.",
                },
              },
            ],
          },
          {
            title: "Scopul observării",
            content:
              "Scopul activității de observare este de a dezvolta preșcolarilor " +
              "capacitatea de analiză și de identificare a caracteristicilor " +
              "obiectelor, fenomenelor naturii și a ființelor, prin contactul " +
              "senzorial direct cu obiectele reale.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Scopul activității de observare este de a **dezvolta " +
                  "preșcolarilor capacitatea de analiză** și de identificare " +
                  "a caracteristicilor obiectelor, fenomenelor naturii și a " +
                  "ființelor, **prin intermediul simțurilor** (miros, gust, " +
                  "atingere, vedere).",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Scrie scopul ca paragraf separat imediat după definiție " +
                    "în eseu — la fel ca la convorbire. Menționarea simțurilor " +
                    "arată evaluatorului că înțelegi specificul observării.",
                },
              },
            ],
          },
          {
            title: "Domeniu experiențial — exclusiv Științe",
            content:
              "Observarea se face exclusiv la domeniul Științe, Cunoașterea " +
              "Mediului. Nu poate veni pe alt domeniu experiențial.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Regulă importantă:** Observarea se face **exclusiv** " +
                  "la domeniul experiențial **Științe, Cunoașterea Mediului**.\n\n" +
                  "- Nu poate veni pe alt domeniu experiențial (nu DLC, nu DOS)\n" +
                  "- Tema anuală de studiu (grupa mare): **«Când, cum și de ce se întâmplă?»**",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Dacă la examen vezi «observare» — știi sigur că e " +
                    "Științe, cunoașterea mediului. Nu ai cum să greșești " +
                    "domeniul.",
                },
              },
            ],
          },
          {
            title: "Diferențiere pe grupe de vârstă",
            content:
              "Grupa mică: 1 obiect. Grupa mijlocie: 1-2 obiecte. " +
              "Grupa mare: 2 sau mai multe obiecte, prin comparație.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "| Grupă | Nr. obiecte observate | Observație |\n" +
                  "|-------|----------------------|------------|\n" +
                  "| Mică | 1 singur obiect | Fruct, fenomen, animal |\n" +
                  "| Mijlocie | 1-2 obiecte | Depinde de nivelul copiilor |\n" +
                  "| Mare | 2 sau mai multe | Prin **comparație** |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "La grupa mare, de aceea se face Diagrama Venn — " +
                    "pentru că observi 2 obiecte și le compari " +
                    "(asemănări și deosebiri).",
                },
              },
            ],
          },
          {
            title: "Regula originalului",
            content:
              "La observare trebuie adus obiectul real (originalul). " +
              "Dacă nu aduci originalul, se scad puncte. Mulajele sunt " +
              "acceptate doar când nu se pot aduce animale vii.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Regulă esențială:** La observare trebuie adus " +
                  "**originalul** (obiectul real).\n\n" +
                  "- Fructe → aduci fructe reale\n" +
                  "- Flori → aduci flori reale (de la rădăcină în sus)\n" +
                  "- Animale → de la cap în jos\n" +
                  "- **Excepție:** animale care nu pot fi aduse în sala de grupă → se pot aduce **mulaje**\n" +
                  "- Dacă nu aduci originalul, se scad puncte la evaluare",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Experiență de la examen: o colegă a adus cartonul " +
                    "cu trusa medicală în loc de original și i s-a scăzut " +
                    "un punct. La observare, mereu aduci obiectul real!",
                },
              },
            ],
          },
          {
            title: "Ordinea de observare",
            content:
              "La plante se observă de la rădăcină în sus. " +
              "La animale se observă de la cap în jos.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Ordinea de observare:**\n\n" +
                  "| Tip obiect | Direcție de observare |\n" +
                  "|-----------|---------------------|\n" +
                  "| **Plante/Flori** | De la **rădăcină** în sus |\n" +
                  "| **Animale** | De la **cap** în jos |",
              },
            ],
          },
          {
            title: "Comparativ cu alte modalități",
            content:
              "Observarea vs. Convorbirea vs. Lectura după imagini vs. Povestirea " +
              "educatoarei — diferențe de suport, domeniu, element-surpriză și metodă.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tabel comparativ — modalități specifice:**\n\n" +
                  "| Aspect | Observare | Convorbire | Lectura după imagini | Povestire |\n" +
                  "|--------|-----------|-----------|---------------------|----------|\n" +
                  "| **Domeniu** | Exclusiv Științe | Științe, DLC, DOS | Științe, DLC, DOS | DLC |\n" +
                  "| **Suport** | Obiect real (original) | Fără suport intuitiv | Tablou (suport intuitiv) | Carte/text |\n" +
                  "| **Element-surpriză** | Coș cu obiecte reale | Scrisoare | Tablou | Marionetă |\n" +
                  "| **Simțuri** | Toate (miros, gust, atingere, vedere) | Nu (doar verbal) | Doar vedere | Doar auzul |\n" +
                  "| **Metodă modernă** | Diagrama Venn / Explozia Stelară | Poveste + titlu | 3 planuri de intuire | Repovestire |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Dacă la examen confunzi elementele-surpriză sau suportul " +
                    "între modalități, pierzi puncte. Memorează: Observare = coș, " +
                    "Convorbire = scrisoare, Lectura = tablou, Povestire = marionetă.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Comparație: Observare vs. Convorbire vs. Lectura după imagini",
            description:
              "Observare: obiect real, Științe exclusiv, simțuri, coș-surpriză. " +
              "Convorbire: fără suport intuitiv, verbal, scrisoare-surpriză, Științe/DLC/DOS. " +
              "Lectura după imagini: tablou-surpriză, 3 planuri, Științe/DLC/DOS.",
          },
          {
            title: "Tema: Vișina și Căpșuna (grupa mare)",
            description:
              "Se aduc fructe reale. Se observă prin simțuri (miros, gust, " +
              "atingere, privire). Se compară prin Diagrama Venn.",
          },
        ],
        keyPoints: [
          {
            text: "Observarea = modalitate specifică la Științe, cunoașterea mediului, cu obiect real",
            important: true,
          },
          {
            text: "Scopul: dezvoltarea capacității de analiză și identificare a caracteristicilor obiectelor, fenomenelor și ființelor",
            important: true,
          },
          {
            text: "Trebuie adus originalul — dacă nu, se scad puncte",
            important: true,
          },
          {
            text: "Mică: 1 obiect; Mijlocie: 1-2; Mare: 2+ prin comparație",
          },
          {
            text: "Plante: de la rădăcină în sus; Animale: de la cap în jos",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-stiinte-obs-mq1-1",
              type: "multiple-choice",
              question:
                "Ce este observarea în educația timpurie?",
              options: [
                "O activitate de lectură cu suport intuitiv",
                "O modalitate specifică cu scop de dezvoltare a capacității de analiză",
                "O activitate de dramatizare",
                "O modalitate de convorbire cu întrebări și răspunsuri",
              ],
              correctIndex: 1,
              explanation:
                "Observarea este o modalitate specifică de realizare a unor activități didactice " +
                "în educația timpurie, având ca scop dezvoltarea capacității de analiză " +
                "și identificare a caracteristicilor obiectelor, fenomenelor și ființelor.",
            },
            {
              id: "edu-ped-stiinte-obs-mq1-2",
              type: "true-false",
              question:
                "Scopul observării include dezvoltarea capacității de analiză prin intermediul simțurilor.",
              correct: true,
              explanation:
                "Da, scopul activității de observare este dezvoltarea capacității " +
                "de analiză și identificare a caracteristicilor, prin intermediul " +
                "simțurilor (miros, gust, atingere, vedere).",
            },
            {
              id: "edu-ped-stiinte-obs-mq1-3",
              type: "multiple-choice",
              question:
                "Câte obiecte se observă la grupa mare?",
              options: [
                "Un singur obiect",
                "Doar 2 obiecte",
                "2 sau mai multe obiecte, prin comparație",
                "Minimum 4 obiecte",
              ],
              correctIndex: 2,
              explanation:
                "La grupa mare se observă 2 sau mai multe obiecte, " +
                "prin comparație (asemănări și deosebiri).",
            },
            {
              id: "edu-ped-stiinte-obs-mq1-4",
              type: "true-false",
              question:
                "La observare poți folosi imagini sau cartonașe în loc de obiectul real.",
              correct: false,
              explanation:
                "La observare trebuie adus ORIGINALUL (obiectul real). " +
                "Dacă nu aduci originalul, se scad puncte. Mulajele sunt " +
                "acceptate doar pentru animale periculoase.",
            },
            {
              id: "edu-ped-stiinte-obs-mq1-5",
              type: "fill-blank",
              question:
                "La plante, observarea se face de la _______ în sus.",
              correctAnswers: [
                "rădăcină",
                "radacina",
                "Rădăcină",
                "Radacina",
                "RĂDĂCINĂ",
                "RADACINA",
              ],
              explanation:
                "La plante/flori, observarea se face de la rădăcină în sus. " +
                "La animale, se face de la cap în jos.",
            },
            {
              id: "edu-ped-stiinte-obs-mq1-6",
              type: "multiple-choice",
              question:
                "O colegă planifică o observare la DLC despre flori, folosind poze în loc de flori reale. Ce greșeli face?",
              options: [
                "Nicio greșeală — totul e corect",
                "Domeniu greșit (nu DLC) + lipsește originalul (trebuie flori reale)",
                "Doar domeniul e greșit (trebuie DOS)",
                "Doar suportul e greșit (trebuie un tablou)",
              ],
              correctIndex: 1,
              explanation:
                "Două greșeli: (1) Observarea se face exclusiv la Științe, " +
                "nu la DLC; (2) Trebuie adus originalul (flori reale), " +
                "nu poze sau imagini.",
            },
            {
              id: "edu-ped-stiinte-obs-mq1-7",
              type: "true-false",
              question:
                "La grupa mică se observă un singur obiect.",
              correct: true,
              explanation:
                "Da, la grupa mică se observă un singur obiect " +
                "(fruct, fenomen, animal). La mijlocie 1-2, la mare 2+.",
            },
            {
              id: "edu-ped-stiinte-obs-mq1-8",
              type: "multiple-choice",
              question:
                "Care este tema anuală de studiu pentru observare la grupa mare?",
              options: [
                "«Cu ce și cum exprimăm ceea ce simțim?»",
                "«Când, cum și de ce se întâmplă?»",
                "«Cine sunt eu / suntem noi?»",
                "«Cum este, a fost și va fi aici pe pământ?»",
              ],
              correctIndex: 1,
              explanation:
                "La observare (Științe, cunoașterea mediului), tema anuală " +
                "de studiu este «Când, cum și de ce se întâmplă?».",
            },
            {
              id: "edu-ped-stiinte-obs-mq1-9",
              type: "fill-blank",
              question:
                "La animale, observarea se face de la _______ în jos.",
              correctAnswers: [
                "cap",
                "Cap",
                "CAP",
              ],
              explanation:
                "La animale, observarea se face de la cap în jos. " +
                "La plante, de la rădăcină în sus.",
            },
            {
              id: "edu-ped-stiinte-obs-mq1-10",
              type: "multiple-choice",
              question:
                "Ce metodă modernă se aplică la grupa mică și mijlocie în loc de Diagrama Venn?",
              options: [
                "Cubul",
                "Ciorchinele",
                "Explozia Stelară",
                "Turul galeriei",
              ],
              correctIndex: 2,
              explanation:
                "La grupa mică și mijlocie se aplică Explozia Stelară " +
                "(5 întrebări: Cine? Ce? Unde? Când? De ce?) " +
                "în loc de Diagrama Venn.",
            },
          ],
        },
      },
      {
        id: "observare-eseu",
        title: "Model complet de eseu — Vișina și Căpșuna",
        duration: "35 min",
        sections: [
          {
            title: "Cerința-model",
            content:
              "Prezentați o activitate de observare ca una dintre " +
              "modalitățile specifice de realizare a activităților didactice " +
              "în educația timpurie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Cerința completă:** Prezentați o activitate de observare " +
                  "ca una dintre modalitățile specifice de realizare a " +
                  "activităților didactice din educația timpurie, având în vedere " +
                  "următoarele repere:\n\n" +
                  "1. Definirea conceptului de activitate de observare\n" +
                  "2. Prezentarea desfășurării unei activități de observare — " +
                  "pentru grupa de vârstă **5-6 ani**, la domeniul experiențial " +
                  "**Științe, Cunoașterea Mediului**",
              },
            ],
          },
          {
            title: "Introducerea în activitate (moment-surpriză)",
            content:
              "Educatoarea introduce preșcolarii aducând sub formă de surpriză " +
              "un coș cu fructe reale. Fiecare copil primește câte un exemplar " +
              "pentru a-l observa prin simțuri.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Informații organizatorice:**\n" +
                  "- Domeniu: Științe, Cunoașterea Mediului\n" +
                  "- Tema anuală: «Când, cum și de ce se întâmplă?»\n" +
                  "- Sub-tema: «Vișina și căpșuna»\n" +
                  "- Grupa: 5-6 ani (grupa mare)\n" +
                  "- Metode și procedee: observația, conversația, explicația, Diagrama Venn\n" +
                  "- Mijloace de învățământ: fructe reale (vișine, căpșuni), coș, " +
                  "Diagrama Venn pe tablă, imagini pentru diagramă",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Sub-tema o alegi tu — poate fi orice se potrivește la " +
                    "tema anuală «Când, cum și de ce se întâmplă?». " +
                    "Nu ești blocat pe «Vișina și căpșuna».",
                },
              },
              {
                kind: "text",
                text:
                  "Educatoarea va introduce preșcolarii în activitate, aducând " +
                  "sub formă de surpriză **un coș în care se află vișine și " +
                  "căpșuni**.\n\n" +
                  "Fiecare preșcolar va primi o vișină și o căpșună pentru " +
                  "a le **mirosi**, **gusta**, **atinge**, **vedea/privi**, " +
                  "urmând să răspundă la întrebările adresate de către educatoare.\n\n" +
                  "Educatoarea va **anunța tema și obiectivele activității**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Elementul-surpriză la observare este un **coș cu obiecte reale** " +
                    "(nu scrisoare ca la convorbire, nu tablou ca la lectura " +
                    "după imagini). Copiii folosesc toate simțurile!",
                },
              },
            ],
          },
          {
            title: "Setul 1 de întrebări — Locul și structura",
            content:
              "Educatoarea ghidează preșcolarii în observarea fructelor " +
              "prin întrebări despre locul unde cresc și structura lor.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Educatoarea va ghida preșcolarii în observarea celor două fructe " +
                  "prin intermediul întrebărilor referitoare la **locul unde cresc** " +
                  "și la **structura lor**:\n\n" +
                  "- «Unde cresc vișinele? Dar căpșunile?»\n" +
                  "- «Ce părți componente are căpșuna? Dar vișina?»\n" +
                  "- «Ce parte a fructului consumăm?»\n\n" +
                  "**→ Se va realiza o sinteză parțială** a răspunsurilor " +
                  "date de preșcolari.",
              },
            ],
          },
          {
            title: "Setul 2 de întrebări — Însușiri caracteristice",
            content:
              "Preșcolarii observă însușirile caracteristice: culoare, " +
              "formă, textură.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Preșcolarii vor observa **însușirile caracteristice** " +
                  "ale celor două fructe, fiind ghidați de educatoare:\n\n" +
                  "- «Ce culoare are căpșuna? Dar vișina?»\n" +
                  "- «Ce formă are căpșuna? Dar vișina?»\n" +
                  "- «Ce textură are căpșuna? Dar vișina?»\n\n" +
                  "**Notă:** Căpșuna are semințe mici pe exterior, " +
                  "vișina are un sâmbure interior — diferență de textură.\n\n" +
                  "**→ Se va realiza o sinteză parțială** pe baza " +
                  "răspunsurilor oferite de preșcolari.",
              },
            ],
          },
          {
            title: "Discuție — Produse și beneficii",
            content:
              "Educatoarea discută cu preșcolarii despre produsele obținute " +
              "din fructe și beneficiile asupra sănătății.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Educatoarea va discuta cu preșcolarii despre:\n\n" +
                  "- **Produsul obținut** din cele două fructe: dulceață, compot, suc\n" +
                  "- **Beneficiile** aduse de acestea asupra sănătății: " +
                  "vitamine, energie, creștere sănătoasă",
              },
            ],
          },
          {
            title: "Sinteză finală + Diagrama Venn",
            content:
              "Se realizează sinteza finală și se aplică Diagrama Venn " +
              "pentru identificarea asemănărilor și deosebirilor.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Se va realiza o **sinteză finală**, unde se vor încadra " +
                  "vișina și căpșuna în **categoria fructelor specifice " +
                  "anotimpului vara**.\n\n" +
                  "Se va aplica **metoda modernă Diagrama Venn**, cu scopul " +
                  "de a identifica asemănările și deosebirile dintre cele " +
                  "două fructe.",
              },
              {
                kind: "text",
                text:
                  "**Diagrama Venn — Model:**\n\n" +
                  "| Cercul 1 (Căpșuna) | Intersecția (Asemănări) | Cercul 2 (Vișina) |\n" +
                  "|--------------------|-----------------------|-------------------|\n" +
                  "| Semințe mici pe exterior | Ambele sunt fructe de vară | Sâmbure interior |\n" +
                  "| Formă conică | Culoare roșie | Formă rotundă |\n" +
                  "| | Conțin vitamine | |\n" +
                  "| | Se face dulceață/compot | |\n" +
                  "| | Copil sănătos/fericit | |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "La diagrama Venn se folosesc IMAGINI, nu text scris. " +
                    "Imaginea cu semințe mici, imaginea cu sâmbure, " +
                    "imaginea cu un coș de fructe de vară, borcan de dulceață etc.",
                },
              },
            ],
          },
          {
            title: "Explozia Stelară — pentru grupa mică și mijlocie",
            content:
              "În loc de Diagrama Venn, la grupa mică și mijlocie " +
              "se aplică Explozia Stelară cu 5 întrebări.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Pentru grupa mică și mijlocie**, în loc de Diagrama Venn, " +
                  "se aplică **metoda modernă Explozia Stelară**:\n\n" +
                  "- **Cine?** — Cine consumă fructe? Cine are gust amărui?\n" +
                  "- **Ce?** — Ce gust au fructele? Ce conțin fructele? Ce culoare au?\n" +
                  "- **Unde?** — Unde cresc fructele?\n" +
                  "- **Când?** — Când se culeg fructele?\n" +
                  "- **De ce?** — De ce consumăm fructe? De ce este important " +
                  "să consumăm fructe?",
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
                  type: "practical",
                  content:
                    "**Obiective operaționale (chenar):** La sfârșitul activității, " +
                    "preșcolarii vor fi capabili: (1) să identifice cel puțin 3 " +
                    "însușiri ale fiecărui fruct observat; (2) să compare cele două " +
                    "fructe identificând 2 asemănări și 2 deosebiri; (3) să încadreze " +
                    "fructele în categoria fructelor de vară.",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model complet de eseu — Grupa mare (5-6 ani), Vișina și Căpșuna",
                  source: "claude",
                  content:
                    "**Observarea** este o modalitate specifică de realizare " +
                    "a unor activități didactice **în educația timpurie**, " +
                    "având ca scop **dezvoltarea capacității de analiză**, " +
                    "de identificare a caracteristicilor obiectelor, fenomenelor " +
                    "naturii și a ființelor, sub îndrumarea educatoarei.\n\n" +
                    "Scopul activității de observare este de a dezvolta " +
                    "preșcolarilor capacitatea de analiză și de identificare " +
                    "a caracteristicilor obiectelor, fenomenelor naturii și " +
                    "a ființelor, prin intermediul simțurilor.\n\n" +
                    "Pentru a desfășura activitatea de observare la grupa de " +
                    "vârstă **5-6 ani**, domeniul experiențial **Științe**, " +
                    "Cunoașterea Mediului, având ca temă anuală de studiu " +
                    "**«Când, cum și de ce se întâmplă?»**, sub-tema " +
                    "**«Vișina și căpșuna»**, educatoarea va introduce preșcolarii " +
                    "în activitate, aducând sub formă de surpriză un coș în care " +
                    "se află vișine și căpșuni.\n\n" +
                    "Fiecare preșcolar va primi o vișină și o căpșună pentru a le " +
                    "mirosi, gusta, atinge, vedea/privi, urmând să răspundă " +
                    "la întrebările adresate de către educatoare.\n\n" +
                    "Educatoarea va anunța tema și obiectivele activității.\n\n" +
                    "Educatoarea va ghida preșcolarii în observarea celor două " +
                    "fructe prin intermediul întrebărilor referitoare la locul " +
                    "unde acestea cresc, dar și la structura lor: «Unde cresc " +
                    "vișinele? Dar căpșunile?», «Ce părți componente are " +
                    "căpșuna? Dar vișina?», «Ce parte a fructului consumăm?».\n\n" +
                    "Se va realiza o sinteză parțială a răspunsurilor date " +
                    "de preșcolari.\n\n" +
                    "Preșcolarii vor observa însușirile caracteristice ale " +
                    "celor două fructe, fiind ghidați de către educatoare prin " +
                    "întrebări: «Ce culoare are căpșuna? Dar vișina?», " +
                    "«Ce formă are căpșuna? Dar vișina?», «Ce textură are " +
                    "căpșuna? Dar vișina?».\n\n" +
                    "Se va realiza o sinteză parțială pe baza răspunsurilor " +
                    "oferite de preșcolari.\n\n" +
                    "Educatoarea va discuta cu preșcolarii despre produsul " +
                    "obținut din cele două fructe (dulceață, compot) și despre " +
                    "beneficiile aduse de acestea asupra sănătății.\n\n" +
                    "Se va realiza o sinteză finală, unde se vor încadra vișina " +
                    "și căpșuna în categoria fructelor specifice anotimpului vara.\n\n" +
                    "Se va aplica metoda modernă **Diagrama Venn**, cu scopul " +
                    "de a identifica asemănările și deosebirile dintre cele " +
                    "două fructe: în primul cerc se vor plasa imaginile care " +
                    "ilustrează aspectele caracteristice căpșunii, în cel de-al " +
                    "doilea, ale vișinei, iar la intersecția celor două cercuri " +
                    "se vor plasa asemănările dintre cele două fructe.\n\n" +
                    "În încheierea activității, educatoarea face **aprecieri " +
                    "verbale** și oferă **stimulente sau recompense**.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Diagrama Venn — Vișina și Căpșuna",
            description:
              "Cerc 1: Căpșuna (semințe exterioare, formă conică). " +
              "Cerc 2: Vișina (sâmbure interior, formă rotundă). " +
              "Intersecție: fructe de vară, roșii, vitamine, dulceață.",
          },
          {
            title: "Explozia Stelară — Fructe",
            description:
              "Cine consumă fructe? Ce gust au? Ce culoare au? " +
              "Unde cresc? Când se culeg? De ce consumăm fructe?",
          },
          {
            title: "Adaptare: Cățelul și Pisica (animale)",
            description:
              "Aceeași structură, dar: observare de la cap în jos, " +
              "3 sinteze parțiale la grupa mare (loc + însușiri + obiceiuri), " +
              "mulaje acceptate, tema «Cum este, a fost și va fi aici pe pământ?».",
          },
        ],
        keyPoints: [
          {
            text: "Eseul urmează: definiție + scop → introducere (coș-surpriză) + anunțare temă → setul 1 (loc + structură) + sinteză parțială → setul 2 (însușiri) + sinteză parțială → discuție produse/beneficii → sinteză finală + Diagrama Venn → încheiere",
            important: true,
          },
          {
            text: "Diagrama Venn (grupa mare) vs. Explozia Stelară (grupa mică/mijlocie)",
            important: true,
          },
          {
            text: "Elementul-surpriză = un coș cu obiecte reale (nu scrisoare, nu tablou)",
          },
          {
            text: "Copiii folosesc toate simțurile: miros, gust, atingere, vedere",
          },
          {
            text: "Sinteza finală: încadrarea obiectelor în categoria lor (ex: fructe de vară)",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-stiinte-obs-mq2-1",
              type: "multiple-choice",
              question:
                "Ce aduce educatoarea sub formă de surpriză la observare?",
              options: [
                "O scrisoare de la un personaj",
                "Un tablou cu o imagine",
                "Un coș cu obiecte reale",
                "O marionetă-personaj",
              ],
              correctIndex: 2,
              explanation:
                "La observare, elementul-surpriză este un coș cu obiecte reale " +
                "(ex: vișine și căpșuni). La convorbire = scrisoare, " +
                "la lectura după imagini = tablou.",
            },
            {
              id: "edu-ped-stiinte-obs-mq2-2",
              type: "true-false",
              question:
                "La Diagrama Venn se scrie text, nu se pun imagini.",
              correct: false,
              explanation:
                "La Diagrama Venn se folosesc IMAGINI (nu text scris). " +
                "Se plasează imaginile caracteristice în fiecare cerc " +
                "și asemănările la intersecție.",
            },
            {
              id: "edu-ped-stiinte-obs-mq2-3",
              type: "multiple-choice",
              question:
                "Ce simțuri folosesc preșcolarii la observare?",
              options: [
                "Doar vederea",
                "Vederea și auzul",
                "Mirosul, gustul, atingerea și vederea",
                "Doar atingerea și gustul",
              ],
              correctIndex: 2,
              explanation:
                "La observare, copiii folosesc toate simțurile disponibile: " +
                "mirosul, gustul, atingerea și vederea/privirea.",
            },
            {
              id: "edu-ped-stiinte-obs-mq2-4",
              type: "fill-blank",
              question:
                "Vișina și căpșuna sunt fructe specifice anotimpului _______.",
              correctAnswers: [
                "vara",
                "Vara",
                "VARA",
              ],
              explanation:
                "La sinteza finală, vișina și căpșuna se încadrează " +
                "în categoria fructelor specifice anotimpului vara.",
            },
            {
              id: "edu-ped-stiinte-obs-mq2-5",
              type: "multiple-choice",
              question:
                "Ce se plasează la intersecția Diagramei Venn?",
              options: [
                "Deosebirile dintre cele două obiecte",
                "Asemănările dintre cele două obiecte",
                "Numele obiectelor observate",
                "Întrebările educatoarei",
              ],
              correctIndex: 1,
              explanation:
                "La intersecția celor două cercuri se plasează " +
                "asemănările dintre cele două obiecte observate.",
            },
            {
              id: "edu-ped-stiinte-obs-mq2-6",
              type: "true-false",
              question:
                "La observare, setul 1 de întrebări se referă la culoare și formă.",
              correct: false,
              explanation:
                "Setul 1 se referă la locul unde cresc și structura " +
                "obiectelor. Culoarea și forma fac parte din setul 2 " +
                "(însușirile caracteristice).",
            },
            {
              id: "edu-ped-stiinte-obs-mq2-7",
              type: "multiple-choice",
              question:
                "Ce diferențiază textura căpșunii de cea a vișinei?",
              options: [
                "Căpșuna e moale, vișina e tare",
                "Căpșuna are semințe mici pe exterior, vișina are sâmbure interior",
                "Ambele au aceeași textură",
                "Căpșuna are coajă groasă, vișina are coajă subțire",
              ],
              correctIndex: 1,
              explanation:
                "Căpșuna are semințe mici pe exterior, iar vișina " +
                "are un sâmbure interior — aceasta e diferența de textură.",
            },
            {
              id: "edu-ped-stiinte-obs-mq2-8",
              type: "fill-blank",
              question:
                "Diagrama Venn identifică asemănările și _______ dintre două obiecte.",
              correctAnswers: [
                "deosebirile",
                "Deosebirile",
                "DEOSEBIRILE",
                "diferențele",
                "Diferențele",
                "DIFERENȚELE",
                "diferentele",
                "Diferentele",
                "DIFERENTELE",
              ],
              explanation:
                "Diagrama Venn se aplică cu scopul de a identifica " +
                "asemănările și deosebirile dintre cele două obiecte.",
            },
            {
              id: "edu-ped-stiinte-obs-mq2-9",
              type: "true-false",
              question:
                "Educatoarea face aprecieri verbale și oferă recompense la încheierea activității.",
              correct: true,
              explanation:
                "Da, la încheierea activității, educatoarea face aprecieri " +
                "verbale și oferă stimulente sau recompense.",
            },
            {
              id: "edu-ped-stiinte-obs-mq2-10",
              type: "multiple-choice",
              question:
                "Ce se discută după observarea însușirilor caracteristice?",
              options: [
                "Se trece direct la Diagrama Venn",
                "Produsele obținute și beneficiile asupra sănătății",
                "Se repetă întrebările de la setul 1",
                "Se face o activitate de desen",
              ],
              correctIndex: 1,
              explanation:
                "După setul 2, educatoarea discută cu preșcolarii despre " +
                "produsul obținut din fructe (dulceață, compot) și " +
                "beneficiile asupra sănătății.",
            },
          ],
        },
      },
    ],
    transcript:
      "## Observarea\n\n" +
      "### Definiție\n" +
      "Observarea este o modalitate specifică de realizare a unor activități didactice " +
      "în educația timpurie, având ca scop dezvoltarea capacității de analiză, " +
      "de identificare a caracteristicilor obiectelor, fenomenelor naturii și a " +
      "ființelor, sub îndrumarea educatoarei.\n\n" +
      "### Scop\n" +
      "Dezvoltarea capacității de analiză și identificare prin intermediul simțurilor.\n\n" +
      "### Domeniu\n" +
      "Exclusiv Științe, Cunoașterea Mediului. Sub-tema o alegi tu.\n\n" +
      "### Diferențiere pe grupe\n" +
      "Mică: 1 obiect | Mijlocie: 1-2 | Mare: 2+ prin comparație\n\n" +
      "### Reguli\n" +
      "- Trebuie adus originalul (obiectul real)\n" +
      "- Plante: de la rădăcină în sus; Animale: de la cap în jos\n" +
      "- Diagrama Venn la grupa mare; Explozia Stelară la mică/mijlocie\n\n" +
      "### Pași eseu\n" +
      "Definiție + scop → introducere (coș cu obiecte reale, simțuri) + anunțare temă → setul 1 " +
      "(loc + structură) + sinteză parțială → setul 2 (culoare + formă + textură) " +
      "+ sinteză parțială → discuție produse/beneficii → sinteză finală " +
      "(încadrare categorie) + Diagrama Venn → încheiere (aprecieri + recompense)",
    quiz: {
      topicId: "edu-ped-stiinte-observare",
      questions: [
        {
          id: "edu-ped-stiinte-obs-fq1",
          type: "multiple-choice",
          question:
            "Ce dezvoltă observarea la preșcolari?",
          options: [
            "Capacitatea de a se exprima independent",
            "Capacitatea de analiză și identificare a caracteristicilor",
            "Capacitatea de a citi și scrie",
            "Capacitatea de a memora poezii",
          ],
          correctIndex: 1,
          explanation:
            "Observarea are ca scop dezvoltarea capacității de analiză, " +
            "de identificare a caracteristicilor obiectelor, fenomenelor " +
            "naturii și a ființelor.",
        },
        {
          id: "edu-ped-stiinte-obs-fq2",
          type: "true-false",
          question:
            "La observare, după elementul-surpriză, educatoarea anunță tema și obiectivele activității.",
          correct: true,
          explanation:
            "Da, după introducerea cu coșul-surpriză, educatoarea " +
            "anunță tema și obiectivele activității — pas standard " +
            "în orice eseu despre desfășurarea unei activități.",
        },
        {
          id: "edu-ped-stiinte-obs-fq3",
          type: "multiple-choice",
          question:
            "Ce trebuie adus la activitatea de observare?",
          options: [
            "Un tablou cu imagini",
            "O scrisoare de la un personaj",
            "Obiectul real (originalul)",
            "Un film sau o prezentare",
          ],
          correctIndex: 2,
          explanation:
            "La observare trebuie adus originalul (obiectul real). " +
            "Dacă nu aduci originalul, se scad puncte la evaluare.",
        },
        {
          id: "edu-ped-stiinte-obs-fq4",
          type: "fill-blank",
          question:
            "La grupa mare se aplică metoda modernă Diagrama _______.",
          correctAnswers: [
            "Venn",
            "venn",
            "VENN",
            "Ven",
            "ven",
          ],
          explanation:
            "La grupa mare se aplică Diagrama Venn pentru a identifica " +
            "asemănările și deosebirile dintre cele 2 obiecte observate.",
        },
        {
          id: "edu-ped-stiinte-obs-fq5",
          type: "multiple-choice",
          question:
            "De ce se aplică Diagrama Venn doar la grupa mare, nu și la mică/mijlocie?",
          options: [
            "Pentru că la grupa mică nu se fac activități de observare",
            "Pentru că la grupa mare se observă 2+ obiecte prin comparație, iar Diagrama Venn compară",
            "Pentru că Diagrama Venn este prea dificilă pentru orice grupă",
            "Pentru că la mică/mijlocie se folosesc doar imagini",
          ],
          correctIndex: 1,
          explanation:
            "Diagrama Venn se aplică la grupa mare deoarece acolo se observă " +
            "2 sau mai multe obiecte prin comparație (asemănări și deosebiri). " +
            "La mică/mijlocie se observă 1-2 obiecte, deci se folosește Explozia Stelară.",
        },
        {
          id: "edu-ped-stiinte-obs-fq6",
          type: "true-false",
          question:
            "La animale, observarea se face de la rădăcină în sus.",
          correct: false,
          explanation:
            "La animale, observarea se face de la CAP în jos. " +
            "De la rădăcină în sus se face la plante/flori.",
        },
        {
          id: "edu-ped-stiinte-obs-fq7",
          type: "multiple-choice",
          question:
            "Educatoarea pregătește o observare la grupa mare cu tema «Mărul și Para». Ce trebuie să aducă fiecărui copil?",
          options: [
            "Imagini cu fructele respective",
            "Câte un măr real și o pară reală",
            "Un mulaj de fruct din plastic",
            "O carte cu poze despre fructe",
          ],
          correctIndex: 1,
          explanation:
            "La observare trebuie adus originalul. Fiecare preșcolar " +
            "primește câte un exemplar real din fiecare fruct, " +
            "pentru a-l observa prin simțuri (miros, gust, atingere, vedere).",
        },
        {
          id: "edu-ped-stiinte-obs-fq8",
          type: "fill-blank",
          question:
            "Observarea se face exclusiv la domeniul experiențial _______, Cunoașterea Mediului.",
          correctAnswers: [
            "Științe",
            "Stiinte",
            "științe",
            "stiinte",
            "ȘTIINȚE",
            "STIINTE",
          ],
          explanation:
            "Observarea se face exclusiv la Științe, Cunoașterea Mediului.",
        },
        {
          id: "edu-ped-stiinte-obs-fq9",
          type: "true-false",
          question:
            "La observare, setul 1 de întrebări se referă la însușirile caracteristice (culoare, formă, textură).",
          correct: false,
          explanation:
            "Setul 1 se referă la locul unde cresc obiectele și structura lor. " +
            "Însușirile caracteristice (culoare, formă, textură) fac parte din setul 2.",
        },
        {
          id: "edu-ped-stiinte-obs-fq10",
          type: "multiple-choice",
          question:
            "Ce se realizează la încheierea observării, înainte de aprecieri?",
          options: [
            "O sinteză parțială a setului 1",
            "Diagrama Venn sau Explozia Stelară",
            "O activitate de desen liber",
            "O repovestire a celor observate",
          ],
          correctIndex: 1,
          explanation:
            "Înainte de încheiere se aplică Diagrama Venn (grupa mare) " +
            "sau Explozia Stelară (grupa mică/mijlocie) pentru fixarea " +
            "conținutului.",
        },
      ],
    },
  },
];
