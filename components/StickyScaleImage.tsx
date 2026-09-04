"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  image: string;
  eyebrow: string;
  headline: ReactNode;
  body: ReactNode;
};

/**
 * Big image lives in a sticky viewport. As we scroll it scales up, the
 * overlay darkens, and the copy fades in. Shorter section = snappier feel.
 */
export default function StickyScaleImage({
  image,
  eyebrow,
  headline,
  body
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.35]);
  const overlay = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.55, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.25, 0.6], [30, 0]);

  return (
    <section ref={ref} className="relative h-[160vh] w-full">
      <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, backgroundImage: `url('${image}')` }}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
        />
        <motion.div
          style={{ opacity: overlay }}
          className="absolute inset-0 bg-ink-950"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-ink-950/50 to-ink-950" />

        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-8"
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {eyebrow}
          </p>
          <h2 className="balance text-[clamp(2rem,5.4vw,4.6rem)] font-semibold leading-[1.02] tracking-tightest text-white">
            {headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/75 md:text-[18px]">
            {body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
