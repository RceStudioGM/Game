/* ============================================================
   main.js — State Global & Inisialisasi Game
   ============================================================ */

// Definisikan semua variabel ke dalam window agar bisa diakses oleh engine.js
window.playerName = 'Adi';
window.unlockedQuotes = [];
window.gameFlags = { routeA: false, routeB: false, secretRoute: false };

// Load data dari LocalStorage
try {
    window.unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];
    window.gameFlags = JSON.parse(localStorage.getItem('vn_flags')) || { routeA: false, routeB: false, secretRoute: false };
} catch (e) {
    window.unlockedQuotes = [];
    window.gameFlags = { routeA: false, routeB: false, secretRoute: false };
}

// --- NAVIGASI DASAR ---
function showNameInput() {
    hideAllScreens();
    document.getElementById('name-input-screen').classList.remove('hidden');
}

function startGameWithCustomName() {
    const input = document.getElementById('player-name-input');
    window.playerName = (input.value || '').trim() || 'Adi';
    hideAllScreens();
    document.getElementById('game-screen').classList.remove('hidden');
    loadScene('common_hari1_1'); // Panggil fungsi dari engine.js
}

// Jalankan pengecekan tombol continue saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    if (typeof checkContinueAvailability === 'function') {
        checkContinueAvailability();
    }
});