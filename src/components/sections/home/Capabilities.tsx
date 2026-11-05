
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getHomeContent } from "@/data/localized";

export default async function Capabilities() {
  const { capabilities, capabilitiesCopy } = await getHomeContent();
  return (
    <section className={`
          ba-section relative py-[var(--section-y)]
          capabilities
        `}>
      <Container>
        <div className={`
          ba-capabilities__grid grid gap-[2rem]
          min-[900px]:[grid-template-columns:0.9fr_1.1fr] min-[900px]:gap-[clamp(3rem,_7vw,_6rem)] min-[900px]:[align-items:start]
        `}>
          <Reveal className={"ba-capabilities__head min-[900px]:sticky min-[900px]:top-[calc(var(--header-h)_+_2rem)]"}>
            <SectionHeading
              kicker={capabilitiesCopy.kicker}
              title={
                <>
                  {capabilitiesCopy.title}
                  <br />
                  <em>{capabilitiesCopy.titleAccent}</em>
                </>
              }
              copy={capabilitiesCopy.copy}
            />
          </Reveal>

          <Reveal className={"ba-capability-list grid [border-top:1px_solid_var(--c-line)]"} delay={100}>
            {capabilities.map((item, index) => (
              <div className={`
          ba-capability grid [grid-template-columns:auto_1fr_auto]
          gap-[1rem] py-[1.5rem] [border-bottom:1px_solid_var(--c-line)]
          [&_h3]:text-[length:clamp(1.25rem,_4vw,_1.6rem)] [&_p]:max-w-[46ch] [&_p]:mt-[0.45rem]
          [&_p]:text-[length:0.83rem] [&_p]:leading-[1.75] [&_p]:text-muted
          [&_>_svg]:mt-[0.4rem] [&_>_svg]:text-muted [&_>_svg]:[transition:transform_0.3s_var(--ease),_color_0.3s_var(--ease)]
          [&:hover_>_svg]:[transform:translate(3px,_-3px)] [&:hover_>_svg]:text-gold-deep min-[900px]:py-[1.75rem]
        `} key={item.title}>
                <span className={`
          ba-capability__num pt-[0.3rem] text-[length:0.62rem]
          font-bold tracking-[0.14em] text-gold-deep
        `}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <ArrowUpRight size={18} aria-hidden="true" />
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
