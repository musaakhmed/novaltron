"use client";

import React, { createContext, useContext, useState } from "react";
import {
  DOWNLOADABLE_ASSETS,
  DownloadableAsset,
  SITE_COPY,
} from "@/data/novaltron-data";

interface NovaltronContextType {
  dict: typeof SITE_COPY;
  activeAsset: DownloadableAsset | null;
  openAssetModal: (assetId: string) => void;
  closeAssetModal: () => void;
  selectedRfqDivision: string;
  setSelectedRfqDivision: (div: string) => void;
}

const NovaltronContext = createContext<NovaltronContextType | undefined>(
  undefined
);

export function NovaltronProvider({ children }: { children: React.ReactNode }) {
  const [activeAsset, setActiveAsset] = useState<DownloadableAsset | null>(
    null
  );
  const [selectedRfqDivision, setSelectedRfqDivision] = useState<string>(
    "Critical Infrastructure, OT Cybersecurity & SCADA"
  );

  const openAssetModal = (assetId: string) => {
    const found =
      DOWNLOADABLE_ASSETS.find((a) => a.id === assetId) ||
      DOWNLOADABLE_ASSETS[0];
    setActiveAsset(found);
  };

  const closeAssetModal = () => {
    setActiveAsset(null);
  };

  return (
    <NovaltronContext.Provider
      value={{
        dict: SITE_COPY,
        activeAsset,
        openAssetModal,
        closeAssetModal,
        selectedRfqDivision,
        setSelectedRfqDivision,
      }}
    >
      {children}
    </NovaltronContext.Provider>
  );
}

export function useNovaltron() {
  const ctx = useContext(NovaltronContext);
  if (!ctx) {
    throw new Error("useNovaltron must be used within a NovaltronProvider");
  }
  return ctx;
}
