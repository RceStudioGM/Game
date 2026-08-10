/* ============================================================
   story.js — Data Alur Cerita Visual Novel (LENGKAP)
   ============================================================ */

const storyData = {
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
        choices: [
            { text: "Minta maaf berkali-kali sampai dia risih", nextScene: "common_hari1_3a" },
            { text: "Minta maaf singkat lalu buru-buru pergi", nextScene: "common_hari1_3b" }
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

    common_hari2: {
        speaker: "Bima",
        text: "Wanjayy, denger-denger ada yang disuruh bantuin OSIS sama anak seni nih. Lu mau punya harem ya lu, {player}?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Curhat balik ke Bima soal bingung mau pilih", nextScene: "common_hari2_curhat" },
            { text: "Diam saja, nggak nanggepin Bima", nextScene: "common_hari2_diam" }
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

    common_hari3: {
        speaker: "Narator",
        text: "Sehari sebelum memutuskan, kamu punya waktu luang siang ini. Mau mengintip dunia mana dulu?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "Lewat depan Sekretariat OSIS", nextScene: "common_hari3_osis" },
            { text: "Lewat depan Ruang Seni", nextScene: "common_hari3_seni" },
            { text: "Langsung pulang, nggak mau ambil pusing", nextScene: "common_hari4" }
        ]
    },
    common_hari3_osis: {
        speaker: "Narator",
        text: "Kamu melihat Alexandra sedang memarahi anggota OSIS yang telat laporan, dengan Rangga berdiri di belakangnya seperti pengawal. Farah diam-diam menenangkan anggota yang kena marah.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Kembali", nextScene: "common_hari3" }]
    },
    common_hari3_seni: {
        speaker: "Narator",
        text: "Kamu melihat Kirana tertawa lepas melempar cat ke tembok. Dia buru-buru membersihkannya sebelum Bu Sari lihat—tapi ketahuan juga. Bu Sari cuma menghela napas geli, sudah terbiasa.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Kembali", nextScene: "common_hari3" }]
    },

    common_hari4: {
        speaker: "Bima",
        text: "Eh, Dewi kayaknya naksir kamu deh. Cewek IPS pindahan itu, kan? Kamu sih masih sibuk mikirin pilihan besar besok.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Lanjut ke Hari 5...", nextScene: "bab1_pilihan" }]
    },
    bab1_pilihan: {
        speaker: "Narator",
        text: "Hari ini hari keputusan. Pilihan mana yang akan kamu ambil?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [] // Diisi engine
    },

    rute_a2a: {
        speaker: "Farah",
        text: "Kamu pasti yang dimaksud Alexandra ya? Jangan takut, dia emang gitu ke semua orang di awal.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut", nextScene: "rute_a2b" }]
    },
    rute_a2b: {
        speaker: "Alexandra",
        text: "Baca proposal ini. Tandai kalau ada yang tidak masuk akal. Jangan asal setuju cuma karena sungkan.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Bertanya ke Farah kenapa namaku dipilih", nextScene: "rute_a2c" }]
    },
    rute_a2c: {
        speaker: "Farah",
        text: "Alexandra yang milih langsung. Dia pengen ada yang jujur, bukan yang cari muka.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [
            { text: "Kerjakan tugas dengan serius dan diam", nextScene: "rute_a3_tenang" },
            { text: "Coba mencairkan suasana dengan bercanda", nextScene: "rute_a3_cair" }
        ]
    },
    rute_a3_tenang: {
        speaker: "Narator",
        text: "Kamu bekerja tanpa banyak bicara, menandai proposal dengan catatan tajam. Alexandra terkesan meski tidak menunjukkannya.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_a3_momen" }]
    },
    rute_a3_cair: {
        speaker: "Alexandra",
        text: "Aku di sini buat semua selesai dengan benar. (Narator: Kamu berhasil membuatnya sedikit terkejut, dia tidak terbiasa dibalas tanpa rasa takut.)",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'terkejut'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_a3_momen" }]
    },
    rute_a3_momen: {
        speaker: "Narator",
        text: "Suatu sore, kamu menemukan Alexandra tertidur di meja kerja. Kamu menyelimutinya dengan jaket.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [{ text: "Tunggu dia bangun...", nextScene: "rute_a3_bangun" }]
    },
    rute_a3_bangun: {
        speaker: "Alexandra",
        text: "Kenapa kamu masih di sini? ...Nggak perlu nungguin aku bangun kayak gini.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'gugup'), charRight: "",
        choices: [
            { text: "Ajak dia ke Taman untuk istirahat", nextScene: "rute_a4_taman" },
            { text: "Ikuti kebiasaannya menyendiri di Perpustakaan", nextScene: "rute_a4_perpus" }
        ]
    },
    rute_a4_taman: {
        speaker: "Narator",
        text: "Di taman, Alexandra mengaku takut ketinggalan sesuatu jika diam. Kamu menenangkannya.",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut ke Ujian Kepercayaan", nextScene: "rute_a3_ujian" }]
    },
    rute_a4_perpus: {
        speaker: "Narator",
        text: "Di perpustakaan, dia membiarkan kamu duduk di dunianya yang paling sepi untuk pertama kalinya.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut ke Ujian Kepercayaan", nextScene: "rute_a3_ujian" }]
    },
    rute_a3_ujian: {
        speaker: "Alexandra",
        text: "Pegang ini. Daftar evaluasi seluruh divisi OSIS. Jangan sampai bocor ke siapa pun.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [
            { text: "Tolak cerita apa pun ke Bima", nextScene: "rute_a5_rangga" },
            { text: "Bocorkan sedikit ke Bima", nextScene: "bad_end_a_x" }
        ]
    },
    bad_end_a_x: {
        speaker: "Alexandra",
        text: "Aku kasih kamu kepercayaan paling besar, dan kamu buang begitu aja. Jangan deket-deket sekretariat lagi. (BAD END: Kepercayaan yang Retak)",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'marah'), charRight: "",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_a5_rangga: {
        speaker: "Rangga",
        text: "Alexandra udah terlalu banyak dikecewakan orang. Kalau kamu nggak serius, mundur sekarang.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('rangga', 'curiga'), charRight: "",
        choices: [
            { text: "Yakinkan Rangga niatku tulus", nextScene: "rute_a5_percaya" },
            { text: "Ragu dan mulai menjaga jarak", nextScene: "rute_a5_ragu" }
        ]
    },
    rute_a5_percaya: {
        speaker: "Narator",
        text: "Kamu terus membantu Alexandra. H-1 festival, dia nyaris kolaps.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [{ text: "Lanjut ke Malam Sebelum Festival...", nextScene: "rute_a6_malam" }]
    },
    rute_a5_ragu: {
        speaker: "Narator",
        text: "Kamu menjaga jarak. Festival usai tanpa ada yang terucap.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'kecewa'), charRight: "",
        choices: [{ text: "Lanjut ke Ending", nextScene: "rute_a6_ending_sahabat" }]
    },
    rute_a6_malam: {
        speaker: "Narator",
        text: "Di tengah lembur, lampu ruangan padam—korsleting! Semua panik.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: "", charRight: "",
        choices: [
            { text: "Tetap tenang, cari kotak sekring dan atur tim", nextScene: "rute_a6_ending_bonus" },
            { text: "Ikut panik, malah tambah kacau", nextScene: "rute_a6_ending_normal" }
        ]
    },
    rute_a6_ending_bonus: {
        speaker: "Narator",
        text: "Krisis teratasi. Alexandra diam-diam kagum. Dia percaya padamu.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('alexandra', 'bahagia'), charRight: "",
        choices: [{ text: "Lanjut ke Ending", nextScene: "rute_a6_ending1" }]
    },
    rute_a6_ending_normal: {
        speaker: "Narator",
        text: "Farah yang mengambil alih. Alexandra sempat kecewa, tapi tidak fatal.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut ke Ending", nextScene: "rute_a6_ending2" }]
    },
    rute_a6_ending1: {
        speaker: "Alexandra",
        text: "Kamu nggak bikin aku harus jadi 'Ketua OSIS' terus. Cukup jadi Alexandra aja. (Good End)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_alexandra",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_a6_ending2: {
        speaker: "Alexandra",
        text: "Aku cuma takut kalau aku jujur, aku bakal kelihatan lemah. (Bittersweet End)",
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

    rute_b2b: {
        speaker: "Kirana",
        text: "{player}! Menurutmu mural ini harusnya pakai warna apa buat langitnya?",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Ikuti saja arahan spontan Kirana", nextScene: "rute_b3_mengalir" },
            { text: "Usulkan ide sendiri untuk mural", nextScene: "rute_b3_berani" }
        ]
    },
    rute_b3_mengalir: {
        speaker: "Narator",
        text: "Kamu menurut saja. Kirana makin nyaman dan menganggapmu tempat pelarian paling santai.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Lanjut...", nextScene: "rute_b3_sanggar" }]
    },
    rute_b3_berani: {
        speaker: "Kirana",
        text: "Itu ide bagus banget! Kamu punya insting yang oke!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'terkejut'),
        choices: [{ text: "Lanjut...", nextScene: "rute_b3_sanggar" }]
    },
    rute_b3_sanggar: {
        speaker: "Narator",
        text: "Di sanggar, kamu melihat Bang Yusuf. Kedekatan mereka membuatmu canggung.",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Bertanya langsung ke Kirana", nextScene: "rute_b4_terbuka" },
            { text: "Memendam rasa penasaran", nextScene: "rute_b4_terpendam" }
        ]
    },
    rute_b4_terbuka: {
        speaker: "Kirana",
        text: "Dia kayak kakak buat aku. Kenapa? Cemburu ya?",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Lanjut...", nextScene: "rute_b4_taman" }]
    },
    rute_b4_terpendam: {
        speaker: "Narator",
        text: "Kamu memilih diam. Rasa tidak nyaman membuatmu salah mencampur warna. Kirana sadar ada yang aneh.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'kesal'),
        choices: [{ text: "Lanjut...", nextScene: "rute_b4_taman" }]
    },
    rute_b4_taman: {
        speaker: "Kirana",
        text: "...Kadang aku takut, kalau aku nggak bisa gambar bagus lagi, apa masih ada yang peduli?",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: "", charRight: img('kirana', 'cemas'),
        choices: [{ text: "Lanjut ke Batas Kesabaran", nextScene: "rute_b4_kesabaran" }]
    },
    rute_b4_kesabaran: {
        speaker: "Kirana",
        text: "Aku mau minta pendapatmu soal dua sketsa ini. Pilih yang mana?",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Beri pendapat jujur, meski mengkritik salah satunya", nextScene: "rute_b5_dewi" },
            { text: "Puji semuanya biar dia nggak sedih", nextScene: "bad_end_b_x" }
        ]
    },
    bad_end_b_x: {
        speaker: "Kirana",
        text: "Kalau kamu nggak jujur soal ini, gimana aku bisa percaya kamu jujur soal hal lain? (BAD END: Kejujuran yang Tertunda)",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'sedih'),
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_b5_dewi: {
        speaker: "Narator",
        text: "Dewi mengajakmu jalan. Kirana lewat dan melihatnya, dia pergi tanpa menyapa.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: img('kirana', 'sedih'),
        choices: [
            { text: "Kejar Kirana dan jelaskan", nextScene: "rute_b6_klarifikasi" },
            { text: "Biarkan kesalahpahaman berlarut", nextScene: "rute_b6_diam" }
        ]
    },
    rute_b6_klarifikasi: {
        speaker: "Kirana",
        text: "Aku suka kamu bukan karena kamu jago gambar. Aku suka caramu semangat.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'melankolis'),
        choices: [{ text: "Lanjut ke Hujan Tiba-Tiba", nextScene: "rute_b6_hujan" }]
    },
    rute_b6_diam: {
        speaker: "Narator",
        text: "Karena keraguanmu, Kirana perlahan menjauh.",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'netral'),
        choices: [{ text: "Lanjut ke Ending", nextScene: "rute_b7_ending_sahabat" }]
    },
    rute_b6_hujan: {
        speaker: "Narator",
        text: "Hujan deras turun saat kalian masih di taman. Kirana malah tertawa lepas.",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: "", charRight: img('kirana', 'tertawa'),
        choices: [
            { text: "Ikut tertawa dan menikmati momen", nextScene: "rute_b7_ending1" },
            { text: "Panik, buru-buru cari tempat berteduh", nextScene: "rute_b7_ending1" }
        ]
    },
    rute_b7_ending1: {
        speaker: "Kirana",
        text: "Ini karya paling berarti yang pernah aku buat. Bukan karena hasilnya, tapi karena siapa yang bikin bareng aku. (Good End)",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: img('kirana', 'terharu'),
        unlockQuote: "quote_kirana",
        choices: [
            { text: "Ajak Kirana ke Pasar Malam", nextScene: "rute_b7_ending2" },
            { text: "Cukupkan cerita di sini", nextScene: "menu" }
        ]
    },
    rute_b7_ending2: {
        speaker: "Kirana",
        text: "Ternyata seru juga jadi orang biasa. Makasih udah nunjukin ini. (Epilog)",
        bg: assets.BACKGROUNDS.luarSekolah.pasarMalam, charLeft: "", charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_kirana",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_b7_ending_sahabat: {
        speaker: "Kirana",
        text: "Kita tetep temenan, kan? Selalu. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: img('kirana', 'tersenyum'),
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    rute_c2c: {
        speaker: "Bima",
        text: "Kamu bukan pemeran utama drama, Di. Cepat atau lambat mereka bakal sadar.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Tetap keras kepala jalani keduanya", nextScene: "rute_c3_bertahan" },
            { text: "Mulai jujur kalau ini nggak berkelanjutan", nextScene: "rute_c3_ragu" }
        ]
    },
    rute_c3_bertahan: {
        speaker: "Narator",
        text: "Nilai ulanganmu anjlok drastis. Kamu dipanggil Pak Hendra.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_ragu: {
        speaker: "Narator",
        text: "Nilai ulanganmu anjlok drastis. Kamu dipanggil Pak Hendra.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_panggil_hendra: {
        speaker: "Pak Hendra",
        text: "Kejujuran itu bukan cuma ke orang lain, tapi ke diri sendiri. Coba cari tempat tenang buat mikir jernih.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut ke Titik Jenuh...", nextScene: "rute_c3_titik_jenuh" }]
    },
    rute_c3_titik_jenuh: {
        speaker: "Narator",
        text: "Malam itu, Alexandra dan Kirana kirim pesan di waktu bersamaan, minta bantuan di lokasi berbeda jam yang sama besok.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: "", charRight: "",
        choices: [
            { text: "Coba jelaskan ke salah satu, minta pengertian", nextScene: "rute_c4_memilih" },
            { text: "Panik, nggak balas pesan siapa pun sampai pagi", nextScene: "rute_c4_memilih" },
            { text: "Jujur ke Pak Hendra dan minta saran", nextScene: "rute_c3_saran_hendra" }
        ]
    },
    rute_c3_saran_hendra: {
        speaker: "Pak Hendra",
        text: "Kamu sudah mencoba semuanya. Kalau harus memilih, pilih yang paling bikin kamu tenang. Jangan karena takut mengecewakan.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut ke titik balik...", nextScene: "rute_c4_jujur" }]
    },
    rute_c4_memilih: {
        speaker: "Narator",
        text: "Kamu harus memilih salah satu fokus. Siapa yang akan kamu pilih?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "Fokus ke Alexandra", nextScene: "rute_a5_rangga" },
            { text: "Fokus ke Kirana", nextScene: "rute_b5_dewi" }
        ]
    },
    rute_c4_jujur: {
        speaker: "Narator",
        text: "Kamu jujur ke keduanya. Awalnya berat, tapi mereka menghargai kejujuranmu.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut ke Ending", nextScene: "rute_c5_ending" }]
    },
    rute_c5_ending: {
        speaker: "Pak Hendra",
        text: "Nilai ulanganmu minggu ini naik. Saya masih belum tahu jawabannya, Pak. Nggak masalah, yang penting kamu nggak lari dari pertanyaannya. (Ending Terbuka)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('pakHendra', 'ramah'), charRight: "",
        unlockQuote: "quote_normal",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },

    rute_r1: {
        speaker: "Alexandra",
        text: "OSIS dan ruang seni punya cara kerja beda. Nggak akan efisien.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Coba yakinkan...", nextScene: "rute_r1_kirana" }]
    },
    rute_r1_kirana: {
        speaker: "Kirana",
        text: "Wih, ide bagus tuh, kolaborasi selalu bikin hasil yang nggak terduga!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Minta restu Pak Hendra", nextScene: "rute_r1_hendra" }]
    },
    rute_r1_hendra: {
        speaker: "Pak Hendra",
        text: "Pendekatan berbeda. Aku penasaran lihat hasilnya. Cobalah.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut ke Bab 2R...", nextScene: "rute_r2" }]
    },
    rute_r2: {
        speaker: "Narator",
        text: "Untuk pertama kalinya, Alexandra dan Kirana duduk satu meja. Diskusi awal penuh gesekan. Kamu harus jadi penengah.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Jadi penengah aktif tiap kali mereka berdebat", nextScene: "rute_r3" },
            { text: "Biarkan mereka temukan titik temu sendiri", nextScene: "rute_r3" }
        ]
    },
    rute_r3: {
        speaker: "Narator",
        text: "Mendekati hari-H, mereka bertengkar hebat di ruang seni.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: img('alexandra', 'marah'), charRight: img('kirana', 'kesal'),
        choices: [{ text: "Saksikan...", nextScene: "rute_r3_rekat" }]
    },
    rute_r3_rekat: {
        speaker: "Narator",
        text: "Lalu, anehnya, mereka malah tertawa bersama, menyadari betapa konyolnya mereka berdebat.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Lanjut ke Malam Festival", nextScene: "rute_r4" }]
    },
    rute_r4: {
        speaker: "Narator",
        text: "Aula Festival malam itu penuh dengan hasil kolaborasi mereka. Semua orang kagum.",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: "",
        choices: [
            { text: "Fokus merayakan keberhasilan bersama sebagai tim", nextScene: "rute_r_ending_1" },
            { text: "Ambil kesempatan jujur soal perasaan ke salah satu", nextScene: "rute_r_ending_2" }
        ]
    },
    rute_r_ending_1: {
        speaker: "Narator",
        text: "Malam itu, bertiga naik ke atap. Bukan kisah cinta segitiga dengan satu pemenang, tapi tiga orang yang saling menemukan versi terbaik diri mereka. (TRUE ENDING: Konstelasi)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_epilog",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_r_ending_2: {
        speaker: "Narator",
        text: "Kamu akhirnya sadar perasaanmu lebih condong. Kepada siapa?",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'bahagia'),
        choices: [
            { text: "Pilih Alexandra", nextScene: "rute_r_ending_2_a" },
            { text: "Pilih Kirana", nextScene: "rute_r_ending_2_b" }
        ]
    },
    rute_r_ending_2_a: {
        speaker: "Alexandra",
        text: "Terima kasih sudah memilihku. (TRUE ENDING: Romantis - Alexandra)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_epilog",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_r_ending_2_b: {
        speaker: "Kirana",
        text: "Senang banget kamu memilihku! (TRUE ENDING: Romantis - Kirana)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: "", charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_epilog",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    }
};