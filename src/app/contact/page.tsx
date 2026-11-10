import type { Metadata } from "next";
import React from "react";
import { Header } from "@/components/Header";
import { SubpageHeroBanner } from "@/components/SubpageHeroBanner";
import { ResourceRfqSection } from "@/components/ResourceRfqSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Technical Resource Center & B2B RFQ Portal (/contact)",
  description:
    "Download Novaltron corporate line cards and submit project Requests for Quotations (RFQs) or Bills of Quantities (BOQs).",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <SubpageHeroBanner
          routeCode="ROUTE // /contact"
          title="Technical Resource Center & B2B RFQ Portal"
          subtitle="Download PDF corporate line cards and submit project Bills of Quantities (BOQs) directly to our engineering teams."
        />
        <ResourceRfqSection />
      </main>
      <Footer />
    </>
  );
}
