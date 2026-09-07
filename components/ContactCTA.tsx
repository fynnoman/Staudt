"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-28">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950" />
      </motion.div>

      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          Termin
        </p>
        <h2 className="balance text-[clamp(2.2rem,5vw,4.2rem)] font-semibold leading-[1.02] tracking-tightest text-white">
          Auto in gute Hände geben.<br />
          <span className="text-white/60">Wir machen den Rest.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-white/70">
          Ein Anruf reicht. Wir schauen sofort ins Buch und geben Ihnen einen
          realistischen Termin plus ehrlichen Kostenrahmen.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a
            href="tel:+4968319618905"
            className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-signal px-5 py-3.5 text-[15px] font-semibold text-black shadow-signal transition hover:bg-signal-soft"
          >
            06831 9618905
          </a>
          <Link
            href="/kontakt"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3.5 text-[15px] font-medium text-white/90 backdrop-blur transition hover:bg-white/[0.06]"
          >
            Nachricht senden
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
