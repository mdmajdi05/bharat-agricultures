/**
 * Sub-pages of /machinery-parts.
 * Each entry drives one static page with its own copy, parts list and FAQs.
 */

export type PartsFaq = {
  q: string;
  a: string;
};

export type PartsPage = {
  slug: string;
  name: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    kicker: string;
    title: string;
    copy: string;
    image: string;
    current: string;
  };
  introTitle: string;
  intro: string[];
  groups: { title: string; copy: string; items: string[] }[];
  checksTitle: string;
  checks: string[];
  faqs: PartsFaq[];
  relatedProductSlugs: string[];
};

export const agriculturalPartsPage: PartsPage = {
  slug: "agricultural-parts",
  name: "Agricultural Machinery Parts",
  navLabel: "Agricultural Parts",
  metaTitle: "Kheti Machinery Parts — Tines, Blades, Jaali | Sambhal",
  metaDescription:
    "Agricultural machinery parts manufacturer in Sambhal, UP. Thresher, harrow, cultivator aur cleaner ke tines, blades, jaali aur bearings. Direct spare support.",
  hero: {
    kicker: "Machinery parts / Agricultural",
    title: "Agricultural Machinery Parts",
    copy:
      "Thresher, harrow, cultivator aur cleaner ke wear parts — tines, blades, jaali, drum parts aur bearings. Sambhal, Uttar Pradesh se seedha spare support.",
    image: "soil",
    current: "Agricultural Parts",
  },
  introTitle: "Ghisne wale parts, waqt par milna zaroori",
  intro: [
    "Agricultural machinery ka kaam mushkil hota hai — mitti, dhool, nami aur lagatar chalna. Isliye tines, blades, jaali aur bearings samay ke saath ghiste hain. Inhe waqt par badalna machine ki efficiency aur fasal ki quality dono ke liye zaroori hai.",
    "Hum apni machines ke liye parts khud banate hain aur doosri machines ke liye bhi matching parts supply karte hain. Part ka photo, size ya purana sample bhejein — hum machine ke model ke hisaab se confirm karke rate batayenge.",
  ],
  groups: [
    {
      title: "Tines aur blades",
      copy: "Cultivator tines, harrow tines, land leveler blades aur disc components — jutai ke saare wear parts.",
      items: ["Cultivator tines", "Harrow tines", "Leveler blades", "Disc hub parts"],
    },
    {
      title: "Sieves aur jaali",
      copy: "Dust cleaner, paddy cleaner aur thresher ke liye alag-alag mesh size ki jaali, taaki fasal badalne par setup badla ja sake.",
      items: ["Cleaning sieves", "Perforated jaali", "Thresher screens", "Chute liners"],
    },
    {
      title: "Drum aur threshing parts",
      copy: "Thresher aur hawa thresher ke drum parts, concave aur beater — dana nikalne ka core section.",
      items: ["Drum beater", "Concave", "Shaft and bush", "Drive pulley"],
    },
    {
      title: "Bearings aur drive",
      copy: "Bearing, hub, belt aur pulley — chalane ke dauraan sabse zyada load inhi par padta hai.",
      items: ["Bearing housing", "Hub assembly", "V-belt set", "Pulley"],
    },
  ],
  checksTitle: "Part order karte waqt ye batayein",
  checks: [
    "Machine ka naam aur model",
    "Part ka photo ya purana sample",
    "Size ya measurement, agar photo se clear na ho",
    "Kitne pieces chahiye aur kab tak",
  ],
  faqs: [
    {
      q: "Doosri company ki machine ke parts mil sakte hain?",
      a: "Photo ya sample ke basis par matching part identify kiya ja sakta hai. Machine ka model bhi batayein, taaki fit aur size confirm ho sake.",
    },
    {
      q: "Thresher ki jaali alag se milti hai?",
      a: "Haan. Fasal ke hisaab se jaali ka mesh size alag hota hai. Aap kaunsi fasal thresh karte hain, ye batayein aur hum sahi size suggest karenge.",
    },
    {
      q: "Ek set spare rakhna chahiye ya nahi?",
      a: "Season se pehle ek tine, ek jaali aur ek bearing set rakhna practical rehta hai. Isse chhoti rukawat par poora kaam nahi rukta.",
    },
    {
      q: "Parts ka rate machine ke rate se alag hota hai?",
      a: "Haan, har part ka apna rate hota hai jo size, material aur quantity par depend karta hai. Exact rate ke liye requirement bhejein.",
    },
  ],
  relatedProductSlugs: [
    "agricultural-thresher-machine",
    "tractor-cultivator",
    "agricultural-dust-cleaner-machine",
  ],
};

export const brickKilnPartsPage: PartsPage = {
  slug: "brick-kiln-parts",
  name: "Brick Kiln Machinery Parts",
  navLabel: "Brick Kiln Parts",
  metaTitle: "Eent Bhatta Machinery Spare Parts | Sambhal Factory",
  metaDescription:
    "Brick kiln machinery parts manufacturer in Sambhal, UP. Pugmill blades, coal crusher hammers, screens aur ID fan components. Direct spare support.",
  hero: {
    kicker: "Machinery parts / Brick kiln",
    title: "Brick Kiln Machinery Parts",
    copy:
      "Pugmill blades, crusher hammers, screens aur ID fan components — brick kiln ke wear parts, taaki firing aur production dono na ruke.",
    image: "warehouse",
    current: "Brick Kiln Parts",
  },
  introTitle: "Kiln ka downtime, sabse mehnga",
  intro: [
    "Brick kiln round-the-clock chalta hai. Agar pugmill ka blade ghis gaya, crusher ka hammer toot gaya ya fan ki bearing baith gayi, to production seedha ruk jata hai. Isliye wear parts ka spare rakhna kiln owners ke liye sabse practical investment hai.",
    "Hum brick kiln machinery ke liye parts banate aur supply karte hain — pugmill se lekar coal crusher aur ID fan tak. Part ka detail, machine ka size aur quantity batayein, hum availability aur rate bata denge.",
  ],
  groups: [
    {
      title: "Pugmill parts",
      copy: "Mixing blades, liners aur shaft components — clay mixing ka core wear section.",
      items: ["Mixing blades", "Wear liners", "Shaft sleeves", "Discharge gate parts"],
    },
    {
      title: "Crusher parts",
      copy: "Hammers, screens aur crushing chamber liners, coal sizing ke liye.",
      items: ["Crusher hammers", "Screens", "Chamber liners", "Drive belts"],
    },
    {
      title: "ID fan parts",
      copy: "Impeller, shaft, bearings aur couplings — airflow control ke liye.",
      items: ["Impeller", "Shaft", "Bearing housing", "Coupling"],
    },
    {
      title: "Structural and drive",
      copy: "Flanges, mounts aur drive components jo machine ko site ke layout se match karte hain.",
      items: ["Duct flanges", "Motor mount", "Pulley", "Fasteners"],
    },
  ],
  checksTitle: "Part order karte waqt ye batayein",
  checks: [
    "Machine ka type aur size",
    "Part ka photo ya sample",
    "Material ya thickness, agar pata ho",
    "Kitne pieces aur delivery kahan",
  ],
  faqs: [
    {
      q: "Pugmill blade kitne samay mein badalna chahiye?",
      a: "Ye mitti mein sand aur grit par depend karta hai. Jab blade ki profile ghis jaye aur mixing ka time badhne lage, tab replacement ka sochein. Spare set rakhna behtar hai.",
    },
    {
      q: "Crusher hammer aur screen dono badalne padte hain?",
      a: "Zaroori nahi. Hammer ghisne par output size badal sakta hai, aur screen alag se ghis sakta hai. Dono ki condition alag-alag check karein.",
    },
    {
      q: "ID fan ki bearing kaise pata chalega ki kharab hai?",
      a: "Awaz badhna, vibration aana ya greasing ke baad bhi garam hona — ye signs hote hain. Aise waqt fan chalate rehna shaft par load badha deta hai.",
    },
    {
      q: "Kya aap site par fitting support dete hain?",
      a: "Basic guidance aur fitting instructions di jaati hain. Bade replacement ke liye schedule discuss kiya ja sakta hai.",
    },
  ],
  relatedProductSlugs: ["pugmill-machine", "coal-crusher-machine", "id-fan-for-brick-kiln"],
};

export const castingPartsPage: PartsPage = {
  slug: "casting-parts",
  name: "Casting Parts",
  navLabel: "Casting Parts",
  metaTitle: "Casting Parts — Drawing Ke Hisaab Se | Sambhal",
  metaDescription:
    "Casting parts manufacturer in Sambhal, UP. Drawing ya sample ke hisaab se agricultural aur brick kiln machinery ke components. Factory rate aur bulk supply.",
  hero: {
    kicker: "Machinery parts / Casting",
    title: "Casting Parts",
    copy:
      "Drawing ya sample ke hisaab se casting components — hubs, housings, pulleys aur custom parts, agricultural aur brick kiln machinery ke liye.",
    image: "welding",
    current: "Casting Parts",
  },
  introTitle: "Casting par fit aur finish depend karta hai",
  intro: [
    "Har part fabrication se nahi banta. Hub, housing, pulley aur kuch brackets ke liye casting behtar rehti hai — shape complex ho to bhi ek hi baar mein repeat ho jati hai. Lekin casting ka faayda tabhi hai jab dimension aur machining sahi ho.",
    "Hum apne product range ke liye casting parts banwate hain aur customer ke drawing ya sample par bhi requirement coordinate karte hain. Aap part ka drawing, material aur quantity batayein — hum feasibility, rate aur timeline bata denge.",
  ],
  groups: [
    {
      title: "Hubs aur housings",
      copy: "Bearing housing, hub aur mounting parts jo shaft aur frame ke beech fit hote hain.",
      items: ["Bearing housings", "Wheel hubs", "Mounting brackets", "Shaft collars"],
    },
    {
      title: "Pulleys aur drive parts",
      copy: "Belt drive ke liye pulley aur coupling components, balanced aur machined.",
      items: ["V-belt pulleys", "Couplings", "Bushes", "Spacers"],
    },
    {
      title: "Wear castings",
      copy: "Crusher aur mixing sections ke liye wear-resistant cast components.",
      items: ["Hammer blanks", "Liners", "Blade holders", "Wear plates"],
    },
    {
      title: "Custom components",
      copy: "Drawing ya sample ke hisaab se chhote custom casting parts, machine ke fit ke liye.",
      items: ["Custom brackets", "Machine feet", "Guards", "Adaptors"],
    },
  ],
  checksTitle: "Casting enquiry ke liye ye detail chahiye",
  checks: [
    "Drawing ya physical sample",
    "Material specification",
    "Quantity aur repeat requirement",
    "Machining ki zaroorat hai ya nahi",
  ],
  faqs: [
    {
      q: "Casting part drawing ke bina ho sakta hai?",
      a: "Sample ho to measurement le kar drawing banayi ja sakti hai. Sirf photo se exact casting karna mushkil hota hai, kyunki dimension aur fit matter karte hain.",
    },
    {
      q: "Kitni quantity se order kiya ja sakta hai?",
      a: "Ye part ke type aur machining requirement par depend karta hai. Chhoti quantity aur repeat order dono par baat ki ja sakti hai.",
    },
    {
      q: "Kya casting ke baad machining bhi hoti hai?",
      a: "Jahan fit aur bore accuracy chahiye wahan machining zaroori hoti hai. Enquiry ke waqt bata dein ki finished part chahiye ya raw casting.",
    },
    {
      q: "Delivery ka time kitna hota hai?",
      a: "Part ki complexity, quantity aur machining par depend karta hai. Confirm order se pehle exact timeline diya jata hai.",
    },
  ],
  relatedProductSlugs: ["pugmill-machine", "coal-crusher-machine", "id-fan-for-brick-kiln"],
};

export const partsPages = [agriculturalPartsPage, brickKilnPartsPage, castingPartsPage];

export function getPartsPage(slug: string) {
  return partsPages.find((page) => page.slug === slug);
}
