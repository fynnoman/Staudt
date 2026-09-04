"use client";

import { motion } from "framer-motion";

const shots = [
  {
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    caption: "Auf der Bühne",
    meta: "Fahrwerk"
  },
  {
    src: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=1200&q=80",
    caption: "Präzises Werkzeug",
    meta: "Werkbank"
  },
  {
    src: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
    caption: "Bremsen frisch",
    meta: "Service"
  },
  {
    src: "https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?auto=format&fit=crop&w=1200&q=80",
    caption: "Diagnose",
    meta: "OBD"
  }
];

export default function WerkstattGallery() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-12">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Werkstatt
            </p>
            <h2 className="max-w-2xl text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.02] tracking-tightest">
              Ordnung, Werkzeug, Handwerk.
            </h2>
          </div>
          <p className="hidden max-w-sm text-[15px] leading-relaxed text-white/60 md:block">
            Ein Blick in unsere Halle. Aufgeräumte Arbeitsplätze und
            saubere Werkzeuge sind für uns Ausdruck des Handwerks.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
          {shots.slice(0, 3).map((s, i) => (
            <motion.div
              key={s.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`glass group relative overflow-hidden rounded-2xl md:rounded-3xl ${
                i === 0
                  ? "col-span-2 aspect-[4/3] md:col-span-1 md:aspect-[4/5]"
                  : "aspect-square md:aspect-[4/3]"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                style={{ backgroundImage: `url('${s.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-4 flex items-center justify-between">
                <span className="text-[13px] text-white/90">{s.caption}</span>
                <span className="glass-chip rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-white/80">
                  {s.meta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
