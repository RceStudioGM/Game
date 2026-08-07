/* ============================================================
   PERSIMPANGAN HATI — EDISI DIPERLUAS
   ============================================================ */

let playerName = 'Adi';
let unlockedQuotes = [];
try {
    unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];
} catch (e) {
    unlockedQuotes = [];
}

/* ------------------------------------------------------------
   1. ASSETS
   ------------------------------------------------------------ */
const ASSETS = {
    // Background
    BACKGROUNDS: {
        sekolahUmum: {
            koridor:     'assets/backgrounds/koridor.jpg',
            kelas:       'assets/backgrounds/ruang_kelas.jpg',
            ruangGuruBK: 'assets/backgrounds/ruang_bk.jpg',
            taman:       'assets/backgrounds/taman.jpg',
            atapMalam:   'assets/backgrounds/atap_malam.jpg'
        },
        osis: {
            sekretariat: 'assets/backgrounds/sekretariat_osis.jpg',
        },
        seni: {
            ruangSeni:   'assets/backgrounds/ruang_seni.jpg',
            sanggarLuar: 'assets/backgrounds/sanggar_luar.jpg',
        },
        spesial: {
            aulaFestival: 'assets/backgrounds/aula_festival.jpg',
            pasarMalam:  'assets/backgrounds/pasar_malam.jpg'
        }
    },

    CHARACTER_PATHS: {
        alexandra: 'alexandra_wijaya',
        kirana:    'kirana_maheswari',
        mc:        'mc_protagonis',
        bima:      'bima_satrio',
        rangga:    'rangga_aditya',
        buSari:    'bu_sari',
        pakHendra: 'pak_hendra',
        farah:     'farah_novita',
        dewi:      'mc_protagonis', // fallback (tidak ada aset)
        bangYusuf: 'rangga_aditya'  // fallback (tidak ada aset)
    }
};

function img(charName, exprKey) {
    const folder = ASSETS.CHARACTER_PATHS[charName];
    if (!folder) return '';
    return `assets/characters/${folder}/${exprKey}.jpg`;
}

/* ------------------------------------------------------------
   2. KOLEKSI QUOTES (UNLOCKABLES)
   ------------------------------------------------------------ */
const allQuotes = {
    quote_alexandra: "Logika memang penting, tapi keberanianmu menemaniku di saat sulit adalah rumus yang tak terduga.",
    quote_kirana: "Karya seni terindah bukan dari kanvas mahal, tapi dari momen tak terduga bersamamu.",
    quote_normal: "Kadang kita nggak butuh akhir yang romantis, cukup persahabatan konyol yang bikin masa SMA berkesan.",
    quote_bad: "Ego yang tinggi hanya akan meruntuhkan panggung yang susah payah dibangun bersama.",
    quote_guru: "Kedisiplinan itu pahit di awal, tapi penyesalan datang jauh lebih pahit kalau kamu nggak jujur sama diri sendiri.",
};

/* ------------------------------------------------------------
   3. ALUR CERITA UTAMA (Sesuai Naskah Baru)
   ------------------------------------------------------------ */
const storyData = {
    // ================= PROLOG & BAB 1 =================
    prolog_tabrak: {
        speaker: "Narator",
        text: "{player} terlambat lagi. Berlari menyusuri koridor sambil menggigit roti, dia menabrak setumpuk kertas yang sedang dibawa seseorang.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "prolog_marah" }]
    },
    prolog_marah: {
        speaker: "Alexandra",
        text: "Bisa tidak kamu lihat jalan?",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Minta maaf dan membantu memunguti kertas", nextScene: "prolog_temu_kirana" }]
    },
    prolog_temu_kirana: {
        speaker: "Kirana",
        text: "Eh! Kamu, yang tadi lari-lari itu! Bantuin aku pegang ini dong, tanganku penuh cat!",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Membantu Kirana membawa kanvas besar", nextScene: "bab1_bima_goda" }]
    },
    
    bab1_bima_goda: {
        speaker: "Bima",
        text: "Ketos galak sama jenius nyeleneh, dua-duanya nabrak kamu di hari yang sama? Kamu ini punya gravitasi cewek aneh, tahu, Di.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'ejekan'), charRight: "",
        choices: [{ text: "Bukan nabrak, cuma kebetulan.", nextScene: "bab1_pakhendra_panggil" }]
    },
    bab1_pakhendra_panggil: {
        speaker: "Pak Hendra",
        text: "Nilai ulangan terakhirmu turun, {player}. Aku dengar kamu juga mau ditarik ke OSIS dan ruang seni sekaligus. Aku nggak bisa larang, tapi jangan sampai jadi alasan buat nomor duain sekolah.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'tegas'), charRight: "",
        choices: [{ text: "Saya belum yakin mau pilih yang mana, Pak.", nextScene: "bab1_pilihan_utama" }]
    },
    bab1_pilihan_utama: {
        speaker: "Narator",
        text: "Nggak semua hal harus buru-buru dipilih. Tapi kalau kamu coba pegang dua-duanya tanpa siap, yang ada malah kamu nggak dapat apa-apa.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "A. Bantu di sekretariat OSIS bersama Alexandra", nextScene: "rute_a2a" },
            { text: "B. Bantu mural bersama Kirana di ruang seni", nextScene: "rute_b2b" },
            { text: "C. Coba jalani keduanya sekaligus, meski berat", nextScene: "rute_c2c" }
        ]
    },

    // ================= RUTE ALEXANDRA (A) =================
    rute_a2a: {
        speaker: "Farah",
        text: "Kamu pasti {player} ya? Alexandra cerita soal insiden tabrakan kertas itu. Jangan takut, dia emang gitu ke semua orang di awal.",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_a2b" }]
    },
    rute_a2b: {
        speaker: "Alexandra",
        text: "Aku dengar itu, Farah. Baca proposal ini. Kalau ada yang tidak masuk akal menurut sudut pandang murid biasa, tandai.",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Bertanya ke Farah kenapa namaku yang dipilih", nextScene: "rute_a2c" }]
    },
    rute_a2c: {
        speaker: "Farah",
        text: "Alexandra yang milih langsung, lho. Katanya dia pengen ada yang 'jujur, bukan yang cari muka'. Entah kenapa dia lihat itu dari kamu.",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [
            { text: "A. Kerjakan tugas dengan serius dan diam", nextScene: "rute_a3_tenang" },
            { text: "B. Coba mencairkan suasana dengan bercanda", nextScene: "rute_a3_cair" }
        ]
    },
    rute_a3_tenang: {
        speaker: "Narator",
        text: "Adi bekerja tanpa banyak bicara, menandai proposal dengan catatan tajam. Alexandra membaca catatan itu diam-diam, alisnya sedikit terangkat—terkesan meski tidak menunjukkannya.",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut ke momen berikutnya...", nextScene: "rute_a3_momen_jaket" }]
    },
    rute_a3_cair: {
        speaker: "Narator",
        text: "Kamu tahu nggak, kalau kamu senyum dikit aja, orang-orang pasti nggak takut ke kamu. Untuk sesaat, Alexandra terdiam, lalu nyaris tersenyum.",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'terkejut'), charRight: "",
        choices: [{ text: "Lanjut ke momen berikutnya...", nextScene: "rute_a3_momen_jaket" }]
    },
    rute_a3_momen_jaket: {
        speaker: "Alexandra",
        text: "...Kenapa kamu masih di sini? Nungguin aku bangun. Kamu kerja keras banget, sih.",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'gugup'), charRight: "",
        choices: [{ text: "Meyakinkan dia dengan tulus", nextScene: "rute_a4_rangga" }]
    },
    rute_a4_rangga: {
        speaker: "Rangga",
        text: "Alexandra udah terlalu banyak dikecewakan orang yang bilang 'peduli' terus ninggalin dia pas dia butuh. Kalau kamu nggak serius, mundur sekarang.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('rangga', 'curiga'), charRight: "",
        choices: [
            { text: "A. Yakinkan Rangga niatku tulus", nextScene: "rute_a5_percaya_diri" },
            { text: "B. Ragu dan mulai menjaga jarak", nextScene: "rute_a5_ragu" },
            { text: "C. Tanya apakah Rangga sendiri suka Alexandra", nextScene: "rute_a4_cabang_rangga" }
        ]
    },
    rute_a4_cabang_rangga: {
        speaker: "Rangga",
        text: "...Ketahuan ya. Tapi aku sadar diri, Alexandra nggak pernah lihat aku lebih dari 'partner kerja yang bisa diandalkan'. Justru karena itu, aku pengen orang yang bikin dia bahagia itu orang yang tepat.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('rangga', 'lega'), charRight: "",
        choices: [
            { text: "A. Ambil keputusan dengan mantap", nextScene: "rute_a5_percaya_diri" },
            { text: "B. Ragu dan mulai menjaga jarak", nextScene: "rute_a5_ragu" }
        ]
    },
    rute_a5_percaya_diri: {
        speaker: "Alexandra",
        text: "Kalau kamu roboh sebelum festival mulai, semua kerja kerasmu sia-sia. Aku yang pegang sisanya. ...Kamu mulai berani ngatur-ngatur aku, ya.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alexandra', 'bahagia'), charRight: "",
        choices: [
            { text: "A. Tetap sabar menemani Alexandra", nextScene: "rute_a6_ending1" },
            { text: "B. Memanfaatkan momen untuk mendesaknya jujur", nextScene: "rute_a6_ending2" }
        ]
    },
    rute_a5_ragu: {
        speaker: "Narator",
        text: "Adi menjaga jarak, sering beralasan sibuk. Alexandra menyadarinya, tapi terlalu gengsi untuk bertanya langsung. Festival usai tanpa ada yang terucap.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'kecewa'), charRight: "",
        choices: [{ text: "Lanjut ke Akhir", nextScene: "rute_a6_ending_sahabat" }]
    },
    rute_a6_ending1: {
        speaker: "Alexandra",
        text: "Aku... nggak terbiasa deket sama orang. Tapi entah kenapa, kamu nggak bikin aku harus jadi 'Ketua OSIS' terus. (Good End: Perlahan tapi Pasti)",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_alexandra",
        choices: [{ text: "Kembali ke Menu", nextScene: "menu" }]
    },
    rute_a6_ending2: {
        speaker: "Alexandra",
        text: "Aku nggak punya waktu buat ini. Festival lebih penting. (Bittersweet End: Terlalu Cepat)",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.atapMalam, charLeft: img('alexandra', 'sedih'), charRight: "",
        unlockQuote: "quote_bad",
        choices: [{ text: "Kembali ke Menu", nextScene: "menu" }]
    },
    rute_a6_ending_sahabat: {
        speaker: "Alexandra",
        text: "Kamu masih aja penakut. (Friend End: Bukan Sekarang)",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Kembali ke Menu", nextScene: "menu" }]
    },

    // ================= RUTE KIRANA (B) =================
    rute_b2b: {
        speaker: "Kirana",
        text: "{player}! Menurutmu mural ini harusnya pakai warna apa buat langitnya?",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "A. Ikuti arahan spontan Kirana", nextScene: "rute_b3_mengalir" },
            { text: "B. Usulkan ide sendiri untuk mural", nextScene: "rute_b3_berani" }
        ]
    },
    rute_b3_mengalir: {
        speaker: "Narator",
        text: "Adi menurut saja tiap kali Kirana punya ide baru. Kirana makin nyaman, menganggap Adi tempat pelarian paling santai.",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'tersenyum'),
        choices: [{ text: "Lanjut...", nextScene: "rute_b3_bangyusuf" }]
    },
    rute_b3_berani: {
        speaker: "Kirana",
        text: "Coba campur sedikit ungu di bagian bawah langit, kayak abis hujan. ...Itu ide bagus banget! Kamu nggak pernah belajar seni tapi punya insting yang oke.",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'terkejut'),
        choices: [{ text: "Lanjut...", nextScene: "rute_b3_bangyusuf" }]
    },
    rute_b3_bangyusuf: {
        speaker: "Bima",
        text: "Itu rivalmu tuh, keliatannya.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'ejekan'), charRight: "",
        choices: [
            { text: "A. Bertanya langsung ke Kirana soal Bang Yusuf", nextScene: "rute_b4_terbuka" },
            { text: "B. Memendam rasa penasaran", nextScene: "rute_b4_terpendam" }
        ]
    },
    rute_b4_terbuka: {
        speaker: "Kirana",
        text: "Dia kayak kakak buat aku. Kenapa? Cemburu ya? (menggoda)",
        bg: ASSETS.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Lanjut ke momen berikutnya...", nextScene: "rute_b4_kecemasan" }]
    },
    rute_b4_terpendam: {
        speaker: "Narator",
        text: "Adi memilih diam, tapi rasa tidak nyaman membuatnya salah mencampur warna hingga merusak latar.",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'kesal'),
        choices: [{ text: "Lanjut ke momen berikutnya...", nextScene: "rute_b4_kecemasan" }]
    },
    rute_b4_kecemasan: {
        speaker: "Kirana",
        text: "...Kadang aku takut, semua orang cuma suka 'Kirana yang jago gambar', bukan aku yang beneran.",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'cemas'),
        choices: [{ text: "Lanjut ke konflik Dewi...", nextScene: "rute_b5_dewi" }]
    },
    rute_b5_dewi: {
        speaker: "Narator",
        text: "Dewi mengajak Adi jalan berdua sepulang sekolah. Tepat saat itu, Kirana lewat dan melihat mereka.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.taman, charLeft: "", charRight: img('kirana', 'sedih'),
        choices: [
            { text: "A. Kejar Kirana dan jelaskan", nextScene: "rute_b6_klarifikasi" },
            { text: "B. Biarkan kesalahpahaman berlarut", nextScene: "rute_b6_diam" }
        ]
    },
    rute_b6_klarifikasi: {
        speaker: "Kirana",
        text: "Aku suka kamu bukan karena kamu jago gambar. Aku suka caramu ketawa lepas. ...Itu kalimat paling nggak romantis tapi paling bikin aku pengen nangis yang pernah aku denger.",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'melankolis'),
        choices: [
            { text: "A. Ajak Kirana ke pasar malam", nextScene: "rute_b7_ending2" },
            { text: "B. Cukupkan cerita di sini", nextScene: "rute_b7_ending1" }
        ]
    },
    rute_b6_diam: {
        speaker: "Narator",
        text: "Kirana perlahan menjauh, sementara Adi menyadari kesalahannya terlambat.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: img('kirana', 'netral'),
        choices: [{ text: "Lanjut ke Akhir", nextScene: "rute_b7_ending_sahabat" }]
    },
    rute_b7_ending1: {
        speaker: "Kirana",
        text: "Ini karya paling berarti yang pernah aku buat. Bukan karena hasilnya, tapi karena siapa yang bikin bareng aku. (Good End)",
        bg: ASSETS.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: img('kirana', 'terharu'),
        unlockQuote: "quote_kirana",
        choices: [{ text: "Kembali ke Menu", nextScene: "menu" }]
    },
    rute_b7_ending2: {
        speaker: "Kirana",
        text: "Ternyata seru juga jadi orang biasa. Makasih udah nunjukin ini ke aku. (Good End Epilog)",
        bg: ASSETS.BACKGROUNDS.spesial.pasarMalam, charLeft: "", charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_kirana",
        choices: [{ text: "Kembali ke Menu", nextScene: "menu" }]
    },
    rute_b7_ending_sahabat: {
        speaker: "Kirana",
        text: "Kita tetep temenan kan? Selalu. Cuma... mungkin bukan yang lain, untuk sekarang. (Friend End)",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'tersenyum'),
        choices: [{ text: "Kembali ke Menu", nextScene: "menu" }]
    },

    // ================= RUTE C (DILEMA DUA HATI) =================
    rute_c2c: {
        speaker: "Bima",
        text: "Kamu itu bukan pemeran utama drama yang bisa pegang dua cewek sekaligus, Di. Cepat atau lambat, mereka bakal sadar.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'ejekan'), charRight: "",
        choices: [
            { text: "A. Tetap keras kepala jalani keduanya", nextScene: "rute_c3_bertahan" },
            { text: "B. Mulai jujur kalau ini nggak berkelanjutan", nextScene: "rute_c3_ragu" }
        ]
    },
    rute_c3_bertahan: {
        speaker: "Narator",
        text: "Rapor tengah semester keluar, dan nilai Adi anjlok drastis.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_ragu: {
        speaker: "Narator",
        text: "Rapor tengah semester keluar, dan nilai Adi anjlok drastis.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_panggil_hendra: {
        speaker: "Pak Hendra",
        text: "Adi, dengar. Kejujuran itu bukan cuma soal jujur ke orang lain, tapi jujur soal apa yang kamu benar-benar mau.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [
            { text: "A. Fokus dan memilih salah satu", nextScene: "rute_c4_memilih" },
            { text: "B. Jujur ke dua-duanya sekaligus", nextScene: "rute_c4_jujur" }
        ]
    },
    rute_c4_memilih: {
        speaker: "Narator",
        text: "Adi memutuskan untuk fokus ke salah satu. Siapa yang akan dia pilih?",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "A. Fokus ke Alexandra", nextScene: "rute_a4_rangga" },
            { text: "B. Fokus ke Kirana", nextScene: "rute_b5_dewi" }
        ]
    },
    rute_c4_jujur: {
        speaker: "Narator",
        text: "Adi mengumpulkan keberanian, mengajak Alexandra dan Kirana bicara terpisah.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_c5_ending" }]
    },
    rute_c5_ending: {
        speaker: "Pak Hendra",
        text: "Saya masih belum tahu jawabannya, Pak. Nggak masalah. Yang penting kamu nggak lari dari pertanyaannya. (Ending Terbuka)",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.taman, charLeft: img('pakHendra', 'ramah'), charRight: "",
        unlockQuote: "quote_normal",
        choices: [{ text: "Kembali ke Menu", nextScene: "menu" }]
    }
};

// ================= LOGIKA NAVIGASI DAN DIALOG (SAMA SEPERTI SEBELUMNYA) =================
function hideAllScreens() {
    ['main-menu', 'name-input-screen', 'game-screen', 'sub-menu-screen'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
}

function showNameInput() {
    hideAllScreens();
    document.getElementById('name-input-screen').classList.remove('hidden');
}

function startGameWithCustomName() {
    const input = document.getElementById('player-name-input');
    playerName = (input.value || '').trim() || 'Adi';
    window.playerName = playerName;
    hideAllScreens();
    document.getElementById('game-screen').classList.remove('hidden');
    loadScene('prolog_tabrak');
}

function backToMenu() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
}

function showSettings() {
    hideAllScreens();
    document.getElementById('sub-menu-screen').classList.remove('hidden');
    document.getElementById('sub-menu-title').innerText = 'Pengaturan';
    document.getElementById('sub-menu-content').innerHTML = '<p style="opacity:.8">Pengaturan suara & teks belum tersedia.</p>';
}

function showGallery() {
    hideAllScreens();
    document.getElementById('sub-menu-screen').classList.remove('hidden');
    document.getElementById('sub-menu-title').innerText = 'Koleksi Quotes';
    const box = document.getElementById('sub-menu-content');
    box.innerHTML = '';
    for (const [key, text] of Object.entries(allQuotes)) {
        const item = document.createElement('div');
        item.className = 'quote-item';
        item.innerHTML = unlockedQuotes.includes(key)
            ? `<strong>Terbuka:</strong> "${text}"`
            : `🔒 <em>(Mainkan rute lain untuk membuka)</em>`;
        box.appendChild(item);
    }
}

function loadScene(sceneKey) {
    if (sceneKey === 'menu') {
        backToMenu();
        return;
    }

    const scene = storyData[sceneKey];
    if (!scene) {
        console.error('Scene tidak ditemukan:', sceneKey);
        return;
    }

    const replaceTags = (str) => str
        .replace(/{alexandra}/g, 'Alexandra')
        .replace(/{kirana}/g, 'Kirana')
        .replace(/{player}/g, playerName);

    const processedText = replaceTags(scene.text);
    const processedSpeaker = replaceTags(scene.speaker);

    const speakerBox = document.getElementById('speaker-name-box');
    if (processedSpeaker === "Narator") {
        speakerBox.classList.add('hide-name-box');
    } else {
        speakerBox.classList.remove('hide-name-box');
        document.getElementById('speaker-name').innerText = processedSpeaker;
    }

    document.getElementById('dialogue-text').innerText = processedText;
    document.getElementById('background-image').style.backgroundImage = `url('${scene.bg}')`;

    const charL = document.getElementById('char-left');
    if (scene.charLeft) {
        charL.src = scene.charLeft;
        charL.classList.remove('hidden');
    } else {
        charL.classList.add('hidden');
    }

    const charR = document.getElementById('char-right');
    if (scene.charRight) {
        charR.src = scene.charRight;
        charR.classList.remove('hidden');
    } else {
        charR.classList.add('hidden');
    }

    if (scene.unlockQuote) saveQuote(scene.unlockQuote);

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = replaceTags(choice.text);
        btn.onclick = () => loadScene(choice.nextScene);
        choicesContainer.appendChild(btn);
    });
}

function saveQuote(quoteId) {
    if (unlockedQuotes.includes(quoteId)) return;
    unlockedQuotes.push(quoteId);
    try { localStorage.setItem('vn_quotes', JSON.stringify(unlockedQuotes)); } catch (e) {}

    const toast = document.getElementById('toast-notif');
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 500);
    }, 4000);
}
