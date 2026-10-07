"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "staudt-consent-notice";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const seen = window.localStorage.getItem(STORAGE_KEY);
      if (!seen) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function acknowledge() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Hinweis zu Datenschutz und Cookies"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-[max(16px,env(safe-area-inset-bottom))] md:px-6 md:pb-6"
        >
          <div className="glass-strong mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl p-5 shadow-2xl md:flex-row md:items-center md:justify-between md:gap-6 md:p-6">
            <div className="text-[14px] leading-relaxed text-white/80">
              <p className="font-medium text-white">
                Kurzer Hinweis zum Datenschutz.
              </p>
              <p className="mt-1.5 text-white/70">
                Diese Website setzt keine Analyse- oder Marketing-Cookies ein.
                Technisch notwendige Daten (z. B. Server-Logs) werden beim
                Aufruf verarbeitet. Die eingebettete Karte wird erst nach
                Ihrer ausdrücklichen Zustimmung geladen. Details in der{" "}
                <Link
                  href="/datenschutz"
                  className="text-signal underline underline-offset-4"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={acknowledge}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-signal px-5 py-2.5 text-[14px] font-semibold text-black shadow-signal transition hover:bg-signal-soft"
              >
                Verstanden
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
