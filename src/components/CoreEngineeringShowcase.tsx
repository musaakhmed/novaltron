"use client";

import React, {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Droplets,
  Pause,
  Play,
  Sprout,
  Warehouse,
} from "lucide-react";
import type {
  HeroGridCard,
  HeroShowcaseConfig,
  HeroShowcaseDetail,
} from "@/data/dictionaries/types";

interface CoreEngineeringShowcaseProps {
  lang: string;
  heading: string;
  cards: HeroGridCard[];
  showcase: HeroShowcaseConfig;
}

const CYCLE_DURATION_MS = 7000;

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function DomainIcon({
  variant,
  className = "h-4 w-4",
}: {
  variant: HeroGridCard["variant"];
  className?: string;
}) {
  switch (variant) {
    case "irrigation":
      return <Droplets aria-hidden="true" className={className} />;
    case "greenhouses":
      return <Sprout aria-hidden="true" className={className} />;
    case "grain-silos":
      return <Warehouse aria-hidden="true" className={className} />;
    case "industrial-dual":
      return <Cpu aria-hidden="true" className={className} />;
  }
}

function AnimatedDomainSchematic({
  variant,
  code,
  label,
}: {
  variant: HeroGridCard["variant"];
  code: string;
  label: string;
}) {
  const isIndustrial = variant === "industrial-dual";
  const accentHex = isIndustrial ? "#5CB3AE" : "#5BB87A";

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-[#234863] bg-[#071622]">
      {/* Fine CAD coordinate grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(156,179,196,0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(156,179,196,0.065) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: isIndustrial
            ? "radial-gradient(circle at 78% 24%, rgba(56,189,248,0.16), transparent 52%)"
            : "radial-gradient(circle at 78% 24%, rgba(52,211,153,0.15), transparent 52%)",
        }}
      />

      {/* Soft horizontal blueprint scanner sweep */}
      <div
        aria-hidden="true"
        className="cad-scan-beam pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{
          background: isIndustrial
            ? "linear-gradient(90deg, transparent, rgba(92,179,174,0.12), transparent)"
            : "linear-gradient(90deg, transparent, rgba(91,184,122,0.12), transparent)",
        }}
      />

      {/* CAD Title Bar */}
      <div className="relative z-10 flex items-center justify-between gap-3 border-b border-[#234863] bg-[#0D2537]/85 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden="true"
            className="cad-beacon h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: accentHex }}
          />
          <span className="truncate font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-200">
            {code} · {label}
          </span>
        </div>
        <span className="shrink-0 font-mono text-[10px] font-medium tracking-wider text-slate-400">
          SCALE 1:100 · ISO/EN
        </span>
      </div>

      {/* Main Vector Viewport */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-4 sm:p-5">
        {/* Corner registration crosshairs */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-2.5 left-3 font-mono text-[10px] leading-none text-slate-500/70"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-2.5 right-3 font-mono text-[10px] leading-none text-slate-500/70"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2.5 left-3 font-mono text-[10px] leading-none text-slate-500/70"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2.5 right-3 font-mono text-[10px] leading-none text-slate-500/70"
        >
          +
        </span>

        {variant === "irrigation" && (
          <svg
            aria-hidden="true"
            viewBox="0 0 560 300"
            className="h-auto w-full max-w-[560px]"
            fill="none"
          >
            {/* Contoured agricultural terrain */}
            <path
              d="M22 246 Q160 234 295 246 T538 240"
              stroke="#334155"
              strokeWidth="1.4"
            />
            <path
              d="M22 262 Q180 253 330 262 T538 258"
              stroke="#1E293B"
              strokeWidth="1.2"
            />

            {/* Solar Pump + Filtration + EC/pH Headworks */}
            <rect
              x="26"
              y="38"
              width="148"
              height="62"
              rx="6"
              fill="#0A1F2E"
              stroke="#5BB87A"
              strokeWidth="1.4"
            />
            <rect x="38" y="49" width="28" height="10" rx="2" fill="#267042" />
            <text
              x="100"
              y="67"
              textAnchor="middle"
              fill="#F4F7F9"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              FILTRATION + EC/pH
            </text>
            <text
              x="100"
              y="84"
              textAnchor="middle"
              fill="#5BB87A"
              fontSize="8.5"
              fontFamily="monospace"
            >
              SOLAR PUMP HEADWORKS
            </text>

            {/* Pressurized supply pipe (animated flow) */}
            <path
              d="M100 100 V192 H126 V142"
              stroke="#1E293B"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M100 100 V192 H126 V142"
              stroke="#5CB3AE"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="cad-flow-fast"
            />

            {/* Center Pivot Point */}
            <path
              d="M112 240 L126 142 L140 240"
              stroke="#CBD5E1"
              strokeWidth="1.8"
            />
            <circle cx="126" cy="142" r="7" fill="#267042" stroke="#B6DBC2" strokeWidth="1.5" />

            {/* Overhead Truss Arch & Main Pressurized Boom */}
            <path
              d="M126 142 Q216 98 306 142 Q396 98 486 142"
              stroke="#5BB87A"
              strokeWidth="1.6"
            />
            <path
              d="M171 142 V124 M216 142 V120 M261 142 V124 M351 142 V124 M396 142 V120 M441 142 V124"
              stroke="#64748B"
              strokeWidth="1.2"
            />
            <line x1="126" y1="142" x2="486" y2="142" stroke="#94A3B8" strokeWidth="4" />
            <line
              x1="126"
              y1="142"
              x2="486"
              y2="142"
              stroke="#5CB3AE"
              strokeWidth="1.8"
              strokeDasharray="8 8"
              className="cad-flow"
            />

            {/* Mobile Wheel Towers with Rotating Hubs */}
            {[306, 486].map((cx) => (
              <g key={cx}>
                <path
                  d={`M${cx - 12} 240 L${cx} 142 L${cx + 12} 240`}
                  stroke="#CBD5E1"
                  strokeWidth="1.6"
                />
                {[cx - 12, cx + 12].map((wx) => (
                  <g key={wx}>
                    <circle
                      cx={wx}
                      cy="240"
                      r="9"
                      fill="#0A1F2E"
                      stroke="#CBD5E1"
                      strokeWidth="1.6"
                    />
                    <g className="cad-wheel-spin">
                      <line x1={wx - 6} y1="240" x2={wx + 6} y2="240" stroke="#5BB87A" strokeWidth="1.2" />
                      <line x1={wx} y1="234" x2={wx} y2="246" stroke="#5BB87A" strokeWidth="1.2" />
                    </g>
                  </g>
                ))}
              </g>
            ))}

            {/* Drop Sprinklers & Animated Mist Plumes */}
            {[171, 216, 261, 351, 396, 441].map((x, idx) => (
              <g key={x}>
                <line x1={x} y1="142" x2={x} y2="176" stroke="#5CB3AE" strokeWidth="1.4" />
                <path
                  d={`M${x} 176 L${x - 13} 218 M${x} 176 L${x} 222 M${x} 176 L${x + 13} 218`}
                  stroke="#5CB3AE"
                  strokeOpacity="0.4"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle
                  cx={x}
                  cy="182"
                  r="2.2"
                  fill="#8ED0CC"
                  className="cad-mist-drop"
                  style={{ animationDelay: `${idx * 220}ms` }}
                />
                <circle
                  cx={x - 6}
                  cy="190"
                  r="1.6"
                  fill="#5CB3AE"
                  className="cad-mist-drop"
                  style={{ animationDelay: `${idx * 220 + 450}ms` }}
                />
                <circle
                  cx={x + 6}
                  cy="188"
                  r="1.6"
                  fill="#5BB87A"
                  className="cad-mist-drop"
                  style={{ animationDelay: `${idx * 220 + 800}ms` }}
                />
              </g>
            ))}

            {/* Ultrasonic Telemetry Node + Expanding Signal Rings */}
            <rect
              x="356"
              y="26"
              width="176"
              height="52"
              rx="6"
              fill="#0A1F2E"
              stroke="#334155"
              strokeWidth="1.3"
            />
            <text
              x="444"
              y="47"
              textAnchor="middle"
              fill="#5BB87A"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              FLOW · SOIL MOISTURE
            </text>
            <text
              x="444"
              y="64"
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="8.2"
              fontFamily="monospace"
            >
              ULTRASONIC TELEMETRY
            </text>
            <line
              x1="444"
              y1="78"
              x2="444"
              y2="112"
              stroke="#5BB87A"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />
            <circle cx="444" cy="112" r="4" fill="#5BB87A" />
            <circle
              cx="444"
              cy="112"
              r="8"
              stroke="#5BB87A"
              strokeWidth="1.4"
              className="cad-radar-ping"
            />
            <circle
              cx="444"
              cy="112"
              r="8"
              stroke="#5BB87A"
              strokeWidth="1.1"
              className="cad-radar-ping-delay"
            />
          </svg>
        )}

        {variant === "greenhouses" && (
          <svg
            aria-hidden="true"
            viewBox="0 0 560 300"
            className="h-auto w-full max-w-[560px]"
            fill="none"
          >
            {/* Multi-Span Venlo Glasshouse Bays */}
            <path
              d="M32 238 V124 L98 72 L164 124 V238 M164 124 L230 72 L296 124 V238 M296 124 L362 72 L428 124 V238"
              stroke="#E2E8F0"
              strokeWidth="1.8"
              fill="#267042"
              fillOpacity="0.08"
            />

            {/* Animated Motorized Ridge Vents */}
            {[98, 230, 362].map((vx) => (
              <g key={vx} className="cad-vent-breathe">
                <line
                  x1={vx}
                  y1="72"
                  x2={vx + 28}
                  y2="56"
                  stroke="#5BB87A"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx={vx} cy="72" r="2.8" fill="#5BB87A" />
              </g>
            ))}

            {/* Thermal Shading Curtain */}
            <line
              x1="36"
              y1="130"
              x2="424"
              y2="130"
              stroke="#F59E0B"
              strokeWidth="1.6"
              strokeDasharray="7 4"
            />
            <text
              x="230"
              y="120"
              textAnchor="middle"
              fill="#FCD34D"
              fontSize="8.8"
              fontFamily="monospace"
              fontWeight="600"
            >
              THERMAL / SHADING SCREEN · AUTOMATED CLIMATE
            </text>

            {/* Rising Climate Airflow Waves */}
            {[98, 230, 362].map((ax, idx) => (
              <path
                key={ax}
                d={`M${ax - 12} 174 Q${ax} 162 ${ax + 12} 174`}
                stroke="#5BB87A"
                strokeWidth="1.3"
                strokeLinecap="round"
                className="cad-heat-rise"
                style={{ animationDelay: `${idx * 420}ms` }}
              />
            ))}

            {/* Elevated Hydroponic Gutters + Animated Nutrient Line */}
            <line
              x1="44"
              y1="195"
              x2="416"
              y2="195"
              stroke="#5CB3AE"
              strokeOpacity="0.35"
              strokeWidth="2"
            />
            <line
              x1="44"
              y1="195"
              x2="416"
              y2="195"
              stroke="#5CB3AE"
              strokeWidth="1.6"
              strokeDasharray="6 10"
              className="cad-flow"
            />
            {[68, 128, 200, 260, 332, 392].map((x) => (
              <g key={x}>
                <line x1={x} y1="130" x2={x} y2="190" stroke="#475569" strokeWidth="1" />
                <rect
                  x={x - 14}
                  y="190"
                  width="28"
                  height="10"
                  rx="2"
                  fill="#0A1F2E"
                  stroke="#5BB87A"
                  strokeWidth="1.3"
                />
                <path
                  d={`M${x} 190 V172 M${x} 182 L${x - 7} 175 M${x} 179 L${x + 7} 172`}
                  stroke="#5BB87A"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </g>
            ))}

            {/* Boiler + Flue-Gas Heat Recovery & CO2 Loop Plant */}
            <rect
              x="448"
              y="122"
              width="86"
              height="116"
              rx="6"
              fill="#0A1F2E"
              stroke="#F59E0B"
              strokeWidth="1.5"
            />
            <text
              x="491"
              y="150"
              textAnchor="middle"
              fill="#F4F7F9"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              BOILER
            </text>
            <text
              x="491"
              y="170"
              textAnchor="middle"
              fill="#5BB87A"
              fontSize="8.2"
              fontFamily="monospace"
            >
              FLUE-GAS
            </text>
            <text
              x="491"
              y="184"
              textAnchor="middle"
              fill="#5BB87A"
              fontSize="8.2"
              fontFamily="monospace"
            >
              RECOVERY
            </text>
            <rect
              x="460"
              y="198"
              width="62"
              height="22"
              rx="3"
              fill="#1E293B"
              stroke="#F59E0B"
              strokeWidth="1"
            />
            <text
              x="491"
              y="212"
              textAnchor="middle"
              fill="#FDE68A"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="700"
            >
              CO₂ LOOP
            </text>

            {/* Animated Thermal Supply & Return Pipes */}
            <path
              d="M448 212 H36"
              stroke="#F59E0B"
              strokeOpacity="0.35"
              strokeWidth="3"
            />
            <path
              d="M448 212 H36"
              stroke="#F59E0B"
              strokeWidth="1.8"
              strokeDasharray="8 6"
              className="cad-flow-reverse"
            />
            <path
              d="M36 226 H448"
              stroke="#5BB87A"
              strokeWidth="1.6"
              strokeDasharray="8 6"
              className="cad-flow"
            />

            {/* Foundation & Spec Footer */}
            <line x1="22" y1="238" x2="538" y2="238" stroke="#64748B" strokeWidth="1.8" />
            <text
              x="280"
              y="268"
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="9"
              fontFamily="monospace"
            >
              EUROCODE / EN WIND &amp; SNOW LOAD · VENLO GLASS &amp; MULTI-SPAN POLY
            </text>
          </svg>
        )}

        {variant === "grain-silos" && (
          <svg
            aria-hidden="true"
            viewBox="0 0 560 300"
            className="h-auto w-full max-w-[560px]"
            fill="none"
          >
            {/* Intake & Pre-Cleaner */}
            <rect
              x="24"
              y="174"
              width="86"
              height="64"
              rx="5"
              fill="#0A1F2E"
              stroke="#5BB87A"
              strokeWidth="1.5"
            />
            <text
              x="67"
              y="202"
              textAnchor="middle"
              fill="#F4F7F9"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              CLEANER
            </text>
            <text
              x="67"
              y="218"
              textAnchor="middle"
              fill="#5BB87A"
              fontSize="8"
              fontFamily="monospace"
            >
              SCALPER
            </text>

            {/* Continuous Tower Dryer + Rising Thermal Convection */}
            <rect
              x="134"
              y="88"
              width="58"
              height="150"
              rx="4"
              fill="#0A1F2E"
              stroke="#F59E0B"
              strokeWidth="1.6"
            />
            {[110, 130, 150, 170, 190, 210].map((y, idx) => (
              <line
                key={y}
                x1="142"
                y1={y}
                x2="184"
                y2={y}
                stroke="#F59E0B"
                strokeWidth="1.4"
                className="cad-heat-rise"
                style={{ animationDelay: `${idx * 240}ms` }}
              />
            ))}
            <text
              x="163"
              y="76"
              textAnchor="middle"
              fill="#FCD34D"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              TOWER DRYER
            </text>

            {/* Bucket Elevator Tower (Animated Vertical Lift) */}
            <rect
              x="216"
              y="36"
              width="24"
              height="202"
              rx="2"
              fill="#1E293B"
              stroke="#94A3B8"
              strokeWidth="1.4"
            />
            <line
              x1="228"
              y1="232"
              x2="228"
              y2="44"
              stroke="#5BB87A"
              strokeWidth="2.4"
              strokeDasharray="6 8"
              className="cad-flow-fast"
            />

            {/* Overhead Catwalk Conveyor Bridge (Animated Horizontal Stream) */}
            <rect
              x="240"
              y="46"
              width="164"
              height="16"
              rx="2"
              fill="#1E293B"
              stroke="#94A3B8"
              strokeWidth="1.2"
            />
            <line
              x1="244"
              y1="54"
              x2="396"
              y2="54"
              stroke="#5BB87A"
              strokeWidth="2.2"
              strokeDasharray="6 6"
              className="cad-flow-fast"
            />

            {/* Corrugated Steel Silo Z600 */}
            <path
              d="M270 238 V100 L336 62 L402 100 V238 H270 Z"
              fill="#0A1F2E"
              stroke="#E2E8F0"
              strokeWidth="1.8"
            />
            {[118, 136, 154, 172, 190, 208, 224].map((y) => (
              <line
                key={y}
                x1="272"
                y1={y}
                x2="400"
                y2={y}
                stroke="#334155"
                strokeWidth="1.2"
              />
            ))}
            {/* Silo fill drop line */}
            <line
              x1="336"
              y1="62"
              x2="336"
              y2="132"
              stroke="#5BB87A"
              strokeWidth="1.6"
              strokeDasharray="4 4"
              className="cad-flow"
            />
            {/* Z600 Badge */}
            <rect
              x="294"
              y="136"
              width="84"
              height="44"
              rx="4"
              fill="#071622"
              stroke="#5BB87A"
              strokeWidth="1.2"
            />
            <text
              x="336"
              y="155"
              textAnchor="middle"
              fill="#F4F7F9"
              fontSize="11"
              fontFamily="monospace"
              fontWeight="700"
            >
              Z600
            </text>
            <text
              x="336"
              y="170"
              textAnchor="middle"
              fill="#5BB87A"
              fontSize="8"
              fontFamily="monospace"
            >
              EN / EUROCODE
            </text>

            {/* Optical Color Sorter with Sweeping Laser Beam */}
            <rect
              x="434"
              y="154"
              width="102"
              height="84"
              rx="6"
              fill="#0A1F2E"
              stroke="#5BB87A"
              strokeWidth="1.6"
            />
            <line
              x1="442"
              y1="168"
              x2="528"
              y2="168"
              stroke="#5BB87A"
              strokeOpacity="0.85"
              strokeWidth="2"
              className="cad-optical-scan"
            />
            <text
              x="485"
              y="191"
              textAnchor="middle"
              fill="#F4F7F9"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              OPTICAL
            </text>
            <text
              x="485"
              y="206"
              textAnchor="middle"
              fill="#5BB87A"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              SORTER
            </text>
            <text
              x="485"
              y="224"
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="8.2"
              fontFamily="monospace"
            >
              200–500 t/h
            </text>

            {/* Animated Inter-Stage Grain Flow Connectors */}
            <path
              d="M110 206 H134 M192 206 H216 M402 206 H434"
              stroke="#5BB87A"
              strokeWidth="2.4"
              strokeDasharray="6 4"
              className="cad-flow-fast"
            />

            {/* Ground Datum */}
            <line x1="20" y1="238" x2="540" y2="238" stroke="#64748B" strokeWidth="1.8" />
            <text
              x="280"
              y="268"
              textAnchor="middle"
              fill="#94A3B8"
              fontSize="9"
              fontFamily="monospace"
            >
              CONTINUOUS INTAKE · DRYING · Z600 STORAGE · OPTICAL GRADING
            </text>
          </svg>
        )}

        {variant === "industrial-dual" && (
          <svg
            aria-hidden="true"
            viewBox="0 0 560 300"
            className="h-auto w-full max-w-[560px]"
            fill="none"
          >
            {/* TRACK A: Pipelines & Thermal */}
            <rect
              x="24"
              y="24"
              width="512"
              height="112"
              rx="8"
              fill="#0A1F2E"
              stroke="#5CB3AE"
              strokeOpacity="0.65"
              strokeWidth="1.4"
            />
            <text
              x="42"
              y="48"
              fill="#5CB3AE"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              TRACK A · HDPE / PE100 PIPELINES &amp; THERMAL RECOVERY
            </text>

            {/* Pressurized PE100 Pipe + Animated Fluid Stream */}
            <line
              x1="42"
              y1="88"
              x2="302"
              y2="88"
              stroke="#334155"
              strokeWidth="11"
              strokeLinecap="round"
            />
            <line
              x1="42"
              y1="88"
              x2="302"
              y2="88"
              stroke="#5CB3AE"
              strokeWidth="2.4"
              strokeDasharray="10 8"
              className="cad-flow-fast"
            />

            {/* CNC Butt-Fusion Weld Joint with Thermal Glow */}
            <circle
              cx="172"
              cy="88"
              r="18"
              fill="#F59E0B"
              fillOpacity="0.22"
              className="cad-weld-glow"
            />
            <line x1="172" y1="68" x2="172" y2="108" stroke="#F59E0B" strokeWidth="3.2" />
            <text
              x="172"
              y="124"
              textAnchor="middle"
              fill="#FCD34D"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="700"
            >
              CNC BUTT-FUSION LOGGED JOINT
            </text>

            {/* Steam Boiler & Economizer Unit */}
            <rect
              x="324"
              y="56"
              width="194"
              height="62"
              rx="6"
              fill="#071622"
              stroke="#F59E0B"
              strokeWidth="1.3"
            />
            <text
              x="421"
              y="82"
              textAnchor="middle"
              fill="#F4F7F9"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              STEAM BOILER + ECONOMIZER
            </text>
            <text
              x="421"
              y="100"
              textAnchor="middle"
              fill="#5CB3AE"
              fontSize="8"
              fontFamily="monospace"
            >
              WASTE HEAT RECOVERY LOOP
            </text>

            {/* TRACK B: Critical IT & OT/SCADA */}
            <rect
              x="24"
              y="156"
              width="512"
              height="120"
              rx="8"
              fill="#0D2537"
              stroke="#5BB87A"
              strokeOpacity="0.6"
              strokeWidth="1.4"
            />
            <text
              x="42"
              y="180"
              fill="#5BB87A"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
            >
              TRACK B · CRITICAL IT, OT CYBERSECURITY &amp; TELECOM
            </text>

            {/* Fiber Data Bus connecting 3 nodes */}
            <line x1="172" y1="226" x2="404" y2="226" stroke="#1E293B" strokeWidth="4" />
            <line
              x1="172"
              y1="226"
              x2="404"
              y2="226"
              stroke="#5CB3AE"
              strokeWidth="1.8"
              strokeDasharray="6 6"
              className="cad-flow-fast"
            />
            {/* Gliding optical data packets */}
            <circle cx="176" cy="226" r="3.5" fill="#8ED0CC" className="cad-packet-glide" />
            <circle
              cx="176"
              cy="226"
              r="3.5"
              fill="#5BB87A"
              className="cad-packet-glide"
              style={{ animationDelay: "1.3s" }}
            />

            {/* Node 1: IP/MPLS Core */}
            <rect
              x="42"
              y="198"
              width="132"
              height="56"
              rx="5"
              fill="#0A1F2E"
              stroke="#5CB3AE"
              strokeWidth="1.4"
            />
            <text
              x="108"
              y="222"
              textAnchor="middle"
              fill="#F4F7F9"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              IP/MPLS 100G
            </text>
            <text
              x="108"
              y="239"
              textAnchor="middle"
              fill="#5CB3AE"
              fontSize="7.8"
              fontFamily="monospace"
            >
              L2/L3 · CARRIER CORE
            </text>

            {/* Node 2: OT Bypass Firewall */}
            <rect
              x="212"
              y="198"
              width="136"
              height="56"
              rx="5"
              fill="#0A1F2E"
              stroke="#F59E0B"
              strokeWidth="1.4"
            />
            <text
              x="280"
              y="222"
              textAnchor="middle"
              fill="#F4F7F9"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              OT BYPASS FW
            </text>
            <text
              x="280"
              y="239"
              textAnchor="middle"
              fill="#FCD34D"
              fontSize="7.8"
              fontFamily="monospace"
            >
              -20..+60°C · OT NAC
            </text>

            {/* Node 3: IEC 61850 / GNSS PTP + Sync Pulse */}
            <rect
              x="386"
              y="198"
              width="132"
              height="56"
              rx="5"
              fill="#0A1F2E"
              stroke="#5BB87A"
              strokeWidth="1.4"
            />
            <text
              x="452"
              y="222"
              textAnchor="middle"
              fill="#F4F7F9"
              fontSize="9.5"
              fontFamily="monospace"
              fontWeight="700"
            >
              IEC 61850 / PTP
            </text>
            <text
              x="452"
              y="239"
              textAnchor="middle"
              fill="#5BB87A"
              fontSize="7.8"
              fontFamily="monospace"
            >
              GNSS · 1G–200G TEST
            </text>
            <circle cx="506" cy="208" r="3" fill="#5BB87A" />
            <circle
              cx="506"
              cy="208"
              r="7"
              stroke="#5BB87A"
              strokeWidth="1.2"
              className="cad-radar-ping"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

function SchematicSizeStub({ code, label }: { code: string; label: string }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-transparent">
      <div className="flex items-center justify-between gap-3 border-b border-transparent px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="h-2 w-2 shrink-0 rounded-full" />
          <span className="truncate font-mono text-[11px] font-semibold uppercase tracking-[0.14em]">
            {code} · {label}
          </span>
        </div>
        <span className="shrink-0 font-mono text-[10px] font-medium tracking-wider">
          SCALE 1:100 · ISO/EN
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center p-4 sm:p-5">
        <svg
          aria-hidden="true"
          viewBox="0 0 560 300"
          className="h-auto w-full max-w-[560px]"
        />
      </div>
    </div>
  );
}

function DomainSpecReadout({
  lang,
  card,
  detail,
  decorative = false,
}: {
  lang: string;
  card: HeroGridCard;
  detail: HeroShowcaseDetail;
  decorative?: boolean;
}) {
  const isSky = card.variant === "industrial-dual";
  const TitleTag = decorative ? "div" : "h3";

  return (
    <div className="flex flex-col justify-between rounded-xl border border-[#234863] bg-[#0D2537]/90 p-5 sm:p-6 lg:col-span-5">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#234863] pb-3.5">
          <span
            className={`inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.14em] ${
              isSky ? "text-[#5CB3AE]" : "text-[#5BB87A]"
            }`}
          >
            <DomainIcon variant={card.variant} className="h-4 w-4" />
            <span>
              {card.code} · {card.label}
            </span>
          </span>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            {card.sublabel}
          </span>
        </div>

        <TitleTag className="mt-4 text-xl font-bold leading-snug text-white sm:text-[1.35rem]">
          {detail.title}
        </TitleTag>

        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {detail.summary}
        </p>

        {/* 2 Monospace Telemetry / Spec KPI Tiles */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {detail.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-[#234863] bg-[#071622]/90 px-3.5 py-3"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                {metric.label}
              </p>
              <p
                className={`band-numeral mt-1.5 text-sm font-bold sm:text-base ${
                  isSky ? "text-[#8ED0CC]" : "text-[#86D4A0]"
                }`}
              >
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        {/* Standards Badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {detail.standards.map((std) => (
            <span
              key={std}
              className="rounded-md border border-[#234863] bg-slate-900/90 px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-200"
            >
              {std}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-[#234863] pt-5">
        {decorative ? (
          <span className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">
            <span>{detail.ctaLabel}</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </span>
        ) : (
          <Link
            href={`/${lang}${card.href}`}
            className={`group inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all duration-150 ${
              isSky
                ? "bg-[#006B68] hover:bg-[#005552]"
                : "bg-[#267042] hover:bg-[#1E5B35]"
            }`}
          >
            <span>{detail.ctaLabel}</span>
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export function CoreEngineeringShowcase({
  lang,
  heading,
  cards,
  showcase,
}: CoreEngineeringShowcaseProps) {
  const baseId = useId();
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusedWithin, setIsFocusedWithin] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  const isPaused = userPaused ?? prefersReducedMotion;

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const selectTab = useCallback((index: number, shouldFocus = false) => {
    setActiveIndex(index);
    setCycleKey((k) => k + 1);
    const tabEl = tabRefs.current[index];
    if (tabEl) {
      tabEl.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        container: "nearest",
      } as ScrollIntoViewOptions);
      if (shouldFocus) {
        tabEl.focus();
      }
    }
  }, []);

  // Wire beforematch listeners so browser find-in-page activates matching hidden="until-found" panels
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    panelRefs.current.forEach((panel, index) => {
      if (!panel) return;
      const handleBeforeMatch = () => {
        setActiveIndex(index);
        setUserPaused(true);
      };
      panel.addEventListener("beforematch", handleBeforeMatch);
      cleanups.push(() =>
        panel.removeEventListener("beforematch", handleBeforeMatch)
      );
    });
    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [cards.length]);

  const isCycleHeld = isHovered || isFocusedWithin;

  // Auto-advance cycle when active, unpaused, not hovered/focused, and tab is visible
  useEffect(() => {
    if (isPaused || isCycleHeld || cards.length <= 1) return;

    const timer = window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        setActiveIndex((prev) => (prev + 1) % cards.length);
        setCycleKey((k) => k + 1);
      }
    }, CYCLE_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused, isCycleHeld, cards.length, cycleKey]);

  const handleTabKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % cards.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + cards.length) % cards.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = cards.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      selectTab(nextIndex, true);
    }
  };

  const activeCard = cards[activeIndex] ?? cards[0];
  const isIndustrialActive = activeCard?.variant === "industrial-dual";

  return (
    <section
      aria-labelledby={`${baseId}-heading`}
      data-motion-paused={isPaused ? "true" : "false"}
      data-cycle-held={isCycleHeld ? "true" : "false"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusedWithin(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsFocusedWithin(false);
        }
      }}
      className="bg-blueprint-dark relative overflow-hidden border-t border-white/10 border-b border-b-slate-800 py-16 text-white lg:py-24"
    >
      {/* Dynamic Ambient Halo tied to active domain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: isIndustrialActive
            ? "radial-gradient(circle at 22% 18%, rgba(0,107,104,0.18), transparent 46%), radial-gradient(circle at 82% 80%, rgba(92,179,174,0.12), transparent 44%)"
            : "radial-gradient(circle at 22% 18%, rgba(38,112,66,0.20), transparent 46%), radial-gradient(circle at 82% 80%, rgba(91,184,122,0.12), transparent 44%)",
        }}
      />

      <div className="blueprint-scroll-stage relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + WCAG 2.2.2 Pause/Play Control */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5BB87A]">
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full ${
                    isPaused ? "bg-amber-400" : "cad-beacon bg-[#5BB87A]"
                  }`}
                />
                <span>{isPaused ? showcase.pausedLabel : showcase.liveLabel}</span>
              </span>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-300">
                {heading}
              </p>
            </div>

            <h2
              id={`${baseId}-heading`}
              className="mt-4 text-2xl font-extrabold leading-[1.14] tracking-tight text-white sm:text-3xl lg:text-[2.25rem]"
            >
              {showcase.sectionTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {showcase.sectionSubtitle}
            </p>
          </div>

          {/* Drawing Counter + Accessible Pause/Play Button (no aria-pressed when label changes) */}
          <div className="flex shrink-0 items-center gap-3 self-start lg:self-end">
            <span
              aria-hidden="true"
              className="band-numeral rounded-lg border border-white/10 bg-slate-900/75 px-3 py-2 text-sm font-semibold text-slate-200"
            >
              0{activeIndex + 1} / 0{cards.length}
            </span>
            <button
              type="button"
              onClick={() => setUserPaused(!isPaused)}
              aria-label={
                isPaused ? showcase.playButtonLabel : showcase.pauseButtonLabel
              }
              className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-slate-900/80 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-100 transition-colors hover:border-[#5BB87A] hover:bg-slate-800/90"
            >
              {isPaused ? (
                <Play aria-hidden="true" className="h-3.5 w-3.5 text-[#5BB87A]" />
              ) : (
                <Pause aria-hidden="true" className="h-3.5 w-3.5 text-[#5BB87A]" />
              )}
              <span>
                {isPaused ? showcase.playButtonLabel : showcase.pauseButtonLabel}
              </span>
            </button>
          </div>
        </div>

        {/* Single-Row 4-Domain Architectural Tablist */}
        <div
          role="tablist"
          aria-label={showcase.tablistLabel}
          className="domain-tablist mt-8 flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0"
        >
          {cards.map((card, index) => {
            const isSelected = index === activeIndex;
            const isSky = card.variant === "industrial-dual";
            const tabAccent = isSky ? "#5CB3AE" : "#5BB87A";

            return (
              <button
                key={card.code}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={`${baseId}-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => selectTab(index, false)}
                onKeyDown={(e) => handleTabKeyDown(e, index)}
                style={
                  {
                    "--domain-accent": tabAccent,
                  } as React.CSSProperties
                }
                className={`domain-tab group min-w-[230px] flex-none cursor-pointer overflow-hidden rounded-xl border px-4 py-4 text-left transition-colors duration-200 lg:min-w-0 ${
                  isSelected
                    ? "border-white/25 bg-slate-900/95 text-white shadow-lg"
                    : "border-white/10 bg-slate-900/45 text-slate-300 hover:border-white/20 hover:bg-slate-900/75 hover:text-white"
                }`}
              >
                {/* Animated cycle progress bar on the active tab */}
                {isSelected && (
                  <span
                    key={`${activeIndex}-${cycleKey}`}
                    aria-hidden="true"
                    className="domain-tab-progress pointer-events-none absolute inset-x-0 top-0 h-[2px]"
                    style={{ backgroundColor: tabAccent }}
                  />
                )}

                <div className="flex items-center justify-between gap-2">
                  <span
                    className="font-mono text-[11px] font-bold tracking-[0.14em]"
                    style={{ color: isSelected ? tabAccent : "#94A3B8" }}
                  >
                    {card.code}
                  </span>
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-lg border transition-colors ${
                      isSelected
                        ? isSky
                          ? "border-[#5CB3AE]/40 bg-[#5CB3AE]/15 text-[#5CB3AE]"
                          : "border-[#5BB87A]/40 bg-[#5BB87A]/15 text-[#5BB87A]"
                        : "border-white/10 bg-white/5 text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    <DomainIcon variant={card.variant} className="h-3.5 w-3.5" />
                  </span>
                </div>

                <p className="mt-2.5 font-mono text-xs font-bold tracking-[0.08em] text-current">
                  {card.label}
                </p>
                <p className="mt-1 truncate text-xs text-slate-400">
                  {card.sublabel}
                </p>
              </button>
            );
          })}
        </div>

        {/* Stacked Tab Panels sharing one grid cell (no gap, no box styles on tabpanel itself for hidden="until-found") */}
        <div className="mt-5 grid">
          {/* Invisible layout sizers lock the shared grid row to the tallest panel across all viewports & locales */}
          {cards.map((card) => {
            const detail = showcase.details[card.variant];
            return (
              <div
                key={`sizer-${card.code}`}
                aria-hidden="true"
                inert
                data-nosnippet=""
                className="invisible pointer-events-none select-none col-start-1 row-start-1"
              >
                <div className="rounded-2xl border border-transparent p-4 sm:p-6">
                  <div className="grid grid-rows-[auto_1fr] items-stretch gap-6 lg:grid-cols-12 lg:grid-rows-1">
                    <div className="lg:col-span-7">
                      <SchematicSizeStub code={card.code} label={card.label} />
                    </div>
                    <DomainSpecReadout
                      lang={lang}
                      card={card}
                      detail={detail}
                      decorative
                    />
                  </div>
                </div>
              </div>
            );
          })}

          {cards.map((card, index) => {
            const isSelected = index === activeIndex;
            const detail = showcase.details[card.variant];

            return (
              <div
                key={card.code}
                ref={(el) => {
                  panelRefs.current[index] = el;
                }}
                role="tabpanel"
                aria-labelledby={`${baseId}-tab-${index}`}
                className={
                  isSelected
                    ? "relative z-10 col-start-1 row-start-1"
                    : "pointer-events-none self-start col-start-1 row-start-1"
                }
                {...(isSelected
                  ? {}
                  : ({ hidden: "until-found" } as Record<string, string>))}
              >
                <div
                  className={`h-full rounded-2xl border border-white/12 bg-slate-900/75 p-4 shadow-2xl backdrop-blur-sm sm:p-6 ${
                    isSelected ? "cad-panel-enter" : ""
                  }`}
                >
                  <div className="grid h-full grid-rows-[auto_1fr] items-stretch gap-6 lg:grid-cols-12 lg:grid-rows-1">
                    {/* Left 7 cols: Live Animated CAD Blueprint Viewport */}
                    <div className="lg:col-span-7">
                      <AnimatedDomainSchematic
                        variant={card.variant}
                        code={card.code}
                        label={card.label}
                      />
                    </div>

                    {/* Right 5 cols: Engineering Specification Readout & Direct Link */}
                    <DomainSpecReadout
                      lang={lang}
                      card={card}
                      detail={detail}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
