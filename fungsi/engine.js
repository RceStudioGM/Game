let currentScene = 'prolog_1';
let bgmAudio = null;
let gsapTimeline = null;

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

function t(key) {
    const langData = locales[window.currentLang];
    if (!langData || !langData[key]) return key;
    return langData[key];
}

/* ============================================================
   FUNGSI NAVIGASI KEYBOARD (FIX ENTER MACET DI DROPDOWN/SLIDER)
   ============================================================ */
let _subMenuNavHandler = null;

function attachSubMenuKeyboardNav() {
    if (_subMenuNavHandler) {
        document.removeEventListener('keydown', _subMenuNavHandler);
        _subMenuNavHandler = null;
    }

    const activeModal = document.querySelector(
        '#pause-overlay:not(.hidden), #settings-overlay:not(.hidden), #saveload-overlay:not(.hidden), #howtoplay-overlay:not(.hidden), #name-input-screen:not(.hidden), #profile-screen:not(.hidden)'
    );
    if (!activeModal) return;

    // Ambil semua elemen interaktif: Tombol, Slider, Dropdown
    const focusable = Array.from(activeModal.querySelectorAll('button:not([disabled]), input[type="range"], select'));
    if (focusable.length === 0) return;

    let currentFocusIndex = 0;
    const activeEl = document.activeElement;
    if (activeEl && focusable.includes(activeEl)) {
        currentFocusIndex = focusable.indexOf(activeEl);
    } else {
        focusable[currentFocusIndex].focus();
    }

    const handler = (e) => {
        if (activeModal.classList.contains('hidden')) {
            document.removeEventListener('keydown', handler);
            _subMenuNavHandler = null;
            return;
        }

        // Navigasi antar elemen
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            currentFocusIndex = (currentFocusIndex + 1) % focusable.length;
            focusable[currentFocusIndex].focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            currentFocusIndex = (currentFocusIndex - 1 + focusable.length) % focusable.length;
            focusable[currentFocusIndex].focus();
        } 
        // Logika Enter dan Spasi: Hanya eksekusi jika fokus ada di BUTTON
        else if (e.key === 'Enter' || e.key === ' ') {
            const activeElm = focusable[currentFocusIndex];
            // Jika elemen yang sedang difokus adalah BUTTON, jalankan klik
            if (activeElm && activeElm.tagName === 'BUTTON') {
                e.preventDefault(); // Cegah scroll
                playSFX();
                activeElm.click();
            }
            // Jika elemen adalah SELECT atau INPUT, kita TIDAK melakukan preventDefault
            // agar dropdown bahasa dan slider bisa berfungsi normal (Spasi buka dropdown)
        }
    };

    document.addEventListener('keydown', handler);
    _subMenuNavHandler = handler;
}

/* ============================================================
   UI TERJEMAHAN
   ============================================================ */
function applyLanguageUI() {
    const titleEl = document.querySelector('#main-menu .menu-title-box h1');
    const subEl = document.querySelector('#main-menu .menu-title-box p');
    if (titleEl) titleEl.innerText = t('gameTitle');
    if (subEl) subEl.innerText = t('gameSub');

    const btnContinue = document.getElementById('btn-continue');
    const btnNewGame = document.getElementById('btn-new-game');
    const btnProfiles = document.getElementById('btn-profiles');
    const btnGallery = document.getElementById('btn-gallery');
    const btnSettings = document.getElementById('btn-settings');

    if (btnContinue && !btnContinue.disabled) btnContinue.innerText = t('btnContinue');
    else if (btnContinue) btnContinue.innerText = t('btnContinue');
    if (btnNewGame) btnNewGame.innerText = t('btnNewGame');
    if (btnProfiles) btnProfiles.innerText = t('btnProfiles');
    if (btnGallery) btnGallery.innerText = t('btnGallery');
    if (btnSettings) btnSettings.innerText = t('btnSettings');

    const inputTitle = document.querySelector('#name-input-screen h2');
    const inputSub = document.querySelector('#name-input-screen p');
    const inputField = document.getElementById('player-name-input');
    const inputStart = document.querySelector('#name-input-screen .menu-buttons button:first-child');
    const inputCancel = document.querySelector('#name-input-screen .menu-buttons button:last-child');
    if (inputTitle) inputTitle.innerText = t('inputTitle');
    if (inputSub) inputSub.innerText = t('inputSub');
    if (inputField) inputField.placeholder = t('inputPlaceholder');
    if (inputStart) inputStart.innerText = t('inputBtnStart');
    if (inputCancel) inputCancel.innerText = t('inputBtnCancel');

    const pauseBtn = document.getElementById('btn-pause');
    if (pauseBtn) pauseBtn.innerHTML = '⏸️';

    const pauseTitle = document.querySelector('#pause-modal h2');
    const pauseSave = document.querySelector('#pause-modal .space-y-3 button:nth-child(1)');
    const pauseLoad = document.querySelector('#pause-modal .space-y-3 button:nth-child(2)');
    const pauseSettings = document.querySelector('#pause-modal .space-y-3 button:nth-child(3)');
    const pauseQuit = document.querySelector('#pause-modal .space-y-3 button:nth-child(4)');
    const pauseBack = document.querySelector('#pause-modal .space-y-3 button:nth-child(5)');
    if (pauseTitle) pauseTitle.innerText = t('pauseTitle');
    if (pauseSave) pauseSave.innerText = t('pauseSave');
    if (pauseLoad) pauseLoad.innerText = t('pauseLoad');
    if (pauseSettings) pauseSettings.innerText = t('pauseSettings');
    if (pauseQuit) pauseQuit.innerText = t('pauseQuit');
    if (pauseBack) pauseBack.innerText = t('pauseBack');

    const settingsTitle = document.querySelector('#settings-modal h2');
    const settingsBGM = document.querySelector('#settings-modal .space-y-5 > div:nth-child(1) label');
    const settingsSFX = document.querySelector('#settings-modal .space-y-5 > div:nth-child(2) label');
    const settingsRes = document.querySelector('#settings-modal .space-y-5 > div:nth-child(3) label');
    const settingsLangLabel = document.getElementById('settings-lang-label');
    const settingsBackBtn = document.querySelector('#settings-modal button:last-child');
    if (settingsTitle) settingsTitle.innerText = t('settingsTitle');
    if (settingsBGM) settingsBGM.innerText = t('settingsBGM');
    if (settingsSFX) settingsSFX.innerText = t('settingsSFX');
    if (settingsRes) settingsRes.innerText = t('settingsRes');
    if (settingsLangLabel) settingsLangLabel.innerText = t('settingsLang');
    if (settingsBackBtn) settingsBackBtn.innerText = t('settingsBack');

    const btnHowToPlay = document.getElementById('btn-how-to-play');
    if (btnHowToPlay) btnHowToPlay.innerText = t('btnHowToPlay');

    const htpTitle = document.getElementById('howtoplay-title');
    const htpContent = document.getElementById('howtoplay-content');
    const htpClose = document.querySelector('#howtoplay-modal button:last-child');
    if (htpTitle) htpTitle.innerText = t('howToPlayTitle');
    if (htpContent) {
        htpContent.innerHTML = `
            <p>${t('howToPlayDesc1')}</p>
            <p>${t('howToPlayDesc2')}</p>
            <p>${t('howToPlayDesc3')}</p>
        `;
    }
    if (htpClose) htpClose.innerText = t('howToPlayClose');

    const langSelect = document.getElementById('lang-select');
    if (langSelect) langSelect.value = window.currentLang;
}

function changeLanguage(lang) {
    localStorage.setItem('vn_lang', lang);
    window.currentLang = lang;
    applyLanguageUI();
    if (typeof loadStoryByLanguage === 'function') {
        loadStoryByLanguage();
    }
}

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
    container.style.width = w + 'px';
    container.style.height = h + 'px';
}

function openPauseMenu() {
    document.getElementById('pause-overlay').classList.remove('hidden');
    document.getElementById('pause-modal').classList.remove('scale-95');
    document.getElementById('pause-modal').classList.add('scale-100');
    applyLanguageUI();
    attachSubMenuKeyboardNav();
}

function closePauseMenu() {
    document.getElementById('pause-overlay').classList.add('hidden');
    document.getElementById('pause-modal').classList.remove('scale-100');
    document.getElementById('pause-modal').classList.add('scale-95');
}

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
    document.getElementById('lang-select').value = window.currentLang;
    document.getElementById('settings-overlay').classList.remove('hidden');
    applyLanguageUI();
    attachSubMenuKeyboardNav();
}

function closeSettingsModal() {
    document.getElementById('settings-overlay').classList.add('hidden');
    if (!document.getElementById('pause-overlay').classList.contains('hidden')) {
        openPauseMenu();
    }
}

function openHowToPlay() {
    document.getElementById('howtoplay-overlay').classList.remove('hidden');
    applyLanguageUI();
    attachSubMenuKeyboardNav();
}

function closeHowToPlay() {
    document.getElementById('howtoplay-overlay').classList.add('hidden');
}

let _pendingConfirmAction = null;

function showConfirm(title, message, onConfirm) {
    document.getElementById('confirm-title').innerText = title;
    document.getElementById('confirm-message').innerText = message;
    _pendingConfirmAction = onConfirm;
    document.getElementById('confirm-overlay').classList.remove('hidden');
    attachSubMenuKeyboardNav();
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
    showConfirm(t('confirmQuitTitle'), t('confirmQuitMsg'), quitGame);
}

function quitGame() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    if (bgmAudio) bgmAudio.pause();
    checkContinueAvailability();
    applyLanguageUI();
}

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
        btn.innerText = t('btnContinue');
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    } else {
        btn.disabled = true;
        btn.innerText = t('btnContinue');
        btn.style.opacity = "0.5";
        btn.style.cursor = "not-allowed";
    }
}

function backToMenu() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    checkContinueAvailability();
    if (bgmAudio) bgmAudio.pause();
    attachLobbyKeyboardNav();
    triggerLobbyAnimations();
    applyLanguageUI();
}

function saveFlags() {
    try { localStorage.setItem('vn_flags', JSON.stringify(window.gameFlags)); } catch (e) {}
}

function showSettings() {
    showSettingsModal();
}

function showGallery() {
    hideAllScreens();
    document.getElementById('sub-menu-screen').classList.remove('hidden');
    document.getElementById('sub-menu-title').innerText = t('btnGallery');
    const box = document.getElementById('sub-menu-content');
    box.innerHTML = '';
    for (const [key, text] of Object.entries(allQuotes)) {
        const item = document.createElement('div');
        item.className = 'quote-item';
        item.innerHTML = window.unlockedQuotes.includes(key)
            ? `<strong>${t('toastUnlock')}:</strong> "${text}"`
            : `🔒 <em>(${t('lockRouteA')})</em>`;
        box.appendChild(item);
    }
}

function showProfiles() {
    hideAllScreens();
    document.getElementById('profile-screen').classList.remove('hidden');
    document.getElementById('profile-title').innerText = t('btnProfiles');
    const container = document.getElementById('profile-container');
    container.innerHTML = '';
    applyLanguageUI();

    for (const [key, profile] of Object.entries(characterProfiles)) {
        const card = document.createElement('div');
        card.className = 'profile-card';
        let isUnlocked = false;
        if (!profile.unlockKey) isUnlocked = true;
        else if (profile.unlockKey === 'routeA' && window.gameFlags.routeA) isUnlocked = true;
        else if (profile.unlockKey === 'routeB' && window.gameFlags.routeB) isUnlocked = true;
        else if (profile.unlockKey === 'routeM' && window.gameFlags.routeM) isUnlocked = true;
        else if (profile.unlockKey === 'secretRoute' && window.gameFlags.secretRoute) isUnlocked = true;

        const profileNameKey = `profile_${profile.id}`;
        const displayName = t(profileNameKey);

        if (isUnlocked) {
            card.innerHTML = `
                <div class="profile-img"><img src="${img(profile.id, 'netral')}" alt="${displayName}" onerror="this.style.display='none'"></div>
                <div class="profile-info"><h3>${displayName}</h3><span class="profile-role">${profile.role}</span><p class="profile-desc">${profile.desc}</p></div>
            `;
        } else {
            let lockText = t('lockText');
            if (profile.unlockKey === 'routeA') lockText = t('lockRouteA');
            else if (profile.unlockKey === 'routeB') lockText = t('lockRouteB');
            else if (profile.unlockKey === 'routeM') lockText = t('lockRouteM');
            else if (profile.unlockKey === 'secretRoute') lockText = t('lockSecret');
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

function loadScene(sceneKey) {
    if (sceneKey === 'menu') { backToMenu(); return; }
    currentScene = sceneKey;
    const scene = storyData[sceneKey];
    if (!scene) { console.error('Scene tidak ditemukan:', sceneKey); return; }

    if (window._vn_advance_handler) { document.removeEventListener('keydown', window._vn_advance_handler); window._vn_advance_handler = null; }
    if (window._vn_choice_handler) { document.removeEventListener('keydown', window._vn_choice_handler); window._vn_choice_handler = null; }

    if (sceneKey === 'bab1_pilihan') {
        let baseChoices = [
            { text: "Bantu di Sekretariat OSIS bersama Alexandra", nextScene: "rute_a2a" },
            { text: "Bantu mural di Ruang Seni bersama Kirana", nextScene: "rute_b2b" },
            { text: "Coba jalani keduanya sekaligus, meski berat", nextScene: "rute_c2c" },
            { text: "Tawarkan diri jadi pemandu murid pindahan (Rute Mira)", nextScene: "rute_m1" }
        ];
        if (window.gameFlags.routeA && window.gameFlags.routeB && window.gameFlags.routeM) {
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
    if (['rute_m13_ending1', 'rute_m13_ending2', 'rute_m13_ending3', 'rute_m13_ending_sahabat'].includes(sceneKey)) {
        if (!window.gameFlags.routeM) { window.gameFlags.routeM = true; saveFlags(); }
    }
    if (['rute_r_ending_1', 'rute_r_ending_2_a', 'rute_r_ending_2_b'].includes(sceneKey)) {
        if (!window.gameFlags.secretRoute) { window.gameFlags.secretRoute = true; saveFlags(); }
    }

    const replaceTags = (str) => str.replace(/{alexandra}/g, 'Alexandra').replace(/{kirana}/g, 'Kirana').replace(/{mira}/g, 'Mira').replace(/{player}/g, window.playerName);
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
        document.getElementById('dialogue-text').title = 'Klik atau tekan Spasi untuk melanjutkan...';
        const advanceHandler = (e) => {
            if (document.getElementById('game-screen').classList.contains('hidden')) return;
            if (e.key === ' ' || e.key === 'Space' || e.key === 'Enter') {
                e.preventDefault();
                playSFX();
                goToScene(nextKey);
            }
        };
        document.addEventListener('keydown', advanceHandler);
        window._vn_advance_handler = advanceHandler;
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
        let currentChoiceIndex = 0;
        choiceBtns.forEach(b => b.classList.remove('text-vn-gold'));
        if (choiceBtns.length > 0) {
            choiceBtns[currentChoiceIndex].classList.add('text-vn-gold');
            choiceBtns[currentChoiceIndex].focus();
        }
        const choiceHandler = (e) => {
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
        document.addEventListener('keydown', choiceHandler);
        window._vn_choice_handler = choiceHandler;
    }
}

function triggerLobbyAnimations() {
    if (gsapTimeline) { gsapTimeline.kill(); gsapTimeline = null; }
    const sakuraContainer = document.getElementById('sakura-container');
    if (!sakuraContainer) return;
    sakuraContainer.innerHTML = '';
    gsap.set(sakuraContainer, { opacity: 1 });
    const gambar1 = './assets/sakura1.png';
    const gambar2 = './assets/sakura2.png';
    gsapTimeline = gsap.timeline();
    gsapTimeline.add(() => {
        for (let i = 0; i < 15; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.backgroundImage = `url('${gambar1}')`;
            petal.style.left = Math.random() * 100 + '%';
            const size = 18 + Math.random() * 16;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.transform = `rotate(${Math.random() * 360}deg)`;
            sakuraContainer.appendChild(petal);
            gsap.to(petal, { duration: 8 + Math.random() * 6, y: "+=600", rotation: 720 + Math.random() * 720, x: (Math.random() - 0.5) * 300, opacity: 0, ease: "power1.in", delay: i * 0.1, repeat: -1, yoyo: false });
        }
        for (let i = 0; i < 15; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.backgroundImage = `url('${gambar2}')`;
            petal.style.left = Math.random() * 100 + '%';
            const size = 18 + Math.random() * 16;
            petal.style.width = size + 'px';
            petal.style.height = size + 'px';
            petal.style.transform = `rotate(${Math.random() * 360}deg)`;
            sakuraContainer.appendChild(petal);
            gsap.to(petal, { duration: 9 + Math.random() * 6, y: "+=600", rotation: 720 + Math.random() * 720, x: (Math.random() - 0.5) * 300, opacity: 0, ease: "power1.in", delay: (i * 0.1) + 0.5, repeat: -1, yoyo: false });
        }
    }, 0.5);
}

let _lobbyNavHandler = null;

function attachLobbyKeyboardNav() {
    if (_lobbyNavHandler) { document.removeEventListener('keydown', _lobbyNavHandler); _lobbyNavHandler = null; }
    const menuBtns = Array.from(document.querySelectorAll('#lobby-menu-bar .menu-btn'));
    if (menuBtns.length === 0) return;
    menuBtns.forEach(btn => btn.classList.remove('keyboard-selected'));
    let currentFocusIndex = 0;
    menuBtns[currentFocusIndex].classList.add('keyboard-selected');
    menuBtns[currentFocusIndex].focus();
    const handler = (e) => {
        if (document.getElementById('main-menu').classList.contains('hidden')) return;
        menuBtns.forEach(btn => btn.classList.remove('keyboard-selected'));
        if (e.key === 'ArrowRight') { e.preventDefault(); currentFocusIndex = (currentFocusIndex + 1) % menuBtns.length; }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); currentFocusIndex = (currentFocusIndex - 1 + menuBtns.length) % menuBtns.length; }
        else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const activeBtn = menuBtns[currentFocusIndex]; if (activeBtn) activeBtn.click(); return; }
        else { return; }
        menuBtns[currentFocusIndex].classList.add('keyboard-selected');
        menuBtns[currentFocusIndex].focus();
    };
    document.addEventListener('keydown', handler);
    _lobbyNavHandler = handler;
}

const SAVE_SLOT_COUNT = 9;
let saveLoadMode = 'save';

function slotKey(n) { return `vn_save_slot_${n}`; }

function getSlotData(n) {
    try { const raw = localStorage.getItem(slotKey(n)); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
}

function getAllSlots() {
    const slots = [];
    for (let n = 1; n <= SAVE_SLOT_COUNT; n++) slots.push({ n, data: getSlotData(n) });
    return slots;
}

function formatSaveDate(iso) {
    try { const d = new Date(iso); return `${d.toLocaleDateString('id-ID')}, ${d.toLocaleTimeString('id-ID')}`; } catch (e) { return ''; }
}

function openSaveLoad(mode) {
    saveLoadMode = mode;
    document.getElementById('saveload-title').innerText = mode === 'save' ? t('saveLoadTitleSave') : t('saveLoadTitleLoad');
    document.getElementById('saveload-subtitle').innerText = mode === 'save' ? t('saveLoadSubSave') : t('saveLoadSubLoad');
    renderSaveSlots();
    document.getElementById('saveload-overlay').classList.remove('hidden');
    attachSubMenuKeyboardNav();
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
        card.className = `relative rounded-xl border p-4 transition-all text-left ${isEmpty ? 'border-dashed border-white/20 bg-white/[0.02]' : 'border-white/20 bg-white/5 hover:border-vn-gold hover:bg-white/10'} ${clickable ? 'cursor-pointer' : 'opacity-40 cursor-not-allowed'}`;
        if (clickable) card.onclick = () => handleSlotClick(n);
        if (isEmpty) {
            card.innerHTML = `<div class="text-vn-gold font-bold text-sm mb-2">${t('saveLoadTitleSave')} ${n}</div><div class="text-gray-500 text-sm py-4 text-center">${saveLoadMode === 'save' ? '+ ' + t('saveLoadSubSave') : t('lockText')}</div>`;
        } else {
            const preview = (data.dialoguePreview || '').slice(0, 70) + (data.dialoguePreview && data.dialoguePreview.length > 70 ? '…' : '');
            card.innerHTML = `<button class="slot-delete-btn absolute top-2 right-2 text-gray-500 hover:text-red-400 text-sm w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10" title="${t('confirmDeleteTitle')}">✕</button><div class="text-vn-gold font-bold text-sm mb-1">${t('saveLoadTitleSave')} ${n}</div><div class="text-white font-semibold text-sm truncate">${data.playerName || 'Adi'}</div><div class="text-gray-400 text-xs mt-1">${formatSaveDate(data.savedAt)}</div><div class="text-gray-300 text-xs italic mt-2 leading-snug">"${preview || '...'}"</div>`;
            card.querySelector('.slot-delete-btn').onclick = (e) => {
                e.stopPropagation();
                showConfirm(t('confirmDeleteTitle'), t('confirmDeleteMsg', n), () => { localStorage.removeItem(slotKey(n)); renderSaveSlots(); checkContinueAvailability(); });
            };
        }
        grid.appendChild(card);
    });
}

function handleSlotClick(n) {
    if (saveLoadMode === 'save') {
        const existing = getSlotData(n);
        if (existing) showConfirm(t('confirmOverwriteTitle'), t('confirmOverwriteMsg', {n: n, date: formatSaveDate(existing.savedAt)}), () => doSaveToSlot(n));
        else doSaveToSlot(n);
    } else {
        showConfirm(t('confirmLoadTitle'), t('confirmLoadMsg', n), () => doLoadFromSlot(n));
    }
}

function doSaveToSlot(n) {
    const dialogueEl = document.getElementById('dialogue-text');
    const data = { playerName: window.playerName, currentScene: currentScene, gameFlags: window.gameFlags, unlockedQuotes: window.unlockedQuotes, dialoguePreview: dialogueEl ? dialogueEl.innerText : '', savedAt: new Date().toISOString() };
    try { localStorage.setItem(slotKey(n), JSON.stringify(data)); renderSaveSlots(); checkContinueAvailability(); showToast(t('toastSave'), t('toastSaveMsg', n)); } catch (e) { console.error('Gagal menyimpan game:', e); }
}

function doLoadFromSlot(n) {
    const data = getSlotData(n); if (!data) return;
    try {
        window.playerName = data.playerName || 'Adi';
        window.gameFlags = data.gameFlags || { routeA: false, routeB: false, routeM: false, secretRoute: false };
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
                gameFlags: parsed.gameFlags || { routeA: false, routeB: false, routeM: false, secretRoute: false },
                unlockedQuotes: parsed.unlockedQuotes || [],
                dialoguePreview: '(migrated)',
                savedAt: new Date().toISOString(),
            };
            localStorage.setItem(slotKey(1), JSON.stringify(data));
        }
        localStorage.removeItem('vn_save_data');
    } catch (e) {}
}

window.addEventListener('load', () => {
    migrateOldSaveIfNeeded();
    changeResolution(window.resolution);
    initAudio();
    checkContinueAvailability();
    if (!document.getElementById('main-menu').classList.contains('hidden')) {
        attachLobbyKeyboardNav();
        triggerLobbyAnimations();
        applyLanguageUI();
    }
});