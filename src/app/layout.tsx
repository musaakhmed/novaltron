import type { Metadata } from "next";
import "./globals.css";
import { NovaltronProvider } from "@/components/NovaltronProvider";
import { AssetDossierModal } from "@/components/AssetDossierModal";

export const metadata: Metadata = {
  title: {
    default: "NOVALTRON | Industrial Supply & EPC Integration",
    template: "%s | NOVALTRON",
  },
  description:
    "Novaltron bridges OEM technologies with field execution—delivering thermoplastic pipeline machinery, substation OT/SCADA networks, turnkey grain terminals, and thermal energy systems.",
  keywords: [
    "Novaltron",
    "Novaltron LLC",
    "Novaltron MMC",
    "EPC Integration",
    "SMGOS IP/MPLS Routers",
    "SMG50 Teleprotection",
    "SVP Network Verification",
    "Cimbria Grain Terminals",
    "Logicontrol Silo Weighing",
    "Ritmo Turan Makina Butt Fusion",
  ],
  metadataBase: new URL("https://novaltron.com"),
  openGraph: {
    title: "NOVALTRON | Industrial Engineering & Critical Equipment Supply",
    description:
      "Integrated execution across Pipelines, Substation OT/SCADA Networks, Turnkey Grain Terminals & Thermal Energy Systems.",
    url: "https://novaltron.com",
    siteName: "Novaltron",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0B132B] selection:bg-[#10B981] selection:text-[#0B132B]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#F59E0B] focus:text-[#0B132B] focus:font-bold focus:px-4 focus:py-2.5 focus:rounded-md focus:shadow-lg"
        >
          Skip to main technical content
        </a>
        <NovaltronProvider>
          {children}
          <AssetDossierModal />
        </NovaltronProvider>
      </body>
    </html>
  );
}
