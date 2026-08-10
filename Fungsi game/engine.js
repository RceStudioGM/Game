/* ============================================================
   engine.js — Sistem Engine Visual Novel
   ============================================================ */

// Fungsi helper untuk memanggil aset karakter
function img(charName, exprKey) {
    const folder = assets.CHARACTER_PATHS[charName];
    if (!folder) return ''; 
    return `assets/characters/${folder}/${exprKey}.png`;
}

// Fungsi Navigasi Layar
function hideAllScreens() {
    ['main-menu', 'name-input-screen', 'game-screen', 'sub-menu-screen'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
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

// Fungsi Menyimpan Quote
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

// FUNGSI UTAMA: Memuat Scene
function loadScene(sceneKey) {
    if (sceneKey === 'menu') { backToMenu(); return; }
    
    let scene = storyData[sceneKey];
    if (!scene) { console.error('Scene tidak ditemukan:', sceneKey); return; }

    // SPECIAL HANDLER: Untuk Scene Pilihan Utama (Mendeteksi New Game+ Flag)
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

    // SPECIAL HANDLER: Untuk penyelesaian Rute (Unlock Flag New Game+)
    if (['rute_a6_ending1', 'rute_a6_ending2', 'rute_a6_ending_sahabat'].includes(sceneKey)) {
        if(!gameFlags.routeA) { gameFlags.routeA = true; saveFlags(); }
    }
    if (['rute_b7_ending1', 'rute_b7_ending2', 'rute_b7_ending_sahabat'].includes(sceneKey)) {
        if(!gameFlags.routeB) { gameFlags.routeB = true; saveFlags(); }
    }

    // Proses penggantian Tag (Nama Pemain / Nama Heroin)
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
