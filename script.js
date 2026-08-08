/* ============================================================
   PERSIMPANGAN HATI — script.js
   DIUBAH: Menggunakan aset gambar crop nyata, bukan Dicebear.
   ============================================================ */

let playerName = 'Adi';
let unlockedQuotes = [];
try {
    unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];
} catch (e) {
    unlockedQuotes = [];
}

/* ------------------------------------------------------------
   1. assets — DIKELOMPOKKAN PER KATEGORI (Path Folder Nyata)
   ------------------------------------------------------------ */
const assets = {

    // --- BACKGROUND ---
    BACKGROUNDS: {
        sekolahUmum: {
            koridor:     'assets/background/koridor.png',
            kelas:       'assets/background/ruang_kelas.png',
            ruangGuruBK: 'assets/background/ruang_bk.png',
        },
        osis: {
            sekretariat: 'assets/background/sekretariat_osis.png',
        },
        seni: {
            ruangSeni:   'assets/background/ruang_seni.png',
            sanggarLuar: 'assets/background/sanggar_luar.png',
        },
        luarSekolah: {
            taman:       'assets/background/taman.png',
            pasarMalam:  'assets/background/pasar_malam.png',
        },
        spesial: {
            atapMalam:    'assets/background/atap_malam.png',
            aulaFestival: 'assets/background/aula_festival.png',
        }
    },

    // --- KARAKTER (Mapping Nama Folder Aset) ---
    CHARACTER_PATHS: {
        alexandra: 'alexandra_wijaya',
        kirana:    'kirana_maheswari',
        mc:        'mc_protagonis',
        bima:      'bima_satrio',
        rangga:    'rangga_aditya',
        buSari:    'bu_sari',
        pakHendra: 'pak_hendra',
        farah:     'farah_novita',
        // Karakter yang tidak ada asetnya (dewi, bangYusuf) akan di-handle di fungsi img()
    }
};

/* Helper singkat untuk memanggil gambar ekspresi.
   Contoh: img('alexandra', 'tegas') -> alexandra_wijaya/tegas.png */
function img(charName, exprKey) {
    const folder = assets.CHARACTER_PATHS[charName];
    // Jika karakter tidak ditemukan mappingnya, beri fallback kosong
    if (!folder) return ''; 
    // Asumsikan format penamaan file adalah: nama_folder/ekspresi.png
    return `assets/characters/${folder}/${exprKey}.png`;
}

/* ------------------------------------------------------------
   2. KOLEKSI QUOTES
   ------------------------------------------------------------ */
const allQuotes = {
    quote_alexandra: "Logika memang penting, tapi keberanianmu menemaniku di saat sulit adalah rumus yang tak terduga.",
    quote_kirana: "Karya seni terindah bukan dari kanvas mahal, tapi dari momen tak terduga bersamamu.",
    quote_normal: "Kadang kita nggak butuh akhir yang romantis, cukup persahabatan konyol yang bikin masa SMA berkesan.",
    quote_bad: "Ego yang tinggi hanya akan meruntuhkan panggung yang susah payah dibangun bersama.",
    quote_guru: "Kedisiplinan itu pahit di awal, tapi penyesalan datang jauh lebih pahit kalau kamu nggak jujur sama diri sendiri.",
};

/* ------------------------------------------------------------
   3. ALUR CERITA (Nama Karakter Diubah ke Pemanggilan img() Baru)
   ------------------------------------------------------------ */
const storyData = {
    prolog_1: {
        speaker: "Narator",
        text: "Sore itu, koridor SMA Nusantara sudah sepi. {player} masih duduk sendirian di kelas, menunda pulang.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('mc', 'netral'),
        choices: [{ text: "Lanjut...", nextScene: "prolog_2" }]
    },
    prolog_2: {
        speaker: "Pak Hendra",
        // [PERBAIKAN BUG]: Hapus .value dan gunakan {player}
        text: "{player}, Bapak lihat nilai ulanganmu turun. Daripada melamun tak jelas di kelas kosong, mending kamu ikut bantu persiapan Festival Sekolah.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'tegas'), charRight: "",
        choices: [{ text: "Baik, Pak. Saya bantu siapa?", nextScene: "prolog_3" }]
    },
    prolog_3: {
        speaker: "Pak Hendra",
        text: "Ada dua pilihan yang bisa kamu pilih,2 tempat ini membutuhkan bantuan yaitu di Ruang sekretariat OSIS untuk membantu Alexandra, dan ruang seni untuk membantu Kirana dengan Mural nya.Kamu bisa memilih salah satu, atau kalo kamu bisa dan mahruk kamu bisa ambil 2 2nya.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'netral'), charRight: "",
        choices: [{ text: "Menuju koridor sekolah...", nextScene: "bima_sindir" }]
    },
    bima_sindir: {
        speaker: "Bima",
        // [PERBAIKAN BUG]: Hapus .value dan gunakan {player}
        text: "Wanjayy denger denger ada yang disuruh bantuin osis ama anak seni nihh, Ya sihh kan ada wanita dingin nan cantik si ketos alexandra di osis lalu di seni ada anak ceria itu si Kirana, lu mau deketin semuan nya nihh mau punya ahrem ya luu {player}.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'usil'), charRight: "",
        choices: [{ text: "Apalah kalo ngomong jan ngaco, aku begini ya terpaksa biar nilai aman.", nextScene: "konflik_awal" }]
    },

    konflik_awal: {
        speaker: "Narator",
        text: "Di persimpangan koridor, {alexandra} berjalan cepat sambil membawa map, sementara dari arah lain {kirana} melambai riang dari pintu ruang seni.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor,
        charLeft: img('alexandra', 'tegas'), charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Menuju ke sekretariat OSIS ", nextScene: "rute_a1" },
            { text: "Menuju Ruang Seni Membantu membuat sebuah mural ", nextScene: "rute_b1" },
        ]
    },

    /* ================= RUTE ALEXANDRA ================= */
    rute_a1: {
        speaker: "Alexandra",
        text: "Kamu yang dikirim Pak Hendra? Bagus. Ikut aku ke sekretariat, banyak proposal yang harus dicek sebelum sore ini.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Ikut ke sekretariat...", nextScene: "rute_a1_rangga" }]
    },
    rute_a1_rangga: {
        speaker: "Rangga",
        text: "Kamu yang mau bantu-bantu di sini? Aku Rangga, wakil ketua. ...Jangan macam-macam sama Alexandra, ya.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: img('rangga', 'curiga'),
        choices: [{ text: "Lanjut kerja sampai malam...", nextScene: "rute_a2" }]
    },
    rute_a2: {
        speaker: "Narator",
        text: "Beberapa jam berlalu. {alexandra} mulai kelihatan lelah, matanya berat menahan kantuk di depan tumpukan proposal.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [
            { text: "Selimuti dia dengan jaket, biarkan istirahat sebentar", nextScene: "rute_a3_baik" },
            { text: "Bangunkan paksa, kerjaan belum selesai", nextScene: "ending_bad" },
        ]
    },
    rute_a3_baik: {
        speaker: "Alexandra",
        text: "...Kenapa kamu masih di sini? ...Nggak perlu nungguin aku bangun kayak gini.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'gugup'), charRight: "",
        choices: [{ text: "Nungguin kamu bangun. Kamu kerja keras banget.", nextScene: "ending_ambis" }]
    },
    ending_ambis: {
        speaker: "Alexandra",
        text: "Festival sukses berkat kerja kerasmu juga. ...Malam ini bintangnya indah, ya. Terima kasih sudah bertahan bersamaku.",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_alexandra",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    /* ================= RUTE KIRANA ================= */
    rute_b1: {
        speaker: "Kirana",
        text: "Asyik, ada bala bantuan! Sini, tanganmu masih bersih kan? Pegangin kanvas ini dulu!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Bantu pegang kanvas...", nextScene: "rute_b1_busari" }]
    },
    rute_b1_busari: {
        speaker: "Bu Sari",
        text: "Wah, tumben Kirana nggak ngusir orang di hari pertama. Tolong dibantu terus ya, dia susah kerja bareng orang lain biasanya.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: img('buSari', 'tersenyum'), charRight: img('kirana', 'ceria'),
        choices: [{ text: "Lanjut membantu sampai sore...", nextScene: "rute_b2" }]
    },
    rute_b2: {
        speaker: "Kirana",
        text: "...Kadang aku takut, semua orang cuma suka 'Kirana yang jago gambar', bukan aku yang beneran.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'cemas'),
        choices: [
            { text: "Aku suka kamu bukan karena kamu jago gambar.", nextScene: "ending_santuy" },
            { text: "(diam, tidak tahu harus bilang apa)", nextScene: "ending_bad" },
        ]
    },
    ending_santuy: {
        speaker: "Kirana",
        text: "Itu... kalimat paling nggak romantis tapi paling bikin aku pengen nangis yang pernah aku denger. Makasih ya.",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: img('kirana', 'melankolis'),
        unlockQuote: "quote_kirana",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    /* ================= ENDING NETRAL/BAD ================= */
    ending_bad: {
        speaker: "Pak Hendra",
        text: "Adi... Bapak nggak bisa maksa kamu jujur sama perasaanmu sendiri. Tapi coba pikirkan lagi baik-baik, ya.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'tegas'), charRight: "",
        unlockQuote: "quote_guru",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
};

/* ------------------------------------------------------------
   4. NAVIGASI ANTAR LAYAR
   ------------------------------------------------------------ */
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
    window.playerName = playerName; // Fix bug global variabel
    hideAllScreens();
    document.getElementById('game-screen').classList.remove('hidden');
    loadScene('prolog_1');
}

function backToMenu() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
}

function showSettings() {
    hideAllScreens();
    document.getElementById('sub-menu-screen').classList.remove('hidden');
    document.getElementById('sub-menu-title').innerText = 'Pengaturan';
    document.getElementById('sub-menu-content').innerHTML =
        '<p style="opacity:.8">Pengaturan suara & teks belum tersedia di build ini.</p>';
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

/* ------------------------------------------------------------
   5. ENGINE UTAMA
   ------------------------------------------------------------ */
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
    try { localStorage.setItem('vn_quotes', JSON.stringify(unlockedQuotes)); } catch (e) { /* abaikan bila tak tersedia */ }

    const toast = document.getElementById('toast-notif');
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 500);
    }, 4000);
}