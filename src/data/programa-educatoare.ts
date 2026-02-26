import { Subject } from "@/types/programa";

export const programaEducatoare: Subject[] = [
  {
    id: "edu-romana",
    title: "Limba Română",
    shortTitle: "Română",
    icon: "BookOpen",
    chapters: [
      {
        id: "edu-romana-sub1",
        title: "Subiectul 1 — Literatură",
        topics: [
          { id: "romana-sub1-intro", title: "Structura Subiectului 1 și programa literară" },
          { id: "romana-sub1-basm", title: "Basmul cult: Povestea lui Harap Alb" },
          { id: "romana-sub1-schita", title: "Schița: D-l Goe — I.L. Caragiale" },
          { id: "romana-sub1-povestirea", title: "Povestirea: Negustor lipscan — M. Sadoveanu" },
          { id: "romana-sub1-nuvela", title: "Nuvela: Moara cu noroc — Ioan Slavici" },
          { id: "romana-sub1-romanul", title: "Romanul: Ultima noapte... — Camil Petrescu" },
          { id: "romana-sub1-fabula", title: "Fabula: Câinele și cățelul — Gr. Alexandrescu" },
          { id: "romana-sub1-luceafarul", title: "Luceafărul — M. Eminescu (Romantism)" },
          { id: "romana-sub1-pastelul", title: "Pastelul: Mezul iernii — V. Alecsandri" },
          { id: "romana-sub1-modernism", title: "Modernism: Testament — Tudor Arghezi" },
          { id: "romana-sub1-neomodernism", title: "Neomodernism: Leoaică tânără, iubirea — N. Stănescu" },
          { id: "romana-sub1-comedia", title: "Comedia: O scrisoare pierdută — I.L. Caragiale" },
        ],
      },
    ],
  },
  {
    id: "edu-limba-comunicare",
    title: "Limba și Comunicarea",
    shortTitle: "Comunicare",
    icon: "MessageCircle",
    chapters: [
      {
        id: "edu-lc-oral",
        title: "Comunicare orală",
        topics: [
          { id: "edu-lc-oral-1", title: "Dezvoltarea limbajului la preșcolari: etape, particularități" },
          { id: "edu-lc-oral-2", title: "Comunicarea orală: ascultare, vorbire, vocabular activ și pasiv" },
          { id: "edu-lc-oral-3", title: "Povestirea și repovestirea: metodologie, etape" },
          { id: "edu-lc-oral-4", title: "Jocuri de dezvoltare a limbajului" },
        ],
      },
      {
        id: "edu-lc-pregatire",
        title: "Pregătire pentru citit-scris",
        topics: [
          { id: "edu-lc-preg-1", title: "Activități de pre-lectură și pre-scriere" },
          { id: "edu-lc-preg-2", title: "Conștiința fonologică: sunete, silabe, cuvinte" },
          { id: "edu-lc-preg-3", title: "Formarea deprinderilor grafice" },
          { id: "edu-lc-preg-4", title: "Cartea și lectura: familiarizarea copilului cu cartea" },
        ],
      },
      {
        id: "edu-lc-literatura",
        title: "Literatură pentru copii",
        topics: [
          { id: "edu-lc-lit-1", title: "Specificul literaturii pentru copii" },
          { id: "edu-lc-lit-2", title: "Basme, povești, povestiri pentru preșcolari" },
          { id: "edu-lc-lit-3", title: "Poezii și cântece pentru copii" },
          { id: "edu-lc-lit-4", title: "Dramatizarea și jocul de rol" },
        ],
      },
    ],
  },
  {
    id: "edu-matematica",
    title: "Matematică și Cunoașterea Mediului",
    shortTitle: "Matematică",
    icon: "Shapes",
    chapters: [
      {
        id: "edu-mat-numere",
        title: "Activități matematice",
        topics: [
          { id: "edu-mat-numere-1", title: "Formarea conceptului de număr la preșcolari (1-10)" },
          { id: "edu-mat-numere-2", title: "Număratul, compararea, ordonarea, seriation" },
          { id: "edu-mat-numere-3", title: "Operații simple de adunare și scădere (în concentrul 1-10)" },
          { id: "edu-mat-numere-4", title: "Forme geometrice: cerc, pătrat, triunghi, dreptunghi" },
          { id: "edu-mat-numere-5", title: "Măsurări: lungime, greutate, capacitate, timp" },
          { id: "edu-mat-numere-6", title: "Orientare spațio-temporală" },
        ],
      },
      {
        id: "edu-mat-mediu",
        title: "Cunoașterea mediului",
        topics: [
          { id: "edu-mat-mediu-1", title: "Lumea vie: plante, animale, corpul uman" },
          { id: "edu-mat-mediu-2", title: "Anotimpurile și fenomene ale naturii" },
          { id: "edu-mat-mediu-3", title: "Educație ecologică" },
          { id: "edu-mat-mediu-4", title: "Familia, comunitatea, profesii" },
          { id: "edu-mat-mediu-5", title: "Observarea și experimentul la vârsta preșcolară" },
        ],
      },
    ],
  },
  {
    id: "edu-pedagogie",
    title: "Pedagogia Preșcolară",
    shortTitle: "Pedagogie",
    icon: "GraduationCap",
    chapters: [
      {
        id: "edu-ped-curriculum",
        title: "Curriculum pentru educație timpurie",
        topics: [
          { id: "edu-ped-curr-1", title: "Curriculumul pentru educație timpurie: structură, domenii experiențiale" },
          { id: "edu-ped-curr-2", title: "Domeniile de dezvoltare: fizică, socio-emoțională, cognitivă, limbaj și comunicare" },
          { id: "edu-ped-curr-3", title: "Planificarea activităților: tematică, săptămânală, zilnică" },
          { id: "edu-ped-curr-4", title: "Proiectul tematic: structură, elaborare, implementare" },
        ],
      },
      {
        id: "edu-ped-activitati",
        title: "Tipuri de activități",
        topics: [
          { id: "edu-ped-act-1", title: "Activități pe domenii experiențiale (DLC, DȘ, DOS, DEC, DPM)" },
          { id: "edu-ped-act-2", title: "Jocul: tipuri, importanță, organizare" },
          { id: "edu-ped-act-3", title: "Activități de dezvoltare personală: rutine, tranziții" },
          { id: "edu-ped-act-4", title: "Activități integrate. Învățarea bazată pe proiect" },
        ],
      },
      {
        id: "edu-ped-metode",
        title: "Metodologie didactică preșcolară",
        topics: [
          { id: "edu-ped-met-1", title: "Metode activ-participative în grădiniță" },
          { id: "edu-ped-met-2", title: "Jocul didactic: structură, organizare, conducere" },
          { id: "edu-ped-met-3", title: "Povestirea, lectura după imagini, convorbirea" },
          { id: "edu-ped-met-4", title: "Observarea, experimentul, exercițiul" },
          { id: "edu-ped-met-5", title: "Mijloace de învățământ specifice grădiniței" },
        ],
      },
      {
        id: "edu-ped-evaluare",
        title: "Evaluare în grădiniță",
        topics: [
          { id: "edu-ped-eval-1", title: "Evaluarea în educația timpurie: specificul evaluării la preșcolari" },
          { id: "edu-ped-eval-2", title: "Metode de evaluare: observarea, portofoliul, fișe de evaluare" },
          { id: "edu-ped-eval-3", title: "Fișa de caracterizare psiho-pedagogică" },
          { id: "edu-ped-eval-4", title: "Profilul de dezvoltare al copilului" },
        ],
      },
      {
        id: "edu-ped-psihoped",
        title: "Psihopedagogia preșcolarului",
        topics: [
          { id: "edu-ped-psi-1", title: "Particularitățile dezvoltării psihice la vârsta preșcolară (3-6 ani)" },
          { id: "edu-ped-psi-2", title: "Dezvoltarea cognitivă: Piaget, Vîgotski" },
          { id: "edu-ped-psi-3", title: "Dezvoltarea socio-emoțională" },
          { id: "edu-ped-psi-4", title: "Adaptarea copilului la grădiniță" },
          { id: "edu-ped-psi-5", title: "Relația grădiniță-familie-comunitate" },
        ],
      },
    ],
  },
];
