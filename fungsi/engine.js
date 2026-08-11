/* ============================================================
   engine.js — Mesin Game + GSAP Animations + Fixed Arrows
   ============================================================ */

let currentScene = 'prolog_1';
let bgmAudio = null;
let gsapTimeline = null; // Untuk menampung timeline animasi

/* --- Audio Settings --- */
window.bgmVolume = parseInt(localStorage.getItem('vn_bgm_volume')) || 70;
window.sfxVolume = parseInt(localStorage.getItem('vn_sfx_volume')) || 80;
window.resolution = localStorage.getItem('vn_resolution') || '960x600';

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

/* --- Settings & Resolution --- */
function updateVolume(type, val) {
    if (type === 'bgm') {
        window.bgmVolume = parseInt(val);
        localStorage.setItem('vn_bgm_volume', val);
        document.getElementById('bgm-volume-label').innerText = val + '%';
        if (bgmAudio) bgmAudio.volume = val / 100;
    } else {
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
    container.style.width = w + 'px'; container.style.height = h + 'px';
}

/* --- Pause & Settings Modal --- */
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
function openSettingsFromPause() { closePauseMenu(); showSettingsModal(); }
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

/* --- Confirm Generic --- */
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
function closeConfirm() { document.getElementById('confirm-overlay').classList.add('hidden'); _pendingConfirmAction = null; }
function confirmQuit() { closePauseMenu(); showConfirm('🚪 Keluar?', 'Yakin ingin keluar game?', quitGame); }

function quitGame() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    if (bgmAudio) bgmAudio.pause();
    checkContinueAvailability();
}

/* --- Engine Core --- */
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
    if (hasAnySave) { btn.disabled = false; btn.innerText = "▶ LANJUTKAN"; btn.style.opacity = "1"; btn.style.cursor = "pointer"; } 
    else { btn.disabled = true; btn.innerText = "🔒 (BELUM ADA SAVE)"; btn.style.opacity = "0.5"; btn.style.cursor = "not-allowed"; }
}

/* --- OVERRIDE backToMenu (AGAR ARROW TETAP BERFUNGSI) --- */
function backToMenu() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    checkContinueAvailability();
    if (bgmAudio) bgmAudio.pause();
    
    // Panggil trigger animasi & keyboard
    attachLobbyKeyboardNav();
    triggerLobbyAnimations();
}

function saveFlags() { try { localStorage.setItem('vn_flags', JSON.stringify(window.gameFlags)); } catch (e) {} }

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
        item.innerHTML = window.unlockedQuotes.includes(key) ? `<strong>Terbuka:</strong> "${text}"` : `🔒 <em>(Mainkan rute lain untuk membuka)</em>`;
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
            card.innerHTML = `<div class="profile-img"><img src="${img(profile.id, 'netral')}" alt="${profile.name}" onerror="this.style.display='none'"></div><div class="profile-info"><h3>${profile.name}</h3><span class="profile-role">${profile.role}</span><p class="profile-desc">${profile.desc}</p></div>`;
        } else {
            let lockText = "🔒 Terkunci";
            if (profile.unlockKey === 'routeA') lockText = "🔒 Selesaikan Rute Alexandra";
            else if (profile.unlockKey === 'routeB') lockText = "🔒 Selesaikan Rute Kirana";
            else if (profile.unlockKey === 'secretRoute') lockText = "🔒 Selesaikan Rute Rahasia";
            card.innerHTML = `<div class="profile-img locked"><span class="lock-icon">🔒</span></div><div class="profile-info"><h3 style="color:#7f8c8d;">???</h3><span class="profile-role">${lockText}</span></div>`;
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
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.classList.add('hidden'), 500); }, 4000);
}

let lastAdvanceTime = 0; const ADVANCE_COOLDOWN_MS = 1000;
function goToScene(nextScene) {
    const now = Date.now();
    if (now - lastAdvanceTime < ADVANCE_COOLDOWN_MS) return;
    lastAdvanceTime = now;
    loadScene(nextScene);
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

    const replaceTags = (str) => str.replace(/{alexandra}/g, 'Alexandra').replace(/{kirana}/g, 'Kirana').replace(/{player}/g, window.playerName);
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

    if (scene.choices.length === 1) {
        const nextKey = scene.choices[0].nextScene;
        const btn = document.createElement('button');
        btn.className = 'choice-btn hidden';
        btn.innerText = replaceTags(scene.choices[0].text);
        btn.onclick = () => { playSFX(); goToScene(nextKey); };
        choicesContainer.appendChild(btn);
        document.getElementById('dialogue-box').onclick = () => { if (!document.getElementById('game-screen').classList.contains('hidden')) { playSFX(); goToScene(nextKey); } };
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
        // NAV KEYBOARD IN-GAME
        let currentChoiceIndex = 0;
        choiceBtns.forEach(b => b.classList.remove('text-vn-gold'));
        if (choiceBtns.length > 0) {
            choiceBtns[currentChoiceIndex].classList.add('text-vn-gold');
            choiceBtns[currentChoiceIndex].focus();
        }
        const keyHandler = (e) => {
            if (document.getElementById('game-screen').classList.contains('hidden')) return;
            choiceBtns.forEach(b => b.classList.remove('text-vn-gold'));
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                currentChoiceIndex = (currentChoiceIndex + 1) % choiceBtns.length;
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                currentChoiceIndex = (currentChoiceIndex - 1 + choiceBtns.length) % choiceBtns.length;
            } else if (e.key === ' ' || e.key === 'Space' || e.key === 'Enter') {
                e.preventDefault();
                if (currentChoiceIndex >= 0 && currentChoiceIndex < choiceBtns.length) choiceBtns[currentChoiceIndex].click();
                return;
            } else { return; }
            choiceBtns[currentChoiceIndex].classList.add('text-vn-gold');
            choiceBtns[currentChoiceIndex].focus();
        };
        document.addEventListener('keydown', keyHandler);
        window._vn_choice_handler = keyHandler;
    }
}

/* ============================================================
   ANIMASI LOBBY DENGAN GSAP (TANPA CSS KEYFRAMES)
   ============================================================ */
function triggerLobbyAnimations() {
    // Hentikan timeline sebelumnya jika ada
    if (gsapTimeline) { gsapTimeline.kill(); gsapTimeline = null; }

    const mainLine = document.getElementById('line-main');
    const tail9 = document.getElementById('line-tail');
    const sakuraContainer = document.getElementById('sakura-container');
    if (!mainLine || !tail9 || !sakuraContainer) return;

    // Reset Element
    gsap.set(mainLine, { width: '0%', opacity: 0 });
    gsap.set(tail9, { scale: 0, opacity: 0 });
    sakuraContainer.innerHTML = '';
    gsap.set(sakuraContainer, { opacity: 1 });

    // Buat Timeline GSAP
    gsapTimeline = gsap.timeline({ delay: 0.2 });

    // 1. Garis Membentang
    gsapTimeline.to(mainLine, { 
        duration: 1.6, 
        width: '100%', 
        opacity: 1, 
        ease: "power2.inOut" 
    });
    
    // 2. Ekor Angka 9 Muncul (Melengkung dan scale up)
    gsapTimeline.to(tail9, { 
        duration: 0.5, 
        scale: 1, 
        opacity: 1, 
        ease: "back.out(1.7)",
        onComplete: () => {
            // 3. Efek penguatan/pulse berulang hanya pada garis utama
            gsap.to(mainLine, {
                duration: 2.2,
                opacity: 0.7,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1
            });
        }
    });

    // 4. Memunculkan Sakura setelah garis selesai
    gsapTimeline.add(() => {
        const count = 15; // 15 helai Sakura
        for (let i = 0; i < count; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            // Acak posisi horizontal secara natural
            petal.style.left = Math.random() * 100 + '%';
            // Ukuran acak (18px - 34px)
            const size = 18 + Math.random() * 16;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            // Putar awal acak
            petal.style.transform = `rotate(${Math.random() * 360}deg)`;
            sakuraContainer.appendChild(petal);

            // Loop animasi GSAP per kelopak
            gsap.to(petal, {
                duration: 6 + Math.random() * 6, // Durasi acak 6-12 detik
                y: "+=550", // Jatuh ke bawah
                rotation: 360 * (Math.random() * 4 + 2), // Berputar berkali-kali
                x: (Math.random() - 0.5) * 200, // Bergoyang kiri-kanan
                opacity: 0,
                ease: "power1.in",
                delay: Math.random() * 0.5, // Jeda awal acak
                repeat: -1,
                yoyo: false
            });
        }
    }, "-=0.1"); // Mulai sedikit sebelum ekor selesai
}

/* ============================================================
   NAVIGASI ARROW LOBBY (FIXED!)
   ============================================================ */
let _lobbyNavHandler = null;

function attachLobbyKeyboardNav() {
    if (_lobbyNavHandler) { document.removeEventListener('keydown', _lobbyNavHandler); _lobbyNavHandler = null; }

    const menuBtns = Array.from(document.querySelectorAll('#lobby-menu-bar .menu-btn'));
    if (menuBtns.length === 0) return;

    // Reset visual semua tombol
    menuBtns.forEach(btn => btn.classList.remove('text-vn-gold'));

    let currentFocusIndex = 0;
    menuBtns[currentFocusIndex].classList.add('text-vn-gold');
    menuBtns[currentFocusIndex].focus();

    const handler = (e) => {
        if (document.getElementById('main-menu').classList.contains('hidden')) return;
        
        menuBtns.forEach(btn => btn.classList.remove('text-vn-gold'));

        if (e.key === 'ArrowRight') {
            e.preventDefault();
            currentFocusIndex = (currentFocusIndex + 1) % menuBtns.length;
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            currentFocusIndex = (currentFocusIndex - 1 + menuBtns.length) % menuBtns.length;
        } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const activeBtn = menuBtns[currentFocusIndex];
            if (activeBtn) activeBtn.click();
            return;
        } else { return; }

        menuBtns[currentFocusIndex].classList.add('text-vn-gold');
        menuBtns[currentFocusIndex].focus();
    };

    document.addEventListener('keydown', handler);
    _lobbyNavHandler = handler;
}

/* ============================================================
   SISTEM SAVE/LOAD SLOT
   ============================================================ */
const SAVE_SLOT_COUNT = 9;
let saveLoadMode = 'save';
function slotKey(n) { return `vn_save_slot_${n}`; }
function getSlotData(n) { try { const raw = localStorage.getItem(slotKey(n)); return raw ? JSON.parse(raw) : null; } catch (e) { return null; } }
function getAllSlots() { const slots = []; for (let n = 1; n <= SAVE_SLOT_COUNT; n++) slots.push({ n, data: getSlotData(n) }); return slots; }
function formatSaveDate(iso) { try { const d = new Date(iso); return `${d.toLocaleDateString('id-ID')}, ${d.toLocaleTimeString('id-ID')}`; } catch (e) { return ''; } }

function openSaveLoad(mode) {
    saveLoadMode = mode;
    document.getElementById('saveload-title').innerText = mode === 'save' ? '💾 Simpan Permainan' : '📂 Muat Permainan';
    document.getElementById('saveload-subtitle').innerText = mode === 'save' ? 'Pilih slot untuk menyimpan progress kamu' : 'Pilih slot yang ingin dimuat';
    renderSaveSlots();
    document.getElementById('saveload-overlay').classList.remove('hidden');
}
function closeSaveLoad() { document.getElementById('saveload-overlay').classList.add('hidden'); }

function renderSaveSlots() {
    const grid = document.getElementById('saveload-grid');
    grid.innerHTML = '';
    getAllSlots().forEach(({ n, data }) => {
        const card = document.createElement('div');
        const isEmpty = !data;
        const clickable = saveLoadMode === 'save' || !isEmpty;
        card.className = `relative rounded-xl border p-4 transition-all text-left ${isEmpty ? 'border-dashed border-white/20 bg-white/[0.02]' : 'border-white/20 bg-white/5 hover:border-vn-gold hover:bg-white/10'} ${clickable ? 'cursor-pointer' : 'opacity-40 cursor-not-allowed'}`;
        if (clickable) card.onclick = () => handleSlotClick(n);
        if (isEmpty) {
            card.innerHTML = `<div class="text-vn-gold font-bold text-sm mb-2">Slot ${n}</div><div class="text-gray-500 text-sm py-4 text-center">${saveLoadMode === 'save' ? '+ Simpan di sini' : 'Kosong'}</div>`;
        } else {
            const preview = (data.dialoguePreview || '').slice(0, 70) + (data.dialoguePreview && data.dialoguePreview.length > 70 ? '…' : '');
            card.innerHTML = `<button class="slot-delete-btn absolute top-2 right-2 text-gray-500 hover:text-red-400 text-sm w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10" title="Hapus slot ini">✕</button><div class="text-vn-gold font-bold text-sm mb-1">Slot ${n}</div><div class="text-white font-semibold text-sm truncate">${data.playerName || 'Adi'}</div><div class="text-gray-400 text-xs mt-1">${formatSaveDate(data.savedAt)}</div><div class="text-gray-300 text-xs italic mt-2 leading-snug">"${preview || '...'}"</div>`;
            card.querySelector('.slot-delete-btn').onclick = (e) => {
                e.stopPropagation();
                showConfirm('Hapus Slot?', `Slot ${n} akan dihapus permanen.`, () => { localStorage.removeItem(slotKey(n)); renderSaveSlots(); checkContinueAvailability(); });
            };
        }
        grid.appendChild(card);
    });
}

function handleSlotClick(n) {
    if (saveLoadMode === 'save') {
        const existing = getSlotData(n);
        if (existing) showConfirm('Timpa Slot?', `Slot ${n} sudah terisi. Timpa?`, () => doSaveToSlot(n));
        else doSaveToSlot(n);
    } else {
        showConfirm('Muat Slot Ini?', `Progress saat ini akan hilang. Muat Slot ${n}?`, () => doLoadFromSlot(n));
    }
}

function doSaveToSlot(n) {
    const dialogueEl = document.getElementById('dialogue-text');
    const data = { playerName: window.playerName, currentScene: currentScene, gameFlags: window.gameFlags, unlockedQuotes: window.unlockedQuotes, dialoguePreview: dialogueEl ? dialogueEl.innerText : '', savedAt: new Date().toISOString() };
    try { localStorage.setItem(slotKey(n), JSON.stringify(data)); renderSaveSlots(); checkContinueAvailability(); showToast('✅ Tersimpan!', `Progress berhasil disimpan di Slot ${n}.`); } catch (e) { console.error('Gagal menyimpan game:', e); }
}

function doLoadFromSlot(n) {
    const data = getSlotData(n); if (!data) return;
    try {
        window.playerName = data.playerName || 'Adi'; window.gameFlags = data.gameFlags || { routeA: false, routeB: false, secretRoute: false }; window.unlockedQuotes = data.unlockedQuotes || [];
        try { localStorage.setItem('vn_quotes', JSON.stringify(window.unlockedQuotes)); } catch (e) {} saveFlags(); closeSaveLoad(); closePauseMenu(); hideAllScreens(); document.getElementById('game-screen').classList.remove('hidden'); loadScene(data.currentScene || 'prolog_1'); if (bgmAudio) bgmAudio.play().catch(() => {});
    } catch (e) { console.error('Gagal memuat game:', e); }
}

function showToast(title, message) { const toast = document.getElementById('toast-notif'); toast.classList.remove('hidden'); const h4 = toast.querySelector('h4'); const p = toast.querySelector('p'); if (h4) h4.innerText = title; if (p) p.innerText = message; setTimeout(() => toast.classList.add('show'), 100); setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.classList.add('hidden'), 500); }, 3000); }

function migrateOldSaveIfNeeded() { try { const legacy = localStorage.getItem('vn_save_data'); if (!legacy) return; if (!getSlotData(1)) { const parsed = JSON.parse(legacy); const data = { playerName: parsed.playerName || 'Adi', currentScene: parsed.currentScene || 'prolog_1', gameFlags: parsed.gameFlags || { routeA: false, routeB: false, secretRoute: false }, unlockedQuotes: parsed.unlockedQuotes || [], dialoguePreview: '(migrated)', savedAt: new Date().toISOString() }; localStorage.setItem(slotKey(1), JSON.stringify(data)); } localStorage.removeItem('vn_save_data'); } catch (e) {} }

// INISIALISASI LOAD
window.addEventListener('load', () => {
    migrateOldSaveIfNeeded(); changeResolution(window.resolution); initAudio(); checkContinueAvailability();
    if (!document.getElementById('main-menu').classList.contains('hidden')) {
        attachLobbyKeyboardNav(); triggerLobbyAnimations();
    }
});