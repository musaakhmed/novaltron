export const SITE_COPY = {
  nav: {
    solutions: "Solutions",
    turnkey: "Process",
    compliance: "About",
    resources: "Contact",
    rfqCta: "Request a Quote",
  },
  hero: {
    badge: "Industrial Supply & EPC Integration",
    headline: "Critical Equipment & Turnkey Infrastructure.",
    subheadline:
      "We supply and commission thermoplastic pipeline machinery, substation OT/SCADA networks, grain processing terminals, and industrial thermal systems.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Download Line Card",
  },
};

export interface HeroMetric {
  id: string;
  title: string;
  subtitle: string;
}

export const HERO_METRICS: HeroMetric[] = [
  {
    id: "dual-entity",
    title: "Two-Tier Structure",
    subtitle: "Novaltron LLC & Novaltron MMC",
  },
  {
    id: "four-divisions",
    title: "4 Core Divisions",
    subtitle: "Pipelines, OT/SCADA, Agro, Thermal",
  },
  {
    id: "fat-sat",
    title: "FAT / SAT Verified",
    subtitle: "Measurement-backed commissioning",
  },
  {
    id: "iso-en",
    title: "ISO & EN Compliant",
    subtitle: "Full supply chain traceability",
  },
];

export interface EngineeringPillar {
  id: string;
  number: string;
  title: string;
  overview: string;
  keyEquipmentScope: string[];
  oems: string;
}

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    id: "pipeline-thermoplastic",
    number: "01",
    title: "Pipeline & Thermoplastic Welding",
    overview:
      "Equipment supply for water mains, gas distribution, and irrigation networks.",
    keyEquipmentScope: [
      "Hydraulic butt-fusion & electrofusion machines with CNC data-logging",
      "Pipe preparation tools, extruders & workshop fitting machines",
      "High-pressure fluid transfer lines, HDPE/PP pipes & fittings",
    ],
    oems: "Ritmo · Turan Makina · Elborweltech · Ormanlar",
  },
  {
    id: "critical-ot-scada",
    number: "02",
    title: "Critical Infrastructure, OT & SCADA",
    overview:
      "Supply and commissioning for substations, power grids, railways, and industrial networks.",
    keyEquipmentScope: [
      "SMGOS IP/MPLS routers (SMG411, SMG104, SMG818V5, SMG1000) & SMG-SW switches",
      "OT firewalls, NAC servers, GNSS PTP time servers & SMG50 teleprotection (-48V DC)",
      "Enterprise SDS storage, HA PBX/intercom & SVP verification (1G–200G, RFC 2544, GOOSE/SV)",
    ],
    oems: "Techveck / Simgenet",
  },
  {
    id: "agro-industrial-silo",
    number: "03",
    title: "Agro-Industrial & Silo Monitoring",
    overview:
      "Post-harvest grain terminals, seed processing lines, and non-intrusive silo safety systems.",
    keyEquipmentScope: [
      "Turnkey grain storage, conveying, drying & seed cleaning lines",
      "Non-intrusive silo weighing via structural metal deformation sensors",
      "Theoretical calibration, maintenance-free operation & overload protection",
    ],
    oems: "Cimbria · Logicontrol",
  },
  {
    id: "thermal-green-energy",
    number: "04",
    title: "Thermal Engineering & Agro-Energy",
    overview:
      "Industrial heat optimization and renewable power systems for plants and greenhouses.",
    keyEquipmentScope: [
      "Industrial steam boilers, economizers & waste heat recovery",
      "Heat exchangers & automated greenhouse heating networks",
      "Solar-powered irrigation & pumping stations",
    ],
    oems: "Techveck Enerji · Industrial Thermal OEMs",
  },
];

export interface TurnkeyStage {
  step: string;
  title: string;
  summary: string;
}

export const TURNKEY_STAGES: TurnkeyStage[] = [
  {
    step: "01",
    title: "Specification Analysis",
    summary: "Infrastructure audit, tender extraction, and compliance matrix.",
  },
  {
    step: "02",
    title: "Engineering",
    summary: "Hardware selection, port/card configuration, and scheduling.",
  },
  {
    step: "03",
    title: "Procurement & Logistics",
    summary: "Multi-currency purchasing, factory testing, and transit clearance.",
  },
  {
    step: "04",
    title: "FAT / SAT Commissioning",
    summary: "Field deployment backed by empirical SVP measurement reports.",
  },
  {
    step: "05",
    title: "Lifecycle Support",
    summary: "Single-desk warranty, RMA coordination, and L2 engineering.",
  },
];

export interface DownloadableAsset {
  id: string;
  title: string;
  code: string;
  fileSize: string;
  pages: string;
  updated: string;
  divisionTag: string;
  summary: string;
  keyContents: string[];
}

export const DOWNLOADABLE_ASSETS: DownloadableAsset[] = [
  {
    id: "corporate-line-card",
    title: "Corporate Profile & Line Card",
    code: "NVT-01",
    fileSize: "2.8 MB",
    pages: "PDF",
    updated: "2026",
    divisionTag: "Corporate",
    summary:
      "Overview of Novaltron LLC and Novaltron MMC, banking compliance disclosures, OEM partnerships, and hardware line card.",
    keyContents: [
      "Entity Structure: Novaltron LLC (Procurement) & Novaltron MMC (Contracting)",
      "4 Core Divisions Hardware Line Card & HS Classification",
      "Supply Chain Documentation & Incoterms 2020 Governance",
      "ISO 9001, ISO 14001, CE & TS/EN Quality Framework",
    ],
  },
  {
    id: "critical-ot-scada-brochure",
    title: "Critical Infrastructure & OT/SCADA Brochure",
    code: "NVT-02",
    fileSize: "4.1 MB",
    pages: "PDF",
    updated: "2026",
    divisionTag: "OT / SCADA",
    summary:
      "Specifications for SMGOS IP/MPLS routers, SMG-SW switches, SMG50 teleprotection, NAC Server, SDS storage, and SVP 1G–200G verification.",
    keyContents: [
      "SMG411, SMG104, SMG818V5 & SMG1000 IP/MPLS Routers",
      "SMG50 Substation Teleprotection (-48V DC dual PSU, Fiber/E1/RS232, DI/DO)",
      "OT Firewall & NAC Server Zero-Trust Architecture",
      "SVP Verification (1G–200G, RFC 2544, ITU-T Y.1564, GOOSE/SV, TS/EN 61000-4 L3)",
    ],
  },
  {
    id: "pipeline-welding-catalog",
    title: "Pipeline Welding & Fluid Systems Catalog",
    code: "NVT-03",
    fileSize: "3.5 MB",
    pages: "PDF",
    updated: "2026",
    divisionTag: "Pipelines",
    summary:
      "Hydraulic butt-fusion and electrofusion welding machinery, pipe tools, and high-pressure HDPE/PP fluid transfer components.",
    keyContents: [
      "Hydraulic Butt-Fusion Machines with CNC Data-Logging",
      "Electrofusion Processors, Extruders & Workshop Fitting Saws",
      "High-Pressure PE100 / PP Pipes, Fittings & Valves",
      "OEM Lines: Ritmo, Turan Makina, Elborweltech, Ormanlar",
    ],
  },
  {
    id: "silo-weighing-bulk-overview",
    title: "Silo Weighing & Bulk Handling Overview",
    code: "NVT-04",
    fileSize: "3.2 MB",
    pages: "PDF",
    updated: "2026",
    divisionTag: "Agro-Solids",
    summary:
      "Cimbria turnkey grain storage and seed lines, Logicontrol non-intrusive metal deformation silo weighing, and 40% equipment subsidy structuring.",
    keyContents: [
      "Cimbria Turnkey Grain Storage, Conveying, Drying & Seed Cleaning",
      "Logicontrol Structural Metal Deformation Silo Weighing Sensors",
      "Real-Time Silo Overpressure & Overload Protection",
      "40% Equipment Subsidy & Leasing Documentation Guide",
    ],
  },
];
