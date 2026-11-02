import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
  className?: string;
};

export default function SectionHeading({ kicker, title, copy, light = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`ba-section-heading grid gap-[1.1rem] max-w-[44rem] [&_h2]:text-[length:var(--display-lg)] [&_p]:max-w-[42ch] [&_p]:text-muted [&_p]:text-sm [&_p]:leading-[1.85]${light ? ` ba-section-heading--light [&_p]:text-muted-dark [&_h2]:text-cream [&_h2_em]:text-gold-bright` : ""}${className ? ` ${className}` : ""}`}>
      <span className={`ba-eyebrow inline-flex items-center gap-[0.6rem] font-sans text-xs font-bold tracking-[0.22em] uppercase leading-[1.4] text-gold-deep [&::before]:[content:""] [&::before]:w-[1.6rem] [&::before]:h-[1px] [&::before]:bg-[currentColor] [&::before]:shrink-0 [.ba-form-panel_&]:[display:inline-block] [.ba-form-panel_&]:mb-[0.7rem] [.ba-cta_&]:text-[color:rgba(10,_32,_20,_0.7)] [.ba-cta_&::before]:bg-[rgba(10,_32,_20,_0.45)]${light ? ` ba-eyebrow--light text-gold-bright` : ""}`}>{kicker}</span>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
