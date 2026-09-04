"use client";

import { motion } from "framer-motion";

const items = [
  "INSPEKTION",
  "HU · AU",
  "GLASSERVICE",
  "REIFENSERVICE",
  "KFZ-SERVICE",
  "ÖLWECHSEL",
  "BREMSE",
  "FAHRWERK",
  "KLIMAANLAGE",
  "MOTOR",
  "GETRIEBE",
  "TÜV DO."
];

export default function Marquee() {
  return (
    <section aria-hidden className="relative overflow-hidden border-y border-white/5 bg-ink-900/60 py-6">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 text-[15px] uppercase tracking-[0.28em] text-white/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {it}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
