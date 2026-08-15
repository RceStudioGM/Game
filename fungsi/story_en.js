/* ============================================================
   story_en.js — English translation of the Visual Novel story
   Structure mirrors story.js exactly (same keys, same bg/char
   paths, same nextScene routing). Only speaker/text/choice text
   are translated.
   ============================================================ */

const storyData_en = {
    prolog_1: {
        bgm: 'daily_common',
        speaker: "Narrator",
        text: "{player} was late again. Running down the sun-drenched school corridor with a piece of bread still in their mouth, they crashed into a stack of papers someone was carrying.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Continue...", nextScene: "prolog_2" }]
    },
    prolog_2: {
        bgm: 'comedy',
        speaker: "Alexandra",
        text: "Can't you watch where you're going?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [
            { text: "Apologize over and over until she gets annoyed", nextScene: "common_hari1_3a" },
            { text: "Apologize quickly, then hurry off", nextScene: "common_hari1_3b" }
        ]
    },
    common_hari1_3a: {
        bgm: 'daily_common',
        speaker: "Alexandra",
        text: "...Once is enough, I heard you. (Narrator: She looks faintly amused, though she doesn't show it.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Head to the art room...", nextScene: "common_hari1_4" }]
    },
    common_hari1_3b: {
        bgm: 'daily_common',
        speaker: "Narrator",
        text: "Alexandra just gives a curt nod, completely unreadable.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Head to the art room...", nextScene: "common_hari1_4" }]
    },
    common_hari1_4: {
        bgm: 'comedy',
        speaker: "Kirana",
        text: "Hey! You, the one who was running earlier! Help me hold this, my hands are covered in paint!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Help Kirana carry the canvas", nextScene: "common_hari2" }]
    },
    common_hari2: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Whoa, word is someone got roped into helping BOTH the Student Council and the art kid. Building yourself a harem, {player}?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Vent to Bima about not knowing what to choose", nextScene: "common_hari2_curhat" },
            { text: "Stay quiet, don't respond to Bima", nextScene: "common_hari2_diam" }
        ]
    },
    common_hari2_curhat: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Huh, stressed out? Well, if you're not sure, just don't think about it! (Narrator: Bima's nonsense advice only confuses you more.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Head to the Teachers' Office...", nextScene: "common_hari2_pakhendra" }]
    },
    common_hari2_diam: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Wait, seriously not answering me? Come on, don't be so sensitive. (Narrator: Bima sulks for a moment, then quickly bounces back to normal.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Head to the Teachers' Office...", nextScene: "common_hari2_pakhendra" }]
    },
    common_hari2_pakhendra: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "{player}, I've noticed your Math grades slipping. The festival is coming up soon. I can't forbid you from joining, but don't make school your second priority.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'tegas'), charRight: "",
        choices: [{ text: "I'm not sure which one to choose yet, sir.", nextScene: "common_hari2_akhir" }]
    },
    common_hari2_akhir: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "Think it over carefully. I'm strict, not because I enjoy being angry, but because I want all of you to succeed.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Continue to Day 3...", nextScene: "common_hari3" }]
    },
    common_hari3: {
        bgm: 'daily_common',
        speaker: "Narrator",
        text: "The day before you have to decide, you find yourself with some free time this afternoon. Which world do you want to peek into first?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "Walk past the Student Council office", nextScene: "common_hari3_osis" },
            { text: "Walk past the Art Room", nextScene: "common_hari3_seni" },
            { text: "Just go straight home, not wanting to overthink it", nextScene: "common_hari4" }
        ]
    },
    common_hari3_osis: {
        bgm: 'council_focus',
        speaker: "Narrator",
        text: "You see Alexandra scolding a council member for a late report, with Rangga standing behind her like a bodyguard. Farah quietly comforts the member who got an earful.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Go back", nextScene: "common_hari3" }]
    },
    common_hari3_seni: {
        bgm: 'art_whimsy',
        speaker: "Narrator",
        text: "You see Kirana laughing freely, flinging paint at the wall. She scrambles to wipe it off before Ms. Sari notices—but gets caught anyway. Ms. Sari just sighs, amused, clearly used to it by now.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Go back", nextScene: "common_hari3" }]
    },
    common_hari4: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Hey, I think Dewi has a crush on you. That transfer student from social studies, right? But you're too busy thinking about tomorrow's big decision to notice.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Continue to Day 5...", nextScene: "bab1_pilihan" }]
    },
    bab1_pilihan: {
        bgm: 'daily_common',
        speaker: "Narrator",
        text: "Today is decision day. Which path will you take?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: []
    },
    rute_a2a: {
        bgm: 'council_focus',
        speaker: "Farah",
        text: "You must be the one Alexandra mentioned? Don't worry, she's like that with everyone at first.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [{ text: "Continue", nextScene: "rute_a2b" }]
    },
    rute_a2b: {
        bgm: 'council_focus',
        speaker: "Alexandra",
        text: "Read this proposal. Mark anything that doesn't make sense. Don't just agree because you feel awkward saying otherwise.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Ask Farah why I was the one chosen", nextScene: "rute_a2c" }]
    },
    rute_a2c: {
        bgm: 'council_focus',
        speaker: "Farah",
        text: "Alexandra picked you herself. She wanted someone honest, not someone trying to impress her.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [
            { text: "Work seriously and quietly", nextScene: "rute_a3_tenang" },
            { text: "Try to lighten the mood with a joke", nextScene: "rute_a3_cair" }
        ]
    },
    rute_a3_tenang: {
        bgm: 'council_focus',
        speaker: "Narrator",
        text: "You work without much talking, marking the proposal with sharp, pointed notes. Alexandra is impressed, though she doesn't show it.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_a3_momen" }]
    },
    rute_a3_cair: {
        bgm: 'council_focus',
        speaker: "Alexandra",
        text: "I'm here to make sure everything gets done properly. (Narrator: You manage to catch her slightly off guard—she isn't used to being answered back without fear.)",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'terkejut'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_a3_momen" }]
    },
    rute_a3_momen: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "One evening, you find Alexandra asleep at her desk. You drape your jacket over her shoulders.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [{ text: "Wait for her to wake up...", nextScene: "rute_a3_bangun" }]
    },
    rute_a3_bangun: {
        bgm: 'tender',
        speaker: "Alexandra",
        text: "Why are you still here? ...You didn't have to wait for me to wake up like this.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'gugup'), charRight: "",
        choices: [
            { text: "Invite her to the Garden to rest", nextScene: "rute_a4_taman" },
            { text: "Follow her habit of retreating to the Library", nextScene: "rute_a4_perpus" }
        ]
    },
    rute_a4_taman: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "In the garden, Alexandra admits she's afraid of falling behind the moment she stops moving. You reassure her.",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Continue to the Test of Trust", nextScene: "rute_a3_ujian" }]
    },
    rute_a4_perpus: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "In the library, for the very first time, she lets you sit in her quietest, most private world.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Continue to the Test of Trust", nextScene: "rute_a3_ujian" }]
    },
    rute_a3_ujian: {
        bgm: 'tension',
        speaker: "Alexandra",
        text: "Hold on to this. It's the evaluation list for every Student Council division. Don't let it leak to anyone.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [
            { text: "Refuse to tell Bima anything at all", nextScene: "rute_a5_rangga" },
            { text: "Leak a little bit to Bima", nextScene: "bad_end_a_x" }
        ]
    },
    bad_end_a_x: {
        bgm: 'ending_bad',
        speaker: "Alexandra",
        text: "I gave you the greatest trust I've ever given anyone, and you threw it away just like that. Don't come near the council office again. (BAD END: Broken Trust)",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'marah'), charRight: "",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_a5_rangga: {
        bgm: 'tension',
        speaker: "Rangga",
        text: "Alexandra has already been let down by too many people. If you're not serious, back off now.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('rangga', 'curiga'), charRight: "",
        choices: [
            { text: "Convince Rangga your intentions are sincere", nextScene: "rute_a5_percaya" },
            { text: "Hesitate and start keeping your distance", nextScene: "rute_a5_ragu" }
        ]
    },
    rute_a5_percaya: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "You keep helping Alexandra without fail. The night before the festival, she nearly collapses from exhaustion.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [{ text: "Continue to The Night Before the Festival...", nextScene: "rute_a6_malam" }]
    },
    rute_a5_ragu: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "You keep your distance. The festival ends and comes and goes without either of you saying what needed to be said.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'kecewa'), charRight: "",
        choices: [{ text: "Continue to the Ending", nextScene: "rute_a6_ending_sahabat" }]
    },
    rute_a6_malam: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "In the middle of the overtime work, the room's lights suddenly cut out—a short circuit! Everyone panics.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: "", charRight: "",
        choices: [
            { text: "Stay calm, find the fuse box, and organize the team", nextScene: "rute_a6_ending_bonus" },
            { text: "Panic along with everyone, making things worse", nextScene: "rute_a6_ending_normal" }
        ]
    },
    rute_a6_ending_bonus: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "The crisis is resolved. Alexandra is quietly impressed. She truly trusts you now.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('alexandra', 'bahagia'), charRight: "",
        choices: [{ text: "Continue to the Ending", nextScene: "rute_a6_ending1" }]
    },
    rute_a6_ending_normal: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "Farah ends up taking charge instead. Alexandra is a little disappointed, but it isn't a fatal blow.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Continue to the Ending", nextScene: "rute_a6_ending2" }]
    },
    rute_a6_ending1: {
        bgm: 'ending_good',
        speaker: "Alexandra",
        text: "You don't make me feel like I always have to be 'the Council President'. I can just be Alexandra. (Good End)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_alexandra",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_a6_ending2: {
        bgm: 'ending_bittersweet',
        speaker: "Alexandra",
        text: "I was just afraid that if I were honest, I'd look weak. (Bittersweet End)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'sedih'), charRight: "",
        unlockQuote: "quote_bad",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_a6_ending_sahabat: {
        bgm: 'ending_bittersweet',
        speaker: "Alexandra",
        text: "You're still such a coward, you know. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_b2b: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "{player}! What color do you think the sky in this mural should be?",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Just go along with Kirana's spontaneous ideas", nextScene: "rute_b3_mengalir" },
            { text: "Suggest your own idea for the mural", nextScene: "rute_b3_berani" }
        ]
    },
    rute_b3_mengalir: {
        bgm: 'art_whimsy',
        speaker: "Narrator",
        text: "You just go along with it. Kirana grows more and more comfortable, treating you as her favorite easy escape.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Continue...", nextScene: "rute_b3_sanggar" }]
    },
    rute_b3_berani: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "That's such a great idea! You've got really good instincts!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'terkejut'),
        choices: [{ text: "Continue...", nextScene: "rute_b3_sanggar" }]
    },
    rute_b3_sanggar: {
        bgm: 'art_whimsy',
        speaker: "Narrator",
        text: "At the outside art studio, you see Bang Yusuf. The easy closeness between him and Kirana makes you feel oddly awkward.",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Ask Kirana directly", nextScene: "rute_b4_terbuka" },
            { text: "Keep your curiosity to yourself", nextScene: "rute_b4_terpendam" }
        ]
    },
    rute_b4_terbuka: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "He's like a big brother to me. Why, are you jealous?",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Continue...", nextScene: "rute_b4_taman" }]
    },
    rute_b4_terpendam: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "You choose to stay silent. The lingering discomfort makes you mix the colors wrong. Kirana notices something's off.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'kesal'),
        choices: [{ text: "Continue...", nextScene: "rute_b4_taman" }]
    },
    rute_b4_taman: {
        bgm: 'melancholy',
        speaker: "Kirana",
        text: "...Sometimes I'm scared. If I can't paint well anymore someday, would anyone still care about me?",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: "", charRight: img('kirana', 'cemas'),
        choices: [{ text: "Continue to The Breaking Point", nextScene: "rute_b4_kesabaran" }]
    },
    rute_b4_kesabaran: {
        bgm: 'tension',
        speaker: "Kirana",
        text: "I want your honest opinion on these two sketches. Which one do you pick?",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Give an honest opinion, even if it means criticizing one", nextScene: "rute_b5_dewi" },
            { text: "Praise both of them so she won't feel sad", nextScene: "bad_end_b_x" }
        ]
    },
    bad_end_b_x: {
        bgm: 'ending_bad',
        speaker: "Kirana",
        text: "If you can't be honest about something this small, how am I supposed to trust you're honest about anything bigger? (BAD END: Honesty Delayed)",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'sedih'),
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_b5_dewi: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "Dewi asks you to hang out. Kirana happens to walk by and sees the two of you together—she leaves without saying a word.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: img('kirana', 'sedih'),
        choices: [
            { text: "Chase after Kirana and explain", nextScene: "rute_b6_klarifikasi" },
            { text: "Let the misunderstanding linger", nextScene: "rute_b6_diam" }
        ]
    },
    rute_b6_klarifikasi: {
        bgm: 'tender',
        speaker: "Kirana",
        text: "I don't like you because you're good at art. I like how passionate you are, even when things get hard.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'melankolis'),
        choices: [{ text: "Continue to The Sudden Rain", nextScene: "rute_b6_hujan" }]
    },
    rute_b6_diam: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "Because of your hesitation, Kirana slowly starts to drift away.",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'netral'),
        choices: [{ text: "Continue to the Ending", nextScene: "rute_b7_ending_sahabat" }]
    },
    rute_b6_hujan: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "Heavy rain suddenly pours down while you're both still out in the garden. Kirana bursts out laughing instead of running for cover.",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: "", charRight: img('kirana', 'tertawa'),
        choices: [
            { text: "Laugh along and enjoy the moment", nextScene: "rute_b7_ending1" },
            { text: "Panic and rush to find shelter", nextScene: "rute_b7_ending1" }
        ]
    },
    rute_b7_ending1: {
        bgm: 'ending_good',
        speaker: "Kirana",
        text: "This is the most meaningful piece I've ever made. Not because of how it turned out, but because of who made it with me. (Good End)",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: img('kirana', 'terharu'),
        unlockQuote: "quote_kirana",
        choices: [
            { text: "Invite Kirana to the Night Market", nextScene: "rute_b7_ending2" },
            { text: "Let the story end here", nextScene: "menu" }
        ]
    },
    rute_b7_ending2: {
        bgm: 'festival',
        speaker: "Kirana",
        text: "Turns out being an ordinary person is fun too. Thanks for showing me this side of things. (Epilogue)",
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
    rute_c2c: {
        bgm: 'tension',
        speaker: "Bima",
        text: "You're not the lead in some drama, man. Sooner or later, they're both gonna figure it out.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Stubbornly keep juggling both of them", nextScene: "rute_c3_bertahan" },
            { text: "Start being honest that this isn't sustainable", nextScene: "rute_c3_ragu" }
        ]
    },
    rute_c3_bertahan: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "Your test scores drop drastically. Mr. Hendra calls you in for a talk.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_ragu: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "Your test scores drop drastically. Mr. Hendra calls you in for a talk.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_panggil_hendra: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "Honesty isn't just about others—it's about yourself, too. Try finding somewhere quiet to think clearly.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Continue to The Breaking Point...", nextScene: "rute_c3_titik_jenuh" }]
    },
    rute_c3_titik_jenuh: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "That night, Alexandra and Kirana both text you at the exact same time, each asking for help at a different place, at the exact same hour tomorrow.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: "", charRight: "",
        choices: [
            { text: "Try explaining to one of them, ask for understanding", nextScene: "rute_c4_memilih" },
            { text: "Panic, don't reply to either message until morning", nextScene: "rute_c4_memilih" },
            { text: "Be honest with Mr. Hendra and ask for advice", nextScene: "rute_c3_saran_hendra" }
        ]
    },
    rute_c3_saran_hendra: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "You've already tried everything you can. If you have to choose, choose whatever brings you peace of mind—not something out of fear of disappointing someone.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Continue to the turning point...", nextScene: "rute_c4_jujur" }]
    },
    rute_c4_memilih: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "You have to choose where to focus. Who will you choose?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "Focus on Alexandra", nextScene: "rute_a5_rangga" },
            { text: "Focus on Kirana", nextScene: "rute_b5_dewi" }
        ]
    },
    rute_c4_jujur: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "You're honest with both of them. It's hard at first, but they both end up appreciating your honesty.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Continue to the Ending", nextScene: "rute_c5_ending" }]
    },
    rute_c5_ending: {
        bgm: 'ending_good',
        speaker: "Mr. Hendra",
        text: "Your test scores went up this week. 'I still don't know the answer, sir.' That's fine. What matters is that you didn't run away from the question. (Open Ending)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('pakHendra', 'ramah'), charRight: "",
        unlockQuote: "quote_normal",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_m1: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "There's a new transfer student named {mira}. Since you're one of the easiest people here to get along with, I'm putting her in your care for a while to help her settle in this week.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Head to the library...", nextScene: "rute_m1_find" }]
    },
    rute_m1_find: {
        bgm: 'mystery',
        speaker: "Narrator",
        text: "{player} finds {mira} sitting alone in a corner of the library, reading a thick book, completely tuned out from her surroundings.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('mira', 'netral'), charRight: "",
        choices: [
            { text: "Sit nearby without forcing conversation", nextScene: "rute_m2_sabar" },
            { text: "Try to start a conversation by asking about the book", nextScene: "rute_m2_penasaran" }
        ]
    },
    rute_m2_sabar: {
        bgm: 'mystery',
        speaker: "Narrator",
        text: "{player} sits across from her, not forcing any conversation. After almost twenty silent minutes, {mira} finally glances up. '...You're really not going to leave, huh.'",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('mira', 'netral'), charRight: img('mc', 'netral'),
        choices: [{ text: "Continue...", nextScene: "rute_m2_bima" }]
    },
    rute_m2_penasaran: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "What book is that? Looks pretty thick. ...None of your business. (Narrator: Mira quickly snaps the book shut.)",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('mira', 'waspada'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m2_bima" }]
    },
    rute_m2_bima: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "YO. Word is you got assigned to babysit that super cold new girl? Rumor says she transferred from out of town! Some people are even saying she's got a mysterious past!",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Ignore Bima's gossip, get to know Mira on your own", nextScene: "rute_m3" },
            { text: "Secretly curious, dig around in the school group chat", nextScene: "rute_m2_gosip" }
        ]
    },
    rute_m2_gosip: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "Adi ends up curious too and starts asking around. The rumors about Mira spiral out of control. When Mira overhears them in class, her expression hardens. 'Guess it's the same everywhere, huh.'",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('mira', 'sedih'), charRight: "",
        choices: [{ text: "Continue to the Attic", nextScene: "rute_m3" }]
    },
    rute_m3: {
        bgm: 'mystery',
        speaker: "Narrator",
        text: "One afternoon, {player} returns to the library and happens to spot {mira} slipping through a small, dusty door tucked behind the back shelves.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: "", charRight: "",
        choices: [{ text: "Follow her up to the attic...", nextScene: "rute_m3_loteng" }]
    },
    rute_m3_loteng: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "...How did you find this place? (Narrator: Her voice is nearly panicked.) This is my spot. Please don't tell anyone.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'waspada'), charRight: "",
        choices: [
            { text: "Promise to keep it secret, offer to leave (Respectful)", nextScene: "rute_m4_hormat" },
            { text: "Ask why this place matters so much to her", nextScene: "rute_m4_ingin_tahu" }
        ]
    },
    rute_m4_hormat: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "...Wait. You can... stay a bit. As long as you're quiet. (Narrator: Adi sits across from her, in a silence that, surprisingly, doesn't feel awkward at all.)",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'netral'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m5_dewi" }]
    },
    rute_m4_ingin_tahu: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "This is the only place that ever feels like mine. I've changed schools four times in three years. I've learned not to get too close to places or people, because I'll just have to leave them behind again anyway.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'sedih'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m5_dewi" }]
    },
    rute_m5_dewi: {
        bgm: 'tender',
        speaker: "Dewi",
        text: "I'm glad {mira} is starting to open up more. At first I thought she was just cold, but turns out she's just tired of introducing herself over and over again.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('dewi', 'ramah'), charRight: "",
        choices: [
            { text: "Glad Mira has another friend, give her some space", nextScene: "rute_m6" },
            { text: "Feel a bit possessive, worried about losing your moments together", nextScene: "rute_m5_cemburu" }
        ]
    },
    rute_m5_cemburu: {
        bgm: 'tension',
        speaker: "Mira",
        text: "Why are you acting weird toward Dewi? She's my friend too, now. Don't be possessive. I've already lost enough people as it is.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'marah'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m6" }]
    },
    rute_m6: {
        bgm: 'mystery',
        speaker: "Narrator",
        text: "One evening, while talking in the archive attic, {mira}'s phone keeps buzzing nonstop. She glances at the screen for a second, then quickly shoves it back into her pocket.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'netral'), charRight: "",
        choices: [
            { text: "Don't press further, trust she'll tell you when ready", nextScene: "rute_m7_percaya" },
            { text: "Curious, try to ask more about it", nextScene: "rute_m7_tanya" }
        ]
    },
    rute_m7_percaya: {
        bgm: 'tender',
        speaker: "Mira",
        text: "Alvin is... my closest friend since elementary school, all the way up until my last move. You didn't say a word to object to any of this. Why? ...Because it's not my place to.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tersenyum'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m8_alvin" }]
    },
    rute_m7_tanya: {
        bgm: 'tender',
        speaker: "Mira",
        text: "You two seem... really close, huh? Why, jealous? (Narrator: Mira lets out a small laugh at your reaction.) Alvin's my friend from elementary school. He's kind, but... he chose not to take it any further.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tertawa'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m8_alvin" }]
    },
    rute_m8_alvin: {
        bgm: 'tension',
        speaker: "Alvin",
        text: "You've been getting pretty close to {mira} lately. I've known her since we were kids. I know exactly how hard it is for her to open up to someone new. Take good care of her. Or—if you can't, maybe I will.",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alvin', 'serius'), charRight: "",
        choices: [
            { text: "State your intentions without letting your emotions take over (Calm)", nextScene: "rute_m9_tenang" },
            { text: "Get provoked, turn defensive and a little harsh (Defensive)", nextScene: "rute_m9_defensif" }
        ]
    },
    rute_m9_tenang: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "I won't promise I'm perfect. But I won't leave, as long as she still wants me here. (Narrator: Alvin falls quiet for a moment, then gives a slow, almost impressed nod.)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alvin', 'lega'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m10_bayangan" }]
    },
    rute_m9_defensif: {
        bgm: 'tension',
        speaker: "Mira",
        text: "I can take care of myself. I don't need the two of you fighting over me like I'm some kind of prize. (Narrator: Mira walks off, clearly disappointed.)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('mira', 'marah'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m10_bayangan" }]
    },
    rute_m10_bayangan: {
        bgm: 'melancholy',
        speaker: "Mira",
        text: "I told myself I wouldn't get used to being close to anyone here. But I failed. I got used to being close to you. And now it's going to hurt exactly as much as I was always afraid it would.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'menangis'), charRight: "",
        choices: [
            { text: "Reassure her that the time you have left still matters (Brave)", nextScene: "rute_m11_berani" },
            { text: "Keep your distance too, out of shared fear (Afraid)", nextScene: "rute_m11_takut" },
            { text: "Promise to find a way for her to stay (Extra Effort)", nextScene: "rute_m10_upaya" }
        ]
    },
    rute_m10_upaya: {
        bgm: 'tender',
        speaker: "Mr. Hendra",
        text: "This isn't a small decision, {player}. But I can help bring this option to her parents' attention, if it's truly what's best for {mira}. Her grandmother living in this city could be a real solution.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Continue toward putting it into action...", nextScene: "rute_m11_berani" }]
    },
    rute_m11_berani: {
        bgm: 'tender',
        speaker: "Mira",
        text: "I don't want to waste the time we have now just because I'm scared of something that might not even happen. Even if you have to leave someday, I want you to leave with memories that actually mean something.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tersenyum'), charRight: "",
        choices: [{ text: "Continue...", nextScene: "rute_m12" }]
    },
    rute_m11_takut: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "Adi chooses to keep his distance, 'for both their sakes'. Mira accepts it in silence, but from that moment on, the wall that had briefly come down slowly starts rebuilding itself.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'sedih'), charRight: "",
        choices: [{ text: "Continue to the Ending...", nextScene: "rute_m13_ending_sahabat" }]
    },
    rute_m12: {
        bgm: 'melancholy',
        speaker: "Mira",
        text: "The following weeks feel more intense than ever before. News of my father's final decision finally arrives.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'netral'), charRight: "",
        choices: [{ text: "As the end draws near...", nextScene: "rute_m13" }]
    },
    rute_m13: {
        bgm: 'melancholy',
        speaker: "Narrator",
        text: "The final day arrives. Mira and Adi stand together at the bus stop.",
        bg: assets.BACKGROUNDS.rahasia.halteBus, charLeft: img('mira', 'bahagia'), charRight: "",
        choices: [
            { text: "If the Extra Effort paid off (True Good End)", nextScene: "rute_m13_ending1" },
            { text: "If the effort failed, but you still hold on to each other (Bittersweet Good)", nextScene: "rute_m13_ending2" },
            { text: "Let go peacefully, with no promises (Bittersweet)", nextScene: "rute_m13_ending3" }
        ]
    },
    rute_m13_ending1: {
        bgm: 'ending_good',
        speaker: "Mira",
        text: "This is the first time I've ever chosen to stay, instead of just going along with wherever I'm taken. And I choose here. With you. (True Good End)",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'bahagia'), charRight: "",
        unlockQuote: "quote_mira",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_m13_ending2: {
        bgm: 'ending_bittersweet',
        speaker: "Mira",
        text: "I won't promise this will be easy. But for the first time, I want to try not running from something precious, even if it means working harder to hold on to it. (Bittersweet-Good End)",
        bg: assets.BACKGROUNDS.rahasia.halteBus, charLeft: img('mira', 'tersenyum'), charRight: "",
        unlockQuote: "quote_mira",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_m13_ending3: {
        bgm: 'ending_bittersweet',
        speaker: "Mira",
        text: "Thank you for being a place that never once made me feel like I was just passing through. I'll always remember that attic. And you. (Bittersweet End)",
        bg: assets.BACKGROUNDS.rahasia.halteBus, charLeft: img('mira', 'menangis'), charRight: "",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_m13_ending_sahabat: {
        bgm: 'ending_bittersweet',
        speaker: "Narrator",
        text: "They never truly opened up to each other. Mira moved away at the end of the semester. Years later, Adi receives a short story collection titled 'The Attic I Left Behind'. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_r1: {
        bgm: 'council_focus',
        speaker: "Alexandra",
        text: "The Student Council and the Art Room work in completely different ways. This won't be efficient.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Try to convince her...", nextScene: "rute_r1_kirana" }]
    },
    rute_r1_kirana: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "Ooh, that's such a good idea, collaborations always lead to unexpected results!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Ask for Mr. Hendra's blessing", nextScene: "rute_r1_hendra" }]
    },
    rute_r1_hendra: {
        bgm: 'council_focus',
        speaker: "Mr. Hendra",
        text: "An unconventional approach. I'm curious to see how it turns out. Go for it.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Continue to Chapter 2R...", nextScene: "rute_r2" }]
    },
    rute_r2: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "For the first time, Alexandra and Kirana sit at the same table. The first discussion is full of friction. You have to step in as the mediator.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Actively mediate every time they argue", nextScene: "rute_r3" },
            { text: "Let them find common ground on their own", nextScene: "rute_r3" }
        ]
    },
    rute_r3: {
        bgm: 'tension',
        speaker: "Narrator",
        text: "As the big day draws near, they have a massive argument in the art room.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: img('alexandra', 'marah'), charRight: img('kirana', 'kesal'),
        choices: [{ text: "Watch it unfold...", nextScene: "rute_r3_rekat" }]
    },
    rute_r3_rekat: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "Then, strangely, they both burst out laughing, realizing just how ridiculous their argument really was.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Continue to Festival Night", nextScene: "rute_r4" }]
    },
    rute_r4: {
        bgm: 'festival',
        speaker: "Narrator",
        text: "The Festival Hall that night is filled with the result of their collaboration. In the distance, Rangga and Farah are quietly holding hands.",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: "",
        choices: [
            { text: "Focus on celebrating your shared success as a team", nextScene: "rute_r_ending_1" },
            { text: "Take the chance to be honest about your feelings with one of them", nextScene: "rute_r_ending_2" }
        ]
    },
    rute_r_ending_1: {
        bgm: 'true_ending',
        speaker: "Narrator",
        text: "The school reunion now has one more face among the crowd: {mira}. 'So, out of the three of us, who made your heart race the most back then?' Kirana teases. (True Ending)",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_epilog",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_r_ending_2: {
        bgm: 'tender',
        speaker: "Narrator",
        text: "You finally realize where your heart truly leans. Toward whom?",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'bahagia'),
        choices: [
            { text: "Choose Alexandra", nextScene: "rute_r_ending_2_a" },
            { text: "Choose Kirana", nextScene: "rute_r_ending_2_b" }
        ]
    },
    rute_r_ending_2_a: {
        bgm: 'true_ending',
        speaker: "Alexandra",
        text: "Thank you for choosing me. (TRUE ENDING: Romance - Alexandra)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_epilog",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    },
    rute_r_ending_2_b: {
        bgm: 'true_ending',
        speaker: "Kirana",
        text: "I'm so happy you chose me! (TRUE ENDING: Romance - Kirana)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: "", charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_epilog",
        choices: [{ text: "Return to Main Menu", nextScene: "menu" }]
    }
};
