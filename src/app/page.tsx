
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
import { getProducts, getSiteContent } from "@/data/localized";
import { getUiCopy } from "@/data/ui";
import { getLocale } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { seoMetadata } = await getSiteContent();
  return createMetadata({
    ...seoMetadata.home,
    path: "/",
    locale,
    keywords: [
      "agricultural machinery manufacturer India",
      "farm machinery manufacturer Sambhal",
      "brick kiln machinery manufacturer",
      "thresher and paddy cleaner manufacturer",
    ],
  });
}

export default async function HomePage() {
  const [{ homeFaqCopy, seoMetadata }, products, locale] = await Promise.all([
    getSiteContent(),
    getProducts(),
    getLocale(),
  ]);
  const ui = getUiCopy(locale);
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
      <ProductShowcase products={products} copy={ui.productShowcase} />
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
