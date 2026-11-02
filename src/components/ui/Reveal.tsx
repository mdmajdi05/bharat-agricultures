"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger in milliseconds. */
  delay?: number;
};

/**
 * Fades content up as it enters the viewport.
 * The hidden/transition styles live in `tokens.css` behind
 * `@media (scripting: enabled)`, so content stays visible when JavaScript
 * is disabled or fails to load.
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      node.classList.add("ba-is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          node.classList.add("ba-is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ba-reveal${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
