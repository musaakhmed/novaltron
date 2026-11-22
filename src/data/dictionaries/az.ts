import type { SiteDictionary } from "./types";

export const az: SiteDictionary = {
  meta: {
    siteName: "Novaltron",
    defaultTitle: "Novaltron | Aqrosənaye sistemləri və kritik infrastruktur",
    defaultDescription:
      "Qafqaz və Mərkəzi Asiyada sərhədlərarası aqrosənaye mühəndisliyi, bioloji bitki mühafizəsi və kritik infrastruktur inteqrasiyası — Novaltron LLC (Tbilisi, Gürcüstan).",
    skipToContent: "Əsas texniki məzmuna keç",
  },
  nav: {
    links: [
      { label: "Aqrosənaye", href: "/agro-solutions" },
      { label: "Bio və ağıllı IPM", href: "/bio-ipm" },
      { label: "Sənaye və infrastruktur", href: "/industrial-infrastructure" },
      { label: "Açar təhvil", href: "/turnkey-delivery" },
      { label: "Biz kimik", href: "/about" },
    ],
    primaryCta: "Qiymət təklifi istə",
    menuOpenLabel: "Naviqasiya menyusunu aç",
    menuCloseLabel: "Naviqasiya menyusunu bağla",
    languageLabel: "Dil seçin",
  },
  footer: {
    summary:
      "NOVALTRON — Qafqaz və Mərkəzi Asiyada sərhədlərarası aqrosənaye mühəndisliyi, bioloji bitki mühafizəsi və kritik infrastruktur inteqrasiyası.",
    hubLabel: "Əməliyyat mərkəzi",
    hubValue: "Novaltron LLC (შპს ნოვალტრონი) — Tbilisi, Gürcüstan",
    corridorLabel: "Regional dəhliz",
    corridorValue: "Azərbaycan · Gürcüstan · Özbəkistan · Qazaxıstan · Türkiyə",
    contactsLabel: "Əlaqə",
    socialLabel: "Sosial şəbəkələr",
    navigationLabel: "Bölmələr və səhifələr",
    standardsLabel: "Tətbiq olunan standartlar",
    legalLinkLabel: "Məxfilik və hüquqi bildiriş",
    copyright: "© 2026 Novaltron LLC. Bütün hüquqlar qorunur.",
  },
  home: {
    eyebrow: "AQROSƏNAYE VƏ İNFRASTRUKTUR MÜHƏNDİSLİYİ • QAFQAZ VƏ MƏRKƏZİ ASİYA",
    h1: "Qafqaz və Mərkəzi Asiyada açar təhvil aqrosənaye sistemləri və kritik infrastruktur",
    subHeadline:
      "Novaltron Avropa və Türkiyənin qabaqcıl mühəndislik texnologiyalarını regional layihə icrası ilə birləşdirir və Tbilisidəki mərkəzi vasitəsilə dəqiq suvarma sistemləri, sənaye tipli istixana kompleksləri, taxılın qəbulu, qurudulması və saxlanması terminalları, bioloji bitki mühafizəsi və sənaye infrastrukturu həlləri təqdim edir.",
    primaryCta: "Layihə sorğusu göndər →",
    secondaryCta: "Aqrar həllərə bax",
    heroImageAlt:
      "Həndəsi formalı yaşıl tarlalar üzərində pivot tipli dairəvi suvarma sistemi və arxa planda sənaye tipli şüşə istixanaların havadan görünüşü",
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
        sublabel: "Pivot suvarma · EC/pH · Günəş enerjisi",
        variant: "irrigation",
        href: "/agro-solutions#irrigation",
      },
      {
        code: "DWG-02",
        label: "İSTİXANALAR",
        sublabel: "Venlo şüşə · İstilik dövrəsi",
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
        label: "SƏNAYE BORU KƏMƏRLƏRİ VƏ ŞƏBƏKƏLƏR",
        sublabel: "PE100 · Buxar · OT/SCADA",
        variant: "industrial-dual",
        href: "/industrial-infrastructure",
      },
    ],
    heroShowcase: {
      sectionTitle: "Dörd inteqrasiya olunmuş mühəndislik istiqaməti — canlı sxemdə",
      sectionSubtitle:
        "Dəqiq sahə hidravlikası və Venlo istixana iqlim dövrələrindən tutmuş Eurocode taxıl terminallarına və kritik sənaye boru/OT şəbəkələrinə qədər hər bir arxitekturanı interaktiv şəkildə araşdırın.",
      liveLabel: "CANLI SXEM",
      pausedLabel: "DAYANDIRILIB",
      pauseButtonLabel: "Animasiyanı dayandır",
      playButtonLabel: "Animasiyanı başlat",
      tablistLabel: "Əsas mühəndislik arxitekturası istiqamətləri",
      details: {
        irrigation: {
          title: "Dəqiq suvarma və günəş enerjili nasos sistemləri",
          summary:
            "Avtomatik yuyulan kanal filtrləri, çoxkanallı EC/pH fertiqasiya blokları, günəş enerjili nasos stansiyası və ultrasəs sahə telemetriyası ilə təchiz olunmuş pivot tipli dairəvi və xətti hərəkətli suvarma sistemləri.",
          ctaLabel: "Suvarma sistemlərinə bax",
          standards: ["EC/pH telemetriyası", "Günəş nasosları", "Avtomatik filtrasiya"],
          metrics: [
            { label: "Hidravlik idarəetmə", value: "EC/pH + VFD" },
            { label: "Monitorinq", value: "Ultrasəs sərfölçən" },
          ],
        },
        greenhouses: {
          title: "Venlo şüşə istixanaları və istiliyin utilizasiyası konturu",
          summary:
            "Motorlu dam ventilyasiyası, termal kölgələndirmə pərdələri, asma hidroponika novları, baca qazlarından CO₂ və istiliyin utilizasiyası ilə təchiz olunmuş, Eurocode standartlarına uyğun çoxaşırımlı şüşə və polietilen istixanalar.",
          ctaLabel: "İstixana sistemlərinə bax",
          standards: ["Eurocode / EN", "Venlo və polietilen", "CO₂ utilizasiyası"],
          metrics: [
            { label: "Konstruksiya", value: "EN külək / qar" },
            { label: "İqlim dövrəsi", value: "Qazan + CO₂" },
          ],
        },
        "grain-silos": {
          title: "Yüksək məhsuldarlıqlı taxıl terminalları və optik çeşidləmə",
          summary:
            "İlkin təmizləyicilər, fasiləsiz qüllə quruducuları, noriyalar, Z600 sinklənmiş Eurocode silosları və 500 t/saata qədər optik rəng çeşidləyicilərini birləşdirən tam xətlər.",
          ctaLabel: "Taxıl və toxum xətlərinə bax",
          standards: ["Z600 sinklənmiş", "Eurocode / EN", "Optik çeşidləmə"],
          metrics: [
            { label: "Nəql məhsuldarlığı", value: "200–500 t/saat" },
            { label: "Silos örtüyü", value: "Z600 polad" },
          ],
        },
        "industrial-dual": {
          title: "HDPE/PE100 boru kəmərləri, buxar və kritik OT/SCADA",
          summary:
            "Qaynaq parametrlərini qeydə alan CNC idarəli uc-uca qaynaq, PE100 xətləri və utilizator qazanlarını 1G–200G IP/MPLS, aparat baypaslı OT təhlükəsizlik divarları və GNSS PTP sinxronizasiyası ilə birləşdirən iki istiqamətli kompleks həll.",
          ctaLabel: "Sənaye və OT sistemlərinə bax",
          standards: ["PE100 / CNC qaynaq", "IP/MPLS 100G", "IEC 61850 / PTP"],
          metrics: [
            { label: "İş temperaturu", value: "-20°C..+60°C" },
            { label: "Verifikasiya", value: "1G–200G RFC 2544" },
          ],
        },
      },
    },
    agroSection: {
      bandNumber: "01",
      bandMarker: "AQROSƏNAYE MÜHƏNDİSLİYİ",
      h2: "Tarlaların suvarılmasından ixrac keyfiyyətli saxlanmaya qədər tam aqrar infrastruktur",
      intro:
        "Azərbaycan, Gürcüstan, Özbəkistan və Qazaxıstanda aqroparklar, iri fermer təsərrüfatları, istixanalar və taxıl terminalları üçün kompleks aqrar modernləşdirmə layihələri hazırlayır, avadanlıqla təchiz edir və istismara veririk.",
      viewAllCta: "Bütün aqrosənaye həlləri →",
      cards: [
        {
          id: "irrigation",
          code: "01.A",
          title: "Dəqiq suvarma və su idarəetməsi",
          description:
            "Genişmiqyaslı pivot tipli dairəvi və xətti hərəkətli suvarma sistemləri, təzyiq kompensasiyalı damcı suvarma xətləri, avtomatlaşdırılmış EC/pH gübrələmə (fertiqasiya) qurğuları, avtomatik yuyulan filtrasiya stansiyaları, günəş enerjili nasos sistemləri və ağıllı su telemetriyası.",
          ctaLabel: "Su və suvarma həlləri →",
          anchor: "/agro-solutions#irrigation",
          standards: ["EC/pH telemetriyası", "Günəş nasosları", "Avtomatik filtrasiya"],
          diagramVariant: "irrigation",
          imageSrc: "/images/agro-irrigation.jpg",
          imageAlt:
            "Səhər işığında əkin sıralarını suvaran pivot tipli dairəvi suvarma sistemi və paslanmayan polad filtrasiya qovşağı",
        },
        {
          id: "greenhouses",
          code: "01.B",
          title: "Açar təhvil sənaye istixanaları və iqlim nəzarəti",
          description:
            "Regional külək və qar yüklərinə davamlı şüşə və çoxaşırımlı polietilen istixana konstruksiyaları, avtomatlaşdırılmış havalandırma, enerjiyə qənaət edən və kölgələndirici pərdələr, yüksək səmərəli qazanxana sistemləri və hidroponik yetişdirmə xətləri.",
          ctaLabel: "İstixana sistemləri →",
          anchor: "/agro-solutions#greenhouses",
          standards: ["Eurocode / EN", "Venlo və polietilen", "Hidroponika"],
          diagramVariant: "greenhouses",
          imageSrc: "/images/agro-greenhouse.jpg",
          imageAlt:
            "Asma hidroponik novlar və istilik pərdələri ilə təchiz edilmiş müasir Venlo sənaye şüşə istixanasının daxili görünüşü",
        },
        {
          id: "grain-silos",
          code: "01.C",
          title: "Taxıl silosları, qurutma və optik çeşidləmə",
          description:
            "Qalın Z600 sink örtüklü, Eurocode/EN standartlarına uyğun büzməli polad siloslar, yüksək məhsuldarlıqlı nəql xətləri (200–500 t/saat), enerjiyə qənaət edən fasiləsiz taxıl quruducuları, aerodinamik toxum təmizləyiciləri və optik rəng çeşidləyiciləri.",
          ctaLabel: "Taxıl və toxum xətləri →",
          anchor: "/agro-solutions#grain-silos",
          standards: ["Eurocode / EN", "Z600 sinkləmə", "200–500 t/saat"],
          diagramVariant: "grain-silos",
          imageSrc: "/images/agro-grain-silos.jpg",
          imageAlt:
            "Sinklənmiş büzməli polad taxıl silosları, üst konveyer qalereyaları və noriya qüllələri",
        },
        {
          id: "safety-feed",
          code: "01.D",
          title: "Silosların struktur monitorinqi, ATEX təhlükəsizliyi və yem zavodları",
          description:
            "Silos dayaqlarındakı metal deformasiyasına əsaslanan qeyri-invaziv çəki ölçmə və həddindən artıq yüklənmədən mühafizə, ATEX sertifikatlı partlayış təzyiqini boşaldan panellər və CO qaz monitorinqi, həmçinin avtomatlaşdırılmış qarışıq yem dozalama və qranullaşdırma xətləri.",
          ctaLabel: "Təhlükəsizlik və yem sistemləri →",
          anchor: "/agro-solutions#safety-feed",
          standards: ["ATEX", "CO və yük nəzarəti", "Yem qranullaşdırılması"],
          diagramVariant: "safety-feed",
        },
      ],
    },
    bioBanner: {
      bandNumber: "02",
      bandMarker: "İXRAC HAZIRLIĞI VƏ DAYANIQLI BİTKİ MÜHAFİZƏSİ",
      h2: "Bioloji bitki mühafizəsi, ağıllı IPM və beynəlxalq ixrac sertifikatlaşdırması",
      body: "Avropa İttifaqı, Körfəz ölkələri (GCC) və müasir pərakəndə satış şəbəkələrinin pestisid qalıqlarının yol verilən maksimum səviyyələrinə (MRL) dair sərt tələblərinə tam cavab verin və beynəlxalq auditlərdən ilk cəhddə keçin. Novaltron faydalı həşəratları, istixana tozlandırıcılarını, günəş enerjili avtomatlaşdırılmış süni intellekt (AI) kamera tələlərini və GLOBALG.A.P. IFA v6, GRASP, üzvi istehsal (Organic) və HACCP / ISO 22000 audit hazırlığını birləşdirən bitkilərin inteqrir olunmuş mühafizəsi (IPM) proqramları təqdim edir.",
      imageAlt:
        "Müasir şüşə istixanada sağlam bitki sıraları arasında quraşdırılmış günəş enerjili optik AI kamera tələsi",
      highlights: [
        "Biokontrol və tozlandırma",
        "Avtomatlaşdırılmış zərərverici telemetriyası",
        "3 səviyyəli kommersiya paketləri (Audit Essentials, Export Pro, Precision Enterprise)",
      ],
      cta: "Paketlərə bax →",
    },
    industrialSection: {
      bandNumber: "03",
      bandMarker: "SƏNAYE VƏ İNFRASTRUKTUR BÖLMƏSİ",
      h2: "Kommunal, enerji və kritik şəbəkə infrastrukturu həlləri",
      intro:
        "Aqrosənaye sistemləri ilə yanaşı, Novaltron beynəlxalq standartlara uyğun boru kəməri mühəndisliyi, istiliyin utilizasiyası və kritik OT/SCADA şəbəkələrinin verifikasiyası həlləri təqdim edir.",
      imageAlt:
        "Müasir sənaye obyektində yüksək təzyiqli qara HDPE boru kəmərləri və paslanmayan polad sənaye armaturları",
      trackA: {
        badge: "İstiqamət A • Boru kəmərləri və istilik",
        title: "Sənaye mühəndisliyi, boru kəmərləri və istilik sistemləri",
        anchor: "/industrial-infrastructure#pipelines-thermal",
        bullets: [
          "Qaynaq parametrlərini qeydə alan CNC idarəli hidravlik uc-uca və elektromuftalı qaynaq avadanlığı, boruların hazırlanması alətləri və fitinq istehsalı üçün sex dəzgahları.",
          "Yüksək təzyiqli HDPE/PP boru kəmərləri və maye nəqli şəbəkələri, sənaye armaturu, su və qaz paylayıcı kommunal şəbəkələr.",
          "Yüksək səmərəli sənaye buxar qazanları, ekonomayzerlər, tullantı istiliyinin utilizasiyası və aqrar biokütlə emalı xətləri.",
        ],
        cta: "Boru kəmərləri və istilik →",
        diagramLabel: "DWG-06 · CNC QAYNAQ VƏ İSTİLİYİN UTİLİZASİYASI",
      },
      trackB: {
        badge: "İstiqamət B • Kritik İT və OT",
        title: "Kritik İT, OT kibertəhlükəsizliyi və telekommunikasiya şəbəkələri",
        anchor: "/industrial-infrastructure#critical-it-ot",
        bullets: [
          "Sənaye tipli IP/MPLS marşrutlaşdırıcıları, idarə olunan L2/L3 kommutatorları və serial-IP cihaz serverləri.",
          "Aparat baypaslı OT/SCADA təhlükəsizlik divarları (iş temperaturu: -20°C-dən +60°C-dək) və OT cihazlarını profilləşdirən NAC sistemləri.",
          "Yarımstansiya telemühafizə terminalları, GNSS PTP zaman serverləri, yüksək əlçatanlıqlı saxlama/PA sistemləri və 1G–200G şəbəkə verifikasiyası platformaları (RFC 2544, IEC 61850, EN 61000-4 Level 3).",
        ],
        cta: "Kritik İT və OT →",
        diagramLabel: "DWG-07 · IP/MPLS, PTP VƏ OT TƏHLÜKƏSİZLİYİ",
      },
    },
    referenceSection: {
      eyebrow: "REGİONAL İCRA MODELİ VƏ NÜMUNƏVİ LAYİHƏ MİQYASLARI",
      h2: "Avropa və Türkiyə mühəndislik tərəfdaşları ilə vahid regional inteqrasiya",
      subtitle:
        "Novaltron seçilmiş Avropa və Türkiyə istehsalçılarını, konsolidasiya olunmuş logistikanı və ixtisaslaşmış işəsalma mühəndislərini vahid müqavilə altında birləşdirən Tbilisi mərkəzli sistem inteqratorudur.",
      operatingModelBadge: "NİYƏ VAHİD İNTEQRATOR",
      operatingModelBody:
        "6–10 ayrı xarici ixracatçı, gömrük brokeri və podratçı ilə ayrı-ayrılıqda işləmək əvəzinə, aqroholdinqlər və kommunal qurumlar bütün məsuliyyəti daşıyan vahid tərəfdaşla — Tbilisidəki mərkəzimizlə işləyir.",
      disclaimer:
        "Qafqaz və Mərkəzi Asiya tenderləri üçün tipik açar təhvil mühəndislik layihələri nümunələri; konkret müştəri layihələrinə dair referenslər texniki prekvalifikasiya zamanı məxfilik müqaviləsi (NDA) əsasında təqdim olunur.",
      scopes: [
        {
          code: "SCOPE-01",
          corridor: "Qafqaz aqropark dəhlizi",
          metric: "450 ha",
          title: "Dəqiq suvarma və günəş enerjili nasos stansiyalarının modernləşdirilməsi",
          summary:
            "Pivot tipli dairəvi suvarma maşınları, yüksək bulanıqlıqlı kanal suyu üçün avtomatik qum/disk filtrasiyası, çoxkanallı EC/pH fertiqasiya və ultrasəs su telemetriyası.",
          standards: ["EC/pH avtomatikası", "Günəş nasosları", "FAT/SAT"],
        },
        {
          code: "SCOPE-02",
          corridor: "Mərkəzi Asiya taxıl dəhlizi",
          metric: "20 000 t",
          title: "Büzməli polad taxıl terminalı və ATEX təhlükəsizliyi",
          summary:
            "300 t/saat nəql xətləri, istilik utilizasiyalı fasiləsiz qurutma qülləsi, qeyri-invaziv çəki sensorları və ATEX partlayış təzyiqini boşaldan panellərlə təchiz olunmuş Z600 Eurocode/EN yastıdibli siloslar.",
          standards: ["Eurocode / EN", "Z600", "ATEX"],
        },
        {
          code: "SCOPE-03",
          corridor: "Regional ixrac istixanaçılığı",
          metric: "10 ha",
          title: "Sənaye istixanasında ağıllı IPM və IFA v6 hazırlığı",
          summary:
            "Günəş enerjili AI kamera tələləri, faydalı həşəratların və bombus arılarının tətbiqi cədvəli, yığımqabağı MRL laboratoriya yoxlaması və tam GLOBALG.A.P. IFA v6 audit dosyesi.",
          standards: ["GLOBALG.A.P. IFA v6", "GRASP", "AB MRL"],
        },
      ],
    },
    deliverySection: {
      eyebrow: "VAHİD MƏSULİYYƏT MƏRKƏZİ",
      h2: "5 addımlı açar təhvil icra modeli",
      subtitle:
        "İlkin sahə auditindən ölçmələrlə təsdiqlənən istismara verilməyə və RMA zəmanət xidmətinə qədər dəqiq mühəndislik intizamı.",
      deliverableLabel: "Əsas mərhələ nəticəsi",
      steps: [
        {
          step: "01",
          title: "Texniki tapşırıq və sahə təhlili",
          description: "İnfrastruktur auditi, aqronomik/mühəndislik hesablamaları və tender uyğunluq matrisi.",
          deliverable: "Sahə auditi və uyğunluq matrisi",
        },
        {
          step: "02",
          title: "Fərdi sistem mühəndisliyi",
          description: "Avadanlıq konfiqurasiyası, texnoloji axın layihələndirməsi və vahid layihə qrafiki.",
          deliverable: "Texnoloji sxem və BOQ",
        },
        {
          step: "03",
          title: "Sərhədlərarası təchizat və logistika",
          description: "Tbilisi vasitəsilə çoxvalyutalı Avropa/Türkiyə təchizatı, ixrac sənədləşməsi və gömrük rəsmiləşdirilməsi.",
          deliverable: "Konsolidasiya olunmuş yük və mənşə sənədləri",
        },
        {
          step: "04",
          title: "Sahədə inteqrasiya və FAT/SAT",
          description: "Mexaniki/elektrik quraşdırma, kalibrləmə və sənədlərlə təsdiqlənən zavod (FAT) və obyekt (SAT) qəbul sınaqları.",
          deliverable: "İmzalanmış FAT/SAT protokolları",
        },
        {
          step: "05",
          title: "Satışdan sonrakı dəstək və RMA",
          description: "Vahid zəmanət idarəetməsi, ehtiyat hissələri logistikası və regional sahə mühəndisliyi dəstəyi.",
          deliverable: "Zəmanət SLA və ehtiyat hissələri",
        },
      ],
    },
    trustSection: {
      eyebrow: "KORPORATİV İDARƏETMƏ VƏ ETİBAR",
      h2: "Tbilisidəki mərkəz vasitəsilə strukturlaşdırılmış regional icra",
      subtitle:
        "EPC tender komissiyaları, aqroholdinqlər və bank uyğunluq yoxlamaları üçün şəffaf institusional struktur.",
      governancePillars: [
        {
          number: "01",
          title: "Avropa idarəetməsi və standartlar",
          detail:
            "Mühəndislik, qida təhlükəsizliyi və sənaye sahələrində ISO 9001, ISO 14001, CE, ATEX, EN və GLOBALG.A.P. standartlarına uyğunlaşdırılmış fəaliyyət.",
          tags: ["ISO 9001", "ISO 14001", "CE", "ATEX", "EN", "GLOBALG.A.P."],
        },
        {
          number: "02",
          title: "Regional uyğunluq və yerli AVL",
          detail:
            "Azərbaycan, Gürcüstan, Özbəkistan, Qazaxıstan və Türkiyə üzrə EPC təchizatçı kvalifikasiyasına uyğun regional icra.",
          tags: ["AZ", "GE", "UZ", "KZ", "TR", "EPC-yə hazır"],
        },
        {
          number: "03",
          title: "Şəffaf təchizat sənədləşməsi",
          detail:
            "Novaltron LLC (Tbilisi, Gürcüstan) vasitəsilə kommersiya invoysları, qablaşdırma siyahıları, mənşə sertifikatları və FAT/SAT aktları.",
          tags: ["Novaltron LLC", "Mənşə sənədləri", "FAT/SAT"],
        },
      ],
      bottomCtaTitle: "Növbəti aqrosənaye və ya infrastruktur layihənizi planlaşdırırsınız?",
      bottomCtaBody:
        "Fərdi kommersiya təklifi almaq üçün texniki şərtlərinizi, ərazi ölçülərinizi və ya BOQ cədvəlinizi mühəndislik komandamızla paylaşın.",
      bottomCtaButton: "Fərdi təklif al →",
    },
  },
  agroSolutions: {
    metaTitle: "Aqrosənaye və yığımdan sonrakı emal həlləri",
    eyebrow: "ƏSAS BÖLMƏ • AQROSƏNAYE VƏ YIĞIMDAN SONRAKI EMAL MÜHƏNDİSLİYİ",
    h1: "Açar təhvil aqrar infrastruktur — tarlaların suvarılmasından ixrac keyfiyyətli saxlanmaya qədər",
    subHeadline:
      "Novaltron Azərbaycan, Gürcüstan, Özbəkistan və Qazaxıstanda Avropa və Türkiyə mühəndislik standartlarını vahid regional icra ilə birləşdirərək inteqrasiya olunmuş aqrosənaye sistemləri layihələndirir, təchiz edir və işə salır.",
    anchors: [
      { id: "irrigation", label: "Suvarma və su" },
      { id: "greenhouses", label: "Sənaye istixanaları" },
      { id: "grain-silos", label: "Taxıl silosları və qurutma" },
      { id: "safety-feed", label: "Təhlükəsizlik və yem zavodları" },
    ],
    pillars: [
      {
        id: "irrigation",
        number: "01",
        badge: "İstiqamət 01",
        title: "Dəqiq suvarma, filtrasiya və su idarəetməsi",
        subtitle:
          "Quraq və kontinental iqlim zonaları üçün layihələndirilmiş avtomatlaşdırılmış su paylanması, yüksək bulanıqlıqlı suların filtrasiyası, günəş enerjili nasoslar və torpaq rütubətinin real vaxt rejimində telemetriyası.",
        diagramLabel: "DWG-01 · HİDRAVLİKA VƏ TELEMETRİYA SXEMİ",
        imageSrc: "/images/agro-irrigation.jpg",
        imageAlt:
          "Səhər işığında əkin sıralarını suvaran pivot tipli dairəvi suvarma sistemi və filtrasiya stansiyası",
        standards: ["EC/pH avtomatikası", "Günəş nasosları", "Ultrasəs ölçmə"],
        items: [
          {
            heading: "Tarla və bağ suvarma şəbəkələri",
            detail:
              "Genişmiqyaslı pivot tipli dairəvi və xətti hərəkətli sistemlər, barabanlı suvarma qurğuları, təzyiq kompensasiyalı damcı və mikroçiləyici suvarma xətləri.",
          },
          {
            heading: "Fertiqasiya və avtomatik yuyulan filtrasiya",
            detail:
              "Avtomatlaşdırılmış çoxkanallı EC/pH gübrələmə qurğuları və kanal/çay suları üçün avtomatik yuyulan qum, disk və torlu filtrlər.",
          },
          {
            heading: "Günəş nasosları və su telemetriyası",
            detail:
              "Dərin quyu nasosları, şaquli turbin nasosları və avtonom günəş enerjili nasos stansiyaları, ultrasəs sərfölçənlər və torpaq rütubəti monitorinqi.",
          },
        ],
      },
      {
        id: "greenhouses",
        number: "02",
        badge: "İstiqamət 02",
        title: "Açar təhvil sənaye istixanaları və iqlim nəzarəti",
        subtitle:
          "Regional külək və qar yüklərinə davamlı, avtomatlaşdırılmış iqlim və istilik idarəetməsinə malik yüksək məhsuldarlıqlı şüşə və çoxaşırımlı polietilen istixana kompleksləri.",
        diagramLabel: "DWG-02 · İQLİM VƏ İSTİLİK DÖVRƏSİ SXEMİ",
        imageSrc: "/images/agro-greenhouse.jpg",
        imageAlt:
          "Asma hidroponik novlar və istilik pərdələri olan sənaye Venlo istixanası",
        standards: ["Eurocode / EN", "Venlo və polietilen", "CO₂ zənginləşdirmə"],
        items: [
          {
            heading: "Konstruksiya və örtük sistemləri",
            detail:
              "Eurocode / EN üzrə külək, qar və seysmik yüklərə hesablanmış, isti üsulla sinklənmiş Venlo şüşə və çoxaşırımlı polietilen istixana polad konstruksiyaları.",
          },
          {
            heading: "Avtomatlaşdırılmış iqlim və kölgələndirmə",
            detail:
              "Motorlu dam/yan havalandırma, enerjiyə qənaət edən və işıqkeçirməyən (blackout) pərdələr, yüksək təzyiqli dumanlama/soyutma və CO₂ ilə zənginləşdirmə.",
          },
          {
            heading: "Qazanxana və hidroponik xətlər",
            detail:
              "Tüstü qazı ekonomayzerli yüksək səmərəli isti su və buxar qazanları, istilik akkumulyator çənləri və asma hidroponik yetişdirmə novları.",
          },
        ],
      },
      {
        id: "grain-silos",
        number: "03",
        badge: "İstiqamət 03",
        title: "Taxıl silosları, qurutma, təmizləmə və optik çeşidləmə",
        subtitle:
          "Aqroparklar və taxıl terminalları üçün ixrac standartlı taxıl saxlama silosları, zədəsiz yüksək məhsuldarlıqlı nəql, fasiləsiz qurutma və optik çeşidləmə xətləri.",
        diagramLabel: "DWG-03 · YIĞIMDAN SONRAKI EMAL AXINI",
        imageSrc: "/images/agro-grain-silos.jpg",
        imageAlt:
          "Sinklənmiş büzməli polad taxıl silosları və elevator körpüləri",
        standards: ["Eurocode / EN", "Z600 / Magnelis", "200–500 t/saat"],
        items: [
          {
            heading: "Büzməli polad siloslar və nəql",
            detail:
              "Eurocode / EN standartlarına uyğun yastıdibli və konusdibli siloslar (Z600 / Magnelis örtük), 200–500 t/saat məhsuldarlıqlı noriyalar və qapalı konveyerlər.",
          },
          {
            heading: "Fasiləsiz və resirkulyasiyalı qurutma",
            detail:
              "İstilik utilizasiyalı izolyasiya və aşağı emissiyalı yandırıcılarla təchiz olunmuş, enerjiyə qənaət edən fasiləsiz axınlı qüllə tipli və dövri işləyən taxıl quruducuları.",
          },
          {
            heading: "Toxum kalibrləmə və optik çeşidləmə",
            detail:
              "Yüksək məhsuldarlıqlı vibrasiyalı ilkin təmizləyicilər, sertifikatlı toxum üçün aerodinamik separatorlar, optik rəng çeşidləyiciləri və fındıq/qoz emalı xətləri.",
          },
        ],
      },
      {
        id: "safety-feed",
        number: "04",
        badge: "İstiqamət 04",
        title: "Silosların struktur monitorinqi, ATEX təhlükəsizliyi və yem zavodları",
        subtitle:
          "Heyvandarlıq və quşçuluq kompleksləri üçün qeyri-invaziv struktur yük nəzarəti, sertifikatlaşdırılmış partlayış mühafizəsi və avtomatlaşdırılmış qarışıq yem istehsalı xətləri.",
        diagramLabel: "DWG-04 · ATEX VƏ YEM DOZALAMA SXEMİ",
        standards: ["ATEX sertifikatlı", "Deformasiya sensoru", "Mikrodozalama"],
        items: [
          {
            heading: "Silosların qeyri-invaziv çəkilməsi və yüklənməyə nəzarət",
            detail:
              "Silos dayaqlarına bərkidilən xarici metal deformasiya sensorları vasitəsilə ehtiyatın çəkisinə real vaxt rejimində nəzarət və konstruksiyanın həddindən artıq yüklənmədən mühafizəsi.",
          },
          {
            heading: "ATEX partlayış və qaz təhlükəsizliyi",
            detail:
              "ATEX sertifikatlı partlayış təzyiqini boşaldan panellər, sürətli kəsici klapanlar, torbalı filtrli mərkəzi aspirasiya sistemi, CO və temperaturun fasiləsiz monitorinqi.",
          },
          {
            heading: "Qarışıq yem və TMR xətləri",
            detail:
              "Yüksək homogenlikli birvallı və ikivallı mikserlər, premikslər üçün qravimetrik mikrodozalama, qranullaşdırma/soyutma xətləri və TMR yem qarışdırıcıları.",
          },
        ],
      },
    ],
    bottomCtaTitle: "Aqropark, istixana kompleksi və ya taxıl terminalı planlaşdırırsınız?",
    bottomCtaBody:
      "Açar təhvil təklif almaq üçün sahə parametrlərinizi, məhsuldarlıq hədəflərinizi və ya BOQ sənədinizi mühəndislərimizə göndərin.",
    bottomCtaButton: "Aqrar layihə sorğusu göndər →",
  },
  bioIpm: {
    metaTitle: "Bioloji həllər, ağıllı IPM və ixrac sertifikatlaşdırması",
    eyebrow: "DAYANIQLI BİTKİ MÜHAFİZƏSİ VƏ İXRAC AUDİT HAZIRLIĞI",
    h1: "Bioloji bitki mühafizəsi, ağıllı IPM və beynəlxalq ixrac sertifikatlaşdırması",
    subHeadline:
      "Qafqaz və Mərkəzi Asiyada sənaye istixanalarına, meyvə bağlarına, giləmeyvə təsərrüfatlarına və aqroholdinqlərə kimyəvi qalıqları azaltmağa, AB və Körfəz ölkələrinin (GCC) sərt MRL tələblərinə cavab verməyə və beynəlxalq auditlərdən ilk cəhddə keçməyə kömək edirik.",
    imageAlt:
      "Müasir şüşə istixanada quraşdırılmış günəş enerjili optik AI kamera tələsi",
    anchors: [
      { id: "core-scope", label: "Əsas istiqamətlər" },
      { id: "packages", label: "Paketlər" },
      { id: "roadmap", label: "Sertifikatlaşdırma mərhələləri" },
    ],
    coreScopeTitle: "3 əsas istiqamət: biokontrol, rəqəmsal monitorinq və sertifikatlaşdırma",
    coreScope: [
      {
        title: "Bioloji vasitələr və biokontrol",
        body: "Faydalı yırtıcı həşəratlar və gənələr (ağqanad, trips, hörümçək gənəsi, mənənə və pomidor güvəsinə (Tuta absoluta) qarşı), istixanalar üçün bombus arısı ailələri, növə məxsus feromon tələləri, cütləşməni pozan dispenserlər, rəngli yapışqanlı tələlər və aşağı qalıqlı biopestisidlər.",
        badges: ["Faydalı həşəratlar", "Bombus arıları", "Feromon tələləri"],
      },
      {
        title: "Rəqəmsal zərərverici monitorinqi",
        body: "Zərərverici növlərini gündəlik sayan günəş enerjili avtomatlaşdırılmış süni intellekt (AI) kamera tələləri, yapışqanlı tələləri smartfonla skan edən tətbiqlər və effektiv temperaturlar cəminin (GDD) hesablanması üçün mikroiqlim meteostansiyaları.",
        badges: ["Günəş enerjili AI tələləri", "GDD meteostansiyası", "Bulud telemetriyası"],
      },
      {
        title: "Beynəlxalq sertifikatlaşdırma hazırlığı",
        body: "GLOBALG.A.P. IFA v6 (Option 1 — fərdi təsərrüfatlar və Option 2 — istehsalçı qrupları), GRASP, üzvi istehsal (Organic) və HACCP / ISO 22000 üzrə texniki hazırlıq — uyğunsuzluqların təhlili (gap-analiz), SOP-lar, sınaq auditləri, MRL laboratoriya koordinasiyası və akkreditə olunmuş Avropa sertifikatlaşdırma orqanı (CB) ilə əlaqə.",
        badges: ["GLOBALG.A.P. IFA v6", "GRASP", "ISO 22000 / HACCP"],
      },
    ],
    packagesSection: {
      title: "3 səviyyəli ağıllı IPM paketləri",
      subtitle: "Təsərrüfat miqyasını seçərək uyğun paketlə tanış olun.",
      selectorLabel: "Təsərrüfat miqyasını seçin:",
      recommendedLabel: "Tövsiyə edilən",
      tiers: [
        {
          id: "1",
          name: "Paket 1: IPM Audit Essentials",
          scaleTag: "1–3 ha istixana və ya 10–25 ha bağ",
          scaleKey: "small",
          scaleLabel: "Kiçik / orta təsərrüfat",
          hardwareTitle: "Avadanlıq və proqram təminatı",
          hardwareItems: [
            "Ənənəvi feromon və rəngli yapışqanlı tələlər",
            "Mobil tələ skanlama proqramı lisenziyası",
            "Bulud əsaslı rəqəmsal monitorinq jurnalı",
          ],
          advisoryTitle: "Vasitələr və məsləhət",
          advisoryItems: [
            "Bitkiyə uyğun IPM iqtisadi zərər həddi matrisi",
            "AB MRL tələblərinə uyğun preparat siyahısı və gözləmə müddəti cədvəli",
            "İlkin IPM uyğunsuzluq təhlili (gap-analiz)",
            "GLOBALG.A.P. IFA v6 IPM planı və SOP-lar",
            "1× auditdən əvvəl sınaq yoxlaması və 1 mövsümlük tələ materialları",
          ],
          ctaLabel: "Paket 1 üçün sorğu →",
        },
        {
          id: "2",
          name: "Paket 2: Smart IPM Export Pro",
          scaleTag: "3–10 ha istixana və ya 25–100 ha bağ",
          scaleKey: "commercial",
          scaleLabel: "Sənaye istixanası / bağ",
          featured: true,
          hardwareTitle: "Avadanlıq və rabitə",
          hardwareItems: [
            "2–4× Günəş enerjili avtomatlaşdırılmış AI kamera tələsi",
            "Əlavə bloklar üçün yapışqanlı tələlər + mobil tətbiq",
            "12 aylıq bulud analitika portalı + M2M LTE SIM kartlar",
          ],
          advisoryTitle: "Vasitələr və məsləhət",
          advisoryItems: [
            "Faydalı həşəratların və tozlandırıcıların buraxılması üzrə fərdi plan",
            "İki həftədə bir uzaqdan görüntü təhlili və 2× sahə yoxlaması",
            "Tam IFA v6 IPM dosyesi + 1× çoxkomponentli qalıq (MRL) laboratoriya analizinin koordinasiyası",
            "1 mövsümlük əvəzedici lövhələr/feromonlar və RMA dəstəyi",
          ],
          ctaLabel: "Paket 2 üçün sorğu →",
        },
        {
          id: "3",
          name: "Paket 3: Precision IPM Enterprise",
          scaleTag: "100+ ha aqroholdinqlər, aqroparklar və Option 2 qrupları",
          scaleKey: "enterprise",
          scaleLabel: "Aqroholdinq / qrup",
          hardwareTitle: "Avadanlıq və rabitə",
          hardwareItems: [
            "5–10+ Günəş enerjili avtomatlaşdırılmış AI kamera tələsi",
            "1× Avtomatlaşdırılmış mikroiqlim meteoroloji stansiyası",
            "Çox obyektli mərkəzi telemetriya paneli (baş ofis) + API/ERP ixracı + SMS/WhatsApp xəbərdarlıqları",
          ],
          advisoryTitle: "Vasitələr və məsləhət",
          advisoryItems: [
            "Mövsümboyu biokontrol və aşağı qalıq proqramı",
            "Aylıq aqronom nəzarəti və rezistentliyin idarə olunması",
            "Option 2 daxili nəzarət sisteminin (ICS) qurulması",
            "Yığımqabağı MRL qalıq yoxlaması və sahədə texniki SLA",
          ],
          ctaLabel: "Paket 3 üçün sorğu →",
        },
      ],
      footnote:
        "Akkreditə olunmuş üçüncü tərəf sertifikatlaşdırma orqanının audit haqları və laboratoriya MRL analiz haqları şəffaf şəkildə faktiki xərc əsasında hesablanır.",
    },
    roadmapSection: {
      title: "4 addımlı sertifikatlaşdırma dövrü",
      steps: [
        {
          step: "01",
          title: "Təsərrüfatda uyğunsuzluq təhlili və MRL yoxlaması",
          detail: "GLOBALG.A.P. IFA v6 / GRASP meyarları üzrə ilkin audit və qalıq riskinin qiymətləndirilməsi.",
        },
        {
          step: "02",
          title: "Tələlərin quraşdırılması və biokontrol protokolu",
          detail: "AI kamera tələləri, feromon şəbəkəsi, tozlandırıcılar və faydalı həşəratların buraxılma cədvəli.",
        },
        {
          step: "03",
          title: "Avtomatlaşdırılmış monitorinq və sınaq auditi",
          detail: "Rəqəmsal müşahidə jurnalları, MRL laboratoriya testi və tam sınaq yoxlaması.",
        },
        {
          step: "04",
          title: "Akkreditə olunmuş orqan auditi və sertifikat",
          detail: "Avropa sertifikatlaşdırma orqanı ilə koordinasiyalı audit və ilk cəhddə ixrac sertifikatı.",
        },
      ],
    },
  },
  industrialInfrastructure: {
    metaTitle: "Sənaye mühəndisliyi və kritik infrastruktur",
    eyebrow: "SƏNAYE VƏ KRİTİK İNFRASTRUKTUR BÖLMƏSİ",
    h1: "Sənaye boru kəməri mühəndisliyi, istilik enerjisi və kritik OT/SCADA şəbəkələri",
    subHeadline:
      "Qafqaz və Mərkəzi Asiyada su və qaz təsərrüfatlarını, istehsal müəssisələrini, elektrik yarımstansiyalarını və EPC podratçılarını standartlara uyğun avadanlıq, inteqrasiya və ölçməyə əsaslanan işəsalma ilə dəstəkləyirik.",
    anchors: [
      { id: "pipelines-thermal", label: "İstiqamət A: Boru kəmərləri və istilik" },
      { id: "critical-it-ot", label: "İstiqamət B: Kritik İT və OT" },
    ],
    tracks: [
      {
        id: "pipelines-thermal",
        badge: "İstiqamət A",
        title: "Sənaye mühəndisliyi, boru kəmərləri və istilik sistemləri",
        subtitle:
          "Qaynaq parametrlərini qeydə alan CNC idarəli termoplastik qaynaq maşınları, yüksək təzyiqli boru kəmərləri, sənaye buxar və istilik utilizasiyası sistemləri.",
        standards: ["PE100 / PP-R", "CNC qaynaq qeydiyyatı", "İstiliyin utilizasiyası"],
        diagramLabel: "DWG-06 · BORU QAYNAĞI VƏ İSTİLİK SXEMİ",
        imageSrc: "/images/industrial-infra.jpg",
        imageAlt:
          "Müasir sənaye obyektində yüksək təzyiqli HDPE boru kəmərləri və sənaye klapanları",
        items: [
          {
            heading: "Termoplastik boru qaynaq avadanlıqları",
            detail:
              "HDPE, PP və PVDF təzyiqli boru kəmərləri üçün CNC avtomatikalı və qaynaq parametrlərini qeydə alan hidravlik uc-uca qaynaq maşınları; universal elektromuftalı qaynaq aparatları və fitinq istehsalı üçün sex dəzgahları.",
          },
          {
            heading: "Yüksək təzyiqli maye ötürmə və boru sistemləri",
            detail:
              "Tam PE100 və PP-R boru sistemləri, elektromuftalı və uc-uca qaynaq fitinqləri, sənaye bağlayıcı armaturu, kommunal su təchizatı, kanalizasiya və qaz paylayıcı şəbəkələri.",
          },
          {
            heading: "İstilik mühəndisliyi, buxar və biokütlə enerjisi",
            detail:
              "Yüksək səmərəli sənaye buxar qazanları, su qızdırıcı qazanlar, gövdə-boru tipli istilikdəyişdiricilər, tüstü qazı ekonomayzerləri, tullantı istiliyinin utilizasiyası sistemləri, aqrar biokütlə xırdalayıcıları və kompostlama xətləri.",
          },
        ],
      },
      {
        id: "critical-it-ot",
        badge: "İstiqamət B",
        title: "Kritik İT, OT kibertəhlükəsizliyi və telekommunikasiya şəbəkələri",
        subtitle:
          "Sənaye IP/MPLS marşrutlaşdırıcıları, aparat baypaslı OT təhlükəsizlik divarları, yarımstansiya telemühafizəsi və 1G–200G şəbəkə verifikasiyası.",
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
            heading: "Sənaye magistralı və operator marşrutlaşdırması",
            detail:
              "İş temperaturu -20°C-dən +60°C-dək olan modul tipli 1U və 2U IP/MPLS marşrutlaşdırıcıları (1G–100G); idarə olunan L2/L3 sənaye Ethernet kommutatorları, serial-IP serverləri və sənaye səsləndirmə (PA) platformaları.",
          },
          {
            heading: "OT/SCADA kibertəhlükəsizliyi və girişə nəzarət",
            detail:
              "Optik/mis aparat baypas kartlı sənaye yeni nəsil təhlükəsizlik divarları; daxili OT cihaz profilli (mühafizə releləri, RTU, PLC, IED) paylanmış NAC arxitekturaları.",
          },
          {
            heading: "Yarımstansiya telemühafizəsi, sinxronizasiya və şəbəkə verifikasiyası",
            detail:
              "Yarımstansiya telemühafizə terminalları, GNSS PTP Grandmaster zaman serverləri və aparat əsaslı 1G–200G şəbəkə verifikasiyası platformaları (RFC 2544, ITU-T Y.1564, IEEE 1588 PTP, IEC 61850 GOOSE/SV, EN 61000-4 Level 3 EMC).",
          },
        ],
      },
    ],
    bottomCtaTitle: "Boru kəməri, istilik stansiyası və ya yarımstansiya OT/SCADA tenderi planlaşdırırsınız?",
    bottomCtaButton: "Sənaye sorğusu göndər →",
  },
  turnkeyDelivery: {
    metaTitle: "Açar təhvil layihə icrası və EPC həlləri",
    eyebrow: "VAHİD MƏSULİYYƏT • EPC VƏ AÇAR TƏHVİL İCRA",
    h1: "Qafqaz və Mərkəzi Asiya üzrə tam açar təhvil layihə icrası",
    subHeadline:
      "Novaltron Avropa və Türkiyə mühəndislik təchizatını, konsolidasiya olunmuş tranzit logistikasını, ölçməyə əsaslanan FAT/SAT işəsalma prosesini və istismar dövrü RMA dəstəyini vahid müqavilə altında birləşdirərək çoxtəchizatçılı dağınıqlığı aradan qaldırır.",
    anchors: [
      { id: "workflow", label: "5 addımlı icra modeli" },
      { id: "execution-pillars", label: "İcra və keyfiyyət nəzarəti nöqtələri" },
      { id: "benchmarks", label: "Nümunəvi layihə həcmləri" },
    ],
    workflowTitle: "5 addımlı icra modeli",
    workflowSubtitle:
      "İlkin sahə təhlili və sistem mühəndisliyindən sərhədlərarası tranzitə, FAT/SAT sınaqlarına və RMA dəstəyinə qədər.",
    steps: [
      {
        step: "01",
        title: "İlkin araşdırma və texniki təhlil",
        description: "İnfrastruktur auditi, aqronomik/mühəndislik hesablamaları və tender uyğunluq matrisi.",
        deliverable: "Uyğunluq matrisi və hesabat",
      },
      {
        step: "02",
        title: "Fərdi sistem mühəndisliyi",
        description: "Avadanlıq konfiqurasiyası, texnoloji proses axını və inteqrasiya olunmuş layihə qrafiki.",
        deliverable: "Sistem sxemləri və qrafik",
      },
      {
        step: "03",
        title: "Sərhədlərarası təchizat və tranzit",
        description: "Tbilisi vasitəsilə çoxvalyutalı Avropa/Türkiyə təchizatı, ixrac sənədləşməsi və gömrük.",
        deliverable: "Yük konsolidasiyası və gömrük dosyesi",
      },
      {
        step: "04",
        title: "Sahədə inteqrasiya və FAT/SAT",
        description: "Mexaniki/elektrik quraşdırma, kalibrləmə və zavod/obyekt qəbul sınaqları.",
        deliverable: "Təsdiqlənmiş FAT/SAT protokolları",
      },
      {
        step: "05",
        title: "İstismar dəstəyi və RMA",
        description: "Vahid zəmanət idarəetməsi, ehtiyat hissələri logistikası və sahə mühəndisliyi.",
        deliverable: "Regional ehtiyat hissələri və zəmanət",
      },
    ],
    pillarsTitle: "İcra prinsipləri və keyfiyyət nəzarəti nöqtələri",
    pillarsSubtitle:
      "Çoxprofilli layihələrin vaxtında və audita hazır vəziyyətdə təhvil verilməsi üçün təchizat, obyektdə işəsalma və təhvildən sonrakı istismar mərhələlərində strukturlaşdırılmış nəzarət.",
    executionPillars: [
      {
        badge: "Mərhələ 01 • Təchizat və tranzit",
        title: "Konsolidasiya olunmuş sərhədlərarası təchizat və logistika",
        body: "Tbilisidəki mərkəzimiz vasitəsilə, vahid kommersiya qrafiki əsasında seçilmiş Avropa və Türkiyə istehsalçıları ilə birbaşa müqavilələr.",
        bullets: [
          "Çoxvalyutalı OEM təchizatı və vahid kommersiya hesablaşmaları.",
          "Zavoddan göndərişin sinxronlaşdırılması, yük konsolidasiyası və regional gömrük tranziti.",
          "Layihə mərhələlərinə uyğunlaşdırılmış tam ixrac və gömrük dosyeləri.",
        ],
        tags: ["Avropa / TR OEM", "Yük konsolidasiyası", "Gömrük tranziti"],
      },
      {
        badge: "Mərhələ 02 • Yoxlama və qəbul",
        title: "Obyektdə inteqrasiya, FAT/SAT və SƏTƏM intizamı",
        body: "Rəsmi istismara təhvildən əvvəl həm istehsal zavodunda, həm də quraşdırma obyektində ölçmələrlə təsdiqlənən texniki yoxlama.",
        bullets: [
          "Tender uyğunluq matrisinə əsasən göndərişdən əvvəl zavod qəbul sınaqları (FAT).",
          "Mexaniki, elektrik və idarəetmə sistemlərinin inteqrasiyası və kalibrlənməsi.",
          "SƏTƏM tələblərinə ciddi riayət olunmaqla imzalanmış obyekt qəbul sınağı (SAT) protokolları.",
        ],
        tags: ["FAT / SAT protokolları", "Kalibrləmə", "SƏTƏM (HSE)"],
      },
      {
        badge: "Mərhələ 03 • Davamlılıq",
        title: "İstismar dəstəyi, ehtiyat hissələri və vahid pəncərə RMA",
        body: "Müştərilərin ayrı-ayrı xarici zəmanət prosedurları ilə məşğul olmaması üçün istismara verildikdən sonrakı dəstəyin vahid regional ofisdən idarə olunması.",
        bullets: [
          "Mərkəzləşdirilmiş zəmanət idarəetməsi və istehsalçı RMA koordinasiyası.",
          "Kritik ehtiyat hissələrinin planlaşdırılması və operativ təchizatı.",
          "Operator təlimi və layihənin istismar dövrü boyu regional sahə mühəndisliyi dəstəyi.",
        ],
        tags: ["Vahid pəncərə RMA", "Kritik ehtiyat hissələri", "Sahə SLA"],
      },
    ],
    scopesTitle: "Nümunəvi açar təhvil layihə həcmləri",
    scopesSubtitle:
      "Regional dəhlizimiz üzrə aqrosənaye holdinqləri, taxıl terminalları və infrastruktur tenderləri üçün strukturlaşdırılmış çoxprofilli mühəndislik paketləri.",
    bottomCtaTitle: "Çoxprofilli açar təhvil layihəsi və ya tender planlaşdırırsınız?",
    bottomCtaBody:
      "Konsolidasiya olunmuş icra planı və kommersiya təklifi üçün sahə parametrlərini, texniki şərtləri və ya BOQ cədvəlini Tbilisidəki mühəndislik ofisimizlə paylaşın.",
    bottomCtaButton: "Açar təhvil təklif istə →",
    aboutCrossLinkLabel: "Haqqımızda və korporativ uyğunluq",
  },
  aboutCompliance: {
    metaTitle: "Haqqımızda və korporativ uyğunluq",
    eyebrow: "KORPORATİV ARXİTEKTURA • İDARƏETMƏ VƏ UYĞUNLUQ",
    h1: "Regional korporativ mərkəz və sərhədlərarası institusional uyğunluq",
    subHeadline:
      "Gürcüstanın Tbilisi şəhərindəki Novaltron LLC vasitəsilə fəaliyyət göstərərək Qərbi Avropa korporativ idarəetməsini şəffaf ticarət sənədləşməsi və Qafqaz/Mərkəzi Asiya üzrə EPC təchizatçı hazırlığı ilə birləşdiririk.",
    anchors: [
      { id: "corporate-structure", label: "Korporativ struktur" },
      { id: "governance", label: "İdarəetmə və standartlar" },
      { id: "compliance-readiness", label: "İnstitusional hazırlıq" },
    ],
    corporateTitle: "Regional korporativ mərkəz",
    corporateSubtitle:
      "Avropa və Türkiyə istehsalını Qafqaz və Mərkəzi Asiyadakı layihə sahələri ilə birləşdirən logistika qovşağında yerləşən vahid hüquqi və əməliyyat qurumu.",
    corporateHubName: "Novaltron LLC (Tbilisi, Gürcüstan — შპს ნოვალტრონი)",
    corporateHubRole: "Beynəlxalq təchizat, ticarət maliyyələşdirməsi və regional tranzit mərkəzi",
    corporateHubPoints: [
      "Avropa və Türkiyə istehsalçıları ilə birbaşa müqavilələr və çoxvalyutalı hesablaşmalar.",
      "Qafqaz və Mərkəzi Asiya üzrə strukturlaşdırılmış yükdaşıma, gömrük tranziti və logistika.",
      "Açar təhvil aqrosənaye və kritik infrastruktur layihələrində vahid kommersiya məsuliyyəti.",
    ],
    corridorCountries: ["Azərbaycan", "Gürcüstan", "Özbəkistan", "Qazaxıstan", "Türkiyə"],
    corridorDiagramLabel: "REGİONAL TRANZİT VƏ TƏCHİZAT DƏHLİZİ",
    governanceTitle: "İcra modeli, idarəetmə və standartlar",
    governanceSubtitle:
      "Bank və EPC audit tələblərinə uyğun qurulmuş intizamlı texniki standartlar, şəffaf kommersiya sənədləşməsi və etibarlı mühəndislik tərəfdaşlıqları.",
    operatingModelHeading: "Regional inteqrator icra modeli",
    operatingModelBody:
      "Novaltron Qərbi Avropa korporativ idarəetməsini intizamlı regional layihə icrası ilə birləşdirir — seçilmiş Avropa və Türkiyə istehsalçıları və sertifikatlı işəsalma komandaları ilə dəstəklənən vahid Tbilisi mühəndislik inteqrasiya mərkəzi kimi fəaliyyət göstərir.",
    standardsHeading: "Beynəlxalq standartlara uyğunluq",
    standardsBody:
      "Bütün mühəndislik sistemləri və təchizat prosesləri tanınmış beynəlxalq mühəndislik, qida təhlükəsizliyi və sənaye standartlarına uyğunlaşdırılıb:",
    standardsList: [
      "ISO 9001",
      "ISO 14001",
      "ISO 22000",
      "CE",
      "ATEX",
      "Eurocode / EN",
      "GLOBALG.A.P.",
    ],
    documentationHeading: "Şəffaf ticarət sənədləşməsi və SƏTƏM",
    documentationItems: [
      "Tam audit olunan ticarət sənədləri: kommersiya invoysları, qablaşdırma siyahıları və mənşə sertifikatları.",
      "Ölçməyə əsaslanan zavod qəbul sınağı (FAT) və sahə qəbul sınağı (SAT) protokolları.",
      "Bütün quraşdırma obyektlərində Sağlamlıq, Əməyin Təhlükəsizliyi və Ətraf Mühit (SƏTƏM / HSE) tələblərinə ciddi riayət.",
    ],
    complianceTitle: "İnstitusional hazırlıq və təchizatçıların prekvalifikasiyası",
    complianceSubtitle:
      "Beynəlxalq ticarət banklarının, EPC satınalma auditorlarının və aqrar ixrac sertifikatlaşdırma qurumlarının tələblərinə cavab vermək üçün strukturlaşdırılmışdır.",
    bottomCtaTitle: "Korporativ prekvalifikasiya və ya uyğunluq sənədləri lazımdır?",
    bottomCtaBody:
      "AVL qeydiyyat paketləri, NDA altında referans layihə həcmləri və ya rəsmi tender sorğuları üçün Tbilisidəki korporativ və mühəndislik ofisimizlə əlaqə saxlayın.",
    bottomCtaButton: "Korporativ ofislə əlaqə →",
    turnkeyCrossLinkLabel: "Açar təhvil icra modelinə bax",
  },
  contact: {
    metaTitle: "Texniki məsləhət və sorğu portalı",
    eyebrow: "TEXNİKİ MƏSLƏHƏT VƏ SORĞU (RFQ) ŞÖBƏSİ",
    h1: "Layihə sorğusu (RFQ) və ya texniki məsləhət müraciəti göndərin",
    subHeadline:
      "Layihə parametrlərini, təsərrüfat sahəsini, texniki şərtləri və ya BOQ cədvəlini paylaşın. Regional mühəndis və aqronom mütəxəssislərimiz 24–48 iş saatı ərzində cavab verəcəklər.",
    directDeskTitle: "Mühəndislik şöbəsi ilə birbaşa əlaqə",
    directDeskBody:
      "Bütün RFQ müraciətləri texniki qiymətləndirmə və kommersiya təklifinin hazırlanması üçün birbaşa Tbilisidəki əməliyyat ofisimizə göndərilir.",
    responseSla: "Cavab müddəti: 24–48 iş saatı",
    socialLabel: "Rəsmi kanallar",
    privacyNotice: "BOQ faylları və layihə məlumatları ciddi B2B məxfiliyi ilə qorunur:",
    legalLinkLabel: "Məxfilik və hüquqi bildiriş",
    form: {
      tabRfqLabel: "Layihə sorğusu (RFQ)",
      tabGeneralLabel: "Ümumi müraciət",
      fullNameLabel: "Ad və soyad",
      fullNamePlaceholder: "Ad və soyadınızı daxil edin",
      companyLabel: "Şirkət / təşkilat",
      companyPlaceholder: "Şirkət və ya təşkilatın adını daxil edin",
      emailLabel: "Korporativ e-poçt",
      generalEmailLabel: "E-poçt",
      emailPlaceholder: "ad@sirket.az",
      phoneLabel: "Telefon / WhatsApp",
      phonePlaceholder: "+994 / +995 / +998 ...",
      countryLabel: "Layihə ölkəsi / regionu",
      countryPlaceholder: "Ölkə və ya regionu seçin",
      countries: [
        "Azərbaycan",
        "Gürcüstan",
        "Özbəkistan",
        "Qazaxıstan",
        "Türkiyə",
        "Avropa",
        "Mərkəzi Asiya / Qafqazın digər ölkələri",
      ],
      countryOtherLabel: "Ölkə və ya regionu qeyd edin",
      countryOtherPlaceholder: "Layihə ölkəsini və ya regionunu daxil edin",
      divisionLabel: "Əsas bölmə",
      divisionPlaceholder: "Mühəndislik bölməsini seçin",
      divisions: [
        { value: "agro-irrigation", label: "Aqrosənaye: Dəqiq suvarma və su idarəetməsi" },
        { value: "agro-greenhouses", label: "Aqrosənaye: Açar təhvil sənaye istixanaları" },
        { value: "agro-grain", label: "Aqrosənaye: Taxıl silosları, qurutma və optik çeşidləmə" },
        { value: "agro-safety-feed", label: "Aqrosənaye: Silos təhlükəsizliyi və yem zavodları" },
        { value: "bio-ipm", label: "Bioloji həllər: Ağıllı IPM və ixrac sertifikatlaşdırması" },
        { value: "industrial-pipelines", label: "Sənaye mühəndisliyi: Boru kəmərləri və istilik sistemləri" },
        { value: "critical-it-ot", label: "Kritik infrastruktur: İT, OT kibertəhlükəsizliyi və telekommunikasiya" },
        { value: "multi-division", label: "Çoxbölməli / açar təhvil EPC tenderi" },
        { value: "other", label: "Digər" },
      ],
      divisionOtherLabel: "Mühəndislik bölməsini qeyd edin",
      divisionOtherPlaceholder: "Mühəndislik istiqamətini daxil edin",
      otherOption: "Digər",
      timelineLabel: "Təxmini layihə müddəti",
      timelinePlaceholder: "Məs. 2026-cı il II rüb",
      scopeLabel: "Layihənin əhatə dairəsi və texniki xülasə",
      scopePlaceholder:
        "Məhsuldarlıq (t/saat, ha), hədəf standartlar, sahə şəraiti və əsas texniki tələbləri qeyd edin...",
      generalMessageLabel: "Mesajınız",
      generalMessagePlaceholder:
        "Komandamız sizə necə kömək edə bilər? (tərəfdaşlıq, OEM təchizatı, ümumi suallar...)",
      boqLabel: "BOQ / tender faylını yüklə (.pdf, .xlsx, .docx, .zip)",
      boqHint: "Maksimum 25 MB",
      optionalTag: "İxtiyari",
      submitButton: "Layihə sorğusunu göndər →",
      submittingButton: "Sorğu göndərilir...",
      generalSubmitButton: "Mesajı göndər →",
      generalSubmittingButton: "Göndərilir...",
      validationErrors: {
        required: "Zəhmət olmasa bu məcburi sahəni doldurun.",
        email: "Zəhmət olmasa düzgün korporativ e-poçt daxil edin.",
      },
      confirmationTitle: "Layihə sorğusu qəbul edildi",
      generalConfirmationTitle: "Mesajınız qəbul edildi",
      referenceIdLabel: "Sorğu nömrəsi",
      confirmationBody:
        "Təşəkkür edirik. Müraciətiniz Novaltron-un regional mühəndislik şöbəsinə (info@novaltron.com) göndərildi. Mütəxəssisimiz texniki şərtlərinizi nəzərdən keçirərək 1–2 iş günü ərzində sizinlə əlaqə saxlayacaq.",
      confirmationReset: "Yeni sorğu göndər",
      tierPreselectedNote: "Ağıllı IPM matrisindən seçilib: Paket",
    },
  },
  legal: {
    metaTitle: "Məxfilik siyasəti və hüquqi bildiriş",
    eyebrow: "KORPORATİV UYĞUNLUQ VƏ MƏLUMATLARIN QORUNMASI",
    h1: "Məxfilik siyasəti, BOQ məxfiliyi və hüquqi bildiriş",
    subHeadline:
      "Novaltron LLC (Tbilisi, Gürcüstan) üzrə məlumatların idarə edilməsi, tender məxfiliyi və hüquqi bildiriş.",
    updatedLabel: "Qüvvədədir: 2026 · Versiya 1.0",
    sections: [
      {
        heading: "1. Hüquqi şəxs və fəaliyyət sahəsi",
        body: [
          "Bu veb-sayt (novaltron.com) Qafqaz və Mərkəzi Asiya üzrə mühəndislik inteqrasiyası, təchizat və regional tranzit mərkəzi kimi fəaliyyət göstərən Novaltron LLC (შპს ნოვალტრონი, Tbilisi, Gürcüstan) tərəfindən idarə olunur.",
          "Rəsmi korporativ yazışmalar və uyğunluq sorğuları üçün info@novaltron.com ünvanı ilə əlaqə saxlayın.",
        ],
      },
      {
        heading: "2. RFQ məlumatları və tender / BOQ məxfiliyi",
        body: [
          "RFQ portalı vasitəsilə göndərilən məlumatlar və əlavə fayllar (BOQ cədvəlləri, sahə parametrləri və texniki şərtlər) yalnız mühəndislik hesablamaları, uyğunluq matrisinin və kommersiya təklifinin hazırlanması üçün istifadə olunur.",
          "Müştəri tender sənədləri məxfi kommersiya məlumatı kimi qorunur və tələb olunan sistemin qiymətləndirilməsi üçün zəruri olan seçilmiş tərəfdaşlar istisna olmaqla üçüncü tərəflərə ötürülmür.",
        ],
      },
      {
        heading: "3. Məlumatların saxlanması və hüquqlar",
        body: [
          "Korporativ əlaqə məlumatları yalnız kommersiya qiymətləndirməsi, layihə icrası və qanunvericiliklə müəyyən edilmiş uçot öhdəlikləri müddətində saxlanılır.",
          "İstənilən vaxt info@novaltron.com ünvanına müraciət edərək məlumatlarınıza giriş, düzəliş və ya silinmə tələb edə bilərsiniz.",
        ],
      },
      {
        heading: "4. Texniki göstəricilər üzrə bildiriş",
        body: [
          "Saytda yerləşdirilmiş bütün mühəndislik təsvirləri və sxemlər beynəlxalq standartlara (ISO, CE, ATEX, Eurocode / EN, GLOBALG.A.P.) uyğun nümunəvi sistem imkanlarını əks etdirir. Yekun texniki zəmanətlər yalnız imzalanmış müqavilələrdə və FAT/SAT protokollarında müəyyən edilir.",
        ],
      },
    ],
  },
};
