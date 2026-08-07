// --- VARIABEL GLOBAL ---
let playerGender = '';
let playerName = '';
let namaKetos = '';
let namaAnakSeni = '';

// Kumpulan ID Quote yang udah didapet (Ambil dari Local Storage)
let unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];

// Data Quotes yang bisa dikoleksi
const allQuotes = {
    quote_raka: "Kadang, keajaiban bukan datang dari rencana yang sempurna, tapi dari seseorang yang berani menggenggam tanganmu saat keadaan sedang gelap.",
    quote_devan: "Warna yang paling indah bukan yang paling cerah, tapi warna yang berani muncul di atas kanvas yang pudar.",
    quote_bad: "Kesempatan yang terlewat tidak akan pernah mengirimkan notifikasi untuk kedua kalinya."
};

// --- DATA CERITA (NODE SYSTEM) ---
// Pakai {ketos} dan {seni} biar namanya otomatis ganti sesuai gender!
const storyData = {
    prolog: {
        speaker: "Pak Hartono",
        text: "Heh! Ngapain main HP terus di kelas? HP kamu bapak sita! Syarat ambilnya, kamu harus bantu {ketos} dan {seni} ngurus dekorasi panggung festival!",
        bg: "lorong.jpg", // Nanti kamu bisa siapin gambar lorong.jpg di foldermu
        choices: [
            { text: "Maaf Pak, iya saya bantu...", nextScene: "rapat_pertama" }
        ]
    },
    rapat_pertama: {
        speaker: "Pemikiranmu",
        text: "Di ruang rapat, {ketos} ngotot mau konsep mewah, tapi {seni} mau konsep daur ulang yang hemat. Mereka berantem, aku harus dukung siapa?",
        bg: "ruang_osis.jpg",
        choices: [
            { text: "Dukung ide {ketos} (Konsep Mewah)", nextScene: "rute_ambis" },
            { text: "Dukung ide {seni} (Konsep Hemat)", nextScene: "rute_santuy" }
        ]
    },
    rute_ambis: {
        speaker: "{ketos}",
        text: "Makasih udah dukung ideku. Kamu mending ikut aku lembur di perpus malam ini buat revisi proposal.",
        bg: "perpus.jpg",
        choices: [
            { text: "Lanjut ke Hari H (Dapat True Ending Ambis)", nextScene: "ending_ambis" },
            { text: "Kabur aja ah capek (Dapat Bad Ending)", nextScene: "ending_bad" }
        ]
    },
    rute_santuy: {
        speaker: "{seni}",
        text: "Asyik! Keputusan bagus. Mending sekarang kita cabut ke taman belakang, dengerin aku main gitar.",
        bg: "taman.jpg",
        choices: [
            { text: "Lanjut ke Hari H (Dapat True Ending Santuy)", nextScene: "ending_santuy" },
            { text: "Marahin karena males-malesan (Dapat Bad Ending)", nextScene: "ending_bad" }
        ]
    },
    ending_ambis: {
        speaker: "{ketos}",
        text: "Panggungnya sukses! Makasih ya udah nemenin lembur. Kamu... mau nonton kembang api bareng di atap?",
        bg: "rooftop.jpg",
        unlockQuote: "quote_raka", // Ini trigger buat buka gembok quote!
        choices: [
            { text: "Kembali ke Menu Utama", nextScene: "menu" }
        ]
    },
    ending_santuy: {
        speaker: "{seni}",
        text: "Lagu tadi di panggung... aku ciptain khusus buat kamu. Makasih udah percaya sama seniku.",
        bg: "rooftop.jpg",
        unlockQuote: "quote_devan",
        choices: [
            { text: "Kembali ke Menu Utama", nextScene: "menu" }
        ]
    },
    ending_bad: {
        speaker: "Pemikiranmu",
        text: "Panggungnya roboh karena kalian nggak kompak. HP-ku ditahan sampe lulus. Nasib...",
        bg: "lorong.jpg",
        unlockQuote: "quote_bad",
        choices: [
            { text: "Kembali ke Menu Utama", nextScene: "menu" }
        ]
    }
};

// --- FUNGSI-FUNGSI GAME ---

// 1. Mulai Game & Set Gender Swap
function startGame(gender) {
    playerGender = gender;
    
    if (gender === 'cowok') {
        playerName = 'Adit';
        namaKetos = 'Rania';   // Target cewek
        namaAnakSeni = 'Danisa'; // Target cewek
    } else {
        playerName = 'Adinda';
        namaKetos = 'Raka';    // Target cowok
        namaAnakSeni = 'Devan';  // Target cowok
    }

    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    loadScene('prolog'); // Mulai dari awal cerita
}

// 2. Muat Adegan (Render Scene)
function loadScene(sceneKey) {
    if (sceneKey === 'menu') {
        backToMenu();
        return;
    }

    const scene = storyData[sceneKey];
    
    // Ganti kata kunci {ketos} dan {seni} jadi nama asli sesuai gender
    let processedText = scene.text.replace(/{ketos}/g, namaKetos).replace(/{seni}/g, namaAnakSeni);
    let processedSpeaker = scene.speaker.replace(/{ketos}/g, namaKetos).replace(/{seni}/g, namaAnakSeni);

    // Tampilkan ke layar
    document.getElementById('speaker-name').innerText = processedSpeaker;
    document.getElementById('dialogue-text').innerText = processedText;
    
    // Nanti kalau gambar udah siap, kodenya ini:
    // document.getElementById('background-image').style.backgroundImage = `url('${scene.bg}')`;

    // Cek apakah scene ini ngasih Quote baru?
    if (scene.unlockQuote) {
        saveQuote(scene.unlockQuote);
    }

    // Tampilkan tombol pilihan
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = ''; // Kosongkan tombol lama

    scene.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        
        // Ganti teks nama di dalam pilihan juga
        let choiceText = choice.text.replace(/{ketos}/g, namaKetos).replace(/{seni}/g, namaAnakSeni);
        btn.innerText = choiceText;
        
        btn.onclick = () => loadScene(choice.nextScene);
        choicesContainer.appendChild(btn);
    });
}

// 3. Simpan Quote ke Local Storage
function saveQuote(quoteId) {
    if (!unlockedQuotes.includes(quoteId)) {
        unlockedQuotes.push(quoteId);
        localStorage.setItem('vn_quotes', JSON.stringify(unlockedQuotes));
        alert("✨ Kamu membuka Quote Baru! Cek di Galeri.");
    }
}

// 4. Navigasi Menu & Galeri
function showGallery() {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('gallery-screen').classList.remove('hidden');
    
    const list = document.getElementById('quotes-list');
    list.innerHTML = ''; // Kosongin dulu

    // Looping semua quote yang ada di sistem
    for (const [key, text] of Object.entries(allQuotes)) {
        const item = document.createElement('div');
        item.className = 'quote-item';
        
        if (unlockedQuotes.includes(key)) {
            item.innerHTML = `<strong>Terbuka:</strong> "${text}"`;
        } else {
            item.innerHTML = `🔒 <em>(Quote ini masih terkunci. Mainkan rute lain untuk membuka!)</em>`;
        }
        list.appendChild(item);
    }
}

function backToMenu() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('gallery-screen').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
}
