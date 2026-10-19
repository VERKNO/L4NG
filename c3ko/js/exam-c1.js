/* C1 exam bank. Item: [prompt, answer, [3 wrong], extra skill ids?]. Text may be "czech" or [en, id]. */
(function () {
  var E = window.C3KO_EXAMS = window.C3KO_EXAMS || {};
  var PICK = ["Choose the correct form.", "Pilih bentuk yang benar."];
  var MEAN = ["What does it mean?", "Apa artinya?"];
  function m(cz, en, id, wrong) { return [cz, [en, id], wrong]; }
  function t(en, id) { return [en, id]; }

  E.C1 = {
    "c1-active-participles": {
      ask: PICK,
      items: [
        [t("rostou → present active participle", "rostou → partisip aktif kini"), "rostoucí", ["rostící", "rostojící", "rostavý"]],
        [t("pracují → present active participle", "pracují → partisip aktif kini"), "pracující", ["pracovající", "pracujoucí", "pracujícný"]],
        [t("mluví → present active participle", "mluví → partisip aktif kini"), "mluvící", ["mluvoucí", "mluvajicí", "mluvivší"]],
        [t("nesou → present active participle", "nesou → partisip aktif kini"), "nesoucí", ["nesící", "nesujicí", "nesoušící"]],
        [t("dělají → present active participle", "dělají → partisip aktif kini"), "dělající", ["dělácí", "dělavší", "dělojící"]],
        ["___ matka (pracovat)", "pracující", ["pracovavší", "pracujícná", "pracovaná"]],
        ["___ ceny (růst)", "rostoucí", ["rostlé", "rostené", "rostoucích"]],
        ["studenti ___ česky (mluvit)", "mluvící", ["mluvení", "mluvivší", "mluvicí se"]],
        [t("přijít → past active participle (rare)", "přijít → partisip aktif lampau (jarang)"), "přišedší", ["přijdoucí", "přišlý", "přicházející"]],
        [t("udělat → past active participle (rare)", "udělat → partisip aktif lampau (jarang)"), "udělavší", ["udělající", "udělaný", "udělávací"]],
        m("vedoucí pracovník", "leading (senior) employee", "pegawai pimpinan", [t("former employee", "mantan pegawai"), t("new employee", "pegawai baru"), t("employee who is led", "pegawai yang dipimpin")])
      ]
    },
    "c1-transgressives": {
      ask: ["Transgressives: form and meaning.", "Transgresif: bentuk dan arti."],
      items: [
        m("Chtě nechtě musel souhlasit.", "Like it or not, he had to agree.", "Mau tidak mau, dia harus setuju.", [t("He wanted to agree.", "Dia ingin setuju."), t("He didn't want anything.", "Dia tidak menginginkan apa-apa."), t("He agreed twice.", "Dia setuju dua kali.")]),
        [t("dělat → present transgressive (masc.)", "dělat → transgresif kini (mask.)"), "dělaje", ["dělajíc", "dělajíce", "dělav"]],
        [t("dělat → present transgressive (fem.)", "dělat → transgresif kini (fem.)"), "dělajíc", ["dělaje", "dělajíce", "dělavši"]],
        [t("udělat → past transgressive (masc.)", "udělat → transgresif lampau (mask.)"), "udělav", ["udělavši", "udělavše", "dělaje"]],
        [t("udělat → past transgressive (plural)", "udělat → transgresif lampau (jamak)"), "udělavše", ["udělav", "udělavši", "dělajíce"]],
        m("Vrátiv se domů, usedl.", "Having returned home, he sat down.", "Setelah pulang, dia duduk.", [t("While going home, he sat down.", "Sambil pulang, dia duduk."), t("He will return home and sit down.", "Dia akan pulang lalu duduk."), t("He sat down instead of going home.", "Dia duduk alih-alih pulang.")]),
        m("takříkajíc", "so to speak", "boleh dikatakan", [t("they say that", "katanya"), t("without saying", "tanpa berkata"), t("as I said", "seperti saya katakan")]),
        m("počínaje pondělím", "starting with Monday", "mulai hari Senin", [t("ending on Monday", "berakhir hari Senin"), t("except Monday", "kecuali hari Senin"), t("only on Monday", "hanya hari Senin")]),
        m("Sedíc u okna, četla.", "Sitting by the window, she was reading.", "Sambil duduk di dekat jendela, dia membaca.", [t("She sat by the window after reading.", "Dia duduk di dekat jendela setelah membaca."), t("She read about a window.", "Dia membaca tentang jendela."), t("She will sit by the window.", "Dia akan duduk di dekat jendela.")]),
        ["___ domů, uviděl ji. (jít, present, masc.)", "Jda", ["Jdouc", "Jdouce", "Šed"]],
        [t("Where do you mostly meet transgressives today?", "Di mana transgresif paling sering ditemui sekarang?"), t("in literature and fixed phrases", "dalam sastra dan ungkapan tetap"), [t("in everyday speech", "dalam percakapan sehari-hari"), t("in text messages", "dalam pesan singkat"), t("in children's books", "dalam buku anak-anak")]]
      ]
    },
    "c1-short-adjectives": {
      ask: PICK,
      items: [
        ["Petr je s tím ___. (spokojený)", "spokojen", ["spokojena", "spokojeno", "spokojeni"]],
        ["Jana je s tím ___. (spokojený)", "spokojena", ["spokojen", "spokojeno", "spokojeny"]],
        ["Oni jsou ___. (hotový)", "hotovi", ["hotov", "hotova", "hotovy"]],
        ["Nejsem si ___. (jistý, muž)", "jist", ["jista", "jisto", "jisti"]],
        ["Je ___ všeho. (schopný, muž)", "schopen", ["schopna", "schopno", "schopni"]],
        ["Jana byla ___ dva týdny. (nemocný)", "nemocna", ["nemocen", "nemocno", "nemocny"]],
        ["Jsme vám ___. (povinný, muži)", "povinni", ["povinen", "povinna", "povinny"]],
        ["Jsem ___! (rád, žena)", "ráda", ["rád", "rádi", "rádo"]],
        ["Kdo je ___? (vinný, muž)", "vinen", ["vinna", "vinno", "vinni"]],
        [t("Short-form adjectives are used mainly as…", "Kata sifat bentuk pendek terutama dipakai sebagai…"), t("predicates (after být)", "predikat (setelah být)"), [t("subjects", "subjek"), t("adverbs", "kata keterangan"), t("words before a noun", "kata sebelum kata benda")]],
        ["Je ___ jako ryba. (zdravý, muž)", "zdráv", ["zdráva", "zdrávo", "zdrávi"]]
      ]
    },
    "c1-jenz": {
      ask: PICK,
      items: [
        ["zákon, ___ vstoupí v platnost", "jenž", ["jež", "jíž", "jehož"]],
        ["firma, pro ___ pracuji", "niž", ["jenž", "níž", "nímž"]],
        ["muž, o ___ jsem mluvil", "němž", ["nímž", "němu", "jenž"]],
        ["kniha, ___ jsem četl", "již", ["jíž", "jež", "jenž"]],
        ["lidé, s ___ pracuji", "nimiž", ["nímž", "jimž", "jež"]],
        ["dům, ___ střecha je červená", "jehož", ["jemuž", "jenž", "jímž"]],
        ["žena, ___ jsem dal květiny", "jíž", ["již", "níž", "jež"]],
        ["město, ___ obyvatelé jsou milí", "jehož", ["jenž", "jemuž", "jímž"]],
        ["problémy, ___ řešíme", "jež", ["jenž", "jimž", "jichž"]],
        [t("'jenž' is a formal equivalent of…", "'jenž' adalah padanan formal dari…"), "který", ["co", "jaký", "kdo"]],
        ["projekt, na ___ pracujeme", "němž", ["nímž", "jenž", "němu"]]
      ]
    },
    "c1-register": {
      ask: ["Choose the right register.", "Pilih ragam yang tepat."],
      items: [
        [t("Written standard (spisovná):", "Baku tulis (spisovná):"), "Byli bychom rádi.", ["Byli bysme rádi.", "Bysme byli rádi.", "Byli by sme rádi."]],
        [t("Common spoken (obecná):", "Lisan umum (obecná):"), "To je dobrej nápad.", ["To je dobrý nápad.", "To jest dobrý nápad.", "To je dobrá nápad."]],
        [t("Best for an email to an office:", "Paling cocok untuk email ke kantor:"), "Mohl byste mi prosím sdělit…", ["Můžeš mi říct…", "Hele, řekni mi…", "Dej mi vědět…"]],
        [t("Written standard of 'pracujou':", "Bentuk baku tulis dari 'pracujou':"), "pracují", ["pracujou", "pracujó", "pracujú"]],
        [t("Written standard of 'velkej':", "Bentuk baku tulis dari 'velkej':"), "velký", ["velkej", "velkí", "velkou"]],
        [t("Which sounds most formal?", "Mana yang paling formal?"), "Dovolte mi poděkovat.", ["Díky moc.", "Dík.", "Děkuju ti."]],
        [t("Spoken standard of 'bychom':", "Bentuk baku lisan dari 'bychom':"), "bysme", ["bychme", "bysmy", "bysem"]],
        [t("Common spoken form of 'okno':", "Bentuk lisan umum dari 'okno':"), "vokno", ["ókno", "okýnko", "hokno"]],
        [t("Fits the end of a formal letter:", "Cocok untuk penutup surat formal:"), "S pozdravem", ["Čau", "Měj se", "Ahoj"]],
        [t("Written standard of 's kamarádama':", "Bentuk baku tulis dari 's kamarádama':"), "s kamarády", ["s kamarádama", "s kamarádami", "s kamarádech"]],
        [t("Best greeting at a job interview:", "Salam terbaik saat wawancara kerja:"), "Dobrý den.", ["Ahoj.", "Čau.", "Nazdar."]]
      ]
    },
    "c1-agreement": {
      ask: PICK,
      items: [
        ["Petr a Jana ___. (přijít)", "přišli", ["přišly", "přišla", "přišel"]],
        ["Jana a Eva ___. (přijít)", "přišly", ["přišli", "přišla", "přišlo"]],
        ["Děvčata ___. (přijít)", "přišla", ["přišly", "přišli", "přišlo"]],
        ["Pět lidí ___. (přijít)", "přišlo", ["přišli", "přišly", "přišel"]],
        ["Většina lidí ___. (souhlasit)", "souhlasila", ["souhlasili", "souhlasilo", "souhlasil"]],
        ["Několik studentů ___. (chybět)", "chybělo", ["chyběli", "chyběly", "chyběla"]],
        ["Vlaky ___ pozdě. (jet)", "jely", ["jeli", "jela", "jelo"]],
        ["Kluci a holky ___. (tančit)", "tančili", ["tančily", "tančila", "tančilo"]],
        ["Auta ___ rychle. (jet)", "jela", ["jely", "jeli", "jelo"]],
        ["Děti si ___. (hrát)", "hrály", ["hráli", "hrála", "hrálo"]],
        ["Dva muži ___. (odejít)", "odešli", ["odešlo", "odešly", "odešla"]]
      ]
    },
    "c1-nominal-style": {
      ask: ["Choose the formal (nominal) version.", "Pilih versi formal (nominal)."],
      items: [
        ["zkontrolovat → ___", "provést kontrolu", ["udělat kontrolovat", "provést kontrolovat", "být kontrola"]],
        ["dohodnout se → ___", "dojít k dohodě", ["přijít dohodu", "dojít dohodou", "udělat dohodnout"]],
        ["podle → ___", "na základě", ["v základě", "na základu", "za základem"]],
        ["aby → ___ (+ genitive)", "za účelem", ["pro účel", "na účelu", "v účelem"]],
        ["kvůli → ___", "z důvodu", ["pro důvod", "na důvod", "v důvodu"]],
        [t("Which is nominal style?", "Mana yang gaya nominal?"), "Bylo rozhodnuto o zvýšení cen.", ["Rozhodli jsme se zvýšit ceny.", "Zvýšíme ceny.", "Ceny jsme zvedli."]],
        ["rozhodnout → ___", "učinit rozhodnutí", ["dělat rozhodnout", "učinit rozhodovat", "jít rozhodnutím"]],
        ["v souvislosti ___ projektem", "s", ["na", "za", "pro"]],
        ["Na základě ___ žádosti", "vaší", ["vaše", "vašou", "vaši"]],
        [t("Nominal style suits…", "Gaya nominal cocok untuk…"), t("official and formal texts", "teks resmi dan formal"), [t("chatting with friends", "mengobrol dengan teman"), t("text messages", "pesan singkat"), t("children's stories", "cerita anak-anak")]],
        ["zaplatit → ___", "provést platbu", ["udělat platit", "provést platit", "dát zaplacení"]]
      ]
    },
    "c1-connectors": {
      ask: MEAN,
      items: [
        m("nicméně", "however", "namun", [t("therefore", "oleh karena itu"), t("because", "karena"), t("moreover", "selain itu")]),
        m("tudíž", "therefore", "oleh karena itu", [t("however", "namun"), t("although", "walaupun"), t("as for", "mengenai")]),
        m("jelikož", "since, because", "karena", [t("however", "namun"), t("therefore", "oleh karena itu"), t("as soon as", "begitu")]),
        m("neboť", "for, because", "sebab", [t("or", "atau"), t("however", "namun"), t("unless", "kecuali jika")]),
        m("pokud jde o", "as for", "mengenai", [t("if it goes", "jika berjalan"), t("because of", "karena"), t("instead of", "alih-alih")]),
        m("vzhledem k", "given, in view of", "mengingat", [t("in front of", "di depan"), t("compared with", "dibandingkan dengan"), t("despite", "meskipun")]),
        m("naopak", "on the contrary", "sebaliknya", [t("again", "lagi"), t("afterwards", "setelah itu"), t("for example", "misalnya")]),
        m("zároveň", "at the same time", "sekaligus", [t("finally", "akhirnya"), t("instead", "sebagai gantinya"), t("earlier", "sebelumnya")]),
        m("mimo jiné", "among other things", "antara lain", [t("except others", "kecuali yang lain"), t("outside", "di luar"), t("otherwise", "jika tidak")]),
        ["___ jsme nedostali odpověď, píšeme znovu.", "Jelikož", ["Nicméně", "Tudíž", "Naopak"]],
        ["Cena je vysoká, ___ kvalita je dobrá.", "avšak", ["tudíž", "jelikož", "neboť"]]
      ]
    },
    "c1-ellipsis": {
      ask: ["Choose the natural shortened form.", "Pilih bentuk singkat yang wajar."],
      items: [
        [t("Shorten: 'Petr šel do kina a Jana šla do divadla.'", "Persingkat: 'Petr šel do kina a Jana šla do divadla.'"), "Petr šel do kina, Jana do divadla.", ["Petr šel do kina, Jana šla.", "Petr do kina, Jana šla do divadla.", "Šel do kina, do divadla."]],
        ["Půjdeš? — ___", "Půjdu.", ["Ano jdu půjdu.", "Já.", "Půjdeš."]],
        ["Já kávu, ty ___?", "čaj", ["čaje", "čajem", "čaji"]],
        ["Máš čas? — ___", "Mám.", ["Mám čas mám.", "Ano mít.", "Máš."]],
        ["Petr má rád pivo, Jana ___.", "víno", ["vína", "vínem", "vínu"]],
        ["Já jsem z Prahy, on z ___.", "Brna", ["Brno", "Brně", "Brnem"]],
        ["Byl jsi tam? — ___", "Byl.", ["Jsem byl.", "Byl jsi.", "Ano byt."]],
        ["Já pracuju v Praze, Eva v ___.", "Ostravě", ["Ostrava", "Ostravu", "Ostravy"]],
        ["Kdo to udělal? — ___", "Petr.", ["Petra.", "Petrovi.", "Petrem."]],
        ["Co si dáte? — ___, prosím.", "Dvě kávy", ["Dvě kávu", "Dva kávy", "Dvě káv"]],
        [t("What does ellipsis do?", "Apa fungsi elipsis?"), t("leaves out words that are clear from context", "menghilangkan kata yang sudah jelas dari konteks"), [t("repeats words for emphasis", "mengulang kata untuk penekanan"), t("changes word order", "mengubah urutan kata"), t("adds polite forms", "menambah bentuk sopan")]]
      ]
    },
    "c1-government": {
      ask: PICK,
      items: [
        ["Bojím se ___. (pes)", "psa", ["psem", "psovi", "pes"]],
        ["Zeptal jsem se ___. (učitel)", "učitele", ["učiteli", "učitelem", "učitel"]],
        ["Zúčastnil jsem se ___. (schůze)", "schůze", ["schůzi", "schůzí", "schůzu"]],
        ["Věřím ___. (lidé)", "lidem", ["lidi", "lidmi", "lidí"]],
        ["Děkuju ti za ___. (pomoc)", "pomoc", ["pomoci", "pomocí", "pomocu"]],
        ["Záleží na ___. (ty)", "tobě", ["tebe", "ti", "tebou"]],
        ["Starám se o ___. (děti)", "děti", ["dětí", "dětem", "dětmi"]],
        ["Jsem hrdý na ___. (syn)", "syna", ["synovi", "synem", "syn"]],
        ["Sklenice je plná ___. (voda)", "vody", ["vodu", "vodou", "vodě"]],
        ["Zabývám se ___. (ekonomie)", "ekonomií", ["ekonomie", "ekonomii", "ekonomiou"]],
        ["Vzpomínám na ___. (léto)", "léto", ["létě", "létem", "léta"]]
      ]
    },
    "c1-commas": {
      ask: ["Choose the correct punctuation.", "Pilih tanda baca yang benar."],
      items: [
        ["(vím že přijdeš)", "Vím, že přijdeš.", ["Vím že, přijdeš.", "Vím že přijdeš.", "Vím, že, přijdeš."]],
        ["(chtěl ale nemohl)", "Chtěl, ale nemohl.", ["Chtěl ale nemohl.", "Chtěl ale, nemohl.", "Chtěl, ale, nemohl."]],
        ["(Petře pojď sem)", "Petře, pojď sem.", ["Petře pojď sem.", "Petře pojď, sem.", "Petře, pojď, sem."]],
        ["(Petr a Jana přišli)", "Petr a Jana přišli.", ["Petr, a Jana přišli.", "Petr a Jana, přišli.", "Petr, a Jana, přišli."]],
        ["(muž který tu bydlí je lékař)", "Muž, který tu bydlí, je lékař.", ["Muž, který tu bydlí je lékař.", "Muž který tu bydlí, je lékař.", "Muž který tu bydlí je lékař."]],
        ["(nevím jestli přijde)", "Nevím, jestli přijde.", ["Nevím jestli přijde.", "Nevím jestli, přijde.", "Nevím, jestli, přijde."]],
        ["(učím se česky a anglicky)", "Učím se česky a anglicky.", ["Učím se česky, a anglicky.", "Učím se, česky a anglicky.", "Učím se česky a, anglicky."]],
        ["(když prší zůstanu doma)", "Když prší, zůstanu doma.", ["Když prší zůstanu doma.", "Když, prší zůstanu doma.", "Když prší zůstanu, doma."]],
        ["(řekl abych počkal)", "Řekl, abych počkal.", ["Řekl abych počkal.", "Řekl abych, počkal.", "Řekl, abych, počkal."]],
        ["(pracuje a proto nemá čas)", "Pracuje, a proto nemá čas.", ["Pracuje a proto nemá čas.", "Pracuje a proto, nemá čas.", "Pracuje, a proto, nemá čas."]],
        ["(dobrý den pane Nováku)", "Dobrý den, pane Nováku.", ["Dobrý den pane Nováku.", "Dobrý, den pane Nováku.", "Dobrý den pane, Nováku."]]
      ]
    },
    "c1-idioms": {
      ask: PICK,
      items: [
        m("vzít něco v úvahu", "take something into account", "mempertimbangkan sesuatu", [t("take something away", "membawa pergi sesuatu"), t("doubt something", "meragukan sesuatu"), t("forget something", "melupakan sesuatu")]),
        m("mít něco na mysli", "have something in mind", "memaksudkan sesuatu", [t("be worried", "khawatir"), t("remember something", "mengingat sesuatu"), t("be crazy", "gila")]),
        m("jít někomu na nervy", "get on someone's nerves", "membuat seseorang jengkel", [t("calm someone down", "menenangkan seseorang"), t("visit someone", "mengunjungi seseorang"), t("be nervous", "gugup")]),
        m("dát někomu za pravdu", "agree that someone is right", "membenarkan seseorang", [t("tell someone the truth", "mengatakan yang sebenarnya"), t("pay someone", "membayar seseorang"), t("blame someone", "menyalahkan seseorang")]),
        m("mít něco za sebou", "have something behind you (done)", "sudah melewati sesuatu", [t("be behind schedule", "terlambat dari jadwal"), t("hide something", "menyembunyikan sesuatu"), t("follow someone", "mengikuti seseorang")]),
        ["Musíme to vzít ___ úvahu.", "v", ["na", "do", "za"]],
        ["Co tím máš na ___?", "mysli", ["mysl", "mysle", "myslí"]],
        ["Ten hluk mi jde na ___.", "nervy", ["nervech", "nervům", "nervů"]],
        ["Musím ti dát za ___.", "pravdu", ["pravda", "pravdě", "pravdy"]],
        ["Zkoušku už mám za ___.", "sebou", ["sebe", "sobě", "se"]],
        m("mít štěstí", "be lucky", "beruntung", [t("be happy", "bahagia"), t("have a party", "mengadakan pesta"), t("be in a hurry", "terburu-buru")])
      ]
    },
    "c1-review": {
      ask: ["Choose the correct combination.", "Pilih kombinasi yang benar."],
      items: [
        ["Vzhledem k tomu, že se konference ___ pět set ___, …", "zúčastnilo … lidí", ["zúčastnili … lidí", "zúčastnilo … lidé", "zúčastnila … lidem"], ["c1-agreement", "c1-government", "c1-connectors"]],
        ["Firma, pro ___ pracuji, je s výsledky ___.", "niž … spokojena", ["jenž … spokojena", "niž … spokojen", "níž … spokojena"], ["c1-jenz", "c1-short-adjectives"]],
        ["Na ___ vaší žádosti byla ___ kontrola.", "základě … provedena", ["základu … provedena", "základě … provedeno", "základě … udělán"], ["c1-nominal-style"]],
        ["___ ceny lidi ___, nicméně nákupy klesly.", "Rostoucí … neodradily", ["Rostoucí … neodradili", "Rostlé … neodradily", "Rostoucí … neodradilo"], ["c1-active-participles", "c1-agreement", "c1-connectors"]],
        ["Chtě nechtě jsme ___: Petr pojede do Brna, Jana ___.", "souhlasili … do Ostravy", ["souhlasily … do Ostravy", "souhlasili … pojede do Ostravě", "souhlasilo … do Ostravy"], ["c1-transgressives", "c1-ellipsis", "c1-agreement"]],
        ["Musíme vzít ___ že nemáme čas.", "v úvahu, ", ["v úvahu ", "na úvahu, ", "v úvaze, "], ["c1-idioms", "c1-commas"]],
        ["Děkujeme ___ za ___ zájem.", "Vám … Váš", ["Vás … Vaši", "Vám … Vašemu", "Vy … Váš"], ["c1-government", "c1-register"]],
        ["Muž, ___ jsme mluvili, ___ nemocen.", "o němž … byl", ["o nímž … byl", "o němž … byla", "jenž … byl"], ["c1-jenz", "c1-short-adjectives", "c1-commas"]],
        ["Většina studentů ___ zkouška byla těžká.", "prospěla, přestože", ["prospěli, přestože", "prospělo přestože", "prospěla přestože"], ["c1-agreement", "c1-commas"]],
        ["Jelikož zájem ___, ___ cenu.", "roste … zvýšíme", ["rostoucí … zvýšíme", "roste … zvyšující", "rostl … zvýšilo"], ["c1-connectors", "c1-active-participles"]],
        ["Sklenice je plná ___ a stůl je ___.", "vody … mokrý", ["voda … mokrý", "vodou … mokrý", "vody … mokrá"], ["c1-government", "c1-ellipsis"]]
      ]
    }
  };
})();
