import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { TurnkeySection } from "@/components/TurnkeySection";
import { FinancingSection } from "@/components/FinancingSection";
import { ComplianceSection } from "@/components/ComplianceSection";
import { ResourceRfqSection } from "@/components/ResourceRfqSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <SolutionsSection />
        <TurnkeySection />
        <FinancingSection />
        <ComplianceSection />
        <ResourceRfqSection />
      </main>
      <Footer />
    </>
  );
}
