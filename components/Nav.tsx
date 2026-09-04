"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Werkstatt" },
  { href: "/portfolio", label: "Leistungen" },
  { href: "/kontakt", label: "Kontakt" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="mx-auto mt-3 flex h-[60px] max-w-7xl items-center justify-between gap-3 px-4 md:h-[64px] md:gap-6 md:px-8">
          <div className="glass-strong flex h-full w-full items-center justify-between gap-2 rounded-2xl pl-3 pr-2 md:px-6">
            <Link href="/" className="group flex min-w-0 items-center gap-2.5 md:gap-3">
              <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-signal text-black shadow-signal">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 6l7 7-7 7" />
                  <path d="M3 13h18" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-col leading-none">
                <span className="truncate text-[14px] font-semibold tracking-tight md:text-[15px]">
                  Fahrzeugtechnik Staudt
                </span>
                <span className="mt-0.5 truncate text-[10.5px] uppercase tracking-[0.18em] text-white/50 md:text-[11px]">
                  Meisterwerkstatt · Saarlouis
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:+4968319618905"
                className="ml-2 inline-flex items-center gap-2 rounded-lg bg-signal px-4 py-2 text-sm font-semibold text-black shadow-signal transition-colors hover:bg-signal-soft"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Termin
              </a>
            </nav>

            <button
              aria-label="Menü"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute inset-x-0 top-0 h-[1.5px] bg-white transition-transform ${
                    open ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute inset-x-0 bottom-0 h-[1.5px] bg-white transition-transform ${
                    open ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          />
          <div className="glass-strong absolute inset-x-4 top-24 rounded-2xl p-5">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[52px] items-center justify-between rounded-lg px-3 text-[17px] text-white/90 active:bg-white/10"
                >
                  {l.label}
                  <span className="text-white/40">→</span>
                </Link>
              ))}
            </div>
            <a
              href="tel:+4968319618905"
              className="mt-4 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-signal px-4 font-semibold text-black"
            >
              06831 9618905
            </a>
            <a
              href="mailto:info@fzgtechstaudt.de"
              className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-4 text-[15px] text-white/90"
            >
              info@fzgtechstaudt.de
            </a>
          </div>
        </div>
      )}
    </>
  );
}
