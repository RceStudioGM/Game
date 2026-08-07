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

// URL Placeholder gambar (Ganti dengan nama filemu nanti, misal: 'kelas.jpg')
const bgLorong = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800"; 
const bgRooftop = "https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?w=800";
const charKetos = "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"; // Karakter kartun dummy
const charSeni = "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"; 

const storyData = {
    // --- ADEGAN PENDAHULUAN (TANPA PILIHAN) ---
    prolog_1: {
        speaker: "Narator",
        text: "Sore itu, angin berhembus pelan di koridor SMA Nusantara. Sekolah sudah sepi, tapi kamu masih duduk di kelas sambil asyik push rank.",
        bg: bgLorong, char: "",
        choices: [{ text: "Lanjut...", nextScene: "prolog_2" }]
    },
    prolog_2: {
        speaker: "Pak Hartono (Guru)",
        text: "HEH! Kamu ini jam segini bukannya pulang malah main HP terus. Sini HP kamu bapak sita!",
        bg: bgLorong, char: "",
        choices: [{ text: "Lanjut...", nextScene: "prolog_3" }]
    },
    prolog_3: {
        speaker: "Kamu",
        text: "Yah, Pak! Jangan dong, besok ada event gacha! Gimana caranya biar HP saya balik?",
        bg: bgLorong, char: "",
        choices: [{ text: "Lanjut...", nextScene: "prolog_4" }]
    },
    prolog_4: {
        speaker: "Pak Hartono",
        text: "Syaratnya gampang. Kamu harus gabung jadi panitia festival bantu {ketos} dan {seni}. Mereka berdua nggak akur. Kalau festival berantakan, HP kamu bapak sita sampai lulus!",
        bg: bgLorong, char: "",
        choices: [{ text: "Bergegas ke ruang panitia...", nextScene: "konflik_awal" }]
    },

    // --- ADEGAN BERCABANG (ADA PILIHAN) ---
    konflik_awal: {
        speaker: "Narator",
        text: "Di ruang panitia, suasananya tegang. {ketos} menggebrak meja, sementara {seni} asyik mainin senar gitarnya tanpa peduli.",
        bg: bgLorong, char: "",
        choices: [{ text: "Lanjut...", nextScene: "konflik_dialog" }]
    },
    konflik_dialog: {
        speaker: "{ketos}",
        text: "Proposal ini berantakan! Kita butuh dekorasi yang elegan, bukan kayak rongsokan pasar loak!",
        bg: bgLorong, char: charKetos, // Menampilkan gambar ketos
        choices: [
            { text: "Bela {ketos} (Setuju desain elegan)", nextScene: "ending_ambis" },
            { text: "Bela {seni} (Setuju desain hemat & nyeni)", nextScene: "ending_santuy" }
        ]
    },

    // --- ENDING ---
    ending_ambis: {
        speaker: "{ketos}",
        text: "Aku tahu kamu pasti paham soal efisiensi. Terima kasih ya. Omong-omong... mau lihat bintang di atap sebentar sebelum pulang?",
        bg: bgRooftop, char: charKetos,
        unlockQuote: "quote_raka", // Memicu notifikasi
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    ending_santuy: {
        speaker: "{seni}",
        text: "Hahaha, bener kan! Estetika itu nggak harus mahal. Sebagai hadiah, lagu di atap ini spesial buat kamu.",
        bg: bgRooftop, char: charSeni,
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
    
    loadScene('prolog_1'); // Mulai dari scene pertama narator
}

function loadScene(sceneKey) {
    if (sceneKey === 'menu') {
        backToMenu();
        return;
    }

    const scene = storyData[sceneKey];
    let processedText = scene.text.replace(/{ketos}/g, namaKetos).replace(/{seni}/g, namaAnakSeni);
    let processedSpeaker = scene.speaker.replace(/{ketos}/g, namaKetos).replace(/{seni}/g, namaAnakSeni);

    // Ganti warna teks Narator biar beda dari karakter
    let speakerEl = document.getElementById('speaker-name');
    speakerEl.innerText = processedSpeaker;
    if (processedSpeaker === "Narator") {
        speakerEl.style.color = "#bdc3c7"; 
    } else {
        speakerEl.style.color = "#f1c40f"; 
    }

    document.getElementById('dialogue-text').innerText = processedText;
    document.getElementById('background-image').style.backgroundImage = `url('${scene.bg}')`;

    // Atur gambar karakter
    const charImg = document.getElementById('character-image');
    if (scene.char && scene.char !== "") {
        charImg.src = scene.char;
        charImg.classList.remove('hidden');
    } else {
        charImg.classList.add('hidden');
    }

    if (scene.unlockQuote) {
        saveQuote(scene.unlockQuote);
    }

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

// FUNGSI NOTIFIKASI TOAST IN-GAME
function saveQuote(quoteId) {
    if (!unlockedQuotes.includes(quoteId)) {
        unlockedQuotes.push(quoteId);
        localStorage.setItem('vn_quotes', JSON.stringify(unlockedQuotes));
        
        // Tampilkan Toast
        const toast = document.getElementById('toast-notif');
        toast.classList.remove('hidden');
        
        // Sedikit delay biar transisi CSS jalan
        setTimeout(() => toast.classList.add('show'), 100);

        // Sembunyikan otomatis setelah 4 detik
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 500); // Tunggu animasi slide selesai
        }, 4000);
    }
}

function showGallery() { /* Sama seperti sebelumnya */
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
            item.innerHTML = `🔒 <em>(Terkunci)</em>`;
        }
        list.appendChild(item);
    }
}

function backToMenu() { /* Sama seperti sebelumnya */
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('gallery-screen').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
}
