import { images } from "@/lib/images";

export type ProductCategory = "agricultural" | "brick-kiln";

export type ProductFaq = {
  q: string;
  a: string;
};

export type ProductFeature = {
  title: string;
  copy: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  /** Long-tail manufacturer phrase used as the page eyebrow. */
  eyebrow: string;
  /** Short Hinglish promise used above the card title. */
  tagline: string;
  /** Card line + meta description. */
  description: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  useCases: string[];
  benefits: string[];
  features: ProductFeature[];
  /** Key components / spares. */
  items: string[];
  specs: ProductSpec[];
  faqs: ProductFaq[];
  image: string;
  imageAlt: string;
  number: string;
  category: ProductCategory;
};

export const products: Product[] = [
  // ==========================================================
  // AGRICULTURAL MACHINERY
  // ==========================================================
  {
    slug: "agricultural-dust-cleaner-machine",
    name: "Dust Cleaner",
    eyebrow: "Agricultural Dust Cleaner Machine Manufacturer",
    tagline: "Dana saaf, rate behtar",
    description:
      "Sambhal, Uttar Pradesh mein bana dust cleaner machine — dana se dhool, mitti aur halka kachra alag karta hai, taaki mandi aur storage ke liye grain taiyar rahe.",
    metaTitle: "Agricultural Dust Cleaner Machine Manufacturer in India",
    metaDescription:
      "Dust cleaner machine manufacturer in Sambhal, Uttar Pradesh. Gehun, dhan aur sarson se dhool aur halka kachra alag karein. Seedha factory rate ke liye call karein.",
    intro: [
      "Fasal katne ya thresh hone ke baad dane ke saath dhool, mitti ka bareek powder, bhusa aur patte aana aam baat hai. Ye kachra weight badhata hai, godown mein nami kheenchta hai aur mandi mein rate kam karwata hai. Dust cleaner machine hawa aur jaali ka combination use karke dane ko halke kachre se alag karti hai.",
      "Bharat Agricultures ye machine Sambhal, Uttar Pradesh ki apni manufacturing unit mein banata hai. Kisan, FPO, vyapari aur mill — sabke liye setup adjust kiya ja sakta hai. Aapka anaaj kaunsa hai, ghante mein kitna dana saaf karna hai aur machine bijli se chalegi ya engine se, ye batayein aur hum sahi configuration suggest kar denge.",
    ],
    useCases: [
      "Gehun, dhan, sarson aur chana ki safai",
      "Mandi ya godown mein dana bhejne se pehle",
      "Rice mill aur flour mill ki pre-cleaning",
      "Beej ke liye dana alag karte waqt",
    ],
    benefits: [
      "Dhool aur halka kachra dane se alag ho jata hai",
      "Saaf dana storage mein zyada der tak theek rehta hai",
      "Anaaj ke hisaab se jaali badalne ki suvidha",
      "Rozana chalane ke liye seedha aur simple design",
    ],
    features: [
      {
        title: "Hawa aur jaali ka jodi",
        copy: "Blower halke kachre ko uda deta hai aur sieve bada kachra rok leta hai, isliye safai ek hi pass mein hoti hai.",
      },
      {
        title: "Badalne wali jaali",
        copy: "Gehun, dhan aur sarson ke daane alag size ke hote hain. Jaali badalkar wahi machine alag-alag fasal ke liye chalti hai.",
      },
      {
        title: "Mazboot fabricated body",
        copy: "Body aur frame local workshop conditions ko dhyan mein rakhkar banaye jaate hain, taaki machine rozana ke load mein tik paye.",
      },
    ],
    items: ["Cleaning sieve", "Blower fan", "Feeding hopper", "Discharge chute", "Drive assembly"],
    specs: [
      { label: "Model", value: "Aapke requirement ke hisaab se" },
      { label: "Capacity", value: "Anaaj aur setup par depend" },
      { label: "Power", value: "Bijli ya engine — aapki suvidha" },
      { label: "Material", value: "Fabricated steel body" },
      { label: "Price", value: "Quote par — seedha factory rate" },
    ],
    faqs: [
      {
        q: "Dust cleaner machine kin anaaj ke liye chalti hai?",
        a: "Aam taur par gehun, dhan, sarson, chana aur daliya jaise anaaj ke liye. Jaali badalkar setup adjust kiya jata hai. Aap kaunsi fasal saaf karte hain, ye batayein aur hum sahi jaali suggest kar denge.",
      },
      {
        q: "Dust cleaner machine ka rate kitna hota hai?",
        a: "Rate model, capacity, power source aur body ki banawat par depend karta hai. Hum seedha manufacturer hain, isliye beech ka commission nahi judta. Requirement batayein aur hum factory rate bhej denge.",
      },
      {
        q: "Machine bijli se chalti hai ya engine se?",
        a: "Dono option possible hain. Jahan bijli ka stable connection hai wahan motor theek rehta hai; khet ya dhan mandi mein jahan bijli nahi hai wahan engine option zyada kaam aata hai.",
      },
      {
        q: "Spare parts aur jaali alag se milengi?",
        a: "Haan. Jaali, blower parts aur drive components hum khud banate hain. Machine ke saath ek spare jaali rakhna hamesha behtar rehta hai, taaki fasal badalne par rukna na pade.",
      },
    ],
    image: "/products/Dust Cleaner at Work in the Field.png",
    imageAlt: "Bharat Agricultures dust cleaner working in the field",
    number: "01",
    category: "agricultural",
  },
  {
    slug: "paddy-cleaner-machine",
    name: "Paddy Cleaner",
    eyebrow: "Paddy Cleaner Machine Manufacturer",
    tagline: "Dhan ki safai, milling se pehle",
    description:
      "Paddy cleaner machine dhan se patte, bhusa, kankar aur halka kachra alag karti hai. Milling se pehle saaf dhan se broken rice kam hota hai.",
    metaTitle: "Paddy Cleaner Machine Manufacturer in India",
    metaDescription:
      "Paddy cleaner machine manufacturer in Sambhal, Uttar Pradesh. Dhan se patte, kankar aur halka kachra alag karein. Direct factory rate aur spare parts support.",
    intro: [
      "Dhan mandi se aata hai to uske saath patte, tana, kankar aur mitti ke dhele bhi aate hain. Agar ye kachra milling mein chala jaye to rice break hone ka chance badh jata hai aur machine par extra load padta hai. Paddy cleaner dhan ko halke aur bhaari kachre se alag karke agla process aasan banati hai.",
      "Hum ye machine Sambhal, Uttar Pradesh mein banate hain aur dhan ki variety, moisture aur required output ke hisaab se setup tune karte hain. Chhoti mill ho ya bada rice plant, aapki line ki capacity ke saath match karna zaroori hai — isliye pehle requirement samajhna, phir machine suggest karna.",
    ],
    useCases: [
      "Rice mill mein dhan entry par pre-cleaning",
      "Dhan mandi aur procurement centre",
      "Seed aur nursery ke liye dhan taiyar karna",
      "Custom milling ya job work units",
    ],
    benefits: [
      "Patte, tana aur halka kachra alag",
      "Kankar aur mitti ke dhele sieve par ruk jaate hain",
      "Milling se pehle dhan ek jaisa aur saaf",
      "Kam rukawat, aasan safai aur maintenance",
    ],
    features: [
      {
        title: "Do-stage screening",
        copy: "Bada kachra upar ki jaali par rukta hai aur dana neeche wali jaali se guzarta hai, isliye safai ka result consistent rehta hai.",
      },
      {
        title: "Hawa se halka kachra alag",
        copy: "Blower ki hawa patte aur bhusa alag karti hai — dhan bhaari hota hai isliye woh neeche ki taraf hi rehta hai.",
      },
      {
        title: "Milling line se match",
        copy: "Machine ka setup aapki mill ki capacity aur dhan ki variety ke hisaab se banaya jata hai, taaki line ke beech mein bottleneck na bane.",
      },
    ],
    items: ["Vibratory screen", "Aspiration fan", "Cleaning sieve", "Feed hopper", "Drive assembly"],
    specs: [
      { label: "Model", value: "Mill ki capacity ke hisaab se" },
      { label: "Capacity", value: "Dhan ki variety aur setup par depend" },
      { label: "Power", value: "Motor ya engine option" },
      { label: "Material", value: "Fabricated steel body" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "Paddy cleaner aur dust cleaner mein kya farak hai?",
        a: "Dust cleaner halke kachre par zyada kaam karta hai, jabki paddy cleaner dhan ke liye banaya jata hai jahan patte, tana aur kankar dono nikalne hote hain. Dono ka screening setup alag hota hai.",
      },
      {
        q: "Kya machine dhan ki moisture ke saath bhi kaam karegi?",
        a: "Zyada geela dhan kisi bhi cleaner par jaali choke kar sakta hai. Isliye hum aapki fasal ki condition samajhkar jaali aur speed suggest karte hain, taaki rukawat kam ho.",
      },
      {
        q: "Ek machine mein kitni capacity milti hai?",
        a: "Capacity aapki zaroorat par depend karti hai. Ghante mein kitna dhan process karna hai ye batayein, hum us range ka setup suggest karenge.",
      },
      {
        q: "Installation aur commissioning mein help milegi?",
        a: "Haan. Machine ki setting, belt tension aur jaali ka selection hum explain karte hain. Aapke mill ke layout ke hisaab se placement bhi discuss kiya ja sakta hai.",
      },
    ],
    image: "/products/Paddy Cleaner.png",
    imageAlt: "Bharat Agricultures paddy cleaner machine",
    number: "02",
    category: "agricultural",
  },
  {
    slug: "disc-harrow",
    name: "Disc Harrow",
    eyebrow: "Disc Harrow Manufacturer in India",
    tagline: "Zameen ki tayari, gehri aur barabar",
    description:
      "Disc harrow se khad, fasal avshesh aur sakhi mitti mix hoti hai. Primary aur secondary tillage ke liye mazboot frame aur disc gangs.",
    metaTitle: "Disc Harrow Manufacturer in India | Sambhal, UP",
    metaDescription:
      "Disc harrow manufacturer in Sambhal, Uttar Pradesh. Khat, fasal avshesh aur sakhi mitti mix karne ke liye heavy-duty disc harrow. Direct factory price.",
    intro: [
      "Jab khet mein pichhli fasal ka thaan, khad ya sakhi mitti ho, to sirf hal se kaam nahi chalta. Disc harrow ke ghoomte disc mitti ko kaat kar palat dete hain, jisse khad aur fasal avshesh neeche mil jaate hain aur upar ki satah barabar hoti hai.",
      "Ye implement kheti ki primary aur secondary dono tayari mein kaam aata hai. Hum disc harrow Sambhal, Uttar Pradesh mein banate hain — frame ki mazbooti, disc ki quality aur bearing ka fit aisa rakha jata hai ki machine long run mein seedhi chale.",
    ],
    useCases: [
      "Khet ki pehli tayari aur sakhi mitti todna",
      "Fasal avshesh aur khad mitti mein milana",
      "Bhoosa ya parali wale khet ko agle season ke liye taiyar karna",
      "Bagwani aur bade khet ki secondary tillage",
    ],
    benefits: [
      "Sakhi mitti aur pichhli fasal ke thaan todta hai",
      "Khad aur avshesh mitti mein mix karta hai",
      "Tractor ke saath match karke size diya jata hai",
      "Mazboot frame, kam rukawat aur aasan bearing change",
    ],
    features: [
      {
        title: "Heavy-duty disc gangs",
        copy: "Disc gangs ka angle aur spacing mitti ki condition ke hisaab se set hota hai, taaki har pass mein barabar kaam ho.",
      },
      {
        title: "Mazboot frame",
        copy: "Frame aise steel se banaya jata hai jo khet ke jhatke aur pathar wali zameen ko jhel sake.",
      },
      {
        title: "Service-friendly bearings",
        copy: "Bearing aur hub aise lagaye jaate hain ki greasing aur replacement ke liye baar-baar poora gang kholna na pade.",
      },
    ],
    items: ["Disc gangs", "Frame", "Bearing hub", "Hitch assembly", "Scraper"],
    specs: [
      { label: "Model", value: "Tractor HP ke hisaab se" },
      { label: "Working width", value: "Aapke khet aur tractor ke hisaab se" },
      { label: "Disc", value: "Boron / carbon steel options" },
      { label: "Hitch", value: "Standard three-point linkage" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "Disc harrow kis tractor ke liye theek rahega?",
        a: "Tractor ka HP, khet ka size aur mitti ka type — teeno dekhkar size tay hota hai. Apna tractor model batayein, hum matching width suggest karenge.",
      },
      {
        q: "Disc harrow aur cultivator mein kya antar hai?",
        a: "Cultivator ki tines mitti ko todti hain, jabki disc harrow ghoomte discs se mitti ko kaat kar palat deta hai. Sakhi mitti aur fasal avshesh ke liye disc harrow zyada asar dikhata hai.",
      },
      {
        q: "Disc aur bearing kitni jaldi ghiste hain?",
        a: "Ye mitti ke type aur chalane ke tareeke par depend karta hai. Pathar wali zameen mein disc jaldi ghiste hain. Hum wearing parts alag se supply karte hain taaki kaam na ruke.",
      },
      {
        q: "Kya harrow ke baad land leveler zaroori hai?",
        a: "Zaroori nahi, lekin agar aap seedbed bilkul barabar chahte hain to harrow ke baad light leveling achha result deti hai. Hum dono implement ek hi jagah se de sakte hain.",
      },
    ],
    image: "/products/DIsc Harrow.png",
    imageAlt: "Bharat Agricultures disc harrow for field preparation",
    number: "03",
    category: "agricultural",
  },
  {
    slug: "agricultural-harrow-machine",
    name: "Harrow",
    eyebrow: "Agricultural Harrow Manufacturer in India",
    tagline: "Seedbed barabar, beej ki growth behtar",
    description:
      "Tine harrow mitti ko bhusa bana kar seedbed taiyar karta hai. Beej aur khad barabar failte hain aur paani root zone tak pahunchta hai.",
    metaTitle: "Agricultural Harrow Manufacturer in India | Sambhal, UP",
    metaDescription:
      "Agricultural harrow manufacturer in Sambhal, Uttar Pradesh. Seedbed preparation ke liye tine harrow — mitti bhusa, beej aur khad barabar. Factory rate par.",
    intro: [
      "Beej tabhi achha ugta hai jab mitti uske around tight ho aur paani root zone tak pahunche. Bade dhele aur gaps seedbed kharab kar dete hain. Harrow mitti ko todkar bhusa banata hai aur satah ko itna barabar karta hai ki beej ki depth ek jaisi rahe.",
      "Hum agricultural harrow apni unit mein banate hain — frame, tines aur hitch ka fit aisa hota hai ki implement tractor ke peeche seedha chale. Harrow halka kaam nahi hai; isliye material aur welding par dhyan diya jata hai, taaki baar-baar repair na karna pade.",
    ],
    useCases: [
      "Gehun aur dhan ki sowing se pehle seedbed",
      "Sabzi aur dalhan ke liye bareek mitti",
      "Disc harrow ke baad satah barabar karna",
      "Khad ko mitti mein barabar milana",
    ],
    benefits: [
      "Mitti bhusa hokar beej ko cover karti hai",
      "Beej aur khad ka distribution barabar",
      "Paani root zone tak pahunchta hai, waste kam",
      "Halka draft, chhote tractor par bhi kaam",
    ],
    features: [
      {
        title: "Spring / rigid tine options",
        copy: "Mitti mein pathar zyada ho to spring tine shock absorb karti hai; normal zameen ke liye rigid tine zyada simple aur mazboot rehti hai.",
      },
      {
        title: "Barabar spacing",
        copy: "Tines ki spacing aisi rakhi jati hai ki koi patti chhoote na — isliye ek hi pass mein poora khet cover hota hai.",
      },
      {
        title: "Adjustable depth",
        copy: "Depth aapki mitti aur fasal ke hisaab se set ki ja sakti hai, taaki zyada gehra jaakar tractor par load na aaye.",
      },
    ],
    items: ["Tine section", "Main frame", "Clamp and bolt set", "Hitch assembly", "Depth wheel"],
    specs: [
      { label: "Model", value: "Tractor aur khet ke hisaab se" },
      { label: "Tine type", value: "Rigid / spring — aapki mitti ke hisaab se" },
      { label: "Working width", value: "Tractor HP par depend" },
      { label: "Material", value: "Steel frame with replaceable tines" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "Harrow aur cultivator ek hi cheez hai?",
        a: "Kaafi had tak kaam milta hai, lekin cultivator gehri jutai ke liye bhaari hota hai aur harrow halki, bareek seedbed banane ke liye. Kuch kisan dono use karte hain — pehle cultivator, phir harrow.",
      },
      {
        q: "Kitne pass lagane chahiye?",
        a: "Mitti aur previous crop ke hisaab se do se teen pass kaafi hote hain. Pehla pass cross mein aur agla seedha chalane se satah zyada barabar hoti hai.",
      },
      {
        q: "Tines toot jayein to kya karein?",
        a: "Tines replaceable hain aur hum spare parts supply karte hain. Toota tine chalate rehna frame par extra load dalta hai, isliye turant badalna behtar hai.",
      },
      {
        q: "Kya harrow se beej seedha bo sakte hain?",
        a: "Harrow seedbed taiyar karta hai, beej nahi bona. Sowing ke liye seed drill ya desi method use hota hai. Hum seedbed ke baad ki machinery bhi suggest kar sakte hain.",
      },
    ],
    image: "/products/Harrow.png",
    imageAlt: "Bharat Agricultures harrow for seedbed preparation",
    number: "04",
    category: "agricultural",
  },
  {
    slug: "hawa-thresher-machine",
    name: "Hawa Thresher",
    eyebrow: "Hawa Thresher Machine Manufacturer",
    tagline: "Halki fasal, aasan threshing",
    description:
      "Hawa thresher chhoti fasal aur kam volume ke liye bana hai. Drum aur hawa ka setup dane ko bhusa se alag karta hai, bina zyada toot-phoot ke.",
    metaTitle: "Hawa Thresher Machine Manufacturer | Sambhal, UP",
    metaDescription:
      "Hawa thresher machine manufacturer in Sambhal, Uttar Pradesh. Chhoti fasal ke liye halka aur aasan threshing solution. Direct factory rate aur spare support.",
    intro: [
      "Bade thresher har jagah fit nahi hote. Jahan fasal ka area chhota hai, khet tak bade engine ka jaana mushkil hai, ya jahan kisan apne khet mein hi threshing karna chahta hai — wahan hawa thresher ka halka setup zyada practical rehta hai.",
      "Hawa thresher mein dana drum se nikalta hai aur hawa ka flow bhusa aur halka kachra alag karta hai. Hum ise Sambhal, Uttar Pradesh mein banate hain aur fasal ke hisaab se drum ki speed aur hawa ka opening set karte hain, taaki dana zyada na toote.",
    ],
    useCases: [
      "Chhoti aur marginal kheti",
      "Gehun, sarson aur chana ki threshing",
      "Khet mein hi fasal nikalne ka kaam",
      "Contractor ke liye halka, aasani se shift hone wala setup",
    ],
    benefits: [
      "Halka setup, aasani se ek jagah se doosri jagah",
      "Kam power mein fasal nikalna",
      "Hawa se bhusa alag, dana saaf",
      "Kam parts, aasan maintenance",
    ],
    features: [
      {
        title: "Hawa ka adjustable flow",
        copy: "Fasal halki ho ya bhaari, hawa ka flow adjust kiya ja sakta hai taaki dana udkar bahar na nikle.",
      },
      {
        title: "Simple drum design",
        copy: "Drum aur concave ka gap fasal ke hisaab se set hota hai — isse dana kam tootta hai aur threshing jaldi hoti hai.",
      },
      {
        title: "Chhota footprint",
        copy: "Machine ki width aur length aisi rakhi jati hai ki chhote khet aur tight passage mein bhi aa jaye.",
      },
    ],
    items: ["Threshing drum", "Blower assembly", "Concave", "Sieve", "Drive pulley"],
    specs: [
      { label: "Model", value: "Fasal aur volume ke hisaab se" },
      { label: "Power", value: "Tractor PTO ya motor" },
      { label: "Drum", value: "Fasal ke hisaab se setup" },
      { label: "Material", value: "Fabricated steel body" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "Hawa thresher aur normal thresher mein farak kya hai?",
        a: "Hawa thresher halka aur chhote volume ke liye banta hai, jahan hawa se safai ka role zyada hota hai. Bade multi-crop thresher mein zyada capacity aur alag cleaning system hota hai.",
      },
      {
        q: "Kya isse makka bhi thresh ho sakta hai?",
        a: "Makka ke liye alag drum aur gap chahiye hota hai. Isliye makka ke liye hum maize thresher suggest karte hain — sahi machine se dana kam tootta hai.",
      },
      {
        q: "Machine ko chalane ke liye kitni power chahiye?",
        a: "Power aapki fasal aur volume par depend karti hai. Apna tractor model ya motor availability batayein, hum matching setup bata denge.",
      },
      {
        q: "Kya dana tootne ka dar kam hai?",
        a: "Drum speed aur concave gap sahi set hone par tootna kaafi kam ho jata hai. Hum commissioning ke waqt ye setting aapki fasal ke hisaab se explain karte hain.",
      },
    ],
    image: "/products/Hawa Thresher.png",
    imageAlt: "Bharat Agricultures Hawa Thresher machine",
    number: "05",
    category: "agricultural",
  },
  {
    slug: "agricultural-thresher-machine",
    name: "Thresher",
    eyebrow: "Agricultural Thresher Machine Manufacturer",
    tagline: "Fasal nikalo, waqt bachao",
    description:
      "Multi-crop agricultural thresher gehun, dhan aur dalhan ke liye. Drum, concave aur cleaning sieve ka setup fasal ke hisaab se adjust hota hai.",
    metaTitle: "Agricultural Thresher Machine Manufacturer in India",
    metaDescription:
      "Agricultural thresher machine manufacturer in Sambhal, Uttar Pradesh. Gehun, dhan aur dalhan ke liye multi-crop thresher. Factory rate aur spare parts support.",
    intro: [
      "Threshing ka waqt short hota hai aur mausam ka bharosa nahi hota. Agar machine beech mein ruk jaye ya dana zyada tootne lage to poori fasal ka nuksan ho sakta hai. Isliye thresher ka setup fasal ke hisaab se sahi hona chahiye — sirf bada drum kaafi nahi hota.",
      "Hum multi-crop thresher Sambhal, Uttar Pradesh mein banate hain. Drum ki speed, concave gap, sieve aur blower ka combination aise set kiya jata hai ki gehun, dhan aur dalhan teeno par kaam ho. Aap apni main fasal batayein, hum uske hisaab se setup suggest karenge.",
    ],
    useCases: [
      "Gehun aur dhan ki bade volume mein threshing",
      "Chana, sarson aur dalhan",
      "Contract threshing aur custom hiring",
      "FPO aur kisan samuh ke shared use ke liye",
    ],
    benefits: [
      "Ek machine se kai fasal",
      "Drum aur sieve ka adjustable setup",
      "Bhusa alag, dana saaf",
      "Mazboot body, lambe season ke liye",
    ],
    features: [
      {
        title: "Multi-crop drum setup",
        copy: "Drum speed aur concave gap fasal ke hisaab se badla ja sakta hai, isliye ek hi machine se gehun aur dalhan dono nikalti hai.",
      },
      {
        title: "Cleaning sieve + blower",
        copy: "Bhusa aur halka kachra hawa se alag hota hai aur dana sieve se saaf hokar bahar aata hai.",
      },
      {
        title: "Service access",
        copy: "Belt, pulley aur bearing tak pahunchne ke liye panels aise rakhe jaate hain ki season ke beech mein maintenance jaldi ho jaye.",
      },
    ],
    items: ["Threshing drum", "Concave", "Cleaning sieve", "Blower fan", "Drive and belt set"],
    specs: [
      { label: "Model", value: "Fasal aur tractor ke hisaab se" },
      { label: "Power", value: "Tractor PTO / engine" },
      { label: "Suitable crops", value: "Gehun, dhan, dalhan" },
      { label: "Material", value: "Fabricated steel body" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "Ek thresher se kitni fasal nikal sakti hai?",
        a: "Multi-crop setup se gehun, dhan aur kai dalhan nikalti hain. Har fasal ke liye drum speed aur gap thoda alag hota hai — hum ye setting explain karte hain.",
      },
      {
        q: "Dhan ke liye alag thresher chahiye?",
        a: "Zaroori nahi, lekin dhan geela hota hai aur uske liye drum speed kam rakhi jati hai. Agar aap zyada dhan thresh karte hain to hum usi hisaab se setup tune karte hain.",
      },
      {
        q: "Machine ka maintenance kaise karein?",
        a: "Rozana chalane se pehle belt tension, greasing points aur drum ke andar ka kachra check karein. Season ke baad bearing aur sieve ki condition zaroor dekhein.",
      },
      {
        q: "Kya spare parts ready milte hain?",
        a: "Haan, drum parts, sieve, belt aur bearing hum supply karte hain. Season se pehle ek set spare rakhna behtar rehta hai.",
      },
    ],
    image: "/products/Thresher.png",
    imageAlt: "Bharat Agricultures agricultural thresher machine",
    number: "06",
    category: "agricultural",
  },
  {
    slug: "maize-thresher-machine",
    name: "Maize Thresher",
    eyebrow: "Maize Thresher Machine Manufacturer",
    tagline: "Makka alag, dana salaamat",
    description:
      "Maize thresher makka ke bhutte se dana alag karta hai. Drum aur concave ka gap makke ke size ke hisaab se set hota hai, taaki dana kam toote.",
    metaTitle: "Maize Thresher Machine Manufacturer in India",
    metaDescription:
      "Maize thresher machine manufacturer in Sambhal, Uttar Pradesh. Makka shelling ke liye drum aur concave ka sahi setup. Direct factory rate aur spare support.",
    intro: [
      "Makka ki threshing gehun se alag hoti hai. Bhutte bade hote hain, dana chipka hua hota hai aur zyada speed par dana toot kar quality kharab ho jati hai. Isliye maize thresher ka drum, concave aur feeding system makke ke hisaab se design karna padta hai.",
      "Hum maize thresher Sambhal, Uttar Pradesh mein banate hain. Feeding ke waqt bhutte ek seedhe flow mein jaate hain, drum dana nikalta hai aur bhusa alag hota hai. Aap makke ki variety aur volume batayein, hum setup usi hisaab se karenge.",
    ],
    useCases: [
      "Makka ki shelling aur threshing",
      "Seed production aur quality dana nikalna",
      "Poultry aur cattle feed ke liye makka taiyar karna",
      "MandI aur trader ke liye bulk cleaning",
    ],
    benefits: [
      "Bhutte se dana aasani se alag",
      "Drum gap se dana tootna kam",
      "Bhusa aur kachra alag",
      "Season ke pressure mein tez kaam",
    ],
    features: [
      {
        title: "Makke ke liye drum geometry",
        copy: "Drum aur concave ka gap makke ke dane ke size par set hota hai, isliye dana nikalte waqt zyada crush nahi hota.",
      },
      {
        title: "Smooth feeding",
        copy: "Feeding chute ka angle aisa rakha jata hai ki bhutte ruken na aur machine par ek jaisa load rahe.",
      },
      {
        title: "Cleaning section",
        copy: "Dana ke saath aane wala bhusa aur halka kachra blower aur sieve se alag hota hai, taaki seedha bag ya mandi ke liye taiyar ho.",
      },
    ],
    items: ["Threshing drum", "Concave", "Feeding chute", "Cleaning sieve", "Blower assembly"],
    specs: [
      { label: "Model", value: "Makke ke volume ke hisaab se" },
      { label: "Power", value: "Tractor PTO / motor" },
      { label: "Suitable crop", value: "Maize / makka" },
      { label: "Material", value: "Fabricated steel body" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "Maize thresher se dana kitna tootta hai?",
        a: "Sahi drum speed aur gap par tootna kaafi kam hota hai. Zyada speed se dana crack hota hai, isliye hum commissioning par setting samjhaate hain.",
      },
      {
        q: "Kya ye machine gehun ke liye bhi chalegi?",
        a: "Maize thresher makke ke liye tune hota hai. Gehun ya dhan ke liye alag drum aur sieve setup chahiye hota hai, isliye uske liye agricultural thresher behtar rehta hai.",
      },
      {
        q: "Makke mein nami ho to kya karein?",
        a: "Zyada nami mein dana chipakta hai aur jaali block hoti hai. Fasal ko thoda sukhakar thresh karein, ya hum aapki condition ke hisaab se jaali suggest karenge.",
      },
      {
        q: "Kya machine aa kar setup karte hain?",
        a: "Hum machine ki assembly aur basic setting guide karte hain. Aapke location ke hisaab se installation support discuss kiya ja sakta hai.",
      },
    ],
    image: "/products/Maize thresher.png",
    imageAlt: "Bharat Agricultures maize thresher machine",
    number: "07",
    category: "agricultural",
  },
  {
    slug: "plate-land-leveler",
    name: "Plate Land Leveler",
    eyebrow: "Plate Land Leveler Manufacturer",
    tagline: "Khet barabar, paani bachat",
    description:
      "Plate land leveler khet ki satah barabar karta hai, jisse sinchai ka paani ek jaisa failta hai aur low spots mein nahi rukta.",
    metaTitle: "Plate Land Leveler Manufacturer in India | Sambhal, UP",
    metaDescription:
      "Plate land leveler manufacturer in Sambhal, Uttar Pradesh. Khet barabar karein, paani ki bachat karein. Mazboot plate aur adjustable blade ke saath.",
    intro: [
      "Khet agar ooncha-neecha hai to paani ek jagah bhar jata hai aur doosri jagah sookhi reh jati hai. Isse beej ka ugna ek jaisa nahi hota aur sinchai ka kharcha badh jata hai. Plate land leveler mitti ko kaat kar low spots mein daalta hai aur satah barabar karta hai.",
      "Ye kaam ek baar mein nahi hota — do-teen passes lagte hain. Isliye machine ka blade, plate aur hitch mazboot hona chahiye. Hum plate land leveler Sambhal, Uttar Pradesh mein banate hain, tractor ke HP ke hisaab se size aur plate ki thickness rakhte hain.",
    ],
    useCases: [
      "Sinchai wale khet ko barabar karna",
      "Naye khet ki pehli leveling",
      "Paani ke rukne wale low spots theek karna",
      "Bade khet ko chhote plots mein baantne se pehle",
    ],
    benefits: [
      "Paani ek jaisa failta hai, waste kam",
      "Beej ka ugna barabar",
      "Tractor ka draft kam, fuel bachat",
      "Mazboot plate, lambe use ke liye",
    ],
    features: [
      {
        title: "Mazboot leveling plate",
        copy: "Plate ki thickness aur width tractor ke HP ke hisaab se rakhi jati hai, taaki mitti ka pressure jhel sake.",
      },
      {
        title: "Adjustable blade angle",
        copy: "Blade ka angle badalkar mitti ko kaatna ya shift karna set kiya ja sakta hai — halki aur bhaari leveling dono possible.",
      },
      {
        title: "Stable hitch",
        copy: "Hitch aise banaya jata hai ki leveling ke waqt machine seedhi chale aur tractor par side load kam pade.",
      },
    ],
    items: ["Leveling plate", "Cutting blade", "Main frame", "Hitch assembly", "Depth control"],
    specs: [
      { label: "Model", value: "Tractor HP ke hisaab se" },
      { label: "Working width", value: "Khet aur tractor par depend" },
      { label: "Plate", value: "Mazboot steel plate" },
      { label: "Hitch", value: "Three-point linkage" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "Land leveling ke liye kitne pass lagte hain?",
        a: "Khet kitna ooncha-neecha hai uspar depend karta hai. Aam taur par do se teen pass lagte hain — pehla bada farak theek karta hai, agla finish deta hai.",
      },
      {
        q: "Kya ye laser leveler ki tarah kaam karta hai?",
        a: "Nahi. Ye tractor-mounted plate leveler hai jo mechanical leveling karta hai. Laser leveling se zyada precision milti hai, lekin chhote aur medium khet ke liye plate leveler kaafi practical rehta hai.",
      },
      {
        q: "Plate land leveler aur 2 in 1 land leveler mein kya farak hai?",
        a: "Plate leveler sirf leveling par focus karta hai. 2 in 1 model mein leveling ke saath mitti shift karne ka doosra kaam bhi hota hai — dono ka use aapke khet ki condition par depend karta hai.",
      },
      {
        q: "Kya machine pathar wali zameen par chalegi?",
        a: "Chhote pathar tak chal jati hai, lekin bade pathar blade aur plate par load dalte hain. Aise khet mein pehle pathar nikalna behtar rehta hai.",
      },
    ],
    image: "/products/Plate Land Leveler.png",
    imageAlt: "Bharat Agricultures plate land leveler",
    number: "08",
    category: "agricultural",
  },
  {
    slug: "2-in-1-land-leveler",
    name: "2 in 1 Land Leveler",
    eyebrow: "2 in 1 Land Leveler Manufacturer",
    tagline: "Do kaam, ek implement",
    description:
      "2 in 1 land leveler ek hi implement mein mitti shift karta hai aur satah barabar karta hai — khet ki tayari ka waqt aur fuel bachta hai.",
    metaTitle: "2 in 1 Land Leveler Manufacturer in India",
    metaDescription:
      "2 in 1 land leveler manufacturer in Sambhal, Uttar Pradesh. Ek implement mein mitti shifting aur leveling. Tractor ke hisaab se size, direct factory rate.",
    intro: [
      "Kai kheton mein sirf leveling kaafi nahi hoti. Kahin mitti zyada hai to kahin gap — aise mein pehle mitti idhar-udhar shift karni padti hai, phir satah barabar karni padti hai. Do alag implement lagane se waqt aur diesel dono lagte hain.",
      "2 in 1 land leveler ye dono kaam ek hi unit mein karta hai. Aage ka section mitti ko kaat kar shift karta hai aur peeche ka hissa satah ko finish karta hai. Hum ise Sambhal, Uttar Pradesh mein banate hain aur tractor ke HP ke hisaab se size dete hain.",
    ],
    useCases: [
      "Oonche-neeche khet ki leveling",
      "Mitti ko ek jagah se doosri jagah shift karna",
      "Plot banane se pehle satah set karna",
      "Bade khet mein waqt aur diesel bachana",
    ],
    benefits: [
      "Ek implement, do kaam",
      "Leveling ke passes kam, fuel bachat",
      "Mitti shifting aur finishing ek saath",
      "Tractor ke hisaab se matching size",
    ],
    features: [
      {
        title: "Dual-section design",
        copy: "Aage ka blade mitti kaatta hai aur peeche ka plate use barabar karta hai, isliye ek pass mein dono kaam ho jate hain.",
      },
      {
        title: "Adjustable sections",
        copy: "Dono section ki depth alag-alag set ki ja sakti hai — jahan sirf leveling chahiye wahan load kam kiya ja sakta hai.",
      },
      {
        title: "Strong frame",
        copy: "Frame aur joints bhaari mitti ke pressure ke liye banaye jaate hain, taaki baar-baar welding na karani pade.",
      },
    ],
    items: ["Front blade", "Rear leveling plate", "Main frame", "Hitch assembly", "Depth adjusters"],
    specs: [
      { label: "Model", value: "Tractor HP ke hisaab se" },
      { label: "Working width", value: "Khet aur tractor par depend" },
      { label: "Sections", value: "Blade + leveling plate" },
      { label: "Hitch", value: "Three-point linkage" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "2 in 1 leveler normal plate leveler se better hai?",
        a: "Agar aapke khet mein mitti shifting bhi karni hai to 2 in 1 zyada practical hai. Sirf halki leveling ke liye normal plate leveler kaafi aur sasta rehta hai.",
      },
      {
        q: "Kaunse tractor par ye chalega?",
        a: "Tractor ka HP aur khet ka size dekhkar size tay hota hai. Apna tractor model batayein, hum matching width suggest karenge.",
      },
      {
        q: "Kya ek hi pass mein leveling ho jati hai?",
        a: "Ek pass mein bada farak theek ho jata hai, lekin final finish ke liye do passes lagana behtar rehta hai. Ye khet ki condition par depend karta hai.",
      },
      {
        q: "Maintenance kya dekhna hota hai?",
        a: "Blade ki sharpness, bolt tightness aur plate ki condition season mein do baar check karein. Ghiste blade ko replace karna aasan hai.",
      },
    ],
    image: "/products/2 in 1 land leveler.png",
    imageAlt: "Bharat Agricultures 2 in 1 land leveler",
    number: "09",
    category: "agricultural",
  },
  {
    slug: "tractor-cultivator",
    name: "Cultivator",
    eyebrow: "Cultivator Manufacturer in India",
    tagline: "Jutai ka pehla step",
    description:
      "Tractor cultivator sakhi mitti todta hai aur khet ko sowing ke liye taiyar karta hai. Spring aur rigid tine options, tractor ke hisaab se size.",
    metaTitle: "Tractor Cultivator Manufacturer in India | Sambhal, UP",
    metaDescription:
      "Tractor cultivator manufacturer in Sambhal, Uttar Pradesh. Sakhi mitti todne aur seedbed taiyari ke liye heavy-duty cultivator. Direct factory rate aur spares.",
    intro: [
      "Fasal katne ke baad khet ki mitti sakhi ho jati hai. Agar seedha beej daal diya jaye to root ko neeche jaane ki jagah nahi milti aur ugna kam ho jata hai. Cultivator ki tines mitti ko todti hain aur soil ko itna loose karti hain ki beej aur khad andar chala jaye.",
      "Hum tractor cultivator Sambhal, Uttar Pradesh mein banate hain. Tine count, frame ki width aur hitch ka angle aisa rakha jata hai ki implement tractor ke saath seedha chale aur draft kam pade. Spring tine wala option pathar wali zameen ke liye behtar rehta hai.",
    ],
    useCases: [
      "Fasal katne ke baad khet ki pehli jutai",
      "Sakhi mitti todna",
      "Sowing se pehle seedbed taiyar karna",
      "Khad ko mitti mein milana",
    ],
    benefits: [
      "Mitti loose hokar beej ko jagah milti hai",
      "Draft kam, tractor par load kam",
      "Spring tine se pathar ka shock absorb",
      "Tines replaceable, maintenance aasan",
    ],
    features: [
      {
        title: "Rigid aur spring tine",
        copy: "Normal mitti ke liye rigid tine mazboot rehti hai; pathar wali zameen ke liye spring tine shock leti hai aur tine tootne ka chance kam hota hai.",
      },
      {
        title: "Strong main frame",
        copy: "Frame ko aise section se banaya jata hai jo gehri jutai mein bhi mudna na pade.",
      },
      {
        title: "Depth adjustment",
        copy: "Depth wheel ya linkage se jutai ki gehrai set ki ja sakti hai — fasal aur mitti ke hisaab se.",
      },
    ],
    items: ["Tines", "Main frame", "Clamps and bolts", "Hitch assembly", "Depth wheel"],
    specs: [
      { label: "Model", value: "Tractor HP ke hisaab se" },
      { label: "Tine type", value: "Rigid / spring" },
      { label: "Working width", value: "Tractor aur khet par depend" },
      { label: "Material", value: "Steel frame with replaceable tines" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "Cultivator aur disc harrow kab use karein?",
        a: "Pehli jutai ke liye cultivator theek hai. Agar fasal avshesh zyada hai ya mitti sakhi hai to disc harrow zyada asar deta hai. Kai kisan pehle cultivator, phir harrow use karte hain.",
      },
      {
        q: "Kitni tine wala cultivator lena chahiye?",
        a: "Tine count tractor ke HP aur khet ke size par depend karta hai. Zyada tine ka matlab hamesha better nahi — tractor ka load bhi dekhna zaroori hai.",
      },
      {
        q: "Spring tine ke fayde kya hain?",
        a: "Pathar ya hard layer par spring tine jhuk kar shock absorb karti hai, isliye tine aur frame par sudden load kam padta hai. Normal mitti mein rigid tine sasti aur simple rehti hai.",
      },
      {
        q: "Tine ghis jaye to kya karein?",
        a: "Tines replaceable hain. Ghiste tine se jutai ki depth kam ho jati hai aur draft badh jata hai, isliye time par badalna behtar hai.",
      },
    ],
    image: "/products/cultivator.png",
    imageAlt: "Bharat Agricultures tractor cultivator",
    number: "10",
    category: "agricultural",
  },

  // ==========================================================
  // BRICK KILN MACHINERY
  // ==========================================================
  {
    slug: "pugmill-machine",
    name: "Pugmill Machine",
    eyebrow: "Pugmill Machine Manufacturer in India",
    tagline: "Mitti mix, eent strong",
    description:
      "Pugmill machine mitti, paani aur additives ko barabar mix karta hai. Brick kiln ke liye consistent clay taiyar hoti hai, jisse eent ki quality ek jaisi rehti hai.",
    metaTitle: "Pugmill Machine Manufacturer in India | Brick Kiln",
    metaDescription:
      "Pugmill machine manufacturer in Sambhal, Uttar Pradesh. Brick kiln ke liye clay mixing — mitti, paani aur additives ka barabar mix. Direct factory rate.",
    intro: [
      "Eent ki quality mitti par depend karti hai, lekin usse bhi zyada is baat par ki mitti kitni barabar mix hui hai. Agar clay mein sookhe dhele reh jayein to eent mein crack aata hai aur firing ke baad weak spot ban jata hai. Pugmill machine mitti ko paani ke saath mila kar ek jaisa clay banati hai.",
      "Bharat Agricultures brick kiln ke liye pugmill machine Sambhal, Uttar Pradesh mein banata hai. Mixing chamber, shafts aur blades ka design kiln ki daily requirement ke hisaab se rakha jata hai. Aapki mitti ka type aur production ka volume batayein, hum sahi size suggest karenge.",
    ],
    useCases: [
      "Brick kiln mein clay mixing",
      "Mitti, paani aur additives ka uniform mix",
      "Manual mixing ki jagah machine se consistent output",
      "Eent banane se pehle clay taiyar karna",
    ],
    benefits: [
      "Clay ek jaisi mix hoti hai",
      "Mixing ka waqt aur labour kam",
      "Eent mein crack aur weak spot kam",
      "Mazboot blades, aasan replacement",
    ],
    features: [
      {
        title: "Twin-shaft mixing",
        copy: "Do shafts par lage blades mitti ko utha kar mix karte hain, isliye chamber ke corner mein bhi sookha clay nahi rehta.",
      },
      {
        title: "Water control",
        copy: "Paani ka flow control karke clay ki consistency set ki ja sakti hai — zyada paani se eent sikudti hai, kam paani se crack aata hai.",
      },
      {
        title: "Service-friendly build",
        copy: "Blades aur liners ghisne wale parts hain; inhe khol kar badalna aasan rakha jata hai taaki production zyada der ruk na paye.",
      },
    ],
    items: ["Mixing chamber", "Twin shafts", "Mixing blades", "Drive unit", "Discharge gate"],
    specs: [
      { label: "Model", value: "Kiln ki production ke hisaab se" },
      { label: "Capacity", value: "Daily requirement par depend" },
      { label: "Power", value: "Electric motor / diesel engine" },
      { label: "Material", value: "Fabricated steel with wear liners" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "Pugmill machine ka kaam kya hota hai?",
        a: "Ye mitti, paani aur zaroorat ke additives ko barabar mix karke brick banane ke liye clay taiyar karti hai. Sahi mix se eent ki strength aur finish dono behtar hote hain.",
      },
      {
        q: "Kiln ke liye kaunsi capacity lena chahiye?",
        a: "Aapki daily eent production, mitti ka type aur available power dekhkar capacity tay hoti hai. Hum aapke target output ke hisaab se size suggest karte hain.",
      },
      {
        q: "Blades kitni jaldi ghiste hain?",
        a: "Mitti mein sand aur grit zyada ho to blades jaldi ghiste hain. Hum wear-resistant blades aur spare set ka option dete hain, taaki season mein rukawat na ho.",
      },
      {
        q: "Kya machine ke saath installation milega?",
        a: "Hum assembly aur basic commissioning guidance dete hain. Aapke kiln site ke layout ke hisaab se placement aur drive connection discuss kiya ja sakta hai.",
      },
    ],
    image: "/products/pugmill machine.png",
    imageAlt: "Bharat Agricultures pugmill machine for brick kilns",
    number: "11",
    category: "brick-kiln",
  },
  {
    slug: "id-fan-for-brick-kiln",
    name: "ID Fan",
    eyebrow: "ID Fan Manufacturer for Brick Kiln",
    tagline: "Airflow control, behtar firing",
    description:
      "ID fan brick kiln ka induced draught control karta hai. Sahi airflow se firing barabar hoti hai, fuel bachta hai aur dhuen ka rasta theek rehta hai.",
    metaTitle: "ID Fan Manufacturer for Brick Kiln | Sambhal, UP",
    metaDescription:
      "ID fan manufacturer for brick kiln in Sambhal, Uttar Pradesh. Induced draught fan se firing control, fuel bachat aur consistent airflow. Factory rate par.",
    intro: [
      "Brick kiln mein firing tab theek hoti hai jab hawa ka flow control mein rahe. Zyada draught se fuel jaldi jal jata hai aur eent ke kuch hisse zyada pak jaate hain; kam draught se firing slow reh jati hai aur dhuaan rukta hai. ID fan yahi airflow manage karta hai.",
      "Hum brick kiln ke liye ID fan Sambhal, Uttar Pradesh mein banate hain. Fan housing, impeller aur shaft ka balancing aise kiya jata hai ki lambe chalane par vibration kam rahe. Aapke kiln ka size aur duct layout batayein, hum matching fan suggest karenge.",
    ],
    useCases: [
      "Brick kiln ka induced draught system",
      "Firing chamber se dhuaan nikalna",
      "Airflow aur temperature control",
      "Existing kiln mein fan replacement",
    ],
    benefits: [
      "Firing zyada consistent",
      "Fuel ki bachat",
      "Dhuen ka smooth exhaust",
      "Kam vibration, lambe chalane ke liye",
    ],
    features: [
      {
        title: "Balanced impeller",
        copy: "Impeller ko balance karke lagaya jata hai, isliye high speed par bhi fan housing se rubbing aur vibration kam rehta hai.",
      },
      {
        title: "Mazboot housing",
        copy: "Housing ki plate thickness aur welding aise rakhe jaate hain ki garm hawa aur dust ke saath bhi shape bani rahe.",
      },
      {
        title: "Bearing protection",
        copy: "Bearing ko dust aur heat se bachane ke liye housing aur mounting aise design ki jaati hai ki greasing regular ho sake.",
      },
    ],
    items: ["Fan housing", "Impeller", "Shaft and bearings", "Motor mount", "Inlet and outlet flange"],
    specs: [
      { label: "Model", value: "Kiln size aur duct layout ke hisaab se" },
      { label: "Airflow", value: "Aapke kiln ki requirement par depend" },
      { label: "Power", value: "Electric motor" },
      { label: "Material", value: "Fabricated steel housing" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "ID fan aur FD fan mein kya farak hai?",
        a: "ID fan kiln se garm dhuaan kheench kar bahar nikalta hai (induced draught), jabki FD fan bahar se hawa andar dhakelta hai (forced draught). Dono ka role alag hota hai.",
      },
      {
        q: "Fan mein vibration aa rahi hai to kya karein?",
        a: "Pehle impeller par dust jama hua check karein, phir bearing aur alignment dekhein. Vibration ko ignore karna bearing aur shaft par load badha deta hai.",
      },
      {
        q: "Kya existing kiln ke liye fan bana sakte hain?",
        a: "Haan. Duct ka size, required airflow aur motor ki available power batayein — hum replacement fan usi layout ke hisaab se bana sakte hain.",
      },
      {
        q: "Maintenance ka schedule kya rakhna chahiye?",
        a: "Greasing regular karein, impeller par jama dust saaf karein aur belt/coupling ki condition check karein. Season ke beech mein bearing play zaroor dekhein.",
      },
    ],
    image: "/products/ID fan.png",
    imageAlt: "Bharat Agricultures ID fan for brick kilns",
    number: "12",
    category: "brick-kiln",
  },
  {
    slug: "coal-crusher-machine",
    name: "Coal Crusher",
    eyebrow: "Coal Crusher Manufacturer for Brick Kiln",
    tagline: "Coal sizing, steady firing",
    description:
      "Coal crusher brick kiln ke liye coal ko sahi size mein todta hai. Barabar coal size se firing consistent rehti hai aur fuel waste kam hota hai.",
    metaTitle: "Coal Crusher Manufacturer for Brick Kiln | Sambhal, UP",
    metaDescription:
      "Coal crusher manufacturer for brick kiln in Sambhal, Uttar Pradesh. Coal ko sahi size mein crush karein — steady firing aur kam fuel waste. Factory rate.",
    intro: [
      "Brick kiln mein coal ka size seedha firing par asar dalta hai. Bade tukde dheere jalte hain aur chhote tukde jaldi — isse kiln ka temperature ek jaisa nahi rehta. Coal crusher coal ko ek jaise size mein todta hai, jisse firing steady hoti hai.",
      "Hum coal crusher Sambhal, Uttar Pradesh mein brick kiln ke liye banate hain. Crushing chamber, hammers aur screen ka setup aapki coal aur required size ke hisaab se rakha jata hai. Aap kaunsa coal use karte hain aur kitna crush karna hai, ye batayein.",
    ],
    useCases: [
      "Brick kiln ke liye coal sizing",
      "Bade coal tukde todkar uniform size banana",
      "Firing consistency improve karna",
      "Coal handling aur feeding line ka hissa",
    ],
    benefits: [
      "Coal ka size ek jaisa",
      "Firing steady, temperature control behtar",
      "Fuel waste aur extra consumption kam",
      "Mazboot hammers, aasan replacement",
    ],
    features: [
      {
        title: "Hammer crushing",
        copy: "Hammers coal ko todte hain aur screen se sahi size bahar nikalta hai, isliye output consistent rehta hai.",
      },
      {
        title: "Changeable screen",
        copy: "Screen badalkar coal ka final size adjust kiya ja sakta hai — kiln ki feeding requirement ke hisaab se.",
      },
      {
        title: "Dust-aware build",
        copy: "Coal dust har jagah baithta hai, isliye bearing aur drive ko accessible rakha jata hai taaki cleaning aur greasing aasan ho.",
      },
    ],
    items: ["Crushing chamber", "Hammers", "Screen", "Drive unit", "Feed hopper"],
    specs: [
      { label: "Model", value: "Coal aur required size ke hisaab se" },
      { label: "Capacity", value: "Kiln ki daily requirement par depend" },
      { label: "Power", value: "Electric motor / diesel engine" },
      { label: "Output size", value: "Changeable screen se adjust" },
      { label: "Price", value: "Quote par" },
    ],
    faqs: [
      {
        q: "Coal crusher se coal ka size kaise badlein?",
        a: "Screen badalkar output size adjust hota hai. Humein batayein aapki kiln ko kis size ka coal chahiye, hum uske hisaab se screen suggest karenge.",
      },
      {
        q: "Kaunsi coal ke liye ye machine theek hai?",
        a: "Aam taur par brick kiln mein use hone wali coal ke liye. Coal ki hardness aur nami par capacity depend karti hai, isliye requirement pehle discuss karna zaroori hai.",
      },
      {
        q: "Hammers kitne samay chalte hain?",
        a: "Coal mein patthar aur grit zyada ho to hammers jaldi ghiste hain. Hum spare hammers ka set dete hain taaki production na ruke.",
      },
      {
        q: "Kya machine dust ke saath safe chalti hai?",
        a: "Haan, lekin regular cleaning zaroori hai. Bearing aur drive par coal dust jama na hone dein — ye maintenance ka sabse important part hai.",
      },
    ],
    image: "/products/Coal Crusher.png",
    imageAlt: "Bharat Agricultures coal crusher for brick kilns",
    number: "13",
    category: "brick-kiln",
  },
  {
    slug: "gara-machine-for-brick-kiln",
    name: "Gara Machine",
    eyebrow: "Gara Machine Manufacturer for Brick Kilns",
    tagline: "Kiln ki zaroorat ke hisaab se setup",
    description:
      "Brick kiln ke gara process ke liye requirement-led machine selection. Bharat Agricultures Sambhal, Uttar Pradesh se kiln layout aur target production ke hisaab se configuration discuss karta hai.",
    metaTitle: "Gara Machine for Brick Kiln | Manufacturer in Sambhal, UP",
    metaDescription:
      "Gara machine for brick kilns from Bharat Agricultures, Sambhal. Discuss your kiln layout, material and target output for a suitable machine configuration and factory quote.",
    intro: [
      "Brick kiln ke liye gara machine chunte waqt kiln ka layout, istemal hone wala material aur target production samajhna zaroori hai. In details ke bina capacity ya machine configuration ka sahi faisla nahi hota.",
      "Bharat Agricultures Sambhal, Uttar Pradesh se brick kiln machinery banata hai. Apne gara process ki jankari, required output aur site ki power availability share karein; hum machine configuration aur quote par seedhi baat karenge. Final specifications order se pehle confirm ki jaati hain.",
    ],
    useCases: [
      "Brick kiln ke gara process ke liye machinery requirement",
      "Naye kiln setup ke liye machine selection",
      "Existing production line ke saath configuration discuss karna",
      "Target output aur site conditions ke hisaab se quotation lena",
    ],
    benefits: [
      "Kiln ki requirement samajhkar configuration discuss hoti hai",
      "Capacity aur power details quote se pehle confirm ki jaati hain",
      "Manufacturer se seedha specification aur price par baat",
      "Installation space aur existing layout ko planning mein shamil karein",
    ],
    features: [
      {
        title: "Requirement-led selection",
        copy: "Kiln ka type, process aur desired output batayein; machine size aur configuration par uske baad baat hoti hai.",
      },
      {
        title: "Site details pehle",
        copy: "Available floor space, material aur power supply ki jankari dene se suitable setup identify karna aasan hota hai.",
      },
      {
        title: "Specifications confirmed before order",
        copy: "Capacity, drive aur final configuration requirement ke mutabik quote mein confirm karein; bina confirmation ke standard rating assume na karein.",
      },
    ],
    items: ["Machine configuration as per requirement", "Drive and power details to be confirmed", "Installation space review", "Quotation and dispatch details"],
    specs: [
      { label: "Application", value: "Brick kiln gara process" },
      { label: "Model", value: "Requirement ke hisaab se confirm" },
      { label: "Capacity", value: "Target output ke hisaab se confirm" },
      { label: "Power", value: "Selected configuration ke hisaab se confirm" },
      { label: "Price", value: "Requirement-based quotation" },
    ],
    faqs: [
      {
        q: "Gara machine kis kaam aati hai?",
        a: "Gara machine brick kiln ke gara process ke liye select ki jaati hai. Aapke process aur site ke hisaab se suitable configuration confirm karne ke liye kiln ki details share karein.",
      },
      {
        q: "Gara machine ki capacity kaise decide hoti hai?",
        a: "Capacity target production, material aur kiln setup par depend karti hai. Daily output aur site details ke basis par model confirm hota hai.",
      },
      {
        q: "Gara machine ka price kya hai?",
        a: "Price selected model, capacity aur configuration par depend karta hai. Apni requirement bhejein aur factory quotation lein.",
      },
      {
        q: "Order se pehle kaunsi details deni chahiye?",
        a: "Kiln ka type, gara process, target output, available power aur installation space share karein. Isse configuration aur quote confirm karna aasan hota hai.",
      },
    ],
    image: "/products/gara machine.webp",
    imageAlt: "Bharat Agricultures gara machine for brick kilns",
    number: "14",
    category: "brick-kiln",
  },
  {
    slug: "brick-making-machine",
    name: "Brick-Making Machine",
    eyebrow: "Brick-Making Machine Manufacturer in India",
    tagline: "Brick production ke liye sahi machine selection",
    description:
      "Brick-making machine selection for kiln owners and brick manufacturers. Bharat Agricultures in Sambhal, Uttar Pradesh discusses the machine setup against your brick type, production target and site requirements.",
    metaTitle: "Brick-Making Machine Manufacturer in India | Sambhal, UP",
    metaDescription:
      "Looking for a brick-making machine in India? Bharat Agricultures, Sambhal discusses configuration, output and site requirements with brick manufacturers. Request a factory quote.",
    intro: [
      "Brick-making machine ka sahi selection brick type, production target aur site ke available space par depend karta hai. In requirements ko pehle match karne se aap apni production line ke liye relevant configuration par baat kar sakte hain.",
      "Bharat Agricultures Sambhal, Uttar Pradesh se brick kiln machinery banata hai. Apni brick requirement, expected output, material aur available power share karein. Hum configuration aur quotation discuss karenge; model aur specifications order confirm karne se pehle clear ki jaati hain.",
    ],
    useCases: [
      "Brick manufacturers ke liye machine requirement discuss karna",
      "Naye brick production setup ke liye machine selection",
      "Existing kiln layout ke saath machine fitment plan karna",
      "Brick type aur production target ke hisaab se quotation lena",
    ],
    benefits: [
      "Brick aur output requirement ke hisaab se machine discuss karein",
      "Site layout aur available power ko planning mein shamil karein",
      "Capacity aur configuration order se pehle confirm karein",
      "Manufacturer se seedha quotation aur product details",
    ],
    features: [
      {
        title: "Production requirement matching",
        copy: "Brick type aur expected production share karein, taaki machine configuration aapke kaam ke mutabik discuss ki ja sake.",
      },
      {
        title: "Site-aware planning",
        copy: "Installation space, material flow aur power availability ki jankari machine selection ko practical banati hai.",
      },
      {
        title: "Clear pre-order specifications",
        copy: "Model, capacity, drive aur price ko final quote mein confirm karein; requirements ke bina fixed ratings assume nahi ki jaati.",
      },
    ],
    items: ["Machine configuration as per brick requirement", "Capacity and drive details to be confirmed", "Site layout review", "Quotation and dispatch details"],
    specs: [
      { label: "Application", value: "Brick production" },
      { label: "Model", value: "Requirement ke hisaab se confirm" },
      { label: "Capacity", value: "Target output ke hisaab se confirm" },
      { label: "Power", value: "Selected configuration ke hisaab se confirm" },
      { label: "Price", value: "Requirement-based quotation" },
    ],
    faqs: [
      {
        q: "Brick-making machine kaunse setup ke liye select karein?",
        a: "Machine ka selection brick type, expected production, material aur site layout par depend karta hai. In details ko share karke suitable configuration confirm karein.",
      },
      {
        q: "Brick-making machine ki capacity kya hoti hai?",
        a: "Capacity selected model aur production setup ke hisaab se confirm hoti hai. Apna target output batayein taaki requirement par sahi baat ho sake.",
      },
      {
        q: "Brick-making machine ki price kaise pata karein?",
        a: "Price model aur configuration ke mutabik quote hoti hai. Brick type, output target aur power availability ke saath enquiry bhejein.",
      },
      {
        q: "Kya machine existing brick kiln mein fit ho sakti hai?",
        a: "Fitment existing layout, available installation space aur production process par depend karta hai. Site details share karne ke baad configuration discuss ki ja sakti hai.",
      },
    ],
    image: "/products/bricks making machine.webp",
    imageAlt: "Bharat Agricultures brick-making machine",
    number: "15",
    category: "brick-kiln",
  },
];

export const agriculturalProducts = products.filter((product) => product.category === "agricultural");

export const brickKilnProducts = products.filter((product) => product.category === "brick-kiln");

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product));
}

/** Old slugs kept alive through redirects in next.config.ts. */
export { legacyProductSlugs } from "@/data/legacyRoutes";
