import { Plus } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export type FaqItem = {
  q: string;
  a: string;
};

type FaqSectionProps = {
  kicker: string;
  title: string;
  copy?: string;
  faqs: FaqItem[];
  className?: string;
  id?: string;
};

/**
 * Native <details> accordions: accessible, keyboard-friendly and animation-free.
 */
export default function FaqSection({
  kicker,
  title,
  copy,
  faqs,
  className = "ba-section relative py-[var(--section-y)]",
  id,
}: FaqSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className={`
          ba-faq grid gap-[2.25rem]
          min-[900px]:[grid-template-columns:0.85fr_1.15fr] min-[900px]:gap-[clamp(3rem,_7vw,_6rem)] min-[900px]:[align-items:start]
        `}>
          <Reveal className={`
          ba-faq__head grid gap-[1.1rem]
          max-w-[44rem] [&_h2]:text-[length:var(--display-lg)] [&_p]:max-w-[44ch]
          [&_p]:text-[length:0.9rem] [&_p]:leading-[1.85] [&_p]:text-muted
          min-[900px]:sticky min-[900px]:top-[calc(var(--header-h)_+_2rem)]
        `}>
            <span className={`
          ba-eyebrow inline-flex items-center
          gap-[0.6rem] font-sans text-xs
          font-bold tracking-[0.22em] uppercase
          leading-[1.4] text-gold-deep [&::before]:[content:""]
          [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor]
          [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem]
          [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]
        `}>{kicker}</span>
            <h2>{title}</h2>
            {copy ? <p>{copy}</p> : null}
          </Reveal>

          <div className={"ba-faq__list grid [border-top:1px_solid_var(--c-line)]"}>
            {faqs.map((faq) => (
              <details className={`
          ba-faq__item [border-bottom:1px_solid_var(--c-line)] [&_summary]:flex
          [&_summary]:items-start [&_summary]:justify-between [&_summary]:gap-[1.5rem]
          [&_summary]:py-[1.25rem] [&_summary]:cursor-pointer [&_summary]:[list-style:none]
          [&_summary]:font-display [&_summary]:text-[length:clamp(1.08rem,_3.6vw,_1.28rem)] [&_summary]:leading-[1.3]
          [&_summary]:tracking-[-0.02em] [&_summary]:[transition:color_0.2s_var(--ease)] [&_summary::-webkit-details-marker]:hidden
          [&_summary:hover]:text-gold-deep [&_summary_svg]:shrink-0 [&_summary_svg]:mt-[0.25rem]
          [&_summary_svg]:text-gold-deep [&_summary_svg]:[transition:transform_0.28s_var(--ease)] [&[open]_summary_svg]:[transform:rotate(45deg)]
          [&_p]:max-w-[62ch] [&_p]:pb-[1.4rem] [&_p]:pr-[clamp(0rem,_6vw,_4rem)]
          [&_p]:text-[length:0.88rem] [&_p]:leading-[1.9] [&_p]:text-muted
        `} key={faq.q}>
                <summary>
                  <span>{faq.q}</span>
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
