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
    <section aria-hidden className="relative overflow-hidden border-y border-white/5 bg-ink-900/60 py-5 md:py-6">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="mx-5 flex items-center gap-5 text-[13px] uppercase tracking-[0.28em] text-white/50 md:mx-8 md:gap-8 md:text-[15px]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {it}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
