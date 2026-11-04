"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, Phone, X } from "lucide-react";

import { emailHref, phoneHref, site, whatsappHref } from "@/lib/site";

const whatsappChatHref = `${whatsappHref}?text=${encodeURIComponent(
  "Hello Bharat Agricultures! I want to know about machinery, rates and spare parts.",
)}`;

const options = [
  {
    key: "whatsapp",
    label: "WhatsApp",
    note: "Chat instantly",
    href: whatsappChatHref,
    external: true,
    Icon: MessageCircle,
    tone: "green",
  },
  {
    key: "call",
    label: "Call now",
    note: site.phone,
    href: phoneHref,
    external: false,
    Icon: Phone,
    tone: "gold",
  },
  {
    key: "mail",
    label: "Email us",
    note: site.email,
    href: emailHref,
    external: false,
    Icon: Mail,
    tone: "forest",
  },
] as const;

/** Floating chat launcher — quick WhatsApp / call / email actions on every page. */
export default function FloatingContactWidget() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setPulse(true), 3500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setHeroVisible(entry.isIntersecting);
    });
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className={`fixed bottom-[calc(4.9rem+env(safe-area-inset-bottom))] right-4 z-[70] flex flex-col items-end gap-3 min-[1200px]:bottom-6 min-[1200px]:right-6 ${heroVisible && !open ? "max-md:hidden" : ""}`}>
      {open && (
        <div
          role="dialog"
          aria-label="Quick contact options"
          className="ba-popup-card w-[19rem] origin-bottom-right overflow-hidden rounded-[18px] border border-[#e8e2d2] bg-[#fffdf8] text-[#17251b] shadow-[0_22px_60px_rgba(5,19,12,0.26)]"
        >
          <div className="relative overflow-hidden bg-[#071b10] px-5 pb-4 pt-4">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(240,196,115,0.22),transparent_66%)]"
            />
            <div className="relative z-10 flex items-start justify-between gap-3">
              <div>
                <p className="inline-flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#f2d49b]">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#f0c473]" />
                  Seedha manufacturer se
                </p>
                <p className="mt-1.5 font-display text-[1.3rem] leading-[1.1] tracking-[-0.02em] text-[#f4f4ed]">
                  Baat karein
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close contact options"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#f4f4ed]/25 !text-[#f4f4ed]/80 transition-colors duration-200 hover:border-[#f0c473] hover:bg-[#f0c473] hover:!text-[#071b10]"
              >
                <X size={13} aria-hidden="true" />
              </button>
            </div>
            <p className="relative z-10 mt-1.5 text-[10.5px] leading-[1.55] text-[#f4f4ed]/55">
              Machine, rate ya spare part — jahan comfortable hain, wahin se baat karein.
            </p>
          </div>

          <div className="grid gap-2 p-3">
            {options.map((option) => {
              const { Icon } = option;
              const tone =
                option.tone === "green"
                  ? "border-[#1f9d55]/25 bg-[#1f9d55]/10 text-[#178046]"
                  : option.tone === "gold"
                    ? "border-[#c3a25c]/35 bg-[#c3a25c]/10 text-[#9a7326]"
                    : "border-[#183d2d]/20 bg-[#183d2d]/10 text-[#183d2d]";

              return (
                <a
                  key={option.key}
                  href={option.href}
                  {...(option.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-3 rounded-xl border border-[#e8e2d2] bg-white px-3 py-2.5 transition-colors duration-200 hover:border-[#183d2d]/40 hover:bg-[#fbf8ee]"
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border ${tone}`}
                  >
                    <Icon size={15} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11.5px] font-bold leading-tight !text-[#183d2d]">
                      {option.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[9.5px] leading-tight text-[#8b9187]">
                      {option.note}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={13}
                    aria-hidden="true"
                    className="shrink-0 text-[#a4a89e] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              );
            })}
          </div>
        </div>
      )}

      <div className="relative">
        {pulse && !open && (
          <span
            aria-hidden="true"
            className="absolute inset-0 animate-ping rounded-full bg-[#f0c473]/55"
          />
        )}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-[6px] rounded-full border border-[#f0c473]/35"
        />
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close contact options" : "Open contact options"}
          className="group relative grid h-14 w-14 place-items-center overflow-hidden rounded-full border border-[#d8b26a] bg-[linear-gradient(145deg,#f9e3b6_0%,#f0c473_46%,#dfa93f_100%)] !text-[#0a2317] shadow-[0_16px_36px_rgba(5,19,12,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.04] hover:shadow-[0_20px_44px_rgba(5,19,12,0.38)]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[3px] rounded-full border border-[#0a2317]/12"
          />
          {open ? (
            <X size={21} strokeWidth={2} aria-hidden="true" />
          ) : (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-[22px] w-[22px]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.7}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.5 11.6c0 4.2-3.8 7.6-8.5 7.6-1 0-2-.15-2.9-.44L4 20l1.3-4.1A7.1 7.1 0 0 1 3.5 11.6C3.5 7.4 7.3 4 12 4s8.5 3.4 8.5 7.6Z" />
              <circle cx="8.4" cy="11.6" r="1" fill="currentColor" stroke="none" />
              <circle cx="12" cy="11.6" r="1" fill="currentColor" stroke="none" />
              <circle cx="15.6" cy="11.6" r="1" fill="currentColor" stroke="none" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
