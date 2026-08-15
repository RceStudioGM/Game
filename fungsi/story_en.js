/* ============================================================
   story_en.js — Data Alur Cerita Visual Novel (English Version)
   ============================================================ */

const storyData = {
    prolog_1: {
        bgm: 'daily_common',
        speaker: "Narrator",
        text: "{player} is late again. Running down the school corridor bathed in morning light while biting a piece of bread, he collides with a stack of papers someone was carrying.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Continue...", nextScene: "prolog_2" }]
    },
    prolog_2: {
        bgm: 'comedy',
        speaker: "Alexandra",
        text: "Can you not watch where you're going?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [
            { text: "Apologize repeatedly until she gets annoyed", nextScene: "common_hari1_3a" },
            { text: "Apologize briefly and hurry away", nextScene: "common_hari1_3b" }
        ]
    },
    common_hari1_3a: {
        bgm: 'daily_common',
        speaker: "Alexandra",
        text: "...Just once is enough, I heard you. (Narrator: She's slightly amused, though she doesn't show it.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Head to the art room...", nextScene: "common_hari1_4" }]
    },
    common_hari1_3b: {
        bgm: 'daily_common',
        speaker: "Narrator",
        text: "Alexandra just gave a brief nod, leaving no impression whatsoever.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Head to the art room...", nextScene: "common_hari1_4" }]
    },
    common_hari1_4: {
        bgm: 'comedy',
        speaker: "Kirana",
        text: "Hey! You, the one running earlier! Help me hold this, my hands are covered in paint!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Help Kirana drag the canvas", nextScene: "common_hari2" }]
    },

    // ================= HARI 2 =================
    common_hari2: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Wanjayy, I heard someone got asked to help both the OSIS and the art kid. You wanna build a harem or what, {player}?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Complain back to Bima about being confused on what to choose", nextScene: "common_hari2_curhat" },
            { text: "Stay silent, don't respond to Bima", nextScene: "common_hari2_diam" }
        ]
    },
    common_hari2_curhat: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Hah, you're confused? Then just don't think about it! (Narrator: Bima's nonsense advice only makes you more confused.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Head to the Teacher's Room...", nextScene: "common_hari2_pakhendra" }]
    },
    common_hari2_diam: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Eh, you're really quiet? Geez, so dramatic. (Narrator: Bima acts fake sulky for a moment, then quickly gets over it.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Head to the Teacher's Room...", nextScene: "common_hari2_pakhendra" }]
    },
    common_hari2_pakhendra: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "{player}, your Math scores are dropping. The festival is coming up. I can't stop you, but don't let it take priority over your studies.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'tegas'), charRight: "",
        choices: [{ text: "I'm not sure which one to pick, Sir.", nextScene: "common_hari2_akhir" }]
    },
    common_hari2_akhir: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "Think about it carefully. I'm strict not because I like getting angry, but because I want you all to succeed.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Proceed to Day 3...", nextScene: "common_hari3" }]
    },

    // ================= HARI 3 (EXPLORATION) =================
    common_hari3: {
        bgm: 'daily_common',
        speaker: "Narrator",
        text: "A day before you decide, you have some free time this afternoon. Which world do you want to peek into first?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "Pass by the OSIS Secretariat", nextScene: "common_hari3_osis" },
            { text: "Pass by the Art Room", nextScene: "common_hari3_seni" },
            { text: "Just go home, don't want to think about it yet", nextScene: "common_hari4" }
        ]
    },
    common_hari3_osis: {
        bgm: 'council_focus',
        speaker: "Narrator",
        text: "You see Alexandra scolding an OSIS member who turned in a report late, with Rangga standing behind her like a guard. Farah silently calms the scolded member down.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Go back", nextScene: "common_hari3" }]
    },
    common_hari3_seni: {
        bgm: 'art_whimsy',
        speaker: "Narrator",
        text: "You see Kirana laughing heartily as she throws paint at the wall. She hurriedly cleans it up before Mrs. Sari sees—but she's caught anyway. Mrs. Sari just sighs in amusement, used to it.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Go back", nextScene: "common_hari3" }]
    },

    // ================= HARI 4 & 5 =================
    common_hari4: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Eh, looks like Dewi has a crush on you. The transfer student from the Social Studies track, right? You're still too busy thinking about your big decision tomorrow.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Proceed to Day 5...", nextScene: "bab1_pilihan" }]
    },
    bab1_pilihan: {
        bgm: 'daily_common',
        speaker: "Narrator",
        text: "Today is the day of decision. Which path will you take?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [] // Akan diisi oleh engine
    },
      // ================= RUTE ALEXANDRA (A) =================
    rute_a2a: {
        bgm: 'council_focus',
        speaker: "Farah",
        text: "You must be the one Alexandra meant, right? Don't worry, she's like that with everyone at first.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [{ text: "Continue", nextScene: "rute_a2b" }]
    },
    rute_a2b: {
        bgm: 'council_focus',
        speaker: "Alexandra",
        text: "I heard that, Farah. Read this proposal. Mark anything that doesn't make sense from a regular student's perspective. Don't just agree because you're too nervous to say no.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Ask Farah why your name was chosen", nextScene: "rute_a2c" }]
    },
    rute_a2c: {
        bgm: 'council_focus',
        speaker: "Farah",
        text: "Alexandra chose you herself, you know. She said she wanted someone 'honest, not just someone trying to look good'. Not sure why she saw that in you.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [
            { text: "Work seriously and quietly", nextScene: "rute_a3_tenang" },
            { text: "Try to lighten the mood with a joke", nextScene: "rute_a3_cair" }
        ]
    },
    rute_a3_tenang: {
        bgm: 'council_focus',
        speaker: "Narrator",
        text: "You work silently, marking proposals with sharp, insightful notes. Alexandra reads them quietly, her eyebrow slightly raised—impressed, even though she doesn't show it.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_a3_momen" }]
    },
    rute_a3_cair: {
        bgm: 'council_focus',
        speaker: "Alexandra",
        text: "I'm here to make sure everything gets done right. (Narrator: You manage to surprise her. She's not used to being talked back to without a hint of fear.)",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'terkejut'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_a3_momen" }]
    },
    rute_a3_momen: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "One afternoon, you find Alexandra asleep at her desk, exhausted from working alone. Quietly, you cover her with your jacket.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [{ text: "Wait for her to wake up...", nextScene: "rute_a3_bangun" }]
    },
    rute_a3_bangun: {
        bgm: 'tender',
        speaker: "Alexandra",
        text: "Why are you still here? ...You don't need to wait for me to wake up like this.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'gugup'), charRight: "",
        choices: [
            { text: "Invite her to the Park to rest", nextScene: "rute_a4_taman" },
            { text: "Follow her habit of spending time alone at the Library", nextScene: "rute_a4_perpus" }
        ]
    },
    rute_a4_taman: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "Under the shady trees of the school park, Alexandra sits stiffly at the edge of the bench. 'I'm not used to this. It feels like if I stay still too long, I'll miss something.' You reassure her, 'Nothing's going to fall apart just because you rest for five minutes.'",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Proceed to the Trust Test", nextScene: "rute_a3_ujian" }]
    },
    rute_a4_perpus: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "You follow Alexandra to the library. She sits alone in the corner, accompanied by a bitter cup of black coffee. 'The only place that doesn't demand anything from me.' For the first time, she lets someone sit in her loneliest world without chasing them away.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Proceed to the Trust Test", nextScene: "rute_a3_ujian" }]
    },
    rute_a3_ujian: {
        bgm: 'tension',
        speaker: "Alexandra",
        text: "Hold this. It's the evaluation list for all OSIS divisions. Do not let this leak to anyone. If this gets out, there will be chaos across the whole school.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [
            { text: "Refuse to tell Bima anything", nextScene: "rute_a5_rangga" },
            { text: "Leak a little bit of info to Bima", nextScene: "bad_end_a_x" }
        ]
    },
    bad_end_a_x: {
        bgm: 'ending_bad',
        speaker: "Alexandra",
        text: "I gave you the biggest trust I've ever given to someone outside the OSIS, and you threw it away. Don't come near the secretariat again. (BAD END: Broken Trust)",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'marah'), charRight: "",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_a5_rangga: {
        bgm: 'tension',
        speaker: "Rangga",
        text: "Alexandra has been let down too many times by people who say they 'care' and then leave when she actually needs them. If you're not serious, back off now, before she gets her hopes up.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('rangga', 'curiga'), charRight: "",
        choices: [
            { text: "Convince Rangga that your intentions are sincere", nextScene: "rute_a5_percaya" },
            { text: "Hesitate and start keeping your distance", nextScene: "rute_a5_ragu" }
        ]
    },
    rute_a5_percaya: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "You keep your promise. You help Alexandra selflessly, even staying up late to prepare decorations the night before the festival. When she's on the verge of collapsing, you force her to rest.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [{ text: "Proceed to the Night Before the Festival...", nextScene: "rute_a6_malam" }]
    },
    rute_a5_ragu: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "You keep your distance, making excuses to avoid the OSIS secretariat. Alexandra notices, but she's too proud to ask directly. The festival ends without anything ever being said.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'kecewa'), charRight: "",
        choices: [{ text: "Proceed to Ending", nextScene: "rute_a6_ending_sahabat" }]
    },
    rute_a6_malam: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "In the middle of the late-night prep, the lights suddenly go out—a short circuit from too many devices plugged in! Panic spreads.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: "", charRight: "",
        choices: [
            { text: "Stay calm, find the fuse box, and organize the team", nextScene: "rute_a6_ending_bonus" },
            { text: "Panic and make the chaos worse", nextScene: "rute_a6_ending_normal" }
        ]
    },
    rute_a6_ending_bonus: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "The crisis is resolved in 10 minutes. Alexandra is secretly in awe seeing you stay calm in a crisis. She trusts you even more.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('alexandra', 'bahagia'), charRight: "",
        choices: [{ text: "Proceed to Ending", nextScene: "rute_a6_ending1" }]
    },
    rute_a6_ending_normal: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "Farah ends up taking charge and calming everyone down. Alexandra is briefly disappointed, but it's not fatal.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Proceed to Ending", nextScene: "rute_a6_ending2" }]
    },
    rute_a6_ending1: {
        bgm: 'ending_good',
        speaker: "Alexandra",
        text: "I'm... not used to being close to people. But for some reason, you don't make me have to be the 'OSIS President' all the time. Just being Alexandra is enough. (Good End)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_alexandra",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_a6_ending2: {
        bgm: 'ending_bittersweet',
        speaker: "Alexandra",
        text: "I don't have time for this. The festival is more important. ...Sorry. I'm just scared that if I'm honest, I'll look weak. (Bittersweet End)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'sedih'), charRight: "",
        unlockQuote: "quote_bad",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_a6_ending_sahabat: {
        bgm: 'ending_bittersweet',
        speaker: "Alexandra",
        text: "You're still a coward, huh. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
      // ================= RUTE KIRANA (B) =================
    rute_b2b: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "{player}! What color do you think we should paint the sky for this mural?",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Just follow Kirana's spontaneous directions", nextScene: "rute_b3_mengalir" },
            { text: "Suggest your own idea for the mural", nextScene: "rute_b3_berani" }
        ]
    },
    rute_b3_mengalir: {
        bgm: 'art_whimsy',
        speaker: "Narrator",
        text: "You just go along with whatever Kirana suggests. She grows more comfortable, considering you her most relaxing escape from the pressure of being the 'art genius'.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Continue...", nextScene: "rute_b3_sanggar" }]
    },
    rute_b3_berani: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "That's a great idea! You've got a good instinct even without formal art training!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'terkejut'),
        choices: [{ text: "Continue...", nextScene: "rute_b3_sanggar" }]
    },
    rute_b3_sanggar: {
        bgm: 'art_whimsy',
        speaker: "Narrator",
        text: "One day after school, Kirana takes you to the outside studio. There, Bang Yusuf, a senior who's the head of the studio, is teaching a new student. Their natural closeness makes you feel awkward for no clear reason.",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Ask Kirana directly about Bang Yusuf", nextScene: "rute_b4_terbuka" },
            { text: "Bury your curiosity and act normal", nextScene: "rute_b4_terpendam" }
        ]
    },
    rute_b4_terbuka: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "He's like an older brother to me. He used to scold me the most when I slacked off practicing. Why? Are you jealous?",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Continue...", nextScene: "rute_b4_taman" }]
    },
    rute_b4_terpendam: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "You choose to stay silent. Your unease causes you to lose focus, and you accidentally mix the wrong paint colors, ruining part of the mural. Kirana notices something is off but doesn't pry.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'kesal'),
        choices: [{ text: "Continue...", nextScene: "rute_b4_taman" }]
    },
    rute_b4_taman: {
        bgm: 'melancholy',
        speaker: "Kirana",
        text: "...Sometimes I'm scared that everyone just likes 'Kirana the great artist', not the real me. Bang Yusuf, the studio friends, even you... if one day I can't draw well anymore, will anyone still care?",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: "", charRight: img('kirana', 'cemas'),
        choices: [{ text: "Proceed to the Patience Test", nextScene: "rute_b4_kesabaran" }]
    },
    rute_b4_kesabaran: {
        bgm: 'tension',
        speaker: "Kirana",
        text: "I want your opinion on these two sketches. Which one should I pick?",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Give honest feedback, even if it means criticizing one of them", nextScene: "rute_b5_dewi" },
            { text: "Praise both so she won't feel sad", nextScene: "bad_end_b_x" }
        ]
    },
    bad_end_b_x: {
        bgm: 'ending_bad',
        speaker: "Kirana",
        text: "If you're not honest about this, how can I trust you to be honest about other things? (BAD END: Delayed Honesty)",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'sedih'),
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_b5_dewi: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "Dewi asks you out for a walk after school. Right at that moment, Kirana passes by and sees you two. She quickly hurries away without saying a word.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: img('kirana', 'sedih'),
        choices: [
            { text: "Chase after Kirana and explain the situation honestly", nextScene: "rute_b6_klarifikasi" },
            { text: "Let the misunderstanding drag on", nextScene: "rute_b6_diam" }
        ]
    },
    rute_b6_klarifikasi: {
        bgm: 'tender',
        speaker: "Kirana",
        text: "It was Dewi who asked me out, I didn't— You don't need to explain to me. It's none of my business who you get close to. But I like you, not because you're good at painting. I like your carefree laughter, your enthusiasm even when you're tired, the way you brighten people around you.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'melankolis'),
        choices: [{ text: "Proceed to the Sudden Rain", nextScene: "rute_b6_hujan" }]
    },
    rute_b6_diam: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "Because of your hesitation, Kirana slowly drifts away. She starts spending more time at the outside studio with Bang Yusuf and her friends, and you realize your mistake too late.",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'netral'),
        choices: [{ text: "Proceed to Ending", nextScene: "rute_b7_ending_sahabat" }]
    },
    rute_b6_hujan: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "Heavy rain suddenly pours down while you're still at the park, far from any shelter. You both get soaked before you can take cover under a big tree. Kirana, instead of getting upset, bursts out laughing, looking up at the rain.",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: "", charRight: img('kirana', 'tertawa'),
        choices: [
            { text: "Laugh along and enjoy the moment", nextScene: "rute_b7_ending1" },
            { text: "Panic, rush to find shelter, worry about her catching a cold", nextScene: "rute_b7_ending1" }
        ]
    },
    rute_b7_ending1: {
        bgm: 'ending_good',
        speaker: "Kirana",
        text: "This is the most meaningful work I've ever made. Not because of the result, but because of who made it with me. (Good End)",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: img('kirana', 'terharu'),
        unlockQuote: "quote_kirana",
        choices: [
            { text: "Invite Kirana to the Night Market", nextScene: "rute_b7_ending2" },
            { text: "End the story here", nextScene: "menu" }
        ]
    },
    rute_b7_ending2: {
        bgm: 'festival',
        speaker: "Kirana",
        text: "Turns out it's fun to just be an ordinary person. Thanks for showing me this. (Epilog)",
        bg: assets.BACKGROUNDS.luarSekolah.pasarMalam, charLeft: "", charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_kirana",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_b7_ending_sahabat: {
        bgm: 'ending_bittersweet',
        speaker: "Kirana",
        text: "We're still friends, right? Always. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: img('kirana', 'tersenyum'),
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
      // ================= RUTE DILEMA (C) =================
    rute_c2c: {
        bgm: 'tension',
        speaker: "Bima",
        text: "You're not the main character of a drama, Di. Sooner or later, they'll realize.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Stubbornly keep doing both", nextScene: "rute_c3_bertahan" },
            { text: "Start being honest that this is unsustainable", nextScene: "rute_c3_ragu" }
        ]
    },
    rute_c3_bertahan: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "Your grades plummet drastically. You're called to Mr. Hendra's office.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_ragu: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "Your grades plummet drastically. You're called to Mr. Hendra's office.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_panggil_hendra: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "Honesty isn't just about being honest to others, but being honest to yourself. Try to find a quiet place to think clearly.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Proceed to the Breaking Point...", nextScene: "rute_c3_titik_jenuh" }]
    },
    rute_c3_titik_jenuh: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "That night, Alexandra and Kirana send messages at the exact same time, asking for help at different locations at the same time tomorrow.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: "", charRight: "",
        choices: [
            { text: "Try to explain the situation to one of them, ask for understanding", nextScene: "rute_c4_memilih" },
            { text: "Panic, don't reply to anyone's messages until morning", nextScene: "rute_c4_memilih" },
            { text: "Be honest with Mr. Hendra and ask for advice", nextScene: "rute_c3_saran_hendra" }
        ]
    },
    rute_c3_saran_hendra: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "You've tried everything. If you have to choose, pick the one that makes you feel the most at peace. Not because you're afraid of disappointing people.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Proceed to the turning point...", nextScene: "rute_c4_jujur" }]
    },
    rute_c4_memilih: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "You have to choose one focus. Who will you pick?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "Focus on Alexandra", nextScene: "rute_a5_rangga" },
            { text: "Focus on Kirana", nextScene: "rute_b5_dewi" }
        ]
    },
    rute_c4_jujur: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "You're honest to both of them. It's hard at first, but they appreciate your honesty.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Proceed to Ending", nextScene: "rute_c5_ending" }]
    },
    rute_c5_ending: {
        bgm: 'ending_good',
        speaker: "Mr. Hendra",
        text: "Your grades went up this week. I still don't have the answer, Sir. That's fine. The important thing is you're not running from the question. (Open Ending)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('pakHendra', 'ramah'), charRight: "",
        unlockQuote: "quote_normal",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
      // ================= RUTE MIRA (M) =================
    rute_m1: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "There's a new transfer student named {mira}. Since you're one of the easiest people to get along with, I'm entrusting you to help her adapt this week.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Head to the library...", nextScene: "rute_m1_find" }]
    },
    rute_m1_find: {
        bgm: 'mystery',
        speaker: "Narrator",
        text: "{player} finds {mira} sitting alone in the corner of the library, reading a thick book, ignoring everyone around her.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('mira', 'netral'), charRight: "",
        choices: [
            { text: "Sit nearby without forcing conversation", nextScene: "rute_m2_sabar" },
            { text: "Try to start a conversation by asking about her book", nextScene: "rute_m2_penasaran" }
        ]
    },
    rute_m2_sabar: {
        bgm: 'mystery',
        speaker: "Narrator",
        text: "{player} sits across from her without forcing conversation. After almost twenty minutes of silence, {mira} finally glances over. '...You really aren't going to leave, are you?'",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('mira', 'netral'), charRight: img('mc', 'netral'),
        choices: [{ text: "Continue...", nextScene: "rute_m2_bima" }]
    },
    rute_m2_penasaran: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "What book is that? It looks really thick. ...None of your business. (Narrator: Mira quickly closes her book.)",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('mira', 'waspada'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m2_bima" }]
    },
    rute_m2_bima: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "WOI. I heard you got assigned to help that supposedly cold new girl? Gossip says she transferred from out of town! Some say she has a mysterious past!",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Ignore Bima's gossip, try to know Mira through observation", nextScene: "rute_m3" },
            { text: "Get curious too, dig around in the school group chat", nextScene: "rute_m2_gosip" }
        ]
    },
    rute_m2_gosip: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "Adi gets curious and asks around. The rumors about Mira get exaggerated. When Mira hears the rumor in class, her face hardens. 'Turns out it's the same everywhere.'",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('mira', 'sedih'), charRight: "",
        choices: [{ text: "Proceed to the Attic", nextScene: "rute_m3" }]
    },
    rute_m3: {
        bgm: 'mystery',
        speaker: "Narrator",
        text: "One afternoon, {player} returns to the library and accidentally sees {mira} disappear behind a small dusty door in the back corner.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: "", charRight: "",
        choices: [{ text: "Follow her to the attic...", nextScene: "rute_m3_loteng" }]
    },
    rute_m3_loteng: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "...How did you find this? (Narrator: Her voice is almost panicked.) This is my place. Please don't tell anyone.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'waspada'), charRight: "",
        choices: [
            { text: "Promise to keep it secret, offer to leave (Respectful)", nextScene: "rute_m4_hormat" },
            { text: "Ask why this place is so important to her", nextScene: "rute_m4_ingin_tahu" }
        ]
    },
    rute_m4_hormat: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "...Wait. You can... sit for a bit. If you stay quiet. (Narrator: Adi sits across from her in a silence that doesn't feel awkward.)",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'netral'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m5_dewi" }]
    },
    rute_m4_ingin_tahu: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "This is the only place that feels like mine. I've moved schools four times in three years. I learned not to get too attached to places or people, because I'll leave them anyway.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'sedih'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m5_dewi" }]
    },
    rute_m5_dewi: {
        bgm: 'tender',
        speaker: "Dewi",
        text: "I'm glad to see {mira} opening up more. At first I thought she was cold, but she's just tired of having to introduce herself all over again.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('dewi', 'ramah'), charRight: "",
        choices: [
            { text: "Feel happy she has another friend, give her space", nextScene: "rute_m6" },
            { text: "Get a bit possessive, worry about losing time alone", nextScene: "rute_m5_cemburu" }
        ]
    },
    rute_m5_cemburu: {
        bgm: 'tension',
        speaker: "Mira",
        text: "Why are you acting weird to Dewi? She's my friend now too. Don't be possessive. I've lost enough people.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'marah'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m6" }]
    },
    rute_m6: {
        bgm: 'mystery',
        speaker: "Narrator",
        text: "One night, while chatting in the attic archive, {mira}'s phone keeps buzzing. She glances at the screen for a second, then quickly puts it back in her pocket.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'netral'), charRight: "",
        choices: [
            { text: "Don't ask further, trust she'll tell you when ready", nextScene: "rute_m7_percaya" },
            { text: "Grow curious and try to ask further", nextScene: "rute_m7_tanya" }
        ]
    },
    rute_m7_percaya: {
        bgm: 'tender',
        speaker: "Mira",
        text: "Alvin is... my closest friend from elementary school until I moved last time. You don't mind at all. Why? ...Because it's not my right to object.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tersenyum'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m8_alvin" }]
    },
    rute_m7_tanya: {
        bgm: 'tender',
        speaker: "Mira",
        text: "You two... are really close, huh? Why? Jealous? (Narrator: Mira chuckles at your reaction). Alvin is my friend from elementary school. He's nice, but... he chose not to finish that sentence.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tertawa'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m8_alvin" }]
    },
    rute_m8_alvin: {
        bgm: 'tension',
        speaker: "Alvin",
        text: "You're close to {mira} lately. I've known her since we were kids. I know how hard it is for her to open up to new people. Take good care of her. Or— if you can't, maybe I will.",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alvin', 'serius'), charRight: "",
        choices: [
            { text: "State your intentions firmly without being provoked (Calm)", nextScene: "rute_m9_tenang" },
            { text: "Get provoked, become defensive and a bit harsh (Defensive)", nextScene: "rute_m9_defensif" }
        ]
    },
    rute_m9_tenang: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "I won't promise I'm perfect. But I won't leave as long as she still wants me here. (Narrator: Alvin pauses for a moment, then nods slowly.)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alvin', 'lega'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m10_bayangan" }]
    },
    rute_m9_defensif: {
        bgm: 'tension',
        speaker: "Mira",
        text: "I can take care of myself. I don't need you two fighting over me like I'm some prize. (Narrator: Mira leaves, disappointed.)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('mira', 'marah'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m10_bayangan" }]
    },
    rute_m10_bayangan: {
        bgm: 'melancholy',
        speaker: "Mira",
        text: "I told myself not to get used to being close to anyone here. But I failed. I got used to being close to you. And now it hurts just as much as I was afraid it would from the start.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'menangis'), charRight: "",
        choices: [
            { text: "Convince her the remaining time is still precious (Brave)", nextScene: "rute_m11_berani" },
            { text: "Pull away because you're both scared (Scared)", nextScene: "rute_m11_takut" },
            { text: "Promise to find a way for her to stay (Extra Effort)", nextScene: "rute_m10_upaya" }
        ]
    },
    rute_m10_upaya: {
        bgm: 'tender',
        speaker: "Mr. Hendra",
        text: "This isn't a small decision, {player}. But I can help convey that option to her parents, if that's truly best for {mira}. Her grandmother in this city could be a solution.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Proceed to the real effort...", nextScene: "rute_m11_berani" }]
    },
    rute_m11_berani: {
        bgm: 'tender',
        speaker: "Mira",
        text: "I don't want to waste the time we have now just because I'm scared of something that hasn't happened yet. Even if you have to leave, I want you to leave with memories that truly matter.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tersenyum'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m12" }]
    },
    rute_m11_takut: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "Adi chooses to keep his distance 'for their own good'. Mira accepts it quietly, but since then, the wall that had crumbled slowly began to rebuild.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'sedih'), charRight: "",
        choices: [{ text: "Proceed to Ending...", nextScene: "rute_m13_ending_sahabat" }]
    },
    rute_m12: {
        bgm: 'melancholy',
        speaker: "Mira",
        text: "The following weeks are lived more intensely. The final decision from my father has finally arrived.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'netral'), charRight: "",
        choices: [{ text: "Towards the end...", nextScene: "rute_m13" }]
    },
    rute_m13: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "The last day arrives. Mira and Adi stand at the Bus Stop.",
        bg: assets.BACKGROUNDS.rahasia.halteBus, charLeft: img('mira', 'bahagia'), charRight: "",
        choices: [
            { text: "If the Extra Effort succeeded (True Good End)", nextScene: "rute_m13_ending1" },
            { text: "If the effort failed, but still keeping the relationship (Bittersweet Good)", nextScene: "rute_m13_ending2" },
            { text: "Let go peacefully without promises (Bittersweet)", nextScene: "rute_m13_ending3" }
        ]
    },
    rute_m13_ending1: {
        bgm: 'ending_good',
        speaker: "Mira",
        text: "This is the first time I chose to stay, not just go wherever I was taken. And I chose here. With you. (True Good End)",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'bahagia'), charRight: "",
        unlockQuote: "quote_mira",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_m13_ending2: {
        bgm: 'ending_bittersweet',
        speaker: "Mira",
        text: "I won't promise this will be easy. But for the first time, I want to try not running from something precious, even if it means working harder to hold onto it. (Bittersweet-Good End)",
        bg: assets.BACKGROUNDS.rahasia.halteBus, charLeft: img('mira', 'tersenyum'), charRight: "",
        unlockQuote: "quote_mira",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_m13_ending3: {
        bgm: 'ending_bittersweet',
        speaker: "Mira",
        text: "Thank you for being a place that never made me feel like I was just 'passing through'. I'll always remember that attic. And you. (Bittersweet End)",
        bg: assets.BACKGROUNDS.rahasia.halteBus, charLeft: img('mira', 'menangis'), charRight: "",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_m13_ending_sahabat: {
        bgm: 'ending_bittersweet',
        speaker: "Narrator",
        text: "They never truly opened up to each other. Mira moved at the end of the semester. Years later, Adi receives a short story collection titled 'The Attic I Left Behind'. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
      // ================= RUTE RAHASIA (R) =================
    rute_r1: {
        bgm: 'council_focus',
        speaker: "Alexandra",
        text: "OSIS and the art room have completely different ways of working. It won't be efficient.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Try to convince her...", nextScene: "rute_r1_kirana" }]
    },
    rute_r1_kirana: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "Wow, that's a great idea! Collaboration always yields unexpected results!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Ask for Mr. Hendra's blessing", nextScene: "rute_r1_hendra" }]
    },
    rute_r1_hendra: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "A different approach. I'm curious to see the results. Give it a try.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Proceed to Chapter 2R...", nextScene: "rute_r2" }]
    },
    rute_r2: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "For the first time, Alexandra and Kirana sit at the same table. The initial discussion is full of friction. You have to be the mediator.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Be an active mediator whenever they argue", nextScene: "rute_r3" },
            { text: "Let them find common ground themselves", nextScene: "rute_r3" }
        ]
    },
    rute_r3: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "As the big day approaches, they have a huge fight in the art room.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: img('alexandra', 'marah'), charRight: img('kirana', 'kesal'),
        choices: [{ text: "Witness it...", nextScene: "rute_r3_rekat" }]
    },
    rute_r3_rekat: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "Then, oddly enough, they laugh together, realizing how ridiculous their argument was.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Proceed to the Festival Night", nextScene: "rute_r4" }]
    },
    rute_r4: {
        bgm: 'festival',
        speaker: "Narrator",
        text: "The Festival Hall that night is full of their collaborative work. In the distance, Rangga and Farah are holding hands.",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: "",
        choices: [
            { text: "Focus on celebrating the success together as a team", nextScene: "rute_r_ending_1" },
            { text: "Take the chance to be honest about your feelings towards one of them", nextScene: "rute_r_ending_2" }
        ]
    },
    rute_r_ending_1: {
        bgm: 'true_ending',
        speaker: "Narrator",
        text: "The school reunion now features one additional face: {mira}. 'So, out of the three of us, who made your heart flutter back then?' Kirana teases. (True Ending: Constellation)",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_epilog",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_r_ending_2: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "You finally realize your feelings lean towards one of them. Towards whom?",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'bahagia'),
        choices: [
            { text: "Choose Alexandra", nextScene: "rute_r_ending_2_a" },
            { text: "Choose Kirana", nextScene: "rute_r_ending_2_b" }
        ]
    },
    rute_r_ending_2_a: {
        bgm: 'true_ending',
        speaker: "Alexandra",
        text: "Thank you for choosing me. (TRUE ENDING: Romantic - Alexandra)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_epilog",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_r_ending_2_b: {
        bgm: 'true_ending',
        speaker: "Kirana",
        text: "I'm so happy you chose me! (TRUE ENDING: Romantic - Kirana)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: "", charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_epilog",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    }

};