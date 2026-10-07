"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "staudt-consent-osm";

type Props = {
  src: string;
  title: string;
};

export default function MapConsent({ src, title }: Props) {
  const [granted, setGranted] = useState<boolean>(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setGranted(window.localStorage.getItem(STORAGE_KEY) === "1");
    } catch {}
    setReady(true);
  }, []);

  function allow() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setGranted(true);
  }

  if (ready && granted) {
    return (
      <iframe
        title={title}
        src={src}
        className="h-full w-full grayscale contrast-[1.05] [filter:invert(0.92)_hue-rotate(180deg)]"
        loading="lazy"
      />
    );
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />

      <div className="relative z-10 mx-auto max-w-md px-6 py-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          Karte
        </span>
        <h3 className="mt-4 text-[18px] font-semibold leading-snug text-white md:text-[20px]">
          Karte wird erst nach Zustimmung geladen.
        </h3>
        <p className="mt-3 text-[13.5px] leading-relaxed text-white/70">
          Zur Darstellung des Standorts binden wir eine Karte von
          OpenStreetMap ein. Beim Laden wird Ihre IP-Adresse an die
          OpenStreetMap Foundation (Sitz in Großbritannien) übertragen.
          Mehr dazu in der{" "}
          <Link
            href="/datenschutz"
            className="text-signal underline underline-offset-4"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={allow}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-signal px-5 py-2.5 text-[14px] font-semibold text-black shadow-signal transition hover:bg-signal-soft"
        >
          Karte laden
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </button>
        <p className="mt-3 text-[11.5px] text-white/45">
          Zustimmung wird lokal in Ihrem Browser gespeichert und kann jederzeit widerrufen werden.
        </p>
      </div>
    </div>
  );
}
