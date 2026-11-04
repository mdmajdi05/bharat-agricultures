/**
 * Single source of truth for company details.
 * Update these values before launch — every page reads from here.
 */
export const site = {
  name: "Bharat Agricultures",
  legalName: "Bharat Agricultures",
  tagline: "Farm Machinery · Brick Kiln",
  description:
    "Bharat Agricultures manufactures agricultural machinery and brick kiln machinery in Sambhal, Uttar Pradesh — threshers, cleaners, harrows, levelers, cultivators, pugmills, gara machines, brick-making machines, ID fans and coal crushers.",
  // Set NEXT_PUBLIC_SITE_URL to the live domain before launch.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.bharatagricultures.com",
  phone: "+91 94126 37062",
  whatsapp: "919412637062",
  email: "Bharat.agri.in@gmail.com",
  address: "Transport Nagar, Chandausi Road, Sambhal, Uttar Pradesh, India",
  googleMapsUrl: "https://maps.app.goo.gl/19otDJyQooMHscz28",
  instagramUrl: "https://www.instagram.com/bharat.agri_2008/",
  streetAddress: "Transport Nagar, Chandausi Road",
  locality: "Sambhal",
  region: "Uttar Pradesh",
  country: "IN",
  industries: ["Farm Machinery", "Brick Kiln"],
} as const;

export const phoneHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
export const emailHref = `mailto:${site.email}`;
export const whatsappHref = `https://wa.me/${site.whatsapp}`;
export const whatsappMessageHref = (message: string) =>
  `${whatsappHref}?text=${encodeURIComponent(message)}`;
export const whatsappQuoteHref = (productName?: string) =>
  whatsappMessageHref(
    productName
      ? `Hello Bharat Agricultures! I would like to get a quote for ${productName}.`
      : "Hello Bharat Agricultures! I would like to get a quote for your machinery.",
  );
