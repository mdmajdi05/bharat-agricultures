
import { marqueeItems } from "@/data/home";

export default function Marquee() {
  return (
    <div className={`
          ba-marquee overflow-hidden py-[0.9rem]
          bg-forest-900 text-cream [border-bottom:1px_solid_var(--c-line-dark)]
        `} aria-hidden="true">
      <div className={`
          ba-marquee__track flex w-[max-content]
          animate-marquee [.ba-marquee:hover_&]:[animation-play-state:paused] motion-reduce:animate-none
        `}>
        {[0, 1].map((group) => (
          <div className={"ba-marquee__group flex items-center"} key={group}>
            {marqueeItems.map((item) => (
              <span className={`
          ba-marquee__item inline-flex items-center
          gap-[1.5rem] pr-[1.5rem] text-[length:0.64rem]
          font-bold tracking-[0.2em] uppercase
          whitespace-nowrap text-[color:rgba(246,_243,_233,_0.8)] [&::after]:[content:""]
          [&::after]:w-[0.38rem] [&::after]:h-[0.38rem] [&::after]:rounded-full
          [&::after]:bg-gold
        `} key={`${group}-${item}`}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
