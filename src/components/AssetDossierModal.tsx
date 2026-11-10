"use client";

import React, { useEffect } from "react";
import {
  X,
  Download,
  Printer,
  CheckCircle2,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { useNovaltron } from "./NovaltronProvider";

export function AssetDossierModal() {
  const { activeAsset, closeAssetModal } = useNovaltron();

  useEffect(() => {
    if (!activeAsset) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAssetModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeAsset, closeAssetModal]);

  if (!activeAsset) return null;

  const handleDownloadDossier = () => {
    const content = [
      "====================================================================",
      `NOVALTRON CORPORATE TECHNICAL DOSSIER & LINE CARD (v1.0)`,
      `Document Title: ${activeAsset.title}`,
      `Document Code:  ${activeAsset.code}`,
      `Revision:       ${activeAsset.updated} (${activeAsset.pages})`,
      "====================================================================",
      "",
      "1. CORPORATE ENTITIES (TWO-TIER STRUCTURE)",
      "   - Trading & Procurement Hub: Novaltron LLC",
      "   - Execution & Contracting Arm: Novaltron MMC",
      "   - Founding Partners: Musa (musa@novaltron.com) & Zaur (zaur@novaltron.com)",
      "   - General & KYC Desk: info@novaltron.com | https://novaltron.com",
      "",
      "2. EXECUTIVE SUMMARY",
      `   ${activeAsset.summary}`,
      "",
      "3. KEY TECHNICAL & COMPLIANCE CONTENTS",
      ...activeAsset.keyContents.map((item, i) => `   0${i + 1}. ${item}`),
      "",
      "4. CORE HARDWARE & OEM REFERENCE MATRIX",
      "   - Div 01 (Pipelines): Ritmo, Turan Makina, Elborweltech, Ormanlar (CNC Butt-Fusion Ø63-1600mm, Electrofusion, HDPE PE100)",
      "   - Div 02 (OT/SCADA): Techveck / Simgenet — SMGOS IP/MPLS (SMG411, SMG104, SMG818V5, SMG1000), SMG-SW, SMG50 (-48V DC Teleprotection), NAC Server, SDS (AES-256/WORM), HA PBX (100K users), SVP Verification (1G-200G, RFC 2544, ITU-T Y.1564, GOOSE/SV, TS/EN 61000-4 L3)",
      "   - Div 03 (Agro-Solids): Cimbria Turnkey Grain/Seed Lines, Logicontrol Metal Deformation Silo Weighing, 40% State Equipment Subsidy Structuring",
      "   - Div 04 (Thermal): Techveck Enerji & Industrial OEMs — Steam Boilers, Economizers, Heat Exchangers, Solar Pumping",
      "",
      "© 2026 Novaltron LLC. All Rights Reserved.",
    ].join("\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeAsset.id}-novaltron-v1.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="asset-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060B19]/80 backdrop-blur-sm"
      onClick={closeAssetModal}
    >
      <div
        className="relative w-full max-w-xl rounded-xl bg-[#0B132B] text-[#F8FAFC] border border-[#10B981]/50 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 bg-[#1C2541] border-b border-[#2A3659] flex items-start justify-between gap-4">
          <div className="flex items-start gap-2.5">
            <FileText
              className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <span className="font-mono text-[11px] text-[#10B981] font-semibold">
                {activeAsset.code}
              </span>
              <h2
                id="asset-modal-title"
                className="font-heading text-base font-bold text-white"
              >
                {activeAsset.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={closeAssetModal}
            aria-label="Close document preview"
            className="w-8 h-8 rounded bg-[#0B132B] hover:bg-[#2A3659] text-[#CBD5E1] flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
          <p className="text-xs text-[#CBD5E1] leading-relaxed">
            {activeAsset.summary}
          </p>

          <div className="p-4 rounded-lg bg-[#1C2541] border border-[#2A3659] space-y-2">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#10B981]">
              Included Sections:
            </h3>
            <ul className="space-y-1.5">
              {activeAsset.keyContents.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-white"
                >
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-lg bg-[#060B19] border border-[#2A3659] flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-[#94A3B8]">
              <ShieldCheck
                className="w-4 h-4 text-[#10B981] shrink-0"
                aria-hidden="true"
              />
              <span>Issued by Novaltron LLC &amp; Novaltron MMC</span>
            </div>
            <span className="font-mono text-[#10B981]">KYC / AVL Verified</span>
          </div>
        </div>

        <div className="px-5 py-3.5 bg-[#1C2541] border-t border-[#2A3659] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#0B132B] hover:bg-[#2A3659] text-[#F8FAFC] border border-[#2A3659] font-mono text-xs font-semibold cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#F59E0B]" aria-hidden="true" />
            <span>Print / PDF</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadDossier}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#10B981] hover:bg-[#0D9488] text-[#0B132B] font-heading font-bold text-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Download Spec Dossier</span>
          </button>
        </div>
      </div>
    </div>
  );
}
