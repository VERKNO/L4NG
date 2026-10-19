/* B1 exam bank. Item: [prompt, answer, [3 wrong], extra skill ids?]. Text may be "czech" or [en, id]. */
(function () {
  var E = window.C3KO_EXAMS = window.C3KO_EXAMS || {};
  var PICK = ["Choose the correct form.", "Pilih bentuk yang benar."];
  var MEAN = ["What does it mean?", "Apa artinya?"];
  function m(cz, en, id, wrong) { return [cz, [en, id], wrong]; }

  E.B1 = {
    "b1-conditional": {
      ask: PICK,
      items: [
        ["___ kávu. (chtít, já – muž)", "Chtěl bych", ["Bych chtěl", "Chtěl bys", "Chci bych"]],
        ["Mohl ___ mi pomoct? (ty)", "bys", ["bych", "by", "byste"]],
        ["Mohl ___ mi pomoct? (vy, formálně)", "byste", ["bychom", "bys", "by"]],
        ["Rádi ___ přišli. (my)", "bychom", ["byste", "by", "bych"]],
        ["Petr ___ to udělal.", "by", ["bych", "bys", "byl"]],
        ["Oni ___ přišli.", "by", ["bychom", "byste", "bys"]],
        ["Jana by ___ ráda. (přijít)", "přišla", ["přijde", "přišel", "přijít"]],
        ["Co ___ dělal? (ty)", "bys", ["bych", "by", "byste"]],
        ["Šli ___ do kina? (my)", "bychom", ["by", "byste", "bych"]],
        ["Dal ___ si pivo. (já)", "bych", ["bys", "by", "byste"]],
        ["Kdy ___ měl čas? (ty)", "bys", ["bych", "by", "byl"]]
      ]
    },
    "b1-conditions": {
      ask: PICK,
      items: [
        ["___ bude pršet, zůstanu doma.", "Jestli", ["Kdyby", "Kdybych", "Aby"]],
        ["___ měl čas, šel bych do kina. (já)", "Kdybych", ["Jestli", "Když", "Kdyby"]],
        ["Kdybych byl bohatý, ___ dům.", "koupil bych", ["koupím", "koupil jsem", "kupuju"]],
        ["Kdyby ___ čas, přišli by. (mít, oni)", "měli", ["mají", "mít", "budou mít"]],
        ["Kdybychom ___ víc peněz, cestovali bychom. (mít)", "měli", ["máme", "mít", "budeme mít"]],
        ["Kdybyste ___, řekl bych vám to. (chtít)", "chtěli", ["chcete", "chtít", "budete chtít"]],
        ["Jestli ___, zavolám ti. (přijít, on)", "přijde", ["by přišel", "přišel by", "přijdu"]],
        ["Pokud ___ čas, pomůžu ti. (mít, já)", "budu mít", ["bych měl", "měl bych", "mám bych"]],
        [["Which sentence is an unreal condition?", "Kalimat mana yang merupakan pengandaian tak nyata?"], "Kdyby pršelo, zůstal bych doma.", ["Jestli bude pršet, zůstanu doma.", "Když prší, zůstávám doma.", "Pokud bude pršet, zůstanu doma."]],
        ["Kdyby ___ hezky, šli bychom ven. (být)", "bylo", ["je", "bude", "by bylo"]],
        ["___ jsi to věděl, řekl bys mi to? (ty)", "Kdybys", ["Kdybych", "Jestli by", "Kdyby jsi"]]
      ]
    },
    "b1-aby": {
      ask: PICK,
      items: [
        ["Učím se česky, ___ rozuměl lidem.", "abych", ["aby", "abys", "kdybych"]],
        ["Chci, ___ přišel. (ty)", "abys", ["abych", "aby", "že"]],
        ["Řekni mu, ___ počkal.", "aby", ["abys", "abych", "že"]],
        ["Šetříme, ___ si koupili byt. (my)", "abychom", ["abyste", "aby", "abych"]],
        ["Prosím vás, ___ zavřeli okno.", "abyste", ["abychom", "aby", "abys"]],
        ["Chci, abys ___. (přijít)", "přišel", ["přijdeš", "přijít", "přijde"]],
        ["Mluv nahlas, ___ tě všichni slyšeli.", "aby", ["abys", "abych", "že"]],
        ["Chtěla, ___ jí pomohl. (já)", "abych", ["aby", "abys", "že"]],
        ["Jdu do obchodu, ___ koupil chleba. (já)", "abych", ["že", "kdybych", "abys"]],
        ["Přál bych si, ___ to vyšlo.", "aby", ["abych", "že", "jestli"]],
        ["Dělám to pro tebe, ___ jsi spokojený.", "abys", ["abych", "aby", "abyste"]]
      ]
    },
    "b1-relative": {
      ask: PICK,
      items: [
        ["To je muž, ___ tady bydlí.", "který", ["kterého", "kterým", "která"]],
        ["To je muž, ___ znám.", "kterého", ["který", "kterému", "kterým"]],
        ["To je žena, se ___ mluvím.", "kterou", ["která", "které", "kterým"]],
        ["Město, ve ___ žiju, je krásné.", "kterém", ["který", "které", "kterým"]],
        ["Kniha, ___ čtu, je dlouhá.", "kterou", ["která", "které", "kterého"]],
        ["Kolega, o ___ jsem mluvil, tu není.", "kterém", ["který", "kterého", "kterým"]],
        ["Lidé, ___ tu pracují, jsou milí.", "kteří", ["které", "který", "kterých"]],
        ["Auta, ___ stojí venku, jsou nová.", "která", ["které", "kteří", "kterých"]],
        ["Kamarád, ___ jsem dal dárek, má narozeniny.", "kterému", ["kterého", "který", "kterým"]],
        ["Ženy, ___ jsem potkal, byly z Brna.", "které", ["kteří", "která", "kterých"]],
        ["Kolegové, s ___ pracuju, jsou z Indie.", "kterými", ["kterým", "kteří", "kterých"]]
      ]
    },
    "b1-aspect-use": {
      ask: ["Choose the right aspect.", "Pilih aspek yang tepat."],
      items: [
        ["Přestal ___. (kouřit / vykouřit)", "kouřit", ["vykouřit", "kouřil", "vykouří"]],
        ["Vstal jsem, ___ se a odešel. (oblékat / obléct)", "oblékl", ["oblékal", "oblékám", "obléknu"]],
        ["Celé odpoledne jsem ___. (číst / přečíst)", "četl", ["přečetl", "přečtu", "čtu"]],
        ["Každé ráno ___ v sedm. (vstávat / vstát)", "vstávám", ["vstanu", "vstal", "vstát"]],
        ["Začal jsem se ___ česky. (učit / naučit)", "učit", ["naučit", "učil", "naučil"]],
        ["Zítra ti to ___. (posílat / poslat)", "pošlu", ["budu poslat", "posílám", "posílat"]],
        ["Když jsem ___ domů, potkal jsem Petra. (jít / přijít)", "šel", ["přišel", "půjdu", "jdu"]],
        ["Konečně jsem to ___! (dělat / udělat)", "udělal", ["dělal", "dělám", "budu dělat"]],
        ["Pořád mu ___, ale nebere to. (volat / zavolat)", "volám", ["zavolám", "zavolal", "zavolat"]],
        ["Až to ___, zavolám ti. (dělat / udělat)", "udělám", ["dělám", "budu udělat", "dělal"]],
        ["Včera jsem tu knihu ___ až do konce. (číst / přečíst)", "přečetl", ["četl", "čtu", "přečtu"]]
      ]
    },
    "b1-prefixes": {
      ask: MEAN,
      items: [
        m("vypít", "drink up", "minum sampai habis", [["drink a little", "minum sedikit"], ["drink again", "minum lagi"], ["start drinking", "mulai minum"]]),
        m("přepsat", "rewrite", "menulis ulang", [["sign", "menandatangani"], ["finish writing", "selesai menulis"], ["describe", "menggambarkan"]]),
        m("rozbít", "smash, break", "menghancurkan, memecahkan", [["beat once", "memukul sekali"], ["build", "membangun"], ["knock on", "mengetuk"]]),
        m("dopsat", "finish writing", "selesai menulis", [["rewrite", "menulis ulang"], ["sign", "menandatangani"], ["write in", "menulis ke dalam"]]),
        m("podepsat", "sign", "menandatangani", [["rewrite", "menulis ulang"], ["finish writing", "selesai menulis"], ["describe", "menggambarkan"]]),
        m("přijít", "come, arrive", "datang", [["leave", "pergi"], ["go out", "keluar"], ["go through", "melewati"]]),
        m("odejít", "leave (on foot)", "pergi (jalan kaki)", [["arrive", "datang"], ["enter", "masuk"], ["go around", "mengitari"]]),
        m("vejít", "enter", "masuk", [["leave", "pergi"], ["go out", "keluar"], ["arrive", "datang"]]),
        m("projít", "go through", "melewati", [["enter", "masuk"], ["come", "datang"], ["go out", "keluar"]]),
        [["Which prefix means 'out'?", "Prefiks mana yang berarti 'keluar'?"], "vy-", ["při-", "pod-", "do-"]],
        [["Which prefix means 'away'?", "Prefiks mana yang berarti 'menjauh'?"], "od-", ["při-", "v-", "na-"]]
      ]
    },
    "b1-motion-prefixed": {
      ask: PICK,
      items: [
        ["Vlak ___ v osm a přijede do Brna v deset.", "odjede", ["přijede", "dojde", "projde"]],
        ["Zítra k nám ___ návštěva. (pěšky)", "přijde", ["odejde", "vyjde", "projde"]],
        ["Ráno ___ z domu v sedm. (pěšky, každý den)", "vycházím", ["přicházím", "vcházím", "procházím"]],
        m("Zajdeme na pivo?", "Shall we pop in for a beer?", "Mau mampir minum bir?", [["Shall we leave the beer?", "Mau meninggalkan birnya?"], ["Shall we go past the beer?", "Mau melewati birnya?"], ["Shall we finish the beer?", "Mau menghabiskan birnya?"]]),
        ["Musíme ___ přes park. (pěšky)", "projít", ["přijít", "odejít", "vejít"]],
        ["___ do místnosti a sedl si.", "Vešel", ["Vyšel", "Odešel", "Přešel"]],
        ["Každý den ___ z práce v pět. (autem)", "odjíždím", ["přijíždím", "vjíždím", "projíždím"]],
        ["Petr ___ z místnosti a zavřel dveře.", "odešel", ["přišel", "vešel", "prošel"]],
        ["Autobus ___ na zastávku a my jsme nastoupili.", "přijel", ["odjel", "projel", "vyjel"]],
        ["___ ke mně zítra na chvíli? (ty)", "Zajdeš", ["Odejdeš", "Vyjdeš", "Projdeš"]],
        ["Slunce ___ v šest ráno.", "vychází", ["přichází", "odchází", "prochází"]]
      ]
    },
    "b1-indefinite": {
      ask: PICK,
      items: [
        ["___ nic neví.", "Nikdo", ["Někdo", "Kdokoli", "Kdo"]],
        ["Nikdy jsem tam ___.", "nebyl", ["byl", "nebýt", "nebyli"]],
        ["Máš ___ plány?", "nějaké", ["žádné", "nic", "nikdo"]],
        ["Nemám ___ čas.", "žádný", ["nějaký", "nic", "nikdo"]],
        ["___ tu byl, ale nevím kdo.", "Někdo", ["Nikdo", "Kdokoli", "Nic"]],
        ["Nikdo mi ___ neřekl.", "nic", ["něco", "nikdo", "cokoli"]],
        ["Můžeš přijít ___, jsem doma celý den.", "kdykoli", ["nikdy", "kdy", "nikde"]],
        ["Klíče nejsou ___.", "nikde", ["někde", "kdekoli", "kde"]],
        ["Chceš ___ k pití?", "něco", ["nic", "nikdo", "někdo"]],
        ["Nevidím ___. (nikdo)", "nikoho", ["nikdo", "někoho", "nikomu"]],
        ["___ jsem nikde nebyl.", "Nikdy", ["Někdy", "Kdykoli", "Vždy"]]
      ]
    },
    "b1-reflexive-uses": {
      ask: ["se or si?", "se atau si?"],
      items: [
        ["Bojím ___ psů.", "se", ["si", "sebe", "mi"]],
        ["Dáme ___ pivo?", "si", ["se", "sebe", "sobě"]],
        ["Znají ___ dlouho.", "se", ["si", "sebe", "jim"]],
        ["Tady ___ nekouří.", "se", ["si", "sebe", "to"]],
        ["Jak ___ tam jde?", "se", ["si", "to", "sebe"]],
        ["Petr ___ myje ruce.", "si", ["se", "sebe", "mu"]],
        ["Ráno ___ myju studenou vodou.", "se", ["si", "sebe", "mě"]],
        ["Směje ___ celý den.", "se", ["si", "sebe", "mu"]],
        ["Pamatuješ ___ na mě?", "si", ["se", "sebe", "ti"]],
        ["Ten dům ___ staví dva roky.", "se", ["si", "sebe", "ho"]],
        ["Odpočiň ___!", "si", ["se", "sebe", "ti"]]
      ]
    },
    "b1-svuj": {
      ask: PICK,
      items: [
        ["Petr miluje ___ ženu. (vlastní)", "svou", ["jeho", "její", "svůj"]],
        ["Vezmi si ___ kabát. (vlastní)", "svůj", ["tvoji", "svou", "tvého"]],
        ["Zavolala ___ bratrovi. (vlastní)", "svému", ["jejímu", "svůj", "jeho"]],
        ["Jana prodala ___ auto. (vlastní)", "své", ["jejího", "svého", "její"]],
        ["Kluci hledají ___ míč. (vlastní)", "svůj", ["jejich", "svého", "svou"]],
        ["Petr mluvil se ___ šéfem. (vlastní)", "svým", ["jeho", "svůj", "svého"]],
        ["Petr miluje ___ ženu. (žena jiného muže)", "jeho", ["svou", "její", "svoji"]],
        ["Ztratil jsem ___ klíče. (vlastní)", "své", ["mých", "svých", "svoji"]],
        ["Navštívili ___ rodiče. (vlastní)", "své", ["jejich", "svých", "svým"]],
        ["Jana čte ___ knihu. (Petrovu)", "jeho", ["svou", "její", "svého"]],
        ["Mluvím o ___ práci. (vlastní)", "své", ["svou", "svá", "svého"]]
      ]
    },
    "b1-masculine-patterns": {
      ask: PICK,
      items: [
        ["Mluvím s ___. (kolega)", "kolegou", ["kolegem", "kolega", "kolegovi"]],
        ["Sedím u ___. (počítač)", "počítače", ["počítaču", "počítač", "počítačem"]],
        ["Dal jsem to ___. (muž)", "muži", ["muže", "mužem", "muž"]],
        ["Bez ___ to nejde. (předseda)", "předsedy", ["předsedu", "předsedovi", "předsedou"]],
        ["Mluvil jsem se ___. (soudce)", "soudcem", ["soudcou", "soudce", "soudci"]],
        ["Vidím ___. (pán)", "pána", ["pán", "pánovi", "pánem"]],
        ["Bydlím blízko ___. (hrad)", "hradu", ["hrad", "hrada", "hradem"]],
        ["Píšu ___. (učitel)", "učiteli", ["učitele", "učitelem", "učitel"]],
        ["Jedu ___. (autobus)", "autobusem", ["autobus", "autobusu", "autobusa"]],
        ["Jdu za ___. (kamarád)", "kamarádem", ["kamarád", "kamarádu", "kamarádovi"]],
        ["Mluvíme o ___. (Tomáš)", "Tomášovi", ["Tomáše", "Tomášem", "Tomáš"]]
      ]
    },
    "b1-feminine-patterns": {
      ask: PICK,
      items: [
        ["Jsem v ___. (kancelář)", "kanceláři", ["kancelář", "kanceláře", "kanceláří"]],
        ["S ___ to udělám. (radost)", "radostí", ["radost", "radosti", "radostou"]],
        ["Zpívám tu ___. (píseň)", "píseň", ["písni", "písně", "písní"]],
        ["Bez ___ to nejde. (pomoc)", "pomoci", ["pomoc", "pomocí", "pomocu"]],
        ["Mluvíme o ___. (růže)", "růži", ["růže", "růží", "růžu"]],
        ["Jdu s ___. (Marie)", "Marií", ["Marie", "Marii", "Mariou"]],
        ["Píšu ___. (žena)", "ženě", ["ženu", "ženy", "ženou"]],
        ["Bydlím na ___. (vesnice)", "vesnici", ["vesnice", "vesnicí", "vesnicu"]],
        ["Dopis bez ___. (obálka)", "obálky", ["obálka", "obálku", "obálce"]],
        ["Byli jsme na ___. (večeře)", "večeři", ["večeře", "večeří", "večeřu"]],
        ["Mám ráda ___. (zelenina)", "zeleninu", ["zelenina", "zeleniny", "zeleninou"]]
      ]
    },
    "b1-neuter-patterns": {
      ask: PICK,
      items: [
        ["U ___ je krásně. (moře)", "moře", ["moři", "mořem", "mořu"]],
        ["Jím ___. (kuře)", "kuře", ["kuřete", "kuřetem", "kuřata"]],
        ["Na dvoře jsou dvě ___. (kuře)", "kuřata", ["kuřete", "kuře", "kuřat"]],
        ["Bydlím ve ___. (město)", "městě", ["město", "města", "městem"]],
        ["Jedu ___. (auto)", "autem", ["auto", "auta", "autu"]],
        ["Sejdeme se na ___. (nádraží)", "nádraží", ["nádražím", "nádražu", "nádražě"]],
        ["Jdu k ___. (okno)", "oknu", ["okno", "okna", "oknem"]],
        ["Nemám ___. (kolo)", "kolo", ["kola", "kolu", "kolem"]],
        ["Spím s ___. (kotě)", "kotětem", ["kotě", "koťaty", "kotěte"]],
        ["Mluvíme o ___. (počasí)", "počasí", ["počasím", "počasu", "počasě"]],
        ["Bez ___ to nejde. (jídlo)", "jídla", ["jídlo", "jídlu", "jídlem"]]
      ]
    },
    "b1-irregular-nouns": {
      ask: PICK,
      items: [
        ["Mám dvě ___. (dítě)", "děti", ["dítě", "dětí", "dítěte"]],
        ["Bylo tam hodně ___. (člověk)", "lidí", ["lidé", "člověků", "lidech"]],
        ["Viděl jsem to na vlastní ___. (oko)", "oči", ["oka", "očích", "očima"]],
        ["Díval se na mě velkýma ___. (oko)", "očima", ["očí", "oči", "okama"]],
        ["Bolí mě ___. (ucho, obě)", "uši", ["ucha", "ušima", "uší"]],
        ["Mám studené ___. (ruka, obě)", "ruce", ["ruky", "rukách", "rukama"]],
        ["Hraju si s ___. (děti)", "dětmi", ["děti", "dětem", "dětech"]],
        ["Mluvím s ___. (lidé)", "lidmi", ["lidé", "lidem", "lidech"]],
        ["Jedno ___ si hraje venku. (dítě)", "dítě", ["děti", "dítěte", "dětí"]],
        ["Pomáhám ___. (lidé)", "lidem", ["lidi", "lidmi", "lidech"]],
        ["Drží to oběma ___. (ruka)", "rukama", ["ruce", "rukách", "ruky"]]
      ]
    },
    "b1-numeral-cases": {
      ask: PICK,
      items: [
        ["s ___ kamarády (2)", "dvěma", ["dva", "dvou", "dvě"]],
        ["za ___ minut (5)", "pět", ["pěti", "pětem", "pětmi"]],
        ["Bydlím se ___ lidmi. (3)", "třemi", ["tři", "třech", "třem"]],
        ["Mluvili jsme o ___ dětech. (4)", "čtyřech", ["čtyři", "čtyřem", "čtyřmi"]],
        ["Je bez ___ minut deset. (2)", "dvou", ["dvě", "dvěma", "dva"]],
        ["Dal jsem to ___ studentům. (3)", "třem", ["tři", "třemi", "třech"]],
        ["Přišel s ___ lidmi. (6)", "šesti", ["šest", "šestem", "šestmi"]],
        ["Byli jsme tam ve ___. (2)", "dvou", ["dva", "dvěma", "dvě"]],
        ["Před ___ lety. (2)", "dvěma", ["dvou", "dva", "dvě"]],
        ["U ___ stolů seděli lidé. (4)", "čtyř", ["čtyři", "čtyřech", "čtyřmi"]],
        ["Začíná to v ___ hodin. (5)", "pět", ["pěti", "pátého", "pětem"]]
      ]
    },
    "b1-collective": {
      ask: PICK,
      items: [
        ["Mám jen ___ brýle. (1)", "jedny", ["jeden", "jedna", "jedno"]],
        ["V bytě jsou ___ dveře. (3)", "troje", ["tři", "třetí", "trojí"]],
        ["Koupil jsem ___ kalhoty. (2)", "dvoje", ["dvě", "dva", "dvojí"]],
        ["Čtu ___ noviny. (1)", "jedny", ["jedno", "jednu", "jeden"]],
        ["Potřebuju ___ nůžky. (1)", "jedny", ["jeden", "jedna", "jedno"]],
        ["___ dveře jsou otevřené. (2)", "Dvoje", ["Dvě", "Dva", "Dvojí"]],
        ["Má ___ šaty. (4)", "čtvery", ["čtyři", "čtvrté", "čtveré"]],
        ["Kolik máš kalhot? — ___. (2)", "Dvoje", ["Dvě", "Dva", "Dvojí"]],
        [["Which noun needs a collective numeral?", "Kata benda mana yang memerlukan angka kolektif?"], "dveře", ["okno", "stůl", "židle"]],
        [["Which noun needs a collective numeral?", "Kata benda mana yang memerlukan angka kolektif?"], "kalhoty", ["boty", "ponožky", "košile"]],
        ["V tašce mám ___ noviny. (3)", "troje", ["tři", "třetí", "trojí"]]
      ]
    },
    "b1-reported": {
      ask: ["Report what was said.", "Ubah menjadi kalimat tidak langsung."],
      items: [
        ["„Jsem unavený.“ → Řekl, že ___ unavený.", "je", ["byl", "jsem", "bude"]],
        ["„Přijdeš?“ → Zeptal se, ___ přijdu.", "jestli", ["že", "aby", "kdyby"]],
        ["„Počkej!“ → Řekl mi, ___ počkal.", "abych", ["že", "jestli", "aby"]],
        ["„Kde bydlíš?“ → Ptal se, ___ bydlím.", "kde", ["jestli", "že", "kam"]],
        ["„Nemám čas.“ → Říkala, že ___ čas.", "nemá", ["neměla", "nemám", "nemít"]],
        ["„Půjdu domů.“ → Řekl, že ___ domů.", "půjde", ["šel", "půjdu", "by šel"]],
        ["„Zavolej mi!“ → Řekla, ___ jí zavolal.", "abych", ["že", "jestli", "když"]],
        ["„Máte čas?“ → Zeptal se nás, ___ čas.", "jestli máme", ["že máme", "jestli mají", "aby měli"]],
        ["„Byl jsem v Praze.“ → Řekl, že ___ v Praze.", "byl", ["je", "bude", "by byl"]],
        ["„Co děláš?“ → Ptala se mě, co ___.", "dělám", ["děláš", "dělal", "bych dělal"]],
        ["„Nekuř!“ → Řekla mu, ___ nekouřil.", "aby", ["že", "jestli", "abych"]]
      ]
    },
    "b1-review": {
      ask: ["Choose the correct combination.", "Pilih kombinasi yang benar."],
      items: [
        ["___ víc času, chodil ___ na kurz. (mít, já)", "Kdybych měl … bych", ["Jestli mám … bych", "Kdybych měl … jsem", "Kdyby měl … bych"], ["b1-conditions", "b1-conditional"]],
        ["Učím se česky, ___ lidem, se ___ pracuju.", "abych rozuměl … kterými", ["abych rozuměl … který", "aby rozuměl … kterými", "abych rozumím … kterými"], ["b1-aby", "b1-relative", "b1-irregular-nouns"]],
        ["___ mi ___ neřekl.", "Nikdo … nic", ["Někdo … nic", "Nikdo … něco", "Nikdo … žádný"], ["b1-indefinite"]],
        ["Petr zavolal ___ a řekl, že ___ pozdě.", "svému bratrovi … přijde", ["jeho bratrovi … přijde", "svému bratrovi … přijdu", "svého bratra … přijde"], ["b1-svuj", "b1-reported", "b1-masculine-patterns"]],
        ["Před ___ jsem ___ z Brna.", "dvěma lety … odešel", ["dvou lety … odešel", "dvěma lety … vešel", "dva roky … odešel"], ["b1-numeral-cases", "b1-motion-prefixed", "b1-irregular-nouns"]],
        ["Na pohovor si vezmu ___ kalhoty, ___ jsem koupil včera.", "jedny … které", ["jeden … které", "jedny … který", "jedna … kterou"], ["b1-collective", "b1-relative"]],
        ["Řekl mi, ___ dveře. (zavřít, já)", "abych zavřel", ["že zavřu", "abych zavřu", "aby zavřel"], ["b1-reported", "b1-aby"]],
        ["S ___ jsem mluvil o ___. (tři, kolega; práce)", "třemi kolegy … práci", ["tři kolegy … práci", "třemi kolegové … práci", "třemi kolegy … práce"], ["b1-numeral-cases", "b1-masculine-patterns"]],
        ["Co by sis ___? (dát)", "dal", ["dát", "dáš", "dáte"], ["b1-conditional", "b1-reflexive-uses"]],
        ["Kdybych ___ nebál, ___ bych si psa.", "se … koupil", ["si … koupil", "se … koupím", "sebe … koupil"], ["b1-reflexive-uses", "b1-conditions", "b1-aspect-use"]],
        ["V tom ___ jsme jedli ___ s rýží. (město, kuře)", "městě … kuře", ["městu … kuřete", "městě … kuřete", "městem … kuře"], ["b1-neuter-patterns"]]
      ]
    }
  };
})();
