import HeroSlider from "@/components/sections/home/HeroSlider";
import * as englishHero from "@/data/en/hero";
import * as hinglishHero from "@/data/hero";
import { getLocale } from "@/lib/locale";

/**
 * Homepage hero.
 *
 * The product dataset stays on the server: only the four serializable slide
 * records, the copy and the trust badges cross into the client reel.
 *
 * English and Hinglish hero copy live in separate files so the two locales
 * never share identical text.
 */
export default async function Hero() {
  const locale = await getLocale();
  const content = locale === "hi" ? hinglishHero : englishHero;

  return (
    <HeroSlider
      slides={content.heroSlides}
      copy={content.heroCopy}
      badges={content.heroBadges}
    />
  );
}
