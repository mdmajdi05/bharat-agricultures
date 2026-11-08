/**
 * Centralized UI / microcopy for both locales.
 *
 * Everything here is plain data (no imports) so server and client components
 * can read from the same single source. Page-level long-form content stays in
 * `siteContent.ts` / `data/en/siteContent.ts`; this file collects the strings
 * that used to be written inline inside components.
 */

import { englishUiCopy } from "@/data/en/ui";

export type UiLocale = "hi" | "en";

const shared = {
  xmlSitemap: "XML Sitemap",
  breadcrumbAria: "Breadcrumb",
  contactLabels: {
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
  },
} as const;

export const uiCopy = {
  hi: {
    ...shared,
    breadcrumbHome: "Home",
    stepPrefix: "Step",
    allPrefix: "All",
    languageLabel: "Bhasha",
    languageSwitcher: {
      chooseLabel: "Bhasha chunein",
      englishLabel: "English",
      englishTitle: "English version",
      englishAria: "English mein dekhein",
      hinglishLabel: "Hinglish",
      hinglishTitle: "Hinglish version",
      hinglishAria: "Hinglish mein dekhein",
    },
    mobileNavigation: "Mobile navigation",
    mobileNav: "Mobile",
    primaryNav: "Primary",
    chooseLanguage: "Choose language",
    followUs: "Humein follow karein",
    viewOnGoogleMaps: "Google Maps par dekhein",
    allRightsReserved: "Sabhi adhikar surakshit.",
    followInstagramAria: "Bharat Agricultures ko Instagram par follow karein",
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
      viewInfrastructure: "Infrastructure dekhein",
    },
    contactPage: {
      unitKicker: "Hamari manufacturing unit",
      unitTitle: "Bharat Agricultures par aayein",
      unitCopy: "Visit se pehle call karke samay confirm karein aur hamari team se baat karein.",
      mapCta: "Google Maps par location kholein",
    },

    // --------------------------------------------------------
    // HOME / INTRODUCTION
    // --------------------------------------------------------
    introduction: {
      eyebrow: "01 — WHO WE ARE",
      heading: {
        brand: "Bharat Agricultures.",
        accent: "Sambhal ka agricultural machinery manufacturer.",
      },
      paragraphs: [
        "Bharat Agricultures, Sambhal, Uttar Pradesh mein sthit ek agricultural machinery manufacturer hai. Hum kheti ke liye machinery aur equipment banane par focus karte hain, jo badalti agricultural needs ko dhyan mein rakhkar design kiye jaate hain.",
        "Humara maqsad hai ki farmers aur agriculture industry tak useful machinery solutions pahunch sakein. Quality, practical design aur continuous improvement humare kaam ki buniyad hain.",
      ],
      image: {
        alt: "Khet mein kaam karta agricultural tractor",
        brand: "BHARAT AGRICULTURES",
        statement: "Kheti ki taqat.",
        statementAccent: "Behtar kal ki shuruaat.",
      },
      badge: {
        value: "15",
        label: "Machines, tractors aur agricultural solutions",
      },
      features: [
        {
          icon: "sprout",
          title: "Agriculture First",
          description: "Har faisle mein kheti ki zarooraton ko ahmiyat.",
        },
        {
          icon: "shield",
          title: "Quality Focus",
          description: "Product quality aur reliability par khaas dhyan.",
        },
        {
          icon: "leaf",
          title: "Growth Mindset",
          description: "Modern agriculture ke saath aage badhne ki soch.",
        },
      ],
      cta: {
        label: "Humare Baare Mein",
        href: "/about",
      },
      location: "SAMBHAL, UTTAR PRADESH",
      bottom: ["Agriculture First", "Quality Driven", "Future Focused"],
    },

    // --------------------------------------------------------
    // HOME / PRODUCT SHOWCASE
    // --------------------------------------------------------
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

    // --------------------------------------------------------
    // HOME / PARTS TEASER
    // --------------------------------------------------------
    partsTeaser: {
      kickerFallback: "Parts & Spares",
      title: "Keep Every Machine",
      titleAccent: "Running.",
      subtitle: "Asli parts. Bharosemand performance.",
      description:
        "Kheti, eent bhatta aur industrial machinery ke liye high-quality spare parts.",
      ctaLabel: "Explore All Parts",
      categories: [
        {
          icon: "sprout",
          image: "/agricultural-parts.webp",
          alt: "Kheti machinery ke spare parts",
          parts: "Tine • Blade • Jaali • Bearing",
        },
        {
          icon: "layers",
          image: "/brick-kiln-parts.webp",
          alt: "Eent bhatta machinery ke spare parts",
          parts: "Pugmill blade • Hammer • Screen",
        },
        {
          icon: "settings",
          image: "/casting-parts.webp",
          alt: "Industrial metal casting ke components",
          parts: "Custom casting • Drawing ke hisaab se",
        },
      ],
      trustItems: [
        { icon: "shield", label: "Premium Quality" },
        { icon: "settings", label: "Direct Manufacturer" },
        { icon: "handshake", label: "Reliable Support" },
      ],
    },

    // --------------------------------------------------------
    // ENQUIRY FORM (message + fallbacks)
    // --------------------------------------------------------
    enquiryFormMessage: {
      intro: "Namaste Bharat Agricultures! Mujhe machinery ke baare mein enquiry karni hai.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      product: "Product",
      requirement: "Requirement",
      phoneFallback: "Not provided",
      other: "Other",
      notSpecified: "Not specified",
    },

    // --------------------------------------------------------
    // FLOATING CONTACT WIDGET
    // --------------------------------------------------------
    floatingWidget: {
      kicker: "Seedha manufacturer se",
      title: "Baat karein",
      description: "Machine, rate ya spare part — jahan comfortable hain, wahin se baat karein.",
      whatsappNote: "Turant chat karein",
      callLabel: "Call karein",
      mailLabel: "Email karein",
      openOptions: "Contact options kholein",
      closeOptions: "Contact options band karein",
      messenger:
        "Namaste Bharat Agricultures! Mujhe machinery, rate aur spare parts ke baare mein jaanna hai.",
    },

    // --------------------------------------------------------
    // HTML SITEMAP
    // --------------------------------------------------------
    htmlSitemap: {
      title: "Website ke sabhi pages",
      description:
        "Bharat Agricultures ke pages, kheti ki machinery, eent bhatta machinery aur spare parts ek jagah dekhein.",
      exploreKicker: "Website explore karein",
      intro: "Company ki jaankari, machinery range aur product pages ek jagah dekhein.",
      breadcrumb: "HTML Sitemap",
      groups: {
        company: "Company",
        home: "Home",
        about: "Hamare baare mein",
        quality: "Quality ka vaada",
        infrastructure: "Hamari unit",
        contact: "Sampark",
        agricultural: "Kheti ki machinery",
        allAgricultural: "Kheti ki saari machinery",
        brickKiln: "Eent bhatta machinery",
        allBrickKiln: "Eent bhatta ki saari machinery",
        parts: "Machinery ke parts",
        allParts: "Saare machinery parts",
      },
    },

    // --------------------------------------------------------
    // ENQUIRY POPUP
    // --------------------------------------------------------
    enquiryPopup: {
      kicker: "Seedha manufacturer se",
      title: "Machine ki baat,",
      titleAccent: "seedha humse.",
      description:
        "Thresher, cleaner, harrow ya brick kiln machine — rate aur guidance ke liye seedha humse baat karein.",
      actionsLabel: "Kaise baat karna chahenge?",
      callLabel: "Call karein",
      whatsappLabel: "WhatsApp par message",
      whatsappValue: "Turant baat karein",
      whatsappNote: "Photo ya part number bhej dein",
      mailLabel: "Email karein",
      mailNote: "Drawing ya requirement attach karein",
      closeLabel: "Contact card band karein",
      footerNote: "No spam · Direct manufacturer se salaah",
      whatsappMessage:
        "Namaste Bharat Agricultures! Maine aapki website dekhi aur machinery ke baare mein jaanna chahta hoon.",
      hours: "Mon–Sat, 9 AM – 7 PM",
      hoursCompact: "Mon–Sat · 9 AM – 7 PM",
      location: "Sambhal, Uttar Pradesh",
    },
  },

  en: englishUiCopy,
} as const;

export type UiCopy = (typeof uiCopy)["en"];

export function getUiCopy(locale: UiLocale) {
  return uiCopy[locale];
}
