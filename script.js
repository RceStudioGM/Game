/* ============================================================
   PERSIMPANGAN HATI — script.js
   Semua state disimpan di memori (localStorage dibungkus try/catch
   supaya tetap aman dijalankan di preview mana pun).
   ============================================================ */

let playerName = 'Adi';
let unlockedQuotes = [];
try {
    unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];
} catch (e) {
    unlockedQuotes = [];
}

/* ------------------------------------------------------------
   1. HELPER PEMBUAT AVATAR (Dicebear avataaars)
   Setiap karakter punya "identitas dasar" (rambut/baju/aksesoris)
   yang tetap sama, lalu ekspresi diubah lewat parameter
   mouth / eyebrows / eyes supaya wajah cocok dengan momen cerita.
   ------------------------------------------------------------ */
function buildAvatar(seed, base, expr) {
    const params = new URLSearchParams({ seed, ...base, ...expr });
    return `https://api.dicebear.com/7.x/avataaars/svg?${params.toString()}`;
}

function placeholderBg(label, bgColor) {
    return `https://placehold.co/960x600/${bgColor}/f1c40f?font=roboto&text=${encodeURIComponent(label)}`;
}

/* ------------------------------------------------------------
   2. ASSETS — dikelompokkan per kategori
   ------------------------------------------------------------ */
const ASSETS = {

    // --- BACKGROUND, dikelompokkan per lokasi/tempat di cerita ---
    BACKGROUNDS: {
        sekolahUmum: {
            koridor:     placeholderBg('Koridor Sekolah', '2c3e50'),
            kelas:       placeholderBg('Ruang Kelas', '2c3e50'),
            ruangGuruBK: placeholderBg('Ruang Guru / BK', '2c3e50'),
        },
        osis: {
            sekretariat: placeholderBg('Sekretariat OSIS', '1b2838'),
        },
        seni: {
            ruangSeni:   placeholderBg('Ruang Seni', '4a235a'),
            sanggarLuar: placeholderBg('Sanggar Lukis', '4a235a'),
        },
        luarSekolah: {
            taman:       placeholderBg('Taman Sekolah', '145a32'),
            pasarMalam:  placeholderBg('Pasar Malam', '145a32'),
        },
        spesial: {
            atapMalam:    placeholderBg('Atap Sekolah - Malam Kembang Api', '0d0d0d'),
            aulaFestival: placeholderBg('Aula Festival Sekolah', '0d0d0d'),
        }
    },

    // --- KARAKTER, tiap karakter = identitas dasar + kumpulan ekspresi ---
    CHARACTERS: {

        // MC bisa cowok/cewek, disiapkan dua identitas dasar
        mc: {
            cowok: {
                base: { top: 'shortHairShortFlat', clothing: 'hoodie', skinColor: 'light' },
                normal:  { mouth: 'default', eyebrows: 'default', eyes: 'default' },
                senang:  { mouth: 'smile',   eyebrows: 'raisedExcited', eyes: 'happy' },
                gugup:   { mouth: 'twinkle', eyebrows: 'raisedExcitedNatural', eyes: 'surprised' },
                cemas:   { mouth: 'concerned', eyebrows: 'sadConcerned', eyes: 'default' },
                marah:   { mouth: 'grimace', eyebrows: 'angry', eyes: 'default' },
                terharu: { mouth: 'smile',   eyebrows: 'sadConcerned', eyes: 'cry' },
            },
            cewek: {
                base: { top: 'longHairStraight2', clothing: 'hoodie', skinColor: 'light' },
                normal:  { mouth: 'default', eyebrows: 'default', eyes: 'default' },
                senang:  { mouth: 'smile',   eyebrows: 'raisedExcited', eyes: 'happy' },
                gugup:   { mouth: 'twinkle', eyebrows: 'raisedExcitedNatural', eyes: 'surprised' },
                cemas:   { mouth: 'concerned', eyebrows: 'sadConcerned', eyes: 'default' },
                marah:   { mouth: 'grimace', eyebrows: 'angry', eyes: 'default' },
                terharu: { mouth: 'smile',   eyebrows: 'sadConcerned', eyes: 'cry' },
            }
        },

        // Alexandra — Ketua OSIS: tegas & kaku, tapi ada momen lelah/gugup/marah/senyum langka
        alexandra: {
            base: { top: 'straightAndStrand', clothing: 'blazerAndShirt', accessories: 'prescription02', hairColor: 'black' },
            tegas:    { mouth: 'serious',  eyebrows: 'angryNatural', eyes: 'default' },   // default sehari-hari
            lelah:    { mouth: 'sad',      eyebrows: 'sadConcernedNatural', eyes: 'squint' },
            gugup:    { mouth: 'twinkle',  eyebrows: 'raisedExcitedNatural', eyes: 'default' }, // tersipu, jarang muncul
            marah:    { mouth: 'grimace',  eyebrows: 'angry', eyes: 'default' },
            tersenyum:{ mouth: 'smile',    eyebrows: 'default', eyes: 'happy' },          // ending good route
        },

        // Kirana — jenius seni: ceria & bebas, tapi ada momen insecure & terharu
        kirana: {
            base: { top: 'curly', clothing: 'graphicShirt', hairColor: 'blue' },
            ceria:   { mouth: 'smile',   eyebrows: 'raisedExcited', eyes: 'happy' },      // default sehari-hari
            cemas:   { mouth: 'sad',     eyebrows: 'sadConcerned', eyes: 'default' },
            terharu: { mouth: 'twinkle', eyebrows: 'default', eyes: 'cry' },
            tertawa: { mouth: 'smile',   eyebrows: 'raisedExcited', eyes: 'squint' },
        },

        // --- NPC pendukung ---
        bima: {
            base: { top: 'shortHairFrizzle', clothing: 'shirtCrewNeck', hairColor: 'brownDark' },
            jahil: { mouth: 'twinkle', eyebrows: 'upDown', eyes: 'wink' },
        },
        rangga: {
            base: { top: 'shortHairShortWaved', clothing: 'blazerAndShirt', hairColor: 'black' },
            curiga: { mouth: 'serious', eyebrows: 'angryNatural', eyes: 'side' },
            lega:   { mouth: 'smile',   eyebrows: 'default', eyes: 'default' },
        },
        buSari: {
            base: { top: 'bob', clothing: 'blazerAndSweater', accessories: 'round', hairColor: 'brown' },
            normal: { mouth: 'smile', eyebrows: 'default', eyes: 'default' },
        },
        dewi: {
            base: { top: 'longHairStraight', clothing: 'shirtVNeck', hairColor: 'black' },
            maluMalu: { mouth: 'twinkle', eyebrows: 'default', eyes: 'side' },
        },
        farah: {
            base: { top: 'longHairBun', clothing: 'collarAndSweater', hairColor: 'brownDark' },
            ramah: { mouth: 'smile', eyebrows: 'default', eyes: 'happy' },
        },
        bangYusuf: {
            base: { top: 'shortHairShortCurly', facialHair: 'beardLight', clothing: 'hoodie', hairColor: 'black' },
            kalem: { mouth: 'serious', eyebrows: 'defaultNatural', eyes: 'default' },
        },
        pakHendra: {
            base: { top: 'shortHairShortFlat', facialHair: 'moustacheFancy', clothing: 'blazerAndShirt', hairColor: 'silverGray' },
            tegas:  { mouth: 'serious', eyebrows: 'angryNatural', eyes: 'default' },
            lembut: { mouth: 'smile',   eyebrows: 'default', eyes: 'default' },
        },
    }
};

/* Helper singkat supaya pemanggilan di storyData tetap ringkas,
   contoh: img('alexandra','tegas') / img('mc','cowok','senang') */
function img(name, exprOrGender, exprIfMc) {
    const c = ASSETS.CHARACTERS[name];
    if (name === 'mc') {
        const genderData = c[exprOrGender];         // 'cowok' | 'cewek'
        return buildAvatar(name + '-' + exprOrGender, genderData.base, genderData[exprIfMc]);
    }
    return buildAvatar(name, c.base, c[exprOrGender]);
}

/* ------------------------------------------------------------
   3. KOLEKSI QUOTES
   ------------------------------------------------------------ */
const allQuotes = {
    quote_alexandra: "Logika memang penting, tapi keberanianmu menemaniku di saat sulit adalah rumus yang tak terduga.",
    quote_kirana: "Karya seni terindah bukan dari kanvas mahal, tapi dari momen tak terduga bersamamu.",
    quote_normal: "Kadang kita nggak butuh akhir yang romantis, cukup persahabatan konyol yang bikin masa SMA berkesan.",
    quote_bad: "Ego yang tinggi hanya akan meruntuhkan panggung yang susah payah dibangun bersama.",
    quote_guru: "Kedisiplinan itu pahit di awal, tapi penyesalan datang jauh lebih pahit kalau kamu nggak jujur sama diri sendiri.",
};

/* ------------------------------------------------------------
   4. ALUR CERITA
   Nama karakter memakai {player}, {alexandra}, {kirana}
   ------------------------------------------------------------ */
const storyData = {
    prolog_1: {
        speaker: "Narator",
        text: "Sore itu, koridor SMA Nusantara sudah sepi. {player} masih duduk sendirian di kelas, menunda pulang.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.kelas, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "prolog_2" }]
    },
    prolog_2: {
        speaker: "Pak Hendra",
        text: "Adi. Bapak lihat nilai ulanganmu turun. Daripada bengong di kelas kosong, mending kamu ikut bantu persiapan Festival Sekolah.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'tegas'), charRight: "",
        choices: [{ text: "Baik, Pak. Saya bantu siapa?", nextScene: "prolog_3" }]
    },
    prolog_3: {
        speaker: "Pak Hendra",
        text: "Ada dua tempat yang butuh orang: sekretariat OSIS-nya {alexandra}, dan ruang seni tempat {kirana} bikin mural. Pilih salah satu, atau coba dua-duanya kalau kamu yakin sanggup.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'lembut'), charRight: "",
        choices: [{ text: "Menuju koridor sekolah...", nextScene: "bima_sindir" }]
    },
    bima_sindir: {
        speaker: "Bima",
        text: "Woy! Denger-denger kamu ditarik OSIS sama anak seni sekaligus? Kamu ini pemeran utama drama apaan sih, Di.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Terserah, yang penting nilai aman.", nextScene: "konflik_awal" }]
    },

    konflik_awal: {
        speaker: "Narator",
        text: "Di persimpangan koridor, {alexandra} berjalan cepat sambil membawa map, sementara dari arah lain {kirana} melambai riang dari pintu ruang seni.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.koridor,
        charLeft: img('alexandra', 'tegas'), charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Bantu {alexandra} di sekretariat OSIS (Rute Alexandra)", nextScene: "rute_a1" },
            { text: "Bantu {kirana} bikin mural (Rute Kirana)", nextScene: "rute_b1" },
        ]
    },

    /* ================= RUTE ALEXANDRA ================= */
    rute_a1: {
        speaker: "Alexandra",
        text: "Kamu yang dikirim Pak Hendra? Bagus. Ikut aku ke sekretariat, banyak proposal yang harus dicek sebelum sore ini.",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Ikut ke sekretariat...", nextScene: "rute_a1_rangga" }]
    },
    rute_a1_rangga: {
        speaker: "Rangga",
        text: "Kamu yang mau bantu-bantu di sini? Aku Rangga, wakil ketua. ...Jangan macam-macam sama Alexandra, ya.",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: img('rangga', 'curiga'),
        choices: [{ text: "Lanjut kerja sampai malam...", nextScene: "rute_a2" }]
    },
    rute_a2: {
        speaker: "Narator",
        text: "Beberapa jam berlalu. {alexandra} mulai kelihatan lelah, matanya berat menahan kantuk di depan tumpukan proposal.",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [
            { text: "Selimuti dia dengan jaket, biarkan istirahat sebentar", nextScene: "rute_a3_baik" },
            { text: "Bangunkan paksa, kerjaan belum selesai", nextScene: "ending_bad" },
        ]
    },
    rute_a3_baik: {
        speaker: "Alexandra",
        text: "...Kenapa kamu masih di sini? ...Nggak perlu nungguin aku bangun kayak gini.",
        bg: ASSETS.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'gugup'), charRight: "",
        choices: [{ text: "Nungguin kamu bangun. Kamu kerja keras banget.", nextScene: "ending_ambis" }]
    },
    ending_ambis: {
        speaker: "Alexandra",
        text: "Festival sukses berkat kerja kerasmu juga. ...Malam ini bintangnya indah, ya. Terima kasih sudah bertahan bersamaku.",
        bg: ASSETS.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'tersenyum'), charRight: "",
        unlockQuote: "quote_alexandra",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    /* ================= RUTE KIRANA ================= */
    rute_b1: {
        speaker: "Kirana",
        text: "Asyik, ada bala bantuan! Sini, tanganmu masih bersih kan? Pegangin kanvas ini dulu!",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Bantu pegang kanvas...", nextScene: "rute_b1_busari" }]
    },
    rute_b1_busari: {
        speaker: "Bu Sari",
        text: "Wah, tumben Kirana nggak ngusir orang di hari pertama. Tolong dibantu terus ya, dia susah kerja bareng orang lain biasanya.",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: img('buSari', 'normal'), charRight: img('kirana', 'ceria'),
        choices: [{ text: "Lanjut membantu sampai sore...", nextScene: "rute_b2" }]
    },
    rute_b2: {
        speaker: "Kirana",
        text: "...Kadang aku takut, semua orang cuma suka 'Kirana yang jago gambar', bukan aku yang beneran.",
        bg: ASSETS.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'cemas'),
        choices: [
            { text: "Aku suka kamu bukan karena kamu jago gambar.", nextScene: "ending_santuy" },
            { text: "(diam, tidak tahu harus bilang apa)", nextScene: "ending_bad" },
        ]
    },
    ending_santuy: {
        speaker: "Kirana",
        text: "Itu... kalimat paling nggak romantis tapi paling bikin aku pengen nangis yang pernah aku denger. Makasih ya.",
        bg: ASSETS.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: img('kirana', 'terharu'),
        unlockQuote: "quote_kirana",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    /* ================= ENDING NETRAL/BAD ================= */
    ending_bad: {
        speaker: "Pak Hendra",
        text: "Adi... Bapak nggak bisa maksa kamu jujur sama perasaanmu sendiri. Tapi coba pikirkan lagi baik-baik, ya.",
        bg: ASSETS.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'tegas'), charRight: "",
        unlockQuote: "quote_guru",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
};

/* ------------------------------------------------------------
   5. NAVIGASI ANTAR LAYAR
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
   6. ENGINE UTAMA
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
