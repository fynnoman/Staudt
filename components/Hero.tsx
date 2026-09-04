"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform
} from "framer-motion";

const ROTATING = [
  { word: "liefert.", tone: "text-signal" },
  { word: "prüft.", tone: "text-signal" },
  { word: "schraubt.", tone: "text-signal" },
  { word: "wechselt.", tone: "text-signal" },
  { word: "berät.", tone: "text-signal" }
];

function useNowSaarlouis() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function isOpen(d: Date) {
  const day = d.getDay(); // 0 Su .. 6 Sa
  const h = d.getHours();
  const m = d.getMinutes();
  const t = h * 60 + m;
  if (day === 0) return false;
  if (day >= 1 && day <= 5) {
    return (t >= 480 && t < 720) || (t >= 780 && t < 1020); // 08–12, 13–17
  }
  return false; // Sa nur nach Vereinbarung
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const stampY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % ROTATING.length),
      2400
    );
    return () => clearInterval(t);
  }, []);

  const now = useNowSaarlouis();
  const open = now ? isOpen(now) : true;

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden pt-24 md:pt-40"
    >
      {/* Ambient background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 will-change-transform"
      >
        <div className="absolute inset-0 scale-[1.1] bg-[url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1800&q=70')] bg-cover bg-[center_35%] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/80 to-ink-950" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_20%_10%,rgba(244,180,0,0.14),transparent_60%)]" />
      </motion.div>

      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:64px_64px] mask-fade-b" />

      {/* Big number stamp */}
      <motion.div
        style={{ y: stampY }}
        className="pointer-events-none absolute -right-8 top-[8%] hidden select-none md:block will-change-transform"
        aria-hidden
      >
        <div className="text-[clamp(12rem,26vw,26rem)] font-semibold leading-none tracking-tightest text-white/[0.035]">
          №01
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 gap-10 px-5 pb-14 md:gap-10 md:px-8 md:pb-24">
        {/* LEFT — copy */}
        <div className="col-span-12 md:col-span-7">
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
              Meisterbetrieb · Saarlouis
            </span>
            <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/65">
              <span className="h-1 w-3 rounded-full bg-white/40" />
              seit Handwerk
            </span>
          </div>

          <h1 className="balance text-[clamp(2.4rem,7.6vw,6.8rem)] font-semibold leading-[0.95] tracking-tightest text-white">
            Werkstatt,
            <br />
            die{" "}
            <span className="relative inline-flex align-baseline">
              <span className="relative inline-block min-w-[6.5ch] overflow-hidden pb-1 pr-1 text-left">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={ROTATING[idx].word}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`inline-block ${ROTATING[idx].tone}`}
                  >
                    {ROTATING[idx].word}
                  </motion.span>
                </AnimatePresence>
                <span className="absolute inset-x-0 -bottom-0 h-2 rounded-full bg-signal/20 blur-lg" />
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-[16.5px] leading-relaxed text-white/70 md:text-[18.5px]">
            Inspektion, HU/AU, Glasservice, Reifen und Ölwechsel. Alles aus
            einer Hand, sauber terminiert, ehrlich abgerechnet. Ihr Auto
            verdient einen Meister.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/kontakt"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-signal px-5 py-3.5 text-[15px] font-semibold text-black shadow-signal transition hover:bg-signal-soft"
            >
              Termin sichern
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+4968319618905"
              className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3.5 text-[15px] font-medium text-white/90 backdrop-blur transition hover:bg-white/[0.06]"
            >
              <span className="grid h-6 w-6 place-items-center rounded-md bg-white/10">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              06831 9618905
            </a>
          </div>

          {/* Live status ribbon */}
          <div className="mt-10 grid max-w-2xl grid-cols-1 divide-y divide-white/8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-center gap-3 px-4 py-3.5">
              <span className="relative flex h-2 w-2 shrink-0">
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
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Status
                </div>
                <div className="truncate text-[13px] font-medium text-white">
                  {open ? "Geöffnet" : "Geschlossen"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3.5">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-signal/15 text-signal">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </span>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                  TÜV vor Ort
                </div>
                <div className="truncate text-[13px] font-medium text-white">
                  Donnerstags · Dekra
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3.5">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-white/10 text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                >
                  <path d="M12 21s-7-4.5-7-11a7 7 0 1 1 14 0c0 6.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Standort
                </div>
                <div className="truncate text-[13px] font-medium text-white">
                  Kohlbrunnenstraße 20
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — tilted image card + orbit stats */}
        <div className="col-span-12 md:col-span-5">
          <div className="relative mx-auto max-w-[300px] md:mx-0 md:ml-auto md:max-w-md">
            {/* Vertical rail label */}
            <div className="pointer-events-none absolute -left-8 top-8 hidden origin-top-left rotate-90 text-[10px] uppercase tracking-[0.42em] text-white/35 md:block">
              Bühne · 03 · Live
            </div>

            <div className="relative -rotate-[2deg] md:-rotate-[3deg]">
              <div className="corner-mark relative">
                <div className="glass overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=1600&q=90')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                    <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                      <span className="glass-chip inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-white/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                        Bühne 03
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
                        № 01
                      </span>
                    </div>
                    <div className="absolute inset-x-5 bottom-5">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                        Vorbereitung
                      </div>
                      <div className="mt-1 text-lg font-semibold text-white">
                        HU-Abnahme
                      </div>
                      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "82%" }}
                          transition={{
                            duration: 1.8,
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className="h-full rounded-full bg-signal"
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-white/45">
                        <span>Prüfschritt 09/11</span>
                        <span className="spec-num text-white/75">82%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="glass-strong absolute -left-6 top-16 hidden rounded-xl px-3 py-2 md:block"
              >
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-signal text-black">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.6}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Meister
                    </div>
                    <div className="text-[12px] font-medium text-white">
                      Handwerkskammer
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="glass-strong absolute -right-6 bottom-24 hidden rounded-xl px-3 py-2 md:block"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Nächster Slot
                </div>
                <div className="mt-0.5 spec-num text-[13px] font-medium text-white">
                  Do · 08:30
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spec bar */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 md:px-8">
        <div className="glass grid grid-cols-2 divide-x divide-y divide-white/8 overflow-hidden rounded-2xl md:grid-cols-4 md:divide-y-0">
          {[
            { k: "6", l: "Kernleistungen", s: "aus einer Hand" },
            { k: "Do.", l: "TÜV vor Ort", s: "durch Dekra" },
            { k: "1×1", l: "Meisterbetrieb", s: "geführt" },
            { k: "0€", l: "Diagnose", s: "nur nach Freigabe" }
          ].map((s) => (
            <div key={s.l} className="flex flex-col gap-1 px-4 py-3.5 md:px-5 md:py-4">
              <div className="spec-num text-xl font-semibold text-white md:text-2xl">
                {s.k}
              </div>
              <div className="text-[12.5px] text-white/85">{s.l}</div>
              <div className="hidden text-[10.5px] uppercase tracking-[0.2em] text-white/40 md:block">
                {s.s}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 hidden justify-center md:flex">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="glass-chip flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70"
        >
          Scroll
          <span className="h-3 w-[1px] bg-white/50" />
        </motion.div>
      </div>
    </section>
  );
}
