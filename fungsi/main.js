/* ============================================================
   main.js
   ============================================================ */

window.playerName = 'Adi';
window.unlockedQuotes = [];
window.gameFlags = { routeA: false, routeB: false, routeM: false, secretRoute: false };

try {
    window.unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];
    window.gameFlags = JSON.parse(localStorage.getItem('vn_flags')) || { routeA: false, routeB: false, routeM: false, secretRoute: false };
} catch (e) {
    window.unlockedQuotes = [];
    window.gameFlags = { routeA: false, routeB: false, routeM: false, secretRoute: false };
}

function showNameInput() {
    hideAllScreens();
    document.getElementById('name-input-screen').classList.remove('hidden');
}

function startGameWithCustomName() {
    const input = document.getElementById('player-name-input');
    window.playerName = (input.value || '').trim() || 'Adi';
    hideAllScreens();
    document.getElementById('game-screen').classList.remove('hidden');
    loadScene('prolog_1');
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof checkContinueAvailability === 'function') {
        checkContinueAvailability();
    }
});