/* ============================================================
   KONFIGURASI AUDIO — BGM per suasana cerita + SFX
   Taruh file musik kamu di:
     assets/music/bgm/<nama>.mp3   (BGM, disesuaikan mood tiap scene)
     assets/music/sfx/<nama>.mp3   (SFX, generik — tidak terikat scene)
   Kalau nama file kamu beda, tinggal ganti path di bawah ini saja,
   tidak perlu ubah kode lain.
   ============================================================ */
const audioConfig = {
    BGM: {
        // Menu & transisi umum
        lobby:               'assets/music/bgm/lobby.mp3',
        daily_common:        'assets/music/bgm/daily_common.mp3',   // hari-hari biasa, koridor, netral
        comedy:              'assets/music/bgm/comedy.mp3',          // godaan Bima, momen ringan/lucu

        // Nuansa per "dunia" heroine
        council_focus:       'assets/music/bgm/council_focus.mp3',   // OSIS, Alexandra — disiplin & serius
        art_whimsy:          'assets/music/bgm/art_whimsy.mp3',      // Ruang Seni, Kirana — ceria & bebas
        mystery:             'assets/music/bgm/mystery.mp3',         // Mira, loteng arsip — tenang & misterius

        // Nuansa emosional lintas rute
        tender:              'assets/music/bgm/tender.mp3',          // momen hangat/lembut membangun kedekatan
        tension:              'assets/music/bgm/tension.mp3',         // konflik, ujian kepercayaan, krisis
        melancholy:           'assets/music/bgm/melancholy.mp3',      // sedih, ragu, kehilangan
        night_calm:            'assets/music/bgm/night_calm.mp3',      // adegan malam yang tenang (opsional dipakai manual)
        festival:              'assets/music/bgm/festival.mp3',        // Aula Festival, perayaan, upbeat

        // Ending
        ending_good:           'assets/music/bgm/ending_good.mp3',
        ending_bittersweet:    'assets/music/bgm/ending_bittersweet.mp3',
        ending_bad:             'assets/music/bgm/ending_bad.mp3',
        true_ending:            'assets/music/bgm/true_ending.mp3',
    },
    SFX: {
        click:    'assets/music/sfx/click.mp3',     // klik tombol/lanjut dialog (default)
        confirm:  'assets/music/sfx/confirm.mp3',   // konfirmasi pilihan penting
        save:     'assets/music/sfx/save.mp3',      // berhasil menyimpan
        unlock:   'assets/music/sfx/unlock.mp3',    // quote/karakter baru terbuka
        error:    'assets/music/sfx/error.mp3',     // aksi tidak valid / bad end
    }
};

const assets = {
    BACKGROUNDS: {
        sekolahUmum: {
            koridor:     'assets/background/koridor.png',
            kelas:       'assets/background/ruang_kelas.png',
            ruangGuruBK: 'assets/background/ruang_bk.png',
            taman:       'assets/background/taman.png',
            perpustakaan:'assets/background/perpustakaan.png',
            kantin:       'assets/background/kantin.png',
            lapanganBasket: 'assets/background/lapangan_basket.png',
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
            warkopSanggar: 'assets/background/warkop_sanggar.png',
        },
        spesial: {
            atapMalam:    'assets/background/atap_malam.png',
            aulaFestival: 'assets/background/aula_festival.png',
        },
        rahasia: {
            lotengArsip:  'assets/background/loteng_arsip.png',
            halteBus:     'assets/background/halte_bus.png',
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
        bangYusuf: 'bang_yusuf',
        mira:      'mira_anindya',
        alvin:     'alvin_pradana'
    }
};

const allQuotes = {
    quote_a1: "Kamu nggak bikin aku harus jadi 'Ketua OSIS' terus. Cukup jadi Alexandra aja. — Alexandra",
    quote_b1: "Ini karya paling berarti yang pernah aku buat. Bukan karena hasilnya, tapi karena siapa yang bikin bareng aku. — Kirana",
    quote_m1: "Ini pertama kalinya aku milih buat tinggal, bukan cuma nurutin ke mana pun aku dibawa pergi. Dan aku milih di sini. Sama kamu. — Mira",
    quote_c: "Nilai ulanganmu minggu ini naik. Saya masih belum tahu jawabannya, Pak. Nggak masalah, yang penting kamu nggak lari dari pertanyaannya. — Pak Hendra",
    quote_r1: "Bukan kisah cinta segitiga dengan satu pemenang, tapi tiga orang yang saling menemukan versi terbaik diri mereka. — Narator",
    quote_r2: "Terima kasih sudah memilihku. / Senang banget kamu memilihku! — Alexandra & Kirana",
    quote_a2: "Aku cuma takut kalau aku jujur, aku bakal kelihatan lemah. — Alexandra",
    quote_b2: "Ternyata seru juga jadi orang biasa. Makasih udah nunjukin ini. — Kirana",
    quote_m3: "Makasih udah jadi tempat yang nggak pernah bikin aku ngerasa cuma 'numpang lewat'. Aku bakal selalu inget loteng itu. Dan kamu. — Mira",
};

const locales = {
    en: {
        langName: "English",
        gameTitle: "My Favorite Corridor",
        gameSub: "A Romantic Visual Novel",
        btnContinue: "▶ CONTINUE",
        btnNewGame: "▶ NEW GAME",
        btnProfiles: "📖 CHARACTER PROFILES",
        btnGallery: "📖 QUOTE GALLERY",
        btnSettings: "⚙️ SETTINGS",
        inputTitle: "WHO ARE YOU?",
        inputSub: "Enter the protagonist's nickname",
        inputPlaceholder: "Example: Adi",
        inputBtnStart: "Start the Story",
        inputBtnCancel: "Cancel",
        pauseTitle: "⏸️ Pause",
        pauseSave: "💾 Save Game",
        pauseLoad: "📂 Load Game",
        pauseSettings: "⚙️ Settings",
        pauseQuit: "🚪 Quit Game",
        pauseBack: "Back",
        settingsTitle: "⚙️ Settings",
        settingsBGM: "🎵 BGM Volume",
        settingsSFX: "🔊 SFX Volume",
        settingsRes: "🖥️ Resolution",
        settingsLang: "🌐 Language",
        settingsBack: "Back",
        btnHowToPlay: "🕹️ How to Play",
        howToPlayTitle: "🕹️ How to Play",
        howToPlayDesc1: "In the Main Lobby: Use the <b>LEFT</b> and <b>RIGHT</b> Arrow keys to select menus. Press <b>SPACE</b> or <b>ENTER</b> to confirm.",
        howToPlayDesc2: "In the Game (when multiple choices appear): Use the <b>UP</b> and <b>DOWN</b> Arrow keys to select. Press <b>SPACE</b> or <b>ENTER</b> to confirm.",
        howToPlayDesc3: "During a dialogue with only one 'Continue' option: Press <b>SPACE</b> to instantly advance the text.",
        howToPlayClose: "Close",
        saveLoadTitleSave: "💾 Save Game",
        saveLoadTitleLoad: "📂 Load Game",
        saveLoadSubSave: "Select a slot to save your progress",
        saveLoadSubLoad: "Select a slot to load from",
        saveLoadBack: "Back",
        confirmYes: "Yes, Proceed",
        confirmNo: "Cancel",
        confirmQuitTitle: "🚪 Quit?",
        confirmQuitMsg: "Are you sure you want to quit? Unsaved progress will be lost.",
        confirmOverwriteTitle: "Overwrite Slot?",
        confirmOverwriteMsg: "Slot {n} is already filled ({date}). Overwrite with current progress?",
        confirmLoadTitle: "Load this Slot?",
        confirmLoadMsg: "Current unsaved progress will be lost. Continue loading Slot {n}?",
        confirmDeleteTitle: "Delete Slot?",
        confirmDeleteMsg: "Slot {n} will be permanently deleted and cannot be restored.",
        toastUnlock: "Something Unlocked!",
        toastUnlockMsg: "Check the menu to see it.",
        toastSave: "✅ Saved!",
        toastSaveMsg: "Progress successfully saved to Slot {n}.",
        profile_mc: "MC (Adi Pratama)",
        profile_alexandra: "Alexandra Wijaya",
        profile_kirana: "Kirana Maheswari",
        profile_mira: "Mira Anindya",
        profile_rangga: "Rangga Aditya",
        profile_farah: "Farah Novita",
        profile_bima: "Bima Satrio",
        profile_pakHendra: "Mr. Hendra",
        profile_buSari: "Mrs. Sari",
        profile_alvin: "Alvin Pradana",
        lockText: "🔒 Locked",
        lockRouteA: "🔒 Complete Alexandra's Route",
        lockRouteB: "🔒 Complete Kirana's Route",
        lockRouteM: "🔒 Complete Mira's Route",
        lockSecret: "🔒 Complete All Heroines' Routes",
    },
    id: {
        langName: "Indonesia",
        gameTitle: "My Favorite Corridor",
        gameSub: "Romansa Sekolah Visual Novel",
        btnContinue: "▶ LANJUTKAN",
        btnNewGame: "▶ MULAI BARU",
        btnProfiles: "📖 PROFIL KARAKTER",
        btnGallery: "📖 KOLEKSI QUOTES",
        btnSettings: "⚙️ PENGATURAN",
        inputTitle: "SIAPA NAMA KAMU?",
        inputSub: "Masukkan nama panggilan karakter utama",
        inputPlaceholder: "Contoh: Adi",
        inputBtnStart: "Mulai Masuk Cerita",
        inputBtnCancel: "Batal",
        pauseTitle: "⏸️ Jeda",
        pauseSave: "💾 Simpan",
        pauseLoad: "📂 Lanjutkan (Muat Slot)",
        pauseSettings: "⚙️ Pengaturan",
        pauseQuit: "🚪 Keluar Game",
        pauseBack: "Kembali",
        settingsTitle: "⚙️ Pengaturan",
        settingsBGM: "🎵 Musik Latar (BGM)",
        settingsSFX: "🔊 Efek Suara (SFX)",
        settingsRes: "🖥️ Resolusi Layar",
        settingsLang: "🌐 Bahasa",
        settingsBack: "Kembali",
        btnHowToPlay: "🕹️ Cara Bermain",
        howToPlayTitle: "🕹️ Cara Bermain",
        howToPlayDesc1: "Di Lobby Utama: Gunakan tombol Panah <b>KIRI</b> dan <b>KANAN</b> untuk memilih menu. Tekan <b>SPASI</b> atau <b>ENTER</b> untuk konfirmasi.",
        howToPlayDesc2: "Di Dalam Game (saat banyak pilihan muncul): Gunakan tombol Panah <b>ATAS</b> dan <b>BAWAH</b> untuk memilih. Tekan <b>SPASI</b> atau <b>ENTER</b> untuk konfirmasi.",
        howToPlayDesc3: "Saat dialog hanya memiliki opsi 'Lanjut...': Tekan <b>SPASI</b> untuk langsung melanjutkan teks.",
        howToPlayClose: "Tutup",
        saveLoadTitleSave: "💾 Simpan Permainan",
        saveLoadTitleLoad: "📂 Muat Permainan",
        saveLoadSubSave: "Pilih slot untuk menyimpan progress kamu",
        saveLoadSubLoad: "Pilih slot yang ingin dimuat",
        saveLoadBack: "Kembali",
        confirmYes: "Ya, Lanjutkan",
        confirmNo: "Batal",
        confirmQuitTitle: "🚪 Keluar?",
        confirmQuitMsg: "Yakin ingin keluar game? Progress yang belum disimpan akan hilang.",
        confirmOverwriteTitle: "Timpa Slot?",
        confirmOverwriteMsg: "Slot {n} sudah terisi ({date}). Timpa dengan progress saat ini?",
        confirmLoadTitle: "Muat Slot Ini?",
        confirmLoadMsg: "Progress yang belum disimpan saat ini akan hilang. Lanjutkan memuat Slot {n}?",
        confirmDeleteTitle: "Hapus Slot?",
        confirmDeleteMsg: "Slot {n} akan dihapus permanen dan tidak bisa dikembalikan.",
        toastUnlock: "Sesuatu Terbuka!",
        toastUnlockMsg: "Cek menu untuk melihatnya.",
        toastSave: "✅ Tersimpan!",
        toastSaveMsg: "Progress berhasil disimpan di Slot {n}.",
        profile_mc: "MC (Adi Pratama)",
        profile_alexandra: "Alexandra Wijaya",
        profile_kirana: "Kirana Maheswari",
        profile_mira: "Mira Anindya",
        profile_rangga: "Rangga Aditya",
        profile_farah: "Farah Novita",
        profile_bima: "Bima Satrio",
        profile_pakHendra: "Pak Hendra",
        profile_buSari: "Bu Sari",
        profile_alvin: "Alvin Pradana",
        lockText: "🔒 Terkunci",
        lockRouteA: "🔒 Selesaikan Rute Alexandra",
        lockRouteB: "🔒 Selesaikan Rute Kirana",
        lockRouteM: "🔒 Selesaikan Rute Mira",
        lockSecret: "🔒 Selesaikan Semua Rute Heroine",
    }
};

const characterProfiles = {
    mc: { id: 'mc', name: 'MC (Adi Pratama)', role: 'Protagonis', desc: 'Murid kelas 2 SMA biasa. Nilai pas-pasan, hobi baca komik dan tidur di kelas. Baik hati, agak canggung, tapi selalu berusaha jujur pada dirinya sendiri.', unlockKey: null },
    alexandra: { id: 'alexandra', name: 'Alexandra Wijaya', role: 'Ketua OSIS', desc: 'Tegas, disiplin, perfeksionis. Di balik topeng ketegasannya, dia menyimpan kecemasan dan kesepian. Takut mengecewakan orang lain dan jarang membiarkan siapa pun dekat.', unlockKey: 'routeA' },
    kirana: { id: 'kirana', name: 'Kirana Maheswari', role: 'Jenius Seni Sekolah', desc: 'Ceria, kreatif, dan bebas. Juara lomba lukis nasional. Namun diam-diam ia takut jika suatu hari bakatnya hilang, orang-orang akan berhenti menyukainya.', unlockKey: 'routeB' },
    mira: { id: 'mira', name: 'Mira Anindya', role: 'Murid Pindahan', desc: 'Pendiam, waspada, dan sangat cerdas. Sudah pindah sekolah empat kali dalam tiga tahun. Suka menulis cerpen di loteng arsip perpustakaan, dan belajar untuk tidak terlalu dekat dengan siapa pun agar tidak sakit hati saat harus pergi lagi.', unlockKey: 'routeM' },
    rangga: { id: 'rangga', name: 'Rangga Aditya', role: 'Wakil Ketua OSIS', desc: 'Bertanggung jawab dan protektif, terutama pada Alexandra. Awalnya sangat curiga pada MC, tapi akhirnya memberikan restunya. Diam-diam menyukai Alexandra.', unlockKey: 'secretRoute' },
    farah: { id: 'farah', name: 'Farah Novita', role: 'Sekretaris OSIS', desc: 'Ramah dan empatik. Sahabat Alexandra sejak SMP, sering menjadi "penerjemah" perasaan Alexandra yang sulit diungkapkan. Selalu membawa buku catatan kecil.', unlockKey: 'secretRoute' },
    bima: { id: 'bima', name: 'Bima Satrio', role: 'Sahabat MC', desc: 'Humoris, cerewet, dan sumber gosip sekolah. Meski kadang nyebelin, dia adalah sahabat paling setia yang selalu siap jadi tempat curhat MC.', unlockKey: null },
    pakHendra: { id: 'pakHendra', name: 'Pak Hendra', role: 'Wali Kelas (Guru Matematika)', desc: 'Tegas soal akademik, tetapi sangat perhatian. Pengalaman mengajar 28 tahun membuatnya tidak mudah dibohongi, dan nasihatnya selalu bijak.', unlockKey: null },
    buSari: { id: 'buSari', name: 'Bu Sari', role: 'Guru Seni', desc: 'Tenang dan sabar. Mentor Kirana. Dia sengaja "meminjam" MC untuk membantu Kirana agar mereka berdua bisa saling mengenal lebih dalam.', unlockKey: 'secretRoute' },
    alvin: { id: 'alvin', name: 'Alvin Pradana', role: 'Sahabat Masa Kecil', desc: 'Sahabat Mira sejak SD. Sudah lama menyukainya tapi takut mengungkapkan. Baik hati, tapi bisa menjadi rival yang serius.', unlockKey: null }
};