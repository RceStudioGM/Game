let playerGender = '';
let playerName = '';
let namaKetos = '';
let namaAnakSeni = '';
let unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];

const allQuotes = {
    quote_raka: "Kadang, keajaiban bukan datang dari rencana yang sempurna, tapi dari seseorang yang berani menggenggam tanganmu saat keadaan sedang gelap.",
    quote_devan: "Warna yang paling indah bukan yang paling cerah, tapi warna yang berani muncul di atas kanvas yang pudar.",
    quote_bad: "Kesempatan yang terlewat tidak akan pernah mengirimkan notifikasi untuk kedua kalinya."
};

// URL Background & Karakter (Placeholder dari internet yang sesuai karakteristik)
const bgLorong = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80"; 
const bgRooftop = "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?w=900&q=80";

// Ketos (Rapi, kemeja/blazer) & Seni (Santuy, jaket/hoodie)
const imgKetos = "https://api.dicebear.com/7.x/avataaars/svg?seed=Raka&clothing=blazerAndShirt&accessories=prescription02"; 
const imgSeni = "https://api.dicebear.com/7.x/avataaars/svg?seed=Devan&clothing=hoodie&top=shortHairSides"; 

const storyData = {
    // --- ADEGAN PENDAHULUAN ---
    prolog_1: {
        speaker: "Narator",
        text: "Sore itu, angin berhembus pelan di koridor SMA Nusantara. Sekolah sudah sepi, tapi kamu masih duduk di kelas sambil asyik push rank.",
        bg: bgLorong, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "prolog_2" }]
    },
    prolog_2: {
        speaker: "Pak Hartono (Guru)",
        text: "HEH! Kamu ini jam segini bukannya pulang malah main HP terus. Sini HP kamu bapak sita! Syaratnya kamu harus gabung panitia bareng {ketos} dan {seni}.",
        bg: bgLorong, charLeft: "", charRight: "",
        choices: [{ text: "Bergegas ke ruang panitia...", nextScene: "konflik_awal" }]
    },

    // --- ADEGAN DUA KARAKTER (MUNCUL BERSAMAAN) ---
    konflik_awal: {
        speaker: "Narator",
        text: "Di ruang panitia, suasananya tegang. {ketos} berdiri kaku memegang proposal, sementara {seni} bersandar santai di tembok.",
        bg: bgLorong, 
        charLeft: imgKetos, // Ketos di kiri
        charRight: imgSeni, // Anak Seni di kanan
        choices: [{ text: "Lanjut...", nextScene: "konflik_dialog1" }]
    },
    konflik_dialog1: {
        speaker: "{ketos}",
        text: "Proposal ini berantakan! Kita butuh dekorasi panggung yang elegan, bukan kayak rongsokan pasar loak!",
        bg: bgLorong, 
        charLeft: imgKetos, 
        charRight: imgSeni,
        choices: [{ text: "Lanjut...", nextScene: "konflik_dialog2" }]
    },
    konflik_dialog2: {
        speaker: "{seni}",
        text: "Elegan itu mahal, Bos. Mending pakai barang daur ulang. Estetika *street art* tuh lagi tren tau.",
        bg: bgLorong, 
        charLeft: imgKetos, 
        charRight: imgSeni,
        choices: [
            { text: "Bela {ketos} (Setuju desain elegan)", nextScene: "ending_ambis" },
            { text: "Bela {seni} (Setuju desain hemat & nyeni)", nextScene: "ending_santuy" }
        ]
    },

    // --- ENDING ---
    ending_ambis: {
        speaker: "{ketos}",
        text: "Aku tahu kamu pasti paham soal logika dan efisiensi. Terima kasih ya. Omong-omong... mau lihat bintang di atap sebentar?",
        bg: bgRooftop, 
        charLeft: imgKetos, // Cuma Ketos yang muncul
        charRight: "",
        unlockQuote: "quote_raka",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    ending_santuy: {
        speaker: "{seni}",
        text: "Hahaha, bener kan kataku! Sebagai hadiah udah percaya sama karyaku, lagu di atap ini spesial buat kamu.",
        bg: bgRooftop, 
        charLeft: "",
        charRight: imgSeni, // Cuma Anak Seni yang muncul
        unlockQuote: "quote_devan",
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

    // Update Nama dan Teks
    document.getElementById('speaker-name').innerText = processedSpeaker;
    document.getElementById('dialogue-text').innerText = processedText;
    document.getElementById('background-image').style.backgroundImage = `url('${scene.bg}')`;

    // Render Karakter Kiri
    const charL = document.getElementById('char-left');
    if (scene.charLeft && scene.charLeft !== "") {
        charL.src = scene.charLeft;
        charL.classList.remove('hidden');
    } else {
        charL.classList.add('hidden');
    }

    // Render Karakter Kanan
    const charR = document.getElementById('char-right');
    if (scene.charRight && scene.charRight !== "") {
        charR.src = scene.charRight;
        charR.classList.remove('hidden');
    } else {
        charR.classList.add('hidden');
    }

    // Tembak Notifikasi kalau ada Quote
    if (scene.unlockQuote) {
        saveQuote(scene.unlockQuote);
    }

    // Render Tombol Pilihan
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
