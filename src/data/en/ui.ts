/**
 * English UI / microcopy.
 *
 * Kept separate from the Hinglish copy in `src/data/ui.ts` so both locales
 * can be edited independently and never share identical strings.
 */

const shared = {
  xmlSitemap: "XML Sitemap",
  breadcrumbAria: "Breadcrumb",
  contactLabels: {
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
  },
} as const;

export const englishUiCopy = {
  ...shared,
  breadcrumbHome: "Home",
  stepPrefix: "Step",
  allPrefix: "All",
  languageLabel: "Language",
  languageSwitcher: {
    chooseLabel: "Choose language",
    englishLabel: "English",
    englishTitle: "English version",
    englishAria: "Switch to English",
    hinglishLabel: "Hinglish",
    hinglishTitle: "Hinglish version",
    hinglishAria: "Switch to Hinglish",
  },
  mobileNavigation: "Mobile navigation",
  mobileNav: "Mobile",
  primaryNav: "Primary",
  chooseLanguage: "Choose language",
  followUs: "Follow us",
  viewOnGoogleMaps: "View on Google Maps",
  allRightsReserved: "All rights reserved.",
  followInstagramAria: "Follow Bharat Agricultures on Instagram",
  productFallback: {
    agricultural: "Agricultural Machinery",
    brickKiln: "Brick Kiln Machinery",
  },
  pageLabels: {
    products: "Products",
  },
  productHub: {
    kickerPrefix: "Product hub",
    kickerSuffix: "machines",
  },
  aboutPage: {
    viewInfrastructure: "View infrastructure",
  },
  contactPage: {
    unitKicker: "Find our manufacturing unit",
    unitTitle: "Visit Bharat Agricultures",
    unitCopy: "Call ahead to confirm your visit and speak with our team.",
    mapCta: "Open location in Google Maps",
  },

  introduction: {
    eyebrow: "01 — WHO WE ARE",
    heading: {
      brand: "Bharat Agricultures.",
      accent: "Agricultural machinery manufacturer in Sambhal.",
    },
    paragraphs: [
      "Bharat Agricultures is an agricultural machinery manufacturer based in Sambhal, Uttar Pradesh. We focus on building machinery and equipment for farming, designed around changing agricultural needs.",
      "Our goal is to bring useful machinery solutions to farmers and the agriculture industry. Quality, practical design and continuous improvement are the foundation of our work.",
    ],
    image: {
      alt: "Agricultural tractor working in a farm field",
      brand: "BHARAT AGRICULTURES",
      statement: "The strength of farming.",
      statementAccent: "The start of a better tomorrow.",
    },
    badge: {
      value: "15",
      label: "Machines, tractors and agricultural solutions",
    },
    features: [
      {
        icon: "sprout",
        title: "Agriculture First",
        description: "Every decision keeps the needs of farming in focus.",
      },
      {
        icon: "shield",
        title: "Quality Focus",
        description: "Special attention to product quality and reliability.",
      },
      {
        icon: "leaf",
        title: "Growth Mindset",
        description: "A mindset that moves forward with modern agriculture.",
      },
    ],
    cta: {
      label: "About Us",
      href: "/about",
    },
    location: "SAMBHAL, UTTAR PRADESH",
    bottom: ["Agriculture First", "Quality Driven", "Future Focused"],
  },

  productShowcase: {
    kicker: "Our Machinery",
    title: "Equipment built for",
    titleAccent: "better work.",
    description:
      "Explore dependable machinery designed for agricultural operations and brick kiln industries. Find the right equipment for your work.",
    catalogueLink: "View full catalogue",
    filterAria: "Filter machinery",
    filters: [
      { value: "all", label: "All machinery", shortLabel: "All" },
      { value: "agricultural", label: "Agricultural", shortLabel: "Agricultural" },
      { value: "brick-kiln", label: "Brick Kiln", shortLabel: "Brick Kiln" },
    ],
    showing: "Showing",
    productSingular: "product",
    productPlural: "products",
    viewDetails: "View details",
    viewPrefix: "View",
    categoryLabels: {
      agricultural: "Agricultural",
      "brick-kiln": "Brick Kiln",
    },
  },

  partsTeaser: {
    kickerFallback: "Parts & Spares",
    title: "Keep Every Machine",
    titleAccent: "Running.",
    subtitle: "Genuine Parts. Reliable Performance.",
    description:
      "High-quality spare parts for agricultural, brick kiln and industrial machinery.",
    ctaLabel: "Explore All Parts",
    categories: [
      {
        icon: "sprout",
        image: "/agricultural-parts.webp",
        alt: "Agricultural machinery spare parts",
        parts: "Tines • Blades • Jaali • Bearings",
      },
      {
        icon: "layers",
        image: "/brick-kiln-parts.webp",
        alt: "Brick kiln machinery spare parts",
        parts: "Pugmill Blades • Hammers • Screens",
      },
      {
        icon: "settings",
        image: "/casting-parts.webp",
        alt: "Industrial metal casting components",
        parts: "Custom Casting • As Per Drawing",
      },
    ],
    trustItems: [
      { icon: "shield", label: "Premium Quality" },
      { icon: "settings", label: "Direct Manufacturer" },
      { icon: "handshake", label: "Reliable Support" },
    ],
  },

  enquiryFormMessage: {
    intro: "Hello Bharat Agricultures! I would like to enquire about machinery.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    product: "Product",
    requirement: "Requirement",
    phoneFallback: "Not provided",
    other: "Other",
    notSpecified: "Not specified",
  },

  floatingWidget: {
    kicker: "Straight from the manufacturer",
    title: "Talk to us",
    description: "Machine, rate or spare part — talk to us whichever way suits you.",
    whatsappNote: "Chat instantly",
    callLabel: "Call now",
    mailLabel: "Email us",
    openOptions: "Open contact options",
    closeOptions: "Close contact options",
    messenger:
      "Hello Bharat Agricultures! I want to know about machinery, rates and spare parts.",
  },

  htmlSitemap: {
    title: "Website Sitemap | Bharat Agricultures",
    description:
      "Find links to the main Bharat Agricultures pages, including agricultural equipment, brick kiln machinery, product information and spare parts categories.",
    exploreKicker: "Explore the website",
    intro: "Browse our company information, machinery ranges and product pages.",
    breadcrumb: "HTML Sitemap",
    groups: {
      company: "Company",
      home: "Home",
      about: "About Us",
      quality: "Quality Commitment",
      infrastructure: "Infrastructure",
      contact: "Contact",
      agricultural: "Agricultural machinery",
      allAgricultural: "All Agricultural Machinery",
      brickKiln: "Brick kiln machinery",
      allBrickKiln: "All Brick Kiln Machinery",
      parts: "Machinery parts",
      allParts: "All Machinery Parts",
    },
  },

  enquiryPopup: {
    kicker: "Straight from the manufacturer",
    title: "Talk machinery,",
    titleAccent: "straight with us.",
    description:
      "Thresher, cleaner, harrow or brick kiln machine — talk to us directly for rates and guidance.",
    actionsLabel: "How would you like to talk?",
    callLabel: "Call us",
    whatsappLabel: "Message on WhatsApp",
    whatsappValue: "Talk to us instantly",
    whatsappNote: "Send a photo or part number",
    mailLabel: "Email us",
    mailNote: "Attach a drawing or your requirement",
    closeLabel: "Close contact card",
    footerNote: "No spam · Direct advice from the manufacturer",
    whatsappMessage:
      "Hello Bharat Agricultures! I visited your website and would like to know more about your machinery.",
    hours: "Mon–Sat, 9 AM – 7 PM",
    hoursCompact: "Mon–Sat · 9 AM – 7 PM",
    location: "Sambhal, Uttar Pradesh",
  },
} as const;

