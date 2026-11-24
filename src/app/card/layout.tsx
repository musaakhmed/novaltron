import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.websiteUrl),
  title: `${SITE_CONFIG.companyName} — Digital Business Card`,
  description:
    "Novaltron LLC digital business card — Engineering, sourcing & turnkey project execution.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#F4F7F9] text-[#455A69] selection:bg-[#267042] selection:text-white">
        {children}
      </body>
    </html>
  );
}
