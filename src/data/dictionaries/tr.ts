import type { SiteDictionary } from "./types";

export const tr: SiteDictionary = {
  meta: {
    siteName: "Novaltron",
    defaultTitle: "Novaltron | Agro-Endüstriyel Sistemler ve Kritik Altyapı",
    defaultDescription:
      "Kafkasya ve Orta Asya genelinde sınır ötesi agro-endüstriyel mühendislik, biyolojik bitki koruma ve kritik altyapı entegrasyonu — Novaltron LLC (Tiflis, Gürcistan).",
    skipToContent: "Ana teknik içeriğe geç",
  },
  nav: {
    links: [
      { label: "Agro-Endüstriyel", href: "/agro-solutions" },
      { label: "Biyo ve Akıllı IPM", href: "/bio-ipm" },
      { label: "Endüstri ve Altyapı", href: "/industrial-infrastructure" },
      { label: "Anahtar Teslim", href: "/turnkey-delivery" },
      { label: "Biz Kimiz", href: "/about" },
    ],
    primaryCta: "Teklif İste (RFQ)",
    menuOpenLabel: "Navigasyon menüsünü aç",
    menuCloseLabel: "Navigasyon menüsünü kapat",
    languageLabel: "Dil seçin",
  },
  footer: {
    summary:
      "NOVALTRON — Kafkasya ve Orta Asya genelinde sınır ötesi agro-endüstriyel mühendislik, biyolojik bitki koruma ve kritik altyapı entegrasyonu.",
    hubLabel: "Tiflis Merkezi",
    hubValue: "Novaltron LLC (შპს ნოვალტრონი) — Tiflis, Gürcistan",
    corridorLabel: "Bölgesel Koridor",
    corridorValue: "Azerbaycan · Gürcistan · Özbekistan · Kazakistan · Türkiye",
    contactsLabel: "İletişim",
    socialLabel: "Sosyal Kanallar",
    navigationLabel: "Bölümler ve Sayfalar",
    standardsLabel: "Uyumlu Standartlar",
    legalLinkLabel: "Gizlilik ve Yasal Bildirim",
    copyright: "© 2026 Novaltron LLC. Tüm Hakları Saklıdır.",
  },
  home: {
    eyebrow: "AGRO-ENDÜSTRİYEL VE ALTYAPI MÜHENDİSLİĞİ • KAFKASYA VE ORTA ASYA",
    h1: "Kafkasya ve Orta Asya Genelinde Anahtar Teslim Agro-Endüstriyel Sistemler ve Kritik Altyapı",
    subHeadline:
      "Novaltron; Avrupa ve Türkiye’nin mühendislik teknolojilerini bölgesel proje uygulamalarıyla buluşturarak Tiflis merkezimiz üzerinden hassas sulama sistemleri, ticari seralar, hasat sonrası tahıl terminalleri, biyolojik bitki koruma ve endüstriyel altyapı çözümleri sunar.",
    primaryCta: "Proje Teklifi Gönder →",
    secondaryCta: "Agro-Çözümleri İncele",
    heroImageAlt:
      "Geometrik yeşil tarım arazileri üzerinde merkez pivot sulama sistemi ve ufukta ticari cam seraların havadan görünümü",
    heroTrustBar: [
      "BÖLGESEL MERKEZ UYGULAMA (TİFLİS, GÜRCİSTAN)",
      "4 ANA MÜHENDİSLİK BÖLÜMÜ",
      "FAT/SAT SERTİFİKALI DEVREYE ALMA",
    ],
    heroGridHeading: "TEMEL MÜHENDİSLİK MİMARİSİ · 04 ŞEMATİK ALAN",
    heroGridCards: [
      {
        code: "DWG-01",
        label: "SULAMA",
        sublabel: "Merkez Pivot · EC/pH · Güneş",
        variant: "irrigation",
        href: "/agro-solutions#irrigation",
      },
      {
        code: "DWG-02",
        label: "SERALAR",
        sublabel: "Venlo Cam · Termal Döngü",
        variant: "greenhouses",
        href: "/agro-solutions#greenhouses",
      },
      {
        code: "DWG-03",
        label: "TAHIL SİLOLARI",
        sublabel: "Z600 Eurocode · 200–500 t/saat",
        variant: "grain-silos",
        href: "/agro-solutions#grain-silos",
      },
      {
        code: "DWG-04",
        label: "ENDÜSTRİYEL BORU VE AĞLAR",
        sublabel: "PE100 · Buhar · OT/SCADA",
        variant: "industrial-dual",
        href: "/industrial-infrastructure",
      },
    ],
    agroSection: {
      bandNumber: "01",
      bandMarker: "01 / AGRO-ENDÜSTRİYEL MÜHENDİSLİK",
      h2: "Tarla Sulamasından İhracat Kalitesinde Depolamaya Uçtan Uca Tarımsal Altyapı",
      intro:
        "Azerbaycan, Gürcistan, Özbekistan ve Kazakistan genelindeki tarım organize bölgeleri, ticari çiftlikler, seralar ve tahıl işletmecileri için anahtar teslim tarımsal modernizasyon projeleri tasarlıyor, tedarik ediyor ve devreye alıyoruz.",
      viewAllCta: "Tüm Agro-Endüstriyel Portföy →",
      cards: [
        {
          id: "irrigation",
          code: "01.A",
          title: "Hassas Sulama ve Su Yönetimi",
          description:
            "Merkez pivot ve doğrusal hareketli tarla sulama sistemleri, basınç dengelemeli damla sulama hatları, otomatik EC/pH gübreleme (fertigasyon) üniteleri, kendi kendini temizleyen filtrasyon sistemleri, güneş enerjili pompa istasyonları ve akıllı su telemetrisi.",
          ctaLabel: "Su ve Sulama Çözümleri →",
          anchor: "/agro-solutions#irrigation",
          standards: ["EC/pH Telemetri", "Güneş Pompaları", "Oto-Filtrasyon"],
          diagramVariant: "irrigation",
          imageSrc: "/images/agro-irrigation.jpg",
          imageAlt:
            "Sabah ışığında tarım sıralarını sulayan merkez pivot sistemi ve paslanmaz çelik filtrasyon manifoldu",
        },
        {
          id: "greenhouses",
          code: "01.B",
          title: "Anahtar Teslim Ticari Seralar ve İklim Kontrolü",
          description:
            "Bölgesel rüzgar ve kar yüklerine uygun cam ve çok açıklıklı polietilen sera çelik konstrüksiyonları, otomatik havalandırma, termal ve gölgeleme perdeleri, yüksek verimli kazan sistemleri ve topraksız tarım hatları.",
          ctaLabel: "Sera Sistemleri →",
          anchor: "/agro-solutions#greenhouses",
          standards: ["Eurocode / EN", "Venlo ve Poli", "Topraksız Tarım"],
          diagramVariant: "greenhouses",
          imageSrc: "/images/agro-greenhouse.jpg",
          imageAlt:
            "Askılı topraksız tarım olukları ve termal gölgeleme perdeleriyle modern Venlo cam sera iç görünümü",
        },
        {
          id: "grain-silos",
          code: "01.C",
          title: "Tahıl Siloları, Kurutma ve Optik Ayırma",
          description:
            "Ağır Z600 galvaniz kaplamalı Eurocode/EN standartlı dalgalı sac çelik silolar, yüksek kapasiteli taşıma hatları (200–500 t/saat), enerji verimli sürekli tahıl kurutucuları, aerodinamik tohum temizleyiciler ve optik renk ayırıcılar.",
          ctaLabel: "Tahıl ve Tohum Hatları →",
          anchor: "/agro-solutions#grain-silos",
          standards: ["Eurocode / EN", "Z600 Galvaniz", "200–500 t/saat"],
          diagramVariant: "grain-silos",
          imageSrc: "/images/agro-grain-silos.jpg",
          imageAlt:
            "Galvanizli dalgalı sac tahıl siloları, üst konveyör köprüleri ve kovalı elevatör kuleleri",
        },
        {
          id: "safety-feed",
          code: "01.D",
          title: "Silo Yapısal İzleme, ATEX Güvenliği ve Yem Tesisleri",
          description:
            "Silo ayaklarında metal deformasyonu üzerinden temasız ağırlık ve aşırı yük izleme, ATEX sertifikalı patlama tahliye panelleri ve CO gaz izleme ile otomatik karma yem dozajlama ve peletleme hatları.",
          ctaLabel: "Güvenlik ve Yem Sistemleri →",
          anchor: "/agro-solutions#safety-feed",
          standards: ["ATEX", "CO ve Yük İzleme", "Yem Peletleme"],
          diagramVariant: "safety-feed",
        },
      ],
    },
    bioBanner: {
      bandNumber: "02",
      bandMarker: "02 / İHRACAT HAZIRLIĞI VE SÜRDÜRÜLEBİLİR BİTKİ KORUMA",
      h2: "Biyolojik Bitki Koruma, Akıllı IPM ve Uluslararası İhracat Sertifikasyonu",
      body: "AB, Körfez ülkeleri (GCC) ve modern perakende zincirlerinin katı Maksimum Kalıntı Limitlerine (MRL) uyum sağlayın ve denetimleri ilk seferde geçin. Faydalı böcekler, sera tozlayıcıları, güneş enerjili yapay zeka (AI) kamera tuzakları ve GLOBALG.A.P. IFA v6, GRASP, Organik ve HACCP / ISO 22000 hazırlığını birleştiren Entegre Zararlı Yönetimi (IPM) paketleri sunuyoruz.",
      imageAlt:
        "Modern ticari cam serada sağlıklı bitki sıraları arasında konumlandırılmış güneş enerjili optik AI kamera tuzağı",
      highlights: [
        "Biyokontrol ve Tozlaşma",
        "Otomatik Zararlı Telemetrisi",
        "Kademeli Ticari Paketler (Audit Essentials, Export Pro, Precision Enterprise)",
      ],
      cta: "Paketleri İncele →",
    },
    industrialSection: {
      bandNumber: "03",
      bandMarker: "03 / ENDÜSTRİ VE KRİTİK ALTYAPI BÖLÜMÜ",
      h2: "Altyapı, Enerji ve Kritik Görev Ağları İçin Mühendislik Çözümleri",
      intro:
        "Novaltron, temel tarımsal altyapının yanı sıra standartlara uyumlu boru hattı mühendisliği, atık ısı geri kazanımı ve dayanıklı OT/SCADA ağ doğrulama sistemleri sunar.",
      imageAlt:
        "Modern altyapı tesisinde yüksek basınçlı siyah HDPE termoplastik boru hatları ve paslanmaz çelik vanalar",
      trackA: {
        badge: "A Grubu • Boru Hatları ve Termal",
        title: "Endüstri Mühendisliği, Boru Hatları ve Termal Sistemler",
        anchor: "/industrial-infrastructure#pipelines-thermal",
        bullets: [
          "CNC veri kayıtlı hidrolik alın ve elektrofüzyon kaynak makineleri, boru hazırlama ve atölye fiting ekipmanları.",
          "Yüksek basınçlı HDPE/PP boru ve akışkan transfer hatları, endüstriyel vanalar ve belediye su/gaz dağıtım şebekeleri.",
          "Yüksek verimli endüstriyel buhar kazanları, ekonomizerler, atık ısı geri kazanım sistemleri ve tarımsal biyokütle işleme hatları.",
        ],
        cta: "Boru Hatları ve Termal →",
        diagramLabel: "DWG-06 · CNC KAYNAK VE ISI GERİ KAZANIMI",
      },
      trackB: {
        badge: "B Grubu • Kritik BT ve OT",
        title: "Kritik BT, OT Siber Güvenlik ve Telekom Ağları",
        anchor: "/industrial-infrastructure#critical-it-ot",
        bullets: [
          "Endüstriyel IP/MPLS yönlendiriciler, yönetilebilir Layer 2/3 anahtarlar ve seri-IP cihaz sunucuları.",
          "Donanım bypass modüllü OT/SCADA güvenlik duvarları (-20°C ile +60°C çalışma aralığı) ve OT cihaz profilli NAC sistemleri.",
          "Trafo merkezi telekoruma terminalleri, GNSS PTP zaman sunucuları, yüksek erişilebilirlikli depolama/PA sistemleri ve 1G–200G ağ doğrulama platformları (RFC 2544, IEC 61850, EN 61000-4 Level 3).",
        ],
        cta: "Kritik BT ve OT →",
        diagramLabel: "DWG-07 · IP/MPLS, PTP VE OT GÜVENLİĞİ",
      },
    },
    referenceSection: {
      eyebrow: "BÖLGESEL UYGULAMA MODELİ VE ÖRNEK PROJE KAPSAMI",
      h2: "Avrupa ve Türkiye Mühendislik Uzmanlarıyla Tek Noktadan Bölgesel Entegrasyon",
      subtitle:
        "Novaltron; seçkin Avrupa ve Türkiye üreticilerini, konsolide lojistiği ve uzman devreye alma mühendislerini tek sözleşme altında koordine eden Tiflis merkezli sistem entegratörüdür.",
      operatingModelBadge: "NEDEN TEK ENTEGRATÖR",
      operatingModelBody:
        "6–10 ayrı yabancı ihracatçı, gümrük müşaviri ve saha taşeronunu yönetmek yerine tarım holdingleri ve altyapı idareleri tek sorumlu Tiflis merkeziyle çalışır.",
      disclaimer:
        "Kafkasya ve Orta Asya ihaleleri için örnek anahtar teslim mühendislik kapsamları; müşteri bazlı referans kayıtları teknik ön yeterlilik sürecinde NDA kapsamında paylaşılır.",
      scopes: [
        {
          code: "SCOPE-01",
          corridor: "Kafkasya Tarım Organize Koridoru",
          metric: "450 ha",
          title: "Hassas Sulama ve Güneş Pompa İstasyonu Modernizasyonu",
          summary:
            "Merkez pivot hatları, yüksek bulanıklıklı kanal suyu için otomatik kum/disk filtrasyonu, çok kanallı EC/pH fertigasyon ve ultrasonik su telemetrisi.",
          standards: ["EC/pH Otomasyon", "Güneş Pompaları", "FAT/SAT"],
        },
        {
          code: "SCOPE-02",
          corridor: "Orta Asya Tahıl Koridoru",
          metric: "20.000 t",
          title: "Dalgalı Sac Tahıl Terminali ve ATEX Güvenliği",
          summary:
            "300 t/saat taşıma hatları, ısı geri kazanımlı sürekli kurutma kulesi, temasız ayak gerinim tartımı ve ATEX patlama tahliyesiyle Z600 Eurocode/EN silolar.",
          standards: ["Eurocode / EN", "Z600", "ATEX"],
        },
        {
          code: "SCOPE-03",
          corridor: "Bölgesel İhracat Seracılığı",
          metric: "10 ha",
          title: "Ticari Sera Akıllı IPM ve IFA v6 Hazırlığı",
          summary:
            "Güneş enerjili AI kamera tuzakları, faydalı böcek ve bombus tozlaşma takvimi, hasat öncesi MRL laboratuvar doğrulaması ve tam GLOBALG.A.P. IFA v6 dosyası.",
          standards: ["GLOBALG.A.P. IFA v6", "GRASP", "AB MRL"],
        },
      ],
    },
    deliverySection: {
      eyebrow: "TEK NOKTADAN SORUMLULUK",
      h2: "5 Adımlı Anahtar Teslim Uygulama Süreci",
      subtitle:
        "İlk saha analizinden ölçüme dayalı devreye almaya ve yaşam döngüsü RMA desteğine kadar kalibreli mühendislik disiplini.",
      deliverableLabel: "Aşama Teslimatı",
      steps: [
        {
          step: "01",
          title: "Şartname ve Saha Analizi",
          description: "Altyapı denetimleri, agronomik/mühendislik boyutlandırma ve ihale teknik uyum matrisleri.",
          deliverable: "Saha Analizi ve Uyum Matrisi",
        },
        {
          step: "02",
          title: "Özel Sistem Mühendisliği",
          description: "Ekipman konfigürasyonu, proses akış tasarımı ve entegre proje planlaması.",
          deliverable: "Sistem Şemaları ve BOQ",
        },
        {
          step: "03",
          title: "Sınır Ötesi Tedarik ve Lojistik",
          description: "Tiflis üzerinden çoklu para birimli Avrupa/Türkiye tedariki, ihracat belgeleri ve gümrükleme.",
          deliverable: "Konsolide Navlun ve Menşe Belgeleri",
        },
        {
          step: "04",
          title: "Saha Entegrasyonu ve FAT/SAT",
          description: "Mekanik/elektrik kurulum, kalibrasyon ve ölçüme dayalı Fabrika & Saha Kabul Testleri.",
          deliverable: "İmzalı FAT/SAT Kabul Protokolleri",
        },
        {
          step: "05",
          title: "Satış Sonrası Destek ve RMA",
          description: "Tek elden garanti yönetimi, yedek parça lojistiği ve bölgesel saha mühendisliği desteği.",
          deliverable: "Garanti SLA ve Yedek Parça Masası",
        },
      ],
    },
    trustSection: {
      eyebrow: "KURUMSAL YÖNETİŞİM VE İCRA GÜVENCESİ",
      h2: "Tiflis Merkezi Üzerinden Yapılandırılmış Uygulama",
      subtitle:
        "EPC ihale denetçileri, tarım holdingleri ve kurumsal finans incelemeleri için şeffaf yapı.",
      governancePillars: [
        {
          number: "01",
          title: "Avrupa Yönetişimi ve Standartlar",
          detail:
            "Mühendislik, gıda güvenliği ve endüstriyel uyumlulukta ISO 9001, ISO 14001, CE, ATEX, EN ve GLOBALG.A.P. standartlarına uyum.",
          tags: ["ISO 9001", "ISO 14001", "CE", "ATEX", "EN", "GLOBALG.A.P."],
        },
        {
          number: "02",
          title: "Bölgesel Uyumluluk ve Yerel AVL",
          detail:
            "Azerbaycan, Gürcistan, Özbekistan, Kazakistan ve Türkiye genelinde EPC tedarikçi ön yeterliliği için yapılandırılmış uygulama.",
          tags: ["AZ", "GE", "UZ", "KZ", "TR", "EPC Hazır"],
        },
        {
          number: "03",
          title: "Şeffaf Tedarik Zinciri Dokümantasyonu",
          detail:
            "Novaltron LLC (Tiflis, Gürcistan) üzerinden denetlenebilir ticari faturalar, çeki listeleri, menşe belgeleri ve FAT/SAT kayıtları.",
          tags: ["Novaltron LLC", "Menşe Belgeleri", "FAT/SAT"],
        },
      ],
      bottomCtaTitle: "Yeni Agro-Endüstriyel veya Altyapı Projenizi Planlamaya Hazır mısınız?",
      bottomCtaBody:
        "Size özel ticari teklif için teknik şartnamenizi, arazi bilgilerinizi veya metraj cetvelinizi (BOQ) mühendislik ekibimizle paylaşın.",
      bottomCtaButton: "Özel Teklif Al →",
    },
  },
  agroSolutions: {
    metaTitle: "Agro-Endüstriyel ve Hasat Sonrası Çözümler",
    eyebrow: "ANA BÖLÜM • AGRO-ENDÜSTRİYEL VE HASAT SONRASI MÜHENDİSLİK",
    h1: "Tarla Sulamasından İhracat Kalitesinde Depolamaya Anahtar Teslim Tarımsal Altyapı",
    subHeadline:
      "Novaltron; Azerbaycan, Gürcistan, Özbekistan ve Kazakistan genelinde Avrupa ve Türkiye mühendislik standartlarını tek noktadan bölgesel uygulama ile birleştirerek entegre agro-endüstriyel sistemler tasarlar, tedarik eder ve devreye alır.",
    anchors: [
      { id: "irrigation", label: "Sulama ve Su" },
      { id: "greenhouses", label: "Ticari Seralar" },
      { id: "grain-silos", label: "Tahıl Siloları ve Kurutma" },
      { id: "safety-feed", label: "Güvenlik ve Yem Tesisleri" },
    ],
    pillars: [
      {
        id: "irrigation",
        number: "01",
        badge: "Alan 01",
        title: "Hassas Sulama, Filtrasyon ve Su Yönetimi",
        subtitle:
          "Otomatik su iletimi, yüksek bulanıklık filtrasyonu, güneş enerjili pompalama ve gerçek zamanlı nem telemetrisi.",
        diagramLabel: "DWG-01 · HİDROLİK VE TELEMETRİ ŞEMASI",
        imageSrc: "/images/agro-irrigation.jpg",
        imageAlt:
          "Tarım sıralarını sulayan merkez pivot sistemi ve paslanmaz çelik filtrasyon istasyonu",
        standards: ["EC/pH Otomasyon", "Güneş Pompaları", "Ultrasonik Debi"],
        items: [
          {
            heading: "Geniş Ölçekli Tarla Sulaması",
            detail:
              "Merkez pivot, doğrusal hareketli ve düzensiz arazi geometrileri için ağır hizmet tipi kendinden yürür tamburlu sulama sistemleri.",
          },
          {
            heading: "Damla, Mikro Yağmurlama ve Fertigasyon",
            detail:
              "Basınç dengelemeli damla hatları, bahçe mikro yağmurlama sistemleri, hidrolik oransal dozaj pompaları ve otomatik EC/pH fertigasyon üniteleri.",
          },
          {
            heading: "Filtrasyon ve Pompa İstasyonları",
            detail:
              "Yüksek bulanıklıklı kanal ve nehir suları için kendi kendini temizleyen kum, disk ve elek filtreler; derin kuyu, dikey türbin ve güneş enerjili pompa istasyonları.",
          },
          {
            heading: "Su Telemetrisi ve Akış Kontrolü",
            detail:
              "Akıllı ultrasonik su sayaçları, otomatik hidrolik kontrol vanaları ve gerçek zamanlı toprak nemi izleme istasyonları.",
          },
        ],
      },
      {
        id: "greenhouses",
        number: "02",
        badge: "Alan 02",
        title: "Anahtar Teslim Ticari Seralar ve İklim Kontrolü",
        subtitle:
          "Bölgesel rüzgar ve kar yüklerine göre projelendirilen Venlo cam ve çok açıklıklı polietilen seralar.",
        diagramLabel: "DWG-02 · İKLİM VE TERMAL DÖNGÜ ŞEMASI",
        imageSrc: "/images/agro-greenhouse.jpg",
        imageAlt:
          "Askılı hidroponik oluklar ve termal gölgeleme perdeleriyle modern Venlo cam sera",
        standards: ["Eurocode / EN", "Venlo ve Poli", "CO₂ Zenginleştirme"],
        items: [
          {
            heading: "Sera Konstrüksiyonları ve Kaplama",
            detail:
              "Bölgesel rüzgar ve kar yüklerine göre projelendirilen yüksek ışık geçirgenlikli Venlo cam ve çok açıklıklı gotik/tünel polietilen sıcak daldırma galvaniz çelik konstrüksiyonlar.",
          },
          {
            heading: "Otomatik İklim ve Gölgeleme Sistemleri",
            detail:
              "Otomatik çatı ve yan havalandırma, termal ve gölgeleme örtüleri, böcek tülleri, yüksek basınçlı sisleme/ped-fan soğutma ve CO₂ zenginleştirme.",
          },
          {
            heading: "Isıtma, Kazanlar ve Termal Verimlilik",
            detail:
              "Yüksek verimli sıcak su ve buhar kazanları, baca gazı ısı geri kazanımlı ekonomizerler ve yalıtımlı termal tampon tankları.",
          },
          {
            heading: "Topraksız Tarım ve Substrat Sistemleri",
            detail:
              "Askılı oluk sistemleri, kök bölgesi ısıtma hatları, drenaj suyu geri dönüşüm/dezenfeksiyon üniteleri ve merkezi iklim kontrol bilgisayarları.",
          },
        ],
      },
      {
        id: "grain-silos",
        number: "03",
        badge: "Alan 03",
        title: "Tahıl Siloları, Kurutma, Temizleme ve Optik Ayırma",
        subtitle:
          "İhracat kalitesinde tahıl depolama kompleksleri, sürekli kurutma kuleleri, tohum kalibrasyonu ve optik ayırma hatları.",
        diagramLabel: "DWG-03 · HASAT SONRASI TERMİNAL AKIŞI",
        imageSrc: "/images/agro-grain-silos.jpg",
        imageAlt:
          "Galvanizli dalgalı sac tahıl siloları ve kovalı elevatör köprüleri",
        standards: ["Eurocode / EN", "Z600 / Magnelis", "200–500 t/saat"],
        items: [
          {
            heading: "Dalgalı Sac Çelik Silolar ve Taşıma",
            detail:
              "Ağır Z600 / Magnelis galvaniz kaplamalı Eurocode/EN standartlı düz ve konik tabanlı çelik silolar; 200–500 t/saat kovalı elevatörler ve kapalı zincirli konveyörler.",
          },
          {
            heading: "Sürekli ve Resirkülasyonlu Kurutma",
            detail:
              "Isı geri kazanım yalıtımlı ve düşük NOx brülörlü enerji verimli sürekli akışlı kule kurutucular ve mobil/sabit resirkülasyonlu kurutucular.",
          },
          {
            heading: "Ön Temizleme, Kalibrasyon ve Optik Ayırma",
            detail:
              "Titreşimli ön temizleyiciler, döner tamburlu elekler, aerodinamik tohum kalibratörleri, çok kanallı optik renk ayırıcılar ve fındık/ceviz işleme hatları.",
          },
        ],
      },
      {
        id: "safety-feed",
        number: "04",
        badge: "Alan 04",
        title: "Silo Yapısal İzleme, ATEX Güvenliği ve Yem Tesisleri",
        subtitle:
          "Temasız yapısal yük izleme, sertifikalı toz patlama koruması ve otomatik karma yem üretimi.",
        diagramLabel: "DWG-04 · ATEX VE YEM DOZAJLAMA ŞEMASI",
        standards: ["ATEX Sertifikalı", "Gerinim Sensörü", "Mikro-Dozajlama"],
        items: [
          {
            heading: "Temasız Silo Yapısal İzleme",
            detail:
              "Silo duvarlarını kesmeden ayaklara monte edilen dış metal deformasyon sensörleriyle anlık stok ağırlığı ve dengesiz yük tespiti.",
          },
          {
            heading: "ATEX Patlama Koruması ve Gaz İzleme",
            detail:
              "ATEX sertifikalı alevsiz ve standart patlama tahliye panelleri, hızlı izolasyon valfleri, torbalı filtre toz toplama sistemleri ve sürekli CO/sıcaklık izleme.",
          },
          {
            heading: "Karma Yem Üretimi ve Hayvancılık",
            detail:
              "Yüksek homojenlikli karma yem karıştırıcıları, vitamin ve premiksler için gravimetrik mikro-dozajlama, peletleme, soğutma hatları ve TMR yem karma makineleri.",
          },
        ],
      },
    ],
    bottomCtaTitle: "Tarım Organize Bölgesi, Sera Kompleksi veya Tahıl Terminali mi Planlıyorsunuz?",
    bottomCtaBody:
      "Anahtar teslim teklif için saha parametrelerinizi, kapasite hedeflerinizi veya BOQ dosyanızı mühendislik masamıza iletin.",
    bottomCtaButton: "Agro-Proje Teklifi Gönder →",
  },
  bioIpm: {
    metaTitle: "Biyo-Çözümler, Akıllı IPM ve İhracat Sertifikasyonu",
    eyebrow: "SÜRDÜRÜLEBİLİR BİTKİ KORUMA VE İHRACAT DENETİM HAZIRLIĞI",
    h1: "Biyolojik Bitki Koruma, Akıllı IPM ve Uluslararası İhracat Sertifikasyonu",
    subHeadline:
      "Kafkasya ve Orta Asya’daki ticari seralara, meyve bahçelerine ve tarım işletmelerine kimyasal kalıntıları azaltmada, AB ve GCC MRL limitlerine uyum sağlamada ve uluslararası sertifikasyon denetimlerini ilk seferde geçmede destek oluyoruz.",
    imageAlt:
      "Modern ticari cam serada kurulu güneş enerjili optik AI kamera tuzağı",
    anchors: [
      { id: "core-scope", label: "Temel Kapsam" },
      { id: "packages", label: "Kademeli Paketler" },
      { id: "roadmap", label: "Sertifikasyon Yol Haritası" },
    ],
    coreScopeTitle: "3 Temel Alan: Biyokontrol, Dijital Gözlem ve Sertifikasyon",
    coreScope: [
      {
        title: "Biyolojik Girdiler ve Biyokontrol",
        body: "Faydalı avcı böcekler ve akarlar (beyazsinek, thrips, kırmızı örümcek, yaprak biti ve tuta absoluta için), ticari sera bombus arıları, türe özgü feromon tuzakları, şaşırtma dispenserleri, yapışkan tuzaklar ve düşük MRL’li biyopestisitler.",
        badges: ["Faydalı Böcekler", "Bombus Arıları", "Feromon Tuzakları"],
      },
      {
        title: "Dijital Zararlı Gözlemi ve Telemetri",
        body: "Günlük tür sayımı yapan güneş enerjili yapay zeka (AI) kamera tuzakları, akıllı telefon tuzak tarama uygulamaları ve gün-derece (GDD) modellemesi için mikro-iklim meteoroloji istasyonları.",
        badges: ["Güneş AI Tuzakları", "GDD Meteoroloji", "Bulut Telemetrisi"],
      },
      {
        title: "Uluslararası Sertifikasyon Hazırlığı",
        body: "GLOBALG.A.P. IFA v6 (Option 1 bireysel çiftlikler ve Option 2 üretici grupları), GRASP, Organik ve HACCP / ISO 22000 teknik hazırlığı — boşluk analizleri, prosedürler (SOP), deneme denetimleri, MRL laboratuvar koordinasyonu ve akredite Avrupa Kuruluşu (CB) iletişimi.",
        badges: ["GLOBALG.A.P. IFA v6", "GRASP", "ISO 22000 / HACCP"],
      },
    ],
    packagesSection: {
      title: "3 Kademeli Akıllı IPM Paketleri",
      subtitle: "İşletme ölçeğinizi seçerek önerilen anahtar teslim IPM paketini vurgulayın.",
      selectorLabel: "İşletme Ölçeğini Seçin:",
      recommendedLabel: "Önerilen Paket",
      tiers: [
        {
          id: "1",
          name: "Paket 1: IPM Audit Essentials",
          scaleTag: "1–3 ha sera veya 10–25 ha bahçe",
          scaleKey: "small",
          scaleLabel: "Küçük / Orta İşletme",
          hardwareTitle: "Donanım ve Yazılım",
          hardwareItems: [
            "Standart manuel feromon ve renkli yapışkan tuzaklar",
            "Mobil tuzak tarama yazılımı lisansı",
            "Bulut dijital gözlem kayıt defteri",
          ],
          advisoryTitle: "Girdiler ve Danışmanlık",
          advisoryItems: [
            "Ürüne özel IPM Eylem Eşik Matrisi",
            "AB MRL uyumlu girdi listesi ve hasat aralığı takvimi",
            "Temel IPM Boşluk Analizi ve IFA v6 IPM prosedürleri",
            "1× deneme denetimi ve 1 sezonluk tuzak sarf malzemeleri",
          ],
          ctaLabel: "Paket 1 Teklifi İste →",
        },
        {
          id: "2",
          name: "Paket 2: Smart IPM Export Pro",
          scaleTag: "3–10 ha sera veya 25–100 ha bahçe",
          scaleKey: "commercial",
          scaleLabel: "Ticari Sera / Bahçe",
          featured: true,
          hardwareTitle: "Donanım ve Bağlantı",
          hardwareItems: [
            "2–4× Güneş Enerjili Otomatik AI Kamera Tuzağı",
            "İkincil bloklar için yapışkan tuzaklar + mobil uygulama",
            "12 aylık Bulut Zararlı Analitik Portalı + M2M LTE SIM kartlar",
          ],
          advisoryTitle: "Girdiler ve Danışmanlık",
          advisoryItems: [
            "Özel Biyolojik Kontrol Salım Planı (faydalı böcekler, tozlayıcılar)",
            "İki haftada bir uzaktan görüntü incelemesi ve 2× saha denetimi",
            "Tam IFA v6 IPM dosyası + 1× Çoklu Kalıntı MRL Laboratuvar Testi",
            "1 sezonluk yedek plakalar/feromonlar ve RMA desteği",
          ],
          ctaLabel: "Paket 2 Teklifi İste →",
        },
        {
          id: "3",
          name: "Paket 3: Precision IPM Enterprise",
          scaleTag: "100+ ha tarım işletmeleri, Tarım Bölgeleri ve Option 2 Grupları",
          scaleKey: "enterprise",
          scaleLabel: "Tarım Holdingi / Grup",
          hardwareTitle: "Donanım ve Bağlantı",
          hardwareItems: [
            "5–10+ Güneş Enerjili Otomatik AI Kamera Tuzağı",
            "1× Otomatik Mikro-İklim Meteoroloji İstasyonu",
            "Çok sahalı Merkezi Genel Müdürlük Telemetri Paneli + API/ERP + SMS/WhatsApp uyarıları",
          ],
          advisoryTitle: "Girdiler ve Danışmanlık",
          advisoryItems: [
            "Sezon boyu Biyokontrol ve Düşük Kalıntı Programı",
            "Aylık agronomik saha denetimi ve direnç yönetimi",
            "Option 2 İç Kontrol Sistemi (ICS) kurulumu",
            "Hasat öncesi MRL kalıntı doğrulaması ve saha teknisyeni SLA",
          ],
          ctaLabel: "Paket 3 Teklifi İste →",
        },
      ],
      footnote:
        "Akredite üçüncü taraf Sertifikasyon Kuruluşu denetim ücretleri ve akredite laboratuvar MRL analiz ücretleri şeffaf şekilde maliyet bedeli üzerinden yansıtılır.",
    },
    roadmapSection: {
      title: "4 Adımlı Sertifikasyon Süreci",
      steps: [
        {
          step: "01",
          title: "Saha Boşluk Analizi ve MRL İncelemesi",
          detail: "GLOBALG.A.P. IFA v6 / GRASP kriterlerine göre ön denetim ve kalıntı risk analizi.",
        },
        {
          step: "02",
          title: "Tuzak Kurulumu ve Biyokontrol Protokolü",
          detail: "AI kamera tuzakları, feromon ağları, tozlayıcılar ve faydalı böcek salım planı.",
        },
        {
          step: "03",
          title: "Otomatik Gözlem ve Deneme Denetimi",
          detail: "Dijital ilaçlama kayıtları, hasat öncesi MRL testi ve kapsamlı deneme denetimi.",
        },
        {
          step: "04",
          title: "Akredite Kuruluş Denetimi ve Sertifikasyon",
          detail: "Akredite Avrupa Sertifikasyon Kuruluşu ile koordineli denetim ve ilk seferde sertifika.",
        },
      ],
    },
  },
  industrialInfrastructure: {
    metaTitle: "Endüstri Mühendisliği ve Kritik Altyapı",
    eyebrow: "ENDÜSTRİ VE KRİTİK ALTYAPI BÖLÜMÜ",
    h1: "Endüstriyel Boru Hattı Mühendisliği, Termal Enerji ve Kritik OT/SCADA Ağları",
    subHeadline:
      "Kafkasya ve Orta Asya’daki su ve gaz idarelerini, üretim tesislerini, trafo merkezlerini ve EPC yüklenicilerini standartlara uyumlu donanım, entegrasyon ve ölçüme dayalı devreye alma ile destekliyoruz.",
    anchors: [
      { id: "pipelines-thermal", label: "A Grubu: Boru Hatları ve Termal" },
      { id: "critical-it-ot", label: "B Grubu: Kritik BT ve OT" },
    ],
    tracks: [
      {
        id: "pipelines-thermal",
        badge: "A Grubu",
        title: "Endüstri Mühendisliği, Boru Hatları ve Termal Sistemler",
        subtitle:
          "CNC veri kayıtlı termoplastik kaynak makineleri, yüksek basınçlı boru hatları ve endüstriyel buhar/atık ısı geri kazanım sistemleri.",
        standards: ["PE100 / PP-R", "CNC Kaynak Kaydı", "Isı Geri Kazanımı"],
        diagramLabel: "DWG-06 · BORU KAYNAĞI VE TERMAL DÖNGÜ",
        imageSrc: "/images/industrial-infra.jpg",
        imageAlt:
          "Modern altyapı tesisinde yüksek basınçlı HDPE boru hatları ve endüstriyel vanalar",
        items: [
          {
            heading: "Termoplastik Boru Kaynak Makineleri",
            detail:
              "HDPE, PP ve PVDF basınçlı boru hatları için CNC otomasyonlu ve kaynak veri kayıtlı hidrolik alın kaynak makineleri; üniversal elektrofüzyon üniteleri ve atölye fiting makineleri.",
          },
          {
            heading: "Yüksek Basınçlı Akışkan Transferi ve Borulama",
            detail:
              "Komple PE100 ve PP-R boru sistemleri, elektrofüzyon ve alın kaynak fitingleri, endüstriyel izolasyon vanaları ve belediye su/atık su/gaz dağıtım hatları.",
          },
          {
            heading: "Termal Mühendislik, Buhar ve Biyokütle Enerjisi",
            detail:
              "Yüksek verimli endüstriyel buhar kazanları, sıcak su jeneratörleri, ısı eşanjörleri, baca gazı ekonomizerleri, atık ısı geri kazanımı ve biyokütle parçalayıcıları.",
          },
        ],
      },
      {
        id: "critical-it-ot",
        badge: "B Grubu",
        title: "Kritik BT, OT Siber Güvenlik ve Telekom Ağları",
        subtitle:
          "Endüstriyel IP/MPLS yönlendiriciler, donanım bypasslı OT güvenlik duvarları, trafo telekoruma ve 1G–200G ağ doğrulaması.",
        standards: [
          "IP/MPLS",
          "RFC 2544",
          "IEC 61850",
          "IEEE 1588 PTP",
          "EN 61000-4 Level 3",
        ],
        diagramLabel: "DWG-07 · TRAFO MERKEZİ OT/SCADA VE PTP TOPOLOJİSİ",
        items: [
          {
            heading: "Endüstriyel Omurga ve Taşıyıcı Yönlendirme",
            detail:
              "-20°C ile +60°C çalışma aralığına sahip modüler 1U ve 2U IP/MPLS yönlendiriciler (1G–100G); yönetilebilir Layer 2/3 endüstriyel Ethernet anahtarlar, seri-IP sunucular ve endüstriyel ses/PA platformları.",
          },
          {
            heading: "OT / SCADA Siber Güvenlik ve Erişim Kontrolü",
            detail:
              "Optik/bakır donanım bypass kartlı endüstriyel yeni nesil güvenlik duvarları; dahili OT cihaz profilli (koruma röleleri, RTU, PLC, IED) dağıtık NAC mimarileri.",
          },
          {
            heading: "Trafo Telekoruma, Senkronizasyon ve Ağ Doğrulama",
            detail:
              "Trafo merkezi telekoruma terminalleri, GNSS PTP Grandmaster zaman sunucuları ve donanım tabanlı 1G–200G Ağ Doğrulama Platformları (RFC 2544, ITU-T Y.1564, IEEE 1588 PTP, IEC 61850 GOOSE/SV, EN 61000-4 Level 3 EMC).",
          },
        ],
      },
    ],
    bottomCtaTitle: "Boru Hattı, Termal Tesis veya Trafo Merkezi OT/SCADA İhalesi mi Planlıyorsunuz?",
    bottomCtaButton: "Endüstriyel Teklif İste →",
  },
  turnkeyDelivery: {
    metaTitle: "Anahtar Teslim Proje Uygulaması ve EPC Yönetimi",
    eyebrow: "TEK NOKTADAN SORUMLULUK • EPC VE ANAHTAR TESLİM UYGULAMA",
    h1: "Kafkasya ve Orta Asya Genelinde Uçtan Uca Anahtar Teslim Proje Uygulaması",
    subHeadline:
      "Novaltron; Avrupa ve Türkiye mühendislik tedarikini, konsolide transit lojistiğini, ölçüme dayalı FAT/SAT devreye almayı ve yaşam döngüsü RMA desteğini tek sözleşme altında koordine ederek çoklu tedarikçi dağınıklığını ortadan kaldırır.",
    anchors: [
      { id: "workflow", label: "5 Adımlı Süreç" },
      { id: "execution-pillars", label: "Uygulama ve Kalite Kapıları" },
      { id: "benchmarks", label: "Örnek Proje Kapsamları" },
    ],
    workflowTitle: "5 Adımlı Uygulama Süreci",
    workflowSubtitle:
      "Keşif ve sistem boyutlandırmasından sınır ötesi transite, FAT/SAT kabul testlerine ve RMA desteğine kadar.",
    steps: [
      {
        step: "01",
        title: "Keşif ve Şartname Analizi",
        description: "Altyapı denetimleri, mühendislik boyutlandırma ve ihale teknik uyum matrisleri.",
        deliverable: "Uyum Matrisi ve Boyutlandırma Raporu",
      },
      {
        step: "02",
        title: "Özel Sistem Mühendisliği",
        description: "Ekipman konfigürasyonu, proses akış tasarımı ve entegre proje takvimi.",
        deliverable: "Sistem Şemaları ve Entegre Takvim",
      },
      {
        step: "03",
        title: "Sınır Ötesi Tedarik ve Transit",
        description: "Tiflis üzerinden çoklu para birimli Avrupa/Türkiye tedariki ve gümrükleme.",
        deliverable: "Navlun Konsolidasyonu ve Gümrük Dosyası",
      },
      {
        step: "04",
        title: "Saha Entegrasyonu ve FAT/SAT",
        description: "Mekanik/elektrik kurulum, kalibrasyon ve Fabrika/Saha Kabul Testleri.",
        deliverable: "Onaylı FAT/SAT Kabul Protokolleri",
      },
      {
        step: "05",
        title: "Yaşam Döngüsü Desteği ve RMA",
        description: "Tek elden garanti yönetimi, yedek parça lojistiği ve bölgesel saha mühendisliği.",
        deliverable: "Bölgesel Yedek Parça ve Garanti Masası",
      },
    ],
    pillarsTitle: "Uygulama Sütunları ve Kalite Kontrol Kapıları",
    pillarsSubtitle:
      "Çok disiplinli projelerin takvime uygun ve denetime hazır şekilde teslim edilmesi için tedarik, saha devreye alma ve teslimat sonrası işletmede yapılandırılmış kontroller.",
    executionPillars: [
      {
        badge: "Kapı 01 • Tedarik ve Transit",
        title: "Konsolide Sınır Ötesi Tedarik ve Lojistik",
        body: "Birleşik ticari takvimler altında Tiflis merkezimiz üzerinden seçkin Avrupa ve Türkiye uzman üreticileriyle doğrudan sözleşme yönetimi.",
        bullets: [
          "Çoklu para birimli OEM tedariki ve konsolide ticari ödemeler.",
          "Senkronize fabrika çıkışı, yük konsolidasyonu ve gümrüklü bölgesel transit.",
          "Proje kilometre taşlarıyla uyumlu eksiksiz ihracat ve gümrük dosyaları.",
        ],
        tags: ["Avrupa / TR OEM", "Yük Konsolidasyonu", "Gümrük Transiti"],
      },
      {
        badge: "Kapı 02 • Doğrulama",
        title: "Saha Entegrasyonu, FAT/SAT ve Saha İSG Disiplini",
        body: "Resmi işletme tesliminden önce hem üretim fabrikasında hem de son kurulum sahasında ölçüme dayalı teknik doğrulama.",
        bullets: [
          "İhale uyum matrisine göre sevkiyat öncesi Fabrika Kabul Testleri (FAT).",
          "Mekanik, elektrik ve kontrol sistemi entegrasyonu ile cihaz kalibrasyonu.",
          "Sıkı saha İSG (HSE) kontrolleri altında imzalı Saha Kabul Testi (SAT) protokolleri.",
        ],
        tags: ["FAT / SAT Protokolleri", "Kalibrasyon", "Saha HSE"],
      },
      {
        badge: "Kapı 03 • Süreklilik",
        title: "Yaşam Döngüsü Desteği, Yedek Parça ve Tek Masa RMA",
        body: "Müşterilerin ayrı yabancı garanti süreçleriyle uğraşmaması için devreye alma sonrası sürekliliğin tek bir bölgesel masadan yönetilmesi.",
        bullets: [
          "Merkezi garanti yönetimi ve üretici RMA koordinasyonu.",
          "Kritik yedek parça planlaması ve hızlı ikmal lojistiği.",
          "Operatör eğitimi ve proje ömrü boyunca bölgesel saha mühendisliği desteği.",
        ],
        tags: ["Tek Masa RMA", "Kritik Yedek Parça", "Saha SLA"],
      },
    ],
    scopesTitle: "Örnek Anahtar Teslim Proje Kapsamları",
    scopesSubtitle:
      "Bölgesel koridorumuzdaki agro-endüstriyel işletmeler, tahıl terminalleri ve altyapı ihaleleri için yapılandırılmış örnek çok disiplinli mühendislik paketleri.",
    bottomCtaTitle: "Çok Disiplinli Bir Anahtar Teslim Proje veya İhale mi Planlıyorsunuz?",
    bottomCtaBody:
      "Birleşik bir teslimat planı ve ticari teklif için saha parametrelerinizi, teknik şartnamenizi veya BOQ dosyanızı Tiflis mühendislik masamızla paylaşın.",
    bottomCtaButton: "Anahtar Teslim Teklif İste →",
    aboutCrossLinkLabel: "Hakkımızda ve Kurumsal Uyumluluk",
  },
  aboutCompliance: {
    metaTitle: "Hakkımızda ve Kurumsal Uyumluluk",
    eyebrow: "KURUMSAL MİMARİ • YÖNETİŞİM VE UYUMLULUK",
    h1: "Bölgesel Kurumsal Merkez ve Sınır Ötesi Kurumsal Uyumluluk",
    subHeadline:
      "Tiflis, Gürcistan’daki Novaltron LLC üzerinden faaliyet göstererek Batı Avrupa kurumsal yönetişimini şeffaf fiziksel ticaret evrakları ve Kafkasya ile Orta Asya genelinde EPC tedarikçi hazırlığıyla birleştiriyoruz.",
    anchors: [
      { id: "corporate-structure", label: "Kurumsal Yapı" },
      { id: "governance", label: "Yönetişim ve Standartlar" },
      { id: "compliance-readiness", label: "Kurumsal Hazırlık" },
    ],
    corporateTitle: "Bölgesel Kurumsal Merkez",
    corporateSubtitle:
      "Avrupa ve Türkiye üretimini Kafkasya ve Orta Asya’daki proje sahalarına bağlayan lojistik kavşakta konumlanmış tek sorumlu tüzel ve operasyonel yapı.",
    corporateHubName: "Novaltron LLC (Tiflis, Gürcistan — შპს ნოვალტრონი)",
    corporateHubRole: "Uluslararası Tedarik, Ticaret Finansmanı ve Bölgesel Transit Merkezi",
    corporateHubPoints: [
      "Avrupa ve Türkiye üreticileriyle doğrudan sözleşmeler ve çoklu para birimli ödemeler.",
      "Kafkasya ve Orta Asya genelinde yapılandırılmış yük taşımacılığı ve gümrük transiti.",
      "Anahtar teslim agro-endüstriyel ve kritik altyapı ihalelerinde tek noktadan ticari sorumluluk.",
    ],
    corridorCountries: ["Azerbaycan", "Gürcistan", "Özbekistan", "Kazakistan", "Türkiye"],
    corridorDiagramLabel: "BÖLGESEL TRANSİT VE TEDARİK KORİDORU",
    governanceTitle: "İşletim Modeli, Yönetişim ve Standartlar",
    governanceSubtitle:
      "Banka ve EPC denetim beklentileri için yapılandırılmış disiplinli teknik standartlar, denetlenebilir ticari evraklar ve seçkin mühendislik ortaklıkları.",
    operatingModelHeading: "Bölgesel Entegratör İşletim Modeli",
    operatingModelBody:
      "Novaltron; Batı Avrupa kurumsal yönetişim standartlarını disiplinli bölgesel proje uygulamasıyla birleştirerek seçkin Avrupa ve Türkiye uzman üreticileri ile sertifikalı devreye alma ekipleri tarafından desteklenen tek noktadan Tiflis entegrasyon merkezi olarak faaliyet gösterir.",
    standardsHeading: "Uluslararası Standartlara Uyum",
    standardsBody:
      "Tüm mühendislik sistemleri ve teslimat süreçleri uluslararası standartlarla uyumludur:",
    standardsList: [
      "ISO 9001",
      "ISO 14001",
      "ISO 22000",
      "CE",
      "ATEX",
      "Eurocode / EN",
      "GLOBALG.A.P.",
    ],
    documentationHeading: "Denetlenebilir Ticari Evrak ve İSG Disiplini",
    documentationItems: [
      "Tam denetlenebilir ticari evrak: Ticari Faturalar, Çeki Listeleri ve Menşe Şahadetnameleri.",
      "Ölçüme dayalı Fabrika Kabul Testi (FAT) ve Saha Kabul Testi (SAT) protokolleri.",
      "Tüm saha kurulumlarında sıkı İş Sağlığı ve Güvenliği (İSG / HSE) uyumluluğu.",
    ],
    complianceTitle: "Kurumsal Hazırlık ve Tedarikçi Ön Yeterliliği",
    complianceSubtitle:
      "Uluslararası ticaret bankalarının, EPC satın alma denetçilerinin ve tarımsal ihracat sertifikasyon kurumlarının inceleme beklentilerini karşılayacak şekilde yapılandırılmıştır.",
    bottomCtaTitle: "Kurumsal Ön Yeterlilik veya Ticari Uyumluluk Evraklarına mı İhtiyacınız Var?",
    bottomCtaBody:
      "AVL tedarikçi kayıt paketleri, NDA kapsamlı referans proje özetleri veya resmi ihale talepleri için Tiflis kurumsal ve mühendislik masamızla iletişime geçin.",
    bottomCtaButton: "Kurumsal Masamızla İletişime Geçin →",
    turnkeyCrossLinkLabel: "Anahtar Teslim Uygulama Sürecini İncele",
  },
  contact: {
    metaTitle: "Teknik Danışmanlık ve Teklif Portalı",
    eyebrow: "TEKNİK DANIŞMANLIK VE RFQ MASASI",
    h1: "Proje Teklifi (RFQ) veya Teknik Danışmanlık Talebi Gönderin",
    subHeadline:
      "Proje parametrelerinizi, arazi büyüklüğünüzü, teknik şartnamenizi veya metraj cetvelinizi (BOQ) paylaşın. Bölgesel mühendislik ve agronomi uzmanlarımız 24–48 iş saati içinde yanıt verecektir.",
    directDeskTitle: "Doğrudan Mühendislik Masası",
    directDeskBody:
      "Tüm RFQ talepleri teknik inceleme ve ticari tekliflendirme için doğrudan Tiflis operasyon masamıza yönlendirilir.",
    responseSla: "Yanıt süresi: 24–48 iş saati",
    socialLabel: "Resmi Kanallar",
    privacyNotice: "BOQ dosyaları ve proje bilgileri B2B gizliliği kapsamında işlenir:",
    legalLinkLabel: "Gizlilik ve Yasal Bildirim",
    form: {
      fullNameLabel: "Ad Soyad",
      fullNamePlaceholder: "Örn. Leyla Yılmaz",
      companyLabel: "Şirket / Kurum Adı",
      companyPlaceholder: "Örn. Anadolu Agro Park A.Ş.",
      emailLabel: "Kurumsal E-posta",
      emailPlaceholder: "ad@sirket.com",
      phoneLabel: "Telefon / WhatsApp",
      phonePlaceholder: "+90 / +995 / +994 ...",
      countryLabel: "Proje Ülkesi / Bölgesi",
      countryPlaceholder: "Hedef ülke veya bölge seçin",
      countries: [
        "Azerbaycan",
        "Gürcistan",
        "Özbekistan",
        "Kazakistan",
        "Türkiye",
        "Diğer Orta Asya / Kafkasya",
      ],
      divisionLabel: "Ana Bölüm",
      divisionPlaceholder: "Mühendislik bölümü seçin",
      divisions: [
        { value: "agro-irrigation", label: "Agro-Endüstriyel: Hassas Sulama ve Su Yönetimi" },
        { value: "agro-greenhouses", label: "Agro-Endüstriyel: Anahtar Teslim Ticari Seralar" },
        { value: "agro-grain", label: "Agro-Endüstriyel: Tahıl Siloları, Kurutma ve Optik Ayırma" },
        { value: "agro-safety-feed", label: "Agro-Endüstriyel: Silo Güvenliği ve Yem Tesisleri" },
        { value: "bio-ipm", label: "Biyo-Çözümler: Akıllı IPM ve İhracat Sertifikasyonu" },
        { value: "industrial-pipelines", label: "Endüstri Mühendisliği: Boru Hatları ve Termal Sistemler" },
        { value: "critical-it-ot", label: "Kritik Altyapı: BT, OT Siber Güvenlik ve Telekom Ağları" },
        { value: "multi-division", label: "Çok Bölümlü / Anahtar Teslim EPC İhalesi" },
      ],
      timelineLabel: "Tahmini Proje Takvimi",
      timelinePlaceholder: "Örn. 2026 2. Çeyrek Devreye Alma",
      scopeLabel: "Proje Kapsamı ve Teknik Özet",
      scopePlaceholder:
        "Kapasite (t/saat, ha), hedef standartlar, saha koşulları ve temel teknik gereksinimleri belirtin...",
      boqLabel: "Şartname veya BOQ Dosyası Ekle (.pdf, .xlsx, .docx, .zip)",
      boqHint: "İsteğe bağlı — maks. 25 MB",
      requiredTag: "Zorunlu",
      optionalTag: "İsteğe bağlı",
      submitButton: "Proje Teklifini Gönder →",
      submittingButton: "Teklif yönlendiriliyor...",
      validationErrors: {
        required: "Lütfen bu zorunlu alanı doldurun.",
        email: "Lütfen geçerli bir kurumsal e-posta adresi girin.",
      },
      confirmationTitle: "Proje Teklif Talebi Alındı",
      referenceIdLabel: "Talep Referansı",
      confirmationBody:
        "Teşekkür ederiz. Talebiniz Novaltron’un bölgesel mühendislik masasına (info@novaltron.com) yönlendirildi. Uzmanımız şartnamenizi inceleyerek 1–2 iş günü içinde sizinle iletişime geçecektir.",
      confirmationReset: "Yeni Talep Gönder",
      tierPreselectedNote: "Akıllı IPM matrisinden seçilen paket: Paket",
    },
  },
  legal: {
    metaTitle: "Gizlilik Politikası ve Yasal Bildirim",
    eyebrow: "KURUMSAL UYUMLULUK VE VERİ KORUMA",
    h1: "Gizlilik Politikası, BOQ Gizliliği ve Yasal Bildirim",
    subHeadline:
      "Novaltron LLC (Tiflis, Gürcistan) kurumsal veri yönetişimi, ihale gizliliği ve yasal bildirim metni.",
    updatedLabel: "Yürürlük: 2026 · Sürüm 1.0",
    sections: [
      {
        heading: "1. Kurumsal Yapı ve Faaliyet Kapsamı",
        body: [
          "Bu web sitesi (www.novaltron.com), Kafkasya ve Orta Asya genelinde sınır ötesi mühendislik entegrasyonu, tedarik ve bölgesel transit merkezi olarak faaliyet gösteren Novaltron LLC (შპს ნოვალტრონი, Tiflis, Gürcistan) tarafından işletilmektedir.",
          "Resmi kurumsal yazışmalar ve uyumluluk talepleri için info@novaltron.com adresiyle iletişime geçebilirsiniz.",
        ],
      },
      {
        heading: "2. RFQ Verileri ve İhale / BOQ Gizliliği",
        body: [
          "RFQ portalı üzerinden iletilen bilgiler ve isteğe bağlı ek dosyalar (BOQ cetvelleri, saha parametreleri ve teknik şartnameler) yalnızca mühendislik boyutlandırması, teknik uyum matrisi ve ticari teklif hazırlanması amacıyla kullanılır.",
          "Müşteri ihale dokümanları gizli ticari bilgi olarak korunur; talep edilen kapsamın fiyatlandırılması veya teslimatı için gerekli yetkin üretici ve mühendislik ortakları dışında üçüncü taraflarla paylaşılmaz.",
        ],
      },
      {
        heading: "3. Veri Saklama ve Erişim Hakları",
        body: [
          "Kurumsal iletişim bilgileri yalnızca ticari değerlendirme, proje teslimatı ve yasal ticari kayıt yükümlülükleri süresince saklanır.",
          "Dilediğiniz zaman info@novaltron.com adresine yazarak iletişim verilerinize erişim, düzeltme veya silme talebinde bulunabilirsiniz.",
        ],
      },
      {
        heading: "4. Teknik Özellikler Sorumluluk Bildirimi",
        body: [
          "Bu sitede yer alan tüm mühendislik açıklamaları ve teknik şemalar uluslararası standartlarla (ISO, CE, ATEX, Eurocode / EN, GLOBALG.A.P.) uyumlu gösterge niteliğindeki sistem yeteneklerini temsil eder. Kesin performans garantileri yalnızca imzalı ticari sözleşmelerde ve FAT/SAT protokollerinde tanımlanır.",
        ],
      },
    ],
  },
};
