/* B2 exam bank. Item: [prompt, answer, [3 wrong], extra skill ids?]. Text may be "czech" or [en, id]. */
(function () {
  var E = window.C3KO_EXAMS = window.C3KO_EXAMS || {};
  var PICK = ["Choose the correct form.", "Pilih bentuk yang benar."];
  var MEAN = ["What does it mean?", "Apa artinya?"];
  function m(cz, en, id, wrong) { return [cz, [en, id], wrong]; }
  function t(en, id) { return [en, id]; }

  E.B2 = {
    "b2-past-conditional": {
      ask: PICK,
      items: [
        ["Kdybych ___ věděl, byl bych přišel.", "byl", ["bych", "jsem", "by"]],
        ["___ bych ti zavolal. (já – muž)", "Byl", ["Byla", "Bych", "Jsem"]],
        [t("'I would have come.' (man)", "'Saya tentu sudah datang.' (laki-laki)"), "Byl bych přišel.", ["Bych byl přišel.", "Byl jsem přišel.", "Přišel bych byl."]],
        ["Kdybys ___ přišel, viděl bys ho.", "byl", ["bys", "jsi", "by"]],
        ["Kdyby ___ pršelo, byli bychom šli ven.", "nebylo", ["nebude", "není", "nebyl"]],
        ["Byli ___ to udělali. (my)", "bychom", ["jsme", "byste", "by"]],
        ["Byla ___ to věděla. (ona)", "by", ["bych", "bys", "jsem"]],
        ["Kdybyste byli ___ dřív, … (přijít)", "přišli", ["přijdete", "přijít", "přišel"]],
        ["Byl bych ___ doma. (zůstat)", "zůstal", ["zůstat", "zůstanu", "zůstal bych"]],
        [t("In everyday speech, 'Kdybych byl věděl, byl bych přišel' is usually said as:", "Dalam percakapan sehari-hari, 'Kdybych byl věděl, byl bych přišel' biasanya diucapkan:"), "Kdybych to věděl, přišel bych.", ["Kdybych věděl, jsem přišel.", "Když vím, přijdu.", "Jestli jsem věděl, přišel jsem."]],
        ["Kdybych byl ___ dřív, stihl bych vlak. (vstát)", "vstal", ["vstát", "vstanu", "vstávám"]]
      ]
    },
    "b2-passive": {
      ask: PICK,
      items: [
        ["Dům ___ postaven v roce 1900.", "byl", ["byla", "bylo", "byli"]],
        ["Kniha byla napsána ___. (Čapek)", "Čapkem", ["Čapka", "Čapkovi", "Čapek"]],
        ["Smlouva ___ podepsána včera.", "byla", ["byl", "bylo", "byly"]],
        ["Obchod je ___. (zavřít)", "zavřený", ["zavřel", "zavírá", "zavřít"]],
        ["Ten dům ___ staví už rok.", "se", ["si", "je", "byl"]],
        ["Auta ___ opravena.", "byla", ["byl", "byly", "bylo"]],
        ["Dopisy byly ___. (poslat)", "poslány", ["poslaný", "posláni", "poslal"]],
        ["Tady se ___. (kouřit, ne)", "nekouří", ["nekouřím", "nekouřeno", "nekouřit"]],
        ["Okno bylo ___ větrem. (rozbít)", "rozbito", ["rozbitý", "rozbita", "rozbil"]],
        ["Zákon byl schválen ___. (parlament)", "parlamentem", ["parlamentu", "parlament", "parlamentě"]],
        ["Večeře je ___. (připravit)", "připravena", ["připraven", "připraveno", "připravil"]]
      ]
    },
    "b2-passive-participles": {
      ask: ["Choose the short passive participle.", "Pilih partisip pasif bentuk pendek."],
      items: [
        ["udělat → ___", "udělán", ["udělaný", "udělal", "dělán"]],
        ["koupit → ___", "koupen", ["koupit", "kupen", "koupil"]],
        ["zaplatit → ___", "zaplacen", ["zaplaten", "zaplatěn", "zaplatil"]],
        ["vrátit → ___", "vrácen", ["vráten", "vrátěn", "vrátil"]],
        ["pustit → ___", "puštěn", ["pusten", "puštin", "pustěn"]],
        ["vzít → ___", "vzat", ["vzán", "vzetý", "vzal"]],
        ["otevřít → ___", "otevřen", ["otevřit", "otevřan", "otevřel"]],
        ["napsat → ___", "napsán", ["napisán", "napíšen", "napsal"]],
        ["Je to ___. (zaplatit)", "zaplaceno", ["zaplaceny", "zaplaten", "zaplatilo"]],
        ["___ okno (zavřít, adjective)", "zavřené", ["zavřeno", "zavřená", "zavřelo"]],
        ["Obchod je ___. (otevřít, adjective)", "otevřený", ["otevřel", "otevřít", "otevření"]]
      ]
    },
    "b2-verbal-nouns": {
      ask: ["Choose the verbal noun.", "Pilih nomina verbalnya."],
      items: [
        ["číst → ___", "čtení", ["čtenie", "četnost", "čtínka"]],
        ["psát → ___", "psaní", ["psání", "píšení", "psatí"]],
        ["vařit → ___", "vaření", ["vařání", "vařitba", "varení"]],
        ["pít → ___", "pití", ["pitění", "pínění", "pitě"]],
        ["kouřit → ___", "kouření", ["kouřitba", "kouřání", "kouřéní"]],
        ["___ zakázáno. (kouřit)", "Kouření", ["Kouřit", "Kouřeno", "Kouřící"]],
        ["Mám rád ___. (vařit)", "vaření", ["vařit", "vařený", "vařím"]],
        ["Jdu na ___. (plavat)", "plavání", ["plavat", "plaváni", "plavení"]],
        ["Bez ___ to nepůjde. (učit se)", "učení", ["učit", "učením", "učeny"]],
        ["Děkuju za ___. (pozvat)", "pozvání", ["pozvat", "pozvaní", "pozvětí"]],
        ["Čas na ___! (spát)", "spaní", ["spát", "spíní", "spatí"]]
      ]
    },
    "b2-iterative": {
      ask: PICK,
      items: [
        [t("chodit → iterative", "chodit → iteratif"), "chodívat", ["chodávat", "chodivat", "chozovat"]],
        [t("dělat → iterative", "dělat → iteratif"), "dělávat", ["dělívat", "dělovat", "dělat"]],
        [t("být → iterative", "být → iteratif"), "bývat", ["bývit", "bytívat", "bývovat"]],
        [t("mít → iterative", "mít → iteratif"), "mívat", ["mávat", "mějívat", "mítvat"]],
        [t("říkat → iterative", "říkat → iteratif"), "říkávat", ["říkívat", "řekávat", "říkovat"]],
        m("Bývá tu plno.", "It tends to be full here.", "Di sini biasanya penuh.", [t("It was full here once.", "Dulu sekali di sini penuh."), t("It will be full here.", "Di sini akan penuh."), t("It is never full here.", "Di sini tidak pernah penuh.")]),
        m("Chodívali jsme k řece.", "We used to go to the river.", "Dulu kami biasa pergi ke sungai.", [t("We went to the river once.", "Kami pernah sekali ke sungai."), t("We are going to the river.", "Kami sedang pergi ke sungai."), t("We will go to the river.", "Kami akan pergi ke sungai.")]),
        m("Večer mívá hlad.", "He usually gets hungry in the evening.", "Dia biasanya lapar di malam hari.", [t("He was hungry last night.", "Dia lapar tadi malam."), t("He will be hungry tonight.", "Dia akan lapar malam ini."), t("He is never hungry.", "Dia tidak pernah lapar.")]),
        ["Na podzim ___ často deštivo. (být, iterative)", "bývá", ["bude", "byl", "bývat"]],
        ["Dědeček nám ___ pohádky. (vyprávět, iterative)", "vyprávíval", ["vyprávívat", "vyprávěvál", "vyprávovával"]],
        ["Kdysi tu ___ obchod. (být, iterative)", "býval", ["bývat", "bývá", "bylo"]]
      ]
    },
    "b2-possessive-adjectives": {
      ask: PICK,
      items: [
        ["To je ___ dům. (Petr)", "Petrův", ["Petrova", "Petrovo", "Petrovy"]],
        ["To je ___ sestra. (Petr)", "Petrova", ["Petrův", "Petrovo", "Petrovi"]],
        ["To je ___ auto. (Petr)", "Petrovo", ["Petrův", "Petrova", "Petrovou"]],
        ["To je ___ pes. (Jana)", "Janin", ["Janina", "Janino", "Janův"]],
        ["To je ___ kniha. (Jana)", "Janina", ["Janin", "Janino", "Janova"]],
        ["To je ___ auto. (Jana)", "Janino", ["Janin", "Janina", "Janovo"]],
        ["___ recept (maminka)", "maminčin", ["maminkův", "maminkin", "maminčina"]],
        ["Bydlím ve ___ ulici. (Smetana)", "Smetanově", ["Smetanova", "Smetanovu", "Smetanovy"]],
        ["Byl jsem u ___ rodičů. (Petr)", "Petrových", ["Petrovi", "Petrovy", "Petrův"]],
        [t("When do you use the genitive instead (dům mého bratra)?", "Kapan memakai genitif (dům mého bratra)?"), t("when the owner has an adjective or pronoun", "jika pemiliknya memakai kata sifat atau kata ganti"), [t("when the owner is a man", "jika pemiliknya laki-laki"), t("when the thing is feminine", "jika bendanya feminin"), t("always in the plural", "selalu dalam jamak")]],
        ["Mluvil jsem s ___ bratrem. (Jana)", "Janiným", ["Janin", "Janinu", "Janovým"]]
      ]
    },
    "b2-complex-clauses": {
      ask: ["Choose the linking word.", "Pilih kata penghubungnya."],
      items: [
        ["___ pršelo, šli jsme ven.", "Přestože", ["Protože", "Jakmile", "Dokud"]],
        ["Počkám, ___ nepřijdeš.", "dokud", ["jakmile", "přestože", "zatímco"]],
        ["___ to budu vědět, ozvu se.", "Jakmile", ["Přestože", "Zatímco", "Ačkoli"]],
        ["Já pracuju, ___ ty spíš.", "zatímco", ["jakmile", "přestože", "aby"]],
        ["___ odejdeš, zavolej mi.", "Než", ["Přestože", "Zatímco", "Ačkoli"]],
        ["___ chceš, pomůžu ti.", "Pokud", ["Přestože", "Zatímco", "Ačkoli"]],
        ["___ byl unavený, pracoval dál.", "Ačkoli", ["Jakmile", "Pokud", "Než"]],
        ["Zůstanu tu, dokud ___ budeš potřebovat.", "mě", ["mi", "já", "mně"]],
        ["___ přišel domů, šel spát.", "Jakmile", ["Přestože", "Zatímco", "Pokud"]],
        ["Šel ven, i ___ pršelo.", "když", ["jakmile", "aby", "než"]],
        ["Dokud ___, nepůjdu. (ty, ne, přijít)", "nepřijdeš", ["přijdeš", "nepřišel", "přijít"]]
      ]
    },
    "b2-indirect-questions": {
      ask: PICK,
      items: [
        ["Nevím, ___ přijde. (neutral)", "jestli", ["že", "aby", "kdyby"]],
        ["Zeptejte se, ___ je to možné. (formal)", "zda", ["že", "aby", "kdyby"]],
        ["Nevím, přijde___. (very formal)", "-li", ["-ži", "-ly", "-ti"]],
        ["Zajímá mě, ___ máte volno.", "jestli", ["že", "aby", "který"]],
        ["Nevím, ___ to stojí.", "kolik", ["jestli", "zda", "aby"]],
        ["Zeptal se, ___ jsem.", "odkud", ["jestli", "zda", "že"]],
        ["Nevím, zda ___ čas. (on, mít)", "má", ["mít", "mám", "míti"]],
        ["Ptal se, ___ už jsem jedl.", "jestli", ["že", "aby", "který"]],
        [t("Which is the most formal?", "Mana yang paling formal?"), "Nevím, přijde-li.", ["Nevím, jestli přijde.", "Nevím, zda přijde.", "Nevím, jestli by přišel."]],
        ["Řekni mi, ___ půjdeš.", "jestli", ["aby", "který", "kdyby"]],
        ["Nejsem si jistý, ___ to bude stačit.", "zda", ["aby", "který", "kdyby"]]
      ]
    },
    "b2-word-formation": {
      ask: PICK,
      items: [
        [t("dům → small", "dům → kecil"), "domek", ["domík", "dómek", "domovek"]],
        [t("pivo → small (affectionate)", "pivo → kecil (bernada sayang)"), "pivko", ["pivek", "pivčo", "pivetko"]],
        [t("voda → small", "voda → kecil"), "vodička", ["vodka", "vodíček", "vodek"]],
        [t("učit → person who teaches", "učit → orang yang mengajar"), "učitel", ["učník", "učař", "učec"]],
        [t("úřad → person who works there", "úřad → orang yang bekerja di sana"), "úředník", ["úřadník", "úřadel", "úřadař"]],
        [t("student → female", "student → perempuan"), "studentka", ["studentová", "studentice", "studentyně"]],
        [t("Novák → his wife", "Novák → istrinya"), "Nováková", ["Novákka", "Novákice", "Novákyně"]],
        [t("Praha → adjective", "Praha → kata sifat"), "pražský", ["prahový", "prahský", "pražní"]],
        [t("zima → adjective", "zima → kata sifat"), "zimní", ["zimový", "zimský", "zimavý"]],
        [t("lék → doctor", "lék → dokter"), "lékař", ["lékník", "lékel", "lékec"]],
        [t("prodávat → shop assistant (man)", "prodávat → pramuniaga (laki-laki)"), "prodavač", ["prodávač", "prodatel", "prodavník"]]
      ]
    },
    "b2-aspect-imperative": {
      ask: PICK,
      items: [
        ["___ okno, prosím. (zavřít, ty)", "Zavři", ["Zavřít", "Zavřeš", "Zavřel"]],
        ["___ okno! Je tu teplo. (ne, zavřít / zavírat)", "Nezavírej", ["Nezavři", "Nezavřít", "Nezavíráš"]],
        ["___ to! (ne, dělat / udělat)", "Nedělej", ["Neudělej", "Nedělat", "Neděláš"]],
        ["Pozor, ___! (ne, upadnout = warning)", "neupadni", ["nepadej", "neupadnout", "nepadáš"]],
        ["___ si, prosím. (posadit se, vy)", "Posaďte", ["Posadíte", "Sedáte", "Posadit"]],
        ["___ mi zítra! (zavolat, ty)", "Zavolej", ["Zavolat", "Zavoláš", "Zavolal"]],
        ["___ tolik! (ne, jíst / sníst)", "Nejez", ["Nesněz", "Nejíst", "Nejíš"]],
        ["___ mi to, prosím. (dát, ty)", "Dej", ["Dát", "Dáš", "Dával"]],
        ["___ ten dopis! (ne, posílat / poslat)", "Neposílej", ["Neposlal", "Neposlat", "Neposíláš"]],
        [t("Positive commands usually use…", "Perintah positif biasanya memakai…"), t("the perfective", "perfektif"), [t("the imperfective", "imperfektif"), t("the infinitive", "infinitif"), t("the past tense", "kala lampau")]],
        [t("A negative perfective command (Neupadni!) is…", "Perintah perfektif negatif (Neupadni!) adalah…"), t("a warning", "peringatan"), [t("a normal ban", "larangan biasa"), t("a polite request", "permintaan sopan"), t("a question", "pertanyaan")]]
      ]
    },
    "b2-word-order": {
      ask: ["Choose the sentence that fits.", "Pilih kalimat yang cocok."],
      items: [
        [t("Answer to 'Who bought the car?'", "Jawaban untuk 'Siapa yang membeli mobil itu?'"), "Auto koupil Petr.", ["Petr koupil auto.", "Petr auto koupil.", "Koupil Petr auto."]],
        [t("Answer to 'What did Petr buy?'", "Jawaban untuk 'Petr membeli apa?'"), "Petr koupil auto.", ["Auto koupil Petr.", "Auto Petr koupil.", "Koupil auto Petr."]],
        [t("Stress that it was GRANDMA who baked the cake:", "Tekankan bahwa NENEK yang memanggang kue:"), "Ten dort upekla babička.", ["Babička upekla ten dort.", "Upekla babička ten dort.", "Babička ten dort upekla."]],
        [t("Answer to 'Where does Jana live?'", "Jawaban untuk 'Jana tinggal di mana?'"), "Jana bydlí v Brně.", ["V Brně bydlí Jana.", "Bydlí v Brně Jana.", "V Brně Jana bydlí."]],
        [t("Answer to 'Who lives in Brno?'", "Jawaban untuk 'Siapa yang tinggal di Brno?'"), "V Brně bydlí Jana.", ["Jana bydlí v Brně.", "Jana v Brně bydlí.", "Bydlí Jana v Brně."]],
        [t("Answer to 'When is Petr coming?'", "Jawaban untuk 'Kapan Petr datang?'"), "Petr přijde zítra.", ["Zítra přijde Petr.", "Přijde Petr zítra.", "Zítra Petr přijde."]],
        [t("Answer to 'Who is coming tomorrow?'", "Jawaban untuk 'Siapa yang datang besok?'"), "Zítra přijde Petr.", ["Petr přijde zítra.", "Petr zítra přijde.", "Zítra Petr přijde."]],
        [t("New information in a Czech sentence usually goes…", "Informasi baru dalam kalimat Ceko biasanya diletakkan…"), t("at the end", "di akhir"), [t("at the start", "di awal"), t("right after the verb", "tepat setelah kata kerja"), t("anywhere, it doesn't matter", "di mana saja, tidak penting")]],
        [t("Answer to 'What does Jana drink?'", "Jawaban untuk 'Jana minum apa?'"), "Jana pije čaj.", ["Čaj pije Jana.", "Pije čaj Jana.", "Čaj Jana pije."]],
        [t("Answer to 'Who drinks tea?'", "Jawaban untuk 'Siapa yang minum teh?'"), "Čaj pije Jana.", ["Jana pije čaj.", "Jana čaj pije.", "Pije Jana čaj."]],
        [t("Answer to 'Who wrote the email?'", "Jawaban untuk 'Siapa yang menulis email itu?'"), "Ten e-mail napsal šéf.", ["Šéf napsal ten e-mail.", "Napsal šéf ten e-mail.", "Šéf ten e-mail napsal."]]
      ]
    },
    "b2-colloquial": {
      ask: PICK,
      items: [
        [t("dobrý → colloquial", "dobrý → lisan sehari-hari"), "dobrej", ["dobrí", "dobrá", "dobrů"]],
        [t("dobré pivo → colloquial", "dobré pivo → lisan sehari-hari"), "dobrý pivo", ["dobrej pivo", "dobrá pivo", "dobrí pivo"]],
        [t("s kamarády → colloquial", "s kamarády → lisan sehari-hari"), "s kamarádama", ["s kamarádami", "s kamarádoma", "s kamarádech"]],
        [t("okno → colloquial", "okno → lisan sehari-hari"), "vokno", ["hokno", "okýnko", "ókno"]],
        [t("byl jsem → colloquial", "byl jsem → lisan sehari-hari"), "byl sem", ["byl jem", "bul sem", "byl jsme"]],
        [t("velký dům → colloquial", "velký dům → lisan sehari-hari"), "velkej dům", ["velký dóm", "velkí dům", "velka dům"]],
        [t("mladé ženy → colloquial", "mladé ženy → lisan sehari-hari"), "mladý ženy", ["mladej ženy", "mladí ženy", "mladá ženy"]],
        [t("s dětmi → colloquial", "s dětmi → lisan sehari-hari"), "s dětma", ["s dětech", "s dětima", "s dětám"]],
        m("Dáš si jedno malý?", "Will you have a small one (beer)?", "Mau yang kecil (bir)?", [t("Will you give me a small one?", "Mau kasih saya yang kecil?"), t("Do you have a small one?", "Kamu punya yang kecil?"), t("Is it a small one?", "Apakah itu yang kecil?")]),
        [t("Standard form of 'nový auto':", "Bentuk baku dari 'nový auto':"), "nové auto", ["nový auto", "novej auto", "nová auto"]],
        [t("Standard form of 'velkej problém':", "Bentuk baku dari 'velkej problém':"), "velký problém", ["velkej problém", "velké problém", "velkí problém"]]
      ]
    },
    "b2-review": {
      ask: ["Choose the correct combination.", "Pilih kombinasi yang benar."],
      items: [
        ["Smlouva ___ ředitelem, přestože ji právník ___.", "byla podepsána … nezkontroloval", ["byla podepsána … zkontroloval", "byl podepsán … nezkontroloval", "byla podepsána … nezkontroluje"], ["b2-passive", "b2-complex-clauses"]],
        ["Kdybych ___, že je obchod ___, byl bych zůstal doma.", "byl věděl … zavřený", ["věděl byl … zavřel", "byl věděl … zavřít", "bych věděl … zavřený"], ["b2-past-conditional", "b2-passive-participles"]],
        ["V létě jsme ___ k řece, kde se ___ plavat.", "chodívali … dalo", ["chodili jsme … dal", "chodívat … dalo", "chodívali … dala"], ["b2-iterative"]],
        ["___ na ___ dárek!", "Nezapomeň … Janin", ["Nezapomínáš … Janin", "Nezapomeň … Janina", "Nezapomenout … Janin"], ["b2-aspect-imperative", "b2-possessive-adjectives"]],
        ["Zeptej se, ___ je ___ v knihovně zdarma.", "zda … čtení", ["že … čtení", "zda … čtený", "aby … čtení"], ["b2-indirect-questions", "b2-verbal-nouns"]],
        ["Dáš si se mnou ___? (colloquial)", "jedno malý", ["jednu malou", "jedno malej", "jeden malý"], ["b2-colloquial"]],
        ["Ten dort ___ babička, ___ byla unavená.", "upekla … přestože", ["pekla … jakmile", "upekl … přestože", "upekla … aby"], ["b2-word-order", "b2-complex-clauses"]],
        ["Dům ___ v roce 1900 a ___ dodnes.", "byl postaven … stojí", ["byl postavena … stojí", "je postaven … stál", "bylo postaveno … stojí"], ["b2-passive"]],
        ["Ve ___ restauraci je ___ zakázáno. (Petr, kouřit)", "Petrově … kouření", ["Petrovy … kouřit", "Petrova … kouření", "Petrově … kouřit"], ["b2-possessive-adjectives", "b2-verbal-nouns"]],
        ["Jakmile ___ hotovo, ___ ti. (být, zavolat)", "bude … zavolám", ["je … budu zavolat", "bude … zavolal bych", "bude … zavolat"], ["b2-complex-clauses"]],
        ["Byl bych ___, kdyby ___ hezky.", "šel ven … bylo", ["šel ven … je", "jít ven … bylo", "šel ven … bude"], ["b2-past-conditional"]]
      ]
    }
  };
})();
