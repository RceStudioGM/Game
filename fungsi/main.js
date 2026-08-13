window.playerName = 'Adi';
window.unlockedQuotes = [];
window.gameFlags = { routeA: false, routeB: false, routeM: false, secretRoute: false };

// PASTIKAN BAHASA DEFAULT ADALAH INGGRIS
window.currentLang = localStorage.getItem('vn_lang') || 'en';

try {
    window.unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];
    window.gameFlags = JSON.parse(localStorage.getItem('vn_flags')) || { routeA: false, routeB: false, routeM: false, secretRoute: false };
} catch (e) {
    window.unlockedQuotes = [];
    window.gameFlags = { routeA: false, routeB: false, routeM: false, secretRoute: false };
}

function loadStoryByLanguage() {
    const lang = window.currentLang;
    const scriptId = 'dynamic-story';
    const oldScript = document.getElementById(scriptId);
    if (oldScript) oldScript.remove();

    const src = lang === 'en' ? './fungsi/story_en.js' : './fungsi/story.js';
    const newScript = document.createElement('script');
    newScript.id = scriptId;
    newScript.src = src;
    newScript.onload = () => {
        if (typeof loadScene === 'function' && currentScene) {
            loadScene(currentScene);
        }
        if (typeof applyLanguageUI === 'function') applyLanguageUI();
    };
    document.body.appendChild(newScript);
}

function showNameInput() {
    hideAllScreens();
    document.getElementById('name-input-screen').classList.remove('hidden');
    applyLanguageUI();
    if (typeof detachLobbyKeyboardNav === 'function') detachLobbyKeyboardNav();
    if (typeof attachSubMenuKeyboardNav === 'function') attachSubMenuKeyboardNav();
}

function startGameWithCustomName() {
    const input = document.getElementById('player-name-input');
    window.playerName = (input.value || '').trim() || 'Adi';
    hideAllScreens();
    document.getElementById('game-screen').classList.remove('hidden');
    loadStoryByLanguage();
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof checkContinueAvailability === 'function') {
        checkContinueAvailability();
    }
    // PASTIKAN UI JUDUL DAN SUB-JUDUL LANGSUNG BERUBAH SAAT HALAMAN DIMUAT
    if (typeof applyLanguageUI === 'function') {
        applyLanguageUI();
    }
});