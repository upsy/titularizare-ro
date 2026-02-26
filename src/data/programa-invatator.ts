import { Subject } from "@/types/programa";

export const programaInvatator: Subject[] = [
  {
    id: "limba-romana",
    title: "Limba și Literatura Română",
    shortTitle: "Limba Română",
    icon: "BookOpen",
    chapters: [
      {
        id: "lr-fonetica",
        title: "Fonetică",
        topics: [
          { id: "lr-fonetica-1", title: "Sunetele limbii române. Vocale, consoane, semivocale" },
          { id: "lr-fonetica-2", title: "Silaba. Despărțirea în silabe" },
          { id: "lr-fonetica-3", title: "Accentul" },
          { id: "lr-fonetica-4", title: "Grupuri de sunete: diftongi, triftongi, vocale în hiat" },
        ],
      },
      {
        id: "lr-vocabular",
        title: "Vocabular",
        topics: [
          { id: "lr-vocabular-1", title: "Cuvântul - unitate de bază a vocabularului" },
          { id: "lr-vocabular-2", title: "Sinonime, antonime, omonime, paronime" },
          { id: "lr-vocabular-3", title: "Câmpuri semantice și familii lexicale" },
          { id: "lr-vocabular-4", title: "Mijloace interne de îmbogățire a vocabularului: derivarea, compunerea, conversiunea" },
          { id: "lr-vocabular-5", title: "Mijloace externe: împrumuturi lexicale, neologisme" },
          { id: "lr-vocabular-6", title: "Sens propriu și sens figurat. Figuri de stil" },
        ],
      },
      {
        id: "lr-morfologie",
        title: "Morfologie",
        topics: [
          { id: "lr-morfologie-1", title: "Substantivul: clasificare, categorii gramaticale, funcții sintactice" },
          { id: "lr-morfologie-2", title: "Articolul: clasificare, forme" },
          { id: "lr-morfologie-3", title: "Adjectivul: clasificare, grade de comparație, funcții sintactice" },
          { id: "lr-morfologie-4", title: "Pronumele: clasificare (personal, reflexiv, posesiv, demonstrativ, interogativ, relativ, nehotărât, negativ)" },
          { id: "lr-morfologie-5", title: "Numeralul: clasificare, valori morfologice" },
          { id: "lr-morfologie-6", title: "Verbul: conjugări, moduri, timpuri, diateze" },
          { id: "lr-morfologie-7", title: "Adverbul: clasificare, grade de comparație" },
          { id: "lr-morfologie-8", title: "Prepoziția, conjuncția, interjecția" },
        ],
      },
      {
        id: "lr-sintaxa",
        title: "Sintaxă",
        topics: [
          { id: "lr-sintaxa-1", title: "Propoziția: părți principale (subiect, predicat)" },
          { id: "lr-sintaxa-2", title: "Părți secundare: atribut, complement direct, complement indirect" },
          { id: "lr-sintaxa-3", title: "Complemente circumstanțiale: de loc, de timp, de mod, de cauză, de scop" },
          { id: "lr-sintaxa-4", title: "Fraza: propoziții principale și secundare" },
          { id: "lr-sintaxa-5", title: "Tipuri de subordonate: subiectivă, predicativă, atributivă, completivă directă, completivă indirectă, circumstanțiale" },
        ],
      },
      {
        id: "lr-literatura",
        title: "Literatură",
        topics: [
          { id: "lr-literatura-1", title: "Genul epic: basm, poveste, nuvelă, roman (caractere, structură)" },
          { id: "lr-literatura-2", title: "Genul liric: pastel, doină, elegie, odă, satiră" },
          { id: "lr-literatura-3", title: "Genul dramatic: comedia, drama" },
          { id: "lr-literatura-4", title: "Figuri de stil: epitet, comparație, metaforă, personificare, hiperbolă, alegorie, antiteză" },
          { id: "lr-literatura-5", title: "Versificație: rima, ritmul, măsura" },
          { id: "lr-literatura-6", title: "Opere literare din programa școlară pentru clasele I-IV" },
        ],
      },
    ],
  },
  {
    id: "matematica",
    title: "Matematică",
    shortTitle: "Matematică",
    icon: "Calculator",
    chapters: [
      {
        id: "mat-multimi",
        title: "Mulțimi. Relații. Funcții",
        topics: [
          { id: "mat-multimi-1", title: "Noțiunea de mulțime. Relații între mulțimi" },
          { id: "mat-multimi-2", title: "Operații cu mulțimi: reuniune, intersecție, diferență" },
          { id: "mat-multimi-3", title: "Produsul cartezian" },
          { id: "mat-multimi-4", title: "Relații binare. Relații de echivalență și de ordine" },
          { id: "mat-multimi-5", title: "Funcții: definiție, proprietăți, tipuri (injectivă, surjectivă, bijectivă)" },
        ],
      },
      {
        id: "mat-numere",
        title: "Numere naturale și numere întregi",
        topics: [
          { id: "mat-numere-1", title: "Mulțimea numerelor naturale. Operații și proprietăți" },
          { id: "mat-numere-2", title: "Divisibilitate: d.c.m.m.d.c. și c.m.m.m.c." },
          { id: "mat-numere-3", title: "Numere prime. Descompunere în factori primi" },
          { id: "mat-numere-4", title: "Mulțimea numerelor întregi. Operații" },
          { id: "mat-numere-5", title: "Sisteme de numerație" },
        ],
      },
      {
        id: "mat-rationale",
        title: "Numere raționale și reale",
        topics: [
          { id: "mat-rationale-1", title: "Mulțimea numerelor raționale. Fracții ordinare și zecimale" },
          { id: "mat-rationale-2", title: "Operații cu numere raționale" },
          { id: "mat-rationale-3", title: "Rapoarte și proporții. Regula de trei simplă" },
          { id: "mat-rationale-4", title: "Procente" },
          { id: "mat-rationale-5", title: "Mulțimea numerelor reale. Radicali" },
        ],
      },
      {
        id: "mat-ecuatii",
        title: "Ecuații și inecuații",
        topics: [
          { id: "mat-ecuatii-1", title: "Ecuații de gradul I cu o necunoscută" },
          { id: "mat-ecuatii-2", title: "Ecuații de gradul II cu o necunoscută" },
          { id: "mat-ecuatii-3", title: "Sisteme de ecuații liniare" },
          { id: "mat-ecuatii-4", title: "Inecuații de gradul I și II" },
          { id: "mat-ecuatii-5", title: "Probleme care se rezolvă cu ajutorul ecuațiilor" },
        ],
      },
      {
        id: "mat-geometrie",
        title: "Geometrie",
        topics: [
          { id: "mat-geometrie-1", title: "Noțiuni fundamentale de geometrie plană" },
          { id: "mat-geometrie-2", title: "Triunghiul: clasificare, proprietăți, linii importante" },
          { id: "mat-geometrie-3", title: "Patrulatere: paralelogram, dreptunghi, romb, pătrat, trapez" },
          { id: "mat-geometrie-4", title: "Cercul: elemente, proprietăți" },
          { id: "mat-geometrie-5", title: "Arii și perimetre" },
          { id: "mat-geometrie-6", title: "Corpuri geometrice: cub, paralelipiped, cilindru, con, sferă" },
          { id: "mat-geometrie-7", title: "Arii și volume ale corpurilor geometrice" },
        ],
      },
    ],
  },
  {
    id: "pedagogie",
    title: "Pedagogie și Didactica Specialității",
    shortTitle: "Pedagogie",
    icon: "GraduationCap",
    chapters: [
      {
        id: "ped-curriculum",
        title: "Curriculum",
        topics: [
          { id: "ped-curriculum-1", title: "Conceptul de curriculum. Tipuri de curriculum" },
          { id: "ped-curriculum-2", title: "Planul-cadru de învățământ. Programa școlară" },
          { id: "ped-curriculum-3", title: "Manualul școlar și alte suporturi curriculare" },
          { id: "ped-curriculum-4", title: "Competențe generale și specifice" },
        ],
      },
      {
        id: "ped-proiectare",
        title: "Proiectare didactică",
        topics: [
          { id: "ped-proiectare-1", title: "Proiectarea activității didactice: planificare calendaristică, proiectarea unității de învățare" },
          { id: "ped-proiectare-2", title: "Proiectarea lecției. Structura proiectului de lecție" },
          { id: "ped-proiectare-3", title: "Obiective operaționale: formulare, taxonomii" },
          { id: "ped-proiectare-4", title: "Strategii didactice: metode, mijloace, forme de organizare" },
        ],
      },
      {
        id: "ped-metode",
        title: "Metodologie didactică",
        topics: [
          { id: "ped-metode-1", title: "Metode tradiționale: expunerea, conversația, demonstrația, exercițiul" },
          { id: "ped-metode-2", title: "Metode moderne/active: brainstorming, mozaic, cubul, ciorchinele, diagrama Venn" },
          { id: "ped-metode-3", title: "Metode de dezvoltare a gândirii critice" },
          { id: "ped-metode-4", title: "Jocul didactic. Învățarea prin descoperire" },
          { id: "ped-metode-5", title: "Mijloace de învățământ: clasificare, funcții, integrare în lecție" },
        ],
      },
      {
        id: "ped-evaluare",
        title: "Evaluare",
        topics: [
          { id: "ped-evaluare-1", title: "Evaluarea: concept, funcții, tipuri (inițială, formativă, sumativă)" },
          { id: "ped-evaluare-2", title: "Metode și instrumente de evaluare: probe orale, scrise, practice" },
          { id: "ped-evaluare-3", title: "Metode complementare: observarea, portofoliul, proiectul, autoevaluarea" },
          { id: "ped-evaluare-4", title: "Descriptori de performanță. Calificative" },
          { id: "ped-evaluare-5", title: "Erori în evaluare. Obiectivitate și subiectivitate" },
        ],
      },
      {
        id: "ped-psihoped",
        title: "Psihopedagogie",
        topics: [
          { id: "ped-psihoped-1", title: "Particularitățile dezvoltării psihice la vârsta școlară mică (6-10 ani)" },
          { id: "ped-psihoped-2", title: "Teorii ale învățării: behaviorism, cognitivism, constructivism" },
          { id: "ped-psihoped-3", title: "Motivația învățării. Stiluri de învățare" },
          { id: "ped-psihoped-4", title: "Diferențierea și individualizarea instruirii" },
          { id: "ped-psihoped-5", title: "Managementul clasei de elevi" },
        ],
      },
      {
        id: "ped-didactica-rom",
        title: "Didactica Limbii și Literaturii Române",
        topics: [
          { id: "ped-did-rom-1", title: "Metodica predării citirii și scrierii (clasa pregătitoare și clasa I)" },
          { id: "ped-did-rom-2", title: "Dezvoltarea competenței de comunicare orală" },
          { id: "ped-did-rom-3", title: "Formarea competenței de lectură" },
          { id: "ped-did-rom-4", title: "Predarea noțiunilor de limbă română: vocabular, fonetică, morfologie, sintaxă" },
          { id: "ped-did-rom-5", title: "Compunerea: tipuri, metodologie, evaluare" },
        ],
      },
      {
        id: "ped-didactica-mat",
        title: "Didactica Matematicii",
        topics: [
          { id: "ped-did-mat-1", title: "Formarea conceptului de număr natural" },
          { id: "ped-did-mat-2", title: "Metodica predării operațiilor aritmetice" },
          { id: "ped-did-mat-3", title: "Predarea elementelor de geometrie în ciclul primar" },
          { id: "ped-did-mat-4", title: "Rezolvarea și compunerea de probleme" },
          { id: "ped-did-mat-5", title: "Utilizarea materialelor didactice și a jocului în predarea matematicii" },
        ],
      },
    ],
  },
];
