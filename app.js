/* -------------------------------------------------------------
   LOVEFLIX INTERACTIVE ENGINE
   Core Logic: Sound Synthesis, Dynamic Rows, Modals & Slideshow
   ------------------------------------------------------------- */

// ANILAR VE PROFIL VERİ YAPISI
const MEMORIES_DATA = {
    favorites: [
        {
            id: "fav-1",
            title: "IŞILTI",
            subtitle: "Gözlerinin altındaki o küçük yıldızın hatrına.",
            image: "images/b540c85f-72c3-4976-934e-bf2f783ed905.jpg",
            match: "%99 Eşleşme",
            year: "2026",
            duration: "3s 30dk",
            genre: "Sohbet, Samimiyet, Tarz",
            tags: ["Işıltılı Gözler", "İnce Detaylar", "Tarz"],
            description: "Gözlerinin altındaki o küçük parlak taş detayı gibi, girdiğin her ortama ince ve harika bir ışıltı katıyorsun. Seninle konuşurken gözlerindeki o tatlı parıltıyı izlemek günün en güzel anı."
        },
        {
            id: "fav-2",
            title: "SANAT ATÖLYESİ",
            subtitle: "Sanat dolu bakışlarında kaybolduğumuz anlara...",
            image: "images/11f12f68-417b-4c76-b188-3821a5b1358f.jpg",
            match: "%98 Eşleşme",
            year: "2026",
            duration: "2s 15dk",
            genre: "Sanat, Estetik, Sohbet",
            tags: ["Şövaleler", "Renkli Dünyalar", "Yaratıcı"],
            description: "Resim atölyesindeki tuvallerin ve şövalelerin arasında çekilen bu kare, senin içindeki o sanatsal ve yaratıcı ruhu çok güzel yansıtıyor. Seninle sanat üzerine konuşmak, dünyayı senin pencerenden görmek her zaman bambaşka bir keyif."
        },
        {
            id: "fav-3",
            title: "DURU GÜZELLİK",
            subtitle: "En sade anlarda bile yaydığın o sakin enerji.",
            image: "images/33a1f809-1fb7-49e9-b566-ae45c5b03baf.jpg",
            match: "%97 Eşleşme",
            year: "2026",
            duration: "5s 45dk",
            genre: "Huzur, Duru Güzellik, Dinginlik",
            tags: ["Sade", "Samimi", "Sıcak Tebessüm"],
            description: "Beyaz tişörtünle, en doğal ve sade halinle bile etrafına yaydığın o sakin ve huzurlu enerji... Senin yanındayken hayatın karmaşası duruluyor ve geriye sadece bu duru tebessümün kalıyor."
        }
    ],
    memories: [
        {
            id: "mem-1",
            title: "SAHİL ESİNTİSİ",
            subtitle: "Denizin esintisi ve güneşin sıcaklığıyla parlayan o an.",
            image: "images/dc54f513-29c6-474c-aeab-647179034831.jpg",
            match: "%100 Eşleşme",
            year: "2026",
            duration: "4s 10dk",
            genre: "Huzur, Doğa, Deniz",
            tags: ["Sahil", "Mavi Deniz", "Güneş"],
            description: "Gözlerini hafifçe kapatıp denizin esintisini ve güneşin sıcaklığını yüzünde hissettiğin o an... Taşların üzerinde otururken yakaladığın bu dinginlik, bana da her zaman huzur veriyor."
        },
        {
            id: "mem-2",
            title: "TUVALDEKİ RENKLER",
            subtitle: "Ressamların çizmek isteyeceği türden, estetik bir portre.",
            image: "images/e47bad64-c2cf-417a-aaf2-66318dc4d2f3.jpg",
            match: "%99 Eşleşme",
            year: "2026",
            duration: "8s 20dk",
            genre: "Estetik, Sanat, Zarafet",
            tags: ["Atölye", "Duru Duruş", "Zarif"],
            description: "Atölyedeki tabloların önünde duruşun, adeta oradaki tüm resimlerden daha güzel bir tablo oluşturuyor. Senin o doğal zarafetin, en güzel sanat eserlerinden bile daha etkileyici."
        },
        {
            id: "mem-3",
            title: "KLASİK FİLM",
            subtitle: "Siyah beyaz bir karede bile parıldayan zamansız bakışlar.",
            image: "images/1fc05054-9ebc-4e09-ae5e-5a55c44ebb95.jpg",
            match: "%100 Eşleşme",
            year: "2026",
            duration: "Sonsuz",
            genre: "Klasik, Nostalji, Zamansız",
            tags: ["Siyah Beyaz", "Derin Bakışlar", "Retro"],
            description: "Siyah beyaz bir fotoğraf karesinde bile gözlerindeki o derinliği ve anlamı kaybetmeyen bakışların... Sanki eski, klasik bir Fransız filminden kopup gelmiş bir sahne gibi, zamansız ve büyüleyici."
        }
    ],
    special: [
        {
            id: "spec-1",
            title: "SICAK TEBESSÜM",
            subtitle: "Gülüşünün getirdiği o iç ısıtan tatlı sıcaklık.",
            image: "images/8d004be7-e586-48ba-be1f-53153c98f7ea.jpg",
            match: "%100 Eşleşme",
            year: "2026",
            duration: "1s 30dk",
            genre: "Sıcaklık, Tebessüm, Neşe",
            tags: ["Örgü Kazak", "Sıcak Gülüş", "Samimi"],
            description: "Beyaz örgü kazağınla yastığa uzanıp kameraya gülümsediğin bu an, içimi en çok ısıtan karelerden biri. Senin bu samimi tebessümün, en soğuk günleri bile bir anda bahara çevirebilecek kadar güçlü."
        },
        {
            id: "spec-2",
            title: "ZARAFET",
            subtitle: "O sıradan mekanları bile bir anda özel kılan o varlığın.",
            image: "images/92db50cd-70aa-41b9-aaca-86a5dd1c3be2.jpg",
            match: "%100 Eşleşme",
            year: "2026",
            duration: "Sonsuz",
            genre: "Zeka, Zarafet, Duruş",
            tags: ["Mavi Gömlek", "Sınıf", "Anlamlı Bakışlar"],
            description: "Okul sıralarının arasında, mavi gömleğinle kameraya baktığın bu kare... En sıradan ortamları bile sadece orada bulunarak nasıl asil, zarif ve özel hale getirdiğinin en güzel kanıtı."
        },
        {
            id: "spec-3",
            title: "DÜŞÜNCELİ BAKIŞLAR",
            subtitle: "Düşüncelere daldığın o anlardaki sessiz zarafet.",
            image: "images/ef4a71a3-466c-4b8d-b3d2-6484cb3a4e1e.jpg",
            match: "%100 Eşleşme",
            year: "2026",
            duration: "Ömür Boyu",
            genre: "Düşünceli, Derin, Sakin",
            tags: ["Mavi Kazak", "Derin Gözler", "Zarif Duruş"],
            description: "Elin yanağında, derin düşüncelere daldığın o anlardaki sessiz ve sakin zarafetin... Gözlerindeki o anlamlı derinlik, insanı uzun uzun düşündürecek kadar etkileyici."
        },
        {
            id: "spec-4",
            title: "BÜYÜLEYİCİ GÖZLER",
            subtitle: "Bakışlarındaki o derin ve gizemli tatlı ışıltı.",
            image: "images/5e187563-fa21-41ea-aa9a-95f342dcb28f.jpg",
            match: "%100 Eşleşme",
            year: "2026",
            duration: "Sonsuz",
            genre: "Gizem, Hayranlık, Derinlik",
            tags: ["Örgü Bluz", "Yukarıdan Bakış", "Büyülü"],
            description: "Siyah örgülü bluzunla uzanmışken yukarıdan doğrudan kameraya bakan o kocaman gözlerin... Bakışlarındaki o derinlik ve gizemli tatlı ışıltı, seni her gördüğümde beni yeniden hayran bırakıyor."
        }
    ],
    playlist: [
        {
            id: "play-1",
            title: "DURMA YÜRÜSENE",
            subtitle: "Hayatın ritmine kapılıp giderken...",
            image: "images/5e3e0435-07f9-40fe-a511-4bdb0a7f6dc3.jpg",
            match: "%99 Eşleşme",
            year: "2026",
            duration: "3s 45dk",
            genre: "Akustik, Enerji, Ritim",
            tags: ["Kulaklıklar", "Favori Şarkı", "Dinamik"],
            description: "Kulaklığımda bu şarkı çalarken, aklıma senin o kıpır kıpır, durdurulamaz tatlı enerjin geliyor. Hayatın tüm koşuşturmasına inat, adımlarını kendine güvenerek atışın... Senin bu güçlü ve bağımsız duruşunu izlemek benim için her zaman çok özel.",
            songUrl: "music/durma_yurusene.mp3",
            fallbackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            id: "play-2",
            title: "SANA RAĞMEN",
            subtitle: "Tüm mesafelere ve yollara rağmen.",
            image: "images/e47bad64-c2cf-417a-aaf2-66318dc4d2f3.jpg",
            match: "%100 Eşleşme",
            year: "2026",
            duration: "4s 12dk",
            genre: "Alternatif, Derin, Sakin",
            tags: ["Zarafet", "İlham", "Derin Duygular"],
            description: "Sana rağmen, bana rağmen, hayatın getirdiği tüm zorluklara ve engellere rağmen aramızdaki o tatlı çekimin ve eşsiz dostluğun yeri bambaşka. Bu melodi, her fırtınada kendi zarafetini koruyan o güçlü ve asil ruhuna gelsin.",
            songUrl: "music/sana_ragmen.mp3",
            fallbackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
            id: "play-3",
            title: "SEYRE DURSUN AŞK",
            subtitle: "Biz kendi dünyamızda eğlenirken...",
            image: "images/92db50cd-70aa-41b9-aaca-86a5dd1c3be2.jpg",
            match: "%98 Eşleşme",
            year: "2026",
            duration: "3s 20dk",
            genre: "Pop, Eğlence, Ritim",
            tags: ["Gülümseme", "Dinamik", "Keyifli Sohbet"],
            description: "Dünya kendi hızında dönerken, seyre dursun aşk... Biz kendi köşemizde en tatlı sohbetleri edip, en içten kahkahaları paylaşıyoruz. Seninle geçen her dakika, izlemesi en keyifli film sahnesi gibi aklımda kalıyor.",
            songUrl: "music/seyre_dursun_ask.mp3",
            fallbackUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        }
    ],
    games: [
        {
            id: "game-snake",
            title: "AŞK YILANI 🐍",
            subtitle: "Nehir'in Kalp Toplama Rekoru!",
            image: "images/5e187563-fa21-41ea-aa9a-95f342dcb28f.jpg",
            match: "%100 Eğlence Eşleşmesi",
            year: "2026",
            duration: "Sınırsız Eğlence",
            genre: "Retro, Arcade, Klasik",
            tags: ["Kalpler", "Kahveler", "Skor Yarışı"],
            description: "Yem olarak kalpleri ve kahve fincanlarını toplayan retro bir yılan oyunu. Yedikçe puan kazan, Nehir'in kendi rekorunu kırmasına yardımcı ol! Mobilde yön tuşları, masaüstünde klavye ok tuşları ile oynanabilir."
        },
        {
            id: "game-blockblast",
            title: "NEON BLOKLAR 🧱",
            subtitle: "Blok Yerleştirip Patlatma Oyunu!",
            image: "images/1fc05054-9ebc-4e09-ae5e-5a55c44ebb95.jpg",
            match: "%99 Zeka Eşleşmesi",
            year: "2026",
            duration: "Sınırsız Eğlence",
            genre: "Blok Bulmaca, Strateji, Zeka",
            tags: ["Neon Bloklar", "Sıra Patlatma", "Strateji"],
            description: "Aşağıda beliren 3 adet neon bloğu 8x8'lik alana yerleştirerek satır ve sütunları doldurun. Doldurduğunuz tüm satır veya sütunlar patlayarak yok olur ve size puan kazandırır! Yeni blok yerleştirecek yer kalmadığında oyun biter."
        }
    ]
};

// SLIDESHOW / MEKTUP BÖLÜMÜ VERİSİ
const SLIDESHOW_LETTERS = [
    {
        title: "Işıltınla Başlayan Bir Hikaye",
        body: "Hayatıma kattığın o pozitif enerjinin ve her anı güzelleştiren varlığının değeri benim için çok büyük. Kendi ayakları üzerinde dimdik duran, hedeflerine inançla yürüyen o güçlü duruşuna hayranım.",
        image: "images/11f07e7e-ae13-4a7c-8389-43f36a5482b5.jpg"
    },
    {
        title: "Hayatın Kendi Ritimleri",
        body: "Kulaklığından yayılan melodiler gibi, senin varlığın da hayatıma kendi ritmini getiriyor. En sıradan anları bile bir anda neşeli bir şarkıya dönüştürebilen o pozitif ruhunu çok seviyorum.",
        image: "images/5e3e0435-07f9-40fe-a511-4bdb0a7f6dc3.jpg"
    },
    {
        title: "Sanat ve Senin Renklerin",
        body: "Tuvaldeki renklerin ötesinde, kendi hayatını bir sanat eseri gibi zarafetle şekillendirişini izlemek çok özel. Senin gibi güçlü, akıllı ve vizyoner bir kadının hayatımda olması bana her an ilham veriyor.",
        image: "images/11f12f68-417b-4c76-b188-3821a5b1358f.jpg"
    },
    {
        title: "Tuvaldeki Esintiler",
        body: "Renklerin ve fırçaların arasında dururken yaydığın o asil enerji... Tıpkı çizdiğin o güzel tablo ve sanat eserleri gibi duru, derin ve hayranlık uyandırıcı bir zarafetin var.",
        image: "images/e47bad64-c2cf-417a-aaf2-66318dc4d2f3.jpg"
    },
    {
        title: "Duru Güzellik",
        body: "En sade, en doğal anlarında bile etrafına yaydığın o sakin ve huzurlu enerji... Senin yanındayken hayatın tüm koşturmacası duruluyor ve geriye sadece bu samimiyet kalıyor.",
        image: "images/33a1f809-1fb7-49e9-b566-ae45c5b03baf.jpg"
    },
    {
        title: "Sessiz Güç ve Dinginlik",
        body: "Fırtınalı günlerde bile kendi içinde o sakin, dingin limanı bulabilen, her engeli kendi zarafetiyle aşan çok güçlü bir ruhsun. Hayatın koşturmacasında durup seninle bu anları paylaşabilmek en değerli şansım.",
        image: "images/dc54f513-29c6-474c-aeab-647179034831.jpg"
    },
    {
        title: "Zamansız Bir Klasik",
        body: "Siyah beyaz bir fotoğraf karesinde bile gözlerindeki o derinliği ve anlamı kaybetmeyen bakışların... Eski, klasik ve çok özel bir Fransız filminden kopup gelmiş bir sahne gibisin.",
        image: "images/1fc05054-9ebc-4e09-ae5e-5a55c44ebb95.jpg"
    },
    {
        title: "İç Isıtan Samimiyet",
        body: "En yorgun günlerde bile etrafa yaydığın o iç ısıtan sıcaklığın ve samimi tebessümün değeri ölçülemez. Zorluklar karşısında asla sönmeyen o kararlı enerjin, ne kadar güçlü bir karaktere sahip olduğunu gösteriyor.",
        image: "images/8d004be7-e586-48ba-be1f-53153c98f7ea.jpg"
    },
    {
        title: "Her Ortamda Zarafet",
        body: "Okul sıralarının arasında, mavi gömleğinle kameraya baktığın bu kare... En sıradan ortamları bile sadece orada bulunarak nasıl asil, zarif ve özel hale getirdiğinin en güzel kanıtı.",
        image: "images/92db50cd-70aa-41b9-aaca-86a5dd1c3be2.jpg"
    },
    {
        title: "Düşüncelerin Derinliği",
        body: "Elin yanağında derin düşüncelere daldığın o anlardaki sessiz zarafetin... Gözlerindeki o anlamlı derinlik, insanı uzun uzun izlemeye ve üzerine düşünmeye davet edecek kadar etkileyici.",
        image: "images/ef4a71a3-466c-4b8d-b3d2-6484cb3a4e1e.jpg"
    },
    {
        title: "Gizemli Işıltı",
        body: "Yukarıdan doğrudan kameraya bakan o kocaman gözlerindeki gizemli tatlı ışıltı... Karakterindeki o derinlik ve samimiyet, seni her gördüğümde beni yeniden hayran bırakıyor.",
        image: "images/5e187563-fa21-41ea-aa9a-95f342dcb28f.jpg"
    },
    {
        title: "Sonsuz Bir Derinlik...",
        body: "Bu platformda izlediğimiz tüm kareler, biriktirdiğimiz tüm bu güzel anlar harika... Ama benim için dünyadaki en güzel film ise gözlerin...",
        image: "images/b540c85f-72c3-4976-934e-bf2f783ed905.jpg"
    }
];

// WEB AUDIO API - NETFLIX "TUDUM" SES SENTEZLEYİCİ
function playTudum() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // 1. Düşük ilk vuruş (0.0s)
        const osc1 = audioCtx.createOscillator();
        const gain1 = audioCtx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(85, audioCtx.currentTime);
        gain1.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.8, audioCtx.currentTime + 0.05);
        gain1.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
        
        osc1.connect(gain1);
        gain1.connect(audioCtx.destination);
        osc1.start();
        osc1.stop(audioCtx.currentTime + 0.3);

        // 2. İkinci daha belirgin vuruş (0.15s sonra)
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(105, audioCtx.currentTime + 0.12);
        gain2.gain.setValueAtTime(0.01, audioCtx.currentTime + 0.12);
        gain2.gain.exponentialRampToValueAtTime(0.9, audioCtx.currentTime + 0.17);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.45);
        
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.start(audioCtx.currentTime + 0.12);
        osc2.stop(audioCtx.currentTime + 0.5);

        // 3. Yükselen akor/melodi hissi (0.2s - 1.2s)
        const frequencies = [165, 220, 275, 330, 440];
        frequencies.forEach((freq, index) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            const filter = audioCtx.createBiquadFilter();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + 0.15);
            
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(freq * 1.5, audioCtx.currentTime + 0.15);
            filter.frequency.exponentialRampToValueAtTime(freq * 3, audioCtx.currentTime + 1.0);
            
            gain.gain.setValueAtTime(0.01, audioCtx.currentTime + 0.15);
            gain.gain.linearRampToValueAtTime(0.12 - (index * 0.015), audioCtx.currentTime + 0.45);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.6);
            
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start(audioCtx.currentTime + 0.15);
            osc.stop(audioCtx.currentTime + 1.8);
        });
    } catch (e) {
        console.log("AudioContext is blocked or not supported: ", e);
    }
}

// ARKA PLAN MP3 MÜZİK OYNATICISI
const bgMusic = document.getElementById('bg-music');
let isMusicPlaying = false;

// Kullanıcı buraya kendi MP3 dosyasının yolunu yazabilir
const MP3_FILE_PATH = "music/love_song.mp3"; 
// Yedek olarak internetten çalınacak romantik melodi (telifsiz piyano eseri)
const FALLBACK_MP3_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"; 

function setupMusicSource() {
    if (!bgMusic) return;
    bgMusic.src = MP3_FILE_PATH;
    bgMusic.volume = 0.5; // Orta ses düzeyi
    
    // Eğer yerel dosya yoksa veya yüklenirken hata verirse internetteki yedeği oynat
    bgMusic.onerror = function() {
        console.log("Yerel MP3 bulunamadı, internetteki yedek melodi yükleniyor...");
        bgMusic.src = FALLBACK_MP3_URL;
    };
}

function startBackgroundMusic() {
    if (isMusicPlaying) return;
    if (!bgMusic.src || bgMusic.src === window.location.href) {
        setupMusicSource();
    }
    
    bgMusic.play()
        .then(() => {
            isMusicPlaying = true;
            document.getElementById('music-on-icon').style.display = 'block';
            document.getElementById('music-off-icon').style.display = 'none';
        })
        .catch(err => {
            console.log("Müzik oynatılamadı (Kullanıcı etkileşimi bekleniyor):", err);
        });
}

function stopBackgroundMusic() {
    if (!isMusicPlaying) return;
    bgMusic.pause();
    isMusicPlaying = false;
    document.getElementById('music-on-icon').style.display = 'none';
    document.getElementById('music-off-icon').style.display = 'block';
}

function toggleMusic() {
    if (isMusicPlaying) {
        stopBackgroundMusic();
    } else {
        startBackgroundMusic();
    }
}

// DINAMIK POSTERLERI OLUSTURMA VE DOLDURMA
function createPosterCard(movieData) {
    const card = document.createElement('div');
    card.className = 'poster-card';
    card.dataset.id = movieData.id;
    
    // Eğer müzik kartıysa plak (vinyl) dönsün
    if (movieData.id.includes('play')) {
        card.classList.add('playlist-card');
        card.innerHTML = `
            <div class="playlist-img-container">
                <img src="${movieData.image}" alt="${movieData.title}" class="poster-img" loading="lazy">
                <div class="vinyl-record">
                    <div class="vinyl-label" style="background-image: url('${movieData.image}')"></div>
                </div>
            </div>
            <div class="card-details">
                <h3 class="card-title">${movieData.title}</h3>
                <p class="card-subtitle">${movieData.subtitle}</p>
                <div class="card-meta">
                    <span class="card-match">${movieData.match}</span>
                    <span class="card-year">${movieData.year}</span>
                    <span class="card-badge">Müzik 🎵</span>
                </div>
            </div>
        `;
    } else if (movieData.id.includes('game')) {
        card.innerHTML = `
            <img src="${movieData.image}" alt="${movieData.title}" class="poster-img" loading="lazy">
            <div class="card-details">
                <h3 class="card-title">${movieData.title}</h3>
                <p class="card-subtitle">${movieData.subtitle}</p>
                <div class="card-meta">
                    <span class="card-match">${movieData.match}</span>
                    <span class="card-year">${movieData.year}</span>
                    <span class="card-badge">Oyun 🎮</span>
                </div>
            </div>
        `;
    } else {
        card.innerHTML = `
            <img src="${movieData.image}" alt="${movieData.title}" class="poster-img" loading="lazy">
            <div class="card-details">
                <h3 class="card-title">${movieData.title}</h3>
                <p class="card-subtitle">${movieData.subtitle}</p>
                <div class="card-meta">
                    <span class="card-match">${movieData.match}</span>
                    <span class="card-year">${movieData.year}</span>
                    <span class="card-badge">HD</span>
                </div>
            </div>
        `;
    }
    
    // Tıklanınca Detay Modalı Açılması
    card.addEventListener('click', () => {
        openDetailsModal(movieData);
    });
    
    return card;
}

function populateAllRows() {
    const favRow = document.getElementById('row-favorites');
    const memRow = document.getElementById('row-memories');
    const specRow = document.getElementById('row-special');
    const playlistRow = document.getElementById('row-playlist');
    const gamesRow = document.getElementById('row-games');
    
    if (favRow) {
        MEMORIES_DATA.favorites.forEach(item => {
            favRow.appendChild(createPosterCard(item));
        });
    }
    if (memRow) {
        MEMORIES_DATA.memories.forEach(item => {
            memRow.appendChild(createPosterCard(item));
        });
    }
    if (specRow) {
        MEMORIES_DATA.special.forEach(item => {
            specRow.appendChild(createPosterCard(item));
        });
    }
    if (playlistRow && MEMORIES_DATA.playlist) {
        MEMORIES_DATA.playlist.forEach(item => {
            playlistRow.appendChild(createPosterCard(item));
        });
    }
    if (gamesRow && MEMORIES_DATA.games) {
        MEMORIES_DATA.games.forEach(item => {
            gamesRow.appendChild(createPosterCard(item));
        });
    }
}

// HORIZONTAL SCROLL DESTEĞİ
function setupRowScrolls() {
    const rows = document.querySelectorAll('.row');
    
    rows.forEach(row => {
        const container = row.querySelector('.row-posters');
        const prevBtn = row.querySelector('.prev-btn');
        const nextBtn = row.querySelector('.next-btn');
        
        if (!container || !prevBtn || !nextBtn) return;
        
        prevBtn.addEventListener('click', () => {
            const scrollAmount = container.clientWidth * 0.75;
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        
        nextBtn.addEventListener('click', () => {
            const scrollAmount = container.clientWidth * 0.75;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        // Mobil için sürükleme ile kaydırma desteği (drag-to-scroll)
        let isDown = false;
        let startX;
        let scrollLeft;
        
        container.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });
        container.addEventListener('mouseleave', () => {
            isDown = false;
        });
        container.addEventListener('mouseup', () => {
            isDown = false;
        });
        container.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; // kaydırma hızı çarpanı
            container.scrollLeft = scrollLeft - walk;
        });
    });
}

// MODAL AÇMA/KAPATMA MANTIĞI
let activeMovie = null;

function openDetailsModal(movieData) {
    activeMovie = movieData;
    
    const modal = document.getElementById('details-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const bannerImg = document.getElementById('modal-banner-img');
    const match = document.getElementById('modal-match');
    const year = document.getElementById('modal-year');
    const duration = document.getElementById('modal-duration');
    const cast = document.getElementById('modal-cast');
    const genre = document.getElementById('modal-genre');
    const tags = document.getElementById('modal-tags');
    
    title.textContent = movieData.title;
    description.textContent = movieData.description;
    match.textContent = movieData.match;
    year.textContent = movieData.year;
    duration.textContent = movieData.duration;
    cast.textContent = movieData.genre; // Custom mapping to feel cinematic
    genre.textContent = movieData.genre;
    tags.textContent = movieData.tags.join(', ');
    
    bannerImg.style.backgroundImage = `linear-gradient(to top, var(--modal-bg) 5%, rgba(24, 24, 24, 0.2) 60%, rgba(24, 24, 24, 0) 100%), url('${movieData.image}')`;
    
    // Favori butonunun durumunu kontrol et
    const likeBtn = document.getElementById('modal-like-btn');
    const savedLikes = JSON.parse(localStorage.getItem('loveflix_likes') || '{}');
    if (savedLikes[movieData.id]) {
        likeBtn.classList.add('active');
    } else {
        likeBtn.classList.remove('active');
    }
    
    // Not/Yorum yükleme
    const commentTextarea = document.getElementById('comment-textarea');
    const savedComments = JSON.parse(localStorage.getItem('loveflix_comments') || '{}');
    if (commentTextarea) {
        commentTextarea.value = savedComments[movieData.id] || '';
    }
    const savedMsg = document.getElementById('comment-saved-message');
    if (savedMsg) {
        savedMsg.style.display = 'none';
    }
    
    // Eğer bir playlist şarkısı açıldıysa o şarkıya ait özel melodiyi çal
    if (movieData.songUrl && bgMusic) {
        bgMusic.pause();
        bgMusic.src = movieData.songUrl;
        
        // Eğer yerel MP3 dosyası bulunamazsa otomatik internet yedeğine yönlendir
        bgMusic.onerror = function() {
            if (movieData.fallbackUrl && bgMusic.src !== movieData.fallbackUrl) {
                console.log("Yerel playlist MP3 dosyası bulunamadı, internetteki yedek melodi yükleniyor...");
                bgMusic.src = movieData.fallbackUrl;
                bgMusic.play().catch(err => console.log("Yedek şarkı çalma engellendi: ", err));
            }
        };
        
        bgMusic.play()
            .then(() => {
                isMusicPlaying = true;
                document.getElementById('music-on-icon').style.display = 'block';
                document.getElementById('music-off-icon').style.display = 'none';
            })
            .catch(err => console.log("Özel şarkı çalınamadı (kullanıcı etkileşimi gerekiyor):", err));
    }
    
    // Eğer bir playlist şarkısı açıldıysa modal içindeki Oynat butonunu gizle (zaten şarkı otomatik çalıyor)
    // Eğer oyun kartıysa buton yazısını "Oyna 🎮" yap, normal kartta "Oynat" yap
    const modalPlayBtn = document.getElementById('modal-play-btn');
    if (modalPlayBtn) {
        const btnSpan = modalPlayBtn.querySelector('span');
        if (movieData.id && movieData.id.includes('play')) {
            modalPlayBtn.style.display = 'none';
        } else if (movieData.id && movieData.id.includes('game')) {
            modalPlayBtn.style.display = 'flex';
            if (btnSpan) btnSpan.textContent = "Oyna 🎮";
        } else {
            modalPlayBtn.style.display = 'flex';
            if (btnSpan) btnSpan.textContent = "Oynat";
        }
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Arka plan kaymasını engelle
}

function closeDetailsModal() {
    const modal = document.getElementById('details-modal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
    
    // Eğer playlist şarkısı çalıyorsa kapatıldığında orijinal arka plan müziğine geri dön
    if (activeMovie && activeMovie.id.includes('play') && bgMusic) {
        bgMusic.pause();
        setupMusicSource(); // Orijinal fon müziğini (love_song.mp3) geri yükle
        if (isMusicPlaying) {
            bgMusic.play().catch(err => console.log(err));
        }
    }
}

// MEKTUP / FOTOĞRAF OYNATICISI (SLIDESHOW) MANTIĞI
let playerSlideIndex = 0;
let playerPlayingInterval = null;
let isPlayerRunning = false;
const slideDelay = 9500; // Her slayt için 9.5 saniye (okuma süresini rahatlatmak için uzatıldı)
let currentPlaylist = [...SLIDESHOW_LETTERS];

function openPlayer(startIndex = 0, customSlides = null) {
    closeDetailsModal();
    isPlayerRunning = true;
    
    if (customSlides) {
        currentPlaylist = customSlides;
    } else {
        currentPlaylist = [...SLIDESHOW_LETTERS];
        
        // Eğer ana slayt gösterisi (tüm resimler) oynatılıyorsa "kus.mp3" çalsın
        if (bgMusic) {
            bgMusic.pause();
            bgMusic.src = "music/kus.mp3";
            bgMusic.volume = 0.5;
            
            // Eğer "kus.mp3" bulunamazsa yedek melodiyi internetten çek
            bgMusic.onerror = function() {
                if (bgMusic.src.indexOf("SoundHelix") === -1) {
                    console.log("kus.mp3 bulunamadı, internetteki yedek melodi yükleniyor...");
                    bgMusic.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
                    bgMusic.play().catch(err => console.log(err));
                }
            };
            
            bgMusic.play()
                .then(() => {
                    isMusicPlaying = true;
                    document.getElementById('music-on-icon').style.display = 'block';
                    document.getElementById('music-off-icon').style.display = 'none';
                })
                .catch(err => console.log("Oynatıcı müziği çalınamadı (kullanıcı etkileşimi gerekiyor):", err));
        }
    }
    
    playerSlideIndex = startIndex;
    
    const player = document.getElementById('video-player');
    player.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Eğer özel bir müzik çalma işlemine girmediyse ve müzik kapalıysa varsayılanı başlat
    if (!isMusicPlaying && !customSlides) {
        startBackgroundMusic();
    }
    
    showSlide(playerSlideIndex);
    startAutoPlay();
}

function closePlayer() {
    isPlayerRunning = false;
    stopAutoPlay();
    const player = document.getElementById('video-player');
    player.style.display = 'none';
    document.body.style.overflow = '';
    
    // Eğer çalınan bir müzik varsa (kus.mp3 veya playlist şarkısı), kapatıldığında orijinal arka plan müziğine sıfırla
    if (bgMusic) {
        bgMusic.pause();
        setupMusicSource(); // Orijinal fon müziğini (love_song.mp3) geri yükle
        if (isMusicPlaying) {
            bgMusic.play().catch(err => console.log(err));
        }
    }
}

function showSlide(index) {
    const slide = currentPlaylist[index];
    if (!slide) return;
    
    const slideTitle = document.getElementById('slide-title');
    const slideBody = document.getElementById('slide-body');
    const slideBackdrop = document.getElementById('slide-backdrop');
    const timerText = document.getElementById('player-timer');
    const progress = document.getElementById('player-progress');
    
    // CSS Animasyonu tetiklemek için elementleri yenile
    const textContainer = document.querySelector('.slide-text-container');
    if (textContainer) {
        textContainer.style.animation = 'none';
        textContainer.offsetHeight; // trigger reflow
        textContainer.style.animation = 'slideTextFadeIn 0.8s ease';
    }
    
    slideTitle.textContent = slide.title;
    slideBody.textContent = slide.body;
    
    // Arka plan resmini yumuşakça değiştir
    slideBackdrop.style.backgroundImage = `url('${slide.image}')`;
    
    // Son slayta gelindiğinde veya tek bir slayt oynatıldığında resmin netleşmesi (gözlerin olduğu fotoğraf)
    if (currentPlaylist.length > 1 && index === currentPlaylist.length - 1) {
        slideBackdrop.style.filter = 'blur(0px) brightness(0.65)';
        slideBackdrop.style.transform = 'scale(1)'; // Hafif geri zoom ile tam netleme
    } else if (currentPlaylist.length === 1) {
        slideBackdrop.style.filter = 'blur(0px) brightness(0.65)';
        slideBackdrop.style.transform = 'scale(1)';
    } else {
        slideBackdrop.style.filter = 'blur(4px) brightness(0.4)';
        slideBackdrop.style.transform = 'scale(1.05)';
    }
    
    timerText.textContent = `${index + 1} / ${currentPlaylist.length}`;
    
    // İlerleme çubuğunu güncelle
    const percent = ((index + 1) / currentPlaylist.length) * 100;
    progress.style.width = `${percent}%`;
}

function nextSlide() {
    playerSlideIndex = (playerSlideIndex + 1) % currentPlaylist.length;
    showSlide(playerSlideIndex);
}

function prevSlide() {
    playerSlideIndex = (playerSlideIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    showSlide(playerSlideIndex);
}

function startAutoPlay() {
    stopAutoPlay();
    playerPlayingInterval = setInterval(() => {
        nextSlide();
    }, slideDelay);
    
    document.getElementById('player-pause-icon').style.display = 'block';
    document.getElementById('player-play-icon').style.display = 'none';
}

function stopAutoPlay() {
    if (playerPlayingInterval) {
        clearInterval(playerPlayingInterval);
        playerPlayingInterval = null;
    }
    
    document.getElementById('player-pause-icon').style.display = 'none';
    document.getElementById('player-play-icon').style.display = 'block';
}

function toggleAutoPlay() {
    if (playerPlayingInterval) {
        stopAutoPlay();
    } else {
        startAutoPlay();
        nextSlide();
    }
}

// SAYFA KAYDIRILINCA NAVİGASYON BARININ KOYULAŞMASI
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function closeMobileMenu() {
    document.body.classList.remove('mobile-menu-open');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const backdrop = document.getElementById('mobile-nav-backdrop');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.setAttribute('aria-hidden', 'true');
}

function initMobileNav() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const backdrop = document.getElementById('mobile-nav-backdrop');
    const navLinks = document.querySelector('.nav-links');

    if (!menuToggle) return;

    menuToggle.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('mobile-menu-open');
        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        menuToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
        if (backdrop) backdrop.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    if (backdrop) {
        backdrop.addEventListener('click', closeMobileMenu);
    }

    navLinks?.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.body.classList.contains('mobile-menu-open')) {
            closeMobileMenu();
            menuToggle.setAttribute('aria-label', 'Menüyü aç');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && document.body.classList.contains('mobile-menu-open')) {
            closeMobileMenu();
            menuToggle.setAttribute('aria-label', 'Menüyü aç');
        }
    });
}

// BİLEŞENLERİN BAĞLANMASI VE İLK ÇALIŞMA
document.addEventListener('DOMContentLoaded', () => {
    // 1. Dinamik posterleri satırlara yükle
    populateAllRows();
    
    // 2. Yön butonları kaydırma işlevleri
    setupRowScrolls();
    
    // 3. Profil seçimi etkileşimi
    const profileNehir = document.getElementById('profile-nehir');
    const profileUs = document.getElementById('profile-us');
    const profileScreen = document.getElementById('profile-screen');
    const mainApp = document.getElementById('main-app');
    
    function selectProfile(profileName) {
        // Tudum sesini çal
        playTudum();
        
        // Profil görseli zoom efekti ve ekran geçişi
        profileScreen.style.transform = 'scale(1.1)';
        profileScreen.style.opacity = '0';
        
        setTimeout(() => {
            profileScreen.style.display = 'none';
            
            if (profileName === 'Nehir') {
                // Nehir için uyarı (splash) ekranını göster
                const splashScreen = document.getElementById('splash-screen');
                splashScreen.style.display = 'flex';
                splashScreen.style.opacity = '0';
                splashScreen.offsetHeight; // trigger reflow
                splashScreen.style.transition = 'opacity 0.6s ease';
                splashScreen.style.opacity = '1';
            } else {
                // Diğer profil için doğrudan uygulamaya gir
                mainApp.style.display = 'block';
                mainApp.style.opacity = '0';
                mainApp.offsetHeight; // trigger reflow
                mainApp.style.transition = 'opacity 0.8s ease';
                mainApp.style.opacity = '1';
                setTimeout(() => {
                    startBackgroundMusic();
                }, 1000);
            }
        }, 600);
    }
    
    profileNehir.addEventListener('click', () => selectProfile('Nehir'));
    profileUs.addEventListener('click', () => selectProfile('Biz'));
    
    // Splash ekranından ana uygulamaya geçiş
    const splashEnterBtn = document.getElementById('splash-enter-btn');
    const splashScreen = document.getElementById('splash-screen');
    if (splashEnterBtn && splashScreen) {
        splashEnterBtn.addEventListener('click', () => {
            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.style.display = 'none';
                mainApp.style.display = 'block';
                mainApp.style.opacity = '0';
                mainApp.offsetHeight; // trigger reflow
                mainApp.style.transition = 'opacity 0.8s ease';
                mainApp.style.opacity = '1';
                
                setTimeout(() => {
                    startBackgroundMusic();
                }, 500);
            }, 600);
        });
    }
    
    // 4. Çıkış Yap / Mobil Geri Dön Butonları
    const logoutBtn = document.getElementById('logout-btn');
    const handleLogout = () => {
        stopBackgroundMusic();
        mainApp.style.display = 'none';
        profileScreen.style.display = 'flex';
        profileScreen.style.transform = 'scale(1)';
        profileScreen.style.opacity = '1';
    };
    
    logoutBtn.addEventListener('click', handleLogout);
    
    const mobileBackBtn = document.getElementById('mobile-back-btn');
    if (mobileBackBtn) {
        mobileBackBtn.addEventListener('click', handleLogout);
    }
    
    // 5. Hero Banner Butonları
    const heroPlayBtn = document.getElementById('hero-play-btn');
    const heroInfoBtn = document.getElementById('hero-info-btn');
    
    heroPlayBtn.addEventListener('click', () => {
        openPlayer(0);
    });
    
    heroInfoBtn.addEventListener('click', () => {
        // Ana banner film olarak "Nehir" filmini gösterir.
        // Onu simüle etmek için özel bir veri oluşturuyoruz:
        const bannerData = {
            id: "nehir-hero",
            title: "NEHİR",
            image: "images/11f07e7e-ae13-4a7c-8389-43f36a5482b5.jpg",
            match: "%100 Uyum Eşleşmesi",
            year: "2026",
            duration: "Harika Anlar",
            genre: "Samimiyet, Paylaşım, Dostluk",
            tags: ["İlham Verici", "Sıcak Gülümseme", "Yol Arkadaşı"],
            description: "Girdiğin her ortama ışık saçan, aklımı başımdan alan o tatlı tebessümün sahibine... Bu platform; seninle içilen kahvelerin, paylaşılan sessizliklerin, atılan kahkahaların ve henüz yazılmamış tüm o heyecan verici yeni sahnelerin küçük bir kutlamasıdır. İyi ki varsın."
        };
        openDetailsModal(bannerData);
    });
    
    // 6. Müzik Açma Kapatma Butonu
    const musicToggle = document.getElementById('music-toggle');
    musicToggle.addEventListener('click', toggleMusic);
    
    // 7. Modal Kapatma Butonları
    const closeModalBtn = document.getElementById('close-modal');
    closeModalBtn.addEventListener('click', closeDetailsModal);
    
    // Dışarı tıklayınca modal kapatma
    const modal = document.getElementById('details-modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDetailsModal();
        }
    });
    
    // Like/Kalp Butonu İşlevi (Lokal depolama ile durumu korur)
    const likeBtn = document.getElementById('modal-like-btn');
    likeBtn.addEventListener('click', () => {
        if (!activeMovie) return;
        
        const savedLikes = JSON.parse(localStorage.getItem('loveflix_likes') || '{}');
        if (savedLikes[activeMovie.id]) {
            delete savedLikes[activeMovie.id];
            likeBtn.classList.remove('active');
        } else {
            savedLikes[activeMovie.id] = true;
            likeBtn.classList.add('active');
        }
        localStorage.setItem('loveflix_likes', JSON.stringify(savedLikes));
    });
    
    // Modal içindeki Oynat Butonu
    const modalPlayBtn = document.getElementById('modal-play-btn');
    modalPlayBtn.addEventListener('click', () => {
        if (!activeMovie) return;
        
        // Eğer oyun kartıysa oyunu başlat
        if (activeMovie.id && activeMovie.id.includes('game')) {
            closeDetailsModal();
            openGame(activeMovie.id);
            return;
        }
        
        // Eğer tıklandığında oynatılan kart zaten ana slayt gösterisi listesinde varsa, doğrudan o indeksten başlat:
        // Ancak bu kart bir playlist şarkısıysa (play- ile başlıyorsa), ana listeyle eşleştirme (kendi müziği çalsın)!
        let matchedIndex = -1;
        if (!activeMovie.id.includes('play')) {
            for (let i = 0; i < SLIDESHOW_LETTERS.length; i++) {
                if (SLIDESHOW_LETTERS[i].image === activeMovie.image) {
                    matchedIndex = i;
                    break;
                }
            }
        }
        
        if (matchedIndex !== -1) {
            // Ana slayt listesinde eşleşti, o slayttan başlat
            openPlayer(matchedIndex);
        } else {
            // Eğer listede yoksa veya playlist şarkısıysa, sadece o karta özel tek slaytlık bir oynatıcı oluştur!
            const customSlide = {
                title: activeMovie.title,
                body: activeMovie.description,
                image: activeMovie.image
            };
            openPlayer(0, [customSlide]);
        }
    });
    
    // 8. Slayt Oynatıcısı Kontrolleri
    const closePlayerBtn = document.getElementById('close-player');
    const playerPrevBtn = document.getElementById('player-prev');
    const playerNextBtn = document.getElementById('player-next');
    const playerPlayPauseBtn = document.getElementById('player-play-pause');
    
    closePlayerBtn.addEventListener('click', closePlayer);
    playerPrevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoPlay(); // geri sayımı sıfırla
    });
    playerNextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoPlay(); // geri sayımı sıfırla
    });
    playerPlayPauseBtn.addEventListener('click', toggleAutoPlay);
    
    // Klavye yön tuşları ile kontrol desteği
    document.addEventListener('keydown', (e) => {
        if (isPlayerRunning) {
            if (e.key === 'ArrowRight') {
                nextSlide();
                startAutoPlay();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
                startAutoPlay();
            } else if (e.key === 'Escape') {
                closePlayer();
            } else if (e.key === ' ') {
                e.preventDefault();
                toggleAutoPlay();
            }
        } else if (modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeDetailsModal();
            }
        }
    });
    
    // 8.2 Not/Yorum Kaydetme Butonu Dinleyicisi
    const saveCommentBtn = document.getElementById('save-comment-btn');
    if (saveCommentBtn) {
        saveCommentBtn.addEventListener('click', () => {
            if (!activeMovie) return;
            const commentText = document.getElementById('comment-textarea').value;
            const savedComments = JSON.parse(localStorage.getItem('loveflix_comments') || '{}');
            savedComments[activeMovie.id] = commentText;
            localStorage.setItem('loveflix_comments', JSON.stringify(savedComments));
            
            const savedMsg = document.getElementById('comment-saved-message');
            if (savedMsg) {
                savedMsg.style.display = 'block';
                setTimeout(() => {
                    savedMsg.style.display = 'none';
                }, 3000);
            }
        });
    }
    
    // 15. Klavye ve Dokunmatik Oyun Kontrolleri Dinleyicileri
    document.addEventListener('keydown', (e) => {
        if (!gameRunning) return;
        
        if (activeGame === 'snake') {
            if (e.key === 'ArrowLeft' && snakeDirection !== 'right') snakeDirection = 'left';
            else if (e.key === 'ArrowUp' && snakeDirection !== 'down') snakeDirection = 'up';
            else if (e.key === 'ArrowRight' && snakeDirection !== 'left') snakeDirection = 'right';
            else if (e.key === 'ArrowDown' && snakeDirection !== 'up') snakeDirection = 'down';
            
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        }
    });
    
    // Mobil Dokunmatik Yön Butonları (Sadece Yılan Oyunu İçin)
    const handleGameButton = (dir) => {
        if (!gameRunning) return;
        
        if (activeGame === 'snake') {
            if (dir === 'left' && snakeDirection !== 'right') snakeDirection = 'left';
            else if (dir === 'up' && snakeDirection !== 'down') snakeDirection = 'up';
            else if (dir === 'right' && snakeDirection !== 'left') snakeDirection = 'right';
            else if (dir === 'down' && snakeDirection !== 'up') snakeDirection = 'down';
        }
    };
    
    const btnUp = document.getElementById('btn-ctrl-up');
    const btnLeft = document.getElementById('btn-ctrl-left');
    const btnDown = document.getElementById('btn-ctrl-down');
    const btnRight = document.getElementById('btn-ctrl-right');
    
    if (btnUp) btnUp.addEventListener('click', () => handleGameButton('up'));
    if (btnLeft) btnLeft.addEventListener('click', () => handleGameButton('left'));
    if (btnDown) btnDown.addEventListener('click', () => handleGameButton('down'));
    if (btnRight) btnRight.addEventListener('click', () => handleGameButton('right'));
    
    // Yeniden Başlat / Başlat Butonu
    const gameStartBtn = document.getElementById('btn-game-start');
    if (gameStartBtn) {
        gameStartBtn.addEventListener('click', () => {
            if (activeGame === 'snake') {
                startSnakeGame();
            } else {
                startBlockBlastGame();
            }
            gameStartBtn.textContent = "OYUNU SIFIRLA";
        });
    }
    
    // Oyunu Kapatma Butonu
    const closeGameBtn = document.getElementById('close-game-btn');
    if (closeGameBtn) closeGameBtn.addEventListener('click', closeGame);

    // Canvas Sürükle Bırak ve Tıklama Dinleyicileri (Block Blast)
    const canvasEl = document.getElementById('game-canvas');
    if (canvasEl) {
        canvasEl.addEventListener('pointerdown', (e) => {
            if (!gameRunning) return;
            canvasEl.setPointerCapture(e.pointerId);
            
            const rect = canvasEl.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            const scaleX = canvasW / rect.width;
            const scaleY = canvasH / rect.height;
            const canvasClickX = clickX * scaleX;
            const canvasClickY = clickY * scaleY;
            
            if (activeGame === 'blockblast') {
                // Alttaki slotlardan birine mi tıklandı?
                if (canvasClickY >= bottomY && canvasClickY <= bottomY + slotHeight) {
                    const slotIdx = Math.floor(canvasClickX / slotWidth);
                    if (slotIdx >= 0 && slotIdx < 3 && blockBlastPieces[slotIdx]) {
                        isDragging = true;
                        draggedPieceIdx = slotIdx;
                        selectedPieceIdx = slotIdx;
                        
                        dragX = canvasClickX;
                        dragY = canvasClickY;
                        
                        const slotStartX = slotIdx * slotWidth;
                        dragOffsetX = canvasClickX - (slotStartX + slotWidth / 2);
                        dragOffsetY = canvasClickY - (bottomY + slotHeight / 2);
                        
                        ghostPlacement = null;
                    }
                }
                // Izgaraya mı tıklandı?
                else if (canvasClickX >= gridX && canvasClickX <= gridX + (cellSize * 8) &&
                         canvasClickY >= gridY && canvasClickY <= gridY + (cellSize * 8)) {
                    if (selectedPieceIdx !== -1) {
                        const col = Math.floor((canvasClickX - gridX) / cellSize);
                        const row = Math.floor((canvasClickY - gridY) / cellSize);
                        
                        const piece = blockBlastPieces[selectedPieceIdx];
                        const pRows = piece.matrix.length;
                        const pCols = piece.matrix[0].length;
                        
                        const centerR = Math.floor(pRows / 2);
                        const centerC = Math.floor(pCols / 2);
                        const targetRow = row - centerR;
                        const targetCol = col - centerC;
                        
                        if (canPlacePiece(piece, targetRow, targetCol)) {
                            placePiece(piece, targetRow, targetCol);
                            blockBlastPieces[selectedPieceIdx] = null;
                            selectedPieceIdx = -1;
                            
                            checkAndClearLines();
                            
                            if (blockBlastPieces.every(p => p === null)) {
                                generateNewPieces();
                            }
                            
                            if (isBlockBlastGameOver()) {
                                blockBlastGameOver();
                            }
                        }
                    }
                }
            }
        });
        
        canvasEl.addEventListener('pointermove', (e) => {
            if (!gameRunning || !isDragging) return;
            
            const rect = canvasEl.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            const scaleX = canvasW / rect.width;
            const scaleY = canvasH / rect.height;
            
            dragX = clickX * scaleX;
            dragY = clickY * scaleY;
            
            if (activeGame === 'blockblast') {
                const piece = blockBlastPieces[draggedPieceIdx];
                const pRows = piece.matrix.length;
                const pCols = piece.matrix[0].length;
                const pieceW = pCols * cellSize;
                const pieceH = pRows * cellSize;
                
                const currentCenterX = dragX - dragOffsetX;
                const currentCenterY = dragY - dragOffsetY;
                const topLeftX = currentCenterX - (pieceW / 2);
                const topLeftY = currentCenterY - (pieceH / 2);
                
                const hoverCol = Math.round((topLeftX - gridX) / cellSize);
                const hoverRow = Math.round((topLeftY - gridY) / cellSize);
                
                if (canPlacePiece(piece, hoverRow, hoverCol)) {
                    ghostPlacement = { row: hoverRow, col: hoverCol };
                } else {
                    ghostPlacement = null;
                }
            }
        });
        
        canvasEl.addEventListener('pointerup', (e) => {
            if (!gameRunning || !isDragging) return;
            canvasEl.releasePointerCapture(e.pointerId);
            
            if (activeGame === 'blockblast' && ghostPlacement) {
                const piece = blockBlastPieces[draggedPieceIdx];
                placePiece(piece, ghostPlacement.row, ghostPlacement.col);
                blockBlastPieces[draggedPieceIdx] = null;
                selectedPieceIdx = -1;
                
                checkAndClearLines();
                
                if (blockBlastPieces.every(p => p === null)) {
                    generateNewPieces();
                }
                
                if (isBlockBlastGameOver()) {
                    blockBlastGameOver();
                }
            }
            
            isDragging = false;
            draggedPieceIdx = -1;
            ghostPlacement = null;
        });
        
        canvasEl.addEventListener('pointercancel', (e) => {
            if (isDragging) {
                canvasEl.releasePointerCapture(e.pointerId);
                isDragging = false;
                draggedPieceIdx = -1;
                ghostPlacement = null;
            }
        });
    }

    // 16. İnteraktif Zarf (Mektup) Kontrolleri
    const navLetter = document.getElementById('nav-letter');
    const envelopeModal = document.getElementById('envelope-modal');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const envelope = document.getElementById('envelope');
    const waxSeal = document.getElementById('wax-seal');
    const closeEnvelopeBtn = document.getElementById('close-envelope-btn');
    const closeEnvelopeOverlay = document.getElementById('close-envelope-overlay');
    
    if (navLetter) {
        navLetter.addEventListener('click', (e) => {
            e.preventDefault();
            if (envelopeModal) {
                envelopeModal.style.display = 'flex';
                if (envelope) envelope.classList.remove('open');
                if (envelopeWrapper) {
                    envelopeWrapper.classList.remove('slide-letter');
                    envelopeWrapper.classList.remove('active-letter');
                }
            }
        });
    }
    
    const triggerEnvelopeOpen = () => {
        if (!envelope || envelope.classList.contains('open')) return;
        
        // Aşama 1: Kapak açılır
        envelope.classList.add('open');
        
        // Aşama 2: Kağıt yukarı doğru süzülür
        setTimeout(() => {
            if (envelopeWrapper) envelopeWrapper.classList.add('slide-letter');
        }, 300);
        
        // Aşama 3: Mektup tam ekran zoom yapar, zarf arkaya gizlenir
        setTimeout(() => {
            if (envelopeWrapper) envelopeWrapper.classList.add('active-letter');
        }, 900);
    };
    
    if (waxSeal) {
        waxSeal.addEventListener('click', (e) => {
            e.stopPropagation();
            triggerEnvelopeOpen();
        });
    }
    if (envelope) {
        envelope.addEventListener('click', triggerEnvelopeOpen);
    }
    
    const hideEnvelope = () => {
        if (envelopeModal) {
            envelopeModal.style.display = 'none';
            if (envelope) envelope.classList.remove('open');
            if (envelopeWrapper) {
                envelopeWrapper.classList.remove('slide-letter');
                envelopeWrapper.classList.remove('active-letter');
            }
        }
    };
    
    if (closeEnvelopeBtn) closeEnvelopeBtn.addEventListener('click', hideEnvelope);
    if (closeEnvelopeOverlay) closeEnvelopeOverlay.addEventListener('click', hideEnvelope);
    
    // 9. Navbar scroll dinleyici
    initMobileNav();
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Mutfak Arayüzü dinleyicilerini kur
    initKitchenListeners();
    // Romantik bölümleri kur
    initLanternsModal();
    initStarModal();
    // Geri sayım sayacını başlat
    startBirthdayCountdown();
});

/* -------------------------------------------------------------
   14. NEHİR'İN OYUN ODASI MOTORU (SNAKE & BLOCK BLAST OYUNLARI)
   ------------------------------------------------------------- */
let activeGame = null; // 'snake' veya 'blockblast'
let gameCanvas = null;
let gameCtx = null;
let gameInterval = null;
let gameRunning = false;
let gameScore = 0;
let gameHighScore = 0;

// Yılan Oyunu Değişkenleri
let snake = [];
let snakeDirection = 'right';
let food = { x: 0, y: 0, type: 'heart' }; // 'heart' veya 'coffee'
let gridCount = 20;
let gridCellSize = 20;

// Yılan Partikül Sistemi (Yem Yendiğinde Kalp/Baloncuk Patlaması)
let snakeParticles = [];

// Block Blast Sürükle-Bırak Değişkenleri
let blockBlastGrid = []; 
let blockBlastPieces = []; 
let selectedPieceIdx = -1; 

// Sürükleme Durum Değişkenleri
let isDragging = false;
let draggedPieceIdx = -1;
let dragX = 0;
let dragY = 0;
let dragOffsetX = 0;
let dragOffsetY = 0;
let ghostPlacement = null; 

// Izgara Ölçüleri
let canvasW, canvasH;
let cellSize;
let gridX, gridY;
let bottomY;
let slotWidth;
let slotHeight = 110;
let previewCellSize;

// Yüzen İltifat Kelimeleri & 60fps Döngü Değişkenleri
let floatingTexts = [];
let blockBlastAnimFrame = null;
let snakeAnimFrame = null;
let lastSnakeUpdate = 0;
let snakeSpeed = 130; 

const NEHIR_COMPLIMENTS = [
    "Harikasın Nehir! ✨",
    "Bu zeka beni büyülüyor... 🧠💖",
    "Gözlerindeki o tatlı ışıltı kadar parlak! 🌟",
    "Sanat atölyesinden fırlamış bir zeka! 🎨",
    "Seninle her an böyle heyecan verici! ⚡",
    "Harika odaklandın, hayranım! 😍",
    "Zekana bir kez daha vuruldum! 💡",
    "Buralar seninle aydınlandı! ✨",
    "İltifatı hak eden harika bir hamle! 😉",
    "Yine döktürüyorsun birtanem! ☕"
];

// Tekrarsız Random İltifat Çekmek İçin Shuffle Pool Mantığı (Harika Çözüm!)
let complimentPool = [];
function getNextCompliment() {
    if (complimentPool.length === 0) {
        complimentPool = [...NEHIR_COMPLIMENTS];
        // Shuffle pool
        for (let i = complimentPool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [complimentPool[i], complimentPool[j]] = [complimentPool[j], complimentPool[i]];
        }
    }
    return complimentPool.pop();
}

const BLOCK_PIECES_DATA = [
    // 1. Tekli Kare (1x1)
    { matrix: [[1]], color: '#ff007f' }, // Canlı Pembe
    // 2. Yatay İkili (1x2)
    { matrix: [[1, 1]], color: '#e50914' }, // Netflix Kırmızısı
    // 3. Dikey İkili (2x1)
    { matrix: [[1], [1]], color: '#e50914' },
    // 4. Yatay Üçlü (1x3)
    { matrix: [[1, 1, 1]], color: '#00f0ff' }, // Cam Göbeği
    // 5. Dikey Üçlü (3x1)
    { matrix: [[1], [1], [1]], color: '#00f0ff' },
    // 6. Kare (2x2)
    { matrix: [[1, 1], [1, 1]], color: '#ffea00' }, // Sarı
    // 7. L Şekilleri (2x2)
    { matrix: [[1, 0], [1, 1]], color: '#00ff66' }, // Yeşil
    { matrix: [[0, 1], [1, 1]], color: '#00ff66' },
    { matrix: [[1, 1], [1, 0]], color: '#00ff66' },
    { matrix: [[1, 1], [0, 1]], color: '#00ff66' },
    // 8. Köşe 3x3 L Şekli
    { matrix: [[1, 0, 0], [1, 0, 0], [1, 1, 1]], color: '#af00ff' }, // Mor
    { matrix: [[1, 1, 1], [0, 0, 1], [0, 0, 1]], color: '#af00ff' },
    // 9. Artı (+) Şekli
    { matrix: [[0, 1, 0], [1, 1, 1], [0, 1, 0]], color: '#ff7b00' } // Turuncu
];

// Köşeleri Yuvarlatılmış Blok Çizim Yordamı
function drawRoundRect(ctx, x, y, width, height, radius, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
}

function setupBlockBlastSizes() {
    canvasW = gameCanvas.width;
    canvasH = gameCanvas.height;
    
    cellSize = Math.floor((canvasW * 0.82) / 8); 
    gridX = Math.floor((canvasW - (cellSize * 8)) / 2);
    gridY = 20;
    
    bottomY = gridY + (cellSize * 8) + 25; 
    slotWidth = Math.floor(canvasW / 3);
    previewCellSize = Math.floor(cellSize * 0.45); 
}

function openGame(gameId) {
    const modal = document.getElementById('game-modal');
    const title = document.getElementById('game-title');
    gameCanvas = document.getElementById('game-canvas');
    gameCtx = gameCanvas.getContext('2d');
    
    stopGame();
    
    activeGame = gameId.includes('snake') ? 'snake' : 'blockblast';
    gameRunning = false;
    gameScore = 0;
    floatingTexts = [];
    snakeParticles = [];
    
    document.getElementById('game-score').textContent = '0';
    
    gameHighScore = parseInt(localStorage.getItem('loveflix_high_' + activeGame) || '0');
    document.getElementById('game-high-score').textContent = gameHighScore;
    
    const startBtn = document.getElementById('btn-game-start');
    startBtn.textContent = "OYUNU BAŞLAT";
    
    const mobileControls = document.querySelector('.mobile-game-controls');
    if (mobileControls) {
        mobileControls.style.display = activeGame === 'snake' ? 'flex' : 'none';
    }
    
    if (activeGame === 'snake') {
        title.textContent = "AŞK YILANI 🐍";
        document.getElementById('game-instr-text').textContent = "Kalpleri (💖) ve kahveleri (☕) toplamak için yılanı yönlendirin. Yem yedikçe patlayan kalpleri ve Can'ın harika iltifatlarını görün! Yönlendirmek için klavye ok tuşlarını veya ekran oklarını kullanın.";
        
        if (window.innerWidth <= 768) {
            gameCanvas.width = 300;
            gameCanvas.height = 300;
            gridCellSize = 15;
        } else {
            gameCanvas.width = 400;
            gameCanvas.height = 400;
            gridCellSize = 20;
        }
        canvasW = gameCanvas.width;
        canvasH = gameCanvas.height;
        
        initSnakeGame();
        drawSnakeGamePlaceholder();
    } else {
        title.textContent = "NEON BLOKLAR 🧱";
        document.getElementById('game-instr-text').textContent = "Alttaki 3 neon bloktan birini basılı tutarak ızgaraya sürükleyin ve yerleştirin. İsterseniz bloğa tıklayıp ızgaradaki bir kareye dokunarak da yerleştirebilirsiniz. Satır veya sütun dolduğunda patlarlar ve Nehir'e tatlı bir iltifat gelir!";
        
        if (window.innerWidth <= 768) {
            gameCanvas.width = 340;
            gameCanvas.height = 450; 
        } else {
            gameCanvas.width = 500;
            gameCanvas.height = 600; 
        }
        
        setupBlockBlastSizes();
        initBlockBlastGame();
        drawBlockBlastPlaceholder();
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function stopGame() {
    gameRunning = false;
    if (gameInterval) {
        clearInterval(gameInterval);
        gameInterval = null;
    }
    if (blockBlastAnimFrame) {
        cancelAnimationFrame(blockBlastAnimFrame);
        blockBlastAnimFrame = null;
    }
    if (snakeAnimFrame) {
        cancelAnimationFrame(snakeAnimFrame);
        snakeAnimFrame = null;
    }
}

function closeGame() {
    stopGame();
    document.getElementById('game-modal').style.display = 'none';
    document.body.style.overflow = '';
}

// ------------------- YILAN OYUNU MANTIĞI -------------------
function initSnakeGame() {
    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];
    snakeDirection = 'right';
    snakeParticles = [];
    floatingTexts = [];
    spawnFood();
}

function drawSnakeGamePlaceholder() {
    gameCtx.fillStyle = '#080808';
    gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    gameCtx.fillStyle = 'rgba(255,255,255,0.7)';
    gameCtx.font = "18px Outfit, sans-serif";
    gameCtx.textAlign = "center";
    gameCtx.fillText("YILAN OYUNU", gameCanvas.width / 2, gameCanvas.height / 2 - 20);
    gameCtx.font = "13px Inter, sans-serif";
    gameCtx.fillStyle = 'rgba(255,255,255,0.4)';
    gameCtx.fillText("Başlamak için butona tıklayın!", gameCanvas.width / 2, gameCanvas.height / 2 + 10);
}

function spawnFood() {
    food.x = Math.floor(Math.random() * gridCount);
    food.y = Math.floor(Math.random() * gridCount);
    food.type = Math.random() > 0.4 ? 'heart' : 'coffee';
    
    for (let segment of snake) {
        if (segment.x === food.x && segment.y === food.y) {
            spawnFood();
            break;
        }
    }
}

function startSnakeGame() {
    stopGame();
    initSnakeGame();
    gameRunning = true;
    lastSnakeUpdate = performance.now();
    
    snakeGameLoop();
}

function snakeGameLoop(time = 0) {
    if (!gameRunning || activeGame !== 'snake') return;
    
    const deltaTime = time - lastSnakeUpdate;
    if (deltaTime >= snakeSpeed) {
        updateSnakePhysics();
        lastSnakeUpdate = time;
    }
    
    for (let i = snakeParticles.length - 1; i >= 0; i--) {
        const p = snakeParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.opacity -= 0.02; 
        if (p.opacity <= 0) {
            snakeParticles.splice(i, 1);
        }
    }
    
    updateFloatingTextsPhysics();
    
    drawSnakeGame();
    
    snakeAnimFrame = requestAnimationFrame(snakeGameLoop);
}

function updateSnakePhysics() {
    let head = { ...snake[0] };
    if (snakeDirection === 'right') head.x++;
    else if (snakeDirection === 'left') head.x--;
    else if (snakeDirection === 'up') head.y--;
    else if (snakeDirection === 'down') head.y++;
    
    if (head.x < 0 || head.x >= gridCount || head.y < 0 || head.y >= gridCount) {
        snakeGameOver();
        return;
    }
    
    for (let segment of snake) {
        if (segment.x === head.x && segment.y === head.y) {
            snakeGameOver();
            return;
        }
    }
    
    snake.unshift(head);
    
    if (head.x === food.x && head.y === food.y) {
        gameScore += food.type === 'heart' ? 10 : 15;
        document.getElementById('game-score').textContent = gameScore;
        
        const foodCanvasX = food.x * gridCellSize + gridCellSize / 2;
        const foodCanvasY = food.y * gridCellSize + gridCellSize / 2;
        const particleColor = food.type === 'heart' ? '#ff0055' : '#d4a373';
        spawnSnakeExplosion(foodCanvasX, foodCanvasY, particleColor, food.type);
        
        const randComp = getNextCompliment();
        floatingTexts.push({
            text: randComp,
            x: foodCanvasX,
            y: foodCanvasY,
            yOffset: 0,
            opacity: 1.0
        });
        
        if (gameScore > gameHighScore) {
            gameHighScore = gameScore;
            document.getElementById('game-high-score').textContent = gameHighScore;
            localStorage.setItem('loveflix_high_snake', gameHighScore);
        }
        
        spawnFood();
    } else {
        snake.pop();
    }
}

function spawnSnakeExplosion(x, y, color, type) {
    for (let i = 0; i < 12; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.0 + Math.random() * 2.5;
        snakeParticles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: color,
            size: 5 + Math.random() * 6,
            opacity: 1.0,
            type: type
        });
    }
}

function drawSnakeGame() {
    gameCtx.fillStyle = '#080808';
    gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    gameCtx.strokeStyle = '#121212';
    gameCtx.lineWidth = 0.5;
    for (let i = 0; i < gridCount; i++) {
        gameCtx.beginPath();
        gameCtx.moveTo(i * gridCellSize, 0);
        gameCtx.lineTo(i * gridCellSize, gameCanvas.height);
        gameCtx.stroke();
        
        gameCtx.beginPath();
        gameCtx.moveTo(0, i * gridCellSize);
        gameCtx.lineTo(gameCanvas.width, i * gridCellSize);
        gameCtx.stroke();
    }
    
    snake.forEach((segment, idx) => {
        const x = segment.x * gridCellSize;
        const y = segment.y * gridCellSize;
        
        gameCtx.save();
        if (idx === 0) {
            gameCtx.fillStyle = '#e50914';
            gameCtx.shadowColor = '#e50914';
            gameCtx.shadowBlur = 10;
            
            gameCtx.beginPath();
            gameCtx.arc(x + gridCellSize/2, y + gridCellSize/2, (gridCellSize/2) - 0.5, 0, Math.PI * 2);
            gameCtx.fill();
            
            gameCtx.fillStyle = '#ffffff';
            gameCtx.shadowBlur = 0; 
            
            let eyeX1, eyeY1, eyeX2, eyeY2;
            const eyeSize = 3;
            const pupilSize = 1;
            
            if (snakeDirection === 'right') {
                eyeX1 = x + 14; eyeY1 = y + 5;
                eyeX2 = x + 14; eyeY2 = y + 15;
            } else if (snakeDirection === 'left') {
                eyeX1 = x + 6; eyeY1 = y + 5;
                eyeX2 = x + 6; eyeY2 = y + 15;
            } else if (snakeDirection === 'up') {
                eyeX1 = x + 5; eyeY1 = y + 6;
                eyeX2 = x + 15; eyeY2 = y + 6;
            } else { 
                eyeX1 = x + 5; eyeY1 = y + 14;
                eyeX2 = x + 15; eyeY2 = y + 14;
            }
            
            gameCtx.beginPath();
            gameCtx.arc(eyeX1, eyeY1, eyeSize, 0, Math.PI*2);
            gameCtx.arc(eyeX2, eyeY2, eyeSize, 0, Math.PI*2);
            gameCtx.fill();
            
            gameCtx.fillStyle = '#000000';
            gameCtx.beginPath();
            gameCtx.arc(eyeX1, eyeY1, pupilSize, 0, Math.PI*2);
            gameCtx.arc(eyeX2, eyeY2, pupilSize, 0, Math.PI*2);
            gameCtx.fill();
            
        } else {
            gameCtx.fillStyle = 'rgba(229, 9, 20, ' + (1 - idx/snake.length * 0.75) + ')';
            gameCtx.shadowColor = '#e50914';
            gameCtx.shadowBlur = 6;
            
            gameCtx.beginPath();
            gameCtx.arc(x + gridCellSize/2, y + gridCellSize/2, (gridCellSize/2) - 1.5, 0, Math.PI * 2);
            gameCtx.fill();
        }
        gameCtx.restore();
    });
    
    gameCtx.save();
    const foodX = food.x * gridCellSize + gridCellSize/2;
    const foodY = food.y * gridCellSize + gridCellSize/2;
    
    if (food.type === 'heart') {
        gameCtx.fillStyle = '#ff0055';
        gameCtx.shadowColor = '#ff0055';
        gameCtx.shadowBlur = 12;
        gameCtx.font = (gridCellSize * 0.9) + 'px Outfit, Arial';
        gameCtx.textAlign = "center";
        gameCtx.textBaseline = "middle";
        gameCtx.fillText("❤", foodX, foodY);
    } else {
        gameCtx.fillStyle = '#d4a373';
        gameCtx.shadowColor = '#d4a373';
        gameCtx.shadowBlur = 12;
        gameCtx.font = (gridCellSize * 0.9) + 'px Outfit, Arial';
        gameCtx.textAlign = "center";
        gameCtx.textBaseline = "middle";
        gameCtx.fillText("☕", foodX, foodY);
    }
    gameCtx.restore();
    
    snakeParticles.forEach(p => {
        gameCtx.save();
        gameCtx.globalAlpha = p.opacity;
        gameCtx.fillStyle = p.color;
        gameCtx.shadowColor = p.color;
        gameCtx.shadowBlur = 8;
        
        if (p.type === 'heart') {
            gameCtx.font = p.size + 'px Outfit, Arial';
            gameCtx.fillText("❤", p.x, p.y);
        } else {
            gameCtx.beginPath();
            gameCtx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
            gameCtx.fill();
        }
        gameCtx.restore();
    });
    
    floatingTexts.forEach(txt => {
        gameCtx.save();
        gameCtx.fillStyle = 'rgba(255, 215, 0, ' + txt.opacity + ')'; 
        gameCtx.font = "bold 15px Outfit, sans-serif";
        gameCtx.textAlign = "center";
        gameCtx.shadowColor = '#ffea00';
        gameCtx.shadowBlur = 12;
        gameCtx.fillText(txt.text, txt.x, txt.y + txt.yOffset);
        gameCtx.restore();
    });
}

function snakeGameOver() {
    stopGame();
    gameCtx.fillStyle = 'rgba(0,0,0,0.8)';
    gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    
    gameCtx.fillStyle = '#e50914';
    gameCtx.font = "bold 26px Outfit, sans-serif";
    gameCtx.textAlign = "center";
    gameCtx.fillText("OYUN BİTTİ!", gameCanvas.width / 2, gameCanvas.height / 2 - 20);
    
    gameCtx.fillStyle = 'white';
    gameCtx.font = "14px Inter, sans-serif";
    gameCtx.fillText('Toplam Skorun: ' + gameScore, gameCanvas.width / 2, gameCanvas.height / 2 + 15);
    
    document.getElementById('btn-game-start').textContent = "YENİDEN BAŞLAT";
}

// ------------------- BLOCK BLAST OYUNU MANTIĞI -------------------
function initBlockBlastGame() {
    blockBlastGrid = Array(8).fill(null).map(() => Array(8).fill(0));
    blockBlastPieces = [];
    selectedPieceIdx = -1;
    floatingTexts = [];
    isDragging = false;
    draggedPieceIdx = -1;
    ghostPlacement = null;
    generateNewPieces();
}

function startBlockBlastGame() {
    stopGame();
    initBlockBlastGame();
    gameRunning = true;
    blockBlastLoop();
}

function blockBlastLoop() {
    if (!gameRunning || activeGame !== 'blockblast') return;
    
    updateFloatingTextsPhysics();
    
    drawBlockBlastGame();
    blockBlastAnimFrame = requestAnimationFrame(blockBlastLoop);
}

function updateFloatingTextsPhysics() {
    for (let i = floatingTexts.length - 1; i >= 0; i--) {
        const txt = floatingTexts[i];
        txt.yOffset -= 0.45; 
        txt.opacity -= 0.006; 
        if (txt.opacity <= 0) {
            floatingTexts.splice(i, 1);
        }
    }
}

function handleBlockBlastClick(clickX, clickY) {
    if (clickY >= bottomY && clickY <= bottomY + slotHeight) {
        const slotIdx = Math.floor(clickX / slotWidth);
        if (slotIdx >= 0 && slotIdx < 3 && blockBlastPieces[slotIdx]) {
            selectedPieceIdx = slotIdx;
            drawBlockBlastGame();
        }
    }
    else if (clickX >= gridX && clickX <= gridX + (cellSize * 8) &&
             clickY >= gridY && clickY <= gridY + (cellSize * 8)) {
        if (selectedPieceIdx === -1) return;
        
        const col = Math.floor((clickX - gridX) / cellSize);
        const row = Math.floor((clickY - gridY) / cellSize);
        
        const piece = blockBlastPieces[selectedPieceIdx];
        const pRows = piece.matrix.length;
        const pCols = piece.matrix[0].length;
        
        const centerR = Math.floor(pRows / 2);
        const centerC = Math.floor(pCols / 2);
        const targetRow = row - centerR;
        const targetCol = col - centerC;
        
        if (canPlacePiece(piece, targetRow, targetCol)) {
            placePiece(piece, targetRow, targetCol);
            blockBlastPieces[selectedPieceIdx] = null;
            selectedPieceIdx = -1;
            
            checkAndClearLines();
            
            if (blockBlastPieces.every(p => p === null)) {
                generateNewPieces();
            }
            
            if (isBlockBlastGameOver()) {
                blockBlastGameOver();
            } else {
                drawBlockBlastGame();
            }
        }
    }
}

function placePiece(piece, startRow, startCol) {
    const matrix = piece.matrix;
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] !== 0) {
                blockBlastGrid[startRow + r][startCol + c] = piece.color;
            }
        }
    }
    
    let blockCount = 0;
    matrix.forEach(row => row.forEach(val => { if (val !== 0) blockCount++; }));
    gameScore += blockCount * 10;
    document.getElementById('game-score').textContent = gameScore;
}

function checkAndClearLines() {
    let rowsToClear = [];
    let colsToClear = [];
    
    for (let r = 0; r < 8; r++) {
        if (blockBlastGrid[r].every(cell => cell !== 0)) {
            rowsToClear.push(r);
        }
    }
    
    for (let c = 0; c < 8; c++) {
        let isColFull = true;
        for (let r = 0; r < 8; r++) {
            if (blockBlastGrid[r][c] === 0) {
                isColFull = false;
                break;
            }
        }
        if (isColFull) {
            colsToClear.push(c);
        }
    }
    
    if (rowsToClear.length > 0 || colsToClear.length > 0) {
        rowsToClear.forEach(r => {
            blockBlastGrid[r] = Array(8).fill(0);
        });
        colsToClear.forEach(c => {
            for (let r = 0; r < 8; r++) {
                blockBlastGrid[r][c] = 0;
            }
        });
        
        const clearedLines = rowsToClear.length + colsToClear.length;
        gameScore += clearedLines * 100 * clearedLines;
        document.getElementById('game-score').textContent = gameScore;
        
        const randComp = getNextCompliment();
        floatingTexts.push({
            text: randComp,
            x: canvasW / 2,
            y: gridY + (cellSize * 4), 
            yOffset: 0,
            opacity: 1.0
        });
        
        if (gameScore > gameHighScore) {
            gameHighScore = gameScore;
            document.getElementById('game-high-score').textContent = gameHighScore;
            localStorage.setItem('loveflix_high_blockblast', gameHighScore);
        }
    }
}

function isBlockBlastGameOver() {
    for (let i = 0; i < 3; i++) {
        const piece = blockBlastPieces[i];
        if (!piece) continue;
        
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < 8; c++) {
                if (canPlacePiece(piece, r, c)) {
                    return false;
                }
            }
        }
    }
    if (blockBlastPieces.every(p => p === null)) {
        return false;
    }
    return true;
}

function drawBlockBlastGame() {
    gameCtx.fillStyle = '#080808';
    gameCtx.fillRect(0, 0, canvasW, canvasH);
    
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const val = blockBlastGrid[r][c];
            const x = gridX + c * cellSize;
            const y = gridY + r * cellSize;
            
            gameCtx.shadowBlur = 0;
            if (val === 0) {
                gameCtx.fillStyle = '#141414';
                gameCtx.strokeStyle = '#222';
                gameCtx.lineWidth = 1;
                drawRoundRect(gameCtx, x + 2, y + 2, cellSize - 4, cellSize - 4, 6, true, true);
            } else {
                gameCtx.fillStyle = val;
                gameCtx.strokeStyle = val;
                gameCtx.shadowColor = val;
                gameCtx.shadowBlur = 8;
                drawRoundRect(gameCtx, x + 2, y + 2, cellSize - 4, cellSize - 4, 6, true, true);
            }
        }
    }
    gameCtx.shadowBlur = 0;
    
    gameCtx.strokeStyle = '#2b2b2b';
    gameCtx.lineWidth = 2.5;
    drawRoundRect(gameCtx, gridX, gridY, cellSize * 8, cellSize * 8, 8, false, true);
    
    if (isDragging && ghostPlacement && draggedPieceIdx !== -1) {
        const piece = blockBlastPieces[draggedPieceIdx];
        const matrix = piece.matrix;
        const pRows = matrix.length;
        const pCols = matrix[0].length;
        
        gameCtx.save();
        gameCtx.globalAlpha = 0.35;
        gameCtx.fillStyle = piece.color;
        gameCtx.shadowColor = piece.color;
        gameCtx.shadowBlur = 10;
        
        for (let r = 0; r < pRows; r++) {
            for (let c = 0; c < pCols; c++) {
                if (matrix[r][c] !== 0) {
                    const x = gridX + (ghostPlacement.col + c) * cellSize;
                    const y = gridY + (ghostPlacement.row + r) * cellSize;
                    drawRoundRect(gameCtx, x + 2, y + 2, cellSize - 4, cellSize - 4, 6, true, false);
                }
            }
        }
        gameCtx.restore();
    }
    
    for (let i = 0; i < 3; i++) {
        if (isDragging && draggedPieceIdx === i) continue;
        
        const piece = blockBlastPieces[i];
        if (!piece) continue;
        
        const isSelected = (selectedPieceIdx === i);
        const slotStartX = i * slotWidth;
        
        if (isSelected && !isDragging) {
            gameCtx.strokeStyle = '#e50914';
            gameCtx.lineWidth = 1.5;
            drawRoundRect(gameCtx, slotStartX + 10, bottomY, slotWidth - 20, slotHeight, 8, false, true);
            gameCtx.shadowColor = '#e50914';
            gameCtx.shadowBlur = 8;
        } else {
            gameCtx.strokeStyle = '#1a1a1a';
            gameCtx.lineWidth = 1;
            drawRoundRect(gameCtx, slotStartX + 10, bottomY, slotWidth - 20, slotHeight, 8, false, true);
        }
        gameCtx.shadowBlur = 0;
        
        const matrix = piece.matrix;
        const pRows = matrix.length;
        const pCols = matrix[0].length;
        
        const pieceW = pCols * previewCellSize;
        const pieceH = pRows * previewCellSize;
        const startX = slotStartX + (slotWidth - pieceW) / 2;
        const startY = bottomY + (slotHeight - pieceH) / 2;
        
        for (let r = 0; r < pRows; r++) {
            for (let c = 0; c < pCols; c++) {
                if (matrix[r][c] !== 0) {
                    gameCtx.fillStyle = piece.color;
                    gameCtx.shadowColor = piece.color;
                    gameCtx.shadowBlur = 4;
                    drawRoundRect(
                        gameCtx,
                        startX + c * previewCellSize + 1,
                        startY + r * previewCellSize + 1,
                        previewCellSize - 2,
                        previewCellSize - 2,
                        3,
                        true,
                        false
                    );
                }
            }
        }
        gameCtx.shadowBlur = 0;
    }
    
    if (isDragging && draggedPieceIdx !== -1) {
        const piece = blockBlastPieces[draggedPieceIdx];
        const matrix = piece.matrix;
        const pRows = matrix.length;
        const pCols = matrix[0].length;
        
        const pieceW = pCols * cellSize;
        const pieceH = pRows * cellSize;
        
        const startX = dragX - dragOffsetX - (pieceW / 2);
        const startY = dragY - dragOffsetY - (pieceH / 2);
        
        gameCtx.save();
        gameCtx.globalAlpha = 0.85;
        gameCtx.shadowColor = piece.color;
        gameCtx.shadowBlur = 15;
        
        for (let r = 0; r < pRows; r++) {
            for (let c = 0; c < pCols; c++) {
                if (matrix[r][c] !== 0) {
                    gameCtx.fillStyle = piece.color;
                    const x = startX + c * cellSize;
                    const y = startY + r * cellSize;
                    drawRoundRect(gameCtx, x + 2, y + 2, cellSize - 4, cellSize - 4, 6, true, false);
                }
            }
        }
        gameCtx.restore();
    }
    
    floatingTexts.forEach(txt => {
        gameCtx.save();
        gameCtx.fillStyle = 'rgba(255, 215, 0, ' + txt.opacity + ')';
        gameCtx.font = "bold 17px Outfit, sans-serif";
        gameCtx.textAlign = "center";
        gameCtx.shadowColor = '#ffea00';
        gameCtx.shadowBlur = 12;
        gameCtx.fillText(txt.text, txt.x, txt.y + txt.yOffset);
        gameCtx.restore();
    });
}

function blockBlastGameOver() {
    stopGame();
    gameCtx.fillStyle = 'rgba(0,0,0,0.85)';
    gameCtx.fillRect(0, 0, canvasW, canvasH);
    
    gameCtx.fillStyle = '#e50914';
    gameCtx.font = "bold 26px Outfit, sans-serif";
    gameCtx.textAlign = "center";
    gameCtx.fillText("HAMLE KALMADI!", canvasW / 2, canvasH / 2 - 20);
    
    gameCtx.fillStyle = 'white';
    gameCtx.font = "14px Inter, sans-serif";
    gameCtx.fillText('Toplam Skorun: ' + gameScore, canvasW / 2, canvasH / 2 + 15);
    
    document.getElementById('btn-game-start').textContent = "YENİDEN BAŞLAT";
}

function generateNewPieces() {
    blockBlastPieces = [];
    for (let i = 0; i < 3; i++) {
        const rand = BLOCK_PIECES_DATA[Math.floor(Math.random() * BLOCK_PIECES_DATA.length)];
        blockBlastPieces.push(JSON.parse(JSON.stringify(rand)));
    }
}

function canPlacePiece(piece, startRow, startCol) {
    if (!piece) return false;
    const matrix = piece.matrix;
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    if (startRow < 0 || startCol < 0 || startRow + rows > 8 || startCol + cols > 8) return false;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] !== 0) {
                if (blockBlastGrid[startRow + r][startCol + c] !== 0) {
                    return false;
                }
            }
        }
    }
    return true;
}

function drawBlockBlastPlaceholder() {
    gameCtx.fillStyle = '#080808';
    gameCtx.fillRect(0, 0, canvasW, canvasH);
    
    gameCtx.fillStyle = 'rgba(255,255,255,0.7)';
    gameCtx.font = "20px Outfit, sans-serif";
    gameCtx.textAlign = "center";
    gameCtx.fillText("NEON BLOKLAR", canvasW / 2, canvasH / 2 - 20);
    gameCtx.font = "14px Inter, sans-serif";
    gameCtx.fillStyle = 'rgba(255,255,255,0.4)';
    gameCtx.fillText("Başlamak için butona tıklayın!", canvasW / 2, canvasH / 2 + 10);
}

/* -------------------------------------------------------------
   15. LOVEFLIX KITCHEN (MUTFAK ATÖLYESİ) MOTORU
   ------------------------------------------------------------- */
const PRESET_RECIPES = [
    {
        id: "rec-sebastian",
        title: "San Sebastian Cheesecake 🍰",
        category: "dessert",
        prepTime: 20,
        cookTime: 30,
        difficulty: "Orta",
        youtubeId: "N1eI4kFq-N4",
        ingredients: [
            "500g Labne peyniri",
            "1 su bardağı toz şeker (200g)",
            "3 adet yumurta (oda sıcaklığında)",
            "1 paket krema (200ml)",
            "1 yemek kaşığı dolusu un"
        ],
        steps: [
            "Labne peyniri ve toz şekeri derin bir kapta şeker tamamen eriyene kadar mikserle çırpın.",
            "Yumurtaları teker teker ekleyin. Her yumurtayı eklediğinizde tamamen karışana kadar hafifçe çırpmaya devam edin.",
            "Sıvı kremayı ekleyip karıştırın.",
            "Son olarak unu eleyerek ekleyin ve pürüzsüz, ipeksi bir kıvam alana kadar spatulayla söndürmeden karıştırın.",
            "20cm kalıbın içine yağlı kağıdı buruşturarak yerleştirin. Harcı kalıba dökün.",
            "Önceden ısıtılmış 200 derece fırında fanlı ayarda yaklaşık 25-30 dakika pişirin. Üzeri koyu kahverengi olmalı ve fırından çıktığında içi hafif sallanmalıdır."
        ]
    },
    {
        id: "rec-magnolia",
        title: "Strawberry Magnolia 🍓",
        category: "dessert",
        prepTime: 15,
        cookTime: 15,
        difficulty: "Kolay",
        youtubeId: "P_42Pj-u4vI",
        ingredients: [
            "1 litre süt",
            "1 su bardağı toz şeker",
            "2 yemek kaşığı un",
            "2 yemek kaşığı mısır nişastası",
            "1 adet yumurta sarısı",
            "1 paket krema (200ml)",
            "1 paket cici bebe veya petibör bisküvi",
            "15-20 adet taze çilek (dilimlenmiş)"
        ],
        steps: [
            "Süt, şeker, un, nişasta ve yumurta sarısını bir tencereye alıp tel çırpıcıyla iyice karıştırın.",
            "Orta ateşte sürekli karıştırarak koyulaşıp kaynayana kadar pişirin. Kaynayınca ocaktan alıp soğumaya bırakın.",
            "Muhallebi tamamen soğuduğunda sıvı kremayı ekleyin ve mikserle 3-4 dakika pürüzsüz olana kadar çırpın.",
            "Bisküvileri rondodan geçirerek un haline getirin.",
            "Kupların en altına 2 yemek kaşığı bisküvi koyun. Kenarlarına çilek dilimlerini dikey olarak dizin.",
            "Üzerine hazırladığınız kremadan dökün. Tekrar bisküvi ve krema katları yaparak kupları doldurun. Buzdolabında en az 2 saat dinlendirin."
        ]
    },
    {
        id: "rec-sufle",
        title: "Çikolatalı Akışkan Sufle 🧁",
        category: "dessert",
        prepTime: 10,
        cookTime: 8,
        difficulty: "Orta",
        youtubeId: "Z-XoDq3zL3w",
        ingredients: [
            "3 adet yumurta",
            "80g tereyağı",
            "120g bitter çikolata (en az %60 kakao)",
            "Yarım su bardağı un",
            "3 yemek kaşığı toz şeker",
            "1 çimdik tuz"
        ],
        steps: [
            "Tereyağını sos tenceresinde eritin. Eriyen yağın içine parçaladığınız bitter çikolataları ekleyin ve karıştırarak eritin, ardından ılımaya bırakın.",
            "Derin bir kapta yumurtaları ve toz şekeri köpük köpük beyazlaşana kadar mikserle çırpın.",
            "Ilıyan tereyağlı çikolatayı yumurtaların içine yavaşça eklerken karıştırmaya devam edin.",
            "Unu ve tuzu ekleyip spatula yardımıyla alttan üste doğru söndürmeden hafifçe karıştırın.",
            "Sufle kaplarını tereyağıyla yağlayıp hafifçe unlayın. Harcı kaplara paylaştırın.",
            "Önceden ısıtılmış 220 derece fırında tam 7-8 dakika pişirin. Ortasının yumuşak ve sallantılı kaldığından emin olup hemen servis edin."
        ]
    },
    {
        id: "rec-alfredo",
        title: "Kremalı Mantarlı Fettuccine Alfredo 🍝",
        category: "meal",
        prepTime: 10,
        cookTime: 15,
        difficulty: "Kolay",
        youtubeId: "37a5qjG1mY0",
        ingredients: [
            "1 paket fettuccine makarna",
            "300g mantar (dilimlenmiş)",
            "1 kutu sıvı krema (200ml)",
            "2 diş sarımsak (ezilmiş)",
            "2 yemek kaşığı tereyağı",
            "Yarım su bardağı rendelenmiş parmesan veya kaşar peyniri",
            "Tuz, karabiber, kuru kekik"
        ],
        steps: [
            "Geniş bir tencerede bol su kaynatıp tuz ekleyin ve fettuccine makarnayı paket talimatına göre haşlayın (haşlama suyundan yarım su bardağı kenara ayırın).",
            "Geniş bir tavada tereyağını eritin. Ezilmiş sarımsakları ekleyip kokusu çıkana kadar 30 saniye soteleyin.",
            "Dilimlenmiş mantarları ekleyin ve suyunu çekip hafif altın sarısı renk alana kadar yüksek ateşte kavurun.",
            "Sıvı kremayı ekleyin, altını kısıp krema hafif tıkırdayana kadar 2-3 dakika karıştırarak ısıtın.",
            "Peyniri, tuzu ve karabiberi ekleyip peynir eriyene kadar karıştırın.",
            "Süzdüğünüz makarnaları ve kenara ayırdığınız makarna suyundan birkaç kaşık sosun içine döküp makarnayla sosu 1 dakika boyunca soteleyerek harmanlayın. Kekik serperek sıcak servis yapın."
        ]
    },
    {
        id: "rec-islakkek",
        title: "Bol Soslu Islak Kek 🍫",
        category: "dessert",
        prepTime: 15,
        cookTime: 35,
        difficulty: "Kolay",
        youtubeId: "N7J6d7g471o",
        ingredients: [
            "3 adet yumurta",
            "1.5 su bardağı toz şeker",
            "1.5 su bardağı süt",
            "1 su bardağı sıvı yağ",
            "1 paket vanilya",
            "1 paket kabartma tozu",
            "3 yemek kaşığı kakao",
            "2 su bardağı elenmiş un",
            "Sosu için: 1 su bardağı süt, 1 çay bardağı şeker, yarım çay bardağı sıvı yağ, 2 yemek kaşığı kakao"
        ],
        steps: [
            "Yumurta ve şekeri mikserle beyaz köpük olana kadar en az 5 dakika çırpın.",
            "Süt, sıvı yağ ve kakaoyu ekleyip çırpmaya devam edin.",
            "Un, kabartma tozu ve vanilyayı eleyerek karışıma ekleyin ve spatula ile yavaşça karıştırın.",
            "Yağlanmış borcama harcı dökün ve önceden ısıtılmış 180 derece fırında yaklaşık 30-35 dakika pişirin.",
            "Kek pişerken sos malzemelerini tencereye alın, karıştırarak bir taşım kaynatın ve altını kapatın.",
            "Fırından çıkan sıcak keki dilimleyin, üzerine kürdanla delikler açın ve ılık sosu sıcak kekin üzerine eşitçe dökün. En az 2 saat dinlendirip servis edin."
        ]
    },
    {
        id: "rec-pizza",
        title: "Ev Yapımı İtalyan Pizza 🍕",
        category: "meal",
        prepTime: 30,
        cookTime: 20,
        difficulty: "Orta",
        youtubeId: "JnyHekqW2fQ",
        ingredients: [
            "5 su bardağı un",
            "1 paket instant maya (10g)",
            "1 yemek kaşığı toz şeker",
            "Yarım yemek kaşığı tuz",
            "2 su bardağı ılık su",
            "4 yemek kaşığı zeytinyağı",
            "Sosu için: 2 su bardağı domates püresi, 2 diş sarımsak, 1 yemek kaşığı salça, 1 yemek kaşığı kekik, zeytinyağı",
            "Üzeri için: Bol miktarda rendelenmiş kaşar peyniri, sucuk dilimleri, mısır, zeytin, mantar"
        ],
        steps: [
            "Ilık su, şeker ve mayayı yoğurma kabına alıp 5 dakika bekletin. Un, tuz ve zeytinyağını ekleyerek yumuşak bir hamur yoğurun. Üzerini kapatıp 40 dakika mayalandırın.",
            "Sos malzemelerini küçük bir kasede pürüzsüzleşene kadar çırpın.",
            "Mayalanan hamuru 2 veya 3 bezeye bölüp unlanmış tezgahta merdane yardımıyla açın.",
            "Hamuru yağlı kağıt serili tepsiye alın, üzerine çatalla delikler açın (kabarmaması için).",
            "Hazırladığınız sosu sürün, peynir rendesinin yarısını serpin. Diğer pizza malzemelerini (sucuk, mısır vb.) dizin.",
            "Önceden ısıtılmış 200 derece fırında yaklaşık 15-20 dakika pişirin. Fırından çıkarmadan 2 dakika önce kalan peynirleri de üzerine serpip eritin."
        ]
    },
    {
        id: "rec-tiramisu",
        title: "Pratik Kedi Dilli Tiramisu ☕",
        category: "dessert",
        prepTime: 20,
        cookTime: 10,
        difficulty: "Kolay",
        youtubeId: "eH651RjW6Vw",
        ingredients: [
            "1 paket kedi dili bisküvi (12-16 adet)",
            "2 su bardağı süt (krema için)",
            "1 adet yumurta sarısı",
            "2 yemek kaşığı un",
            "2 yemek kaşığı mısır nişastası",
            "4 yemek kaşığı toz şeker",
            "1 paket vanilya",
            "200g labne peyniri (suyu süzülmüş)",
            "Islatmak için: 1 su bardağı ılık su, 1 yemek kaşığı granül kahve (Nescafe), 1 tatlı kaşığı şeker",
            "Üzeri için: Toz kakao"
        ],
        steps: [
            "Krema için süt, yumurta sarısı, un, nişasta ve şekeri tencereye alıp koyulaşana kadar karıştırarak pişirin. Kaynayınca vanilyayı ekleyip karıştırın ve ılımaya bırakın.",
            "Ilıyan kremaya süzülmüş labneyi ekleyin ve mikserle 3 dakika pürüzsüz olana kadar çırpın.",
            "Geniş bir kasede ılık su, granül kahve ve şekeri karıştırın.",
            "Kedi dili bisküvileri kahveli suya batırıp hızlıca çıkararak borcamın tabanına dizin (bisküvileri çok bekletmeyin ki erimesin).",
            "Bisküvilerin üzerine kremanın yarısını döküp yayın. İkinci kat bisküvileri de kahveye batırıp dizin ve kalan kremayla üzerini kapatın.",
            "Buzdolabında en az 4 saat dinlendirdikten sonra servis etmeden önce üzerine bolca kakao eleyin."
        ]
    }
];

let selectedRecipeId = null;
let currentCatFilter = "all";

// Mutfak Arayüzü Dinleyicilerini Kur (DOMContentLoaded sonrasında tetiklenir)
function initKitchenListeners() {
    const navKitchen = document.getElementById('nav-kitchen');
    const kitchenModal = document.getElementById('kitchen-modal');
    const closeKitchenBtn = document.getElementById('close-kitchen-btn');
    
    if (navKitchen) {
        navKitchen.addEventListener('click', (e) => {
            e.preventDefault();
            if (kitchenModal) {
                kitchenModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                loadKitchenRecipes();
            }
        });
    }
    
    if (closeKitchenBtn) {
        closeKitchenBtn.addEventListener('click', () => {
            if (kitchenModal) {
                kitchenModal.style.display = 'none';
                document.body.style.overflow = '';
                
                // Detay videosunu kapatırken durdur (Iframe sıfırlama)
                const videoContainer = document.getElementById('detail-video-container');
                if (videoContainer) videoContainer.innerHTML = '';
            }
        });
    }
    
    // Kategori Seçim Butonları
    const catButtons = document.querySelectorAll('.kitchen-cat-btn');
    catButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.id === 'btn-add-recipe-view') {
                showAddRecipeView();
                return;
            }
            
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCatFilter = btn.dataset.category;
            loadKitchenRecipes();
        });
    });
    
    // Arama Çubuğu Dinleyicisi
    const searchInput = document.getElementById('recipe-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            loadKitchenRecipes(searchInput.value.trim());
        });
    }
    
    // Not Kaydetme Butonu
    const saveNoteBtn = document.getElementById('btn-save-recipe-note');
    if (saveNoteBtn) {
        saveNoteBtn.addEventListener('click', saveRecipeNote);
    }
    
    // Yeni Tarif Ekleme Form Dinleyicisi
    const addForm = document.getElementById('add-recipe-form');
    if (addForm) {
        addForm.addEventListener('submit', handleAddRecipeSubmit);
    }
}

// Bütün tarifleri (Hazır + Kullanıcının eklediği) birleştirip getirir
function getAllRecipes() {
    const customRecipes = JSON.parse(localStorage.getItem('loveflix_recipes') || '[]');
    return [...PRESET_RECIPES, ...customRecipes];
}

// Tarif Listesini Arayüze Doldurur
function loadKitchenRecipes(searchQuery = '') {
    const recipesList = document.getElementById('recipes-list');
    const detailView = document.getElementById('recipe-detail-view');
    const addView = document.getElementById('recipe-add-view');
    
    if (!recipesList) return;
    recipesList.innerHTML = '';
    
    // Formu gizle, liste/detay görünümünü etkinleştir
    if (addView) addView.style.display = 'none';
    
    const allRecipes = getAllRecipes();
    
    // Filtreleme uygula
    let filtered = allRecipes;
    if (currentCatFilter !== 'all') {
        filtered = filtered.filter(r => r.category === currentCatFilter);
    }
    
    // Arama uygula
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(r => 
            r.title.toLowerCase().includes(query) || 
            r.ingredients.some(ing => ing.toLowerCase().includes(query))
        );
    }
    
    if (filtered.length === 0) {
        const searchBox = document.createElement('div');
        searchBox.className = 'recipe-card';
        searchBox.style.cursor = 'default';
        searchBox.style.borderColor = '#ff0055';
        
        const escapedQuery = searchQuery.replace(/"/g, '&quot;');
        
        searchBox.innerHTML = `
            <div class="recipe-card-title" style="color: #ff0055; font-size: 14px; margin-bottom: 10px;">"${escapedQuery}" kütüphanede yok!</div>
            <div style="font-size: 11px; color: #888; margin-bottom: 12px; line-height: 1.4;">Hemen aşağıdaki butonlarla internette videolu tarif arayabilirsin:</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <button class="btn" style="background-color: #ff0055; color: white; padding: 6px; font-size: 11px; width: 100%; border: none; cursor: pointer; border-radius: 4px;" onclick="window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent('${escapedQuery} tarifi'), '_blank')">YouTube'da Görüntüle 🎥</button>
                <button class="btn" style="background-color: #ffea00; color: #141414; padding: 6px; font-size: 11px; width: 100%; border: none; cursor: pointer; border-radius: 4px; font-weight: 600;" onclick="window.open('https://www.google.com/search?q=' + encodeURIComponent('${escapedQuery} nasıl yapılır tarifi'), '_blank')">Google'da Görüntüle 🔍</button>
            </div>
        `;
        recipesList.appendChild(searchBox);
        
        if (detailView) detailView.style.display = 'none';
        return;
    }
    
    filtered.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        if (selectedRecipeId === recipe.id) {
            card.classList.add('selected');
        }
        
        card.innerHTML = `
            <div class="recipe-card-title">${recipe.title}</div>
            <div class="recipe-card-meta">
                <span>⏱ ${recipe.prepTime + recipe.cookTime} dk</span>
                <span>🔥 ${recipe.difficulty}</span>
            </div>
        `;
        
        card.addEventListener('click', () => {
            document.querySelectorAll('.recipe-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            openRecipeDetail(recipe);
        });
        
        recipesList.appendChild(card);
    });
    
    // Eğer hiçbir şey seçili değilse ilk tarifi detaylandır
    if (!selectedRecipeId && filtered.length > 0) {
        openRecipeDetail(filtered[0]);
        const firstCard = recipesList.querySelector('.recipe-card');
        if (firstCard) firstCard.classList.add('selected');
    } else if (selectedRecipeId) {
        const active = filtered.find(r => r.id === selectedRecipeId);
        if (active) {
            openRecipeDetail(active);
        } else {
            openRecipeDetail(filtered[0]);
            const firstCard = recipesList.querySelector('.recipe-card');
            if (firstCard) firstCard.classList.add('selected');
        }
    }
}

// Seçilen Tarifin Detayını Sağ Bölüme Doldurur
function openRecipeDetail(recipe) {
    selectedRecipeId = recipe.id;
    
    const detailView = document.getElementById('recipe-detail-view');
    const addView = document.getElementById('recipe-add-view');
    
    if (addView) addView.style.display = 'none';
    if (detailView) detailView.style.display = 'block';
    
    document.getElementById('detail-title').textContent = recipe.title;
    document.getElementById('detail-prep-time').textContent = '⏱ Hazırlama: ' + recipe.prepTime + ' dk';
    document.getElementById('detail-cook-time').textContent = '🍳 Pişirme: ' + recipe.cookTime + ' dk';
    document.getElementById('detail-difficulty').textContent = '🔥 Zorluk: ' + recipe.difficulty;
    
    // Malzeme Checkboxları doldur
    const ingredientsContainer = document.getElementById('detail-ingredients');
    ingredientsContainer.innerHTML = '';
    
    recipe.ingredients.forEach((ing, index) => {
        const label = document.createElement('label');
        label.className = 'ingredient-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                label.classList.add('checked');
            } else {
                label.classList.remove('checked');
            }
        });
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(ing));
        ingredientsContainer.appendChild(label);
    });
    
    // Hazırlanış Adımları doldur
    const stepsContainer = document.getElementById('detail-steps');
    stepsContainer.innerHTML = '';
    recipe.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsContainer.appendChild(li);
    });
    
    // Video Oynatıcıyı (YouTube iframe) yükle
    const videoContainer = document.getElementById('detail-video-container');
    videoContainer.innerHTML = '';
    
    if (recipe.youtubeId) {
        // ID temizleme (Eğer tam link yapıştırıldıysa sadece ID'yi ayıkla)
        let ytId = recipe.youtubeId;
        if (ytId.includes('v=')) {
            ytId = ytId.split('v=')[1].split('&')[0];
        } else if (ytId.includes('youtu.be/')) {
            ytId = ytId.split('youtu.be/')[1].split('?')[0];
        }
        
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + ytId;
        iframe.title = recipe.title;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        
        videoContainer.appendChild(iframe);
    } else {
        videoContainer.innerHTML = '<p style="color: #666; font-size: 13px; text-align: center; padding-top: 25%;">Bu tarif için eğitici video bulunmuyor.</p>';
    }
    
    // Kişisel Notları doldur
    const noteArea = document.getElementById('recipe-personal-note');
    const notesDB = JSON.parse(localStorage.getItem('loveflix_recipe_notes') || '{}');
    noteArea.value = notesDB[recipe.id] || '';
    
    // Göstergeleri sıfırla
    const savedIndicator = document.getElementById('note-saved-indicator');
    if (savedIndicator) savedIndicator.style.display = 'none';
}

// Kişisel Notu Kaydeder
function saveRecipeNote() {
    if (!selectedRecipeId) return;
    
    const noteText = document.getElementById('recipe-personal-note').value;
    const notesDB = JSON.parse(localStorage.getItem('loveflix_recipe_notes') || '{}');
    notesDB[selectedRecipeId] = noteText;
    localStorage.setItem('loveflix_recipe_notes', JSON.stringify(notesDB));
    
    const indicator = document.getElementById('note-saved-indicator');
    if (indicator) {
        indicator.style.display = 'inline';
        setTimeout(() => {
            indicator.style.display = 'none';
        }, 2000);
    }
}

// Yeni Tarif Ekleme Formunu Gösterir
function showAddRecipeView() {
    const detailView = document.getElementById('recipe-detail-view');
    const addView = document.getElementById('recipe-add-view');
    
    if (detailView) detailView.style.display = 'none';
    if (addView) addView.style.display = 'block';
    
    document.querySelectorAll('.recipe-card').forEach(c => c.classList.remove('selected'));
    selectedRecipeId = null;
    
    // Formu sıfırla
    const form = document.getElementById('add-recipe-form');
    if (form) form.reset();
}

// Yeni Tarif Kaydeder
function handleAddRecipeSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('add-title').value.trim();
    const category = document.getElementById('add-category').value;
    const difficulty = document.getElementById('add-difficulty').value;
    const prepTime = parseInt(document.getElementById('add-prep').value) || 0;
    const cookTime = parseInt(document.getElementById('add-cook').value) || 0;
    const youtubeId = document.getElementById('add-youtube').value.trim();
    const ingredientsRaw = document.getElementById('add-ingredients').value;
    const stepsRaw = document.getElementById('add-steps').value;
    
    const ingredients = ingredientsRaw.split('\n').map(i => i.trim()).filter(i => i !== '');
    const steps = stepsRaw.split('\n').map(s => s.trim()).filter(s => s !== '');
    
    const newRecipe = {
        id: 'rec-custom-' + Date.now(),
        title,
        category,
        prepTime,
        cookTime,
        difficulty,
        youtubeId,
        ingredients,
        steps
    };
    
    const customRecipes = JSON.parse(localStorage.getItem('loveflix_recipes') || '[]');
    customRecipes.push(newRecipe);
    localStorage.setItem('loveflix_recipes', JSON.stringify(customRecipes));
    
    // Formu kapat, kategoriyi sıfırla ve listeyi yükle
    selectedRecipeId = newRecipe.id;
    currentCatFilter = category;
    
    // Kategori butonlarını güncelle
    const catButtons = document.querySelectorAll('.kitchen-cat-btn');
    catButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    loadKitchenRecipes();
}

/* -------------------------------------------------------------
   16. DİLEK FENERİ GÖLÜ & YILDIZIMIZ İNTERAKTİF MOTORLARI
   ------------------------------------------------------------- */
const LANTERN_WISHES = [
    "Seninle geçen her günüm bir ömre bedel... 💖",
    "Her zaman böyle güzel gülümse Nehir, dünyamı aydınlatıyorsun. 🌟",
    "Birlikte içeceğimiz nice kahvelere, nice mutlu sabahlara... ☕",
    "Fırçanın tuvale her dokunuşunda hayallerin gerçek olsun. 🎨",
    "Hayatımın en güzel hikayesi seninle başladı... ✨",
    "Seninle yaşlanmak, ömrümün en büyük dileği. ❤️",
    "Gözlerindeki o huzur hiç eksilmesin... 🥰",
    "Zor anlarında arkana baktığında hep beni göreceksin. 🤝",
    "Kalbinin güzelliği yüzüne yansımış en değerli varlığım. 👑",
    "Seninle yürüdüğüm her yol çiçek bahçesine dönüyor. 🌸",
    "Gelecekteki tüm resim atölyelerinde en büyük destekçin olacağım. 🖌️",
    "Hayatıma renk katan en güzel tablom sensin. 🎨❤️",
    "Sesini her duyduğumda içime dolan o sıcaklık hiç gitmesin. 🎙️",
    "En tatlı uykusuz gecelerimin mimarı, iyi ki varsın. 🌙",
    "Bizim hikayemiz hiçbir zaman bitmeyecek bir başyapıt. 📖✨"
];

// Tekrarsız Dilek Çekmek İçin Shuffle Pool
let wishPool = [];
function getNextWish() {
    if (wishPool.length === 0) {
        wishPool = [...LANTERN_WISHES];
        for (let i = wishPool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [wishPool[i], wishPool[j]] = [wishPool[j], wishPool[i]];
        }
    }
    return wishPool.pop();
}

// --- DİLEK FENERİ GÖLÜ MOTORU ---
let lanternsActive = false;
let lanternsCanvas = null;
let lanternsCtx = null;
let lanternsList = [];
let lanternSparks = [];
let lanternsAnimFrame = null;

function initLanternsModal() {
    const navLanterns = document.getElementById('nav-lanterns');
    const lanternsModal = document.getElementById('lanterns-modal');
    const closeLanternsBtn = document.getElementById('close-lanterns-btn');
    lanternsCanvas = document.getElementById('lanterns-canvas');
    
    if (navLanterns && lanternsModal) {
        navLanterns.addEventListener('click', (e) => {
            e.preventDefault();
            lanternsModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Canvas boyutlarını ayarla ve başlat
            setupLanternsCanvas();
            lanternsActive = true;
            lanternsList = [];
            
            // Başlangıçta göle 5 adet hazır fener yerleştir (estetik için)
            for(let i=0; i<6; i++) {
                spawnLantern(
                    Math.random() * lanternsCanvas.width,
                    lanternsCanvas.height * 0.4 + Math.random() * (lanternsCanvas.height * 0.5)
                );
            }
            
            lanternsLoop();
        });
    }
    
    if (closeLanternsBtn && lanternsModal) {
        closeLanternsBtn.addEventListener('click', () => {
            lanternsModal.style.display = 'none';
            document.body.style.overflow = '';
            lanternsActive = false;
            if (lanternsAnimFrame) {
                cancelAnimationFrame(lanternsAnimFrame);
                lanternsAnimFrame = null;
            }
        });
    }
    
    window.addEventListener('resize', () => {
        if (lanternsActive) setupLanternsCanvas();
    });
    
    if (lanternsCanvas) {
        lanternsCanvas.addEventListener('click', (e) => {
            if (!lanternsActive) return;
            const rect = lanternsCanvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            // Göle (ekranın alt yarısına) tıklandığında yeni fener fırlat
            if (clickY > lanternsCanvas.height * 0.35) {
                spawnLantern(clickX, clickY);
            }
        });
    }
}

function setupLanternsCanvas() {
    if (!lanternsCanvas) return;
    const parent = lanternsCanvas.parentElement;
    lanternsCanvas.width = parent.clientWidth;
    lanternsCanvas.height = parent.clientHeight;
    lanternsCtx = lanternsCanvas.getContext('2d');
}

function spawnLantern(x, y) {
    const wish = getNextWish();
    const colors = ['#ff7b00', '#ff0055', '#ffea00', '#af00ff', '#e50914'];
    lanternsList.push({
        x: x,
        y: y,
        size: 15 + Math.random() * 8,
        speedY: 0.3 + Math.random() * 0.5,
        swaySpeed: 0.01 + Math.random() * 0.015,
        swayOffset: Math.random() * Math.PI * 2,
        swayWidth: 20 + Math.random() * 25,
        opacity: 0.85,
        text: wish,
        color: colors[Math.floor(Math.random() * colors.length)],
        textOffset: Math.random() * 30 - 15,
        showText: true
    });
}

function lanternsLoop() {
    if (!lanternsActive) return;
    
    drawLanternsScene();
    
    // Fenerlerin konumlarını güncelle
    for (let i = lanternsList.length - 1; i >= 0; i--) {
        const lat = lanternsList[i];
        lat.y -= lat.speedY; // yukarı süzül
        lat.swayOffset += lat.swaySpeed;
        
        // Yukarı yaklaştıkça yavaşça sönsün (Gökyüzünde yıldızlara karışsın)
        if (lat.y < lanternsCanvas.height * 0.35) {
            lat.opacity -= 0.003;
        }
        
        if (lat.opacity <= 0 || lat.y < -50) {
            lanternsList.splice(i, 1);
            continue;
        }
        
        // Fenerden yukarı doğru uçuşan kıvılcımlar (Embers) üret
        if (Math.random() < 0.12 && lat.opacity > 0.25) {
            const swayX = Math.sin(lat.swayOffset) * (lat.swayWidth * (lat.y / lanternsCanvas.height));
            const finalX = lat.x + swayX;
            lanternSparks.push({
                x: finalX + (Math.random() * 8 - 4),
                y: lat.y - lat.size * 0.8,
                vx: (Math.random() * 0.6 - 0.3),
                vy: -(0.4 + Math.random() * 0.5),
                size: 1.2 + Math.random() * 1.5,
                opacity: lat.opacity,
                color: lat.color
            });
        }
    }
    
    // Kıvılcımları güncelle ve temizle
    for (let i = lanternSparks.length - 1; i >= 0; i--) {
        const sp = lanternSparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.opacity -= 0.012;
        if (sp.opacity <= 0) {
            lanternSparks.splice(i, 1);
        }
    }
    
    // Eğer fener sayısı azalırsa yavaşça arka planda yenilerini uçur
    if (lanternsList.length < 5 && Math.random() < 0.005) {
        spawnLantern(Math.random() * lanternsCanvas.width, lanternsCanvas.height + 20);
    }
    
    lanternsAnimFrame = requestAnimationFrame(lanternsLoop);
}

function drawLanternsScene() {
    if (!lanternsCtx) return;
    const w = lanternsCanvas.width;
    const h = lanternsCanvas.height;
    
    // Gece Gökyüzü ve Su Geçişli Arka Plan
    const skyGrad = lanternsCtx.createLinearGradient(0, 0, 0, h);
    skyGrad.addColorStop(0, '#020208');
    skyGrad.addColorStop(0.35, '#070514');
    skyGrad.addColorStop(0.351, '#050a12'); // Su çizgisi
    skyGrad.addColorStop(1, '#0c071e'); // Göl altı
    
    lanternsCtx.fillStyle = skyGrad;
    lanternsCtx.fillRect(0, 0, w, h);
    
    // Ufuk Çizgisi Dağları (Siluet)
    lanternsCtx.fillStyle = '#030307';
    lanternsCtx.beginPath();
    lanternsCtx.moveTo(0, h * 0.35);
    lanternsCtx.quadraticCurveTo(w * 0.25, h * 0.31, w * 0.5, h * 0.35);
    lanternsCtx.quadraticCurveTo(w * 0.75, h * 0.28, w, h * 0.35);
    lanternsCtx.lineTo(w, h);
    lanternsCtx.lineTo(0, h);
    lanternsCtx.closePath();
    lanternsCtx.fill();
    
    // Hafif göl dalgaları (yansıma)
    lanternsCtx.strokeStyle = 'rgba(255,255,255,0.03)';
    lanternsCtx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
        const waveY = h * 0.4 + i * (h * 0.12);
        lanternsCtx.beginPath();
        lanternsCtx.moveTo(0, waveY + Math.sin(performance.now()*0.001 + i)*3);
        lanternsCtx.lineTo(w, waveY + Math.sin(performance.now()*0.001 + i)*3);
        lanternsCtx.stroke();
    }
    
    // 1. Kıvılcımları Çiz (Fenerlerin arkasında kalsınlar)
    lanternSparks.forEach(sp => {
        lanternsCtx.save();
        lanternsCtx.globalAlpha = sp.opacity;
        
        // Neon kıvılcım parlaması
        lanternsCtx.shadowColor = sp.color;
        lanternsCtx.shadowBlur = sp.size * 3;
        
        // İç alev gradyanı
        const sparkGrad = lanternsCtx.createRadialGradient(sp.x, sp.y, 0, sp.x, sp.y, sp.size);
        sparkGrad.addColorStop(0, '#ffffff');
        sparkGrad.addColorStop(0.3, sp.color);
        sparkGrad.addColorStop(1, 'rgba(0,0,0,0)');
        
        lanternsCtx.fillStyle = sparkGrad;
        lanternsCtx.beginPath();
        lanternsCtx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        lanternsCtx.fill();
        lanternsCtx.restore();
    });
    
    // 2. Fenerleri Çiz
    lanternsList.forEach(lat => {
        const swayX = Math.sin(lat.swayOffset) * (lat.swayWidth * (lat.y / h));
        const finalX = lat.x + swayX;
        
        lanternsCtx.save();
        lanternsCtx.globalAlpha = lat.opacity;
        
        // A) Fener Dış Halesi (Flicker/Flickering Mum Işığı)
        const flickerGlow = lat.size * 1.5 + Math.sin(performance.now() * 0.006 + lat.swayOffset) * 4;
        lanternsCtx.shadowColor = lat.color;
        lanternsCtx.shadowBlur = flickerGlow;
        
        // Fener Gövdesi Gradyanı (Sıcak turuncu/kırmızı kağıt fener görünümü)
        const latGrad = lanternsCtx.createLinearGradient(finalX - lat.size/2, lat.y - lat.size, finalX - lat.size/2, lat.y);
        latGrad.addColorStop(0, '#ffffff'); // Tepesi sıcak ışık
        latGrad.addColorStop(0.3, lat.color); // Orta gövde rengi
        latGrad.addColorStop(0.9, '#ff3c00'); // Alt kısımlar daha koyu turuncu/kırmızı
        latGrad.addColorStop(1, '#9e0000');
        
        lanternsCtx.fillStyle = latGrad;
        
        // Kağıt Fener Gövdesi
        lanternsCtx.beginPath();
        drawRoundRect(lanternsCtx, finalX - lat.size/2, lat.y - lat.size, lat.size, lat.size * 1.3, 5, true, false);
        
        // B) Mum Alevi (İç kısımdaki parlak ışık çekirdeği)
        const flamePulse = 3.5 + Math.sin(performance.now() * 0.02 + lat.swayOffset) * 1.2;
        const flameGrad = lanternsCtx.createRadialGradient(finalX, lat.y - lat.size/2, 0, finalX, lat.y - lat.size/2, flamePulse * 1.8);
        flameGrad.addColorStop(0, '#ffffff');
        flameGrad.addColorStop(0.4, '#ffea00');
        flameGrad.addColorStop(0.8, 'rgba(255, 60, 0, 0.8)');
        flameGrad.addColorStop(1, 'rgba(0,0,0,0)');
        
        lanternsCtx.shadowBlur = 0; // Işın gölgesini geçici olarak kapat
        lanternsCtx.fillStyle = flameGrad;
        lanternsCtx.beginPath();
        lanternsCtx.arc(finalX, lat.y - lat.size/2, flamePulse * 1.8, 0, Math.PI * 2);
        lanternsCtx.fill();
        
        // C) Fenerin Alt Ahşap Tabanı
        lanternsCtx.fillStyle = '#1c0c02';
        lanternsCtx.fillRect(finalX - lat.size/2 - 2, lat.y + (lat.size * 0.28), lat.size + 4, 3.5);
        
        // D) Fenerin Üst Kapağı
        lanternsCtx.fillRect(finalX - lat.size/3, lat.y - lat.size - 2, (lat.size / 3) * 2, 2.5);
        
        // E) Fenerin Su Üstündeki Yansıması (Eğer suyun üzerindeyse)
        if (lat.y > h * 0.35) {
            const reflectionY = h * 0.35 + (h * 0.35 - lat.y) * -1; // Simetrik yansıma
            const reflectionAlpha = lat.opacity * 0.4 * (1 - (lat.y - h * 0.35) / (h * 0.65));
            
            lanternsCtx.globalAlpha = reflectionAlpha;
            lanternsCtx.shadowColor = lat.color;
            lanternsCtx.shadowBlur = lat.size * 0.8;
            lanternsCtx.fillStyle = lat.color;
            
            lanternsCtx.beginPath();
            lanternsCtx.ellipse(finalX, reflectionY, lat.size * 0.9, lat.size * 0.3, 0, 0, Math.PI * 2);
            lanternsCtx.fill();
        }
        
        lanternsCtx.restore();
        
        // 3. Fener Üzerinde Süzülen Romantik Mesaj (Gelişmiş Premium Tabela / Placard)
        if (lat.showText && lat.opacity > 0.15) {
            lanternsCtx.save();
            lanternsCtx.globalAlpha = lat.opacity * 0.95;
            
            lanternsCtx.font = "bold 13px Outfit, sans-serif";
            lanternsCtx.textAlign = "center";
            lanternsCtx.textBaseline = "middle";
            
            const textVal = lat.text;
            const textWidth = lanternsCtx.measureText(textVal).width;
            const paddingX = 10;
            const paddingY = 6;
            const rectW = textWidth + paddingX * 2;
            const rectH = 20 + paddingY * 2;
            const rectX = finalX - rectW / 2;
            const rectY = lat.y - lat.size - rectH - 10;
            
            // A) Placard Arka Planı (Premium Glassmorphic Kutu)
            lanternsCtx.fillStyle = 'rgba(8, 8, 16, 0.88)';
            lanternsCtx.strokeStyle = 'rgba(255, 234, 0, 0.35)'; // Altın sarısı çerçeve
            lanternsCtx.lineWidth = 1;
            
            // Hafif gölge efekti
            lanternsCtx.shadowColor = 'rgba(0,0,0,0.6)';
            lanternsCtx.shadowBlur = 8;
            
            lanternsCtx.beginPath();
            drawRoundRect(lanternsCtx, rectX, rectY, rectW, rectH, 6, true, true);
            
            // B) Yazının Kendisi (Temiz Beyaz ve Hatasız Renk Ataması)
            lanternsCtx.shadowBlur = 0;
            lanternsCtx.fillStyle = '#ffffff';
            
            // Metni tam kutu ortasına yazdır
            lanternsCtx.fillText(textVal, finalX, rectY + rectH / 2 + 0.5);
            
            lanternsCtx.restore();
        }
    });
}


// --- GÖKYÜZÜNDEKİ YILDIZIMIZ MOTORU ---
let starActive = false;
let starCanvas = null;
let starCtx = null;
let starAnimFrame = null;
let pulseScale = 1.0;
let pulseGrowing = true;

// Yıldızların Konumları
let skyStars = [];

function initStarModal() {
    const navStar = document.getElementById('nav-star');
    const starModal = document.getElementById('star-modal');
    const closeStarBtn = document.getElementById('close-star-btn');
    starCanvas = document.getElementById('star-canvas');
    const certView = document.getElementById('star-cert-view');
    
    if (navStar && starModal) {
        navStar.addEventListener('click', (e) => {
            e.preventDefault();
            starModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            setupStarCanvas();
            starActive = true;
            if (certView) certView.style.display = 'none';
            
            // Arka plana 120 adet parıldayan yıldız yarat
            skyStars = [];
            for (let i = 0; i < 120; i++) {
                skyStars.push({
                    x: Math.random() * starCanvas.width,
                    y: Math.random() * starCanvas.height,
                    size: 0.5 + Math.random() * 1.5,
                    opacity: Math.random(),
                    twinkleSpeed: 0.008 + Math.random() * 0.015
                });
            }
            
            starLoop();
        });
    }
    
    if (closeStarBtn && starModal) {
        closeStarBtn.addEventListener('click', () => {
            starModal.style.display = 'none';
            document.body.style.overflow = '';
            starActive = false;
            if (starAnimFrame) {
                cancelAnimationFrame(starAnimFrame);
                starAnimFrame = null;
            }
        });
    }
    
    // Sertifika kapatma (Sertifikaya veya dışına tıklayınca kapansın)
    if (certView) {
        certView.addEventListener('click', () => {
            certView.style.display = 'none';
        });
    }
    
    window.addEventListener('resize', () => {
        if (starActive) setupStarCanvas();
    });
    
    // Canvas tıklaması: Merkezdeki parlak yıldıza tıklandığında tescil sertifikasını açar
    if (starCanvas) {
        starCanvas.addEventListener('click', (e) => {
            if (!starActive) return;
            const rect = starCanvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            
            const centerX = starCanvas.width / 2;
            const centerY = starCanvas.height / 2;
            
            // Tıklanan yer merkezdeki yıldıza yakın mı? (Yarıçap: 45px)
            const dist = Math.sqrt((clickX - centerX)**2 + (clickY - centerY)**2);
            if (dist < 50) {
                if (certView) certView.style.display = 'flex';
            }
        });
    }
}

function setupStarCanvas() {
    if (!starCanvas) return;
    const parent = starCanvas.parentElement;
    starCanvas.width = parent.clientWidth;
    starCanvas.height = parent.clientHeight;
    starCtx = starCanvas.getContext('2d');
}

function starLoop() {
    if (!starActive) return;
    
    drawStarScene();
    
    starAnimFrame = requestAnimationFrame(starLoop);
}

function drawStarScene() {
    if (!starCtx) return;
    const w = starCanvas.width;
    const h = starCanvas.height;
    
    // Derin Uzay Arka Planı
    const spaceGrad = starCtx.createRadialGradient(w/2, h/2, 50, w/2, h/2, w);
    spaceGrad.addColorStop(0, '#090514');
    spaceGrad.addColorStop(0.5, '#04020a');
    spaceGrad.addColorStop(1, '#010103');
    
    starCtx.fillStyle = spaceGrad;
    starCtx.fillRect(0, 0, w, h);
    
    // 1. Arka Plandaki Parlayan Yıldızları Çiz (Twinkle efekti)
    skyStars.forEach(st => {
        st.opacity += st.twinkleSpeed;
        if (st.opacity > 1 || st.opacity < 0.1) {
            st.twinkleSpeed = -st.twinkleSpeed;
        }
        
        starCtx.save();
        starCtx.globalAlpha = st.opacity;
        starCtx.fillStyle = '#ffffff';
        starCtx.shadowColor = '#ffffff';
        starCtx.shadowBlur = 4;
        
        starCtx.beginPath();
        starCtx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
        starCtx.fill();
        starCtx.restore();
    });
    
    // 2. Merkezdeki NEHİR Yıldızının Nabız (Pulse) Çapını Hesapla
    if (pulseGrowing) {
        pulseScale += 0.006;
        if (pulseScale > 1.25) pulseGrowing = false;
    } else {
        pulseScale -= 0.006;
        if (pulseScale < 0.95) pulseGrowing = true;
    }
    
    const centerX = w / 2;
    const centerY = h / 2;
    const baseRadius = 24 * pulseScale;
    
    starCtx.save();
    
    // 3. Dev Yıldız Parlaması ve Halesi (Halo)
    const glowGrad = starCtx.createRadialGradient(centerX, centerY, 2, centerX, centerY, baseRadius * 3);
    glowGrad.addColorStop(0, 'rgba(255, 234, 0, 1)'); // Altın
    glowGrad.addColorStop(0.2, 'rgba(255, 0, 85, 0.9)'); // Neon Pembe
    glowGrad.addColorStop(0.5, 'rgba(255, 0, 85, 0.3)');
    glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    starCtx.fillStyle = glowGrad;
    starCtx.beginPath();
    starCtx.arc(centerX, centerY, baseRadius * 3, 0, Math.PI * 2);
    starCtx.fill();
    
    // 4. Yıldızın Çekirdeği (Merkez Nokta)
    starCtx.fillStyle = '#ffffff';
    starCtx.shadowColor = '#ffea00';
    starCtx.shadowBlur = 20;
    starCtx.beginPath();
    starCtx.arc(centerX, centerY, 8 * pulseScale, 0, Math.PI * 2);
    starCtx.fill();
    
    // 5. Yıldızın Işınları (4 Kollu Klasik Yıldız Işıltısı)
    starCtx.strokeStyle = 'rgba(255, 234, 0, 0.7)';
    starCtx.lineWidth = 2.5;
    
    // Dikey Işınlar
    starCtx.beginPath();
    starCtx.moveTo(centerX, centerY - baseRadius * 2);
    starCtx.lineTo(centerX, centerY + baseRadius * 2);
    starCtx.stroke();
    
    // Yatay Işınlar
    starCtx.beginPath();
    starCtx.moveTo(centerX - baseRadius * 2, centerY);
    starCtx.lineTo(centerX + baseRadius * 2, centerY);
    starCtx.stroke();
    
    starCtx.restore();
    
    // 6. Yıldızın Altındaki Neon Etiket
    starCtx.save();
    starCtx.fillStyle = '#ffea00';
    starCtx.font = "bold 15px Outfit, sans-serif";
    starCtx.textAlign = "center";
    starCtx.shadowColor = '#ff0055';
    starCtx.shadowBlur = 10;
    starCtx.fillText("NEHİR YILDIZI ⭐️", centerX, centerY + baseRadius * 2.5 + 20);
    starCtx.font = "11px Inter, sans-serif";
    starCtx.fillStyle = 'rgba(255,255,255,0.4)';
    starCtx.shadowBlur = 0;
    starCtx.fillText("(Keşfetmek için Dokun)", centerX, centerY + baseRadius * 2.5 + 38);
    starCtx.restore();
}

/* -------------------------------------------------------------
   17. DOĞUM GÜNÜ GERİ SAYIM SAYACI MOTORU
   ------------------------------------------------------------- */
function startBirthdayCountdown() {
    const countdownTimer = document.getElementById('birthday-countdown');
    if (!countdownTimer) return;
    
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minutesEl = document.getElementById('cd-minutes');
    const secondsEl = document.getElementById('cd-seconds');
    
    function updateCountdown() {
        const now = new Date();
        let targetYear = now.getFullYear();
        
        // Target: 24 Mart (JS'de ay indeksi 2'dir: Ocak=0, Şubat=1, Mart=2)
        let targetDate = new Date(targetYear, 2, 24, 0, 0, 0);
        
        // Eğer bu seneki 24 Mart çoktan geçtiyse, geri sayımı sonraki seneye kur
        if (now > targetDate) {
            targetYear++;
            targetDate = new Date(targetYear, 2, 24, 0, 0, 0);
        }
        
        const diff = targetDate - now;
        
        if (diff <= 0) {
            // Bugün 24 Mart!
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
            
            const quoteEl = document.querySelector('.countdown-quote');
            if (quoteEl) quoteEl.textContent = "🎉 İYİ Kİ DOĞDUN EN DEĞERLİ VARLIĞIM! 🎂❤️";
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
