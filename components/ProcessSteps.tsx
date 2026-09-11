"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    no: "01",
    title: "Termin klären",
    body:
      "Kurzer Anruf oder Nachricht, wir prüfen sofort die freien Slots und geben Ihnen einen realistischen Kostenrahmen.",
    kbd: "call"
  },
  {
    no: "02",
    title: "Diagnose vor Ort",
    body:
      "Aufnahme in der Meisterwerkstatt: Fehlerspeicher, Sichtprüfung, Probefahrt. Sie bekommen Klartext, kein Werkstattlatein.",
    kbd: "scan"
  },
  {
    no: "03",
    title: "Freigabe & Preis",
    body:
      "Sie entscheiden. Wir arbeiten erst, wenn Sie den Kostenvoranschlag freigegeben haben. Keine Überraschungen.",
    kbd: "ok"
  },
  {
    no: "04",
    title: "Sauber ausgeführt",
    body:
      "Reparatur mit Herstellervorgabe und Original- oder gleichwertigen Teilen. Übergabe inklusive Protokoll.",
    kbd: "done"
  }
];

export default function ProcessSteps() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={ref} className="relative py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 md:mb-14">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              So läuft's
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
              Sektion 04
            </span>
          </div>
          <h2 className="max-w-3xl text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-tightest">
            Vom Anruf bis zur Schlüsselübergabe. Ohne Rätselraten.
          </h2>
        </div>

        <div className="relative grid gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {/* animated connector */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-white/8 md:block">
            <motion.div
              style={{ scaleX: lineScale, transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-signal via-signal to-transparent"
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass relative rounded-2xl p-5 md:p-6"
            >
              <div className="mb-5 flex items-center justify-between md:mb-6">
                <span className="text-signal font-mono text-sm spec-num">{s.no}</span>
                <span className="rounded bg-white/8 px-1.5 py-0.5 font-mono text-[10px] uppercase text-white/60">
                  {s.kbd}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-white/65">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
