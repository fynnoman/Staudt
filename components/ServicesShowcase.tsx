"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Service = {
  no: string;
  title: string;
  copy: string;
  bullets: string[];
  image: string;
  focus?: boolean;
  focusLabel?: string;
};

const services: Service[] = [
  {
    no: "01",
    title: "Inspektion",
    copy:
      "Neu-, Jahres- oder Gebrauchtwagen: die Inspektion nach Herstellervorgabe hält Ihr Auto im sicheren Betrieb und schützt Sie wie andere Verkehrsteilnehmer.",
    bullets: ["Nach Herstellervorgabe", "Regelmäßige Service-Termine", "Werterhaltender Betrieb"],
    image:
      "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "02",
    title: "HU · AU",
    copy:
      "Hauptuntersuchung nach § 29 StVZO, Abgasuntersuchung ist fester Bestandteil. Wir bereiten Ihr Fahrzeug vor, TÜV donnerstags durch Dekra vor Ort.",
    bullets: ["§ 29 StVZO", "TÜV Do. durch Dekra", "AU fester HU-Teil"],
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "03",
    title: "Glasservice",
    copy:
      "Steinschlag in der Scheibe oder Riss? Sichern Sie sich schnell Ihren Termin. Wir tauschen Ihre Scheibe direkt aus, sodass Sie sicher weiterfahren können.",
    bullets: ["Autoglas-Spezialist Partner", "Scheibentausch", "Schnelle Termine"],
    image: "/images/leistungen/glasservice.png",
    focus: true,
    focusLabel: "Spezialisierung"
  },
  {
    no: "04",
    title: "Reifenwechsel & Lagerung",
    copy:
      "Rechtzeitig Termin für den Reifenwechsel vor Wintereinbruch. Großräumige, geschützte Flächen für die Lagerung Ihrer gewechselten Reifen.",
    bullets: ["Reifenwechsel", "Sichere Lagerung", "Vor Wintereinbruch"],
    image: "/images/leistungen/reifenwechsel-lagerung.png"
  },
  {
    no: "05",
    title: "KFZ-Service",
    copy:
      "Umfassender KFZ-Service: Bremsen und Bremsflüssigkeit, Stoßdämpfer, Zahnriemen, Motor, Getriebe, Fahrwerk bis zur Klimaanlage. Ein Ansprechpartner für alles.",
    bullets: ["Bremse & Stoßdämpfer", "Motor & Getriebe", "Fahrwerk & Klima"],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "06",
    title: "Ölwechsel",
    copy:
      "Damit Ihr Fahrzeug wie geschmiert läuft, einen niedrigen Verbrauch hält und ohne Geräuschentwicklung lange lebt: regelmäßiger Ölwechsel. MOTUL Öl-Station.",
    bullets: ["Regelmäßiger Wechsel", "MOTUL Öl-Station", "Langer Motorlauf"],
    image: "/images/leistungen/oelwechsel.png"
  },
  {
    no: "07",
    title: "Motorrad-Service",
    copy:
      "Auch Motorräder bringen wir in unserer Werkstatt wieder auf die Straße. Sprechen Sie uns an für Termin und Umfang.",
    bullets: ["Wartung & Reparatur", "Terminabsprache direkt", "In Saarlouis"],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80"
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
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-white/40" />
              <div className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-white/40" />
              <div className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-white/40" />
              <div className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-white/40" />
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
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end md:gap-8">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <p className="inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                Portfolio
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                Sektion 02
              </span>
            </div>
            <h2 className="max-w-2xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest">
              Alles für Ihren Wagen.<br />
              <span className="text-white/50">Aus einer Meisterhand.</span>
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-white/60">
            Sieben Kernleistungen, ein Betrieb. Vom Ölwechsel bis zur
            HU-Vorbereitung: Meisterhand, ehrlich beraten, sauber ausgeführt.
          </p>
        </div>

        <div className="flex flex-col gap-14 md:gap-20">
          {services.map((s, i) => (
            <ServiceCard key={s.no} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
