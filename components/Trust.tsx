"use client";

import { motion } from "framer-motion";

const stats = [
  { n: "Meister", l: "geführter Betrieb", sub: "Handwerkskammer" },
  { n: "Do.", l: "TÜV vor Ort", sub: "Dekra Prüfstelle" },
  { n: "6", l: "Kernleistungen", sub: "Aus einer Hand" },
  { n: "0€", l: "Diagnose-Überraschung", sub: "Nur nach Freigabe" }
];

export default function Trust() {
  return (
    <section className="relative py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-12">
          <div className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-signal/20 blur-3xl" />
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                Warum Staudt
              </p>
              <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.05] tracking-tightest">
                Ehrliches Handwerk.<br />
                <span className="text-white/55">Ohne Zwischenrufer.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-white/70">
                Kein Callcenter, keine Kette. Sie sprechen mit dem Meister,
                der Ihr Auto auch tatsächlich in die Hand nimmt. Kurzer
                Draht, saubere Arbeit, faire Rechnung.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 md:p-5"
                >
                  <div className="spec-num text-2xl font-semibold text-white md:text-3xl">{s.n}</div>
                  <div className="mt-2 text-[13px] text-white/85">{s.l}</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                    {s.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
