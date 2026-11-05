
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { getHomeContent } from "@/data/localized";
import { whatsappQuoteHref } from "@/lib/site";

export default async function ClosingCta() {
  const { closingCtaCopy } = await getHomeContent();
  return (
    <section className={`
          ba-cta relative overflow-hidden
          bg-gold text-forest-950 py-[clamp(3.5rem,_10vw,_6.5rem)]
          [&::before]:[content:""] [&::before]:absolute [&::before]:right-[-12rem]
          [&::before]:bottom-[-14rem] [&::before]:w-[34rem] [&::before]:h-[34rem]
          [&::before]:[border:1px_solid_rgba(10,_32,_20,_0.18)] [&::before]:rounded-full [&::before]:shadow-[0_0_0_3.5rem_rgba(10,_32,_20,_0.06),_0_0_0_7rem_rgba(10,_32,_20,_0.04)]
          [&::before]:pointer-events-none [&_h2]:text-[length:clamp(2.5rem,_9vw,_5rem)] [&_h2]:leading-[0.98]
          [&_h2]:tracking-[-0.04em] [&_h2_em]:!text-forest-900
        `}>
      <Container>
        <div className={`
          ba-cta__inner relative z-[1]
          flex flex-col items-start
          gap-[2rem] min-[900px]:flex-row min-[900px]:items-end
          min-[900px]:justify-between min-[900px]:gap-[3rem]
        `}>
          <div>
            <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{closingCtaCopy.kicker}</span>
            <h2>
              {closingCtaCopy.title}
              <br />
              <em>{closingCtaCopy.titleAccent}</em>
            </h2>
          </div>
          <Link href={whatsappQuoteHref()} target="_blank" rel="noopener noreferrer" className={`
          ba-cta__circle grid [place-items:center]
          gap-[0.3rem] w-[7.5rem] h-[7.5rem]
          p-[1rem] rounded-full bg-forest-950
          !text-cream text-[length:0.62rem] font-bold
          tracking-[0.14em] uppercase text-[center]
          leading-normal [transition:transform_0.4s_var(--ease),_background-color_0.3s_var(--ease)] [&:hover]:[transform:rotate(-6deg)_scale(1.03)]
          [&:hover]:bg-forest-800 [&:hover]:!text-cream min-[900px]:w-[9rem] min-[900px]:h-[9rem]
          min-[900px]:shrink-0
        `}>
            {closingCtaCopy.ctaLabel} <ArrowUpRight size={22} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
