/* A2 exam bank. Item: [prompt, answer, [3 wrong], extra skill ids?]. Text may be "czech" or [en, id]. */
(function () {
  var E = window.C3KO_EXAMS = window.C3KO_EXAMS || {};
  var PICK = ["Choose the correct form.", "Pilih bentuk yang benar."];
  var ORDER = ["Choose the correct word order.", "Pilih urutan kata yang benar."];
  function p(n) { return n + ". pád"; }

  E.A2 = {
    "a2-cases-overview": {
      ask: ["Which case is the highlighted word in?", "Kata yang disorot memakai kasus apa?"],
      items: [
        ["Jdu do {obchodu}.", p(2), [p(4), p(6), p(3)]],
        ["Mluvím o {práci}.", p(6), [p(4), p(2), p(7)]],
        ["Jedu {tramvají}.", p(7), [p(3), p(4), p(6)]],
        ["Dám to {mamince}.", p(3), [p(4), p(2), p(6)]],
        ["Piju {kávu}.", p(4), [p(1), p(2), p(7)]],
        ["{Petře}, pojď sem!", p(5), [p(1), p(4), p(3)]],
        ["{Káva} je studená.", p(1), [p(4), p(5), p(2)]],
        ["Bydlím v {Praze}.", p(6), [p(3), p(2), p(4)]],
        ["Kafe bez {cukru}.", p(2), [p(4), p(7), p(6)]],
        ["Sejdeme se před {divadlem}.", p(7), [p(6), p(2), p(4)]],
        ["Jdu k {doktorovi}.", p(3), [p(2), p(6), p(7)]]
      ]
    },
    "a2-past": {
      ask: PICK,
      items: [
        ["Včera jsem ___ doma. (pracovat, já – muž)", "pracoval", ["pracovala", "pracovali", "pracovat"]],
        ["Kde jsi ___? (být, ty – žena)", "byla", ["byl", "bylo", "byly"]],
        ["Petr ___ do práce. (jít)", "šel", ["jdel", "šla", "jitl"]],
        ["Jana ___ knihu. (číst)", "četla", ["čtela", "čítala", "četl"]],
        ["Kluci ___ večeři. (dělat)", "dělali", ["dělaly", "dělal", "dělala"]],
        ["Holky ___ do kina. (jít)", "šly", ["šli", "šla", "jdely"]],
        ["Oni ___ hlad. (mít)", "měli", ["měly", "mněli", "mali"]],
        ["Nevěděla ___ to. (já)", "jsem", ["jsi", "je", "jsme"]],
        ["Včera ___ zima. (být)", "byla", ["byl", "bylo", "jsem byla"]],
        ["Byl ___ v Brně? (ty)", "jsi", ["jsem", "je", "jste"]],
        ["Oni ___ pizzu. (jíst)", "jedli", ["jedly", "jídli", "jedi"]],
        ["Petr mi ___ pomoct. (moct, ne)", "nemohl", ["nemoct", "nemůžel", "nemohla"]]
      ]
    },
    "a2-future": {
      ask: PICK,
      items: [
        ["Zítra ___ pracovat. (já)", "budu", ["bude", "budeš", "jsem"]],
        ["Zítra to ___. (udělat, já)", "udělám", ["budu udělat", "udělat", "udělal"]],
        ["Příští týden ___ do Brna. (jet, my)", "pojedeme", ["budeme jet", "pojedu", "pojedete"]],
        ["Večer ___ číst. (ona)", "bude", ["budu", "budou", "je"]],
        ["Zítra ___ domů pěšky. (jít, já)", "půjdu", ["budu jít", "pojdu", "půjde"]],
        ["Oni ___ v Praze. (být)", "budou", ["bude", "budou být", "jsou budou"]],
        ["Kdy ___ ten dopis? (napsat, ty)", "napíšeš", ["budeš napsat", "napíšu", "budeš napíšeš"]],
        ["Zítra ___ do Indonésie. (letět, já)", "poletím", ["poletěl", "letěl", "poletíš"]],
        ["Co ___ dělat o víkendu? (vy)", "budete", ["budeme", "budete být", "bude"]],
        ["Ten film ___ dlouhý. (být)", "bude", ["budu", "budou", "bude být"]],
        ["Zítra ti ___. (zavolat, já)", "zavolám", ["budu zavolat", "zavolal", "zavoláš"]]
      ]
    },
    "a2-aspect-intro": {
      ask: PICK,
      items: [
        [["dělat → perfective:", "dělat → perfektif:"], "udělat", ["dělávat", "dělal", "dělání"]],
        [["psát → perfective:", "psát → perfektif:"], "napsat", ["psávat", "pisovat", "psal"]],
        [["kupovat → perfective:", "kupovat → perfektif:"], "koupit", ["kupit", "nakupovat", "kupoval"]],
        [["brát → perfective:", "brát → perfektif:"], "vzít", ["brávat", "brala", "berat"]],
        [["říkat → perfective:", "říkat → perfektif:"], "říct", ["říkávat", "řekat", "říkal"]],
        ["Včera jsem celý den ___. (psát / napsat)", "psal", ["napsal", "napíšu", "píšu"]],
        ["Konečně jsem ten dopis ___. (psát / napsat)", "napsal", ["psal", "píšu", "budu psát"]],
        ["Každý den ___ chleba. (kupovat / koupit)", "kupuju", ["koupím", "koupil", "koupit"]],
        ["Zítra ___ nové auto. (koupit, já)", "koupím", ["budu koupit", "koupil", "koupit"]],
        ["Udělal jsem to.", ["I did it (and finished).", "Saya sudah menyelesaikannya."], [["I was doing it.", "Saya sedang mengerjakannya."], ["I do it every day.", "Saya melakukannya setiap hari."], ["I will be doing it.", "Saya akan sedang mengerjakannya."]]],
        [["Which verb is imperfective?", "Kata kerja mana yang imperfektif?"], "dělat", ["udělat", "napsat", "koupit"]]
      ]
    },
    "a2-motion": {
      ask: ["Choose the right verb of motion.", "Pilih kata kerja gerak yang tepat."],
      items: [
        ["Teď ___ domů. (pěšky, já)", "jdu", ["chodím", "jedu", "jezdím"]],
        ["Každý den ___ do práce tramvají.", "jezdím", ["jedu", "chodím", "jdu"]],
        ["Zítra ___ do Brna vlakem.", "jedu", ["jdu", "chodím", "jezdím"]],
        ["Často ___ do parku pěšky.", "chodím", ["jdu", "jedu", "jezdím"]],
        ["Kam ___? — Do školy. (ty, teď, pěšky)", "jdeš", ["chodíš", "jedeš", "jezdíš"]],
        ["Letadlo právě ___ do Jakarty.", "letí", ["jede", "jde", "běží"]],
        ["V létě ___ k moři. (my, každý rok, autem)", "jezdíme", ["jedeme", "chodíme", "jdeme"]],
        ["Pozor, ___ tramvaj!", "jede", ["jde", "chodí", "jezdí"]],
        ["Dítě už umí ___.", "chodit", ["jít", "jet", "jezdit"]],
        ["Umíš ___ na kole?", "jezdit", ["jet", "chodit", "jít"]],
        ["Petr teď ___ rychle do obchodu. (pěšky)", "jde", ["chodí", "jede", "jezdí"]]
      ]
    },
    "a2-locative": {
      ask: PICK,
      items: [
        ["Bydlím v ___. (Praha)", "Praze", ["Praha", "Prahu", "Prahy"]],
        ["Pracuju na ___. (pošta)", "poště", ["poštu", "pošta", "pošty"]],
        ["Mluvíme o ___. (práce)", "práci", ["práce", "prácí", "prácu"]],
        ["Kniha je na ___. (stůl)", "stole", ["stůl", "stola", "stolem"]],
        ["Byl jsem v ___. (Amerika)", "Americe", ["Ameriku", "Amerika", "Ameriky"]],
        ["Mluvili o ___. (sestra)", "sestře", ["sestra", "sestru", "sestry"]],
        ["Jsme v ___. (hotel)", "hotelu", ["hotel", "hotele", "hotelem"]],
        ["Sedí v ___. (auto)", "autě", ["auto", "auta", "autem"]],
        ["Bydlí na ___. (ulice)", "ulici", ["ulice", "ulicí", "ulicu"]],
        ["V ___ je hodně lidí. (obchody)", "obchodech", ["obchodách", "obchodi", "obchodů"]],
        ["Na ___ je zima. (hory)", "horách", ["horech", "hory", "hor"]]
      ]
    },
    "a2-genitive": {
      ask: PICK,
      items: [
        ["Jdu do ___. (obchod)", "obchodu", ["obchod", "obchodě", "obchoda"]],
        ["Káva bez ___. (cukr)", "cukru", ["cukr", "cukrem", "cukra"]],
        ["Jsem z ___. (Praha)", "Prahy", ["Praha", "Praze", "Prahu"]],
        ["Kilo ___. (jablka)", "jablek", ["jablka", "jablky", "jablkách"]],
        ["To je auto mého ___. (bratr)", "bratra", ["bratr", "bratrovi", "bratrem"]],
        ["Bydlím vedle ___. (škola)", "školy", ["škola", "škole", "školu"]],
        ["Jdu do ___. (kino)", "kina", ["kino", "kině", "kinem"]],
        ["Byl jsem u ___. (doktor)", "doktora", ["doktor", "doktorovi", "doktorem"]],
        ["pět ___ (žena)", "žen", ["ženy", "ženě", "ženách"]],
        ["Kolik ___ máš? (peníze)", "peněz", ["peníze", "penězi", "penězích"]],
        ["Je tu hodně ___. (lidé)", "lidí", ["lidé", "lidem", "lidmi"]]
      ]
    },
    "a2-dative": {
      ask: PICK,
      items: [
        ["Dám to ___. (maminka)", "mamince", ["maminka", "maminku", "maminky"]],
        ["Zavolám ___. (bratr)", "bratrovi", ["bratra", "bratr", "bratrem"]],
        ["Jdu k ___. (doktor)", "doktorovi", ["doktora", "doktor", "doktorem"]],
        ["Pomáhám ___. (kamarád)", "kamarádovi", ["kamaráda", "kamarád", "kamarádem"]],
        ["Rozumím ___. (ty)", "ti", ["tě", "ty", "tebou"]],
        ["Píšu ___. (Jana)", "Janě", ["Janu", "Jana", "Jany"]],
        ["Kvůli ___ nepřijdu. (déšť)", "dešti", ["déšť", "deště", "deštěm"]],
        ["Věříš ___? (on)", "mu", ["ho", "on", "jím"]],
        ["Díky ___ jsem to zvládl. (kolegyně)", "kolegyni", ["kolegyně", "kolegyní", "kolegyňu"]],
        ["Jdeme k ___. (moře)", "moři", ["moře", "mořem", "mořu"]],
        ["Proti ___ nic nemám. (to)", "tomu", ["to", "toho", "tím"]]
      ]
    },
    "a2-instrumental": {
      ask: PICK,
      items: [
        ["Jedu ___. (tramvaj)", "tramvají", ["tramvaj", "tramvaje", "tramvajou"]],
        ["Kafe s ___. (mléko)", "mlékem", ["mléko", "mléka", "mlékou"]],
        ["Jdu s ___. (kamarád)", "kamarádem", ["kamarád", "kamaráda", "kamarádovi"]],
        ["Sejdeme se před ___. (divadlo)", "divadlem", ["divadlo", "divadla", "divadle"]],
        ["Píšu ___. (pero)", "perem", ["pero", "pera", "peru"]],
        ["Mluvím s ___. (žena)", "ženou", ["žena", "ženu", "ženy"]],
        ["Kočka je pod ___. (stůl)", "stolem", ["stůl", "stolu", "stole"]],
        ["Chci být ___. (lékař)", "lékařem", ["lékař", "lékaře", "lékařovi"]],
        ["Jedu ___. (vlak)", "vlakem", ["vlak", "vlaku", "vlaka"]],
        ["Mezi ___ je park. (dům, škola)", "domem a školou", ["dům a škola", "domu a školy", "domem a škola"]],
        ["Jdu tam s ___. (kamarádi)", "kamarády", ["kamarádi", "kamarádů", "kamarádům"]]
      ]
    },
    "a2-vocative": {
      ask: ["Choose the form for addressing someone.", "Pilih bentuk untuk menyapa."],
      items: [
        ["Dobrý den, ___ Nováku. (pan)", "pane", ["pan", "pana", "panu"]],
        ["Ahoj, ___! (Petr)", "Petře", ["Petr", "Petra", "Petru"]],
        ["Děkuju, ___. (Jana)", "Jano", ["Jana", "Janu", "Jany"]],
        ["Ahoj, ___! (Tomáš)", "Tomáši", ["Tomáš", "Tomáše", "Tomášu"]],
        ["Ahoj, ___! (Marek)", "Marku", ["Marek", "Marka", "Marče"]],
        ["Dobrý den, paní ___. (Nováková)", "Nováková", ["Novákové", "Novákovou", "Novákovo"]],
        ["Pojď sem, ___! (Pavel)", "Pavle", ["Pavel", "Pavla", "Pavlu"]],
        ["Ahoj, ___! (Lukáš)", "Lukáši", ["Lukáš", "Lukáše", "Lukášu"]],
        ["Milá ___, … (Eva)", "Evo", ["Eva", "Evu", "Evy"]],
        ["Pane ___, máte chvíli? (doktor)", "doktore", ["doktor", "doktora", "doktoru"]],
        ["Ahoj, ___! (Jakub)", "Jakube", ["Jakub", "Jakuba", "Jakubu"]]
      ]
    },
    "a2-plural-cases": {
      ask: PICK,
      items: [
        ["Píšu ___. (kamarádi)", "kamarádům", ["kamarádi", "kamarádech", "kamarády"]],
        ["V ___ je zima. (hory)", "horách", ["hory", "horám", "horami"]],
        ["Jdu tam se ___. (ženy)", "ženami", ["ženy", "ženám", "ženách"]],
        ["Bydlím blízko ___. (obchody)", "obchodů", ["obchody", "obchodech", "obchodům"]],
        ["Mluvíme o ___. (města)", "městech", ["městách", "města", "městům"]],
        ["Pomáhám ___. (děti)", "dětem", ["dětí", "dětmi", "dětech"]],
        ["S ___ jsem nemluvil. (studenti)", "studenty", ["studenti", "studentům", "studentech"]],
        ["Kolik ___? (lidé)", "lidí", ["lidé", "lidem", "lidmi"]],
        ["V ___ je hodně lidí. (kavárny)", "kavárnách", ["kavárnech", "kavárny", "kavárnám"]],
        ["K ___ jsem nešel. (sousedé)", "sousedům", ["sousedy", "sousedech", "sousedi"]]
      ]
    },
    "a2-pronoun-cases": {
      ask: PICK,
      items: [
        ["Vidím ___. (ty)", "tě", ["ti", "ty", "tobě"]],
        ["To je pro ___. (ty)", "tebe", ["ti", "tobě", "ty"]],
        ["Mluvil jsem s ___. (ona)", "ní", ["ji", "jí", "ona"]],
        ["Dám ___ to. (on)", "mu", ["ho", "něj", "jím"]],
        ["Znáš ___? (on)", "ho", ["mu", "ním", "jemu"]],
        ["Bez ___ nejdu. (on)", "něj", ["ho", "mu", "jím"]],
        ["Pojď s ___. (my)", "námi", ["nás", "nám", "my"]],
        ["Mluvili o ___. (vy)", "vás", ["vám", "vámi", "vy"]],
        ["Líbí se ___ to? (vy)", "vám", ["vás", "vy", "vámi"]],
        ["Čekám na ___. (oni)", "ně", ["nich", "nim", "jimi"]],
        ["Myslím na ___. (ty)", "tebe", ["tobě", "ti", "tebou"]]
      ]
    },
    "a2-imperative": {
      ask: PICK,
      items: [
        ["___ dál! (přijít, vy)", "Pojďte", ["Pojď", "Pojďme", "Pojít"]],
        ["___ chvíli! (počkat, ty)", "Počkej", ["Počkáš", "Počkat", "Počkejte"]],
        ["___ pomaleji! (mluvit, vy)", "Mluvte", ["Mluvíte", "Mluv", "Mluvit"]],
        ["___ ten dopis! (napsat, ty)", "Napiš", ["Napíšeš", "Napsat", "Napište"]],
        ["___ to! (číst, ty)", "Čti", ["Čte", "Čteš", "Čtěte"]],
        ["___ smutný! (ne, být, ty)", "Nebuď", ["Nejsi", "Nebýt", "Nebuďte"]],
        ["___ to! (ne, dělat, ty)", "Nedělej", ["Nedělá", "Nedělat", "Nedělejte"]],
        ["___ si, prosím. (sednout, vy)", "Sedněte", ["Sedni", "Sednete", "Sednout"]],
        ["___ to! (jíst, ty)", "Jez", ["Jíš", "Jíst", "Jezte"]],
        ["___ do kina! (jít, my)", "Pojďme", ["Pojď", "Pojďte", "Pojít"]],
        ["___ trpělivost! (mít, ty)", "Měj", ["Máš", "Mít", "Mějte"]]
      ]
    },
    "a2-comparison": {
      ask: PICK,
      items: [
        ["Praha je ___ než Brno. (velký)", "větší", ["velkejší", "velkší", "největší"]],
        ["To je ___ pivo. (dobrý, nej-)", "nejlepší", ["nejdobrější", "lepší", "nejlepčí"]],
        ["Mluv ___, prosím. (pomalu)", "pomaleji", ["pomalejší", "pomalu", "nejpomaleji"]],
        ["Tento byt je ___. (levný, +)", "levnější", ["levnejší", "levnějí", "nejlevnější"]],
        ["Brno je ___ než Praha. (malý)", "menší", ["malejší", "malší", "nejmenší"]],
        ["Petr je ___ než já. (starý)", "starší", ["starejší", "starčí", "nejstarší"]],
        ["Dnes je ___ počasí než včera. (špatný)", "horší", ["špatnější", "horčí", "nejhorší"]],
        ["Mluví česky ___ než já. (dobře)", "lépe", ["lepší", "dobřeji", "nejlépe"]],
        ["Ten dům je ___. (drahý, +)", "dražší", ["drahější", "drašší", "nejdražší"]],
        ["Jana je ___ v rodině. (mladý, nej-)", "nejmladší", ["mladší", "nejmladejší", "nejmlačí"]],
        ["Praha je větší ___ Brno.", "než", ["od", "a", "za"]]
      ]
    },
    "a2-numbers-dates": {
      ask: PICK,
      items: [
        ["19. 10. = devatenáctého ___", "října", ["říjen", "říjnu", "říjnem"]],
        ["3. 5. = třetího ___", "května", ["květen", "květnu", "květnem"]],
        ["1. = ___", "první", ["jedný", "jednotý", "prvý"]],
        ["2. patro = ___ patro", "druhé", ["dvojté", "dvé", "druhý"]],
        ["5. = ___", "pátý", ["pětý", "pětiný", "pěčí"]],
        ["Bydlím ve ___ patře. (2.)", "druhém", ["druhé", "druhý", "dvou"]],
        ["200 = ___", "dvě stě", ["dva sta", "dvě sto", "dvěstě set"]],
        ["500 = ___", "pět set", ["pět sto", "pět sta", "pětsto"]],
        ["v roce ___ (2026)", "dva tisíce dvacet šest", ["dva tisíc dvacet šest", "dvě tisíce dvacet šest", "dvacet set dvacet šest"]],
        ["Narodil jsem se ___ května. (3.)", "třetího", ["třetí", "tří", "třetím"]],
        ["10. = ___", "desátý", ["desetý", "desítý", "desý"]],
        ["31. 12. = třicátého prvního ___", "prosince", ["prosinec", "prosinci", "prosincem"]]
      ]
    },
    "a2-conjunctions": {
      ask: ["Choose the right linking word or punctuation.", "Pilih kata sambung atau tanda baca yang tepat."],
      items: [
        ["Myslím, ___ má pravdu.", "že", ["a", "ale", "protože"]],
        ["Nepřijdu, ___ jsem nemocný.", "protože", ["že", "ale", "jestli"]],
        ["Chtěl bych přijít, ___ nemám čas.", "ale", ["a", "že", "protože"]],
        ["Pršelo, ___ jsme zůstali doma.", "takže", ["protože", "že", "jestli"]],
        ["___ budeš mít čas, zavolej.", "Když", ["Že", "Ale", "Takže"]],
        ["Nevím, ___ přijde.", "jestli", ["že", "když", "takže"]],
        ["Kafe ___ čaj?", "nebo", ["a", "ale", "že"]],
        ["(myslím, že, přijde)", "Myslím, že přijde.", ["Myslím že, přijde.", "Myslím že přijde.", "Myslím, že, přijde."]],
        ["(Petr, a, Jana, přišli)", "Petr a Jana přišli.", ["Petr, a Jana přišli.", "Petr a, Jana přišli.", "Petr a Jana, přišli."]],
        ["(chci jít ven, ale prší)", "Chci jít ven, ale prší.", ["Chci jít ven ale prší.", "Chci jít ven ale, prší.", "Chci, jít ven ale prší."]],
        ["Jsem doma, ___ jsem unavený.", "protože", ["že", "ale", "jestli"]]
      ]
    },
    "a2-clitics": {
      ask: ORDER,
      items: [
        ["(Praha, se, mi, líbí)", "Praha se mi líbí.", ["Praha mi se líbí.", "Se mi Praha líbí.", "Praha líbí mi se."]],
        ["(včera, jsem, se, učil)", "Včera jsem se učil.", ["Včera se jsem učil.", "Jsem se včera učil.", "Včera učil jsem se."]],
        ["(Petr, mu, to, dal)", "Petr mu to dal.", ["Petr to mu dal.", "Mu to Petr dal.", "Petr dal to mu."]],
        ["(dnes, jsem, ti, to, řekl)", "Dnes jsem ti to řekl.", ["Dnes ti jsem to řekl.", "Dnes jsem to ti řekl.", "Jsem ti to dnes řekl."]],
        ["(rád, bych, si, to, koupil)", "Rád bych si to koupil.", ["Rád si bych to koupil.", "Rád bych to si koupil.", "Bych si to rád koupil."]],
        ["(Jana, se, mi, líbí)", "Jana se mi líbí.", ["Jana mi se líbí.", "Se mi Jana líbí.", "Jana líbí mi se."]],
        ["(už, jsem, ho, viděl)", "Už jsem ho viděl.", ["Už ho jsem viděl.", "Jsem ho už viděl.", "Už viděl jsem ho."]],
        ["(zítra, si, to, přečtu)", "Zítra si to přečtu.", ["Zítra to si přečtu.", "Si to zítra přečtu.", "Zítra přečtu si to."]],
        ["(…, protože, jsem, se, bál)", "…, protože jsem se bál.", ["…, protože se jsem bál.", "…, jsem se protože bál.", "…, protože bál jsem se."]],
        ["(večer, jsme, se, sešli)", "Večer jsme se sešli.", ["Večer se jsme sešli.", "Jsme se večer sešli.", "Večer sešli se jsme."]],
        ["(dal, jsem, mu, to)", "Dal jsem mu to.", ["Dal mu jsem to.", "Dal jsem to mu.", "Jsem mu to dal."]]
      ]
    },
    "a2-review": {
      ask: ["Choose the correct combination.", "Pilih kombinasi yang benar."],
      items: [
        ["Včera ___ v kině. (já – muž, s, kamarád)", "jsem byl s kamarádem", ["jsem byl s kamarád", "jsem byl s kamaráda", "byl s kamarádem jsem"], ["a2-past", "a2-instrumental"]],
        ["Zítra ___ do práce. (jet, tramvaj)", "pojedu tramvají", ["budu jet tramvaj", "pojedu tramvaj", "půjdu tramvají"], ["a2-future", "a2-instrumental", "a2-motion"]],
        ["Dal ___ k narozeninám. (jsem, on, to)", "jsem mu to", ["mu jsem to", "jsem to mu", "jsem ho to"], ["a2-clitics", "a2-pronoun-cases", "a2-dative"]],
        ["___, mluv ___, prosím! (Petr, pomalu)", "Petře … pomaleji", ["Petr … pomaleji", "Petře … pomalejší", "Petra … pomalu"], ["a2-vocative", "a2-comparison", "a2-imperative"]],
        ["Narodil jsem se ___ v ___. (3. 5., Praha)", "třetího května … Praze", ["třetí květen … Praha", "třetího května … Prahu", "třetího květnu … Praze"], ["a2-numbers-dates", "a2-locative"]],
        ["Myslím, ___ Brno je ___ než Praha. (malý)", "že … menší", ["když … menší", "že … malejší", "protože … nejmenší"], ["a2-conjunctions", "a2-comparison"]],
        ["Každý týden ___ do ___. (chodit, posilovna)", "chodím … posilovny", ["jdu … posilovny", "chodím … posilovně", "chodím … posilovnu"], ["a2-motion", "a2-genitive"]],
        ["Mluvili jsme o ___ a o ___. (práce, rodina)", "práci … rodině", ["práce … rodina", "práci … rodinu", "prácí … rodinou"], ["a2-locative", "a2-past"]],
        ["Zítra ___ dopis a pošlu ho ___. (napsat, maminka)", "napíšu … mamince", ["budu napsat … mamince", "napíšu … maminku", "píšu … maminka"], ["a2-future", "a2-aspect-intro", "a2-dative"]],
        ["Ahoj ___, pojď s ___! (Jana, my)", "Jano … námi", ["Jana … nás", "Jano … nám", "Jany … námi"], ["a2-vocative", "a2-pronoun-cases"]],
        ["___ bez ___! (ne, chodit, ty, deštník)", "Nechoď … deštníku", ["Nechodíš … deštník", "Nechoď … deštníkem", "Nechodit … deštníku"], ["a2-imperative", "a2-genitive"]]
      ]
    }
  };
})();
