import { Lesson } from "@/types/lectii";

export const eduPedagogieAdpLessons: Lesson[] = [
  {
    topicId: "edu-ped-act-3",
    title: "Activități de dezvoltare personală: rutine, tranziții, opționale, extrașcolare",
    duration: "60 min",
    objectives: [
      "Să definească activitățile de învățare și activitățile de dezvoltare personală (ADP)",
      "Să enumere componentele ADP-urilor și cele 8 rutine din programul zilnic",
      "Să descrie întâlnirea de dimineață cu cele 6 etape (salut, prezență, calendar, mișcare, împărtășire, noutatea zilei)",
      "Să definească tranzițiile în educația timpurie și să le exemplifice",
      "Să cunoască definiția și caracteristicile activităților opționale",
      "Să identifice criteriile de selectare a activităților opționale",
      "Să înțeleagă diferențele de obligativitate a opționalelor pe grupe de vârstă",
      "Să aplice structura unui răspuns complet la Subiectul 3, Exercițiul 2",
      "Să diferențieze cerințele de examen referitoare la ADP-uri (opționale vs. rutine)",
      "Să definească activitățile extrașcolare și să le diferențieze de activitățile opționale",
      "Să cunoască reglementarea activităților extrașcolare prin ROFUIP",
    ],
    theory: [],
    examples: [],
    keyPoints: [],
    quiz: {
      topicId: "edu-ped-act-3",
      questions: [
        // Final quiz — 8 mixed questions from all chapters
        {
          id: "edu-ped-act-3-fq1",
          type: "multiple-choice",
          question:
            "Care este rolul principal al tranzițiilor în programul zilnic al grădiniței?",
          options: [
            "Să evalueze cunoștințele copiilor",
            "Să facă trecerea de la o activitate la alta",
            "Să înlocuiască activitățile pe domenii experiențiale",
            "Să introducă conținuturi noi de învățare",
          ],
          correctIndex: 1,
          explanation:
            "Tranzițiile sunt activități de scurtă durată care fac trecerea de la o " +
            "activitate la alta, folosind cântece, poezii sau recitative ritmice.",
        },
        {
          id: "edu-ped-act-3-fq2",
          type: "true-false",
          question:
            "Activitățile opționale sunt obligatorii pentru toate grupele de vârstă din grădiniță.",
          correct: false,
          explanation:
            "La grupa mică, activitățile opționale nu sunt obligatorii. Ele devin " +
            "obligatorii la grupa mijlocie și la grupa mare.",
        },
        {
          id: "edu-ped-act-3-fq3",
          type: "multiple-choice",
          question: "Cine selectează activitățile opționale pentru anul școlar următor?",
          options: [
            "Educatoarea, în funcție de programă",
            "Inspectoratul școlar județean",
            "Părinții, din lista propusă de educatoare",
            "Copiii, prin vot democratic",
          ],
          correctIndex: 2,
          explanation:
            "Activitățile opționale sunt selectate de părinți, din lista propusă de " +
            "educatoare, în luna februarie, pentru anul școlar următor.",
        },
        {
          id: "edu-ped-act-3-fq4",
          type: "fill-blank",
          question:
            "Activitățile opționale sunt selectate de părinți în luna ___ pentru anul școlar următor.",
          correctAnswers: ["februarie"],
          explanation:
            "Selecția activităților opționale se face în luna februarie, când " +
            "părinții aleg din lista propusă de educatoare pentru anul școlar următor.",
        },
        {
          id: "edu-ped-act-3-fq5",
          type: "multiple-choice",
          question:
            "La Subiectul 3, Exercițiul 2, structura tipică a cerințelor este:",
          options: [
            "A) Enumerați ADP-urile; B) Dați exemple de jocuri didactice; C) Descrieți o activitate pe domenii",
            "A) Definiți ADP-urile; B) Enumerați ADP-urile; C) Prezentați importanța unei componente ADP",
            "A) Definiți activitățile liber-alese; B) Enumerați domeniile experiențiale; C) Descrieți o rutină",
            "A) Descrieți curriculumul; B) Enumerați metodele de evaluare; C) Prezentați un joc didactic",
          ],
          correctIndex: 1,
          explanation:
            "Structura tipică este: A) Definiți ADP-urile, B) Enumerați ADP-urile " +
            "(rutine, tranziții, opționale, extrașcolare), C) Prezentați importanța " +
            "uneia dintre componente (de obicei opționalele sau rutinele).",
        },
        {
          id: "edu-ped-act-3-fq6",
          type: "true-false",
          question:
            "Tranzițiile trebuie schimbate zilnic pentru a menține interesul copiilor.",
          correct: false,
          explanation:
            "Tranzițiile nu trebuie schimbate zilnic. Copiii învață prin imitație " +
            "și repetiție — au nevoie de rutină. Se recomandă o tranziție fixă " +
            "pentru fiecare moment, păstrată 2-3 săptămâni.",
        },
        {
          id: "edu-ped-act-3-fq7",
          type: "multiple-choice",
          question:
            "Activitățile opționale au rolul de:",
          options: [
            "A înlocui activitățile pe domenii experiențiale",
            "A diversifica experiențele de învățare oferite preșcolarilor",
            "A evalua nivelul de pregătire pentru școală",
            "A reduce numărul de ore petrecute în grădiniță",
          ],
          correctIndex: 1,
          explanation:
            "Activitățile opționale reprezintă o componentă complementară a " +
            "curriculumului, cu rolul de a diversifica experiențele de învățare " +
            "oferite preșcolarilor.",
        },
        {
          id: "edu-ped-act-3-fq8",
          type: "fill-blank",
          question:
            "Activitățile de dezvoltare personală includ: rutinele, ___, activitățile opționale și activitățile extrașcolare.",
          correctAnswers: ["tranzitiile", "tranzițiile"],
          explanation:
            "ADP-urile cuprind: rutinele (inclusiv întâlnirea de dimineață), " +
            "tranzițiile, activitățile opționale și activitățile extrașcolare.",
        },
        {
          id: "edu-ped-act-3-fq9",
          type: "multiple-choice",
          question:
            "Care este diferența principală dintre activitățile opționale și activitățile extrașcolare?",
          options: [
            "Opționalele se desfășoară în afara grădiniței, extrașcolarele în cadrul programului",
            "Opționalele sunt selectate anual de părinți, extrașcolarele sunt inițiate de cadre didactice pe parcursul anului",
            "Opționalele sunt gratuite, extrașcolarele sunt contra cost",
            "Opționalele se desfășoară lunar, extrașcolarele zilnic",
          ],
          correctIndex: 1,
          explanation:
            "Activitățile opționale sunt selectate de părinți în luna februarie pentru anul școlar următor. " +
            "Activitățile extrașcolare sunt inițiate pe parcursul anului școlar, la inițiativa cadrelor " +
            "didactice, în funcție de proiectele educaționale.",
        },
        {
          id: "edu-ped-act-3-fq10",
          type: "true-false",
          question:
            "Activitățile extrașcolare sunt reglementate prin ROFUIP (Regulamentul cadru de organizare și funcționare a unităților de învățământ preuniversitar).",
          correct: true,
          explanation:
            "ROFUIP reglementează organizarea activităților extrașcolare, permițând desfășurarea " +
            "lor în colaborare cu diverși parteneri, cu acordul părinților, sub responsabilitatea unității școlare.",
        },
        {
          id: "edu-ped-act-3-fq11",
          type: "multiple-choice",
          question:
            "Care este scopul activităților extrașcolare în educația timpurie?",
          options: [
            "Evaluarea cunoștințelor acumulate de preșcolari",
            "Oferirea de contexte autentice de învățare prin experiență directă, interacțiune și observare",
            "Înlocuirea activităților pe domenii experiențiale",
            "Pregătirea preșcolarilor pentru ciclul primar",
          ],
          correctIndex: 1,
          explanation:
            "Scopul activităților extrașcolare este de a oferi preșcolarilor contexte autentice " +
            "de învățare prin experiență directă, interacțiune și observare, susținând dezvoltarea " +
            "socială, emoțională și cognitivă.",
        },
        {
          id: "edu-ped-act-3-fq12",
          type: "fill-blank",
          question:
            "Activitățile extrașcolare se desfășoară în afara programului educațional, sub formă de excursii, vizite sau activități ___.",
          correctAnswers: ["recreative"],
          explanation:
            "Activitățile extrașcolare sunt activități de învățare care se desfășoară " +
            "în afara programului educațional, sub formă de excursii, vizite sau activități recreative.",
        },
        // --- Quiz questions about rutine & întâlnirea de dimineață (19.02) ---
        {
          id: "edu-ped-act-3-fq13",
          type: "multiple-choice",
          question:
            "Care dintre următoarele NU este o rutină din programul zilnic al grădiniței?",
          options: [
            "Sosirea copilului la grădiniță",
            "Întâlnirea de dimineață",
            "Activitățile opționale",
            "Masa de prânz",
          ],
          correctIndex: 2,
          explanation:
            "Activitățile opționale nu sunt rutine — sunt o componentă separată a ADP-urilor. " +
            "Rutinele sunt cele 8 activități-cadru desfășurate zilnic (sosirea, micul dejun, " +
            "igiena, întâlnirea de dimineață, masa de prânz, somnul, gustările, plecarea).",
        },
        {
          id: "edu-ped-act-3-fq14",
          type: "true-false",
          question:
            "Rutinele sunt activități care se desfășoară ocazional, în funcție de proiectele educaționale.",
          correct: false,
          explanation:
            "Rutinele se desfășoară ZILNIC, aproximativ la aceeași oră. Sunt activități-cadru " +
            "care acoperă nevoile principale ale preșcolarilor și susțin dezvoltarea globală.",
        },
        {
          id: "edu-ped-act-3-fq15",
          type: "multiple-choice",
          question:
            "Câte etape are întâlnirea de dimineață?",
          options: [
            "4 etape: salutul, prezența, calendarul naturii, noutatea zilei",
            "5 etape: salutul, prezența, calendarul, momentul de mișcare, noutatea zilei",
            "6 etape: salutul, prezența, calendarul naturii, momentul de mișcare, împărtășirea, noutatea zilei",
            "3 etape: salutul, calendarul naturii, noutatea zilei",
          ],
          correctIndex: 2,
          explanation:
            "Întâlnirea de dimineață are 6 etape: 1) salutul, 2) prezența, " +
            "3) calendarul naturii, 4) momentul de mișcare, 5) împărtășirea cu " +
            "ceilalți, 6) noutatea zilei.",
        },
        {
          id: "edu-ped-act-3-fq16",
          type: "fill-blank",
          question:
            "Activitățile de învățare în educația timpurie reprezintă un ansamblu de acțiuni planificate, organizate și ___ de către cadrul didactic.",
          correctAnswers: ["dirijate"],
          explanation:
            "Definiția completă: activitățile de învățare reprezintă un ansamblu de acțiuni " +
            "planificate, organizate și dirijate de către cadrul didactic.",
        },
      ],
    },

    // Transcript — full course notes
    transcript:
      `# Curs Titularizare — 19.02.2026

## Prima sesiune de pregătire

### Sfaturi generale

- **Nu folosiți prescurtări la examen** (ADP, ADE etc.) — scrieți denumirile complete. Prescurtările primesc zero puncte, chiar dacă conținutul este corect.
- **Caietul = tot ce aveți nevoie.** Dacă știți caietul foarte bine până la examen, nota este 10.00.

---

## Activități de învățare în educația timpurie

### Definiție

> Activitățile de învățare în educația timpurie reprezintă un **ansamblu de acțiuni planificate, organizate și dirijate** de către cadrul didactic.

### Tipurile de activități

1. **Activități de dezvoltare personală** (primele activități ale zilei)
2. **Activități pe domenii experiențiale**
3. **Activități liber-alese** (jocul liber pe covor)

---

## Activitățile de dezvoltare personală (ADP)

### Definiție

> Activitățile de dezvoltare personală reprezintă activități desfășurate cu preșcolarii, în care se urmărește **dezvoltarea socioemoțională, cognitivă și psihomotrică** a copiilor.

### Ce cuprind ADP-urile

- Tranzițiile
- Rutinele
- Jocul liber ales (activități liber-alese din perioada dimineții)
- Activități de dezvoltare a aptitudinilor din perioada după-amiezii
- Activități opționale și extrașcolare

---

## Rutinele

### Definiție

> Rutinele reprezintă activități-cadru care acoperă nevoile principale ale preșcolarilor, susținând **dezvoltarea globală** a acestora. Se desfășoară **zilnic**, aproximativ la aceeași oră.

### Cele 8 rutine

1. Sosirea copilului la grădiniță
2. Micul dejun
3. Igiena și spălatul mâinilor
4. Întâlnirea de dimineață
5. Masa de prânz
6. Ora de somn sau odihnă
7. Gustările
8. Plecarea copilului acasă

---

## Întâlnirea de dimineață — Eseu

### Definiție

> **Întâlnirea de dimineață** este o rutină și reprezintă un moment esențial pentru preșcolari, având rolul de a crea **un cadru organizat și echilibrat** pentru desfășurarea activităților ulterioare. Se desfășoară **zilnic**.

Scop: dezvoltarea socio-afectivă, cognitivă și psihomotrică a copiilor.

### Etapele întâlnirii de dimineață

1. **Salutul** — marchează începutul zilei; adaptat temei anuale și temei zilei; stimulativ (poezii, recitativ ritmic, îmbrățișări)
2. **Prezența** — preșcolarii afișează la panou poza lor
3. **Calendarul naturii** — achiziția de cunoștințe referitoare la zilele săptămânii, lună, anotimp, starea vremii, ceasul (grupa mare)
4. **Momentul de mișcare** — preșcolarii execută mișcări de gimnastică pe muzică (înviorarea de dimineață)
5. **Împărtășirea cu ceilalți** — preșcolarii împărtășesc idei, trăiri, experiențe cu colegii
6. **Noutatea zilei** — mesaj scurt și direct care trezește interesul și facilitează accesul la informație

### Abilități dezvoltate

Prin activitățile din cadrul întâlnirii de dimineață, preșcolarii își dezvoltă **abilități de comunicare, autocunoaștere și relaționare**, fiind încurajați să își exprime gândurile și emoțiile.

---

# Curs Titularizare — 20.02.2026

## Activitățile de dezvoltare personală (ADP)

### Recapitulare

Activitățile de învățare din grădiniță se compun din:
- Activități pe domenii experiențiale
- Activități de dezvoltare personală (ADP)
- Activități liber-alese

În cursul anterior s-au descris activitățile pe domenii experiențiale și s-au amintit activitățile liber-alese. În acest curs se continuă cu ADP-urile: tranzițiile și activitățile opționale.

---

### Tranzițiile

#### Definiție

> Tranzițiile în educația timpurie reprezintă **activități de scurtă durată** care fac trecerea de la o activitate la alta. Se realizează cu ajutorul **cântecelor, poeziilor, recitativelor ritmice**.

#### Sfaturi pentru examen

- Tranzițiile sunt **doar de enumerat sau de definit** la examen, nu de dezvoltat într-un eseu.
- Dacă vine un subiect despre ADP-uri, tranzițiile se menționează scurt (definiție + enumerare).
- Nu se cere să descrii un cântec sau un joc muzical — nu e cazul.

#### Sfaturi din practică

- **Nu schimba tranzițiile zilnic sau săptămânal**, mai ales la grupa mică. Copiii învață prin imitație și repetiție — au nevoie de rutină.
- Alege **o tranziție fixă pentru fiecare moment**: una pentru baie, una pentru trecerea la centre, una pentru adunarea jucăriilor, etc. Când copiii aud tranziția, trebuie să știe clar ce urmează.
- Poți păstra aceleași tranziții 2–3 săptămâni (ex. pe durata unui proiect tematic), apoi adaptezi dacă e nevoie.
- La inspecții — adaptezi și schimbi. În rest, rutinezi.
- **Alternative la cântece**: muzică pusă pe tabla interactivă (ex. Pantera Roz = semnal de adunare jucării), clepsidră, cronometru-bombă (mai potrivit pentru grupele mari).
- Dacă nu știi cântecele tradiționale, adaptează melodii pe care le cunoști deja.

---

### Activitățile opționale

#### Definiție

> Activitățile opționale în educația timpurie reprezintă **o componentă complementară a curriculumului** pentru educația timpurie, având rolul de **a diversifica experiențele de învățare** oferite preșcolarilor în primii ani de viață.

#### Caracteristici

- Sunt **selectate și organizate** în funcție de:
  - aptitudinile preșcolarilor
  - interesele acestora
  - contextul educațional specific fiecărei instituții școlare
- Sunt selectate de **părinți**, din lista propusă de educatoare, **în luna februarie**, pentru **anul școlar următor**
- Se desfășoară **în cursul orelor de grădiniță**
- Pot fi ținute de **educatoare** sau de **alți profesori**
- **Grupa mică**: nu sunt obligatorii; **grupa mijlocie și mare**: da
- Necesită:
  - planificare specială pentru opțional
  - includere în planificarea săptămânală
  - înregistrare în condica de activități

#### Importanța activităților opționale

Alegerea activităților opționale contribuie la:
- dezvoltarea preșcolarilor
- extinderea ariilor de interes
- stimularea creativității
- sprijinirea învățării
- pot acoperi diverse domenii
- devin un mijloc valoros de susținere a învățării

#### Aspecte practice

- **Tipuri de opționale**: engleză, dans, karate, canto, teatru, dar și opționale pe care le poate face educatoarea (micul ecologist, matematică distractivă, trăistuța cu povești etc.)
- **Contra-cost vs. gratuit**: pentru opționalele de specialitate (engleză, dans etc.) vin profesori externi, de regulă contra-cost (~25 lei/oră). Există tendința de a interzice opționalele pe bani, pentru a asigura accesul egal — în unele județe (ex. Galați) sunt deja interzise, permise doar prin parteneriate benevole.
- **Alternativă**: Palatul Copiilor — înscrieri gratuite pentru dans, canto, arte etc.
- **Important pentru examen**: nu se scrie la examen despre aspectul financiar. Se scrie doar că se desfășoară în cursul orelor de grădiniță, pot fi ținute de educatoare sau alți profesori, se aleg în februarie de către părinți.

---

### Model cerință examen

**Subiectul 3, Exercițiul 2** — structura tipică:

**A)** Definiți activitățile de dezvoltare personală în educația timpurie.
→ *Se scrie definiția ADP-urilor (din cursul anterior)*

**B)** Enumerați activitățile de dezvoltare personală.
→ *Se enumeră: rutinele (inclusiv întâlnirea de dimineață), tranzițiile, activitățile opționale, activitățile extrașcolare*

**C)** Prezentați importanța activităților opționale în grădiniță.
→ *Se scrie definiția activităților opționale + caracteristicile + importanța (dezvoltarea preșcolarilor, extinderea ariilor de interes, stimularea creativității, sprijinirea învățării, acoperirea diverselor domenii)*

**Notă formatoare**: În loc de activități opționale, la punctul C pot cere și: prezentarea unei activități de rutină (caz în care se scrie despre întâlnirea de dimineață).

---

# Curs Titularizare — 23.02.2026

### Activitățile extrașcolare

#### Definiție

> Activitățile extrașcolare în educația timpurie sunt **activități de învățare** care se desfășoară **în afara programului educațional**, sub formă de **excursii, vizite sau activități recreative**.

#### Reglementare

- Sunt reglementate prin **ROFUIP** (Regulamentul cadru de organizare și funcționare a unităților de învățământ preuniversitar)
- Se organizează **în colaborare cu diverși parteneri**, **cu acordul părinților**, **sub responsabilitatea unității școlare**

#### Caracteristici

- Se desfășoară **lunar**
- Implică **parteneri educaționali**: familia, primăria, autoritățile, biserica
- **Nu sunt selectate anual de către părinți** (spre deosebire de opționale)
- Sunt **inițiate pe parcursul anului școlar**, la inițiativa cadrelor didactice, în funcție de proiectele educaționale

#### Scopul activităților extrașcolare

> Scopul activităților extrașcolare este de a oferi preșcolarilor **contexte autentice de învățare** prin experiență directă, interacțiune și observare. Acestea susțin **dezvoltarea socială și emoțională**, dar și **cognitivă** a preșcolarilor, favorizând dezvoltarea armonioasă a acestora.

#### Exemplu relevant

Organizarea unei **excursii la grădina zoologică**:
- Preșcolarii vor observa modul de îngrijire al animalelor, hrana pe care acestea o consumă și caracteristicile specifice fiecărui animal
- Experiența va fi completată de participarea preșcolarilor la **hrănirea puilor de căprioară**
- Preșcolarii își vor dezvolta **empatia față de animale** și vor achiziționa cunoștințe noi
- Pot lua parte la excursie, ca parteneri educaționali, **părinții preșcolarilor**

> Activitățile extrașcolare reprezintă oportunități excelente de colaborare cu familia și de dezvoltare armonioasă a preșcolarilor.

#### Sfaturi pentru examen

- La examen, scrieți **denumirea completă a ROFUIP** (Regulamentul cadru de organizare și funcționare a unităților de învățământ preuniversitar), nu doar acronimul
- Personalizați exemplul (nu copiați mot-à-mot — alegeți un alt animal, o altă locație)
- Menționați partenerii educaționali și acordul părinților`,

    // === CHAPTERS ===
    chapters: [
      // --- Chapter 1: Rutinele și Întâlnirea de dimineață (19.02) ---
      {
        id: "edu-ped-act-3-ch1",
        title: "Rutinele și Întâlnirea de dimineață",
        duration: "~15 min",
        sections: [
          {
            title: "Activități de învățare — definiție generală",
            content:
              "Activitățile de învățare în educația timpurie reprezintă un **ansamblu de " +
              "acțiuni planificate, organizate și dirijate** de către cadrul didactic.\n\n" +
              "Tipurile de activități din educația timpurie sunt:\n" +
              "1. **Activități de dezvoltare personală** (primele activități ale zilei)\n" +
              "2. **Activități pe domenii experiențiale**\n" +
              "3. **Activități liber-alese** (jocul liber pe covor)",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Activitățile de învățare în educația timpurie reprezintă un **ansamblu de " +
                  "acțiuni planificate, organizate și dirijate** de către cadrul didactic.\n\n" +
                  "Tipurile de activități din educația timpurie sunt:\n" +
                  "1. **Activități de dezvoltare personală** (primele activități ale zilei)\n" +
                  "2. **Activități pe domenii experiențiale**\n" +
                  "3. **Activități liber-alese** (jocul liber pe covor)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen **nu folosiți prescurtări** (ADP, ADE etc.) — scrieți denumirile " +
                    "complete. Prescurtările primesc zero puncte, chiar dacă conținutul este corect. " +
                    "Limbajul trebuie să fie științific, specific unui profesor.",
                },
              },
            ],
          },
          {
            title: "Activitățile de dezvoltare personală (ADP) — definiție și componente",
            content:
              "Activitățile de dezvoltare personală reprezintă activități desfășurate cu " +
              "preșcolarii, în care se urmărește **dezvoltarea socioemoțională, cognitivă și " +
              "psihomotrică** a copiilor.\n\n" +
              "ADP-urile cuprind:\n" +
              "• **Tranzițiile**\n" +
              "• **Rutinele** (inclusiv întâlnirea de dimineață)\n" +
              "• **Jocul liber ales** (activități liber-alese din perioada dimineții)\n" +
              "• **Activități de dezvoltare a aptitudinilor** din perioada după-amiezii\n" +
              "• **Activități opționale și extrașcolare**",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Activitățile de dezvoltare personală reprezintă activități desfășurate cu " +
                  "preșcolarii, în care se urmărește **dezvoltarea socioemoțională, cognitivă și " +
                  "psihomotrică** a copiilor.\n\n" +
                  "• **Socioemoțional** = socializare + exprimarea emoțiilor\n" +
                  "• **Cognitiv** = cunoștințe, vocabular, gândire\n" +
                  "• **Psihomotric** = mișcare, educație fizică",
              },
              {
                kind: "text",
                text:
                  "**ADP-urile cuprind:**\n" +
                  "• **Tranzițiile**\n" +
                  "• **Rutinele** (inclusiv întâlnirea de dimineață)\n" +
                  "• **Jocul liber ales** (activități liber-alese din perioada dimineții)\n" +
                  "• **Activități de dezvoltare a aptitudinilor** din perioada după-amiezii\n" +
                  "• **Activități opționale și extrașcolare**",
              },
            ],
          },
          {
            title: "Rutinele — definiție și cele 8 activități",
            content:
              "Rutinele reprezintă **activități-cadru** care acoperă nevoile principale ale " +
              "preșcolarilor, susținând **dezvoltarea globală** a acestora. Se desfășoară " +
              "**zilnic**, aproximativ la aceeași oră.\n\n" +
              "Rutinele cuprind următoarele activități:\n" +
              "1. Sosirea copilului la grădiniță\n" +
              "2. Micul dejun\n" +
              "3. Igiena și spălatul mâinilor\n" +
              "4. Întâlnirea de dimineață\n" +
              "5. Masa de prânz\n" +
              "6. Ora de somn sau odihnă\n" +
              "7. Gustările\n" +
              "8. Plecarea copilului acasă",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Rutinele reprezintă **activități-cadru** care acoperă nevoile principale ale " +
                  "preșcolarilor, susținând **dezvoltarea globală** a acestora. Se desfășoară " +
                  "**zilnic**, aproximativ la aceeași oră.\n\n" +
                  "**Rutinele cuprind următoarele activități:**\n" +
                  "1. Sosirea copilului la grădiniță\n" +
                  "2. Micul dejun\n" +
                  "3. Igiena și spălatul mâinilor\n" +
                  "4. Întâlnirea de dimineață\n" +
                  "5. Masa de prânz\n" +
                  "6. Ora de somn sau odihnă\n" +
                  "7. Gustările\n" +
                  "8. Plecarea copilului acasă",
              },
            ],
          },
          {
            title: "Întâlnirea de dimineață — definiție, scop și cele 6 etape",
            content:
              "**Întâlnirea de dimineață** este o rutină și reprezintă un moment esențial " +
              "pentru preșcolari, având rolul de a crea **un cadru organizat și echilibrat** " +
              "pentru desfășurarea activităților ulterioare. Se desfășoară **zilnic**.\n\n" +
              "**Scop:** dezvoltarea socio-afectivă, cognitivă și psihomotrică a copiilor.\n\n" +
              "**Cele 6 etape:**\n" +
              "1. **Salutul** — marchează începutul zilei prin conectarea emoțională; " +
              "adaptat temei anuale și temei zilei; stimulativ\n" +
              "2. **Prezența** — preșcolarii afișează la panou poza lor\n" +
              "3. **Calendarul naturii** — achiziția de cunoștințe referitoare la zilele " +
              "săptămânii, lună, anotimp, starea vremii și ceasul (grupa mare)\n" +
              "4. **Momentul de mișcare** — preșcolarii execută mișcări de gimnastică pe " +
              "muzică (înviorarea de dimineață)\n" +
              "5. **Împărtășirea cu ceilalți** — preșcolarii împărtășesc idei, trăiri, " +
              "experiențe cu colegii\n" +
              "6. **Noutatea zilei** — mesaj scurt și direct care trezește interesul și " +
              "facilitează accesul preșcolarilor la informație\n\n" +
              "Prin aceste activități, preșcolarii își dezvoltă **abilități de comunicare, " +
              "autocunoaștere și relaționare**, fiind încurajați să își exprime gândurile " +
              "și emoțiile în funcție de vârstă și particularitățile lor.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Întâlnirea de dimineață** este o rutină și reprezintă un moment esențial " +
                  "pentru preșcolari, având rolul de a crea **un cadru organizat și echilibrat** " +
                  "pentru desfășurarea activităților ulterioare. Se desfășoară **zilnic**.\n\n" +
                  "**Scop:** dezvoltarea socio-afectivă, cognitivă și psihomotrică a copiilor.",
              },
              {
                kind: "text",
                text:
                  "**Cele 6 etape ale întâlnirii de dimineață:**\n\n" +
                  "1. **Salutul** — marchează începutul zilei prin conectarea emoțională cu " +
                  "ceilalți. Trebuie să fie adaptat temei anuale și temei zilei și să fie stimulativ.\n\n" +
                  "2. **Prezența** — preșcolarii afișează la panou poza lor (nu se face ca la " +
                  "școală, prin strigarea numelui).\n\n" +
                  "3. **Calendarul naturii** — se realizează prin achiziția de cunoștințe " +
                  "referitoare la zilele săptămânii, lună, anotimp, starea vremii și ceasul " +
                  "(ora — pentru grupa mare). Se pot adăuga: emoțiile, cum mă îmbrac.\n\n" +
                  "4. **Momentul de mișcare** — preșcolarii execută mișcări de gimnastică " +
                  "pe muzică (numit și «înviorarea de dimineață»).\n\n" +
                  "5. **Împărtășirea cu ceilalți** — momentul în care preșcolarii " +
                  "împărtășesc idei, trăiri, experiențe cu ceilalți colegi.\n\n" +
                  "6. **Noutatea zilei** — se realizează printr-un mesaj scurt și direct, " +
                  "care trezește interesul și facilitează accesul preșcolarilor la informație.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Salutul se adaptează temei pe care o ai. Dacă tema este despre flori: " +
                    "«Bună dimineața, narcisă! Bună dimineața, zambilă!» Poți merge pe " +
                    "poezii, pe recitativ ritmic, pe îmbrățișări.",
                },
              },
              {
                kind: "text",
                text:
                  "Prin activitățile desfășurate în cadrul întâlnirii de dimineață, " +
                  "preșcolarii își dezvoltă **abilități de comunicare, autocunoaștere " +
                  "și relaționare**, fiind încurajați să își exprime gândurile și emoțiile " +
                  "în funcție de vârstă și particularitățile lor.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "experience",
                  content:
                    "Caietul este tot ce aveți nevoie. Dacă știți caietul foarte bine " +
                    "până la examen, nota este 10.00. Nu e nevoie de materiale suplimentare.",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label: "Model de răspuns — Întâlnirea de dimineață (eseu)",
                  source: "claude",
                  content:
                    "**«Întâlnirea de dimineață** este o activitate de rutină desfășurată " +
                    "zilnic, la începutul programului, având rolul de a crea un cadru organizat " +
                    "și echilibrat pentru desfășurarea activităților ulterioare. Aceasta " +
                    "contribuie la dezvoltarea socio-afectivă, cognitivă și psihomotrică " +
                    "a copiilor.\n\n" +
                    "Întâlnirea de dimineață cuprinde mai multe etape:\n\n" +
                    "**Salutul** marchează începutul zilei prin conectarea emoțională cu " +
                    "ceilalți. Acesta trebuie să fie adaptat temei anuale și temei zilei. " +
                    "De exemplu, dacă tema este despre flori, salutul poate fi: " +
                    "«Bună dimineața, narcisă! Bună dimineața, zambilă!»\n\n" +
                    "**Prezența** se realizează prin afișarea pozei fiecărui copil la " +
                    "panoul grupei, ceea ce le conferă sentimentul că sunt așteptați.\n\n" +
                    "**Calendarul naturii** presupune achiziția de cunoștințe referitoare " +
                    "la zilele săptămânii, lună, anotimp și starea vremii.\n\n" +
                    "**Momentul de mișcare** (înviorarea de dimineață) constă în executarea " +
                    "de mișcări de gimnastică pe muzică.\n\n" +
                    "**Împărtășirea cu ceilalți** este momentul în care preșcolarii " +
                    "împărtășesc idei, trăiri și experiențe cu colegii.\n\n" +
                    "**Noutatea zilei** se realizează printr-un mesaj scurt și direct, " +
                    "care trezește interesul și facilitează accesul la informație.\n\n" +
                    "Prin aceste activități, preșcolarii își dezvoltă abilități de " +
                    "comunicare, autocunoaștere și relaționare, fiind încurajați să " +
                    "își exprime gândurile și emoțiile.»\n\n" +
                    "**De ce este valid acest răspuns:**\n" +
                    "• Începe cu **definiția** (rutină, zilnică, cadru organizat)\n" +
                    "• Menționează **scopul** (dezvoltare socio-afectivă, cognitivă, psihomotrică)\n" +
                    "• Enumeră **toate cele 6 etape** cu scurte descrieri\n" +
                    "• Include **exemplu concret** la salut (adaptat temei)\n" +
                    "• Încheie cu **abilitățile dezvoltate** (comunicare, autocunoaștere, relaționare)",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Salut adaptat temei zilei",
            description:
              "Salutul la întâlnirea de dimineață se adaptează temei anuale și temei " +
              "zilei. Iată un exemplu concret:\n\n" +
              "**Tema: Flori de primăvară**\n" +
              "Educatoarea salută fiecare copil cu numele unei flori: «Bună dimineața, " +
              "narcisă! Bună dimineața, zambilă! Bună dimineața, lalea!» Copiii răspund " +
              "cu entuziasm și învață în același timp denumirile florilor.\n\n" +
              "**Alternative:**\n" +
              "• Poezie scurtă legată de tema zilei\n" +
              "• Recitativ ritmic\n" +
              "• Îmbrățișări (la grupele în care copiii se simt confortabil)",
            context: "Orice grupă de vârstă, dimineața la întâlnirea de dimineață",
          },
          {
            title: "Calendarul naturii — ce discutăm",
            description:
              "La calendarul naturii se discută cu copiii prin conversație și observare:\n\n" +
              "• **Ce zi este azi?** (zilele săptămânii)\n" +
              "• **Ce lună este?** (luna curentă)\n" +
              "• **Ce anotimp este?** (anotimpul)\n" +
              "• **Cum este vremea afară?** (soare, nori, ploaie, ninsoare)\n" +
              "• **Cât este ceasul?** (doar la grupa mare)\n" +
              "• **Cum mă simt azi?** (emoțiile — bucuros, trist, energic)\n" +
              "• **Cum mă îmbrac?** (în funcție de vreme)\n\n" +
              "Copiii completează panoul calendarului naturii cu simboluri " +
              "corespunzătoare (soare, nori, frunze etc.).",
            context: "Orice grupă de vârstă, etapa calendarului naturii",
          },
        ],
        keyPoints: [
          {
            text: "Activitățile de învățare = ansamblu de acțiuni planificate, organizate și dirijate de cadrul didactic",
            important: true,
          },
          {
            text: "ADP-urile cuprind: tranzițiile, rutinele, jocul liber ales, activități de dezvoltare a aptitudinilor, opționale și extrașcolare",
            important: true,
          },
          {
            text: "Rutinele sunt 8 activități-cadru desfășurate zilnic, la aceeași oră: sosirea, micul dejun, igiena, întâlnirea de dimineață, masa de prânz, somnul, gustările, plecarea",
            important: true,
          },
          {
            text: "Întâlnirea de dimineață are 6 etape: salutul, prezența, calendarul naturii, momentul de mișcare, împărtășirea, noutatea zilei",
            important: true,
          },
          {
            text: "La examen nu folosiți prescurtări (ADP, ADE) — scrieți denumirile complete, altfel primiți zero puncte",
            important: true,
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-act-3-mq-r1",
              type: "multiple-choice",
              question: "Câte rutine cuprinde programul zilnic al preșcolarilor?",
              options: [
                "5 rutine",
                "6 rutine",
                "8 rutine",
                "10 rutine",
              ],
              correctIndex: 2,
              explanation:
                "Rutinele cuprind 8 activități: sosirea, micul dejun, igiena, " +
                "întâlnirea de dimineață, masa de prânz, ora de somn, gustările, " +
                "plecarea copilului acasă.",
            },
            {
              id: "edu-ped-act-3-mq-r2",
              type: "true-false",
              question:
                "Întâlnirea de dimineață are ca scop doar dezvoltarea cognitivă a copiilor.",
              correct: false,
              explanation:
                "Întâlnirea de dimineață are ca scop dezvoltarea socio-afectivă, " +
                "cognitivă ȘI psihomotrică a copiilor — nu doar cognitivă.",
            },
            {
              id: "edu-ped-act-3-mq-r3",
              type: "multiple-choice",
              question: "Care este prima etapă a întâlnirii de dimineață?",
              options: [
                "Calendarul naturii",
                "Prezența",
                "Salutul",
                "Momentul de mișcare",
              ],
              correctIndex: 2,
              explanation:
                "Salutul marchează începutul zilei și este prima etapă a " +
                "întâlnirii de dimineață. Trebuie adaptat temei anuale și temei zilei.",
            },
            {
              id: "edu-ped-act-3-mq-r4",
              type: "fill-blank",
              question:
                "Rutinele reprezintă activități-cadru care acoperă nevoile principale ale preșcolarilor, susținând dezvoltarea ___ a acestora.",
              correctAnswers: ["globală", "globala"],
              explanation:
                "Rutinele susțin dezvoltarea globală a preșcolarilor, adică " +
                "dezvoltarea pe toate planurile: fizic, cognitiv, socio-emoțional. " +
                "Se desfășoară zilnic, aproximativ la aceeași oră.",
            },
            {
              id: "edu-ped-act-3-mq-r5",
              type: "multiple-choice",
              question:
                "Care dintre următoarele NU este una dintre cele 8 rutine?",
              options: [
                "Micul dejun",
                "Igiena și spălatul mâinilor",
                "Tranzițiile",
                "Ora de somn sau odihnă",
              ],
              correctIndex: 2,
              explanation:
                "Tranzițiile nu sunt rutine — sunt o componentă separată a ADP-urilor. " +
                "Cele 8 rutine sunt: sosirea, micul dejun, igiena, întâlnirea de " +
                "dimineață, masa de prânz, ora de somn, gustările și plecarea.",
            },
            {
              id: "edu-ped-act-3-mq-r6",
              type: "true-false",
              question:
                "La calendarul naturii se discută despre ceas doar la grupa mare.",
              correct: true,
              explanation:
                "Ceasul (ora) face parte din calendarul naturii doar la grupa mare, " +
                "unde copiii sunt pregătiți cognitiv pentru a înțelege conceptul de " +
                "timp. Celelalte elemente (zi, lună, anotimp, vreme) se discută la " +
                "toate grupele.",
            },
            {
              id: "edu-ped-act-3-mq-r7",
              type: "multiple-choice",
              question:
                "Ce abilități dezvoltă preșcolarii prin întâlnirea de dimineață?",
              options: [
                "Abilități de scriere și citire",
                "Abilități de comunicare, autocunoaștere și relaționare",
                "Abilități de calcul matematic",
                "Abilități de programare",
              ],
              correctIndex: 1,
              explanation:
                "Prin activitățile din cadrul întâlnirii de dimineață, preșcolarii " +
                "își dezvoltă abilități de comunicare, autocunoaștere și relaționare, " +
                "fiind încurajați să își exprime gândurile și emoțiile.",
            },
            {
              id: "edu-ped-act-3-mq-r8",
              type: "multiple-choice",
              question:
                "Care este etapa în care preșcolarii afișează la panou poza lor?",
              options: [
                "Salutul",
                "Prezența",
                "Împărtășirea cu ceilalți",
                "Noutatea zilei",
              ],
              correctIndex: 1,
              explanation:
                "Prezența este etapa a doua a întâlnirii de dimineață, în care " +
                "preșcolarii afișează la panou poza lor. Nu se face ca la școală, " +
                "prin strigarea numelui.",
            },
            {
              id: "edu-ped-act-3-mq-r9",
              type: "true-false",
              question:
                "La examen, se pot folosi prescurtări precum ADP sau ADE în loc de denumirile complete.",
              correct: false,
              explanation:
                "La examen NU se folosesc prescurtări (ADP, ADE etc.) — se scriu " +
                "denumirile complete. Prescurtările primesc zero puncte, chiar dacă " +
                "conținutul este corect. Limbajul trebuie să fie științific.",
            },
            {
              id: "edu-ped-act-3-mq-r10",
              type: "fill-blank",
              question:
                "Cele trei tipuri de activități de învățare din educația timpurie sunt: activitățile de dezvoltare personală, activitățile pe domenii experiențiale și activitățile ___.",
              correctAnswers: ["liber-alese", "liber alese"],
              explanation:
                "Cele trei tipuri de activități sunt: activitățile de dezvoltare " +
                "personală (ADP), activitățile pe domenii experiențiale (ADE) și " +
                "activitățile liber-alese (jocul liber pe covor).",
            },
          ],
        },
      },

      // --- Chapter 2: Tranzițiile (20.02) ---
      {
        id: "edu-ped-act-3-ch2",
        title: "Tranzițiile (20.02)",
        duration: "~10 min",
        sections: [
          {
            title: "Definiție",
            content:
              "Tranzițiile în educația timpurie reprezintă **activități de scurtă durată** care " +
              "fac trecerea de la o activitate la alta. Se realizează cu ajutorul **cântecelor, " +
              "poeziilor, recitativelor ritmice**.\n\n" +
              "Rolul lor este de a marca momentele de schimbare din programul zilnic, " +
              "ajutând copiii să înțeleagă ce urmează și să se pregătească pentru " +
              "următoarea activitate.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Tranzițiile în educația timpurie reprezintă **activități de scurtă durată** care " +
                  "fac trecerea de la o activitate la alta. Se realizează cu ajutorul **cântecelor, " +
                  "poeziilor, recitativelor ritmice**.\n\n" +
                  "Rolul lor este de a marca momentele de schimbare din programul zilnic, " +
                  "ajutând copiii să înțeleagă ce urmează și să se pregătească pentru " +
                  "următoarea activitate.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Tranzițiile sunt **doar de enumerat sau de definit** la examen, nu de dezvoltat într-un eseu. " +
                    "Dacă vine un subiect despre ADP-uri, tranzițiile se menționează scurt (definiție + enumerare). " +
                    "Nu se cere să descrii un cântec sau un joc muzical — nu e cazul.",
                },
              },
            ],
          },
          {
            title: "Rolul tranzițiilor în programul zilnic",
            content:
              "Tranzițiile creează **predictibilitate** în programul zilnic al grădiniței. " +
              "Când copiii aud o anumită tranziție, știu exact ce urmează — aceasta le " +
              "oferă siguranță și reduce anxietatea, mai ales la grupa mică.\n\n" +
              "**Sfaturi din practică:**\n" +
              "• **Nu schimba tranzițiile zilnic sau săptămânal**, mai ales la grupa mică. " +
              "Copiii învață prin imitație și repetiție — au nevoie de rutină.\n" +
              "• Alege **o tranziție fixă pentru fiecare moment**: una pentru baie, una pentru " +
              "trecerea la centre, una pentru adunarea jucăriilor. Când copiii aud tranziția, " +
              "trebuie să știe clar ce urmează.\n" +
              "• Poți păstra aceleași tranziții **2-3 săptămâni** (ex. pe durata unui proiect " +
              "tematic), apoi adaptezi dacă e nevoie.\n" +
              "• La inspecții — adaptezi și schimbi. În rest, rutinezi.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Tranzițiile creează **predictibilitate** în programul zilnic al grădiniței. " +
                  "Când copiii aud o anumită tranziție, știu exact ce urmează — aceasta le " +
                  "oferă siguranță și reduce anxietatea, mai ales la grupa mică.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "**Nu schimba tranzițiile zilnic sau săptămânal**, mai ales la grupa mică. " +
                    "Copiii învață prin imitație și repetiție — au nevoie de rutină.\n\n" +
                    "Alege **o tranziție fixă pentru fiecare moment**: una pentru baie, una pentru " +
                    "trecerea la centre, una pentru adunarea jucăriilor. Când copiii aud tranziția, " +
                    "trebuie să știe clar ce urmează.\n\n" +
                    "Poți păstra aceleași tranziții **2-3 săptămâni** (ex. pe durata unui proiect " +
                    "tematic), apoi adaptezi dacă e nevoie.",
                },
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "experience",
                  content:
                    "La inspecții — adaptezi și schimbi. În rest, rutinezi.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Exemple de tranziții frecvente",
            description:
              "Tranzițiile sunt momente scurte (30 sec – 2 min) în care educatoarea " +
              "folosește un semnal sonor sau verbal ca să anunțe copiii că activitatea " +
              "curentă se termină și începe alta. Gândește-te la ele ca la un «clopoțel» " +
              "care le spune copiilor ce urmează.\n\n" +
              "**Exemple concrete pe momente ale zilei:**\n" +
              "• **Adunarea jucăriilor:** educatoarea cântă un cântec scurt " +
              "(ex. «Unu, doi, trei — jucăriile la locul lor!»). Copiii știu că, " +
              "atunci când aud melodia, e momentul să strângă tot de pe mese și din " +
              "centre și să pună fiecare obiect la locul lui.\n" +
              "• **Spălatul pe mâini:** o poezie ritmată recitată în cor " +
              "(ex. «Mâini curate, mâini curate, apa curge peste toate!»). Copiii " +
              "se ridică de la activitate și se îndreaptă spre baie în ordine.\n" +
              "• **Așezarea în cerc:** un cântec care îi invită pe copii să formeze " +
              "un cerc pe covor (ex. «Hai în cerc, hai în cerc, toți copiii se " +
              "adună!»). Semnalul e mereu același — copiii nu au nevoie de " +
              "explicații suplimentare.\n" +
              "• **Trecerea la masa de prânz:** o scandare ritmică scurtă care " +
              "marchează sfârșitul activităților dimineții și trecerea la rutina mesei.",
            context: "Orice grupă de vârstă, momente de tranziție din programul zilnic",
          },
          {
            title: "Alternative moderne la cântecele tradiționale",
            description:
              "Nu toate educatoarele știu cântecele tradiționale de grădiniță, " +
              "și nici nu e obligatoriu. Există alternative la fel de eficiente:\n\n" +
              "• **Muzică pe tabla interactivă:** în loc să cânți, pui o melodie " +
              "cunoscută pe care copiii o asociază cu un moment anume. De exemplu, " +
              "melodia Pantera Roz = semnal de adunare a jucăriilor. Când copiii " +
              "aud muzica, știu exact ce au de făcut.\n" +
              "• **Clepsidra:** o clepsidră de 1-2 minute pusă pe masă. Copiii " +
              "văd nisipul cum curge și știu cât timp mai au pentru activitatea " +
              "curentă. Funcționează bine vizual, fără niciun cântec.\n" +
              "• **Cronometru-bombă (timer vizual):** un cronometru cu numărătoare " +
              "inversă, mai potrivit pentru grupa mare. Adaugă un element de joc: " +
              "«Cine termină de strâns înainte ca timerul să sune?»\n" +
              "• **Melodii adaptate:** dacă nu cunoști cântecele tradiționale, " +
              "poți lua o melodie pe care o știi deja și să pui text nou pe ea. " +
              "Important e ca melodia să fie mereu aceeași pentru același moment " +
              "al zilei — copiii învață prin repetiție.",
            context: "Adaptări practice pentru educatoare la început de carieră",
          },
        ],
        keyPoints: [
          {
            text: "Tranzițiile sunt activități de scurtă durată care fac trecerea de la o activitate la alta, folosind cântece, poezii, recitative ritmice",
            important: true,
          },
          {
            text: "La examen, tranzițiile sunt doar de enumerat sau de definit, nu de dezvoltat într-un eseu",
            important: true,
          },
          {
            text: "Se recomandă o tranziție fixă pentru fiecare moment al zilei, păstrată 2-3 săptămâni",
          },
          {
            text: "Copiii învață prin imitație și repetiție — nu schimba tranzițiile prea des",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-act-3-mq1",
              type: "multiple-choice",
              question: "Cu ce se realizează tranzițiile în educația timpurie?",
              options: [
                "Cu fișe de lucru și teste",
                "Cu cântece, poezii, recitative ritmice",
                "Cu activități de evaluare formativă",
                "Cu jocuri didactice structurate",
              ],
              correctIndex: 1,
              explanation:
                "Tranzițiile se realizează cu ajutorul cântecelor, poeziilor " +
                "și recitativelor ritmice — mijloace simple care marchează " +
                "trecerea de la o activitate la alta.",
            },
            {
              id: "edu-ped-act-3-mq2",
              type: "true-false",
              question:
                "La examen, tranzițiile trebuie dezvoltate într-un eseu de minim 200 de cuvinte.",
              correct: false,
              explanation:
                "Tranzițiile sunt doar de enumerat sau de definit la examen, " +
                "nu de dezvoltat într-un eseu. Dacă vine un subiect despre " +
                "ADP-uri, se menționează scurt.",
            },
            {
              id: "edu-ped-act-3-mq3",
              type: "multiple-choice",
              question: "Cât timp se recomandă păstrarea acelorași tranziții?",
              options: [
                "O singură zi",
                "2-3 săptămâni (ex. pe durata unui proiect tematic)",
                "Un an școlar întreg, fără modificări",
                "Se schimbă la fiecare activitate",
              ],
              correctIndex: 1,
              explanation:
                "Se recomandă păstrarea acelorași tranziții 2-3 săptămâni " +
                "(de exemplu pe durata unui proiect tematic), apoi se " +
                "adaptează dacă e nevoie.",
            },
            {
              id: "edu-ped-act-3-ch2-q4",
              type: "true-false",
              question:
                "Tranzițiile sunt activități de lungă durată, care durează cel puțin 15 minute.",
              correct: false,
              explanation:
                "Tranzițiile sunt activități de SCURTĂ durată (30 secunde – 2 minute), " +
                "nu de lungă durată. Rolul lor este de a marca momentele de schimbare " +
                "din programul zilnic, nu de a preda conținut nou.",
            },
            {
              id: "edu-ped-act-3-ch2-q5",
              type: "multiple-choice",
              question:
                "Ce creează tranzițiile în programul zilnic al grădiniței?",
              options: [
                "Confuzie și imprevizibilitate",
                "Predictibilitate și siguranță",
                "Evaluare a cunoștințelor",
                "Competiție între copii",
              ],
              correctIndex: 1,
              explanation:
                "Tranzițiile creează predictibilitate în programul zilnic. Când " +
                "copiii aud o anumită tranziție, știu exact ce urmează — aceasta " +
                "le oferă siguranță și reduce anxietatea, mai ales la grupa mică.",
            },
            {
              id: "edu-ped-act-3-ch2-q6",
              type: "fill-blank",
              question:
                "Copiii învață tranzițiile prin imitație și ___.",
              correctAnswers: ["repetiție", "repetitie"],
              explanation:
                "Copiii învață prin imitație și repetiție — au nevoie de rutină. " +
                "De aceea nu se schimbă tranzițiile zilnic sau săptămânal, mai " +
                "ales la grupa mică.",
            },
            {
              id: "edu-ped-act-3-ch2-q7",
              type: "multiple-choice",
              question:
                "Care este un exemplu de alternativă modernă la cântecele tradiționale pentru tranziții?",
              options: [
                "Fișe de lucru individuale",
                "Melodia Pantera Roz pe tabla interactivă ca semnal de adunare",
                "Lectura unei povești",
                "Dictare de cuvinte",
              ],
              correctIndex: 1,
              explanation:
                "Muzica pusă pe tabla interactivă (ex. melodia Pantera Roz = semnal " +
                "de adunare a jucăriilor) este o alternativă modernă la cântecele " +
                "tradiționale. Alte alternative: clepsidra, cronometru-bombă.",
            },
            {
              id: "edu-ped-act-3-ch2-q8",
              type: "true-false",
              question:
                "La inspecții, educatoarea trebuie să păstreze tranzițiile obișnuite fără modificări.",
              correct: false,
              explanation:
                "La inspecții, educatoarea adaptează și schimbă tranzițiile (le " +
                "personalizează pentru momentul inspecției). În rest, rutinează " +
                "— adică folosește aceleași tranziții fixe pe care copiii le cunosc.",
            },
            {
              id: "edu-ped-act-3-ch2-q9",
              type: "multiple-choice",
              question:
                "Ce tip de cronometru este mai potrivit pentru grupele mari ca alternativă la tranziții?",
              options: [
                "Cronometru digital simplu",
                "Cronometru-bombă (timer vizual cu numărătoare inversă)",
                "Ceas de perete analogic",
                "Cronometru de bucătărie",
              ],
              correctIndex: 1,
              explanation:
                "Cronometrul-bombă (timer vizual cu numărătoare inversă) este mai " +
                "potrivit pentru grupele mari, adăugând un element de joc: «Cine " +
                "termină de strâns înainte ca timerul să sune?»",
            },
            {
              id: "edu-ped-act-3-ch2-q10",
              type: "fill-blank",
              question:
                "Tranzițiile fac trecerea de la o ___ la alta în programul zilnic.",
              correctAnswers: ["activitate"],
              explanation:
                "Tranzițiile sunt activități de scurtă durată care fac trecerea " +
                "de la o activitate la alta, marcând momentele de schimbare din " +
                "programul zilnic al grădiniței.",
            },
          ],
        },
      },

      // --- Chapter 3: Activitățile opționale (20.02) ---
      {
        id: "edu-ped-act-3-ch3",
        title: "Activitățile opționale",
        duration: "~20 min",
        sections: [
          {
            title: "Definiție",
            content:
              "Activitățile opționale în educația timpurie reprezintă **o componentă " +
              "complementară a curriculumului** pentru educația timpurie, făcând parte din " +
              "**curriculumul la decizia grădiniței (CDG)**. Rolul lor este " +
              "de **a diversifica experiențele de învățare** oferite preșcolarilor " +
              "în primii ani de viață.",
            contentBlocks: [
              {
                kind: "expandable",
                expandable: {
                  label: "Ce sunt ADP-urile? (recapitulare)",
                  content:
                    "**Activitățile de dezvoltare personală (ADP)** sunt una dintre cele trei categorii de activități de " +
                    "învățare din grădiniță, alături de activitățile pe domenii experiențiale (ADE) și jocurile și activitățile liber-alese (ALA).\n\n" +
                    "ADP-urile cuprind:\n" +
                    "• **Rutinele** (inclusiv întâlnirea de dimineață)\n" +
                    "• **Tranzițiile**\n" +
                    "• **Activitățile opționale**\n" +
                    "• **Activitățile extrașcolare**\n\n" +
                    "Rolul lor este de a contribui la dezvoltarea globală a copilului, vizând deprinderi de " +
                    "igienă, autonomie, socializare și organizare a programului zilnic.\n\n" +
                    "**Notă:** Curriculumul pentru educația timpurie (2019) listează în principal trei " +
                    "sub-categorii ADP: rutine, tranziții și opționale. «Activitățile extrașcolare» apar " +
                    "ca a patra componentă în unele materiale de formare și în predarea unor formatori. " +
                    "La examen, menționarea lor nu este greșită, dar cele trei componente de bază sunt cele esențiale.",
                },
              },
              {
                kind: "text",
                text:
                  "Activitățile opționale în educația timpurie reprezintă **o componentă " +
                  "complementară a curriculumului** pentru educația timpurie, făcând parte din " +
                  "**curriculumul la decizia grădiniței (CDG)**. Rolul lor este " +
                  "de **a diversifica experiențele de învățare** oferite preșcolarilor " +
                  "în primii ani de viață.",
              },
            ],
          },
          {
            title: "Caracteristici",
            content:
              "**Selectarea și organizarea** activităților opționale se face în funcție de:\n" +
              "• Aptitudinile preșcolarilor\n" +
              "• Interesele acestora\n" +
              "• Contextul educațional specific fiecărei instituții școlare\n\n" +
              "**Cine le selectează:** Părinții, din lista propusă de educatoare, **în luna " +
              "februarie**, pentru **anul școlar următor**.\n\n" +
              "**Unde și cum se desfășoară:**\n" +
              "• Se desfășoară **în cursul orelor de grădiniță**\n" +
              "• Pot fi ținute de **educatoare** sau de **alți profesori** (de specialitate)\n\n" +
              "**Obligativitate pe grupe de vârstă:**\n" +
              "• **Grupa mică:** activitățile opționale **nu sunt obligatorii**\n" +
              "• **Grupa mijlocie și mare:** activitățile opționale **sunt obligatorii**\n\n" +
              "**Documente necesare:**\n" +
              "• Planificare specială pentru opțional\n" +
              "• Includere în planificarea săptămânală\n" +
              "• Înregistrare în condica de activități",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Selectarea și organizarea** activităților opționale se face în funcție de:\n" +
                  "• Aptitudinile preșcolarilor\n" +
                  "• Interesele acestora\n" +
                  "• Contextul educațional specific fiecărei instituții școlare\n\n" +
                  "**Cine le selectează:** Părinții, din lista propusă de educatoare, **în luna " +
                  "februarie**, pentru **anul școlar următor**.\n\n" +
                  "**Unde și cum se desfășoară:**\n" +
                  "• Se desfășoară **în cursul orelor de grădiniță**\n" +
                  "• Pot fi ținute de **educatoare** sau de **alți profesori** (de specialitate)\n\n" +
                  "**Obligativitate pe grupe de vârstă:**\n" +
                  "• **Grupa mică:** activitățile opționale **nu sunt obligatorii**\n" +
                  "• **Grupa mijlocie și mare:** activitățile opționale **sunt obligatorii**\n\n" +
                  "**Documente necesare:**\n" +
                  "• Planificare specială pentru opțional\n" +
                  "• Includere în planificarea săptămânală\n" +
                  "• Înregistrare în condica de activități",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen **nu se scrie despre aspectul financiar** al opționalelor. " +
                    "Se scrie doar că se desfășoară în cursul orelor de grădiniță, pot fi ținute " +
                    "de educatoare sau alți profesori, se aleg în februarie de către părinți.",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label: "Nuanță curriculum: obligativitatea pe nivele de vârstă",
                  content:
                    "Formatoarea prezintă simplificat: **grupa mică — nu sunt obligatorii; grupa mijlocie și mare — da.** " +
                    "Această formulare este acceptată la examen.\n\n" +
                    "**Formularea exactă din Curriculum 2019** este pe nivele, nu pe grupe:\n" +
                    "• **Nivel I (3-5 ani):** se pot oferi **0-1 opționale** (deci inclusiv niciun opțional)\n" +
                    "• **Nivel II (5-6/7 ani):** se pot oferi **1-2 opționale** (minim unul obligatoriu)\n\n" +
                    "Diferența: grupa mijlocie (4-5 ani) este tot la Nivel I, deci tehnic poate avea 0 opționale. " +
                    "Formularea formatoarei reflectă practica din majoritatea grădinițelor, unde de la grupa " +
                    "mijlocie se oferă cel puțin un opțional.",
                },
              },
            ],
          },
          {
            title: "Importanța activităților opționale",
            content:
              "Alegerea activităților opționale contribuie la:\n" +
              "• **Dezvoltarea preșcolarilor** — activități adaptate nevoilor individuale\n" +
              "• **Extinderea ariilor de interes** — copiii sunt expuși la domenii noi\n" +
              "• **Stimularea creativității** — activități variate, dincolo de curricula obligatorie\n" +
              "• **Sprijinirea învățării** — completează și aprofundează conținuturile curriculare\n" +
              "• **Acoperirea diverselor domenii** — pot viza dezvoltarea fizică, artistică, " +
              "lingvistică etc.\n\n" +
              "Activitățile opționale devin astfel un **mijloc valoros de susținere a " +
              "învățării**, completând oferta educațională a grădiniței.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Alegerea activităților opționale contribuie la:\n" +
                  "• **Dezvoltarea preșcolarilor** — activități adaptate nevoilor individuale\n" +
                  "• **Extinderea ariilor de interes** — copiii sunt expuși la domenii noi\n" +
                  "• **Stimularea creativității** — activități variate, dincolo de curricula obligatorie\n" +
                  "• **Sprijinirea învățării** — completează și aprofundează conținuturile curriculare\n" +
                  "• **Acoperirea diverselor domenii** — pot viza dezvoltarea fizică, artistică, " +
                  "lingvistică etc.\n\n" +
                  "Activitățile opționale devin astfel un **mijloc valoros de susținere a " +
                  "învățării**, completând oferta educațională a grădiniței.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La punctul C, dacă se cere **importanța opționalelor**, trebuie enumerate aceste " +
                    "5 aspecte (dezvoltare, interes, creativitate, învățare, acoperirea domeniilor). " +
                    "Fiecare aspect aduce punctaj — nu te limita la 2-3.",
                },
              },
            ],
          },
          {
            title: "Aspecte practice",
            content:
              "**Tipuri de opționale:**\n" +
              "• Cu profesori externi (de specialitate): limba engleză, dans, karate, canto, teatru\n" +
              "• Pe care le poate face educatoarea: micul ecologist, matematică distractivă, trăistuța cu povești\n\n" +
              "**Alternativă:** Palatul Copiilor — oferă înscrieri gratuite pentru dans, canto, arte plastice " +
              "și alte activități extrașcolare.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Tipuri de opționale:**\n" +
                  "• Cu profesori externi (de specialitate): limba engleză, dans, karate, canto, teatru\n" +
                  "• Pe care le poate face educatoarea: micul ecologist, matematică distractivă, trăistuța cu povești\n\n" +
                  "**Alternativă:** Palatul Copiilor — oferă înscrieri gratuite pentru dans, canto, arte plastice " +
                  "și alte activități extrașcolare.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "experience",
                  content:
                    "Pentru opționalele de specialitate (engleză, dans etc.) vin profesori externi, de regulă " +
                    "contra-cost (~25 lei/oră). Există tendința de a interzice opționalele pe bani, pentru a " +
                    "asigura accesul egal — în unele județe (ex. Galați) sunt deja interzise, permise doar " +
                    "prin parteneriate benevole. Palatul Copiilor rămâne alternativa gratuită.",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Tipuri de activități opționale — cu exemple concrete",
            description:
              "Opționalele sunt activități suplimentare pe care le fac copiii la " +
              "grădiniță, în afara programului obligatoriu de învățare. Sunt de " +
              "două feluri:\n\n" +
              "**1. Opționale cu profesori externi (de specialitate):**\n" +
              "• **Limba engleză** — un profesor de engleză vine la grupă și " +
              "face activități de vocabular, cântece, jocuri în engleză " +
              "(de obicei 1-2 ori pe săptămână, câte 30 min)\n" +
              "• **Dans / balet** — un coregraf vine și predă dans copiilor " +
              "în sala de grupă sau într-o sală de sport\n" +
              "• **Karate / arte marțiale** — disciplină și mișcare, " +
              "cu un instructor sportiv\n" +
              "• **Canto / teatru** — activități artistice cu profesori " +
              "specializați\n" +
              "• Aceste opționale sunt de regulă contra-cost (părinții plătesc " +
              "profesorul extern)\n\n" +
              "**2. Opționale pe care le face educatoarea (gratuite):**\n" +
              "• **Micul ecologist** — activități despre natură, reciclare, " +
              "grija față de mediu (plimbări, experimente simple cu plante)\n" +
              "• **Matematică distractivă** — jocuri logice, puzzle-uri, " +
              "numărare prin joc\n" +
              "• **Trăistuța cu povești** — lectură, dramatizare de povești, " +
              "creare de povești noi\n" +
              "• Nu implică costuri suplimentare pentru părinți — educatoarea " +
              "le organizează din resursele existente",
            context: "Exemple din practica grădinițelor",
          },
          {
            title: "Cum se aleg opționalele — procesul practic pas cu pas",
            description:
              "Procesul de alegere a opționalelor are loc o dată pe an și " +
              "funcționează astfel:\n\n" +
              "**1. Educatoarea propune lista** — în luna februarie, " +
              "educatoarea pregătește o listă cu opționalele disponibile " +
              "(de exemplu: «Limba engleză», «Dans», «Micul ecologist»). " +
              "Lista include atât opționale cu profesori externi, cât și " +
              "opționale pe care le poate ține ea.\n\n" +
              "**2. Părinții aleg** — lista se prezintă părinților (de " +
              "obicei într-o ședință sau printr-un formular). Părinții " +
              "selectează ce opționale doresc pentru copiii lor.\n\n" +
              "**3. Opționalele se desfășoară din septembrie** — ce s-a " +
              "ales în februarie se pune în practică din anul școlar " +
              "următor, integrat în programul săptămânal.\n\n" +
              "**4. Documente necesare** — educatoarea face planificare " +
              "separată pentru opțional, îl include în planificarea " +
              "săptămânală și îl înregistrează în condica de activități " +
              "(ca să existe evidență oficială).\n\n" +
              "**Alternativă gratuită:** Palatul Copiilor — este o " +
              "instituție de stat care oferă înscrieri gratuite pentru " +
              "dans, canto, arte plastice și alte activități extrașcolare. " +
              "Copiii merg acolo în afara orelor de grădiniță.",
            context: "Procesul administrativ de selecție a opționalelor",
          },
        ],
        keyPoints: [
          {
            text: "Activitățile opționale sunt o componentă complementară a curriculumului, cu rolul de a diversifica experiențele de învățare",
            important: true,
          },
          {
            text: "Se selectează de părinți, din lista educatoarei, în luna februarie, pentru anul școlar următor",
            important: true,
          },
          {
            text: "Grupa mică: nu sunt obligatorii; Grupa mijlocie și mare: sunt obligatorii",
            important: true,
          },
          {
            text: "Se desfășoară în cursul orelor de grădiniță, pot fi ținute de educatoare sau de alți profesori",
          },
          {
            text: "La examen nu se scrie despre aspectul financiar — doar definiție, selectare, desfășurare",
            important: true,
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-act-3-mq4",
              type: "multiple-choice",
              question:
                "În ce lună se selectează activitățile opționale pentru anul școlar următor?",
              options: [
                "Septembrie",
                "Februarie",
                "Iunie",
                "Ianuarie",
              ],
              correctIndex: 1,
              explanation:
                "Activitățile opționale sunt selectate de părinți, din lista " +
                "propusă de educatoare, în luna februarie, pentru anul școlar următor.",
            },
            {
              id: "edu-ped-act-3-mq5",
              type: "true-false",
              question:
                "La grupa mică, activitățile opționale sunt obligatorii.",
              correct: false,
              explanation:
                "La grupa mică, activitățile opționale nu sunt obligatorii. " +
                "Ele devin obligatorii de la grupa mijlocie.",
            },
            {
              id: "edu-ped-act-3-mq6",
              type: "fill-blank",
              question:
                "Activitățile opționale reprezintă o componentă ___ a curriculumului pentru educația timpurie.",
              correctAnswers: ["complementara", "complementară"],
              explanation:
                "Activitățile opționale sunt o componentă complementară a " +
                "curriculumului, completând oferta educațională obligatorie " +
                "cu experiențe de învățare diversificate.",
            },
            {
              id: "edu-ped-act-3-ch3-q4",
              type: "multiple-choice",
              question:
                "Cine propune lista de activități opționale din care părinții selectează?",
              options: [
                "Inspectoratul școlar",
                "Educatoarea",
                "Primăria",
                "Ministerul Educației",
              ],
              correctIndex: 1,
              explanation:
                "Educatoarea propune lista de activități opționale, iar părinții " +
                "selectează din această listă în luna februarie pentru anul școlar " +
                "următor.",
            },
            {
              id: "edu-ped-act-3-ch3-q5",
              type: "true-false",
              question:
                "Activitățile opționale se desfășoară în afara orelor de grădiniță.",
              correct: false,
              explanation:
                "Activitățile opționale se desfășoară ÎN CURSUL orelor de grădiniță, " +
                "nu în afara lor. Cele care se desfășoară în afara programului sunt " +
                "activitățile extrașcolare.",
            },
            {
              id: "edu-ped-act-3-ch3-q6",
              type: "multiple-choice",
              question:
                "Care dintre următoarele este un opțional pe care îl poate face educatoarea?",
              options: [
                "Limba engleză cu profesor nativ",
                "Karate cu instructor sportiv",
                "Trăistuța cu povești",
                "Balet cu coregraf",
              ],
              correctIndex: 2,
              explanation:
                "«Trăistuța cu povești» este un exemplu de opțional pe care îl poate " +
                "face educatoarea singură, fără profesori externi. Alte exemple: " +
                "micul ecologist, matematică distractivă.",
            },
            {
              id: "edu-ped-act-3-ch3-q7",
              type: "true-false",
              question:
                "La examen trebuie menționat aspectul financiar al activităților opționale.",
              correct: false,
              explanation:
                "La examen NU se scrie despre aspectul financiar al opționalelor. " +
                "Se scrie doar că se desfășoară în cursul orelor de grădiniță, " +
                "pot fi ținute de educatoare sau alți profesori, se aleg în " +
                "februarie de către părinți.",
            },
            {
              id: "edu-ped-act-3-ch3-q8",
              type: "fill-blank",
              question:
                "Activitățile opționale necesită planificare specială, includere în planificarea săptămânală și înregistrare în ___ de activități.",
              correctAnswers: ["condica"],
              explanation:
                "Activitățile opționale trebuie înregistrate în condica de activități, " +
                "alături de planificarea specială pentru opțional și includerea în " +
                "planificarea săptămânală. Aceasta asigură evidența oficială.",
            },
            {
              id: "edu-ped-act-3-ch3-q9",
              type: "multiple-choice",
              question:
                "Care este rolul activităților opționale în curriculum?",
              options: [
                "Înlocuirea activităților pe domenii experiențiale",
                "Evaluarea sumativă a preșcolarilor",
                "Diversificarea experiențelor de învățare",
                "Pregătirea pentru examene",
              ],
              correctIndex: 2,
              explanation:
                "Rolul activităților opționale este de a diversifica experiențele " +
                "de învățare oferite preșcolarilor. Ele completează curricula " +
                "obligatorie, nu o înlocuiesc.",
            },
            {
              id: "edu-ped-act-3-ch3-q10",
              type: "multiple-choice",
              question:
                "Activitățile opționale fac parte din:",
              options: [
                "Curriculumul nucleu",
                "Curriculumul la decizia grădiniței (CDG)",
                "Planul de învățământ obligatoriu",
                "Activitățile extrașcolare",
              ],
              correctIndex: 1,
              explanation:
                "Activitățile opționale fac parte din curriculumul la decizia " +
                "grădiniței (CDG), fiind o componentă complementară a curriculumului " +
                "pentru educația timpurie.",
            },
          ],
        },
      },

      // --- Chapter 4: Model cerință examen (20.02) ---
      {
        id: "edu-ped-act-3-ch4",
        title: "Model cerință examen",
        duration: "~15 min",
        sections: [
          {
            title: "Structura Subiectului 3, Exercițiul 2",
            content:
              "La examen, subiectul despre ADP-uri are de obicei trei cerințe " +
              "(A, B, C), cu punctaje diferite. Structura tipică:\n\n" +
              "**A) Definiți activitățile de dezvoltare personală în educația timpurie.**\n" +
              "→ Se scrie definiția ADP-urilor (din materia cursului anterior)\n\n" +
              "**B) Enumerați activitățile de dezvoltare personală.**\n" +
              "→ Se enumeră: rutinele (inclusiv întâlnirea de dimineață), tranzițiile, " +
              "activitățile opționale, activitățile extrașcolare\n\n" +
              "**C) Prezentați importanța activităților opționale în grădiniță.**\n" +
              "→ Se scrie: definiția activităților opționale + caracteristicile + " +
              "importanța (dezvoltarea preșcolarilor, extinderea ariilor de interes, " +
              "stimularea creativității, sprijinirea învățării, acoperirea diverselor " +
              "domenii)",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "La examen, subiectul despre ADP-uri are de obicei trei cerințe " +
                  "(A, B, C), cu punctaje diferite. Structura tipică:\n\n" +
                  "**A) Definiți activitățile de dezvoltare personală în educația timpurie.**\n" +
                  "→ Se scrie definiția ADP-urilor (din materia cursului anterior)\n\n" +
                  "**B) Enumerați activitățile de dezvoltare personală.**\n" +
                  "→ Se enumeră: rutinele (inclusiv întâlnirea de dimineață), tranzițiile, " +
                  "activitățile opționale, activitățile extrașcolare\n\n" +
                  "**C) Prezentați importanța activităților opționale în grădiniță.**\n" +
                  "→ Se scrie: definiția activităților opționale + caracteristicile + " +
                  "importanța (dezvoltarea preșcolarilor, extinderea ariilor de interes, " +
                  "stimularea creativității, sprijinirea învățării, acoperirea diverselor " +
                  "domenii)",
              },
              {
                kind: "expandable",
                expandable: {
                  label: "Definiția ADP-urilor (pentru punctul A)",
                  content:
                    "**Activitățile de dezvoltare personală (ADP)** sunt una dintre cele trei " +
                    "categorii de activități de învățare din grădiniță, parte a curriculumului " +
                    "pentru educația timpurie, alături de activitățile pe domenii experiențiale (ADE) și " +
                    "jocurile și activitățile liber-alese (ALA). Ele vizează dezvoltarea globală a copilului și " +
                    "cuprind:\n\n" +
                    "• **Rutinele** (inclusiv întâlnirea de dimineață) — activități-cadru " +
                    "desfășurate în fiecare zi, la aceleași intervale orare\n" +
                    "• **Tranzițiile** — activități de scurtă durată ce fac legătura între " +
                    "momentele programului zilnic\n" +
                    "• **Activitățile opționale** — componentă complementară a curriculumului\n" +
                    "• **Activitățile extrașcolare** — activități desfășurate în afara " +
                    "programului obligatoriu",
                },
              },
            ],
          },
          {
            title: "Ce se scrie la fiecare punct — detalii",
            content:
              "**La punctul A (definiția ADP):**\n" +
              "Scrie definiția generală a activităților de dezvoltare personală " +
              "ca parte a curriculumului pentru educația timpurie. Menționează " +
              "că vizează dezvoltarea globală a copilului.\n\n" +
              "**La punctul B (enumerarea):**\n" +
              "Enumerare clară, cu liniuțe:\n" +
              "• Rutinele (inclusiv întâlnirea de dimineață)\n" +
              "• Tranzițiile\n" +
              "• Activitățile opționale\n" +
              "• Activitățile extrașcolare\n\n" +
              "**La punctul C (prezentarea detaliată):**\n" +
              "Acesta este punctul care cere dezvoltare. Scrie în ordine:\n" +
              "1. Definiția componentei cerute (opționale sau rutine)\n" +
              "2. Caracteristicile (cine selectează, când, unde se desfășoară)\n" +
              "3. Importanța (contribuția la dezvoltare, creativitate, învățare)\n\n" +
              "**Atenție:** Nu scrie despre aspectul financiar sau despre costurile " +
              "opționalelor — la examen nu este relevant.",
            contentBlocks: [
              // --- Punctul A ---
              {
                kind: "text",
                text:
                  "**La punctul A (definiția ADP):**\n" +
                  "Scrie definiția generală a activităților de dezvoltare personală " +
                  "ca parte a curriculumului pentru educația timpurie. Menționează " +
                  "că vizează dezvoltarea globală a copilului.",
              },
              {
                kind: "expandable",
                expandable: {
                  label: "Model rezolvare — Punctul A",
                  source: "claude",
                  content:
                    "**«Activitățile de dezvoltare personală (ADP)** reprezintă o categorie de activități " +
                    "de învățare din curriculumul pentru educația timpurie, alături de activitățile pe " +
                    "domenii experiențiale (ADE) și jocurile și activitățile liber-alese (ALA). Acestea vizează dezvoltarea globală " +
                    "a copilului, contribuind la formarea deprinderilor de igienă, autonomie, autoservire " +
                    "și socializare, precum și la organizarea programului zilnic. " +
                    "ADP-urile cuprind: rutinele (inclusiv întâlnirea de dimineață), tranzițiile, " +
                    "activitățile opționale și activitățile extrașcolare.»\n\n" +
                    "**De ce este valid acest răspuns:**\n" +
                    "• Conține **definiția** cerută — ADP-urile ca parte a curriculumului\n" +
                    "• Menționează **dezvoltarea globală a copilului** (cerință precizată de formatoare)\n" +
                    "• Include **obiective specifice ADP** (igienă, autonomie, autoservire, socializare) — " +
                    "arată că înțelegi ce dezvoltă concret aceste activități\n" +
                    "• Enumeră cele 4 componente, arătând că știi structura completă\n" +
                    "• Încadrează ADP-urile în contextul celorlalte categorii de activități (ADE, ALA)",
                },
              },
              // --- Punctul B ---
              {
                kind: "text",
                text:
                  "**La punctul B (enumerarea):**\n" +
                  "Enumerare clară, cu liniuțe:\n" +
                  "• Rutinele (inclusiv întâlnirea de dimineață)\n" +
                  "• Tranzițiile\n" +
                  "• Activitățile opționale\n" +
                  "• Activitățile extrașcolare",
              },
              {
                kind: "expandable",
                expandable: {
                  label: "Model rezolvare — Punctul B",
                  source: "claude",
                  content:
                    "**«Activitățile de dezvoltare personală cuprind:**\n" +
                    "• **Rutinele** — activități-cadru desfășurate zilnic, la aceleași intervale orare, " +
                    "care formează deprinderi de igienă, autonomie și autoservire (inclusiv întâlnirea " +
                    "de dimineață);\n" +
                    "• **Tranzițiile** — activități de scurtă durată care fac trecerea de la o activitate " +
                    "la alta, realizate cu ajutorul cântecelor, poeziilor sau recitativelor ritmice;\n" +
                    "• **Activitățile opționale** — componentă complementară a curriculumului, cu rolul " +
                    "de a diversifica experiențele de învățare;\n" +
                    "• **Activitățile extrașcolare** — activități desfășurate în afara programului " +
                    "obligatoriu al grădiniței.»\n\n" +
                    "**De ce este valid acest răspuns:**\n" +
                    "• Enumeră **toate cele 4 componente** — formatoarea a subliniat că trebuie menționate " +
                    "exact acestea\n" +
                    "• Include **întâlnirea de dimineață** la rutine — formatoarea a precizat explicit că " +
                    "aceasta se menționează separat\n" +
                    "• Fiecare componentă are o **scurtă caracterizare** care arată că le înțelegi, " +
                    "nu doar le-ai memorat\n" +
                    "• Formatarea cu liniuțe este **clară și ușor de punctat** de către corector",
                },
              },
              // --- Punctul C ---
              {
                kind: "text",
                text:
                  "**La punctul C (prezentarea detaliată):**\n" +
                  "Acesta este punctul care cere dezvoltare. Scrie în ordine:\n" +
                  "1. Definiția componentei cerute (opționale sau rutine)\n" +
                  "2. Caracteristicile (cine selectează, când, unde se desfășoară)\n" +
                  "3. Importanța (contribuția la dezvoltare, creativitate, învățare)",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "**Nu scrie** despre aspectul financiar sau despre costurile " +
                    "opționalelor — la examen nu este relevant.",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label: "Model rezolvare — Punctul C (opționale)",
                  source: "claude",
                  content:
                    "**«Activitățile opționale** în educația timpurie reprezintă o componentă " +
                    "complementară a curriculumului, parte din curriculumul la decizia " +
                    "grădiniței (CDG), cu rolul de a diversifica experiențele " +
                    "de învățare oferite preșcolarilor.\n\n" +
                    "Acestea sunt selectate de părinți, din lista propusă de educatoare, " +
                    "în luna februarie, pentru anul școlar următor. Se desfășoară în cursul " +
                    "orelor de grădiniță și pot fi ținute de educatoare sau de alți profesori " +
                    "de specialitate. La grupa mică nu sunt obligatorii, dar devin " +
                    "obligatorii la grupa mijlocie și la grupa mare. Necesită planificare " +
                    "specială, includere în planificarea săptămânală și înregistrare în " +
                    "condica de activități.\n\n" +
                    "Importanța activităților opționale constă în contribuția la dezvoltarea " +
                    "preșcolarilor, extinderea ariilor de interes, stimularea creativității " +
                    "și sprijinirea învățării. Activitățile opționale pot acoperi diverse " +
                    "domenii, devenind un mijloc valoros de susținere a învățării, completând " +
                    "oferta educațională a grădiniței.»\n\n" +
                    "**De ce este valid acest răspuns:**\n" +
                    "• Începe cu **definiția** opționalelor (componentă complementară + CDG + diversificarea experiențelor) — " +
                    "formulare preluată din cursul formatoarei, completată cu termenul curricular oficial\n" +
                    "• Include **caracteristicile**: cine selectează (părinții), când (februarie), " +
                    "unde se desfășoară (în orele de grădiniță), cine le ține (educatoare/profesori)\n" +
                    "• Menționează **obligativitatea pe grupe** — formatoarea a subliniat diferența " +
                    "grupa mică vs. mijlocie/mare\n" +
                    "• Încheie cu **importanța** (5 aspecte: dezvoltare, interes, creativitate, " +
                    "învățare, acoperirea domeniilor)\n" +
                    "• **Nu menționează costuri/aspectul financiar** — conform indicației formatoarei",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label: "Model rezolvare — Punctul C (alternativa: rutine)",
                  source: "claude",
                  content:
                    "**«Întâlnirea de dimineață** este o activitate de rutină desfășurată zilnic, " +
                    "la începutul programului, cu toți copiii din grupă. Aceasta contribuie la " +
                    "crearea unui climat emoțional pozitiv și la dezvoltarea sentimentului de " +
                    "apartenență la grup.\n\n" +
                    "Componentele principale ale întâlnirii de dimineață sunt:\n" +
                    "• **Salutul** — fiecare copil este salutat individual, ceea ce îi conferă " +
                    "sentimentul că este așteptat și important pentru grup;\n" +
                    "• **Calendarul** — se discută ziua, data, luna, anotimpul și vremea, " +
                    "consolidând orientarea temporală;\n" +
                    "• **Prezența** — se identifică cine lipsește și se numără copiii prezenți, " +
                    "dezvoltând abilități matematice și atenția față de ceilalți;\n" +
                    "• **Noutățile zilei** — copiii împărtășesc experiențe sau evenimente recente, " +
                    "exersând comunicarea orală;\n" +
                    "• **Mesajul zilei** — educatoarea prezintă programul zilei, creând " +
                    "predictibilitate și reducând anxietatea.\n\n" +
                    "Importanța întâlnirii de dimineață constă în dezvoltarea abilităților sociale " +
                    "și emoționale, formarea rutinelor zilnice și crearea unui cadru organizat " +
                    "pentru activitățile ce urmează.»\n\n" +
                    "**De ce este valid acest răspuns:**\n" +
                    "• Începe cu **definiția** rutinei (activitate zilnică, la începutul programului)\n" +
                    "• Enumeră **toate cele 5 componente** precizate de formatoare (salutul, calendarul, " +
                    "prezența, noutățile, mesajul zilei)\n" +
                    "• Fiecare componentă are o **scurtă explicație** a contribuției educative\n" +
                    "• Încheie cu **importanța** (dezvoltare socio-emoțională, rutine, cadru organizat)\n" +
                    "• Formatoarea a menționat că întâlnirea de dimineață este **cea mai frecvent cerută " +
                    "rutină** — de aceea e alegerea sigură",
                },
              },
            ],
          },
          {
            title: "Alternativa cu rutinele",
            content:
              "La punctul C, în loc de activități opționale, examinatorul " +
              "poate cere **prezentarea unei activități de rutină**. În acest caz:\n\n" +
              "• Se scrie despre **întâlnirea de dimineață** (cea mai frecvent cerută rutină)\n" +
              "• Se descriu componentele întâlnirii de dimineață: salutul, calendarul, " +
              "prezența, noutățile zilei, mesajul zilei\n\n" +
              "**Sfat practic:** Pregătește ambele variante — atât despre opționale, " +
              "cât și despre rutine/întâlnirea de dimineață — pentru a fi acoperit " +
              "indiferent de cerința exactă.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "La punctul C, în loc de activități opționale, examinatorul " +
                  "poate cere **prezentarea unei activități de rutină**. În acest caz:\n\n" +
                  "• Se scrie despre **întâlnirea de dimineață** (cea mai frecvent cerută rutină)\n" +
                  "• Se descriu componentele întâlnirii de dimineață: salutul, calendarul, " +
                  "prezența, noutățile zilei, mesajul zilei",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "experience",
                  content:
                    "În loc de opționale, pot cere prezentarea unei rutine (întâlnirea de dimineață). " +
                    "Pregătește ambele variante — atât despre opționale, cât și despre rutine — " +
                    "pentru a fi acoperit indiferent de cerința exactă.",
                },
              },
              {
                kind: "expandable",
                expandable: {
                  label: "Întâlnirea de dimineață — componente principale",
                  content:
                    "**Întâlnirea de dimineață** este o activitate de rutină desfășurată zilnic, " +
                    "la începutul programului, cu toți copiii din grupă. Componentele principale:\n\n" +
                    "• **Salutul** — fiecare copil este salutat individual, creând sentimentul de " +
                    "apartenență la grup\n" +
                    "• **Calendarul** — se discută ziua, data, luna, anotimpul, vremea\n" +
                    "• **Prezența** — se identifică cine lipsește, se numără copiii prezenți\n" +
                    "• **Noutățile zilei** — copiii împărtășesc experiențe sau evenimente recente\n" +
                    "• **Mesajul zilei** — educatoarea prezintă programul zilei sau un mesaj " +
                    "motivațional adaptat vârstei",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Exemplu de răspuns structurat la punctul C (opționale)",
            description:
              "Mai jos este un model de răspuns complet, așa cum ar trebui " +
              "scris la examen. Observă structura: se începe cu **definiția**, " +
              "apoi se trece la **caracteristici** (cine alege, când, cum), " +
              "și se încheie cu **importanța**. Nu se menționează costuri " +
              "sau aspecte financiare.\n\n" +
              "«Activitățile opționale în educația timpurie reprezintă o componentă " +
              "complementară a curriculumului, cu rolul de a diversifica experiențele " +
              "de învățare oferite preșcolarilor.\n\n" +
              "Acestea sunt selectate de părinți, din lista propusă de educatoare, " +
              "în luna februarie, pentru anul școlar următor. Se desfășoară în cursul " +
              "orelor de grădiniță și pot fi ținute de educatoare sau de alți profesori " +
              "de specialitate. La grupa mică nu sunt obligatorii, dar devin " +
              "obligatorii la grupa mijlocie și la grupa mare.\n\n" +
              "Importanța activităților opționale constă în contribuția la dezvoltarea " +
              "preșcolarilor, extinderea ariilor de interes, stimularea creativității " +
              "și sprijinirea învățării. Activitățile opționale pot acoperi diverse " +
              "domenii, devenind un mijloc valoros de susținere a învățării.»\n\n" +
              "**De ce funcționează acest răspuns:** acoperă cele 3 elemente pe " +
              "care le caută corectorul — definiție (ce sunt), caracteristici " +
              "(cum funcționează), importanță (de ce contează). Fiecare element " +
              "aduce punctaj separat.",
            context: "Model de răspuns pentru Subiectul 3, Ex. 2, punctul C",
          },
        ],
        keyPoints: [
          {
            text: "Structura tipică: A) Definiți ADP-urile, B) Enumerați ADP-urile, C) Prezentați importanța unei componente",
            important: true,
          },
          {
            text: "La punctul C, alternativa la opționale este prezentarea unei rutine (de obicei întâlnirea de dimineață)",
            important: true,
          },
          {
            text: "Pregătește ambele variante (opționale + rutine) pentru a fi acoperit la examen",
          },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-act-3-mq7",
              type: "multiple-choice",
              question:
                "La punctul B al subiectului despre ADP-uri, ce se cere?",
              options: [
                "Definirea detaliată a unei singure activități",
                "Enumerarea tuturor activităților de dezvoltare personală",
                "Descrierea unui proiect tematic",
                "Compararea ADP-urilor cu activitățile pe domenii experiențiale",
              ],
              correctIndex: 1,
              explanation:
                "La punctul B se cere enumerarea ADP-urilor: rutinele (inclusiv " +
                "întâlnirea de dimineață), tranzițiile, activitățile opționale " +
                "și activitățile extrașcolare.",
            },
            {
              id: "edu-ped-act-3-mq8",
              type: "true-false",
              question:
                "Dacă la punctul C se cere prezentarea unei rutine, se poate scrie despre întâlnirea de dimineață.",
              correct: true,
              explanation:
                "Întâlnirea de dimineață este cea mai frecvent cerută rutină " +
                "la examen. Se descriu componentele: salutul, calendarul, " +
                "prezența, noutățile zilei, mesajul zilei.",
            },
            {
              id: "edu-ped-act-3-mq9",
              type: "multiple-choice",
              question:
                "Ce NU trebuie scris la examen despre activitățile opționale?",
              options: [
                "Definiția și rolul lor în curriculum",
                "Cine le selectează și când",
                "Aspectul financiar și costurile",
                "Importanța lor pentru dezvoltarea preșcolarilor",
              ],
              correctIndex: 2,
              explanation:
                "La examen nu se scrie despre aspectul financiar al opționalelor. " +
                "Se scrie doar despre definiție, selectare (de părinți, în " +
                "februarie), desfășurare și importanță.",
            },
            {
              id: "edu-ped-act-3-ch4-q4",
              type: "fill-blank",
              question:
                "La punctul A al subiectului despre ADP-uri se cere ___ activităților de dezvoltare personală.",
              correctAnswers: ["definiția", "definitia"],
              explanation:
                "Punctul A cere definiția ADP-urilor: activități de învățare din " +
                "curriculumul pentru educația timpurie care vizează dezvoltarea " +
                "globală a copilului.",
            },
            {
              id: "edu-ped-act-3-ch4-q5",
              type: "multiple-choice",
              question:
                "Câte componente se enumeră la punctul B (ADP-uri)?",
              options: ["2", "3", "4", "5"],
              correctIndex: 2,
              explanation:
                "La punctul B se enumeră 4 componente ale ADP-urilor: rutinele " +
                "(inclusiv întâlnirea de dimineață), tranzițiile, activitățile " +
                "opționale și activitățile extrașcolare.",
            },
            {
              id: "edu-ped-act-3-ch4-q6",
              type: "true-false",
              question:
                "La punctul C se poate cere fie importanța opționalelor, fie prezentarea unei rutine.",
              correct: true,
              explanation:
                "La punctul C, examinatorul poate cere fie prezentarea importanței " +
                "activităților opționale, fie prezentarea unei activități de rutină " +
                "(de obicei întâlnirea de dimineață). Trebuie pregătite ambele variante.",
            },
            {
              id: "edu-ped-act-3-ch4-q7",
              type: "multiple-choice",
              question:
                "Care este cea mai frecvent cerută rutină la punctul C al examenului?",
              options: [
                "Masa de prânz",
                "Sosirea copilului",
                "Întâlnirea de dimineață",
                "Gustările",
              ],
              correctIndex: 2,
              explanation:
                "Întâlnirea de dimineață este cea mai frecvent cerută rutină la " +
                "examen. Se descriu componentele: salutul, calendarul, prezența, " +
                "noutățile zilei, mesajul zilei.",
            },
            {
              id: "edu-ped-act-3-ch4-q8",
              type: "true-false",
              question:
                "La punctul C despre opționale, este suficient să enumerați doar 2 aspecte ale importanței.",
              correct: false,
              explanation:
                "Trebuie enumerate toate cele 5 aspecte ale importanței: dezvoltarea " +
                "preșcolarilor, extinderea ariilor de interes, stimularea creativității, " +
                "sprijinirea învățării, acoperirea diverselor domenii. Fiecare aspect " +
                "aduce punctaj separat.",
            },
            {
              id: "edu-ped-act-3-ch4-q9",
              type: "fill-blank",
              question:
                "Structura răspunsului la punctul C (opționale) este: definiție + ___ + importanță.",
              correctAnswers: ["caracteristici", "caracteristicile"],
              explanation:
                "Răspunsul la punctul C trebuie să includă în ordine: definiția " +
                "activităților opționale, caracteristicile (cine selectează, când, " +
                "unde se desfășoară) și importanța (cele 5 aspecte).",
            },
            {
              id: "edu-ped-act-3-ch4-q10",
              type: "multiple-choice",
              question:
                "La punctul B, cum se recomandă formatarea enumerării ADP-urilor?",
              options: [
                "Într-un singur paragraf, fără liniuțe",
                "Cu liniuțe, clar și ușor de punctat",
                "Într-un tabel cu coloane",
                "Sub formă de eseu narativ",
              ],
              correctIndex: 1,
              explanation:
                "Enumerarea la punctul B se face cu liniuțe, clar și ușor de " +
                "punctat de către corector: rutinele, tranzițiile, activitățile " +
                "opționale și activitățile extrașcolare.",
            },
          ],
        },
      },
      // --- Chapter 5: Activitățile extrașcolare (23.02) ---
      {
        id: "edu-ped-act-3-ch5",
        title: "Activitățile extrașcolare",
        duration: "15 min",
        sections: [
          {
            title: "Definiție",
            content:
              "Activitățile extrașcolare în educația timpurie sunt activități de " +
              "învățare care se desfășoară în afara programului educațional, sub " +
              "formă de excursii, vizite sau activități recreative.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Activitățile extrașcolare în educația timpurie sunt **activități " +
                  "de învățare** care se desfășoară **în afara programului educațional**, " +
                  "sub formă de **excursii, vizite sau activități recreative**.",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "Atenție la diferența față de opționale: extrașcolarele NU sunt " +
                    "selectate de părinți și NU se desfășoară în cursul orelor de " +
                    "grădiniță. Sunt inițiate de cadre didactice pe parcursul anului.",
                },
              },
            ],
          },
          {
            title: "Reglementare — ROFUIP",
            content:
              "Activitățile extrașcolare sunt reglementate prin ROFUIP " +
              "(Regulamentul cadru de organizare și funcționare a unităților " +
              "de învățământ preuniversitar). Se organizează în colaborare cu " +
              "diverși parteneri, cu acordul părinților, sub responsabilitatea " +
              "unității școlare.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Sunt reglementate prin **ROFUIP** (Regulamentul cadru de organizare " +
                  "și funcționare a unităților de învățământ preuniversitar).\n\n" +
                  "Se organizează:\n" +
                  "- **În colaborare** cu diverși parteneri\n" +
                  "- **Cu acordul părinților**\n" +
                  "- **Sub responsabilitatea** unității școlare",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "exam-tip",
                  content:
                    "La examen, scrieți denumirea completă a ROFUIP, nu doar acronimul. " +
                    "Comisia apreciază cunoașterea denumirii oficiale.",
                },
              },
            ],
          },
          {
            title: "Caracteristici și parteneri educaționali",
            content:
              "Se desfășoară lunar. Implică parteneri educaționali: familia, " +
              "primăria, autoritățile, biserica. Nu sunt selectate anual de " +
              "către părinți (spre deosebire de opționale). Sunt inițiate pe " +
              "parcursul anului școlar, la inițiativa cadrelor didactice, în " +
              "funcție de proiectele educaționale.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "**Frecvență:** lunară\n\n" +
                  "**Parteneri educaționali:** familia, primăria, autoritățile, biserica\n\n" +
                  "**Diferențe față de opționale:**\n" +
                  "- Nu sunt selectate anual de către părinți\n" +
                  "- Sunt inițiate pe parcursul anului școlar\n" +
                  "- La inițiativa cadrelor didactice\n" +
                  "- În funcție de proiectele educaționale",
              },
              {
                kind: "formator-note",
                formatorNote: {
                  type: "practical",
                  content:
                    "Când organizezi o excursie, tu răspunzi de ce se întâmplă — " +
                    "adică ești sub responsabilitatea unității școlare. Ai nevoie " +
                    "de acordul scris al părinților.",
                },
              },
            ],
          },
          {
            title: "Scopul activităților extrașcolare",
            content:
              "Scopul este de a oferi preșcolarilor contexte autentice de " +
              "învățare prin experiență directă, interacțiune și observare. " +
              "Susțin dezvoltarea socială, emoțională și cognitivă, favorizând " +
              "dezvoltarea armonioasă a preșcolarilor.",
            contentBlocks: [
              {
                kind: "text",
                text:
                  "Scopul activităților extrașcolare este de a oferi preșcolarilor " +
                  "**contexte autentice de învățare** prin:\n" +
                  "- Experiență directă\n" +
                  "- Interacțiune\n" +
                  "- Observare\n\n" +
                  "Susțin **dezvoltarea socială și emoțională**, dar și **cognitivă** " +
                  "a preșcolarilor, favorizând dezvoltarea armonioasă a acestora.",
              },
              {
                kind: "expandable",
                expandable: {
                  label: "Model de răspuns — importanța activităților extrașcolare",
                  source: "claude",
                  content:
                    "Activitățile extrașcolare reprezintă oportunități excelente de " +
                    "colaborare cu familia și de dezvoltare armonioasă a preșcolarilor. " +
                    "Prin organizarea de excursii, vizite și activități recreative, " +
                    "copiii beneficiază de contexte autentice de învățare, în care " +
                    "experiența directă și interacțiunea cu mediul real completează " +
                    "cunoștințele dobândite în sala de grupă.\n\n" +
                    "**De ce este valid acest răspuns:** Menționează definiția, scopul " +
                    "(contexte autentice), cele 3 modalități (experiență directă, " +
                    "interacțiune, observare) și impactul (dezvoltare socială, " +
                    "emoțională, cognitivă).",
                },
              },
            ],
          },
        ],
        examples: [
          {
            title: "Excursie la grădina zoologică",
            description:
              "Preșcolarii vor observa modul de îngrijire al animalelor, hrana " +
              "pe care acestea o consumă și caracteristicile specifice fiecărui " +
              "animal. Experiența va fi completată de participarea la hrănirea " +
              "puilor de căprioară. Copiii își vor dezvolta empatia față de animale " +
              "și vor achiziționa cunoștințe noi. La excursie pot participa, ca " +
              "parteneri educaționali, părinții preșcolarilor.",
            context: "Orice grupă de vârstă, activitate lunară",
          },
        ],
        keyPoints: [
          {
            text: "Extrașcolare = excursii, vizite, activități recreative, ÎN AFARA programului",
            important: true,
          },
          {
            text: "Reglementate prin ROFUIP, cu acordul părinților, sub responsabilitatea unității școlare",
            important: true,
          },
          { text: "Parteneri educaționali: familia, primăria, autoritățile, biserica" },
          { text: "Diferența-cheie: opționalele = selectate de părinți anual; extrașcolare = inițiate de cadre didactice" },
        ],
        resources: [],
        miniQuiz: {
          questions: [
            {
              id: "edu-ped-act-3-mq10",
              type: "multiple-choice",
              question:
                "Cine inițiază activitățile extrașcolare?",
              options: [
                "Părinții preșcolarilor",
                "Inspectoratul școlar",
                "Cadrele didactice, în funcție de proiectele educaționale",
                "Primăria localității",
              ],
              correctIndex: 2,
              explanation:
                "Activitățile extrașcolare sunt inițiate de cadrele didactice " +
                "pe parcursul anului școlar, în funcție de proiectele educaționale.",
            },
            {
              id: "edu-ped-act-3-mq11",
              type: "true-false",
              question:
                "Activitățile extrașcolare se desfășoară în cursul orelor de grădiniță, la fel ca opționalele.",
              correct: false,
              explanation:
                "Activitățile extrașcolare se desfășoară în AFARA programului " +
                "educațional (excursii, vizite), spre deosebire de opționale " +
                "care se desfășoară în cursul orelor de grădiniță.",
            },
            {
              id: "edu-ped-act-3-mq12",
              type: "fill-blank",
              question:
                "Activitățile extrașcolare sunt reglementate prin ___ (Regulamentul cadru de organizare și funcționare a unităților de învățământ preuniversitar).",
              correctAnswers: ["ROFUIP"],
              explanation:
                "ROFUIP = Regulamentul cadru de organizare și funcționare " +
                "a unităților de învățământ preuniversitar.",
            },
            {
              id: "edu-ped-act-3-ch5-q4",
              type: "multiple-choice",
              question:
                "Cu ce frecvență se desfășoară activitățile extrașcolare?",
              options: [
                "Zilnic",
                "Săptămânal",
                "Lunar",
                "Anual",
              ],
              correctIndex: 2,
              explanation:
                "Activitățile extrașcolare se desfășoară lunar. Ele sunt " +
                "organizate de cadrele didactice pe parcursul anului școlar, " +
                "în funcție de proiectele educaționale.",
            },
            {
              id: "edu-ped-act-3-ch5-q5",
              type: "true-false",
              question:
                "Activitățile extrașcolare sunt selectate anual de către părinți, la fel ca opționalele.",
              correct: false,
              explanation:
                "Activitățile extrașcolare NU sunt selectate anual de către părinți. " +
                "Sunt inițiate pe parcursul anului școlar de cadrele didactice, în " +
                "funcție de proiectele educaționale. Selecția anuală de către părinți " +
                "este specifică opționalelor.",
            },
            {
              id: "edu-ped-act-3-ch5-q6",
              type: "multiple-choice",
              question:
                "Care dintre următoarele NU este un partener educațional pentru activitățile extrașcolare?",
              options: [
                "Familia",
                "Primăria",
                "Inspectoratul școlar de specialitate",
                "Biserica",
              ],
              correctIndex: 2,
              explanation:
                "Partenerii educaționali menționați pentru activitățile extrașcolare " +
                "sunt: familia, primăria, autoritățile și biserica. Inspectoratul " +
                "școlar nu este menționat ca partener educațional în acest context.",
            },
            {
              id: "edu-ped-act-3-ch5-q7",
              type: "fill-blank",
              question:
                "Scopul activităților extrașcolare este de a oferi preșcolarilor contexte ___ de învățare.",
              correctAnswers: ["autentice"],
              explanation:
                "Activitățile extrașcolare oferă contexte autentice de învățare " +
                "prin experiență directă, interacțiune și observare, susținând " +
                "dezvoltarea socială, emoțională și cognitivă.",
            },
            {
              id: "edu-ped-act-3-ch5-q8",
              type: "true-false",
              question:
                "Activitățile extrașcolare necesită acordul părinților.",
              correct: true,
              explanation:
                "Activitățile extrașcolare se organizează cu acordul părinților, " +
                "în colaborare cu diverși parteneri și sub responsabilitatea " +
                "unității școlare, conform ROFUIP.",
            },
            {
              id: "edu-ped-act-3-ch5-q9",
              type: "multiple-choice",
              question:
                "Ce formă pot lua activitățile extrașcolare?",
              options: [
                "Fișe de lucru și teste",
                "Excursii, vizite sau activități recreative",
                "Activități pe domenii experiențiale",
                "Jocuri didactice structurate în sală",
              ],
              correctIndex: 1,
              explanation:
                "Activitățile extrașcolare se desfășoară sub formă de excursii, " +
                "vizite sau activități recreative, în afara programului educațional " +
                "al grădiniței.",
            },
            {
              id: "edu-ped-act-3-ch5-q10",
              type: "multiple-choice",
              question:
                "La examen, cum trebuie scris acronimul ROFUIP?",
              options: [
                "Doar acronimul ROFUIP este suficient",
                "Se scrie denumirea completă: Regulamentul cadru de organizare și funcționare a unităților de învățământ preuniversitar",
                "Se scrie doar «regulament de funcționare»",
                "Nu se menționează deloc ROFUIP",
              ],
              correctIndex: 1,
              explanation:
                "La examen se scrie denumirea completă: Regulamentul cadru de organizare " +
                "și funcționare a unităților de învățământ preuniversitar. Comisia " +
                "apreciază cunoașterea denumirii oficiale, nu doar a acronimului.",
            },
          ],
        },
      },
    ],
  },
];
