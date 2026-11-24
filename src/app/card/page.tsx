import React from "react";
import type { Metadata } from "next";
import { CORPORATE_FALLBACK_CARD } from "@/lib/erm-cards";
import { DigitalBusinessCard } from "@/components/DigitalBusinessCard";

export const metadata: Metadata = {
  title: "Novaltron LLC — Digital Business Card",
  description:
    "Novaltron LLC — Engineering, Sourcing & Turnkey Project Execution Desk.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CorporateCardPage() {
  return <DigitalBusinessCard mode="corporate" card={CORPORATE_FALLBACK_CARD} />;
}
