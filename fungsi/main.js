window.playerName = 'Adi';
window.unlockedQuotes = [];
window.gameFlags = { routeA: false, routeB: false, routeM: false, secretRoute: false };
window.currentLang = localStorage.getItem('vn_lang') || 'en';

try {
    window.unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];
    window.gameFlags = JSON.parse(localStorage.getItem('vn_flags')) || { routeA: false, routeB: false, routeM: false, secretRoute: false };
} catch (e) {
    window.unlockedQuotes = [];
    window.gameFlags = { routeA: false, routeB: false, routeM: false, secretRoute: false };
}

/* ============================================================
   FUNGSI UNTUK MEMUAT CERITA SESUAI BAHASA
   ============================================================ */
function loadStoryByLanguage() {
    const lang = window.currentLang;
    const scriptId = 'dynamic-story';
    
    // Hapus script cerita yang lama
    const oldScript = document.getElementById(scriptId);
    if (oldScript) oldScript.remove();

    // Tentukan file cerita berdasarkan bahasa
    const src = lang === 'en' ? './fungsi/story_en.js' : './fungsi/story.js';

    // Buat elemen script baru
    const newScript = document.createElement('script');
    newScript.id = scriptId;
    newScript.src = src;
    newScript.onload = () => {
        // Setelah file cerita baru termuat, refresh scene agar dialog terbaru tampil
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
}

function startGameWithCustomName() {
    const input = document.getElementById('player-name-input');
    window.playerName = (input.value || '').trim() || 'Adi';
    hideAllScreens();
    document.getElementById('game-screen').classList.remove('hidden');
    // Muat cerita pertama kali
    loadStoryByLanguage();
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof checkContinueAvailability === 'function') {
        checkContinueAvailability();
    }
    applyLanguageUI();
});