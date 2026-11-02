import HeroSlider from "@/components/sections/home/HeroSlider";
import { heroBadges, heroCopy, heroSlides } from "@/data/hero";

/**
 * Homepage hero.
 *
 * The product dataset stays on the server: only the four serializable slide
 * records, the copy and the trust badges cross into the client reel.
 */
export default function Hero() {
  return <HeroSlider slides={heroSlides} copy={heroCopy} badges={heroBadges} />;
}
