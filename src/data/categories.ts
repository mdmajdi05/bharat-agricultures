/**
 * Category-level content for the three top-level product families.
 * Every page reads its copy from here so the site can be updated in one place.
 */

export type CategoryFaq = {
  q: string;
  a: string;
};

export type QuickPick = {
  label: string;
  copy: string;
  slugs: string[];
};

export type Category = {
  slug: string;
  navLabel: string;
  name: string;
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
  quickPicks: QuickPick[];
  gridTitle: string;
  gridCopy: string;
  benefits: { title: string; copy: string }[];
  process: { title: string; copy: string }[];
  faqs: CategoryFaq[];
  ctaTitle: string;
  ctaLabel: string;
};

export const agriculturalCategory: Category = {
  slug: "agricultural-machinery",
  navLabel: "Agricultural Machinery",
  name: "Agricultural Machinery",
  metaTitle: "Agricultural Machinery Manufacturer in Sambhal, UP",
  metaDescription:
    "Agricultural machinery manufacturer in Sambhal, UP. Thresher, paddy cleaner, disc harrow, cultivator aur land leveler — direct factory rate aur spare support.",
  hero: {
    kicker: "Agricultural machinery / 10 machines",
    title: "Agricultural Machinery Manufacturer in India",
    copy:
      "Agricultural equipment, farm machinery aur tractor implements — apni unit Sambhal, Uttar Pradesh se. Jutai se threshing aur safai tak, kisan aur dealer ke liye seedha factory rate.",
    image: "tractor",
    current: "Agricultural Machinery",
  },
  introTitle: "Kheti ki machinery, ek hi jagah se",
  intro: [
    "Kheti ka kaam ek machine se nahi chalta. Jutai ke liye cultivator, mitti palatne ke liye disc harrow, seedbed ke liye harrow, fasal nikalne ke liye thresher aur safai ke liye cleaner — har step ka apna implement hota hai. Isliye humne apna range aise banaya hai ki aapko poora set ek hi manufacturer se mil jaye.",
    "Bharat Agricultures Sambhal, Uttar Pradesh mein agricultural machinery banata hai. Yahan banne ka matlab ye hai ki size, setup aur spare parts par seedha baat ho sakti hai — beech ka dealer aur commission nahi. Kisan ho, FPO ho ya farm equipment dealer, aap apni zaroorat batayein aur hum matching machine suggest karenge.",
  ],
  quickPicks: [
    {
      label: "Jutai",
      copy: "Sakhi mitti todna aur khet ko sowing ke liye kholna.",
      slugs: ["tractor-cultivator", "disc-harrow", "agricultural-harrow-machine"],
    },
    {
      label: "Khet barabar karna",
      copy: "Sinchai se pehle satah set karna, taaki paani barabar faile.",
      slugs: ["plate-land-leveler", "2-in-1-land-leveler"],
    },
    {
      label: "Katayi ke baad",
      copy: "Fasal se dana nikalna — gehun, dhan, dalhan aur makka.",
      slugs: ["hawa-thresher-machine", "agricultural-thresher-machine", "maize-thresher-machine"],
    },
    {
      label: "Anaaj ki safai",
      copy: "Dhool, bhusa aur kankar alag karke dana mandi-ready banana.",
      slugs: ["paddy-cleaner-machine", "agricultural-dust-cleaner-machine"],
    },
  ],
  gridTitle: "Hamari agricultural machinery",
  gridCopy:
    "Das machines, teen kaam ke hisaab se: mitti ki tayari, fasal nikalna aur dana saaf karna. Har machine ka apna page hai jahan use case, parts aur quote ka rasta diya gaya hai.",
  benefits: [
    {
      title: "Seedha manufacturer",
      copy: "Machine Sambhal, Uttar Pradesh ki apni unit mein banti hai. Rate aur specification par seedha humse baat hoti hai.",
    },
    {
      title: "Tractor ke hisaab se size",
      copy: "Implement ka size aapke tractor ke HP aur khet ke area ke hisaab se tay hota hai, taaki load sahi bante.",
    },
    {
      title: "Spare parts ka support",
      copy: "Tines, blades, jaali, bearings aur pulleys — ghisne wale parts alag se milte hain, taaki season mein kaam na ruke.",
    },
    {
      title: "Kisan aur dealer dono",
      copy: "Single machine ho ya dealer ke liye bulk requirement, dono par same process — requirement samajhna, quote dena, dispatch.",
    },
  ],
  process: [
    {
      title: "Fasal aur khet batayein",
      copy: "Kaunsi fasal, kitna area, mitti ka type aur tractor ka model — in char baaton se hi kaafi had tak sahi machine tay ho jati hai.",
    },
    {
      title: "Machine aur setup suggest",
      copy: "Hum matching model, size aur power option batate hain. Zaroorat ho to alag jaali ya drum setup ka option bhi.",
    },
    {
      title: "Quote aur dispatch",
      copy: "Requirement clear hone par seedha factory rate milta hai. Order confirm hone ke baad dispatch aur basic setup guidance.",
    },
  ],
  faqs: [
    {
      q: "Agricultural machinery manufacturer in India kaise chunein?",
      a: "Teen cheezein dekhein — machine kahan ban rahi hai, spare parts mil rahe hain ya nahi, aur rate seedha manufacturer ka hai ya dealer ka. Hum Sambhal, Uttar Pradesh mein khud banate hain aur parts ka support dete hain.",
    },
    {
      q: "Kaunsi machine kis kaam ke liye chahiye?",
      a: "Jutai ke liye cultivator ya disc harrow, seedbed ke liye harrow, satah barabar karne ke liye land leveler, fasal nikalne ke liye thresher aur safai ke liye cleaner. Confusion ho to call karein, hum fasal ke hisaab se bata denge.",
    },
    {
      q: "Kya machine tractor ke saath aati hai?",
      a: "Nahi, ye tractor-mounted implements hain. Kuch machines PTO se chalti hain aur kuch ke liye alag motor ya engine option hota hai. Aapka tractor model batayein, hum compatibility bata denge.",
    },
    {
      q: "Rate kaise pata karein?",
      a: "Price model, size, power option aur material par depend karti hai. Isliye hum fixed number publish nahi karte — requirement batayein aur seedha factory rate lein.",
    },
    {
      q: "Kya dealer ke liye supply karte hain?",
      a: "Haan. Kisan, FPO, contractor aur farm equipment dealer — sabke liye supply hoti hai. Bulk requirement par quantity aur dispatch schedule discuss kiya ja sakta hai.",
    },
  ],
  ctaTitle: "Fasal aur tractor batayein — matching machine aur seedha rate.",
  ctaLabel: "Get a quote",
};

export const brickKilnCategory: Category = {
  slug: "brick-kiln-machinery",
  navLabel: "Brick Kiln Machinery",
  name: "Brick Kiln Machinery",
  metaTitle: "Brick Kiln Machinery Manufacturer in Sambhal, UP",
  metaDescription:
    "Brick kiln machinery manufacturer in Sambhal, UP. Pugmill, gara machine, brick making machine, ID fan aur coal crusher. Factory quote lein.",
  hero: {
    kicker: "Brick kiln machinery / 05 machines",
    title: "Brick Kiln Machinery Manufacturer in India",
    copy:
      "Clay mixing, gara process, brick production, airflow aur coal sizing ke liye brick kiln machinery. Sambhal, Uttar Pradesh ki apni unit se, kiln owners ke liye.",
    image: "warehouse",
    current: "Brick Kiln Machinery",
  },
  introTitle: "Eent ki quality, sahi machinery se shuru hoti hai",
  intro: [
    "Brick kiln mein clay preparation, gara process, brick production, airflow aur fuel sizing ke liye alag machinery ki zaroorat ho sakti hai. Kaunsi machine fit hoti hai, ye kiln ke process, material aur output par depend karta hai.",
    "Hum pugmill machine, gara machine, brick-making machine, ID fan aur coal crusher Sambhal, Uttar Pradesh se offer karte hain. Kiln ka size, daily production aur existing layout samajhkar configuration discuss hoti hai — kyunki ek hi model har bhatte par fit nahi hota.",
  ],
  quickPicks: [
    {
      label: "Clay taiyari",
      copy: "Mitti, paani aur additives ka barabar mix, taaki eent mein crack na aaye.",
      slugs: ["pugmill-machine"],
    },
    {
      label: "Firing aur airflow",
      copy: "Kiln ka draught control — steady temperature aur kam fuel waste.",
      slugs: ["id-fan-for-brick-kiln"],
    },
    {
      label: "Coal sizing",
      copy: "Coal ko ek jaise size mein todna, taaki firing consistent rahe.",
      slugs: ["coal-crusher-machine"],
    },
    {
      label: "Gara process",
      copy: "Kiln ke material, site aur production target ke hisaab se gara machine configuration.",
      slugs: ["gara-machine-for-brick-kiln"],
    },
    {
      label: "Brick production",
      copy: "Brick type, output target aur site requirements ke hisaab se brick-making machine selection.",
      slugs: ["brick-making-machine"],
    },
  ],
  gridTitle: "Hamari brick kiln machinery",
  gridCopy:
    "Clay preparation, gara process, brick production, airflow aur coal sizing ke liye paanch machine pages. Har page par use case, configuration guidance aur quote ka rasta diya gaya hai.",
  benefits: [
    {
      title: "Kiln ke layout ke hisaab se",
      copy: "Fan ka duct, pugmill ki placement aur crusher ki feeding line — sab aapke existing setup ke hisaab se discuss hota hai.",
    },
    {
      title: "Wear parts ready",
      copy: "Pugmill blades, crusher hammers, screens aur bearings — ghisne wale parts alag se milte hain.",
    },
    {
      title: "Firing par focus",
      copy: "Har machine ka maksad ek hi hai: kiln ka output consistent rahe aur fuel waste kam ho.",
    },
    {
      title: "Requirement-led configuration",
      copy: "Brick type, site layout, power aur target output ke basis par machine specifications quote se pehle confirm ki jaati hain.",
    },
    {
      title: "Direct manufacturer rate",
      copy: "Machine apni unit mein banti hai, isliye rate par seedhi baat hoti hai — bina beech ke commission ke.",
    },
  ],
  process: [
    {
      title: "Kiln ka size batayein",
      copy: "Daily eent production, kiln ka type, gara process aur available power — in details se machine configuration discuss hoti hai.",
    },
    {
      title: "Site aur layout discuss",
      copy: "Pugmill, fan aur crusher kahan lagega, duct ka rasta kya hoga — ye pehle samajh liya jata hai.",
    },
    {
      title: "Quote, dispatch aur setup",
      copy: "Requirement lock hone par factory rate, dispatch aur basic commissioning guidance milti hai.",
    },
  ],
  faqs: [
    {
      q: "Brick kiln ke liye sabse pehle kaunsi machine chahiye?",
      a: "Agar clay mixing manual hai to pugmill sabse pehle aata hai, kyunki wahi eent ki quality decide karta hai. Uske baad firing control ke liye ID fan aur coal sizing ke liye crusher.",
    },
    {
      q: "Kya existing kiln ke liye machine bana sakte hain?",
      a: "Haan. Aapke kiln ka size, duct layout aur power availability batayein — hum usi setup ke hisaab se machine bana sakte hain.",
    },
    {
      q: "Multiple brick kiln machines ek saath lene par kya fayda hai?",
      a: "Ek hi manufacturer se lene par sizing, dispatch aur spare parts ka coordination aasan rehta hai. Bulk requirement par rate aur schedule discuss kiya ja sakta hai.",
    },
    {
      q: "Maintenance ke liye kya spare rakhna chahiye?",
      a: "Pugmill ke blades, crusher ke hammers aur screen, aur fan ki bearings. Ye wear parts hain aur inka ek spare set rakhna production rukne se bachata hai.",
    },
    {
      q: "Gara machine aur brick-making machine ka quote kaise lein?",
      a: "Kiln ka type, brick ya material requirement, target output, site layout aur power availability share karein. In details ke basis par configuration aur quotation discuss hoti hai.",
    },
  ],
  ctaTitle: "Kiln ka size aur daily production batayein — sahi setup suggest karenge.",
  ctaLabel: "Talk to our team",
};

export const partsCategory: Category = {
  slug: "machinery-parts",
  navLabel: "Machinery Parts",
  name: "Machinery Parts",
  metaTitle: "Agricultural & Brick Kiln Machinery Parts Manufacturer",
  metaDescription:
    "Agricultural aur brick kiln machinery parts manufacturer in Sambhal, UP. Tines, blades, jaali, bearings, pugmill blades aur casting parts. Direct spare support.",
  hero: {
    kicker: "Machinery parts / 03 categories",
    title: "Machinery Parts Manufacturer in India",
    copy:
      "Machine tab tak kaam ki hai jab tak uska spare milta rahe. Agricultural parts, brick kiln parts aur casting parts — Sambhal, Uttar Pradesh se seedha support.",
    image: "machining",
    current: "Machinery Parts",
  },
  introTitle: "Spare parts, taaki kaam na ruke",
  intro: [
    "Season ke beech mein machine rukna sabse mehnga padta hai. Tine toot jaye, jaali phate, bearing ghis jaye ya pugmill blade khatam ho jaye — in chhoti cheezon ke liye poori machine badalna practical nahi hota. Isliye hum wear parts aur replacement components par alag se dhyan dete hain.",
    "Hamare parts range teen hisson mein hai: agricultural machinery parts, brick kiln machinery parts aur casting parts. Aap machine ka model, part ka photo ya sample bhej sakte hain — hum matching part identify karke supply karte hain.",
  ],
  quickPicks: [
    {
      label: "Agricultural parts",
      copy: "Tines, blades, jaali, drum parts, bearings aur pulleys.",
      slugs: ["agricultural-dust-cleaner-machine", "agricultural-thresher-machine", "tractor-cultivator"],
    },
    {
      label: "Brick kiln parts",
      copy: "Pugmill blades, crusher hammers, screens aur fan components.",
      slugs: ["pugmill-machine", "coal-crusher-machine", "id-fan-for-brick-kiln"],
    },
    {
      label: "Casting parts",
      copy: "Drawing ya sample ke hisaab se casting components.",
      slugs: ["casting-parts"],
    },
  ],
  gridTitle: "Parts categories",
  gridCopy:
    "Har category ka apna page hai — kya parts aate hain, kaise identify karein aur quote kaise lein.",
  benefits: [
    {
      title: "Machine ke hisaab se match",
      copy: "Part ka photo, size ya sample bhejein. Hum machine ke model ke hisaab se matching part identify karte hain.",
    },
    {
      title: "Wear parts par focus",
      copy: "Tines, blades, hammers, screens aur bearings — jo parts sabse pehle ghiste hain, unka stock rakhna sabse practical hai.",
    },
    {
      title: "Chhoti quantity bhi",
      copy: "Ek set spare ho ya dealer ke liye bulk, dono requirement par baat ho sakti hai.",
    },
  ],
  process: [
    {
      title: "Part identify karein",
      copy: "Machine ka naam, model aur part ka photo ya sample — jitni detail milegi, match utna sahi hoga.",
    },
    {
      title: "Availability aur rate",
      copy: "Hum batate hain part ready hai ya banega, aur uska rate kya rahega.",
    },
    {
      title: "Dispatch",
      copy: "Confirm hone ke baad part dispatch hota hai. Bulk order par schedule discuss kiya jata hai.",
    },
  ],
  faqs: [
    {
      q: "Sirf part kharid sakte hain, poori machine nahi?",
      a: "Haan. Hum wear parts aur replacement components alag se supply karte hain. Machine ka model aur part ki detail batayein.",
    },
    {
      q: "Part ka photo bhejna kaafi hai?",
      a: "Photo se pehchanne mein madad milti hai, lekin sahi match ke liye size ya sample behtar hai. Machine ka model bhi bata dein to confirmation aasan hoti hai.",
    },
    {
      q: "Parts kitne din mein milte hain?",
      a: "Ready part turant dispatch ho jata hai; bana kar dena ho to time requirement par depend karta hai. Order se pehle hum exact timeline bata dete hain.",
    },
    {
      q: "Dealer ke liye bulk parts milte hain?",
      a: "Haan. Dealer aur repair workshop ke liye bulk requirement par rate aur schedule discuss kiya ja sakta hai.",
    },
  ],
  ctaTitle: "Part ka photo bhejein — hum machine se match karke rate batayenge.",
  ctaLabel: "Send part enquiry",
};

export const categories = [agriculturalCategory, brickKilnCategory, partsCategory];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
