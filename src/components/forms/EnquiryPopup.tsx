"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";

import { emailHref, phoneHref, site, whatsappHref } from "@/lib/site";

const SHOW_DELAY_MS = 5000;

const whatsappPopupHref = `${whatsappHref}?text=${encodeURIComponent(
  "Hello Bharat Agricultures! I visited your website and would like to know more about your machinery.",
)}`;

const actions = [
  {
    key: "call",
    label: "Call karein",
    value: site.phone,
    note: "Mon–Sat, 9 AM – 7 PM",
    href: phoneHref,
    Icon: Phone,
    external: false,
    primary: true,
  },
  {
    key: "whatsapp",
    label: "WhatsApp par message",
    value: "Turant baat karein",
    note: "Photo ya part number bhej dein",
    href: whatsappPopupHref,
    Icon: MessageCircle,
    external: true,
    primary: false,
  },
  {
    key: "mail",
    label: "Email karein",
    value: site.email,
    note: "Drawing ya requirement attach karein",
    href: emailHref,
    Icon: Mail,
    external: false,
    primary: false,
  },
] as const;

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const firstActionRef = useRef<HTMLAnchorElement>(null);
  const lastFocused = useRef<Element | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => {
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus();
    }, 0);
  }, []);

  // Show on every page load / refresh, five seconds after it settles.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      lastFocused.current = document.activeElement;
      setOpen(true);
    }, SHOW_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  // Scroll lock, Esc to close and a simple Tab trap.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => firstActionRef.current?.focus(), 80);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = cardRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="ba-popup-overlay fixed inset-0 z-[4000] grid place-items-center bg-[rgba(5,19,12,0.55)] p-[18px] backdrop-blur-[7px] max-[560px]:place-items-end max-[560px]:p-0"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        ref={cardRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ba-popup-title"
        aria-describedby="ba-popup-desc"
        className="ba-popup-card relative max-h-[calc(100dvh-36px)] w-full max-w-[452px] overflow-y-auto rounded-[22px] border border-[#e8e2d2] bg-[#fffdf8] text-[#17251b] shadow-[0_34px_90px_rgba(5,19,12,0.34)] max-[560px]:max-h-[90dvh] max-[560px]:max-w-none max-[560px]:rounded-b-none max-[560px]:rounded-t-[24px]"
      >
        {/* ---------- Dark editorial header ---------- */}
        <div className="relative overflow-hidden bg-[#071b10] px-6 pb-7 pt-7 max-[560px]:px-5 max-[560px]:pb-6 max-[560px]:pt-6">
          <Image
            src="/images/machining.jpg"
            alt=""
            fill
            sizes="452px"
            className="pointer-events-none object-cover opacity-[0.16] saturate-[0.5]"
            style={{ objectPosition: "center 58%" }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,#071b10_32%,rgba(7,27,16,0.9)_62%,rgba(7,27,16,0.7)_100%)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(240,196,115,0.22),transparent_66%)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(240,196,115,0.5),transparent)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 right-0 hidden h-28 w-44 opacity-25 [background-image:radial-gradient(circle,rgba(244,244,237,0.5)_1px,transparent_1px)] [background-size:14px_14px] [mask-image:linear-gradient(to_left,black,transparent)] sm:block"
          />

          <button
            type="button"
            onClick={close}
            aria-label="Close contact card"
            className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-[#f4f4ed]/25 text-[#f4f4ed]/80 transition-all duration-200 hover:rotate-90 hover:border-[#f0c473] hover:bg-[#f0c473] hover:text-[#071b10]"
          >
            <X size={16} aria-hidden="true" />
          </button>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f0c473]/35 bg-[#f0c473]/10 px-3 py-1 text-[8.5px] font-bold uppercase tracking-[0.18em] text-[#f2d49b]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#f0c473] shadow-[0_0_0_3px_rgba(240,196,115,0.18)]"
              />
              Seedha manufacturer se
            </span>

            <h2
              id="ba-popup-title"
              className="mt-4 max-w-[16ch] font-display text-[clamp(1.85rem,4.4vw,2.15rem)] leading-[1.04] tracking-[-0.035em] text-[#f4f4ed]"
            >
              Machine ki baat,
              <span className="mt-0.5 block italic text-[#f0c473]">seedha humse.</span>
            </h2>
            <p
              id="ba-popup-desc"
              className="mt-2.5 max-w-[36ch] text-[12px] leading-[1.65] text-[#f4f4ed]/60"
            >
              Sambhal se agricultural machinery, brick kiln machinery aur spare
              parts ka direct manufacturer. Call, WhatsApp ya email par rate aur
              guidance lein.
            </p>
          </div>
        </div>

        {/* ---------- Contact actions ---------- */}
        <div className="px-6 pb-6 pt-5 max-[560px]:px-5 max-[560px]:pb-[calc(1.4rem+env(safe-area-inset-bottom,0px))]">
          <p className="text-[8.5px] font-bold uppercase tracking-[0.2em] text-[#8b9187]">
            Kaise baat karna chahenge?
          </p>

          <div className="mt-3 grid gap-2.5">
            {actions.map((action) => {
              const { Icon } = action;

              if (action.primary) {
                return (
                  <a
                    key={action.key}
                    ref={firstActionRef}
                    href={action.href}
                    className="group flex items-center gap-3.5 rounded-[14px] bg-[#183d2d] p-3 pr-4 shadow-[0_12px_26px_rgba(24,61,45,0.22)] transition-colors duration-200 hover:bg-[#0f2d1c]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f0c473] text-[#071b10]">
                      <Icon size={18} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[8.5px] font-bold uppercase tracking-[0.16em] !text-[#f0c473]">
                        {action.label}
                      </span>
                      <span className="mt-0.5 block truncate font-display text-[1.22rem] leading-tight tracking-[-0.02em] !text-[#f4f4ed]">
                        {action.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={17}
                      aria-hidden="true"
                      className="shrink-0 text-[#f4f4ed]/55 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f0c473]"
                    />
                  </a>
                );
              }

              const hoverClass =
                action.key === "whatsapp"
                  ? "hover:border-[#1f9d55]/45 hover:bg-[#eef8f1]"
                  : "hover:border-[#c3a25c]/60 hover:bg-[#fbf5e6]";

              return (
                <a
                  key={action.key}
                  href={action.href}
                  {...(action.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`group flex items-center gap-3.5 rounded-[14px] border border-[#e4dfd0] bg-white p-3 pr-4 transition-colors duration-200 ${hoverClass}`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${
                      action.key === "whatsapp"
                        ? "border-[#1f9d55]/25 bg-[#1f9d55]/10 text-[#178046]"
                        : "border-[#c3a25c]/35 bg-[#c3a25c]/10 text-[#9a7326]"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[8.5px] font-bold uppercase tracking-[0.16em] text-[#8b9187]">
                      {action.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[13.5px] font-semibold leading-tight !text-[#183d2d]">
                      {action.value}
                    </span>
                    <span className="mt-0.5 block truncate text-[10px] leading-tight text-[#8b9187]">
                      {action.note}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#e4dfd0] text-[#8b9187] transition-all duration-200 group-hover:border-[#183d2d] group-hover:bg-[#183d2d] group-hover:text-[#f4f4ed]"
                  >
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </a>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-t border-[#e8e2d2] pt-3.5">
            <span className="inline-flex items-center gap-1.5 text-[9.5px] font-medium text-[#8b9187]">
              <Clock size={11} aria-hidden="true" className="text-[#a97a20]" />
              Mon–Sat · 9 AM – 7 PM
            </span>
            <span className="inline-flex items-center gap-1.5 text-[9.5px] font-medium text-[#8b9187]">
              <MapPin size={11} aria-hidden="true" className="text-[#a97a20]" />
              Sambhal, Uttar Pradesh
            </span>
          </div>

          <p className="mt-3 text-center text-[9px] tracking-[0.03em] text-[#a4a89e]">
            No spam · Direct manufacturer se salaah
          </p>
        </div>
      </div>
    </div>
  );
}
