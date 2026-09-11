"use client";

import { motion } from "framer-motion";

export default function Standort() {
  return (
    <section className="relative py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <p className="inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                Standort
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                Sektion 06
              </span>
            </div>
            <h2 className="text-[clamp(2rem,4.2vw,3.4rem)] font-semibold leading-[1.05] tracking-tightest">
              Kohlbrunnenstraße 20,<br />
              <span className="text-white/55">66740 Saarlouis.</span>
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4">
              <a
                href="tel:+4968319618905"
                className="glass flex items-center justify-between rounded-2xl p-5 transition hover:bg-white/[0.05]"
              >
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                    Telefon
                  </div>
                  <div className="mt-1 text-lg font-medium spec-num text-white">
                    06831 9618905
                  </div>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-signal text-black">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.4}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
              </a>

              <a
                href="mailto:info@fzgtechstaudt.de"
                className="glass flex items-center justify-between rounded-2xl p-5 transition hover:bg-white/[0.05]"
              >
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                    E-Mail
                  </div>
                  <div className="mt-1 text-lg font-medium text-white">
                    info@fzgtechstaudt.de
                  </div>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/8 text-white">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2}>
                    <path d="M4 4h16v16H4z" />
                    <path d="m4 6 8 7 8-7" />
                  </svg>
                </span>
              </a>

              <div className="glass rounded-2xl p-5">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                  Öffnungszeiten
                </div>
                <table className="mt-3 w-full text-[14.5px] text-white/85">
                  <tbody>
                    <tr className="border-b border-white/6">
                      <td className="py-2">Mo–Fr</td>
                      <td className="py-2 text-right spec-num">8:00–12:00 · 13:00–17:00</td>
                    </tr>
                    <tr className="border-b border-white/6">
                      <td className="py-2">Samstag</td>
                      <td className="py-2 text-right text-white/60">Nach Vereinbarung</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sonntag</td>
                      <td className="py-2 text-right text-white/60">Geschlossen</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass relative z-10 overflow-hidden rounded-3xl md:col-span-7 md:-mt-40 lg:-mt-56"
          >
            <div className="aspect-square w-full md:aspect-[1/1]">
              <iframe
                title="Standort Fahrzeugtechnik Staudt"
                src="https://maps.google.com/maps?q=Kohlbrunnenstra%C3%9Fe%2020%2C%2066740%20Saarlouis&z=15&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />
            <div className="absolute left-4 top-4 glass-chip flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Live-Karte
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
