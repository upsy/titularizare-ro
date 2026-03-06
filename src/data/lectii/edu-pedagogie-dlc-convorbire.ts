import { Lesson } from "@/types/lectii";

export const eduPedagogieDlcConvorbireLessons: Lesson[] = [
  {
    topicId: "edu-ped-dlc-convorbire",
    title: "Convorbirea — model de eseu (Subiectul 3)",
    duration: "55 min",
    objectives: [
      "Să definească convorbirea ca modalitate specifică în educația timpurie",
      "Să identifice scopul convorbirii: dezvoltarea capacității de exprimare independentă",
      "Să descrie structura eseului: de la general la particular (2 sau 3 seturi de întrebări)",
      "Să diferențieze numărul de seturi pe grupe de vârstă (mică/mijlocie: 2, mare: 3)",
      "Să adapteze eseul la cele 3 domenii experiențiale (Științe, DLC, DOS)",
      "Să argumenteze de ce convorbirea nu folosește suport intuitiv la grădiniță",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    chapters: [
      {
        id: "convorbire-definitie",
        title: "Definiția, scopul și specificul convorbirii",
        duration: "20 min",
        sections: [
          {
            title: "Definiția convorbirii",
            content:
              "Convorbirea este o modalitate specifică de realizare a unor " +
              "activități didactice în educația timpurie, realizându-se prin " +
              "succesiune de întrebări adresate preșcolarilor de către educatoare " +
              "și răspunsurile acestora la ele.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Convorbirea** este o modalitate specifică de realizare " +
                  "a unor activități didactice **în educația timpurie**, " +
                  "realizându-se prin **succesiune de întrebări** adresate " +
                  "preșcolarilor de către educatoare și **răspunsurile acestora** " +
                  "la ele.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Nu uita sintagma «în educația timpurie» în definiție — " +
                    "fără ea pierzi 2-3 puncte din cele 15 disponibile. " +
                    "Răspunsul se află mereu în cerință.",
                },
              },
            ],
          },
          {
            title: "Scopul convorbirii",
            content:
              "Scopul activității de convorbire este de a dezvolta preșcolarilor " +
              "capacitatea de a se exprima în mod independent, utilizând cuvinte " +
              "din vocabularul pe care îl dețin.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Scopul activității de convorbire este de a **dezvolta " +
                  "preșcolarilor capacitatea de a se exprima în mod independent**, " +
                  "utilizând cuvinte din **vocabularul pe care îl dețin**.",
              },
              {
                kind: "text",
                text:
                  "**Principiu fundamental:** Convorbirea merge **de la general " +
                  "la particular** — pornești de la o temă generală și ajungi la " +
                  "detalii specifice, prin seturi succesive de întrebări.",
              },
            ],
          },
          {
            title: "Domenii experiențiale (3 opțiuni)",
            content:
              "Convorbirea poate veni la examen pe 3 domenii: Științe (cunoașterea " +
              "mediului), DLC (limba și comunicare) — eseu comun, sau DOS (om și " +
              "societate) — se schimbă întrebările.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Convorbirea poate fi cerută la **3 domenii experiențiale**:\n\n" +
                  "| Domeniu | Detaliu | Tip eseu |\n" +
                  "|---------|---------|----------|\n" +
                  "| **Științe** | Cunoașterea mediului | Eseu comun cu DLC |\n" +
                  "| **DLC** | Domeniul limbă și comunicare | Eseu comun cu Științe |\n" +
                  "| **DOS** | Om și societate, educație pentru societate | Se schimbă întrebările |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Pentru Științe și DLC eseul este **identic** — nu schimbi " +
                    "nimic. La DOS schimbi tema și întrebările (ex: «Ce știm " +
                    "despre regulile de circulație»).",
                },
              },
            ],
          },
          {
            title: "Convorbirea NU folosește suport intuitiv",
            content:
              "La grădiniță, convorbirea se face fără imagini. Dacă pui o imagine, " +
              "devii altă modalitate (lectura după imagini). Cu suport intuitiv " +
              "se face doar la creșă.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Regulă importantă:** La grădiniță, convorbirea se face " +
                  "**fără suport intuitiv** (fără imagini).\n\n" +
                  "- Dacă pui o imagine → devii altă modalitate (**lectura după imagini**)\n" +
                  "- Cu suport intuitiv se face doar la **creșă**, nu la grădiniță\n" +
                  "- Convorbirea este strict **verbală** — doar întrebări și răspunsuri",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Dacă la examen confunzi convorbirea cu lectura după imagini " +
                    "(adaugi suport intuitiv), pierzi puncte — sunt modalități diferite.",
                },
              },
            ],
          },
          {
            title: "Diferențiere pe grupe de vârstă",
            content:
              "Grupa mică și mijlocie: 2 seturi de întrebări + 2 sinteze parțiale. " +
              "Grupa mare: 3 seturi de întrebări + 3 sinteze parțiale.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "| Grupă | Nr. seturi de întrebări | Sinteze parțiale |\n" +
                  "|-------|------------------------|------------------|\n" +
                  "| Mică și Mijlocie | 2 seturi | 2 sinteze parțiale |\n" +
                  "| Mare | 3 seturi | 3 sinteze parțiale |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Dacă la examen cerința este pentru grupa mică/mijlocie, " +
                    "scrii doar 2 seturi de întrebări + sintezele lor + fixarea. " +
                    "Al treilea set (activitățile) se adaugă **doar** pentru grupa mare.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Comparație: Convorbire vs. Lectura după imagini",
            description:
              "Convorbirea = fără imagini, doar întrebări verbale. " +
              "Lectura după imagini = cu suport intuitiv (tablou). " +
              "Dacă adaugi imagine la convorbire, devii altă modalitate.",
          },
          {
            title: "Adaptare la DOS — Regulile de circulație",
            description:
              "Schimbi tema: «Ce știm despre regulile de circulație». " +
              "Întrebările devin: «Ce semne de circulație cunoaștem?», " +
              "«Unde traversăm strada?», «Ce culori are semaforul?»",
          },
        ],
        keyPoints: [
          {
            text: "Convorbirea = succesiune de întrebări și răspunsuri, de la general la particular",
            important: true,
          },
          {
            text: "Scopul: dezvoltarea capacității de a se exprima independent, folosind vocabularul propriu",
            important: true,
          },
          {
            text: "Fără suport intuitiv la grădiniță — dacă pui imagine, devii lectura după imagini",
            important: true,
          },
          {
            text: "3 domenii posibile: Științe, DLC (eseu comun) și DOS (se schimbă întrebările)",
          },
          {
            text: "Mică/Mijlocie = 2 seturi de întrebări; Mare = 3 seturi de întrebări",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-dlc-conv-mq1-1",
              type: "multiple-choice",
              question:
                "Ce este convorbirea în educația timpurie?",
              options: [
                "O activitate de lectură cu suport intuitiv",
                "O modalitate specifică realizată prin succesiune de întrebări și răspunsuri",
                "O activitate de dramatizare",
                "O modalitate de evaluare a preșcolarilor",
              ],
              correctIndex: 1,
              explanation:
                "Convorbirea este o modalitate specifică de realizare a unor activități didactice " +
                "în educația timpurie, realizându-se prin succesiune de întrebări adresate " +
                "preșcolarilor de către educatoare și răspunsurile acestora.",
            },
            {
              id: "edu-ped-dlc-conv-mq1-2",
              type: "true-false",
              question:
                "La grădiniță, convorbirea se face cu suport intuitiv (imagini).",
              correct: false,
              explanation:
                "La grădiniță, convorbirea se face FĂRĂ suport intuitiv. " +
                "Dacă pui o imagine, devii altă modalitate (lectura după imagini). " +
                "Cu suport intuitiv se face doar la creșă.",
            },
            {
              id: "edu-ped-dlc-conv-mq1-3",
              type: "multiple-choice",
              question:
                "Care este scopul activității de convorbire?",
              options: [
                "Dezvoltarea abilităților de citit-scris",
                "Dezvoltarea capacității de a se exprima independent, folosind vocabularul propriu",
                "Formarea deprinderilor motrice fine",
                "Memorarea unor poezii și cântece",
              ],
              correctIndex: 1,
              explanation:
                "Scopul convorbirii este de a dezvolta preșcolarilor capacitatea de a se " +
                "exprima în mod independent, utilizând cuvinte din vocabularul pe care îl dețin.",
            },
            {
              id: "edu-ped-dlc-conv-mq1-4",
              type: "true-false",
              question:
                "Eseul de convorbire este identic pentru domeniile Științe și DLC.",
              correct: true,
              explanation:
                "Da, eseul este comun pentru Științe (cunoașterea mediului) și DLC " +
                "(domeniul limbă și comunicare). La DOS se schimbă întrebările.",
            },
            {
              id: "edu-ped-dlc-conv-mq1-5",
              type: "fill-blank",
              question:
                "Convorbirea merge de la _______ la particular.",
              correctAnswers: [
                "general",
                "General",
                "GENERAL",
              ],
              explanation:
                "Principiul fundamental al convorbirii: se pornește de la aspectele " +
                "generale și se ajunge la cele particulare, prin seturi succesive de întrebări.",
            },
            {
              id: "edu-ped-dlc-conv-mq1-6",
              type: "multiple-choice",
              question:
                "Câte seturi de întrebări se fac la grupa mică și mijlocie?",
              options: [
                "1 set de întrebări",
                "2 seturi de întrebări",
                "3 seturi de întrebări",
                "4 seturi de întrebări",
              ],
              correctIndex: 1,
              explanation:
                "La grupa mică și mijlocie se fac 2 seturi de întrebări cu " +
                "2 sinteze parțiale. Al treilea set se adaugă doar pentru grupa mare.",
            },
            {
              id: "edu-ped-dlc-conv-mq1-7",
              type: "multiple-choice",
              question:
                "La câte domenii experiențiale poate veni convorbirea la examen?",
              options: [
                "1 — doar DLC",
                "2 — Științe și DLC",
                "3 — Științe, DLC și DOS",
                "5 — toate domeniile experiențiale",
              ],
              correctIndex: 2,
              explanation:
                "Convorbirea poate fi cerută la 3 domenii: Științe (cunoașterea " +
                "mediului), DLC (limba și comunicare) și DOS (om și societate). " +
                "La Științe și DLC eseul e comun; la DOS se schimbă întrebările.",
            },
            {
              id: "edu-ped-dlc-conv-mq1-8",
              type: "true-false",
              question:
                "La creșă, convorbirea se poate face cu suport intuitiv (imagini).",
              correct: true,
              explanation:
                "Da, la creșă convorbirea se poate face cu suport intuitiv. " +
                "Dar la grădiniță — nu. Dacă pui imagine la grădiniță, " +
                "devii altă modalitate (lectura după imagini).",
            },
            {
              id: "edu-ped-dlc-conv-mq1-9",
              type: "fill-blank",
              question:
                "Convorbirea se realizează prin succesiune de _______ adresate preșcolarilor.",
              correctAnswers: [
                "întrebări",
                "intrebari",
                "Întrebări",
                "Intrebari",
                "ÎNTREBĂRI",
                "INTREBARI",
              ],
              explanation:
                "Convorbirea se realizează prin succesiune de întrebări adresate " +
                "preșcolarilor de către educatoare și răspunsurile acestora la ele.",
            },
            {
              id: "edu-ped-dlc-conv-mq1-10",
              type: "multiple-choice",
              question:
                "Ce se întâmplă dacă adaugi o imagine la convorbire (la grădiniță)?",
              options: [
                "Convorbirea devine mai eficientă",
                "Nu se schimbă nimic",
                "Devii altă modalitate — lectura după imagini",
                "Se adaugă puncte bonus la examen",
              ],
              correctIndex: 2,
              explanation:
                "Dacă pui o imagine la grădiniță, nu mai faci convorbire — " +
                "devii altă modalitate (lectura după imagini). " +
                "Convorbirea este strict verbală.",
            },
          ],
        },
      },
      {
        id: "convorbire-eseu",
        title: "Model complet de eseu — Anotimpul vara",
        duration: "30 min",
        sections: [
          {
            title: "Cerința-model",
            content:
              "Prezentați o activitate de convorbire, ca una dintre " +
              "modalitățile specifice de realizare a unor activități didactice " +
              "în educația timpurie.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Cerința completă:** Prezentați o activitate de convorbire " +
                  "ca una dintre modalitățile specifice de realizare a " +
                  "activităților didactice din educația timpurie, având în vedere " +
                  "următoarele repere:\n\n" +
                  "1. Definirea conceptului de convorbire (15 puncte)\n" +
                  "2. Prezentarea desfășurării unei activități de convorbire — " +
                  "pentru grupa de vârstă **5-6 ani**, la domeniul experiențial " +
                  "**Științe, cunoașterea mediului**, tema anuală «Când, cum și de ce " +
                  "se întâmplă?»",
              },
            ],
          },
          {
            title: "Introducerea în activitate",
            content:
              "Educatoarea introduce preșcolarii aducând sub formă de surpriză " +
              "o scrisoare trimisă de zâna vara, informând că vor răspunde la " +
              "întrebări în propoziții clare și corecte.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Informații organizatorice:**\n" +
                  "- Domeniu: Științe, cunoașterea mediului\n" +
                  "- Tema anuală: «Când, cum și de ce se întâmplă?»\n" +
                  "- Sub-tema: «Ce știm despre anotimpul vara»\n" +
                  "- Grupa: 5-6 ani",
              },
              {
                kind: "text",
                text:
                  "Educatoarea va introduce preșcolarii în activitate, aducând " +
                  "sub formă de surpriză **o scrisoare trimisă de către zâna vara**, " +
                  "care dorește să vadă dacă preșcolarii cunosc caracteristicile " +
                  "anotimpului pe care îl reprezintă.\n\n" +
                  "Va informa preșcolarii că vor avea de răspuns la întrebările " +
                  "adresate **în propoziții clare și corecte**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Elementul-surpriză la convorbire este o **scrisoare** " +
                    "(nu un tablou ca la lectura după imagini, nu o marionetă " +
                    "ca la povestirea educatoarei).",
                },
              },
            ],
          },
          {
            title: "Planul de întrebări — de la general la particular",
            content:
              "Se elaborează planul de întrebări pornind de la aspectele " +
              "generale ale temei către cele particulare.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Se va elabora planul de întrebări ale anotimpului vara, " +
                  "**pornind de la aspectele generale** ale anotimpului vara " +
                  "**către cele particulare**.",
              },
              {
                kind: "text",
                text:
                  "**Setul 1 — Întrebări generale:**\n" +
                  "- «Ce este vara?»\n" +
                  "- «Ce alte anotimpuri cunoaștem?»\n" +
                  "- «Care sunt lunile de vară?»\n" +
                  "- «Cum este vremea vara?»\n\n" +
                  "Preșcolarii vor răspunde la întrebările adresate și " +
                  "**se va realiza o sinteză parțială a planului de întrebări " +
                  "generale**.",
              },
              {
                kind: "text",
                text:
                  "**Setul 2 — Florile și fructele (detalii):**\n" +
                  "- «Ce culori au fructele de vară?»\n" +
                  "- «Ce gust au ele?»\n" +
                  "- «Ce culori și denumiri au florile de vară?»\n\n" +
                  "**Se va realiza o sinteză parțială** pe baza răspunsurilor " +
                  "primite de la preșcolari.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Până aici (2 seturi + 2 sinteze parțiale) se scrie " +
                    "pentru **grupa mică și mijlocie**. Pentru grupa mare, " +
                    "se adaugă încă un set de întrebări (setul 3).",
                },
              },
              {
                kind: "text",
                text:
                  "**Setul 3 — Activități (doar grupa mare):**\n" +
                  "- «Ce activități desfășurăm în anotimpul vara?»\n" +
                  "- «Unde mergem în vacanța de vară?»\n" +
                  "- «Cum ne îmbrăcăm la plajă?»\n" +
                  "- «Ce sporturi desfășurăm? Care este sportul nostru preferat?»\n" +
                  "- «Care este desertul nostru preferat vara?»\n\n" +
                  "**Se va realiza o sinteză parțială** pe baza răspunsurilor " +
                  "primite de la preșcolari.",
              },
            ],
          },
          {
            title: "Fixarea conținutului și încheierea",
            content:
              "Se realizează sinteza finală sub formă de poveste, " +
              "apoi aprecieri verbale și recompense stimulante.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Fixarea conținutului** (valabil pentru toate grupele):\n\n" +
                  "Pentru a fixa conținutul convorbirii, se va realiza " +
                  "**sinteza finală** a sintezelor parțiale făcute anterior, " +
                  "unde preșcolarii **vor crea o poveste** și îi **vor da un " +
                  "titlu corespunzător**.",
              },
              {
                kind: "text",
                text:
                  "**Încheierea activității:**\n\n" +
                  "Educatoarea face **aprecieri verbale** asupra modului de " +
                  "participare la activitate și oferă **recompense stimulante**.",
              },
              {
                kind: "expandable",
                expandable: {
                  label:
                    "Model complet de eseu — Grupa mare (5-6 ani), Anotimpul vara",
                  source: "claude",
                  content:
                    "**Convorbirea** este o modalitate specifică de realizare " +
                    "a unor activități didactice **în educația timpurie**, " +
                    "realizându-se prin **succesiune de întrebări** adresate " +
                    "preșcolarilor de către educatoare și **răspunsurile acestora** la ele.\n\n" +
                    "Scopul activității de convorbire este de a **dezvolta " +
                    "preșcolarilor capacitatea de a se exprima în mod independent**, " +
                    "utilizând cuvinte din vocabularul pe care îl dețin.\n\n" +
                    "Pentru a desfășura activitatea de convorbire la grupa de vârstă " +
                    "**5-6 ani**, domeniul experiențial **Științe**, cunoașterea mediului, " +
                    "având ca temă anuală de studiu **«Când, cum și de ce se întâmplă?»**, " +
                    "sub-tema **«Ce știm despre anotimpul vara»**, educatoarea va introduce " +
                    "preșcolarii în activitate aducând sub formă de surpriză o scrisoare " +
                    "trimisă de către zâna vara, care dorește să vadă dacă preșcolarii " +
                    "cunosc caracteristicile anotimpului pe care îl reprezintă.\n\n" +
                    "Va informa preșcolarii că vor avea de răspuns la întrebările adresate " +
                    "în propoziții clare și corecte.\n\n" +
                    "Se va elabora planul de întrebări ale anotimpului vara, pornind de la " +
                    "aspectele generale ale anotimpului vara către cele particulare.\n\n" +
                    "Educatoarea va adresa preșcolarilor planul de întrebări generale: " +
                    "«Ce este vara?», «Ce alte anotimpuri cunoaștem?», «Care sunt lunile de vară?», " +
                    "«Cum este vremea vara?».\n\n" +
                    "Preșcolarii vor răspunde la întrebările adresate și se va realiza o " +
                    "sinteză parțială a planului de întrebări generale.\n\n" +
                    "Se va adresa preșcolarilor un nou set de întrebări, cu privire la florile " +
                    "și fructele de vară, pe care aceștia le cunosc: «Ce culori au fructele de " +
                    "vară?», «Ce gust au ele?», «Ce culori și denumiri au florile de vară?».\n\n" +
                    "Se va realiza o sinteză parțială pe baza răspunsurilor primite de la preșcolari.\n\n" +
                    "Se va adresa preșcolarilor cel de-al treilea set de întrebări, referitor la " +
                    "activitățile pe care aceștia le desfășoară în anotimpul vara: «Ce activități " +
                    "desfășurăm în anotimpul vara?», «Unde mergem în vacanța de vară?», «Cum ne " +
                    "îmbrăcăm la plajă?», «Ce sporturi desfășurăm? Care este sportul nostru preferat " +
                    "în anotimpul vara?», «Care este desertul nostru preferat vara?».\n\n" +
                    "Se va realiza o sinteză parțială pe baza răspunsurilor primite de la preșcolari.\n\n" +
                    "Pentru a fixa conținutul convorbirii, se va realiza **sinteza finală** a " +
                    "sintezelor parțiale făcute anterior, unde preșcolarii **vor crea o poveste** " +
                    "și îi **vor da un titlu corespunzător**.\n\n" +
                    "În încheierea activității, educatoarea face **aprecieri verbale** " +
                    "asupra modului de participare la activitate și oferă **recompense stimulante**.",
                },
              },
            ],
          },
          {
            title: "Adaptarea la diferite teme și domenii",
            content:
              "Eseul se adaptează ușor la alte domenii și teme schimbând " +
              "câteva cuvinte.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Eseul se adaptează schimbând:\n\n" +
                  "- **Tema**: vara → iarna, familia, circulația\n" +
                  "- **Personajul**: zâna vara → zâna iarnă, zâna faptelor bune\n" +
                  "- **Întrebările**: adaptate la tema aleasă\n\n" +
                  "**Exemple de adaptare:**\n\n" +
                  "| Domeniu | Temă | Context |\n" +
                  "|---------|------|----------|\n" +
                  "| Științe | Anotimpul vara | «Ce știm despre anotimpul vara» |\n" +
                  "| DLC | Anotimpul vara | Eseu identic cu Științe |\n" +
                  "| DOS | Regulile de circulație | «Ce știm despre regulile de circulație» |\n" +
                  "| DOS | Familia | «Ce știm despre familia mea» |",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Sinteza parțială = rezumat al răspunsurilor copiilor, " +
                    "ca o mică poveste. Practic, iei ce au răspuns copiii " +
                    "și le sintetizezi într-un text coerent.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Întrebări generale — Anotimpul vara",
            description:
              "«Ce este vara?», «Ce alte anotimpuri cunoaștem?», " +
              "«Care sunt lunile de vară?», «Cum este vremea vara?»",
          },
          {
            title: "Întrebări detaliate — Florile și fructele",
            description:
              "«Ce culori au fructele de vară?», «Ce gust au ele?», " +
              "«Ce culori și denumiri au florile de vară?»",
          },
          {
            title: "Întrebări activități (grupa mare) — Vara",
            description:
              "«Ce activități desfășurăm vara?», «Unde mergem în vacanță?», " +
              "«Cum ne îmbrăcăm la plajă?», «Ce sporturi desfășurăm?», " +
              "«Care este desertul nostru preferat vara?»",
          },
        ],
        keyPoints: [
          {
            text: "Eseul urmează: definiție + scop → introducere (scrisoare-surpriză) → plan de întrebări (general → particular) → sinteze parțiale → sinteză finală (poveste) → încheiere",
            important: true,
          },
          {
            text: "Grupa mică/mijlocie: 2 seturi (general + detalii); Grupa mare: 3 seturi (+ activități)",
            important: true,
          },
          {
            text: "La Științe și DLC eseul e identic; la DOS se schimbă tema și întrebările",
          },
          {
            text: "Elementul-surpriză = o scrisoare (nu tablou, nu marionetă)",
          },
          {
            text: "Preșcolarii trebuie informați că vor răspunde în propoziții clare și corecte",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-dlc-conv-mq2-1",
              type: "multiple-choice",
              question:
                "Ce aduce educatoarea sub formă de surpriză la convorbire?",
              options: [
                "Un tablou",
                "O marionetă-personaj",
                "O scrisoare",
                "O carte cu povești",
              ],
              correctIndex: 2,
              explanation:
                "La convorbire, elementul-surpriză este o scrisoare " +
                "(ex: trimisă de zâna vara). La lectura după imagini este " +
                "un tablou, la povestirea educatoarei — o marionetă.",
            },
            {
              id: "edu-ped-dlc-conv-mq2-2",
              type: "true-false",
              question:
                "La convorbire, se elaborează planul de întrebări de la particular la general.",
              correct: false,
              explanation:
                "Este invers: planul de întrebări merge de la GENERAL " +
                "la PARTICULAR. Se pornește de la aspectele generale " +
                "ale temei și se ajunge la detalii specifice.",
            },
            {
              id: "edu-ped-dlc-conv-mq2-3",
              type: "multiple-choice",
              question:
                "Câte seturi de întrebări include eseul pentru grupa mare?",
              options: [
                "1 set",
                "2 seturi",
                "3 seturi",
                "4 seturi",
              ],
              correctIndex: 2,
              explanation:
                "Grupa mare are 3 seturi: (1) întrebări generale, " +
                "(2) detalii specifice (flori, fructe), (3) activități " +
                "desfășurate în anotimpul respectiv.",
            },
            {
              id: "edu-ped-dlc-conv-mq2-4",
              type: "true-false",
              question:
                "La final, preșcolarii vor crea o poveste și îi vor da un titlu corespunzător.",
              correct: true,
              explanation:
                "Da, la fixarea conținutului se realizează sinteza finală " +
                "a sintezelor parțiale, unde preșcolarii vor crea o poveste " +
                "și îi vor da un titlu corespunzător.",
            },
            {
              id: "edu-ped-dlc-conv-mq2-5",
              type: "fill-blank",
              question:
                "Preșcolarii sunt informați că vor răspunde la întrebări în propoziții _______ și corecte.",
              correctAnswers: [
                "clare",
                "Clare",
                "CLARE",
              ],
              explanation:
                "Educatoarea va informa preșcolarii că vor avea de răspuns " +
                "la întrebările adresate în propoziții clare și corecte.",
            },
            {
              id: "edu-ped-dlc-conv-mq2-6",
              type: "multiple-choice",
              question:
                "Ce se realizează după fiecare set de întrebări?",
              options: [
                "O dramatizare",
                "O sinteză parțială",
                "Un desen colectiv",
                "O evaluare individuală",
              ],
              correctIndex: 1,
              explanation:
                "După fiecare set de întrebări se realizează o sinteză parțială " +
                "pe baza răspunsurilor primite de la preșcolari.",
            },
            {
              id: "edu-ped-dlc-conv-mq2-7",
              type: "multiple-choice",
              question:
                "Ce face educatoarea la încheierea activității de convorbire?",
              options: [
                "Aplică metoda Explozia Stelară",
                "Face aprecieri verbale și oferă recompense stimulante",
                "Citește o poveste",
                "Prezintă o nouă imagine",
              ],
              correctIndex: 1,
              explanation:
                "La încheiere, educatoarea face aprecieri verbale asupra " +
                "modului de participare și oferă recompense stimulante.",
            },
            {
              id: "edu-ped-dlc-conv-mq2-8",
              type: "true-false",
              question:
                "Dacă cerința este pentru grupa mijlocie, se scriu toate cele 3 seturi de întrebări.",
              correct: false,
              explanation:
                "Pentru grupa mică și mijlocie se scriu doar 2 seturi " +
                "de întrebări + sintezele lor + fixarea. Al treilea set " +
                "(activitățile) se adaugă doar pentru grupa mare.",
            },
            {
              id: "edu-ped-dlc-conv-mq2-9",
              type: "fill-blank",
              question:
                "Sinteza parțială este un _______ al răspunsurilor copiilor.",
              correctAnswers: [
                "rezumat",
                "Rezumat",
                "REZUMAT",
              ],
              explanation:
                "Sinteza parțială = rezumat al ce au răspuns copiii, " +
                "ca o mică poveste. Se sintetizează răspunsurile " +
                "într-un text coerent.",
            },
            {
              id: "edu-ped-dlc-conv-mq2-10",
              type: "multiple-choice",
              question:
                "Unde se scrie al treilea set de întrebări în eseu?",
              options: [
                "La început, înainte de definiție",
                "Nu se scrie niciodată al treilea set",
                "Se adaugă doar când cerința este pentru grupa mare",
                "Se adaugă la finalul eseului, după încheiere",
              ],
              correctIndex: 2,
              explanation:
                "Al treilea set de întrebări (referitor la activități) " +
                "se adaugă doar când cerința este pentru grupa mare. " +
                "La mică/mijlocie se scriu doar 2 seturi.",
            },
          ],
        },
      },
    ],
    transcript:
      "## Convorbirea\n\n" +
      "### Definiție\n" +
      "Convorbirea este o modalitate specifică de realizare a unor activități didactice " +
      "în educația timpurie, realizându-se prin succesiune de întrebări adresate " +
      "preșcolarilor de către educatoare și răspunsurile acestora la ele.\n\n" +
      "### Scop\n" +
      "Dezvoltarea capacității de a se exprima independent, utilizând vocabularul propriu.\n\n" +
      "### Principiu\n" +
      "De la general la particular — seturi succesive de întrebări.\n\n" +
      "### Diferențiere pe grupe\n" +
      "Mică/Mijlocie: 2 seturi + 2 sinteze parțiale | Mare: 3 seturi + 3 sinteze parțiale\n\n" +
      "### Domenii\n" +
      "Științe + DLC = eseu comun | DOS = se schimbă întrebările\n\n" +
      "### Specific\n" +
      "- Fără suport intuitiv la grădiniță (doar la creșă)\n" +
      "- Elementul-surpriză = scrisoare\n" +
      "- Preșcolarii răspund în propoziții clare și corecte\n\n" +
      "### Pași eseu\n" +
      "Definiție + scop → introducere (scrisoare-surpriză) → plan de întrebări " +
      "(general → particular) → setul 1 (general) + sinteză parțială → " +
      "setul 2 (detalii) + sinteză parțială → [setul 3 (activități) + sinteză " +
      "parțială — doar grupa mare] → sinteză finală (poveste + titlu) → " +
      "încheiere (aprecieri + recompense)",
    quiz: {
      topicId: "edu-ped-dlc-convorbire",
      questions: [
        {
          id: "edu-ped-dlc-conv-fq1",
          type: "multiple-choice",
          question:
            "Prin ce se realizează convorbirea în educația timpurie?",
          options: [
            "Prin observarea unui obiect real",
            "Prin succesiune de întrebări și răspunsuri",
            "Prin citirea unei povești din carte",
            "Prin intuirea planurilor unei imagini",
          ],
          correctIndex: 1,
          explanation:
            "Convorbirea se realizează prin succesiune de întrebări adresate " +
            "preșcolarilor de către educatoare și răspunsurile acestora.",
        },
        {
          id: "edu-ped-dlc-conv-fq2",
          type: "true-false",
          question:
            "Convorbirea folosește suport intuitiv (imagini) la grădiniță.",
          correct: false,
          explanation:
            "La grădiniță, convorbirea se face FĂRĂ suport intuitiv. " +
            "Dacă pui o imagine, devii altă modalitate (lectura după imagini). " +
            "Cu suport intuitiv se face doar la creșă.",
        },
        {
          id: "edu-ped-dlc-conv-fq3",
          type: "multiple-choice",
          question:
            "Care este principiul fundamental al convorbirii?",
          options: [
            "De la particular la general",
            "De la simplu la complex",
            "De la general la particular",
            "De la concret la abstract",
          ],
          correctIndex: 2,
          explanation:
            "Convorbirea merge de la general la particular — pornești de la " +
            "aspectele generale ale temei și ajungi la detalii specifice, " +
            "prin seturi succesive de întrebări.",
        },
        {
          id: "edu-ped-dlc-conv-fq4",
          type: "fill-blank",
          question:
            "Scopul convorbirii este dezvoltarea capacității de a se exprima în mod _______.",
          correctAnswers: [
            "independent",
            "Independent",
            "INDEPENDENT",
          ],
          explanation:
            "Scopul activității de convorbire este de a dezvolta preșcolarilor " +
            "capacitatea de a se exprima în mod independent, utilizând cuvinte " +
            "din vocabularul pe care îl dețin.",
        },
        {
          id: "edu-ped-dlc-conv-fq5",
          type: "multiple-choice",
          question:
            "Ce element-surpriză se folosește la convorbire?",
          options: [
            "Un tablou adus sub formă de surpriză",
            "O marionetă-personaj",
            "O scrisoare trimisă de un personaj",
            "Un coș cu obiecte",
          ],
          correctIndex: 2,
          explanation:
            "La convorbire, educatoarea aduce sub formă de surpriză o scrisoare " +
            "(ex: trimisă de zâna vara). La lectura după imagini = tablou, " +
            "la povestirea educatoarei = marionetă.",
        },
        {
          id: "edu-ped-dlc-conv-fq6",
          type: "true-false",
          question:
            "La grupa mijlocie, eseul de convorbire include 3 seturi de întrebări.",
          correct: false,
          explanation:
            "La grupa mică și mijlocie se fac doar 2 seturi de întrebări " +
            "(general + detalii). Al treilea set (activități) se adaugă " +
            "doar pentru grupa mare.",
        },
        {
          id: "edu-ped-dlc-conv-fq7",
          type: "multiple-choice",
          question:
            "La ce domeniu schimbi întrebările din eseul de convorbire?",
          options: [
            "La DLC (limba și comunicare)",
            "La Științe (cunoașterea mediului)",
            "La DOS (om și societate)",
            "La DEC (estetic și creativ)",
          ],
          correctIndex: 2,
          explanation:
            "La Științe și DLC eseul este identic (comun). La DOS " +
            "(om și societate) se schimbă tema și întrebările " +
            "(ex: regulile de circulație, familia).",
        },
        {
          id: "edu-ped-dlc-conv-fq8",
          type: "fill-blank",
          question:
            "La final, se realizează sinteza _______ a sintezelor parțiale.",
          correctAnswers: [
            "finală",
            "finala",
            "Finală",
            "Finala",
            "FINALĂ",
            "FINALA",
          ],
          explanation:
            "La fixarea conținutului se realizează sinteza finală a " +
            "sintezelor parțiale făcute anterior, unde preșcolarii " +
            "vor crea o poveste și îi vor da un titlu corespunzător.",
        },
        {
          id: "edu-ped-dlc-conv-fq9",
          type: "true-false",
          question:
            "Preșcolarii sunt informați că vor răspunde la întrebări în propoziții clare și corecte.",
          correct: true,
          explanation:
            "Da, educatoarea va informa preșcolarii că vor avea de răspuns " +
            "la întrebările adresate în propoziții clare și corecte.",
        },
        {
          id: "edu-ped-dlc-conv-fq10",
          type: "multiple-choice",
          question:
            "Care este diferența principală între convorbire și lectura după imagini?",
          options: [
            "Convorbirea are sinteze parțiale, lectura nu",
            "Convorbirea nu folosește suport intuitiv, lectura da",
            "Convorbirea se face doar la DLC, lectura la Științe",
            "Convorbirea folosește Explozia Stelară, lectura nu",
          ],
          correctIndex: 1,
          explanation:
            "Diferența principală: convorbirea se face fără suport intuitiv " +
            "(fără imagini), pe când lectura după imagini se bazează pe " +
            "intuirea planurilor unei imagini (tablou).",
        },
      ],
    },
  },
];
