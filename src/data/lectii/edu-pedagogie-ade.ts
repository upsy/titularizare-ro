import { Lesson } from "@/types/lectii";

export const eduPedagogieAdeLessons: Lesson[] = [
  {
    topicId: "edu-ped-act-1",
    title:
      "Activități pe domenii experiențiale: prezentare generală și DLC",
    duration: "45 min",
    objectives: [
      "Să enumere cele 5 domenii experiențiale din educația timpurie",
      "Să definească activitățile pe domenii experiențiale (ADE)",
      "Să diferențieze activitățile integrate de cele monodisciplinare",
      "Să cunoască diferența dintre proiecte tematice și săptămâni independente",
      "Să enumere toate modalitățile de realizare la DLC (educarea limbajului)",
      "Să identifice modalitățile specifice cerute la Subiectul 3, Exercițiul 1",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "edu-ped-act-1",
      questions: [
        {
          id: "edu-ped-act-1-fq1",
          type: "multiple-choice",
          question:
            "Câte domenii experiențiale există în educația timpurie?",
          options: ["3", "4", "5", "6"],
          correctIndex: 2,
          explanation:
            "Cele 5 domenii experiențiale sunt: Limbă și comunicare (DLC), " +
            "Științe (DȘ), Estetic și creativ (DEC), Om și societate (DOS), " +
            "Psihomotric (DPM).",
        },
        {
          id: "edu-ped-act-1-fq2",
          type: "true-false",
          question:
            "La grupa mică se lucrează obligatoriu integrat pe toate cele 5 domenii experiențiale.",
          correct: false,
          explanation:
            "La grupa mică se poate lucra monodisciplinar (un singur domeniu), " +
            "mai ales la început. Grupa mijlocie și mare lucrează integrat.",
        },
        {
          id: "edu-ped-act-1-fq3",
          type: "multiple-choice",
          question:
            "Care este diferența dintre un proiect tematic și o săptămână independentă?",
          options: [
            "Proiectul tematic se face doar la grupa mare, săptămâna independentă la orice grupă",
            "Proiectul tematic se întinde pe 2-3 săptămâni pe o temă, săptămâna independentă are o singură temă pe o săptămână",
            "Proiectul tematic e obligatoriu, săptămâna independentă e opțională",
            "Nu există nicio diferență, sunt sinonime",
          ],
          correctIndex: 1,
          explanation:
            "Proiectul tematic se întinde pe 2-3 săptămâni pe o temă anume. " +
            "Săptămâna independentă are o singură temă pentru o singură săptămână " +
            "(ex. 1 Decembrie, Mărțișor).",
        },
        {
          id: "edu-ped-act-1-fq4",
          type: "fill-blank",
          question:
            "Activitățile pe domenii experiențiale au la bază ___ sub toate formele sale.",
          correctAnswers: ["jocul"],
          explanation:
            "Activitățile din cadrul domeniilor experiențiale au la bază jocul " +
            "sub toate formele sale, fiind adaptate nivelului de vârstă și " +
            "intereselor copiilor.",
        },
        {
          id: "edu-ped-act-1-fq5",
          type: "multiple-choice",
          question:
            "Câte proiecte tematice ar trebui să aibă grupa mare pe an școlar?",
          options: [
            "1-2 proiecte",
            "2-3 proiecte",
            "5-7 proiecte",
            "10 sau mai multe proiecte",
          ],
          correctIndex: 2,
          explanation:
            "Grupa mică are ~2 proiecte tematice/an, grupa mijlocie 3-4, iar " +
            "grupa mare poate avea până la 5-7 proiecte tematice.",
        },
        {
          id: "edu-ped-act-1-fq6",
          type: "multiple-choice",
          question:
            "Care dintre următoarele NU este o modalitate de realizare la domeniul Limbă și comunicare (DLC)?",
          options: [
            "Memorizare",
            "Observare",
            "Povestirea educatoarei",
            "Lectura după imagini",
          ],
          correctIndex: 1,
          explanation:
            "Observarea este o modalitate specifică domeniului Științe (DȘ), " +
            "nu domeniului Limbă și comunicare.",
        },
        {
          id: "edu-ped-act-1-fq7",
          type: "true-false",
          question:
            "Lectura educatoarei și povestirea educatoarei sunt aceeași modalitate de realizare.",
          correct: false,
          explanation:
            "Sunt modalități diferite: la povestirea educatoarei, aceasta spune " +
            "povestea cu propriile cuvinte folosind personaje/marionete. La lectura " +
            "educatoarei, aceasta citește povestea din cartea cu povești.",
        },
        {
          id: "edu-ped-act-1-fq8",
          type: "fill-blank",
          question:
            "Modalitățile de realizare la DLC sunt: memorizare, povestirea educatoarei, lectura educatoarei, lectura după imagini, repovestirea, convorbirea, ___, jocul didactic și jocul exercițiu.",
          correctAnswers: ["dramatizarea"],
          explanation:
            "Cele 9 modalități de realizare la DLC sunt: memorizare, povestirea " +
            "educatoarei, lectura educatoarei, lectura după imagini, repovestirea, " +
            "convorbirea, dramatizarea, jocul didactic și jocul exercițiu.",
        },
        {
          id: "edu-ped-act-1-fq9",
          type: "multiple-choice",
          question:
            "Ce face educatoarea de pe tura a doua (după-amiaza) cu activitățile de la prima tură?",
          options: [
            "Predă materie nouă, diferită de cea de dimineață",
            "Consolidează și repetă ce a făcut educatoarea de pe prima tură",
            "Organizează exclusiv activități extrașcolare",
            "Nu are activități planificate",
          ],
          correctIndex: 1,
          explanation:
            "Educatoarea de pe tura a doua consolidează ce a făcut colega de dimineață: " +
            "dacă s-a făcut memorizare, face repetare; dacă s-a făcut povestire, " +
            "face repovestire. Pe lângă consolidare, adaugă și activități de dezvoltare " +
            "a aptitudinilor.",
        },
        {
          id: "edu-ped-act-1-fq10",
          type: "multiple-choice",
          question:
            "La Subiectul 3, Exercițiul 1, ce se cere de obicei?",
          options: [
            "Să definiți activitățile de dezvoltare personală",
            "Să prezentați o activitate ca modalitate specifică de realizare a unui domeniu experiențial",
            "Să enumerați toate domeniile experiențiale cu exemple",
            "Să descrieți planul de învățământ",
          ],
          correctIndex: 1,
          explanation:
            "Subiectul 3, Exercițiul 1 cere prezentarea unei activități " +
            "(ex: memorizare, joc didactic) ca modalitate specifică de realizare " +
            "a unui domeniu experiențial.",
        },
      ],
    },

    transcript: `# Curs Titularizare — 23.02.2026

## Activități pe domenii experiențiale (ADE)

### Programa — cum se citește

Primul capitol din programă la Metodică este **Curriculum Educația Timpurie**: structura, principiile, planul de învățământ, metodologia de aplicare.

#### Ce NU se dă la examen
- **Domeniile de dezvoltare** (tabelul colorat) — trebuie cunoscute, dar nu se cer pe de rost
- **Principiile și valorile fundamentale** — sunt baza pe care ne ghidăm, dar nu apar ca subiect direct

#### Legătura cu exercițiile de examen
- **Exercițiul 1** (Subiectul 3): Prezentați o activitate ca modalitate specifică de realizare → aici intră modalitățile pe care le învățăm acum
- **Exercițiul 2** (Subiectul 3): Organizarea, amenajarea spațiului, rolul centrelor de interes → se leagă de ce am făcut la ADP-uri

---

### Definiție

> Activitățile pe domenii experiențiale (ADE) în educația timpurie reprezintă **activități de învățare integrate** (sau pe discipline), desfășurate cu preșcolarii în cadrul unor **proiecte tematice** sau în cadrul **săptămânilor independente**, planificate în funcție de **temele anuale de studiu** propuse de curriculum.

### Integrate vs. monodisciplinare

- **Grupa mică**: se poate lucra **monodisciplinar** (un singur domeniu), mai ales la început
- **Grupa mijlocie și mare**: se lucrează **integrat** (două sau mai multe domenii într-o activitate)
- Principiu: copiii învață mai bine dacă faci integrat
- La grupa mică, după ce se obișnuiesc, poți pune două domenii

### Proiecte tematice vs. săptămâni independente

| Aspect | Proiect tematic | Săptămână independentă |
|---|---|---|
| Durată | 2-3 săptămâni | 1 săptămână (sau chiar 1 zi) |
| Exemplu | Primăvara, Animalele | 1 Decembrie, Mărțișor |
| Planificare | Din planificarea anuală | Teme care nu pot fi extinse |

**Număr de proiecte tematice pe an:**
- Grupa mică: ~2 proiecte
- Grupa mijlocie: 3-4 proiecte
- Grupa mare: până la 5-7 proiecte

### Caracteristici ADE

- Sunt **adaptate nivelului de vârstă** și intereselor și nevoilor copiilor din grupă
- Au la bază **jocul** sub toate formele sale

### Cele 5 domenii experiențiale

1. **DLC** — Domeniul Limbă și comunicare (educarea limbajului)
2. **DȘ** — Domeniul Științe
3. **DEC** — Domeniul Estetic și creativ
4. **DOS** — Domeniul Om și societate
5. **DPM** — Domeniul Psihomotric

---

## Domeniul Limbă și comunicare — Educarea limbajului

### Modalități de realizare

Acestea sunt modalitățile specifice prin care se realizează activitățile la DLC. **Sunt cele cerute la Subiectul 3, Exercițiul 1.**

1. **Memorizarea** — învățăm copiii o poezie
2. **Povestirea educatoarei** — educatoarea spune povestea cu propriile cuvinte, folosind personaje/marionete (ca un teatru de păpuși)
3. **Lectura educatoarei** — educatoarea citește povestea din cartea cu povești
4. **Lectura după imagini** — pe baza unor imagini se creează o poveste (cu pași metodici, plan de intuiție, pe baza întrebărilor)
5. **Repovestirea** — copiii spun povestea cu propriile lor cuvinte (după ce au auzit-o prin povestire/lectură)
6. **Convorbirea** — la toate grupele (mică, mijlocie, mare)
7. **Dramatizarea** — punerea în scenă a poveștii
8. **Jocul didactic** — joc cu scop educativ
9. **Jocul exercițiu** — exerciții practice

### Sfaturi din practică — tura a doua (după-amiaza)

- Educatoarea de pe tura a doua **consolidează** ce a făcut colega de dimineață
- Dacă dimineața s-a făcut **memorizare** → după-amiază se face **repetarea poeziei**
- Dacă dimineața s-a făcut **povestire** → după-amiază se face **repovestire**
- Nu se predă materie nouă, se consolidează
- Se mai adaugă **activități de dezvoltare a aptitudinilor** (desen, talent)`,

    chapters: [
      {
        id: "edu-ped-act-1-ch1",
        title: "Domenii experiențiale — prezentare generală",
        duration: "15 min",
        sections: [
          {
            title: "Ce sunt activitățile pe domenii experiențiale?",
            content:
              "Activitățile pe domenii experiențiale (ADE) sunt activități de învățare " +
              "integrate (sau pe discipline), desfășurate cu preșcolarii în cadrul unor proiecte " +
              "tematice sau în cadrul săptămânilor independente, planificate în funcție de " +
              "temele anuale de studiu propuse de curriculum.",
            contentBlocks: [
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La Subiectul 3, Exercițiul 1, vi se cere să prezentați o activitate " +
                    "ca modalitate specifică de realizare. Toate modalitățile listate " +
                    "(memorizare, povestire, lectură etc.) sunt de fapt aceste ADE-uri.",
                },
              },
            ],
          },
          {
            title: "Integrate vs. monodisciplinare",
            content:
              "Grupa mică: se poate lucra monodisciplinar (un singur domeniu), mai ales " +
              "la început. Grupa mijlocie și mare: se lucrează integrat (două sau mai multe " +
              "domenii într-o activitate). Principiu: copiii învață mai bine dacă faci integrat. " +
              "La grupa mică, după ce se obișnuiesc, poți pune două domenii.",
          },
          {
            title: "Proiecte tematice vs. săptămâni independente",
            content:
              "Proiectul tematic se întinde pe 2-3 săptămâni pe o temă (ex: Primăvara, Animale). " +
              "Săptămâna independentă are o singură temă (ex: 1 Decembrie, Mărțișor). " +
              "Grupa mică: ~2 proiecte/an, grupa mijlocie: 3-4, grupa mare: 5-7 proiecte. " +
              "Tu îți proiectezi planificarea anuală la începutul anului școlar.",
          },
          {
            title: "Cele 5 domenii experiențiale",
            content:
              "1. DLC — Domeniul Limbă și comunicare (educarea limbajului)\n" +
              "2. DȘ — Domeniul Științe\n" +
              "3. DEC — Domeniul Estetic și creativ\n" +
              "4. DOS — Domeniul Om și societate\n" +
              "5. DPM — Domeniul Psihomotric\n\n" +
              "Activitățile sunt adaptate nivelului de vârstă, intereselor și nevoilor " +
              "copiilor din grupă. Au la bază jocul sub toate formele sale.",
          },
        ],
        examples: [
          {
            title: "Proiect tematic — Primăvara",
            description:
              "3 săptămâni integrate: săptămâna 1 — Mărțișor, săptămâna 2 — Mama, " +
              "săptămâna 3 — Caracteristicile primăverii. Toate activitățile se leagă " +
              "de tema mare.",
          },
          {
            title: "Săptămână independentă — 1 Decembrie",
            description:
              "O singură săptămână (sau chiar o zi) dedicată Zilei Naționale. " +
              "Nu se extinde pe mai multe săptămâni.",
          },
        ],
        keyPoints: [
          { text: "5 domenii experiențiale: DLC, DȘ, DEC, DOS, DPM", important: true },
          { text: "Grupa mică = monodisciplinar, grupa mijlocie/mare = integrat" },
          { text: "ADE-urile au la bază jocul sub toate formele sale" },
          {
            text: "Proiect tematic = 2-3 săptămâni pe o temă; săptămână independentă = 1 temă, 1 săptămână",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-act-1-ch1-q1",
              type: "multiple-choice",
              question: "La ce grupă se lucrează monodisciplinar?",
              options: [
                "Grupa mare",
                "Grupa mijlocie",
                "Grupa mică",
                "Toate grupele",
              ],
              correctIndex: 2,
              explanation:
                "La grupa mică se poate lucra monodisciplinar (un singur domeniu), " +
                "mai ales la început. Grupele mijlocie și mare lucrează integrat.",
            },
            {
              id: "edu-ped-act-1-ch1-q2",
              type: "fill-blank",
              question:
                "Cele 5 domenii experiențiale sunt: DLC, DȘ, DEC, DOS și ___.",
              correctAnswers: ["DPM"],
              explanation:
                "DPM = Domeniul Psihomotric, al cincilea domeniu experiențial.",
            },
            {
              id: "edu-ped-act-1-ch1-q3",
              type: "true-false",
              question:
                "Proiectul tematic se desfășoară pe o singură zi sau cel mult o săptămână.",
              correct: false,
              explanation:
                "Proiectul tematic se întinde pe 2-3 săptămâni pe o temă. " +
                "O singură zi sau săptămână este caracteristica săptămânii " +
                "independente, nu a proiectului tematic.",
            },
            {
              id: "edu-ped-act-1-ch1-q4",
              type: "multiple-choice",
              question:
                "Câte proiecte tematice pe an are grupa mijlocie?",
              options: [
                "~2 proiecte",
                "3-4 proiecte",
                "5-7 proiecte",
                "10 sau mai multe proiecte",
              ],
              correctIndex: 1,
              explanation:
                "Grupa mijlocie are 3-4 proiecte tematice pe an școlar. " +
                "Grupa mică are ~2 proiecte, iar grupa mare poate avea până la 5-7.",
            },
            {
              id: "edu-ped-act-1-ch1-q5",
              type: "true-false",
              question:
                "La grupa mijlocie și mare se lucrează integrat (două sau mai multe domenii într-o activitate).",
              correct: true,
              explanation:
                "Grupele mijlocie și mare lucrează integrat, adică într-o activitate " +
                "se combină două sau mai multe domenii experiențiale. Principiul este " +
                "că preșcolarii învață mai bine prin activități integrate.",
            },
            {
              id: "edu-ped-act-1-ch1-q6",
              type: "multiple-choice",
              question:
                "Ce reprezintă abrevierea DEC?",
              options: [
                "Domeniul Educației Cognitive",
                "Domeniul Estetic și creativ",
                "Domeniul Educației Corporale",
                "Domeniul Experiențelor Creative",
              ],
              correctIndex: 1,
              explanation:
                "DEC = Domeniul Estetic și creativ, unul dintre cele 5 domenii " +
                "experiențiale din educația timpurie, alături de DLC, DȘ, DOS și DPM.",
            },
            {
              id: "edu-ped-act-1-ch1-q7",
              type: "fill-blank",
              question:
                "Activitățile pe domenii experiențiale se planifică în funcție de temele anuale de studiu propuse de ___.",
              correctAnswers: ["curriculum"],
              explanation:
                "ADE-urile sunt planificate în funcție de temele anuale de studiu " +
                "propuse de curriculum. Educatoarea proiectează planificarea anuală " +
                "la începutul anului școlar pe baza acestor teme.",
            },
            {
              id: "edu-ped-act-1-ch1-q8",
              type: "multiple-choice",
              question:
                "Care este un exemplu de săptămână independentă?",
              options: [
                "Primăvara (3 săptămâni)",
                "Animalele (2 săptămâni)",
                "Mărțișor (1 săptămână)",
                "Plantele (4 săptămâni)",
              ],
              correctIndex: 2,
              explanation:
                "Mărțișor este un exemplu tipic de săptămână independentă — o temă " +
                "care nu poate fi extinsă pe mai multe săptămâni și se tratează " +
                "într-o singură săptămână sau chiar o zi.",
            },
            {
              id: "edu-ped-act-1-ch1-q9",
              type: "true-false",
              question:
                "DOS este abrevierea pentru Domeniul Om și societate.",
              correct: true,
              explanation:
                "DOS = Domeniul Om și societate, al patrulea domeniu experiențial " +
                "din educația timpurie. Cele 5 domenii sunt: DLC, DȘ, DEC, DOS, DPM.",
            },
            {
              id: "edu-ped-act-1-ch1-q10",
              type: "multiple-choice",
              question:
                "La Subiectul 3, Exercițiul 1, ce se cere candidatului?",
              options: [
                "Să enumere toate cele 5 domenii experiențiale cu exemple",
                "Să prezinte o activitate ca modalitate specifică de realizare a unui domeniu experiențial",
                "Să descrie planul de învățământ complet",
                "Să compare activitățile integrate cu cele monodisciplinare",
              ],
              correctIndex: 1,
              explanation:
                "La Subiectul 3, Exercițiul 1, cerința este de a prezenta o activitate " +
                "(ex: memorizare, joc didactic, povestire) ca modalitate specifică de " +
                "realizare a unui domeniu experiențial. Toate modalitățile de la DLC " +
                "pot apărea ca cerință.",
            },
          ],
        },
      },
      {
        id: "edu-ped-act-1-ch2",
        title: "DLC — Modalități de realizare",
        duration: "20 min",
        sections: [
          {
            title: "Cele 9 modalități de realizare la DLC",
            content:
              "Modalitățile specifice de realizare a activităților la domeniul " +
              "Limbă și comunicare (educarea limbajului) sunt:\n\n" +
              "1. Memorizarea — învățăm copiii o poezie\n" +
              "2. Povestirea educatoarei — educatoarea spune povestea cu propriile " +
              "cuvinte, folosind personaje/marionete\n" +
              "3. Lectura educatoarei — educatoarea citește povestea din carte\n" +
              "4. Lectura după imagini — pe baza unor imagini se creează o poveste\n" +
              "5. Repovestirea — copiii spun povestea cu propriile cuvinte\n" +
              "6. Convorbirea — la toate grupele de vârstă\n" +
              "7. Dramatizarea — punerea în scenă a poveștii\n" +
              "8. Jocul didactic — joc cu scop educativ\n" +
              "9. Jocul exercițiu — exerciții practice",
            contentBlocks: [
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La Subiectul 3, Exercițiul 1, vi se cere: 'Prezentați o activitate " +
                    "de [memorizare/povestire/lectură etc.] ca una dintre modalitățile " +
                    "specifice de realizare.' Toate cele 9 de mai sus pot apărea.",
                },
              },
            ],
          },
          {
            title: "Povestirea educatoarei vs. lectura educatoarei",
            content:
              "Povestirea educatoarei: educatoarea spune povestea cu propriile cuvinte, " +
              "folosind personaje sau marionete (ca un teatru de păpuși — dar NU scrieți " +
              "'teatru de păpuși' la examen).\n\n" +
              "Lectura educatoarei: educatoarea citește povestea din cartea cu povești, " +
              "fără a parafraza.",
          },
          {
            title: "Lectura după imagini și repovestirea",
            content:
              "Lectura după imagini: pe baza unor imagini se creează o poveste. Se " +
              "folosesc pași metodici, plan de intuiție, pe baza întrebărilor.\n\n" +
              "Repovestirea: după ce copiii au auzit povestea (prin oricare din " +
              "modalitățile de mai sus), ei o spun cu propriile cuvinte.",
          },
        ],
        examples: [
          {
            title: "Tura a doua — consolidare",
            description:
              "Dacă educatoarea de dimineață a făcut memorizare, educatoarea de " +
              "după-amiază face repetarea poeziei. Dacă s-a făcut povestire, se face " +
              "repovestire. Nu se predă materie nouă.",
          },
        ],
        keyPoints: [
          {
            text: "9 modalități DLC: memorizare, povestirea educatoarei, lectura educatoarei, " +
              "lectura după imagini, repovestire, convorbire, dramatizare, joc didactic, joc exercițiu",
            important: true,
          },
          {
            text: "Povestirea educatoarei ≠ lectura educatoarei (propriile cuvinte vs. citit din carte)",
            important: true,
          },
          { text: "Observarea NU este modalitate DLC — e la domeniul Științe" },
          { text: "Tura a doua consolidează, nu predă materie nouă" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-act-1-ch2-q1",
              type: "multiple-choice",
              question:
                "Care este diferența dintre povestirea educatoarei și lectura educatoarei?",
              options: [
                "Nu există nicio diferență",
                "Povestirea = propriile cuvinte cu marionete; Lectura = citit din carte",
                "Povestirea e pentru grupa mică, lectura pentru grupa mare",
                "Povestirea e individuală, lectura e colectivă",
              ],
              correctIndex: 1,
              explanation:
                "La povestire, educatoarea spune povestea cu propriile cuvinte. " +
                "La lectură, citește din cartea cu povești.",
            },
            {
              id: "edu-ped-act-1-ch2-q2",
              type: "true-false",
              question:
                "Observarea este o modalitate de realizare la domeniul Limbă și comunicare.",
              correct: false,
              explanation:
                "Observarea este o modalitate specifică domeniului Științe (DȘ), " +
                "nu domeniului Limbă și comunicare (DLC).",
            },
            {
              id: "edu-ped-act-1-ch2-q3",
              type: "fill-blank",
              question:
                "După ce copiii au auzit povestea, ei o spun cu propriile cuvinte. Această modalitate se numește ___.",
              correctAnswers: ["repovestirea", "repovestire"],
              explanation:
                "Repovestirea este modalitatea prin care copiii redau povestea " +
                "cu propriile cuvinte, după ce au auzit-o.",
            },
            {
              id: "edu-ped-act-1-ch2-q4",
              type: "multiple-choice",
              question:
                "Câte modalități de realizare are domeniul Limbă și comunicare (DLC)?",
              options: ["5", "7", "9", "11"],
              correctIndex: 2,
              explanation:
                "DLC are 9 modalități de realizare: memorizarea, povestirea educatoarei, " +
                "lectura educatoarei, lectura după imagini, repovestirea, convorbirea, " +
                "dramatizarea, jocul didactic și jocul exercițiu.",
            },
            {
              id: "edu-ped-act-1-ch2-q5",
              type: "true-false",
              question:
                "Convorbirea este o modalitate de realizare la DLC disponibilă doar pentru grupa mare.",
              correct: false,
              explanation:
                "Convorbirea este o modalitate de realizare la DLC la toate grupele " +
                "de vârstă (mică, mijlocie și mare), nu doar la grupa mare.",
            },
            {
              id: "edu-ped-act-1-ch2-q6",
              type: "multiple-choice",
              question:
                "Ce face educatoarea de pe tura a doua (după-amiaza)?",
              options: [
                "Predă materie nouă, diferită de dimineață",
                "Consolidează ce a făcut educatoarea de dimineață",
                "Organizează exclusiv activități sportive",
                "Repetă identic activitatea de dimineață",
              ],
              correctIndex: 1,
              explanation:
                "Educatoarea de pe tura a doua consolidează ce a făcut colega de " +
                "dimineață: dacă s-a făcut memorizare, face repetare; dacă s-a făcut " +
                "povestire, face repovestire. Nu se predă materie nouă.",
            },
            {
              id: "edu-ped-act-1-ch2-q7",
              type: "fill-blank",
              question:
                "Punerea în scenă a poveștii de către copii se numește ___.",
              correctAnswers: ["dramatizarea", "dramatizare"],
              explanation:
                "Dramatizarea este modalitatea prin care copiii pun în scenă povestea, " +
                "interpretând rolurile personajelor. Este una dintre cele 9 modalități " +
                "de realizare la DLC.",
            },
            {
              id: "edu-ped-act-1-ch2-q8",
              type: "multiple-choice",
              question:
                "Care dintre următoarele este modalitate de realizare la DLC?",
              options: [
                "Observarea",
                "Experimentul",
                "Jocul didactic",
                "Educația fizică",
              ],
              correctIndex: 2,
              explanation:
                "Jocul didactic este una dintre cele 9 modalități de realizare la DLC. " +
                "Observarea este specifică domeniului Științe (DȘ), nu DLC.",
            },
            {
              id: "edu-ped-act-1-ch2-q9",
              type: "true-false",
              question:
                "La povestirea educatoarei, aceasta citește din cartea cu povești fără a parafraza.",
              correct: false,
              explanation:
                "Cititul din carte fără a parafraza este caracteristica lecturii " +
                "educatoarei, nu a povestirii. La povestirea educatoarei, aceasta " +
                "spune povestea cu propriile cuvinte, folosind marionete sau personaje.",
            },
            {
              id: "edu-ped-act-1-ch2-q10",
              type: "multiple-choice",
              question:
                "La lectura după imagini, ce se folosește pentru a crea povestea?",
              options: [
                "Texte scrise pe tablă",
                "Imagini, pe baza întrebărilor și a planului de intuiție",
                "Marionete și păpuși",
                "Filmulețe educative",
              ],
              correctIndex: 1,
              explanation:
                "La lectura după imagini, pe baza unor imagini se creează o poveste, " +
                "folosind pași metodici, plan de intuiție și întrebări adresate " +
                "copiilor de către educatoare.",
            },
          ],
        },
      },
    ],
  },
];
