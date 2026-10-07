"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Service = {
  no: string;
  slug: string;
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
    slug: "inspektion",
    title: "Inspektion",
    copy:
      "Wir führen Inspektionen nach den Vorgaben des Fahrzeugherstellers durch und prüfen Ihr Fahrzeug sorgfältig.",
    bullets: ["Nach Herstellervorgabe", "Für viele Fahrzeugmarken", "Regelmäßige Wartung"],
    image:
      "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "02",
    slug: "hu-au",
    title: "HU & AU",
    copy:
      "Wir bereiten Ihr Fahrzeug auf die Hauptuntersuchung vor. Jeden Donnerstag wird die HU durch DEKRA direkt bei uns in der Werkstatt durchgeführt.",
    bullets: ["HU durch DEKRA vor Ort", "Jeden Donnerstag", "Abgasuntersuchung im Rahmen der HU"],
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "03",
    slug: "glasservice",
    title: "Glasservice",
    copy:
      "Steinschlag oder Riss in der Scheibe? Wir kümmern uns um den Austausch Ihrer Fahrzeugscheibe und vereinbaren schnellstmöglich einen Termin.",
    bullets: ["Scheibentausch", "Bei Steinschlag oder Riss", "Schnelle Terminvergabe"],
    image: "/images/leistungen/glasservice.jpg"
  },
  {
    no: "04",
    slug: "reifenwechsel-lagerung",
    title: "Reifenwechsel & Lagerung",
    copy:
      "Wir wechseln Ihre Räder passend zur Saison und können Ihre Reifen auf Wunsch bis zum nächsten Wechsel bei uns einlagern.",
    bullets: ["Reifenwechsel", "Reifenlagerung", "Sommer- und Winterreifen"],
    image: "/images/leistungen/reifenwechsel-lagerung.jpg"
  },
  {
    no: "05",
    slug: "kfz-service",
    title: "KFZ-Service",
    copy:
      "Wir übernehmen Wartungen und Reparaturen an vielen wichtigen Bauteilen Ihres Fahrzeugs.",
    bullets: [
      "Bremsen und Stoßdämpfer",
      "Motor und Getriebe",
      "Fahrwerk",
      "Klimaanlage",
      "Zahnriemen"
    ],
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80"
  },
  {
    no: "06",
    slug: "oelwechsel",
    title: "Ölwechsel",
    copy:
      "Wir führen den Ölwechsel passend zu Ihrem Fahrzeug nach Herstellervorgaben durch und verwenden hochwertige Motoröle.",
    bullets: ["Öl- und Filterwechsel", "Passendes Motoröl für Ihr Fahrzeug", "MOTUL Öl-Station"],
    image: "/images/leistungen/oelwechsel.jpg"
  },
  {
    no: "07",
    slug: "motorrad",
    title: "Motorrad-Service",
    copy:
      "Auch Motorräder sind bei uns willkommen. Für Wartungen und Reparaturen sprechen Sie uns einfach an.",
    bullets: ["Wartung", "Reparaturen", "Persönliche Terminabsprache"],
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
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={`/leistungen/${s.slug}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-signal/15 px-4 py-2.5 text-[13.5px] font-medium text-signal transition hover:bg-signal/25"
          >
            Mehr zu {s.title}
            <span className="transition group-hover:translate-x-0.5">→</span>
          </Link>
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
                Unsere Leistungen
              </p>
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                Sektion 02
              </span>
            </div>
            <h2 className="max-w-2xl text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest">
              Alles rund um<br />
              <span className="text-white/50">Ihr Fahrzeug.</span>
            </h2>
          </div>
          <p className="max-w-md text-[16px] leading-relaxed text-white/60">
            Von der Inspektion über den Reifenwechsel bis zur Reparatur: Bei
            uns bekommen Sie viele Leistungen direkt aus einer Hand.
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
