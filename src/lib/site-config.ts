/**
 * Central site contact, social, and corporate configuration.
 * Update social URLs and WhatsApp/Phone details here once finalized.
 */
export const SITE_CONFIG = {
  companyName: "Novaltron LLC",
  hubLocation: "Azerbaijan · Belgium · Türkiye · Georgia · Central Asia",
  websiteUrl: "https://novaltron.com",
  websiteDisplay: "novaltron.com",
  email: "info@novaltron.com",
  // Replace with final company LinkedIn & Instagram URLs when ready
  social: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/novaltron",
      configured: false,
    },
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/novaltron",
      configured: false,
    },
  },
  // Optional direct WhatsApp / phone desk line (update when live)
  whatsappDesk: {
    display: "WhatsApp Engineering Desk",
    href: "",
  },
} as const;
