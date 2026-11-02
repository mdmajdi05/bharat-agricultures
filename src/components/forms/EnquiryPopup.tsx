"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ChevronDown, MessageCircle, X } from "lucide-react";

import { site } from "@/lib/site";

const SHOW_DELAY_MS = 5000;
const whatsappPopupHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hello Bharat Agricultures! I visited your website and would like to know more about your machinery.",
)}`;

const requirements = [
  "Agricultural machinery",
  "Brick kiln machinery",
  "Spare parts",
  "Something else",
];

const fieldClass =
  "w-full rounded-lg border border-[#d9dbcf] bg-white px-3.5 py-3 text-[13px] leading-none text-[#183d2d] placeholder:text-[#9aa094] transition-colors duration-200 focus:border-[#c3a25c] focus:outline-none focus:ring-4 focus:ring-[#d8a440]/15";
const labelClass =
  "mb-1.5 block text-[8.5px] font-bold uppercase tracking-[0.16em] text-[#7b8277]";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
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
    window.setTimeout(() => nameRef.current?.focus(), 80);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = cardRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
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
      className="ba-popup-overlay fixed inset-0 z-[4000] grid place-items-center bg-[rgba(5,19,12,0.52)] p-[18px] backdrop-blur-[6px] max-[560px]:place-items-end max-[560px]:p-0"
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
        className="ba-popup-card relative max-h-[calc(100dvh-36px)] w-full max-w-[470px] overflow-y-auto rounded-[20px] border border-[#e8e2d2] bg-[#fffdf8] text-[#17251b] shadow-[0_30px_80px_rgba(5,19,12,0.28)] max-[560px]:max-h-[92dvh] max-[560px]:max-w-none max-[560px]:rounded-b-none max-[560px]:rounded-t-[22px]"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close enquiry form"
          className="absolute right-3 top-3 z-20 grid h-10 w-10 place-items-center rounded-full border border-[#e7e2d3] bg-[#fffdf8]/95 text-[#17251b] backdrop-blur-sm transition-all duration-200 hover:rotate-90 hover:border-[#183d2d] hover:bg-[#183d2d] hover:text-[#f4f4ed]"
        >
          <X size={17} aria-hidden="true" />
        </button>

        <div className="relative h-[118px] overflow-hidden rounded-t-[20px] bg-[#0b2417] max-[560px]:h-[104px]">
          <Image
            src="/images/products/cultivator.jpg"
            alt=""
            fill
            sizes="470px"
            className="object-cover"
            style={{ objectPosition: "center 58%" }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(253,252,247,0.04)_0%,rgba(253,252,247,0.48)_68%,#fffdf8_100%)]"
          />
          <span className="absolute bottom-3 left-4 inline-flex items-center gap-2 rounded-full bg-[#183d2d] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#f4f4ed] shadow-[0_8px_20px_rgba(24,61,45,0.24)]">
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#e2bd70]" />
            Free consultation
          </span>
        </div>

        <div className="px-6 pb-6 pt-5 max-[560px]:px-5 max-[560px]:pb-[calc(1.4rem+env(safe-area-inset-bottom,0px))]">
          {sent ? (
            <div className="py-4 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#183d2d]/8 text-[#183d2d]">
                <CheckCircle2 size={30} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-display text-[26px] leading-[1.1] tracking-[-0.03em] text-[#183d2d]">
                Shukriya!
              </h2>
              <p className="mx-auto mt-2 max-w-[32ch] text-[13px] leading-[1.7] text-[#5f665d]">
                Aapki request mil gayi hai. Hamari team jaldi hi aapko call karke sahi machine
                aur rate bata degi.
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#183d2d] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#f4f4ed] transition-colors duration-200 hover:bg-[#0f2d1c]"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a97a20]">
                Bharat Agricultures · Sambhal
              </p>
              <h2
                id="ba-popup-title"
                className="mt-1.5 font-display text-[26px] leading-[1.08] tracking-[-0.03em] text-[#183d2d] max-[560px]:text-[23px]"
              >
                Sahi machine, sahi salaah.
              </h2>
              <p
                id="ba-popup-desc"
                className="mt-2 text-[12.5px] leading-[1.65] text-[#5f665d]"
              >
                Apni zaroorat batayein — machine, rate ya spare part. Hamari team seedha aapko
                guide karegi.
              </p>

              <form
                className="mt-4 grid gap-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid grid-cols-2 gap-3 max-[420px]:grid-cols-1">
                  <label>
                    <span className={labelClass}>Aapka naam</span>
                    <input
                      ref={nameRef}
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="Naam likhein"
                      className={fieldClass}
                    />
                  </label>

                  <label>
                    <span className={labelClass}>Mobile number</span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      pattern="[0-9+\s-]{10,15}"
                      placeholder="10-digit mobile"
                      className={fieldClass}
                    />
                  </label>
                </div>

                <label>
                  <span className={labelClass}>Kya chahiye?</span>
                  <span className="relative block">
                    <select
                      required
                      name="requirement"
                      defaultValue=""
                      className={`${fieldClass} appearance-none pr-9`}
                    >
                      <option value="" disabled>
                        Select requirement
                      </option>
                      {requirements.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={15}
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7b8277]"
                    />
                  </span>
                </label>

                <button
                  type="submit"
                  className="group mt-0.5 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#183d2d] px-4 py-3 text-[10.5px] font-bold uppercase tracking-[0.1em] !text-[#f4f4ed] shadow-[0_12px_26px_rgba(24,61,45,0.2)] transition-colors duration-200 hover:bg-[#0f2d1c]"
                >
                  Request a callback
                  <ArrowUpRight
                    size={15}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </form>

              <div className="mt-3.5 flex flex-col items-center gap-2">
                <a
                  href={whatsappPopupHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold !text-[#334f3c] transition-colors duration-200 hover:!text-[#a97a20]"
                >
                  <MessageCircle size={13} aria-hidden="true" />
                  WhatsApp par baat karein
                </a>
                <p className="text-center text-[9.5px] tracking-[0.03em] text-[#8b9187]">
                  No spam · Direct manufacturer se salaah
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
