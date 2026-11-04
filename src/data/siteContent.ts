/**
 * Single source of truth for site-wide copy.
 * Edit this file to change text anywhere on the site — page components only render it.
 */

import { agriculturalProducts, brickKilnProducts, products } from "@/data/products";
import { emailHref, phoneHref, site, whatsappHref } from "@/lib/site";

const productCount = String(products.length).padStart(2, "0");

// ============================================================
// HOME / INTRODUCTION ("01 — Who we are")
// ============================================================

export const homeIntroCopy = {
  kicker: "01 — Who we are",
  title: "Bharat Agricultures.",
  titleAccent: "Sambhal ka agricultural machinery manufacturer.",
  paragraphs: [
    "Bharat Agricultures: Sambhal ka agricultural machinery manufacturer. Hum Sambhal, Uttar Pradesh mein kheti ki machinery aur brick kiln machinery khud banate hain. Thresher, paddy cleaner, disc harrow, land leveler aur cultivator se lekar pugmill, ID fan aur coal crusher tak, sab ek hi jagah.",
    "Hum seedha manufacturer hain, isliye farm equipment direct from manufacturer rate par milta hai — bina beech ke commission ke. Kisan ho, dealer ho ya eent bhatta maalik, apni zaroorat batayein. Hum sahi machine suggest karenge, rate batayenge aur spare parts bhi denge.",
  ],
  linkLabel: "More about us",
  linkHref: "/about",
  imageAlt: "Tractor khet mein kaam karte hue",
  badgeValue: productCount,
  badgeLabel: "Machines, teen product families mein",
};

// ============================================================
// HOME / AGRICULTURAL SHOWCASE ("02 — What we make")
// ============================================================

export const homeShowcaseCopy = {
  kicker: "02 — What we make",
  title: "Agricultural machinery manufacturer in India",
  copy:
    "Farm machinery manufacturer aur agricultural equipment manufacturer: threshers, cleaners, harrows, land levelers aur cultivators — Sambhal, Uttar Pradesh ki apni unit se.",
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
    "Gara aur brick-making machines, pugmills, ID fans aur coal crushers — brick factories ke process, airflow aur fuel sizing ke liye.",
  linkLabel: "See all brick kiln machinery",
  linkHref: "/brick-kiln-machinery",
  railNote: "Swipe to explore →",
};

// ============================================================
// HOME / MACHINE GUIDE ("04 — Machine guide")
// ============================================================

export const homeMachineGuideCopy = {
  kicker: "04 — Machine guide",
  title: "Kaunsi machine kab kaam aati hai",
  copy:
    "Har kaam ke liye alag implement hota hai. Neeche kaam ke hisaab se machine chunein — ya seedha call karein aur hum aapki fasal dekhkar bata denge.",
  groups: [
    {
      label: "Jutai",
      copy: "Sakhi mitti todna aur khet ko sowing ke liye kholna.",
      links: [
        { label: "Cultivator", href: "/products/tractor-cultivator" },
        { label: "Disc Harrow", href: "/products/disc-harrow" },
        { label: "Harrow", href: "/products/agricultural-harrow-machine" },
      ],
    },
    {
      label: "Khet barabar karna",
      copy: "Sinchai se pehle satah set karna, taaki paani barabar faile.",
      links: [
        { label: "Plate Land Leveler", href: "/products/plate-land-leveler" },
        { label: "2 in 1 Land Leveler", href: "/products/2-in-1-land-leveler" },
      ],
    },
    {
      label: "Katayi ke baad",
      copy: "Fasal se dana nikalna — gehun, dhan, dalhan aur makka.",
      links: [
        { label: "Thresher", href: "/products/agricultural-thresher-machine" },
        { label: "Hawa Thresher", href: "/products/hawa-thresher-machine" },
        { label: "Maize Thresher", href: "/products/maize-thresher-machine" },
      ],
    },
    {
      label: "Anaaj ki safai",
      copy: "Dhool, bhusa aur kankar alag karke dana mandi-ready banana.",
      links: [
        { label: "Paddy Cleaner", href: "/products/paddy-cleaner-machine" },
        { label: "Dust Cleaner", href: "/products/agricultural-dust-cleaner-machine" },
      ],
    },
  ],
  note: "Confusion ho to machine ka naam ya fasal batayein — hum sahi implement suggest kar denge.",
  linkLabel: "Browse all agricultural machinery",
  linkHref: "/agricultural-machinery",
};

// ============================================================
// HOME / PARTS TEASER
// ============================================================

export const homePartsCopy = {
  kicker: "Parts & spares",
  title: "Machine chalti rahe, spare ready rahe",
  copy:
    "Season ke beech machine rukna sabse mehnga padta hai. Tines, blades, jaali, hammers aur bearings — wear parts ka support seedha manufacturer se.",
  cards: [
    {
      title: "Agricultural Parts",
      copy: "Tines, blades, jaali, drum parts aur bearings.",
      href: "/machinery-parts/agricultural-parts",
    },
    {
      title: "Brick Kiln Parts",
      copy: "Pugmill blades, crusher hammers, screens aur fan components.",
      href: "/machinery-parts/brick-kiln-parts",
    },
    {
      title: "Casting Parts",
      copy: "Drawing ya sample ke hisaab se casting components.",
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
  kicker: "Sawaal jawab",
  title: "Jo log sabse zyada poochte hain",
  copy:
    "Machine chunne, rate aur spare parts se jude common sawaal. Aapka sawaal yahan nahi hai to call ya WhatsApp par pooch lein.",
  faqs: [
    {
      q: "Bharat Agricultures kahan manufacturing karta hai?",
      a: "Hamari manufacturing unit Sambhal, Uttar Pradesh mein hai. Yahan agricultural machinery aur brick kiln machinery dono banti hain, isliye specification aur spare parts par seedhi baat hoti hai.",
    },
    {
      q: "Machine ka rate kaise pata karega?",
      a: "Rate model, capacity, power option aur material par depend karta hai. Isliye hum fixed price publish nahi karte. Requirement batayein — fasal, volume aur location — hum seedha factory rate bhej denge.",
    },
    {
      q: "Kya poore India mein supply hoti hai?",
      a: "Haan, India ke alag-alag rajyon mein supply hoti hai. Dispatch ka mode aur timeline aapki location aur machine ke size par depend karta hai, jo order confirm hone se pehle bata diya jata hai.",
    },
    {
      q: "Spare parts baad mein milenge?",
      a: "Haan. Tines, blades, jaali, hammers, screens aur bearings hum supply karte hain. Machine ke saath ek basic spare set rakhna practical rehta hai.",
    },
    {
      q: "Kya dealer ya FPO ke liye bulk rate milta hai?",
      a: "Haan. Dealer, FPO aur contractor ke liye bulk requirement par rate aur dispatch schedule discuss kiya jata hai. Enquiry mein quantity zaroor likhein.",
    },
    {
      q: "Machine dekhne ke liye factory aa sakte hain?",
      a: "Bilkul. Visit se pehle call karke time confirm kar lein, taaki concerned person available rahe aur aapko machine ka setup site par dekhne ko mile.",
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
      "Bharat Agricultures: Sambhal ka agricultural machinery manufacturer. Hum kheti ki machinery aur brick kiln machinery khud banate hain — kisan, dealer aur eent bhatta maalik, sabke liye ek hi jagah se.",
    image: "barn",
    current: "About Us",
  },
  contact: {
    kicker: "Contact / Get in touch",
    title: "Kaam ki baat, seedhi baat.",
    copy:
      "Machine chahiye, rate chahiye ya spare part ki zaroorat hai — call, WhatsApp ya enquiry form, jo aapko aasan lage. Hum requirement samajhkar sahi option batayenge.",
    image: "greenhouse",
    current: "Contact",
  },
  products: {
    kicker: `Product hub / ${productCount} machines`,
    title: "Machinery for farms and brick kilns",
    copy:
      "Teen product families: agricultural machinery, brick kiln machinery aur machinery parts. Yahan se seedha category page par jaayein.",
    image: "wheat",
    current: "Products",
  },
  quality: {
    kicker: "How we work / Quality",
    title: "Quality ka matlab: kaam karta rahe",
    copy:
      "Quality kisi certificate se nahi, rozana ke kaam se pata chalti hai. Sahi material, sahi fit aur sahi spare — yahi hamara practical standard hai.",
    image: "welding",
    current: "Quality",
  },
  infrastructure: {
    kicker: "Capability / Infrastructure",
    title: "Kaam ke hisaab se setup",
    copy:
      "Fabrication, machining aur assembly — ek practical workshop jahan machine banti hai, check hoti hai aur dispatch ke liye taiyar hoti hai.",
    image: "machining",
    current: "Infrastructure",
  },
};

export const aboutBodyCopy = {
  title: "Hum kaun hain",
  paragraphs: [
    "Bharat Agricultures ek agricultural machinery aur brick kiln machinery manufacturer hai, jo Sambhal, Uttar Pradesh se kaam karta hai. Hamara focus simple hai: aisi machine banana jo khet aur bhatte par rozana chale, aur jab uska koi part ghis jaye to replacement bhi aasani se mile.",
    "Hum kisan, FPO, contractor, farm equipment dealer aur brick kiln owners — sabke saath kaam karte hain. Kisi ko ek machine chahiye, kisi ko poora setup, aur kisi ko sirf spare part. Teenon ke liye process ek hi hai: requirement samjho, sahi option batao, seedha rate do.",
  ],
  linkLabel: "Explore our machinery",
  linkHref: "/agricultural-machinery",
  imageAlt: "Manufacturing unit ka kaam",
};

export const aboutStats = [
  { value: productCount, label: "Machines, teen product families mein" },
  { value: "02", label: "Industries: agriculture aur brick kiln" },
  { value: "01", label: "Manufacturing base — Sambhal, UP" },
];

export const aboutSections = {
  introKicker: "Company / Who we are",
  valuesKicker: "What guides us",
  valuesTitle: "Kaam ke teen usool",
  valuesCopy: "Ye teen baatein har order par lagoo hoti hain — chhota ho ya bada.",
  processKicker: "Kaam kaise hota hai",
  processTitle: "Requirement se support tak",
  processCopy: "Char simple steps. Har step par aapko clear update milta hai — guesswork nahi.",
  processNote:
    "Machine, setup ya spare part — kisi bhi stage par sawaal ho to seedha call karein. Hum requirement ke hisaab se raasta batayenge.",
  ctaTitle: "Apni requirement discuss karein.",
  ctaLabel: "Send enquiry",
};

export const aboutValues = [
  {
    title: "Seedhi baat",
    copy: "Jo machine ka kaam hai wahi batate hain. Jo nahi kar sakte, uspar saaf mana kar dete hain — taaki baad mein galat expectation na bane.",
  },
  {
    title: "Ek jaisa kaam",
    copy: "Har machine ka setup repeatable rakha jata hai, taaki pehli aur dusri machine ka behaviour alag na ho.",
  },
  {
    title: "Parts ka saath",
    copy: "Machine bech kar rishta khatam nahi hota. Wear parts aur replacement components ka support bhi hamari zimmedari hai.",
  },
];

export const aboutProcess = [
  {
    title: "Requirement",
    copy: "Fasal, khet, tractor ya kiln ka size — pehle ye samajhte hain. Bina iske sahi machine suggest karna guesswork hota hai.",
  },
  {
    title: "Suggestion",
    copy: "Matching machine, setup aur power option batate hain. Zaroorat ho to alternate bhi — taaki aap compare kar sakein.",
  },
  {
    title: "Manufacturing",
    copy: "Confirm order ke baad fabrication, assembly aur basic checking hoti hai. Dispatch se pehle machine chalakar dekhi jati hai.",
  },
  {
    title: "Support",
    copy: "Dispatch ke baad setup guidance aur spare parts ka rasta. Machine ke saath ek basic spare set rakhna practical rehta hai.",
  },
];

export const aboutFaqCopy = {
  kicker: "Sawaal jawab",
  title: "Company ke baare mein sawaal",
  copy: "Kaam karne ka tareeka, location aur supply se jude common sawaal.",
  faqs: [
    {
      q: "Bharat Agricultures kis cheez ka manufacturer hai?",
      a: "Hum agricultural machinery aur brick kiln machinery banate hain — threshers, cleaners, harrows, land levelers, cultivators, pugmill machine, ID fan aur coal crusher. Iske saath spare parts aur casting components ka support bhi hai.",
    },
    {
      q: "Company kahan situated hai?",
      a: "Hamari unit Sambhal, Uttar Pradesh mein hai. Visit se pehle call karke time confirm karna behtar rehta hai.",
    },
    {
      q: "Kya aap trader hain ya manufacturer?",
      a: "Hum manufacturer hain. Machine apni unit mein banti hai, isliye specification aur rate par seedhi baat hoti hai — beech ka dealer margin nahi judta.",
    },
    {
      q: "Dealer banne ke liye kya karna hoga?",
      a: "Apne area, existing product range aur expected quantity ke saath enquiry bhejein. Hum commercial terms aur dispatch schedule discuss karenge.",
    },
  ],
};

// ============================================================
// PRODUCT HUB PAGE
// ============================================================

export const productsPageCopy = {
  title: "Machinery for farms and brick kilns",
  description:
    "Agricultural equipment aur brick kiln machinery, Sambhal, Uttar Pradesh se — threshers, cleaners, harrows, land levelers, cultivators, pugmills, ID fans aur coal crushers.",
  cards: [
    {
      title: "Agricultural Machinery",
      copy: "Jutai, seedbed, leveling, threshing aur dana safai — 10 machines.",
      href: "/agricultural-machinery",
      label: "Explore agricultural machinery",
      image: "tractor",
    },
    {
      title: "Brick Kiln Machinery",
      copy: "Clay mixing, airflow aur coal sizing — brick kiln ke core machines.",
      href: "/brick-kiln-machinery",
      label: "Explore brick kiln machinery",
      image: "warehouse",
    },
    {
      title: "Machinery Parts",
      copy: "Wear parts, spares aur casting components — machine chalti rahe.",
      href: "/machinery-parts",
      label: "Explore machinery parts",
      image: "machining",
    },
  ],
  note: "Har machine ka apna page hai — use case, parts, FAQs aur seedha quote request.",
  noteCtaLabel: "Not sure what you need? Ask our team",
  ctaTitle: "Kaam batayein — hum machine, setup aur rate, teenon bata denge.",
  ctaLabel: "Get a quote",
  faqKicker: "Sawaal jawab",
  faqTitle: "Machine chunne se pehle",
  faqCopy:
    "Product family, machine selection aur quote process se jude common sawaal — taaki aap sahi page se shuru karein.",
  faqs: [
    {
      q: "Agricultural machinery aur brick kiln machinery mein kya farak hai?",
      a: "Agricultural machinery kheti ke kaam aati hai — jutai, seedbed, leveling, threshing aur dana safai. Brick kiln machinery eent banane ke process ke liye hoti hai — clay mixing, airflow aur coal sizing. Dono ki fabrication hamari hi unit mein hoti hai.",
    },
    {
      q: "Pehli baar machine kharid rahe hain, kahan se shuru karein?",
      a: "Pehle apna kaam likhein — fasal ya kiln ka type, volume aur tractor ya motor ki availability. Uske baad category page par matching machine dekhein. Confusion ho to call ya WhatsApp par seedha pooch lein.",
    },
    {
      q: "Har machine ka apna page kyun hai?",
      a: "Har machine ka use case, components, specs aur spare parts alag hote hain. Alag page se aapko sirf apne kaam ki detail milti hai — aur quote bhi zyada sahi banta hai.",
    },
    {
      q: "Rate kahan dekhein?",
      a: "Hum fixed price publish nahi karte, kyunki rate model, setup aur material par depend karta hai. Machine page se enquiry bhejein — hum seedha factory rate batayenge.",
    },
    {
      q: "Parts alag se milte hain?",
      a: "Haan. Agricultural parts, brick kiln parts aur casting parts — teen alag categories hain. Part ka photo ya sample bhejein aur hum matching part confirm karke rate denge.",
    },
  ],
};

// ============================================================
// QUALITY PAGE
// ============================================================

export const qualityPageCopy = {
  kicker: "How we work / Quality",
  title: "Quality ka matlab: kaam karta rahe",
  copy:
    "Machine achhi tab lagti hai jab woh season bhar chale aur uska part waqt par mil jaye. Isliye hamara quality focus teen cheezon par hai — material, fit aur repeatability.",
  stepsKicker: "Hamara process",
  stepsTitle: "Char checkpoints, ek hi maqsad",
  stepsCopy: "Har machine in char checkpoints se guzarti hai — requirement se dispatch tak.",
  steps: [
    {
      step: "01",
      kicker: "Requirement",
      title: "Pehle application samjho",
      copy: "Kaunsi fasal, kaunsi mitti, kitna volume aur kaunsa tractor — in sawaalon ke jawab se hi machine ka setup tay hota hai.",
    },
    {
      step: "02",
      kicker: "Material",
      title: "Sahi thickness aur grade",
      copy: "Frame, plate aur wear parts ka material us load ke hisaab se chuna jata hai jo machine rozana jhelti hai.",
    },
    {
      step: "03",
      kicker: "Fabrication",
      title: "Fit aur alignment",
      copy: "Cutting, welding aur assembly mein fit aur alignment check hoti hai — isse vibration, noise aur early wear kam hota hai.",
    },
    {
      step: "04",
      kicker: "Check",
      title: "Chalakar dekho, phir dispatch",
      copy: "Dispatch se pehle machine ko chalakar basic function check kiya jata hai, taaki site par surprise na ho.",
    },
  ],
  standardsKicker: "Practical standards",
  standardsTitle: "Hamare practical standards",
  standardsCopy:
    "Bade claims ki jagah rozana kaam aane wali baatein. Customer ko setup aur maintenance simple language mein samjhaya jata hai.",
  standards: [
    "Wear parts aise banaye jaate hain ki unhe badalna aasan ho.",
    "Har machine ke saath basic spare set ka option.",
    "Fasteners aur bearings standard size ke use hote hain, taaki local market mein mil jayein.",
    "Customer ko setup aur maintenance simple language mein samjhaya jata hai.",
  ],
  valuesKicker: "Aapke liye matlab",
  valuesTitle: "Quality ka asar kahan dikhta hai",
  valuesCopy:
    "Achhi build quality ka faayda machine ki brochure mein nahi, rozana ke kaam mein dikhta hai. Ye chaar cheezein sabse zyada matter karti hain.",
  values: [
    {
      title: "Kam rukawat",
      copy: "Sahi fit aur alignment se vibration aur noise kam hota hai, aur machine rozana ke load mein sthir chalti hai.",
    },
    {
      title: "Aasan maintenance",
      copy: "Wear parts alag se khulte hain, taaki chhota replacement bina poora setup kholne ke ho jaye.",
    },
    {
      title: "Local spare support",
      copy: "Standard fasteners aur bearings local market mein mil jaate hain — har baar factory ka intezaar nahi.",
    },
    {
      title: "Clear terms",
      copy: "Specification, rate aur warranty ki baat order se pehle likhit mein clear ki jaati hai.",
    },
  ],
  ctaTitle: "Specification aur quality par seedhi baat karein.",
  ctaLabel: "Talk to our team",
  imageAlt: "Machinery fabrication aur welding ka kaam",
  faqKicker: "Sawaal jawab",
  faqTitle: "Quality ke baare mein sawaal",
  faqCopy: "Certification, testing aur warranty se jude seedhe jawab — bina bade claims ke.",
  faqs: [
    {
      q: "Kya aapke paas koi certification hai?",
      a: "Hum galat claim nahi karte. Hamara focus practical build quality aur repeatable fit par hai. Agar kisi order ke liye specific documentation chahiye, to enquiry ke waqt bata dein.",
    },
    {
      q: "Machine ki testing hoti hai?",
      a: "Dispatch se pehle basic run test hota hai — drum, blower, drive aur moving parts check kiye jaate hain. Isse site par assembly ke baad surprise kam hota hai.",
    },
    {
      q: "Warranty milti hai?",
      a: "Warranty aur terms product aur order ke hisaab se tay hote hain. Confirm order se pehle likhit terms discuss kar liye jaate hain, taaki baad mein confusion na ho.",
    },
    {
      q: "Part ghis jaye to kya karein?",
      a: "Wear parts — tines, blades, jaali, hammers, bearings — alag se milte hain. Part ka photo ya size bhejein aur hum matching replacement bata denge.",
    },
  ],
};

// ============================================================
// INFRASTRUCTURE PAGE
// ============================================================

export const infrastructurePageCopy = {
  kicker: "Capability / Infrastructure",
  title: "Kaam ke hisaab se setup",
  copy:
    "Fabrication, machining aur assembly — ek practical workshop jahan machine banti hai, check hoti hai aur dispatch ke liye taiyar hoti hai.",
  introKicker: "Built around the work",
  introTitle: "Ek chhat ke neeche fabrication se dispatch tak",
  intro: [
    "Hamari unit mein cutting, bending, welding, machining aur assembly ka kaam ek hi jagah hota hai. Isse har stage par machine ka fit aur alignment check ho pata hai — aur galti pakadni ho to wahin pakad li jaati hai.",
    "Setup bada dikhane ke liye nahi, kaam ke hisaab se banaya gaya hai. Jahan machine ka size ya requirement alag hoti hai, wahan jig aur fixture se repeatability rakhi jaati hai.",
  ],
  introLinkLabel: "Machinery range dekhein",
  pillarsKicker: "How our work comes together",
  pillarsTitle: "Kaam ke char hisse",
  pillarsCopy: "Har section ka apna kaam hai — aur sab ek doosre se juda hua hai.",
  pillars: [
    {
      title: "Fabrication",
      copy: "Cutting, bending aur welding ka section, jahan frames, plates aur chambers banaye jaate hain. Jigs aur fixtures se repeatability aati hai.",
    },
    {
      title: "Machining",
      copy: "Shaft, hub aur bearing seating jaise parts ke liye machining support, taaki fit aur alignment sahi rahe.",
    },
    {
      title: "Assembly",
      copy: "Parts ko assembly bay mein fit kiya jata hai — drive alignment, belt tension aur moving parts ka clearance check hota hai.",
    },
    {
      title: "Dispatch",
      copy: "Machine ko chalakar basic check kiya jata hai, phir packing aur dispatch. Site ke hisaab se loading ka plan banaya jata hai.",
    },
  ],
  note:
    "Hamara focus bade claims par nahi, practical capacity par hai. Jo kaam hum khud nahi karte, uske liye trusted network se support lete hain — aur customer ko pehle bata dete hain.",
  noteTitle: "Jo hum khud karte hain — aur jo network se aata hai",
  noteKicker: "Seedhi baat",
  ctaTitle: "Setup dekhna chahte hain? Factory visit plan karein.",
  ctaLabel: "Plan a visit",
  imageAlt: "Machining aur fabrication setup",
  faqKicker: "Sawaal jawab",
  faqTitle: "Infrastructure ke baare mein sawaal",
  faqCopy: "Visit, machine range aur custom kaam se jude common sawaal.",
  faqs: [
    {
      q: "Factory visit kar sakte hain?",
      a: "Haan, visit possible hai. Pehle call karke time confirm karein, taaki concerned person available rahe aur aap machine ka setup dekh sakein.",
    },
    {
      q: "Kaunsi machines yahan banti hain?",
      a: "Agricultural machinery aur brick kiln machinery dono ki fabrication aur assembly yahan hoti hai. Kuch specialized parts network se supply hote hain.",
    },
    {
      q: "Custom requirement par kaam karte hain?",
      a: "Agar requirement samajh mein aaye aur feasible ho to custom size ya setup par baat ki ja sakti hai. Drawing ya sample ke saath enquiry bhejein.",
    },
  ],
};

// ============================================================
// CONTACT PAGE
// ============================================================

export const pageHeroContact = {
  kicker: "Contact / Get in touch",
  title: "Kaam ki baat, seedhi baat.",
  copy:
    "Machine chahiye, rate chahiye ya spare part ki zaroorat hai — call, WhatsApp ya enquiry form, jo aapko aasan lage. Hum requirement samajhkar sahi option batayenge.",
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
    title: "Seedha baat karein",
    value: site.phone,
    href: phoneHref,
    linkLabel: "Call our team",
  },
  {
    icon: "MessageCircle",
    kicker: "WhatsApp",
    title: "Photo ya detail bhejein",
    value: site.phone,
    href: whatsappHref,
    linkLabel: "WhatsApp par likhein",
  },
  {
    icon: "Mail",
    kicker: "Write",
    title: "Detail bhejein",
    value: site.email,
    href: emailHref,
    linkLabel: "Email our team",
  },
];

export const contactPageCopy = {
  formKicker: "Enquiry form",
  formTitle: "Enquiry bhejein",
  formCopy:
    "Machine, part ya rate — jo poochna hai likh dein. Phone number zaroor daalein, taaki hum call karke detail discuss kar sakein.",
  stepsKicker: "Process",
  stepsTitle: "Enquiry ke baad kya hota hai",
  steps: [
    {
      title: "Hum requirement padhte hain",
      copy: "Fasal ya kiln ka type, volume aur location — in detail se hi sahi option tay hota hai.",
    },
    {
      title: "Sahi machine aur rate",
      copy: "Hum matching model, setup aur seedha factory rate batate hain. Zaroorat par alternate option bhi.",
    },
    {
      title: "Dispatch ya visit",
      copy: "Order confirm hone par dispatch plan hota hai. Chahein to pehle factory visit bhi kar sakte hain.",
    },
  ],
  serviceAreaTitle: "Kahan supply karte hain",
  serviceAreaKicker: "Supply & dispatch",
  serviceAreaNote: "Transport aur timeline order confirm hone se pehle likhit mein bata diya jata hai.",
  serviceAreaCta: "Apni requirement bhejein",
  serviceArea:
    "Sambhal, Uttar Pradesh se hum poore India mein machinery aur parts dispatch karte hain. Kisan, FPO, contractor, dealer aur brick kiln owners — sabke liye enquiry ka same rasta hai. Aapki location ke hisaab se transport aur timeline order se pehle bata diya jata hai.",
  faqKicker: "Sawaal jawab",
  faqTitle: "Contact aur enquiry ke sawaal",
  faqCopy: "Response time, WhatsApp aur rate ke liye zaroori detail — sab yahan.",
  faqs: [
    {
      q: "Response kitne samay mein milta hai?",
      a: "Hum koshish karte hain ki enquiry usi din ya agle working din reply ho. Season ke time par call zyada aati hain, isliye WhatsApp par detail bhejna sabse fast rehta hai.",
    },
    {
      q: "Kya WhatsApp par baat kar sakte hain?",
      a: "Haan. Machine ka naam, fasal ya part ka photo WhatsApp par bhejein — hum jaldi reply kar sakte hain.",
    },
    {
      q: "Rate ke liye kya detail chahiye?",
      a: "Machine ka naam ya kaam, fasal ya kiln ka type, required volume, tractor ya motor ki availability aur delivery location. In detail se quote sahi banta hai.",
    },
    {
      q: "Kya site visit par machine dikha sakte hain?",
      a: "Haan, factory visit se pehle call karke samay confirm karein. Aap machine ka setup, fabrication aur assembly dekh sakte hain.",
    },
  ],
};

// ============================================================
// ENQUIRY PAGE
// ============================================================

export const enquiryPageCopy = {
  kicker: "Start a conversation",
  title: "Apni zaroorat batayein.",
  titleAccent: "Hum sahi machine batayenge.",
  body:
    "Machine ka naam, fasal ya kiln ka type, volume aur location — jitni detail denge, quote utna sahi banega. Har enquiry ka jawab seedha hamari team deti hai.",
  formH2: "Product enquiry",
  formIntro: "* wale fields zaroori hain. Phone number sahi likhein, taaki hum call kar sakein.",
  points: [
    "Seedha manufacturer se rate",
    "Machine, spare part ya casting — sab ke liye",
    "Call, WhatsApp ya email par follow-up",
  ],
  contactKicker: "Ya seedha baat karein",
  checklistKicker: "Achhi enquiry",
  checklistTitle: "Ek achhi enquiry mein kya hota hai",
  checklistCopy:
    "Jitni clear detail, utna fast aur sahi jawab. Neeche di gayi cheezein likh dein — baaki hum pooch lenge.",
  checklist: [
    "Machine ka naam, ya jo kaam karna hai",
    "Fasal ya brick kiln ka type aur daily volume",
    "Tractor ki HP, motor ya power availability",
    "Delivery location aur expected timeline",
    "Spare part ho to photo, size ya purana sample",
  ],
  processKicker: "Enquiry ke baad",
  processTitle: "Teen step mein raasta clear",
  processCopy: "Enquiry bhejne ke baad ka process simple hai — koi hidden step nahi.",
  process: [
    {
      title: "Requirement check",
      copy: "Hum aapki detail padhte hain aur zaroorat ho to ek-do sawaal poochte hain — fasal, volume ya machine ka setup confirm karne ke liye.",
    },
    {
      title: "Sahi option aur rate",
      copy: "Matching machine, setup aur seedha factory rate bheja jata hai. Alternates bhi batate hain, taaki aap compare kar sakein.",
    },
    {
      title: "Dispatch ya visit",
      copy: "Order confirm hone par dispatch plan hota hai. Chahein to pehle factory visit karke machine ka setup dekh sakte hain.",
    },
  ],
  visitKicker: "Factory visit",
  visitTitle: "Machine chalte hue dekhna chahte hain?",
  visitCopy:
    "Sambhal unit mein fabrication, assembly aur machine ka basic run test dekh sakte hain. Visit se pehle call karke samay confirm kar lein, taaki concerned person available rahe.",
  visitCtaLabel: "Contact aur address dekhein",
  visitCtaHref: "/contact",
  faqKicker: "Sawaal jawab",
  faqTitle: "Enquiry bhejne se jude sawaal",
  faqCopy: "Quote, response time aur follow-up se jude common sawaal.",
  faqs: [
    {
      q: "Enquiry bhejne ke baad kitne samay mein jawab milta hai?",
      a: "Koshish hoti hai ki enquiry usi din ya agle working din reply ho. Season ke time par calls zyada aati hain, isliye WhatsApp par detail bhejna sabse fast rehta hai.",
    },
    {
      q: "Kya form bharne ke bajaye WhatsApp kar sakte hain?",
      a: "Haan. Machine ka naam, fasal ya part ka photo WhatsApp par bhejein. Hum wahi se detail confirm karke rate bata denge.",
    },
    {
      q: "Rate ke liye kaunsi detail zaroori hai?",
      a: "Machine ka naam ya kaam, fasal ya kiln ka type, required volume, tractor ya motor ki availability aur delivery location. In detail se quote sahi banta hai.",
    },
    {
      q: "Kya enquiry bhejne par koi charge hai?",
      a: "Nahi. Enquiry aur rate discussion bilkul free hai. Order tabhi confirm hota hai jab aap terms se agree karein.",
    },
    {
      q: "Kya dealer ya FPO ke liye bulk rate milta hai?",
      a: "Haan. Quantity, area aur requirement ke hisaab se bulk rate aur dispatch schedule discuss kiya jata hai. Enquiry mein quantity zaroor likhein.",
    },
  ],
};

// ============================================================
// ENQUIRY FORM (shared labels)
// ============================================================

export const enquiryFormCopy = {
  nameLabel: "Aapka naam *",
  namePlaceholder: "Poora naam",
  emailLabel: "Email *",
  emailPlaceholder: "aap@example.com",
  phoneLabel: "Phone / WhatsApp",
  phonePlaceholder: "+91",
  productLabel: "Product interest",
  productPlaceholder: "Product category chunein",
  productOther: "Koi aur requirement",
  messageLabel: "Apni requirement likhein *",
  messagePlaceholder: "Machine ka naam, fasal ya kiln ka type, volume, location...",
  submitLabel: "Enquiry bhejein",
  success:
    "Dhanyavaad — aapki detail is preview mein record ho gayi hai. Launch se pehle form ko email service ya API se connect karein.",
  note: "Ye detail sirf aapki enquiry ka jawab dene ke liye use hoti hai.",
};

// ============================================================
// FOOTER
// ============================================================

export const footerCopy = {
  about:
    "Sambhal, Uttar Pradesh se agricultural machinery aur brick kiln machinery ka direct manufacturer. Machine, spare parts aur casting components — seedhi factory se.",
  brandCta: "Company ke baare mein",
  contactTitle: "Get in touch",
  contactCta: "Apni requirement bhejein",
  bottomNote: "Manufacturer · Sambhal, Uttar Pradesh · India",
};

// ============================================================
// 404
// ============================================================

export const notFoundCopy = {
  title: "Ye page nahi mila.",
  copy:
    "Link purana ho sakta hai ya page ka address badal gaya ho. Neeche se homepage ya machine range dekhein — ya seedha call kar lein.",
  primaryLabel: "Homepage par jaayein",
  primaryHref: "/",
  secondaryLabel: "Machinery dekhein",
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
  picksKicker: "Kaam ke hisaab se",
  picksTitle: "Kaunsi machine kab kaam aati hai",
  picksCopy:
    "Pehle kaam samjhein, phir machine chunein. Neeche har kaam ke saath matching machine ka link hai.",
  rangeKicker: "Product range",
  benefitsKicker: "Why Bharat Agricultures",
  benefitsTitle: "Manufacturer se lene ka practical fayda",
  benefitsCopy: "Rate, specification aur spare parts — teenon par seedhi baat, bina beech ke.",
  processKicker: "Kaam kaise hota hai",
  processTitle: "Enquiry se dispatch tak",
  processCopy: "Teen simple steps. Requirement clear ho to quote aur timeline dono jaldi milte hain.",
  faqKicker: "Sawaal jawab",
  faqTitleSuffix: " ke baare mein sawaal",
  faqCopy: "Jo sawaal sabse zyada aate hain. Aapka sawaal alag hai to call ya WhatsApp kar lein.",
};

export const partsTemplateCopy = {
  overviewKicker: "Overview",
  overviewLink: "Send a part enquiry",
  groupsKicker: "Parts we supply",
  groupsTitle: "Kya kya parts aate hain",
  groupsCopy: "Har group mein wear parts aur replacement components hain. Exact match ke liye photo ya sample bhejein.",
  checksKicker: "Before you order",
  checksCopy:
    "Part ka match tabhi sahi hota hai jab machine aur size dono clear hon. In char cheezon se enquiry fast ho jati hai.",
  relatedTitle: "In machines ke liye parts",
  relatedLink: "All parts categories",
  faqKicker: "Sawaal jawab",
  faqTitleSuffix: " ke baare mein sawaal",
  faqCopy: "Part identification, quantity aur delivery se jude common sawaal.",
  ctaTitle: "Part ka photo ya sample bhejein — hum match karke rate batayenge.",
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
  benefitsTitle: "Spare chhota, asar bada",
  benefitsCopy:
    "Ek chhota part poore kaam ko rok sakta hai. Isliye matching aur availability par dhyan dete hain.",
  processKicker: "Part enquiry",
  processTitle: "Part order karne ka tareeka",
  processCopy:
    "Part ka naam pata na ho to koi baat nahi. Machine ka naam, photo aur thoda size bata dein — hum identify karke aage badh jayenge.",
  wearKicker: "Wear parts",
  wearTitle: "Sabse pehle kya ghisata hai",
  wearCopy: "Ye parts season mein sabse zyada load lete hain. Inka ek spare set rakhna practical rehta hai.",
  wearItems: [
    "Cultivator aur harrow ke tines",
    "Thresher aur cleaner ki jaali",
    "Pugmill ke mixing blades",
    "Coal crusher ke hammers aur screens",
    "ID fan ki bearings",
    "Land leveler ke blades",
  ],
  faqKicker: "Sawaal jawab",
  faqTitle: "Machinery parts ke baare mein sawaal",
  faqCopy: "Part order, matching aur delivery se jude common sawaal.",
};

export const productPageCopy = {
  quoteLabel: "Get a quote",
  allPrefix: "All",
  metaPoints: ["Made in Sambhal, UP", "Spare parts support", "Direct factory rate"],
  overviewKicker: "Overview",
  overviewTitleSuffix: " ke baare mein",
  specTitle: "Ek nazar mein",
  specNote:
    "Exact rate aur availability ke liye apni requirement bhejein — hum seedha factory rate batayenge.",
  specCta: "Send requirement",
  useCaseKicker: "Use cases",
  useCaseTitle: "Kahan use hoti hai",
  useCaseCopy:
    "Har khet aur har fasal ke liye requirement alag hoti hai. Neeche common use cases hain — apna case batayein to hum setup usi hisaab se suggest karenge.",
  componentsKicker: "Components",
  componentsTitle: "Key components",
  componentsCopy:
    "Ye parts machine ka core hain. Ghiste parts alag se milte hain, taaki season mein poora setup na badalna pade.",
  buildKicker: "Design & build",
  buildTitle: "Kaam kaise karti hai",
  buildCopy: "Machine ka design rozana ke field ya kiln conditions ko dhyan mein rakhkar kiya jata hai.",
  benefitsTitle: "Fayde",
  faqKicker: "Sawaal jawab",
  faqTitleSuffix: " ke baare mein sawaal",
  faqCopy: "Rate, setup aur spare parts se jude common sawaal. Aur detail ke liye call ya WhatsApp kar lein.",
  relatedTitle: "Ye machines bhi dekhein",
  ctaTitleSuffix: " ka rate aur setup discuss karein.",
  ctaLabel: "Send enquiry",
};

// ============================================================
// SEO META (per page)
// ============================================================

export const seoMetadata = {
  home: {
    title: "Agricultural & Brick Kiln Machinery Manufacturer in India",
    description:
      "Bharat Agricultures — agricultural machinery aur brick kiln machinery manufacturer, Sambhal, Uttar Pradesh. Thresher, cleaner, harrow, land leveler, gara machine, brick-making machine, pugmill, ID fan aur coal crusher.",
  },
  about: {
    title: "About Us | Agricultural & Brick Kiln Machinery Manufacturer",
    description:
      "Bharat Agricultures, Sambhal, Uttar Pradesh — agricultural machinery aur brick kiln machinery ka direct manufacturer. Kaam karne ka tareeka, product range aur supply.",
  },
  quality: {
    title: "Quality Commitment | How We Build Machinery",
    description:
      "Hamara quality approach: sahi material, sahi fit aur dispatch se pehle basic run test. Agricultural aur brick kiln machinery ke liye practical standards.",
  },
  infrastructure: {
    title: "Infrastructure | Manufacturing Unit in Sambhal, UP",
    description:
      "Fabrication, machining, assembly aur dispatch — hamari Sambhal, Uttar Pradesh unit ka practical setup aur kaam karne ka tareeka.",
  },
  products: {
    title: "Machinery & Parts | Agricultural and Brick Kiln",
    description:
      `Agricultural machinery, brick kiln machinery aur machinery parts — teen product families, ${products.length} machines aur spare support. Sambhal, Uttar Pradesh se.`,
  },
  contact: {
    title: "Contact Us | Machinery Enquiry & Factory Visit",
    description:
      "Bharat Agricultures se contact karein — machine rate, spare parts ya factory visit ke liye. Sambhal, Uttar Pradesh. Call, WhatsApp ya enquiry form.",
  },
  enquiry: {
    title: "Send Enquiry | Machine Rate & Spare Parts",
    description:
      "Apni machine requirement, volume aur location batayein. Hum matching model aur seedha factory rate bhej denge.",
  },
};

export { agriculturalProducts, brickKilnProducts, products };
