"use client";

import Link from "next/link";
import { useNowSaarlouis, isOpen, nextOpenLabel } from "@/lib/hours";

export default function CallBar() {
  const now = useNowSaarlouis();
  const open = now ? isOpen(now) : null;
  const label = now && !open ? nextOpenLabel(now) : null;

  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <a
        href="tel:+4968319618905"
        className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-xl bg-signal px-5 py-3.5 text-[15px] font-semibold text-black shadow-signal transition hover:bg-signal-soft"
      >
        <span className="grid h-7 w-7 place-items-center rounded-md bg-black/15">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.6}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>
        06831 9618905
      </a>

      <Link
        href="/kontakt"
        className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3.5 text-[15px] font-medium text-white/90 backdrop-blur transition hover:bg-white/[0.06]"
      >
        Termin anfragen
        <span aria-hidden>→</span>
      </Link>

      {now && (
        <span className="inline-flex min-h-[36px] items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[12px] text-white/70">
          <span className="relative flex h-2 w-2">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${
                open ? "bg-emerald-400" : "bg-white/40"
              }`}
            />
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${
                open ? "bg-emerald-400" : "bg-white/50"
              }`}
            />
          </span>
          {open ? "Jetzt geöffnet" : label ?? "Geschlossen"}
        </span>
      )}
    </div>
  );
}
