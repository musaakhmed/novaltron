import type { Metadata } from "next";
import React from "react";
import { Header } from "@/components/Header";
import { SubpageHeroBanner } from "@/components/SubpageHeroBanner";
import { TurnkeySection } from "@/components/TurnkeySection";
import { ResourceRfqSection } from "@/components/ResourceRfqSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Turnkey Working Model (/services)",
  description:
    "Single Point of Accountability: 5-stage engineering, procurement, and FAT/SAT commissioning model.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <SubpageHeroBanner
          routeCode="ROUTE // /services"
          title="Turnkey Working Model & FAT/SAT Acceptance"
          subtitle="From tender specification extraction and multi-currency procurement to measurement-backed SAT commissioning."
        />
        <TurnkeySection />
        <ResourceRfqSection />
      </main>
      <Footer />
    </>
  );
}
