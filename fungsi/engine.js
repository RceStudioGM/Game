/* ============================================================
   engine.js — Mesin Game Utama + Sistem Pause & Settings
   + Navigasi Keyboard (Panah Atas/Bawah, Spasi)
   ============================================================ */

let currentScene = 'prolog_1';

/* --- Sound & Volume State --- */
window.bgmVolume = parseInt(localStorage.getItem('vn_bgm_volume')) || 70;
window.sfxVolume = parseInt(localStorage.getItem('vn_sfx_volume')) || 80;
window.resolution = localStorage.getItem('vn_resolution') || '960x600';

let bgmAudio = null;

function initAudio() {
    bgmAudio = new Audio('assets/sound/bgm.mp3');
    bgmAudio.loop = true;
    bgmAudio.volume = window.bgmVolume / 100;
}

function playSFX() {
    const sfx = new Audio('assets/sound/click.mp3');
    sfx.volume = window.sfxVolume / 100;
    sfx.play().catch(() => {});
}

/* --- Update Volume & Resolusi --- */
function updateVolume(type, val) {
    if (type === 'bgm') {
        window.bgmVolume = parseInt(val);
        localStorage.setItem('vn_bgm_volume', val);
        document.getElementById('bgm-volume-label').innerText = val + '%';
        if (bgmAudio) bgmAudio.volume = val / 100;
    } else if (type === 'sfx') {
        window.sfxVolume = parseInt(val);
        localStorage.setItem('vn_sfx_volume', val);
        document.getElementById('sfx-volume-label').innerText = val + '%';
    }
}

function changeResolution(res) {
    window.resolution = res;
    localStorage.setItem('vn_resolution', res);
    const container = document.getElementById('game-container');
    const [w, h] = res.split('x').map(Number);
    container.style.width = w + 'px';
    container.style.height = h + 'px';
}

/* --- Pause Menu --- */
function openPauseMenu() {
    document.getElementById('pause-overlay').classList.remove('hidden');
    document.getElementById('pause-modal').classList.remove('scale-95');
    document.getElementById('pause-modal').classList.add('scale-100');
}

function closePauseMenu() {
    document.getElementById('pause-overlay').classList.add('hidden');
    document.getElementById('pause-modal').classList.remove('scale-100');
    document.getElementById('pause-modal').classList.add('scale-95');
}

/* --- Settings Modal --- */
function openSettingsFromPause() {
    closePauseMenu();
    showSettingsModal();
}

function showSettingsModal() {
    document.getElementById('bgm-volume').value = window.bgmVolume;
    document.getElementById('bgm-volume-label').innerText = window.bgmVolume + '%';
    document.getElementById('sfx-volume').value = window.sfxVolume;
    document.getElementById('sfx-volume-label').innerText = window.sfxVolume + '%';
    document.getElementById('resolution-select').value = window.resolution;
    document.getElementById('settings-overlay').classList.remove('hidden');
}

function closeSettingsModal() {
    document.getElementById('settings-overlay').classList.add('hidden');
    if (!document.getElementById('pause-overlay').classList.contains('hidden')) {
        openPauseMenu();
    }
}

/* --- Konfirmasi --- */
let _pendingConfirmAction = null;

function showConfirm(title, message, onConfirm) {
    document.getElementById('confirm-title').innerText = title;
    document.getElementById('confirm-message').innerText = message;
    _pendingConfirmAction = onConfirm;
    document.getElementById('confirm-overlay').classList.remove('hidden');
}

function runConfirmedAction() {
    const action = _pendingConfirmAction;
    closeConfirm();
    if (typeof action === 'function') action();
}

function closeConfirm() {
    document.getElementById('confirm-overlay').classList.add('hidden');
    _pendingConfirmAction = null;
}

function confirmQuit() {
    closePauseMenu();
    showConfirm('🚪 Keluar?', 'Yakin ingin keluar game? Progress yang belum disimpan akan hilang.', quitGame);
}

function quitGame() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    if (bgmAudio) bgmAudio.pause();
    checkContinueAvailability();
}

/* --- Fungsi Dasar Engine --- */
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
    const hasAnySave = getAllSlots().some(slot => slot.data !== null);
    if (hasAnySave) {
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
    if (bgmAudio) bgmAudio.pause();
}

function saveFlags() {
    try { localStorage.setItem('vn_flags', JSON.stringify(window.gameFlags)); } catch (e) {}
}

function showSettings() { showSettingsModal(); }

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

let lastAdvanceTime = 0;
const ADVANCE_COOLDOWN_MS = 1000;

function goToScene(nextScene) {
    const now = Date.now();
    if (now - lastAdvanceTime < ADVANCE_COOLDOWN_MS) return;
    lastAdvanceTime = now;
    loadScene(nextScene);
}

/* ============================================================
   CORE ENGINE: LOAD SCENE + NAVIGASI KEYBOARD
   ============================================================ */
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
    charL.onerror = () => charL.classList.add('hidden');
    if (scene.charLeft) { charL.src = scene.charLeft; charL.classList.remove('hidden'); } else { charL.classList.add('hidden'); }
    const charR = document.getElementById('char-right');
    charR.onerror = () => charR.classList.add('hidden');
    if (scene.charRight) { charR.src = scene.charRight; charR.classList.remove('hidden'); } else { charR.classList.add('hidden'); }

    if (scene.unlockQuote) saveQuote(scene.unlockQuote);

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    // HAPUS EVENT LISTENER KEYBOARD LAMA SEBELUM MEMBUAT YANG BARU
    if (window._vn_keydown_handler) {
        document.removeEventListener('keydown', window._vn_keydown_handler);
        window._vn_keydown_handler = null;
    }

    if (scene.choices.length === 1) {
        const nextKey = scene.choices[0].nextScene;
        const btn = document.createElement('button');
        btn.className = 'choice-btn hidden';
        btn.innerText = replaceTags(scene.choices[0].text);
        btn.onclick = () => { playSFX(); goToScene(nextKey); };
        choicesContainer.appendChild(btn);
        document.getElementById('dialogue-box').onclick = () => {
            if (!document.getElementById('game-screen').classList.contains('hidden')) { playSFX(); goToScene(nextKey); }
        };
        document.getElementById('dialogue-text').style.cursor = 'pointer';
        document.getElementById('dialogue-text').title = 'Klik untuk melanjutkan...';
    } else {
        document.getElementById('dialogue-text').style.cursor = 'default';
        document.getElementById('dialogue-text').title = '';
        document.getElementById('dialogue-box').onclick = null;
        
        const choiceBtns = [];
        scene.choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.innerText = replaceTags(choice.text);
            btn.onclick = () => { playSFX(); goToScene(choice.nextScene); };
            choicesContainer.appendChild(btn);
            choiceBtns.push(btn);
        });

        /* ============================================================
           NAVIGASI KEYBOARD (PANAH ATAS/BAWAH & SPASI)
           ============================================================ */
        let currentChoiceIndex = 0;
        if (choiceBtns.length > 0) {
            // Fokus ke tombol pertama secara visual (tanpa menyembunyikan kursor asli)
            choiceBtns[currentChoiceIndex].classList.add('ring-2', 'ring-vn-gold', 'ring-offset-2', 'ring-offset-gray-900');
            choiceBtns[currentChoiceIndex].focus();
        }

        const keyHandler = (e) => {
            // Hanya aktif jika game screen terlihat
            if (document.getElementById('game-screen').classList.contains('hidden')) return;

            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                // Hapus highlight lama
                choiceBtns[currentChoiceIndex].classList.remove('ring-2', 'ring-vn-gold', 'ring-offset-2', 'ring-offset-gray-900');
                // Pindah indeks
                currentChoiceIndex = (currentChoiceIndex + 1) % choiceBtns.length;
                // Highlight baru
                choiceBtns[currentChoiceIndex].classList.add('ring-2', 'ring-vn-gold', 'ring-offset-2', 'ring-offset-gray-900');
                choiceBtns[currentChoiceIndex].focus();
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                choiceBtns[currentChoiceIndex].classList.remove('ring-2', 'ring-vn-gold', 'ring-offset-2', 'ring-offset-gray-900');
                currentChoiceIndex = (currentChoiceIndex - 1 + choiceBtns.length) % choiceBtns.length;
                choiceBtns[currentChoiceIndex].classList.add('ring-2', 'ring-vn-gold', 'ring-offset-2', 'ring-offset-gray-900');
                choiceBtns[currentChoiceIndex].focus();
            } else if (e.key === ' ' || e.key === 'Space' || e.key === 'Enter') {
                // Tekan Spasi atau Enter untuk mengklik tombol yang sedang disorot
                e.preventDefault();
                if (currentChoiceIndex >= 0 && currentChoiceIndex < choiceBtns.length) {
                    choiceBtns[currentChoiceIndex].click();
                }
            }
        };

        document.addEventListener('keydown', keyHandler);
        window._vn_keydown_handler = keyHandler;
    }
}

/* ============================================================
   SISTEM SAVE / LOAD (SAMA SEPERTI SEBELUMNYA)
   ============================================================ */
const SAVE_SLOT_COUNT = 9;
let saveLoadMode = 'save';

function slotKey(n) { return `vn_save_slot_${n}`; }

function getSlotData(n) {
    try {
        const raw = localStorage.getItem(slotKey(n));
        return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
}

function getAllSlots() {
    const slots = [];
    for (let n = 1; n <= SAVE_SLOT_COUNT; n++) slots.push({ n, data: getSlotData(n) });
    return slots;
}

function formatSaveDate(iso) {
    try {
        const d = new Date(iso);
        const tgl = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
        const jam = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        return `${tgl}, ${jam}`;
    } catch (e) { return ''; }
}

function openSaveLoad(mode) {
    saveLoadMode = mode;
    document.getElementById('saveload-title').innerText = mode === 'save' ? '💾 Simpan Permainan' : '📂 Muat Permainan';
    document.getElementById('saveload-subtitle').innerText = mode === 'save'
        ? 'Pilih slot untuk menyimpan progress kamu'
        : 'Pilih slot yang ingin dimuat';
    renderSaveSlots();
    document.getElementById('saveload-overlay').classList.remove('hidden');
}

function closeSaveLoad() {
    document.getElementById('saveload-overlay').classList.add('hidden');
}

function renderSaveSlots() {
    const grid = document.getElementById('saveload-grid');
    grid.innerHTML = '';
    getAllSlots().forEach(({ n, data }) => {
        const card = document.createElement('div');
        const isEmpty = !data;
        const clickable = saveLoadMode === 'save' || !isEmpty;
        card.className = `relative rounded-xl border p-4 transition-all text-left ${
            isEmpty
                ? 'border-dashed border-white/20 bg-white/[0.02]'
                : 'border-white/20 bg-white/5 hover:border-vn-gold hover:bg-white/10'
        } ${clickable ? 'cursor-pointer' : 'opacity-40 cursor-not-allowed'}`;
        if (clickable) card.onclick = () => handleSlotClick(n);
        if (isEmpty) {
            card.innerHTML = `
                <div class="text-vn-gold font-bold text-sm mb-2">Slot ${n}</div>
                <div class="text-gray-500 text-sm py-4 text-center">${saveLoadMode === 'save' ? '+ Simpan di sini' : 'Kosong'}</div>
            `;
        } else {
            const preview = (data.dialoguePreview || '').slice(0, 70) + (data.dialoguePreview && data.dialoguePreview.length > 70 ? '…' : '');
            card.innerHTML = `
                <button class="slot-delete-btn absolute top-2 right-2 text-gray-500 hover:text-red-400 text-sm w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10" title="Hapus slot ini">✕</button>
                <div class="text-vn-gold font-bold text-sm mb-1">Slot ${n}</div>
                <div class="text-white font-semibold text-sm truncate">${data.playerName || 'Adi'}</div>
                <div class="text-gray-400 text-xs mt-1">${formatSaveDate(data.savedAt)}</div>
                <div class="text-gray-300 text-xs italic mt-2 leading-snug">"${preview || '...'}"</div>
            `;
            card.querySelector('.slot-delete-btn').onclick = (e) => {
                e.stopPropagation();
                showConfirm('Hapus Slot?', `Slot ${n} akan dihapus permanen dan tidak bisa dikembalikan.`, () => {
                    localStorage.removeItem(slotKey(n));
                    renderSaveSlots();
                    checkContinueAvailability();
                });
            };
        }
        grid.appendChild(card);
    });
}

function handleSlotClick(n) {
    if (saveLoadMode === 'save') {
        const existing = getSlotData(n);
        if (existing) {
            showConfirm('Timpa Slot?', `Slot ${n} sudah terisi (${formatSaveDate(existing.savedAt)}). Timpa dengan progress saat ini?`, () => doSaveToSlot(n));
        } else {
            doSaveToSlot(n);
        }
    } else {
        showConfirm('Muat Slot Ini?', `Progress yang belum disimpan saat ini akan hilang. Lanjutkan memuat Slot ${n}?`, () => doLoadFromSlot(n));
    }
}

function doSaveToSlot(n) {
    const dialogueEl = document.getElementById('dialogue-text');
    const data = {
        playerName: window.playerName,
        currentScene: currentScene,
        gameFlags: window.gameFlags,
        unlockedQuotes: window.unlockedQuotes,
        dialoguePreview: dialogueEl ? dialogueEl.innerText : '',
        savedAt: new Date().toISOString(),
    };
    try {
        localStorage.setItem(slotKey(n), JSON.stringify(data));
        renderSaveSlots();
        checkContinueAvailability();
        showToast('✅ Tersimpan!', `Progress berhasil disimpan di Slot ${n}.`);
    } catch (e) { console.error('Gagal menyimpan game:', e); }
}

function doLoadFromSlot(n) {
    const data = getSlotData(n);
    if (!data) return;
    try {
        window.playerName = data.playerName || 'Adi';
        window.gameFlags = data.gameFlags || { routeA: false, routeB: false, secretRoute: false };
        window.unlockedQuotes = data.unlockedQuotes || [];
        try { localStorage.setItem('vn_quotes', JSON.stringify(window.unlockedQuotes)); } catch (e) {}
        saveFlags();
        closeSaveLoad();
        closePauseMenu();
        hideAllScreens();
        document.getElementById('game-screen').classList.remove('hidden');
        loadScene(data.currentScene || 'prolog_1');
        if (bgmAudio) bgmAudio.play().catch(() => {});
    } catch (e) { console.error('Gagal memuat game:', e); }
}

function showToast(title, message) {
    const toast = document.getElementById('toast-notif');
    toast.classList.remove('hidden');
    const h4 = toast.querySelector('h4');
    const p = toast.querySelector('p');
    if (h4) h4.innerText = title;
    if (p) p.innerText = message;
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.classList.add('hidden'), 500); }, 3000);
}

function migrateOldSaveIfNeeded() {
    try {
        const legacy = localStorage.getItem('vn_save_data');
        if (!legacy) return;
        if (!getSlotData(1)) {
            const parsed = JSON.parse(legacy);
            const data = {
                playerName: parsed.playerName || 'Adi',
                currentScene: parsed.currentScene || 'prolog_1',
                gameFlags: parsed.gameFlags || { routeA: false, routeB: false, secretRoute: false },
                unlockedQuotes: parsed.unlockedQuotes || [],
                dialoguePreview: '(disimpan sebelum update sistem slot)',
                savedAt: new Date().toISOString(),
            };
            localStorage.setItem(slotKey(1), JSON.stringify(data));
        }
        localStorage.removeItem('vn_save_data');
    } catch (e) { /* abaikan */ }
}

window.addEventListener('load', () => {
    migrateOldSaveIfNeeded();
    changeResolution(window.resolution);
    initAudio();
    checkContinueAvailability();
});