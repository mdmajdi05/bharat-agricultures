/**
 * English site-wide copy.
 *
 * Mirrors the exports in `src/data/siteContent.ts` (Hinglish) so pages can
 * select one content set per locale without duplicating components.
 */

import { agriculturalProducts, brickKilnProducts, products } from "@/data/en/products";
import { emailHref, phoneHref, site, whatsappHref } from "@/lib/site";

const productCount = String(products.length).padStart(2, "0");

// ============================================================
// HOME / INTRODUCTION ("01 — Who we are")
// ============================================================

export const homeIntroCopy = {
  kicker: "01 — Who we are",
  title: "Bharat Agricultures.",
  titleAccent: "Agricultural machinery manufacturer in Sambhal.",
  paragraphs: [
    "Bharat Agricultures is an agricultural machinery manufacturer in Sambhal, Uttar Pradesh. We build farm machinery and brick kiln machinery ourselves — from threshers, paddy cleaners, disc harrows, land levelers and cultivators to pugmills, ID fans and coal crushers, all in one place.",
    "We are the direct manufacturer, so farm equipment comes at a direct-from-factory rate without middleman commission. Whether you are a farmer, a dealer or a brick kiln owner, tell us what you need. We will suggest the right machine, share the rate and support you with spare parts.",
  ],
  linkLabel: "More about us",
  linkHref: "/about",
  imageAlt: "Tractor working in a farm field",
  badgeValue: productCount,
  badgeLabel: "Machines across three product families",
};

// ============================================================
// HOME / AGRICULTURAL SHOWCASE ("02 — What we make")
// ============================================================

export const homeShowcaseCopy = {
  kicker: "02 — What we make",
  title: "Agricultural machinery manufacturer in India",
  copy:
    "Farm machinery manufacturer and agricultural equipment manufacturer: threshers, cleaners, harrows, land levelers and cultivators from our own unit in Sambhal, Uttar Pradesh.",
  linkLabel: "See all agricultural machinery",
  linkHref: "/agricultural-machinery",
  railNote: "Swipe to explore →",
};

// ============================================================
// HOME / BRICK KILN SHOWCASE ("03 — Brick kiln machinery")
// ============================================================

export const homeBrickKilnCopy = {
  kicker: "03 — Brick kiln machinery",
  title: "Brick kiln machinery manufacturer in India",
  copy:
    "Gara and brick-making machines, pugmills, ID fans and coal crushers — built for the process, airflow and fuel sizing needs of brick factories.",
  linkLabel: "See all brick kiln machinery",
  linkHref: "/brick-kiln-machinery",
  railNote: "Swipe to explore →",
};

// ============================================================
// HOME / MACHINE GUIDE ("04 — Machine guide")
// ============================================================

export const homeMachineGuideCopy = {
  kicker: "04 — Machine guide",
  title: "Which machine does which job",
  copy:
    "Every job needs a different implement. Choose a machine by the work below, or call us and we will advise after looking at your crop.",
  groups: [
    {
      label: "Tillage",
      copy: "Break hard soil and open the field for sowing.",
      links: [
        { label: "Cultivator", href: "/products/tractor-cultivator" },
        { label: "Disc Harrow", href: "/products/disc-harrow" },
        { label: "Harrow", href: "/products/agricultural-harrow-machine" },
      ],
    },
    {
      label: "Levelling",
      copy: "Set the surface before irrigation so water spreads evenly.",
      links: [
        { label: "Plate Land Leveler", href: "/products/plate-land-leveler" },
        { label: "2 in 1 Land Leveler", href: "/products/2-in-1-land-leveler" },
      ],
    },
    {
      label: "After harvest",
      copy: "Separate grain — wheat, paddy, pulses and maize.",
      links: [
        { label: "Thresher", href: "/products/agricultural-thresher-machine" },
        { label: "Hawa Thresher", href: "/products/hawa-thresher-machine" },
        { label: "Maize Thresher", href: "/products/maize-thresher-machine" },
      ],
    },
    {
      label: "Grain cleaning",
      copy: "Remove dust, husk and stones to make grain mandi-ready.",
      links: [
        { label: "Paddy Cleaner", href: "/products/paddy-cleaner-machine" },
        { label: "Dust Cleaner", href: "/products/agricultural-dust-cleaner-machine" },
      ],
    },
  ],
  note: "If you are unsure, share the machine name or your crop and we will suggest the right implement.",
  linkLabel: "Browse all agricultural machinery",
  linkHref: "/agricultural-machinery",
};

// ============================================================
// HOME / PARTS TEASER
// ============================================================

export const homePartsCopy = {
  kicker: "Parts & spares",
  title: "Keep the machine running, keep a spare ready",
  copy:
    "A machine stopping mid-season is the most expensive outcome. Tines, blades, screens, hammers and bearings — wear-part support direct from the manufacturer.",
  cards: [
    {
      title: "Agricultural Parts",
      copy: "Tines, blades, screens, drum parts and bearings.",
      href: "/machinery-parts/agricultural-parts",
    },
    {
      title: "Brick Kiln Parts",
      copy: "Pugmill blades, crusher hammers, screens and fan components.",
      href: "/machinery-parts/brick-kiln-parts",
    },
    {
      title: "Casting Parts",
      copy: "Casting components made to a drawing or sample.",
      href: "/machinery-parts/casting-parts",
    },
  ],
  linkLabel: "Explore machinery parts",
  linkHref: "/machinery-parts",
};

// ============================================================
// HOME / FAQ
// ============================================================

export const homeFaqCopy = {
  kicker: "Questions & answers",
  title: "What customers ask most",
  copy:
    "Common questions about choosing a machine, pricing and spare parts. If your question is not here, call or message us on WhatsApp.",
  faqs: [
    {
      q: "Where does Bharat Agricultures manufacture?",
      a: "Our manufacturing unit is in Sambhal, Uttar Pradesh. Both agricultural machinery and brick kiln machinery are built here, so specification and spare parts can be discussed directly.",
    },
    {
      q: "How do I find out the machine price?",
      a: "Price depends on the model, capacity, power option and material. We do not publish a fixed price. Share your requirement — crop, volume and location — and we will send a direct factory rate.",
    },
    {
      q: "Do you supply across India?",
      a: "Yes, we supply to different states across India. Dispatch mode and timeline depend on your location and machine size, and are shared before the order is confirmed.",
    },
    {
      q: "Will spare parts be available later?",
      a: "Yes. We supply tines, blades, screens, hammers, screens and bearings. Keeping a basic spare set with the machine is practical.",
    },
    {
      q: "Do dealers or FPOs get a bulk rate?",
      a: "Yes. Bulk requirements from dealers, FPOs and contractors are discussed with rate and dispatch schedule. Please mention quantity in your enquiry.",
    },
    {
      q: "Can I visit the factory to see the machine?",
      a: "Absolutely. Call before visiting to confirm a time so the concerned person is available and you can see the machine setup on site.",
    },
  ],
};

// ============================================================
// ABOUT PAGE
// ============================================================

export const pageHero = {
  about: {
    kicker: "Company / About us",
    title: "Agricultural & Brick Kiln Machinery Manufacturer in India",
    copy:
      "Bharat Agricultures is an agricultural machinery manufacturer in Sambhal. We build farm machinery and brick kiln machinery ourselves — one place for farmers, dealers and brick kiln owners.",
    image: "barn",
    current: "About Us",
  },
  contact: {
    kicker: "Contact / Get in touch",
    title: "Straight answers, direct conversation.",
    copy:
      "Need a machine, a price or a spare part — call, WhatsApp or use the enquiry form, whichever is easier. We will understand the requirement and suggest the right option.",
    image: "greenhouse",
    current: "Contact",
  },
  products: {
    kicker: `Product hub / ${productCount} machines`,
    title: "Machinery for farms and brick kilns",
    copy:
      "Three product families: agricultural machinery, brick kiln machinery and machinery parts. Start here and go straight to the category you need.",
    image: "wheat",
    current: "Products",
  },
  quality: {
    kicker: "How we work / Quality",
    title: "Quality means it keeps working",
    copy:
      "Quality is not proved by a certificate but by daily work. The right material, the right fit and the right spare — that is our practical standard.",
    image: "welding",
    current: "Quality",
  },
  infrastructure: {
    kicker: "Capability / Infrastructure",
    title: "A setup built around the work",
    copy:
      "Fabrication, machining and assembly — a practical workshop where machines are built, checked and prepared for dispatch.",
    image: "machining",
    current: "Infrastructure",
  },
};

export const aboutBodyCopy = {
  title: "Who we are",
  paragraphs: [
    "Bharat Agricultures is an agricultural machinery and brick kiln machinery manufacturer working from Sambhal, Uttar Pradesh. Our focus is simple: build machines that run every day in the field or at the kiln, and make replacement parts easy to get when a component wears out.",
    "We work with farmers, FPOs, contractors, farm equipment dealers and brick kiln owners. Some need one machine, some need a complete setup, and some need only a spare part. The process is the same for all: understand the requirement, suggest the right option, give a direct rate.",
  ],
  linkLabel: "Explore our machinery",
  linkHref: "/agricultural-machinery",
  imageAlt: "Work inside the manufacturing unit",
};

export const aboutStats = [
  { value: productCount, label: "Machines across three product families" },
  { value: "02", label: "Industries: agriculture and brick kiln" },
  { value: "01", label: "Manufacturing base — Sambhal, UP" },
];

export const aboutSections = {
  introKicker: "Company / Who we are",
  valuesKicker: "What guides us",
  valuesTitle: "Three working principles",
  valuesCopy: "These three things apply to every order — small or large.",
  processKicker: "How the work happens",
  processTitle: "From requirement to support",
  processCopy: "Four simple steps. You get a clear update at every stage — no guesswork.",
  processNote:
    "Machine, setup or spare part — if you have a question at any stage, call us directly. We will point you in the right direction based on your requirement.",
  ctaTitle: "Discuss your requirement with us.",
  ctaLabel: "Send enquiry",
};

export const aboutValues = [
  {
    title: "Straight answers",
    copy: "We tell you what a machine can do and clearly say no where it cannot — so no wrong expectation is created later.",
  },
  {
    title: "Consistent work",
    copy: "Every machine setup is kept repeatable so the first and second machine do not behave differently.",
  },
  {
    title: "Support with parts",
    copy: "Selling a machine does not end the relationship. Support for wear parts and replacement components is part of our responsibility.",
  },
];

export const aboutProcess = [
  {
    title: "Requirement",
    copy: "Crop, field, tractor or kiln size — we understand this first. Suggesting a machine without it is guesswork.",
  },
  {
    title: "Suggestion",
    copy: "We share the matching machine, setup and power option, plus alternatives where needed so you can compare.",
  },
  {
    title: "Manufacturing",
    copy: "After order confirmation, fabrication, assembly and basic checking take place. The machine is run before dispatch.",
  },
  {
    title: "Support",
    copy: "After dispatch, setup guidance and a spare parts route. Keeping a basic spare set with the machine is practical.",
  },
];

export const aboutFaqCopy = {
  kicker: "Questions & answers",
  title: "Questions about the company",
  copy: "Common questions about how we work, our location and supply.",
  faqs: [
    {
      q: "What does Bharat Agricultures manufacture?",
      a: "We manufacture agricultural machinery and brick kiln machinery — threshers, cleaners, harrows, land levelers, cultivators, pugmill machines, ID fans and coal crushers, along with spare parts and casting components.",
    },
    {
      q: "Where is the company located?",
      a: "Our unit is in Sambhal, Uttar Pradesh. It is best to call and confirm a time before visiting.",
    },
    {
      q: "Are you a trader or a manufacturer?",
      a: "We are a manufacturer. Machines are built at our own unit, so specification and rate are discussed directly without a dealer margin.",
    },
    {
      q: "What do I need to become a dealer?",
      a: "Send an enquiry with your area, existing product range and expected quantity. We will discuss commercial terms and the dispatch schedule.",
    },
  ],
};

// ============================================================
// PRODUCT HUB PAGE
// ============================================================

export const productsPageCopy = {
  title: "Machinery for farms and brick kilns",
  description:
    "Agricultural equipment and brick kiln machinery from Sambhal, Uttar Pradesh — threshers, cleaners, harrows, land levelers, cultivators, pugmills, ID fans and coal crushers.",
  cards: [
    {
      title: "Agricultural Machinery",
      copy: "Tillage, seedbed, levelling, threshing and grain cleaning — 10 machines.",
      href: "/agricultural-machinery",
      label: "Explore agricultural machinery",
      image: "tractor",
    },
    {
      title: "Brick Kiln Machinery",
      copy: "Clay mixing, airflow and coal sizing — core machines for brick kilns.",
      href: "/brick-kiln-machinery",
      label: "Explore brick kiln machinery",
      image: "warehouse",
    },
    {
      title: "Machinery Parts",
      copy: "Wear parts, spares and casting components — keep the machine running.",
      href: "/machinery-parts",
      label: "Explore machinery parts",
      image: "machining",
    },
  ],
  note: "Every machine has its own page — use cases, parts, FAQs and a direct quote request.",
  noteCtaLabel: "Not sure what you need? Ask our team",
  ctaTitle: "Tell us the job — we will share the machine, setup and rate.",
  ctaLabel: "Get a quote",
  faqKicker: "Questions & answers",
  faqTitle: "Before choosing a machine",
  faqCopy:
    "Common questions about product families, machine selection and the quote process, so you start from the right page.",
  faqs: [
    {
      q: "What is the difference between agricultural machinery and brick kiln machinery?",
      a: "Agricultural machinery does farm work — tillage, seedbed, levelling, threshing and grain cleaning. Brick kiln machinery is for brick production — clay mixing, airflow and coal sizing. Both are fabricated at our unit.",
    },
    {
      q: "I am buying a machine for the first time. Where do I start?",
      a: "First write down your job — crop or kiln type, volume and tractor or motor availability. Then look at the matching machine on the category page. If unsure, call or message us on WhatsApp.",
    },
    {
      q: "Why does every machine have its own page?",
      a: "Every machine has a different use case, components, specifications and spare parts. A separate page gives you only the detail relevant to your job and makes the quote more accurate.",
    },
    {
      q: "Where can I see the price?",
      a: "We do not publish a fixed price because the rate depends on the model, setup and material. Send an enquiry from the machine page and we will share the direct factory rate.",
    },
    {
      q: "Are parts sold separately?",
      a: "Yes. There are three separate categories: agricultural parts, brick kiln parts and casting parts. Send a photo or sample of the part and we will confirm the match and rate.",
    },
  ],
};

// ============================================================
// QUALITY PAGE
// ============================================================

export const qualityPageCopy = {
  kicker: "How we work / Quality",
  title: "Quality means it keeps working",
  copy:
    "A machine is good when it lasts the season and its part is available on time. Our quality focus therefore rests on three things — material, fit and repeatability.",
  stepsKicker: "Our process",
  stepsTitle: "Four checkpoints, one goal",
  stepsCopy: "Every machine passes through these four checkpoints — from requirement to dispatch.",
  steps: [
    {
      step: "01",
      kicker: "Requirement",
      title: "Understand the application first",
      copy: "Which crop, which soil, what volume and which tractor — the machine setup is decided by the answers to these questions.",
    },
    {
      step: "02",
      kicker: "Material",
      title: "Right thickness and grade",
      copy: "Frame, plate and wear part material are chosen for the load the machine carries every day.",
    },
    {
      step: "03",
      kicker: "Fabrication",
      title: "Fit and alignment",
      copy: "Fit and alignment are checked during cutting, welding and assembly — reducing vibration, noise and early wear.",
    },
    {
      step: "04",
      kicker: "Check",
      title: "Run it, then dispatch",
      copy: "Before dispatch, the machine is run and basic functions are checked so there are no surprises at site.",
    },
  ],
  standardsKicker: "Practical standards",
  standardsTitle: "Our practical standards",
  standardsCopy:
    "Instead of big claims, we focus on what matters in daily work. Setup and maintenance are explained to the customer in simple language.",
  standards: [
    "Wear parts are built so they are easy to replace.",
    "A basic spare set option with every machine.",
    "Standard-size fasteners and bearings so they are available in the local market.",
    "Setup and maintenance are explained to the customer in simple language.",
  ],
  valuesKicker: "What it means for you",
  valuesTitle: "Where quality shows up",
  valuesCopy:
    "The benefit of good build quality is not in a brochure but in everyday work. These four things matter most.",
  values: [
    {
      title: "Less downtime",
      copy: "Correct fit and alignment reduce vibration and noise, keeping the machine steady under daily load.",
    },
    {
      title: "Easy maintenance",
      copy: "Wear parts open separately so a small replacement does not require opening the entire setup.",
    },
    {
      title: "Local spare support",
      copy: "Standard fasteners and bearings are available in the local market — no need to wait for the factory every time.",
    },
    {
      title: "Clear terms",
      copy: "Specification, rate and warranty are discussed and written down before the order.",
    },
  ],
  ctaTitle: "Talk directly about specification and quality.",
  ctaLabel: "Talk to our team",
  imageAlt: "Machinery fabrication and welding work",
  faqKicker: "Questions & answers",
  faqTitle: "Questions about quality",
  faqCopy: "Direct answers about certification, testing and warranty — without big claims.",
  faqs: [
    {
      q: "Do you have any certification?",
      a: "We do not make false claims. Our focus is practical build quality and repeatable fit. If a specific order needs documentation, tell us at enquiry stage.",
    },
    {
      q: "Is the machine tested?",
      a: "A basic run test is done before dispatch — drum, blower, drive and moving parts are checked. This reduces surprises after assembly at site.",
    },
    {
      q: "Is warranty provided?",
      a: "Warranty and terms are decided by the product and order. Written terms are discussed before order confirmation so there is no confusion later.",
    },
    {
      q: "What should I do if a part wears out?",
      a: "Wear parts — tines, blades, screens, hammers and bearings — are supplied separately. Send a photo or size of the part and we will suggest the matching replacement.",
    },
  ],
};

// ============================================================
// INFRASTRUCTURE PAGE
// ============================================================

export const infrastructurePageCopy = {
  kicker: "Capability / Infrastructure",
  title: "A setup built around the work",
  copy:
    "Fabrication, machining and assembly — a practical workshop where machines are built, checked and prepared for dispatch.",
  introKicker: "Built around the work",
  introTitle: "Fabrication to dispatch under one roof",
  intro: [
    "Cutting, bending, welding, machining and assembly happen in one place at our unit. That makes it possible to check fit and alignment at every stage — and catch a mistake where it happens.",
    "The setup is not made to look big; it is made for the work. Where machine size or requirement changes, jigs and fixtures maintain repeatability.",
  ],
  introLinkLabel: "See the machinery range",
  pillarsKicker: "How our work comes together",
  pillarsTitle: "Four parts of the work",
  pillarsCopy: "Every section has its own job — and all of them connect.",
  pillars: [
    {
      title: "Fabrication",
      copy: "A cutting, bending and welding section where frames, plates and chambers are built. Jigs and fixtures bring repeatability.",
    },
    {
      title: "Machining",
      copy: "Machining support for parts such as shafts, hubs and bearing seats so fit and alignment stay correct.",
    },
    {
      title: "Assembly",
      copy: "Parts are fitted in the assembly bay — drive alignment, belt tension and clearance of moving parts are checked.",
    },
    {
      title: "Dispatch",
      copy: "The machine is run and checked, then packed and dispatched. Loading is planned according to the site.",
    },
  ],
  note:
    "Our focus is practical capacity, not big claims. For work we do not do ourselves, we take support from a trusted network — and tell the customer upfront.",
  noteTitle: "What we do ourselves — and what comes from the network",
  noteKicker: "Straight answers",
  ctaTitle: "Want to see the setup? Plan a factory visit.",
  ctaLabel: "Plan a visit",
  imageAlt: "Machining and fabrication setup",
  faqKicker: "Questions & answers",
  faqTitle: "Questions about infrastructure",
  faqCopy: "Common questions about visits, the machine range and custom work.",
  faqs: [
    {
      q: "Can I visit the factory?",
      a: "Yes, a visit is possible. Call before coming to confirm a time so the concerned person is available and you can see the machine setup.",
    },
    {
      q: "Which machines are built here?",
      a: "Both agricultural machinery and brick kiln machinery are fabricated and assembled here. Some specialised parts are supplied through our network.",
    },
    {
      q: "Do you work on custom requirements?",
      a: "If the requirement is clear and feasible, a custom size or setup can be discussed. Send an enquiry with a drawing or sample.",
    },
  ],
};

// ============================================================
// CONTACT PAGE
// ============================================================

export const pageHeroContact = {
  kicker: "Contact / Get in touch",
  title: "Straight answers, direct conversation.",
  copy:
    "Need a machine, a price or a spare part — call, WhatsApp or use the enquiry form, whichever is easier. We will understand the requirement and suggest the right option.",
  image: "greenhouse",
  current: "Contact",
};

export const contactCardData = [
  {
    icon: "MapPin",
    kicker: "Visit",
    title: "Factory location",
    value: site.address,
    href: site.googleMapsUrl,
    linkLabel: "Open in Google Maps",
  },
  {
    icon: "Phone",
    kicker: "Call",
    title: "Talk to us directly",
    value: site.phone,
    href: phoneHref,
    linkLabel: "Call our team",
  },
  {
    icon: "MessageCircle",
    kicker: "WhatsApp",
    title: "Send a photo or detail",
    value: site.phone,
    href: whatsappHref,
    linkLabel: "Message on WhatsApp",
  },
  {
    icon: "Mail",
    kicker: "Write",
    title: "Send the details",
    value: site.email,
    href: emailHref,
    linkLabel: "Email our team",
  },
];

export const contactPageCopy = {
  formKicker: "Enquiry form",
  formTitle: "Send an enquiry",
  formCopy:
    "Machine, part or price — write whatever you need to ask. Please include a phone number so we can call and discuss the details.",
  stepsKicker: "Process",
  stepsTitle: "What happens after an enquiry",
  steps: [
    {
      title: "We read the requirement",
      copy: "Crop or kiln type, volume and location — these details decide the right option.",
    },
    {
      title: "Right machine and rate",
      copy: "We share the matching model, setup and direct factory rate, plus an alternative where needed.",
    },
    {
      title: "Dispatch or visit",
      copy: "Once the order is confirmed, dispatch is planned. You can also visit the factory first if you prefer.",
    },
  ],
  serviceAreaTitle: "Where we supply",
  serviceAreaKicker: "Supply & dispatch",
  serviceAreaNote: "Transport and timeline are shared in writing before the order is confirmed.",
  serviceAreaCta: "Send your requirement",
  serviceArea:
    "From Sambhal, Uttar Pradesh we dispatch machinery and parts across India. Farmers, FPOs, contractors, dealers and brick kiln owners all follow the same enquiry route. Transport and timeline are shared before the order according to your location.",
  faqKicker: "Questions & answers",
  faqTitle: "Contact and enquiry questions",
  faqCopy: "Response time, WhatsApp and the detail needed for a rate — all here.",
  faqs: [
    {
      q: "How soon do I get a response?",
      a: "We try to reply the same day or the next working day. Calls are heavier during the season, so sending details on WhatsApp is fastest.",
    },
    {
      q: "Can I talk on WhatsApp?",
      a: "Yes. Send the machine name, crop or a photo of the part on WhatsApp and we can reply quickly.",
    },
    {
      q: "What detail is needed for a rate?",
      a: "Machine name or job, crop or kiln type, required volume, tractor or motor availability and delivery location. These details make the quote accurate.",
    },
    {
      q: "Can I see the machine on a site visit?",
      a: "Yes, call before the factory visit to confirm a time. You can see the machine setup, fabrication and assembly.",
    },
  ],
};

// ============================================================
// ENQUIRY PAGE
// ============================================================

export const enquiryPageCopy = {
  kicker: "Start a conversation",
  title: "Tell us what you need.",
  titleAccent: "We will suggest the right machine.",
  body:
    "Machine name, crop or kiln type, volume and location — the more detail you share, the more accurate the quote. Our team replies to every enquiry directly.",
  formH2: "Product enquiry",
  formIntro: "* marked fields are required. Please enter a correct phone number so we can call you.",
  points: [
    "Direct manufacturer rate",
    "For machines, spare parts and castings",
    "Follow-up by call, WhatsApp or email",
  ],
  contactKicker: "Or talk to us directly",
  checklistKicker: "A good enquiry",
  checklistTitle: "What a good enquiry includes",
  checklistCopy:
    "The clearer the detail, the faster and more accurate the reply. Write down the points below — we will ask for the rest.",
  checklist: [
    "Machine name, or the job you need to do",
    "Crop or brick kiln type and daily volume",
    "Tractor HP, motor or power availability",
    "Delivery location and expected timeline",
    "For spare parts, a photo, size or old sample",
  ],
  processKicker: "After the enquiry",
  processTitle: "A clear route in three steps",
  processCopy: "The process after sending an enquiry is simple — no hidden step.",
  process: [
    {
      title: "Requirement check",
      copy: "We read your details and ask a question or two if needed to confirm the crop, volume or machine setup.",
    },
    {
      title: "Right option and rate",
      copy: "We send the matching machine, setup and direct factory rate, along with alternatives so you can compare.",
    },
    {
      title: "Dispatch or visit",
      copy: "Once the order is confirmed, dispatch is planned. You can also visit the factory first to see the machine setup.",
    },
  ],
  visitKicker: "Factory visit",
  visitTitle: "Want to see the machine running?",
  visitCopy:
    "You can see fabrication, assembly and a basic run test at the Sambhal unit. Call before visiting to confirm a time so the concerned person is available.",
  visitCtaLabel: "See contact and address",
  visitCtaHref: "/contact",
  faqKicker: "Questions & answers",
  faqTitle: "Questions about sending an enquiry",
  faqCopy: "Common questions about quotes, response time and follow-up.",
  faqs: [
    {
      q: "How soon do I get a reply after sending an enquiry?",
      a: "We try to reply the same day or the next working day. Calls are heavier during the season, so sending details on WhatsApp is fastest.",
    },
    {
      q: "Can I use WhatsApp instead of filling the form?",
      a: "Yes. Send the machine name, crop or a photo of the part on WhatsApp and we will confirm the detail and share the rate.",
    },
    {
      q: "Which details are needed for a rate?",
      a: "Machine name or job, crop or kiln type, required volume, tractor or motor availability and delivery location. These details make the quote accurate.",
    },
    {
      q: "Is there any charge for an enquiry?",
      a: "No. Enquiry and rate discussion are completely free. An order is confirmed only when you agree to the terms.",
    },
    {
      q: "Do dealers or FPOs get a bulk rate?",
      a: "Yes. Bulk rate and dispatch schedule are discussed according to quantity, area and requirement. Please mention quantity in the enquiry.",
    },
  ],
};

// ============================================================
// ENQUIRY FORM (shared labels)
// ============================================================

export const enquiryFormCopy = {
  nameLabel: "Your name *",
  namePlaceholder: "Full name",
  emailLabel: "Email *",
  emailPlaceholder: "you@example.com",
  phoneLabel: "Phone / WhatsApp",
  phonePlaceholder: "+91",
  productLabel: "Product interest",
  productPlaceholder: "Choose a product category",
  productOther: "Other requirement",
  messageLabel: "Describe your requirement *",
  messagePlaceholder: "Machine name, crop or kiln type, volume, location...",
  submitLabel: "Send enquiry",
  success:
    "Thank you — your details have been recorded in this preview. Connect the form to an email service or API before launch.",
  note: "We use these details only to respond to your enquiry.",
};

// ============================================================
// FOOTER
// ============================================================

export const footerCopy = {
  about:
    "Direct manufacturer of agricultural machinery and brick kiln machinery from Sambhal, Uttar Pradesh. Machines, spare parts and casting components — straight from the factory.",
  brandCta: "About the company",
  contactTitle: "Get in touch",
  contactCta: "Send your requirement",
  bottomNote: "Manufacturer · Sambhal, Uttar Pradesh · India",
};

// ============================================================
// 404
// ============================================================

export const notFoundCopy = {
  title: "This page could not be found.",
  copy:
    "The link may be old or the page address may have changed. Use the homepage or the machine range below — or call us directly.",
  primaryLabel: "Go to homepage",
  primaryHref: "/",
  secondaryLabel: "View machinery",
  secondaryHref: "/agricultural-machinery",
};

// ============================================================
// SHARED UI / CHROME
// ============================================================

export const chromeCopy = {
  quoteCta: "Get a quote",
  requestQuote: "Request a quote",
  callCta: "Call",
  quickActions: "Quick actions",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  skipToContent: "Skip to content",
  allPrefix: "All",
};

// ============================================================
// SHARED TEMPLATE COPY
// ============================================================

export const categoryTemplateCopy = {
  overviewKicker: "Overview",
  overviewLink: "Jump to product range",
  picksKicker: "By the job",
  picksTitle: "Which machine does which job",
  picksCopy:
    "Understand the job first, then choose the machine. Each job below links to the matching machine.",
  rangeKicker: "Product range",
  benefitsKicker: "Why Bharat Agricultures",
  benefitsTitle: "The practical advantage of buying from the manufacturer",
  benefitsCopy: "Rate, specification and spare parts — straightforward, with no middleman.",
  processKicker: "How the work happens",
  processTitle: "From enquiry to dispatch",
  processCopy: "Three simple steps. When the requirement is clear, the quote and timeline come faster.",
  faqKicker: "Questions & answers",
  faqTitleSuffix: " — questions and answers",
  faqCopy: "The questions that come up most. If yours is different, call or message us on WhatsApp.",
};

export const partsTemplateCopy = {
  overviewKicker: "Overview",
  overviewLink: "Send a part enquiry",
  groupsKicker: "Parts we supply",
  groupsTitle: "Which parts are available",
  groupsCopy: "Every group includes wear parts and replacement components. Send a photo or sample for an exact match.",
  checksKicker: "Before you order",
  checksCopy:
    "A part matches correctly only when both the machine and size are clear. These four details speed up the enquiry.",
  relatedTitle: "Parts for these machines",
  relatedLink: "All parts categories",
  faqKicker: "Questions & answers",
  faqTitleSuffix: " — questions and answers",
  faqCopy: "Common questions about part identification, quantity and delivery.",
  ctaTitle: "Send a photo or sample of the part — we will match it and share the rate.",
  ctaLabel: "Send part enquiry",
};

export const partsHubCopy = {
  itemListName: "Machinery parts categories",
  overviewKicker: "Overview",
  overviewLink: "Send a part enquiry",
  categoriesKicker: "Parts categories",
  cardKickerSuffix: "/ Parts",
  cardLink: "View parts",
  benefitsKicker: "Why our parts",
  benefitsTitle: "Small spare, big impact",
  benefitsCopy:
    "One small part can stop the whole job. That is why we focus on matching and availability.",
  processKicker: "Part enquiry",
  processTitle: "How to order a part",
  processCopy:
    "It is fine if you do not know the part name. Share the machine name, a photo and a rough size — we will identify it and move forward.",
  wearKicker: "Wear parts",
  wearTitle: "What wears out first",
  wearCopy: "These parts carry the most load during the season. Keeping a spare set is practical.",
  wearItems: [
    "Cultivator and harrow tines",
    "Thresher and cleaner screens",
    "Pugmill mixing blades",
    "Coal crusher hammers and screens",
    "ID fan bearings",
    "Land leveler blades",
  ],
  faqKicker: "Questions & answers",
  faqTitle: "Questions about machinery parts",
  faqCopy: "Common questions about part orders, matching and delivery.",
};

export const productPageCopy = {
  quoteLabel: "Get a quote",
  allPrefix: "All",
  metaPoints: ["Made in Sambhal, UP", "Spare parts support", "Direct factory rate"],
  overviewKicker: "Overview",
  overviewTitleSuffix: " — overview",
  specTitle: "At a glance",
  specNote:
    "For the exact rate and availability, send your requirement — we will share the direct factory rate.",
  specCta: "Send requirement",
  useCaseKicker: "Use cases",
  useCaseTitle: "Where it is used",
  useCaseCopy:
    "Every field and every crop has a different requirement. These are common use cases — share yours and we will suggest a setup for it.",
  componentsKicker: "Components",
  componentsTitle: "Key components",
  componentsCopy:
    "These parts are the core of the machine. Wear parts are supplied separately so the whole setup does not need replacing mid-season.",
  buildKicker: "Design & build",
  buildTitle: "How it works",
  buildCopy: "The machine is designed keeping daily field or kiln conditions in mind.",
  benefitsTitle: "Benefits",
  faqKicker: "Questions & answers",
  faqTitleSuffix: " — questions and answers",
  faqCopy: "Common questions about rate, setup and spare parts. For more detail, call or message us on WhatsApp.",
  relatedTitle: "Also see these machines",
  ctaTitleSuffix: " — discuss the rate and setup.",
  ctaLabel: "Send enquiry",
};

// ============================================================
// SEO META (per page)
// ============================================================

export const seoMetadata = {
  home: {
    title: "Agricultural & Brick Kiln Machinery Manufacturer in India",
    description:
      "Bharat Agricultures — agricultural machinery and brick kiln machinery manufacturer in Sambhal, Uttar Pradesh. Thresher, cleaner, harrow, land leveler, gara machine, brick-making machine, pugmill, ID fan and coal crusher.",
  },
  about: {
    title: "About Us | Agricultural & Brick Kiln Machinery Manufacturer",
    description:
      "Bharat Agricultures, Sambhal, Uttar Pradesh — a direct manufacturer of agricultural machinery and brick kiln machinery. How we work, our product range and supply.",
  },
  quality: {
    title: "Quality Commitment | How We Build Machinery",
    description:
      "Our quality approach: the right material, the right fit and a basic run test before dispatch. Practical standards for agricultural and brick kiln machinery.",
  },
  infrastructure: {
    title: "Infrastructure | Manufacturing Unit in Sambhal, UP",
    description:
      "Fabrication, machining, assembly and dispatch — the practical setup and working method at our Sambhal, Uttar Pradesh unit.",
  },
  products: {
    title: "Machinery & Parts | Agricultural and Brick Kiln",
    description: `Agricultural machinery, brick kiln machinery and machinery parts — three product families, ${products.length} machines and spare support from Sambhal, Uttar Pradesh.`,
  },
  contact: {
    title: "Contact Us | Machinery Enquiry & Factory Visit",
    description:
      "Contact Bharat Agricultures for a machine rate, spare parts or a factory visit in Sambhal, Uttar Pradesh. Call, WhatsApp or use the enquiry form.",
  },
  enquiry: {
    title: "Send Enquiry | Machine Rate & Spare Parts",
    description:
      "Share your machine requirement, volume and location. We will send a matching model and a direct factory rate.",
  },
};

export { agriculturalProducts, brickKilnProducts, products };
