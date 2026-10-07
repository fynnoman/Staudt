"use client";

import { motion } from "framer-motion";
import { REVIEWS } from "@/lib/reviews";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < count ? "fill-signal" : "fill-white/15"}`}
          aria-hidden
        >
          <path d="M12 2.5l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.8l7.1-.7L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function dateLabel(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", { month: "long", year: "numeric" });
}

export default function Reviews() {
  return (
    <section className="relative py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end md:gap-8">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <p className="inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                Kundenstimmen
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                Rezensionen · Google
              </span>
            </div>
            <h2 className="max-w-2xl text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.02] tracking-tightest">
              Was unsere Kunden sagen.
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-white/60">
            Echte Rezensionen von Google. Unverändert übernommen, bei Bedarf
            ins Deutsche übersetzt.
          </p>
        </div>

        <ul className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.li
              key={r.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="glass relative flex h-full flex-col rounded-3xl p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <Stars count={r.rating} />
                <span className="shrink-0 rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white/55">
                  {r.source}
                </span>
              </div>

              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-white/80">
                <span aria-hidden className="mr-1 text-signal/70">„</span>
                {r.body}
                <span aria-hidden className="ml-0.5 text-signal/70">"</span>
              </blockquote>

              <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-white/6 pt-4">
                <div className="min-w-0">
                  <div className="truncate text-[14px] font-medium text-white">
                    {r.author}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                    {dateLabel(r.date)}
                  </div>
                </div>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/[0.04] text-white/60">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path d="M22 11.5V12a10 10 0 1 1-5.9-9.1" />
                    <path d="M22 3l-9 9-3-3" />
                  </svg>
                </span>
              </figcaption>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
