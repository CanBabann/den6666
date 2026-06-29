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
    
    MEMORIES_DATA.favorites.forEach(item => {
        favRow.appendChild(createPosterCard(item));
    });
    
    MEMORIES_DATA.memories.forEach(item => {
        memRow.appendChild(createPosterCard(item));
    });
    
    MEMORIES_DATA.special.forEach(item => {
        specRow.appendChild(createPosterCard(item));
    });
    
    if (playlistRow && MEMORIES_DATA.playlist) {
        MEMORIES_DATA.playlist.forEach(item => {
            playlistRow.appendChild(createPosterCard(item));
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
    const modalPlayBtn = document.getElementById('modal-play-btn');
    if (modalPlayBtn) {
        if (movieData.id && movieData.id.includes('play')) {
            modalPlayBtn.style.display = 'none';
        } else {
            modalPlayBtn.style.display = 'flex';
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
    
    // 9. Navbar scroll dinleyici
    window.addEventListener('scroll', handleNavbarScroll);
});
