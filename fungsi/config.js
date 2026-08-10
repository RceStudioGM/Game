/* ============================================================
   config.js — Data Aset Gambar & Quotes
   ============================================================ */

// --- BACKGROUND PATH ---
const assets = {
    BACKGROUNDS: {
        sekolahUmum: {
            koridor:     'assets/background/koridor.png',
            kelas:       'assets/background/ruang_kelas.png',
            ruangGuruBK: 'assets/background/ruang_bk.png',
            taman:       'assets/background/taman.png',
            perpustakaan:'assets/background/perpustakaan.png',
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

    CHARACTER_PATHS: {
        alexandra: 'alexandra_wijaya',
        kirana:    'kirana_maheswari',
        mc:        'mc_protagonis',
        bima:      'bima_satrio',
        rangga:    'rangga_aditya',
        buSari:    'bu_sari',
        pakHendra: 'pak_hendra',
        farah:     'farah_novita',
        dewi:      'dewi',
        bangYusuf: 'bang_yusuf'
    }
};

// --- KOLEKSI QUOTES ---
const allQuotes = {
    quote_alexandra: "Logika memang penting, tapi keberanianmu menemaniku di saat sulit adalah rumus yang tak terduga.",
    quote_kirana: "Karya seni terindah bukan dari kanvas mahal, tapi dari momen tak terduga bersamamu.",
    quote_normal: "Kadang kita nggak butuh akhir yang romantis, cukup persahabatan konyol yang bikin masa SMA berkesan.",
    quote_bad: "Ego yang tinggi hanya akan meruntuhkan panggung yang susah payah dibangun bersama.",
    quote_guru: "Kedisiplinan itu pahit di awal, tapi penyesalan datang jauh lebih pahit kalau kamu nggak jujur sama diri sendiri.",
    quote_epilog: "Persimpangan yang belum usai, tapi tak lagi perlu disesali.",
};

// --- DATA PROFIL KARAKTER ---
const characterProfiles = {
    mc: {
        id: 'mc',
        name: 'MC (Adi Pratama)',
        role: 'Protagonis',
        desc: 'Murid kelas 2 SMA biasa. Nilai pas-pasan, hobi baca komik dan tidur di kelas. Baik hati, agak canggung, tapi selalu berusaha jujur pada dirinya sendiri.',
        unlockKey: null
    },
    alexandra: {
        id: 'alexandra',
        name: 'Alexandra Wijaya',
        role: 'Ketua OSIS',
        desc: 'Tegas, disiplin, perfeksionis. Di balik topeng ketegasannya, dia menyimpan kecemasan dan kesepian. Takut mengecewakan orang lain dan jarang membiarkan siapa pun dekat.',
        unlockKey: 'routeA'
    },
    kirana: {
        id: 'kirana',
        name: 'Kirana Maheswari',
        role: 'Jenius Seni Sekolah',
        desc: 'Ceria, kreatif, dan bebas. Juara lomba lukis nasional. Namun diam-diam ia takut jika suatu hari bakatnya hilang, orang-orang akan berhenti menyukainya.',
        unlockKey: 'routeB'
    },
    rangga: {
        id: 'rangga',
        name: 'Rangga Aditya',
        role: 'Wakil Ketua OSIS',
        desc: 'Bertanggung jawab dan protektif, terutama pada Alexandra. Awalnya sangat curiga pada MC, tapi akhirnya memberikan restunya. Diam-diam menyukai Alexandra.',
        unlockKey: 'secretRoute'
    },
    farah: {
        id: 'farah',
        name: 'Farah Novita',
        role: 'Sekretaris OSIS',
        desc: 'Ramah dan empatik. Sahabat Alexandra sejak SMP, sering menjadi "penerjemah" perasaan Alexandra yang sulit diungkapkan. Selalu membawa buku catatan kecil.',
        unlockKey: 'secretRoute'
    },
    bima: {
        id: 'bima',
        name: 'Bima Satrio',
        role: 'Sahabat MC',
        desc: 'Humoris, cerewet, dan sumber gosip sekolah. Meski kadang nyebelin, dia adalah sahabat paling setia yang selalu siap jadi tempat curhat MC.',
        unlockKey: null
    },
    pakHendra: {
        id: 'pakHendra',
        name: 'Pak Hendra',
        role: 'Wali Kelas (Guru Matematika)',
        desc: 'Tegas soal akademik, tetapi sangat perhatian. Pengalaman mengajar 28 tahun membuatnya tidak mudah dibohongi, dan nasihatnya selalu bijak.',
        unlockKey: null
    },
    buSari: {
        id: 'buSari',
        name: 'Bu Sari',
        role: 'Guru Seni',
        desc: 'Tenang dan sabar. Mentor Kirana. Dia sengaja "meminjam" MC untuk membantu Kirana agar mereka berdua bisa saling mengenal lebih dalam.',
        unlockKey: 'secretRoute'
    }
};