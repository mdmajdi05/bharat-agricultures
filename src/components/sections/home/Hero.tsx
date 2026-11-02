import HeroSlider, { type SlideData } from "@/components/sections/home/HeroSlider";
import { heroCopy, heroSlides } from "@/data/hero";

/**
 * Product names read as a headline plus an accent word:
 * "Paddy Cleaner Machine" -> "Paddy Cleaner" + "Machine".
 */
function splitName(name: string) {
  const words = name.trim().split(/\s+/);

  if (words.length < 2) return { title: name, highlight: "" };

  const highlight = words.pop() ?? "";
  return { title: words.join(" "), highlight };
}

/**
 * Homepage hero.
 *
 * The server keeps the products dataset out of the client bundle: only the
 * four serializable slide records and the hero copy cross the boundary.
 */
export default function Hero() {
  const slides: SlideData[] = heroSlides.map((slide) => ({
    id: slide.slug,
    badge: slide.family,
    tagline: slide.tagline,
    ...splitName(slide.name),
    description: slide.description,
    primaryCta: { label: heroCopy.primaryLabel, href: heroCopy.primaryHref },
    secondaryCta: { label: heroCopy.viewLabel, href: slide.href },
    image: slide.image,
    alt: slide.imageAlt,
    focus: slide.focus,
  }));

  return <HeroSlider slides={slides} copy={heroCopy} />;
}
