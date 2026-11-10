import type { Metadata } from "next";
import React from "react";
import { Header } from "@/components/Header";
import { SubpageHeroBanner } from "@/components/SubpageHeroBanner";
import { ComplianceSection } from "@/components/ComplianceSection";
import { ResourceRfqSection } from "@/components/ResourceRfqSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Corporate Architecture & Bank/Vendor Compliance (/about)",
  description:
    "Two-tier corporate architecture: Novaltron LLC and Novaltron MMC. Bank KYC/AML and EPC AVL compliance documentation.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <SubpageHeroBanner
          routeCode="ROUTE // /about"
          title="Corporate Architecture & Bank/Vendor Compliance"
          subtitle="Institutional profile of Novaltron LLC and Novaltron MMC, executive governance by founding partners Musa & Zaur, and physical supply chain traceability."
        />
        <ComplianceSection />
        <ResourceRfqSection />
      </main>
      <Footer />
    </>
  );
}
