/* A1 exam bank. Item: [prompt, answer, [3 wrong], extra skill ids?]. Text may be "czech" or [en, id]. See README.md. */
(function () {
  var E = window.C3KO_EXAMS = window.C3KO_EXAMS || {};
  var PICK = ["Choose the correct form.", "Pilih bentuk yang benar."];
  var G = {
    ma: ["masculine animate", "maskulin bernyawa"], mi: ["masculine inanimate", "maskulin tak bernyawa"],
    f: ["feminine", "feminin"], n: ["neuter", "netral"]
  };
  function g(word, k) { return [word, G[k], Object.keys(G).filter(function (x) { return x !== k; }).map(function (x) { return G[x]; })]; }

  E.A1 = {
    "a1-alphabet": {
      ask: ["Pronunciation and spelling.", "Pelafalan dan ejaan."],
      items: [
        [["Which letter sounds like 'ch' in English 'church'?", "Huruf mana yang berbunyi seperti 'c' di 'cari'?"], "č", ["c", "ch", "š"]],
        [["Which letter sounds like 'ts' in 'cats'?", "Huruf mana yang berbunyi 'ts'?"], "c", ["č", "s", "z"]],
        [["How is 'ch' pronounced?", "Bagaimana 'ch' diucapkan?"], ["like 'ch' in Scottish 'loch'", "seperti 'kh' di 'khusus'"], [["like 'ch' in 'church'", "seperti 'c' di 'cari'"], ["like 'k'", "seperti 'k'"], ["like 'sh'", "seperti 'sy'"]]],
        [["Where is the stress in 'nádraží'?", "Di mana tekanan pada 'nádraží'?"], "NÁ-dra-ží", ["ná-DRA-ží", "ná-dra-ŽÍ", ["all syllables equally", "semua suku kata sama"]]],
        [["Which word means 'to be'?", "Kata mana yang berarti 'ada/menjadi'?"], "být", ["byt", "bít", "bit"]],
        [["How is 'mě' in 'město' pronounced?", "Bagaimana 'mě' di 'město' diucapkan?"], "mňe", ["me", "mje", "mé"]],
        [["The letter 'j' (as in 'já') sounds like…", "Huruf 'j' (seperti di 'já') berbunyi seperti…"], ["'y' in 'yes'", "'y' di 'yakin'"], [["'j' in 'jam'", "'j' di 'jalan'"], ["'h' in 'hat'", "'h' di 'hari'"], ["'dž' in 'jungle'", "'dj' di 'djarum'"]]],
        [["What does the čárka (á, é, í) do?", "Apa fungsi čárka (á, é, í)?"], ["makes the vowel long", "membuat vokal panjang"], [["makes the vowel silent", "membuat vokal tidak dibaca"], ["softens the consonant", "melunakkan konsonan"], ["marks the stress", "menandai tekanan"]]],
        [["What is 'ů'?", "Apa itu 'ů'?"], ["a long u", "u panjang"], [["a short o", "o pendek"], ["ü as in German", "ü seperti bahasa Jerman"], ["a silent letter", "huruf yang tidak dibaca"]]],
        [["Which spelling of 'river' is correct?", "Ejaan mana yang benar untuk 'sungai'?"], "řeka", ["rzeka", "reka", "žeka"]],
        [["How is 'dě' in 'děkuju' pronounced?", "Bagaimana 'dě' di 'děkuju' diucapkan?"], "ďe", ["de", "dje", "dé"]]
      ]
    },
    "a1-pronouns": {
      ask: ["Choose the pronoun.", "Pilih kata gantinya."],
      items: [
        ["___ jsem doma.", "já", ["ty", "on", "my"]],
        ["___ jsi unavený?", "ty", ["já", "vy", "oni"]],
        ["___ jsme z Indonésie.", "my", ["vy", "oni", "já"]],
        ["___ jste pan Novák?", "vy", ["my", "ty", "oni"]],
        ["Petr? ___ je v práci.", "on", ["ona", "ono", "oni"]],
        ["Jana? ___ je doma.", "ona", ["on", "ono", "ony"]],
        ["Kluci? ___ jsou venku.", "oni", ["ony", "ona", "on"]],
        ["Holky? ___ jsou ve škole.", "ony", ["oni", "ona", "on"]],
        ["To auto? ___ je nové.", "ono", ["on", "ona", "oni"]],
        [["Polite 'you' to one stranger:", "'Anda' yang sopan untuk satu orang asing:"], "vy", ["ty", "on", "oni"]],
        [["'We' in Czech:", "'Kami/kita' dalam bahasa Ceko:"], "my", ["vy", "mi", "oni"]]
      ]
    },
    "a1-byt": {
      ask: PICK,
      items: [
        ["Já ___ doma.", "jsem", ["jsi", "je", "jsou"]],
        ["Ty ___ student?", "jsi", ["jsem", "je", "jste"]],
        ["Petr ___ v práci.", "je", ["jsou", "jsi", "jsem"]],
        ["My ___ z Prahy.", "jsme", ["jste", "jsou", "jsem"]],
        ["Vy ___ pan Novák?", "jste", ["jsme", "jsou", "jsi"]],
        ["Oni ___ doma.", "jsou", ["je", "jsme", "jste"]],
        ["Ona ___ doma. (ne)", "není", ["nejsi", "nejsem", "neje"]],
        ["Já ___ unavený. (ne)", "nejsem", ["není", "nejsi", "nejsou"]],
        ["To ___ drahé. (ne)", "není", ["neje", "nejsou", "nejsi"]],
        ["Oni ___ tady. (ne)", "nejsou", ["není", "nejsme", "neje"]]
      ]
    },
    "a1-mit": {
      ask: PICK,
      items: [
        ["Já ___ hlad.", "mám", ["má", "máš", "mají"]],
        ["Ty ___ čas?", "máš", ["mám", "má", "máte"]],
        ["Jana ___ psa.", "má", ["mám", "mají", "máš"]],
        ["My ___ nový byt.", "máme", ["máte", "mají", "mám"]],
        ["Vy ___ děti?", "máte", ["máme", "mají", "máš"]],
        ["Oni ___ auto.", "mají", ["má", "máme", "mám"]],
        ["Já ___ čas. (ne)", "nemám", ["nemá", "nemáš", "nejsem"]],
        ["Petr ___ rád pivo.", "má", ["mám", "je", "mají"], ["a1-liking"]],
        ["Oni ___ hlad. (ne)", "nemají", ["nemá", "nemáme", "nejsou"]],
        ["Máš sestru? — Ano, ___.", "mám", ["má", "máš", "jsem"]]
      ]
    },
    "a1-present": {
      ask: PICK,
      items: [
        ["Já ___ česky. (mluvit)", "mluvím", ["mluví", "mluvíš", "mluvu"]],
        ["Ty ___ doma? (pracovat)", "pracuješ", ["pracuju", "pracuje", "pracováš"]],
        ["On ___ knihu. (číst)", "čte", ["čtu", "čteš", "číte"]],
        ["My ___ večeři. (dělat)", "děláme", ["dělají", "děláte", "dělám"]],
        ["Vy ___ v Praze? (bydlet)", "bydlíte", ["bydlíme", "bydlí", "bydláte"]],
        ["Oni ___ kávu. (pít)", "pijou", ["pije", "piju", "pitou"]],
        ["Já ___ v kanceláři. (pracovat)", "pracuju", ["pracuje", "pracovám", "pracuješ"]],
        ["Ona ___ guláš. (vařit)", "vaří", ["vařím", "vaříš", "vaře"]],
        ["Oni ___ česky. (mluvit)", "mluví", ["mluvějí", "mluvíte", "mluvím"]],
        ["Co ___? (ty, dělat)", "děláš", ["dělá", "dělám", "děláte"]],
        ["Oni ___ dopis. (psát)", "píšou", ["psají", "píše", "píšu"]],
        ["Ty ___ hudbu? (poslouchat)", "posloucháš", ["poslouchá", "poslouchám", "poslouchaš"]]
      ]
    },
    "a1-negation": {
      ask: ["Make it negative.", "Buat menjadi negatif."],
      items: [
        ["Rozumím. → ___", "Nerozumím.", ["Ne rozumím.", "Rozumím ne.", "Nerozumim."]],
        ["Mám čas. → ___", "Nemám čas.", ["Ne mám čas.", "Mám ne čas.", "Nemam čas."]],
        ["Je doma. → ___", "Není doma.", ["Neje doma.", "Nejsem doma.", "Ne je doma."]],
        ["Kouřím. → ___", "Nekouřím.", ["Ne kouřím.", "Kouřím ne.", "Nekouřim."]],
        ["Mluvím německy. → ___", "Nemluvím německy.", ["Mluvím ne německy.", "Ne mluvím německy.", "Nemluvím ne německy."]],
        ["Jsou tady. → ___", "Nejsou tady.", ["Ne jsou tady.", "Nejsoun tady.", "Nejsu tady."]],
        ["Vím. → ___", "Nevím.", ["Ne vím.", "Vím ne.", "Nevim."]],
        ["Chci kávu. → ___", "Nechci kávu.", ["Ne chci kávu.", "Chci ne kávu.", "Nechcu kávu."]],
        ["Jsem unavený. → ___", "Nejsem unavený.", ["Ne jsem unavený.", "Jsem ne unavený.", "Nejsi unavený."]],
        ["Pracuje. → ___", "Nepracuje.", ["Ne pracuje.", "Pracuje ne.", "Nepracujou."]]
      ]
    },
    "a1-gender": {
      ask: ["What gender is this noun?", "Apa gender kata benda ini?"],
      items: [g("bratr", "ma"), g("stůl", "mi"), g("káva", "f"), g("auto", "n"), g("kost", "f"), g("moře", "n"),
        g("pes", "ma"), g("sýr", "mi"), g("růže", "f"), g("nádraží", "n"), g("obuv", "f"), g("muzeum", "n"), g("student", "ma")]
    },
    "a1-nominative": {
      ask: ["Choose the plural.", "Pilih bentuk jamaknya."],
      items: [
        ["jeden kluk, dva ___", "kluci", ["kluky", "kluků", "klucí"]],
        ["jeden student, dva ___", "studenti", ["studenty", "studentů", "studenta"]],
        ["jeden sýr, dva ___", "sýry", ["sýři", "sýra", "sýrů"]],
        ["jedna žena, dvě ___", "ženy", ["ženi", "žen", "ženě"]],
        ["jedna růže, dvě ___", "růže", ["růžy", "růží", "růžu"]],
        ["jedno víno, dvě ___", "vína", ["víny", "vín", "víno"]],
        ["jeden stůl, dva ___", "stoly", ["stůly", "stolí", "stolů"]],
        ["jedno auto, dvě ___", "auta", ["auty", "aut", "auto"]],
        ["jedna káva, dvě ___", "kávy", ["kávi", "káv", "kávu"]],
        ["jeden rohlík, dva ___", "rohlíky", ["rohlíci", "rohlíků", "rohlíka"]],
        ["___ jsou čerstvé. (rohlík)", "Rohlíky", ["Rohlíci", "Rohlík", "Rohlíků"]]
      ]
    },
    "a1-accusative": {
      ask: PICK,
      items: [
        ["Mám ___. (bratr)", "bratra", ["bratr", "bratrovi", "bratrem"]],
        ["Piju ___. (káva)", "kávu", ["káva", "kávy", "kávou"]],
        ["Vidím ___. (stůl)", "stůl", ["stolu", "stola", "stolem"]],
        ["Mám rád ___. (Praha)", "Prahu", ["Praha", "Prahy", "Praze"], ["a1-liking"]],
        ["Hledám ___. (růže)", "růži", ["růže", "růží", "růžu"]],
        ["Chci ___. (pivo)", "pivo", ["piva", "pivu", "pivem"], ["a1-modals"]],
        ["Sleva na ___ obuv. (dětský)", "dětskou", ["dětská", "dětské", "dětského"]],
        ["Znám ___ kolegu. (nový)", "nového", ["nový", "novou", "nové"]],
        ["Mám ___ kávu. (velký)", "velkou", ["velká", "velké", "velký"]],
        ["Čtu ___ knihu. (dobrý)", "dobrou", ["dobrá", "dobré", "dobrého"]],
        ["Kupuju ___ auto. (nový)", "nové", ["nová", "nového", "novou"]]
      ]
    },
    "a1-adjectives": {
      ask: PICK,
      items: [
        ["___ byt (nový)", "nový", ["nová", "nové", "noví"]],
        ["___ práce (nový)", "nová", ["nový", "nové", "novou"]],
        ["___ auto (nový)", "nové", ["nový", "nová", "nového"]],
        ["___ kuchyně (moderní)", "moderní", ["moderná", "moderný", "moderné"]],
        ["To je ___ káva. (dobrý)", "dobrá", ["dobrý", "dobré", "dobrou"]],
        ["Ten dům je ___. (velký)", "velký", ["velká", "velké", "velkou"]],
        ["Ty boty jsou ___. (drahý)", "drahé", ["drahá", "drahý", "drazí"]],
        ["Studenti jsou ___. (unavený)", "unavení", ["unavené", "unavený", "unavená"]],
        ["Ta vína jsou ___. (dobrý)", "dobrá", ["dobré", "dobří", "dobrý"]],
        ["___ den (jarní)", "jarní", ["jarný", "jarná", "jarné"]],
        ["Praha je ___. (krásný)", "krásná", ["krásný", "krásné", "krásnou"]]
      ]
    },
    "a1-possessives": {
      ask: PICK,
      items: [
        ["To je ___ auto. (já)", "moje", ["můj", "moji", "mého"]],
        ["To je ___ bratr. (já)", "můj", ["moje", "má", "mé"]],
        ["Kde je ___ taška? (ty)", "tvoje", ["tvůj", "tvého", "tvý"]],
        ["To je ___ dům. (my)", "náš", ["naše", "našeho", "naši"]],
        ["___ kancelář je tady. (my)", "Naše", ["Náš", "Našeho", "Naši"]],
        ["Kde je ___ pas? (vy)", "váš", ["vaše", "vašeho", "váše"]],
        ["To je ___ kabát. (ona)", "její", ["jejá", "jejích", "jeho"]],
        ["To je ___ auto. (on)", "jeho", ["její", "jejich", "jehoí"]],
        ["To je ___ byt. (oni)", "jejich", ["jejích", "jeho", "jejichový"]],
        ["To je ___ sestra. (já)", "moje", ["můj", "mého", "mí"]]
      ]
    },
    "a1-demonstratives": {
      ask: PICK,
      items: [
        ["___ dort je skvělý.", "Ten", ["Ta", "To", "Ti"]],
        ["___ káva je studená.", "Ta", ["Ten", "To", "Ty"]],
        ["___ pivo je dobré.", "To", ["Ten", "Ta", "Ti"]],
        ["Kolik stojí ___ boty?", "ty", ["ti", "ta", "ten"]],
        ["___ studenti jsou tady.", "Ti", ["Ty", "Ta", "Ten"]],
        ["___ auta jsou nová.", "Ta", ["Ty", "Ti", "To"]],
        ["___ stůl je velký.", "Ten", ["Ta", "To", "Ty"]],
        ["___ moře je teplé.", "To", ["Ten", "Ta", "Ty"]],
        ["___ růže je krásná.", "Ta", ["Ten", "To", "Ti"]],
        ["___ stoly jsou staré.", "Ty", ["Ti", "Ta", "Ten"]]
      ]
    },
    "a1-questions": {
      ask: ["Choose the question word.", "Pilih kata tanyanya."],
      items: [
        ["___ jdeš? — Do práce.", "Kam", ["Kde", "Odkud", "Kdy"]],
        ["___ bydlíš? — V Praze.", "Kde", ["Kam", "Odkud", "Jak"]],
        ["___ jsi? — Z Indonésie.", "Odkud", ["Kde", "Kam", "Kdo"]],
        ["___ to stojí? — 50 korun.", "Kolik", ["Kdo", "Jak", "Který"]],
        ["___ je to? — Můj kolega.", "Kdo", ["Co", "Kde", "Jaký"]],
        ["___ je to? — Kniha.", "Co", ["Kdo", "Kolik", "Kde"]],
        ["___ přijdeš? — Zítra.", "Kdy", ["Kde", "Kam", "Kolik"]],
        ["___ se máš? — Dobře.", "Jak", ["Co", "Kdy", "Proč"]],
        ["___ nepřijdeš? — Protože jsem nemocný.", "Proč", ["Jak", "Kdy", "Kde"]],
        ["___ je to auto? — Moje.", "Čí", ["Kdo", "Který", "Co"]],
        ["___ pivo chceš? — Tmavé.", "Jaké", ["Kolik", "Kde", "Čí"]]
      ]
    },
    "a1-numbers-time": {
      ask: PICK,
      items: [
        ["2:30", "půl třetí", ["půl druhé", "dvě a půl", "půl dvou"]],
        ["2:15", "čtvrt na tři", ["čtvrt na dvě", "dvě čtvrt", "tři čtvrtě na dvě"]],
        ["2:45", "tři čtvrtě na tři", ["tři čtvrtě na dvě", "čtvrt na tři", "půl třetí"]],
        ["7:30", "půl osmé", ["půl sedmé", "sedm a půl", "půl osmi"]],
        ["Je pět ___.", "hodin", ["hodiny", "hodina", "hodinu"]],
        ["Jsou dvě ___.", "hodiny", ["hodin", "hodina", "hodinou"]],
        ["Je jedna ___.", "hodina", ["hodiny", "hodin", "hodinu"]],
        ["dvě ___ (pivo)", "piva", ["pivo", "piv", "pivy"]],
        ["pět ___ (pivo)", "piv", ["piva", "pivo", "pivů"]],
        ["12", "dvanáct", ["dvacet", "dvě deset", "dvanácet"]],
        ["40", "čtyřicet", ["čtyřdeset", "čtrnáct", "čtyři sto"]],
        ["dva ___ (rohlík)", "rohlíky", ["rohlíků", "rohlík", "rohlíka"]]
      ]
    },
    "a1-modals": {
      ask: PICK,
      items: [
        ["Já ___ kávu. (chtít)", "chci", ["chtím", "chce", "chceš"]],
        ["___ platit kartou? (moct, já)", "Můžu", ["Můžeš", "Moct", "Můžou"]],
        ["Musím ___. (jít)", "jít", ["jdu", "šel", "jdi"]],
        ["On ___ plavat. (umět)", "umí", ["umím", "umějí", "umíš"]],
        ["Oni ___ pracovat. (muset)", "musí", ["musím", "musíš", "musíte"]],
        ["My ___ jít. (chtít)", "chceme", ["chtíme", "chcete", "chtějí"]],
        ["Vy ___ přijít? (moct)", "můžete", ["můžeme", "můžou", "moct"]],
        ["Oni ___ kávu. (chtít)", "chtějí", ["chcou", "chcete", "chce"]],
        ["Ty ___ česky? (umět)", "umíš", ["umí", "umím", "můžeš"]],
        ["Dnes ___. (moct, já, ne)", "nemůžu", ["nemůže", "nemám", "nechci"], ["a1-negation"]],
        ["Umíte ___?", "česky", ["čeština", "českou", "Česko"]]
      ]
    },
    "a1-liking": {
      ask: PICK,
      items: [
        ["Petr má ___ kávu.", "rád", ["ráda", "rádi", "rádo"]],
        ["Jana má ___ čaj.", "ráda", ["rád", "rádi", "rádo"]],
        ["Petr a Jana mají ___ Prahu.", "rádi", ["rád", "ráda", "rádo"]],
        ["___ se mi Praha.", "Líbí", ["Líbím", "Mám rád", "Chutná"]],
        ["Líbí se ___ ten film? (ty)", "ti", ["tě", "tebe", "ty"]],
        ["Chutná ___ guláš? (vy)", "vám", ["vás", "vy", "váš"]],
        ["Rád ___. (vařit, já)", "vařím", ["vařit", "vaří", "vaření"]],
        ["Ten byt se ___ líbí. (já)", "mi", ["mě", "já", "můj"]],
        ["Mám ráda ___. (zima)", "zimu", ["zima", "zimy", "zimě"], ["a1-accusative"]],
        ["Ty boty se mi ___.", "líbí", ["líbím", "líbíš", "mám rád"]],
        ["Chutná mi ___. (pizza)", "pizza", ["pizzu", "pizzy", "pizze"]]
      ]
    },
    "a1-reflexive": {
      ask: ["se or si?", "se atau si?"],
      items: [
        ["Jmenuju ___ Tomáš.", "se", ["si", "sebe", "mě"]],
        ["Učím ___ česky.", "se", ["si", "mi", "sebe"]],
        ["Jak ___ máš?", "se", ["si", "ti", "tě"]],
        ["Dám ___ pivo.", "si", ["se", "sebe", "sobě"]],
        ["Mám ___ dobře.", "se", ["si", "mi", "sebe"]],
        ["Jak se ___? — Petr.", "jmenuješ", ["jmenuju", "jmenuje", "jmenovat"]],
        ["Odpočinu ___.", "si", ["se", "sebe", "mi"]],
        ["Petr ___ učí anglicky.", "se", ["si", "sebe", "ho"]],
        ["Myslím ___, že má pravdu.", "si", ["se", "sebe", "mi"]],
        ["Ten film se mi ___.", "líbí", ["líbím", "líbíš", "líbit"], ["a1-liking"]]
      ]
    },
    "a1-review": {
      ask: ["Choose the correct combination.", "Pilih kombinasi yang benar."],
      items: [
        ["Já ___. (chtít, velká káva)", "chci velkou kávu", ["chci velká káva", "chce velkou kávu", "chci velkou kávou"], ["a1-modals", "a1-accusative"]],
        ["Moje sestra ___. (ne, mít, čas)", "nemá čas", ["nemám čas", "ne má čas", "nemá času"], ["a1-negation", "a1-mit"]],
        ["Kolik stojí ___? (ten, nový, sýr)", "ten nový sýr", ["ta nová sýr", "to nové sýr", "ten nového sýru"], ["a1-demonstratives", "a1-adjectives"]],
        ["Líbí se mi ___, ale je drahá.", "Praha", ["Prahu", "Praze", "Prahy"], ["a1-liking", "a1-nominative"]],
        ["Musím jít, je ___.", "pět hodin", ["pět hodiny", "pět hodina", "pět hodinu"], ["a1-modals", "a1-numbers-time"]],
        ["Umíte česky? — Ne, ___.", "nerozumím", ["ne rozumím", "rozumím ne", "nerozumim"], ["a1-negation", "a1-present"]],
        ["Chci ___. (jedna káva, dva rohlík)", "jednu kávu a dva rohlíky", ["jedna káva a dva rohlíky", "jednu kávu a dva rohlíků", "jednu kávu a dvě rohlíky"], ["a1-numbers-time", "a1-accusative"]],
        ["___? — Do práce. (ty)", "Kam jdeš", ["Kde jdeš", "Kam jdu", "Kde jsi"], ["a1-questions", "a1-present"]],
        ["Petr ___ česky a ___ v Praze. (mluvit, bydlet)", "mluví … bydlí", ["mluvím … bydlím", "mluví … bydlá", "mluvíš … bydlíš"], ["a1-present", "a1-pronouns"]],
        ["Moje ___ se jmenuje Jana. (sestra)", "sestra", ["sestru", "sestry", "sestře"], ["a1-possessives", "a1-reflexive"]],
        ["Máme ___ byt. (nový)", "nový", ["nová", "nového", "novou"], ["a1-mit", "a1-accusative"]],
        ["Ty ___ unavený? (být)", "jsi", ["jsem", "je", "jste"], ["a1-byt", "a1-pronouns"]]
      ]
    }
  };
})();
