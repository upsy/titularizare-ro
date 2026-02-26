import { Lesson } from "@/types/lectii";

export const eduLimbaComunicareLessons: Lesson[] = [
  {
    topicId: "edu-lc-oral-1",
    title: "Dezvoltarea limbajului la preșcolari: etape, particularități",
    duration: "2 ore",
    objectives: [
      "Să cunoască etapele dezvoltării limbajului la copiii preșcolari",
      "Să identifice particularitățile comunicării la vârsta 3-6 ani",
      "Să aplice strategii de stimulare a limbajului în activitățile didactice",
      "Să prezinte cadrul teoretic Piaget și Vygotsky privind dezvoltarea limbajului",
      "Să descrie cele patru componente ale limbajului (fonologie, vocabular, gramatică, pragmatică)",
      "Să integreze activitățile de limbaj în domeniul DLC conform curriculumului",
      "Să identifice dificultățile de limbaj frecvente la preșcolari și criteriile de referire la logoped",
    ],
    theory: [
      // 1. Fundamentele teoretice: Piaget și Vygotsky — NOU
      {
        title: "Fundamentele teoretice: Piaget și Vygotsky",
        content:
          "Două mari teorii fundamentează înțelegerea dezvoltării limbajului la copii: perspectiva cognitivistă a lui Jean Piaget și perspectiva socio-culturală a lui Lev Vygotsky.\n\n" +
          "**Jean Piaget (1896-1980) — Limbajul ca reflecție a gândirii:**\n" +
          "• Piaget consideră că limbajul este subordonat dezvoltării cognitive — copilul vorbește despre ceea ce poate gândi.\n" +
          "• În stadiul preoperațional (2-7 ani), gândirea este egocentrică, ceea ce se reflectă în limbajul egocentric: monologul (copilul vorbește cu sine), monologul colectiv (copiii vorbesc simultan, fără a se asculta reciproc) și ecolalia (repetarea cuvintelor altora).\n" +
          "• Pe măsură ce gândirea devine mai socializată, limbajul egocentric scade (de la ~60% la 3 ani la sub 25% la 7 ani) și este înlocuit de limbajul socializat — cereri, întrebări, răspunsuri adaptate la interlocutor.\n" +
          "• Stadiile dezvoltării cognitive (senzoriomotor → preoperațional → operații concrete) determină ce poate exprima copilul verbal.\n\n" +
          "**Lev Vygotsky (1896-1934) — Limbajul ca instrument social:**\n" +
          "• Vygotsky consideră că limbajul are origine socială și abia apoi devine instrument al gândirii individuale.\n" +
          "• Conceptul central: Zona Proximei Dezvoltări (ZPD) — distanța dintre ce poate face copilul singur și ce poate face cu sprijin (scaffolding). Adultul care reformulează, întreabă, extinde enunțul copilului lucrează în ZPD.\n" +
          "• Vorbirea privată (ceea ce Piaget numea «limbaj egocentric») nu dispare, ci se interiorizează, devenind vorbire interioară — instrumentul gândirii mature.\n" +
          "• Implicație pedagogică: interacțiunea verbală cu adultul și cu covârstnicii mai competenți este motorul dezvoltării limbajului.\n\n" +
          "**Piaget vs. Vygotsky — sinteză pentru practică:**\n" +
          "• Piaget: limbajul urmează gândirea; educatoarea trebuie să respecte stadiul cognitiv al copilului.\n" +
          "• Vygotsky: limbajul modelează gândirea; educatoarea trebuie să ofere activ suport verbal (scaffolding) în ZPD.\n" +
          "• În practica educațională modernă, ambele perspective se completează: respectăm nivelul de dezvoltare, dar oferim provocări lingvistice ghidate.",
      },
      // 2. Etapele dezvoltării limbajului (0-6 ani) — EXPANDAT
      {
        title: "Etapele dezvoltării limbajului (0-6 ani)",
        content:
          "Dezvoltarea limbajului parcurge etape universale, dar ritmul variază de la copil la copil. Jaloanele de mai jos sunt orientative.\n\n" +
          "**Perioada prelingvistică (0-12 luni):**\n" +
          "• 0-2 luni: Plânsul diferențiat — copilul comunică nevoi diferite prin tipuri de plâns.\n" +
          "• 2-4 luni: Gânguritul — sunete vocalice (aaa, ooo) emise în stare de confort, primele «conversații» cu adultul prin turn-taking.\n" +
          "• 6-9 luni: Lallațiunea — silabe repetate (ba-ba, ma-ma, da-da), intonația începe să semene cu limba maternă.\n" +
          "• 9-12 luni: Proto-cuvinte — secvențe sonore cu semnificație stabilă, dar care nu sunt încă cuvinte reale (ex: «nana» pentru mâncare). Copilul înțelege ~50 de cuvinte, dar produce doar 1-3.\n\n" +
          "**Stadiul holofrazic (12-18 luni):**\n" +
          "• Un singur cuvânt funcționează ca o propoziție întreagă. «Apă» poate însemna «vreau apă», «asta e apă» sau «am vărsat apă» — contextul și intonația dezambiguizează.\n" +
          "• Vocabular activ: 10-50 de cuvinte. Predomină substantivele (mama, tata, apă, minge) și câteva verbe (dă, ia).\n" +
          "• Supraextinderea semantică: «ham-ham» pentru orice animal cu patru picioare; «tata» pentru orice bărbat.\n\n" +
          "**Stadiul telegrafic (18-24 luni):**\n" +
          "• Combinații de 2-3 cuvinte fără elemente gramaticale: «mama papă», «dă minge», «nu lapte».\n" +
          "• Vocabular activ: 50-200+ cuvinte. Apare «explozia vocabularului» — copilul poate învăța 5-10 cuvinte noi pe zi.\n" +
          "• Apar primele întrebări: «Ce-i asta?» — marcând curiozitatea lingvistică.\n\n" +
          "**Expansiunea gramaticală (2-3 ani):**\n" +
          "• Propozițiile cresc la 3-4 cuvinte. Apar articolele, prepozițiile, pluralul.\n" +
          "• Vocabular activ: 200-1.000 cuvinte. Copilul înțelege mult mai mult decât produce.\n" +
          "• Vârsta întrebărilor «De ce?» — copilul caută explicații cauzale.\n" +
          "• Suprageneralizarea gramaticală: «am punea» în loc de «am pus», «am faceam» — dovadă că regula a fost internalizată.\n\n" +
          "**Consolidarea limbajului (3-5 ani):**\n" +
          "• Propozițiile devin complexe: subordonare (pentru că, dacă, când), coordonare (și, dar, sau).\n" +
          "• Vocabular activ: 1.000-2.500 cuvinte. Apar cuvintele abstracte (frumos, trist, poate).\n" +
          "• Narațiunea emergentă: copilul poate povesti o întâmplare cu început, mijloc și final.\n" +
          "• Pronunția se clarifică progresiv: la 3 ani, ~75% din vorbire este inteligibilă pentru străini; la 5 ani, ~100%.\n\n" +
          "**Maturizarea lingvistică (5-6+ ani):**\n" +
          "• Vocabular activ: 2.500-3.500+ cuvinte. Vocabular pasiv de 2-3 ori mai mare.\n" +
          "• Fraze complexe cu 6-8+ cuvinte, utilizarea timpurilor verbale corecte, a vocii pasive.\n" +
          "• Vorbirea interioară (Vygotsky) devine dominantă — copilul «gândește în cuvinte» fără a vorbi cu voce tare.\n" +
          "• Conștiința metalingvistică: copilul poate reflecta asupra limbajului (rime, silabe, jocuri de cuvinte).",
      },
      // 3. Dezvoltarea limbajului pe grupe de vârstă — NOU
      {
        title: "Dezvoltarea limbajului pe grupe de vârstă",
        content:
          "Pentru educatoare, este esențial să cunoască profilul lingvistic al fiecărei grupe, pentru a adapta activitățile și așteptările.\n\n" +
          "**Grupa mică (3 ani):**\n" +
          "• Vocabular activ: ~1.000 cuvinte. Predomină substantivele și verbele concrete.\n" +
          "• Limbajul este situativ — legat de contextul imediat («aia, acolo, asta»). Copilul nu poate povesti coerent un eveniment trecut fără suport vizual.\n" +
          "• Propozițiile au 3-4 cuvinte. Gramatica este aproximativă.\n" +
          "• Pronunția: multe sunete sunt încă imprecise (r, ș, ț, ce/ci). Acest lucru este normal la 3 ani.\n" +
          "• Comunicarea este predominant cu adultul, mai puțin cu covârstnicii.\n" +
          "• Ce facem: vorbim mult cu copilul, numim obiectele, povestim imagini simple, cântăm cântece scurte.\n\n" +
          "**Grupa mijlocie (4-5 ani):**\n" +
          "• Vocabular activ: 1.600-2.000 cuvinte. Apar adjective, adverbe, prepoziții complexe.\n" +
          "• Narațiunea emergentă: copilul începe să povestească experiențe personale cu o structură rudimentară (ieri, apoi, și după aia).\n" +
          "• Apare limbajul explicativ: copilul poate explica de ce a făcut ceva.\n" +
          "• Jocul simbolic devine complex — dialoguri între personaje, scenarii elaborate.\n" +
          "• Pronunția se clarifică semnificativ. La 5 ani, majoritatea sunetelor sunt corecte.\n" +
          "• Interesul pentru cărți și povești crește — copilul cere să i se citească, recunoaște titluri familiare.\n" +
          "• Ce facem: conversații dirijate, povestiri cu repovestire, jocuri de rol structurate, ghicitori.\n\n" +
          "**Grupa mare / pregătitoare (5-6 ani):**\n" +
          "• Vocabular activ: 2.500-3.500+ cuvinte. Vocabular pasiv: ~10.000 cuvinte.\n" +
          "• Limbajul devine contextual — copilul poate povesti coerent despre un eveniment la care interlocutorul nu a fost prezent.\n" +
          "• Vorbirea interioară se consolidează — copilul planifică acțiuni «în gând».\n" +
          "• Apare conștiința metalingvistică: rime, jocuri de cuvinte, «ce înseamnă cuvântul...?».\n" +
          "• Poate formula definiții simple: «Un câine este un animal care latră».\n" +
          "• Pregătire pentru citit-scris: recunoaște litere, își scrie numele, desparte cuvinte în silabe și sunete.\n" +
          "• Ce facem: lectura dialogată, proiecte tematice cu documentare, dramatizări complexe, exerciții fonologice sistematice.",
      },
      // 4. Cele patru componente ale limbajului — NOU
      {
        title: "Cele patru componente ale limbajului",
        content:
          "Limbajul este un sistem complex cu patru componente interdependente. Educatoarea trebuie să le stimuleze pe toate, nu doar vocabularul.\n\n" +
          "**1. Fonologia (sunetele limbajului):**\n" +
          "• Se referă la capacitatea de a percepe, diferenția și produce sunetele limbii materne.\n" +
          "• La 3 ani, multe sunete sunt încă imprecise: [r] poate fi pronunțat [l], [ș] poate fi [s], grupurile consonantice sunt simplificate (stea → tea).\n" +
          "• Fonologia se dezvoltă natural prin expunere, dar poate fi sprijinită prin: gimnastică fono-articulatorie, onomatopee, cântece cu aliterații, jocuri de rime.\n" +
          "• Dacă la 5 ani persistă erori multiple de pronunție, este recomandat consultul logopedic.\n\n" +
          "**2. Vocabularul / Lexicul (cuvintele):**\n" +
          "• Include vocabularul activ (cuvinte folosite în vorbire) și vocabularul pasiv (cuvinte înțelese, dar nefolosite).\n" +
          "• Progresie orientativă: 1.000 cuvinte (3 ani) → 2.000 (4-5 ani) → 3.500+ (6 ani).\n" +
          "• Vocabularul se dezvoltă prin: experiențe directe, lectura de povești, conversații, explicarea cuvintelor noi în context.\n" +
          "• Tipuri de cuvinte: mai întâi substantive concrete, apoi verbe de acțiune, adjective, adverbe, și abia la urmă conectori și cuvinte abstracte.\n\n" +
          "**3. Gramatica / Morfosintaxa (regulile limbii):**\n" +
          "• Morfologia: formarea pluralului, acordul în gen și număr, conjugarea verbelor, folosirea articolelor.\n" +
          "• Sintaxa: ordinea cuvintelor în propoziție, construirea frazelor complexe cu subordonare.\n" +
          "• Copilul nu învață gramatica prin reguli explicite, ci prin expunere la modele corecte și prin suprageneralizare urmată de corecție implicită (tehnica reformulării).\n" +
          "• Exemple de suprageneralizare tipice în română: «am puneam» (am pus), «doi câini» (doi câini), «mai mare ca» (mai mare decât).\n\n" +
          "**4. Pragmatica (folosirea socială a limbajului):**\n" +
          "• Se referă la capacitatea de a folosi limbajul adecvat în funcție de context, interlocutor și scop.\n" +
          "• Include: turn-taking (așteptarea rândului în conversație), menținerea temei, adaptarea registrului (cum vorbesc cu educatoarea vs. cu un coleg), formularea cererilor polite, povestirea coerentă.\n" +
          "• La 3 ani, pragmatica este rudimentară (întreruperi frecvente, lipsa adaptării la ascultător). La 5-6 ani, copilul poate susține o conversație, poate reformula dacă nu este înțeles, poate adapta volumul vocii.\n" +
          "• Se stimulează prin: jocuri de rol, conversații în grup mic cu reguli, dramatizări, activități de rezolvare de conflicte prin cuvinte.",
      },
      // 5. Particularitățile limbajului preșcolar — REFĂCUT
      {
        title: "Particularitățile limbajului preșcolar",
        content:
          "Limbajul preșcolarului are trăsături unice care îl deosebesc atât de limbajul adultului, cât și de cel al școlarului. Educatoarea trebuie să le recunoască drept etape normale, nu erori.\n\n" +
          "**Limbajul «fuzionat» cu acțiunea și gestul:**\n" +
          "La 3-4 ani, copilul nu poate separa vorbirea de acțiune. Spune «pun asta aici» în timp ce face gestul. Gesturile deictice (arătatul cu degetul) compensează lacunele verbale. Treptat, cuvântul se detașează de acțiune și poate descrie lucruri absente.\n\n" +
          "**Suprageneralizarea — «greșeala inteligentă»:**\n" +
          "Copilul aplică regulile gramaticale și acolo unde limba are excepții. Exemple tipice în română:\n" +
          "• «am puneam» în loc de «am pus» (suprageneralizarea imperfectului)\n" +
          "• «oamenii» în loc de «oamenii» — forme de plural inventate analogic\n" +
          "• «mai frumoasă» în loc de gradul corect\n" +
          "Suprageneralizarea demonstrează că copilul a internalizat regula — este un semn de progres, nu de regres.\n\n" +
          "**Neologismele copilăriei:**\n" +
          "Copiii creează cuvinte noi pe baza logicii lor: «dezgheață» (antonimul lui «îngheață»), «mașina de călcat gâtul» (pentru fular), «om de lapte» (analogie cu om de zăpadă). Aceste creații reflectă creativitate lingvistică și trebuie apreciate, nu corectate abrupt.\n\n" +
          "**Tranziția de la limbajul situativ la cel contextual:**\n" +
          "• Limbaj situativ (3-4 ani): «Ăla a luat-o de acolo» — presupune că interlocutorul vede aceeași scenă. Folosește pronume fără referent clar, gesturi, demonstrative.\n" +
          "• Limbaj contextual (5-6 ani): «Andrei a luat mingea din dulap» — interlocutorul înțelege fără a fi prezent. Copilul specifică subiectul, locul, timpul.\n" +
          "• Tranziția este graduală și depinde de exercițiu: repovestirea, povestirea după imagini și descrierea evenimentelor trecute sunt activități care accelerează trecerea la limbajul contextual.\n\n" +
          "**Limbajul egocentric vs. vorbirea privată:**\n" +
          "• Piaget: limbajul egocentric (monolog, monolog colectiv) este un deficit de socializare care dispare la 6-7 ani.\n" +
          "• Vygotsky: «vorbirea privată» (copilul vorbește cu sine în timp ce acționează) este un instrument de autoreglare care se interiorizează, devenind gândire verbală.\n" +
          "• Educatoarea nu trebuie să suprime vorbirea privată — aceasta ajută copilul să planifice și să își regleze comportamentul.\n\n" +
          "**Diferențe individuale și factori de influență:**\n" +
          "• Ritmul dezvoltării limbajului variază semnificativ: unii copii vorbesc în propoziții la 2 ani, alții abia la 3.\n" +
          "• Factori care influențează: mediul familial (cantitatea și calitatea vorbirii adresate copilului), bilingvismul, temperamentul, dezvoltarea cognitivă generală, eventualele dificultăți de auz.\n" +
          "• Studii recente arată că numărul de cuvinte adresate copilului zilnic (nu cele auzite la TV) este cel mai puternic predictor al vocabularului.",
      },
      // 6. Domeniul DLC în Curriculum — NOU
      {
        title: "Domeniul DLC în Curriculum",
        content:
          "În Curriculumul pentru educație timpurie (2019), Domeniul Limbă și Comunicare (DLC) este unul dintre cele cinci domenii experiențiale și are un rol transversal.\n\n" +
          "**Sub-domeniile DLC:**\n" +
          "• **Comunicare receptivă (ascultarea):** Capacitatea de a înțelege mesaje orale, a urma instrucțiuni, a identifica ideea principală dintr-o poveste, a distinge sunete.\n" +
          "• **Comunicare expresivă (vorbirea):** Capacitatea de a exprima idei, sentimente, experiențe prin cuvinte, de a povesti coerent, de a dialoga respectând regulile conversației.\n" +
          "• **Pre-alfabetizare (premisele citirii și scrierii):** Conștiința fonologică, recunoașterea literelor, relația sunet-literă, familiarizarea cu cartea și textul tipărit, tentative de scriere.\n\n" +
          "**Comportamente vizate (exemple orientative):**\n" +
          "• 3-5 ani: Ascultă o poveste de 5-10 minute, răspunde la întrebări despre conținut, participă la conversații, recunoaște rime.\n" +
          "• 5-6 ani: Repovestește cu detalii, formulează mesaje coerente despre experiențe personale, identifică sunete în cuvinte, recunoaște litere din propriul nume, manifestă interes pentru citit.\n\n" +
          "**Integrarea DLC cu alte domenii:**\n" +
          "Limbajul nu se dezvoltă izolat, ci prin toate activitățile zilei:\n" +
          "• **DȘ (Domeniul Științe):** Numărare, descriere, comparare — toate presupun limbaj.\n" +
          "• **DEC (Domeniul Estetic și Creativ):** Cântece, dramatizări, povești create de copii.\n" +
          "• **DPM (Domeniul Psihomotric):** Instrucțiuni verbale în jocuri de mișcare.\n" +
          "• **DOS (Domeniul Om și Societate):** Conversații despre reguli, emoții, relații.\n\n" +
          "**Principii curriculum:**\n" +
          "• Învățarea prin joc este modalitatea fundamentală la vârsta preșcolară.\n" +
          "• Educatoarea planifică activități DLC specifice (povestiri, jocuri didactice, exerciții fonologice) dar stimulează limbajul în toate momentele zilei.\n" +
          "• Evaluarea este continuă, observațională, bazată pe portfolio — nu pe teste standardizate.",
      },
      // 7. Rolul educatoarei în stimularea limbajului — EXPANDAT
      {
        title: "Rolul educatoarei în stimularea limbajului",
        content:
          "Educatoarea este cel mai important factor de mediu în dezvoltarea limbajului la grădiniță. Strategiile diferă în funcție de vârstă și nevoile individuale ale copilului.\n\n" +
          "**Model lingvistic permanent:**\n" +
          "• Vorbește clar, cu ritm adecvat, articulând corect — copiii imită.\n" +
          "• Folosește vocabular bogat, dar accesibil. Introduce cuvinte noi în context și le explică.\n" +
          "• Formulează propoziții complete, chiar dacă copilul comunică în telegrame verbale.\n\n" +
          "**Tehnica reformulării (expansiunea):**\n" +
          "Cea mai eficientă metodă de corectare indirectă. Copilul spune: «Cățelu fuge mare.» Educatoarea: «Da, cățelul cel mare fuge repede prin curte.» Copilul aude forma corectă și extinsă fără a fi corectat explicit (care ar inhiba comunicarea).\n\n" +
          "**Întrebări deschise vs. închise:**\n" +
          "• Întrebări închise: «Ce culoare are mingea?» — Răspuns: «Roșie.» (un cuvânt)\n" +
          "• Întrebări deschise: «Ce crezi că s-a întâmplat cu mingea?» — Răspuns: o propoziție, o explicație, o poveste.\n" +
          "• Raportul ideal: predominant întrebări deschise, completate cu întrebări de clarificare («De ce crezi asta?», «Cum s-a întâmplat?»).\n\n" +
          "**Strategii pe grupe de vârstă:**\n" +
          "• Grupa mică (3 ani): Repetare frecventă, numire, cântece cu gesturi, povestiri scurte cu imagini mari, dialoguri individuale.\n" +
          "• Grupa mijlocie (4-5 ani): Repovestire, descrieri, ghicitori, jocuri de rol, conversații în grup mic (3-4 copii), carte cu povești mai lungi.\n" +
          "• Grupa mare (5-6 ani): Lectură dialogată, povestire fără suport vizual, dezbatere simplă, proiecte cu documentare, exerciții fonologice, dictare către educatoare.\n\n" +
          "**Povestirea și repovestirea:**\n" +
          "• Povestirea este activitatea DLC cu cel mai mare potențial de dezvoltare a limbajului.\n" +
          "• Etape: ascultare → întrebări de înțelegere → repovestire cu suport (imagini, păpuși) → repovestire liberă → creare de povești.\n" +
          "• Beneficii: vocabular, structuri gramaticale complexe, narațiune, imaginație, atenție.\n\n" +
          "**Jocul de rol și dramatizarea:**\n" +
          "• În jocul de rol, copilul exersează registre lingvistice diferite (doctor, mamă, vânzător), negociază cu partenerii, rezolvă conflicte verbal.\n" +
          "• Dramatizarea unei povești dezvoltă: memoria verbală, expresivitatea, dialogul, secvențialitatea narativă.\n\n" +
          "**Gimnastica fono-articulatorie:**\n" +
          "Exerciții zilnice de 3-5 minute pentru musculatura orofacială:\n" +
          "• Exerciții cu limba: limba sus-jos, stânga-dreapta, «ceasul» (limba face cercuri), «calul» (pocnit din limbă).\n" +
          "• Exerciții cu buzele: zâmbet larg → buze rotunjite, vibrarea buzelor (brrr), suflat în lumânare.\n" +
          "• Exerciții de suflu: suflat în paie, balonaș de săpun, transport de bile ușoare prin suflu.\n" +
          "• Se fac în fiecare zi, de preferat dimineața, în formă ludică (joc, poveste).\n\n" +
          "**Mediul print-rich (bogat în text tipărit):**\n" +
          "• Etichetarea obiectelor din sala de grupă cu numele lor scrise cu litere mari.\n" +
          "• Colțul de lectură: cărți accesibile, la nivelul copiilor, schimbate periodic, diverse ca gen.\n" +
          "• Afișarea lucrărilor copiilor cu text dictat de ei și scris de educatoare.\n" +
          "• Panouri cu «Cuvântul zilei», «Povestea noastră», calendarul zilei cu text.",
      },
      // 8. Dificultăți de limbaj la vârsta preșcolară — NOU
      {
        title: "Dificultăți de limbaj la vârsta preșcolară",
        content:
          "Educatoarea este adesea prima care observă dificultățile de limbaj, deoarece vede copilul în interacțiune cu covârstnicii. Cunoașterea diferenței dintre variația normală și semnele de alarmă este esențială.\n\n" +
          "**Dislalia (tulburare de pronunție):**\n" +
          "• Dislalia fiziologică: la 3-4 ani, este normal ca unele sunete să fie pronunțate incorect (r, ș, j, ț, ce/ci, grupuri consonantice). Aparatul fono-articulator este încă imatur.\n" +
          "• Dislalia patologică: dacă la 5 ani persistă erori multiple de pronunție sau dacă vorbirea este neinteligibilă pentru persoane din afara familiei, este necesară evaluare logopedică.\n" +
          "• Tipuri frecvente în română: rotacismul (r → l), sigmatismul (s, z, ș, j pronunțate incorect), betacismul (b → p sau invers).\n\n" +
          "**Întârzierea în dezvoltarea limbajului:**\n" +
          "• Semne de alarmă: la 2 ani — vocabular sub 50 de cuvinte și absența combinațiilor de 2 cuvinte; la 3 ani — propoziții sub 3 cuvinte și limbaj neinteligibil pentru străini; la 4 ani — nu poate povesti o întâmplare simplă.\n" +
          "• Cauze posibile: hipoacuzia (scăderea auzului), tulburare de spectru autist, dizabilitate intelectuală, mediu nestimulativ, bilingvism (temporar, nu patologic).\n" +
          "• Important: «Vorbește când o vrea el» și «E leneș» nu sunt explicații — întârzierea trebuie evaluată profesional.\n\n" +
          "**Disfluența (bâlbâiala):**\n" +
          "• La 3-4 ani, episoadele de disfluență (repetiții de silabe, ezitări) sunt frecvente și de obicei tranzitorii — limbajul se dezvoltă mai repede decât capacitatea motorie de articulare.\n" +
          "• Nu se corectează copilul, nu se cere «vorbește mai rar», nu se completează cuvintele — se ascultă calm, cu contact vizual.\n" +
          "• Dacă disfluența persistă peste 6 luni, se intensifică sau este însoțită de tensiune musculară facială, se recomandă evaluare logopedică.\n\n" +
          "**Când trimitem la logoped?**\n" +
          "Referirea este necesară când:\n" +
          "• La 3 ani: copilul nu formează propoziții de 2-3 cuvinte sau nu este înțeles de persoane din afara familiei.\n" +
          "• La 4 ani: nu poate povesti o întâmplare simplă sau are erori gramaticale masive.\n" +
          "• La 5 ani: persistă dislalia multiplă (mai mult de 2-3 sunete afectate).\n" +
          "• La orice vârstă: regres brusc al limbajului, absența intenției comunicative, lipsa contactului vizual.\n\n" +
          "**Colaborarea cu familia:**\n" +
          "• Educatoarea informează părinții cu tact, fără a diagnostica, oferind observații concrete: «Am remarcat că Andrei...».\n" +
          "• Recomandări pentru acasă: vorbire frecventă cu copilul (nu doar «comenzi»), citit zilnic, limitarea ecranelor, jocuri verbale.\n" +
          "• Menținerea legăturii cu logopedul: exercițiile recomandate pot fi integrate în activitățile de la grupă.",
      },
      // 9. Integrarea activităților de limbaj în rutina zilnică — NOU
      {
        title: "Integrarea activităților de limbaj în rutina zilnică",
        content:
          "Dezvoltarea limbajului nu are loc doar în cele 20-30 de minute alocate activității DLC. Fiecare moment al zilei la grădiniță este o oportunitate lingvistică.\n\n" +
          "**Primirea copiilor (dimineața):**\n" +
          "• Salutul individualizat: «Bună dimineața, Maria! Ce ai făcut ieri după-amiază?» — deschide o micro-conversație.\n" +
          "• Panoul de prezență: copilul își caută numele, «citește» numele colegilor.\n" +
          "• Calendarul zilei: «Azi este luni, 3 martie. Ce credeți că vom face azi?».\n\n" +
          "**Întâlnirea de dimineață (morning meeting):**\n" +
          "• Fiecare copil are un moment de vorbire: «Vreau să vă povestesc...».\n" +
          "• Regulile conversației: ascultăm, nu întrerupem, punem întrebări.\n" +
          "• Jocuri scurte de limbaj: ghicitori, rime, «telefonul fără fir».\n\n" +
          "**Tranzițiile între activități:**\n" +
          "• Cântece de tranziție cu text: «Strângem, strângem jucării...».\n" +
          "• Instrucțiuni verbale complexificate progresiv: de la «Puneți jucăriile în cutie» la «Puneți cuburile roșii pe raftul de sus și cărțile pe masă».\n" +
          "• Numărători, versuri, frământări de limbă în timp ce se așteaptă.\n\n" +
          "**Masa (gustare, prânz):**\n" +
          "• Numirea alimentelor, descrierea gustului, culorii, texturii.\n" +
          "• Conversații libere la masă — educatoarea stă cu copiii și conversează.\n" +
          "• Formularea politicoasă: «Îmi dai, te rog...», «Mulțumesc», «Poftă bună!».\n\n" +
          "**Jocul liber:**\n" +
          "• Educatoarea se alătură jocului și modelează limbajul: narează acțiunile, pune întrebări deschise, extinde enunțurile copiilor.\n" +
          "• Colțurile tematice (bucătărie, doctor, magazin) sunt laboratoare naturale de limbaj.\n" +
          "• Nu se intervine excesiv — copiii trebuie să exerseze și comunicarea între ei.\n\n" +
          "**Activitățile în aer liber / plimbări:**\n" +
          "• Observarea și numirea: copaci, păsări, vehicule, magazine — vocabular contextual.\n" +
          "• «Jocul celor 5 simțuri»: «Ce vezi? Ce auzi? Ce simți?» — vocabular senzorial.\n" +
          "• Povestirea la întoarcere: «Ce am văzut azi la plimbare?» — limbaj contextual.\n\n" +
          "**Momentele de liniștire / relaxare:**\n" +
          "• Ascultarea de povești audio sau povestirea cu voce joasă.\n" +
          "• «Jurnalul zilei»: copilul dictează, educatoarea scrie o propoziție despre ce i-a plăcut azi.\n\n" +
          "**Principiu cheie:** Cantitatea și calitatea limbajului adresat copilului de către adult (nu limbajul din fundal, nu ecranele) este cel mai puternic predictor al dezvoltării lingvistice. Fiecare interacțiune contează.",
      },
    ],
    examples: [
      {
        title: "Activitate de povestire interactivă",
        description:
          "Educatoarea folosește o carte cu imagini mari și povestește «Turtiță». " +
          "La momente cheie, se oprește și întreabă: «Ce credeți că se va întâmpla?». " +
          "Copiii sunt încurajați să repete replicile repetitive ale personajelor. " +
          "La final, 2-3 copii repovestesc folosind imaginile ca suport.",
        context: "Grupa mijlocie (4-5 ani), activitate DLC, 20 minute",
      },
      {
        title: "Joc didactic «Sacul fermecat»",
        description:
          "Copiii scot pe rând obiecte dintr-un sac și le descriu fără a le numi: " +
          "formă, culoare, la ce folosesc. Ceilalți copii ghicesc obiectul. " +
          "Jocul stimulează vocabularul descriptiv, abilitățile de ascultare activă " +
          "și comunicarea orală structurată.",
        context: "Grupa mare (5-6 ani), joc didactic, 15 minute",
      },
      {
        title: "Tehnica expansiunii în practică",
        description:
          "Copilul spune: «Cățelul fuge.» Educatoarea reformulează: «Da, cățelul cel mic " +
          "fuge repede prin curte.» Astfel, modelul lingvistic este îmbogățit fără " +
          "corecție directă, iar copilul aude structura corectă și extinsă.",
        context: "Exemplu de interacțiune individuală, orice moment al zilei",
      },
      {
        title: "Conversația dirijată despre weekend",
        description:
          "Luni dimineața, în cercul de întâlnire, educatoarea întreabă fiecare copil: «Ce ai făcut " +
          "în weekend?». Folosește întrebări de aprofundare: «Cu cine ai fost?», «Cum a fost?», " +
          "«Ce ți-a plăcut cel mai mult?». Copiii ascultă activ și pot pune întrebări colegilor. " +
          "Educatoarea reformulează răspunsurile fragmentare în propoziții complete.",
        context: "Grupa mică și mijlocie (3-5 ani), întâlnirea de dimineață, 15-20 minute",
      },
      {
        title: "Joc de rol «La doctor»",
        description:
          "Educatoarea amenajează colțul tematic «Cabinetul medical» cu truse de doctor, " +
          "halate, jucării. Copiii joacă roluri: doctor, pacient, asistent. Educatoarea modelează " +
          "dialogul: «Bună ziua, ce vă supără?», «Deschideți gura, vă rog.», «Vă prescriu un " +
          "medicament.» Copiii exersează registre formale, vocabular specific și formulări de politețe.",
        context: "Grupa mijlocie-mare (4-6 ani), joc liber tematic, 20-30 minute",
      },
      {
        title: "Gimnastica fono-articulatorie «Povestea limbii»",
        description:
          "Educatoarea povestește o scurtă istorie despre «Limba», personificată: «Limba s-a trezit " +
          "dimineața și s-a întins (limba afară, sus-jos). A privit în stânga și în dreapta. " +
          "A bătut la ușă (poc-poc cu limba în dinți). A ieșit la plimbare și a întâlnit calul " +
          "(pocnit din limbă). A mâncat dulceață de pe buze (limbă pe buze, circular).» Copiii " +
          "imită toate mișcările. Se face zilnic, 3-5 minute.",
        context: "Toate grupele, exercițiu zilnic dimineața, 3-5 minute",
      },
      {
        title: "Lectura dialogată (tehnica PEER)",
        description:
          "Educatoarea citește «Ursul păcălit de vulpe» unui grup de 4-5 copii. Folosește " +
          "tehnica PEER: Pune o întrebare despre imagine («Ce face vulpea aici?»), Evaluează " +
          "răspunsul copilului, Extinde răspunsul («Da, vulpea se ascunde după copac, pentru " +
          "că vrea să-l păcălească pe urs»), Repetă — cere copilului să repete propoziția " +
          "extinsă. La a doua citire, copiii «citesc» ei, cu suport de imagini.",
        context: "Grupa mare (5-6 ani), activitate DLC în grup mic, 20-25 minute",
      },
      {
        title: "Proiect tematic «Povestea mea preferată»",
        description:
          "Proiect de o săptămână: Luni — fiecare copil aduce de acasă cartea preferată și " +
          "o prezintă grupei (titlu, personaje, de ce le place). Marți — copiii desenează " +
          "scena favorită și dictează educatoarei 2-3 propoziții. Miercuri — ascultăm " +
          "2 povești alese de copii, cu repovestire. Joi — copiii creează o poveste nouă " +
          "în grup, educatoarea scrie. Vineri — dramatizăm povestea creată.",
        context: "Grupa mare (5-6 ani), proiect săptămânal integrat (DLC + DEC), 30 min/zi",
      },
    ],
    keyPoints: [
      { text: "Limbajul se dezvoltă de la stadiul holofrazic (un cuvânt = propoziție) la fraze complexe", important: true },
      { text: "Piaget: limbajul reflectă gândirea (egocentric → socializat); Vygotsky: limbajul modelează gândirea (ZPD, scaffolding)", important: true },
      { text: "Cele 4 componente ale limbajului: fonologie, vocabular/lexic, gramatică/morfosintaxă, pragmatică", important: true },
      { text: "Jaloane vocabular: ~1.000 cuv. (3 ani) → ~2.000 cuv. (4-5 ani) → ~3.500 cuv. (5-6 ani)", important: true },
      { text: "Limbajul egocentric (Piaget) / vorbirea privată (Vygotsky) este normal la 3-4 ani și nu trebuie suprimat" },
      { text: "Suprageneralizarea regulilor gramaticale este o «greșeală inteligentă» — semn de progres" },
      { text: "Educatoarea folosește tehnica expansiunii: reformulează fără a corecta direct" },
      { text: "Jocul de rol și povestirea sunt cele mai eficiente mijloace de dezvoltare a limbajului" },
      { text: "Dislalia fiziologică (pronunție imprecisă la 3-4 ani) este normală; la 5 ani, dacă persistă, se recomandă logoped", important: true },
      { text: "DLC are 3 sub-domenii: comunicare receptivă, comunicare expresivă, pre-alfabetizare", important: true },
      { text: "Gimnastica fono-articulatorie zilnică (3-5 min) susține dezvoltarea pronunției corecte", important: true },
      { text: "Lectura dialogată (PEER) dezvoltă simultan vocabular, gramatică și comprehensiune" },
      { text: "Mediul trebuie să fie bogat în print: etichete, colț de lectură, lucrări afișate" },
      { text: "Limbajul se dezvoltă în TOATE momentele zilei, nu doar la activitățile DLC planificate" },
    ],
    quiz: {
      topicId: "edu-lc-oral-1",
      questions: [
        // q1 — existent
        {
          id: "edu-lc-oral-1-q1",
          type: "multiple-choice",
          question: "Care este vocabularul activ mediu al unui copil de 6 ani?",
          options: ["500 cuvinte", "1.000 cuvinte", "2.500-3.000 cuvinte", "5.000 cuvinte"],
          correctIndex: 2,
          explanation:
            "La vârsta de 6 ani, vocabularul activ al copilului ajunge la aproximativ 2.500-3.000 de cuvinte, " +
            "de la ~1.000 la vârsta de 3 ani.",
        },
        // q2 — existent
        {
          id: "edu-lc-oral-1-q2",
          type: "true-false",
          question: "Limbajul egocentric dispare complet după vârsta de 4 ani.",
          correct: false,
          explanation:
            "Conform lui Piaget, limbajul egocentric persistă până la vârsta de 6-7 ani, " +
            "deși scade progresiv pe măsură ce limbajul socializat devine dominant.",
        },
        // q3 — existent
        {
          id: "edu-lc-oral-1-q3",
          type: "fill-blank",
          question:
            "Stadiul în care copilul folosește un singur cuvânt cu valoare de propoziție se numește stadiul ___.",
          correctAnswers: ["holofrazic", "holofrastic", "holofraza"],
          explanation:
            "Stadiul holofrazic apare în jurul vârstei de 12-18 luni, când un cuvânt " +
            "precum «apă» poate însemna «vreau apă» sau «asta e apă».",
        },
        // q4 — existent
        {
          id: "edu-lc-oral-1-q4",
          type: "multiple-choice",
          question:
            "Ce tehnică folosește educatoarea când reformulează enunțul copilului fără a-l corecta direct?",
          options: ["Tehnica demonstrației", "Tehnica expansiunii", "Tehnica problematizării", "Tehnica modelării"],
          correctIndex: 1,
          explanation:
            "Tehnica expansiunii constă în reformularea enunțului copilului într-o formă corectă și " +
            "extinsă, fără corecție directă. Ex: copilul spune «cățelul fuge», educatoarea: " +
            "«da, cățelul cel mic fuge repede prin curte».",
        },
        // q5 — existent
        {
          id: "edu-lc-oral-1-q5",
          type: "true-false",
          question:
            "Suprageneralizarea regulilor gramaticale (ex: «am puneam») este un semn de tulburare de limbaj.",
          correct: false,
          explanation:
            "Suprageneralizarea este o etapă normală de dezvoltare a limbajului. Copilul aplică regulile " +
            "învățate și acolo unde sunt excepții, ceea ce demonstrează că a internalizat regula.",
        },
        // q6 — existent
        {
          id: "edu-lc-oral-1-q6",
          type: "multiple-choice",
          question: "Limbajul «telegrafic» este caracteristic perioadei:",
          options: ["0-12 luni", "18-24 luni", "3-4 ani", "5-6 ani"],
          correctIndex: 1,
          explanation:
            "Stadiul telegrafic (18-24 luni) se caracterizează prin combinații de 2-3 cuvinte " +
            "fără elemente gramaticale: «mama papă», «dă minge».",
        },
        // q7 — NOU: Piaget vs Vygotsky
        {
          id: "edu-lc-oral-1-q7",
          type: "multiple-choice",
          question: "Conform lui Piaget, limbajul egocentric la preșcolari reflectă:",
          options: [
            "O tulburare de comunicare",
            "Gândirea egocentrică specifică stadiului preoperațional",
            "Influența mediului social asupra copilului",
            "Capacitatea metalingvistică avansată",
          ],
          correctIndex: 1,
          explanation:
            "Piaget consideră că limbajul egocentric (monolog, monolog colectiv, ecolalie) reflectă " +
            "gândirea egocentrică specifică stadiului preoperațional (2-7 ani) — copilul nu poate " +
            "lua perspectiva interlocutorului.",
        },
        // q8 — NOU: ZPD
        {
          id: "edu-lc-oral-1-q8",
          type: "fill-blank",
          question:
            "Conceptul introdus de Vygotsky care descrie distanța dintre ce poate face copilul singur și ce poate face cu sprijin se numește Zona ___ Dezvoltări.",
          correctAnswers: ["Proximei", "proximei", "Proxime", "proxime"],
          explanation:
            "Zona Proximei Dezvoltări (ZPD) este conceptul central al lui Vygotsky. Adultul care " +
            "oferă scaffolding (sprijin temporar) în ZPD ajută copilul să progreseze dincolo de " +
            "nivelul actual de dezvoltare.",
        },
        // q9 — NOU: componente limbaj
        {
          id: "edu-lc-oral-1-q9",
          type: "multiple-choice",
          question: "Care dintre următoarele NU este una dintre cele 4 componente ale limbajului?",
          options: ["Fonologia", "Pragmatica", "Caligrafia", "Morfosintaxa"],
          correctIndex: 2,
          explanation:
            "Cele 4 componente ale limbajului sunt: fonologia (sunetele), vocabularul/lexicul (cuvintele), " +
            "gramatica/morfosintaxa (regulile) și pragmatica (folosirea socială). Caligrafia se referă " +
            "la scriere, nu la limbajul oral.",
        },
        // q10 — NOU: vocabular 5-6 ani
        {
          id: "edu-lc-oral-1-q10",
          type: "true-false",
          question: "La 5-6 ani, vocabularul pasiv al copilului poate ajunge la ~10.000 de cuvinte.",
          correct: true,
          explanation:
            "Vocabularul pasiv (cuvinte înțelese, dar nu neapărat folosite activ) este de 2-3 ori " +
            "mai mare decât cel activ. Cu un vocabular activ de ~3.500 cuvinte la 5-6 ani, " +
            "vocabularul pasiv poate ajunge la ~10.000 de cuvinte.",
        },
        // q11 — NOU: corectare indirectă
        {
          id: "edu-lc-oral-1-q11",
          type: "true-false",
          question:
            "Când un copil de 3 ani pronunță greșit un cuvânt, educatoarea trebuie să-i ceară să repete cuvântul corect de 3 ori.",
          correct: false,
          explanation:
            "Corectarea directă și repetarea forțată inhibă comunicarea. Educatoarea folosește " +
            "tehnica reformulării (expansiunii): repetă enunțul în forma corectă, într-un context natural, " +
            "fără a atrage atenția asupra greșelii.",
        },
        // q12 — NOU: DLC
        {
          id: "edu-lc-oral-1-q12",
          type: "multiple-choice",
          question: "Care sunt cele 3 sub-domenii ale DLC în Curriculumul pentru educație timpurie?",
          options: [
            "Citire, scriere, ascultare",
            "Comunicare receptivă, comunicare expresivă, pre-alfabetizare",
            "Fonologie, vocabular, gramatică",
            "Povestire, conversație, dramatizare",
          ],
          correctIndex: 1,
          explanation:
            "Domeniul Limbă și Comunicare (DLC) din Curriculumul pentru educație timpurie (2019) " +
            "are 3 sub-domenii: comunicare receptivă (ascultarea), comunicare expresivă (vorbirea) " +
            "și pre-alfabetizare (premisele citirii și scrierii).",
        },
        // q13 — NOU: dislalie
        {
          id: "edu-lc-oral-1-q13",
          type: "true-false",
          question:
            "Dislalia fiziologică la vârsta de 3-4 ani (pronunțarea incorectă a unor sunete) este considerată normală.",
          correct: true,
          explanation:
            "La 3-4 ani, aparatul fono-articulator este încă imatur, astfel încât sunete precum " +
            "r, ș, j, ț sau grupurile consonantice sunt frecvent pronunțate incorect. Aceasta " +
            "este dislalia fiziologică — normală la această vârstă. Dacă persistă după 5 ani, " +
            "se recomandă evaluare logopedică.",
        },
        // q14 — NOU: lectură dialogată
        {
          id: "edu-lc-oral-1-q14",
          type: "multiple-choice",
          question: "Ce reprezintă acronimul PEER în tehnica lecturii dialogate?",
          options: [
            "Planifică, Elaborează, Evaluează, Recapitulează",
            "Pune întrebare, Evaluează răspuns, Extinde, Repetă",
            "Predă, Exersează, Experimentează, Reflectează",
            "Povestește, Explică, Explorează, Rezumă",
          ],
          correctIndex: 1,
          explanation:
            "PEER este acronimul pentru: Pune o întrebare, Evaluează răspunsul copilului, " +
            "Extinde răspunsul (reformulare mai completă) și Repetă (cere copilului să repete " +
            "versiunea extinsă). Tehnica dezvoltă simultan vocabular, gramatică și comprehensiune.",
        },
        // q15 — NOU: limbaj contextual
        {
          id: "edu-lc-oral-1-q15",
          type: "multiple-choice",
          question:
            "Tranziția de la limbajul situativ la limbajul contextual la preșcolari înseamnă că:",
          options: [
            "Copilul începe să vorbească doar în contexte formale",
            "Copilul poate comunica clar despre evenimente la care interlocutorul nu a fost prezent",
            "Copilul folosește exclusiv limbajul scris",
            "Copilul renunță la gesturi în comunicare",
          ],
          correctIndex: 1,
          explanation:
            "Limbajul situativ (3-4 ani) presupune prezența interlocutorului în situație (multe pronume, " +
            "gesturi, «ăla, acolo»). Limbajul contextual (5-6 ani) permite copilului să povestească " +
            "coerent despre evenimente trecute sau viitoare, specificând cine, ce, unde, când.",
        },
      ],
    },

    // === CHAPTERS (structured format) ===
    chapters: [
      // --- Chapter 1: Bazele teoretice ale dezvoltării limbajului ---
      {
        id: "edu-lc-oral-1-ch1",
        title: "Bazele teoretice ale dezvoltării limbajului",
        duration: "~25 min",
        sections: [
          {
            title: "Fundamentele teoretice: Piaget și Vygotsky",
            content:
              "Două mari teorii fundamentează înțelegerea dezvoltării limbajului la copii: perspectiva cognitivistă a lui Jean Piaget și perspectiva socio-culturală a lui Lev Vygotsky.\n\n" +
              "**Jean Piaget (1896-1980) — Limbajul ca reflecție a gândirii:**\n" +
              "• Piaget consideră că limbajul este subordonat dezvoltării cognitive — copilul vorbește despre ceea ce poate gândi.\n" +
              "• În stadiul preoperațional (2-7 ani), gândirea este egocentrică, ceea ce se reflectă în limbajul egocentric: monologul (copilul vorbește cu sine), monologul colectiv (copiii vorbesc simultan, fără a se asculta reciproc) și ecolalia (repetarea cuvintelor altora).\n" +
              "• Pe măsură ce gândirea devine mai socializată, limbajul egocentric scade (de la ~60% la 3 ani la sub 25% la 7 ani) și este înlocuit de limbajul socializat — cereri, întrebări, răspunsuri adaptate la interlocutor.\n" +
              "• Stadiile dezvoltării cognitive (senzoriomotor → preoperațional → operații concrete) determină ce poate exprima copilul verbal.\n\n" +
              "**Lev Vygotsky (1896-1934) — Limbajul ca instrument social:**\n" +
              "• Vygotsky consideră că limbajul are origine socială și abia apoi devine instrument al gândirii individuale.\n" +
              "• Conceptul central: Zona Proximei Dezvoltări (ZPD) — distanța dintre ce poate face copilul singur și ce poate face cu sprijin (scaffolding). Adultul care reformulează, întreabă, extinde enunțul copilului lucrează în ZPD.\n" +
              "• Vorbirea privată (ceea ce Piaget numea «limbaj egocentric») nu dispare, ci se interiorizează, devenind vorbire interioară — instrumentul gândirii mature.\n" +
              "• Implicație pedagogică: interacțiunea verbală cu adultul și cu covârstnicii mai competenți este motorul dezvoltării limbajului.\n\n" +
              "**Piaget vs. Vygotsky — sinteză pentru practică:**\n" +
              "• Piaget: limbajul urmează gândirea; educatoarea trebuie să respecte stadiul cognitiv al copilului.\n" +
              "• Vygotsky: limbajul modelează gândirea; educatoarea trebuie să ofere activ suport verbal (scaffolding) în ZPD.\n" +
              "• În practica educațională modernă, ambele perspective se completează: respectăm nivelul de dezvoltare, dar oferim provocări lingvistice ghidate.",
          },
          {
            title: "Etapele dezvoltării limbajului (0-6 ani)",
            content:
              "Dezvoltarea limbajului parcurge etape universale, dar ritmul variază de la copil la copil. Jaloanele de mai jos sunt orientative.\n\n" +
              "**Perioada prelingvistică (0-12 luni):**\n" +
              "• 0-2 luni: Plânsul diferențiat — copilul comunică nevoi diferite prin tipuri de plâns.\n" +
              "• 2-4 luni: Gânguritul — sunete vocalice (aaa, ooo) emise în stare de confort, primele «conversații» cu adultul prin turn-taking.\n" +
              "• 6-9 luni: Lallațiunea — silabe repetate (ba-ba, ma-ma, da-da), intonația începe să semene cu limba maternă.\n" +
              "• 9-12 luni: Proto-cuvinte — secvențe sonore cu semnificație stabilă, dar care nu sunt încă cuvinte reale (ex: «nana» pentru mâncare). Copilul înțelege ~50 de cuvinte, dar produce doar 1-3.\n\n" +
              "**Stadiul holofrazic (12-18 luni):**\n" +
              "• Un singur cuvânt funcționează ca o propoziție întreagă. «Apă» poate însemna «vreau apă», «asta e apă» sau «am vărsat apă» — contextul și intonația dezambiguizează.\n" +
              "• Vocabular activ: 10-50 de cuvinte. Predomină substantivele (mama, tata, apă, minge) și câteva verbe (dă, ia).\n" +
              "• Supraextinderea semantică: «ham-ham» pentru orice animal cu patru picioare; «tata» pentru orice bărbat.\n\n" +
              "**Stadiul telegrafic (18-24 luni):**\n" +
              "• Combinații de 2-3 cuvinte fără elemente gramaticale: «mama papă», «dă minge», «nu lapte».\n" +
              "• Vocabular activ: 50-200+ cuvinte. Apare «explozia vocabularului» — copilul poate învăța 5-10 cuvinte noi pe zi.\n" +
              "• Apar primele întrebări: «Ce-i asta?» — marcând curiozitatea lingvistică.\n\n" +
              "**Expansiunea gramaticală (2-3 ani):**\n" +
              "• Propozițiile cresc la 3-4 cuvinte. Apar articolele, prepozițiile, pluralul.\n" +
              "• Vocabular activ: 200-1.000 cuvinte. Copilul înțelege mult mai mult decât produce.\n" +
              "• Vârsta întrebărilor «De ce?» — copilul caută explicații cauzale.\n" +
              "• Suprageneralizarea gramaticală: «am punea» în loc de «am pus», «am faceam» — dovadă că regula a fost internalizată.\n\n" +
              "**Consolidarea limbajului (3-5 ani):**\n" +
              "• Propozițiile devin complexe: subordonare (pentru că, dacă, când), coordonare (și, dar, sau).\n" +
              "• Vocabular activ: 1.000-2.500 cuvinte. Apar cuvintele abstracte (frumos, trist, poate).\n" +
              "• Narațiunea emergentă: copilul poate povesti o întâmplare cu început, mijloc și final.\n" +
              "• Pronunția se clarifică progresiv: la 3 ani, ~75% din vorbire este inteligibilă pentru străini; la 5 ani, ~100%.\n\n" +
              "**Maturizarea lingvistică (5-6+ ani):**\n" +
              "• Vocabular activ: 2.500-3.500+ cuvinte. Vocabular pasiv de 2-3 ori mai mare.\n" +
              "• Fraze complexe cu 6-8+ cuvinte, utilizarea timpurilor verbale corecte, a vocii pasive.\n" +
              "• Vorbirea interioară (Vygotsky) devine dominantă — copilul «gândește în cuvinte» fără a vorbi cu voce tare.\n" +
              "• Conștiința metalingvistică: copilul poate reflecta asupra limbajului (rime, silabe, jocuri de cuvinte).",
          },
        ],
        examples: [
          {
            title: "Tehnica expansiunii în practică",
            description:
              "Copilul spune: «Cățelul fuge.» Educatoarea reformulează: «Da, cățelul cel mic " +
              "fuge repede prin curte.» Astfel, modelul lingvistic este îmbogățit fără " +
              "corecție directă, iar copilul aude structura corectă și extinsă.",
            context: "Exemplu de interacțiune individuală, orice moment al zilei",
          },
          {
            title: "Conversația dirijată despre weekend",
            description:
              "Luni dimineața, în cercul de întâlnire, educatoarea întreabă fiecare copil: «Ce ai făcut " +
              "în weekend?». Folosește întrebări de aprofundare: «Cu cine ai fost?», «Cum a fost?», " +
              "«Ce ți-a plăcut cel mai mult?». Copiii ascultă activ și pot pune întrebări colegilor. " +
              "Educatoarea reformulează răspunsurile fragmentare în propoziții complete.",
            context: "Grupa mică și mijlocie (3-5 ani), întâlnirea de dimineață, 15-20 minute",
          },
        ],
        keyPoints: [
          { text: "Limbajul se dezvoltă de la stadiul holofrazic (un cuvânt = propoziție) la fraze complexe", important: true },
          { text: "Piaget: limbajul reflectă gândirea (egocentric → socializat); Vygotsky: limbajul modelează gândirea (ZPD, scaffolding)", important: true },
          { text: "Jaloane vocabular: ~1.000 cuv. (3 ani) → ~2.000 cuv. (4-5 ani) → ~3.500 cuv. (5-6 ani)", important: true },
          { text: "Limbajul egocentric (Piaget) / vorbirea privată (Vygotsky) este normal la 3-4 ani și nu trebuie suprimat" },
        ],
        resources: [
          {
            title: "Teorii ale dezvoltării limbajului — Piaget și Vygotsky",
            url: "https://www.didactic.ro/revista-cadrelor-didactice/teorii-ale-dezvoltarii-limbajului-la-copii",
            source: "didactic.ro",
            description: "Sinteză comparativă a celor două perspective teoretice",
          },
          {
            title: "Etapele dezvoltării limbajului la copii (0-6 ani)",
            url: "https://www.reginamaria.ro/articole-medicale/dezvoltarea-limbajului-la-copii",
            source: "reginamaria.ro",
            description: "Ghid medical cu jaloane de dezvoltare pe vârste",
          },
          {
            title: "Zona Proximei Dezvoltări în educația timpurie",
            url: "https://ibn.idsi.md/sites/default/files/imag_file/42_47_Zona%20proximei%20dezvoltari.pdf",
            source: "ibn.idsi.md",
            description: "Articol academic despre aplicarea ZPD în practică",
          },
        ],
        miniQuiz: {
          questions: [
            {
              id: "edu-lc-oral-1-mq1",
              type: "multiple-choice",
              question: "Ce consideră Vygotsky despre originea limbajului?",
              options: [
                "Limbajul are origine biologică și se dezvoltă independent",
                "Limbajul are origine socială și apoi devine instrument al gândirii",
                "Limbajul este subordonat dezvoltării motorii",
                "Limbajul apare doar prin imitație pasivă",
              ],
              correctIndex: 1,
              explanation:
                "Vygotsky susține că limbajul are origine socială (din interacțiunea cu adulții) " +
                "și abia apoi se interiorizează, devenind instrument al gândirii individuale.",
            },
            {
              id: "edu-lc-oral-1-mq2",
              type: "true-false",
              question: "Stadiul holofrazic apare la vârsta de 3-4 ani.",
              correct: false,
              explanation:
                "Stadiul holofrazic apare între 12-18 luni, când copilul folosește un singur " +
                "cuvânt cu valoare de propoziție întreagă (ex: «apă» = «vreau apă»).",
            },
            {
              id: "edu-lc-oral-1-mq3",
              type: "multiple-choice",
              question: "Ce este «explozia vocabularului» și când apare?",
              options: [
                "Creșterea bruscă a vocabularului la 18-24 luni (5-10 cuvinte noi/zi)",
                "Pierderea temporară a cuvintelor la 12 luni",
                "Utilizarea cuvintelor abstracte la 5 ani",
                "Apariția primelor propoziții la 3 ani",
              ],
              correctIndex: 0,
              explanation:
                "«Explozia vocabularului» apare în stadiul telegrafic (18-24 luni), când copilul " +
                "poate învăța 5-10 cuvinte noi pe zi, trecând de la ~50 la peste 200 de cuvinte.",
            },
            {
              id: "edu-lc-oral-1-mq3a",
              type: "true-false",
              question:
                "Conform lui Piaget, limbajul egocentric este un instrument de autoreglare care se interiorizează.",
              correct: false,
              explanation:
                "Aceasta este perspectiva lui Vygotsky, nu a lui Piaget. Piaget consideră limbajul " +
                "egocentric ca un deficit de socializare care dispare pe măsură ce gândirea devine " +
                "mai socializată. Vygotsky reinterpretează «vorbirea privată» ca instrument de autoreglare.",
            },
            {
              id: "edu-lc-oral-1-mq3b",
              type: "multiple-choice",
              question: "Ce stadiu al dezvoltării cognitive corespunde vârstei preșcolare (2-7 ani), conform lui Piaget?",
              options: [
                "Stadiul senzoriomotor",
                "Stadiul preoperațional",
                "Stadiul operațiilor concrete",
                "Stadiul operațiilor formale",
              ],
              correctIndex: 1,
              explanation:
                "Conform lui Piaget, vârsta 2-7 ani corespunde stadiului preoperațional, caracterizat " +
                "prin gândire egocentrică, care se reflectă în limbajul egocentric: monolog, monolog " +
                "colectiv și ecolalie.",
            },
            {
              id: "edu-lc-oral-1-mq3c",
              type: "fill-blank",
              question:
                "Sprijinul temporar oferit de adult în Zona Proximei Dezvoltări se numește ___ (termen englezesc folosit frecvent).",
              correctAnswers: ["scaffolding", "Scaffolding", "scaffolding-ul"],
              explanation:
                "Scaffolding (de la engl. «schelă») este termenul folosit de Vygotsky pentru sprijinul " +
                "temporar oferit de adult sau de un covârstnic mai competent, care ajută copilul să " +
                "progreseze dincolo de nivelul actual de dezvoltare.",
            },
            {
              id: "edu-lc-oral-1-mq3d",
              type: "multiple-choice",
              question: "Ce se întâmplă în perioada prelingvistică, la 6-9 luni?",
              options: [
                "Copilul formează primele propoziții",
                "Apare gânguritul cu sunete vocalice",
                "Apare lallațiunea — silabe repetate (ba-ba, ma-ma)",
                "Copilul înțelege peste 200 de cuvinte",
              ],
              correctIndex: 2,
              explanation:
                "La 6-9 luni apare lallațiunea — copilul produce silabe repetate (ba-ba, ma-ma, da-da), " +
                "iar intonația începe să semene cu limba maternă. Gânguritul apare mai devreme (2-4 luni).",
            },
            {
              id: "edu-lc-oral-1-mq3e",
              type: "true-false",
              question:
                "Supraextinderea semantică (ex: «ham-ham» pentru orice animal cu patru picioare) este specifică stadiului holofrazic.",
              correct: true,
              explanation:
                "Da, supraextinderea semantică apare în stadiul holofrazic (12-18 luni). Copilul " +
                "folosește un cuvânt pentru o categorie mai largă decât cea corectă, deoarece " +
                "vocabularul este încă limitat.",
            },
            {
              id: "edu-lc-oral-1-mq3f",
              type: "multiple-choice",
              question: "Care este diferența esențială dintre perspectivele lui Piaget și Vygotsky asupra limbajului?",
              options: [
                "Piaget studiază adulții, Vygotsky studiază copiii",
                "Piaget: limbajul urmează gândirea; Vygotsky: limbajul modelează gândirea",
                "Piaget: limbajul este înnăscut; Vygotsky: limbajul este dobândit",
                "Nu există diferențe — ambii au aceeași perspectivă",
              ],
              correctIndex: 1,
              explanation:
                "Piaget consideră că limbajul este subordonat gândirii (limbajul reflectă stadiul cognitiv). " +
                "Vygotsky consideră că limbajul modelează gândirea (interacțiunea verbală este motor al " +
                "dezvoltării). În practică, ambele perspective se completează.",
            },
            {
              id: "edu-lc-oral-1-mq3g",
              type: "fill-blank",
              question:
                "În stadiul telegrafic (18-24 luni), copilul combină ___-3 cuvinte fără elemente gramaticale.",
              correctAnswers: ["2", "două", "doi"],
              explanation:
                "Stadiul telegrafic (18-24 luni) se caracterizează prin combinații de 2-3 cuvinte " +
                "fără elemente gramaticale: «mama papă», «dă minge», «nu lapte». Se numește " +
                "«telegrafic» deoarece seamănă cu un telegram — doar cuvintele esențiale.",
            },
          ],
        },
      },

      // --- Chapter 2: Limbajul preșcolarului: componente și particularități ---
      {
        id: "edu-lc-oral-1-ch2",
        title: "Limbajul preșcolarului: componente și particularități",
        duration: "~30 min",
        sections: [
          {
            title: "Dezvoltarea limbajului pe grupe de vârstă",
            content:
              "Pentru educatoare, este esențial să cunoască profilul lingvistic al fiecărei grupe, pentru a adapta activitățile și așteptările.\n\n" +
              "**Grupa mică (3 ani):**\n" +
              "• Vocabular activ: ~1.000 cuvinte. Predomină substantivele și verbele concrete.\n" +
              "• Limbajul este situativ — legat de contextul imediat («aia, acolo, asta»). Copilul nu poate povesti coerent un eveniment trecut fără suport vizual.\n" +
              "• Propozițiile au 3-4 cuvinte. Gramatica este aproximativă.\n" +
              "• Pronunția: multe sunete sunt încă imprecise (r, ș, ț, ce/ci). Acest lucru este normal la 3 ani.\n" +
              "• Comunicarea este predominant cu adultul, mai puțin cu covârstnicii.\n" +
              "• Ce facem: vorbim mult cu copilul, numim obiectele, povestim imagini simple, cântăm cântece scurte.\n\n" +
              "**Grupa mijlocie (4-5 ani):**\n" +
              "• Vocabular activ: 1.600-2.000 cuvinte. Apar adjective, adverbe, prepoziții complexe.\n" +
              "• Narațiunea emergentă: copilul începe să povestească experiențe personale cu o structură rudimentară (ieri, apoi, și după aia).\n" +
              "• Apare limbajul explicativ: copilul poate explica de ce a făcut ceva.\n" +
              "• Jocul simbolic devine complex — dialoguri între personaje, scenarii elaborate.\n" +
              "• Pronunția se clarifică semnificativ. La 5 ani, majoritatea sunetelor sunt corecte.\n" +
              "• Interesul pentru cărți și povești crește — copilul cere să i se citească, recunoaște titluri familiare.\n" +
              "• Ce facem: conversații dirijate, povestiri cu repovestire, jocuri de rol structurate, ghicitori.\n\n" +
              "**Grupa mare / pregătitoare (5-6 ani):**\n" +
              "• Vocabular activ: 2.500-3.500+ cuvinte. Vocabular pasiv: ~10.000 cuvinte.\n" +
              "• Limbajul devine contextual — copilul poate povesti coerent despre un eveniment la care interlocutorul nu a fost prezent.\n" +
              "• Vorbirea interioară se consolidează — copilul planifică acțiuni «în gând».\n" +
              "• Apare conștiința metalingvistică: rime, jocuri de cuvinte, «ce înseamnă cuvântul...?».\n" +
              "• Poate formula definiții simple: «Un câine este un animal care latră».\n" +
              "• Pregătire pentru citit-scris: recunoaște litere, își scrie numele, desparte cuvinte în silabe și sunete.\n" +
              "• Ce facem: lectura dialogată, proiecte tematice cu documentare, dramatizări complexe, exerciții fonologice sistematice.",
          },
          {
            title: "Cele patru componente ale limbajului",
            content:
              "Limbajul este un sistem complex cu patru componente interdependente. Educatoarea trebuie să le stimuleze pe toate, nu doar vocabularul.\n\n" +
              "**1. Fonologia (sunetele limbajului):**\n" +
              "• Se referă la capacitatea de a percepe, diferenția și produce sunetele limbii materne.\n" +
              "• La 3 ani, multe sunete sunt încă imprecise: [r] poate fi pronunțat [l], [ș] poate fi [s], grupurile consonantice sunt simplificate (stea → tea).\n" +
              "• Fonologia se dezvoltă natural prin expunere, dar poate fi sprijinită prin: gimnastică fono-articulatorie, onomatopee, cântece cu aliterații, jocuri de rime.\n" +
              "• Dacă la 5 ani persistă erori multiple de pronunție, este recomandat consultul logopedic.\n\n" +
              "**2. Vocabularul / Lexicul (cuvintele):**\n" +
              "• Include vocabularul activ (cuvinte folosite în vorbire) și vocabularul pasiv (cuvinte înțelese, dar nefolosite).\n" +
              "• Progresie orientativă: 1.000 cuvinte (3 ani) → 2.000 (4-5 ani) → 3.500+ (6 ani).\n" +
              "• Vocabularul se dezvoltă prin: experiențe directe, lectura de povești, conversații, explicarea cuvintelor noi în context.\n" +
              "• Tipuri de cuvinte: mai întâi substantive concrete, apoi verbe de acțiune, adjective, adverbe, și abia la urmă conectori și cuvinte abstracte.\n\n" +
              "**3. Gramatica / Morfosintaxa (regulile limbii):**\n" +
              "• Morfologia: formarea pluralului, acordul în gen și număr, conjugarea verbelor, folosirea articolelor.\n" +
              "• Sintaxa: ordinea cuvintelor în propoziție, construirea frazelor complexe cu subordonare.\n" +
              "• Copilul nu învață gramatica prin reguli explicite, ci prin expunere la modele corecte și prin suprageneralizare urmată de corecție implicită (tehnica reformulării).\n" +
              "• Exemple de suprageneralizare tipice în română: «am puneam» (am pus), «doi câini» (doi câini), «mai mare ca» (mai mare decât).\n\n" +
              "**4. Pragmatica (folosirea socială a limbajului):**\n" +
              "• Se referă la capacitatea de a folosi limbajul adecvat în funcție de context, interlocutor și scop.\n" +
              "• Include: turn-taking (așteptarea rândului în conversație), menținerea temei, adaptarea registrului (cum vorbesc cu educatoarea vs. cu un coleg), formularea cererilor polite, povestirea coerentă.\n" +
              "• La 3 ani, pragmatica este rudimentară (întreruperi frecvente, lipsa adaptării la ascultător). La 5-6 ani, copilul poate susține o conversație, poate reformula dacă nu este înțeles, poate adapta volumul vocii.\n" +
              "• Se stimulează prin: jocuri de rol, conversații în grup mic cu reguli, dramatizări, activități de rezolvare de conflicte prin cuvinte.",
          },
          {
            title: "Particularitățile limbajului preșcolar",
            content:
              "Limbajul preșcolarului are trăsături unice care îl deosebesc atât de limbajul adultului, cât și de cel al școlarului. Educatoarea trebuie să le recunoască drept etape normale, nu erori.\n\n" +
              "**Limbajul «fuzionat» cu acțiunea și gestul:**\n" +
              "La 3-4 ani, copilul nu poate separa vorbirea de acțiune. Spune «pun asta aici» în timp ce face gestul. Gesturile deictice (arătatul cu degetul) compensează lacunele verbale. Treptat, cuvântul se detașează de acțiune și poate descrie lucruri absente.\n\n" +
              "**Suprageneralizarea — «greșeala inteligentă»:**\n" +
              "Copilul aplică regulile gramaticale și acolo unde limba are excepții. Exemple tipice în română:\n" +
              "• «am puneam» în loc de «am pus» (suprageneralizarea imperfectului)\n" +
              "• «oamenii» în loc de «oamenii» — forme de plural inventate analogic\n" +
              "• «mai frumoasă» în loc de gradul corect\n" +
              "Suprageneralizarea demonstrează că copilul a internalizat regula — este un semn de progres, nu de regres.\n\n" +
              "**Neologismele copilăriei:**\n" +
              "Copiii creează cuvinte noi pe baza logicii lor: «dezgheață» (antonimul lui «îngheață»), «mașina de călcat gâtul» (pentru fular), «om de lapte» (analogie cu om de zăpadă). Aceste creații reflectă creativitate lingvistică și trebuie apreciate, nu corectate abrupt.\n\n" +
              "**Tranziția de la limbajul situativ la cel contextual:**\n" +
              "• Limbaj situativ (3-4 ani): «Ăla a luat-o de acolo» — presupune că interlocutorul vede aceeași scenă. Folosește pronume fără referent clar, gesturi, demonstrative.\n" +
              "• Limbaj contextual (5-6 ani): «Andrei a luat mingea din dulap» — interlocutorul înțelege fără a fi prezent. Copilul specifică subiectul, locul, timpul.\n" +
              "• Tranziția este graduală și depinde de exercițiu: repovestirea, povestirea după imagini și descrierea evenimentelor trecute sunt activități care accelerează trecerea la limbajul contextual.\n\n" +
              "**Limbajul egocentric vs. vorbirea privată:**\n" +
              "• Piaget: limbajul egocentric (monolog, monolog colectiv) este un deficit de socializare care dispare la 6-7 ani.\n" +
              "• Vygotsky: «vorbirea privată» (copilul vorbește cu sine în timp ce acționează) este un instrument de autoreglare care se interiorizează, devenind gândire verbală.\n" +
              "• Educatoarea nu trebuie să suprime vorbirea privată — aceasta ajută copilul să planifice și să își regleze comportamentul.\n\n" +
              "**Diferențe individuale și factori de influență:**\n" +
              "• Ritmul dezvoltării limbajului variază semnificativ: unii copii vorbesc în propoziții la 2 ani, alții abia la 3.\n" +
              "• Factori care influențează: mediul familial (cantitatea și calitatea vorbirii adresate copilului), bilingvismul, temperamentul, dezvoltarea cognitivă generală, eventualele dificultăți de auz.\n" +
              "• Studii recente arată că numărul de cuvinte adresate copilului zilnic (nu cele auzite la TV) este cel mai puternic predictor al vocabularului.",
          },
        ],
        examples: [
          {
            title: "Activitate de povestire interactivă",
            description:
              "Educatoarea folosește o carte cu imagini mari și povestește «Turtiță». " +
              "La momente cheie, se oprește și întreabă: «Ce credeți că se va întâmpla?». " +
              "Copiii sunt încurajați să repete replicile repetitive ale personajelor. " +
              "La final, 2-3 copii repovestesc folosind imaginile ca suport.",
            context: "Grupa mijlocie (4-5 ani), activitate DLC, 20 minute",
          },
          {
            title: "Joc didactic «Sacul fermecat»",
            description:
              "Copiii scot pe rând obiecte dintr-un sac și le descriu fără a le numi: " +
              "formă, culoare, la ce folosesc. Ceilalți copii ghicesc obiectul. " +
              "Jocul stimulează vocabularul descriptiv, abilitățile de ascultare activă " +
              "și comunicarea orală structurată.",
            context: "Grupa mare (5-6 ani), joc didactic, 15 minute",
          },
          {
            title: "Jocul «Continuă povestea»",
            description:
              "Educatoarea începe o poveste scurtă: «A fost odată un iepuraș care...». " +
              "Fiecare copil adaugă o propoziție. Educatoarea ghidează narațiunea când " +
              "este necesar și reformulează contribuțiile fragmentare. La final, se " +
              "repovestește întreaga poveste creată colectiv.",
            context: "Grupa mijlocie-mare (4-6 ani), activitate DLC creativă, 15-20 minute",
          },
        ],
        keyPoints: [
          { text: "Cele 4 componente ale limbajului: fonologie, vocabular/lexic, gramatică/morfosintaxă, pragmatică", important: true },
          { text: "Suprageneralizarea regulilor gramaticale este o «greșeală inteligentă» — semn de progres" },
          { text: "Tranziția limbaj situativ → contextual este graduală (3-6 ani) și se accelerează prin exerciții de povestire" },
          { text: "Numărul de cuvinte adresate copilului zilnic este cel mai puternic predictor al vocabularului", important: true },
        ],
        resources: [
          {
            title: "Componentele limbajului la vârsta preșcolară",
            url: "https://www.didactic.ro/revista-cadrelor-didactice/componentele-limbajului-oral-la-prescolari",
            source: "didactic.ro",
            description: "Articol detaliat despre fonologie, vocabular, gramatică și pragmatică",
          },
          {
            title: "Particularitățile vorbirii la preșcolari",
            url: "https://revistaprofesorului.ro/particularitatile-limbajului-la-varsta-prescolara/",
            source: "revistaprofesorului.ro",
            description: "Suprageneralizare, neologisme, limbaj situativ vs. contextual",
          },
        ],
        miniQuiz: {
          questions: [
            {
              id: "edu-lc-oral-1-mq4",
              type: "multiple-choice",
              question: "Care este vocabularul activ aproximativ al unui copil din grupa mijlocie (4-5 ani)?",
              options: [
                "500 cuvinte",
                "1.600-2.000 cuvinte",
                "3.500 cuvinte",
                "10.000 cuvinte",
              ],
              correctIndex: 1,
              explanation:
                "La 4-5 ani, vocabularul activ ajunge la 1.600-2.000 de cuvinte. " +
                "Vocabularul de ~10.000 este cel pasiv la 5-6 ani, nu cel activ la 4-5 ani.",
            },
            {
              id: "edu-lc-oral-1-mq5",
              type: "true-false",
              question: "Pragmatica se referă la regulile gramaticale ale limbii.",
              correct: false,
              explanation:
                "Pragmatica se referă la folosirea socială a limbajului (turn-taking, adaptarea " +
                "registrului, menținerea temei). Regulile gramaticale aparțin componentei de " +
                "gramatică/morfosintaxă.",
            },
            {
              id: "edu-lc-oral-1-mq6",
              type: "multiple-choice",
              question: "Ce sunt «neologismele copilăriei»?",
              options: [
                "Cuvinte străine pe care copilul le aude la TV",
                "Cuvinte noi create de copii pe baza logicii lor (ex: «om de lapte»)",
                "Greșeli de pronunție care necesită logoped",
                "Cuvinte pe care copilul le uită frecvent",
              ],
              correctIndex: 1,
              explanation:
                "Neologismele copilăriei sunt cuvinte noi create de copii prin analogie " +
                "(«dezgheață», «mașina de călcat gâtul»). Reflectă creativitate lingvistică " +
                "și nu trebuie corectate abrupt.",
            },
            {
              id: "edu-lc-oral-1-mq6a",
              type: "true-false",
              question:
                "Limbajul situativ (specific vârstei de 3-4 ani) permite copilului să povestească coerent despre un eveniment la care interlocutorul nu a fost prezent.",
              correct: false,
              explanation:
                "Limbajul situativ (3-4 ani) presupune că interlocutorul vede aceeași scenă — copilul " +
                "folosește pronume fără referent clar, gesturi, demonstrative («ăla, acolo, asta»). " +
                "Povestirea coerentă fără prezența interlocutorului la eveniment este specifică limbajului " +
                "contextual (5-6 ani).",
            },
            {
              id: "edu-lc-oral-1-mq6b",
              type: "multiple-choice",
              question: "Care sunt cele patru componente ale limbajului?",
              options: [
                "Citire, scriere, ascultare, vorbire",
                "Fonologia, vocabularul, gramatica, pragmatica",
                "Fonetica, semantica, stilistica, retorica",
                "Pronunția, ortografia, punctuația, caligrafia",
              ],
              correctIndex: 1,
              explanation:
                "Cele patru componente interdependente ale limbajului sunt: fonologia (sunetele), " +
                "vocabularul/lexicul (cuvintele), gramatica/morfosintaxa (regulile) și pragmatica " +
                "(folosirea socială a limbajului).",
            },
            {
              id: "edu-lc-oral-1-mq6c",
              type: "fill-blank",
              question:
                "Limbajul preșcolarului de 3-4 ani este ___ — legat de contextul imediat, presupunând că interlocutorul vede aceeași scenă.",
              correctAnswers: ["situativ", "Situativ"],
              explanation:
                "La 3-4 ani, limbajul este situativ: copilul spune «Ăla a luat-o de acolo» — " +
                "presupune că interlocutorul vede aceeași scenă. Tranziția spre limbajul contextual " +
                "(5-6 ani) este graduală.",
            },
            {
              id: "edu-lc-oral-1-mq6d",
              type: "true-false",
              question:
                "Conștiința metalingvistică (rime, jocuri de cuvinte, «ce înseamnă cuvântul...?») apare la grupa mare (5-6 ani).",
              correct: true,
              explanation:
                "Da, conștiința metalingvistică — capacitatea de a reflecta asupra limbajului " +
                "(rime, silabe, jocuri de cuvinte, definiții simple) — apare la 5-6 ani " +
                "și este importantă pentru pregătirea citirii și scrierii.",
            },
            {
              id: "edu-lc-oral-1-mq6e",
              type: "multiple-choice",
              question: "Ce tip de limbaj predomină la grupa mică (3 ani)?",
              options: [
                "Limbajul contextual — copilul poate povesti coerent despre evenimente trecute",
                "Limbajul metalingvistic — copilul reflectează asupra regulilor limbii",
                "Limbajul situativ — legat de contextul imediat, cu multe pronume și gesturi",
                "Limbajul formal — adaptat la interlocutor și context",
              ],
              correctIndex: 2,
              explanation:
                "La 3 ani, limbajul este predominant situativ — legat de contextul imediat " +
                "(«aia, acolo, asta»). Copilul nu poate povesti coerent un eveniment trecut " +
                "fără suport vizual, iar comunicarea este predominant cu adultul.",
            },
            {
              id: "edu-lc-oral-1-mq6f",
              type: "multiple-choice",
              question:
                "Ce factor este cel mai puternic predictor al vocabularului copilului, conform studiilor recente?",
              options: [
                "Numărul de ore petrecute în fața televizorului",
                "Numărul de cuvinte adresate copilului zilnic de către adulți",
                "Numărul de jucării din camera copilului",
                "Vârsta la care copilul merge la grădiniță",
              ],
              correctIndex: 1,
              explanation:
                "Studiile arată că numărul de cuvinte adresate copilului zilnic (nu cele auzite " +
                "la TV) este cel mai puternic predictor al vocabularului. Interacțiunea directă " +
                "cu adultul, nu expunerea pasivă, dezvoltă limbajul.",
            },
            {
              id: "edu-lc-oral-1-mq6g",
              type: "fill-blank",
              question:
                "Suprageneralizarea regulilor gramaticale (ex: «am puneam» în loc de «am pus») este o «greșeală ___» — semn de progres.",
              correctAnswers: ["inteligentă", "inteligenta", "Inteligentă", "Inteligenta"],
              explanation:
                "Suprageneralizarea este numită «greșeală inteligentă» deoarece demonstrează " +
                "că copilul a internalizat regula gramaticală și o aplică logic — chiar și acolo " +
                "unde limba are excepții. Este un semn de progres, nu de regres.",
            },
          ],
        },
      },

      // --- Chapter 3: Practica educațională: strategii și activități ---
      {
        id: "edu-lc-oral-1-ch3",
        title: "Practica educațională: strategii și activități",
        duration: "~30 min",
        sections: [
          {
            title: "Domeniul DLC în Curriculum",
            content:
              "În Curriculumul pentru educație timpurie (2019), Domeniul Limbă și Comunicare (DLC) este unul dintre cele cinci domenii experiențiale și are un rol transversal.\n\n" +
              "**Sub-domeniile DLC:**\n" +
              "• **Comunicare receptivă (ascultarea):** Capacitatea de a înțelege mesaje orale, a urma instrucțiuni, a identifica ideea principală dintr-o poveste, a distinge sunete.\n" +
              "• **Comunicare expresivă (vorbirea):** Capacitatea de a exprima idei, sentimente, experiențe prin cuvinte, de a povesti coerent, de a dialoga respectând regulile conversației.\n" +
              "• **Pre-alfabetizare (premisele citirii și scrierii):** Conștiința fonologică, recunoașterea literelor, relația sunet-literă, familiarizarea cu cartea și textul tipărit, tentative de scriere.\n\n" +
              "**Comportamente vizate (exemple orientative):**\n" +
              "• 3-5 ani: Ascultă o poveste de 5-10 minute, răspunde la întrebări despre conținut, participă la conversații, recunoaște rime.\n" +
              "• 5-6 ani: Repovestește cu detalii, formulează mesaje coerente despre experiențe personale, identifică sunete în cuvinte, recunoaște litere din propriul nume, manifestă interes pentru citit.\n\n" +
              "**Integrarea DLC cu alte domenii:**\n" +
              "Limbajul nu se dezvoltă izolat, ci prin toate activitățile zilei:\n" +
              "• **DȘ (Domeniul Științe):** Numărare, descriere, comparare — toate presupun limbaj.\n" +
              "• **DEC (Domeniul Estetic și Creativ):** Cântece, dramatizări, povești create de copii.\n" +
              "• **DPM (Domeniul Psihomotric):** Instrucțiuni verbale în jocuri de mișcare.\n" +
              "• **DOS (Domeniul Om și Societate):** Conversații despre reguli, emoții, relații.\n\n" +
              "**Principii curriculum:**\n" +
              "• Învățarea prin joc este modalitatea fundamentală la vârsta preșcolară.\n" +
              "• Educatoarea planifică activități DLC specifice (povestiri, jocuri didactice, exerciții fonologice) dar stimulează limbajul în toate momentele zilei.\n" +
              "• Evaluarea este continuă, observațională, bazată pe portfolio — nu pe teste standardizate.",
          },
          {
            title: "Rolul educatoarei în stimularea limbajului",
            content:
              "Educatoarea este cel mai important factor de mediu în dezvoltarea limbajului la grădiniță. Strategiile diferă în funcție de vârstă și nevoile individuale ale copilului.\n\n" +
              "**Model lingvistic permanent:**\n" +
              "• Vorbește clar, cu ritm adecvat, articulând corect — copiii imită.\n" +
              "• Folosește vocabular bogat, dar accesibil. Introduce cuvinte noi în context și le explică.\n" +
              "• Formulează propoziții complete, chiar dacă copilul comunică în telegrame verbale.\n\n" +
              "**Tehnica reformulării (expansiunea):**\n" +
              "Cea mai eficientă metodă de corectare indirectă. Copilul spune: «Cățelu fuge mare.» Educatoarea: «Da, cățelul cel mare fuge repede prin curte.» Copilul aude forma corectă și extinsă fără a fi corectat explicit (care ar inhiba comunicarea).\n\n" +
              "**Întrebări deschise vs. închise:**\n" +
              "• Întrebări închise: «Ce culoare are mingea?» — Răspuns: «Roșie.» (un cuvânt)\n" +
              "• Întrebări deschise: «Ce crezi că s-a întâmplat cu mingea?» — Răspuns: o propoziție, o explicație, o poveste.\n" +
              "• Raportul ideal: predominant întrebări deschise, completate cu întrebări de clarificare («De ce crezi asta?», «Cum s-a întâmplat?»).\n\n" +
              "**Strategii pe grupe de vârstă:**\n" +
              "• Grupa mică (3 ani): Repetare frecventă, numire, cântece cu gesturi, povestiri scurte cu imagini mari, dialoguri individuale.\n" +
              "• Grupa mijlocie (4-5 ani): Repovestire, descrieri, ghicitori, jocuri de rol, conversații în grup mic (3-4 copii), carte cu povești mai lungi.\n" +
              "• Grupa mare (5-6 ani): Lectură dialogată, povestire fără suport vizual, dezbatere simplă, proiecte cu documentare, exerciții fonologice, dictare către educatoare.\n\n" +
              "**Povestirea și repovestirea:**\n" +
              "• Povestirea este activitatea DLC cu cel mai mare potențial de dezvoltare a limbajului.\n" +
              "• Etape: ascultare → întrebări de înțelegere → repovestire cu suport (imagini, păpuși) → repovestire liberă → creare de povești.\n" +
              "• Beneficii: vocabular, structuri gramaticale complexe, narațiune, imaginație, atenție.\n\n" +
              "**Jocul de rol și dramatizarea:**\n" +
              "• În jocul de rol, copilul exersează registre lingvistice diferite (doctor, mamă, vânzător), negociază cu partenerii, rezolvă conflicte verbal.\n" +
              "• Dramatizarea unei povești dezvoltă: memoria verbală, expresivitatea, dialogul, secvențialitatea narativă.\n\n" +
              "**Gimnastica fono-articulatorie:**\n" +
              "Exerciții zilnice de 3-5 minute pentru musculatura orofacială:\n" +
              "• Exerciții cu limba: limba sus-jos, stânga-dreapta, «ceasul» (limba face cercuri), «calul» (pocnit din limbă).\n" +
              "• Exerciții cu buzele: zâmbet larg → buze rotunjite, vibrarea buzelor (brrr), suflat în lumânare.\n" +
              "• Exerciții de suflu: suflat în paie, balonaș de săpun, transport de bile ușoare prin suflu.\n" +
              "• Se fac în fiecare zi, de preferat dimineața, în formă ludică (joc, poveste).\n\n" +
              "**Mediul print-rich (bogat în text tipărit):**\n" +
              "• Etichetarea obiectelor din sala de grupă cu numele lor scrise cu litere mari.\n" +
              "• Colțul de lectură: cărți accesibile, la nivelul copiilor, schimbate periodic, diverse ca gen.\n" +
              "• Afișarea lucrărilor copiilor cu text dictat de ei și scris de educatoare.\n" +
              "• Panouri cu «Cuvântul zilei», «Povestea noastră», calendarul zilei cu text.",
          },
        ],
        examples: [
          {
            title: "Joc de rol «La doctor»",
            description:
              "Educatoarea amenajează colțul tematic «Cabinetul medical» cu truse de doctor, " +
              "halate, jucării. Copiii joacă roluri: doctor, pacient, asistent. Educatoarea modelează " +
              "dialogul: «Bună ziua, ce vă supără?», «Deschideți gura, vă rog.», «Vă prescriu un " +
              "medicament.» Copiii exersează registre formale, vocabular specific și formulări de politețe.",
            context: "Grupa mijlocie-mare (4-6 ani), joc liber tematic, 20-30 minute",
          },
          {
            title: "Gimnastica fono-articulatorie «Povestea limbii»",
            description:
              "Educatoarea povestește o scurtă istorie despre «Limba», personificată: «Limba s-a trezit " +
              "dimineața și s-a întins (limba afară, sus-jos). A privit în stânga și în dreapta. " +
              "A bătut la ușă (poc-poc cu limba în dinți). A ieșit la plimbare și a întâlnit calul " +
              "(pocnit din limbă). A mâncat dulceață de pe buze (limbă pe buze, circular).» Copiii " +
              "imită toate mișcările. Se face zilnic, 3-5 minute.",
            context: "Toate grupele, exercițiu zilnic dimineața, 3-5 minute",
          },
          {
            title: "Lectura dialogată (tehnica PEER)",
            description:
              "Educatoarea citește «Ursul păcălit de vulpe» unui grup de 4-5 copii. Folosește " +
              "tehnica PEER: Pune o întrebare despre imagine («Ce face vulpea aici?»), Evaluează " +
              "răspunsul copilului, Extinde răspunsul («Da, vulpea se ascunde după copac, pentru " +
              "că vrea să-l păcălească pe urs»), Repetă — cere copilului să repete propoziția " +
              "extinsă. La a doua citire, copiii «citesc» ei, cu suport de imagini.",
            context: "Grupa mare (5-6 ani), activitate DLC în grup mic, 20-25 minute",
          },
        ],
        keyPoints: [
          { text: "DLC are 3 sub-domenii: comunicare receptivă, comunicare expresivă, pre-alfabetizare", important: true },
          { text: "Educatoarea folosește tehnica expansiunii: reformulează fără a corecta direct" },
          { text: "Jocul de rol și povestirea sunt cele mai eficiente mijloace de dezvoltare a limbajului" },
          { text: "Gimnastica fono-articulatorie zilnică (3-5 min) susține dezvoltarea pronunției corecte", important: true },
          { text: "Lectura dialogată (PEER) dezvoltă simultan vocabular, gramatică și comprehensiune" },
        ],
        resources: [
          {
            title: "Curriculumul pentru educație timpurie — Domeniul DLC",
            url: "https://www.edu.ro/sites/default/files/Curriculum%20ET_2019.pdf",
            source: "edu.ro",
            description: "Document oficial cu competențe și comportamente vizate per grupă de vârstă",
          },
          {
            title: "Strategii de stimulare a limbajului la grădiniță",
            url: "https://www.didactic.ro/revista-cadrelor-didactice/strategii-de-stimulare-a-limbajului-la-prescolari",
            source: "didactic.ro",
            description: "Tehnici practice: expansiune, întrebări deschise, povestire, joc de rol",
          },
          {
            title: "Gimnastica fono-articulatorie — exerciții practice",
            url: "https://iteach.ro/experientedidactice/gimnastica-fono-articulatorie-la-prescolari",
            source: "iteach.ro",
            description: "Ghid pas cu pas pentru exerciții zilnice de pronunție",
          },
        ],
        miniQuiz: {
          questions: [
            {
              id: "edu-lc-oral-1-mq7",
              type: "multiple-choice",
              question: "Care este cel mai important principiu al corectării limbajului la preșcolari?",
              options: [
                "Corectarea directă și repetarea cuvântului corect de mai multe ori",
                "Reformularea enunțului în forma corectă, fără a atrage atenția asupra greșelii",
                "Ignorarea completă a greșelilor",
                "Penalizarea greșelilor pentru a motiva copilul",
              ],
              correctIndex: 1,
              explanation:
                "Tehnica expansiunii/reformulării este cea mai eficientă: educatoarea repetă " +
                "enunțul în forma corectă și extinsă, natural, fără a corecta direct " +
                "(ceea ce ar inhiba comunicarea).",
            },
            {
              id: "edu-lc-oral-1-mq8",
              type: "true-false",
              question: "Evaluarea limbajului la grădiniță se face prin teste standardizate.",
              correct: false,
              explanation:
                "Conform curriculumului, evaluarea la grădiniță este continuă, observațională, " +
                "bazată pe portfolio — nu pe teste standardizate. Educatoarea observă și " +
                "documentează progresul fiecărui copil.",
            },
            {
              id: "edu-lc-oral-1-mq9",
              type: "multiple-choice",
              question: "Ce dezvoltă tehnica PEER de lectură dialogată?",
              options: [
                "Doar vocabularul",
                "Doar abilitățile de scriere",
                "Simultan vocabular, gramatică și comprehensiune",
                "Doar pronunția corectă",
              ],
              correctIndex: 2,
              explanation:
                "Tehnica PEER (Pune întrebare, Evaluează, Extinde, Repetă) dezvoltă " +
                "simultan vocabularul (cuvinte noi din carte), gramatica (prin reformularea " +
                "extinsă) și comprehensiunea (prin întrebări despre conținut).",
            },
            {
              id: "edu-lc-oral-1-mq9a",
              type: "true-false",
              question:
                "Întrebările deschise («Ce crezi că s-a întâmplat?») sunt mai eficiente pentru dezvoltarea limbajului decât cele închise («Ce culoare are mingea?»).",
              correct: true,
              explanation:
                "Întrebările deschise stimulează răspunsuri elaborate (propoziții, explicații, povești), " +
                "în timp ce cele închise permit răspunsuri de un singur cuvânt. Raportul ideal include " +
                "predominant întrebări deschise, completate cu întrebări de clarificare.",
            },
            {
              id: "edu-lc-oral-1-mq9b",
              type: "multiple-choice",
              question: "Cât timp ar trebui să dureze zilnic gimnastica fono-articulatorie?",
              options: [
                "1 minut",
                "3-5 minute",
                "15-20 minute",
                "30 minute",
              ],
              correctIndex: 1,
              explanation:
                "Gimnastica fono-articulatorie se face zilnic, 3-5 minute, de preferat dimineața, " +
                "în formă ludică (joc, poveste). Include exerciții cu limba, buzele și suflul.",
            },
            {
              id: "edu-lc-oral-1-mq9c",
              type: "fill-blank",
              question:
                "Activitatea DLC cu cel mai mare potențial de dezvoltare a limbajului este ___.",
              correctAnswers: ["povestirea", "Povestirea", "povestirea și repovestirea", "povestirea/repovestirea"],
              explanation:
                "Povestirea este activitatea DLC cu cel mai mare potențial: dezvoltă vocabularul, " +
                "structurile gramaticale complexe, narațiunea, imaginația și atenția. Etapele: " +
                "ascultare → întrebări → repovestire cu suport → repovestire liberă → creare de povești.",
            },
            {
              id: "edu-lc-oral-1-mq9d",
              type: "multiple-choice",
              question: "Ce strategie de stimulare a limbajului este recomandată pentru grupa mică (3 ani)?",
              options: [
                "Lectură dialogată și proiecte cu documentare",
                "Dezbatere simplă și dictare către educatoare",
                "Repetare frecventă, numire, cântece cu gesturi, povestiri scurte cu imagini mari",
                "Exerciții fonologice sistematice și povestire fără suport vizual",
              ],
              correctIndex: 2,
              explanation:
                "Pentru grupa mică (3 ani) se recomandă strategii adaptate: repetare frecventă, " +
                "numire, cântece cu gesturi, povestiri scurte cu imagini mari și dialoguri individuale. " +
                "Strategiile mai complexe sunt pentru grupa mare.",
            },
            {
              id: "edu-lc-oral-1-mq9e",
              type: "true-false",
              question:
                "Mediul print-rich presupune doar existența unui colț de lectură cu cărți.",
              correct: false,
              explanation:
                "Mediul print-rich (bogat în text tipărit) include mai multe elemente: etichetarea " +
                "obiectelor din sală, colțul de lectură cu cărți diverse, afișarea lucrărilor copiilor " +
                "cu text dictat de ei și panouri cu «Cuvântul zilei», «Povestea noastră» etc.",
            },
            {
              id: "edu-lc-oral-1-mq9f",
              type: "multiple-choice",
              question:
                "Ce presupune principiul învățării prin joc în curriculumul pentru educație timpurie?",
              options: [
                "Copiii se joacă liber fără nicio intervenție a educatoarei",
                "Jocul este modalitatea fundamentală de învățare la vârsta preșcolară",
                "Jocul se folosește doar la activitățile de educație fizică",
                "Jocul înlocuiește complet activitățile structurate",
              ],
              correctIndex: 1,
              explanation:
                "Conform curriculumului, învățarea prin joc este modalitatea fundamentală la " +
                "vârsta preșcolară. Educatoarea planifică activități DLC specifice, dar stimulează " +
                "limbajul și prin jocuri didactice, jocuri de rol și alte forme de joc.",
            },
            {
              id: "edu-lc-oral-1-mq9g",
              type: "fill-blank",
              question:
                "Cele 3 sub-domenii ale DLC sunt: comunicare receptivă, comunicare expresivă și ___.",
              correctAnswers: ["pre-alfabetizare", "prealfabetizare", "Pre-alfabetizare", "pre-alfabetizarea", "prealfabetizarea"],
              explanation:
                "DLC are 3 sub-domenii: comunicare receptivă (ascultarea), comunicare expresivă " +
                "(vorbirea) și pre-alfabetizare (premisele citirii și scrierii: conștiință fonologică, " +
                "recunoașterea literelor, familiarizarea cu textul tipărit).",
            },
          ],
        },
      },

      // --- Chapter 4: Provocări, dificultăți și integrare ---
      {
        id: "edu-lc-oral-1-ch4",
        title: "Provocări, dificultăți și integrare",
        duration: "~25 min",
        sections: [
          {
            title: "Dificultăți de limbaj la vârsta preșcolară",
            content:
              "Educatoarea este adesea prima care observă dificultățile de limbaj, deoarece vede copilul în interacțiune cu covârstnicii. Cunoașterea diferenței dintre variația normală și semnele de alarmă este esențială.\n\n" +
              "**Dislalia (tulburare de pronunție):**\n" +
              "• Dislalia fiziologică: la 3-4 ani, este normal ca unele sunete să fie pronunțate incorect (r, ș, j, ț, ce/ci, grupuri consonantice). Aparatul fono-articulator este încă imatur.\n" +
              "• Dislalia patologică: dacă la 5 ani persistă erori multiple de pronunție sau dacă vorbirea este neinteligibilă pentru persoane din afara familiei, este necesară evaluare logopedică.\n" +
              "• Tipuri frecvente în română: rotacismul (r → l), sigmatismul (s, z, ș, j pronunțate incorect), betacismul (b → p sau invers).\n\n" +
              "**Întârzierea în dezvoltarea limbajului:**\n" +
              "• Semne de alarmă: la 2 ani — vocabular sub 50 de cuvinte și absența combinațiilor de 2 cuvinte; la 3 ani — propoziții sub 3 cuvinte și limbaj neinteligibil pentru străini; la 4 ani — nu poate povesti o întâmplare simplă.\n" +
              "• Cauze posibile: hipoacuzia (scăderea auzului), tulburare de spectru autist, dizabilitate intelectuală, mediu nestimulativ, bilingvism (temporar, nu patologic).\n" +
              "• Important: «Vorbește când o vrea el» și «E leneș» nu sunt explicații — întârzierea trebuie evaluată profesional.\n\n" +
              "**Disfluența (bâlbâiala):**\n" +
              "• La 3-4 ani, episoadele de disfluență (repetiții de silabe, ezitări) sunt frecvente și de obicei tranzitorii — limbajul se dezvoltă mai repede decât capacitatea motorie de articulare.\n" +
              "• Nu se corectează copilul, nu se cere «vorbește mai rar», nu se completează cuvintele — se ascultă calm, cu contact vizual.\n" +
              "• Dacă disfluența persistă peste 6 luni, se intensifică sau este însoțită de tensiune musculară facială, se recomandă evaluare logopedică.\n\n" +
              "**Când trimitem la logoped?**\n" +
              "Referirea este necesară când:\n" +
              "• La 3 ani: copilul nu formează propoziții de 2-3 cuvinte sau nu este înțeles de persoane din afara familiei.\n" +
              "• La 4 ani: nu poate povesti o întâmplare simplă sau are erori gramaticale masive.\n" +
              "• La 5 ani: persistă dislalia multiplă (mai mult de 2-3 sunete afectate).\n" +
              "• La orice vârstă: regres brusc al limbajului, absența intenției comunicative, lipsa contactului vizual.\n\n" +
              "**Colaborarea cu familia:**\n" +
              "• Educatoarea informează părinții cu tact, fără a diagnostica, oferind observații concrete: «Am remarcat că Andrei...».\n" +
              "• Recomandări pentru acasă: vorbire frecventă cu copilul (nu doar «comenzi»), citit zilnic, limitarea ecranelor, jocuri verbale.\n" +
              "• Menținerea legăturii cu logopedul: exercițiile recomandate pot fi integrate în activitățile de la grupă.",
          },
          {
            title: "Integrarea activităților de limbaj în rutina zilnică",
            content:
              "Dezvoltarea limbajului nu are loc doar în cele 20-30 de minute alocate activității DLC. Fiecare moment al zilei la grădiniță este o oportunitate lingvistică.\n\n" +
              "**Primirea copiilor (dimineața):**\n" +
              "• Salutul individualizat: «Bună dimineața, Maria! Ce ai făcut ieri după-amiază?» — deschide o micro-conversație.\n" +
              "• Panoul de prezență: copilul își caută numele, «citește» numele colegilor.\n" +
              "• Calendarul zilei: «Azi este luni, 3 martie. Ce credeți că vom face azi?».\n\n" +
              "**Întâlnirea de dimineață (morning meeting):**\n" +
              "• Fiecare copil are un moment de vorbire: «Vreau să vă povestesc...».\n" +
              "• Regulile conversației: ascultăm, nu întrerupem, punem întrebări.\n" +
              "• Jocuri scurte de limbaj: ghicitori, rime, «telefonul fără fir».\n\n" +
              "**Tranzițiile între activități:**\n" +
              "• Cântece de tranziție cu text: «Strângem, strângem jucării...».\n" +
              "• Instrucțiuni verbale complexificate progresiv: de la «Puneți jucăriile în cutie» la «Puneți cuburile roșii pe raftul de sus și cărțile pe masă».\n" +
              "• Numărători, versuri, frământări de limbă în timp ce se așteaptă.\n\n" +
              "**Masa (gustare, prânz):**\n" +
              "• Numirea alimentelor, descrierea gustului, culorii, texturii.\n" +
              "• Conversații libere la masă — educatoarea stă cu copiii și conversează.\n" +
              "• Formularea politicoasă: «Îmi dai, te rog...», «Mulțumesc», «Poftă bună!».\n\n" +
              "**Jocul liber:**\n" +
              "• Educatoarea se alătură jocului și modelează limbajul: narează acțiunile, pune întrebări deschise, extinde enunțurile copiilor.\n" +
              "• Colțurile tematice (bucătărie, doctor, magazin) sunt laboratoare naturale de limbaj.\n" +
              "• Nu se intervine excesiv — copiii trebuie să exerseze și comunicarea între ei.\n\n" +
              "**Activitățile în aer liber / plimbări:**\n" +
              "• Observarea și numirea: copaci, păsări, vehicule, magazine — vocabular contextual.\n" +
              "• «Jocul celor 5 simțuri»: «Ce vezi? Ce auzi? Ce simți?» — vocabular senzorial.\n" +
              "• Povestirea la întoarcere: «Ce am văzut azi la plimbare?» — limbaj contextual.\n\n" +
              "**Momentele de liniștire / relaxare:**\n" +
              "• Ascultarea de povești audio sau povestirea cu voce joasă.\n" +
              "• «Jurnalul zilei»: copilul dictează, educatoarea scrie o propoziție despre ce i-a plăcut azi.\n\n" +
              "**Principiu cheie:** Cantitatea și calitatea limbajului adresat copilului de către adult (nu limbajul din fundal, nu ecranele) este cel mai puternic predictor al dezvoltării lingvistice. Fiecare interacțiune contează.",
          },
        ],
        examples: [
          {
            title: "Proiect tematic «Povestea mea preferată»",
            description:
              "Proiect de o săptămână: Luni — fiecare copil aduce de acasă cartea preferată și " +
              "o prezintă grupei (titlu, personaje, de ce le place). Marți — copiii desenează " +
              "scena favorită și dictează educatoarei 2-3 propoziții. Miercuri — ascultăm " +
              "2 povești alese de copii, cu repovestire. Joi — copiii creează o poveste nouă " +
              "în grup, educatoarea scrie. Vineri — dramatizăm povestea creată.",
            context: "Grupa mare (5-6 ani), proiect săptămânal integrat (DLC + DEC), 30 min/zi",
          },
          {
            title: "Integrarea limbajului la masă: «Descrie gustul»",
            description:
              "La gustare, educatoarea cere copiilor să descrie ce mănâncă: «Cum e mărul? " +
              "E dulce sau acru? E tare sau moale? Ce culoare are pe dinăuntru?». Copiii " +
              "exersează vocabular senzorial (gustos, crocant, zemos, aromat) și formulează " +
              "propoziții descriptive. Activitate integrată natural, fără timp suplimentar.",
            context: "Toate grupele, moment de rutină (gustare/prânz), 5-10 minute",
          },
        ],
        keyPoints: [
          { text: "Dislalia fiziologică (pronunție imprecisă la 3-4 ani) este normală; la 5 ani, dacă persistă, se recomandă logoped", important: true },
          { text: "Mediul trebuie să fie bogat în print: etichete, colț de lectură, lucrări afișate" },
          { text: "Limbajul se dezvoltă în TOATE momentele zilei, nu doar la activitățile DLC planificate", important: true },
        ],
        resources: [
          {
            title: "Când ar trebui să meargă copilul la logoped?",
            url: "https://www.reginamaria.ro/articole-medicale/cand-trebuie-sa-mergi-cu-copilul-la-logoped",
            source: "reginamaria.ro",
            description: "Ghid medical: semne de alarmă și criterii de referire pe vârste",
          },
          {
            title: "Stimularea limbajului în rutina zilnică la grădiniță",
            url: "https://iteach.ro/experientedidactice/stimularea-limbajului-in-activitatile-de-rutina",
            source: "iteach.ro",
            description: "Idei practice pentru integrarea limbajului în fiecare moment al zilei",
          },
        ],
        miniQuiz: {
          questions: [
            {
              id: "edu-lc-oral-1-mq10",
              type: "multiple-choice",
              question: "Cum ar trebui să reacționeze educatoarea la disfluența (bâlbâiala) unui copil de 3 ani?",
              options: [
                "Să-i ceară să vorbească mai rar și mai clar",
                "Să-i completeze cuvintele pentru a-l ajuta",
                "Să-l asculte calm, cu contact vizual, fără a-l corecta",
                "Să-l trimită imediat la logoped",
              ],
              correctIndex: 2,
              explanation:
                "La 3-4 ani, disfluența este frecvent tranzitorie. Educatoarea ascultă " +
                "calm, cu contact vizual, fără a corecta sau completa. Dacă persistă " +
                "peste 6 luni, se recomandă evaluare logopedică.",
            },
            {
              id: "edu-lc-oral-1-mq11",
              type: "true-false",
              question: "Dezvoltarea limbajului are loc doar în cele 20-30 de minute ale activității DLC.",
              correct: false,
              explanation:
                "Fiecare moment al zilei la grădiniță este o oportunitate lingvistică: " +
                "primirea copiilor, masa, tranzițiile, jocul liber, plimbările. Cantitatea " +
                "și calitatea vorbirii adresate copilului contează cel mai mult.",
            },
            {
              id: "edu-lc-oral-1-mq12",
              type: "multiple-choice",
              question: "Ce recomandare primesc părinții pentru stimularea limbajului acasă?",
              options: [
                "Să lase copilul să se uite la TV cât mai mult pentru a auzi cuvinte noi",
                "Să vorbească frecvent cu copilul, să citească zilnic și să limiteze ecranele",
                "Să corecteze fiecare greșeală și să ceară repetarea cuvintelor corecte",
                "Să nu vorbească cu copilul până la 3 ani, pentru a nu-l încurca",
              ],
              correctIndex: 1,
              explanation:
                "Cele mai eficiente recomandări: vorbire frecventă cu copilul (nu doar comenzi), " +
                "citit zilnic, limitarea ecranelor și jocuri verbale. Limbajul de la TV nu " +
                "contează — doar interacțiunea directă.",
            },
            {
              id: "edu-lc-oral-1-mq12a",
              type: "multiple-choice",
              question: "Ce este rotacismul?",
              options: [
                "Pronunțarea incorectă a sunetelor s, z, ș, j",
                "Pronunțarea incorectă a sunetului r (de exemplu r → l)",
                "Inversarea sunetelor b și p",
                "Repetarea involuntară a silabelor",
              ],
              correctIndex: 1,
              explanation:
                "Rotacismul este un tip de dislalie care constă în pronunțarea incorectă a sunetului " +
                "[r], frecvent înlocuit cu [l]. Sigmatismul se referă la sunetele s, z, ș, j, " +
                "iar betacismul la inversarea b/p.",
            },
            {
              id: "edu-lc-oral-1-mq12b",
              type: "true-false",
              question:
                "Dacă un copil de 3-4 ani prezintă episoade de bâlbâială (disfluență), educatoarea trebuie să-i ceară «vorbește mai rar».",
              correct: false,
              explanation:
                "Nu se corectează copilul, nu se cere «vorbește mai rar», nu se completează " +
                "cuvintele. Se ascultă calm, cu contact vizual. La 3-4 ani, disfluența este " +
                "frecvent tranzitorie — limbajul se dezvoltă mai repede decât capacitatea motorie.",
            },
            {
              id: "edu-lc-oral-1-mq12c",
              type: "multiple-choice",
              question: "La ce vârstă persistența dislaliei multiple (mai mult de 2-3 sunete) necesită referire la logoped?",
              options: [
                "La 2 ani",
                "La 3 ani",
                "La 5 ani",
                "La 7 ani",
              ],
              correctIndex: 2,
              explanation:
                "La 5 ani, dacă persistă dislalia multiplă (mai mult de 2-3 sunete afectate), " +
                "se recomandă evaluare logopedică. La 3-4 ani, dislalia fiziologică este normală " +
                "— aparatul fono-articulator este încă imatur.",
            },
            {
              id: "edu-lc-oral-1-mq12d",
              type: "fill-blank",
              question:
                "Educatoarea informează părinții despre dificultățile de limbaj cu tact, fără a ___, oferind observații concrete.",
              correctAnswers: ["diagnostica", "Diagnostica", "pune diagnostice"],
              explanation:
                "Educatoarea nu diagnostichează — oferă observații concrete: «Am remarcat că Andrei...». " +
                "Diagnosticul este de competența logopedului sau medicului specialist.",
            },
            {
              id: "edu-lc-oral-1-mq12e",
              type: "true-false",
              question:
                "Întâlnirea de dimineață (morning meeting) este o oportunitate de dezvoltare a limbajului.",
              correct: true,
              explanation:
                "Întâlnirea de dimineață este un moment excelent pentru limbaj: fiecare copil " +
                "are un moment de vorbire, se exersează regulile conversației (ascultăm, nu " +
                "întrerupem, punem întrebări) și se joacă jocuri scurte de limbaj.",
            },
            {
              id: "edu-lc-oral-1-mq12f",
              type: "multiple-choice",
              question: "Care este principiul cheie al stimulării limbajului la grădiniță?",
              options: [
                "Copiii trebuie expuși la cât mai multe ecrane educative",
                "Cantitatea și calitatea limbajului adresat copilului de adult contează cel mai mult",
                "Limbajul se dezvoltă doar prin activități DLC structurate",
                "Copiii trebuie corectați imediat la fiecare greșeală",
              ],
              correctIndex: 1,
              explanation:
                "Principiul cheie: cantitatea și calitatea limbajului adresat copilului de către " +
                "adult (nu limbajul din fundal, nu ecranele) este cel mai puternic predictor al " +
                "dezvoltării lingvistice. Fiecare interacțiune contează.",
            },
            {
              id: "edu-lc-oral-1-mq12g",
              type: "fill-blank",
              question:
                "La 3 ani, dacă copilul nu formează propoziții de 2-3 cuvinte sau nu este înțeles de persoane din afara familiei, se recomandă evaluare ___.",
              correctAnswers: ["logopedică", "logopedica", "Logopedică", "la logoped"],
              explanation:
                "Referirea la logoped este necesară la 3 ani când copilul nu formează propoziții " +
                "de 2-3 cuvinte sau nu este înțeles de persoane din afara familiei. Afirmații ca " +
                "«Vorbește când o vrea el» nu sunt explicații — întârzierea trebuie evaluată profesional.",
            },
          ],
        },
      },
    ],

    // === QUIZ VARIANTS ===
    quizVariants: [
      // --- Varianta A: Teorie și concepte ---
      {
        variantId: "edu-lc-oral-1-v1",
        label: "Varianta A — Teorie și concepte",
        description: "Focus pe Piaget, Vygotsky, etapele dezvoltării și componentele limbajului",
        questions: [
          // Reutilizate din quiz-ul existent
          {
            id: "edu-lc-oral-1-v1-q1",
            type: "multiple-choice",
            question: "Care este vocabularul activ mediu al unui copil de 6 ani?",
            options: ["500 cuvinte", "1.000 cuvinte", "2.500-3.000 cuvinte", "5.000 cuvinte"],
            correctIndex: 2,
            explanation:
              "La vârsta de 6 ani, vocabularul activ al copilului ajunge la aproximativ 2.500-3.000 de cuvinte, " +
              "de la ~1.000 la vârsta de 3 ani.",
          },
          {
            id: "edu-lc-oral-1-v1-q2",
            type: "true-false",
            question: "Limbajul egocentric dispare complet după vârsta de 4 ani.",
            correct: false,
            explanation:
              "Conform lui Piaget, limbajul egocentric persistă până la vârsta de 6-7 ani, " +
              "deși scade progresiv pe măsură ce limbajul socializat devine dominant.",
          },
          {
            id: "edu-lc-oral-1-v1-q3",
            type: "fill-blank",
            question: "Stadiul în care copilul folosește un singur cuvânt cu valoare de propoziție se numește stadiul ___.",
            correctAnswers: ["holofrazic", "holofrastic", "holofraza"],
            explanation:
              "Stadiul holofrazic apare în jurul vârstei de 12-18 luni, când un cuvânt " +
              "precum «apă» poate însemna «vreau apă» sau «asta e apă».",
          },
          {
            id: "edu-lc-oral-1-v1-q4",
            type: "multiple-choice",
            question: "Conform lui Piaget, limbajul egocentric la preșcolari reflectă:",
            options: [
              "O tulburare de comunicare",
              "Gândirea egocentrică specifică stadiului preoperațional",
              "Influența mediului social asupra copilului",
              "Capacitatea metalingvistică avansată",
            ],
            correctIndex: 1,
            explanation:
              "Piaget consideră că limbajul egocentric (monolog, monolog colectiv, ecolalie) reflectă " +
              "gândirea egocentrică specifică stadiului preoperațional (2-7 ani).",
          },
          {
            id: "edu-lc-oral-1-v1-q5",
            type: "fill-blank",
            question: "Conceptul introdus de Vygotsky care descrie distanța dintre ce poate face copilul singur și ce poate face cu sprijin se numește Zona ___ Dezvoltări.",
            correctAnswers: ["Proximei", "proximei", "Proxime", "proxime"],
            explanation:
              "Zona Proximei Dezvoltări (ZPD) este conceptul central al lui Vygotsky.",
          },
          {
            id: "edu-lc-oral-1-v1-q6",
            type: "multiple-choice",
            question: "Care dintre următoarele NU este una dintre cele 4 componente ale limbajului?",
            options: ["Fonologia", "Pragmatica", "Caligrafia", "Morfosintaxa"],
            correctIndex: 2,
            explanation:
              "Cele 4 componente ale limbajului sunt: fonologia, vocabularul/lexicul, " +
              "gramatica/morfosintaxa și pragmatica. Caligrafia se referă la scriere.",
          },
          {
            id: "edu-lc-oral-1-v1-q7",
            type: "multiple-choice",
            question: "Limbajul «telegrafic» este caracteristic perioadei:",
            options: ["0-12 luni", "18-24 luni", "3-4 ani", "5-6 ani"],
            correctIndex: 1,
            explanation:
              "Stadiul telegrafic (18-24 luni) se caracterizează prin combinații de 2-3 cuvinte " +
              "fără elemente gramaticale: «mama papă», «dă minge».",
          },
          {
            id: "edu-lc-oral-1-v1-q8",
            type: "true-false",
            question: "La 5-6 ani, vocabularul pasiv al copilului poate ajunge la ~10.000 de cuvinte.",
            correct: true,
            explanation:
              "Vocabularul pasiv este de 2-3 ori mai mare decât cel activ. Cu un vocabular activ " +
              "de ~3.500 cuvinte la 5-6 ani, vocabularul pasiv poate ajunge la ~10.000.",
          },
          // Întrebări noi pentru varianta A
          {
            id: "edu-lc-oral-1-v1-q9",
            type: "multiple-choice",
            question: "Ce rol atribuie Vygotsky «vorbirii private» a copilului?",
            options: [
              "Este un deficit de socializare care trebuie corectat",
              "Este un instrument de autoreglare care se va interioriza",
              "Este o formă de joc fără funcție cognitivă",
              "Este un semn de tulburare de comunicare",
            ],
            correctIndex: 1,
            explanation:
              "Vygotsky consideră vorbirea privată un instrument de autoreglare — copilul " +
              "planifică și își controlează acțiunile prin vorbire cu sine, care treptat " +
              "se interiorizează devenind gândire verbală.",
          },
          {
            id: "edu-lc-oral-1-v1-q10",
            type: "true-false",
            question: "Supraextinderea semantică (ex: «ham-ham» pentru orice animal) este un semn de regres cognitiv.",
            correct: false,
            explanation:
              "Supraextinderea semantică este o etapă normală în stadiul holofrazic (12-18 luni). " +
              "Copilul aplică cuvintele cunoscute la categorii prea largi — este un semn de " +
              "progres în categorizare, nu de regres.",
          },
          {
            id: "edu-lc-oral-1-v1-q11",
            type: "multiple-choice",
            question: "Lallațiunea (silabe repetate: ba-ba, ma-ma) apare în perioada:",
            options: ["0-2 luni", "2-4 luni", "6-9 luni", "12-18 luni"],
            correctIndex: 2,
            explanation:
              "Lallațiunea apare la 6-9 luni. Copilul repetă silabe (ba-ba, ma-ma, da-da), " +
              "iar intonația începe să semene cu limba maternă.",
          },
          {
            id: "edu-lc-oral-1-v1-q12",
            type: "multiple-choice",
            question: "Care afirmație descrie corect diferența dintre Piaget și Vygotsky?",
            options: [
              "Piaget: limbajul urmează gândirea; Vygotsky: limbajul modelează gândirea",
              "Piaget: limbajul modelează gândirea; Vygotsky: limbajul urmează gândirea",
              "Ambii consideră că limbajul se dezvoltă independent de gândire",
              "Piaget: limbajul are origine socială; Vygotsky: limbajul are origine biologică",
            ],
            correctIndex: 0,
            explanation:
              "Piaget consideră limbajul subordonat gândirii (reflectă stadiul cognitiv). " +
              "Vygotsky consideră limbajul un instrument care modelează activ gândirea " +
              "(originea socială, ZPD, scaffolding).",
          },
        ],
      },

      // --- Varianta B: Practică educațională ---
      {
        variantId: "edu-lc-oral-1-v2",
        label: "Varianta B — Practică educațională",
        description: "Focus pe DLC, strategii didactice, activități și corectarea limbajului",
        questions: [
          // Reutilizate
          {
            id: "edu-lc-oral-1-v2-q1",
            type: "multiple-choice",
            question: "Ce tehnică folosește educatoarea când reformulează enunțul copilului fără a-l corecta direct?",
            options: ["Tehnica demonstrației", "Tehnica expansiunii", "Tehnica problematizării", "Tehnica modelării"],
            correctIndex: 1,
            explanation:
              "Tehnica expansiunii constă în reformularea enunțului copilului într-o formă corectă și " +
              "extinsă, fără corecție directă.",
          },
          {
            id: "edu-lc-oral-1-v2-q2",
            type: "true-false",
            question: "Suprageneralizarea regulilor gramaticale (ex: «am puneam») este un semn de tulburare de limbaj.",
            correct: false,
            explanation:
              "Suprageneralizarea este o etapă normală care demonstrează că copilul a internalizat regula.",
          },
          {
            id: "edu-lc-oral-1-v2-q3",
            type: "multiple-choice",
            question: "Care sunt cele 3 sub-domenii ale DLC în Curriculumul pentru educație timpurie?",
            options: [
              "Citire, scriere, ascultare",
              "Comunicare receptivă, comunicare expresivă, pre-alfabetizare",
              "Fonologie, vocabular, gramatică",
              "Povestire, conversație, dramatizare",
            ],
            correctIndex: 1,
            explanation:
              "DLC are 3 sub-domenii: comunicare receptivă (ascultarea), comunicare expresivă " +
              "(vorbirea) și pre-alfabetizare (premisele citirii și scrierii).",
          },
          {
            id: "edu-lc-oral-1-v2-q4",
            type: "true-false",
            question: "Când un copil de 3 ani pronunță greșit un cuvânt, educatoarea trebuie să-i ceară să repete cuvântul corect de 3 ori.",
            correct: false,
            explanation:
              "Corectarea directă inhibă comunicarea. Educatoarea folosește tehnica reformulării.",
          },
          {
            id: "edu-lc-oral-1-v2-q5",
            type: "multiple-choice",
            question: "Ce reprezintă acronimul PEER în tehnica lecturii dialogate?",
            options: [
              "Planifică, Elaborează, Evaluează, Recapitulează",
              "Pune întrebare, Evaluează răspuns, Extinde, Repetă",
              "Predă, Exersează, Experimentează, Reflectează",
              "Povestește, Explică, Explorează, Rezumă",
            ],
            correctIndex: 1,
            explanation:
              "PEER: Pune o întrebare, Evaluează răspunsul, Extinde (reformulare completă), Repetă.",
          },
          {
            id: "edu-lc-oral-1-v2-q6",
            type: "true-false",
            question: "Dislalia fiziologică la vârsta de 3-4 ani este considerată normală.",
            correct: true,
            explanation:
              "La 3-4 ani, aparatul fono-articulator este încă imatur. Dacă persistă după 5 ani, " +
              "se recomandă evaluare logopedică.",
          },
          // Întrebări noi pentru varianta B
          {
            id: "edu-lc-oral-1-v2-q7",
            type: "multiple-choice",
            question: "Ce tip de întrebări ar trebui să predomine în interacțiunea educatoarei cu copiii?",
            options: [
              "Întrebări închise, cu răspuns da/nu",
              "Întrebări deschise, care solicită explicații și povestire",
              "Întrebări retorice, fără așteptarea unui răspuns",
              "Întrebări de verificare, cu răspuns corect unic",
            ],
            correctIndex: 1,
            explanation:
              "Întrebările deschise («Ce crezi că s-a întâmplat?», «De ce?») stimulează " +
              "copilul să formuleze propoziții, explicații și narațiuni.",
          },
          {
            id: "edu-lc-oral-1-v2-q8",
            type: "multiple-choice",
            question: "Care este rolul colțurilor tematice (bucătărie, doctor, magazin) din sala de grupă?",
            options: [
              "Sunt doar decorative, fără scop educativ",
              "Sunt laboratoare naturale de limbaj, unde copiii exersează registre lingvistice diferite",
              "Sunt spații unde copiii se joacă în liniște, fără a vorbi",
              "Sunt destinate exclusiv activităților DLC planificate",
            ],
            correctIndex: 1,
            explanation:
              "În colțurile tematice, copiii exersează natural vocabular specific, registre " +
              "formale/informale, negocierea și rezolvarea de conflicte verbal.",
          },
          {
            id: "edu-lc-oral-1-v2-q9",
            type: "true-false",
            question: "Gimnastica fono-articulatorie ar trebui făcută o dată pe săptămână, timp de 30 de minute.",
            correct: false,
            explanation:
              "Gimnastica fono-articulatorie se face zilnic, câte 3-5 minute, de preferat " +
              "dimineața, în formă ludică. Sesiunile scurte și frecvente sunt mai eficiente.",
          },
          {
            id: "edu-lc-oral-1-v2-q10",
            type: "multiple-choice",
            question: "Ce strategie folosim pentru grupa mică (3 ani) la stimularea limbajului?",
            options: [
              "Lectura dialogată și dezbatere",
              "Repetare frecventă, numire, cântece cu gesturi, povestiri scurte cu imagini mari",
              "Proiecte tematice cu documentare și dictare",
              "Exerciții fonologice sistematice și despărțire în silabe",
            ],
            correctIndex: 1,
            explanation:
              "La grupa mică (3 ani): repetare frecventă, numire, cântece cu gesturi, " +
              "povestiri scurte cu imagini mari, dialoguri individuale.",
          },
          {
            id: "edu-lc-oral-1-v2-q11",
            type: "fill-blank",
            question: "Metoda de corectare indirectă a limbajului copilului, prin repetarea enunțului în forma corectă și extinsă, se numește tehnica ___.",
            correctAnswers: ["expansiunii", "reformulării", "reformularii", "expansiune", "reformulare"],
            explanation:
              "Tehnica expansiunii/reformulării: educatoarea repetă enunțul copilului " +
              "într-o formă corectă și extinsă, natural, fără corecție directă.",
          },
          {
            id: "edu-lc-oral-1-v2-q12",
            type: "multiple-choice",
            question: "Când este necesară referirea la logoped?",
            options: [
              "Când copilul de 3 ani nu pronunță perfect sunetul «r»",
              "Când copilul de 5 ani are dislalie multiplă (mai mult de 2-3 sunete afectate)",
              "Când copilul de 4 ani face suprageneralizări gramaticale",
              "Când copilul de 3 ani folosește limbaj egocentric",
            ],
            correctIndex: 1,
            explanation:
              "La 3 ani, impreciziile de pronunție sunt normale (dislalie fiziologică). " +
              "La 5 ani, dacă persistă dislalia multiplă, se recomandă evaluare logopedică.",
          },
        ],
      },

      // --- Varianta C: Evaluare completă ---
      {
        variantId: "edu-lc-oral-1-v3",
        label: "Varianta C — Evaluare completă",
        description: "Mixaj din toate capitolele — teorie, practică și aplicații",
        questions: [
          // Mix din existente
          {
            id: "edu-lc-oral-1-v3-q1",
            type: "fill-blank",
            question: "Stadiul în care copilul folosește un singur cuvânt cu valoare de propoziție se numește stadiul ___.",
            correctAnswers: ["holofrazic", "holofrastic", "holofraza"],
            explanation: "Stadiul holofrazic (12-18 luni): un cuvânt = o propoziție.",
          },
          {
            id: "edu-lc-oral-1-v3-q2",
            type: "multiple-choice",
            question: "Conform lui Piaget, limbajul egocentric la preșcolari reflectă:",
            options: [
              "O tulburare de comunicare",
              "Gândirea egocentrică specifică stadiului preoperațional",
              "Influența mediului social asupra copilului",
              "Capacitatea metalingvistică avansată",
            ],
            correctIndex: 1,
            explanation: "Piaget: limbajul egocentric reflectă gândirea egocentrică din stadiul preoperațional (2-7 ani).",
          },
          {
            id: "edu-lc-oral-1-v3-q3",
            type: "multiple-choice",
            question: "Ce tehnică folosește educatoarea când reformulează enunțul copilului fără a-l corecta direct?",
            options: ["Tehnica demonstrației", "Tehnica expansiunii", "Tehnica problematizării", "Tehnica modelării"],
            correctIndex: 1,
            explanation: "Tehnica expansiunii: reformulare corectă și extinsă, fără corecție directă.",
          },
          {
            id: "edu-lc-oral-1-v3-q4",
            type: "true-false",
            question: "Dislalia fiziologică la vârsta de 3-4 ani este considerată normală.",
            correct: true,
            explanation: "La 3-4 ani, aparatul fono-articulator este imatur. Dacă persistă după 5 ani → logoped.",
          },
          {
            id: "edu-lc-oral-1-v3-q5",
            type: "multiple-choice",
            question: "Tranziția de la limbajul situativ la limbajul contextual la preșcolari înseamnă că:",
            options: [
              "Copilul începe să vorbească doar în contexte formale",
              "Copilul poate comunica clar despre evenimente la care interlocutorul nu a fost prezent",
              "Copilul folosește exclusiv limbajul scris",
              "Copilul renunță la gesturi în comunicare",
            ],
            correctIndex: 1,
            explanation: "Limbajul contextual (5-6 ani) permite povestirea coerentă a evenimentelor trecute/viitoare.",
          },
          // Întrebări noi complexe (aplicative)
          {
            id: "edu-lc-oral-1-v3-q6",
            type: "multiple-choice",
            question: "Un copil de 4 ani spune «Am mergea la parc cu mama». Educatoarea ar trebui să:",
            options: [
              "Să-l corecteze: «Nu se spune mergea, se spune mers»",
              "Să-l ignore, deoarece încă nu poate vorbi corect",
              "Să reformuleze: «A, deci ai mers la parc cu mama! Ce frumos!»",
              "Să-i ceară să repete propoziția corect de 3 ori",
            ],
            correctIndex: 2,
            explanation:
              "Tehnica expansiunii: educatoarea reformulează natural («ai mers la parc cu mama!»), " +
              "oferind modelul corect fără corecție directă care ar inhiba comunicarea.",
          },
          {
            id: "edu-lc-oral-1-v3-q7",
            type: "multiple-choice",
            question: "Care dintre următoarele NU este un sub-domeniu al DLC conform curriculumului?",
            options: [
              "Comunicare receptivă",
              "Comunicare expresivă",
              "Comunicare nonverbală",
              "Pre-alfabetizare",
            ],
            correctIndex: 2,
            explanation:
              "Cele 3 sub-domenii DLC sunt: comunicare receptivă (ascultarea), " +
              "comunicare expresivă (vorbirea) și pre-alfabetizare. Comunicarea " +
              "nonverbală nu este un sub-domeniu separat.",
          },
          {
            id: "edu-lc-oral-1-v3-q8",
            type: "true-false",
            question: "Conștiința metalingvistică (capacitatea de a reflecta asupra limbajului) apare de la vârsta de 2 ani.",
            correct: false,
            explanation:
              "Conștiința metalingvistică (rime, jocuri de cuvinte, reflecția asupra " +
              "structurii limbajului) apare mai târziu, la 5-6 ani, în perioada " +
              "maturizării lingvistice.",
          },
          {
            id: "edu-lc-oral-1-v3-q9",
            type: "multiple-choice",
            question: "Un copil de 5 ani are încă dificultăți cu mai mult de 3 sunete. Ce ar trebui să facă educatoarea?",
            options: [
              "Să aștepte, deoarece este normal până la 7 ani",
              "Să facă doar gimnastică fono-articulatorie zilnică",
              "Să informeze părinții cu tact și să recomande evaluare logopedică",
              "Să interzică copilului să vorbească în grup până își corectează pronunția",
            ],
            correctIndex: 2,
            explanation:
              "La 5 ani, dislalia multiplă (mai mult de 2-3 sunete) necesită evaluare " +
              "logopedică. Educatoarea informează părinții cu tact, oferind observații " +
              "concrete, fără a diagnostica.",
          },
          {
            id: "edu-lc-oral-1-v3-q10",
            type: "fill-blank",
            question: "Conceptul lui Vygotsky prin care adultul oferă sprijin temporar copilului în Zona Proximei Dezvoltări se numește ___.",
            correctAnswers: ["scaffolding", "eșafodaj", "esafodaj"],
            explanation:
              "Scaffolding (eșafodaj) este sprijinul temporar oferit de adult în ZPD — " +
              "reformulare, întrebări ghidate, extinderea enunțului — care se retrage " +
              "treptat pe măsură ce copilul devine mai competent.",
          },
          {
            id: "edu-lc-oral-1-v3-q11",
            type: "multiple-choice",
            question: "Ce activitate integrată de limbaj putem face la masă (gustare/prânz)?",
            options: [
              "Exerciții de scriere",
              "Teste orale cu întrebări din programă",
              "Denumirea alimentelor, descrierea gustului, culorii, texturii",
              "Lectura unei povești lungi în timp ce copiii mănâncă",
            ],
            correctIndex: 2,
            explanation:
              "La masă, copiii pot exersa vocabular senzorial natural: denumirea " +
              "alimentelor, descrierea gustului (dulce, acru), texturii (crocant, moale), " +
              "culorii — activitate integrată fără timp suplimentar.",
          },
          {
            id: "edu-lc-oral-1-v3-q12",
            type: "true-false",
            question: "Jocul de rol (doctor, magazin, bucătărie) este valoros doar pentru dezvoltarea socio-emoțională, nu și pentru limbaj.",
            correct: false,
            explanation:
              "Jocul de rol dezvoltă puternic limbajul: copilul exersează registre " +
              "lingvistice diferite, vocabular specific, negocierea cu partenerii, " +
              "rezolvarea conflictelor verbal și dialogul structurat.",
          },
          {
            id: "edu-lc-oral-1-v3-q13",
            type: "multiple-choice",
            question: "Care este cel mai puternic predictor al dezvoltării vocabularului la copii?",
            options: [
              "Numărul de ore petrecute la TV",
              "Numărul de jucării educative din casă",
              "Cantitatea și calitatea vorbirii adresate direct copilului de către adult",
              "Vârsta la care copilul începe grădinița",
            ],
            correctIndex: 2,
            explanation:
              "Studiile arată că numărul de cuvinte adresate copilului zilnic (nu " +
              "cele auzite la TV sau din fundal) este cel mai puternic predictor al " +
              "vocabularului. Interacțiunea directă contează cel mai mult.",
          },
          {
            id: "edu-lc-oral-1-v3-q14",
            type: "multiple-choice",
            question: "Ce face educatoarea în «întâlnirea de dimineață» pentru stimularea limbajului?",
            options: [
              "Predă conținut academic frontal",
              "Verifică temele copiilor",
              "Oferă fiecărui copil un moment de vorbire și practică reguli de conversație",
              "Organizează exerciții de scriere la tablă",
            ],
            correctIndex: 2,
            explanation:
              "Întâlnirea de dimineață: fiecare copil povestește ceva, se practică " +
              "regulile conversației (ascultare, nu întrerupem), se fac jocuri " +
              "scurte de limbaj (ghicitori, rime).",
          },
          {
            id: "edu-lc-oral-1-v3-q15",
            type: "true-false",
            question: "În practica educațională modernă, teoriile lui Piaget și Vygotsky se completează reciproc.",
            correct: true,
            explanation:
              "Da — respectăm nivelul de dezvoltare al copilului (Piaget) dar oferim " +
              "activ provocări lingvistice ghidate prin scaffolding în ZPD (Vygotsky). " +
              "Ambele perspective sunt integrate în practica modernă.",
          },
        ],
      },
    ],
  },
  {
    topicId: "edu-lc-preg-2",
    title: "Conștiința fonologică: sunete, silabe, cuvinte",
    duration: "20 min",
    objectives: [
      "Să înțeleagă conceptul de conștiință fonologică și componentele sale",
      "Să cunoască etapele dezvoltării conștiinței fonologice la preșcolari",
      "Să aplice activități specifice de stimulare a conștiinței fonologice",
    ],
    theory: [
      {
        title: "Ce este conștiința fonologică?",
        content:
          "Conștiința fonologică reprezintă capacitatea de a identifica și manipula sunetele " +
          "vorbirii (foneme, silabe, cuvinte). Este o abilitate metalingvistică — copilul nu doar " +
          "vorbește, ci reflectează asupra structurii sonore a limbajului.\n\n" +
          "**Componentele conștiinței fonologice** (de la simplu la complex):\n\n" +
          "1. **Conștiința cuvintelor:** Capacitatea de a segmenta propoziții în cuvinte " +
          "(«Mama merge» = 2 cuvinte)\n" +
          "2. **Conștiința silabică:** Identificarea și manipularea silabelor " +
          "(ma-ma = 2 silabe, flu-tu-re = 3 silabe)\n" +
          "3. **Conștiința rimei:** Recunoașterea cuvintelor care rimează " +
          "(casă-masă, carte-parte)\n" +
          "4. **Conștiința fonemică:** Identificarea sunetelor individuale " +
          "(m-a-m-a = 4 sunete) — cea mai complexă și ultima care se dezvoltă",
      },
      {
        title: "Etapele dezvoltării la preșcolari",
        content:
          "Conștiința fonologică se dezvoltă gradual:\n\n" +
          "**3-4 ani (grupa mică-mijlocie):**\n" +
          "• Recunosc rime în poezii și cântece familiare\n" +
          "• Pot bate din palme pe silabe (pa-pă, ca-să)\n" +
          "• Identifică cuvintele într-o propoziție scurtă cu suport vizual\n\n" +
          "**4-5 ani (grupa mijlocie-mare):**\n" +
          "• Produc rime simple\n" +
          "• Identifică primul sunet dintr-un cuvânt\n" +
          "• Despart cuvinte bisilabice în silabe fără suport vizual\n\n" +
          "**5-6 ani (grupa mare-pregătitoare):**\n" +
          "• Identifică toate sunetele dintr-un cuvânt scurt\n" +
          "• Pot combina sunete pentru a forma cuvinte (sinteză fonemică)\n" +
          "• Pot elimina sau înlocui un sunet dintr-un cuvânt\n\n" +
          "**Important:** Conștiința fonologică este cel mai bun predictor al succesului " +
          "în învățarea citirii și scrierii în clasa I.",
      },
      {
        title: "Activități de stimulare a conștiinței fonologice",
        content:
          "**Activități pentru conștiința silabică:**\n" +
          "• Bătăi din palme pe silabe (fiecare silabă = o bătaie)\n" +
          "• «Robotul» — rostirea cuvintelor pe silabe, ca un robot\n" +
          "• Numărarea silabelor cu jetoane sau cuburi\n\n" +
          "**Activități pentru rimă:**\n" +
          "• Poezii și cântece cu rime evidente\n" +
          "• «Ce rimează cu...?» — joc oral de producere de rime\n" +
          "• Sortarea imaginilor după rimă\n\n" +
          "**Activități pentru conștiința fonemică:**\n" +
          "• «Sunetul misterios» — copiii identifică cuvinte care încep cu un anumit sunet\n" +
          "• «Trenulețul de sunete» — descompunerea unui cuvânt în sunete individuale\n" +
          "• «Ghicește cuvântul» — educatoarea rostește sunetele separat, copiii le combină\n\n" +
          "**Principiu didactic:** Se lucrează întotdeauna de la simplu la complex: " +
          "cuvinte → silabe → rime → foneme. Nu se trece la nivel superior " +
          "până nu este consolidat nivelul anterior.",
      },
    ],
    examples: [
      {
        title: "Jocul «Trenulețul silabelor»",
        description:
          "Copiii stau în cerc. Educatoarea arată o imagine (ex: fluture). Toți bat din palme " +
          "pe silabe: flu-tu-re (3 bătăi). Apoi numără bătăile. Se repetă cu diverse cuvinte " +
          "de lungimi diferite. Varianta avansată: copiii grupează imaginile după numărul de silabe.",
        context: "Grupa mijlocie (4-5 ani), activitate frontală, 15 minute",
      },
      {
        title: "Jocul «Sunetul de start»",
        description:
          "Educatoarea alege un sunet (ex: «m») și întreabă: «Ce cuvinte știți care încep cu mmm?». " +
          "Copiii spun: mama, masa, mașina, minge. Fiecare răspuns corect primește un jeton. " +
          "La final, se numără jetoanele. Varianta: copiii caută obiecte din sala de grupă " +
          "al căror nume începe cu sunetul ales.",
        context: "Grupa mare (5-6 ani), joc didactic, 10 minute",
      },
    ],
    keyPoints: [
      { text: "Conștiința fonologică = capacitatea de a identifica și manipula sunetele vorbirii", important: true },
      { text: "Componentele (în ordinea complexității): cuvinte → silabe → rime → foneme" },
      { text: "Conștiința fonologică este cel mai bun predictor al succesului în citit-scris", important: true },
      { text: "La 3-4 ani: rime în cântece, bătăi din palme pe silabe" },
      { text: "La 5-6 ani: identificarea tuturor sunetelor, sinteză fonemică" },
      { text: "Principiu: de la simplu la complex, fiecare nivel se consolidează înainte de a trece la următorul", important: true },
      { text: "Jocurile de rimă, silabe și sunete se integrează natural în rutina zilnică" },
    ],
    quiz: {
      topicId: "edu-lc-preg-2",
      questions: [
        {
          id: "edu-lc-preg-2-q1",
          type: "multiple-choice",
          question: "Care este ordinea corectă a componentelor conștiinței fonologice, de la simplu la complex?",
          options: [
            "Foneme → silabe → rime → cuvinte",
            "Cuvinte → silabe → rime → foneme",
            "Silabe → cuvinte → foneme → rime",
            "Rime → foneme → cuvinte → silabe",
          ],
          correctIndex: 1,
          explanation:
            "Ordinea corectă, de la simplu la complex, este: conștiința cuvintelor → " +
            "conștiința silabică → conștiința rimei → conștiința fonemică.",
        },
        {
          id: "edu-lc-preg-2-q2",
          type: "true-false",
          question:
            "Conștiința fonologică este cel mai bun predictor al succesului în învățarea citirii și scrierii.",
          correct: true,
          explanation:
            "Cercetările arată că nivelul conștiinței fonologice la vârsta preșcolară " +
            "prezice cel mai bine performanța în citit-scris în clasele primare.",
        },
        {
          id: "edu-lc-preg-2-q3",
          type: "fill-blank",
          question:
            "Capacitatea copilului de a identifica sunetele individuale dintr-un cuvânt se numește conștiință ___.",
          correctAnswers: ["fonemica", "fonemică"],
          explanation:
            "Conștiința fonemică este cel mai complex nivel al conștiinței fonologice — " +
            "capacitatea de a identifica, izola și manipula fonemele individuale.",
        },
        {
          id: "edu-lc-preg-2-q4",
          type: "multiple-choice",
          question: "La ce vârstă pot copiii, de regulă, să identifice toate sunetele dintr-un cuvânt scurt?",
          options: ["2-3 ani", "3-4 ani", "4-5 ani", "5-6 ani"],
          correctIndex: 3,
          explanation:
            "La 5-6 ani (grupa mare/pregătitoare), copiii pot identifica toate sunetele " +
            "dintr-un cuvânt scurt, pot combina sunete (sinteză fonemică) și pot " +
            "elimina/înlocui sunete.",
        },
        {
          id: "edu-lc-preg-2-q5",
          type: "true-false",
          question:
            "Este recomandat să se înceapă direct cu conștiința fonemică, deoarece este cea mai utilă pentru citit.",
          correct: false,
          explanation:
            "Se lucrează întotdeauna de la simplu la complex: mai întâi conștiința " +
            "cuvintelor și silabelor, apoi rime, și abia la final foneme. " +
            "Fiecare nivel se consolidează înainte de a trece la următorul.",
        },
        {
          id: "edu-lc-preg-2-q6",
          type: "multiple-choice",
          question:
            "Ce activitate dezvoltă conștiința silabică la preșcolari?",
          options: [
            "Citirea independentă a unui text scris",
            "Bătăi din palme pe silabe (flu-tu-re = 3 bătăi)",
            "Scrierea literelor de tipar",
            "Memorarea poeziilor fără explicații",
          ],
          correctIndex: 1,
          explanation:
            "Bătăile din palme pe silabe sunt o activitate specifică dezvoltării " +
            "conștiinței silabice: fiecare silabă = o bătaie. Copiii descompun " +
            "cuvântul în silabe și numără bătăile (flu-tu-re = 3).",
        },
        {
          id: "edu-lc-preg-2-q7",
          type: "fill-blank",
          question:
            "Conștiința fonologică este o abilitate ___, adică copilul reflectează asupra structurii sonore a limbajului.",
          correctAnswers: ["metalingvistica", "metalingvistică"],
          explanation:
            "Conștiința fonologică este o abilitate metalingvistică — copilul nu doar " +
            "vorbește, ci reflectează asupra structurii sonore a limbajului, putând " +
            "identifica și manipula sunetele vorbirii.",
        },
        {
          id: "edu-lc-preg-2-q8",
          type: "multiple-choice",
          question:
            "Care este jocul recomandat pentru dezvoltarea conștiinței fonemice la grupa mare?",
          options: [
            "«Trenulețul silabelor» (bătăi din palme pe silabe)",
            "«Ce rimează cu...?» (joc de producere rime)",
            "«Sunetul misterios» (identificarea cuvintelor care încep cu un anumit sunet)",
            "«Numără cuvintele» (segmentare propoziții)",
          ],
          correctIndex: 2,
          explanation:
            "«Sunetul misterios» este o activitate specifică conștiinței fonemice: " +
            "copiii identifică cuvinte care încep cu un anumit sunet. Alte activități " +
            "fonemice: «Trenulețul de sunete» și «Ghicește cuvântul».",
        },
        {
          id: "edu-lc-preg-2-q9",
          type: "true-false",
          question:
            "La 3-4 ani, copiii pot deja identifica toate sunetele individuale dintr-un cuvânt scurt.",
          correct: false,
          explanation:
            "Identificarea tuturor sunetelor individuale (conștiință fonemică) este " +
            "specifică vârstei de 5-6 ani. La 3-4 ani, copiii pot recunoaște rime " +
            "în cântece și pot bate din palme pe silabe, dar nu au încă conștiință fonemică.",
        },
        {
          id: "edu-lc-preg-2-q10",
          type: "multiple-choice",
          question:
            "Ce înseamnă «sinteză fonemică»?",
          options: [
            "Descompunerea cuvântului în silabe",
            "Combinarea sunetelor individuale pentru a forma un cuvânt (m-a-m-a → mama)",
            "Recunoașterea rimelor în poezii",
            "Numărarea cuvintelor dintr-o propoziție",
          ],
          correctIndex: 1,
          explanation:
            "Sinteza fonemică este capacitatea de a combina sunete individuale " +
            "pentru a forma un cuvânt: educatoarea rostește m-a-m-a, iar copilul " +
            "spune «mama!». Se dezvoltă la 5-6 ani, la grupa mare/pregătitoare.",
        },
      ],
    },
  },
];
