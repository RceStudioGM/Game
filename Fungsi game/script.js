/* ============================================================
   PERSIMPANGAN HATI — script.js
   VERSI: Novel Kompleks + Path Aset Lengkap
   ============================================================ */

let playerName = 'Adi';
let unlockedQuotes = [];
try {
    unlockedQuotes = JSON.parse(localStorage.getItem('vn_quotes')) || [];
} catch (e) {
    unlockedQuotes = [];
}

/* ------------------------------------------------------------
   1. ASSETS — PATH LENGKAP
   ------------------------------------------------------------ */
const assets = {

    // --- BACKGROUND ---
    BACKGROUNDS: {
        sekolahUmum: {
            koridor:     'assets/background/koridor.png',
            kelas:       'assets/background/ruang_kelas.png',
            ruangGuruBK: 'assets/background/ruang_bk.png',
            taman:       'assets/background/taman.png',
            perpustakaan:'assets/background/perpustakaan.png', // Pastikan ada
        },
        osis: {
            sekretariat: 'assets/background/sekretariat_osis.png',
        },
        seni: {
            ruangSeni:   'assets/background/ruang_seni.png',
            sanggarLuar: 'assets/background/sanggar_luar.png',
        },
        luarSekolah: {
            pasarMalam:  'assets/background/pasar_malam.png',
        },
        spesial: {
            atapMalam:    'assets/background/atap_malam.png',
            aulaFestival: 'assets/background/aula_festival.png',
        }
    },

    // --- KARAKTER (Sudah termasuk Dewi & Bang Yusuf) ---
    CHARACTER_PATHS: {
        alexandra: 'alexandra_wijaya',
        kirana:    'kirana_maheswari',
        mc:        'mc_protagonis',
        bima:      'bima_satrio',
        rangga:    'rangga_aditya',
        buSari:    'bu_sari',
        pakHendra: 'pak_hendra',
        farah:     'farah_novita',
        dewi:      'dewi',          // Tambahan baru
        bangYusuf: 'bang_yusuf'     // Tambahan baru
    }
};

/* Helper singkat untuk memanggil gambar */
function img(charName, exprKey) {
    const folder = assets.CHARACTER_PATHS[charName];
    if (!folder) return ''; 
    return `assets/characters/${folder}/${exprKey}.png`;
}

/* ------------------------------------------------------------
   2. KOLEKSI QUOTES
   ------------------------------------------------------------ */
const allQuotes = {
    quote_alexandra: "Logika memang penting, tapi keberanianmu menemaniku di saat sulit adalah rumus yang tak terduga.",
    quote_kirana: "Karya seni terindah bukan dari kanvas mahal, tapi dari momen tak terduga bersamamu.",
    quote_normal: "Kadang kita nggak butuh akhir yang romantis, cukup persahabatan konyol yang bikin masa SMA berkesan.",
    quote_bad: "Ego yang tinggi hanya akan meruntuhkan panggung yang susah payah dibangun bersama.",
    quote_guru: "Kedisiplinan itu pahit di awal, tapi penyesalan datang jauh lebih pahit kalau kamu nggak jujur sama diri sendiri.",
    quote_epilog: "Persimpangan yang belum usai, tapi tak lagi perlu disesali.",
};

/* ------------------------------------------------------------
   3. ALUR CERITA — NASKAH KOMPLEKS (Sesuai cerita baru)
   ------------------------------------------------------------ */
const storyData = {

    // ================= PROLOG =================
    prolog_1: {
        speaker: "Narator",
        text: "{player} terlambat lagi. Berlari menyusuri koridor sekolah yang bermandi cahaya pagi sambil menggigit roti, dia menabrak setumpuk kertas yang sedang dibawa seseorang.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "prolog_2" }]
    },
    prolog_2: {
        speaker: "Alexandra",
        text: "Bisa tidak kamu lihat jalan?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Minta maaf sambil memunguti kertas", nextScene: "prolog_3" }]
    },
    prolog_3: {
        speaker: "Narator",
        text: "Alexandra pergi tanpa menoleh lagi. Namun begitu berbelok ke arah ruang seni, {player} mendengar suara tawa riang dan bau cat minyak.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Menuju ruang seni", nextScene: "prolog_4" }]
    },
    prolog_4: {
        speaker: "Kirana",
        text: "Eh! Kamu, yang tadi lari-lari itu! Bantuin aku pegang ini dong, tanganku penuh cat!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Membantu Kirana menyeret kanvas besar", nextScene: "bab1_bima" }]
    },

    // ================= BAB 1 — TITIK AWAL =================
    bab1_bima: {
        speaker: "Bima",
        text: "Wanjayy, denger-denger ada yang disuruh bantuin OSIS sama anak seni nih. Ya sih, kan ada wanita dingin nan cantik si Ketos Alexandra di OSIS, lalu di seni ada anak ceria itu si Kirana. Lu mau deketin semuanya nih? Mau punya harem ya lu, {player}?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Apalah kalau ngomong jan ngaco, aku begini ya terpaksa biar nilai aman.", nextScene: "bab1_pakhendra" }]
    },
    bab1_pakhendra: {
        speaker: "Pak Hendra",
        text: "{player}, Bapak lihat nilai ulangan Matematikamu turun. Bapak dengar kamu mau ditarik ke OSIS dan ruang seni untuk Festival. Bapak nggak bisa larang, tapi ingat: apa pun yang kamu pilih, jangan sampai jadi alasan buat nomor-duain sekolah.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'tegas'), charRight: "",
        choices: [{ text: "Saya belum yakin mau pilih yang mana, Pak.", nextScene: "bab1_pilihan" }]
    },
    bab1_pilihan: {
        speaker: "Pak Hendra",
        text: "Nggak semua hal harus buru-buru dipilih. Tapi kalau kamu coba pegang dua-duanya sekaligus tanpa siap, yang ada malah kamu nggak dapat apa-apa. Pikirkan baik-baik, ya. Bapak tegas soal ini bukan karena bapak senang marah, tapi karena Bapak ingin kalian berhasil.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [
            { text: "Bantu di Sekretariat OSIS bersama Alexandra", nextScene: "rute_a2a" },
            { text: "Bantu mural di Ruang Seni bersama Kirana", nextScene: "rute_b2b" },
            { text: "Coba jalani keduanya sekaligus, meski berat", nextScene: "rute_c2c" }
        ]
    },

    // ================= RUTE A — SANG KETUA YANG TEGAS =================
    rute_a2a: {
        speaker: "Farah",
        text: "Kamu pasti yang dimaksud Alexandra ya? Aku Farah, sekretaris di sini. Jangan takut, dia emang gitu ke semua orang di awal.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_a2b" }]
    },
    rute_a2b: {
        speaker: "Alexandra",
        text: "Aku dengar itu, Farah. Baca proposal ini. Kalau ada yang tidak masuk akal menurut sudut pandang murid biasa, tandai. Jangan asal setuju cuma karena sungkan.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Bertanya ke Farah kenapa namaku dipilih.", nextScene: "rute_a2c" }]
    },
    rute_a2c: {
        speaker: "Farah",
        text: "Alexandra yang milih langsung, lho. Katanya dia pengen ada yang 'jujur, bukan yang cari muka'. Entah kenapa dia lihat itu dari kamu.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [
            { text: "A. Kerjakan tugas dengan serius dan diam", nextScene: "rute_a3_tenang" },
            { text: "B. Coba mencairkan suasana dengan bercanda", nextScene: "rute_a3_cair" },
            { text: "C. Manfaatkan waktu istirahat untuk mengobrol dengan Farah", nextScene: "rute_a_cabang_farah" }
        ]
    },
    rute_a_cabang_farah: {
        speaker: "Farah",
        text: "Alexandra itu sebenarnya hangat, lho. Sejak SMP dia merasa harus jadi yang terbaik, takut mengecewakan. Makanya dia jarang minta bantuan. Kalau kamu beneran niat deket sama dia, jangan buru-buru. Dia kayak buku tebal, harus dibaca pelan-pelan.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [
            { text: "Kembali ke pilihan sebelumnya", nextScene: "rute_a2c" }
        ]
    },
    rute_a3_tenang: {
        speaker: "Narator",
        text: "{player} bekerja tanpa banyak bicara, menandai proposal dengan catatan tajam. Alexandra membaca catatan itu diam-diam, alisnya sedikit terangkat—terkesan meski tidak menunjukkannya.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut ke momen berikutnya...", nextScene: "rute_a3_momen_jaket" }]
    },
    rute_a3_cair: {
        speaker: "Alexandra",
        text: "Aku bukan di sini buat disukai. Aku di sini buat semua ini selesai dengan benar. ...Kamu tahu nggak? Kalau kamu senyum dikit aja, orang-orang pasti nggak takut ke kamu. (Narator: Untuk sesaat, Alexandra terdiam, seperti tidak terbiasa ada yang membalas ucapannya tanpa rasa takut.)",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'terkejut'), charRight: "",
        choices: [{ text: "Lanjut ke momen berikutnya...", nextScene: "rute_a3_momen_jaket" }]
    },
    rute_a3_momen_jaket: {
        speaker: "Narator",
        text: "Suatu sore, {player} menemukan Alexandra tertidur di meja kerja, kelelahan. Diam-diam dia menyelimuti Alexandra dengan jaketnya.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [{ text: "Nungguin dia bangun...", nextScene: "rute_a3_bangun" }]
    },
    rute_a3_bangun: {
        speaker: "Alexandra",
        text: "...Kenapa kamu masih di sini? Nungguin kamu bangun. Kamu kerja keras banget, sih. ...Jangan aneh-aneh. Pulang sana.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'gugup'), charRight: "",
        choices: [
            { text: "A. Ajak Alexandra ke Taman, biar dia istirahat", nextScene: "rute_a4_taman" },
            { text: "B. Ikuti kebiasaannya menyendiri di Perpustakaan", nextScene: "rute_a4_perpus" }
        ]
    },
    rute_a4_taman: {
        speaker: "Narator",
        text: "Di bawah pohon rindang taman sekolah, Alexandra duduk kaku di ujung bangku. 'Aku nggak biasa begini. Rasanya kalau aku diam terlalu lama, aku takut ketinggalan sesuatu.' {player} menenangkannya, 'Nggak ada yang bakal runtuh cuma karena kamu istirahat lima menit.'",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut menuju Bab Rangga", nextScene: "rute_a5_rangga" }]
    },
    rute_a4_perpus: {
        speaker: "Narator",
        text: "{player} mengikuti Alexandra ke perpustakaan. Dia duduk sendirian di pojok, ditemani kopi hitam pahit. 'Satu-satunya tempat yang nggak menuntut apa-apa dariku.' Untuk pertama kalinya, dia membiarkan seseorang duduk di dunianya yang paling sepi tanpa mengusirnya.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut menuju Bab Rangga", nextScene: "rute_a5_rangga" }]
    },
    rute_a5_rangga: {
        speaker: "Rangga",
        text: "Alexandra udah terlalu banyak dikecewakan orang yang bilang 'peduli' terus ninggalin dia pas dia butuh. Kalau kamu nggak serius, mundur sekarang, sebelum dia keburu berharap.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('rangga', 'curiga'), charRight: "",
        choices: [
            { text: "A. Meyakinkan Rangga bahwa niatku tulus", nextScene: "rute_a5_percaya_diri" },
            { text: "B. Ragu dan mulai menjaga jarak darinya", nextScene: "rute_a5_ragu" },
            { text: "C. Balik bertanya apa Rangga sendiri menyukai Alexandra", nextScene: "rute_a_cabang_rangga" }
        ]
    },
    rute_a_cabang_rangga: {
        speaker: "Rangga",
        text: "...Ketahuan ya. Tapi aku sadar diri, Alexandra nggak pernah lihat aku lebih dari 'partner kerja'. Makanya aku cuma bisa jagain dia dari jauh. Justru karena itu, aku pengen orang yang bikin dia bahagia itu orang yang tepat. Buktiin ke aku.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('rangga', 'lega'), charRight: "",
        choices: [
            { text: "A. Ambil keputusan dengan mantap", nextScene: "rute_a5_percaya_diri" },
            { text: "B. Ragu dan mulai menjaga jarak", nextScene: "rute_a5_ragu" }
        ]
    },
    rute_a5_percaya_diri: {
        speaker: "Narator",
        text: "{player} terus membantu Alexandra tanpa pamrih. Menjelang hari-H, Alexandra nyaris kolaps. {player} memaksanya istirahat. 'Kalau kamu roboh sebelum festival mulai, semua kerja kerasmu sia-sia.'",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [
            { text: "A. Tetap sabar menemani Alexandra", nextScene: "rute_a6_ending1" },
            { text: "B. Memanfaatkan momen untuk mendesaknya jujur", nextScene: "rute_a6_ending2" }
        ]
    },
    rute_a5_ragu: {
        speaker: "Narator",
        text: "{player} menjaga jarak, sering beralasan sibuk. Alexandra menyadarinya. Festival usai tanpa ada yang terucap.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'kecewa'), charRight: "",
        choices: [{ text: "Lanjut ke Akhir", nextScene: "rute_a6_ending_sahabat" }]
    },
    rute_a6_ending1: {
        speaker: "Alexandra",
        text: "Aku... nggak terbiasa deket sama orang. Tapi entah kenapa, kamu nggak bikin aku harus jadi 'Ketua OSIS' terus. Cukup jadi Alexandra aja. (Good End: Perlahan tapi Pasti)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_alexandra",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_a6_ending2: {
        speaker: "Alexandra",
        text: "Aku nggak punya waktu buat ini. Festival lebih penting. ...Maaf. Aku cuma takut, kalau aku jujur, aku bakal kelihatan lemah. (Bittersweet End)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'sedih'), charRight: "",
        unlockQuote: "quote_bad",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_a6_ending_sahabat: {
        speaker: "Alexandra",
        text: "Kamu masih aja penakut, ya. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    // ================= RUTE B — SANG JENIUS YANG BEBAS =================
    rute_b2b: {
        speaker: "Kirana",
        text: "{player}! Menurutmu mural ini harusnya pakai warna apa buat langitnya?",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "A. Ikuti saja arahan spontan Kirana", nextScene: "rute_b3_mengalir" },
            { text: "B. Usulkan ide sendiri untuk mural", nextScene: "rute_b3_berani" },
            { text: "C. Tanya Bu Sari kenapa dia mengatur ini semua", nextScene: "rute_b_cabang_busari" }
        ]
    },
    rute_b_cabang_busari: {
        speaker: "Bu Sari",
        text: "Ibu lihat potensi besar di Kirana. Sayangnya dia terlalu sering sendirian, dikelilingi orang yang cuma kagum sama bakatnya, bukan yang beneran kenal dia. Ibu cuma pengen dia punya seseorang yang jujur. Kenapa kamu? Karena kamu nggak keliatan terpesona sama gelarnya. Kamu biasa aja waktu ketemu dia.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: img('buSari', 'tersenyum'), charRight: "",
        choices: [
            { text: "Kembali ke pilihan sebelumnya", nextScene: "rute_b2b" }
        ]
    },
    rute_b3_mengalir: {
        speaker: "Narator",
        text: "{player} menurut saja tiap kali Kirana punya ide baru. Dia makin nyaman, menganggap {player} tempat pelarian paling santai dari tekanan menjadi si jenius seni.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Lanjut ke Sanggar", nextScene: "rute_b3_sanggar" }]
    },
    rute_b3_berani: {
        speaker: "Kirana",
        text: "Coba campur sedikit ungu di bagian bawah, kayak abis hujan. Itu ide bagus banget! Kamu nggak pernah belajar seni tapi punya insting yang oke.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'terkejut'),
        choices: [{ text: "Lanjut ke Sanggar", nextScene: "rute_b3_sanggar" }]
    },
    rute_b3_sanggar: {
        speaker: "Narator",
        text: "Suatu hari sepulang sekolah, Kirana mengajak {player} ke sanggar luar. Di sana, Bang Yusuf, senior yang jadi ketua sanggar, sedang mengajar. Kedekatan natural mereka membuat {player} merasa canggung tanpa alasan jelas.",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "A. Bertanya langsung ke Kirana soal Bang Yusuf", nextScene: "rute_b4_terbuka" },
            { text: "B. Memendam rasa penasaran dan bersikap biasa", nextScene: "rute_b4_terpendam" }
        ]
    },
    rute_b4_terbuka: {
        speaker: "Kirana",
        text: "Dia kayak kakak buat aku. Malah dulu dia yang paling galak ngomelin aku kalau aku males latihan. Kenapa? Cemburu ya?",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Lanjut ke momen di taman", nextScene: "rute_b4_taman" }]
    },
    rute_b4_terpendam: {
        speaker: "Narator",
        text: "{player} memilih diam, tapi rasa tidak nyaman membuatnya kurang fokus. Dia salah mencampur warna hingga merusak latar. Kirana menyadari ada yang aneh tapi tidak bertanya.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'kesal'),
        choices: [{ text: "Lanjut ke momen di taman", nextScene: "rute_b4_taman" }]
    },
    rute_b4_taman: {
        speaker: "Kirana",
        text: "...Kadang aku takut, semua orang cuma suka 'Kirana yang jago gambar', bukan aku yang beneran. Bang Yusuf, temen-temen sanggar, Bu Sari, bahkan mungkin kamu juga... kalau suatu hari aku nggak bisa gambar bagus lagi, apa masih ada yang peduli?",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: "", charRight: img('kirana', 'cemas'),
        choices: [{ text: "Lanjut ke konflik Dewi", nextScene: "rute_b5_dewi" }]
    },
    rute_b5_dewi: {
        speaker: "Narator",
        text: "Di sisi lain, Dewi—teman sekelas {player}—semakin sering mencari alasan untuk mengobrol, dan akhirnya mengajak jalan berdua. Tepat saat mereka berjalan di koridor, Kirana lewat dan melihatnya. Dia buru-buru pergi tanpa menyapa.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: img('kirana', 'sedih'),
        choices: [
            { text: "A. Kejar Kirana dan jelaskan situasi dengan jujur", nextScene: "rute_b6_klarifikasi" },
            { text: "B. Biarkan kesalahpahaman berlarut", nextScene: "rute_b6_diam" }
        ]
    },
    rute_b6_klarifikasi: {
        speaker: "Kirana",
        text: "Itu Dewi yang ngajak, aku nggak— Kamu nggak perlu jelasin ke aku. Bukan urusanku juga, kan, siapa yang deket sama kamu. Tapi aku suka kamu bukan karena kamu jago gambar. Aku suka caramu ketawa lepas, caramu semangat walau capek, caramu bikin orang di sekitar kamu ikut cerah.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'melankolis'),
        choices: [
            { text: "Lanjut...", nextScene: "rute_b7_ending1" }
        ]
    },
    rute_b6_diam: {
        speaker: "Narator",
        text: "Karena keraguan {player}, Kirana perlahan menjauh. Dia mulai lebih sering menghabiskan waktu di sanggar, dan {player} menyadari kesalahannya terlambat.",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'netral'),
        choices: [{ text: "Lanjut ke Akhir", nextScene: "rute_b7_ending_sahabat" }]
    },
    rute_b7_ending1: {
        speaker: "Kirana",
        text: "Ini karya paling berarti yang pernah aku buat. Bukan karena hasilnya, tapi karena siapa yang bikin bareng aku. (Good End)",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: img('kirana', 'terharu'),
        unlockQuote: "quote_kirana",
        choices: [
            { text: "A. Ajak Kirana ke Pasar Malam sebagai perayaan", nextScene: "rute_b7_ending2" },
            { text: "B. Cukupkan cerita di titik ini", nextScene: "menu" }
        ]
    },
    rute_b7_ending2: {
        speaker: "Kirana",
        text: "Ternyata seru juga jadi orang biasa. Makasih udah nunjukin ini ke aku. (Epilog Tambahan)",
        bg: assets.BACKGROUNDS.luarSekolah.pasarMalam, charLeft: "", charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_kirana",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_b7_ending_sahabat: {
        speaker: "Kirana",
        text: "Kita tetep temenan, kan? Selalu. Cuma... mungkin bukan yang lain, untuk sekarang. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: img('kirana', 'tersenyum'),
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    // ================= RUTE C — DILEMA DUA HATI =================
    rute_c2c: {
        speaker: "Bima",
        text: "Kamu itu bukan pemeran utama drama yang bisa pegang dua cewek sekaligus, Di. Cepat atau lambat, salah satu—atau dua-duanya—bakal sadar.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "A. Tetap keras kepala jalani keduanya", nextScene: "rute_c3_bertahan" },
            { text: "B. Mulai jujur kalau ini nggak berkelanjutan", nextScene: "rute_c3_ragu" }
        ]
    },
    rute_c3_bertahan: {
        speaker: "Narator",
        text: "Rapor tengah semester keluar, dan nilai {player} anjlok drastis.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_ragu: {
        speaker: "Narator",
        text: "Rapor tengah semester keluar, dan nilai {player} anjlok drastis.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_panggil_hendra: {
        speaker: "Pak Hendra",
        text: "Sekolah bukan tempat buat kamu coba-coba nyenengin semua orang sambil ninggalin tanggung jawab utama. Kejujuran itu bukan cuma soal jujur ke orang lain, tapi jujur soal apa yang kamu benar-benar mau. Coba sesekali ke perpustakaan, cari tempat tenang buat mikir jernih.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [
            { text: "A. Akhirnya memilih fokus ke salah satu", nextScene: "rute_c4_memilih" },
            { text: "B. Memutuskan untuk jujur ke dua-duanya", nextScene: "rute_c4_jujur" }
        ]
    },
    rute_c4_memilih: {
        speaker: "Narator",
        text: "{player} memutuskan untuk fokus ke salah satu. Siapa yang akan dia pilih?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "A. Fokus ke Alexandra", nextScene: "rute_a5_rangga" },
            { text: "B. Fokus ke Kirana", nextScene: "rute_b5_dewi" }
        ]
    },
    rute_c4_jujur: {
        speaker: "Narator",
        text: "{player} mengumpulkan keberanian, mengajak Alexandra dan Kirana bicara terpisah. Mengatakan yang sama ke keduanya: dia belum bisa memastikan perasaannya, dan tidak ingin membohongi siapa pun.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut ke Ending Terbuka", nextScene: "rute_c5_ending" }]
    },
    rute_c5_ending: {
        speaker: "Pak Hendra",
        text: "Nilai ulanganmu minggu ini naik, lho. Saya masih belum tahu jawabannya, Pak. Nggak masalah. Yang penting kamu nggak lari dari pertanyaannya. (Ending Terbuka)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('pakHendra', 'ramah'), charRight: "",
        unlockQuote: "quote_normal",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    }
};


/* ------------------------------------------------------------
   4. NAVIGASI DAN ENGINE (SISTEM TETAP)
   ------------------------------------------------------------ */
function hideAllScreens() {
    ['main-menu', 'name-input-screen', 'game-screen', 'sub-menu-screen'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
}

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
    loadScene('prolog_1');
}

function backToMenu() {
    hideAllScreens();
    document.getElementById('main-menu').classList.remove('hidden');
}

function showSettings() {
    hideAllScreens();
    document.getElementById('sub-menu-screen').classList.remove('hidden');
    document.getElementById('sub-menu-title').innerText = 'Pengaturan';
    document.getElementById('sub-menu-content').innerHTML = '<p style="opacity:.8">Pengaturan suara & teks belum tersedia di build ini.</p>';
}

function showGallery() {
    hideAllScreens();
    document.getElementById('sub-menu-screen').classList.remove('hidden');
    document.getElementById('sub-menu-title').innerText = 'Koleksi Quotes';
    const box = document.getElementById('sub-menu-content');
    box.innerHTML = '';
    for (const [key, text] of Object.entries(allQuotes)) {
        const item = document.createElement('div');
        item.className = 'quote-item';
        item.innerHTML = unlockedQuotes.includes(key)
            ? `<strong>Terbuka:</strong> "${text}"`
            : `🔒 <em>(Mainkan rute lain untuk membuka)</em>`;
        box.appendChild(item);
    }
}

function loadScene(sceneKey) {
    if (sceneKey === 'menu') { backToMenu(); return; }
    const scene = storyData[sceneKey];
    if (!scene) { console.error('Scene tidak ditemukan:', sceneKey); return; }

    const replaceTags = (str) => str
        .replace(/{alexandra}/g, 'Alexandra')
        .replace(/{kirana}/g, 'Kirana')
        .replace(/{player}/g, playerName);

    const processedText = replaceTags(scene.text);
    const processedSpeaker = replaceTags(scene.speaker);

    const speakerBox = document.getElementById('speaker-name-box');
    if (processedSpeaker === "Narator") {
        speakerBox.classList.add('hide-name-box');
    } else {
        speakerBox.classList.remove('hide-name-box');
        document.getElementById('speaker-name').innerText = processedSpeaker;
    }

    document.getElementById('dialogue-text').innerText = processedText;
    document.getElementById('background-image').style.backgroundImage = `url('${scene.bg}')`;

    const charL = document.getElementById('char-left');
    if (scene.charLeft) { charL.src = scene.charLeft; charL.classList.remove('hidden'); } 
    else { charL.classList.add('hidden'); }

    const charR = document.getElementById('char-right');
    if (scene.charRight) { charR.src = scene.charRight; charR.classList.remove('hidden'); } 
    else { charR.classList.add('hidden'); }

    if (scene.unlockQuote) saveQuote(scene.unlockQuote);

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = replaceTags(choice.text);
        btn.onclick = () => loadScene(choice.nextScene);
        choicesContainer.appendChild(btn);
    });
}

function saveQuote(quoteId) {
    if (unlockedQuotes.includes(quoteId)) return;
    unlockedQuotes.push(quoteId);
    try { localStorage.setItem('vn_quotes', JSON.stringify(unlockedQuotes)); } catch (e) {}

    const toast = document.getElementById('toast-notif');
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 500);
    }, 4000);
}