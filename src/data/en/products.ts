import type { Product } from "@/data/products";

/**
 * English product content.
 *
 * Slugs, images and numbering intentionally match the Hinglish dataset so both
 * locales resolve to the same product pages with locale-specific copy.
 */
export const products: Product[] = [
  // ==========================================================
  // AGRICULTURAL MACHINERY
  // ==========================================================
  {
    slug: "agricultural-dust-cleaner-machine",
    name: "Dust Cleaner",
    eyebrow: "Agricultural Dust Cleaner Machine Manufacturer",
    tagline: "Clean grain, better price",
    description:
      "Dust cleaner machine built in Sambhal, Uttar Pradesh that removes dust, soil and light impurities from grain so it is ready for the mandi or storage.",
    metaTitle: "Agricultural Dust Cleaner Machine for Wheat, Paddy & Seeds",
    metaDescription:
      "Explore a grain cleaning machine for removing dust and light impurities from crops such as wheat, paddy, mustard and gram. Check the available setup and contact Bharat Agricultures for model details and pricing.",
    intro: [
      "After harvesting or threshing, grain usually carries dust, fine soil, husk and leaf particles. This material adds dead weight, attracts moisture in storage and lowers the price in the mandi. A dust cleaner uses a combination of airflow and screening to separate grain from light impurities.",
      "Bharat Agricultures builds this machine at its own manufacturing unit in Sambhal, Uttar Pradesh. The setup can be adjusted for farmers, FPOs, traders and mills. Tell us which grain you handle, how much you need to clean per hour and whether the machine will run on electricity or an engine, and we will suggest the right configuration.",
    ],
    useCases: [
      "Cleaning wheat, paddy, mustard and gram",
      "Preparing grain before dispatch to a mandi or warehouse",
      "Pre-cleaning in rice mills and flour mills",
      "Separating grain for seed use",
    ],
    benefits: [
      "Dust and light impurities are removed from the grain",
      "Clean grain keeps better in storage",
      "Screens can be changed for different crops",
      "Simple design for daily operation",
    ],
    features: [
      {
        title: "Airflow and screen combination",
        copy: "The blower lifts light impurities while the sieve holds back larger material, so cleaning happens in a single pass.",
      },
      {
        title: "Changeable screens",
        copy: "Wheat, paddy and mustard grains differ in size. By changing the sieve, the same machine can handle different crops.",
      },
      {
        title: "Strong fabricated body",
        copy: "The body and frame are built for local workshop conditions so the machine can take daily loading.",
      },
    ],
    items: ["Cleaning sieve", "Blower fan", "Feeding hopper", "Discharge chute", "Drive assembly"],
    specs: [
      { label: "Model", value: "As per your requirement" },
      { label: "Capacity", value: "Depends on grain and setup" },
      { label: "Power", value: "Electric motor or engine" },
      { label: "Material", value: "Fabricated steel body" },
      { label: "Price", value: "On quote — direct factory rate" },
    ],
    faqs: [
      {
        q: "Which grains can a dust cleaner machine handle?",
        a: "Commonly wheat, paddy, mustard, gram and similar grains. The setup is adjusted by changing the sieve. Tell us which crop you clean and we will suggest the right screen.",
      },
      {
        q: "What is the price of a dust cleaner machine?",
        a: "The price depends on the model, capacity, power source and body construction. We are the direct manufacturer, so there is no middleman commission. Share your requirement and we will send the factory rate.",
      },
      {
        q: "Does the machine run on electricity or an engine?",
        a: "Both options are possible. Where there is a stable electricity connection, a motor is practical; at a field or mandi without power, an engine option works better.",
      },
      {
        q: "Are spare parts and screens available separately?",
        a: "Yes. We make screens, blower parts and drive components ourselves. Keeping one spare screen with the machine is always useful when you switch crops.",
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
    tagline: "Clean paddy before milling",
    description:
      "Paddy cleaner machine removes leaves, husk, stones and light impurities from paddy. Cleaner paddy before milling means less broken rice.",
    metaTitle: "Paddy Cleaner Machine for Rice Processing | Manufacturer",
    metaDescription:
      "Find a paddy cleaning machine designed to separate leaves, husk, stones and other light impurities from paddy. Ask about tractor-driven or motor-operated configurations and request a quotation.",
    intro: [
      "Paddy arriving from the mandi brings leaves, stems, stones and clods of soil with it. If this material enters the milling line, the chance of broken rice increases and the machines carry extra load. A paddy cleaner separates light and heavy impurities before the next process.",
      "We build this machine in Sambhal, Uttar Pradesh and tune the setup to the paddy variety, moisture and required output. Whether you run a small mill or a large rice plant, the machine has to match your line capacity, so we understand the requirement before suggesting a model.",
    ],
    useCases: [
      "Pre-cleaning at paddy entry in a rice mill",
      "Paddy mandis and procurement centres",
      "Preparing paddy for seed and nursery use",
      "Custom milling and job-work units",
    ],
    benefits: [
      "Leaves, stems and light impurities are separated",
      "Stones and soil clods stay on the screen",
      "Cleaner, more uniform paddy before milling",
      "Less downtime with easy cleaning and maintenance",
    ],
    features: [
      {
        title: "Two-stage screening",
        copy: "Large impurities stay on the upper screen while grain passes through the lower screen, giving a consistent cleaning result.",
      },
      {
        title: "Air separation",
        copy: "Blower air lifts leaves and husk away from the paddy, while heavier grain stays in the main flow.",
      },
      {
        title: "Matched to the milling line",
        copy: "The setup is built around your mill capacity and paddy variety so the cleaner does not become a bottleneck.",
      },
    ],
    items: ["Vibratory screen", "Aspiration fan", "Cleaning sieve", "Feed hopper", "Drive assembly"],
    specs: [
      { label: "Model", value: "As per mill capacity" },
      { label: "Capacity", value: "Depends on paddy variety and setup" },
      { label: "Power", value: "Motor or engine option" },
      { label: "Material", value: "Fabricated steel body" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "What is the difference between a paddy cleaner and a dust cleaner?",
        a: "A dust cleaner focuses on light impurities, while a paddy cleaner is built for paddy where leaves, stems and stones must also be removed. Their screening setups are different.",
      },
      {
        q: "Will the machine work with moist paddy?",
        a: "Very wet paddy can choke the screen on any cleaner. We look at your crop condition and suggest the right screen and speed to reduce stoppages.",
      },
      {
        q: "What capacity can I get in one machine?",
        a: "Capacity depends on your requirement. Tell us how much paddy you need to process per hour and we will suggest a matching setup.",
      },
      {
        q: "Do you help with installation and commissioning?",
        a: "Yes. We explain the machine setting, belt tension and screen selection. Placement can also be discussed according to your mill layout.",
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
    tagline: "Deep, even field preparation",
    description:
      "Disc harrow mixes fertiliser, crop residue and hard soil. A strong frame and disc gangs for primary and secondary tillage.",
    metaTitle: "Disc Harrow Manufacturer in India | Tractor Mounted Implement",
    metaDescription:
      "Explore a tractor-mounted disc harrow for soil tillage and incorporating crop residues into the field. Review the implement details, available model information and replacement parts, then request a manufacturer quotation.",
    intro: [
      "When a field carries last season's stubble, fertiliser or hard soil, a plough alone is not enough. The rotating discs of a disc harrow cut and turn the soil so fertiliser and crop residue mix below the surface and the top layer is levelled.",
      "This implement works for both primary and secondary field preparation. We build disc harrows in Sambhal, Uttar Pradesh with a strong frame, quality discs and correctly fitted bearings so the machine runs straight through long working hours.",
    ],
    useCases: [
      "First field preparation and breaking hard soil",
      "Mixing crop residue and fertiliser into the soil",
      "Preparing stubble-heavy fields for the next season",
      "Secondary tillage in orchards and large fields",
    ],
    benefits: [
      "Breaks hard soil and previous crop stubble",
      "Mixes fertiliser and residue into the soil",
      "Sized to match your tractor",
      "Strong frame, low downtime and easy bearing replacement",
    ],
    features: [
      {
        title: "Heavy-duty disc gangs",
        copy: "The gang angle and spacing are set for the soil condition so every pass does even work.",
      },
      {
        title: "Strong frame",
        copy: "The frame uses steel that can handle field shocks and stony ground.",
      },
      {
        title: "Service-friendly bearings",
        copy: "Bearings and hubs are fitted so greasing and replacement do not require opening the complete gang every time.",
      },
    ],
    items: ["Disc gangs", "Frame", "Bearing hub", "Hitch assembly", "Scraper"],
    specs: [
      { label: "Model", value: "As per tractor HP" },
      { label: "Working width", value: "As per your field and tractor" },
      { label: "Disc", value: "Boron / carbon steel options" },
      { label: "Hitch", value: "Standard three-point linkage" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "Which tractor is suitable for a disc harrow?",
        a: "Tractor HP, field size and soil type together decide the size. Share your tractor model and we will suggest a matching working width.",
      },
      {
        q: "What is the difference between a disc harrow and a cultivator?",
        a: "Cultivator tines break the soil, while a disc harrow cuts and turns it with rotating discs. A disc harrow gives a stronger result in hard soil with crop residue.",
      },
      {
        q: "How quickly do discs and bearings wear?",
        a: "It depends on the soil type and working method. Discs wear faster in stony ground. We supply wearing parts separately so work does not stop.",
      },
      {
        q: "Is a land leveler necessary after harrowing?",
        a: "Not always, but if you want a perfectly even seedbed, light levelling after harrowing gives a better finish. We can supply both implements from one place.",
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
    tagline: "Even seedbed, better germination",
    description:
      "Tine harrow breaks soil into a fine tilth for seedbed preparation. Seed and fertiliser spread evenly and water reaches the root zone.",
    metaTitle: "Tine Harrow for Tractor | Agricultural Harrow Machine",
    metaDescription:
      "View a tractor-compatible tine harrow for agricultural soil preparation. Check the implement design and available configuration for your field requirements, and contact Bharat Agricultures for product details.",
    intro: [
      "Seed germinates well when the soil around it is firm and water reaches the root zone. Large clods and gaps spoil the seedbed. A harrow breaks the soil into a finer tilth and levels the surface so seed depth stays uniform.",
      "We build agricultural harrows at our unit with a frame, tines and hitch that keep the implement running straight behind the tractor. A harrow does light work, so attention goes into material and welding to avoid repeated repairs.",
    ],
    useCases: [
      "Seedbed preparation before wheat and paddy sowing",
      "Fine tilth for vegetables and pulses",
      "Levelling the surface after disc harrowing",
      "Mixing fertiliser evenly into the soil",
    ],
    benefits: [
      "Fine soil covers the seed properly",
      "Even distribution of seed and fertiliser",
      "Water reaches the root zone with less waste",
      "Light draft, works with smaller tractors",
    ],
    features: [
      {
        title: "Spring / rigid tine options",
        copy: "Spring tines absorb shock in stony soil, while rigid tines are simpler and stronger for normal fields.",
      },
      {
        title: "Even spacing",
        copy: "Tine spacing is arranged so no strip is left uncovered, letting one pass cover the field.",
      },
      {
        title: "Adjustable depth",
        copy: "Depth can be set for your soil and crop so the tractor does not carry unnecessary load.",
      },
    ],
    items: ["Tine section", "Main frame", "Clamp and bolt set", "Hitch assembly", "Depth wheel"],
    specs: [
      { label: "Model", value: "As per tractor and field" },
      { label: "Tine type", value: "Rigid / spring as per soil" },
      { label: "Working width", value: "Depends on tractor HP" },
      { label: "Material", value: "Steel frame with replaceable tines" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "Are a harrow and a cultivator the same thing?",
        a: "Their work overlaps, but a cultivator is heavier for deep tillage and a harrow is lighter for making a fine seedbed. Some farmers use both: cultivator first, then harrow.",
      },
      {
        q: "How many passes should I make?",
        a: "Two to three passes are usually enough, depending on the soil and previous crop. A cross pass first and a straight pass after gives a more even surface.",
      },
      {
        q: "What should I do if a tine breaks?",
        a: "Tines are replaceable and we supply spares. Running with a broken tine puts extra load on the frame, so replace it as soon as possible.",
      },
      {
        q: "Can a harrow sow seed directly?",
        a: "A harrow prepares the seedbed; it does not sow. Sowing needs a seed drill or another method. We can also suggest machinery for the next step.",
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
    tagline: "Light crop, easy threshing",
    description:
      "Hawa thresher is built for small crops and lower volumes. The drum and air setup separate grain from husk without excess breakage.",
    metaTitle: "Hawa Thresher Machine for Small-Scale Crop Threshing",
    metaDescription:
      "Learn about the Hawa thresher machine and the crops it is designed to process. Contact Bharat Agricultures to confirm crop suitability, machine configuration, spare part availability and pricing.",
    intro: [
      "Large threshers do not suit every field. Where the crop area is small, taking a big engine to the field is difficult, or a farmer wants to thresh on his own land, a lighter hawa thresher is more practical.",
      "In a hawa thresher, grain leaves the drum and airflow carries away husk and light material. We build it in Sambhal, Uttar Pradesh and set the drum speed and air opening for the crop so grain breakage stays low.",
    ],
    useCases: [
      "Small and marginal farming",
      "Threshing wheat, mustard and gram",
      "On-field crop processing",
      "A light, easily moved setup for contractors",
    ],
    benefits: [
      "Light setup that is easy to move",
      "Threshes with lower power",
      "Air separation gives cleaner grain",
      "Fewer parts and simple maintenance",
    ],
    features: [
      {
        title: "Adjustable airflow",
        copy: "Whether the crop is light or heavy, airflow can be adjusted so grain does not blow out with the husk.",
      },
      {
        title: "Simple drum design",
        copy: "The drum and concave gap are set for the crop, reducing grain breakage and speeding up threshing.",
      },
      {
        title: "Compact footprint",
        copy: "The machine is sized to fit small fields and narrow passages.",
      },
    ],
    items: ["Threshing drum", "Blower assembly", "Concave", "Sieve", "Drive pulley"],
    specs: [
      { label: "Model", value: "As per crop and volume" },
      { label: "Power", value: "Tractor PTO or motor" },
      { label: "Drum", value: "Set as per crop" },
      { label: "Material", value: "Fabricated steel body" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "What is the difference between a hawa thresher and a normal thresher?",
        a: "A hawa thresher is lighter and meant for smaller volumes, where air cleaning plays a bigger role. A large multi-crop thresher has more capacity and a different cleaning system.",
      },
      {
        q: "Can it thresh maize?",
        a: "Maize needs a different drum and gap. For maize we recommend a maize thresher, which breaks fewer grains.",
      },
      {
        q: "How much power does the machine need?",
        a: "Power depends on your crop and volume. Share your tractor model or motor availability and we will suggest a matching setup.",
      },
      {
        q: "Is grain breakage low?",
        a: "With the correct drum speed and concave gap, breakage is significantly reduced. We explain this setting during commissioning for your crop.",
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
    tagline: "Thresh the crop, save the time",
    description:
      "Multi-crop agricultural thresher for wheat, paddy and pulses. Drum, concave and cleaning sieve are adjusted to suit the crop.",
    metaTitle: "Multi Crop Thresher Manufacturer | Wheat, Paddy & Pulses",
    metaDescription:
      "Explore a tractor-operated multi crop thresher for suitable crops such as wheat, paddy, gram and pulses. Review machine details and ask about model options, spare parts and manufacturer pricing.",
    intro: [
      "Threshing happens in a short window and the weather cannot be trusted. If the machine stops midway or breaks too much grain, the whole harvest can suffer. The thresher setup must therefore match the crop; a large drum alone is not enough.",
      "We build multi-crop threshers in Sambhal, Uttar Pradesh. Drum speed, concave gap, sieve and blower are combined so the machine works on wheat, paddy and pulses. Tell us your main crop and we will suggest the right setup.",
    ],
    useCases: [
      "High-volume wheat and paddy threshing",
      "Gram, mustard and other pulses",
      "Contract threshing and custom hiring",
      "Shared use by FPOs and farmer groups",
    ],
    benefits: [
      "One machine for several crops",
      "Adjustable drum and sieve setup",
      "Husk separated and grain cleaned",
      "Strong body for long seasons",
    ],
    features: [
      {
        title: "Multi-crop drum setup",
        copy: "Drum speed and concave gap can be changed for the crop, so one machine handles both wheat and pulses.",
      },
      {
        title: "Cleaning sieve and blower",
        copy: "Air removes husk and light material while grain passes through the sieve and comes out clean.",
      },
      {
        title: "Service access",
        copy: "Panels are positioned so belts, pulleys and bearings can be reached quickly during the season.",
      },
    ],
    items: ["Threshing drum", "Concave", "Cleaning sieve", "Blower fan", "Drive and belt set"],
    specs: [
      { label: "Model", value: "As per crop and tractor" },
      { label: "Power", value: "Tractor PTO / engine" },
      { label: "Suitable crops", value: "Wheat, paddy, pulses" },
      { label: "Material", value: "Fabricated steel body" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "How many crops can one thresher handle?",
        a: "A multi-crop setup handles wheat, paddy and several pulses. Drum speed and gap differ slightly for each crop, and we explain those settings.",
      },
      {
        q: "Do I need a separate thresher for paddy?",
        a: "Not necessarily, but paddy is usually wetter and needs a lower drum speed. If you thresh a lot of paddy, we tune the setup accordingly.",
      },
      {
        q: "How should I maintain the machine?",
        a: "Before daily operation, check belt tension, greasing points and material inside the drum. After the season, inspect bearings and sieves.",
      },
      {
        q: "Are spare parts readily available?",
        a: "Yes. We supply drum parts, sieves, belts and bearings. Keeping one spare set before the season is a good practice.",
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
    tagline: "Separate maize, keep grain whole",
    description:
      "Maize thresher separates grain from the cob. The drum and concave gap are set for maize so grain breakage stays low.",
    metaTitle: "Maize Thresher Machine Manufacturer | Corn Shelling Equipment",
    metaDescription:
      "Find a maize thresher for separating kernels from maize cobs. Review the drum and concave configuration, confirm suitability for your crop requirements and request machine and spare part details.",
    intro: [
      "Maize threshing is different from wheat. Cobs are larger, grain is attached firmly, and at high speed the grain cracks and quality drops. A maize thresher therefore needs a drum, concave and feeding system designed for maize.",
      "We build maize threshers in Sambhal, Uttar Pradesh. Cobs move in a straight flow, the drum separates the grain and husk is removed. Tell us your maize variety and volume, and we will set up the machine accordingly.",
    ],
    useCases: [
      "Maize shelling and threshing",
      "Seed production and quality grain",
      "Preparing maize for poultry and cattle feed",
      "Bulk cleaning for mandis and traders",
    ],
    benefits: [
      "Grain separates easily from the cob",
      "Drum gap reduces grain breakage",
      "Husk and impurities removed",
      "Fast work under season pressure",
    ],
    features: [
      {
        title: "Drum geometry for maize",
        copy: "The drum and concave gap are set for maize grain size, so there is less crushing during separation.",
      },
      {
        title: "Smooth feeding",
        copy: "The feeding chute angle keeps cobs moving and gives the machine an even load.",
      },
      {
        title: "Cleaning section",
        copy: "A blower and sieve remove husk and light material so grain is ready for bags or the mandi.",
      },
    ],
    items: ["Threshing drum", "Concave", "Feeding chute", "Cleaning sieve", "Blower assembly"],
    specs: [
      { label: "Model", value: "As per maize volume" },
      { label: "Power", value: "Tractor PTO / motor" },
      { label: "Suitable crop", value: "Maize" },
      { label: "Material", value: "Fabricated steel body" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "How much grain breakage happens in a maize thresher?",
        a: "With the correct drum speed and gap, breakage is low. Excess speed cracks grain, so we explain the setting during commissioning.",
      },
      {
        q: "Will this machine also thresh wheat?",
        a: "A maize thresher is tuned for maize. Wheat or paddy need a different drum and sieve setup, so an agricultural thresher is a better choice for those crops.",
      },
      {
        q: "What if the maize has high moisture?",
        a: "High moisture makes grain stick and block the screen. Dry the crop a little before threshing, or we can suggest a screen for your conditions.",
      },
      {
        q: "Do you set up the machine on site?",
        a: "We guide assembly and basic setup. Installation support can be discussed depending on your location.",
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
    tagline: "Level fields, save water",
    description:
      "Plate land leveler levels the field surface so irrigation water spreads evenly and does not collect in low spots.",
    metaTitle: "Plate Land Leveler Manufacturer | Tractor Field Leveling",
    metaDescription:
      "Prepare a more even field surface with a tractor-compatible plate land leveler. Explore the adjustable blade, available sizes and tractor requirements before requesting a model recommendation or quotation.",
    intro: [
      "If a field is uneven, water collects in one place and another area stays dry. Germination becomes uneven and irrigation costs rise. A plate land leveler cuts soil from high spots, moves it into low spots and levels the surface.",
      "This is not done in one pass; two or three passes are usually needed. The blade, plate and hitch therefore have to be strong. We build plate land levelers in Sambhal, Uttar Pradesh, sizing the width and plate thickness to the tractor HP.",
    ],
    useCases: [
      "Levelling irrigated fields",
      "First levelling of a new field",
      "Correcting low spots where water collects",
      "Preparing a large field before dividing it into plots",
    ],
    benefits: [
      "Water spreads evenly with less waste",
      "More uniform germination",
      "Lower tractor draft and fuel savings",
      "Strong plate for long use",
    ],
    features: [
      {
        title: "Strong levelling plate",
        copy: "Plate thickness and width are matched to tractor HP so it can handle soil pressure.",
      },
      {
        title: "Adjustable blade angle",
        copy: "The blade angle can be changed to cut or move soil, making both light and heavy levelling possible.",
      },
      {
        title: "Stable hitch",
        copy: "The hitch is built so the machine runs straight during levelling and puts less side load on the tractor.",
      },
    ],
    items: ["Leveling plate", "Cutting blade", "Main frame", "Hitch assembly", "Depth control"],
    specs: [
      { label: "Model", value: "As per tractor HP" },
      { label: "Working width", value: "Depends on field and tractor" },
      { label: "Plate", value: "Strong steel plate" },
      { label: "Hitch", value: "Three-point linkage" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "How many passes does land levelling need?",
        a: "It depends on how uneven the field is. Usually two to three passes: the first corrects the major difference and the next gives the finish.",
      },
      {
        q: "Does it work like a laser leveler?",
        a: "No. This is a tractor-mounted plate leveler that does mechanical levelling. Laser levelling gives higher precision, but a plate leveler is practical for small and medium fields.",
      },
      {
        q: "What is the difference between a plate land leveler and a 2 in 1 land leveler?",
        a: "A plate leveler focuses only on levelling. A 2 in 1 model also moves soil as a second function. The right choice depends on your field condition.",
      },
      {
        q: "Will the machine work on stony ground?",
        a: "It handles small stones, but large stones put load on the blade and plate. It is better to remove large stones from such fields first.",
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
    tagline: "Two jobs, one implement",
    description:
      "2 in 1 land leveler moves soil and levels the surface in one implement, saving field preparation time and fuel.",
    metaTitle: "2-in-1 Land Leveler for Tractor | Soil Shifting & Leveling",
    metaDescription:
      "Explore a 2-in-1 land leveler designed for soil shifting and field leveling. Check tractor compatibility and available configurations, then contact Bharat Agricultures for product specifications and pricing.",
    intro: [
      "In many fields, levelling alone is not enough. Soil is excess in one place and missing in another, so it first has to be shifted and then levelled. Using two separate implements costs both time and diesel.",
      "A 2 in 1 land leveler does both jobs in one unit. The front section cuts and moves soil while the rear section finishes the surface. We build it in Sambhal, Uttar Pradesh and size it to the tractor HP.",
    ],
    useCases: [
      "Levelling uneven fields",
      "Moving soil from one place to another",
      "Setting the surface before making plots",
      "Saving time and diesel on large fields",
    ],
    benefits: [
      "One implement for two jobs",
      "Fewer levelling passes and fuel savings",
      "Soil shifting and finishing together",
      "Matching size for your tractor",
    ],
    features: [
      {
        title: "Dual-section design",
        copy: "The front blade cuts soil and the rear plate levels it, so both jobs happen in one pass.",
      },
      {
        title: "Adjustable sections",
        copy: "The depth of both sections can be set separately, reducing load where only levelling is needed.",
      },
      {
        title: "Strong frame",
        copy: "The frame and joints are built for heavy soil pressure so repeated welding is not needed.",
      },
    ],
    items: ["Front blade", "Rear leveling plate", "Main frame", "Hitch assembly", "Depth adjusters"],
    specs: [
      { label: "Model", value: "As per tractor HP" },
      { label: "Working width", value: "Depends on field and tractor" },
      { label: "Sections", value: "Blade + leveling plate" },
      { label: "Hitch", value: "Three-point linkage" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "Is a 2 in 1 leveler better than a normal plate leveler?",
        a: "If your field also needs soil shifting, a 2 in 1 is more practical. For light levelling only, a normal plate leveler is sufficient and more economical.",
      },
      {
        q: "Which tractor can run it?",
        a: "Size is decided by tractor HP and field size. Share your tractor model and we will suggest a matching width.",
      },
      {
        q: "Does levelling finish in one pass?",
        a: "One pass corrects the major difference, but two passes give a better finish. It depends on the field condition.",
      },
      {
        q: "What maintenance does it need?",
        a: "Check blade sharpness, bolt tightness and plate condition twice a season. Worn blades are easy to replace.",
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
    tagline: "The first step of tillage",
    description:
      "Tractor cultivator breaks hard soil and prepares the field for sowing. Spring and rigid tine options, sized to your tractor.",
    metaTitle: "Tractor Cultivator Manufacturer | Agricultural Tillage Implement",
    metaDescription:
      "Prepare farmland with a tractor cultivator used to loosen soil and support seedbed preparation. Review the available implement details, tractor suitability and replacement parts before requesting a quotation.",
    intro: [
      "After harvest, the soil becomes hard. If seed is sown directly, roots have no space to move down and germination suffers. Cultivator tines break the soil and loosen it enough for seed and fertiliser to go in.",
      "We build tractor cultivators in Sambhal, Uttar Pradesh. Tine count, frame width and hitch angle are set so the implement runs straight behind the tractor with a low draft. Spring tine options are better for stony ground.",
    ],
    useCases: [
      "First tillage after harvest",
      "Breaking hard soil",
      "Preparing the seedbed before sowing",
      "Mixing fertiliser into the soil",
    ],
    benefits: [
      "Loose soil gives seed room to grow",
      "Low draft and less load on the tractor",
      "Spring tines absorb stone shocks",
      "Replaceable tines for easy maintenance",
    ],
    features: [
      {
        title: "Rigid and spring tines",
        copy: "Rigid tines are strong for normal soil; in stony ground spring tines absorb shock and reduce tine breakage.",
      },
      {
        title: "Strong main frame",
        copy: "The frame uses a section that will not bend even in deep tillage.",
      },
      {
        title: "Depth adjustment",
        copy: "Tillage depth can be set with a depth wheel or linkage according to crop and soil.",
      },
    ],
    items: ["Tines", "Main frame", "Clamps and bolts", "Hitch assembly", "Depth wheel"],
    specs: [
      { label: "Model", value: "As per tractor HP" },
      { label: "Tine type", value: "Rigid / spring" },
      { label: "Working width", value: "Depends on tractor and field" },
      { label: "Material", value: "Steel frame with replaceable tines" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "When should I use a cultivator and when a disc harrow?",
        a: "A cultivator is right for first tillage. If there is a lot of crop residue or the soil is hard, a disc harrow gives a stronger result. Many farmers use a cultivator first, then a harrow.",
      },
      {
        q: "How many tines should my cultivator have?",
        a: "Tine count depends on tractor HP and field size. More tines is not always better; tractor load also matters.",
      },
      {
        q: "What are the benefits of spring tines?",
        a: "Spring tines bend and absorb shock on stones or a hard layer, reducing sudden load on the tine and frame. In normal soil, rigid tines are simpler and more economical.",
      },
      {
        q: "What if a tine wears out?",
        a: "Tines are replaceable. A worn tine reduces tillage depth and increases draft, so replace it on time.",
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
    tagline: "Even clay mix, stronger bricks",
    description:
      "Pugmill machine mixes soil, water and additives evenly. It prepares consistent clay for the brick kiln so brick quality stays uniform.",
    metaTitle: "Pugmill Machine for Brick Kiln | Clay Mixing Equipment",
    metaDescription:
      "Explore pugmill equipment used to mix clay or soil with water for brick production. Discuss your kiln setup and production requirements with Bharat Agricultures to identify a suitable machine configuration.",
    intro: [
      "Brick quality depends on the soil, but even more on how evenly the soil is mixed. If dry lumps remain in the clay, bricks crack and weak spots appear after firing. A pugmill mixes soil with water to make uniform clay.",
      "Bharat Agricultures builds pugmill machines for brick kilns in Sambhal, Uttar Pradesh. The mixing chamber, shafts and blades are designed around the kiln's daily requirement. Share your soil type and production volume and we will suggest the right size.",
    ],
    useCases: [
      "Clay mixing in brick kilns",
      "Uniform mix of soil, water and additives",
      "Consistent output instead of manual mixing",
      "Preparing clay before brick moulding",
    ],
    benefits: [
      "Clay is mixed uniformly",
      "Less mixing time and labour",
      "Fewer cracks and weak spots in bricks",
      "Strong blades with easy replacement",
    ],
    features: [
      {
        title: "Twin-shaft mixing",
        copy: "Blades on two shafts lift and mix the soil so no dry clay remains in the chamber corners.",
      },
      {
        title: "Water control",
        copy: "Water flow can be controlled to set clay consistency. Too much water shrinks bricks; too little causes cracks.",
      },
      {
        title: "Service-friendly build",
        copy: "Blades and liners are wear parts and are kept accessible for replacement so production stops for less time.",
      },
    ],
    items: ["Mixing chamber", "Twin shafts", "Mixing blades", "Drive unit", "Discharge gate"],
    specs: [
      { label: "Model", value: "As per kiln production" },
      { label: "Capacity", value: "Depends on daily requirement" },
      { label: "Power", value: "Electric motor / diesel engine" },
      { label: "Material", value: "Fabricated steel with wear liners" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "What does a pugmill machine do?",
        a: "It mixes soil, water and required additives evenly to prepare clay for brick making. A correct mix improves both brick strength and finish.",
      },
      {
        q: "What capacity should I choose for my kiln?",
        a: "Capacity is decided by your daily brick production, soil type and available power. We suggest a size based on your target output.",
      },
      {
        q: "How quickly do the blades wear?",
        a: "Blades wear faster when the soil contains more sand and grit. We offer wear-resistant blades and a spare set so the season is not interrupted.",
      },
      {
        q: "Is installation included with the machine?",
        a: "We provide assembly and basic commissioning guidance. Placement and drive connection can be discussed according to your kiln site layout.",
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
    tagline: "Controlled airflow, better firing",
    description:
      "ID fan controls induced draught in a brick kiln. Correct airflow gives even firing, saves fuel and keeps the smoke path clear.",
    metaTitle: "Brick Kiln ID Fan Manufacturer | Induced Draft Fan",
    metaDescription:
      "View induced draft fans used in brick kiln air and flue-gas systems. Share your plant requirements to discuss airflow needs, fan configuration and suitable equipment options.",
    intro: [
      "Firing in a brick kiln works best when airflow stays under control. Too much draught burns fuel quickly and overfires some bricks; too little draught slows firing and traps smoke. An ID fan manages this airflow.",
      "We build ID fans for brick kilns in Sambhal, Uttar Pradesh. The fan housing, impeller and shaft are balanced so vibration stays low during long runs. Share your kiln size and duct layout and we will suggest a matching fan.",
    ],
    useCases: [
      "Induced draught systems for brick kilns",
      "Drawing smoke out of the firing chamber",
      "Airflow and temperature control",
      "Fan replacement in an existing kiln",
    ],
    benefits: [
      "More consistent firing",
      "Fuel savings",
      "Smooth smoke exhaust",
      "Low vibration for long operating hours",
    ],
    features: [
      {
        title: "Balanced impeller",
        copy: "The impeller is balanced before fitting, so rubbing and vibration stay low even at high speed.",
      },
      {
        title: "Strong housing",
        copy: "Housing plate thickness and welding are chosen to hold shape with hot air and dust.",
      },
      {
        title: "Bearing protection",
        copy: "The housing and mounting are designed to protect bearings from dust and heat and allow regular greasing.",
      },
    ],
    items: ["Fan housing", "Impeller", "Shaft and bearings", "Motor mount", "Inlet and outlet flange"],
    specs: [
      { label: "Model", value: "As per kiln size and duct layout" },
      { label: "Airflow", value: "Depends on kiln requirement" },
      { label: "Power", value: "Electric motor" },
      { label: "Material", value: "Fabricated steel housing" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "What is the difference between an ID fan and an FD fan?",
        a: "An ID fan pulls hot smoke out of the kiln (induced draught), while an FD fan pushes air in from outside (forced draught). Their roles are different.",
      },
      {
        q: "What should I do if the fan vibrates?",
        a: "First check for dust build-up on the impeller, then inspect the bearing and alignment. Ignoring vibration increases load on the bearing and shaft.",
      },
      {
        q: "Can you build a fan for an existing kiln?",
        a: "Yes. Tell us the duct size, required airflow and available motor power, and we can build a replacement fan for that layout.",
      },
      {
        q: "What maintenance schedule should I follow?",
        a: "Grease regularly, clean dust from the impeller and check belt or coupling condition. During the season, also check bearing play.",
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
    tagline: "Right coal size, steady firing",
    description:
      "Coal crusher breaks coal to the right size for a brick kiln. Uniform coal size keeps firing consistent and reduces fuel waste.",
    metaTitle: "Coal Crusher Machine for Brick Kilns | Manufacturer",
    metaDescription:
      "Explore coal crushing equipment for preparing coal to a required size for brick kiln operations. Contact Bharat Agricultures to discuss machine configuration, operating requirements and replacement parts.",
    intro: [
      "In a brick kiln, coal size directly affects firing. Large pieces burn slowly and small pieces burn fast, so kiln temperature does not stay even. A coal crusher breaks coal into a uniform size for steady firing.",
      "We build coal crushers for brick kilns in Sambhal, Uttar Pradesh. The crushing chamber, hammers and screen are set for your coal and required output size. Tell us which coal you use and how much you need to crush.",
    ],
    useCases: [
      "Coal sizing for brick kilns",
      "Breaking large coal pieces to a uniform size",
      "Improving firing consistency",
      "Part of a coal handling and feeding line",
    ],
    benefits: [
      "Uniform coal size",
      "Steady firing and better temperature control",
      "Less fuel waste and excess consumption",
      "Strong hammers with easy replacement",
    ],
    features: [
      {
        title: "Hammer crushing",
        copy: "Hammers break the coal and the screen lets the correct size out, keeping output consistent.",
      },
      {
        title: "Changeable screen",
        copy: "The final coal size can be adjusted by changing the screen according to kiln feeding requirements.",
      },
      {
        title: "Dust-aware build",
        copy: "Coal dust settles everywhere, so bearings and the drive are kept accessible for cleaning and greasing.",
      },
    ],
    items: ["Crushing chamber", "Hammers", "Screen", "Drive unit", "Feed hopper"],
    specs: [
      { label: "Model", value: "As per coal and required size" },
      { label: "Capacity", value: "Depends on kiln daily requirement" },
      { label: "Power", value: "Electric motor / diesel engine" },
      { label: "Output size", value: "Adjustable with changeable screen" },
      { label: "Price", value: "On quote" },
    ],
    faqs: [
      {
        q: "How do I change the coal output size?",
        a: "Output size is adjusted by changing the screen. Tell us what coal size your kiln needs and we will suggest the right screen.",
      },
      {
        q: "Which coal is suitable for this machine?",
        a: "Commonly the coal used in brick kilns. Capacity depends on coal hardness and moisture, so the requirement should be discussed first.",
      },
      {
        q: "How long do the hammers last?",
        a: "Hammers wear faster when the coal contains more stone and grit. We supply a spare hammer set so production does not stop.",
      },
      {
        q: "Is the machine safe to run with dust?",
        a: "Yes, but regular cleaning is necessary. Do not let coal dust collect on bearings and the drive; this is the most important part of maintenance.",
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
    tagline: "A setup matched to your kiln",
    description:
      "Requirement-led machine selection for the gara process at a brick kiln. Bharat Agricultures in Sambhal, Uttar Pradesh discusses configuration around kiln layout and target production.",
    metaTitle: "Gara Machine for Brick Kiln | Clay Preparation Equipment",
    metaDescription:
      "Review the gara machine used in brick kiln clay or soil preparation. Share your plant layout and operating requirements to discuss the appropriate machine arrangement and request a quotation.",
    intro: [
      "When choosing a gara machine for a brick kiln, it is important to understand the kiln layout, the material used and the target production. Without these details, capacity or machine configuration cannot be decided correctly.",
      "Bharat Agricultures builds brick kiln machinery in Sambhal, Uttar Pradesh. Share details of your gara process, required output and site power availability; we will discuss the configuration and quote directly. Final specifications are confirmed before ordering.",
    ],
    useCases: [
      "Machinery requirement for the brick kiln gara process",
      "Machine selection for a new kiln setup",
      "Discussing configuration with an existing production line",
      "Taking a quotation based on target output and site conditions",
    ],
    benefits: [
      "Configuration discussed around the kiln requirement",
      "Capacity and power details confirmed before the quote",
      "Direct specification and price discussion with the manufacturer",
      "Installation space and existing layout included in planning",
    ],
    features: [
      {
        title: "Requirement-led selection",
        copy: "Tell us the kiln type, process and desired output; machine size and configuration follow from that.",
      },
      {
        title: "Site details first",
        copy: "Information about available floor space, material and power supply makes it easier to identify a suitable setup.",
      },
      {
        title: "Specifications confirmed before order",
        copy: "Capacity, drive and final configuration are confirmed in the quote; standard ratings are not assumed without confirmation.",
      },
    ],
    items: ["Machine configuration as per requirement", "Drive and power details to be confirmed", "Installation space review", "Quotation and dispatch details"],
    specs: [
      { label: "Application", value: "Brick kiln gara process" },
      { label: "Model", value: "Confirmed as per requirement" },
      { label: "Capacity", value: "Confirmed as per target output" },
      { label: "Power", value: "Confirmed as per selected configuration" },
      { label: "Price", value: "Requirement-based quotation" },
    ],
    faqs: [
      {
        q: "What is a gara machine used for?",
        a: "A gara machine is selected for the gara process at a brick kiln. Share your kiln details so a suitable configuration can be confirmed for your process and site.",
      },
      {
        q: "How is the capacity of a gara machine decided?",
        a: "Capacity depends on target production, material and kiln setup. The model is confirmed on the basis of daily output and site details.",
      },
      {
        q: "What is the price of a gara machine?",
        a: "Price depends on the selected model, capacity and configuration. Send your requirement to receive a factory quotation.",
      },
      {
        q: "What details should I provide before ordering?",
        a: "Share the kiln type, gara process, target output, available power and installation space. This makes configuration and quotation confirmation easier.",
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
    tagline: "The right machine for brick production",
    description:
      "Brick-making machine selection for kiln owners and brick manufacturers. Bharat Agricultures in Sambhal, Uttar Pradesh discusses machine setup around your brick type, production target and site requirements.",
    metaTitle: "Brick Making Machine Manufacturer in India | Bharat Agricultures",
    metaDescription:
      "Explore brick making equipment for your production setup. Share details about the clay, required output and site conditions so the suitable machine configuration and quotation can be discussed.",
    intro: [
      "Selecting the right brick-making machine depends on brick type, production target and available space at the site. Matching these requirements first lets you discuss a relevant configuration for your production line.",
      "Bharat Agricultures builds brick kiln machinery in Sambhal, Uttar Pradesh. Share your brick requirement, expected output, material and available power. We will discuss the configuration and quotation; the model and specifications are confirmed before ordering.",
    ],
    useCases: [
      "Discussing machine requirements for brick manufacturers",
      "Machine selection for a new brick production setup",
      "Planning machine fitment with an existing kiln layout",
      "Taking a quotation based on brick type and production target",
    ],
    benefits: [
      "Machine discussed around brick and output requirements",
      "Site layout and available power included in planning",
      "Capacity and configuration confirmed before ordering",
      "Direct quotation and product details from the manufacturer",
    ],
    features: [
      {
        title: "Production requirement matching",
        copy: "Share the brick type and expected production so the machine configuration can be discussed around your work.",
      },
      {
        title: "Site-aware planning",
        copy: "Information about installation space, material flow and power availability makes machine selection practical.",
      },
      {
        title: "Clear pre-order specifications",
        copy: "Model, capacity, drive and price are confirmed in the final quote; fixed ratings are not assumed without requirements.",
      },
    ],
    items: ["Machine configuration as per brick requirement", "Capacity and drive details to be confirmed", "Site layout review", "Quotation and dispatch details"],
    specs: [
      { label: "Application", value: "Brick production" },
      { label: "Model", value: "Confirmed as per requirement" },
      { label: "Capacity", value: "Confirmed as per target output" },
      { label: "Power", value: "Confirmed as per selected configuration" },
      { label: "Price", value: "Requirement-based quotation" },
    ],
    faqs: [
      {
        q: "Which setup is a brick-making machine selected for?",
        a: "Machine selection depends on brick type, expected production, material and site layout. Share these details to confirm a suitable configuration.",
      },
      {
        q: "What is the capacity of a brick-making machine?",
        a: "Capacity is confirmed according to the selected model and production setup. Tell us your target output so the requirement can be discussed correctly.",
      },
      {
        q: "How do I know the price of a brick-making machine?",
        a: "Price is quoted according to the model and configuration. Send an enquiry with brick type, output target and power availability.",
      },
      {
        q: "Can the machine fit into an existing brick kiln?",
        a: "Fitment depends on the existing layout, available installation space and production process. Configuration can be discussed after sharing site details.",
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
