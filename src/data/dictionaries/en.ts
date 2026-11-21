import type { SiteDictionary } from "./types";

export const en: SiteDictionary = {
  meta: {
    siteName: "Novaltron",
    defaultTitle: "Novaltron | Agro-Industrial Systems & Critical Infrastructure",
    defaultDescription:
      "Cross-border agro-industrial engineering, biological crop protection, and critical infrastructure integration across the Caucasus and Central Asia via Novaltron LLC (Tbilisi, Georgia).",
    skipToContent: "Skip to main technical content",
  },
  nav: {
    links: [
      { label: "Agro-Industrial", href: "/agro-solutions" },
      { label: "Bio & Smart IPM", href: "/bio-ipm" },
      { label: "Industrial & Infrastructure", href: "/industrial-infrastructure" },
      { label: "How We Deliver", href: "/turnkey-delivery" },
      { label: "Who We Are", href: "/about" },
    ],
    primaryCta: "Request a Quote",
    menuOpenLabel: "Open navigation menu",
    menuCloseLabel: "Close navigation menu",
    languageLabel: "Select language",
  },
  footer: {
    summary:
      "NOVALTRON — Cross-border agro-industrial engineering, biological crop protection, and critical infrastructure integration across the Caucasus and Central Asia.",
    hubLabel: "Operational Hub",
    hubValue: "Novaltron LLC (შპს ნოვალტრონი) — Tbilisi, Georgia",
    corridorLabel: "Regional Corridor",
    corridorValue: "Azerbaijan · Georgia · Uzbekistan · Kazakhstan · Türkiye",
    contactsLabel: "Engineering Desk",
    socialLabel: "Connect",
    navigationLabel: "Divisions & Pages",
    standardsLabel: "Aligned Standards",
    legalLinkLabel: "Privacy & Legal Notice",
    copyright: "© 2026 Novaltron LLC. All Rights Reserved.",
  },
  home: {
    eyebrow: "AGRO-INDUSTRIAL & INFRASTRUCTURE ENGINEERING • CAUCASUS & CENTRAL ASIA",
    h1: "Turnkey Agro-Industrial Systems & Critical Infrastructure Across the Caucasus and Central Asia",
    subHeadline:
      "Novaltron connects European and Turkish engineering technologies with regional project execution—delivering precision irrigation, commercial greenhouses, post-harvest grain terminals, biological crop protection, and industrial infrastructure through our Tbilisi hub.",
    primaryCta: "Submit Project RFQ →",
    secondaryCta: "Explore Agro-Solutions",
    heroImageAlt:
      "Aerial golden-hour view of precision center-pivot irrigation spanning geometric emerald agricultural fields with commercial glasshouses on the horizon",
    heroTrustBar: [
      "REGIONAL HUB EXECUTION (TBILISI, GEORGIA)",
      "4 CORE ENGINEERING DIVISIONS",
      "FAT/SAT CERTIFIED COMMISSIONING",
    ],
    heroGridHeading: "CORE ENGINEERING ARCHITECTURE · 04 SCHEMATIC DOMAINS",
    heroGridCards: [
      {
        code: "DWG-01",
        label: "IRRIGATION",
        sublabel: "Center-Pivot · EC/pH · Solar",
        variant: "irrigation",
        href: "/agro-solutions#irrigation",
      },
      {
        code: "DWG-02",
        label: "GREENHOUSES",
        sublabel: "Venlo Glass · Thermal Loops",
        variant: "greenhouses",
        href: "/agro-solutions#greenhouses",
      },
      {
        code: "DWG-03",
        label: "GRAIN SILOS",
        sublabel: "Z600 Eurocode · 200–500 t/h",
        variant: "grain-silos",
        href: "/agro-solutions#grain-silos",
      },
      {
        code: "DWG-04",
        label: "INDUSTRIAL PIPELINES & NETWORKS",
        sublabel: "PE100 · Steam · OT/SCADA",
        variant: "industrial-dual",
        href: "/industrial-infrastructure",
      },
    ],
    heroShowcase: {
      sectionTitle: "Four Integrated Engineering Domains—Visualized in Live Blueprint",
      sectionSubtitle:
        "Inspect each turnkey architecture from precision field hydraulics and Venlo climate loops to Eurocode grain terminals and mission-critical industrial pipelines & OT networks.",
      liveLabel: "LIVE SCHEMATIC",
      pausedLabel: "PAUSED",
      pauseButtonLabel: "Pause animation",
      playButtonLabel: "Play animation",
      tablistLabel: "Core engineering architecture domains",
      details: {
        irrigation: {
          title: "Precision Irrigation & Solar Pumping Architecture",
          summary:
            "Center-pivot and linear-move truss spans paired with self-cleaning canal filtration, automated EC/pH fertigation manifolds, solar drive headworks, and ultrasonic field telemetry.",
          ctaLabel: "Inspect Irrigation Systems",
          standards: ["EC/pH Telemetry", "Solar Pumping", "Auto-Filtration"],
          metrics: [
            { label: "Hydraulic Control", value: "EC/pH + VFD" },
            { label: "Monitoring", value: "Ultrasonic Flow" },
          ],
        },
        greenhouses: {
          title: "Venlo Glasshouses & Flue-Gas Thermal Loops",
          summary:
            "Multi-span Eurocode-engineered glass and poly structures integrating motorized ridge ventilation, thermal shading screens, elevated hydroponic gutters, and CO₂ flue-gas heat recovery.",
          ctaLabel: "Inspect Greenhouse Systems",
          standards: ["Eurocode / EN", "Venlo & Poly", "CO₂ Recovery"],
          metrics: [
            { label: "Structural Spec", value: "EN Wind / Snow" },
            { label: "Climate Loop", value: "Boiler + CO₂" },
          ],
        },
        "grain-silos": {
          title: "High-Capacity Grain Terminals & Optical Sorting",
          summary:
            "Complete intake-to-export lines uniting pre-cleaners, continuous tower dryers, bucket elevators, Z600 galvanized Eurocode silos, and optical color sorting up to 500 t/h.",
          ctaLabel: "Inspect Grain & Seed Lines",
          standards: ["Z600 Galvanized", "Eurocode / EN", "Optical Sorting"],
          metrics: [
            { label: "Conveying Rate", value: "200–500 t/h" },
            { label: "Silo Coating", value: "Z600 Steel" },
          ],
        },
        "industrial-dual": {
          title: "HDPE/PE100 Pipelines, Steam & Critical OT/SCADA",
          summary:
            "Dual-track utility delivery combining CNC data-logged butt-fusion welding, PE100 distribution lines, and waste-heat boilers with 1G–200G IP/MPLS, hardware-bypass OT firewalls, and GNSS PTP timing.",
          ctaLabel: "Inspect Industrial & OT Systems",
          standards: ["PE100 / CNC Weld", "IP/MPLS 100G", "IEC 61850 / PTP"],
          metrics: [
            { label: "Operating Temp.", value: "-20°C..+60°C" },
            { label: "Verification", value: "1G–200G RFC 2544" },
          ],
        },
      },
    },
    agroSection: {
      bandNumber: "01",
      bandMarker: "AGRO-INDUSTRIAL ENGINEERING",
      h2: "End-to-End Agricultural Infrastructure—From Field Water to Export Storage",
      intro:
        "We design, supply, and commission complete agricultural modernization projects for agro-parks, commercial farms, greenhouses, and grain operators across Azerbaijan, Georgia, Uzbekistan, and Kazakhstan.",
      viewAllCta: "Full Agro-Industrial Portfolio →",
      cards: [
        {
          id: "irrigation",
          code: "01.A",
          title: "Precision Irrigation & Water Management",
          description:
            "Large-scale center-pivot and linear-move field systems, pressure-compensating drip lines, automated EC/pH fertigation units, self-cleaning filtration banks, solar pumping stations, and smart water telemetry.",
          ctaLabel: "Explore Water & Irrigation →",
          anchor: "/agro-solutions#irrigation",
          standards: ["EC/pH Telemetry", "Solar Pumping", "Auto-Filtration"],
          diagramVariant: "irrigation",
          imageSrc: "/images/agro-irrigation.jpg",
          imageAlt:
            "Center-pivot irrigation truss span spraying fine mist over fertile agricultural rows with stainless filtration manifold",
        },
        {
          id: "greenhouses",
          code: "01.B",
          title: "Turnkey Commercial Greenhouses & Climate Control",
          description:
            "High-tech glass and multi-span poly-greenhouse structures engineered for regional wind and snow loads, complete with automated ventilation, thermal shading screens, high-efficiency boiler heating, and hydroponic growing systems.",
          ctaLabel: "Explore Greenhouse Systems →",
          anchor: "/agro-solutions#greenhouses",
          standards: ["Eurocode / EN", "Venlo & Poly", "Hydroponics"],
          diagramVariant: "greenhouses",
          imageSrc: "/images/agro-greenhouse.jpg",
          imageAlt:
            "Interior of a commercial Venlo glasshouse with elevated hydroponic gutters, thermal screens, and steel roof trusses",
        },
        {
          id: "grain-silos",
          code: "01.C",
          title: "Grain Silos, Drying & Optical Sorting",
          description:
            "Eurocode/EN-compliant corrugated steel silos with heavy-duty Z600 galvanization, high-capacity conveying lines (200–500 t/h), energy-efficient continuous grain dryers, aerodynamic seed cleaners, and optical color sorters.",
          ctaLabel: "Explore Grain & Seed Lines →",
          anchor: "/agro-solutions#grain-silos",
          standards: ["Eurocode / EN", "Z600 Galvanized", "200–500 t/h"],
          diagramVariant: "grain-silos",
          imageSrc: "/images/agro-grain-silos.jpg",
          imageAlt:
            "Galvanized corrugated steel grain storage silos with overhead catwalk conveyors and bucket elevator towers",
        },
        {
          id: "safety-feed",
          code: "01.D",
          title: "Silo Structural Monitoring, ATEX Safety & Feed Mills",
          description:
            "Non-intrusive structural metal-deformation silo weighing and overload protection, ATEX-certified explosion venting and CO gas monitoring, and automated compound feed batching and pelleting lines.",
          ctaLabel: "Explore Safety & Feed Systems →",
          anchor: "/agro-solutions#safety-feed",
          standards: ["ATEX", "CO & Load Telemetry", "Feed Pelleting"],
          diagramVariant: "safety-feed",
        },
      ],
    },
    bioBanner: {
      bandNumber: "02",
      bandMarker: "EXPORT READINESS & SUSTAINABLE CROP PROTECTION",
      h2: "Biological Crop Protection, Smart IPM & International Export Certification",
      body: "Meet strict EU, GCC, and modern retail Maximum Residue Limits (MRLs) while passing international audits on the first attempt. Novaltron delivers vendor-agnostic Integrated Pest Management (IPM) programs combining beneficial insects, greenhouse pollinators, solar-powered automated AI camera traps, and end-to-end readiness for GLOBALG.A.P. IFA v6, GRASP, Organic, and HACCP / ISO 22000 certification.",
      imageAlt:
        "Solar-powered automated optical monitoring camera trap mounted inside a modern glass commercial greenhouse",
      highlights: [
        "Biocontrol & Pollination",
        "Automated Pest Telemetry",
        "Tiered Commercial Packages (Audit Essentials, Export Pro, Precision Enterprise)",
      ],
      cta: "View Tiered IPM Packages →",
    },
    industrialSection: {
      bandNumber: "03",
      bandMarker: "INDUSTRIAL & INFRASTRUCTURE DIVISION",
      h2: "Supporting Utility, Energy & Mission-Critical Network Infrastructure",
      intro:
        "Beyond primary agricultural infrastructure, Novaltron delivers standards-aligned pipeline engineering, thermal energy recovery, and ruggedized OT/SCADA network verification.",
      imageAlt:
        "High-pressure black HDPE thermoplastic pipelines with precision flange joints and stainless steel industrial valves",
      trackA: {
        badge: "Track A • Pipelines & Thermal",
        title: "Industrial Engineering, Pipelines & Thermal Systems",
        anchor: "/industrial-infrastructure#pipelines-thermal",
        bullets: [
          "CNC data-logging hydraulic butt-fusion and electrofusion welding machinery, pipe preparation tools, and workshop fitting equipment.",
          "Industrial HDPE/PP piping systems, valves, and municipal water and gas distribution lines.",
          "High-efficiency industrial steam boilers, economizers, waste heat recovery systems, and agricultural biomass processing lines.",
        ],
        cta: "Explore Pipelines & Thermal →",
        diagramLabel: "DWG-06 · CNC WELDING & THERMAL RECOVERY",
      },
      trackB: {
        badge: "Track B • Critical IT & OT",
        title: "Critical IT, OT Cybersecurity & Telecom Networks",
        anchor: "/industrial-infrastructure#critical-it-ot",
        bullets: [
          "Ruggedized carrier-grade IP/MPLS routers, Layer 2/3 industrial switches, and serial device servers.",
          "Industrial firewalls with hardware bypass (-20°C to +60°C operating tolerance) and OT-aware Network Access Control (NAC).",
          "Substation teleprotection terminals, GNSS PTP Grandmaster timing servers, high-availability storage/PA systems, and 1G–200G hardware-based network verification (RFC 2544, IEC 61850, EN 61000-4 Level 3).",
        ],
        cta: "Explore Critical IT & OT →",
        diagramLabel: "DWG-07 · IP/MPLS, PTP & OT SECURITY",
      },
    },
    referenceSection: {
      eyebrow: "REGIONAL OPERATING MODEL & REPRESENTATIVE SCOPES",
      h2: "Single-Point Regional Integration Backed by European & Turkish Engineering Specialists",
      subtitle:
        "Novaltron operates as a lean Tbilisi procurement and systems-integration desk coordinating vetted European and Turkish manufacturers, freight consolidation, and specialized commissioning engineers under one contract.",
      operatingModelBadge: "WHY ONE INTEGRATOR",
      operatingModelBody:
        "Instead of managing 6–10 separate foreign exporters, customs brokers, and site contractors, agro-holdings and utilities contract one accountable Tbilisi hub with aligned European/Turkish engineering partners.",
      disclaimer:
        "Representative turnkey engineering scope benchmarks structured for Caucasus & Central Asia tenders; client-specific project references are shared under NDA during technical pre-qualification.",
      scopes: [
        {
          code: "SCOPE-01",
          corridor: "Caucasus Agro-Park Corridor",
          metric: "450 ha",
          title: "Precision Irrigation & Solar Pumping Modernization",
          summary:
            "Integrated center-pivot spans, automated self-cleaning sand/disc filtration for high-turbidity canal intake, multi-channel EC/pH fertigation, and ultrasonic water telemetry.",
          standards: ["EC/pH Automation", "Solar Pumping", "FAT/SAT"],
        },
        {
          code: "SCOPE-02",
          corridor: "Central Asia Grain Corridor",
          metric: "20,000 t",
          title: "Corrugated Steel Grain Terminal & ATEX Safety",
          summary:
            "Eurocode/EN Z600 flat-bottom silos with 300 t/h conveying lines, continuous heat-recovery tower drying, non-intrusive leg strain weighing, and ATEX explosion venting.",
          standards: ["Eurocode / EN", "Z600", "ATEX"],
        },
        {
          code: "SCOPE-03",
          corridor: "Regional Export Horticulture",
          metric: "10 ha",
          title: "Commercial Greenhouse Smart IPM & IFA v6 Readiness",
          summary:
            "Solar-powered AI optical traps, beneficial insect & bumblebee pollination schedules, pre-harvest MRL residue lab verification, and full GLOBALG.A.P. IFA v6 audit dossier.",
          standards: ["GLOBALG.A.P. IFA v6", "GRASP", "EU MRL"],
        },
      ],
    },
    deliverySection: {
      eyebrow: "SINGLE POINT OF ACCOUNTABILITY",
      h2: "5-Step Turnkey Delivery Workflow",
      subtitle:
        "Calibrated engineering discipline from initial site audit to measurement-backed commissioning and lifecycle RMA.",
      deliverableLabel: "Key Milestone Deliverable",
      steps: [
        {
          step: "01",
          title: "Specification & Site Analysis",
          description:
            "Infrastructure audits, agronomic/engineering sizing, and tender technical compliance matrices.",
          deliverable: "Site Feasibility & Compliance Matrix",
        },
        {
          step: "02",
          title: "Custom System Engineering",
          description:
            "Equipment configuration, process flow design, and integrated project scheduling.",
          deliverable: "P&ID / Network Topology & BOQ",
        },
        {
          step: "03",
          title: "Cross-Border Procurement & Transit",
          description:
            "Multi-currency European/Turkish sourcing via Tbilisi, export documentation, and customs clearance.",
          deliverable: "Consolidated Freight & Origin Docs",
        },
        {
          step: "04",
          title: "On-Site Integration & FAT/SAT",
          description:
            "Mechanical/electrical installation, calibration, and evidence-based Factory & Site Acceptance Testing.",
          deliverable: "Signed FAT/SAT Commissioning Protocol",
        },
        {
          step: "05",
          title: "Lifecycle Support & RMA",
          description:
            "Single-desk warranty management, spare parts logistics, and regional field engineering support.",
          deliverable: "Warranty SLA & Spare Parts Desk",
        },
      ],
    },
    trustSection: {
      eyebrow: "INSTITUTIONAL GOVERNANCE & EXECUTION PROOF",
      h2: "Structured Regional Execution Through Tbilisi",
      subtitle:
        "Built for EPC procurement auditors, commercial agro-holdings, and institutional finance review.",
      governancePillars: [
        {
          number: "01",
          title: "European Governance & Standards",
          detail:
            "Aligned with ISO 9001, ISO 14001, CE, ATEX, EN, and GLOBALG.A.P. frameworks across engineering, food safety, and industrial compliance.",
          tags: ["ISO 9001", "ISO 14001", "CE", "ATEX", "EN", "GLOBALG.A.P."],
        },
        {
          number: "02",
          title: "Regional Compliance & Local AVL",
          detail:
            "Structured for EPC vendor pre-qualification and multi-sector delivery across Azerbaijan, Georgia, Uzbekistan, Kazakhstan, and Türkiye.",
          tags: ["AZ", "GE", "UZ", "KZ", "TR", "EPC Ready"],
        },
        {
          number: "03",
          title: "Transparent Supply Chain Documentation",
          detail:
            "Operated through Novaltron LLC (Tbilisi, Georgia) with auditable commercial invoices, packing lists, certificates of origin, and FAT/SAT handover records.",
          tags: ["Novaltron LLC", "Origin Docs", "FAT/SAT"],
        },
      ],
      bottomCtaTitle: "Ready to Scope Your Next Agro-Industrial or Infrastructure Project?",
      bottomCtaBody:
        "Share your technical specifications, acreage details, or Bill of Quantities (BOQ) with our engineering team for a tailored commercial proposal.",
      bottomCtaButton: "Request a Custom Quote →",
    },
  },
  agroSolutions: {
    metaTitle: "Agro-Industrial & Post-Harvest Solutions",
    eyebrow: "FLAGSHIP DIVISION • AGRO-INDUSTRIAL & POST-HARVEST ENGINEERING",
    h1: "Turnkey Agricultural Infrastructure—From Field Water Management to Export-Grade Storage",
    subHeadline:
      "Novaltron designs, supplies, and commissions integrated agro-industrial systems across Azerbaijan, Georgia, Uzbekistan, and Kazakhstan—combining European and Turkish engineering standards with single-point regional execution.",
    anchors: [
      { id: "irrigation", label: "Irrigation & Water" },
      { id: "greenhouses", label: "Commercial Greenhouses" },
      { id: "grain-silos", label: "Grain Silos & Drying" },
      { id: "safety-feed", label: "Safety & Feed Mills" },
    ],
    pillars: [
      {
        id: "irrigation",
        number: "01",
        badge: "Pillar 01",
        title: "Precision Irrigation, Filtration & Water Management",
        subtitle:
          "Automated water delivery, high-turbidity filtration, solar pumping, and real-time moisture telemetry engineered for arid and continental regions.",
        diagramLabel: "DWG-01 · HYDRAULICS & TELEMETRY SCHEMATIC",
        imageSrc: "/images/agro-irrigation.jpg",
        imageAlt:
          "Center-pivot irrigation truss span over fertile agricultural rows with stainless filtration manifold",
        standards: ["EC/pH Automation", "Solar Pumping", "Ultrasonic Flow"],
        items: [
          {
            heading: "Field & Block Distribution",
            detail:
              "Large-scale center-pivot and linear-move systems, hose-reel irrigators, and pressure-compensating drip and micro-sprinkler networks.",
          },
          {
            heading: "Fertigation & High-Turbidity Filtration",
            detail:
              "Automated multi-channel EC/pH dosing units paired with self-cleaning media, disc, and screen filtration banks for river and canal intake.",
          },
          {
            heading: "Solar Pumping & Water Telemetry",
            detail:
              "Deep-well, vertical turbine, and off-grid solar pumping stations with ultrasonic flow metering and soil-moisture telemetry.",
          },
        ],
      },
      {
        id: "greenhouses",
        number: "02",
        badge: "Pillar 02",
        title: "Turnkey Commercial Greenhouses & Climate Control",
        subtitle:
          "High-yield glass and multi-span poly-greenhouse structures engineered for regional wind and snow loads with automated climate and thermal control.",
        diagramLabel: "DWG-02 · CLIMATE & THERMAL LOOP SCHEMATIC",
        imageSrc: "/images/agro-greenhouse.jpg",
        imageAlt:
          "Commercial Venlo glasshouse interior with elevated hydroponic gutters and thermal shading screens",
        standards: ["Eurocode / EN", "Venlo & Poly", "CO₂ Enrichment"],
        items: [
          {
            heading: "Structures & Glazing",
            detail:
              "Hot-dip galvanized Venlo glasshouses and multi-span gothic poly-structures designed to Eurocode / EN wind, snow, and seismic loads.",
          },
          {
            heading: "Automated Climate & Shading",
            detail:
              "Motorized roof/side ventilation, thermal energy-saving and blackout screens, high-pressure fogging/cooling, and CO₂ enrichment.",
          },
          {
            heading: "Boilers & Hydroponic Systems",
            detail:
              "High-efficiency hot-water and steam boilers with flue-gas economizers, thermal buffer tanks, and elevated hydroponic gutter lines.",
          },
        ],
      },
      {
        id: "grain-silos",
        number: "03",
        badge: "Pillar 03",
        title: "Grain Silos, Drying, Cleaning & Optical Sorting",
        subtitle:
          "Export-grade bulk grain storage, gentle high-capacity conveying, continuous drying, and precision optical sorting for agro-parks and terminals.",
        diagramLabel: "DWG-03 · POST-HARVEST TERMINAL FLOW",
        imageSrc: "/images/agro-grain-silos.jpg",
        imageAlt:
          "Galvanized corrugated steel grain silos with overhead catwalk conveyor bridges and bucket elevators",
        standards: ["Eurocode / EN", "Z600 / Magnelis", "200–500 t/h"],
        items: [
          {
            heading: "Corrugated Steel Silos & Handling",
            detail:
              "Eurocode / EN-compliant flat-bottom and hopper-bottom silos (Z600 / Magnelis galvanization) with 200–500 t/h bucket elevators and enclosed conveyors.",
          },
          {
            heading: "Continuous & Recirculating Drying",
            detail:
              "Energy-efficient continuous-flow tower and batch grain dryers with heat-recovery insulation and low-emission burners.",
          },
          {
            heading: "Seed Calibration & Optical Sorting",
            detail:
              "High-throughput vibrating pre-cleaners, aerodynamic gravity separators for certified seed lines, optical color sorters, and nut processing lines.",
          },
        ],
      },
      {
        id: "safety-feed",
        number: "04",
        badge: "Pillar 04",
        title: "Silo Structural Monitoring, ATEX Safety & Feed Lines",
        subtitle:
          "Non-intrusive structural load protection, certified explosion mitigation, and automated compound feed milling for livestock and poultry clusters.",
        diagramLabel: "DWG-04 · ATEX & FEED BATCHING SCHEMATIC",
        standards: ["ATEX Certified", "Strain Telemetry", "Micro-Dosing"],
        items: [
          {
            heading: "Non-Intrusive Silo Weighing & Overload",
            detail:
              "External metal-deformation strain sensors mounted on silo support legs for real-time inventory weight and structural load protection.",
          },
          {
            heading: "ATEX Explosion & Gas Safety",
            detail:
              "ATEX-certified explosion venting panels, rapid isolation valves, central baghouse dust extraction, and continuous CO and temperature monitoring.",
          },
          {
            heading: "Compound Feed & TMR Lines",
            detail:
              "High-homogeneity single- and twin-shaft batch mixers, gravimetric micro-dosing for premixes, pelleting/cooling lines, and TMR diet mixers.",
          },
        ],
      },
    ],
    bottomCtaTitle: "Planning an Agro-Park, Greenhouse Complex, or Grain Terminal?",
    bottomCtaBody:
      "Send your site parameters, capacity targets, or BOQ to our engineering desk for a structured turnkey proposal.",
    bottomCtaButton: "Submit Agro-Project RFQ →",
  },
  bioIpm: {
    metaTitle: "Bio-Solutions, Smart IPM & Export Certification",
    eyebrow: "SUSTAINABLE CROP PROTECTION & EXPORT AUDIT READINESS",
    h1: "Biological Crop Protection, Smart IPM & International Export Certification",
    subHeadline:
      "Helping commercial greenhouses, orchards, berry farms, and agro-holdings across the Caucasus and Central Asia reduce chemical residues, comply with strict EU and GCC Maximum Residue Limits (MRLs), and pass international certification audits on the first attempt.",
    imageAlt:
      "Solar-powered optical camera trap installed in a commercial glasshouse surrounded by healthy green crops",
    anchors: [
      { id: "core-scope", label: "Core Bio & IPM Scope" },
      { id: "packages", label: "Tiered IPM Packages" },
      { id: "roadmap", label: "Certification Roadmap" },
    ],
    coreScopeTitle: "3-Pillar Integrated Pest Management & Certification Scope",
    coreScope: [
      {
        title: "Biological Inputs & Biocontrol",
        body: "Beneficial predatory insects and mites (targeting whiteflies, thrips, spider mites, aphids, and tuta absoluta), commercial greenhouse bumblebee pollination hives, species-specific monitoring pheromones, mating-disruption dispensers, chromotropic sticky traps, and low-residue biopesticides.",
        badges: ["Predatory Mites", "Pollination Hives", "Mating Disruption"],
      },
      {
        title: "Digital Pest Scouting & Telemetry",
        body: "Solar-powered automated AI camera traps with daily pest species counting, smartphone sticky-trap scanning apps, and micro-climate weather stations for Growing Degree Day (GDD) modeling.",
        badges: ["Solar AI Traps", "GDD Weather", "Cloud Telemetry"],
      },
      {
        title: "International Certification Readiness",
        body: "Technical preparation for GLOBALG.A.P. IFA v6 (Option 1 single farms & Option 2 grower groups), GRASP, Organic, and HACCP / ISO 22000—covering gap analyses, SOPs, spray logs, pre-harvest MRL residue lab coordination, mock audits, and accredited European Certification Body (CB) liaison.",
        badges: ["GLOBALG.A.P. IFA v6", "GRASP", "ISO 22000 / HACCP"],
      },
    ],
    packagesSection: {
      title: "Tiered Smart IPM Packages",
      subtitle:
        "Select your operation scale to highlight the recommended turnkey IPM and export-readiness package.",
      selectorLabel: "Filter by Operation Scale:",
      recommendedLabel: "Recommended Fit",
      tiers: [
        {
          id: "1",
          name: "Tier 1: IPM Audit Essentials",
          scaleTag: "1–3 ha greenhouse or 10–25 ha orchard",
          scaleKey: "small",
          scaleLabel: "Small / Mid Farm",
          hardwareTitle: "Hardware & Software",
          hardwareItems: [
            "Standard manual pheromone & color sticky traps",
            "Mobile trap-scanning software license",
            "Cloud digital scouting logbook",
          ],
          advisoryTitle: "Inputs & Advisory",
          advisoryItems: [
            "Crop-specific IPM Action Threshold Matrix",
            "EU MRL-compliant input list & PHI schedule",
            "Baseline IPM Gap Analysis",
            "GLOBALG.A.P. IFA v6 IPM Plan & SOPs",
            "1× pre-audit mock inspection",
            "1-season sticky plates & pheromone lures",
          ],
          ctaLabel: "Request Tier 1 Quote →",
        },
        {
          id: "2",
          name: "Tier 2: Smart IPM Export Pro",
          scaleTag: "3–10 ha greenhouse or 25–100 ha orchard",
          scaleKey: "commercial",
          scaleLabel: "Commercial Greenhouse / Orchard",
          featured: true,
          hardwareTitle: "Hardware & Connectivity",
          hardwareItems: [
            "2–4× Solar-Powered Automated AI Camera Traps",
            "Manual sticky traps + mobile app for secondary blocks",
            "12-month Cloud Pest-Analytics Portal + M2M LTE SIM cards",
          ],
          advisoryTitle: "Inputs & Advisory",
          advisoryItems: [
            "Custom Biological Control Release Plan (beneficial insects, pollinators, mating disruption)",
            "Fortnightly remote image review & 2× on-site inspections",
            "Full IFA v6 IPM dossier + 1× Multi-Residue Lab Test coordination",
            "1-season replacement plates/lures & RMA support",
          ],
          ctaLabel: "Request Tier 2 Quote →",
        },
        {
          id: "3",
          name: "Tier 3: Precision IPM Enterprise",
          scaleTag: "100+ ha agro-holdings, Agro-Parks, & Option 2 Grower Groups",
          scaleKey: "enterprise",
          scaleLabel: "Agro-Holding / Grower Group",
          hardwareTitle: "Hardware & Connectivity",
          hardwareItems: [
            "5–10+ Solar-Powered Automated AI Camera Traps",
            "1× Automated Micro-Climate Weather Station",
            "Multi-site Central HQ Telemetry Dashboard + API/ERP export + SMS/WhatsApp alerts",
          ],
          advisoryTitle: "Inputs & Advisory",
          advisoryItems: [
            "Season-long Biocontrol & Low-Residue Program + resistance management matrix",
            "Monthly agronomic supervision",
            "Option 2 ICS (Internal Control System) setup",
            "Pre-harvest MRL residue verification",
            "Bulk seasonal consumables & on-site technician SLA",
          ],
          ctaLabel: "Request Tier 3 Quote →",
        },
      ],
      footnote:
        "Third-party accredited Certification Body audit fees and accredited laboratory MRL testing fees are billed transparently at cost as pass-through items.",
    },
    roadmapSection: {
      title: "4-Step International Certification Cycle",
      steps: [
        {
          step: "01",
          title: "On-Farm Gap Analysis & MRL Review",
          detail:
            "Baseline farm audit against GLOBALG.A.P. IFA v6 / GRASP criteria and chemical residue risk screening.",
        },
        {
          step: "02",
          title: "Trap Deployment & Biocontrol Protocol",
          detail:
            "Installation of AI camera traps, pheromone networks, pollinators, and beneficial insect release schedules.",
        },
        {
          step: "03",
          title: "Automated Scouting & Mock Audit",
          detail:
            "Continuous pest threshold tracking, digital spray logs, pre-harvest MRL lab testing, and full mock inspection.",
        },
        {
          step: "04",
          title: "Accredited CB Audit & Certification",
          detail:
            "Coordinated inspection with an accredited European Certification Body for first-attempt export certification.",
        },
      ],
    },
  },
  industrialInfrastructure: {
    metaTitle: "Industrial Engineering & Critical Infrastructure",
    eyebrow: "INDUSTRIAL & CRITICAL INFRASTRUCTURE DIVISION",
    h1: "Industrial Pipeline Engineering, Thermal Energy & Mission-Critical OT/SCADA Networks",
    subHeadline:
      "Supporting water and gas utilities, manufacturing plants, power substations, and EPC contractors across the Caucasus and Central Asia with standards-aligned hardware, integration, and measurement-backed commissioning.",
    anchors: [
      { id: "pipelines-thermal", label: "Track A: Pipelines & Thermal Engineering" },
      { id: "critical-it-ot", label: "Track B: Critical IT & OT Cybersecurity" },
    ],
    tracks: [
      {
        id: "pipelines-thermal",
        badge: "Track A",
        title: "Industrial Engineering, Pipelines & Thermal Systems",
        subtitle:
          "Precision thermoplastic welding machinery, high-pressure fluid transfer networks, and industrial steam and waste-heat recovery plants.",
        standards: ["PE100 / PP-R", "CNC Weld Logging", "Heat Recovery"],
        diagramLabel: "DWG-06 · PIPELINE WELDING & THERMAL LOOP",
        imageSrc: "/images/industrial-infra.jpg",
        imageAlt:
          "High-pressure black HDPE thermoplastic pipelines with stainless steel isolation valves in a modern utility facility",
        items: [
          {
            heading: "Thermoplastic Pipeline Welding Machinery",
            detail:
              "Hydraulic butt-fusion welding machines with integrated CNC automation and weld-data logging for HDPE, PP, and PVDF pressure pipelines; universal electrofusion control units, multi-angle workshop fitting fabrication machines, and pipe-end preparation tools.",
          },
          {
            heading: "High-Pressure Fluid Transfer & Piping",
            detail:
              "Complete thermoplastic piping systems (PE100, PP-R), electrofusion and butt-weld fittings, industrial isolation valves, and municipal water, wastewater, and gas distribution networks.",
          },
          {
            heading: "Thermal Engineering, Steam & Biomass Energy",
            detail:
              "High-efficiency industrial steam boilers, hot-water generators, shell-and-tube heat exchangers, flue-gas economizers, waste heat recovery systems, and agricultural biomass shredders/composting lines.",
          },
        ],
      },
      {
        id: "critical-it-ot",
        badge: "Track B",
        title: "Critical IT, OT Cybersecurity & Telecom Networks",
        subtitle:
          "Carrier-grade industrial routing, hardware-bypass OT firewalls, substation teleprotection, GNSS timing, and 1G–200G network verification.",
        standards: [
          "IP/MPLS",
          "RFC 2544",
          "IEC 61850",
          "IEEE 1588 PTP",
          "EN 61000-4 Level 3",
        ],
        diagramLabel: "DWG-07 · SUBSTATION OT/SCADA & PTP TOPOLOGY",
        items: [
          {
            heading: "Industrial Backbone & Carrier Routing",
            detail:
              "Ruggedized 1U and 2U modular IP/MPLS routers (1G–100G port architectures, -20°C to +60°C operating tolerance); managed Layer 2/3 industrial Ethernet switches, serial-to-IP device servers, high-availability enterprise storage, and industrial voice/PA platforms.",
          },
          {
            heading: "OT / SCADA Cybersecurity & Access Control",
            detail:
              "Industrial next-generation firewalls with modular optical/copper hardware bypass cards; distributed Network Access Control (NAC) architectures with built-in OT device profiling (protection relays, RTUs, PLCs, IEDs).",
          },
          {
            heading: "Substation Teleprotection, Synchronization & Network Verification",
            detail:
              "Substation teleprotection terminals, GNSS PTP Grandmaster timing servers, and hardware-based 1G–200G Network Verification Platforms (RFC 2544, ITU-T Y.1564, IEEE 1588 PTP, IEC 61850 GOOSE/SV, EN 61000-4 Level 3 EMC).",
          },
        ],
      },
    ],
    bottomCtaTitle: "Scoping a Pipeline, Thermal Plant, or Substation OT/SCADA Tender?",
    bottomCtaButton: "Submit Industrial RFQ →",
  },
  turnkeyDelivery: {
    metaTitle: "Turnkey Project Delivery & EPC Execution",
    eyebrow: "SINGLE POINT OF ACCOUNTABILITY • EPC & TURNKEY EXECUTION",
    h1: "End-to-End Turnkey Project Delivery Across the Caucasus & Central Asia",
    subHeadline:
      "Novaltron eliminates multi-vendor fragmentation by coordinating European and Turkish engineering procurement, consolidated transit logistics, measurement-backed FAT/SAT commissioning, and lifecycle RMA under one accountable contract.",
    anchors: [
      { id: "workflow", label: "5-Step Delivery Workflow" },
      { id: "execution-pillars", label: "Execution & Quality Gates" },
      { id: "benchmarks", label: "Representative Scopes" },
    ],
    workflowTitle: "5-Step Execution Workflow",
    workflowSubtitle:
      "From initial site audit and engineering sizing through cross-border transit, FAT/SAT commissioning, and lifecycle RMA.",
    steps: [
      {
        step: "01",
        title: "Discovery & Specification Analysis",
        description:
          "Infrastructure audits, agronomic/engineering sizing, and tender technical compliance matrices.",
        deliverable: "Compliance Matrix & Sizing Report",
      },
      {
        step: "02",
        title: "Custom System Engineering & Sizing",
        description:
          "Equipment configuration, process flow design, and integrated project scheduling.",
        deliverable: "System Schematics & Integrated Schedule",
      },
      {
        step: "03",
        title: "Cross-Border Procurement & Transit Logistics",
        description:
          "Multi-currency European/Turkish sourcing via Tbilisi, export documentation, and customs clearance.",
        deliverable: "Freight Consolidation & Customs Dossier",
      },
      {
        step: "04",
        title: "On-Site Integration & FAT/SAT Commissioning",
        description:
          "Mechanical/electrical installation, calibration, and evidence-based Factory & Site Acceptance Testing.",
        deliverable: "Verified FAT/SAT Sign-Off Protocols",
      },
      {
        step: "05",
        title: "Lifecycle Support, Spare Parts & RMA",
        description:
          "Single-desk warranty management, spare parts logistics, and regional field engineering support.",
        deliverable: "Regional Spare Parts & Warranty Desk",
      },
    ],
    pillarsTitle: "Execution Pillars & Quality Gates",
    pillarsSubtitle:
      "Structured controls across procurement, site commissioning, and post-handover operation to keep multi-discipline projects on schedule and audit-ready.",
    executionPillars: [
      {
        badge: "Gate 01 • Supply & Transit",
        title: "Consolidated Cross-Border Procurement & Logistics",
        body: "Direct contracting with vetted European and Turkish specialist manufacturers coordinated through our Tbilisi hub under unified commercial schedules.",
        bullets: [
          "Multi-currency OEM sourcing and consolidated commercial settlements.",
          "Synchronized factory release, freight consolidation, and bonded regional transit.",
          "Complete export and customs dossiers aligned with project milestones.",
        ],
        tags: ["EU / TR OEMs", "Freight Consolidation", "Customs Transit"],
      },
      {
        badge: "Gate 02 • Verification",
        title: "On-Site Integration, FAT/SAT & Field HSE",
        body: "Measurement-backed verification at both the factory floor and final installation site before formal operational handover.",
        bullets: [
          "Pre-shipment Factory Acceptance Testing (FAT) against tender compliance matrices.",
          "Mechanical, electrical, and control-system integration with instrument calibration.",
          "Signed Site Acceptance Testing (SAT) sign-off protocols under strict field HSE controls.",
        ],
        tags: ["FAT / SAT Protocols", "Calibration", "Site HSE"],
      },
      {
        badge: "Gate 03 • Continuity",
        title: "Lifecycle Support, Spare Parts & Single-Desk RMA",
        body: "Post-commissioning continuity managed from a single regional desk so clients never have to chase separate foreign warranties.",
        bullets: [
          "Centralized warranty administration and manufacturer RMA coordination.",
          "Recommended critical spare-parts provisioning and expedited replenishment.",
          "Operator training and regional field engineering assistance across project lifecycles.",
        ],
        tags: ["Single-Desk RMA", "Critical Spares", "Field SLA"],
      },
    ],
    scopesTitle: "Representative Turnkey Scope Benchmarks",
    scopesSubtitle:
      "Illustrative multi-discipline engineering packages structured for agro-industrial holdings, grain terminals, and infrastructure tenders across our regional corridor.",
    bottomCtaTitle: "Scoping a Multi-Discipline Turnkey Project or Tender?",
    bottomCtaBody:
      "Share your site parameters, technical specifications, or BOQ with our Tbilisi engineering desk for a consolidated delivery plan and commercial proposal.",
    bottomCtaButton: "Request a Turnkey Proposal →",
    aboutCrossLinkLabel: "About & Corporate Compliance",
  },
  aboutCompliance: {
    metaTitle: "About Novaltron & Corporate Compliance",
    eyebrow: "CORPORATE ARCHITECTURE • GOVERNANCE & COMPLIANCE",
    h1: "Regional Corporate Hub & Cross-Border Institutional Compliance",
    subHeadline:
      "Operated through Novaltron LLC in Tbilisi, Georgia, we bridge Western European corporate governance with transparent physical trade documentation and EPC vendor readiness across the Caucasus and Central Asia.",
    anchors: [
      { id: "corporate-structure", label: "Corporate Structure" },
      { id: "governance", label: "Governance & Standards" },
      { id: "compliance-readiness", label: "Institutional Readiness" },
    ],
    corporateTitle: "Regional Corporate Hub",
    corporateSubtitle:
      "One accountable legal and operational entity positioned at the logistics crossroads linking European and Turkish manufacturing with Caucasus and Central Asian project sites.",
    corporateHubName: "Novaltron LLC (Tbilisi, Georgia — შპს ნოვალტრონი)",
    corporateHubRole: "International Procurement, Trade Finance & Regional Transit Hub",
    corporateHubPoints: [
      "Direct European and Turkish manufacturer contracting with consolidated multi-currency settlements.",
      "Structured freight forwarding, customs transit, and bonded logistics across the Caucasus and Central Asia.",
      "Single-point commercial accountability for turnkey agro-industrial and critical infrastructure tenders.",
    ],
    corridorCountries: ["Azerbaijan", "Georgia", "Uzbekistan", "Kazakhstan", "Türkiye"],
    corridorDiagramLabel: "REGIONAL TRANSIT & PROCUREMENT CORRIDOR",
    governanceTitle: "Operating Model, Governance & Standards",
    governanceSubtitle:
      "Disciplined technical standards, auditable commercial paperwork, and vetted specialist engineering partnerships built for bank and EPC scrutiny.",
    operatingModelHeading: "Regional Integrator Operating Model",
    operatingModelBody:
      "Novaltron bridges Western European corporate governance with disciplined regional execution—operating as a dedicated Tbilisi engineering integration and procurement hub backed by vetted European and Turkish specialist manufacturers and certified commissioning teams.",
    standardsHeading: "International Standards Alignment",
    standardsBody:
      "All engineered systems and project deliveries are aligned with recognized international engineering, food-safety, and industrial standards:",
    standardsList: [
      "ISO 9001",
      "ISO 14001",
      "ISO 22000",
      "CE",
      "ATEX",
      "Eurocode / EN",
      "GLOBALG.A.P.",
    ],
    documentationHeading: "Auditable Physical Trade & HSE Discipline",
    documentationItems: [
      "Full auditable physical trade documentation: Commercial Invoices, Packing Lists, and Certificates of Origin.",
      "Evidence-based Factory Acceptance Testing (FAT) and Site Acceptance Testing (SAT) protocols.",
      "Strict Health, Safety, and Environment (HSE) compliance across all field installation sites.",
    ],
    complianceTitle: "Institutional Readiness & Vendor Pre-Qualification",
    complianceSubtitle:
      "Structured to meet the due-diligence expectations of international trade banks, EPC procurement auditors, and agricultural export certifiers.",
    bottomCtaTitle: "Need Corporate Pre-Qualification or Trade Compliance Documentation?",
    bottomCtaBody:
      "Contact our Tbilisi corporate and engineering desk for AVL onboarding packets, NDA-protected reference scopes, or formal tender inquiries.",
    bottomCtaButton: "Contact Our Corporate Desk →",
    turnkeyCrossLinkLabel: "Explore Turnkey Delivery Workflow",
  },
  contact: {
    metaTitle: "Technical Consultation & RFQ Portal",
    eyebrow: "TECHNICAL CONSULTATION & RFQ DESK",
    h1: "Submit a Project RFQ or Technical Consultation Request",
    subHeadline:
      "Share your project parameters, farm acreage, technical specifications, or Bill of Quantities (BOQ). Our regional engineering and agronomic specialists respond within 24–48 business hours.",
    directDeskTitle: "Direct Engineering Desk",
    directDeskBody:
      "All RFQ submissions are routed directly to our Tbilisi operational desk for technical review and commercial scoping.",
    responseSla: "Response SLA: 24–48 business hours",
    socialLabel: "Official Channels",
    privacyNotice: "BOQ attachments and project details are handled strictly under B2B confidentiality per our",
    legalLinkLabel: "Privacy & Legal Notice",
    form: {
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "e.g. Leyla Mammadova",
      companyLabel: "Company / Organization Name",
      companyPlaceholder: "e.g. Caspian Agro Park LLC",
      emailLabel: "Work Email",
      emailPlaceholder: "name@company.com",
      phoneLabel: "Phone / WhatsApp Number",
      phonePlaceholder: "+995 / +994 / +998 ...",
      countryLabel: "Project Country / Region",
      countryPlaceholder: "Select target country or region",
      countries: [
        "Azerbaijan",
        "Georgia",
        "Uzbekistan",
        "Kazakhstan",
        "Türkiye",
        "Other Central Asia / Caucasus",
      ],
      divisionLabel: "Primary Division",
      divisionPlaceholder: "Select engineering division",
      divisions: [
        {
          value: "agro-irrigation",
          label: "Agro-Industrial: Precision Irrigation & Water Management",
        },
        {
          value: "agro-greenhouses",
          label: "Agro-Industrial: Turnkey Commercial Greenhouses",
        },
        {
          value: "agro-grain",
          label: "Agro-Industrial: Grain Silos, Drying & Optical Sorting",
        },
        {
          value: "agro-safety-feed",
          label: "Agro-Industrial: Silo Safety & Compound Feed Lines",
        },
        {
          value: "bio-ipm",
          label: "Bio-Solutions: Smart IPM & Export Certification",
        },
        {
          value: "industrial-pipelines",
          label: "Industrial Engineering: Pipelines, Welding & Thermal Systems",
        },
        {
          value: "critical-it-ot",
          label: "Critical Infrastructure: IT, OT Cybersecurity & Telecom Networks",
        },
        {
          value: "multi-division",
          label: "Multi-Division / Turnkey EPC Tender",
        },
      ],
      timelineLabel: "Estimated Project Timeline",
      timelinePlaceholder: "e.g. Q2 2026 Commissioning",
      scopeLabel: "Project Scope, Acreage, or Technical Summary",
      scopePlaceholder:
        "Describe capacity (t/h, ha), target standards, site conditions, or key technical requirements...",
      boqLabel: "Attach Tender Specs or BOQ (.pdf, .xlsx, .docx, .zip)",
      boqHint: "Optional — max 25 MB",
      requiredTag: "Required",
      optionalTag: "Optional",
      submitButton: "Submit Project RFQ →",
      submittingButton: "Routing RFQ...",
      validationErrors: {
        required: "Please complete this required field.",
        email: "Please enter a valid work email address.",
      },
      confirmationTitle: "Project RFQ Received",
      referenceIdLabel: "Inquiry Reference",
      confirmationBody:
        "Thank you. Your inquiry has been routed to Novaltron’s regional engineering desk (info@novaltron.com). A specialist will review your specifications and contact you within 1–2 business days.",
      confirmationReset: "Submit Another Inquiry",
      tierPreselectedNote: "Pre-selected from Smart IPM matrix: Tier",
    },
  },
  legal: {
    metaTitle: "Privacy Policy & Legal Notice",
    eyebrow: "CORPORATE COMPLIANCE & DATA PROTECTION",
    h1: "Privacy Policy, BOQ Confidentiality & Legal Notice",
    subHeadline:
      "Institutional data governance, tender confidentiality, and legal operating notice for Novaltron LLC (Tbilisi, Georgia).",
    updatedLabel: "Effective: 2026 · Version 1.0",
    sections: [
      {
        heading: "1. Corporate Entity & Operational Scope",
        body: [
          "This website (www.novaltron.com) is operated by Novaltron LLC (შპს ნოვალტრონი), Tbilisi, Georgia, acting as a cross-border engineering integration, procurement, and regional transit hub across the Caucasus and Central Asia.",
          "For official corporate correspondence, compliance inquiries, or pre-qualification dossiers, contact info@novaltron.com.",
        ],
      },
      {
        heading: "2. RFQ Data & Tender / BOQ Confidentiality",
        body: [
          "Information and optional files (including Bills of Quantities, site parameters, and technical specifications) submitted through the RFQ portal are used strictly to prepare engineering sizing, compliance matrices, and commercial proposals.",
          "Client tender documents are treated as confidential commercial information and are never sold, published, or shared outside vetted manufacturing and engineering partners required to price or deliver the requested scope.",
        ],
      },
      {
        heading: "3. Data Retention & Access Rights",
        body: [
          "Business contact details submitted via email or our RFQ desk are retained only for the duration of commercial scoping, project delivery, and statutory accounting or trade-compliance obligations.",
          "You may request access, correction, or deletion of your business contact data at any time by emailing info@novaltron.com.",
        ],
      },
      {
        heading: "4. Technical Specifications Disclaimer",
        body: [
          "All engineering descriptions, capacity ranges, and technical schematics published on this site represent indicative system capabilities aligned with international standards (ISO, CE, ATEX, Eurocode / EN, GLOBALG.A.P.). Final equipment sizing and performance guarantees are defined exclusively in signed commercial contracts and FAT/SAT protocols.",
        ],
      },
    ],
  },
};
