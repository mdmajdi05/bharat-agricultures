
import type { Metadata } from "next";
import Capabilities from "@/components/sections/home/Capabilities";
import ClosingCta from "@/components/sections/home/ClosingCta";
import Hero from "@/components/sections/home/Hero";
import Introduction from "@/components/sections/home/Introduction";
import MachineGuide from "@/components/sections/home/MachineGuide";
import Marquee from "@/components/sections/home/Marquee";
import PartsTeaser from "@/components/sections/home/PartsTeaser";
import ProductShowcase from "@/components/sections/home/ProductShowcase";
import QualityBand from "@/components/sections/home/QualityBand";
import FaqSection from "@/components/sections/shared/FaqSection";
import { faqSchema, JsonLd, webPageSchema } from "@/components/seo/StructuredData";
import { agriculturalProducts, brickKilnProducts } from "@/data/products";
import { homeBrickKilnCopy, homeFaqCopy, homeShowcaseCopy, seoMetadata } from "@/data/siteContent";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  ...seoMetadata.home,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          name: seoMetadata.home.title,
          description: seoMetadata.home.description,
          path: "/",
        })}
      />
      <JsonLd data={faqSchema(homeFaqCopy.faqs)} />

      <Hero />
      <Marquee />
      <Introduction />
      <ProductShowcase
        copy={homeShowcaseCopy}
        products={agriculturalProducts}
        ariaLabel="Agricultural machinery categories"
      />
      <ProductShowcase
        copy={homeBrickKilnCopy}
        products={brickKilnProducts}
        className={`
          ba-section relative py-[var(--section-y)]
          ba-section--soft bg-cream-soft showcase
        `}
        ariaLabel="Brick kiln machinery categories"
      />
      <MachineGuide />
      <QualityBand />
      <Capabilities />
      <PartsTeaser />
      <FaqSection
        kicker={homeFaqCopy.kicker}
        title={homeFaqCopy.title}
        copy={homeFaqCopy.copy}
        faqs={homeFaqCopy.faqs}
        className={`
          ba-section relative py-[var(--section-y)]
          ba-section--paper bg-paper
        `}
      />
      <ClosingCta />
    </>
  );
}
