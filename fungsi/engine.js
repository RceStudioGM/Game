/* ============================================================
   engine.js — Sistem Engine Visual Novel (Tahan Banting)
   ============================================================ */

// Variabel posisi scene saat ini
let currentScene = 'common_hari1_1';

// Helper untuk memanggil gambar karakter
function img(charName, exprKey) {
    const folder = assets.CHARACTER_PATHS[charName];
    if (!folder) return ''; 
    return `assets/characters/${folder}/${exprKey}.png`;
}

// --- NAVIGASI LAYAR ---
function hideAllScreens() {
    ['main-menu', 'name-input-screen', 'game-screen', 'sub-menu-screen', 'profile-screen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
}

// --- CEK STATUS TOMBOL LANJUTKAN ---
function checkContinueAvailability() {
    const btn = document.getElementById('btn-continue');
    if (!btn) return;
    const hasSave = localStorage.getItem('vn_save_data');
    if (hasSave) {
        btn.disabled = false;
        btn.innerText = "▶ Lanjutkan";
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    } else {
        btn.disabled = true;
        btn.innerText = "🔒 (Belum Ada Save)";
        btn.style.opacity = "0.5";
        btn.style.cursor = "not-allowed";
    }
}

function backToMenu() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    checkContinueAvailability(); // Panggil fungsi yang ada di file yang sama!
}

// --- FUNGSI SAVE FLAGS (New Game+) ---
function saveFlags() {
    try { localStorage.setItem('vn_flags', JSON.stringify(window.gameFlags)); } catch (e) {}
}

// --- SETTINGS, GALLERY, PROFIL (Sama seperti sebelumnya) ---
function showSettings() { /* ... kode tetap sama ... */ }
function showGallery() { /* ... kode tetap sama ... */ }
function showProfiles() { /* ... kode tetap sama ... */ }
function saveQuote(quoteId) { /* ... kode tetap sama ... */ }

// --- ENGINE UTAMA LOAD SCENE ---
function loadScene(sceneKey) {
    if (sceneKey === 'menu') { backToMenu(); return; }

    // Simpan scene saat ini
    currentScene = sceneKey;

    const scene = storyData[sceneKey];
    if (!scene) { 
        console.error('Scene tidak ditemukan:', sceneKey); 
        return; 
    }

    // HANDLER PILIHAN UTAMA (New Game+)
    if (sceneKey === 'bab1_pilihan') {
        let baseChoices = [
            { text: "Bantu di Sekretariat OSIS bersama Alexandra", nextScene: "rute_a2a" },
            { text: "Bantu mural di Ruang Seni bersama Kirana", nextScene: "rute_b2b" },
            { text: "Coba jalani keduanya sekaligus, meski berat", nextScene: "rute_c2c" }
        ];
        if (window.gameFlags.routeA && window.gameFlags.routeB) {
            baseChoices.push({ text: "✨ Usulkan kolaborasi OSIS x Ruang Seni (Rute Rahasia)", nextScene: "rute_r1" });
        }
        scene.choices = baseChoices;
    }

    // HANDLER UNLOCK FLAG SAAT ENDING
    if (['rute_a6_ending1', 'rute_a6_ending2', 'rute_a6_ending_sahabat'].includes(sceneKey)) {
        if (!window.gameFlags.routeA) { window.gameFlags.routeA = true; saveFlags(); }
    }
    if (['rute_b7_ending1', 'rute_b7_ending2', 'rute_b7_ending_sahabat'].includes(sceneKey)) {
        if (!window.gameFlags.routeB) { window.gameFlags.routeB = true; saveFlags(); }
    }
    if (['rute_r_ending_1', 'rute_r_ending_2_a', 'rute_r_ending_2_b'].includes(sceneKey)) {
        if (!window.gameFlags.secretRoute) { window.gameFlags.secretRoute = true; saveFlags(); }
    }

    // PROSES TEKS
    const replaceTags = (str) => str
        .replace(/{alexandra}/g, 'Alexandra')
        .replace(/{kirana}/g, 'Kirana')
        .replace(/{player}/g, window.playerName);

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
    if (scene.charLeft) { charL.src = scene.charLeft; charL.classList.remove('hidden'); } 
    else { charL.classList.add('hidden'); }

    const charR = document.getElementById('char-right');
    if (scene.charRight) { charR.src = scene.charRight; charR.classList.remove('hidden'); } 
    else { charR.classList.add('hidden'); }

    if (scene.unlockQuote) saveQuote(scene.unlockQuote);

    // CHOICES
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    if (scene.choices.length === 1) {
        const btn = document.createElement('button');
        btn.className = 'choice-btn hidden';
        btn.innerText = replaceTags(scene.choices[0].text);
        btn.onclick = () => loadScene(scene.choices[0].nextScene);
        choicesContainer.appendChild(btn);

        const dialogBox = document.getElementById('dialogue-box');
        dialogBox.onclick = () => {
            if (!document.getElementById('game-screen').classList.contains('hidden')) {
                btn.click();
            }
        };
        document.getElementById('dialogue-text').style.cursor = 'pointer';
        document.getElementById('dialogue-text').title = 'Klik untuk melanjutkan...';
    } else {
        document.getElementById('dialogue-text').style.cursor = 'default';
        document.getElementById('dialogue-text').title = '';
        document.getElementById('dialogue-box').onclick = null;

        scene.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerText = replaceTags(choice.text);
            btn.onclick = () => loadScene(choice.nextScene);
            choicesContainer.appendChild(btn);
        });
    }
}

// Tambahkan fungsi Save Game ke dalam engine.js
function saveGame() {
    const saveData = {
        playerName: window.playerName,
        currentScene: currentScene,
        gameFlags: window.gameFlags,
        unlockedQuotes: window.unlockedQuotes
    };
    try {
        localStorage.setItem('vn_save_data', JSON.stringify(saveData));
        const toast = document.getElementById('toast-notif');
        toast.classList.remove('hidden');
        document.querySelector('#toast-notif h4').innerText = "✅ Tersimpan!";
        document.querySelector('#toast-notif p').innerText = "Progress game berhasil disimpan.";
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 500);
        }, 3000);
    } catch (e) {
        console.error("Gagal menyimpan game:", e);
    }
}

function continueGame() {
    try {
        const rawData = localStorage.getItem('vn_save_data');
        if (!rawData) { alert("Tidak ada data simpan yang ditemukan. Mulai game baru!"); return; }
        const saveData = JSON.parse(rawData);
        window.playerName = saveData.playerName || 'Adi';
        window.gameFlags = saveData.gameFlags || { routeA: false, routeB: false, secretRoute: false };
        window.unlockedQuotes = saveData.unlockedQuotes || [];
        try { localStorage.setItem('vn_quotes', JSON.stringify(window.unlockedQuotes)); } catch (e) {}
        saveFlags();

        hideAllScreens();
        document.getElementById('game-screen').classList.remove('hidden');
        loadScene(saveData.currentScene || 'common_hari1_1');
    } catch (e) {
        console.error("Gagal memuat game:", e);
        alert("Gagal memuat data simpan. File save mungkin korup.");
    }
}