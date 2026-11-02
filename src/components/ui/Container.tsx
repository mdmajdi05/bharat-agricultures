import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

/** Consistent page width + gutters. Every section's content sits inside one. */
export default function Container({ children, className = "", narrow = false }: ContainerProps) {
  return (
    <div className={`ba-container w-full max-w-[var(--container-max)] mx-auto px-[var(--gutter)] [.ba-not-found_&]:grid [.ba-not-found_&]:gap-[1.15rem] [.ba-not-found_&]:justify-items-start [.ba-not-found_&]:content-center${narrow ? ` ba-container--narrow max-w-[880px]` : ""}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
