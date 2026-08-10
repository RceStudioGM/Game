/* ============================================================
   main.js — State Global & Inisialisasi Game
   ============================================================ */

// Variabel Global
let playerName = 'Adi';
let unlockedQuotes = [];
let gameFlags = { routeA: false, routeB: false, secretRoute: false };

// Load data dari LocalStorage saat game dimulai
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

// --- FUNGSI SAVE & LOAD ---
function saveGame() {
    const saveData = {
        playerName: playerName,
        currentScene: currentScene,
        gameFlags: gameFlags,
        unlockedQuotes: unlockedQuotes
    };
    try {
        localStorage.setItem('vn_save_data', JSON.stringify(saveData));
        const toast = document.getElementById('toast-notif');
        toast.classList.remove('hidden');
        document.querySelector('#toast-notif h4').innerText = "✅ Tersimpan!";
        document.querySelector('#toast-notif p').innerText = "Progress game berhasil disimpan.";
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.classList.add('hidden'), 500);
        }, 3000);
    } catch (e) {
        console.error("Gagal menyimpan game:", e);
    }
}

function loadGame() {
    try {
        const rawData = localStorage.getItem('vn_save_data');
        if (!rawData) return false; // Tidak ada data simpan

        const saveData = JSON.parse(rawData);
        playerName = saveData.playerName || 'Adi';
        window.playerName = playerName;
        gameFlags = saveData.gameFlags || { routeA: false, routeB: false, secretRoute: false };
        unlockedQuotes = saveData.unlockedQuotes || [];

        try { localStorage.setItem('vn_quotes', JSON.stringify(unlockedQuotes)); } catch (e) {}
        saveFlags();

        hideAllScreens();
        document.getElementById('game-screen').classList.remove('hidden');
        if (typeof loadScene === 'function') {
            loadScene(saveData.currentScene || 'common_hari1_1');
        } else {
            console.error("Engine belum dimuat!");
            return false;
        }
        return true;
    } catch (e) {
        console.error("Gagal memuat game:", e);
        return false;
    }
}

// --- FUNGSI CEK KETERSEDIAAN SAVE (AKTIF / NONAKTIF) ---
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

function continueGame() {
    const success = loadGame();
    if (!success) {
        alert("Tidak ada data simpan yang ditemukan. Mulai game baru!");
    }
}

// --- NAVIGASI DASAR ---
function showNameInput() {
    hideAllScreens();
    document.getElementById('name-input-screen').classList.remove('hidden');
}

function startGameWithCustomName() {
    const input = document.getElementById('player-name-input');
    playerName = (input.value || '').trim() || 'Adi';
    window.playerName = playerName;
    hideAllScreens();
    document.getElementById('game-screen').classList.remove('hidden');
    loadScene('common_hari1_1');
}

/* 
   PERBAIKAN PENTING: 
   Fungsi backToMenu sekarang langsung mengecek status tombol Lanjutkan
   agar jika pemain menyimpan lalu kembali ke menu, tombol otomatis menyala.
*/
function backToMenu() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
    checkContinueAvailability(); // <-- Tambahan kunci di sini
}

// Jalankan pengecekan tombol continue saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', checkContinueAvailability);
