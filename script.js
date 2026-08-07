let playerGender = '';
let playerName = '';
let namaKetos = '';
let namaAnakSeni = '';
let imgPlayer = ''; // Tambahin variabel ini buat nyimpen gambar player yang lagi main!

// --- 1. TEMPAT MASUKIN LINK GAMBAR ---
const ASSETS = {
    // ... (background dan karakter lain tetep sama) ...
    
    // Tambahin aset buat Player:
    charPlayerCowok: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adit&clothing=shirt", 
    charPlayerCewek: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adinda&clothing=shirt",
    bgLorong: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80",
    bgRooftop: "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?w=900&q=80",
    bgPerpus: "https://images.unsplash.com/photo-1568667256549-094345857637?w=900&q=80",
    bgTaman: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?w=900&q=80",
    
    charKetos: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raka&clothing=blazerAndShirt&accessories=prescription02", 
    charSeni: "https://api.dicebear.com/7.x/avataaars/svg?seed=Devan&clothing=hoodie",
    charGuru: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hartono&top=shortHair&facialHair=mustache" // Gambar Pak Guru
   };

// --- 2. KOLEKSI QUOTES (MAKIN BANYAK) ---
const allQuotes = {
    quote_raka: "Logika memang penting, tapi keberanianmu menemaniku di saat sulit adalah rumus yang tak terduga.",
    quote_devan: "Karya seni terindah bukan dari kanvas mahal, tapi dari momen tak terduga bersamamu.",
    quote_normal: "Kadang kita nggak butuh akhir yang romantis, cukup persahabatan konyol yang bikin masa SMA berkesan.",
    quote_bad: "Ego yang tinggi hanya akan meruntuhkan panggung yang susah payah dibangun bersama.",
    quote_guru: "Kedisiplinan itu pahit di awal, tapi penyesalan main game saat jam pelajaran jauh lebih pahit.",
    quote_secret: "Daripada pusing mikirin drama panitia, mending push rank sampai Mythic! (Error: Notifikasi Dihapus)."
};

// --- 3. ALUR CERITA (ZIG-ZAG & BERCABANG) ---
const storyData = {
    // --- PROLOG ---
    prolog_1: {
        speaker: "Narator", // Kotak nama bakal otomatis hilang!
        text: "Sore itu, angin berhembus pelan di koridor SMA Nusantara. Sekolah sudah sepi, tapi kamu masih duduk di kelas sambil asyik push rank.",
        bg: ASSETS.bgLorong, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "prolog_2" }]
    },
    prolog_2: {
        speaker: "Pak Hartono",
        text: "HEH! Kamu ini jam segini bukannya pulang malah nge-game terus. Sini HP kamu bapak sita!",
        bg: ASSETS.bgLorong, charLeft: ASSETS.charGuru, charRight: "", // Pak Guru Muncul!
        choices: [{ text: "Maaf Pak! Syarat balikinnya gimana?", nextScene: "prolog_3" }]
    },
    prolog_3: {
        speaker: "Pak Hartono",
        text: "Kamu harus gabung panitia festival bantu {ketos} dan {seni}. Kalau festival berantakan, HP kamu bapak sita sampai lulus!",
        bg: ASSETS.bgLorong, charLeft: ASSETS.charGuru, charRight: "",
        choices: [{ text: "Bergegas ke ruang panitia...", nextScene: "konflik_awal" }]
    },

    // --- PERCABANGAN UTAMA ---
    konflik_awal: {
        speaker: "Narator",
        text: "Di ruang panitia, {ketos} menggebrak meja dengan proposal elegan, sementara {seni} bersikeras pakai konsep daur ulang.",
        bg: ASSETS.bgLorong, charLeft: ASSETS.charKetos, charRight: ASSETS.charSeni,
        choices: [
            { text: "Dukung {ketos} (Rute A1: Ambis)", nextScene: "rute_a1" },
            { text: "Dukung {seni} (Rute B1: Santuy)", nextScene: "rute_b1" },
            { text: "Tinggalin mereka, tidur di kelas (Secret Route)", nextScene: "rute_secret" }
        ]
    },

    // --- RUTE A1 (Fokus Ketos) ---
    rute_a1: {
        speaker: "{ketos}",
        text: "Pilihan logis. Temani aku ke perpustakaan sekarang, kita harus merombak anggaran ini sampai selesai.",
        bg: ASSETS.bgPerpus, charLeft: ASSETS.charKetos, charRight: "",
        choices: [{ text: "Lanjut ke Perpus...", nextScene: "rute_a1_lanjut" }]
    },
    rute_a1_lanjut: {
        speaker: "Narator",
        text: "Di perpustakaan, {ketos} kelihatan sangat lelah dan mulai kehilangan fokus membaca angka-angka.",
        bg: ASSETS.bgPerpus, charLeft: ASSETS.charKetos, charRight: "",
        choices: [
            { text: "Bantu dia menghitung sampai selesai (Tetap di Rute A - Lanjut A2)", nextScene: "rute_a2" },
            { text: "Tarik tangannya, ajak cari udara segar ke taman (Nyebrang ke Rute B!)", nextScene: "cross_a_to_b" } // ZIG-ZAG!
        ]
    },

    // --- RUTE B1 (Fokus Seni) ---
    rute_b1: {
        speaker: "{seni}",
        text: "Asyik! Keputusan bagus. Mending sekarang kita cabut ke taman belakang, dengerin ide liarku.",
        bg: ASSETS.bgTaman, charLeft: "", charRight: ASSETS.charSeni,
        choices: [{ text: "Ikut ke taman...", nextScene: "rute_b1_lanjut" }]
    },
    rute_b1_lanjut: {
        speaker: "Narator",
        text: "Di taman, {seni} malah asyik main gitar dan lupa soal dekorasi panggung.",
        bg: ASSETS.bgTaman, charLeft: "", charRight: ASSETS.charSeni,
        choices: [
            { text: "Biarkan dia mencari inspirasi (Tetap di Rute B - Lanjut B2)", nextScene: "rute_b2" },
            { text: "Tegur dia dan paksa kerjain proposal (Nyebrang ke Rute A!)", nextScene: "cross_b_to_a" } // ZIG-ZAG!
        ]
    },

    // --- CROSS ROUTES (ZIG-ZAG SCENES) ---
    cross_a_to_b: {
        speaker: "{ketos}",
        text: "Eh? Mau ke mana? ...Taman? Hmm, sesekali keluar dari logika mungkin nggak buruk.",
        bg: ASSETS.bgTaman, charLeft: ASSETS.charKetos, charRight: ASSETS.charSeni,
        choices: [{ text: "Berakhir kerja bareng {seni} juga (Normal Ending)", nextScene: "ending_normal" }]
    },
    cross_b_to_a: {
        speaker: "{seni}",
        text: "Bawel banget sih kayak {ketos}. Ya udah, ayo kita ke perpus ngerjain proposal yang ngebosenin itu.",
        bg: ASSETS.bgPerpus, charLeft: ASSETS.charKetos, charRight: ASSETS.charSeni,
        choices: [{ text: "Ketemu {ketos} di perpus (Normal Ending)", nextScene: "ending_normal" }]
    },

    // --- RUTE A2 & B2 (CLIMAX SEBELUM ENDING) ---
    rute_a2: {
        speaker: "{ketos}",
        text: "Anggarannya beres! Tapi... vendor panggung tiba-tiba membatalkan pesanan kita secara sepihak!",
        bg: ASSETS.bgLorong, charLeft: ASSETS.charKetos, charRight: "",
        choices: [
            { text: "Genggam tangannya, cari solusi bareng (True Ambis End)", nextScene: "ending_ambis" },
            { text: "Panik dan menyalahkan {ketos} (Bad End)", nextScene: "ending_bad" }
        ]
    },
    rute_b2: {
        speaker: "{seni}",
        text: "Dekorasi dari barang bekasnya udah siap, tapi sekolah tiba-tiba melarang konsep ini dipakai!",
        bg: ASSETS.bgLorong, charLeft: "", charRight: ASSETS.charSeni,
        choices: [
            { text: "Bela {seni} di depan guru (True Santuy End)", nextScene: "ending_santuy" },
            { text: "Nyerah dan setuju sama guru (Bad End)", nextScene: "ending_bad" }
        ]
    },

    // --- ENDINGS ---
    ending_ambis: {
        speaker: "{ketos}",
        text: "Berkat solusimu, festival sukses besar. Malam ini bintangnya indah ya... Terima kasih sudah bertahan bersamaku.",
        bg: ASSETS.bgRooftop, charLeft: ASSETS.charKetos, charRight: "",
        unlockQuote: "quote_raka",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    ending_santuy: {
        speaker: "{seni}",
        text: "Panggung ini keren banget karena kamu percaya sama seniku. Lagu ini... spesial buat kamu.",
        bg: ASSETS.bgRooftop, charLeft: "", charRight: ASSETS.charSeni,
        unlockQuote: "quote_devan",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    ending_normal: {
        speaker: "Narator",
        text: "Kalian bertiga akhirnya bekerja sama. Tidak ada kisah romantis, tapi kalian sering nongkrong di kantin sebagai sahabat karib.",
        bg: ASSETS.bgLorong, charLeft: ASSETS.charKetos, charRight: ASSETS.charSeni,
        unlockQuote: "quote_normal",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    ending_bad: {
        speaker: "Narator",
        text: "Kepanitiaan bubar jalan. Panggung berantakan. Pak Hartono menahan HP-mu selamanya. Nasib...",
        bg: ASSETS.bgLorong, charLeft: ASSETS.charGuru, charRight: "",
        unlockQuote: "quote_bad",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_secret: {
        speaker: "Pak Hartono",
        text: "KAMU MALAH TIDUR?! Bagus! Berani-beraninya. HP kamu bapak lelang buat dana sekolah!",
        bg: ASSETS.bgLorong, charLeft: ASSETS.charGuru, charRight: "",
        unlockQuote: "quote_secret",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    }
};

// --- FUNGSI GAME ---
function startGame(gender) {
    playerGender = gender;
    
    if (gender === 'cowok') {
        playerName = 'Adit';
        namaKetos = 'Rania';   
        namaAnakSeni = 'Danisa'; 
    } else {
        playerName = 'Adinda';
        namaKetos = 'Raka';    
        namaAnakSeni = 'Devan';  
    }

    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    loadScene('prolog_1'); 
}

function loadScene(sceneKey) {
    if (sceneKey === 'menu') {
        backToMenu();
        return;
    }

    const scene = storyData[sceneKey];
    let processedText = scene.text.replace(/{ketos}/g, namaKetos).replace(/{seni}/g, namaAnakSeni);
    let processedSpeaker = scene.speaker.replace(/{ketos}/g, namaKetos).replace(/{seni}/g, namaAnakSeni);

    // LOGIKA MENYEMBUNYIKAN KOTAK NAMA JIKA NARATOR
    const speakerBox = document.getElementById('speaker-name-box');
    if (processedSpeaker === "Narator") {
        speakerBox.classList.add('hide-name-box'); // Hilangkan kotak nama
    } else {
        speakerBox.classList.remove('hide-name-box'); // Munculkan lagi
        document.getElementById('speaker-name').innerText = processedSpeaker;
    }

    document.getElementById('dialogue-text').innerText = processedText;
    document.getElementById('background-image').style.backgroundImage = `url('${scene.bg}')`;

    // Render Gambar Karakter Kiri & Kanan
    const charL = document.getElementById('char-left');
    if (scene.charLeft && scene.charLeft !== "") {
        charL.src = scene.charLeft;
        charL.classList.remove('hidden');
    } else {
        charL.classList.add('hidden');
    }

    const charR = document.getElementById('char-right');
    if (scene.charRight && scene.charRight !== "") {
        charR.src = scene.charRight;
        charR.classList.remove('hidden');
    } else {
        charR.classList.add('hidden');
    }

    // Tembak Notif
    if (scene.unlockQuote) saveQuote(scene.unlockQuote);

    // Render Tombol
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = ''; 

    scene.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        let choiceText = choice.text.replace(/{ketos}/g, namaKetos).replace(/{seni}/g, namaAnakSeni);
        btn.innerText = choiceText;
        btn.onclick = () => loadScene(choice.nextScene);
        choicesContainer.appendChild(btn);
    });
}

function saveQuote(quoteId) {
    if (!unlockedQuotes.includes(quoteId)) {
        unlockedQuotes.push(quoteId);
        localStorage.setItem('vn_quotes', JSON.stringify(unlockedQuotes));
        
        const toast = document.getElementById('toast-notif');
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 500); 
        }, 4000);
    }
}

function showGallery() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('gallery-screen').classList.remove('hidden');
    const list = document.getElementById('quotes-list');
    list.innerHTML = '';
    
    // Looping semua quote yang ada di sistem
    for (const [key, text] of Object.entries(allQuotes)) {
        const item = document.createElement('div');
        item.className = 'quote-item';
        if (unlockedQuotes.includes(key)) {
            item.innerHTML = `<strong>Terbuka:</strong> "${text}"`;
        } else {
            item.innerHTML = `🔒 <em>(Mainkan rute lain untuk membuka)</em>`;
        }
        list.appendChild(item);
    }
}

function backToMenu() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('gallery-screen').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
}
