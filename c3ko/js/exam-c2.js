/* C2 exam bank. Item: [prompt, answer, [3 wrong], extra skill ids?]. Text may be "czech" or [en, id]. */
(function () {
  var E = window.C3KO_EXAMS = window.C3KO_EXAMS || {};
  var PICK = ["Choose the correct form.", "Pilih bentuk yang benar."];
  var MEAN = ["What does it mean?", "Apa artinya?"];
  function m(cz, en, id, wrong) { return [cz, [en, id], wrong]; }
  function t(en, id) { return [en, id]; }

  E.C2 = {
    "c2-literary": {
      ask: ["Literary and archaic Czech.", "Bahasa Ceko sastra dan kuno."],
      items: [
        ["Nedbal ___. (rada, literary genitive)", "rady", ["radu", "radě", "radou"]],
        ["___ se domů, usedl. (vrátit, past transgressive)", "Vrátiv", ["Vrátivši", "Vrátivše", "Vracejíc"]],
        ["Nebylo tu ___. (živá duše, genitive)", "živé duše", ["živá duše", "živou duši", "živou duší"]],
        ["___ domů, ženy si povídaly. (jít, present transgressive)", "Jdouce", ["Jda", "Jdouc", "Šedše"]],
        ["Neřekl ani ___. (slovo)", "slova", ["slovo", "slovem", "slovu"]],
        [t("býti → modern form", "býti → bentuk modern"), "být", ["byti", "bejt", "bít"]],
        ["Uviděvši ho, ___ se. (zarazit)", "zarazila", ["zarazil", "zarazili", "zarazilo"]],
        [t("'jest' is…", "'jest' adalah…"), t("an old or emphatic form of 'je'", "bentuk lama atau penegas dari 'je'"), [t("the past of 'být'", "bentuk lampau 'být'"), t("a form of 'jíst'", "bentuk dari 'jíst'"), t("a plural form", "bentuk jamak")]],
        ["Nedostal jsem ___ odpovědi. (žádná, genitive)", "žádné", ["žádnou", "žádná", "žádný"]],
        [t("In 'Mluvě s ní, usmíval se', 'mluvě' is…", "Dalam 'Mluvě s ní, usmíval se', 'mluvě' adalah…"), t("a present transgressive (while speaking)", "transgresif kini (sambil berbicara)"), [t("a past tense", "kala lampau"), t("an imperative", "perintah"), t("a noun", "kata benda")]],
        m("Tak jest.", "That is so. (archaic, solemn)", "Memang begitu. (kuno, khidmat)", [t("So eat.", "Jadi makanlah."), t("It was so.", "Dulu begitu."), t("Is it so?", "Apakah begitu?")])
      ]
    },
    "c2-styles": {
      ask: ["Functional styles.", "Gaya fungsional."],
      items: [
        [t("Typical of administrative style:", "Khas gaya administratif:"), "výše uvedený", ["hele", "no jo", "bezva"]],
        m("dle", "according to (formal 'podle')", "menurut (formal 'podle')", [t("after", "setelah"), t("for", "untuk"), t("without", "tanpa")]),
        m("tímto", "hereby", "dengan ini", [t("therefore", "oleh karena itu"), t("this time", "kali ini"), t("through this door", "melalui pintu ini")]),
        [t("A headline without a verb ('Vláda bez dohody') is typical of…", "Judul tanpa kata kerja ('Vláda bez dohody') khas untuk…"), t("journalistic style", "gaya jurnalistik"), [t("literary style", "gaya sastra"), t("spoken style", "gaya lisan"), t("legal style", "gaya hukum")]],
        [t("'Bylo zjištěno, že…' is typical of…", "'Bylo zjištěno, že…' khas untuk…"), t("academic style", "gaya akademik"), [t("spoken style", "gaya lisan"), t("poetry", "puisi"), t("text messages", "pesan singkat")]],
        [t("Best opening of an official letter:", "Pembuka terbaik surat resmi:"), "Vážená paní, vážený pane,", ["Ahoj všichni,", "Čau,", "Nazdar,"]],
        [t("Belongs in academic writing:", "Cocok untuk tulisan akademik:"), "Z výsledků vyplývá, že…", ["No a pak jsme zjistili, že…", "Prostě to tak je.", "Hele, výsledky jsou…"]],
        [t("Best closing of an official letter:", "Penutup terbaik surat resmi:"), "S pozdravem", ["Měj se", "Pa pa", "Čau"]],
        [t("Literary style often uses…", "Gaya sastra sering memakai…"), t("free word order and transgressives", "urutan kata bebas dan transgresif"), [t("only short sentences", "hanya kalimat pendek"), t("abbreviations", "singkatan"), t("tables", "tabel")]],
        ["v souladu ___ zákonem", "se", ["na", "za", "pro"]],
        [t("Administrative style:", "Gaya administratif:"), "Žadatel je povinen předložit doklady.", ["Musíš přinést papíry.", "Přines ty papíry!", "Papíry jsou potřeba, jo?"]]
      ]
    },
    "c2-rare-declension": {
      ask: PICK,
      items: [
        ["Byli jsme v ___. (muzeum)", "muzeu", ["muzeum", "muzeě", "muzeumu"]],
        ["Mluvili jsme o ___. (téma)", "tématu", ["téma", "témě", "témaě"]],
        ["Ve městě jsou dvě ___. (muzeum)", "muzea", ["muzeumy", "muzeí", "muzeumu"]],
        ["Mluvíme o ___. (Goethe)", "Goethovi", ["Goethe", "Goetheovi", "Goethou"]],
        ["Jedu ___. (taxi)", "taxi", ["taxím", "taxem", "taxiem"]],
        ["Bydlím v ___. (ČR)", "ČR", ["ČRu", "ČRě", "ČRi"]],
        ["Čtu knihu od ___. (Hugo)", "Huga", ["Hugo", "Hugovi", "Hugem"]],
        ["V tom ___ je chyba. (schéma)", "schématu", ["schéma", "schémě", "schémau"]],
        ["Bydlím v ___. (centrum)", "centru", ["centrum", "centrě", "centrumu"]],
        ["S ___ jsem nemluvil. (Mozart)", "Mozartem", ["Mozart", "Mozarta", "Mozartovi"]],
        ["Viděl jsem to ___. (drama)", "drama", ["dramu", "dramě", "dramy"]]
      ]
    },
    "c2-fine-aspect": {
      ask: ["Aspect in detail.", "Aspek secara rinci."],
      items: [
        [t("Which verb is biaspectual (both aspects)?", "Kata kerja mana yang dwiaspek?"), "informovat", ["psát", "koupit", "říkat"]],
        [t("Which verb is biaspectual?", "Kata kerja mana yang dwiaspek?"), "organizovat", ["napsat", "dělat", "přijít"]],
        m("nakupovat", "go shopping (buy various things)", "berbelanja (membeli berbagai barang)", [t("buy once", "membeli sekali"), t("sell", "menjual"), t("stop buying", "berhenti membeli")]),
        m("rozesmát se", "burst out laughing", "tertawa tiba-tiba", [t("stop laughing", "berhenti tertawa"), t("laugh quietly", "tertawa pelan"), t("laugh at someone", "menertawakan seseorang")]),
        ["Když jsem ___ domů, potkal jsem Petra. (background)", "šel", ["přišel", "půjdu", "došel"]],
        ["Četl jsem, když najednou někdo ___. (zazvonit / zvonit)", "zazvonil", ["zvonil", "zvoní", "zazvoní"]],
        ["Přišel, ___ si a začal jíst. (sednout / sedat)", "sedl", ["sedal", "sedá", "sedne"]],
        [t("In a story, perfective verbs usually describe…", "Dalam cerita, kata kerja perfektif biasanya menggambarkan…"), t("events, one after another", "peristiwa yang berurutan"), [t("the background", "latar belakang"), t("habits", "kebiasaan"), t("descriptions of places", "deskripsi tempat")]],
        ["Celý večer ___ a pak usnul. (číst / přečíst)", "četl", ["přečetl", "čte", "přečte"]],
        ["Vždycky ___ v sedm, ale včera vstal v devět. (vstávat / vstát)", "vstával", ["vstal", "vstane", "vstává"]],
        m("dopsat", "finish writing", "selesai menulis", [t("write again", "menulis lagi"), t("write a little", "menulis sedikit"), t("start writing", "mulai menulis")])
      ]
    },
    "c2-dialects": {
      ask: ["Regional Czech.", "Bahasa Ceko daerah."],
      items: [
        m("šalina", "tram (Brno)", "trem (Brno)", [t("bus", "bus"), t("train", "kereta"), t("bike", "sepeda")]),
        m("hokna", "work (Brno slang)", "kerja (slang Brno)", [t("house", "rumah"), t("beer", "bir"), t("money", "uang")]),
        [t("Moravians say 'dobré pivo'. Bohemian colloquial says…", "Orang Moravia berkata 'dobré pivo'. Lisan Bohemia berkata…"), "dobrý pivo", ["dobré pivo", "dobrá pivo", "dobrí pivo"]],
        [t("Stress on the second-to-last syllable is typical of…", "Tekanan pada suku kata kedua dari belakang khas untuk…"), t("Silesia (Ostrava region)", "Silesia (wilayah Ostrava)"), [t("Prague", "Praha"), t("Brno", "Brno"), t("Plzeň", "Plzeň")]],
        m("šak", "but, after all (Moravian)", "kan, lagipula (Moravia)", [t("now", "sekarang"), t("because", "karena"), t("never", "tidak pernah")]),
        m("aji", "also, even (Moravian 'i')", "juga, bahkan (Moravia 'i')", [t("yes", "ya"), t("and then", "lalu"), t("only", "hanya")]),
        [t("Hantec is…", "Hantec adalah…"), t("Brno slang", "slang Brno"), [t("a Prague dish", "masakan Praha"), t("a Silesian dialect", "dialek Silesia"), t("formal Czech", "bahasa Ceko formal")]],
        [t("Standard form of Bohemian colloquial 'mlíko':", "Bentuk baku dari 'mlíko' (lisan Bohemia):"), "mléko", ["mlíko", "mleko", "mlýko"]],
        [t("Standard form of Bohemian colloquial 'bejt':", "Bentuk baku dari 'bejt' (lisan Bohemia):"), "být", ["bejt", "bít", "byti"]],
        [t("'Pojedu šalinou' is typical of…", "'Pojedu šalinou' khas untuk…"), "Brno", ["Praha", "Plzeň", "Ostrava"]],
        [t("Bohemian colloquial 'dobrej' in Moravia is usually…", "'dobrej' (lisan Bohemia) di Moravia biasanya…"), "dobrý", ["dobrej", "dobrá", "dobří"]]
      ]
    },
    "c2-orthography": {
      ask: ["Choose the correct spelling.", "Pilih ejaan yang benar."],
      items: [
        ["chlapc_ (plural)", "chlapci", ["chlapcy", "chlapcí", "chlapcý"]],
        ["stol_ (plural)", "stoly", ["stoli", "stolí", "stolý"]],
        [t("b_t (to be)", "b_t (ada, menjadi)"), "být", ["bít", "bit", "byt"]],
        [t("m_ (we)", "m_ (kami)"), "my", ["mi", "mí", "mý"]],
        ["Vidíš ___?", "mě", ["mně", "mňe", "mé"]],
        ["Dej to ___.", "mně", ["mě", "mňe", "mé"]],
        [t("d_m (house)", "d_m (rumah)"), "dům", ["dúm", "dom", "dóm"]],
        [t("_kol (task)", "_kol (tugas)"), "úkol", ["ůkol", "ukól", "úkól"]],
        ["ne_spěch", "neúspěch", ["neůspěch", "neuspěch", "neúspech"]],
        ["Ženy přišl_.", "y", ["i", "a", "o"]],
        ["Muži přišl_.", "i", ["y", "a", "o"]],
        [t("Czech Republic:", "Republik Ceko:"), "Česká republika", ["česká republika", "Česká Republika", "česká Republika"]]
      ]
    },
    "c2-particles": {
      ask: ["Choose the particle.", "Pilih partikelnya."],
      items: [
        ["___ jsem ti to říkal!", "Vždyť", ["Prý", "Asi", "Snad"]],
        ["___ přijde zítra. (reportedly)", "Prý", ["Vždyť", "Copak", "Ať"]],
        ["___ přijde! (let him)", "Ať", ["Prý", "Snad", "Copak"]],
        ["___ to nevíš? (surely you know)", "Copak", ["Prý", "Ať", "Teprve"]],
        ["Je ___ deset hodin, máme čas. (only)", "teprve", ["už", "prý", "ať"]],
        ["___ to zvládneš. (hopefully)", "Snad", ["Copak", "Kdepak", "Teprve"]],
        ["Půjdeš tam? — ___! (no way)", "Kdepak", ["Prý", "Ať", "Teprve"]],
        m("prý", "reportedly, they say", "katanya", [t("surely", "pasti"), t("only", "hanya"), t("already", "sudah")]),
        m("vždyť", "but, after all", "kan, bukankah", [t("never", "tidak pernah"), t("maybe", "mungkin"), t("let", "biarlah")]),
        ["Takovou ostudu jsem ___ nezažil.", "ještě", ["už", "teprve", "prý"]],
        ["To je ___ ten muž, kterého hledám. (exactly)", "právě", ["prý", "ať", "kdepak"]]
      ]
    },
    "c2-review": {
      ask: ["Choose the correct combination.", "Pilih kombinasi yang benar."],
      items: [
        ["___ se domů, usedl ke stolu a nedbal ___ své ženy.", "Vrátiv … rady", ["Vrátivši … radu", "Vrátiv … radu", "Vracejíc … rady"], ["c2-literary"]],
        ["Tímto potvrzujeme přijetí ___ žádosti ___ výše uvedených podmínek.", "Vaší … dle", ["vaši … dle", "Vaší … dlé", "Vaše … dle"], ["c2-styles", "c2-orthography"]],
        ["___ jsi ___ v Brně jezdil šalinou!", "Vždyť … prý", ["Prý … vždyť", "Copak … ať", "Ať … prý"], ["c2-particles", "c2-dialects"]],
        ["Děti si ___ v ___.", "hrály … muzeu", ["hráli … muzeu", "hrály … muzeum", "hrály … muzeě"], ["c2-orthography", "c2-rare-declension"]],
        ["Zatímco ___ nikdo nic neřekl, oni o ___ věděli.", "mně … tom", ["mě … tom", "mně … tím", "mi … to"], ["c2-orthography"]],
        ["Když jsem ___ domů, ___ jsem Petra.", "šel … potkal", ["přišel … potkával", "šel … potkával", "jdu … potkal"], ["c2-fine-aspect"]],
        ["V ___ jsme probírali ___ války.", "muzeu … téma", ["muzeum … téma", "muzeu … tématu", "muzeě … téma"], ["c2-rare-declension"]],
        ["Nebylo tu ___ šli jsme dál.", "živé duše, a tak", ["živá duše a tak", "živé duše a tak", "živou duši, a tak"], ["c2-literary", "c1-commas"]],
        ["Žadatel ___ předložit doklady ___ zákonem.", "je povinen … v souladu se", ["je povinna … v souladu se", "je povinen … v souladu na", "musí … v souladu"], ["c2-styles", "c1-short-adjectives"]],
        ["___ se, ___ to slyšela.", "Rozesmála … když", ["Rozesmála … aby", "Rozesmálo … když", "Rozesmála … abych"], ["c2-fine-aspect"]],
        ["Kdepak, ___ jsem ___ nebyl.", "tam … nikdy", ["tam … někdy", "nikdy … tam", "tam … vždy"], ["c2-particles", "b1-indefinite"]]
      ]
    }
  };
})();
