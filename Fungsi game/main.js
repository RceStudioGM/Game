/* ============================================================
   main.js — State Global & Inisialisasi Game
   ============================================================ */

// Variabel Global
// ... (kode sebelumnya) ...

let playerName = 'Adi';
let unlockedQuotes = [];
let gameFlags = { routeA: false, routeB: false, secretRoute: false };

// Load data dari LocalStorage
try {
    unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];
    gameFlags = JSON.parse(localStorage.getItem('vn_flags')) || { routeA: false, routeB: false, secretRoute: false };
} catch (e) {
    unlockedQuotes = [];
    gameFlags = { routeA: false, routeB: false, secretRoute: false };
}

function saveFlags() {
    try { localStorage.setItem('vn_flags', JSON.stringify(gameFlags)); } catch (e) {}
}

// ... (kode showNameInput dan startGameWithCustomName tetap sama) ...

// Fungsi Membuka Layar Input Nama
function showNameInput() {
    hideAllScreens();
    document.getElementById('name-input-screen').classList.remove('hidden');
}

// Fungsi Start Game (Dengan Nama Baru)
function startGameWithCustomName() {
    const input = document.getElementById('player-name-input');
    playerName = (input.value || '').trim() || 'Adi';
    window.playerName = playerName; // Sinkronisasi ke global window
    hideAllScreens();
    document.getElementById('game-screen').classList.remove('hidden');
    loadScene('common_hari1_1');
}
