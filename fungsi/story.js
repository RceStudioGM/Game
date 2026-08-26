/* ============================================================
   story.js — Data Alur Cerita Visual Novel (EDISI ULTIMATE LENGKAP)
   ============================================================ */

const storyData = {
    prolog_1: {
        bgm: 'daily_common',
        speaker: "Narator",
        text: "{player} terlambat lagi. Berlari menyusuri koridor sekolah yang bermandi cahaya pagi sambil menggigit roti, dia menabrak setumpuk kertas yang sedang dibawa seseorang.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "prolog_2" }]
    },
    prolog_2: {
        bgm: 'comedy',
        speaker: "Alexandra",
        text: "Bisa tidak kamu lihat jalan?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [
            { text: "Minta maaf berkali-kali sampai dia risih", nextScene: "common_hari1_3a" },
            { text: "Minta maaf singkat lalu buru-buru pergi", nextScene: "common_hari1_3b" }
        ]
    },
    common_hari1_3a: {
        bgm: 'daily_common',
        speaker: "Alexandra",
        text: "...Cukup sekali aja, aku dengar. (Narator: Dia sedikit geli, meski tak menunjukkannya.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Lanjut ke ruang seni...", nextScene: "common_hari1_4" }]
    },
    common_hari1_3b: {
        bgm: 'daily_common',
        speaker: "Narator",
        text: "Alexandra hanya mengangguk pendek, tak ada kesan apa pun.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Lanjut ke ruang seni...", nextScene: "common_hari1_4" }]
    },
    common_hari1_4: {
        bgm: 'comedy',
        speaker: "Kirana",
        text: "Eh! Kamu, yang tadi lari-lari itu! Bantuin aku pegang ini dong, tanganku penuh cat!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Bantu Kirana menyeret kanvas", nextScene: "sisip_kantin_1" }]
    },
    sisip_kantin_1: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Njir, laper gila. Lo bawa duit lebih nggak? Gue ketinggalan dompet di kelas.",
        bg: assets.BACKGROUNDS.sekolahUmum.kantin, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Kasih uang jajan ke Bima sambil geleng-geleng", nextScene: "sisip_kantin_2" }]
    },
    sisip_kantin_2: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Eh btw gue denger-denger, katanya lo sama Pak Hendra tuh kayak ada 'chemistry' aneh gitu. Dia perhatian banget sama lo dibanding murid lain.",
        bg: assets.BACKGROUNDS.sekolahUmum.kantin, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Bilang jujur kadang ngerasa gitu juga, tapi nggak tau kenapa", nextScene: "sisip_kantin_3a" },
            { text: "Elak, bilang biasa aja", nextScene: "common_hari2" }
        ]
    },
    sisip_kantin_3a: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Ya mungkin dia liat potensi kali di lo. Atau lo emang sering bikin masalah jadi keinget mulu. (Narator: Bima ketawa sendiri sama leluconnya.)",
        bg: assets.BACKGROUNDS.sekolahUmum.kantin, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "common_hari2" }]
    },
    common_hari2: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Wanjayy, denger-denger ada yang disuruh bantuin OSIS sama anak seni nih. Lo mau punya harem ya lo, {player}?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Curhat balik ke Bima soal bingung mau pilih", nextScene: "common_hari2_curhat" },
            { text: "Diam saja, nggak nanggepin Bima", nextScene: "common_hari2_diam" }
        ]
    },
    common_hari2_curhat: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Hah, pusing lo? Ya udah, kalau nggak yakin, jangan dipikirin! (Narator: Saran ngawur Bima bikin kamu makin bingung.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Menuju Ruang Guru...", nextScene: "common_hari2_pakhendra" }]
    },
    common_hari2_diam: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Eh, lo beneran diem? Yaelah, baperan amat sih. (Narator: Bima ngambek pura-pura sebentar, lalu cepat baikan lagi.)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Menuju Ruang Guru...", nextScene: "common_hari2_pakhendra" }]
    },
    common_hari2_pakhendra: {
        bgm: 'council_focus',
        speaker: "Pak Hendra",
        text: "{player}, Bapak lihat nilai Matematikamu turun. Festival sebentar lagi. Bapak nggak bisa larang, tapi jangan nomor-duain sekolah.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'tegas'), charRight: "",
        choices: [{ text: "Saya belum yakin mau pilih yang mana, Pak.", nextScene: "common_hari2_akhir" }]
    },
    common_hari2_akhir: {
        bgm: 'council_focus',
        speaker: "Pak Hendra",
        text: "Pikirkan baik-baik, ya. Bapak tegas bukan karena suka marah, tapi karena ingin kalian berhasil.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut ke Hari 3...", nextScene: "common_hari3" }]
    },
    common_hari3: {
        bgm: 'daily_common',
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
        bgm: 'council_focus',
        speaker: "Narator",
        text: "Kamu melihat Alexandra sedang memarahi anggota OSIS yang telat laporan, dengan Rangga berdiri di belakangnya seperti pengawal. Farah diam-diam menenangkan anggota yang kena marah.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Kembali", nextScene: "common_hari3" }]
    },
    common_hari3_seni: {
        bgm: 'art_whimsy',
        speaker: "Narator",
        text: "Kamu melihat Kirana tertawa lepas melempar cat ke tembok. Dia buru-buru membersihkannya sebelum Bu Sari lihat—tapi ketahuan juga. Bu Sari cuma menghela napas geli, sudah terbiasa.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Kembali", nextScene: "common_hari3" }]
    },
    common_hari4: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "Eh, Dewi kayaknya naksir lo deh. Cewek IPS pindahan itu, kan? Lo sih masih sibuk mikirin pilihan besar besok.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Lanjut ke Hari 5...", nextScene: "bab1_pilihan" }]
    },
    bab1_pilihan: {
        bgm: 'daily_common',
        speaker: "Narator",
        text: "Hari ini hari keputusan. Pilihan mana yang akan kamu ambil?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: []
    },
    rute_a2a: {
        bgm: 'council_focus',
        speaker: "Farah",
        text: "Kamu pasti yang dimaksud Alexandra ya? Jangan takut, dia emang gitu ke semua orang di awal.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut", nextScene: "rute_a2b" }]
    },
    rute_a2b: {
        bgm: 'council_focus',
        speaker: "Alexandra",
        text: "Baca proposal ini. Tandai kalau ada yang tidak masuk akal. Jangan asal setuju cuma karena sungkan.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Bertanya ke Farah kenapa namaku dipilih", nextScene: "sisip_a_farah_1" }]
    },
    sisip_a_farah_1: {
        bgm: 'comedy',
        speaker: "Farah",
        text: "EH. Kamu tuh ya—kok nanya-nanya soal Alexandra ke aku doang, tapi belum pernah nanya kabarku sekalipun? Aku juga capek, tau. Ngurusin dia, ngurusin OSIS, ngurusin semuanya.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ngambek'), charRight: "",
        choices: [
            { text: "Tanya lebih jauh soal kesehariannya, bukan cuma soal Alexandra", nextScene: "sisip_a_farah_2a" },
            { text: "Ketawa aja, bilang \"kamu emang capek ya jadi wakil rasa OSIS\"", nextScene: "rute_a2c" }
        ]
    },
    sisip_a_farah_2a: {
        bgm: 'comedy',
        speaker: "Farah",
        text: "Nah gitu dong! Aku baik kok, cuma pengen diperhatiin dikit doang, hehe. (Narator: Farah cerita santai soal hobinya nulis, obrolan kalian jadi terasa lebih akrab.)",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_a2c" }]
    },
    rute_a2c: {
        bgm: 'council_focus',
        speaker: "Farah",
        text: "Alexandra yang milih langsung. Dia pengen ada yang jujur, bukan yang cari muka.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('farah', 'ramah'), charRight: "",
        choices: [
            { text: "Kerjakan tugas dengan serius dan diam", nextScene: "rute_a3_tenang" },
            { text: "Coba mencairkan suasana dengan bercanda", nextScene: "rute_a3_cair" }
        ]
    },
    rute_a3_tenang: {
        bgm: 'council_focus',
        speaker: "Narator",
        text: "Kamu bekerja tanpa banyak bicara, menandai proposal dengan catatan tajam. Alexandra terkesan meski tidak menunjukkannya.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_a3_momen" }]
    },
    rute_a3_cair: {
        bgm: 'council_focus',
        speaker: "Alexandra",
        text: "Aku di sini buat semua selesai dengan benar. (Narator: Kamu berhasil membuatnya sedikit terkejut, dia tidak terbiasa dibalas tanpa rasa takut.)",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'terkejut'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_a3_momen" }]
    },
    rute_a3_momen: {
        bgm: 'tender',
        speaker: "Narator",
        text: "Suatu sore, kamu menemukan Alexandra tertidur di meja kerja. Kamu menyelimutinya dengan jaket.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [{ text: "Tunggu dia bangun...", nextScene: "rute_a3_bangun" }]
    },
    rute_a3_bangun: {
        bgm: 'tender',
        speaker: "Alexandra",
        text: "Kenapa kamu masih di sini? ...Nggak perlu nungguin aku bangun kayak gini.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'gugup'), charRight: "",
        choices: [
            { text: "Ajak dia ke Taman untuk istirahat", nextScene: "rute_a4_taman" },
            { text: "Ikuti kebiasaannya menyendiri di Perpustakaan", nextScene: "rute_a4_perpus" }
        ]
    },
    rute_a4_taman: {
        bgm: 'tender',
        speaker: "Narator",
        text: "Di taman, Alexandra mengaku takut ketinggalan sesuatu jika diam. Kamu menenangkannya.",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "sisip_a_basket_1" }]
    },
    rute_a4_perpus: {
        bgm: 'tender',
        speaker: "Narator",
        text: "Di perpustakaan, dia membiarkan kamu duduk di dunianya yang paling sepi untuk pertama kalinya.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "sisip_a_basket_1" }]
    },
    sisip_a_basket_1: {
        bgm: 'comedy',
        speaker: "Rangga",
        text: "Woy, awas! (Narator: Bola basket nyasar kena bahumu—yang lempar ternyata Rangga. Bukan pertandingan resmi, cuma iseng abis latihan OSIS.) Sini gabung, kita kurang orang nih.",
        bg: assets.BACKGROUNDS.sekolahUmum.lapanganBasket, charLeft: img('rangga', 'santai'), charRight: "",
        choices: [
            { text: "Ikutan main, meski kikuk", nextScene: "sisip_a_basket_2" },
            { text: "Nolak sopan, bilang capek", nextScene: "rute_a3_ujian" }
        ]
    },
    sisip_a_basket_2: {
        bgm: 'comedy',
        speaker: "Rangga",
        text: "WOY itu mah lemparan anak SD! (Narator: Kamu jelas bukan atlet, tapi Rangga—yang biasanya kalem dan penuh perhitungan—ternyata paling berisik kalau lagi main, teriak-teriak nyemangatin sambil ngeledek.)",
        bg: assets.BACKGROUNDS.sekolahUmum.lapanganBasket, charLeft: img('rangga', 'santai'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "sisip_a_basket_3" }]
    },
    sisip_a_basket_3: {
        bgm: 'tender',
        speaker: "Rangga",
        text: "Lo tau nggak, ini pertama kalinya gue liat lo yang beneran nyantai. Serius deh—Alexandra tuh jarang banget bisa nyantai kayak gini. Kalo lo bisa bikin dia sesekali kayak gini juga, gue bakal seneng banget. Bukan buat gue. Buat dia.",
        bg: assets.BACKGROUNDS.sekolahUmum.lapanganBasket, charLeft: img('rangga', 'lega'), charRight: "",
        choices: [{ text: "Lanjut ke Ujian Kepercayaan", nextScene: "rute_a3_ujian" }]
    },
    rute_a3_ujian: {
        bgm: 'tension',
        speaker: "Alexandra",
        text: "Pegang ini. Daftar evaluasi seluruh divisi OSIS. Jangan sampai bocor ke siapa pun.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [
            { text: "Tolak cerita apa pun ke Bima", nextScene: "rute_a5_rangga" },
            { text: "Bocorkan sedikit ke Bima", nextScene: "bad_end_a_x" }
        ]
    },
    bad_end_a_x: {
        bgm: 'ending_bad',
        speaker: "Alexandra",
        text: "Aku kasih kamu kepercayaan paling besar, dan kamu buang begitu aja. Jangan deket-deket sekretariat lagi. (BAD END: Kepercayaan yang Retak)",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'marah'), charRight: "",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_a5_rangga: {
        bgm: 'tension',
        speaker: "Rangga",
        text: "Alexandra udah terlalu banyak dikecewakan orang. Kalau lo nggak serius, mundur sekarang.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('rangga', 'curiga'), charRight: "",
        choices: [
            { text: "Yakinkan Rangga niatku tulus", nextScene: "rute_a5_percaya" },
            { text: "Ragu dan mulai menjaga jarak", nextScene: "rute_a5_ragu" }
        ]
    },
    rute_a5_percaya: {
        bgm: 'tender',
        speaker: "Narator",
        text: "Kamu terus membantu Alexandra. H-1 festival, dia nyaris kolaps.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'lelah'), charRight: "",
        choices: [{ text: "Lanjut ke Malam Sebelum Festival...", nextScene: "rute_a6_malam" }]
    },
    rute_a5_ragu: {
        bgm: 'melancholy',
        speaker: "Narator",
        text: "Kamu menjaga jarak. Festival usai tanpa ada yang terucap.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'kecewa'), charRight: "",
        choices: [{ text: "Lanjut ke Ending", nextScene: "rute_a6_ending_sahabat" }]
    },
    rute_a6_malam: {
        bgm: 'tension',
        speaker: "Narator",
        text: "Di tengah lembur, lampu ruangan padam—korsleting! Semua panik.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: "", charRight: "",
        choices: [
            { text: "Tetap tenang, cari kotak sekring dan atur tim", nextScene: "rute_a6_ending_bonus" },
            { text: "Ikut panik, malah tambah kacau", nextScene: "rute_a6_ending_normal" }
        ]
    },
    rute_a6_ending_bonus: {
        bgm: 'tender',
        speaker: "Narator",
        text: "Krisis teratasi. Alexandra diam-diam kagum. Dia percaya padamu.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('alexandra', 'bahagia'), charRight: "",
        choices: [{ text: "Lanjut ke Ending", nextScene: "rute_a6_ending1" }]
    },
    rute_a6_ending_normal: {
        bgm: 'melancholy',
        speaker: "Narator",
        text: "Farah yang mengambil alih. Alexandra sempat kecewa, tapi tidak fatal.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Lanjut ke Ending", nextScene: "rute_a6_ending2" }]
    },
    rute_a6_ending1: {
        bgm: 'ending_good',
        speaker: "Alexandra",
        text: "Kamu nggak bikin aku harus jadi 'Ketua OSIS' terus. Cukup jadi Alexandra aja. (Good End)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_alexandra",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_a6_ending2: {
        bgm: 'ending_bittersweet',
        speaker: "Alexandra",
        text: "Aku cuma takut kalau aku jujur, aku bakal kelihatan lemah. (Bittersweet End)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'sedih'), charRight: "",
        unlockQuote: "quote_bad",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_a6_ending_sahabat: {
        bgm: 'ending_bittersweet',
        speaker: "Alexandra",
        text: "Kamu masih aja penakut, ya. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('alexandra', 'netral'), charRight: "",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_b2b: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "{player}! Menurutmu mural ini harusnya pakai warna apa buat langitnya?",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Ikuti saja arahan spontan Kirana", nextScene: "rute_b3_mengalir" },
            { text: "Usulkan ide sendiri untuk mural", nextScene: "rute_b3_berani" }
        ]
    },
    rute_b3_mengalir: {
        bgm: 'art_whimsy',
        speaker: "Narator",
        text: "Kamu menurut saja. Kirana makin nyaman dan menganggapmu tempat pelarian paling santai.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Lanjut...", nextScene: "rute_b3_sanggar" }]
    },
    rute_b3_berani: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "Itu ide bagus banget! Kamu punya insting yang oke!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'terkejut'),
        choices: [{ text: "Lanjut...", nextScene: "rute_b3_sanggar" }]
    },
    rute_b3_sanggar: {
        bgm: 'art_whimsy',
        speaker: "Narator",
        text: "Di sanggar, kamu melihat Bang Yusuf. Kedekatan mereka membuatmu canggung.",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Bertanya langsung ke Kirana", nextScene: "rute_b4_terbuka" },
            { text: "Memendam rasa penasaran", nextScene: "rute_b4_terpendam" }
        ]
    },
    rute_b4_terbuka: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "Dia kayak kakak buat aku. Kenapa? Cemburu ya?",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Lanjut...", nextScene: "sisip_b_warkop_1" }]
    },
    rute_b4_terpendam: {
        bgm: 'melancholy',
        speaker: "Narator",
        text: "Kamu memilih diam. Rasa tidak nyaman membuatmu salah mencampur warna. Kirana sadar ada yang aneh.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'kesal'),
        choices: [{ text: "Lanjut...", nextScene: "sisip_b_warkop_1" }]
    },
    sisip_b_warkop_1: {
        bgm: 'comedy',
        speaker: "Narator",
        text: "Sepulang dari sanggar, Kirana ngajak Adi mampir dulu ke warkop deket sana—tempat langganan anak-anak sanggar nongkrong. Bang Yusuf tiba-tiba nongol dari dalam warkop bawa nampan kopi.",
        bg: assets.BACKGROUNDS.luarSekolah.warkopSanggar, charLeft: img('bangYusuf', 'ramah'), charRight: img('kirana', 'ceria'),
        choices: [{ text: "Lanjut...", nextScene: "sisip_b_warkop_2" }]
    },
    sisip_b_warkop_2: {
        bgm: 'comedy',
        speaker: "Kirana",
        text: "Eh serius deh, kalo Adi nggak protes waktu itu pas aku maksa dia pegangin kanvas gede, aku kayaknya bakal parno duluan sebelum ketemu ide buat mural.",
        bg: assets.BACKGROUNDS.luarSekolah.warkopSanggar, charLeft: img('bangYusuf', 'ramah'), charRight: img('kirana', 'tertawa'),
        choices: [
            { text: "Ikut nimbrung obrolan teknik seni, coba nyambung meski awam", nextScene: "sisip_b_warkop_3a" },
            { text: "Lebih banyak dengerin & senyum-senyum aja", nextScene: "rute_b4_taman" }
        ]
    },
    sisip_b_warkop_3a: {
        bgm: 'art_whimsy',
        speaker: "Bang Yusuf",
        text: "Asal nebak tapi bener mulu, itu namanya insting, bego. (Narator: Semua anak sanggar ketawa, suasananya jauh dari kaku—lebih kayak ngumpul base camp geng sendiri.)",
        bg: assets.BACKGROUNDS.luarSekolah.warkopSanggar, charLeft: img('bangYusuf', 'ramah'), charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Lanjut...", nextScene: "rute_b4_taman" }]
    },
    rute_b4_taman: {
        bgm: 'melancholy',
        speaker: "Kirana",
        text: "...Kadang aku takut, kalau aku nggak bisa gambar bagus lagi, apa masih ada yang peduli?",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: "", charRight: img('kirana', 'cemas'),
        choices: [{ text: "Lanjut ke Batas Kesabaran", nextScene: "rute_b4_kesabaran" }]
    },
    rute_b4_kesabaran: {
        bgm: 'tension',
        speaker: "Kirana",
        text: "Aku mau minta pendapatmu soal dua sketsa ini. Pilih yang mana?",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Beri pendapat jujur, meski mengkritik salah satunya", nextScene: "sisip_b_dewi_1" },
            { text: "Puji semuanya biar dia nggak sedih", nextScene: "bad_end_b_x" }
        ]
    },
    sisip_b_dewi_1: {
        bgm: 'comedy',
        speaker: "Dewi",
        text: "Eh, si Kirana deket banget ya sama kamu belakangan. Yaelah, jangan pura-pura polos deh. Semua kelas juga udah pada ngomongin. Tapi santai, aku nanya bukan buat julid kok, aku emang penasaran aja.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('dewi', 'menggoda'), charRight: "",
        choices: [
            { text: "Jujur bilang lagi ada perasaan ke Kirana, agak canggung", nextScene: "sisip_b_dewi_2a" },
            { text: "Elak, bilang cuma temenan biasa", nextScene: "rute_b5_dewi" }
        ]
    },
    sisip_b_dewi_2a: {
        bgm: 'tender',
        speaker: "Dewi",
        text: "Oke deh. Makasih udah jujur, nggak semua cowok berani ngaku gitu.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('dewi', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_b5_dewi" }]
    },
    bad_end_b_x: {
        bgm: 'ending_bad',
        speaker: "Kirana",
        text: "Kalau kamu nggak jujur soal ini, gimana aku bisa percaya kamu jujur soal hal lain? (BAD END: Kejujuran yang Tertunda)",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'sedih'),
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_b5_dewi: {
        bgm: 'tension',
        speaker: "Narator",
        text: "Dewi mengajakmu jalan. Kirana lewat dan melihatnya, dia pergi tanpa menyapa.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: img('kirana', 'sedih'),
        choices: [
            { text: "Kejar Kirana dan jelaskan", nextScene: "rute_b6_klarifikasi" },
            { text: "Biarkan kesalahpahaman berlarut", nextScene: "rute_b6_diam" }
        ]
    },
    rute_b6_klarifikasi: {
        bgm: 'tender',
        speaker: "Kirana",
        text: "Aku suka kamu bukan karena kamu jago gambar. Aku suka caramu semangat.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'melankolis'),
        choices: [{ text: "Lanjut ke Hujan Tiba-Tiba", nextScene: "rute_b6_hujan" }]
    },
    rute_b6_diam: {
        bgm: 'melancholy',
        speaker: "Narator",
        text: "Karena keraguanmu, Kirana perlahan menjauh.",
        bg: assets.BACKGROUNDS.seni.sanggarLuar, charLeft: "", charRight: img('kirana', 'netral'),
        choices: [{ text: "Lanjut ke Ending", nextScene: "rute_b7_ending_sahabat" }]
    },
    rute_b6_hujan: {
        bgm: 'tender',
        speaker: "Narator",
        text: "Hujan deras turun saat kalian masih di taman. Kirana malah tertawa lepas.",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: "", charRight: img('kirana', 'tertawa'),
        choices: [
            { text: "Ikut tertawa dan menikmati momen", nextScene: "rute_b7_ending1" },
            { text: "Panik, buru-buru cari tempat berteduh", nextScene: "rute_b7_ending1" }
        ]
    },
    rute_b7_ending1: {
        bgm: 'ending_good',
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
        bgm: 'festival',
        speaker: "Kirana",
        text: "Ternyata seru juga jadi orang biasa. Makasih udah nunjukin ini. (Epilog)",
        bg: assets.BACKGROUNDS.luarSekolah.pasarMalam, charLeft: "", charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_kirana",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_b7_ending_sahabat: {
        bgm: 'ending_bittersweet',
        speaker: "Kirana",
        text: "Kita tetep temenan, kan? Selalu. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: img('kirana', 'tersenyum'),
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_c2c: {
        bgm: 'tension',
        speaker: "Bima",
        text: "Lo bukan pemeran utama drama, Di. Cepat atau lambat mereka bakal sadar.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Tetap keras kepala jalani keduanya", nextScene: "rute_c3_bertahan" },
            { text: "Mulai jujur kalau ini nggak berkelanjutan", nextScene: "rute_c3_ragu" }
        ]
    },
    rute_c3_bertahan: {
        bgm: 'tension',
        speaker: "Narator",
        text: "Nilai ulanganmu anjlok drastis. Kamu dipanggil Pak Hendra.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_ragu: {
        bgm: 'tension',
        speaker: "Narator",
        text: "Nilai ulanganmu anjlok drastis. Kamu dipanggil Pak Hendra.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_c3_panggil_hendra" }]
    },
    rute_c3_panggil_hendra: {
        bgm: 'council_focus',
        speaker: "Pak Hendra",
        text: "Kejujuran itu bukan cuma ke orang lain, tapi ke diri sendiri. Coba cari tempat tenang buat mikir jernih.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut ke Titik Jenuh...", nextScene: "rute_c3_titik_jenuh" }]
    },
    rute_c3_titik_jenuh: {
        bgm: 'tension',
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
        bgm: 'council_focus',
        speaker: "Pak Hendra",
        text: "Kamu sudah mencoba semuanya. Kalau harus memilih, pilih yang paling bikin kamu tenang. Jangan karena takut mengecewakan.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut ke titik balik...", nextScene: "rute_c4_jujur" }]
    },
    rute_c4_memilih: {
        bgm: 'tension',
        speaker: "Narator",
        text: "Kamu harus memilih salah satu fokus. Siapa yang akan kamu pilih?",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [
            { text: "Fokus ke Alexandra", nextScene: "rute_a5_rangga" },
            { text: "Fokus ke Kirana", nextScene: "rute_b5_dewi" }
        ]
    },
    rute_c4_jujur: {
        bgm: 'tender',
        speaker: "Narator",
        text: "Kamu jujur ke keduanya. Awalnya berat, tapi mereka menghargai kejujuranmu.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Lanjut ke Ending", nextScene: "rute_c5_ending" }]
    },
    rute_c5_ending: {
        bgm: 'ending_good',
        speaker: "Pak Hendra",
        text: "Nilai ulanganmu minggu ini naik. Saya masih belum tahu jawabannya, Pak. Nggak masalah, yang penting kamu nggak lari dari pertanyaannya. (Ending Terbuka)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('pakHendra', 'ramah'), charRight: "",
        unlockQuote: "quote_normal",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_m1: {
        bgm: 'council_focus',
        speaker: "Pak Hendra",
        text: "Ada murid pindahan, namanya {mira}. Karena kamu salah satu yang paling gampang akrab sama siapa aja, Bapak titip dia sebentar buat ditemenin adaptasi minggu ini.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Menuju perpustakaan...", nextScene: "rute_m1_find" }]
    },
    rute_m1_find: {
        bgm: 'mystery',
        speaker: "Narator",
        text: "{player} menemukan {mira} duduk sendirian di pojok perpustakaan, membaca buku tebal tanpa menghiraukan sekitarnya.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('mira', 'netral'), charRight: "",
        choices: [
            { text: "Tetap duduk di dekatnya tanpa memaksa ngobrol", nextScene: "rute_m2_sabar" },
            { text: "Coba pancing obrolan dengan bertanya soal buku", nextScene: "rute_m2_penasaran" }
        ]
    },
    rute_m2_sabar: {
        bgm: 'mystery',
        speaker: "Narator",
        text: "{player} tetap duduk di kursi seberangnya, tidak memaksa bicara. Setelah hampir dua puluh menit hening, {mira} akhirnya melirik. '...Kamu beneran nggak akan pergi, ya?'",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('mira', 'netral'), charRight: img('mc', 'netral'),
        choices: [{ text: "Lanjut...", nextScene: "rute_m2_bima" }]
    },
    rute_m2_penasaran: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "Buku apa itu? Kelihatannya tebal banget. ...Bukan urusanmu. (Narator: Mira menutup bukunya cepat.)",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: img('mira', 'waspada'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_m2_bima" }]
    },
    rute_m2_bima: {
        bgm: 'comedy',
        speaker: "Bima",
        text: "WOI. Katanya lo ditugasin nemenin anak baru yang katanya dingin banget itu? Gosip bilang dia pindahan dari luar kota! Ada yang bilang dia punya masa lalu misterius!",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [{ text: "Nggak segitunya juga sih...", nextScene: "sisip_m_bima_2" }]
    },
    sisip_m_bima_2: {
        bgm: 'tender',
        speaker: "Bima",
        text: "YAH. Pelit amat. (Narator: Bima manyun sebentar, terus nyengir lagi.) Yaudah deh, gue tungguin aja lo cerita sendiri kalo udah siap. Btw, lo baik-baik aja kan? Maksud gue, kadang lo suka kelewat baik sama orang sampe lupa jagain diri sendiri.",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: img('bima', 'jahil'), charRight: "",
        choices: [
            { text: "Abaikan gosip Bima, coba kenal Mira dari observasi sendiri", nextScene: "rute_m3" },
            { text: "Diam-diam penasaran, cari tahu di grup chat sekolah", nextScene: "rute_m2_gosip" }
        ]
    },
    rute_m2_gosip: {
        bgm: 'melancholy',
        speaker: "Narator",
        text: "Adi ikut penasaran dan bertanya ke sana kemari. Rumor soal Mira jadi berlebihan. Saat Mira mendengar rumor itu di kelas, wajahnya mengeras. 'Ternyata di sekolah manapun sama aja.'",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('mira', 'sedih'), charRight: "",
        choices: [{ text: "Lanjut ke Loteng", nextScene: "rute_m3" }]
    },
    rute_m3: {
        bgm: 'mystery',
        speaker: "Narator",
        text: "Suatu sore, {player} kembali ke perpustakaan dan tidak sengaja melihat {mira} menghilang di balik pintu kecil berdebu di sudut belakang rak.",
        bg: assets.BACKGROUNDS.sekolahUmum.perpustakaan, charLeft: "", charRight: "",
        choices: [{ text: "Mengikuti ke loteng...", nextScene: "rute_m3_loteng" }]
    },
    rute_m3_loteng: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "...Gimana kamu bisa nemuin ini? (Narator: Suaranya nyaris panik.) Ini tempatku. Tolong jangan bilang siapa-siapa.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'waspada'), charRight: "",
        choices: [
            { text: "Janji merahasiakannya, tawarkan pergi (Hormat)", nextScene: "rute_m4_hormat" },
            { text: "Tanya kenapa tempat ini penting buatnya", nextScene: "rute_m4_ingin_tahu" }
        ]
    },
    rute_m4_hormat: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "...Tunggu. Kamu boleh... duduk sebentar. Kalau kamu diem aja. (Narator: Adi duduk di seberangnya dalam diam yang tidak canggung.)",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'netral'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "sisip_m_santai_1" }]
    },
    rute_m4_ingin_tahu: {
        bgm: 'mystery',
        speaker: "Mira",
        text: "Ini tempat satu-satunya yang kerasa milikku. Aku udah pindah sekolah empat kali dalam tiga tahun. Aku belajar buat nggak terlalu deket sama tempat atau orang, karena aku juga bakal ninggalinnya lagi.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'sedih'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "sisip_m_santai_1" }]
    },
    sisip_m_santai_1: {
        bgm: 'tender',
        speaker: "Narator",
        text: "'Eh, lo suka baca genre apa emangnya?' tanya Adi random. Mira ngangkat alis, kaget ditanya hal se-random itu. '...Kenapa nanya?' 'Ya penasaran aja. Lo tiap hari di sini baca buku tebel-tebel mulu.'",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'netral'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "sisip_m_santai_2" }]
    },
    sisip_m_santai_2: {
        bgm: 'tender',
        speaker: "Mira",
        text: "Fiksi klasik, kebanyakan. Sama puisi. Kenapa, mau ngeledek? (Narator: Adi geleng, bilang malah keren, dia sendiri paling banter baca komik. Untuk pertama kalinya, Mira ketawa kecil—beneran ketawa, bukan cuma senyum tipis.)",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tertawa'), charRight: "",
        choices: [
            { text: "Lanjut ngobrol random, minta rekomendasi buku", nextScene: "sisip_m_santai_3" },
            { text: "Nanya balik buku yang lagi dia baca sekarang", nextScene: "rute_m5_dewi" }
        ]
    },
    sisip_m_santai_3: {
        bgm: 'tender',
        speaker: "Mira",
        text: "Antusias, Mira mulai nyerocos ngasih rekomendasi buku satu-satu—nadanya jauh lebih hidup dari biasanya. Obrolan berlanjut santai, bukan soal masa lalunya yang berat, cuma dua orang ngobrolin buku kayak remaja biasa.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tersenyum'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_m5_dewi" }]
    },
    rute_m5_dewi: {
        bgm: 'tender',
        speaker: "Dewi",
        text: "Aku seneng lihat {mira} mulai lebih terbuka. Awalnya aku pikir dia jutek, ternyata dia cuma capek harus kenalan ulang terus-terusan.",
        bg: assets.BACKGROUNDS.sekolahUmum.kelas, charLeft: img('dewi', 'ramah'), charRight: "",
        choices: [
            { text: "Senang Mira punya teman lain, beri dia ruang", nextScene: "rute_m6" },
            { text: "Sedikit posesif, khawatir kehilangan momen berdua", nextScene: "rute_m5_cemburu" }
        ]
    },
    rute_m5_cemburu: {
        bgm: 'tension',
        speaker: "Mira",
        text: "Kamu kenapa jadi aneh ke Dewi? Dia temenku juga sekarang. Jangan jadi posesif. Aku udah cukup sering kehilangan orang.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'marah'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_m6" }]
    },
    rute_m6: {
        bgm: 'mystery',
        speaker: "Narator",
        text: "Suatu malam, saat mengobrol di loteng arsip, ponsel {mira} bergetar terus-menerus. Dia melihat layarnya sekilas, lalu buru-buru memasukkannya kembali ke saku.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'netral'), charRight: "",
        choices: [
            { text: "Tidak menanyakan lebih jauh, percaya dia akan cerita", nextScene: "rute_m7_percaya" },
            { text: "Penasaran dan mencoba bertanya lebih lanjut", nextScene: "rute_m7_tanya" }
        ]
    },
    rute_m7_percaya: {
        bgm: 'tender',
        speaker: "Mira",
        text: "Alvin itu... sahabat paling deket aku dari SD sampe sebelum aku pindah terakhir kali. Kamu nggak protes sama sekali soal ini. Kenapa? ...Karena itu bukan hakku buat protes.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tersenyum'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_m8_alvin" }]
    },
    rute_m7_tanya: {
        bgm: 'tender',
        speaker: "Mira",
        text: "Kalian... deket banget ya? Kenapa? Cemburu? (Narator: Mira tertawa kecil melihat reaksimu). Alvin itu sahabatku dari SD. Dia baik, tapi... dia memilih tidak melanjutkan.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tertawa'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_m8_alvin" }]
    },
    rute_m8_alvin: {
        bgm: 'tension',
        speaker: "Alvin",
        text: "Kamu deket banget sama {mira} ya, akhir-akhir ini. Aku udah kenal dia dari kecil. Aku tahu betapa susahnya dia buka diri ke orang baru. Jaga dia baik-baik. Atau— kalau kamu nggak bisa, mungkin aku yang akan coba.",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alvin', 'serius'), charRight: "",
        choices: [
            { text: "Tegaskan niatmu tanpa terpancing emosi (Tenang)", nextScene: "rute_m9_tenang" },
            { text: "Terpancing, jadi defensif dan sedikit kasar (Defensif)", nextScene: "rute_m9_defensif" }
        ]
    },
    rute_m9_tenang: {
        bgm: 'tender',
        speaker: "Narator",
        text: "Aku nggak akan janji aku sempurna. Tapi aku nggak akan pergi selama dia masih mau aku di sini. (Narator: Alvin terdiam sejenak, lalu mengangguk pelan.)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('alvin', 'lega'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_m10_bayangan" }]
    },
    rute_m9_defensif: {
        bgm: 'tension',
        speaker: "Mira",
        text: "Aku bisa jaga diriku sendiri. Aku nggak butuh kalian berdua berantem soal aku kayak aku ini barang. (Narator: Mira pergi dengan kecewa.)",
        bg: assets.BACKGROUNDS.sekolahUmum.taman, charLeft: img('mira', 'marah'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_m10_bayangan" }]
    },
    rute_m10_bayangan: {
        bgm: 'melancholy',
        speaker: "Mira",
        text: "Aku udah bilang ke diri sendiri buat nggak kebiasa deket sama siapa pun di sini. Tapi aku gagal. Aku kebiasa deket sama kamu. Dan sekarang rasanya bakal sesakit yang aku takutin dari awal.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'menangis'), charRight: "",
        choices: [
            { text: "Yakinkan dia waktu yang tersisa tetap berharga (Berani)", nextScene: "rute_m11_berani" },
            { text: "Ikut menjaga jarak karena sama-sama takut (Takut)", nextScene: "rute_m11_takut" },
            { text: "Janji mencari cara agar dia bisa tetap tinggal (Upaya Ekstra)", nextScene: "rute_m10_upaya" }
        ]
    },
    rute_m10_upaya: {
        bgm: 'tender',
        speaker: "Pak Hendra",
        text: "Ini bukan keputusan kecil, {player}. Tapi Bapak bisa bantu sampaikan opsi itu ke orang tuanya, kalau memang itu yang terbaik buat {mira}. Neneknya di kota ini bisa jadi solusi.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut ke upaya nyata...", nextScene: "rute_m11_berani" }]
    },
    rute_m11_berani: {
        bgm: 'tender',
        speaker: "Mira",
        text: "Aku nggak mau nyia-nyiain waktu yang ada sekarang cuma karena takut sama yang belum tentu terjadi. Kalaupun kamu harus pergi, aku pengen kamu pergi dengan kenangan yang beneran berarti.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'tersenyum'), charRight: "",
        choices: [{ text: "Lanjut...", nextScene: "rute_m12" }]
    },
    rute_m11_takut: {
        bgm: 'melancholy',
        speaker: "Narator",
        text: "Adi memilih menjaga jarak 'demi kebaikan bersama'. Mira menerimanya dengan diam, tapi sejak saat itu, tembok yang sempat runtuh perlahan terbangun lagi.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'sedih'), charRight: "",
        choices: [{ text: "Lanjut ke Ending...", nextScene: "rute_m13_ending_sahabat" }]
    },
    rute_m12: {
        bgm: 'melancholy',
        speaker: "Mira",
        text: "Minggu-minggu berikutnya dijalani dengan lebih intens. Kabar keputusan final dari ayahku akhirnya datang.",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'netral'), charRight: "",
        choices: [{ text: "Menjelang akhir...", nextScene: "rute_m13" }]
    },
    rute_m13: {
        bgm: 'melancholy',
        speaker: "Narator",
        text: "Hari terakhir tiba. Mira dan Adi berdiri di Halte Bus.",
        bg: assets.BACKGROUNDS.rahasia.halteBus, charLeft: img('mira', 'bahagia'), charRight: "",
        choices: [
            { text: "Jika Upaya Ekstra berhasil (True Good End)", nextScene: "rute_m13_ending1" },
            { text: "Jika upaya gagal, tapi tetap menjaga hubungan (Bittersweet Good)", nextScene: "rute_m13_ending2" },
            { text: "Melepas dengan damai tanpa janji (Bittersweet)", nextScene: "rute_m13_ending3" }
        ]
    },
    rute_m13_ending1: {
        bgm: 'ending_good',
        speaker: "Mira",
        text: "Ini pertama kalinya aku milih buat tinggal, bukan cuma nurutin ke mana pun aku dibawa pergi. Dan aku milih di sini. Sama kamu. (True Good End)",
        bg: assets.BACKGROUNDS.rahasia.lotengArsip, charLeft: img('mira', 'bahagia'), charRight: "",
        unlockQuote: "quote_mira",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_m13_ending2: {
        bgm: 'ending_bittersweet',
        speaker: "Mira",
        text: "Aku nggak akan janji ini gampang. Tapi buat pertama kalinya, aku pengen coba nggak lari dari sesuatu yang berharga, walau itu berarti harus kerja lebih keras buat mempertahankannya. (Bittersweet-Good End)",
        bg: assets.BACKGROUNDS.rahasia.halteBus, charLeft: img('mira', 'tersenyum'), charRight: "",
        unlockQuote: "quote_mira",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_m13_ending3: {
        bgm: 'ending_bittersweet',
        speaker: "Mira",
        text: "Makasih udah jadi tempat yang nggak pernah bikin aku ngerasa cuma 'numpang lewat'. Aku bakal selalu inget loteng itu. Dan kamu. (Bittersweet End)",
        bg: assets.BACKGROUNDS.rahasia.halteBus, charLeft: img('mira', 'menangis'), charRight: "",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_m13_ending_sahabat: {
        bgm: 'ending_bittersweet',
        speaker: "Narator",
        text: "Mereka tidak pernah benar-benar saling terbuka. Mira pindah di akhir semester. Bertahun-tahun kemudian, Adi menerima sebuah buku kumpulan cerpen berjudul 'Loteng yang Kutinggalkan'. (Friend End)",
        bg: assets.BACKGROUNDS.sekolahUmum.koridor, charLeft: "", charRight: "",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_r1: {
        bgm: 'council_focus',
        speaker: "Alexandra",
        text: "OSIS dan ruang seni punya cara kerja beda. Nggak akan efisien.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: "",
        choices: [{ text: "Coba yakinkan...", nextScene: "rute_r1_kirana" }]
    },
    rute_r1_kirana: {
        bgm: 'art_whimsy',
        speaker: "Kirana",
        text: "Wih, ide bagus tuh, kolaborasi selalu bikin hasil yang nggak terduga!",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: "", charRight: img('kirana', 'ceria'),
        choices: [{ text: "Minta restu Pak Hendra", nextScene: "rute_r1_hendra" }]
    },
    rute_r1_hendra: {
        bgm: 'council_focus',
        speaker: "Pak Hendra",
        text: "Pendekatan yang berbeda. Bapak penasaran lihat hasilnya. Coba saja.",
        bg: assets.BACKGROUNDS.sekolahUmum.ruangGuruBK, charLeft: img('pakHendra', 'ramah'), charRight: "",
        choices: [{ text: "Lanjut ke Bab 2R...", nextScene: "rute_r2" }]
    },
    rute_r2: {
        bgm: 'tension',
        speaker: "Narator",
        text: "Untuk pertama kalinya, Alexandra dan Kirana duduk satu meja. Diskusi awal penuh gesekan. Kamu harus jadi penengah.",
        bg: assets.BACKGROUNDS.osis.sekretariat, charLeft: img('alexandra', 'tegas'), charRight: img('kirana', 'ceria'),
        choices: [
            { text: "Jadi penengah aktif tiap kali mereka berdebat", nextScene: "rute_r3" },
            { text: "Biarkan mereka temukan titik temu sendiri", nextScene: "rute_r3" }
        ]
    },
    rute_r3: {
        bgm: 'tension',
        speaker: "Narator",
        text: "Mendekati hari-H, mereka bertengkar hebat di ruang seni.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: img('alexandra', 'marah'), charRight: img('kirana', 'kesal'),
        choices: [{ text: "Saksikan...", nextScene: "rute_r3_rekat" }]
    },
    rute_r3_rekat: {
        bgm: 'tender',
        speaker: "Narator",
        text: "Lalu, anehnya, mereka malah tertawa bersama, menyadari betapa konyolnya mereka berdebat.",
        bg: assets.BACKGROUNDS.seni.ruangSeni, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'tertawa'),
        choices: [{ text: "Lanjut ke Malam Festival", nextScene: "rute_r4" }]
    },
    rute_r4: {
        bgm: 'festival',
        speaker: "Narator",
        text: "Aula Festival malam itu penuh dengan hasil kolaborasi mereka. Di kejauhan, Rangga dan Farah saling menggenggam tangan.",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: "", charRight: "",
        choices: [
            { text: "Fokus merayakan keberhasilan bersama sebagai tim", nextScene: "rute_r_ending_1" },
            { text: "Ambil kesempatan jujur soal perasaan ke salah satu", nextScene: "rute_r_ending_2" }
        ]
    },
    rute_r_ending_1: {
        bgm: 'true_ending',
        speaker: "Narator",
        text: "Reuni sekolah kini menghadirkan satu wajah tambahan: {mira}. 'Jadi, dari kita bertiga, siapa yang paling bikin kamu deg-degan waktu itu?' goda Kirana. (True Ending)",
        bg: assets.BACKGROUNDS.spesial.aulaFestival, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_epilog",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_r_ending_2: {
        bgm: 'tender',
        speaker: "Narator",
        text: "Kamu akhirnya sadar perasaanmu lebih condong. Kepada siapa?",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: img('kirana', 'bahagia'),
        choices: [
            { text: "Pilih Alexandra", nextScene: "rute_r_ending_2_a" },
            { text: "Pilih Kirana", nextScene: "rute_r_ending_2_b" }
        ]
    },
    rute_r_ending_2_a: {
        bgm: 'true_ending',
        speaker: "Alexandra",
        text: "Terima kasih sudah memilihku. (TRUE ENDING: Romantis - Alexandra)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: img('alexandra', 'bahagia'), charRight: "",
        unlockQuote: "quote_epilog",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    },
    rute_r_ending_2_b: {
        bgm: 'true_ending',
        speaker: "Kirana",
        text: "Senang banget kamu memilihku! (TRUE ENDING: Romantis - Kirana)",
        bg: assets.BACKGROUNDS.spesial.atapMalam, charLeft: "", charRight: img('kirana', 'bahagia'),
        unlockQuote: "quote_epilog",
        choices: [{ text: "Kembali ke Menu Utama", nextScene: "menu" }]
    }
};