export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HeroGridCard {
  code: string;
  label: string;
  sublabel: string;
  variant: "irrigation" | "greenhouses" | "grain-silos" | "industrial-dual";
  href: string;
}

export interface AgroCardItem {
  id: string;
  code: string;
  title: string;
  description: string;
  ctaLabel: string;
  anchor: string;
  standards: string[];
  diagramVariant: "irrigation" | "greenhouses" | "grain-silos" | "safety-feed";
  imageSrc?: string;
  imageAlt?: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface GovernancePillar {
  number: string;
  title: string;
  detail: string;
  tags: string[];
}

export interface ReferenceScopeItem {
  code: string;
  corridor: string;
  metric: string;
  title: string;
  summary: string;
  standards: string[];
}

export interface PillarSection {
  id: string;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  diagramLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  standards: string[];
  items: {
    heading: string;
    detail: string;
  }[];
}

export interface BioIpmTier {
  id: "1" | "2" | "3";
  name: string;
  scaleTag: string;
  scaleKey: "small" | "commercial" | "enterprise";
  scaleLabel: string;
  featured?: boolean;
  hardwareTitle: string;
  hardwareItems: string[];
  advisoryTitle: string;
  advisoryItems: string[];
  ctaLabel: string;
}

export interface SiteDictionary {
  meta: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
    skipToContent: string;
  };
  nav: {
    links: NavLinkItem[];
    primaryCta: string;
    menuOpenLabel: string;
    menuCloseLabel: string;
    languageLabel: string;
  };
  footer: {
    summary: string;
    hubLabel: string;
    hubValue: string;
    corridorLabel: string;
    corridorValue: string;
    contactsLabel: string;
    socialLabel: string;
    navigationLabel: string;
    standardsLabel: string;
    legalLinkLabel: string;
    copyright: string;
  };
  home: {
    eyebrow: string;
    h1: string;
    subHeadline: string;
    primaryCta: string;
    secondaryCta: string;
    heroImageAlt: string;
    heroTrustBar: string[];
    heroGridHeading: string;
    heroGridCards: HeroGridCard[];
    agroSection: {
      bandNumber: string;
      bandMarker: string;
      h2: string;
      intro: string;
      viewAllCta: string;
      cards: AgroCardItem[];
    };
    bioBanner: {
      bandNumber: string;
      bandMarker: string;
      h2: string;
      body: string;
      imageAlt: string;
      highlights: string[];
      cta: string;
    };
    industrialSection: {
      bandNumber: string;
      bandMarker: string;
      h2: string;
      intro: string;
      imageAlt: string;
      trackA: {
        badge: string;
        title: string;
        anchor: string;
        bullets: string[];
        cta: string;
        diagramLabel: string;
      };
      trackB: {
        badge: string;
        title: string;
        anchor: string;
        bullets: string[];
        cta: string;
        diagramLabel: string;
      };
    };
    referenceSection: {
      eyebrow: string;
      h2: string;
      subtitle: string;
      operatingModelBadge: string;
      operatingModelBody: string;
      disclaimer: string;
      scopes: ReferenceScopeItem[];
    };
    deliverySection: {
      eyebrow: string;
      h2: string;
      subtitle: string;
      deliverableLabel: string;
      steps: StepItem[];
    };
    trustSection: {
      eyebrow: string;
      h2: string;
      subtitle: string;
      governancePillars: GovernancePillar[];
      bottomCtaTitle: string;
      bottomCtaBody: string;
      bottomCtaButton: string;
    };
  };
  agroSolutions: {
    metaTitle: string;
    eyebrow: string;
    h1: string;
    subHeadline: string;
    anchors: { id: string; label: string }[];
    pillars: PillarSection[];
    bottomCtaTitle: string;
    bottomCtaBody: string;
    bottomCtaButton: string;
  };
  bioIpm: {
    metaTitle: string;
    eyebrow: string;
    h1: string;
    subHeadline: string;
    imageAlt: string;
    anchors: { id: string; label: string }[];
    coreScopeTitle: string;
    coreScope: {
      title: string;
      body: string;
      badges: string[];
    }[];
    packagesSection: {
      title: string;
      subtitle: string;
      selectorLabel: string;
      recommendedLabel: string;
      tiers: BioIpmTier[];
      footnote: string;
    };
    roadmapSection: {
      title: string;
      steps: { step: string; title: string; detail: string }[];
    };
  };
  industrialInfrastructure: {
    metaTitle: string;
    eyebrow: string;
    h1: string;
    subHeadline: string;
    anchors: { id: string; label: string }[];
    tracks: {
      id: string;
      badge: string;
      title: string;
      subtitle: string;
      standards: string[];
      diagramLabel: string;
      imageSrc?: string;
      imageAlt?: string;
      items: { heading: string; detail: string }[];
    }[];
    bottomCtaTitle: string;
    bottomCtaButton: string;
  };
  turnkeyDelivery: {
    metaTitle: string;
    eyebrow: string;
    h1: string;
    subHeadline: string;
    anchors: { id: string; label: string }[];
    workflowTitle: string;
    workflowSubtitle: string;
    steps: StepItem[];
    pillarsTitle: string;
    pillarsSubtitle: string;
    executionPillars: {
      badge: string;
      title: string;
      body: string;
      bullets: string[];
      tags: string[];
    }[];
    scopesTitle: string;
    scopesSubtitle: string;
    bottomCtaTitle: string;
    bottomCtaBody: string;
    bottomCtaButton: string;
    aboutCrossLinkLabel: string;
  };
  aboutCompliance: {
    metaTitle: string;
    eyebrow: string;
    h1: string;
    subHeadline: string;
    anchors: { id: string; label: string }[];
    corporateTitle: string;
    corporateSubtitle: string;
    corporateHubName: string;
    corporateHubRole: string;
    corporateHubPoints: string[];
    corridorCountries: string[];
    corridorDiagramLabel: string;
    governanceTitle: string;
    governanceSubtitle: string;
    operatingModelHeading: string;
    operatingModelBody: string;
    standardsHeading: string;
    standardsBody: string;
    standardsList: string[];
    documentationHeading: string;
    documentationItems: string[];
    complianceTitle: string;
    complianceSubtitle: string;
    bottomCtaTitle: string;
    bottomCtaBody: string;
    bottomCtaButton: string;
    turnkeyCrossLinkLabel: string;
  };
  contact: {
    metaTitle: string;
    eyebrow: string;
    h1: string;
    subHeadline: string;
    directDeskTitle: string;
    directDeskBody: string;
    responseSla: string;
    socialLabel: string;
    privacyNotice: string;
    legalLinkLabel: string;
    form: {
      fullNameLabel: string;
      fullNamePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      countryLabel: string;
      countryPlaceholder: string;
      countries: string[];
      divisionLabel: string;
      divisionPlaceholder: string;
      divisions: { value: string; label: string }[];
      timelineLabel: string;
      timelinePlaceholder: string;
      scopeLabel: string;
      scopePlaceholder: string;
      boqLabel: string;
      boqHint: string;
      requiredTag: string;
      optionalTag: string;
      submitButton: string;
      submittingButton: string;
      validationErrors: {
        required: string;
        email: string;
      };
      confirmationTitle: string;
      referenceIdLabel: string;
      confirmationBody: string;
      confirmationReset: string;
      tierPreselectedNote: string;
    };
  };
  legal: {
    metaTitle: string;
    eyebrow: string;
    h1: string;
    subHeadline: string;
    updatedLabel: string;
    sections: {
      heading: string;
      body: string[];
    }[];
  };
}
