import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Fahrzeugtechnik Staudt · Die Meisterwerkstatt in Saarlouis."
};

export default function ImpressumPage() {
  return (
    <section className="relative pt-28 md:pt-56">
      <div className="mx-auto max-w-3xl px-5 pb-16 md:px-8 md:pb-24">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          Rechtliches
        </p>
        <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest">
          Impressum
        </h1>

        <div className="glass mt-8 space-y-8 rounded-3xl p-6 text-[15.5px] leading-relaxed text-white/80 md:mt-10 md:p-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              Betreiber
            </div>
            <p className="mt-2">
              Fahrzeugtechnik Staudt · Die Meisterwerkstatt<br />
              Kohlbrunnenstraße 20<br />
              66740 Saarlouis
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              Inhaber
            </div>
            <p className="mt-2">Eric Staudt</p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              Kontakt
            </div>
            <p className="mt-2 spec-num">
              Telefon: 06831 9618905<br />
              Fax: 06831 9618904<br />
              E-Mail:{" "}
              <a href="mailto:info@fzgtechstaudt.de" className="text-signal underline underline-offset-4">
                info@fzgtechstaudt.de
              </a>
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              Umsatzsteuer-Identifikationsnummer gem. § 27a UStG
            </div>
            <p className="mt-2">xxx</p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              Inhaltlich Verantwortlicher gem. § 55 II RStV
            </div>
            <p className="mt-2">Eric Staudt (Anschrift siehe oben)</p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              Haftungshinweis
            </div>
            <p className="mt-2">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
