/* ============================================================
   engine.js — Mesin Game Utama
   ============================================================ */

let currentScene = 'prolog_1';

function img(charName, exprKey) {
    const folder = assets.CHARACTER_PATHS[charName];
    if (!folder) return ''; 
    return `assets/characters/${folder}/${exprKey}.png`;
}

function hideAllScreens() {
    ['main-menu', 'name-input-screen', 'game-screen', 'sub-menu-screen', 'profile-screen'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });
}

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
    checkContinueAvailability();
}

function saveFlags() {
    try { localStorage.setItem('vn_flags', JSON.stringify(window.gameFlags)); } catch (e) {}
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
        item.innerHTML = window.unlockedQuotes.includes(key)
            ? `<strong>Terbuka:</strong> "${text}"`
            : `🔒 <em>(Mainkan rute lain untuk membuka)</em>`;
        box.appendChild(item);
    }
}

function showProfiles() {
    hideAllScreens();
    document.getElementById('profile-screen').classList.remove('hidden');
    const container = document.getElementById('profile-container');
    container.innerHTML = '';

    for (const [key, profile] of Object.entries(characterProfiles)) {
        const card = document.createElement('div');
        card.className = 'profile-card';
        let isUnlocked = false;
        if (!profile.unlockKey) isUnlocked = true;
        else if (profile.unlockKey === 'routeA' && window.gameFlags.routeA) isUnlocked = true;
        else if (profile.unlockKey === 'routeB' && window.gameFlags.routeB) isUnlocked = true;
        else if (profile.unlockKey === 'secretRoute' && window.gameFlags.secretRoute) isUnlocked = true;

        if (isUnlocked) {
            card.innerHTML = `
                <div class="profile-img"><img src="${img(profile.id, 'netral')}" alt="${profile.name}" onerror="this.style.display='none'"></div>
                <div class="profile-info"><h3>${profile.name}</h3><span class="profile-role">${profile.role}</span><p class="profile-desc">${profile.desc}</p></div>
            `;
        } else {
            let lockText = "🔒 Terkunci";
            if (profile.unlockKey === 'routeA') lockText = "🔒 Selesaikan Rute Alexandra";
            else if (profile.unlockKey === 'routeB') lockText = "🔒 Selesaikan Rute Kirana";
            else if (profile.unlockKey === 'secretRoute') lockText = "🔒 Selesaikan Rute Rahasia";
            card.innerHTML = `
                <div class="profile-img locked"><span class="lock-icon">🔒</span></div>
                <div class="profile-info"><h3 style="color:#7f8c8d;">???</h3><span class="profile-role">${lockText}</span></div>
            `;
        }
        container.appendChild(card);
    }
}

function saveQuote(quoteId) {
    if (window.unlockedQuotes.includes(quoteId)) return;
    window.unlockedQuotes.push(quoteId);
    try { localStorage.setItem('vn_quotes', JSON.stringify(window.unlockedQuotes)); } catch (e) {}
    const toast = document.getElementById('toast-notif');
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 500);
    }, 4000);
}

function loadScene(sceneKey) {
    if (sceneKey === 'menu') { backToMenu(); return; }
    currentScene = sceneKey;
    const scene = storyData[sceneKey];
    if (!scene) { console.error('Scene tidak ditemukan:', sceneKey); return; }

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

    if (['rute_a6_ending1', 'rute_a6_ending2', 'rute_a6_ending_sahabat'].includes(sceneKey)) {
        if (!window.gameFlags.routeA) { window.gameFlags.routeA = true; saveFlags(); }
    }
    if (['rute_b7_ending1', 'rute_b7_ending2', 'rute_b7_ending_sahabat'].includes(sceneKey)) {
        if (!window.gameFlags.routeB) { window.gameFlags.routeB = true; saveFlags(); }
    }
    if (['rute_r_ending_1', 'rute_r_ending_2_a', 'rute_r_ending_2_b'].includes(sceneKey)) {
        if (!window.gameFlags.secretRoute) { window.gameFlags.secretRoute = true; saveFlags(); }
    }

    const replaceTags = (str) => str
        .replace(/{alexandra}/g, 'Alexandra')
        .replace(/{kirana}/g, 'Kirana')
        .replace(/{player}/g, window.playerName);

    const processedText = replaceTags(scene.text);
    const processedSpeaker = replaceTags(scene.speaker);

    const speakerBox = document.getElementById('speaker-name-box');
    if (processedSpeaker === "Narator") speakerBox.classList.add('hide-name-box');
    else { speakerBox.classList.remove('hide-name-box'); document.getElementById('speaker-name').innerText = processedSpeaker; }

    document.getElementById('dialogue-text').innerText = processedText;
    document.getElementById('background-image').style.backgroundImage = `url('${scene.bg}')`;

    const charL = document.getElementById('char-left');
    if (scene.charLeft) { charL.src = scene.charLeft; charL.classList.remove('hidden'); } else { charL.classList.add('hidden'); }
    const charR = document.getElementById('char-right');
    if (scene.charRight) { charR.src = scene.charRight; charR.classList.remove('hidden'); } else { charR.classList.add('hidden'); }

    if (scene.unlockQuote) saveQuote(scene.unlockQuote);

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    if (scene.choices.length === 1) {
        const btn = document.createElement('button');
        btn.className = 'choice-btn hidden';
        btn.innerText = replaceTags(scene.choices[0].text);
        btn.onclick = () => loadScene(scene.choices[0].nextScene);
        choicesContainer.appendChild(btn);
        document.getElementById('dialogue-box').onclick = () => { if (!document.getElementById('game-screen').classList.contains('hidden')) btn.click(); };
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

function saveGame() {
    const saveData = { playerName: window.playerName, currentScene: currentScene, gameFlags: window.gameFlags, unlockedQuotes: window.unlockedQuotes };
    try {
        localStorage.setItem('vn_save_data', JSON.stringify(saveData));
        const toast = document.getElementById('toast-notif');
        toast.classList.remove('hidden');
        document.querySelector('#toast-notif h4').innerText = "✅ Tersimpan!";
        document.querySelector('#toast-notif p').innerText = "Progress game berhasil disimpan.";
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.classList.add('hidden'), 500); }, 3000);
    } catch (e) { console.error("Gagal menyimpan game:", e); }
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
        loadScene(saveData.currentScene || 'prolog_1');
    } catch (e) { console.error("Gagal memuat game:", e); alert("Gagal memuat data simpan."); }
}