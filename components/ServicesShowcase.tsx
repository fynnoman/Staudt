"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Service = {
  no: string;
  title: string;
  copy: string;
  bullets: string[];
  image: string;
};

const services: Service[] = [
  {
    no: "01",
    title: "Inspektion",
    copy:
      "Neu-, Jahres- oder Gebrauchtwagen: die Inspektion nach Herstellervorgabe hält Ihr Auto sicher und werterhaltend im Betrieb.",
    bullets: ["Herstellervorgabe", "Digitales Prüfprotokoll", "Termingerecht"],
    image:
      "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "02",
    title: "HU · AU",
    copy:
      "Hauptuntersuchung nach § 29 StVZO, inklusive Abgasuntersuchung. Wir bereiten Ihr Fahrzeug vor, TÜV donnerstags durch Dekra vor Ort.",
    bullets: ["§ 29 StVZO", "TÜV Do. vor Ort", "AU inklusive"],
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "03",
    title: "Glasservice",
    copy:
      "Steinschlag oder Riss? Wir tauschen die Scheibe direkt aus, damit Sie sicher weiterfahren können. Kurzfristige Termine möglich.",
    bullets: ["Steinschlagreparatur", "Kompletttausch", "Kurzfristig"],
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "04",
    title: "Reifenservice & Lagerung",
    copy:
      "Reifenwechsel vor Wintereinbruch, dazu großräumige, geschützte Flächen für die Einlagerung Ihrer Räder. Alles inklusive.",
    bullets: ["Wechseln & Wuchten", "Sichere Lagerung", "Saisonservice"],
    image:
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "05",
    title: "KFZ-Service",
    copy:
      "Bremsen und Bremsflüssigkeit, Zahnriemen, Motor, Getriebe, Fahrwerk bis zur Klimaanlage. Ein Ansprechpartner für alles.",
    bullets: ["Bremse & Fahrwerk", "Motor & Getriebe", "Klimaanlage"],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "06",
    title: "Ölwechsel",
    copy:
      "Damit Ihr Motor lange läuft und wenig verbraucht: sauberer, dokumentierter Ölwechsel nach Fahrzeugvorgabe.",
    bullets: ["Passendes Öl", "Filterwechsel", "Digital dokumentiert"],
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=1600&q=80"
  }
];

function ServiceCard({ s, index }: { s: Service; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <div
      className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative md:col-span-7"
      >
        <div className="glass overflow-hidden rounded-3xl">
          <div className="relative aspect-[16/11] w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${s.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-6 bottom-5 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                Leistung {s.no}
              </span>
              <span className="glass-chip rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/80">
                Meister
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="md:col-span-5"
      >
        <div className="mb-3 flex items-center gap-3">
          <span className="text-signal font-mono text-sm spec-num">{s.no}</span>
          <span className="h-px w-10 bg-white/20" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-white/55">
            Portfolio
          </span>
        </div>
        <h3 className="text-[clamp(1.75rem,3vw,2.6rem)] font-semibold leading-tight tracking-tight text-white">
          {s.title}
        </h3>
        <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-white/70">
          {s.copy}
        </p>
        <ul className="mt-6 space-y-2">
          {s.bullets.map((b) => (
            <li
              key={b}
              className="flex items-center gap-3 text-[14.5px] text-white/80"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-signal/15 text-signal">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link
            href="/kontakt"
            className="group inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.03] px-4 py-2.5 text-[13.5px] text-white/90 transition hover:bg-white/[0.07]"
          >
            Termin anfragen
            <span className="transition group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesShowcase() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-24 md:flex-row md:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Portfolio
            </p>
            <h2 className="max-w-2xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest">
              Alles für Ihren Wagen.<br />
              <span className="text-white/50">Aus einer Meisterhand.</span>
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-white/60">
            Sechs Kernleistungen, ein Betrieb. Vom kleinen Ölwechsel bis zur
            HU-Vorbereitung: klar dokumentiert, ehrlich beraten, sauber
            ausgeführt.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {services.map((s, i) => (
            <ServiceCard key={s.no} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
