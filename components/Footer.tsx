import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative mt-20 border-t border-white/5 bg-ink-900 md:mt-24"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-4 md:gap-14 md:px-8 md:py-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-signal text-black">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 6l7 7-7 7" />
                <path d="M3 13h18" />
              </svg>
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Fahrzeugtechnik Staudt
            </span>
          </div>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/60">
            Meisterbetrieb für Inspektion, HU/AU, Glasservice, Reifenservice
            und den kompletten KFZ-Service. Persönlich, transparent, präzise.
            Seit Jahren Ihre Werkstatt in Saarlouis.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:+4968319618905"
              className="glass-chip inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-signal" />
              06831 9618905
            </a>
            <a
              href="mailto:info@fzgtechstaudt.de"
              className="glass-chip inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm"
            >
              info@fzgtechstaudt.de
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
            Werkstatt
          </p>
          <ul className="space-y-2 text-[15px] text-white/75">
            <li>
              <Link href="/portfolio" className="hover:text-white">Leistungen</Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-white">Kontakt</Link>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-white">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
            Adresse
          </p>
          <address className="not-italic text-[15px] leading-relaxed text-white/75">
            Kohlbrunnenstraße 20<br />
            66740 Saarlouis
          </address>
          <p className="mt-5 mb-2 text-xs uppercase tracking-[0.2em] text-white/40">
            Öffnungszeiten
          </p>
          <p className="text-[15px] leading-relaxed text-white/75 spec-num">
            Mo–Fr 8:00–12:00 · 13:00–17:00<br />
            Sa nach Vereinbarung
          </p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 md:flex-row md:items-center md:px-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Fahrzeugtechnik Staudt · Inhaber Eric Staudt
          </p>
          <p className="text-xs text-white/40">
            Meisterbetrieb · Saarland · DE
          </p>
        </div>
      </div>
    </footer>
  );
}
