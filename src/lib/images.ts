/**
 * Photography lives in `public/images` so the site stays fast and predictable.
 * Swap these files with real factory/product photography before launch.
 */
export const images = {
  hero: "/images/hero-field.jpg",
  tractor: "/images/tractor-field.jpg",
  barn: "/images/farm-barn.jpg",
  wheat: "/images/wheat-field.jpg",
  grain: "/images/wheat-grain.jpg",
  soil: "/images/soil-preparation.jpg",
  greenhouse: "/images/greenhouse-rows.jpg",
  warehouse: "/images/warehouse.jpg",
  machining: "/images/machining.jpg",
  welding: "/images/welding.jpg",
} as const;

/** Responsive `sizes` presets, tuned for the layout rather than guessed per component. */
export const imageSizes = {
  full: "100vw",
  half: "(max-width: 900px) 100vw, 50vw",
  card: "(max-width: 700px) 78vw, (max-width: 1100px) 45vw, 30vw",
  grid: "(max-width: 700px) 84vw, (max-width: 1100px) 46vw, 30vw",
} as const;
