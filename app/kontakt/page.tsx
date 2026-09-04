import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Standort from "@/components/Standort";

export const metadata: Metadata = {
  title: "Kontakt · Fahrzeugtechnik Staudt Saarlouis",
  description:
    "Termin, Rückruf oder Beratung: Kontaktieren Sie die Meisterwerkstatt Staudt in Saarlouis. Kohlbrunnenstraße 20, 66740 Saarlouis."
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative pb-8 pt-40 md:pt-56">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Kontakt
          </p>
          <h1 className="max-w-4xl text-[clamp(2.4rem,6vw,5.4rem)] font-semibold leading-[0.98] tracking-tightest">
            Ihr Kontakt zu uns.<br />
            <span className="text-white/50">Kurzer Draht in die Meisterwerkstatt.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/70">
            Haben Sie Fragen zu unserem Angebot oder möchten Sie einen Termin
            vereinbaren? Wir sind während der Öffnungszeiten telefonisch, per
            E-Mail oder direkt vor Ort erreichbar.
          </p>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="glass rounded-3xl p-6 md:p-8">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                  So erreichen Sie uns
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Fahrzeugtechnik Staudt
                </h3>
                <p className="mt-1 text-white/70">
                  Kohlbrunnenstraße 20<br />66740 Saarlouis
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:+4968319618905"
                    className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 transition hover:bg-white/[0.06]"
                  >
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                        Telefon
                      </div>
                      <div className="mt-0.5 spec-num text-lg text-white">
                        06831 9618905
                      </div>
                    </div>
                    <span className="text-white/40">→</span>
                  </a>
                  <a
                    href="mailto:info@fzgtechstaudt.de"
                    className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 transition hover:bg-white/[0.06]"
                  >
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                        E-Mail
                      </div>
                      <div className="mt-0.5 text-lg text-white">
                        info@fzgtechstaudt.de
                      </div>
                    </div>
                    <span className="text-white/40">→</span>
                  </a>
                  <div className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                      Fax
                    </div>
                    <div className="mt-0.5 spec-num text-white/85">
                      06831 9618904
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass mt-6 rounded-3xl p-6 md:p-8">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                  Öffnungszeiten
                </div>
                <table className="mt-3 w-full text-[15px] text-white/85">
                  <tbody>
                    <tr className="border-b border-white/6">
                      <td className="py-2.5">Mo–Fr</td>
                      <td className="py-2.5 text-right spec-num">
                        8:00–12:00 · 13:00–17:00
                      </td>
                    </tr>
                    <tr className="border-b border-white/6">
                      <td className="py-2.5">Samstag</td>
                      <td className="py-2.5 text-right text-white/60">
                        Nach Vereinbarung
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2.5">Sonntag</td>
                      <td className="py-2.5 text-right text-white/60">
                        Geschlossen
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Standort />
    </>
  );
}
