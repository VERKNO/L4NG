/*
 * End-of-level review lessons ("Putting it all together"). See README.md "Review lessons".
 * Each sentence = list of parts: [czech text, what it is, topic id or null].
 * The full sentence is the parts joined with spaces, so punctuation stays inside its part.
 */
window.C3KO_REVIEWS = {
  A1: {
    what: "Everyday sentences that use only A1 grammar. Read each sentence, try to explain every part yourself, then check the breakdown.",
    sentences: [
      {
        en: "My name is Tomáš and I like Czech coffee.",
        parts: [
          ["Jmenuju se", "jmenovat se, a verb that always takes se; 1st person, so já is dropped", "a1-reflexive"],
          ["Tomáš", "a name, in the base form (nominative)", "a1-nominative"],
          ["a", "and", null],
          ["mám rád", "mít rád = to like; rád because the speaker is a man (ráda for a woman)", "a1-liking"],
          ["českou", "česká → českou: feminine adjective in the accusative, agreeing with kávu", "a1-accusative"],
          ["kávu.", "káva → kávu: feminine noun as the direct object (accusative)", "a1-accusative"]
        ]
      },
      {
        en: "My sister doesn't have time.",
        parts: [
          ["Moje", "possessive 'my', feminine form because sestra is feminine", "a1-possessives"],
          ["sestra", "feminine noun (-a), the subject", "a1-gender"],
          ["nemá", "ne + má: mít, 3rd person singular, negated", "a1-negation"],
          ["čas.", "masculine inanimate, so the accusative looks the same as the base form", "a1-accusative"]
        ]
      },
      {
        en: "How much is that new cheese?",
        parts: [
          ["Kolik", "question word 'how much'", "a1-questions"],
          ["stojí", "stát (to cost), -í- verb class, 3rd person singular", "a1-present"],
          ["ten", "demonstrative 'that', masculine", "a1-demonstratives"],
          ["nový", "hard adjective, masculine form -ý", "a1-adjectives"],
          ["sýr?", "masculine noun, the subject (nominative)", "a1-nominative"]
        ]
      },
      {
        en: "I want one large coffee and two rolls.",
        parts: [
          ["Chci", "chtít (want), 1st person singular", "a1-modals"],
          ["jednu", "jedna → jednu: the number 1 agrees in gender and case (feminine accusative)", "a1-numbers-time"],
          ["velkou", "feminine adjective in the accusative (-á → -ou)", "a1-accusative"],
          ["kávu", "feminine noun in the accusative (-a → -u)", "a1-accusative"],
          ["a", "and", null],
          ["dva", "number 2, masculine form (dvě for feminine/neuter)", "a1-numbers-time"],
          ["rohlíky.", "2–4 take the plural; masculine inanimate plural ends in -y", "a1-nominative"]
        ]
      },
      {
        en: "Do you speak Czech? — No, I don't understand.",
        parts: [
          ["Umíte", "umět (know how), vy form: polite 'you'", "a1-modals"],
          ["česky?", "'in Czech'; a yes/no question uses normal word order and rising intonation", "a1-questions"],
          ["— Ne,", "no", null],
          ["nerozumím.", "ne + rozumím: rozumět, -í- verb class, negated", "a1-negation"]
        ]
      },
      {
        en: "I like Prague, but it's expensive.",
        parts: [
          ["Líbí se mi", "líbit se: Prague 'appeals to me'; mi = to me", "a1-liking"],
          ["Praha,", "feminine noun, the grammatical subject of líbí se", "a1-gender"],
          ["ale", "but (comma before it)", null],
          ["je", "být, 3rd person singular", "a1-byt"],
          ["drahá.", "adjective in the feminine form to agree with Praha", "a1-adjectives"]
        ]
      },
      {
        en: "I have to go, it's five o'clock.",
        parts: [
          ["Musím", "muset (must), 1st person singular", "a1-modals"],
          ["jít,", "infinitive after a modal verb", "a1-modals"],
          ["je pět hodin.", "5 and up: singular verb je + genitive plural hodin", "a1-numbers-time"]
        ]
      }
    ]
  },
  A2: {
    what: "Sentences that combine the seven cases, past and future, motion verbs and word order from A2.",
    sentences: [
      {
        en: "Yesterday I was at the cinema with a friend.",
        parts: [
          ["Včera", "yesterday; the first stressed word, so the clitic jsem comes right after it", "a2-clitics"],
          ["jsem byl", "past tense of být: l-form byl + jsem for 1st person", "a2-past"],
          ["s kamarádem", "s + instrumental: masculine -em", "a2-instrumental"],
          ["v kině.", "v + locative: kino → kině", "a2-locative"]
        ]
      },
      {
        en: "Tomorrow I'll go to work by tram.",
        parts: [
          ["Zítra", "tomorrow", null],
          ["pojedu", "future of jet (by vehicle): po- + jedu", "a2-future"],
          ["tramvají", "instrumental for means of transport; tramvaj → tramvají", "a2-instrumental"],
          ["do práce.", "do + genitive: práce stays práce (feminine -e)", "a2-genitive"]
        ]
      },
      {
        en: "I gave it to him for his birthday.",
        parts: [
          ["Dal", "past of dát (perfective: one completed action)", "a2-aspect-intro"],
          ["jsem mu to", "clitic order: jsem → mu (dative 'to him') → to (accusative 'it')", "a2-clitics"],
          ["k narozeninám.", "k + dative plural: narozeniny → narozeninám (-ám)", "a2-plural-cases"]
        ]
      },
      {
        en: "Petr, speak more slowly, please!",
        parts: [
          ["Petře,", "vocative: Petr → Petře when addressing him", "a2-vocative"],
          ["mluv", "imperative of mluvit (ty form): mluví → mluv", "a2-imperative"],
          ["pomaleji,", "comparative adverb: pomalu → pomaleji", "a2-comparison"],
          ["prosím!", "please", null]
        ]
      },
      {
        en: "I was born on the 3rd of May in Prague.",
        parts: [
          ["Narodil jsem se", "past tense + se; clitic order jsem → se", "a2-clitics"],
          ["třetího května", "date in the genitive: ordinal třetí + month květen → května", "a2-numbers-dates"],
          ["v Praze.", "locative with consonant change: Praha → Praze (h → z)", "a2-locative"]
        ]
      },
      {
        en: "I think Brno is smaller than Prague.",
        parts: [
          ["Myslím,", "myslet, 1st person; comma before že", "a2-conjunctions"],
          ["že", "that", "a2-conjunctions"],
          ["Brno je", "Brno is neuter; být, 3rd person", null],
          ["menší", "irregular comparative: malý → menší", "a2-comparison"],
          ["než Praha.", "než = than, followed by the nominative", "a2-comparison"]
        ]
      },
      {
        en: "I go to the gym twice a week, but today I'm not going.",
        parts: [
          ["Chodím", "chodit: habitual, regular going on foot", "a2-motion"],
          ["do posilovny", "do + genitive: posilovna → posilovny", "a2-genitive"],
          ["dvakrát týdně,", "twice a week", null],
          ["ale dnes", "but today", null],
          ["nejdu.", "jít negated: one trip right now", "a2-motion"]
        ]
      }
    ]
  },
  B1: {
    what: "Sentences with conditionals, aby, relative clauses, aspect and the full declension system from B1.",
    sentences: [
      {
        en: "If I had more time, I would go to a Czech course.",
        parts: [
          ["Kdybych měl", "kdyby (1st person: kdybych) + l-form: an unreal condition", "b1-conditions"],
          ["víc času,", "víc (more) takes the genitive: čas → času", "a2-genitive"],
          ["chodil bych", "conditional: l-form + bych; imperfective chodit because it would be regular", "b1-conditional"],
          ["na kurz", "na + accusative (masculine inanimate, no change)", "a1-accusative"],
          ["češtiny.", "genitive 'of Czech': čeština → češtiny", "b1-feminine-patterns"]
        ]
      },
      {
        en: "I'm learning Czech so that I understand the people I work with.",
        parts: [
          ["Učím se česky,", "učit se: always with se", "b1-reflexive-uses"],
          ["abych rozuměl", "aby (1st person: abych) + l-form: purpose 'so that'", "b1-aby"],
          ["lidem,", "rozumět takes the dative; lidé → lidem (irregular plural)", "b1-irregular-nouns"],
          ["se kterými", "který in the instrumental plural after s(e): with whom", "b1-relative"],
          ["pracuju.", "-uje verb, 1st person", "a1-present"]
        ]
      },
      {
        en: "Nobody told me anything.",
        parts: [
          ["Nikdo", "nobody (ni-)", "b1-indefinite"],
          ["mi", "dative clitic 'to me', in second position", "a2-clitics"],
          ["nic", "nothing; stacks with the negated verb", "b1-indefinite"],
          ["neřekl.", "říct (perfective) in the past, negated: double negation", "b1-indefinite"]
        ]
      },
      {
        en: "Petr called his brother to say he'd come late.",
        parts: [
          ["Petr zavolal", "perfective past: one completed call", "b1-aspect-use"],
          ["svému bratrovi,", "svůj = his own (refers to Petr); dative: bratr → bratrovi", "b1-svuj"],
          ["že přijde", "reported speech keeps the original tense; přijít = arrive (při- + jít)", "b1-reported"],
          ["pozdě.", "late", null]
        ]
      },
      {
        en: "For the interview I'll take one better pair of trousers.",
        parts: [
          ["Na pohovor", "na + accusative: for (an event)", "a1-accusative"],
          ["si vezmu", "vzít (perfective) → future meaning; si = for myself", "b1-reflexive-uses"],
          ["jedny", "collective numeral for a plural-only noun", "b1-collective"],
          ["lepší kalhoty.", "comparative lepší; kalhoty exists only in the plural", "b1-collective"]
        ]
      },
      {
        en: "Two years ago I left Brno and came to Prague.",
        parts: [
          ["Před dvěma lety", "před + instrumental; dva → dvěma; rok → lety (irregular plural)", "b1-numeral-cases"],
          ["jsem odešel", "od- + jít: leave on foot (perfective)", "b1-motion-prefixed"],
          ["z Brna", "z + genitive: Brno → Brna", "b1-neuter-patterns"],
          ["a přijel", "při- + jet: arrive by vehicle (perfective)", "b1-motion-prefixed"],
          ["do Prahy.", "do + genitive: Praha → Prahy", "b1-feminine-patterns"]
        ]
      }
    ]
  },
  B2: {
    what: "Sentences with passive, participles, past conditional, iteratives and more complex clauses from B2.",
    sentences: [
      {
        en: "The contract was signed by the director, although the lawyer hadn't checked it yet.",
        parts: [
          ["Smlouva byla podepsána", "passive: být + short passive participle, feminine to agree with smlouva", "b2-passive"],
          ["ředitelem,", "the agent of a passive goes in the instrumental", "b2-passive"],
          ["přestože", "although", "b2-complex-clauses"],
          ["ji právník", "ji = it (the contract, accusative clitic) placed early as known information", "b2-word-order"],
          ["ještě nezkontroloval.", "perfective past negated: hadn't checked (yet)", "b1-aspect-use"]
        ]
      },
      {
        en: "If I had known the shop was closed, I would have stayed at home.",
        parts: [
          ["Kdybych byl věděl,", "past conditional in the if-clause: kdybych + byl + l-form", "b2-past-conditional"],
          ["že je obchod zavřený,", "zavřený = long passive participle used as an adjective", "b2-passive-participles"],
          ["byl bych zůstal", "past conditional: would have stayed", "b2-past-conditional"],
          ["doma.", "at home", null]
        ]
      },
      {
        en: "In summer we used to go to the river, where you could swim.",
        parts: [
          ["V létě", "v + locative: léto → létě", "a2-locative"],
          ["jsme chodívali", "iterative -va-: 'used to go'", "b2-iterative"],
          ["k řece,", "k + dative: řeka → řece (k → c)", "a2-dative"],
          ["kde se dalo plavat.", "impersonal se: 'one could swim'", "b1-reflexive-uses"]
        ]
      },
      {
        en: "Don't forget Jana's present!",
        parts: [
          ["Nezapomeň", "negative perfective imperative = a warning", "b2-aspect-imperative"],
          ["na", "zapomenout na + accusative", "a1-accusative"],
          ["Janin dárek!", "possessive adjective: Jana → Janin (masculine because dárek is masculine)", "b2-possessive-adjectives"]
        ]
      },
      {
        en: "Ask whether reading in the library is free.",
        parts: [
          ["Zeptej se,", "imperative of zeptat se (ty form)", "a2-imperative"],
          ["zda", "formal 'whether' in an indirect question", "b2-indirect-questions"],
          ["je čtení", "čtení = verbal noun 'reading', neuter", "b2-verbal-nouns"],
          ["v knihovně", "v + locative: knihovna → knihovně", "a2-locative"],
          ["zdarma.", "free of charge", null]
        ]
      },
      {
        en: "Will you have a small one (beer) with me?",
        parts: [
          ["Dáš si", "dát si = have (food, drink); perfective present = future", "b1-reflexive-uses"],
          ["se mnou", "s + instrumental of já: mnou", "a2-pronoun-cases"],
          ["jedno malý?", "colloquial -ý instead of standard malé (pivo is understood)", "b2-colloquial"]
        ]
      }
    ]
  },
  C1: {
    what: "Formal sentences with participles, transgressives, jenž, nominal style and complex agreement from C1.",
    sentences: [
      {
        en: "Given that five hundred people attended the conference, the hall's capacity must be taken into account.",
        parts: [
          ["Vzhledem k tomu, že", "formal connector 'given that'", "c1-connectors"],
          ["se konference zúčastnilo", "zúčastnit se + genitive; neuter singular -lo because the subject is a number above 4", "c1-agreement"],
          ["pět set lidí,", "5+ + genitive plural: lidí", "b1-irregular-nouns"],
          ["je nutné vzít v úvahu", "fixed expression 'take into account'", "c1-idioms"],
          ["kapacitu sálu.", "accusative object + genitive 'of the hall'", "a2-genitive"]
        ]
      },
      {
        en: "The company I work for is satisfied with the results.",
        parts: [
          ["Firma,", "the subject, set off by commas around the relative clause", "c1-commas"],
          ["pro niž pracuji,", "jenž after a preposition: pro + niž; pracuji = formal written ending", "c1-jenz"],
          ["je s výsledky", "s + instrumental plural: výsledky", "a2-instrumental"],
          ["spokojena.", "short-form adjective, feminine, used as a predicate", "c1-short-adjectives"]
        ]
      },
      {
        en: "Based on your request, an inspection was carried out.",
        parts: [
          ["Na základě", "nominal style 'based on' + genitive", "c1-nominal-style"],
          ["vaší žádosti", "genitive: vaše žádost → vaší žádosti", "a2-genitive"],
          ["byla provedena kontrola.", "nominal style provést kontrolu, here in the passive", "c1-nominal-style"]
        ]
      },
      {
        en: "Rising prices didn't put people off; however, purchases fell.",
        parts: [
          ["Rostoucí", "present active participle: rostou → rostoucí", "c1-active-participles"],
          ["ceny lidi", "ceny = subject; lidi = accusative of lidé", "b1-irregular-nouns"],
          ["neodradily,", "past -ly: ceny is feminine plural", "c1-agreement"],
          ["nicméně", "however", "c1-connectors"],
          ["nákupy klesly.", "nákupy = masculine inanimate plural, so -ly", "c1-agreement"]
        ]
      },
      {
        en: "Like it or not, we agreed: Petr will go to Brno, Jana to Ostrava.",
        parts: [
          ["Chtě nechtě", "fixed transgressive phrase 'like it or not'", "c1-transgressives"],
          ["jsme souhlasili:", "-li: mixed group including a man", "c1-agreement"],
          ["Petr pojede do Brna,", "future of jet + do + genitive", "a2-future"],
          ["Jana do Ostravy.", "ellipsis: pojede is left out because it's clear", "c1-ellipsis"]
        ]
      }
    ]
  },
  C2: {
    what: "Literary, administrative and regional Czech, with the spelling and particles that native writers control.",
    sentences: [
      {
        en: "Having returned home, he sat down at the table and ignored his wife's advice.",
        parts: [
          ["Vrátiv se domů,", "past transgressive (masculine): having returned", "c2-literary"],
          ["usedl ke stolu", "perfective past; k + dative: stůl → stolu", "a2-dative"],
          ["a nedbal rady", "genitive object after negation (literary): rady instead of radu", "c2-literary"],
          ["své ženy.", "svůj in the genitive, referring to the subject", "b1-svuj"]
        ]
      },
      {
        en: "We hereby confirm receipt of your request under the conditions stated above.",
        parts: [
          ["Tímto potvrzujeme", "administrative opener 'hereby'", "c2-styles"],
          ["přijetí", "verbal noun: přijmout → přijetí (receipt)", "b2-verbal-nouns"],
          ["Vaší žádosti", "capital V for the formal 'your' in letters", "c2-orthography"],
          ["dle výše uvedených podmínek.", "dle (= podle) + genitive; výše uvedený = stated above", "c2-styles"]
        ]
      },
      {
        en: "But apparently you used to ride the tram in Brno!",
        parts: [
          ["Vždyť", "particle adding 'but surely / after all'", "c2-particles"],
          ["jsi prý", "prý = reportedly, apparently", "c2-particles"],
          ["v Brně", "v + locative: Brno → Brně", "a2-locative"],
          ["jezdil šalinou!", "jezdit = habitual by vehicle; šalina = Brno word for tram, instrumental", "c2-dialects"]
        ]
      },
      {
        en: "The children played in the museum, while nobody told me anything.",
        parts: [
          ["Děti si hrály", "děti takes feminine plural agreement: hrály with -y", "c2-orthography"],
          ["v muzeu,", "muzeum drops -um: v muzeu", "c2-rare-declension"],
          ["zatímco mně", "mně (dative), not mě: spelling depends on the case", "c2-orthography"],
          ["nikdo nic neřekl.", "double negation", "b1-indefinite"]
        ]
      }
    ]
  }
};
