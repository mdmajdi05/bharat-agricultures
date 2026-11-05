
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { getSiteContent } from "@/data/localized";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  const { notFoundCopy } = await getSiteContent();

  return (
    <section className={`
          ba-not-found min-h-[72svh] grid
          content-center gap-[1.25rem] py-[clamp(4rem,_12vw,_8rem)]
          bg-forest-950 text-cream overflow-hidden
          [&_h1]:text-[length:var(--display-lg)] [&_p]:max-w-[34ch] [&_p]:text-[length:0.9rem]
          [&_p]:leading-[1.8] [&_p]:text-muted-dark
        `}>
      <Container>
        <span className={`
          ba-not-found__code font-display text-[length:clamp(5rem,_26vw,_12rem)]
          leading-[0.8] tracking-[-0.05em] text-[color:transparent]
          [-webkit-text-stroke:1px_rgba(216,_164,_64,_0.5)]
        `} aria-hidden="true">404</span>
        <h1>{notFoundCopy.title}</h1>
        <p>{notFoundCopy.copy}</p>
        <div className={`
          ba-not-found__actions flex flex-wrap
          gap-[0.7rem] mt-[0.6rem]
        `}>
          <ButtonLink href={notFoundCopy.primaryHref} variant="gold">
            {notFoundCopy.primaryLabel} <ArrowUpRight size={16} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href={notFoundCopy.secondaryHref} variant="outlineLight">
            {notFoundCopy.secondaryLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
