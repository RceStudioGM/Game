/* ============================================================
   engine.js — Sistem Engine Visual Novel
   ============================================================ */

// Variabel posisi scene saat ini (untuk save/load)
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

function backToMenu() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    // Update status tombol Lanjutkan
    if (typeof checkContinueAvailability === 'function') checkContinueAvailability();
}

// --- SETTINGS & GALLERY ---
function showSettings() {
    hideAllScreens();
    document.getElementById('sub-menu-screen').classList.remove('hidden');
    document.getElementById('sub-menu-title').innerText = 'Pengaturan';
    document.getElementById('sub-menu-content').innerHTML = '<p style="opacity:.8">Pengaturan suara & teks belum tersedia di build ini.</p>';
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

// --- PROFIL KARAKTER ---
function showProfiles() {
    hideAllScreens();
    document.getElementById('profile-screen').classList.remove('hidden');
    const container = document.getElementById('profile-container');
    container.innerHTML = '';

    for (const [key, profile] of Object.entries(characterProfiles)) {
        const card = document.createElement('div');
        card.className = 'profile-card';

        let isUnlocked = false;
        if (!profile.unlockKey) {
            isUnlocked = true;
        } else if (profile.unlockKey === 'routeA' && gameFlags.routeA) {
            isUnlocked = true;
        } else if (profile.unlockKey === 'routeB' && gameFlags.routeB) {
            isUnlocked = true;
        } else if (profile.unlockKey === 'secretRoute' && gameFlags.secretRoute) {
            isUnlocked = true;
        }

        if (isUnlocked) {
            card.innerHTML = `
                <div class="profile-img">
                    <img src="${img(profile.id, 'netral')}" alt="${profile.name}" onerror="this.style.display='none'">
                </div>
                <div class="profile-info">
                    <h3>${profile.name}</h3>
                    <span class="profile-role">${profile.role}</span>
                    <p class="profile-desc">${profile.desc}</p>
                </div>
            `;
        } else {
            let lockText = "🔒 Terkunci";
            if (profile.unlockKey === 'routeA') lockText = "🔒 Selesaikan Rute Alexandra";
            else if (profile.unlockKey === 'routeB') lockText = "🔒 Selesaikan Rute Kirana";
            else if (profile.unlockKey === 'secretRoute') lockText = "🔒 Selesaikan Rute Rahasia";

            card.innerHTML = `
                <div class="profile-img locked">
                    <span class="lock-icon">🔒</span>
                </div>
                <div class="profile-info">
                    <h3 style="color:#7f8c8d;">???</h3>
                    <span class="profile-role">${lockText}</span>
                </div>
            `;
        }
        container.appendChild(card);
    }
}

// --- SAVE QUOTE (UNLOCK) ---
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

// --- ENGINE UTAMA LOAD SCENE ---
function loadScene(sceneKey) {
    if (sceneKey === 'menu') { backToMenu(); return; }

    // Simpan scene saat ini
    currentScene = sceneKey;

    const scene = storyData[sceneKey];
    if (!scene) { console.error('Scene tidak ditemukan:', sceneKey); return; }

    // HANDLER PILIHAN UTAMA (New Game+)
    if (sceneKey === 'bab1_pilihan') {
        let baseChoices = [
            { text: "Bantu di Sekretariat OSIS bersama Alexandra", nextScene: "rute_a2a" },
            { text: "Bantu mural di Ruang Seni bersama Kirana", nextScene: "rute_b2b" },
            { text: "Coba jalani keduanya sekaligus, meski berat", nextScene: "rute_c2c" }
        ];
        if (gameFlags.routeA && gameFlags.routeB) {
            baseChoices.push({ text: "✨ Usulkan kolaborasi OSIS x Ruang Seni (Rute Rahasia)", nextScene: "rute_r1" });
        }
        scene.choices = baseChoices;
    }

    // HANDLER UNLOCK FLAG
    if (['rute_a6_ending1', 'rute_a6_ending2', 'rute_a6_ending_sahabat'].includes(sceneKey)) {
        if (!gameFlags.routeA) { gameFlags.routeA = true; saveFlags(); }
    }
    if (['rute_b7_ending1', 'rute_b7_ending2', 'rute_b7_ending_sahabat'].includes(sceneKey)) {
        if (!gameFlags.routeB) { gameFlags.routeB = true; saveFlags(); }
    }
    if (['rute_r_ending_1', 'rute_r_ending_2_a', 'rute_r_ending_2_b'].includes(sceneKey)) {
        if (!gameFlags.secretRoute) { gameFlags.secretRoute = true; saveFlags(); }
    }

    // PROSES TEKS
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
        // Mode "Klik Lanjut"
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