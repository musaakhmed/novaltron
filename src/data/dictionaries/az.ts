import type { SiteDictionary } from "./types";

export const az: SiteDictionary = {
  meta: {
    siteName: "Novaltron",
    defaultTitle: "Novaltron | Aqro-Sənaye Sistemləri və Kritik İnfrastruktur",
    defaultDescription:
      "Qafqaz və Mərkəzi Asiyada sərhədlərarası aqro-sənaye mühəndisliyi, bioloji bitki mühafizəsi və kritik infrastruktur inteqrasiyası — Novaltron LLC (Tbilisi, Gürcüstan).",
    skipToContent: "Əsas texniki məzmuna keç",
  },
  nav: {
    links: [
      { label: "Aqro-Sənaye", href: "/agro-solutions" },
      { label: "Bio və Ağıllı IPM", href: "/bio-ipm" },
      { label: "Sənaye və İnfrastruktur", href: "/industrial-infrastructure" },
      { label: "Açar Təhvil", href: "/turnkey-delivery" },
      { label: "Biz Kimik", href: "/about" },
    ],
    primaryCta: "Qiymət Təklifi Al",
    menuOpenLabel: "Naviqasiya menyusunu aç",
    menuCloseLabel: "Naviqasiya menyusunu bağla",
    languageLabel: "Dil seçin",
  },
  footer: {
    summary:
      "NOVALTRON — Qafqaz və Mərkəzi Asiyada sərhədlərarası aqro-sənaye mühəndisliyi, bioloji bitki mühafizəsi və kritik infrastruktur inteqrasiyası.",
    hubLabel: "Tbilisi Mərkəzi",
    hubValue: "Novaltron LLC (შპს ნოვალტრონი) — Tbilisi, Gürcüstan",
    corridorLabel: "Regional Dəhliz",
    corridorValue: "Azərbaycan · Gürcüstan · Özbəkistan · Qazaxıstan · Türkiyə",
    contactsLabel: "Əlaqə",
    socialLabel: "Sosial Kanallar",
    navigationLabel: "Bölmələr və Səhifələr",
    standardsLabel: "Uyğun Standartlar",
    legalLinkLabel: "Məxfilik və Hüquqi Bildiriş",
    copyright: "© 2026 Novaltron LLC. Bütün hüquqlar qorunur.",
  },
  home: {
    eyebrow: "AQRO-SƏNAYE VƏ İNFRASTRUKTUR MÜHƏNDİSLİYİ • QAFQAZ VƏ MƏRKƏZİ ASİYA",
    h1: "Qafqaz və Mərkəzi Asiyada Açar Təhvil Aqro-Sənaye Sistemləri və Kritik İnfrastruktur",
    subHeadline:
      "Novaltron Avropa və Türkiyənin qabaqcıl mühəndislik texnologiyalarını regional layihə icrası ilə birləşdirir — Tbilisi mərkəzimiz vasitəsilə dəqiq suvarma sistemləri, sənaye istixana kompleksləri, məhsul yığımından sonrakı taxıl terminalları, bioloji bitki mühafizəsi və sənaye infrastrukturu təqdim edirik.",
    primaryCta: "Layihə Sorğusu Göndər →",
    secondaryCta: "Aqro-Həllərə Bax",
    heroImageAlt:
      "Həndəsi yaşıl tarlalar üzərində mərkəzi pivot suvarma sisteminin və arxa planda sənaye şüşə istixanaların havadan görünüşü",
    heroTrustBar: [
      "REGİONAL İCRA MƏRKƏZİ (TBİLİSİ, GÜRCÜSTAN)",
      "4 ƏSAS MÜHƏNDİSLİK BÖLMƏSİ",
      "FAT/SAT SERTİFİKATLI İŞƏSALMA",
    ],
    heroGridHeading: "ƏSAS MÜHƏNDİSLİK ARXİTEKTURASI · 04 SXEMATİK İSTİQAMƏT",
    heroGridCards: [
      {
        code: "DWG-01",
        label: "SUVARMA",
        sublabel: "Mərkəzi Pivot · EC/pH · Günəş",
        variant: "irrigation",
        href: "/agro-solutions#irrigation",
      },
      {
        code: "DWG-02",
        label: "İSTİXANALAR",
        sublabel: "Venlo Şüşə · İstilik Dövrəsi",
        variant: "greenhouses",
        href: "/agro-solutions#greenhouses",
      },
      {
        code: "DWG-03",
        label: "TAXIL SİLOSLARI",
        sublabel: "Z600 Eurocode · 200–500 t/saat",
        variant: "grain-silos",
        href: "/agro-solutions#grain-silos",
      },
      {
        code: "DWG-04",
        label: "SƏNAYE BORU VƏ ŞƏBƏKƏLƏR",
        sublabel: "PE100 · Buxar · OT/SCADA",
        variant: "industrial-dual",
        href: "/industrial-infrastructure",
      },
    ],
    heroShowcase: {
      sectionTitle: "Dörd İnteqrasiya Olunmuş Mühəndislik İstiqaməti—Canlı Sxematik Görünüşdə",
      sectionSubtitle:
        "Dəqiq sahə hidravlikası və Venlo istixana iqlim dövrələrindən tutmuş Eurocode taxıl terminallarına və kritik sənaye boru/OT şəbəkələrinə qədər hər bir arxitekturanı interaktiv şəkildə araşdırın.",
      liveLabel: "CANLI SXEM",
      pausedLabel: "DAYANDIRILIB",
      pauseButtonLabel: "Animasiyanı dayandır",
      playButtonLabel: "Animasiyanı başlat",
      tablistLabel: "Əsas mühəndislik arxitekturası istiqamətləri",
      details: {
        irrigation: {
          title: "Dəqiq Suvarma və Günəş Nasos Arxitekturası",
          summary:
            "Avtomatik kanal filtrasiyası, çoxkanallı EC/pH fertiqasiya blokları, günəş enerjili nasos başlığı və ultrasəs sahə telemetriyası ilə birləşdirilmiş mərkəzi pivot və xətti suvarma sistemləri.",
          ctaLabel: "Suvarma Sistemlərinə Bax",
          standards: ["EC/pH Telemetriya", "Günəş Nasosları", "Avto-Filtrasiya"],
          metrics: [
            { label: "Hidravlik İdarə", value: "EC/pH + VFD" },
            { label: "Monitorinq", value: "Ultrasəs Axın" },
          ],
        },
        greenhouses: {
          title: "Venlo Şüşə İstixanalar və İstilik Bərpa Dövrəsi",
          summary:
            "Motorlu dam ventilyasiyası, termal kölgələndirmə pərdələri, asma hidroponika novları və baca qazından CO₂/istilik bərpası ilə təchiz olunmuş Eurocode standartlı sənaye istixanaları.",
          ctaLabel: "İstixana Sistemlərinə Bax",
          standards: ["Eurocode / EN", "Venlo & Poli", "CO₂ Bərpası"],
          metrics: [
            { label: "Konstruksiya", value: "EN Külək / Qar" },
            { label: "İqlim Dövrəsi", value: "Qazan + CO₂" },
          ],
        },
        "grain-silos": {
          title: "Yüksək Güclü Taxıl Terminalları və Optik Çeşidləmə",
          summary:
            "İlkin təmizləyicilər, fasiləsiz qüllə quruducuları, noriyalar, Z600 sinklənmiş Eurocode silosları və 500 t/saata qədər optik rəng çeşidləyicilərini birləşdirən tam xətlər.",
          ctaLabel: "Taxıl və Toxum Xətlərinə Bax",
          standards: ["Z600 Sinklənmiş", "Eurocode / EN", "Optik Çeşidləmə"],
          metrics: [
            { label: "Nəql Gücü", value: "200–500 t/saat" },
            { label: "Silos Örtüyü", value: "Z600 Polad" },
          ],
        },
        "industrial-dual": {
          title: "HDPE/PE100 Borular, Buxar və Kritik OT/SCADA",
          summary:
            "CNC qeydiyyatlı alın qaynağı, PE100 xətləri və tullantı istilik qazanlarını 1G–200G IP/MPLS, aparat baypaslı OT firewall və GNSS PTP sinxronizasiyası ilə birləşdirən ikiqat sənaye həlli.",
          ctaLabel: "Sənaye və OT Sistemlərinə Bax",
          standards: ["PE100 / CNC Qaynaq", "IP/MPLS 100G", "IEC 61850 / PTP"],
          metrics: [
            { label: "OT Davamlılığı", value: "-20°C..+60°C" },
            { label: "Doğrulama", value: "1G–200G RFC 2544" },
          ],
        },
      },
    },
    agroSection: {
      bandNumber: "01",
      bandMarker: "AQRO-SƏNAYE MÜHƏNDİSLİYİ",
      h2: "Tarla Suvarılmasından İxrac Səviyyəli Saxlamaya Qədər Tam Aqrar İnfrastruktur",
      intro:
        "Azərbaycan, Gürcüstan, Özbəkistan və Qazaxıstanda aqroparklar, sənaye təsərrüfatları, istixanalar və taxıl operatorları üçün tam aqrar modernləşdirmə layihələrini layihələndirir, təchiz edir və işə salırıq.",
      viewAllCta: "Tam Aqro-Sənaye Portfeli →",
      cards: [
        {
          id: "irrigation",
          code: "01.A",
          title: "Dəqiq Suvarma və Su İdarəetməsi",
          description:
            "Genişmiqyaslı mərkəzi pivot və xətti hərəkətli tarla suvarma sistemləri, təzyiq tənzimləyici damcı suvarma xətləri, avtomatlaşdırılmış EC/pH gübrələmə (fertiqasiya) qurğuları, özünü təmizləyən filtrasiya stansiyaları, günəş enerjili nasos sistemləri və ağıllı su telemetriyası.",
          ctaLabel: "Su və Suvarma Həlləri →",
          anchor: "/agro-solutions#irrigation",
          standards: ["EC/pH Telemetriya", "Günəş Nasosları", "Avto-Filtrasiya"],
          diagramVariant: "irrigation",
          imageSrc: "/images/agro-irrigation.jpg",
          imageAlt:
            "Səhər işığında əkin sıralarını suvaran mərkəzi pivot sistemi və paslanmayan polad filtrasiya qovşağı",
        },
        {
          id: "greenhouses",
          code: "01.B",
          title: "Açar Təhvil Sənaye İstixanaları və İqlim Nəzarəti",
          description:
            "Regional külək və qar yüklərinə davamlı şüşə və çoxaşırımlı polietilen istixana konstruksiyaları, avtomatlaşdırılmış havalandırma, istilik-kölgələndirmə pərdələri, yüksək səmərəli qazanxana sistemləri və hidroponik yetişdirmə xətləri.",
          ctaLabel: "İstixana Sistemləri →",
          anchor: "/agro-solutions#greenhouses",
          standards: ["Eurocode / EN", "Venlo və Poli", "Hidroponika"],
          diagramVariant: "greenhouses",
          imageSrc: "/images/agro-greenhouse.jpg",
          imageAlt:
            "Asma hidroponik novlar və istilik pərdələri ilə təchiz edilmiş müasir Venlo sənaye şüşə istixanasının daxili görünüşü",
        },
        {
          id: "grain-silos",
          code: "01.C",
          title: "Taxıl Silosları, Qurutma və Optik Çeşidləmə",
          description:
            "Ağır Z600 sinkləmə örtüklü Eurocode/EN standartlı büzməli polad siloslar, yüksək məhsuldarlıqlı nəql xətləri (200–500 t/saat), enerjiyə qənaət edən fasiləsiz taxıl quruducuları, aerodinamik toxum təmizləyiciləri və optik rəng çeşidləyiciləri.",
          ctaLabel: "Taxıl və Toxum Xətləri →",
          anchor: "/agro-solutions#grain-silos",
          standards: ["Eurocode / EN", "Z600 Sinkləmə", "200–500 t/saat"],
          diagramVariant: "grain-silos",
          imageSrc: "/images/agro-grain-silos.jpg",
          imageAlt:
            "Sinklənmiş büzməli polad taxıl silosları, üst konveyer körpüləri və çalovlu elevator qüllələri",
        },
        {
          id: "safety-feed",
          code: "01.D",
          title: "Silosların Struktur Monitorinqi, ATEX Təhlükəsizliyi və Yem Zavodları",
          description:
            "Silos dayaqlarında metal deformasiyası üzrə qeyri-invaziv çəki və həddindən artıq yüklənmə nəzarəti, ATEX sertifikatlı partlayış ventilyasiyası və CO qaz monitorinqi, həmçinin avtomatlaşdırılmış qarışıq yem dozalama və qranullaşdırma xətləri.",
          ctaLabel: "Təhlükəsizlik və Yem Sistemləri →",
          anchor: "/agro-solutions#safety-feed",
          standards: ["ATEX", "CO və Yük Nəzarəti", "Yem Qranullama"],
          diagramVariant: "safety-feed",
        },
      ],
    },
    bioBanner: {
      bandNumber: "02",
      bandMarker: "İXRAC HAZIRLIĞI VƏ DAVAMLI BİTKİ MÜHAFİZƏSİ",
      h2: "Bioloji Bitki Mühafizəsi, Ağıllı IPM və Beynəlxalq İxrac Sertifikatlaşdırması",
      body: "Avropa İttifaqı, Körfəz ölkələri (GCC) və müasir pərakəndə satış şəbəkələrinin sərt Maksimum Qalıq Hədlərinə (MRL) tam uyğunlaşın və beynəlxalq auditlərdən ilk cəhddə uğurla keçin. Novaltron faydalı həşəratları, istixana tozlandırıcılarını, günəş enerjili avtomatlaşdırılmış süni intellekt (AI) kamera tələlərini və GLOBALG.A.P. IFA v6, GRASP, Orqanik və HACCP / ISO 22000 audit hazırlığını birləşdirən inteqrasiya olunmuş bitki mühafizəsi (IPM) proqramları təqdim edir.",
      imageAlt:
        "Müasir şüşə istixanada sağlam bitki sıraları arasında quraşdırılmış günəş enerjili optik AI kamera tələsi",
      highlights: [
        "Biokontrol və Tozlandırma",
        "Avtomatlaşdırılmış Zərərverici Telemetriyası",
        "3 Səviyyəli Kommersiya Paketləri (Audit Essentials, Export Pro, Precision Enterprise)",
      ],
      cta: "Paketlərə Bax →",
    },
    industrialSection: {
      bandNumber: "03",
      bandMarker: "SƏNAYE VƏ İNFRASTRUKTUR BÖLMƏSİ",
      h2: "Kommunal, Enerji və Kritik Şəbəkə İnfrastrukturu Həlləri",
      intro:
        "Aqro-sənaye sistemləri ilə yanaşı, Novaltron beynəlxalq standartlara uyğun boru kəməri mühəndisliyi, istilik enerjisi bərpası və kritik OT/SCADA şəbəkə doğrulama həlləri təqdim edir.",
      imageAlt:
        "Müasir sənaye obyektində yüksək təzyiqli qara HDPE boru kəmərləri və paslanmayan polad sənaye armaturları",
      trackA: {
        badge: "İstiqamət A • Boru Kəmərləri və İstilik",
        title: "Sənaye Mühəndisliyi, Boru Kəmərləri və İstilik Sistemləri",
        anchor: "/industrial-infrastructure#pipelines-thermal",
        bullets: [
          "CNC məlumat qeydiyyatlı hidravlik alın və elektrofuziya qaynaq avadanlıqları, boru hazırlama və emalatxana fitinq dəzgahları.",
          "Yüksək təzyiqli HDPE/PP boru və maye ötürmə şəbəkələri, sənaye armaturları və kommunal su/qaz paylayıcı xətləri.",
          "Yüksək səmərəli sənaye buxar qazanları, ekonomayzerlər, tullantı istiliyinin bərpası və aqrar biokütlə emalı xətləri.",
        ],
        cta: "Boru Kəmərləri və İstilik →",
        diagramLabel: "DWG-06 · CNC QAYNAQ VƏ İSTİLİK BƏRPASI",
      },
      trackB: {
        badge: "İstiqamət B • Kritik İT və OT",
        title: "Kritik İT, OT Kibertəhlükəsizlik və Telekom Şəbəkələri",
        anchor: "/industrial-infrastructure#critical-it-ot",
        bullets: [
          "Sənaye tipli IP/MPLS marşrutlayıcılar, Layer 2/3 idarəolunan kommutatorlar və serial-to-IP cihaz serverləri.",
          "Aparat baypaslı OT/SCADA təhlükəsizlik divarları (-20°C ilə +60°C işləmə diapazonu) və OT cihaz profilli NAC sistemləri.",
          "Yarımstansiya tele-mühafizə terminalları, GNSS PTP zaman serverləri, yüksək əlçatanlıqlı saxlama/PA sistemləri və 1G–200G şəbəkə yoxlama platformaları (RFC 2544, IEC 61850, EN 61000-4 Level 3).",
        ],
        cta: "Kritik İT və OT →",
        diagramLabel: "DWG-07 · IP/MPLS, PTP VƏ OT TƏHLÜKƏSİZLİYİ",
      },
    },
    referenceSection: {
      eyebrow: "REGİONAL İCRA MODELİ VƏ NÜMUNƏVİ LAYİHƏ MİQYASLARI",
      h2: "Avropa və Türkiyə Mühəndislik Tərəfdaşları ilə Vahid Regional İnteqrasiya",
      subtitle:
        "Novaltron seçilmiş Avropa və Türkiyə istehsalçılarını, konsolidasiya olunmuş logistikanı və ixtisaslaşmış işəsalma mühəndislərini vahid müqavilə altında birləşdirən Tbilisi mərkəzli sistem inteqratorudur.",
      operatingModelBadge: "NİYƏ VAHİD İNTEQRATOR",
      operatingModelBody:
        "6–10 ayrı xarici ixracatçı, gömrük brokeri və sahə podratçısını idarə etmək əvəzinə, aqroholdinqlər və kommunal qurumlar vahid məsuliyyətli Tbilisi mərkəzi ilə işləyirlər.",
      disclaimer:
        "Qafqaz və Mərkəzi Asiya tenderləri üçün tipik açar təhvil mühəndislik nümunələri; müştəriyə məxsus layihə arayışları texniki ön-kvalifikasiya zamanı NDA əsasında təqdim olunur.",
      scopes: [
        {
          code: "SCOPE-01",
          corridor: "Qafqaz Aqropark Dəhlizi",
          metric: "450 ha",
          title: "Dəqiq Suvarma və Günəş Nasos Stansiyası Modernizasiyası",
          summary:
            "Mərkəzi pivot xətləri, yüksək bulanıqlıqlı kanal suyu üçün avtomatik qum/disk filtrasiyası, çoxkanallı EC/pH fertiqasiya və ultrasəs su telemetriyası.",
          standards: ["EC/pH Avtomatika", "Günəş Nasosları", "FAT/SAT"],
        },
        {
          code: "SCOPE-02",
          corridor: "Mərkəzi Asiya Taxıl Dəhlizi",
          metric: "20 000 t",
          title: "Büzməli Polad Taxıl Terminalı və ATEX Təhlükəsizliyi",
          summary:
            "300 t/saat nəql xətləri, istilik bərpalı fasiləsiz qurutma qülləsi, qeyri-invaziv çəki sensorları və ATEX partlayış ventilyasiyası ilə Z600 Eurocode/EN siloslar.",
          standards: ["Eurocode / EN", "Z600", "ATEX"],
        },
        {
          code: "SCOPE-03",
          corridor: "Regional İxrac İstixanaçılığı",
          metric: "10 ha",
          title: "Sənaye İstixanasında Ağıllı IPM və IFA v6 Hazırlığı",
          summary:
            "Günəş enerjili AI kamera tələləri, faydalı həşərat və bombus tozlandırma proqramı, yığımöncəsi MRL laboratoriya yoxlaması və tam GLOBALG.A.P. IFA v6 dosyesi.",
          standards: ["GLOBALG.A.P. IFA v6", "GRASP", "AB MRL"],
        },
      ],
    },
    deliverySection: {
      eyebrow: "VAHİD MƏSULİYYƏT MƏRKƏZİ",
      h2: "5 Addımlı Açar Təhvil İcra Modeli",
      subtitle:
        "İlkin sahə auditindən ölçməyə əsaslanan işəsalmaya və zəmanət RMA xidmətinə qədər dəqiq mühəndislik intizamı.",
      deliverableLabel: "Əsas Mərhələ Nəticəsi",
      steps: [
        {
          step: "01",
          title: "Texniki Tapşırıq və Sahə Təhlili",
          description: "İnfrastruktur auditi, aqronomik/mühəndislik hesablamaları və tender uyğunluq matrisi.",
          deliverable: "Sahə Auditi və Uyğunluq Matrisi",
        },
        {
          step: "02",
          title: "Fərdi Sistem Mühəndisliyi",
          description: "Avadanlıq konfiqurasiyası, texnoloji axın layihələndirməsi və inteqrasiya olunmuş qrafik.",
          deliverable: "Texnoloji Sxem və BOQ",
        },
        {
          step: "03",
          title: "Sərhədlərarası Təchizat və Logistika",
          description: "Tbilisi vasitəsilə çoxvalyutalı Avropa/Türkiyə təchizatı, ixrac sənədləşməsi və gömrük rəsmiləşdirilməsi.",
          deliverable: "Konsolidasiya Olunmuş Yük və Mənşə Sənədləri",
        },
        {
          step: "04",
          title: "Sahədə İnteqrasiya və FAT/SAT",
          description: "Mexaniki/elektrik quraşdırma, kalibrləmə və sübuta əsaslanan Zavod və Sahə Qəbul Sınaqları.",
          deliverable: "İmzalanmış FAT/SAT Protokolları",
        },
        {
          step: "05",
          title: "Satışdan Sonrakı Dəstək və RMA",
          description: "Vahid zəmanət idarəetməsi, ehtiyat hissələri logistikası və regional sahə mühəndisliyi dəstəyi.",
          deliverable: "Zəmanət SLA və Ehtiyat Hissələri",
        },
      ],
    },
    trustSection: {
      eyebrow: "KORPORATİV İDARƏETMƏ VƏ ETİBAR",
      h2: "Tbilisi Mərkəzi Vasitəsilə Strukturlaşdırılmış İcra",
      subtitle:
        "EPC tender komissiyaları, aqroholdinqlər və bank uyğunluq yoxlamaları üçün şəffaf institusional struktur.",
      governancePillars: [
        {
          number: "01",
          title: "Avropa İdarəetməsi və Standartlar",
          detail:
            "Mühəndislik, qida təhlükəsizliyi və sənaye sahələrində ISO 9001, ISO 14001, CE, ATEX, EN və GLOBALG.A.P. standartlarına tam uyğunluq.",
          tags: ["ISO 9001", "ISO 14001", "CE", "ATEX", "EN", "GLOBALG.A.P."],
        },
        {
          number: "02",
          title: "Regional Uyğunluq və Yerli AVL",
          detail:
            "Azərbaycan, Gürcüstan, Özbəkistan, Qazaxıstan və Türkiyə üzrə EPC təchizatçı kvalifikasiyasına uyğun regional icra.",
          tags: ["AZ", "GE", "UZ", "KZ", "TR", "EPC Hazır"],
        },
        {
          number: "03",
          title: "Şəffaf Təchizat Sənədləşməsi",
          detail:
            "Novaltron LLC (Tbilisi, Gürcüstan) vasitəsilə kommersiya invoysları, qablaşdırma siyahıları, mənşə sertifikatları və FAT/SAT aktları.",
          tags: ["Novaltron LLC", "Mənşə Sənədləri", "FAT/SAT"],
        },
      ],
      bottomCtaTitle: "Növbəti Aqro-Sənaye və ya İnfrastruktur Layihənizi Planlaşdırırsınız?",
      bottomCtaBody:
        "Fərdi kommersiya təklifi almaq üçün texniki şərtlərinizi, ərazi ölçülərinizi və ya BOQ cədvəlinizi mühəndislik komandamızla paylaşın.",
      bottomCtaButton: "Fərdi Təklif Al →",
    },
  },
  agroSolutions: {
    metaTitle: "Aqro-Sənaye və Məhsul Yığımından Sonrakı Həllər",
    eyebrow: "ƏSAS BÖLMƏ • AQRO-SƏNAYE VƏ MƏHSUL YIĞIMINDAN SONRAKI MÜHƏNDİSLİK",
    h1: "Açar Təhvil Aqrar İnfrastruktur — Tarla Suvarılmasından İxrac Səviyyəli Saxlamaya Qədər",
    subHeadline:
      "Novaltron Azərbaycan, Gürcüstan, Özbəkistan və Qazaxıstanda Avropa və Türkiyə mühəndislik standartlarını vahid regional icra ilə birləşdirərək inteqrasiya olunmuş aqro-sənaye sistemləri layihələndirir, təchiz edir və işə salır.",
    anchors: [
      { id: "irrigation", label: "Suvarma və Su" },
      { id: "greenhouses", label: "Sənaye İstixanaları" },
      { id: "grain-silos", label: "Taxıl Silosları və Qurutma" },
      { id: "safety-feed", label: "Təhlükəsizlik və Yem Zavodları" },
    ],
    pillars: [
      {
        id: "irrigation",
        number: "01",
        badge: "İstiqamət 01",
        title: "Dəqiq Suvarma, Filtrasiya və Su İdarəetməsi",
        subtitle:
          "Quraq və kontinental iqlim zonaları üçün layihələndirilmiş avtomatlaşdırılmış su paylanması, yüksək bulanıqlıqlı suların filtrasiyası, günəş enerjili nasoslar və real vaxt rütubət telemetriyası.",
        diagramLabel: "DWG-01 · HİDRAVLİKA VƏ TELEMETRİYA SXEMİ",
        imageSrc: "/images/agro-irrigation.jpg",
        imageAlt:
          "Səhər işığında əkin sıralarını suvaran mərkəzi pivot sistemi və filtrasiya stansiyası",
        standards: ["EC/pH Avtomatika", "Günəş Nasosları", "Ultrasəs Ölçmə"],
        items: [
          {
            heading: "Tarla və Bağ Suvarma Şəbəkələri",
            detail:
              "Genişmiqyaslı mərkəzi pivot və xətti hərəkətli sistemlər, barabanlı suvarma qurğuları və təzyiq tənzimləyici damcı/mikro-çiləmə xətləri.",
          },
          {
            heading: "Fertiqasiya və Özünü Təmizləyən Filtrasiya",
            detail:
              "Avtomatlaşdırılmış çoxkanallı EC/pH gübrələmə qurğuları və kanal/çay suları üçün özünü təmizləyən qum, disk və tor filtrlər.",
          },
          {
            heading: "Günəş Nasosları və Su Telemetriyası",
            detail:
              "Dərin quyu, şaquli turbin və günəş enerjili nasos stansiyaları, ultrasəs su sayğacları və torpaq rütubəti monitorinqi.",
          },
        ],
      },
      {
        id: "greenhouses",
        number: "02",
        badge: "İstiqamət 02",
        title: "Açar Təhvili Sənaye İstixanaları və İqlim Nəzarəti",
        subtitle:
          "Regional külək və qar yüklərinə davamlı, avtomatlaşdırılmış iqlim və istilik idarəetməsinə malik yüksək məhsuldarlıqlı şüşə və çoxaşırımlı polietilen istixana kompleksləri.",
        diagramLabel: "DWG-02 · İQLİM VƏ İSTİLİK DÖVRÜ SXEMİ",
        imageSrc: "/images/agro-greenhouse.jpg",
        imageAlt:
          "Asma hidroponik novlar və istilik pərdələri olan sənaye Venlo istixanası",
        standards: ["Eurocode / EN", "Venlo və Poli", "CO₂ Zənginləşdirmə"],
        items: [
          {
            heading: "Konstruksiya və Örtük Sistemləri",
            detail:
              "Eurocode / EN külək, qar və seysmik yüklərinə hesablanmış isti sinklənmiş Venlo şüşə və çoxaşırımlı polietilen polad konstruksiyalar.",
          },
          {
            heading: "Avtomatlaşdırılmış İqlim və Kölgələndirmə",
            detail:
              "Motorlu dam/yan havalandırma, istilik qoruyucu və kölgələndirmə pərdələri, yüksək təzyiqli dumanlama/soyutma və CO₂ zənginləşdirmə.",
          },
          {
            heading: "Qazanxana və Hidroponik Xətlər",
            detail:
              "Tüstü qazı ekonomayzerli yüksək səmərəli isti su və buxar qazanları, istilik akkumulyator çənləri və asma hidroponik yetişdirmə novları.",
          },
        ],
      },
      {
        id: "grain-silos",
        number: "03",
        badge: "İstiqamət 03",
        title: "Taxıl Silosları, Qurutma, Təmizləmə və Optik Çeşidləmə",
        subtitle:
          "Aqroparklar və taxıl terminalları üçün ixrac standartlı taxıl saxlama silosları, zədəsiz yüksək məhsuldarlıqlı nəql, fasiləsiz qurutma və optik çeşidləmə xətləri.",
        diagramLabel: "DWG-03 · MƏHSUL YIĞIMINDAN SONRAKI AXIN",
        imageSrc: "/images/agro-grain-silos.jpg",
        imageAlt:
          "Sinklənmiş büzməli polad taxıl silosları və elevator körpüləri",
        standards: ["Eurocode / EN", "Z600 / Magnelis", "200–500 t/saat"],
        items: [
          {
            heading: "Büzməli Polad Siloslar və Nəql",
            detail:
              "Eurocode / EN standartlı yastı və konus dibli siloslar (Z600 / Magnelis örtük), 200–500 t/saat çalovlu elevatorlar və qapalı konveyerlər.",
          },
          {
            heading: "Fasiləsiz və Resirkulyasiyalı Qurutma",
            detail:
              "İstilik bərpa izolyasiyalı və aşağı emissiyalı odluqlara malik enerjiyə qənaət edən fasiləsiz və porsiyalı taxıl quruducuları.",
          },
          {
            heading: "Toxum Kalibrləmə və Optik Çeşidləmə",
            detail:
              "Yüksək məhsuldarlıqlı vibrasiyalı ilkin təmizləyicilər, sertifikatlı toxum üçün aerodinamik separatorlar, optik rəng çeşidləyiciləri və fındıq/qoz emalı xətləri.",
          },
        ],
      },
      {
        id: "safety-feed",
        number: "04",
        badge: "İstiqamət 04",
        title: "Silosların Struktur Monitorinqi, ATEX Təhlükəsizliyi və Yem Zavodları",
        subtitle:
          "Heyvandarlıq və quşçuluq kompleksləri üçün qeyri-invaziv struktur yük nəzarəti, sertifikatlaşdırılmış partlayış mühafizəsi və avtomatlaşdırılmış qarışıq yem istehsalı xətləri.",
        diagramLabel: "DWG-04 · ATEX VƏ YEM DOZALAMA SXEMİ",
        standards: ["ATEX Sertifikatlı", "Deformasiya Sensoru", "Mikro-Dozalama"],
        items: [
          {
            heading: "Qeyri-İnvaziv Silos Çəki və Yük Nəzarəti",
            detail:
              "Silos dayaq ayaqlarına bərkidilən xarici metal deformasiya sensorları ilə real vaxt stok çəkisi və həddindən artıq yüklənmə qoruması.",
          },
          {
            heading: "ATEX Partlayış və Qaz Təhlükəsizliyi",
            detail:
              "ATEX sertifikatlı partlayış ventilyasiya panelləri, sürətli izolyasiya klapanları, mərkəzi tozsorucu filtrasiya və fasiləsiz CO və temperatur monitorinqi.",
          },
          {
            heading: "Qarışıq Yem və TMR Xətləri",
            detail:
              "Yüksək homogenlikli bir və ikivallı mikserlər, premikslər üçün qravimetrik mikro-dozalama, qranullaşdırma/soyutma xətləri və TMR yem qarışdırıcıları.",
          },
        ],
      },
    ],
    bottomCtaTitle: "Aqropark, İstixana Kompleksi və ya Taxıl Terminalı Planlaşdırırsınız?",
    bottomCtaBody:
      "Açar təhvil təklif almaq üçün sahə parametrlərinizi, məhsuldarlıq hədəflərinizi və ya BOQ sənədinizi mühəndislik masamıza göndərin.",
    bottomCtaButton: "Aqro-Layihə Sorğusu Göndər →",
  },
  bioIpm: {
    metaTitle: "Bio-Həllər, Ağıllı IPM və İxrac Sertifikatlaşdırması",
    eyebrow: "DAVAMLI BİTKİ MÜHAFİZƏSİ VƏ İXRAC AUDİT HAZIRLIĞI",
    h1: "Bioloji Bitki Mühafizəsi, Ağıllı IPM və Beynəlxalq İxrac Sertifikatlaşdırması",
    subHeadline:
      "Qafqaz və Mərkəzi Asiyada sənaye istixanalarına, meyvə bağlarına və aqroholdinqlərə kimyəvi qalıqları azaltmağa, AB və Körfəz ölkələrinin (GCC) sərt MRL tələblərinə cavab verməyə və beynəlxalq auditlərdən ilk cəhddə keçməyə kömək edirik.",
    imageAlt:
      "Müasir şüşə istixanada quraşdırılmış günəş enerjili optik AI kamera tələsi",
    anchors: [
      { id: "core-scope", label: "Əsas İstiqamətlər" },
      { id: "packages", label: "Paketlər" },
      { id: "roadmap", label: "Sertifikatlaşdırma Mərhələləri" },
    ],
    coreScopeTitle: "3 Əsas İstiqamət: Biokontrol, Rəqəmsal Monitorinq və Sertifikatlaşdırma",
    coreScope: [
      {
        title: "Bioloji Vasitələr və Biokontrol",
        body: "Faydalı yırtıcı həşəratlar və gənələr (ağqanadlı, trips, hörümçək gənəsi, mənənə və tuta absoluta qarşı), istixana bombus arıları, növə məxsus feromon tələləri, cütləşməni pozan dispenserlər, yapışqanlı tələlər və aşağı MRL-li biopestisidlər.",
        badges: ["Faydalı Həşəratlar", "Bombus Arıları", "Feromon Tələləri"],
      },
      {
        title: "Rəqəmsal Zərərverici Monitorinqi",
        body: "Gündəlik növ sayımı aparan günəş enerjili avtomatlaşdırılmış süni intellekt (AI) kamera tələləri, smartfon yapışqanlı tələ skanlama tətbiqləri və dərəcə-gün (GDD) modelləşdirməsi üçün mikro-iqlim meteoroloji stansiyaları.",
        badges: ["Günəş AI Tələləri", "GDD Hava Stansiyası", "Bulud Telemetriyası"],
      },
      {
        title: "Beynəlxalq Sertifikatlaşdırma Hazırlığı",
        body: "GLOBALG.A.P. IFA v6 (Option 1 fərdi təsərrüfatlar və Option 2 istehsalçı qrupları), GRASP, Orqanik və HACCP / ISO 22000 üzrə texniki hazırlıq — boşluq təhlilləri, SOP-lar, sınaq auditləri, MRL laboratoriya koordinasiyası və akkreditə olunmuş Avropa Sertifikatlaşdırma Orqanı (CB) ilə əlaqə.",
        badges: ["GLOBALG.A.P. IFA v6", "GRASP", "ISO 22000 / HACCP"],
      },
    ],
    packagesSection: {
      title: "3 Səviyyəli Ağıllı IPM Paketləri",
      subtitle: "Təsərrüfat miqyasınızı seçərək uyğun paketlə tanış olun.",
      selectorLabel: "Təsərrüfat Miqyasını Seçin:",
      recommendedLabel: "Tövsiyə Edilən",
      tiers: [
        {
          id: "1",
          name: "Paket 1: IPM Audit Essentials",
          scaleTag: "1–3 ha istixana və ya 10–25 ha bağ",
          scaleKey: "small",
          scaleLabel: "Kiçik / Orta Təsərrüfat",
          hardwareTitle: "Avadanlıq və Proqram Təminatı",
          hardwareItems: [
            "Ənənəvi feromon və rəngli yapışqanlı tələlər",
            "Mobil tələ skanlama proqramı lisenziyası",
            "Bulud rəqəmsal müşahidə jurnalı",
          ],
          advisoryTitle: "Vasitələr və Məsləhət",
          advisoryItems: [
            "Bitki üzrə IPM Fəaliyyət Həddi Matrisi",
            "AB MRL uyğun preparat siyahısı və gözləmə müddəti cədvəli",
            "İlkin IPM Boşluq Təhlili",
            "GLOBALG.A.P. IFA v6 IPM Planı və SOP-lar",
            "1× auditöncəsi sınaq yoxlaması və 1 mövsümlük tələ materialları",
          ],
          ctaLabel: "Paket 1 Üçün Sorğu →",
        },
        {
          id: "2",
          name: "Paket 2: Smart IPM Export Pro",
          scaleTag: "3–10 ha istixana və ya 25–100 ha bağ",
          scaleKey: "commercial",
          scaleLabel: "Sənaye İstixana / Bağ",
          featured: true,
          hardwareTitle: "Avadanlıq və Bağlantı",
          hardwareItems: [
            "2–4× Günəş Enerjili Avtomatlaşdırılmış AI Kamera Tələsi",
            "Əlavə bloklar üçün yapışqanlı tələlər + mobil tətbiq",
            "12 aylıq Bulud Analitika Portalı + M2M LTE SIM kartlar",
          ],
          advisoryTitle: "Vasitələr və Məsləhət",
          advisoryItems: [
            "Fərdi Bioloji Nəzarət Buraxılış Planı (faydalı həşəratlar, tozlandırıcılar)",
            "İki həftədə bir uzaqdan görüntü təhlili və 2× sahə yoxlaması",
            "Tam IFA v6 IPM dosyesi + 1× Çoxqalıqlı MRL Laboratoriya Testi koordinasiyası",
            "1 mövsümlük əvəzedici lövhələr/feromonlar və RMA dəstəyi",
          ],
          ctaLabel: "Paket 2 Üçün Sorğu →",
        },
        {
          id: "3",
          name: "Paket 3: Precision IPM Enterprise",
          scaleTag: "100+ ha aqroholdinqlər, Aqroparklar və Option 2 Qrupları",
          scaleKey: "enterprise",
          scaleLabel: "Aqroholdinq / Qrup",
          hardwareTitle: "Avadanlıq və Bağlantı",
          hardwareItems: [
            "5–10+ Günəş Enerjili Avtomatlaşdırılmış AI Kamera Tələsi",
            "1× Avtomatlaşdırılmış Mikro-İqlim Meteoroloji Stansiyası",
            "Çoxsahəli Mərkəzi HQ Telemetriya Paneli + API/ERP ixracı + SMS/WhatsApp xəbərdarlıqları",
          ],
          advisoryTitle: "Vasitələr və Məsləhət",
          advisoryItems: [
            "Mövsümboyu Biokontrol və Aşağı Qalıq Proqramı",
            "Aylıq aqronom nəzarəti və müqavimət idarəetməsi",
            "Option 2 Daxili Nəzarət Sisteminin (ICS) qurulması",
            "Məhsul yığımından əvvəl MRL qalıq yoxlaması və sahədə texniki SLA",
          ],
          ctaLabel: "Paket 3 Üçün Sorğu →",
        },
      ],
      footnote:
        "Akkreditə olunmuş üçüncü tərəf Sertifikatlaşdırma Orqanının audit rüsumları və laboratoriya MRL analiz haqları şəffaf şəkildə faktiki xərc əsasında hesablanır.",
    },
    roadmapSection: {
      title: "4 Addımlı Sertifikatlaşdırma Dövrü",
      steps: [
        {
          step: "01",
          title: "Təsərrüfatda Boşluq Təhlili və MRL Yoxlaması",
          detail: "GLOBALG.A.P. IFA v6 / GRASP meyarları üzrə ilkin audit və qalıq riskinin qiymətləndirilməsi.",
        },
        {
          step: "02",
          title: "Tələlərin Quraşdırılması və Biokontrol Protokolu",
          detail: "AI kamera tələləri, feromon şəbəkəsi, tozlandırıcılar və biokontrol buraxılış cədvəli.",
        },
        {
          step: "03",
          title: "Avtomatlaşdırılmış Monitorinq və Sınaq Auditi",
          detail: "Rəqəmsal müşahidə jurnalları, MRL laboratoriya testi və tam sınaq yoxlaması.",
        },
        {
          step: "04",
          title: "Akkreditə Olunmuş Orqan Auditi və Sertifikat",
          detail: "Avropa Sertifikatlaşdırma Orqanı ilə koordinasiyalı audit və ilk cəhddə ixrac sertifikatı.",
        },
      ],
    },
  },
  industrialInfrastructure: {
    metaTitle: "Sənaye Mühəndisliyi və Kritik İnfrastruktur",
    eyebrow: "SƏNAYE VƏ KRİTİK İNFRASTRUKTUR BÖLMƏSİ",
    h1: "Sənaye Boru Kəməri Mühəndisliyi, İstilik Enerjisi və Kritik OT/SCADA Şəbəkələri",
    subHeadline:
      "Qafqaz və Mərkəzi Asiyada su və qaz təsərrüfatlarını, istehsal müəssisələrini, elektrik yarımstansiyalarını və EPC podratçılarını standartlara uyğun avadanlıq, inteqrasiya və ölçməyə əsaslanan işəsalma ilə dəstəkləyirik.",
    anchors: [
      { id: "pipelines-thermal", label: "İstiqamət A: Boru Kəmərləri və İstilik" },
      { id: "critical-it-ot", label: "İstiqamət B: Kritik İT və OT" },
    ],
    tracks: [
      {
        id: "pipelines-thermal",
        badge: "İstiqamət A",
        title: "Sənaye Mühəndisliyi, Boru Kəmərləri və İstilik Sistemləri",
        subtitle:
          "CNC data-loqqerli termoplastik qaynaq maşınları, yüksək təzyiqli boru kəmərləri və sənaye buxar/istilik bərpası sistemləri.",
        standards: ["PE100 / PP-R", "CNC Qaynaq Qeydiyyatı", "İstilik Bərpası"],
        diagramLabel: "DWG-06 · BORU QAYNAĞI VƏ İSTİLİK SXEMİ",
        imageSrc: "/images/industrial-infra.jpg",
        imageAlt:
          "Müasir sənaye obyektində yüksək təzyiqli HDPE boru kəmərləri və sənaye klapanları",
        items: [
          {
            heading: "Termoplastik Boru Qaynaq Avadanlıqları",
            detail:
              "HDPE, PP və PVDF təzyiq boru kəmərləri üçün CNC avtomatlaşdırılmış və qaynaq məlumatlarını qeydə alan hidravlik alın qaynaq maşınları; universal elektrofuziya idarəetmə blokları və emalatxana fitinq dəzgahları.",
          },
          {
            heading: "Yüksək Təzyiqli Maye Ötürmə və Boru Sistemləri",
            detail:
              "Tam PE100 və PP-R boru sistemləri, elektrofuziya və alın-qaynaq fitinqləri, sənaye bağlayıcı armaturlar və kommunal su, çirkab su və qaz paylayıcı şəbəkələr.",
          },
          {
            heading: "İstilik Mühəndisliyi, Buxar və Biokütlə Enerjisi",
            detail:
              "Yüksək səmərəli sənaye buxar qazanları, isti su generatorları, istilik dəyişdiriciləri, tüstü qazı ekonomayzerləri, tullantı istiliyinin bərpası və aqrar biokütlə parçalayıcıları.",
          },
        ],
      },
      {
        id: "critical-it-ot",
        badge: "İstiqamət B",
        title: "Kritik İT, OT Kibertəhlükəsizlik və Telekom Şəbəkələri",
        subtitle:
          "Sənaye IP/MPLS marşrutlaşdırıcıları, aparat baypaslı OT təhlükəsizlik divarları, yarımstansiya tele-mühafizəsi və 1G–200G şəbəkə doğrulaması.",
        standards: [
          "IP/MPLS",
          "RFC 2544",
          "IEC 61850",
          "IEEE 1588 PTP",
          "EN 61000-4 Level 3",
        ],
        diagramLabel: "DWG-07 · YARIMSTANSİYA OT/SCADA VƏ PTP TOPOLOGİYASI",
        items: [
          {
            heading: "Sənaye Magistralı və Operator Marşrutlaşdırması",
            detail:
              "-20°C ilə +60°C işləmə diapazonlu modulyar 1U və 2U IP/MPLS marşrutlayıcılar (1G–100G); idarəolunan Layer 2/3 sənaye Ethernet kommutatorları, serial-to-IP serverlər və sənaye səs/PA platformaları.",
          },
          {
            heading: "OT / SCADA Kibertəhlükəsizlik və Giriş Nəzarəti",
            detail:
              "Optik/mis aparat baypas kartlı sənaye yeni nəsil təhlükəsizlik divarları; daxili OT cihaz profilli (mühafizə releləri, RTU, PLC, IED) paylanmış NAC arxitekturaları.",
          },
          {
            heading: "Yarımstansiya Tele-Mühafizə, Sinxronizasiya və Doğrulama",
            detail:
              "Yarımstansiya tele-mühafizə terminalları, GNSS PTP Grandmaster zaman serverləri və aparat əsaslı 1G–200G Şəbəkə Doğrulama Platformaları (RFC 2544, ITU-T Y.1564, IEEE 1588 PTP, IEC 61850 GOOSE/SV, EN 61000-4 Level 3 EMC).",
          },
        ],
      },
    ],
    bottomCtaTitle: "Boru Kəməri, İstilik Stansiyası və ya Yarımstansiya OT/SCADA Tenderi Planlaşdırırsınız?",
    bottomCtaButton: "Sənaye Sorğusu Göndər →",
  },
  turnkeyDelivery: {
    metaTitle: "Açar Təhvil Layihə İcrası və EPC Həlləri",
    eyebrow: "VAHİD MƏSULİYYƏT • EPC VƏ AÇAR TƏHVİLİ İCRA",
    h1: "Qafqaz və Mərkəzi Asiya üzrə Tam Açar Təhvil Layihə İcrası",
    subHeadline:
      "Novaltron Avropa və Türkiyə mühəndislik təchizatını, konsolidasiya olunmuş tranzit logistikasını, ölçməyə əsaslanan FAT/SAT işəsalma prosesini və istismar dövrü RMA dəstəyini vahid müqavilə altında birləşdirərək çoxtəchizatçılı dağınıqlığı aradan qaldırır.",
    anchors: [
      { id: "workflow", label: "5 Addımlı İcra Modeli" },
      { id: "execution-pillars", label: "İcra və Keyfiyyət Qapıları" },
      { id: "benchmarks", label: "Nümunəvi Layihə Həcmləri" },
    ],
    workflowTitle: "5 Addımlı İcra Modeli",
    workflowSubtitle:
      "İlkin sahə təhlili və sistem mühəndisliyindən sərhədlərarası tranzitə, FAT/SAT sınaqlarına və RMA dəstəyinə qədər.",
    steps: [
      {
        step: "01",
        title: "İlkin Araşdırma və Texniki Təhlil",
        description: "İnfrastruktur auditi, aqronomik/mühəndislik hesablamaları və tender uyğunluq matrisi.",
        deliverable: "Uyğunluq Matrisi və Hesabat",
      },
      {
        step: "02",
        title: "Fərdi Sistem Mühəndisliyi",
        description: "Avadanlıq konfiqurasiyası, proses axını və inteqrasiya olunmuş layihə qrafiki.",
        deliverable: "Sistem Sxemləri və Qrafik",
      },
      {
        step: "03",
        title: "Sərhədlərarası Təchizat və Tranzit",
        description: "Tbilisi vasitəsilə çoxvalyutalı Avropa/Türkiyə təchizatı, ixrac sənədləşməsi və gömrük.",
        deliverable: "Yük Konsolidasiyası və Gömrük Dosyesi",
      },
      {
        step: "04",
        title: "Sahədə İnteqrasiya və FAT/SAT",
        description: "Mexaniki/elektrik quraşdırma, kalibrləmə və Zavod/Sahə Qəbul Sınaqları.",
        deliverable: "Təsdiqlənmiş FAT/SAT Protokolları",
      },
      {
        step: "05",
        title: "İstismar Dəstəyi və RMA",
        description: "Vahid zəmanət idarəetməsi, ehtiyat hissələri logistikası və sahə mühəndisliyi.",
        deliverable: "Regional Ehtiyat Hissələri və Zəmanət",
      },
    ],
    pillarsTitle: "İcra Dayakları və Keyfiyyət Nəzarət Qapıları",
    pillarsSubtitle:
      "Çoxsahəli layihələrin vaxtında və audita hazır şəkildə təhvil verilməsi üçün təchizat, sahədə işəsalma və təhvil sonrası istismar mərhələlərində strukturlaşdırılmış nəzarət.",
    executionPillars: [
      {
        badge: "Mərhələ 01 • Təchizat və Tranzit",
        title: "Konsolidasiya Olunmuş Sərhədlərarası Təchizat və Logistika",
        body: "Vahid kommersiya qrafiki əsasında Tbilisi mərkəzimiz vasitəsilə seçilmiş Avropa və Türkiyə ixtisaslaşmış istehsalçıları ilə birbaşa müqavilələşmə.",
        bullets: [
          "Çoxvalyutalı OEM təchizatı və vahid kommersiya hesablaşmaları.",
          "Sinxronlaşdırılmış zavod buraxılışı, yük konsolidasiyası və regional gömrük tranziti.",
          "Layihə mərhələlərinə uyğunlaşdırılmış tam ixrac və gömrük dosyeləri.",
        ],
        tags: ["Avropa / TR OEM", "Yük Konsolidasiyası", "Gömrük Tranziti"],
      },
      {
        badge: "Mərhələ 02 • Doğrulama",
        title: "Sahədə İnteqrasiya, FAT/SAT və Sahə HSE İntizamı",
        body: "Rəsmi istismara təhvil verilməzdən əvvəl həm istehsal zavodunda, həm də quraşdırma sahəsində ölçməyə əsaslanan texniki doğrulama.",
        bullets: [
          "Tender uyğunluq matrisinə əsasən göndəriş öncəsi Zavod Qəbul Sınaqları (FAT).",
          "Mexaniki, elektrik və idarəetmə sistemlərinin inteqrasiyası və kalibrlənməsi.",
          "Ciddi sahə HSE nəzarəti altında imzalanmış Sahə Qəbul Sınağı (SAT) protokolları.",
        ],
        tags: ["FAT / SAT Protokolları", "Kalibrləmə", "Sahə HSE"],
      },
      {
        badge: "Mərhələ 03 • Davamlılıq",
        title: "İstismar Dəstəyi, Ehtiyat Hissələri və Vahid Masa RMA",
        body: "Müştərilərin ayrı-ayrı xarici zəmanət prosedurları ilə məşğul olmaması üçün işəsalma sonrası davamlılığın vahid regional masadan idarə olunması.",
        bullets: [
          "Mərkəzləşdirilmiş zəmanət idarəetməsi və istehsalçı RMA koordinasiyası.",
          "Kritik ehtiyat hissələrinin planlaşdırılması və operativ təchizatı.",
          "Operator təlimi və layihənin istismar dövrü boyu regional sahə mühəndisliyi dəstəyi.",
        ],
        tags: ["Vahid Masa RMA", "Kritik Ehtiyat Hissələri", "Sahə SLA"],
      },
    ],
    scopesTitle: "Nümunəvi Açar Təhvil Layihə Həcmləri",
    scopesSubtitle:
      "Regional dəhlizimiz üzrə aqro-sənaye holdinqləri, taxıl terminalları və infrastruktur tenderləri üçün strukturlaşdırılmış çoxsahəli mühəndislik paketləri.",
    bottomCtaTitle: "Çoxsahəli Açar Təhvil Layihə və ya Tender Planlaşdırırsınız?",
    bottomCtaBody:
      "Konsolidasiya olunmuş icra planı və kommersiya təklifi üçün sahə parametrlərini, texniki şərtləri və ya BOQ cədvəlini Tbilisi mühəndislik masamızla paylaşın.",
    bottomCtaButton: "Açar Təhvil Təklif İstə →",
    aboutCrossLinkLabel: "Haqqımızda və Korporativ Uyğunluq",
  },
  aboutCompliance: {
    metaTitle: "Haqqımızda və Korporativ Uyğunluq",
    eyebrow: "KORPORATİV ARXİTEKTURA • İDARƏETMƏ VƏ UYĞUNLUQ",
    h1: "Regional Korporativ Mərkəz və Sərhədlərarası İnstitusional Uyğunluq",
    subHeadline:
      "Gürcüstanın Tbilisi şəhərindəki Novaltron LLC vasitəsilə fəaliyyət göstərərək Qərbi Avropa korporativ idarəetməsini şəffaf ticarət sənədləşməsi və Qafqaz/Mərkəzi Asiya üzrə EPC təchizatçı hazırlığı ilə birləşdiririk.",
    anchors: [
      { id: "corporate-structure", label: "Korporativ Struktur" },
      { id: "governance", label: "İdarəetmə və Standartlar" },
      { id: "compliance-readiness", label: "İnstitusional Hazırlıq" },
    ],
    corporateTitle: "Regional Korporativ Mərkəz",
    corporateSubtitle:
      "Avropa və Türkiyə istehsalını Qafqaz və Mərkəzi Asiyadakı layihə sahələri ilə birləşdirən logistika qovşağında yerləşən vahid hüquqi və əməliyyat qurumu.",
    corporateHubName: "Novaltron LLC (Tbilisi, Gürcüstan — შპს ნოვალტრონი)",
    corporateHubRole: "Beynəlxalq Təchizat, Ticarət Maliyyələşdirməsi və Regional Tranzit Mərkəzi",
    corporateHubPoints: [
      "Avropa və Türkiyə istehsalçıları ilə birbaşa müqavilələr və çoxvalyutalı hesablaşmalar.",
      "Qafqaz və Mərkəzi Asiya üzrə strukturlaşdırılmış yükdaşıma, gömrük tranziti və logistika.",
      "Açar təhvil aqro-sənaye və kritik infrastruktur layihələrində vahid kommersiya məsuliyyəti.",
    ],
    corridorCountries: ["Azərbaycan", "Gürcüstan", "Özbəkistan", "Qazaxıstan", "Türkiyə"],
    corridorDiagramLabel: "REGİONAL TRANZİT VƏ TƏCHİZAT DƏHLİZİ",
    governanceTitle: "İcra Modeli, İdarəetmə və Standartlar",
    governanceSubtitle:
      "Bank və EPC audit tələblərinə uyğun qurulmuş intizamlı texniki standartlar, şəffaf kommersiya sənədləşməsi və etibarlı mühəndislik tərəfdaşlıqları.",
    operatingModelHeading: "Regional İnteqrator İcra Modeli",
    operatingModelBody:
      "Novaltron Qərbi Avropa korporativ idarəetməsini intizamlı regional layihə icrası ilə birləşdirir — seçilmiş Avropa və Türkiyə istehsalçıları və sertifikatlı işəsalma komandaları ilə dəstəklənən vahid Tbilisi mühəndislik inteqrasiya mərkəzi kimi fəaliyyət göstərir.",
    standardsHeading: "Beynəlxalq Standartlara Uyğunluq",
    standardsBody:
      "Bütün mühəndislik sistemləri və təchizat prosesləri beynəlxalq standartlara tam uyğundur:",
    standardsList: [
      "ISO 9001",
      "ISO 14001",
      "ISO 22000",
      "CE",
      "ATEX",
      "Eurocode / EN",
      "GLOBALG.A.P.",
    ],
    documentationHeading: "Şəffaf Ticarət Sənədləşməsi və HSE",
    documentationItems: [
      "Tam audit olunan ticarət sənədləri: Kommersiya İnvoysları, Qablaşdırma Siyahıları və Mənşə Sertifikatları.",
      "Ölçməyə əsaslanan Zavod Qəbul Sınağı (FAT) və Sahə Qəbul Sınağı (SAT) protokolları.",
      "Bütün quraşdırma sahələrində ciddi Əməyin Mühafizəsi və Texniki Təhlükəsizlik (HSE) intizamı.",
    ],
    complianceTitle: "İnstitusional Hazırlıq və Təchizatçı Pre-Kvalifikasiyası",
    complianceSubtitle:
      "Beynəlxalq ticarət banklarının, EPC satınalma auditorlarının və aqrar ixrac sertifikatlaşdırma qurumlarının tələblərinə cavab vermək üçün strukturlaşdırılmışdır.",
    bottomCtaTitle: "Korporativ Pre-Kvalifikasiya və ya Uyğunluq Sənədləri Lazımdır?",
    bottomCtaBody:
      "AVL qeydiyyat paketləri, NDA altında referans layihə həcmləri və ya rəsmi tender sorğuları üçün Tbilisi korporativ və mühəndislik masamızla əlaqə saxlayın.",
    bottomCtaButton: "Korporativ Masa ilə Əlaqə →",
    turnkeyCrossLinkLabel: "Açar Təhvil İcra Modelinə Bax",
  },
  contact: {
    metaTitle: "Texniki Məsləhət və Sorğu Portalı",
    eyebrow: "TEXNİKİ MƏSLƏHƏT VƏ RFQ MASASI",
    h1: "Layihə Sorğusu (RFQ) və ya Texniki Məsləhət Müraciəti Göndərin",
    subHeadline:
      "Layihə parametrlərini, təsərrüfat sahəsini, texniki şərtləri və ya BOQ cədvəlini paylaşın. Regional mühəndis və aqronom mütəxəssislərimiz 24–48 iş saatı ərzində cavab verəcəklər.",
    directDeskTitle: "Birbaşa Mühəndislik Masası",
    directDeskBody:
      "Bütün RFQ müraciətləri texniki qiymətləndirmə və kommersiya təklifi hazırlanması üçün Tbilisi əməliyyat masamıza yönləndirilir.",
    responseSla: "Cavab müddəti: 24–48 iş saatı",
    socialLabel: "Rəsmi Kanallar",
    privacyNotice: "BOQ faylları və layihə məlumatları ciddi B2B məxfiliyi ilə qorunur:",
    legalLinkLabel: "Məxfilik və Hüquqi Bildiriş",
    form: {
      fullNameLabel: "Ad və Soyad",
      fullNamePlaceholder: "Məs. Leyla Məmmədova",
      companyLabel: "Şirkət / Təşkilat",
      companyPlaceholder: "Məs. Xəzər Aqropark MMC",
      emailLabel: "Korporativ E-poçt",
      emailPlaceholder: "ad@shirket.az",
      phoneLabel: "Telefon / WhatsApp",
      phonePlaceholder: "+994 / +995 / +998 ...",
      countryLabel: "Layihə Ölkəsi / Regionu",
      countryPlaceholder: "Ölkə və ya regionu seçin",
      countries: [
        "Azərbaycan",
        "Gürcüstan",
        "Özbəkistan",
        "Qazaxıstan",
        "Türkiyə",
        "Digər Mərkəzi Asiya / Qafqaz",
      ],
      divisionLabel: "Əsas Bölmə",
      divisionPlaceholder: "Mühəndislik bölməsini seçin",
      divisions: [
        { value: "agro-irrigation", label: "Aqro-Sənaye: Dəqiq Suvarma və Su İdarəetməsi" },
        { value: "agro-greenhouses", label: "Aqro-Sənaye: Açar Təhvil Sənaye İstixanaları" },
        { value: "agro-grain", label: "Aqro-Sənaye: Taxıl Silosları, Qurutma və Optik Çeşidləmə" },
        { value: "agro-safety-feed", label: "Aqro-Sənaye: Silos Təhlükəsizliyi və Yem Zavodları" },
        { value: "bio-ipm", label: "Bio-Həllər: Ağıllı IPM və İxrac Sertifikatlaşdırması" },
        { value: "industrial-pipelines", label: "Sənaye Mühəndisliyi: Boru Kəmərləri və İstilik Sistemləri" },
        { value: "critical-it-ot", label: "Kritik İnfrastruktur: İT, OT Kibertəhlükəsizlik və Telekom" },
        { value: "multi-division", label: "Çoxbölməli / Açar Təhvil EPC Tenderi" },
      ],
      timelineLabel: "Təxmini Layihə Müddəti",
      timelinePlaceholder: "Məs. 2026-cı il II rüb",
      scopeLabel: "Layihənin Əhatə Dairəsi və Texniki Xülasə",
      scopePlaceholder:
        "Məhsuldarlıq (t/saat, ha), hədəf standartlar, sahə şəraiti və əsas texniki tələbləri qeyd edin...",
      boqLabel: "BOQ / Tender Faylını Yüklə (.pdf, .xlsx, .docx, .zip)",
      boqHint: "Könüllü — maksimum 25 MB",
      requiredTag: "Mütləq",
      optionalTag: "Könüllü",
      submitButton: "Layihə Sorğusunu Göndər →",
      submittingButton: "Sorğu göndərilir...",
      validationErrors: {
        required: "Zəhmət olmasa bu mütləq sahəni doldurun.",
        email: "Zəhmət olmasa düzgün korporativ e-poçt daxil edin.",
      },
      confirmationTitle: "Layihə Sorğusu Qəbul Edildi",
      referenceIdLabel: "Sorğu Nömrəsi",
      confirmationBody:
        "Təşəkkür edirik. Müraciətiniz Novaltron-un regional mühəndislik masasına (info@novaltron.com) yönləndirildi. Mütəxəssisimiz texniki şərtlərinizi nəzərdən keçirərək 1–2 iş günü ərzində sizinlə əlaqə saxlayacaq.",
      confirmationReset: "Yeni Sorğu Göndər",
      tierPreselectedNote: "Ağıllı IPM matrisindən seçilib: Paket",
    },
  },
  legal: {
    metaTitle: "Məxfilik Siyasəti və Hüquqi Bildiriş",
    eyebrow: "KORPORATİV UYĞUNLUQ VƏ MƏLUMATLARIN QORUNMASI",
    h1: "Məxfilik Siyasəti, BOQ Məxfiliyi və Hüquqi Bildiriş",
    subHeadline:
      "Novaltron LLC (Tbilisi, Gürcüstan) üzrə məlumatların idarə edilməsi, tender məxfiliyi və hüquqi bildiriş.",
    updatedLabel: "Qüvvədədir: 2026 · Versiya 1.0",
    sections: [
      {
        heading: "1. Hüquqi Şəxs və Fəaliyyət Sahəsi",
        body: [
          "Bu veb-sayt (www.novaltron.com) Qafqaz və Mərkəzi Asiya üzrə mühəndislik inteqrasiyası, təchizat və regional tranzit mərkəzi kimi fəaliyyət göstərən Novaltron LLC (შპს ნოვალტრონი, Tbilisi, Gürcüstan) tərəfindən idarə olunur.",
          "Rəsmi korporativ yazışmalar və uyğunluq sorğuları üçün info@novaltron.com ünvanı ilə əlaqə saxlayın.",
        ],
      },
      {
        heading: "2. RFQ Məlumatları və Tender / BOQ Məxfiliyi",
        body: [
          "RFQ portalı vasitəsilə göndərilən məlumatlar və əlavə fayllar (BOQ cədvəlləri, sahə parametrləri və texniki şərtlər) yalnız mühəndislik hesablamaları, uyğunluq matrisinin və kommersiya təklifinin hazırlanması üçün istifadə olunur.",
          "Müştəri tender sənədləri məxfi kommersiya məlumatı kimi qorunur və tələb olunan sistemin qiymətləndirilməsi üçün zəruri olan seçilmiş tərəfdaşlar istisna olmaqla üçüncü tərəflərə ötürülmür.",
        ],
      },
      {
        heading: "3. Məlumatların Saxlanması və Hüquqlar",
        body: [
          "Korporativ əlaqə məlumatları yalnız kommersiya qiymətləndirməsi, layihə icrası və qanunvericiliklə müəyyən edilmiş uçot öhdəlikləri müddətində saxlanılır.",
          "İstənilən vaxt info@novaltron.com ünvanına müraciət edərək məlumatlarınıza giriş, düzəliş və ya silinmə tələb edə bilərsiniz.",
        ],
      },
      {
        heading: "4. Texniki Göstəricilər Üzrə Bildiriş",
        body: [
          "Saytda yerləşdirilmiş bütün mühəndislik təsvirləri və sxemlər beynəlxalq standartlara (ISO, CE, ATEX, Eurocode / EN, GLOBALG.A.P.) uyğun nümunəvi sistem imkanlarını əks etdirir. Yekun texniki zəmanətlər yalnız imzalanmış müqavilələrdə və FAT/SAT protokollarında müəyyən edilir.",
        ],
      },
    ],
  },
};
