
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";

type MiniCtaProps = {
  title: ReactNode;
  ctaLabel: string;
  href?: string;
};

export default function MiniCta({ title, ctaLabel, href = "/enquiry" }: MiniCtaProps) {
  return (
    <section className={`
          ba-mini-cta bg-cream-soft [border-top:1px_solid_var(--c-line)]
          py-[clamp(2.75rem,_7vw,_4.5rem)] [&_h2]:max-w-[22ch] [&_h2]:text-[length:var(--display-md)]
          [&_h2_em]:text-gold-deep min-[900px]:[&_h2]:max-w-[26ch]
        `}>
      <Container>
        <div className={`
          ba-mini-cta__inner flex flex-col
          items-start gap-[1.5rem] min-[900px]:flex-row
          min-[900px]:items-center min-[900px]:justify-between min-[900px]:gap-[2rem]
        `}>
          <h2>{title}</h2>
          <ButtonLink href={href} variant="dark">
            {ctaLabel} <ArrowUpRight size={17} aria-hidden="true" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
