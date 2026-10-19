/*
 * Common confusions (FAQ). See README.md "FAQ".
 * Each entry: { id, q: [en, id], a: [en, id], ex?: [[czech, [en, id]], ...], topics?: [topic ids] }
 */
window.C3KO_FAQ = [
  {
    id: "cases-vs-conjugation",
    q: ["What changes for cases, and what changes for conjugation?", "Apa yang berubah karena kasus, dan apa yang berubah karena konjugasi?"],
    a: ["Two different systems. Cases (pády) change nouns and everything that goes with a noun: adjectives, pronouns, numerals and demonstratives. Conjugation changes verbs, by person (já, ty, on…), tense and mood. A verb never takes a case ending, and a noun is never conjugated. In one sentence you usually see both: the verb is conjugated for the subject, and the nouns are in cases chosen by the verb or preposition.",
        "Dua sistem yang berbeda. Kasus (pády) mengubah kata benda dan semua yang menyertainya: kata sifat, kata ganti, angka dan kata tunjuk. Konjugasi mengubah kata kerja, menurut persona (já, ty, on…), kala dan modus. Kata kerja tidak pernah memakai akhiran kasus, dan kata benda tidak pernah dikonjugasi. Dalam satu kalimat biasanya ada keduanya: kata kerja dikonjugasi sesuai subjek, dan kata benda memakai kasus yang dipilih oleh kata kerja atau kata depan."],
    ex: [["Pij{u} dobr{ou} káv{u}.", ["piju = verb conjugated for já; dobrou kávu = adjective + noun in the accusative", "piju = kata kerja dikonjugasi untuk já; dobrou kávu = kata sifat + kata benda dalam akusatif"]],
         ["Moje sestr{a} bydl{í} v Praz{e}.", ["sestra = nominative; bydlí = conjugated for ona; v Praze = locative", "sestra = nominatif; bydlí = dikonjugasi untuk ona; v Praze = lokatif"]]],
    topics: ["a1-present", "a2-cases-overview"]
  },
  {
    id: "which-words-change",
    q: ["Which word types change, and which never do?", "Jenis kata apa yang berubah, dan mana yang tidak pernah berubah?"],
    a: ["Change by case: nouns, adjectives, pronouns, numerals, demonstratives (ten, ta, to), possessives (můj, náš). Change by person and tense: verbs. Never change: adverbs (rychle, dobře, česky, včera), prepositions (v, na, do), conjunctions (a, ale, že) and particles (prý, asi). Also never changing: jeho, její, jejich and soft adjectives' gender (jarní is the same for all genders in the nominative).",
        "Berubah karena kasus: kata benda, kata sifat, kata ganti, angka, kata tunjuk (ten, ta, to), kepemilikan (můj, náš). Berubah karena persona dan kala: kata kerja. Tidak pernah berubah: kata keterangan (rychle, dobře, česky, včera), kata depan (v, na, do), kata sambung (a, ale, že) dan partikel (prý, asi). Juga tidak berubah: jeho, její, jejich, dan gender kata sifat lunak (jarní sama untuk semua gender dalam nominatif)."],
    ex: [["Mluví rychle. / Mluvila rychle.", ["rychle (adverb) stays the same", "rychle (kata keterangan) tetap sama"]],
         ["rychlý vlak → rychlým vlakem", ["rychlý (adjective) changes with the noun", "rychlý (kata sifat) berubah mengikuti kata benda"]]],
    topics: ["a1-adjectives", "a2-comparison"]
  },
  {
    id: "adjectives-in-cases",
    q: ["How do adjectives change with the cases?", "Bagaimana kata sifat berubah menurut kasus?"],
    a: ["An adjective copies the gender, number and case of its noun, but with its own set of endings. Learn the hard type (nový) and the soft type (jarní) once; every adjective follows one of them. The noun and the adjective endings often look different, so don't try to copy the noun's ending.",
        "Kata sifat meniru gender, jumlah dan kasus kata bendanya, tetapi dengan akhirannya sendiri. Pelajari sekali tipe keras (nový) dan tipe lunak (jarní); semua kata sifat mengikuti salah satunya. Akhiran kata benda dan kata sifat sering berbeda, jadi jangan meniru akhiran kata bendanya."],
    ex: [["nov{ý} stůl · nov{ého} stolu · nov{ému} stolu · nov{ým} stolem", ["masculine: nom., gen., dat., inst.", "maskulin: nom., gen., dat., inst."]],
         ["nov{á} káva · nov{é} kávy · nov{ou} kávu · nov{ou} kávou", ["feminine: nom., gen., acc., inst.", "feminin: nom., gen., akus., inst."]],
         ["jarn{í} den · jarn{ího} dne · jarn{ím} dnem", ["soft type keeps the í", "tipe lunak tetap memakai í"]]],
    topics: ["a1-adjectives", "a1-accusative"]
  },
  {
    id: "dative-vs-accusative",
    q: ["3. pád (dative) vs 4. pád (accusative): which one?", "3. pád (datif) vs 4. pád (akusatif): yang mana?"],
    a: ["Ask the case questions. Accusative (koho? co?) is the thing or person directly affected: what you see, buy, have, love. Dative (komu? čemu?) is the person who receives, hears or benefits: to whom you give, say, write, help. With dát (give), both appear: the gift in the accusative, the receiver in the dative. Some verbs take only the dative even though English uses a direct object: pomáhat (help), rozumět (understand), věřit (believe), volat (call), radit (advise).",
        "Ajukan pertanyaan kasusnya. Akusatif (koho? co?) adalah benda atau orang yang langsung dikenai: yang kamu lihat, beli, punya, cintai. Datif (komu? čemu?) adalah orang yang menerima, mendengar atau mendapat manfaat: kepada siapa kamu memberi, berkata, menulis, membantu. Dengan dát (memberi), keduanya muncul: hadiah dalam akusatif, penerima dalam datif. Beberapa kata kerja hanya memakai datif: pomáhat (membantu), rozumět (mengerti), věřit (percaya), volat (menelepon), radit (menasihati)."],
    ex: [["Dám {mamince} {dárek}.", ["mamince = dative (to whom), dárek = accusative (what)", "mamince = datif (kepada siapa), dárek = akusatif (apa)"]],
         ["Vidím {bratra}. / Pomáhám {bratrovi}.", ["vidět + accusative, pomáhat + dative", "vidět + akusatif, pomáhat + datif"]],
         ["Rozumím {ti}. (not: rozumím tě)", ["rozumět always takes the dative", "rozumět selalu memakai datif"]]],
    topics: ["a2-dative", "a1-accusative"]
  },
  {
    id: "nom-vs-acc",
    q: ["Why does 'Líbí se mi Praha' use Praha, not Prahu?", "Mengapa 'Líbí se mi Praha' memakai Praha, bukan Prahu?"],
    a: ["Because in Czech the liked thing is the subject: literally 'Prague appeals to me'. Subjects are in the nominative. The person who likes is in the dative (mi, ti, mu…). The same happens with chutnat (taste good) and with chybět (be missing). Compare mít rád, where you are the subject and the liked thing is an object in the accusative.",
        "Karena dalam bahasa Ceko hal yang disukai adalah subjek: harfiah 'Praha menarik bagi saya'. Subjek memakai nominatif. Orang yang menyukai memakai datif (mi, ti, mu…). Hal yang sama terjadi pada chutnat (terasa enak) dan chybět (kurang, dirindukan). Bandingkan dengan mít rád, di mana kamu subjeknya dan hal yang disukai adalah objek dalam akusatif."],
    ex: [["Líbí se mi {Praha}. / Mám rád {Prahu}.", ["nominative subject vs accusative object", "subjek nominatif vs objek akusatif"]],
         ["Chybí mi {rodina}.", ["I miss my family: rodina is the subject", "Saya rindu keluarga: rodina adalah subjek"]]],
    topics: ["a1-liking", "a1-nominative"]
  },
  {
    id: "kde-kam",
    q: ["kde or kam? v + locative or do + genitive?", "kde atau kam? v + lokatif atau do + genitif?"],
    a: ["kde = where something is (no movement): answered with v/na + locative. kam = where to (movement towards): answered with do + genitive, or na + accusative. odkud = where from: z + genitive. The verb tells you: být, bydlet, pracovat → kde; jít, jet, letět, dát (put) → kam.",
        "kde = di mana sesuatu berada (tanpa gerak): dijawab dengan v/na + lokatif. kam = ke mana (gerak menuju): dijawab dengan do + genitif, atau na + akusatif. odkud = dari mana: z + genitif. Kata kerjanya memberi petunjuk: být, bydlet, pracovat → kde; jít, jet, letět, dát (menaruh) → kam."],
    ex: [["Kde jsi? — V {Praze}. / Na {poště}.", ["location: locative", "tempat: lokatif"]],
         ["Kam jdeš? — Do {Prahy}. / Na {poštu}.", ["direction: do + genitive, na + accusative", "arah: do + genitif, na + akusatif"]],
         ["Odkud jsi? — Z {Brna}.", ["origin: z + genitive", "asal: z + genitif"]]],
    topics: ["a1-questions", "a2-locative", "a2-genitive"]
  },
  {
    id: "v-or-na",
    q: ["v or na for places?", "v atau na untuk tempat?"],
    a: ["v (ve) is for enclosed spaces, buildings, cities and countries: v obchodě, v Praze, v Česku. na is for events, open surfaces, institutions and a fixed list of places that you simply learn: na poště, na nádraží, na úřadě, na koncertě, na Moravě, na Slovensku, na univerzitě. The pair stays the same for direction: v → do + genitive, na → na + accusative.",
        "v (ve) untuk ruang tertutup, bangunan, kota dan negara: v obchodě, v Praze, v Česku. na untuk acara, permukaan terbuka, lembaga, dan daftar tempat tetap yang harus dihafal: na poště, na nádraží, na úřadě, na koncertě, na Moravě, na Slovensku, na univerzitě. Pasangannya tetap sama untuk arah: v → do + genitif, na → na + akusatif."],
    ex: [["v kanceláři → do kanceláře", ["in the office → to the office", "di kantor → ke kantor"]],
         ["na nádraží → na nádraží", ["at the station → to the station", "di stasiun → ke stasiun"]]],
    topics: ["a2-locative"]
  },
  {
    id: "jit-jet",
    q: ["jít, jet, chodit, jezdit: which one?", "jít, jet, chodit, jezdit: yang mana?"],
    a: ["Two questions decide it. On foot or by vehicle? Walking = jít/chodit; any vehicle (car, tram, bus, train, bike) = jet/jezdit. One trip now in one direction, or a habit / round trip? One direction now = jít/jet; regularly or back-and-forth = chodit/jezdit. Going to work by tram is jet even if you also walk a little.",
        "Dua pertanyaan menentukannya. Jalan kaki atau berkendaraan? Jalan kaki = jít/chodit; kendaraan apa pun (mobil, trem, bus, kereta, sepeda) = jet/jezdit. Satu perjalanan sekarang ke satu arah, atau kebiasaan / pulang-pergi? Satu arah sekarang = jít/jet; rutin atau bolak-balik = chodit/jezdit. Pergi kerja naik trem memakai jet walaupun kamu juga berjalan sedikit."],
    ex: [["Teď {jdu} domů. / Každý den {chodím} pěšky.", ["now vs habit, on foot", "sekarang vs kebiasaan, jalan kaki"]],
         ["Zítra {jedu} do Brna. / Často {jezdím} do Brna.", ["now/future vs habit, by vehicle", "sekarang/nanti vs kebiasaan, berkendaraan"]]],
    topics: ["a2-motion"]
  },
  {
    id: "aspect-which",
    q: ["Perfective or imperfective: how do I choose?", "Perfektif atau imperfektif: bagaimana memilihnya?"],
    a: ["Ask: is the action finished with a result, once? Use perfective (udělat, napsat, koupit). Is it a process, a habit, repeated, or are you describing it without caring about the end? Use imperfective (dělat, psát, kupovat). Perfectives have no real present: 'udělám' already means 'I will do (finish)'. That's why 'budu udělat' is wrong.",
        "Tanyakan: apakah tindakannya selesai dengan hasil, sekali saja? Pakai perfektif (udělat, napsat, koupit). Apakah itu proses, kebiasaan, berulang, atau kamu menceritakannya tanpa peduli selesainya? Pakai imperfektif (dělat, psát, kupovat). Perfektif tidak punya kala kini yang sebenarnya: 'udělám' sudah berarti 'saya akan menyelesaikan'. Karena itu 'budu udělat' salah."],
    ex: [["Včera jsem {psal} dopis. / Včera jsem {napsal} dopis.", ["was writing (process) vs wrote it (finished)", "sedang menulis (proses) vs sudah menulis (selesai)"]],
         ["Zítra {budu psát}. / Zítra to {napíšu}.", ["future of each aspect", "masa depan tiap aspek"]]],
    topics: ["a2-aspect-intro", "b1-aspect-use"]
  },
  {
    id: "se-si",
    q: ["se or si?", "se atau si?"],
    a: ["se is 'myself/yourself' as a direct object (accusative): myju se = I wash myself. si is 'for myself / to myself' (dative): koupím si = I'll buy for myself. Many verbs simply come with one of them and you learn it with the verb: učit se, jmenovat se, bát se, smát se; dát si, myslet si, vzpomenout si, odpočinout si.",
        "se berarti 'diri sendiri' sebagai objek langsung (akusatif): myju se = saya membasuh diri. si berarti 'untuk diri sendiri' (datif): koupím si = saya membeli untuk diri sendiri. Banyak kata kerja selalu datang dengan salah satunya dan dihafal bersama: učit se, jmenovat se, bát se, smát se; dát si, myslet si, vzpomenout si, odpočinout si."],
    ex: [["Myju {se}. / Myju {si} ruce.", ["I wash myself / I wash my hands (for myself)", "Saya mandi / Saya mencuci tangan (sendiri)"]],
         ["Učím {se} česky. / Dám {si} kávu.", ["fixed with the verb", "sudah melekat pada kata kerjanya"]]],
    topics: ["a1-reflexive", "b1-reflexive-uses"]
  },
  {
    id: "me-mne",
    q: ["mě or mně?", "mě atau mně?"],
    a: ["Both are 'me' but in different cases, and they sound the same. mě (or formal mne) = genitive and accusative: vidí mě, bez mě. mně = dative and locative: dej mně, o mně. Trick: replace já with ty. If the form would be tebe/tě → write mě. If it would be tobě → write mně.",
        "Keduanya berarti 'saya' tetapi dalam kasus berbeda, dan bunyinya sama. mě (atau mne yang formal) = genitif dan akusatif: vidí mě, bez mě. mně = datif dan lokatif: dej mně, o mně. Triknya: ganti já dengan ty. Jika bentuknya menjadi tebe/tě → tulis mě. Jika menjadi tobě → tulis mně."],
    ex: [["Vidíš {mě}? (vidíš tě)", ["accusative", "akusatif"]],
         ["Mluvili o {mně}. (o tobě)", ["locative", "lokatif"]]],
    topics: ["a2-pronoun-cases", "c2-orthography"]
  },
  {
    id: "li-ly",
    q: ["Past plural: -li or -ly?", "Lampau jamak: -li atau -ly?"],
    a: ["It depends on the subject's gender. Any masculine animate in the subject (even one man in a group) → -li. Feminine, or masculine inanimate only → -ly. Neuter plural → -la. Děti behaves like feminine: děti si hrály.",
        "Tergantung gender subjek. Ada maskulin bernyawa dalam subjek (bahkan satu laki-laki dalam kelompok) → -li. Feminin, atau hanya maskulin tak bernyawa → -ly. Netral jamak → -la. Děti diperlakukan seperti feminin: děti si hrály."],
    ex: [["Kluci přiš{li}. / Holky přiš{ly}.", ["boys came / girls came", "anak laki-laki datang / anak perempuan datang"]],
         ["Vlaky jel{y}. / Auta jel{a}.", ["masc. inanimate / neuter", "mask. tak bernyawa / netral"]]],
    topics: ["a2-past", "c1-agreement"]
  },
  {
    id: "jeho-svuj",
    q: ["jeho or svůj?", "jeho atau svůj?"],
    a: ["svůj means 'the subject's own'. If the owner is the subject of the same clause, use svůj (in any person). Use jeho/její/můj only when the owner is someone else. 'Petr miluje jeho ženu' means Petr loves another man's wife.",
        "svůj berarti 'milik subjek sendiri'. Jika pemiliknya adalah subjek anak kalimat yang sama, pakai svůj (untuk persona apa pun). Pakai jeho/její/můj hanya jika pemiliknya orang lain. 'Petr miluje jeho ženu' berarti Petr mencintai istri laki-laki lain."],
    ex: [["Zavolal {své} mámě.", ["his own mother", "ibunya sendiri"]],
         ["Vezmi si {svůj} deštník.", ["your own umbrella (ty is the subject)", "payungmu sendiri (subjeknya ty)"]]],
    topics: ["b1-svuj", "a1-possessives"]
  },
  {
    id: "numbers-cases",
    q: ["Why 'dvě piva' but 'pět piv'?", "Mengapa 'dvě piva' tetapi 'pět piv'?"],
    a: ["After 1 the noun is singular, after 2–4 it is nominative plural, and from 5 up it is genitive plural, with the verb in neuter singular. This is the most common mistake when ordering and counting. It also applies to words like hodně, málo, kolik, několik.",
        "Setelah 1 kata bendanya tunggal, setelah 2–4 nominatif jamak, dan mulai 5 ke atas genitif jamak, dengan kata kerja netral tunggal. Ini kesalahan paling umum saat memesan dan menghitung. Berlaku juga untuk kata seperti hodně, málo, kolik, několik."],
    ex: [["jedno {pivo} · dvě {piva} · pět {piv}", ["1 / 2–4 / 5+", "1 / 2–4 / 5+"]],
         ["Přišly dvě ženy. / Přišlo pět žen.", ["verb agrees differently too", "kata kerjanya juga berbeda"]]],
    topics: ["a1-numbers-time", "a2-genitive"]
  },
  {
    id: "past-auxiliary",
    q: ["When do I use jsem in the past tense?", "Kapan memakai jsem dalam kala lampau?"],
    a: ["Only in the 1st and 2nd person: dělal jsem, dělal jsi, dělali jsme, dělali jste. The 3rd person has no auxiliary: on dělal, oni dělali. Because jsem is a clitic, it goes in second position: Včera jsem…, not Jsem včera….",
        "Hanya untuk persona ke-1 dan ke-2: dělal jsem, dělal jsi, dělali jsme, dělali jste. Persona ke-3 tanpa kata bantu: on dělal, oni dělali. Karena jsem adalah klitik, posisinya kedua: Včera jsem…, bukan Jsem včera…."],
    ex: [["Byl {jsem} doma. / Petr byl doma.", ["1st person vs 3rd person", "persona ke-1 vs persona ke-3"]]],
    topics: ["a2-past", "a2-clitics"]
  },
  {
    id: "rad-libit",
    q: ["mít rád, líbit se, chtít: what's the difference?", "mít rád, líbit se, chtít: apa bedanya?"],
    a: ["mít rád = like in general (people, food, things you know well). líbit se = like how something looks or feels, often a first impression. chtít = want something now. For food you have just tasted, use chutnat. For polite wishes, use chtěl bych / dal bych si.",
        "mít rád = suka secara umum (orang, makanan, hal yang sudah dikenal). líbit se = suka pada tampilan atau kesan, sering kesan pertama. chtít = menginginkan sesuatu sekarang. Untuk makanan yang baru dicicipi, pakai chutnat. Untuk permintaan sopan, pakai chtěl bych / dal bych si."],
    ex: [["Mám rád svou práci.", ["I like my job (in general)", "Saya suka pekerjaan saya (secara umum)"]],
         ["Ten byt se mi líbí.", ["I like that flat (how it looks)", "Saya suka apartemen itu (kesannya)"]],
         ["Chtěl bych kávu.", ["I'd like a coffee (now)", "Saya mau kopi (sekarang)"]]],
    topics: ["a1-liking", "b1-conditional"]
  },
  {
    id: "jestli-kdyby",
    q: ["jestli, když or kdyby?", "jestli, když atau kdyby?"],
    a: ["jestli / pokud = if (real, possible). když = when, or if for something that will surely happen. kdyby = if (unreal, imagined), always with the conditional in the other half. jestli also means 'whether' in indirect questions.",
        "jestli / pokud = jika (nyata, mungkin). když = ketika, atau jika untuk hal yang pasti terjadi. kdyby = seandainya (tidak nyata, dibayangkan), selalu dengan kondisional di bagian lainnya. jestli juga berarti 'apakah' dalam pertanyaan tidak langsung."],
    ex: [["{Jestli} bude pršet, zůstanu doma.", ["real possibility", "kemungkinan nyata"]],
         ["{Kdybych} měl čas, šel bych.", ["imagined", "pengandaian"]],
         ["Nevím, {jestli} přijde.", ["whether", "apakah"]]],
    topics: ["b1-conditions", "b2-indirect-questions"]
  },
  {
    id: "y-i",
    q: ["When do I write y and when i?", "Kapan menulis y dan kapan i?"],
    a: ["They sound the same. After hard consonants (h, ch, k, r, d, t, n) write y; after soft ones (ž, š, č, ř, c, j, ď, ť, ň) write i. After b, f, l, m, p, s, v, z both are possible, and Czech children learn the 'vyjmenovaná slova' (listed words) that take y. In endings, y/i usually shows grammar: masculine animate plural -i (studenti), other plurals -y (ženy, stoly).",
        "Bunyinya sama. Setelah konsonan keras (h, ch, k, r, d, t, n) tulis y; setelah konsonan lunak (ž, š, č, ř, c, j, ď, ť, ň) tulis i. Setelah b, f, l, m, p, s, v, z keduanya mungkin, dan anak-anak Ceko menghafal 'vyjmenovaná slova' (kata-kata yang memakai y). Pada akhiran, y/i biasanya menunjukkan tata bahasa: jamak maskulin bernyawa -i (studenti), jamak lain -y (ženy, stoly)."],
    ex: [["chlapc{i} / stol{y}", ["boys / tables", "anak laki-laki / meja-meja"]],
         ["b{ý}t / b{i}t", ["to be / to beat", "ada / memukul"]]],
    topics: ["c2-orthography", "a1-nominative"]
  },
  {
    id: "vocative-when",
    q: ["Do I really need the vocative?", "Apakah vokatif benar-benar perlu?"],
    a: ["Yes, when you address someone. Using the nominative to call someone sounds wrong or rude, especially with pane/paní in emails and at work. It only appears in direct address; for talking about the person, use the normal cases.",
        "Ya, saat menyapa seseorang. Memakai nominatif untuk memanggil terdengar salah atau kurang sopan, terutama dengan pane/paní di email dan di tempat kerja. Vokatif hanya dipakai saat menyapa langsung; untuk membicarakan orangnya, pakai kasus biasa."],
    ex: [["Dobrý den, {pane} {Nováku}.", ["addressing Mr Novák", "menyapa Pak Novák"]],
         ["Pan Novák tu není.", ["talking about him: nominative", "membicarakannya: nominatif"]]],
    topics: ["a2-vocative"]
  },
  {
    id: "budu-perfective",
    q: ["Why is 'budu koupit' wrong?", "Mengapa 'budu koupit' salah?"],
    a: ["budu + infinitive only works with imperfective verbs. A perfective verb in the present form already means the future: koupím = I will buy. So it's either budu kupovat (I'll be buying, process) or koupím (I'll buy, once).",
        "budu + infinitif hanya untuk kata kerja imperfektif. Kata kerja perfektif dalam bentuk kini sudah bermakna masa depan: koupím = saya akan membeli. Jadi pilihannya budu kupovat (saya akan sedang membeli, proses) atau koupím (saya akan membeli, sekali)."],
    ex: [["Zítra {koupím} chleba.", ["I'll buy bread tomorrow", "Besok saya akan membeli roti"]],
         ["Zítra {budu kupovat} dárky.", ["I'll be shopping for presents", "Besok saya akan berbelanja hadiah"]]],
    topics: ["a2-future", "a2-aspect-intro"]
  }
];
