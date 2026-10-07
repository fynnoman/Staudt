import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import StickyScaleImage from "@/components/StickyScaleImage";
import ContactCTA from "@/components/ContactCTA";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { SERVICE_CONTENT } from "@/lib/service-content";
import { SERVICES } from "@/lib/business";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Inspektion, HU/AU, Glasservice, Reifenwechsel und -lagerung, KFZ-Service und Ölwechsel in Saarlouis. Alle Leistungen aus einer Meisterhand.",
  alternates: { canonical: "/portfolio" }
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Werkstatt", url: "/" },
          { name: "Leistungen", url: "/portfolio" }
        ]}
      />

      <section className="relative pb-6 pt-28 md:pb-8 md:pt-56">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Portfolio
          </p>
          <h1 className="max-w-4xl text-[clamp(2.2rem,7vw,5.8rem)] font-semibold leading-[1] tracking-tightest">
            Unser Portfolio.<br />
            <span className="text-white/50">Sechs Wege, Ihr Auto sicher zu machen.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/70">
            Von der Routine-Inspektion bis zum kompletten KFZ-Service. Wir
            arbeiten nach Herstellervorgabe und beraten ohne Werkstattlatein.
          </p>
        </div>
      </section>

      <Marquee />

      <section className="relative py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end md:gap-8">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <p className="inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  Leistungen
                </p>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
                  6 Kernleistungen
                </span>
              </div>
              <h2 className="max-w-2xl text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.02] tracking-tightest">
                Alles für Ihren Wagen. Aus einer Meisterhand.
              </h2>
            </div>
            <p className="max-w-md text-[16px] leading-relaxed text-white/60">
              Jede Leistung mit eigener Detailseite. Lesen Sie, was wir
              konkret machen und wie der Ablauf bei uns aussieht.
            </p>
          </div>

          <ul className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const content = SERVICE_CONTENT[s.slug];
              return (
                <li key={s.slug}>
                  <Link
                    href={`/leistungen/${s.slug}`}
                    className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition hover:-translate-y-0.5"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={content.heroImage}
                        alt={content.heroImageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute left-5 top-5">
                        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/70">
                          №&nbsp;{String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <h3 className="text-xl font-semibold tracking-tight text-white">
                        {s.name}
                      </h3>
                      <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-white/70">
                        {s.short}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-signal transition group-hover:gap-3">
                        Mehr erfahren
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <StickyScaleImage
        image="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=2400&q=80"
        eyebrow="Meister · Handwerk"
        headline={
          <>
            Zu jeglichen Fragen<br />
            <span className="text-signal">beraten wir Sie gerne.</span>
          </>
        }
        body={
          <>Zögern Sie nicht, uns zu kontaktieren. Wir nehmen uns Zeit für Ihr Anliegen.</>
        }
      />

      <ContactCTA />
    </>
  );
}
