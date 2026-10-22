/*
 * C3KO grammar content. See README.md "Data format".
 * Each topic: { id, title, what, pattern?, examples?: [[czech, english], ...], tip? }
 * Topic ids are permanent keys for saved progress: never rename an id, only add new ones.
 */
window.C3KO_DATA = {
  version: 1,
  levels: [
    {
      id: "A1",
      name: "Breakthrough",
      goal: "Introduce yourself, shop, order, ask simple questions.",
      topics: [
        {
          id: "a1-alphabet",
          title: "Alphabet, pronunciation & stress",
          what: "Czech is written almost exactly as it sounds. The háček (ˇ) changes a sound; the čárka (´) and kroužek (˚) make a vowel long. Stress always falls on the first syllable.",
          pattern: [{"title": "Consonants and ě", "head": ["Letter", "Sounds like", "Example"], "rows": [["č", "ch in church", "{č}aj (tea)"], ["š", "sh in ship", "{š}est (six)"], ["ž", "s in measure", "{ž}ena (woman)"], ["ř", "rolled r + ž at once", "{ř}eka (river)"], ["c", "ts in cats", "{c}ena (price)"], ["ch", "ch in Scottish loch", "{ch}leba (bread)"], ["j", "y in yes", "{j}á (I)"], ["ě", "je after b, p, v, f; ňe after m", "m{ě}sto = mňesto"], ["dě, tě, ně", "ďe, ťe, ňe (soft d, t, n)", "{dě}kuju"]]}, {"title": "Vowel length", "head": ["Short", "Long", "Example"], "rows": [["a", "á", "byt (flat) vs b{ý}t (to be)"], ["e", "é", "mal{é} (small)"], ["i / y", "í / ý", "m{í}t (to have)"], ["o", "ó", "g{ó}l (goal, rare)"], ["u", "ú / ů", "{ú}terý, d{ů}m"]], "note": "Stress is always on the first syllable: NÁ-dra-ží."}],
          examples: [["čaj", "tea"], ["řeka", "river"], ["chleba", "bread"], ["město /mňesto/", "town"], ["byt / být", "flat / to be (length changes meaning)"]],
          tip: "Never stress the second syllable, even in long words: NÁ-dra-ží, not na-DRA-ží."
        },
        {
          id: "a1-pronouns",
          title: "Personal pronouns",
          what: "Subject pronouns. Because the verb ending already shows the person, the pronoun is usually dropped unless you want emphasis.",
          pattern: [{"head": ["", "Singular", "Plural"], "rows": [["1st", "já (I)", "my (we)"], ["2nd", "ty (you, informal)", "vy (you all / formal you)"], ["3rd", "on (he), ona (she), ono (it)", "oni (men or mixed), ony (women, things), ona (neuter)"]]}],
          examples: [["(Já) jsem Tomáš.", "I am Tomáš."], ["Vy jste z Prahy?", "Are you from Prague? (formal)"]],
          tip: "Use vy with anyone you don't know well; ty for friends, family and children."
        },
        {
          id: "a1-byt",
          title: "Verb být (to be)",
          what: "The most irregular and most used verb. Negative adds ne-, except 3rd person singular, which is není.",
          pattern: [{"head": ["Person", "Positive", "Negative"], "rows": [["já", "jsem", "nejsem"], ["ty", "jsi", "nejsi"], ["on / ona / ono", "je", "{není}"], ["my", "jsme", "nejsme"], ["vy", "jste", "nejste"], ["oni", "jsou", "nejsou"]], "note": "Only the 3rd person singular is irregular in the negative: není."}],
          examples: [["Jsem doma.", "I'm at home."], ["To není drahé.", "That's not expensive."], ["Kde jsou klíče?", "Where are the keys?"]]
        },
        {
          id: "a1-mit",
          title: "Verb mít (to have)",
          what: "Regular -á- pattern. Also used in many fixed phrases: mít rád (like), mít hlad (be hungry), mít čas (have time).",
          pattern: [{"head": ["Person", "Positive", "Negative"], "rows": [["já", "má{m}", "nemá{m}"], ["ty", "má{š}", "nemá{š}"], ["on / ona", "má", "nemá"], ["my", "má{me}", "nemá{me}"], ["vy", "má{te}", "nemá{te}"], ["oni", "ma{jí}", "nema{jí}"]]}],
          examples: [["Mám hlad.", "I'm hungry."], ["Nemáme čas.", "We don't have time."]]
        },
        {
          id: "a1-present",
          title: "Present tense: verb classes",
          what: "Most verbs follow one of four conjugation patterns. Learn the infinitive together with the 1st person singular, because the stem can change.",
          pattern: [{"head": ["Person", "-á- dělat", "-í- mluvit", "-e- číst", "-uje pracovat"], "rows": [["já", "dělá{m}", "mluví{m}", "čt{u}", "pracuj{u}"], ["ty", "dělá{š}", "mluví{š}", "čte{š}", "pracuje{š}"], ["on / ona", "dělá", "mluví", "čte", "pracuje"], ["my", "dělá{me}", "mluví{me}", "čte{me}", "pracuje{me}"], ["vy", "dělá{te}", "mluví{te}", "čte{te}", "pracuje{te}"], ["oni", "děla{jí}", "mluv{í}", "čt{ou}", "pracuj{ou}"]]}],
          examples: [["Pracuju v Praze.", "I work in Prague."], ["Mluvíte anglicky?", "Do you speak English?"], ["Co čteš?", "What are you reading?"]],
          tip: "pracuji / pracují are the formal written variants of pracuju / pracujou. Both are correct."
        },
        {
          id: "a1-negation",
          title: "Negation with ne-",
          what: "Put ne- directly in front of the verb, written as one word.",
          pattern: [{"head": ["Positive", "Negative"], "rows": [["vím (I know)", "{ne}vím"], ["rozumím (I understand)", "{ne}rozumím"], ["mám (I have)", "{ne}mám"]], "note": "ne- is written together with the verb."}],
          examples: [["Nerozumím.", "I don't understand."], ["Nekouřím.", "I don't smoke."]]
        },
        {
          id: "a1-gender",
          title: "Noun gender",
          what: "Every noun is masculine, feminine or neuter. Masculine also splits into animate (people, animals) and inanimate (things). Gender decides all endings of adjectives, pronouns and past-tense verbs.",
          pattern: [{"head": ["Gender", "Typical ending", "Examples"], "rows": [["Masculine", "consonant", "stůl, muž, sýr"], ["Feminine", "-a, -e, some consonants", "žen{a}, růž{e}, obuv, kost"], ["Neuter", "-o, -e, -í, -um", "aut{o}, moř{e}, nádraž{í}, muze{um}"]], "note": "Masculine splits further: animate (people, animals) vs inanimate (things)."}],
          examples: [["ten stůl", "the table (m.)"], ["ta káva", "the coffee (f.)"], ["to pivo", "the beer (n.)"]],
          tip: "Feminine nouns ending in a consonant (obuv, kost, místnost, píseň) must be memorised. Words in -ost are always feminine."
        },
        {
          id: "a1-nominative",
          title: "Nominative (1. pád)",
          what: "The dictionary form. Used for the subject and after 'to je / to jsou'. Answers kdo? co? (who? what?)",
          pattern: [{"title": "Plural endings", "head": ["Gender", "Singular", "Plural"], "rows": [["Masc. animate", "kluk, student", "kluc{i}, student{i}"], ["Masc. inanimate", "sýr", "sýr{y}"], ["Feminine -a", "žena", "žen{y}"], ["Feminine -e", "růže", "růž{e}"], ["Neuter -o", "víno", "vín{a}"]]}],
          examples: [["To je můj kolega.", "This is my colleague."], ["Rohlíky jsou čerstvé.", "The rolls are fresh."]]
        },
        {
          id: "a1-accusative",
          title: "Accusative (4. pád)",
          what: "Case of the direct object. Answers koho? co? (whom? what?). Also after na (for, to a place), pro (for), za (for, in exchange).",
          pattern: [{"title": "Nouns", "head": ["Gender", "Change", "Example"], "rows": [["Masc. animate", "+ -a", "bratr → bratr{a}"], ["Masc. inanimate", "no change", "stůl → stůl"], ["Feminine -a", "-a → -u", "káva → káv{u}"], ["Feminine -e", "-e → -i", "růže → růž{i}"], ["Fem. consonant", "no change", "obuv → obuv"], ["Neuter", "no change", "víno → víno"]]}, {"title": "Adjectives", "head": ["Base form", "Accusative", "Used with"], "rows": [["-ý", "-{ého}", "masc. animate: nového kolegu"], ["-á", "-{ou}", "feminine: novou práci"], ["-é, -í", "no change", "neuter, soft adjectives"]]}],
          examples: [["Piju kávu.", "I drink coffee."], ["Mám bratra.", "I have a brother."], ["Sleva na dětskou obuv.", "Discount on children's footwear."], ["Sleva na španělská vína.", "Discount on Spanish wines."]],
          tip: "Only feminine words and masculine animate words visibly change. Everything else looks like the nominative."
        },
        {
          id: "a1-adjectives",
          title: "Adjective agreement: hard -ý vs soft -í",
          what: "Adjectives agree with the noun in gender, number and case. Hard adjectives change their ending; soft adjectives in -í look the same for every gender in the nominative.",
          pattern: [{"title": "Singular", "head": ["", "Masculine", "Feminine", "Neuter"], "rows": [["Hard -ý", "nov{ý}", "nov{á}", "nov{é}"], ["Soft -í", "jarn{í}", "jarn{í}", "jarn{í}"]]}, {"title": "Plural", "head": ["", "Masc. animate", "Masc. inan. + fem.", "Neuter"], "rows": [["Hard", "nov{í}", "nov{é}", "nov{á}"], ["Soft", "jarn{í}", "jarn{í}", "jarn{í}"]]}],
          examples: [["nový byt, nová práce, nové auto", "new flat, new job, new car"], ["moderní byt, moderní kuchyně", "modern flat, modern kitchen"]]
        },
        {
          id: "a1-possessives",
          title: "Possessive pronouns",
          what: "můj, tvůj, náš, váš agree with the thing owned. jeho, její, jejich never change.",
          pattern: [{"head": ["Owner", "Masculine thing", "Feminine thing", "Neuter thing"], "rows": [["my", "můj", "moje / má", "moje / mé"], ["your (ty)", "tvůj", "tvoje / tvá", "tvoje / tvé"], ["our", "náš", "naše", "naše"], ["your (vy)", "váš", "vaše", "vaše"], ["his / its", "jeho", "jeho", "jeho"], ["her", "její", "její", "její"], ["their", "jejich", "jejich", "jejich"]], "note": "jeho, její, jejich never change."}],
          examples: [["Moje žena je z Brna.", "My wife is from Brno."], ["To je její kabát.", "That is her coat."], ["Váš stůl je tady.", "Your table is here."]]
        },
        {
          id: "a1-demonstratives",
          title: "Demonstratives ten, ta, to",
          what: "Mean 'this/that/the'. Used much more than in English, often instead of an article. Each has a singular and a plural form, and masculine plural splits into animate (people, animals) and inanimate (things).",
          pattern: [{"title": "Singular and plural (as subject)", "head": ["", "Masc. animate", "Masc. inanimate", "Feminine", "Neuter"], "rows": [["the / that (singular)", "te{n}", "te{n}", "t{a}", "t{o}"], ["the / those (plural)", "t{i}", "t{y}", "t{y}", "t{a}"], ["this (singular)", "tent{o}", "tent{o}", "tat{o}", "tot{o}"], ["these (plural)", "tit{o}", "tyt{o}", "tyt{o}", "tat{o}"], ["that over there (singular)", "tamte{n}", "tamte{n}", "tamt{a}", "tamt{o}"], ["those over there (plural)", "tamt{i}", "tamt{y}", "tamt{y}", "tamt{a}"]], "note": "Spoken Czech often says tenhle / tahle / tohle for 'this' and tihle / tyhle / tahle for 'these'."}, {"title": "All cases: singular", "head": ["Case", "Masc. animate", "Masc. inanimate", "Feminine", "Neuter"], "rows": [["1 nominative", "te{n}", "te{n}", "t{a}", "t{o}"], ["2 genitive", "t{oho}", "t{oho}", "t{é}", "t{oho}"], ["3 dative", "t{omu}", "t{omu}", "t{é}", "t{omu}"], ["4 accusative", "t{oho}", "te{n}", "t{u}", "t{o}"], ["6 locative", "(o) t{om}", "(o) t{om}", "(o) t{é}", "(o) t{om}"], ["7 instrumental", "t{ím}", "t{ím}", "t{ou}", "t{ím}"]], "note": "Masculine and neuter share most forms. Only nominative and accusative differ."}, {"title": "All cases: plural", "head": ["Case", "Masc. animate", "Masc. inanimate", "Feminine", "Neuter"], "rows": [["1 nominative", "t{i}", "t{y}", "t{y}", "t{a}"], ["2 genitive", "t{ěch}", "t{ěch}", "t{ěch}", "t{ěch}"], ["3 dative", "t{ěm}", "t{ěm}", "t{ěm}", "t{ěm}"], ["4 accusative", "t{y}", "t{y}", "t{y}", "t{a}"], ["6 locative", "(o) t{ěch}", "(o) t{ěch}", "(o) t{ěch}", "(o) t{ěch}"], ["7 instrumental", "t{ěmi}", "t{ěmi}", "t{ěmi}", "t{ěmi}"]], "note": "In the plural only nominative and accusative change by gender; cases 2, 3, 6 and 7 are the same for all. tento (this) = the same forms + -to: tohoto, tomuto, této, tímto; plural těchto, těmto, těmito. There is no vocative."}],
          examples: [["Ten dort je skvělý.", "That cake is great."], ["Kolik stojí ty boty?", "How much are those shoes?"], ["Ti studenti jsou z Indonésie.", "Those students are from Indonesia."], ["Tyto knihy jsou nové.", "These books are new."], ["Znáš toho muže?", "Do you know that man?"], ["Mluvíme o té knize.", "We are talking about that book."], ["Jdu s těmi kamarády.", "I am going with those friends."]]
        },
        {
          id: "a1-questions",
          title: "Question words",
          what: "Yes/no questions keep normal word order and use rising intonation. Open questions start with a question word.",
          pattern: [{"head": ["Czech", "English", "Czech", "English"], "rows": [["kdo", "who", "co", "what"], ["kde", "where (at)", "kam", "where (to)"], ["odkud", "where from", "kdy", "when"], ["jak", "how", "proč", "why"], ["kolik", "how much/many", "který", "which"], ["jaký", "what kind", "čí", "whose"]]}],
          examples: [["Kam jdeš?", "Where are you going?"], ["Odkud jste?", "Where are you from?"], ["Máš čas?", "Do you have time?"]],
          tip: "kde = location (Kde jsi?), kam = direction (Kam jdeš?). Czech keeps them strictly apart."
        },
        {
          id: "a1-numbers-time",
          title: "Numbers, prices & telling time",
          what: "1 and 2 change by gender. The noun after a number changes form: 1 + singular, 2–4 + nominative plural, 5+ + genitive plural.",
          pattern: [{"title": "Numbers", "head": ["Number", "Czech", "Number", "Czech"], "rows": [["1", "jeden / jedna / jedno", "10", "deset"], ["2", "dva / dvě", "11", "jedenáct"], ["3", "tři", "20", "dvacet"], ["4", "čtyři", "21", "dvacet jedna"], ["5", "pět", "100", "sto"]]}, {"title": "Noun after a number", "head": ["Number of", "Noun form", "Example"], "rows": [["1", "singular", "jedna hodin{a}"], ["2–4", "plural", "dvě hodin{y}"], ["5+", "genitive plural", "pět hodin{∅}"]]}, {"title": "Telling time", "head": ["Time", "Czech", "Literally"], "rows": [["2:00", "jsou dvě hodiny", "it is two hours"], ["2:15", "čtvrt na tři", "quarter to the third"], ["2:30", "půl třetí", "half of the third"], ["2:45", "tři čtvrtě na tři", "three quarters to the third"]], "note": "Quarters and halves count toward the next hour."}],
          examples: [["Kolik to stojí?", "How much is it?"], ["Stojí to padesát korun.", "It costs 50 crowns."], ["Sejdeme se v půl osmé.", "Let's meet at 7:30."]],
          tip: "Time counts toward the next hour: půl osmé is 'half of the eighth', i.e. 7:30."
        },
        {
          id: "a1-modals",
          title: "Modal verbs",
          what: "chtít (want), moct (can, may), muset (must), umět (know how to), smět (be allowed). Followed by an infinitive.",
          pattern: [{"head": ["Person", "chtít (want)", "moct (can)", "muset (must)", "umět (know how)"], "rows": [["já", "chci", "můžu", "musím", "umím"], ["ty", "chceš", "můžeš", "musíš", "umíš"], ["on / ona", "chce", "může", "musí", "umí"], ["my", "chceme", "můžeme", "musíme", "umíme"], ["vy", "chcete", "můžete", "musíte", "umíte"], ["oni", "chtějí", "můžou", "musí", "umějí"]], "note": "Followed by an infinitive: Musím jít."}],
          examples: [["Můžu platit kartou?", "Can I pay by card?"], ["Musím jít.", "I have to go."], ["Umíte česky?", "Do you speak Czech?"]],
          tip: "umět = learned skill (Umím plavat). moct = possibility or permission (Dnes nemůžu)."
        },
        {
          id: "a1-liking",
          title: "Liking: mít rád, líbit se, chutnat",
          what: "Three ways to say 'like'. mít rád + accusative for general liking; rád + verb for activities; líbit se and chutnat flip the sentence, so the liked thing is the subject and you are in the dative.",
          pattern: [{"head": ["Structure", "Use for", "Example"], "rows": [["mám rád / ráda + accusative", "people, things in general", "Mám rád kávu."], ["rád / ráda + verb", "activities", "Rád vařím."], ["líbí se mi + subject", "how something appeals to you", "Líbí se mi Praha."], ["chutná mi + subject", "food and drink", "Chutná mi guláš."]], "note": "rád for men, ráda for women, rádi for a group."}],
          examples: [["Mám ráda zimu.", "I like winter. (female speaker)"], ["Rád vařím.", "I like cooking."], ["Líbí se ti ten film?", "Do you like the film?"]]
        },
        {
          id: "a1-reflexive",
          title: "Reflexive se / si (basics)",
          what: "Some verbs always come with se or si. Learn them as a unit. se and si sit in second position in the sentence.",
          pattern: [{"head": ["Verb", "Meaning", "Example"], "rows": [["jmenovat {se}", "be called", "Jmenuju {se} Tomáš."], ["učit {se}", "learn", "Učím {se} česky."], ["mít {se}", "be doing (well/badly)", "Jak {se} máš?"], ["dát {si}", "have (food, drink)", "Dám {si} pivo."]]}],
          examples: [["Jak se jmenuješ?", "What's your name?"], ["Mám se dobře.", "I'm doing well."]]
        }
      ]
    },
    {
      id: "A2",
      name: "Waystage",
      goal: "Talk about the past and plans, use all seven cases in the singular.",
      topics: [
        {
          id: "a2-cases-overview",
          title: "The seven cases (pády) at a glance",
          what: "Czech teachers number the cases 1–7 and give each a question word pair. Knowing the questions helps you pick the case.",
          pattern: [{"head": ["No.", "Case", "Question", "Main use", "Prepositions"], "rows": [["1", "nominativ", "kdo? co?", "subject", "—"], ["2", "genitiv", "koho? čeho?", "of, quantity", "z, do, od, u, bez, vedle"], ["3", "dativ", "komu? čemu?", "to someone", "k, proti, kvůli, díky"], ["4", "akuzativ", "koho? co?", "direct object", "na, pro, za, přes"], ["5", "vokativ", "—", "addressing", "—"], ["6", "lokál", "o kom? o čem?", "location, about", "v, na, o, po, při"], ["7", "instrumentál", "kým? čím?", "with, by means of", "s, před, za, nad, pod, mezi"]]}],
          examples: [["Jdu do obchodu (2) pro chleba (4).", "I'm going to the shop for bread."], ["Byl jsem v kině (6) s kamarádem (7).", "I was at the cinema with a friend."]],
          tip: "Many prepositions take a fixed case. Learn them in that pair: bez + 2, k + 3, o + 6, s + 7."
        },
        {
          id: "a2-past",
          title: "Past tense",
          what: "Formed from the l-participle plus a form of být in 1st and 2nd person only. The participle agrees with the subject's gender and number.",
          pattern: [{"title": "Regular", "head": ["Person", "Masculine", "Feminine"], "rows": [["já", "děla{l} jsem", "děla{la} jsem"], ["ty", "děla{l} jsi", "děla{la} jsi"], ["on / ona", "děla{l}", "děla{la}"], ["my", "děla{li} jsme", "děla{ly} jsme"], ["vy", "děla{li} jste", "děla{ly} jste"], ["oni / ony", "děla{li}", "děla{ly}"]], "note": "No jsem/jsi in the 3rd person."}, {"title": "Irregular", "head": ["Infinitive", "Past (m / f)"], "rows": [["být", "byl / byla"], ["jít", "šel / šla"], ["mít", "měl / měla"], ["jíst", "jedl / jedla"], ["číst", "četl / četla"], ["moct", "mohl / mohla"]]}],
          examples: [["Včera jsem pracoval doma.", "Yesterday I worked from home."], ["Kde jsi byla?", "Where were you? (to a woman)"], ["Petr šel do práce.", "Petr went to work."]]
        },
        {
          id: "a2-future",
          title: "Future tense",
          what: "Imperfective verbs use budu + infinitive. Perfective verbs have no present: their present-tense form already means future. Some motion verbs take po-.",
          pattern: [{"head": ["Person", "Imperfective (budu + inf.)", "Perfective (present form)"], "rows": [["já", "{budu} dělat", "udělá{m}"], ["ty", "{budeš} dělat", "udělá{š}"], ["on / ona", "{bude} dělat", "udělá"], ["my", "{budeme} dělat", "udělá{me}"], ["vy", "{budete} dělat", "udělá{te}"], ["oni", "{budou} dělat", "uděla{jí}"]]}, {"title": "Verbs of motion", "head": ["Verb", "Future"], "rows": [["jít", "{po}jdu"], ["jet", "{po}jedu"], ["letět", "{po}letím"]]}],
          examples: [["Zítra budu pracovat.", "Tomorrow I'll be working."], ["Zítra to udělám.", "I'll do it tomorrow."], ["Pojedeme do Brna.", "We'll go to Brno."]],
          tip: "Never combine budu with a perfective verb: 'budu udělat' is wrong."
        },
        {
          id: "a2-aspect-intro",
          title: "Verbal aspect: introduction",
          what: "Most verbs come in pairs. Imperfective describes a process, habit or repetition. Perfective describes one completed action with a result.",
          pattern: [{"head": ["Imperfective (process)", "Perfective (result)", "Meaning"], "rows": [["dělat", "{u}dělat", "do"], ["psát", "{na}psat", "write"], ["číst", "{pře}číst", "read"], ["kupovat", "koup{it}", "buy"], ["říkat", "říct", "say"], ["brát", "vzít", "take"]]}],
          examples: [["Psal jsem e-mail celé dopoledne.", "I was writing an email all morning."], ["Napsal jsem e-mail.", "I wrote (finished) the email."], ["Každý den kupuju chleba.", "I buy bread every day."]]
        },
        {
          id: "a2-motion",
          title: "Verbs of motion",
          what: "Czech separates going on foot from going by vehicle, and one trip in one direction from habitual or round trips.",
          pattern: [{"head": ["", "On foot", "By vehicle", "Flying"], "rows": [["Now, one direction", "jít", "jet", "letět"], ["Habitually, back and forth", "chodit", "jezdit", "létat"]]}],
          examples: [["Jdu domů.", "I'm walking home (now)."], ["Chodím do posilovny.", "I go to the gym (regularly)."], ["Jedu tramvají.", "I'm going by tram."]],
          tip: "Going anywhere in Prague by tram is jet, not jít, even if it's short."
        },
        {
          id: "a2-locative",
          title: "Locative (6. pád)",
          what: "Used only with prepositions: v/ve (in), na (on, at), o (about), po (after, around), při (during). Answers o kom? o čem?",
          pattern: [{"title": "Endings", "head": ["Gender", "Ending", "Example"], "rows": [["Masc. / neuter", "-ě / -e or -u", "v obchod{ě}, na stol{e}, v hotel{u}"], ["Feminine -a", "-ě / -e", "ve škol{e}"], ["Feminine -e", "-i", "na ulic{i}"], ["Plural", "-ech / -ách / -ích", "v obchod{ech}, v hor{ách}"]]}, {"title": "Consonant changes before -e/-ě", "head": ["Change", "Example"], "rows": [["k → c", "Amerika → v Ameri{c}e"], ["h → z", "Praha → v Pra{z}e"], ["r → ř", "sestra → o sest{ř}e"], ["ch → š", "střecha → na stře{š}e"]]}],
          examples: [["Bydlím v Praze.", "I live in Prague."], ["Pracuju na úřadě.", "I work at an office."], ["Mluvíme o práci.", "We're talking about work."]],
          tip: "v = inside a place; na = events, open spaces, institutions and some fixed places (na poště, na nádraží, na koncertě)."
        },
        {
          id: "a2-genitive",
          title: "Genitive (2. pád)",
          what: "'Of', possession, quantities, and after many prepositions: z (from), do (into, to), od (from someone), u (at someone's), bez (without), vedle (next to), během (during), kromě (except).",
          pattern: [{"title": "Singular", "head": ["Gender", "Ending", "Example"], "rows": [["Masc. animate", "-a", "bratr{a}"], ["Masc. inanimate", "-u (or -a)", "do obchod{u}, chleb{a}"], ["Feminine -a", "-y", "káva → káv{y}"], ["Feminine -e / consonant", "-e / -i", "růž{e}, kost{i}"], ["Neuter -o / -e", "-a / -e", "vín{a}, moř{e}"]]}, {"title": "When to use", "head": ["Trigger", "Example"], "rows": [["quantity words", "hodně lid{í}, kilo jablek"], ["5 and more", "pět piv"], ["z, do, od, u, bez", "z Prah{y}, do práce"]]}],
          examples: [["Jdu do obchodu.", "I'm going to the shop."], ["Káva bez cukru.", "Coffee without sugar."], ["Kilo jablek.", "A kilo of apples."], ["Auto mého bratra.", "My brother's car."]]
        },
        {
          id: "a2-dative",
          title: "Dative (3. pád)",
          what: "The person you give, say or show something to. Also after k/ke (towards), proti (against), kvůli (because of), díky (thanks to), and verbs like pomáhat, rozumět, volat, věřit.",
          pattern: [{"head": ["Gender", "Ending", "Example"], "rows": [["Masc. animate", "-ovi / -i", "bratr{ovi}, muž{i}"], ["Masc. inanimate", "-u", "k obchod{u}"], ["Feminine -a", "-ě / -e", "žen{ě}"], ["Feminine -e / consonant", "-i", "růž{i}, kost{i}"], ["Neuter", "-u / -i", "vín{u}, moř{i}"]], "note": "Verbs with dative: dát, říct, pomáhat, rozumět, volat, věřit, líbit se."}],
          examples: [["Dám to mamince.", "I'll give it to mum."], ["Zavolám ti zítra.", "I'll call you tomorrow."], ["Jdu k doktorovi.", "I'm going to the doctor."]]
        },
        {
          id: "a2-instrumental",
          title: "Instrumental (7. pád)",
          what: "'With' (s/se), the tool or means of transport, and location with před (in front of), za (behind), nad (above), pod (under), mezi (between). Also after být/stát se for roles.",
          pattern: [{"head": ["Gender", "Ending", "Example"], "rows": [["Masculine / neuter", "-em", "bratr{em}, aut{em}"], ["Feminine -a", "-ou", "žen{ou}"], ["Feminine -e / consonant", "-í", "tramvaj{í}, kost{í}"], ["Plural", "-y / -ami / -emi / -mi", "s kamarád{y}, se žen{ami}"]]}],
          examples: [["Jedu tramvají.", "I'm going by tram."], ["Kafe s mlékem.", "Coffee with milk."], ["Sejdeme se před divadlem.", "Let's meet in front of the theatre."], ["Chci být lékařem.", "I want to be a doctor."]]
        },
        {
          id: "a2-vocative",
          title: "Vocative (5. pád)",
          what: "Form used when addressing someone directly. Used in speech and emails, and in the polite pane / paní + surname.",
          pattern: [{"head": ["Type", "Ending", "Example"], "rows": [["Masc. hard", "-e", "pan → pan{e}, Petr → Pet{ře}"], ["Masc. -k / -g / -ch", "-u", "Marek → Mark{u}"], ["Masc. soft", "-i", "Tomáš → Tomáš{i}"], ["Feminine -a", "-o", "Jana → Jan{o}"], ["Others", "no change", "Marie → Marie"]]}],
          examples: [["Dobrý den, pane Nováku.", "Good afternoon, Mr Novák."], ["Ahoj, Petře!", "Hi, Petr!"], ["Děkuju, Jano.", "Thanks, Jana."]]
        },
        {
          id: "a2-plural-cases",
          title: "Plural endings in all cases",
          what: "Plural endings are more regular than singular ones. Dative, locative and instrumental plural follow clear vowel patterns.",
          pattern: [{"head": ["Case", "Masculine", "Feminine", "Neuter"], "rows": [["Genitive", "hrad{ů}, muž{ů}", "žen{∅}, růž{í}", "měst{∅}, moř{í}"], ["Dative", "hrad{ům}", "žen{ám}, růž{ím}", "měst{ům}, moř{ím}"], ["Locative", "hrad{ech}, muž{ích}", "žen{ách}, růž{ích}", "měst{ech}, moř{ích}"], ["Instrumental", "hrad{y}, muž{i}", "žen{ami}, růž{emi}", "měst{y}, moř{i}"]], "note": "∅ means no ending: žena → žen, město → měst."}],
          examples: [["Píšu kamarádům.", "I'm writing to friends."], ["V horách je zima.", "It's cold in the mountains."], ["Se ženami a s dětmi.", "With the women and children."]]
        },
        {
          id: "a2-pronoun-cases",
          title: "Personal pronouns in all cases",
          what: "Pronouns have short forms (unstressed, in second position) and long forms (stressed, after prepositions). He/she/they take n- after a preposition.",
          pattern: [{"head": ["", "Gen. / Acc.", "Dative", "Locative", "Instrumental"], "rows": [["já", "mě", "mi / mně", "mně", "mnou"], ["ty", "tě / tebe", "ti / tobě", "tobě", "tebou"], ["on", "ho / jeho", "mu / jemu", "něm", "jím"], ["ona", "jí (gen.) / ji (acc.)", "jí", "ní", "jí"], ["my", "nás", "nám", "nás", "námi"], ["vy", "vás", "vám", "vás", "vámi"], ["oni", "jich / je", "jim", "nich", "jimi"]], "note": "After a preposition, he/she/they start with n-: pro {n}ěj, s {n}ím, bez {n}í."}],
          examples: [["Vidím tě.", "I see you."], ["To je pro tebe.", "This is for you."], ["Mluvil jsem s ní.", "I talked to her."]]
        },
        {
          id: "a2-imperative",
          title: "Imperative",
          what: "Take the 3rd person plural present, drop the ending, then add nothing (ty), -te (vy) or -me (let's). If the stem ends in two consonants, add -i/-ěte.",
          pattern: [{"head": ["Infinitive", "They (3rd pl.)", "ty", "vy", "let's"], "rows": [["dělat", "dělají", "dělej", "dělej{te}", "dělej{me}"], ["mluvit", "mluví", "mluv", "mluv{te}", "mluv{me}"], ["psát", "píšou", "piš", "piš{te}", "piš{me}"], ["číst", "čtou", "čt{i}", "čt{ěte}", "čt{ěme}"], ["být", "jsou", "buď", "buď{te}", "buď{me}"], ["jít (come)", "jdou", "pojď", "pojď{te}", "pojď{me}"]], "note": "Take the 3rd plural, drop the ending; two consonants at the end add -i."}],
          examples: [["Pojďte dál.", "Come in."], ["Počkej chvíli!", "Wait a moment!"], ["Nebuď smutný.", "Don't be sad."]]
        },
        {
          id: "a2-comparison",
          title: "Comparatives & superlatives",
          what: "Comparative adds -ější/-ejší or -ší. Superlative is nej- + comparative. 'Than' is než.",
          pattern: [{"title": "Regular", "head": ["Base", "Comparative", "Superlative"], "rows": [["zajímavý", "zajímav{ější}", "{nej}zajímavější"], ["levný", "levn{ější}", "{nej}levnější"], ["starý", "star{ší}", "{nej}starší"], ["drahý", "dra{žší}", "{nej}dražší"]]}, {"title": "Irregular", "head": ["Base", "Comparative", "Superlative"], "rows": [["dobrý", "lepší", "nejlepší"], ["špatný", "horší", "nejhorší"], ["velký", "větší", "největší"], ["malý", "menší", "nejmenší"]]}, {"title": "Adverbs", "head": ["Adverb", "Comparative"], "rows": [["rychle", "rychle{ji}"], ["dobře", "lépe / líp"], ["hodně", "víc"]], "note": "'than' = než"}],
          examples: [["Praha je větší než Brno.", "Prague is bigger than Brno."], ["To je nejlepší pivo.", "That's the best beer."], ["Mluv pomaleji, prosím.", "Speak more slowly, please."]]
        },
        {
          id: "a2-numbers-dates",
          title: "Large numbers, ordinals & dates",
          what: "Ordinal numbers decline like adjectives. Dates use the genitive: 'the nineteenth of October'.",
          pattern: [{"title": "Ordinals", "head": ["Number", "Ordinal", "Number", "Ordinal"], "rows": [["1.", "první", "6.", "šestý"], ["2.", "druhý", "7.", "sedmý"], ["3.", "třetí", "8.", "osmý"], ["4.", "čtvrtý", "10.", "desátý"], ["5.", "pátý", "20.", "dvacátý"]]}, {"title": "Months", "head": ["Month", "Date form", "Month", "Date form"], "rows": [["leden", "ledn{a}", "červenec", "července"], ["únor", "únor{a}", "srpen", "srpn{a}"], ["březen", "březn{a}", "září", "září"], ["duben", "dubn{a}", "říjen", "říjn{a}"], ["květen", "květn{a}", "listopad", "listopadu"], ["červen", "červn{a}", "prosinec", "prosince"]], "note": "19. 10. = devatenáctého října"}],
          examples: [["Narodil jsem se třetího května.", "I was born on the 3rd of May."], ["Bydlím ve druhém patře.", "I live on the second floor."]],
          tip: "Czech dates are written with a dot after the number: 19. 10. 2026."
        },
        {
          id: "a2-conjunctions",
          title: "Conjunctions and comma use",
          what: "Basic linking words. A comma comes before ale and before every subordinating word (že, protože, když, který).",
          pattern: [{"head": ["Word", "Meaning", "Comma before?"], "rows": [["a", "and", "no"], ["nebo", "or", "no"], ["ale", "but", "yes"], ["takže", "so", "yes"], ["že", "that", "yes"], ["protože", "because", "yes"], ["když", "when / if", "yes"], ["jestli", "whether / if", "yes"]]}],
          examples: [["Myslím, že má pravdu.", "I think he's right."], ["Nepřijdu, protože jsem nemocný.", "I won't come because I'm ill."]]
        },
        {
          id: "a2-clitics",
          title: "Word order: clitics in second position",
          what: "Short unstressed words go to the second position of the clause, after the first stressed element, in a fixed order.",
          pattern: [{"head": ["Slot", "Words", "Example"], "rows": [["1", "jsem, jsi, jsme, jste, bych, bys…", "Včera {jsem} si…"], ["2", "se, si", "Včera jsem {si} koupil kolo."], ["3", "mi, ti, mu, nám, vám (dative)", "Dal jsem {mu} to."], ["4", "mě, tě, ho, ji, to (accusative)", "Dal jsem mu {to}."]], "note": "All of them sit right after the first stressed word of the clause, in this order."}],
          examples: [["Včera jsem si koupil kolo.", "Yesterday I bought (myself) a bike."], ["Dal jsem mu to.", "I gave it to him."], ["Petr se mi líbí.", "I like Petr."]],
          tip: "A clitic can never open the sentence: say Líbí se mi, never Se mi líbí."
        }
      ]
    },
    {
      id: "B1",
      name: "Threshold",
      goal: "Hypotheticals, purpose, relative clauses; handle all declension patterns.",
      topics: [
        {
          id: "b1-conditional",
          title: "Conditional mood",
          what: "'Would'. Formed with bych/bys/by + l-participle. Very common for polite requests.",
          pattern: [{"head": ["Person", "Form", "Example"], "rows": [["já", "dělal {bych}", "Chtěl bych kávu."], ["ty", "dělal {bys}", "Šel bys?"], ["on / ona", "dělal {by}", "Mohl by…"], ["my", "dělali {bychom}", "colloquial: bysme"], ["vy", "dělali {byste}", "Mohl byste…?"], ["oni", "dělali {by}", ""]]}],
          examples: [["Chtěl bych kávu.", "I'd like a coffee."], ["Mohl byste mi pomoct?", "Could you help me? (formal)"], ["Rád bych to zkusil.", "I'd like to try it."]]
        },
        {
          id: "b1-conditions",
          title: "Conditional clauses: jestli vs kdyby",
          what: "Real conditions use jestli/když/pokud + indicative. Unreal conditions use kdyby (which conjugates) + conditional.",
          pattern: [{"head": ["Type", "Structure", "Example"], "rows": [["Real", "jestli / když / pokud + indicative", "Jestli bude pršet, zůstanu doma."], ["Unreal", "kdyby + l-form, … by + l-form", "Kdybych měl čas, šel bych."]]}, {"title": "kdyby conjugates", "head": ["Person", "kdyby"], "rows": [["já", "kdy{bych}"], ["ty", "kdy{bys}"], ["on / ona", "kdy{by}"], ["my", "kdy{bychom}"], ["vy", "kdy{byste}"], ["oni", "kdy{by}"]]}],
          examples: [["Když budeš mít čas, zavolej.", "If you have time, call."], ["Kdybych byl bohatý, koupil bych si dům.", "If I were rich, I'd buy a house."]]
        },
        {
          id: "b1-aby",
          title: "Purpose & wishes: aby",
          what: "aby means 'so that' or introduces what you want someone else to do. It conjugates like kdyby and takes the l-participle.",
          pattern: [{"head": ["Use", "Structure", "Example"], "rows": [["Purpose (so that)", "…, aby + l-form", "Učím se, {abych} rozuměl."], ["Want someone to", "chtít, aby…", "Chci, {abys} přišel."], ["Reported command", "říct, aby…", "Řekni mu, {aby} počkal."]], "note": "aby conjugates: abych, abys, aby, abychom, abyste, aby."}],
          examples: [["Učím se česky, abych rozuměl lidem.", "I learn Czech to understand people."], ["Chci, abys přišel.", "I want you to come."], ["Řekni mu, aby počkal.", "Tell him to wait."]]
        },
        {
          id: "b1-relative",
          title: "Relative pronoun který",
          what: "který ('who, which, that') declines like an adjective. Its gender and number come from the noun it refers to; its case comes from its role in its own clause.",
          pattern: [{"head": ["Role in its clause", "Form", "Example"], "rows": [["Subject (nom.)", "který / která / které", "muž, {který} tu bydlí"], ["Object (acc.)", "kterého / kterou / které", "muž, {kterého} znám"], ["With s (inst.)", "s kterým / se kterou", "žena, {se kterou} mluvím"], ["Location (loc.)", "ve kterém / ve které", "město, {ve kterém} žiju"], ["Colloquial", "co (never changes)", "ten muž, {co} tu bydlí"]], "note": "Gender and number come from the noun; case comes from the role in its own clause."}],
          examples: [["To je kolega, o kterém jsem mluvil.", "This is the colleague I talked about."], ["Kniha, kterou čtu, je dlouhá.", "The book I'm reading is long."]]
        },
        {
          id: "b1-aspect-use",
          title: "Aspect in use",
          what: "Choosing aspect: imperfective for process, habit, duration and after begin/stop; perfective for completion, one-off results and sequences of events.",
          pattern: [{"title": "When to use which", "head": ["Situation", "Aspect", "Example"], "rows": [["Process, duration", "imperfective", "Celý den jsem {psal}."], ["Habit, repetition", "imperfective", "Každý den {vstávám} v sedm."], ["After začít, přestat", "imperfective", "Přestal {kouřit}."], ["One finished result", "perfective", "{Napsal} jsem dopis."], ["Sequence of events", "perfective", "{Přišel}, {sedl} si a {objednal}."]]}, {"title": "Formation", "head": ["How pairs are made", "Example"], "rows": [["Add a prefix", "psát → {na}psat"], ["Change the suffix", "kup{ovat} → koup{it}"], ["Different word", "brát → vzít"]]}],
          examples: [["Přestal kouřit.", "He stopped smoking."], ["Vstal jsem, oblékl se a odešel.", "I got up, got dressed and left."]]
        },
        {
          id: "b1-prefixes",
          title: "Verbal prefixes and their meanings",
          what: "Prefixes make verbs perfective and add a meaning, often spatial.",
          pattern: [{"head": ["Prefix", "Meaning", "Example"], "rows": [["při-", "arrive, add", "{při}jít (come)"], ["od-", "away", "{od}jet (leave)"], ["vy-", "out, up, fully", "{vy}pít (drink up)"], ["v(e)-", "into", "{ve}jít (enter)"], ["pře-", "over, re-", "{pře}psat (rewrite)"], ["pod-", "under", "{pod}epsat (sign)"], ["roz-", "apart", "{roz}bít (smash)"], ["do-", "finish, reach", "{do}psat (finish writing)"], ["za-", "briefly, behind", "{za}volat (call)"], ["u-", "away, manage", "{u}dělat (do)"], ["na-", "onto, a lot", "{na}psat (write)"], ["pro-", "through", "{pro}jít (go through)"]]}],
          examples: [["vypít", "drink up"], ["přepsat", "rewrite"], ["rozbít", "smash"], ["dopsat", "finish writing"]]
        },
        {
          id: "b1-motion-prefixed",
          title: "Prefixed verbs of motion",
          what: "jít and jet combine with prefixes to give perfective verbs. Their imperfective pairs use -cházet / -jíždět.",
          pattern: [{"head": ["Meaning", "On foot (perf. / imperf.)", "By vehicle (perf. / imperf.)"], "rows": [["arrive", "přijít / přicházet", "přijet / přijíždět"], ["leave", "odejít / odcházet", "odjet / odjíždět"], ["go out", "vyjít / vycházet", "vyjet / vyjíždět"], ["enter", "vejít / vcházet", "vjet / vjíždět"], ["pass through", "projít / procházet", "projet / projíždět"], ["pop in", "zajít / zacházet", "zajet / zajíždět"]]}],
          examples: [["Přijdu v šest.", "I'll come at six."], ["Vlak odjíždí v osm.", "The train leaves at eight."], ["Zajdeme na pivo?", "Shall we pop out for a beer?"]]
        },
        {
          id: "b1-indefinite",
          title: "Indefinite & negative pronouns, double negation",
          what: "ně- makes 'some-', ni- makes 'no-'. Czech always negates the verb too, so negatives stack.",
          pattern: [{"head": ["", "some-", "no- (+ ne- on verb)", "any- (at all)"], "rows": [["who", "{ně}kdo", "{ni}kdo", "kdo{koli}"], ["what", "{ně}co", "{ni}c", "co{koli}"], ["where", "{ně}kde", "{ni}kde", "kde{koli}"], ["when", "{ně}kdy", "{ni}kdy", "kdy{koli}"], ["which kind", "{ně}jaký", "žádný", "jaký{koli}"]], "note": "Nikdo nic neví. Czech stacks negatives."}],
          examples: [["Nikdo nic neví.", "Nobody knows anything."], ["Nikdy jsem tam nebyl.", "I've never been there."], ["Máš nějaké plány?", "Do you have any plans?"]]
        },
        {
          id: "b1-reflexive-uses",
          title: "All uses of se / si",
          what: "se is the accusative reflexive, si the dative. Beyond 'myself', they mark reciprocity, inherently reflexive verbs, passive and impersonal meaning.",
          pattern: [{"head": ["Use", "Example", "Meaning"], "rows": [["True reflexive", "Myju {se}.", "I wash (myself)."], ["Each other", "Znají {se}.", "They know each other."], ["Always reflexive", "Bojím {se}. Směju {se}.", "I'm afraid. I laugh."], ["For yourself (si)", "Koupím {si} kávu.", "I'll get a coffee."], ["Passive", "Tady {se} staví.", "Building is going on here."], ["Impersonal", "Jak {se} tam jde?", "How does one get there?"]]}],
          examples: [["Bojím se psů.", "I'm afraid of dogs."], ["Dáme si pivo?", "Shall we have a beer?"]]
        },
        {
          id: "b1-svuj",
          title: "Reflexive possessive svůj",
          what: "svůj means 'one's own' and refers back to the subject of the clause. Use it instead of můj/tvůj/jeho when the owner is the subject.",
          pattern: [{"head": ["", "Masculine", "Feminine", "Neuter"], "rows": [["svůj", "svůj", "svoje / svou (acc.)", "svoje / své"]]}, {"title": "Why it matters", "head": ["Sentence", "Meaning"], "rows": [["Petr miluje {svou} ženu.", "his own wife"], ["Petr miluje {jeho} ženu.", "someone else's wife"]]}],
          examples: [["Vezmi si svůj kabát.", "Take your coat."], ["Zavolala svému bratrovi.", "She called her brother."]]
        },
        {
          id: "b1-masculine-patterns",
          title: "Masculine declension patterns",
          what: "Six model words cover masculine nouns. Choose by animacy and by whether the stem is hard or soft.",
          pattern: [{"head": ["Case", "pán", "hrad", "muž", "stroj", "předseda", "soudce"], "rows": [["Gen.", "pán{a}", "hrad{u}", "muž{e}", "stroj{e}", "předsed{y}", "soudc{e}"], ["Dat.", "pán{ovi}", "hrad{u}", "muž{ovi}", "stroj{i}", "předsed{ovi}", "soudc{i}"], ["Acc.", "pán{a}", "hrad", "muž{e}", "stroj", "předsed{u}", "soudc{e}"], ["Voc.", "pán{e}", "hrad{e}", "muž{i}", "stroj{i}", "předsed{o}", "soudc{e}"], ["Loc.", "pán{ovi}", "hrad{ě / u}", "muž{ovi}", "stroj{i}", "předsed{ovi}", "soudc{i}"], ["Inst.", "pán{em}", "hrad{em}", "muž{em}", "stroj{em}", "předsed{ou}", "soudc{em}"]], "note": "pán, muž, předseda, soudce = animate. hrad, stroj = inanimate."}],
          examples: [["s kolegou (předseda)", "with a colleague"], ["u počítače (stroj)", "at the computer"]]
        },
        {
          id: "b1-feminine-patterns",
          title: "Feminine declension patterns",
          what: "Four model words: žena (-a), růže (-e), píseň (soft consonant), kost (consonant).",
          pattern: [{"head": ["Case", "žena", "růže", "píseň", "kost"], "rows": [["Gen.", "žen{y}", "růž{e}", "písn{ě}", "kost{i}"], ["Dat.", "žen{ě}", "růž{i}", "písn{i}", "kost{i}"], ["Acc.", "žen{u}", "růž{i}", "píseň", "kost"], ["Voc.", "žen{o}", "růž{e}", "písn{i}", "kost{i}"], ["Loc.", "žen{ě}", "růž{i}", "písn{i}", "kost{i}"], ["Inst.", "žen{ou}", "růž{í}", "písn{í}", "kost{í}"]]}],
          examples: [["v kanceláři (růže)", "in the office"], ["s radostí (kost)", "with pleasure"]]
        },
        {
          id: "b1-neuter-patterns",
          title: "Neuter declension patterns",
          what: "Four model words: město (-o), moře (-e), kuře (-e, adds -et-), stavení (-í).",
          pattern: [{"head": ["Case", "město", "moře", "kuře", "stavení"], "rows": [["Gen.", "měst{a}", "moř{e}", "kuř{ete}", "staven{í}"], ["Dat.", "měst{u}", "moř{i}", "kuř{eti}", "staven{í}"], ["Acc.", "měst{o}", "moř{e}", "kuř{e}", "staven{í}"], ["Loc.", "měst{ě / u}", "moř{i}", "kuř{eti}", "staven{í}"], ["Inst.", "měst{em}", "moř{em}", "kuř{etem}", "staven{ím}"], ["Nom. pl.", "měst{a}", "moř{e}", "kuř{ata}", "staven{í}"]]}],
          examples: [["u moře", "by the sea"], ["kuře s rýží", "chicken with rice"]],
          tip: "The kuře pattern is mainly for young beings: kotě, štěně, tele, mládě."
        },
        {
          id: "b1-irregular-nouns",
          title: "Irregular nouns",
          what: "A few very common nouns are irregular, and body parts that come in pairs keep old dual forms.",
          pattern: [{"head": ["Singular", "Plural", "Notes"], "rows": [["dítě", "{děti}", "plural declines like kost: dětí, dětem, dětmi"], ["člověk", "{lidé}", "lidí, lidem, lidech, lidmi"], ["oko", "{oči}", "with: očima"], ["ucho", "{uši}", "with: ušima"], ["ruka", "{ruce}", "with: rukama"], ["noha", "nohy", "with: nohama"]]}],
          examples: [["Mám dvě děti.", "I have two children."], ["Bylo tam hodně lidí.", "There were a lot of people."], ["Viděl jsem to na vlastní oči.", "I saw it with my own eyes."]]
        },
        {
          id: "b1-numeral-cases",
          title: "Numerals in all cases",
          what: "Numbers 1–4 decline fully. From 5 up, all oblique cases end in -i.",
          pattern: [{"head": ["Case", "2", "3", "4", "5 +"], "rows": [["Gen.", "dvou", "tří", "čtyř", "pět{i}"], ["Dat.", "dvěma", "třem", "čtyřem", "pět{i}"], ["Loc.", "dvou", "třech", "čtyřech", "pět{i}"], ["Inst.", "dvěma", "třemi", "čtyřmi", "pět{i}"]]}],
          examples: [["s dvěma kamarády", "with two friends"], ["za pět minut", "in five minutes"], ["o pěti dětech", "about five children"]]
        },
        {
          id: "b1-collective",
          title: "Collective numerals (dvoje, troje)",
          what: "Nouns that exist only in the plural (dveře, kalhoty, noviny, brýle) are counted with special numerals.",
          pattern: [{"head": ["Count", "Collective", "Example"], "rows": [["1", "jedny", "jedny noviny (one newspaper)"], ["2", "dvoje", "dvoje dveře (two doors)"], ["3", "troje", "troje kalhoty (three pairs of trousers)"], ["4", "čtvery", "čtvery brýle"]], "note": "Only for nouns that exist only in plural: dveře, kalhoty, noviny, brýle."}],
          examples: [["Mám jen jedny brýle.", "I only have one pair of glasses."], ["V bytě jsou troje dveře.", "There are three doors in the flat."]]
        },
        {
          id: "b1-reported",
          title: "Reported speech",
          what: "Czech keeps the original tense in reported speech. Questions use jestli/zda; commands use aby.",
          pattern: [{"head": ["Direct", "Reported"], "rows": [["„Jsem unavený.“", "Řekl, {že} je unavený."], ["„Přijdeš?“", "Zeptal se, {jestli} přijdu."], ["„Kde bydlíš?“", "Ptal se, {kde} bydlím."], ["„Počkej!“", "Řekl mi, {abych} počkal."]], "note": "Keep the original tense: no shifting back like in English."}],
          examples: [["Říkala, že nemá čas.", "She said she didn't have time."], ["Ptal se, kde bydlím.", "He asked where I lived."]]
        }
      ]
    },
    {
      id: "B2",
      name: "Vantage",
      goal: "Passive, participles, nuanced clause linking, recognise colloquial Czech.",
      topics: [
        {
          id: "b2-past-conditional",
          title: "Past conditional",
          what: "'Would have'. Formed with the conditional of být + l-participle. In speech, the present conditional is often used instead.",
          pattern: [{"head": ["Form", "Meaning"], "rows": [["{byl bych} udělal", "I would have done"], ["Kdybych {byl} věděl, {byl bych} přišel.", "If I had known, I would have come."], ["Kdybych to věděl, přišel bych.", "Same, colloquial"]]}],
          examples: [["Byl bych ti zavolal.", "I would have called you."]]
        },
        {
          id: "b2-passive",
          title: "Passive voice",
          what: "být + passive participle (agrees with subject). The agent goes in the instrumental. The reflexive passive with se is more common in everyday speech.",
          pattern: [{"head": ["Type", "Structure", "Example"], "rows": [["Compound passive", "být + passive participle", "Dům {byl postaven} v roce 1900."], ["With agent", "+ instrumental", "Kniha byla napsána {Čapkem}."], ["Reflexive passive", "se + 3rd person", "Dům {se staví}."]]}],
          examples: [["Obchod je zavřený.", "The shop is closed."], ["Smlouva byla podepsána včera.", "The contract was signed yesterday."]]
        },
        {
          id: "b2-passive-participles",
          title: "Passive participles",
          what: "Formed with -n- or -t-. Short form (udělán) is used in the passive; long form (udělaný) is a normal adjective. -it verbs add -en with consonant changes.",
          pattern: [{"head": ["Infinitive", "Short (passive)", "Long (adjective)"], "rows": [["udělat", "uděla{n}", "uděla{ný}"], ["napsat", "napsá{n}", "napsa{ný}"], ["vzít", "vza{t}", "vza{tý}"], ["otevřít", "otevře{n}", "otevře{ný}"], ["koupit", "koup{en}", "koup{ený}"], ["zaplatit", "zapla{cen}", "zapla{cený}"], ["vrátit", "vrá{cen}", "vrá{cený}"], ["pustit", "puš{těn}", "puš{těný}"]], "note": "-it verbs: t → c, d → z, s → š, st → šť before -en."}],
          examples: [["Je zaplaceno.", "It's paid."], ["zavřené okno", "a closed window"]]
        },
        {
          id: "b2-verbal-nouns",
          title: "Verbal nouns (-ní, -tí)",
          what: "Nouns made from verbs, like English -ing nouns. Formed from the passive participle + -í. Neuter, declined like stavení.",
          pattern: [{"head": ["Verb", "Verbal noun", "Meaning"], "rows": [["číst", "čte{ní}", "reading"], ["psát", "psa{ní}", "writing"], ["vařit", "vaře{ní}", "cooking"], ["pít", "pi{tí}", "drinking"], ["kouřit", "kouře{ní}", "smoking"]]}],
          examples: [["Kouření zakázáno.", "No smoking."], ["Baví mě vaření.", "I enjoy cooking."]]
        },
        {
          id: "b2-iterative",
          title: "Iterative verbs (-va-)",
          what: "The suffix -va- adds the meaning 'used to / tends to'.",
          pattern: [{"head": ["Verb", "Iterative", "Meaning"], "rows": [["dělat", "děl{áv}at", "used to do"], ["chodit", "chod{ív}at", "used to go"], ["být", "b{ýv}at", "tends to be"], ["mít", "m{ív}at", "tends to have"]]}],
          examples: [["V létě jsme chodívali k řece.", "In summer we used to go to the river."], ["V pátek tu bývá plno.", "It tends to be full here on Fridays."]]
        },
        {
          id: "b2-possessive-adjectives",
          title: "Possessive adjectives (-ův, -in)",
          what: "For a single named person or animal as owner. -ův for a masculine owner, -in for a feminine one. Agrees with the thing owned.",
          pattern: [{"head": ["Owner", "Masculine thing", "Feminine thing", "Neuter thing"], "rows": [["Petr (man)", "Petr{ův} dům", "Petr{ova} sestra", "Petr{ovo} auto"], ["Jana (woman)", "Jan{in} pes", "Jan{ina} kniha", "Jan{ino} auto"]], "note": "Only for one named person or animal. Otherwise use the genitive: dům mého bratra."}],
          examples: [["Smetanova ulice", "Smetana Street"], ["maminčin recept", "mum's recipe"]]
        },
        {
          id: "b2-complex-clauses",
          title: "Concession, contrast & time clauses",
          what: "Linking words for more complex sentences.",
          pattern: [{"head": ["Word", "Meaning", "Example"], "rows": [["ačkoli, přestože, i když", "although", "Přestože pršelo, šli jsme ven."], ["zatímco", "while (contrast)", "Já pracuju, zatímco ty spíš."], ["jakmile", "as soon as", "Jakmile to budu vědět, ozvu se."], ["dokud ne + perfective", "until", "Počkám, dokud nepřijdeš."], ["než", "before", "Než odejdeš, zavolej."], ["pokud", "if, as long as", "Pokud chceš, pomůžu."]]}],
          examples: [["Přestože pršelo, šli jsme ven.", "Although it was raining, we went out."], ["Počkám, dokud nepřijdeš.", "I'll wait until you come."], ["Jakmile to budu vědět, ozvu se.", "As soon as I know, I'll get in touch."]]
        },
        {
          id: "b2-indirect-questions",
          title: "Indirect questions: jestli, zda, -li",
          what: "Yes/no questions inside a sentence. jestli is neutral, zda is formal, -li attached to the verb is very formal.",
          pattern: [{"head": ["Style", "Example"], "rows": [["Neutral (jestli)", "Nevím, {jestli} přijde."], ["Formal (zda)", "Nevím, {zda} přijde."], ["Very formal (-li)", "Nevím, přijde{-li}."]]}],
          examples: [["Zeptejte se, zda je to možné.", "Ask whether it's possible."]]
        },
        {
          id: "b2-word-formation",
          title: "Word formation",
          what: "Suffixes build families of words. Recognising them lets you guess new words.",
          pattern: [{"head": ["Suffix", "Makes", "Example"], "rows": [["-ek, -ka, -ko", "small, affectionate", "dům → dom{ek}, pivo → piv{ko}"], ["-eček, -ička", "extra small / cute", "dom{eček}, vod{ička}"], ["-tel, -ník, -ář", "person who does", "uči{tel}, úřed{ník}, lék{ař}"], ["-ka, -ice, -ová", "female form", "student{ka}, lv{ice}, Novák{ová}"], ["-ský, -ní, -ový", "adjective", "praž{ský}, zim{ní}, dřev{ěný}"]]}],
          examples: [["pivo → pivko", "beer → a little beer (affectionate)"], ["prodat → prodavač → prodavačka", "sell → shop assistant (m/f)"]]
        },
        {
          id: "b2-aspect-imperative",
          title: "Aspect in imperatives and negation",
          what: "Positive commands are usually perfective. Negative commands are usually imperfective. A negative perfective works as a warning.",
          pattern: [{"head": ["Command", "Aspect", "Example"], "rows": [["Positive", "perfective", "{Zavři} okno!"], ["Negative", "imperfective", "{Nezavírej} okno!"], ["Warning", "negative perfective", "{Neupadni!} (Mind you don't fall!)"]]}],
          examples: [["Posaďte se.", "Sit down."], ["Nezapomeň!", "Don't forget! (warning)"]]
        },
        {
          id: "b2-word-order",
          title: "Word order: given → new",
          what: "Czech word order is flexible: known information comes first, new or important information at the end of the sentence.",
          pattern: [{"head": ["Sentence", "Answers the question"], "rows": [["Petr koupil {auto}.", "What did Petr buy?"], ["Auto koupil {Petr}.", "Who bought the car?"]], "note": "New or important information goes last."}],
          examples: [["Ten dort upekla babička.", "It was grandma who baked the cake."]]
        },
        {
          id: "b2-colloquial",
          title: "Colloquial Czech (obecná čeština): basics",
          what: "Most spoken Czech in Bohemia differs systematically from the written standard. Recognise it even if you don't use it.",
          pattern: [{"head": ["Standard", "Colloquial", "Change"], "rows": [["dobrý", "dobr{ej}", "-ý → -ej"], ["dobré pivo", "dobr{ý} pivo", "-é → -ý"], ["s kamarády", "s kamarád{ama}", "inst. pl. → -ma"], ["okno", "{v}okno", "o- → vo-"], ["byl jsem", "byl {sem}", "jsem → sem"]]}],
          examples: [["Dáš si jedno malý?", "Will you have a small one (beer)?"], ["Byl sem tam s kámošema.", "I was there with mates."]]
        }
      ]
    },
    {
      id: "C1",
      name: "Effective proficiency",
      goal: "Formal and written registers, literary forms, precise government and punctuation.",
      topics: [
        {
          id: "c1-active-participles",
          title: "Active participles",
          what: "Adjectives meaning '-ing' or 'who did'. Present ones are common in written Czech; past ones are rare and formal.",
          pattern: [{"head": ["Type", "Formation", "Example"], "rows": [["Present", "3rd pl. + -cí", "dělají → děla{jící}, nesou → nes{oucí}"], ["Past (rare)", "-vší / -ší", "uděla{vší}, přiš{edší}"]]}],
          examples: [["rostoucí ceny", "rising prices"], ["pracující matka", "a working mother"]]
        },
        {
          id: "c1-transgressives",
          title: "Transgressives (přechodníky): recognition",
          what: "Old verb forms meaning 'while doing / having done'. Found in literature and fixed expressions; recognise them.",
          pattern: [{"head": ["Type", "Masculine", "Feminine / neuter", "Plural"], "rows": [["Present", "děla{je}", "děla{jíc}", "děla{jíce}"], ["Past", "uděla{v}", "uděla{vši}", "uděla{vše}"]], "note": "Fixed phrases: chtě nechtě, takříkajíc, počínaje … konče."}],
          examples: [["Chtě nechtě musel souhlasit.", "Like it or not, he had to agree."]]
        },
        {
          id: "c1-short-adjectives",
          title: "Short-form adjectives",
          what: "A small set of adjectives has short forms used as predicates, often in formal style.",
          pattern: [{"head": ["Long form", "Short form", "Example"], "rows": [["spokojený", "spokoje{n}", "Jsem s tím spokojen."], ["schopný", "schop{en}", "Je schopen všeho."], ["nemocný", "nemoc{en}", "Byl nemocen."], ["zdravý", "zdráv", "Buď zdráv!"], ["hotový", "hotov", "Jsem hotov."], ["jistý", "jist", "Nejsem si jist."]]}],
          examples: [["Jsem s tím spokojen.", "I'm satisfied with it."], ["Je schopen všeho.", "He's capable of anything."]]
        },
        {
          id: "c1-jenz",
          title: "Relative pronoun jenž",
          what: "Formal written alternative to který. After prepositions it takes n- forms.",
          pattern: [{"head": ["Case", "Masculine / neuter", "Feminine / plural"], "rows": [["Nom.", "jenž / jež", "jež (m. anim. pl. již)"], ["Gen.", "jehož", "jíž / jichž"], ["Dat.", "jemuž", "jíž / jimž"], ["After prep.", "o {n}ěmž, s {n}ímž", "bez {n}íž, pro {n}ěž"]]}],
          examples: [["zákon, jenž vstoupí v platnost", "a law which will come into effect"], ["firma, pro niž pracuji", "the company for which I work"]]
        },
        {
          id: "c1-register",
          title: "Register switching",
          what: "Choose between spisovná (written standard), hovorová (spoken standard) and obecná (common spoken) Czech depending on the situation.",
          pattern: [{"head": ["Register", "Example"], "rows": [["Written standard (spisovná)", "Byli {bychom} rádi, kdybyste nám dali vědět."], ["Spoken standard (hovorová)", "Byli {bysme} rádi, kdybyste nám dali vědět."], ["Common spoken (obecná)", "{Bylo by fajn}, kdybyste se ozvali."]]}],
          examples: [["Mohl byste mi prosím sdělit …", "Could you please let me know … (formal)"]]
        },
        {
          id: "c1-agreement",
          title: "Complex subject–verb agreement",
          what: "Past-tense endings with mixed subjects and with numerals.",
          pattern: [{"head": ["Subject", "Past ending", "Example"], "rows": [["Includes a masc. animate", "-li", "Petr a Jana šl{i}."], ["No masc. animate", "-ly", "Jana a Eva šl{y}."], ["Neuter plural", "-la", "Děvčata přišl{a}."], ["5+, několik", "-lo (neuter sg.)", "Pět lidí přišl{o}."], ["většina (a feminine noun)", "-la", "Většina lidí souhlasil{a}."]]}],
          examples: [["Většina lidí souhlasila.", "Most people agreed."]]
        },
        {
          id: "c1-nominal-style",
          title: "Nominal style",
          what: "Formal and official texts prefer nouns over verbs. Recognise and use them in writing; avoid them in conversation.",
          pattern: [{"head": ["Everyday", "Formal / nominal"], "rows": [["zkontrolovat", "provést kontrolu"], ["dohodnout se", "dojít k dohodě"], ["kvůli", "z důvodu, v souvislosti s"], ["podle", "na základě"], ["aby", "za účelem + genitive"]]}],
          examples: [["Na základě vaší žádosti …", "Based on your request …"]]
        },
        {
          id: "c1-connectors",
          title: "Formal connectors",
          what: "Linking words for written argument.",
          pattern: [{"head": ["Connector", "Meaning"], "rows": [["nicméně, avšak, ovšem", "however"], ["tudíž, proto, tedy", "therefore"], ["jelikož, neboť", "since, because"], ["pokud jde o, co se týče", "as for"], ["vzhledem k", "given"], ["naopak", "on the contrary"], ["zároveň", "at the same time"], ["mimo jiné", "among other things"]]}],
          examples: [["Jelikož jsme nedostali odpověď, …", "Since we haven't received a reply, …"]]
        },
        {
          id: "c1-ellipsis",
          title: "Ellipsis",
          what: "Repeated words are dropped where context makes them clear.",
          pattern: [{"head": ["Full", "Elliptical"], "rows": [["Petr šel do kina a Jana šla do divadla.", "Petr šel do kina, Jana do divadla."], ["Půjdeš? — Ano, půjdu.", "Půjdeš? — Půjdu."]]}],
          examples: [["Já kávu, ty čaj?", "Coffee for me, tea for you?"]]
        },
        {
          id: "c1-government",
          title: "Verb and adjective government (vazby)",
          what: "Many verbs and adjectives require a specific case or preposition. Learn them as fixed pairs.",
          pattern: [{"head": ["Verb / adjective", "Takes", "Example"], "rows": [["bát se", "genitive", "bát se {psa}"], ["zeptat se", "genitive", "zeptat se {učitele}"], ["zúčastnit se", "genitive", "zúčastnit se {konference}"], ["věřit", "dative", "věřit {lidem}"], ["děkovat", "dative + za + acc.", "děkovat {ti} za {pomoc}"], ["záviset", "na + locative", "záviset na {počasí}"], ["starat se", "o + accusative", "starat se o {děti}"], ["hrdý", "na + accusative", "hrdý na {syna}"], ["plný", "genitive", "plný {lidí}"]]}],
          examples: [["Zúčastnil jsem se konference.", "I attended the conference."], ["Záleží na tobě.", "It's up to you."]]
        },
        {
          id: "c1-commas",
          title: "Comma rules",
          what: "Czech commas follow grammar strictly: every subordinate clause is separated.",
          pattern: [{"head": ["Rule", "Example"], "rows": [["Before every subordinate clause", "Vím{,} že přijdeš."], ["Before ale, avšak, nýbrž", "Chtěl{,} ale nemohl."], ["Around address (vocative)", "Petře{,} pojď."], ["No comma before simple a, i, nebo", "Petr a Jana"]]}],
          examples: [["Vím, že přijdeš.", "I know you'll come."], ["Řekl, že přijde, ale nepřišel.", "He said he'd come, but he didn't."]]
        },
        {
          id: "c1-idioms",
          title: "Idioms with fixed case government",
          what: "Common fixed expressions whose cases you need to reproduce exactly.",
          pattern: [{"head": ["Expression", "Meaning"], "rows": [["vzít něco v úvahu", "take into account"], ["mít něco na mysli", "have in mind"], ["jít někomu na nervy", "get on someone's nerves"], ["dát někomu za pravdu", "agree someone is right"], ["mít něco za sebou", "have something behind you"]]}],
          examples: [["Musíme to vzít v úvahu.", "We have to take it into account."]]
        }
      ]
    },
    {
      id: "C2",
      name: "Mastery",
      goal: "Full control of styles, spelling, rare forms and regional variation.",
      topics: [
        {
          id: "c2-literary",
          title: "Literary and archaic forms",
          what: "Active use of transgressives, the genitive object after negation, and old forms like jest.",
          pattern: [{"head": ["Form", "Modern equivalent", "Example"], "rows": [["jest", "je", "Tak jest."], ["Genitive after negation", "accusative", "Nedbal {rady}. (= radu)"], ["Past transgressive", "když + past", "{Vrátiv se} domů, usedl."]]}],
          examples: [["Vrátiv se domů, usedl ke stolu.", "Having returned home, he sat down at the table."]]
        },
        {
          id: "c2-styles",
          title: "Functional styles",
          what: "Academic, administrative, journalistic and literary Czech each have their own conventions.",
          pattern: [{"head": ["Style", "Typical features", "Example"], "rows": [["Academic (odborný)", "terms, passive, nominal style", "Bylo zjištěno, že…"], ["Administrative", "dle, výše uvedený, tímto", "Tímto potvrzujeme…"], ["Journalistic", "verbless headlines", "Vláda bez dohody"], ["Literary", "free word order, colloquial dialogue", ""]]}],
          examples: [["Tímto potvrzujeme přijetí vaší žádosti.", "We hereby confirm receipt of your request."]]
        },
        {
          id: "c2-rare-declension",
          title: "Foreign words and rare declensions",
          what: "Borrowed words fit Czech patterns in particular ways; some never decline.",
          pattern: [{"head": ["Word", "Declined", "Note"], "rows": [["muzeum", "muzea, v muze{u}", "drop -um"], ["téma", "tématu, o tématu", "adds -t-"], ["drama", "dramatu", "adds -t-"], ["Goethe", "Goeth{a}", "foreign name"], ["Hugo", "Hug{a}", "foreign name"], ["taxi, menu, lady", "no change", "indeclinable"]]}],
          examples: [["Byli jsme v Národním muzeu.", "We were at the National Museum."]]
        },
        {
          id: "c2-fine-aspect",
          title: "Fine points of aspect",
          what: "Biaspectual verbs, stacked prefixes and aspect choice in narrative.",
          pattern: [{"head": ["Phenomenon", "Example"], "rows": [["Biaspectual verbs", "informovat, organizovat, věnovat"], ["Stacked prefixes", "kupovat → {na}kupovat, smát se → {roz}esmát se"], ["Narrative", "Když jsem {šel} domů (background), {potkal} jsem Petra (event)."]]}],
          examples: [["Když jsem šel domů, potkal jsem Petra.", "While I was walking home, I met Petr."]]
        },
        {
          id: "c2-dialects",
          title: "Dialects and regional Czech",
          what: "Moravian and Silesian speech differs from Bohemian obecná čeština; Brno has its own slang (hantec).",
          pattern: [{"head": ["Region", "Features", "Example"], "rows": [["Moravia", "no -ej, keeps -é", "dobr{é} pivo"], ["Silesia", "short vowels, stress on second-to-last syllable", ""], ["Brno (hantec)", "slang vocabulary", "šalina = tram, hokna = work"]]}],
          examples: [["Pojedu šalinou.", "I'll take the tram. (Brno)"]]
        },
        {
          id: "c2-orthography",
          title: "Spelling: i/y, ú/ů, mě/mně, capitals",
          what: "Full mastery of Czech spelling, which schoolchildren drill for years.",
          pattern: [{"title": "i or y", "head": ["After", "Write", "Example"], "rows": [["Hard: h, ch, k, r, d, t, n", "y", "hr{y}, k{y}selý"], ["Soft: ž, š, č, ř, c, j, ď, ť, ň", "i", "ž{i}vot, č{i}stý"], ["Ambiguous: b, f, l, m, p, s, v, z", "learn vyjmenovaná slova", "b{ý}t, m{y}, s{ý}r, v{y}soký"]]}, {"title": "Other spelling rules", "head": ["Rule", "Example"], "rows": [["ú at the start or after a prefix", "{ú}kol, ne{ú}spěch"], ["ů everywhere else", "d{ů}m, st{ů}l"], ["mě (gen./acc.) vs mně (dat./loc.)", "vidí {mě}, dal {mně}"]]}],
          examples: [["Ženy přišly, muži přišli.", "The women came, the men came. (agreement spelling)"]]
        },
        {
          id: "c2-particles",
          title: "Emphasis, particles and rhetorical word order",
          what: "Small words that add attitude, and fronting for emphasis.",
          pattern: [{"head": ["Particle", "Adds", "Example"], "rows": [["vždyť, přece", "after all, surely", "{Vždyť} jsem ti to říkal!"], ["copak, kdepak", "surely not, no way", "{Copak} nevíš?"], ["prý", "reportedly", "{Prý} přijde."], ["ať", "let / may", "{Ať} přijde."], ["teprve", "only (so late)", "{Teprve} teď."]]}],
          examples: [["Vždyť jsem ti to říkal!", "But I told you!"], ["Takovou ostudu jsem ještě nezažil.", "I've never experienced such a disgrace."]]
        }
      ]
    }
  ]
};
