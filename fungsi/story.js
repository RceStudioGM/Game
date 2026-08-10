/* ============================================================
   story.js — Data Alur Cerita Visual Novel
   ============================================================ */

const storyData = {
    // ================= COMMON ROUTE: HARI 1 =================
    common_hari1_1: {
        speaker: "Narator",
        text: "{player} terlambat lagi. Berlari menyusuri koridor yang bermandi cahaya pagi sambil menggigit roti, dia menabrak setumpuk kertas yang sedang dibawa seseorang.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "common_hari1_2" }]
    },
    common_hari1_2: {
        speaker: "Alexandra",
        text: "Bisa tidak kamu lihat jalan?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [
            { text: "A. Minta maaf berkali-kali sampai dia risih", nextScene: "common_hari1_3a" },
            { text: "B. Minta maaf singkat lalu buru-buru pergi", nextScene: "common_hari1_3b" }
        ]
    },
    common_hari1_3a: {
        speaker: "Alexandra",
        text: "...Cukup sekali aja, aku dengar. (Narator: Dia sedikit geli, meski tak menunjukkannya.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Lanjut ke ruang seni...", nextScene: "common_hari1_4" }]
    },
    common_hari1_3b: {
        speaker: "Narator",
        text: "Alexandra hanya mengangguk pendek, tak ada kesan apa pun.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Lanjut ke ruang seni...", nextScene: "common_hari1_4" }]
    },
    common_hari1_4: {
        speaker: "Kirana",
        text: "Eh! Kamu, yang tadi lari-lari itu! Bantuin aku pegang ini dong, tanganku penuh cat!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Bantu Kirana menyeret kanvas", nextScene: "common_hari2" }]
    },

    // ================= COMMON ROUTE: HARI 2 =================
    common_hari2: {
        speaker: "Bima",
        text: "Wanjayy, denger-denger ada yang disuruh bantuin OSIS sama anak seni nih. Lu mau punya harem ya lu, {player}?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "A. Curhat balik ke Bima soal bingung mau pilih", nextScene: "common_hari2_curhat" },
            { text: "B. Diam saja, nggak nanggepin Bima", nextScene: "common_hari2_diam" }
        ]
    },
    common_hari2_curhat: {
        speaker: "Bima",
        text: "Hah, pusing lu? Ya udah, kalau nggak yakin, jangan dipikirin! (Narator: Saran ngawur Bima bikin kamu makin bingung.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Menuju Ruang Guru...", nextScene: "common_hari2_pakhendra" }]
    },
    common_hari2_diam: {
        speaker: "Bima",
        text: "Eh, beneran diem? Yaelah, baperan amat sih. (Narator: Bima ngambek pura-pura sebentar, lalu cepat baikan lagi.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Menuju Ruang Guru...", nextScene: "common_hari2_pakhendra" }]
    },
    common_hari2_pakhendra: {
        speaker: "Pak Hendra",
        text: "{player}, Bapak lihat nilai Matematikamu turun. Festival sebentar lagi. Bapak nggak bisa larang, tapi jangan nomor-duain sekolah.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'tegas'), charRight: "",
        choices: [{ text: "Saya belum yakin mau pilih yang mana, Pak.", nextScene: "common_hari2_akhir" }]
    },
    common_hari2_akhir: {
        speaker: "Pak Hendra",
        text: "Pikirkan baik-baik, ya. Bapak tegas bukan karena suka marah, tapi karena ingin kalian berhasil.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut ke Hari 3...", nextScene: "common_hari3" }]
    },

    // ================= COMMON ROUTE: HARI 3 =================
    common_hari3: {
        speaker: "Narator",
        text: "Sehari sebelum memutuskan, kamu punya waktu luang siang ini. Mau mengintip dunia mana dulu?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "A. Lewat depan Sekretariat OSIS", nextScene: "common_hari3_osis" },
            { text: "B. Lewat depan Ruang Seni", nextScene: "common_hari3_seni" },
            { text: "C. Langsung pulang", nextScene: "common_hari4" }
        ]
    },
    common_hari3_osis: {
        speaker: "Narator",
        text: "Kamu melihat Alexandra sedang memarahi anggota OSIS yang telat laporan.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Kembali", nextScene: "common_hari3" }]
    },
    common_hari3_seni: {
        speaker: "Narator",
        text: "Kamu melihat Kirana tertawa lepas melempar cat ke tembok.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Kembali", nextScene: "common_hari3" }]
    },

    // ================= COMMON ROUTE: HARI 4 & 5 =================
    common_hari4: {
        speaker: "Bima",
        text: "Eh, Dewi kayaknya naksir kamu deh. Kamu sih masih sibuk mikirin pilihan besar besok.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Lanjut ke Hari 5...", nextScene: "bab1_pilihan" }]
    },
    bab1_pilihan: {
        speaker: "Narator",
        text: "Hari ini hari keputusan. Pilihan mana yang akan kamu ambil?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: []
    },

    // ================= RUTE ALEXANDRA =================
    // (Isi rute_a2a, bad_end_a_x, rute_a5_percaya, ending_a1, dst...)
    rute_a2a: {
        speaker: "Farah",
        text: "Kamu pasti yang dimaksud Alexandra ya?",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut", nextScene: "rute_a2b" }]
    },
    rute_a2b: {
        speaker: "Alexandra",
        text: "Baca proposal ini.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Lanjut", nextScene: "rute_a2c" }]
    },
    // ... (lanjutkan sesuai dengan script length yang sudah di-generate sebelumnya) ...
    // Dikarenakan konten storyData sangat panjang (sekitar 100+ scene), 
    // saya hanya menampilkan contoh struktur awal di sini untuk file story.js.
    // Kamu cukup copy-paste semua isi storyData dari kode di balasan sebelumnya 
    // dan taruh di sini, jangan lupa tetap pakai format key: { ... }
    
    // Rute A Ending
    rute_a6_ending1: {
        speaker: "Alexandra",
        text: "Kamu nggak bikin aku harus jadi 'Ketua OSIS' terus. Cukup jadi Alexandra aja. (Good End)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_alexandra",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    // Rute B Ending
    rute_b7_ending1: {
        speaker: "Kirana",
        text: "Ini karya paling berarti yang pernah aku buat. (Good End)",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: img('kirana', 'terharu'),
        unlockQuote: "quote_kirana",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    // Rute C Ending
    rute_c5_ending: {
        speaker: "Pak Hendra",
        text: "Nilai ulanganmu minggu ini naik. Yang penting kamu nggak lari dari pertanyaannya. (Ending Terbuka)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('pakHendra', 'ramah'), charRight: "",
        unlockQuote: "quote_normal",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    // Rute Rahasia Ending
    rute_r_ending_1: {
        speaker: "Narator",
        text: "Malam itu, bertiga naik ke atap. Tiga orang yang saling menemukan versi terbaik diri mereka. (TRUE ENDING: Konstelasi)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_epilog",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    }
};
