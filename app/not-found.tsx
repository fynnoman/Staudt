import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description:
    "Die angeforderte Seite existiert nicht. Zurück zur Startseite der Fahrzeugtechnik Staudt in Saarlouis.",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70svh] items-center pt-28 md:pt-40">
      <div className="mx-auto max-w-3xl px-5 pb-20 text-center md:px-8">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          404
        </p>
        <h1 className="text-[clamp(2.2rem,6vw,4.4rem)] font-semibold leading-[1.02] tracking-tightest">
          Seite nicht gefunden.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/70">
          Die angeforderte Seite existiert nicht oder wurde verschoben. Nutzen
          Sie die Navigation oder gehen Sie zurück zur Startseite.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-signal px-5 py-3.5 text-[15px] font-semibold text-black shadow-signal transition hover:bg-signal-soft"
          >
            Zur Startseite
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3.5 text-[15px] font-medium text-white/90 backdrop-blur transition hover:bg-white/[0.06]"
          >
            Unsere Leistungen
          </Link>
        </div>
      </div>
    </section>
  );
}
