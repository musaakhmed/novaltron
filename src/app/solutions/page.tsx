import type { Metadata } from "next";
import React from "react";
import { Header } from "@/components/Header";
import { SubpageHeroBanner } from "@/components/SubpageHeroBanner";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ResourceRfqSection } from "@/components/ResourceRfqSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Core Divisions & Equipment Portfolio (/solutions)",
  description:
    "Explore Novaltron's 4 core engineering divisions: Pipeline & Thermoplastic Welding, Critical Infrastructure OT/SCADA Networks, Agro-Industrial Silo Monitoring, and Thermal Energy.",
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <SubpageHeroBanner
          routeCode="ROUTE // /solutions"
          title="Core Engineering Divisions & Equipment Portfolio"
          subtitle="Technical specification catalog across Thermoplastic Pipelines, Substation OT/SCADA Networks, Turnkey Grain Terminals, and Thermal Energy."
        />
        <SolutionsSection />
        <ResourceRfqSection />
      </main>
      <Footer />
    </>
  );
}
