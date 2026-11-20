import React from "react";

export type SchematicVariant =
  | "irrigation"
  | "greenhouses"
  | "grain-silos"
  | "safety-feed"
  | "bio-ipm"
  | "pipelines-thermal"
  | "critical-it-ot"
  | "industrial-dual"
  | "corridor-map";

interface TechnicalSchematicProps {
  label?: string;
  code?: string;
  caption?: string;
  variant: SchematicVariant;
  compact?: boolean;
  aspect?: "16/9" | "16/10";
  dark?: boolean;
  className?: string;
}

export function TechnicalSchematic({
  label,
  code,
  caption,
  variant,
  compact = false,
  aspect,
  dark = false,
  className = "",
}: TechnicalSchematicProps) {
  const accentColor =
    variant === "pipelines-thermal" ||
    variant === "critical-it-ot" ||
    variant === "industrial-dual"
      ? "#0284C7"
      : variant === "bio-ipm"
        ? "#16A34A"
        : "#059669";

  const surfaceClass = dark
    ? "border-slate-700/80 bg-[#0B1220] text-slate-200"
    : "border-[#E2E8F0] bg-[#F8FAFC] text-[#334155]";

  return (
    <figure
      className={`relative min-w-0 w-full max-w-full overflow-hidden rounded-xl border ${surfaceClass} ${
        compact ? "p-3" : "p-4 sm:p-5"
      } ${className}`}
    >
      {/* Blueprint micro-grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: dark
            ? "linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)"
            : "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Top engineering title block */}
      {(label || code) && (
        <div
          className={`relative z-10 mb-2.5 flex min-w-0 items-center justify-between gap-2 border-b pb-2 ${
            dark ? "border-slate-800" : "border-[#E2E8F0]"
          }`}
        >
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span className="truncate font-mono text-[10px] font-semibold uppercase tracking-[0.12em] opacity-85 sm:text-[11px]">
              {label}
            </span>
          </div>
          {code && (
            <span
              className={`shrink-0 font-mono text-[10px] font-medium ${
                dark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {code}
            </span>
          )}
        </div>
      )}

      {/* CAD Vector Viewport */}
      <div
        className={`relative z-10 w-full ${
          (aspect ?? (compact ? "16/10" : "16/9")) === "16/10"
            ? "aspect-[16/10]"
            : "aspect-[16/9]"
        }`}
      >
        {/* Corner CAD registration crosshairs */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 font-mono text-[9px] leading-none opacity-30"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 font-mono text-[9px] leading-none opacity-30"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 font-mono text-[9px] leading-none opacity-30"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 font-mono text-[9px] leading-none opacity-30"
        >
          +
        </span>

        {variant === "irrigation" && (
          <svg aria-hidden="true" viewBox="0 0 420 236" className="h-full w-full" fill="none">
            {/* Field contour horizon */}
            <path d="M16 184 Q120 176 220 184 T404 180" stroke="#CBD5E1" strokeWidth="1.2" />
            <path d="M16 196 Q140 190 250 196 T404 193" stroke="#E2E8F0" strokeWidth="1" />

            {/* Center Pivot Point & Truss Span */}
            <path d="M84 180 L94 114 L104 180" stroke="#0F172A" strokeWidth="1.6" />
            <circle cx="94" cy="112" r="5" fill="#059669" />
            <line x1="94" y1="112" x2="366" y2="112" stroke="#0F172A" strokeWidth="2.2" />
            {/* Overhead truss arch */}
            <path
              d="M94 112 Q162 84 230 112 Q298 84 366 112"
              stroke="#059669"
              strokeWidth="1.3"
              fill="none"
            />
            {/* Truss struts */}
            <path
              d="M128 112 V100 M162 112 V97 M196 112 V100 M264 112 V100 M298 112 V97 M332 112 V100"
              stroke="#64748B"
              strokeWidth="1"
            />
            {/* Mobile wheel towers */}
            <path d="M222 180 L230 112 L238 180" stroke="#0F172A" strokeWidth="1.4" />
            <circle cx="222" cy="180" r="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="238" cy="180" r="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M358 180 L366 112 L374 180" stroke="#0F172A" strokeWidth="1.4" />
            <circle cx="358" cy="180" r="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="374" cy="180" r="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />

            {/* Drop sprinklers & spray cones */}
            {[128, 162, 196, 264, 298, 332].map((x) => (
              <g key={x}>
                <line x1={x} y1="112" x2={x} y2="136" stroke="#0284C7" strokeWidth="1.2" />
                <path
                  d={`M${x} 136 L${x - 10} 166 M${x} 136 L${x} 168 M${x} 136 L${x + 10} 166`}
                  stroke="#0284C7"
                  strokeWidth="0.9"
                  strokeDasharray="2 2"
                />
              </g>
            ))}

            {/* Solar + Filtration + EC/pH Headworks Box */}
            <rect x="20" y="34" width="112" height="44" rx="4" fill="#FFFFFF" stroke="#059669" strokeWidth="1.3" />
            <text x="76" y="53" textAnchor="middle" fill="#0F172A" fontSize="8.5" fontFamily="monospace" fontWeight="700">
              FILTRATION + EC/pH
            </text>
            <text x="76" y="67" textAnchor="middle" fill="#059669" fontSize="7.5" fontFamily="monospace">
              SOLAR PUMP STATION
            </text>
            <path d="M76 78 V142 H90" stroke="#0284C7" strokeWidth="1.4" strokeDasharray="3 2" />

            {/* Telemetry callout */}
            <rect x="262" y="24" width="136" height="40" rx="4" fill="#0F172A" />
            <text x="330" y="41" textAnchor="middle" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="700">
              FLOW · SOIL MOISTURE
            </text>
            <text x="330" y="54" textAnchor="middle" fill="#CBD5E1" fontSize="7.5" fontFamily="monospace">
              ULTRASONIC TELEMETRY
            </text>
            <path d="M330 64 V92" stroke="#059669" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        )}

        {variant === "greenhouses" && (
          <svg aria-hidden="true" viewBox="0 0 420 236" className="h-full w-full" fill="none">
            {/* Multi-span Venlo Glasshouse Bays */}
            <path
              d="M28 186 V96 L78 58 L128 96 V186 M128 96 L178 58 L228 96 V186 M228 96 L278 58 L328 96 V186"
              stroke="#0F172A"
              strokeWidth="1.7"
              fill="#ECFDF5"
              fillOpacity="0.65"
            />
            {/* Motorized Ridge Vents open */}
            <path d="M78 58 L98 46 M178 58 L198 46 M278 58 L298 46" stroke="#059669" strokeWidth="1.8" />
            {/* Thermal Shading Curtain */}
            <line x1="32" y1="100" x2="324" y2="100" stroke="#D97706" strokeWidth="1.5" strokeDasharray="5 3" />
            <text x="178" y="93" textAnchor="middle" fill="#B45309" fontSize="7.5" fontFamily="monospace" fontWeight="600">
              THERMAL / SHADING SCREEN
            </text>

            {/* Elevated Hydroponic Gutters */}
            {[56, 100, 156, 200, 256, 300].map((x) => (
              <g key={x}>
                <line x1={x} y1="100" x2={x} y2="146" stroke="#94A3B8" strokeWidth="0.9" />
                <rect x={x - 10} y="146" width="20" height="7" rx="1.5" fill="#FFFFFF" stroke="#059669" strokeWidth="1.2" />
                <path d={`M${x} 146 V132 M${x} 140 L${x - 5} 135 M${x} 138 L${x + 5} 133`} stroke="#16A34A" strokeWidth="1.2" />
              </g>
            ))}

            {/* Heating Loop & Boiler Economizer Plant */}
            <rect x="342" y="102" width="64" height="84" rx="4" fill="#0F172A" />
            <text x="374" y="128" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="700">
              BOILER
            </text>
            <text x="374" y="142" textAnchor="middle" fill="#34D399" fontSize="7.2" fontFamily="monospace">
              FLUE-GAS
            </text>
            <text x="374" y="154" textAnchor="middle" fill="#34D399" fontSize="7.2" fontFamily="monospace">
              RECOVERY
            </text>
            <text x="374" y="172" textAnchor="middle" fill="#FDE68A" fontSize="7" fontFamily="monospace">
              CO₂ LOOP
            </text>
            <path d="M328 164 H342 M328 174 H342" stroke="#D97706" strokeWidth="1.6" />
            <line x1="20" y1="186" x2="406" y2="186" stroke="#0F172A" strokeWidth="1.6" />

            {/* Dimension Bar */}
            <text x="178" y="208" textAnchor="middle" fill="#334155" fontSize="8" fontFamily="monospace">
              EUROCODE / EN WIND &amp; SNOW LOAD · VENLO &amp; MULTI-SPAN POLY
            </text>
          </svg>
        )}

        {variant === "grain-silos" && (
          <svg aria-hidden="true" viewBox="0 0 420 236" className="h-full w-full" fill="none">
            {/* Intake & Pre-Cleaner */}
            <rect x="20" y="138" width="66" height="48" rx="3" fill="#FFFFFF" stroke="#059669" strokeWidth="1.4" />
            <text x="53" y="159" textAnchor="middle" fill="#0F172A" fontSize="7.5" fontFamily="monospace" fontWeight="700">
              CLEANER
            </text>
            <text x="53" y="172" textAnchor="middle" fill="#059669" fontSize="6.8" fontFamily="monospace">
              SCALPER
            </text>

            {/* Continuous Tower Dryer */}
            <rect x="104" y="74" width="44" height="112" rx="3" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.5" />
            {[90, 104, 118, 132, 146, 160].map((y) => (
              <line key={y} x1="110" y1={y} x2="142" y2={y} stroke="#F59E0B" strokeWidth="1" />
            ))}
            <text x="126" y="66" textAnchor="middle" fill="#B45309" fontSize="7.5" fontFamily="monospace" fontWeight="700">
              DRYER
            </text>

            {/* Bucket Elevator Tower */}
            <rect x="164" y="34" width="16" height="152" fill="#0F172A" />
            <line x1="172" y1="40" x2="172" y2="182" stroke="#34D399" strokeWidth="1.5" strokeDasharray="4 4" />
            {/* Overhead Catwalk Conveyor Bridge */}
            <rect x="180" y="42" width="128" height="10" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.2" />

            {/* Corrugated Steel Silo Z600 */}
            <path d="M204 186 V80 L254 52 L304 80 V186 H204 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
            {[94, 108, 122, 136, 150, 164, 176].map((y) => (
              <line key={y} x1="205" y1={y} x2="303" y2={y} stroke="#CBD5E1" strokeWidth="1.1" />
            ))}
            <rect x="224" y="110" width="60" height="32" rx="3" fill="#0F172A" />
            <text x="254" y="124" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="700">
              Z600
            </text>
            <text x="254" y="136" textAnchor="middle" fill="#34D399" fontSize="7" fontFamily="monospace">
              EN / EUROCODE
            </text>

            {/* Optical Color Sorter */}
            <rect x="328" y="126" width="74" height="60" rx="4" fill="#ECFDF5" stroke="#059669" strokeWidth="1.5" />
            <text x="365" y="151" textAnchor="middle" fill="#065F46" fontSize="7.8" fontFamily="monospace" fontWeight="700">
              OPTICAL
            </text>
            <text x="365" y="164" textAnchor="middle" fill="#065F46" fontSize="7.8" fontFamily="monospace" fontWeight="700">
              SORTER
            </text>
            <text x="365" y="177" textAnchor="middle" fill="#334155" fontSize="6.8" fontFamily="monospace">
              200–500 t/h
            </text>

            {/* Flow Arrows */}
            <path d="M86 162 H104 M148 162 H164 M304 162 H328" stroke="#059669" strokeWidth="1.8" />
            <line x1="16" y1="186" x2="406" y2="186" stroke="#0F172A" strokeWidth="1.6" />
          </svg>
        )}

        {variant === "safety-feed" && (
          <svg aria-hidden="true" viewBox="0 0 420 236" className="h-full w-full" fill="none">
            {/* Hopper Silo with External Strain Sensors on Legs */}
            <path d="M52 134 V66 L106 42 L160 66 V134 L126 164 H86 L52 134 Z" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
            {/* ATEX Explosion Relief Panel on Roof */}
            <rect x="78" y="30" width="56" height="13" rx="2" fill="#D97706" />
            <text x="106" y="39.5" textAnchor="middle" fill="#FFFFFF" fontSize="7.2" fontFamily="monospace" fontWeight="700">
              ATEX VENT
            </text>
            {/* CO & Temperature Sensor Probe */}
            <line x1="106" y1="43" x2="106" y2="128" stroke="#059669" strokeWidth="1.4" strokeDasharray="3 2" />
            <circle cx="106" cy="84" r="3.5" fill="#059669" />
            <circle cx="106" cy="112" r="3.5" fill="#059669" />
            <text x="106" y="148" textAnchor="middle" fill="#065F46" fontSize="7.2" fontFamily="monospace" fontWeight="700">
              CO + TEMP
            </text>

            {/* Structural Legs + Non-Intrusive Strain Sensors */}
            <line x1="68" y1="148" x2="68" y2="188" stroke="#0F172A" strokeWidth="3" />
            <line x1="144" y1="148" x2="144" y2="188" stroke="#0F172A" strokeWidth="3" />
            <rect x="61" y="164" width="14" height="12" rx="2" fill="#0284C7" />
            <rect x="137" y="164" width="14" height="12" rx="2" fill="#0284C7" />
            <text x="106" y="204" textAnchor="middle" fill="#0284C7" fontSize="7.5" fontFamily="monospace" fontWeight="700">
              EXTERNAL STRAIN LOAD SENSORS
            </text>

            {/* Compound Feed Mill Block */}
            <rect x="216" y="66" width="182" height="118" rx="6" fill="#0F172A" />
            <text x="307" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="8.8" fontFamily="monospace" fontWeight="700">
              COMPOUND FEED LINE
            </text>
            <rect x="232" y="104" width="66" height="32" rx="3" fill="#1E293B" stroke="#059669" />
            <text x="265" y="123" textAnchor="middle" fill="#34D399" fontSize="7.2" fontFamily="monospace">
              MICRO-DOSE
            </text>
            <rect x="316" y="104" width="66" height="32" rx="3" fill="#1E293B" stroke="#059669" />
            <text x="349" y="123" textAnchor="middle" fill="#34D399" fontSize="7.2" fontFamily="monospace">
              PELLETING
            </text>
            <path d="M298 120 H316" stroke="#34D399" strokeWidth="1.5" />
            <text x="307" y="164" textAnchor="middle" fill="#94A3B8" fontSize="7.2" fontFamily="monospace">
              BAGHOUSE DUST + ISOLATION VALVES
            </text>
            <path d="M160 120 H216" stroke="#059669" strokeWidth="1.8" />
          </svg>
        )}

        {variant === "bio-ipm" && (
          <svg aria-hidden="true" viewBox="0 0 420 236" className="h-full w-full" fill="none">
            {/* Solar AI Camera Trap */}
            <rect x="24" y="34" width="120" height="72" rx="6" fill="#FFFFFF" stroke="#16A34A" strokeWidth="1.5" />
            <rect x="44" y="44" width="38" height="14" rx="2" fill="#065F46" />
            <circle cx="116" cy="56" r="10" fill="#ECFDF5" stroke="#16A34A" strokeWidth="1.4" />
            <circle cx="116" cy="56" r="4" fill="#16A34A" />
            <text x="84" y="84" textAnchor="middle" fill="#0F172A" fontSize="8" fontFamily="monospace" fontWeight="700">
              SOLAR AI TRAP
            </text>
            <text x="84" y="96" textAnchor="middle" fill="#16A34A" fontSize="7" fontFamily="monospace">
              M2M LTE · DAILY COUNT
            </text>

            {/* Biocontrol & Pollinators */}
            <rect x="24" y="128" width="120" height="72" rx="6" fill="#FFFFFF" stroke="#059669" strokeWidth="1.5" />
            <text x="84" y="156" textAnchor="middle" fill="#0F172A" fontSize="8" fontFamily="monospace" fontWeight="700">
              BIOCONTROL
            </text>
            <text x="84" y="170" textAnchor="middle" fill="#065F46" fontSize="7" fontFamily="monospace">
              BENEFICIAL MITES
            </text>
            <text x="84" y="182" textAnchor="middle" fill="#065F46" fontSize="7" fontFamily="monospace">
              POLLINATION HIVES
            </text>

            {/* Central Certification & MRL Verification Engine */}
            <rect x="192" y="54" width="204" height="128" rx="8" fill="#065F46" />
            <text x="294" y="88" textAnchor="middle" fill="#A7F3D0" fontSize="7.5" fontFamily="monospace" fontWeight="600">
              EXPORT AUDIT READINESS
            </text>
            <text x="294" y="110" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="monospace" fontWeight="700">
              GLOBALG.A.P. IFA v6
            </text>
            <line x1="218" y1="124" x2="370" y2="124" stroke="#10B981" strokeWidth="1" strokeOpacity="0.5" />
            <text x="294" y="144" textAnchor="middle" fill="#ECFDF5" fontSize="8" fontFamily="monospace">
              GRASP · ORGANIC · ISO 22000
            </text>
            <text x="294" y="162" textAnchor="middle" fill="#6EE7B7" fontSize="7.5" fontFamily="monospace">
              EU &amp; GCC MRL COMPLIANT
            </text>

            {/* Telemetry links */}
            <path d="M144 70 H168 V104 H192" stroke="#16A34A" strokeWidth="1.6" />
            <path d="M144 164 H168 V132 H192" stroke="#059669" strokeWidth="1.6" />
          </svg>
        )}

        {variant === "pipelines-thermal" && (
          <svg aria-hidden="true" viewBox="0 0 420 236" className="h-full w-full" fill="none">
            {/* Hydraulic Butt-Fusion Machine */}
            <rect x="20" y="66" width="132" height="96" rx="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" />
            <rect x="34" y="82" width="104" height="22" rx="2" fill="#0F172A" />
            <text x="86" y="96" textAnchor="middle" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="700">
              CNC WELD LOG
            </text>
            <line x1="34" y1="126" x2="138" y2="126" stroke="#0F172A" strokeWidth="8" />
            <line x1="86" y1="114" x2="86" y2="138" stroke="#D97706" strokeWidth="2.5" />
            <text x="86" y="152" textAnchor="middle" fill="#334155" fontSize="7.2" fontFamily="monospace">
              HDPE / PE100 / PP-R
            </text>

            {/* Pressure Pipeline Run */}
            <path d="M152 126 H248" stroke="#0F172A" strokeWidth="7" />
            <path d="M152 126 H248" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="6 4" />

            {/* Industrial Steam Boiler & Economizer */}
            <rect x="248" y="54" width="152" height="122" rx="6" fill="#0F172A" />
            <rect x="266" y="72" width="116" height="44" rx="4" fill="#1E293B" stroke="#0284C7" strokeWidth="1.3" />
            <text x="324" y="92" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="700">
              STEAM BOILER
            </text>
            <text x="324" y="106" textAnchor="middle" fill="#38BDF8" fontSize="7.2" fontFamily="monospace">
              + HEAT EXCHANGER
            </text>
            <rect x="266" y="128" width="116" height="32" rx="4" fill="#1E293B" stroke="#D97706" strokeWidth="1.2" />
            <text x="324" y="147" textAnchor="middle" fill="#FDE68A" fontSize="7.5" fontFamily="monospace">
              WASTE HEAT RECOVERY
            </text>
          </svg>
        )}

        {variant === "critical-it-ot" && (
          <svg aria-hidden="true" viewBox="0 0 420 236" className="h-full w-full" fill="none">
            {/* GNSS PTP Grandmaster */}
            <rect x="20" y="32" width="114" height="58" rx="5" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.4" />
            <text x="77" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="700">
              GNSS PTP
            </text>
            <text x="77" y="72" textAnchor="middle" fill="#38BDF8" fontSize="7.2" fontFamily="monospace">
              IEEE 1588 GRANDMASTER
            </text>

            {/* OT Firewall with Hardware Bypass */}
            <rect x="20" y="142" width="114" height="58" rx="5" fill="#1E293B" stroke="#D97706" strokeWidth="1.4" />
            <text x="77" y="166" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="700">
              OT FIREWALL
            </text>
            <text x="77" y="182" textAnchor="middle" fill="#FDE68A" fontSize="7.2" fontFamily="monospace">
              HW BYPASS · -20..+60°C
            </text>

            {/* Core 2U IP/MPLS Carrier Router */}
            <rect x="166" y="76" width="116" height="82" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
            <text x="224" y="108" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="700">
              IP/MPLS
            </text>
            <text x="224" y="124" textAnchor="middle" fill="#38BDF8" fontSize="8" fontFamily="monospace">
              1G–100G CORE
            </text>
            <text x="224" y="142" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="monospace">
              L2/L3 · OT NAC
            </text>

            {/* 1G-200G Verification & Teleprotection */}
            <rect x="310" y="58" width="94" height="118" rx="5" fill="#1E293B" stroke="#059669" strokeWidth="1.5" />
            <text x="357" y="88" textAnchor="middle" fill="#34D399" fontSize="8.2" fontFamily="monospace" fontWeight="700">
              VERIFICATION
            </text>
            <text x="357" y="108" textAnchor="middle" fill="#E2E8F0" fontSize="7.5" fontFamily="monospace">
              RFC 2544
            </text>
            <text x="357" y="124" textAnchor="middle" fill="#E2E8F0" fontSize="7.5" fontFamily="monospace">
              IEC 61850
            </text>
            <text x="357" y="140" textAnchor="middle" fill="#E2E8F0" fontSize="7.5" fontFamily="monospace">
              EN 61000-4 L3
            </text>
            <text x="357" y="158" textAnchor="middle" fill="#34D399" fontSize="7" fontFamily="monospace">
              1G–200G TEST
            </text>

            <path d="M134 61 H150 V104 H166" stroke="#38BDF8" strokeWidth="1.5" />
            <path d="M134 171 H150 V130 H166" stroke="#D97706" strokeWidth="1.5" />
            <path d="M282 117 H310" stroke="#34D399" strokeWidth="1.8" />
          </svg>
        )}

        {variant === "industrial-dual" && (
          <svg aria-hidden="true" viewBox="0 0 420 236" className="h-full w-full" fill="none">
            {/* Top Track A: Pipelines & Thermal */}
            <rect x="20" y="24" width="380" height="82" rx="6" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.4" />
            <text x="36" y="46" fill="#0284C7" fontSize="7.5" fontFamily="monospace" fontWeight="700">
              TRACK A · PIPELINES &amp; THERMAL
            </text>
            <line x1="36" y1="74" x2="210" y2="74" stroke="#0F172A" strokeWidth="6" />
            <line x1="122" y1="62" x2="122" y2="86" stroke="#D97706" strokeWidth="2.5" />
            <rect x="228" y="54" width="154" height="36" rx="4" fill="#F1F5F9" stroke="#CBD5E1" />
            <text x="305" y="75" textAnchor="middle" fill="#0F172A" fontSize="7.8" fontFamily="monospace" fontWeight="700">
              CNC WELD · STEAM · PE100
            </text>

            {/* Bottom Track B: Critical IT & OT */}
            <rect x="20" y="124" width="380" height="86" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.4" />
            <text x="36" y="146" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" fontWeight="700">
              TRACK B · CRITICAL IT &amp; OT/SCADA
            </text>
            <rect x="36" y="160" width="96" height="34" rx="3" fill="#1E293B" stroke="#38BDF8" />
            <text x="84" y="180" textAnchor="middle" fill="#FFFFFF" fontSize="7.5" fontFamily="monospace">
              IP/MPLS 100G
            </text>
            <rect x="160" y="160" width="102" height="34" rx="3" fill="#1E293B" stroke="#D97706" />
            <text x="211" y="180" textAnchor="middle" fill="#FDE68A" fontSize="7.5" fontFamily="monospace">
              OT BYPASS FW
            </text>
            <rect x="288" y="160" width="96" height="34" rx="3" fill="#1E293B" stroke="#059669" />
            <text x="336" y="180" textAnchor="middle" fill="#34D399" fontSize="7.5" fontFamily="monospace">
              IEC 61850/PTP
            </text>
            <path d="M132 177 H160 M262 177 H288" stroke="#38BDF8" strokeWidth="1.5" />
          </svg>
        )}

        {variant === "corridor-map" && (
          <svg aria-hidden="true" viewBox="0 0 420 236" className="h-full w-full" fill="none">
            {/* Origin: EU & Türkiye Engineering */}
            <rect x="18" y="84" width="104" height="68" rx="6" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.5" />
            <text x="70" y="114" textAnchor="middle" fill="#0F172A" fontSize="8.5" fontFamily="monospace" fontWeight="700">
              EU &amp; TÜRKIYE
            </text>
            <text x="70" y="130" textAnchor="middle" fill="#64748B" fontSize="7.2" fontFamily="monospace">
              ENGINEERING SUPPLY
            </text>

            {/* Central Hub: Tbilisi */}
            <rect x="156" y="72" width="118" height="92" rx="8" fill="#0F172A" stroke="#059669" strokeWidth="2" />
            <text x="215" y="106" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontFamily="monospace" fontWeight="700">
              NOVALTRON LLC
            </text>
            <text x="215" y="122" textAnchor="middle" fill="#34D399" fontSize="7.8" fontFamily="monospace">
              TBILISI HUB
            </text>
            <text x="215" y="140" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="monospace">
              TRANSIT · FINANCE
            </text>

            {/* Regional Delivery Destinations */}
            {[
              { y: 28, code: "AZ · AZERBAIJAN" },
              { y: 78, code: "GE · GEORGIA" },
              { y: 128, code: "UZ · UZBEKISTAN" },
              { y: 178, code: "KZ · KAZAKHSTAN" },
            ].map((dest) => (
              <g key={dest.code}>
                <rect x="306" y={dest.y} width="98" height="32" rx="4" fill="#ECFDF5" stroke="#059669" strokeWidth="1.2" />
                <text x="355" y={dest.y + 19} textAnchor="middle" fill="#065F46" fontSize="7.5" fontFamily="monospace" fontWeight="700">
                  {dest.code}
                </text>
                <path d={`M274 118 H290 V${dest.y + 16} H306`} stroke="#059669" strokeWidth="1.3" />
              </g>
            ))}

            <path d="M122 118 H156" stroke="#059669" strokeWidth="2" strokeDasharray="4 2" />
          </svg>
        )}
      </div>

      {caption && (
        <figcaption className="relative z-10 mt-2.5 text-xs leading-relaxed opacity-75">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
