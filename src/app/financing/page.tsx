import type { Metadata } from "next";
import React from "react";
import { Header } from "@/components/Header";
import { SubpageHeroBanner } from "@/components/SubpageHeroBanner";
import { FinancingSection } from "@/components/FinancingSection";
import { ResourceRfqSection } from "@/components/ResourceRfqSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agro-Financing & State Subsidy Advisory (/financing)",
  description:
    "Turnkey agricultural modernization packages structured for 40% state equipment subsidies and subsidized leasing.",
};

export default function FinancingPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <SubpageHeroBanner
          routeCode="ROUTE // /financing"
          title="Agro-Financing & State Subsidy Advisory"
          subtitle="Structuring turnkey grain terminal, seed cleaning, and irrigation packages to qualify for 40% state equipment subsidies and subsidized leasing."
        />
        <FinancingSection />
        <ResourceRfqSection />
      </main>
      <Footer />
    </>
  );
}
