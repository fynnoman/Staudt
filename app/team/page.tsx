import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team · Fahrzeugtechnik Staudt Saarlouis",
  description:
    "Das Team der Meisterwerkstatt Staudt in Saarlouis. Kfz-Meister, Kfz-Mechatroniker und Serviceberater unter einem Dach."
};

const members = [
  { role: "Kfz-Meister · Inhaber", name: "N. N." },
  { role: "Kfz-Mechatroniker", name: "N. N." },
  { role: "Kfz-Mechatroniker", name: "N. N." },
  { role: "Serviceberatung", name: "N. N." }
];

export default function TeamPage() {
  return (
    <>
      <section className="relative pb-6 pt-28 md:pb-8 md:pt-56">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Team
          </p>
          <h1 className="max-w-4xl text-[clamp(2rem,6.6vw,5.4rem)] font-semibold leading-[1] tracking-tightest">
            Menschen hinter der Meisterwerkstatt.<br />
            <span className="text-white/50">Handwerk mit Namen und Gesicht.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/70">
            Bei uns kümmert sich ein festes Team um Ihr Fahrzeug. Kurze Wege,
            klare Absprachen und Verantwortung von der Annahme bis zur Übergabe.
          </p>
        </div>
      </section>

      <section className="relative py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {members.map((m, i) => (
              <div
                key={i}
                className="glass overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink-900">
                  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(104,176,65,0.18),transparent_70%)]" />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    <span className="select-none text-[clamp(1.4rem,4vw,2rem)] font-bold uppercase tracking-[0.2em] text-white/25">
                      Platzhalter
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                    {m.role}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-white">
                    {m.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass mt-10 rounded-3xl p-6 md:p-8">
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              Hinweis
            </div>
            <p className="mt-2 max-w-2xl text-[15.5px] leading-relaxed text-white/75">
              Teamfotos und Namen werden ergänzt, sobald die Aufnahmen vorliegen.
              Bis dahin stehen Platzhalter, damit die Struktur der Seite sichtbar
              ist.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
