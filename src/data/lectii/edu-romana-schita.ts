import { Lesson } from "@/types/lectii";

export const eduRomanaSchitaLessons: Lesson[] = [
  {
    topicId: "romana-sub1-schita",
    title: "Schița: «D-l Goe» — I.L. Caragiale",
    duration: "40 min",
    objectives: [
      "Să definească schița ca specie a genului epic",
      "Să exemplifice două trăsături ale schiței din «D-l Goe»",
      "Să prezinte tema, acțiunea și personajele operei",
      "Să aplice structura standard de eseu pentru schița",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "romana-sub1-schita",
      questions: [
        {
          id: "romana-sub1-schita-fq1",
          type: "multiple-choice",
          question:
            "Cine este considerat creatorul schiței în literatura română?",
          options: [
            "Mihail Sadoveanu",
            "Ion Luca Caragiale",
            "Ioan Slavici",
            "Ion Creangă",
          ],
          correctIndex: 1,
          explanation:
            "I.L. Caragiale este considerat creatorul schiței în literatura română.",
        },
        {
          id: "romana-sub1-schita-fq2",
          type: "true-false",
          question:
            "În schița «D-l Goe», acțiunea se desfășoară pe parcursul mai multor zile.",
          correct: false,
          explanation:
            "Acțiunea schiței se desfășoară pe o durată scurtă, într-un " +
            "decor unic — călătoria cu trenul, pe durata unui singur drum.",
        },
        {
          id: "romana-sub1-schita-fq3",
          type: "fill-blank",
          question:
            "Punctul culminant al schiței este când Goe trage semnalul de ___, oprind trenul.",
          correctAnswers: ["alarma", "alarmă"],
          explanation:
            "Goe trage semnalul de alarmă fără motiv, oprind trenul și " +
            "provocând agitație — acesta este punctul culminant al schiței.",
        },
        {
          id: "romana-sub1-schita-fq4",
          type: "multiple-choice",
          question:
            "Care este tema schiței «D-l Goe»?",
          options: [
            "Conflictul dintre generații",
            "Critica educației nepotrivite din familie",
            "Viața la oraș vs. viața la țară",
            "Lupta pentru putere politică",
          ],
          correctIndex: 1,
          explanation:
            "Tema schiței este critica educației nepotrivite din familie, care " +
            "creează un copil obraznic și lipsit de respect.",
        },
        {
          id: "romana-sub1-schita-fq5",
          type: "true-false",
          question:
            "Goe călătorește singur cu trenul spre București.",
          correct: false,
          explanation:
            "Goe este însoțit de trei doamne: mam-mare, mamitica și tanti Mița.",
        },
        {
          id: "romana-sub1-schita-fq6",
          type: "multiple-choice",
          question:
            "Ce inscripție are Goe pe pălărie?",
          options: [
            "«Le Capitaine»",
            "«Le Formidable»",
            "«Le Magnifique»",
            "«Le Marinaire»",
          ],
          correctIndex: 1,
          explanation:
            "Inscripția ironică «Le Formidable» de pe pălăria lui Goe " +
            "contrastează comic cu comportamentul său obraznic.",
        },
        {
          id: "romana-sub1-schita-fq7",
          type: "fill-blank",
          question:
            "Schița este o operă epică în proză de dimensiuni ___, cu o acțiune restrânsă.",
          correctAnswers: ["reduse"],
          explanation:
            "Schița este o operă epică în proză de dimensiuni reduse, cu o acțiune " +
            "restrânsă, în care participă un număr mic de personaje.",
        },
        {
          id: "romana-sub1-schita-fq8",
          type: "true-false",
          question:
            "Trăsătura «caracterul dramatizat» înseamnă că schița conține elemente de tragedie.",
          correct: false,
          explanation:
            "Caracterul dramatizat nu se referă la tragedie, ci la faptul că " +
            "dialogurile au o importanță majoră în schiță, uneori chiar mai " +
            "mare decât narațiunea propriu-zisă.",
        },
        {
          id: "romana-sub1-schita-fq9",
          type: "multiple-choice",
          question:
            "De unde pleacă Goe și cele trei doamne în călătoria cu trenul?",
          options: [
            "Din București",
            "Din Urbea X",
            "Din Iași",
            "Din Ploiești",
          ],
          correctIndex: 1,
          explanation:
            "În expoziția schiței, Goe așteaptă trenul pe peronul din Urbea X, " +
            "un nume fictiv care subliniază caracterul tipic, generalizabil al " +
            "locului și al personajelor.",
        },
        {
          id: "romana-sub1-schita-fq10",
          type: "true-false",
          question:
            "Schița «D-l Goe» se încadrează în genul liric, prin exprimarea sentimentelor autorului.",
          correct: false,
          explanation:
            "Schița este o operă epică, nu lirică. Ea aparține genului epic " +
            "deoarece prezintă o acțiune cu personaje, un fir narativ și " +
            "momente ale subiectului (expoziție, intrigă, desfășurare, punct " +
            "culminant, deznodământ).",
        },
      ],
    },

    chapters: [
      // ─── Chapter 1: Schița — «D-l Goe» de I.L. Caragiale ───
      {
        id: "romana-sub1-schita-ch1",
        title: "Schița — «D-l Goe» de I.L. Caragiale",
        duration: "~25 min",
        sections: [
          {
            title: "Definiția schiței",
            content:
              "Schița este o operă epică în proză de dimensiuni reduse, cu o acțiune " +
              "restrânsă, în care participă un număr mic de personaje surprinse într-un " +
              "moment semnificativ al existenței lor.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Schița** este o operă epică în proză de **dimensiuni reduse**, cu o " +
                  "acțiune **restrânsă**, în care participă un **număr mic de personaje** " +
                  "surprinse într-un **moment semnificativ** al existenței lor.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La schiță, cele două trăsături cele mai ușoare de reținut sunt: " +
                    "(1) caracterul dramatizat — dialogurile au importanță majoră și " +
                    "(2) desfășurarea acțiunii pe o durată scurtă, într-un decor unic. " +
                    "Pornești cu definiția, apoi treci la cele două trăsături.",
                },
              },
            ],
          },
          {
            title: "Date despre operă și autor",
            content:
              "Ion Luca Caragiale, unul dintre cei mai mari scriitori români, este " +
              "considerat creatorul schiței în literatura română. Schița «D-l Goe» " +
              "satirizează educația greșită dată copilului de familie, evidențiind " +
              "contrastul dintre aparență și realitate.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Ion Luca Caragiale**, unul dintre cei mai mari scriitori români, " +
                  "este considerat **creatorul schiței** în literatura română. Schița " +
                  "«D-l Goe» satirizează educația greșită dată copilului de familie, " +
                  "evidențiind contrastul dintre **aparență și realitate**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Un intro bun în eseu: «Ion Luca Caragiale, considerat creatorul " +
                    "schiței în literatura română, satirizează în «D-l Goe» educația " +
                    "greșită dată copilului de familie bună.» Scurt și la obiect.",
                },
              },
            ],
          },
          {
            title: "Trăsătura 1: Caracterul dramatizat",
            content:
              "O primă trăsătură specifică a schiței este caracterul dramatizat, " +
              "în care dialogurile au o importanță majoră, uneori chiar mai mare " +
              "decât narațiunea propriu-zisă. În «D-l Goe», dialogurile între Goe " +
              "și cele trei doamne, precum și discuția filologică despre pronunția " +
              "cuvântului «marinar», dau savoare și umor textului.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "O primă trăsătură specifică a schiței este **caracterul dramatizat**, " +
                  "în care **dialogurile** au o importanță majoră, uneori chiar mai mare " +
                  "decât narațiunea propriu-zisă.\n\n" +
                  "În «D-l Goe», dialogurile între Goe și cele trei doamne dau " +
                  "savoare și umor textului. Exemplu:\n" +
                  "• Discuția filologică dintre cele trei doamne despre pronunția " +
                  "cuvântului «marinar» — o scenă pur dialogată\n" +
                  "• Replicile obraznice ale lui Goe: «Vezi că sunteți proaste amândouă?»",
              },
            ],
          },
          {
            title: "Trăsătura 2: Acțiune scurtă, decor unic",
            content:
              "A doua trăsătură specifică este desfășurarea acțiunii pe o durată " +
              "scurtă, într-un decor unic. Acțiunea se petrece aproape în întregime " +
              "în timpul călătoriei cu trenul, pe durata unui singur drum, ceea ce " +
              "concentrează atenția asupra întâmplărilor petrecute.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "A doua trăsătură specifică este **desfășurarea acțiunii pe o durată " +
                  "scurtă**, într-un **decor unic**.\n\n" +
                  "Acțiunea se petrece aproape în întregime în timpul **călătoriei cu " +
                  "trenul**, pe durata unui singur drum, ceea ce concentrează atenția " +
                  "asupra întâmplărilor petrecute.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Decorul unic (trenul) și durata scurtă (un singur drum) sunt " +
                    "ușor de reținut. Compară cu nuvela, care are repere precise de " +
                    "timp și spațiu pe o durată mai lungă — la schiță totul e " +
                    "concentrat într-un singur episod.",
                },
              },
            ],
          },
          {
            title: "Tema schiței",
            content:
              "Tema schiței este critica educației nepotrivite din familie, care " +
              "creează un copil obraznic și lipsit de respect. Caragiale relevă " +
              "acest lucru prin comportamentul lui Goe și reacțiile celor trei " +
              "doamne care-l însoțesc.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tema** schiței este **critica educației nepotrivite din familie**, " +
                  "care creează un copil obraznic și lipsit de respect.\n\n" +
                  "Caragiale relevă acest lucru prin comportamentul lui Goe și " +
                  "reacțiile celor trei doamne care-l însoțesc — ele tolerează " +
                  "toate obrăzniciile copilului, contribuind la degradarea " +
                  "comportamentului acestuia.",
              },
            ],
          },
          {
            title: "Acțiunea — momentele subiectului",
            content:
              "Expozițiune: Goe așteaptă trenul împreună cu mam-mare, mamitica și " +
              "tanti Mița pe peronul din Urbea X. Autorul precizează că Goe este " +
              "dus la București «ca să nu mai rămână repetent», iar copilul, " +
              "îmbrăcat în costum de marinar, este nerăbdător. Intriga: sosirea " +
              "trenului și urcarea pasagerilor, Goe rămânând pe coridor cu bărbații. " +
              "Desfășurarea acțiunii: Goe scoate capul pe fereastră, pierde pălăria " +
              "și biletul, iar însoțitoarele sunt nevoite să plătească amenda. Mai " +
              "târziu, copilul dispare și este găsit în toaleta vagonului. Punct " +
              "culminant: Goe trage fără motiv semnalul de alarmă, oprind trenul. " +
              "Deznodământ: sosirea la București.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Acțiunea se desfășoară pe **momentele subiectului**:\n\n" +
                  "**Expozițiunea:** Goe așteaptă trenul împreună cu mam-mare, mamitica " +
                  "și tanti Mița pe peronul din **Urbea X**. Autorul precizează că Goe " +
                  "este dus la București «ca să nu mai rămână repetent», iar copilul, " +
                  "îmbrăcat în costum de marinar, este nerăbdător.\n\n" +
                  "**Intriga:** Sosirea trenului și urcarea pasagerilor, Goe rămânând " +
                  "pe coridor cu bărbații.\n\n" +
                  "**Desfășurarea acțiunii:** Goe scoate capul pe fereastră, pierde " +
                  "pălăria și biletul, iar însoțitoarele sunt nevoite să plătească " +
                  "amenda. Mai târziu, copilul dispare și este găsit în toaleta vagonului.\n\n" +
                  "**Punctul culminant:** Goe trage fără motiv **semnalul de alarmă**, " +
                  "oprind trenul și provocând agitație.\n\n" +
                  "**Deznodământul:** Sosirea la București.",
              },
            ],
          },
          {
            title: "Personajul principal — Goe",
            content:
              "Goe este caracterizat prin obraznicie și lipsă de educație. " +
              "Jigniri: «Vezi că sunteți proaste amândouă?», «Ce treabă ai tu, " +
              "urâtule?». Inscripția «Le Formidable» de pe pălărie contrastează " +
              "ironic cu comportamentul copilului. Trage semnalul de alarmă fără " +
              "motiv.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Goe** este personajul principal, caracterizat prin **obraznicie** " +
                  "și **lipsă de educație**.\n\n" +
                  "**Modalități de caracterizare:**\n" +
                  "• **Directă** (prin comportament): jignește adulții — «Vezi că sunteți " +
                  "proaste amândouă?», «Ce treabă ai tu, urâtule?»\n" +
                  "• **Indirectă** (prin detalii sugestive): inscripția ironică " +
                  "«Le Formidable» de pe pălăria de marinar contrastează comic cu " +
                  "comportamentul real al copilului\n" +
                  "• **Prin fapte:** pierde pălăria și biletul, dispare în toaleta " +
                  "vagonului, trage semnalul de alarmă fără motiv\n\n" +
                  "Cele trei doamne (mam-mare, mamitica, tanti Mița) tolerează " +
                  "toate obrăzniciile, reprezentând educația deficitară.",
              },
            ],
          },
        ],
        examples: [
          {
            title: "Fragment introductiv pentru eseu",
            description:
              "«Ion Luca Caragiale, considerat creatorul schiței în literatura " +
              "română, satirizează în «D-l Goe» educația greșită dată copilului " +
              "de familie bună, evidențiind contrastul dintre aparență și realitate.» " +
              "— Un paragraf introductiv eficient, urmat de definiția schiței.",
          },
        ],
        keyPoints: [
          {
            text: "Schița = specie epică, în proză, dimensiuni reduse, număr mic de personaje",
            important: true,
          },
          {
            text: "I.L. Caragiale — creatorul schiței în literatura română",
            important: true,
          },
          { text: "Trăsătura 1: caracterul dramatizat (dialogurile predomină)", important: true },
          {
            text: "Trăsătura 2: acțiune scurtă, decor unic (călătoria cu trenul)",
            important: true,
          },
          { text: "Tema: critica educației nepotrivite din familie" },
          { text: "Acțiunea: expoziție → intrigă → desfășurare → punct culminant (alarma) → deznodământ" },
          { text: "Goe: obraznic, needucat — «Vezi că sunteți proaste amândouă?»" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-schita-mq1-1",
              type: "multiple-choice",
              question:
                "Cine este considerat creatorul schiței în literatura română?",
              options: [
                "Mihail Sadoveanu",
                "Ion Luca Caragiale",
                "Ioan Slavici",
                "Ion Creangă",
              ],
              correctIndex: 1,
              explanation:
                "I.L. Caragiale este considerat creatorul schiței în literatura română.",
            },
            {
              id: "romana-sub1-schita-mq1-2",
              type: "true-false",
              question:
                "În schița «D-l Goe», acțiunea se desfășoară pe parcursul mai multor zile.",
              correct: false,
              explanation:
                "Acțiunea schiței se desfășoară pe o durată scurtă, într-un " +
                "decor unic — călătoria cu trenul, pe durata unui singur drum.",
            },
            {
              id: "romana-sub1-schita-mq1-3",
              type: "fill-blank",
              question:
                "Punctul culminant al schiței este când Goe trage semnalul de ___, oprind trenul.",
              correctAnswers: ["alarma", "alarmă"],
              explanation:
                "Goe trage semnalul de alarmă fără motiv, oprind trenul și " +
                "provocând agitație — acesta este punctul culminant al schiței.",
            },
            {
              id: "romana-sub1-schita-mq1-4",
              type: "multiple-choice",
              question:
                "Unde se petrece acțiunea schiței «D-l Goe»?",
              options: [
                "Într-o școală din București",
                "Într-un tren, pe durata unui singur drum",
                "La o petrecere de familie",
                "Într-un parc din Urbea X",
              ],
              correctIndex: 1,
              explanation:
                "Acțiunea schiței se petrece aproape în întregime în timpul " +
                "călătoriei cu trenul, pe durata unui singur drum — aceasta " +
                "este trăsătura de desfășurare pe durată scurtă, într-un decor unic.",
            },
            {
              id: "romana-sub1-schita-mq1-5",
              type: "true-false",
              question:
                "Goe este un copil bine-crescut, care respectă adulții din jurul său.",
              correct: false,
              explanation:
                "Goe este caracterizat prin obraznicie și lipsă de educație. " +
                "El jignește adulții («Vezi că sunteți proaste amândouă?», " +
                "«Ce treabă ai tu, urâtule?»), pierde pălăria și biletul, " +
                "și trage semnalul de alarmă fără motiv.",
            },
            {
              id: "romana-sub1-schita-mq1-6",
              type: "multiple-choice",
              question:
                "Ce discuție filologică se poartă între cele trei doamne în timpul călătoriei?",
              options: [
                "Despre ortografia cuvântului «București»",
                "Despre pronunția cuvântului «marinar»",
                "Despre semnificația numelui «Goe»",
                "Despre regulile de politețe în tren",
              ],
              correctIndex: 1,
              explanation:
                "Cele trei doamne se ceartă pe tema pronunției cuvântului «marinar» — " +
                "o scenă pur dialogată care ilustrează caracterul dramatizat al schiței, " +
                "unde dialogurile au importanță majoră.",
            },
            {
              id: "romana-sub1-schita-mq1-7",
              type: "true-false",
              question:
                "Schița «D-l Goe» are un număr mare de personaje, specifice romanului.",
              correct: false,
              explanation:
                "Schița, prin definiție, are un număr mic de personaje. " +
                "În «D-l Goe» apar doar Goe și cele trei doamne care-l " +
                "însoțesc (mam-mare, mamitica și tanti Mița), plus câțiva " +
                "călători secundari.",
            },
            {
              id: "romana-sub1-schita-mq1-8",
              type: "fill-blank",
              question:
                "Goe este dus la București «ca să nu mai rămână ___».",
              correctAnswers: ["repetent"],
              explanation:
                "Autorul precizează în expoziție că Goe este dus la București " +
                "«ca să nu mai rămână repetent», sugerând că este un copil " +
                "indisciplinat și în mediul școlar, nu doar în familie.",
            },
            {
              id: "romana-sub1-schita-mq1-9",
              type: "multiple-choice",
              question:
                "Care sunt cele trei doamne care îl însoțesc pe Goe în călătorie?",
              options: [
                "Mama, bunica și sora",
                "Mam-mare, mamitica și tanti Mița",
                "Doamna profesoară, mama și mătușa",
                "Tanti Ana, mam-mare și bunica",
              ],
              correctIndex: 1,
              explanation:
                "Goe este însoțit de mam-mare, mamitica și tanti Mița — " +
                "cele trei doamne care tolerează toate obrăzniciile copilului " +
                "și reprezintă educația deficitară din familie.",
            },
            {
              id: "romana-sub1-schita-mq1-10",
              type: "multiple-choice",
              question:
                "Ce modalitate de caracterizare este folosită prin inscripția «Le Formidable» de pe pălăria lui Goe?",
              options: [
                "Caracterizare directă prin comportament",
                "Caracterizare indirectă prin detalii sugestive",
                "Caracterizare prin vorbele autorului",
                "Caracterizare prin monolog interior",
              ],
              correctIndex: 1,
              explanation:
                "Inscripția «Le Formidable» de pe pălăria de marinar este un " +
                "detaliu sugestiv care contrastează ironic cu comportamentul " +
                "real al copilului — aceasta este o modalitate de caracterizare indirectă.",
            },
          ],
        },
      },

      // ─── Chapter 2: Model de eseu — Schița ───
      {
        id: "romana-sub1-schita-ch2",
        title: "Model de eseu — Schița",
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
                  "1. **Definiția speciei literare** + câteva date despre autor\n" +
                  "2. **Trăsătura 1** (caracterul dramatizat) cu exemplificare concretă din text\n" +
                  "3. **Trăsătura 2** (acțiune scurtă, decor unic) cu exemplificare concretă din text\n" +
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
                    "sunt ușor de exemplificat și nu riscați să greșiți. Nu uita: " +
                    "eseul trebuie să aibă 300-400 de cuvinte, toate cuvintele contează.",
                },
              },
            ],
          },
          {
            title: "Model complet de eseu — Schița «D-l Goe»",
            content:
              "Un model complet de eseu despre schița «D-l Goe» de I.L. Caragiale, " +
              "structurat conform cerințelor de la Subiectul 1B.",
            contentBlocks: [
              {
                kind: "expandable",
                expandable: {
                  label: "Model de eseu — Schița «D-l Goe» de I.L. Caragiale",
                  source: "claude",
                  content:
                    "Schița este o operă epică în proză de dimensiuni reduse, cu o acțiune " +
                    "restrânsă, în care participă un număr mic de personaje surprinse într-un " +
                    "moment semnificativ al existenței lor. Ion Luca Caragiale, unul dintre " +
                    "cei mai mari scriitori români, este considerat creatorul schiței în " +
                    "literatura română. Schița «D-l Goe» satirizează educația greșită dată " +
                    "copilului de familie, evidențiind contrastul dintre aparență și realitate.\n\n" +
                    "O primă trăsătură specifică a schiței este caracterul dramatizat, în care " +
                    "dialogurile au o importanță majoră, uneori chiar mai mare decât narațiunea " +
                    "propriu-zisă. În «D-l Goe», dialogurile între Goe și cele trei doamne, " +
                    "precum și discuția filologică despre pronunția cuvântului «marinar», dau " +
                    "savoare și umor textului.\n\n" +
                    "A doua trăsătură specifică este desfășurarea acțiunii pe o durată scurtă, " +
                    "într-un decor unic. Acțiunea se petrece aproape în întregime în timpul " +
                    "călătoriei cu trenul, pe durata unui singur drum, ceea ce concentrează " +
                    "atenția asupra întâmplărilor petrecute.\n\n" +
                    "Tema schiței este critica educației nepotrivite din familie, care creează " +
                    "un copil obraznic și lipsit de respect. Caragiale relevă acest lucru prin " +
                    "comportamentul lui Goe și reacțiile celor trei doamne care-l însoțesc.\n\n" +
                    "Acțiunea se desfășoară pe momentele subiectului. În expoziție, Goe " +
                    "așteaptă trenul împreună cu mam-mare, mamitica și tanti Mița pe peronul " +
                    "din Urbea X. Autorul precizează că Goe este dus la București «ca să nu " +
                    "mai rămână repetent», iar copilul, îmbrăcat în costum de marinar, este " +
                    "nerăbdător. Intriga începe cu sosirea trenului și urcarea pasagerilor. " +
                    "În desfășurarea acțiunii, Goe scoate capul pe fereastră, pierde pălăria " +
                    "și biletul, iar însoțitoarele sunt nevoite să plătească amenda. Punctul " +
                    "culminant este când Goe trage fără motiv semnalul de alarmă, oprind " +
                    "trenul și provocând agitație. Deznodământul marchează sosirea la " +
                    "București.\n\n" +
                    "Astfel, prin temă, acțiune și trăsăturile specifice schiței, «D-l Goe» " +
                    "scoate în evidență, cu umor și ironie, efectele unei educații deficitare, " +
                    "fiind o capodoperă a genului în literatura română.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Personajul principal, Goe, este caracterizat prin prisma unei trăsături " +
                    "dominante: obraznicia. Dacă la examen se cere și caracterizare de personaj, " +
                    "insistă pe: jignirile adresate mamei («Vezi că sunteți proaste amândouă?»), " +
                    "interpelarea unui călător («Ce treabă ai tu, urâtule?»), tragerea semnalului " +
                    "de alarmă, inscripția ironică «Le Formidable» de pe pălărie.",
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
            text: "Structura: definiție → trăsături + exemplificare → elemente de construcție → concluzie",
            important: true,
          },
          { text: "Tema și acțiunea sunt cele mai sigure elemente de construcție" },
          {
            text: "Exemplifică concret din text (dialoguri, fapte ale lui Goe)",
            important: true,
          },
          { text: "Nu depăși limita de 300-400 cuvinte" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "romana-sub1-schita-mq2-1",
              type: "multiple-choice",
              question:
                "Cu ce ar trebui să înceapă eseul despre o specie literară?",
              options: [
                "Cu biografia completă a autorului",
                "Cu definiția speciei literare",
                "Cu momentele subiectului",
                "Cu o citire expresivă a textului",
              ],
              correctIndex: 1,
              explanation:
                "Eseul trebuie să înceapă cu definiția speciei literare, " +
                "urmată de date despre autor și operă.",
            },
            {
              id: "romana-sub1-schita-mq2-2",
              type: "true-false",
              question:
                "La eseul despre schiță, este obligatoriu să caracterizezi personajul principal.",
              correct: false,
              explanation:
                "Caracterizarea personajului nu este obligatorie decât dacă " +
                "cerința o specifică explicit. Elementele obligatorii sunt " +
                "trăsăturile speciei și elementele de construcție.",
            },
            {
              id: "romana-sub1-schita-mq2-3",
              type: "fill-blank",
              question:
                "Cele două elemente de construcție recomandate pentru eseu sunt tema și ___.",
              correctAnswers: ["actiunea", "acțiunea"],
              explanation:
                "Tema și acțiunea sunt cele mai sigure și accesibile " +
                "elemente de construcție — sunt ușor de exemplificat și " +
                "oferă suficient material pentru eseu.",
            },
            {
              id: "romana-sub1-schita-mq2-4",
              type: "multiple-choice",
              question:
                "Care este limita de cuvinte recomandată pentru eseul de la Subiectul 1B?",
              options: [
                "100-200 de cuvinte",
                "200-300 de cuvinte",
                "300-400 de cuvinte",
                "500-600 de cuvinte",
              ],
              correctIndex: 2,
              explanation:
                "Eseul de la Subiectul 1B trebuie să aibă 300-400 de cuvinte. " +
                "O foaie de caiet studențesc (32 de rânduri, ~10 cuvinte/rând) " +
                "corespunde aproximativ acestei limite.",
            },
            {
              id: "romana-sub1-schita-mq2-5",
              type: "true-false",
              question:
                "În eseul despre schiță, trebuie să incluzi biografia completă a lui I.L. Caragiale.",
              correct: false,
              explanation:
                "Nu este nevoie de biografia completă a autorului. Este suficient " +
                "să menționezi că I.L. Caragiale este considerat creatorul schiței " +
                "în literatura română — scurt și la obiect.",
            },
            {
              id: "romana-sub1-schita-mq2-6",
              type: "multiple-choice",
              question:
                "Ce urmează imediat după definiția speciei literare în structura eseului?",
              options: [
                "Concluzia",
                "Momentele subiectului",
                "Trăsătura 1 cu exemplificare din text",
                "Opinia personală despre operă",
              ],
              correctIndex: 2,
              explanation:
                "După definiția speciei literare și datele despre autor, urmează " +
                "prezentarea primei trăsături (caracterul dramatizat) cu " +
                "exemplificare concretă din text.",
            },
            {
              id: "romana-sub1-schita-mq2-7",
              type: "fill-blank",
              question:
                "Cele două trăsături specifice ale schiței prezentate în eseu sunt caracterul dramatizat și acțiunea scurtă într-un ___ unic.",
              correctAnswers: ["decor"],
              explanation:
                "A doua trăsătură a schiței este desfășurarea acțiunii pe o durată " +
                "scurtă, într-un decor unic. În «D-l Goe», decorul unic este trenul.",
            },
            {
              id: "romana-sub1-schita-mq2-8",
              type: "true-false",
              question:
                "La eseul despre schiță, concluzia este obligatorie pentru a obține punctaj maxim.",
              correct: false,
              explanation:
                "Concluzia este opțională — se scrie doar dacă mai ai spațiu. " +
                "Elementele obligatorii sunt: definiția speciei, cele două trăsături " +
                "cu exemplificare și cele două elemente de construcție.",
            },
            {
              id: "romana-sub1-schita-mq2-9",
              type: "multiple-choice",
              question:
                "Care dintre următoarele NU este un element de construcție recomandat pentru eseul despre schiță?",
              options: [
                "Tema",
                "Acțiunea (momentele subiectului)",
                "Biografia autorului",
                "Concluzia",
              ],
              correctIndex: 2,
              explanation:
                "Biografia autorului nu este un element de construcție a discursului " +
                "narativ. Elementele de construcție recomandate sunt tema și acțiunea, " +
                "care sunt ușor de exemplificat din textul operei.",
            },
            {
              id: "romana-sub1-schita-mq2-10",
              type: "multiple-choice",
              question:
                "Ce exemplu concret din text se poate folosi pentru a ilustra caracterul dramatizat?",
              options: [
                "Descrierea peronului din Urbea X",
                "Discuția filologică despre pronunția cuvântului «marinar»",
                "Sosirea trenului la București",
                "Costumul de marinar al lui Goe",
              ],
              correctIndex: 1,
              explanation:
                "Discuția filologică dintre cele trei doamne despre pronunția " +
                "cuvântului «marinar» este o scenă pur dialogată, exemplu perfect " +
                "pentru ilustrarea caracterului dramatizat al schiței.",
            },
          ],
        },
      },
    ],
  },
];
