import type { Metadata } from "next";
import Marquee from "@/components/Marquee";
import ServicesShowcase from "@/components/ServicesShowcase";
import StickyScaleImage from "@/components/StickyScaleImage";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Portfolio · Leistungen der Meisterwerkstatt",
  description:
    "Inspektion, HU/AU, Glasservice, Reifenservice, KFZ-Service und Ölwechsel in Saarlouis. Alle Leistungen aus einer Meisterhand."
};

export default function PortfolioPage() {
  return (
    <>
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
            arbeiten mit Herstellervorgabe, dokumentieren digital und beraten
            ohne Werkstattlatein.
          </p>
        </div>
      </section>

      <Marquee />
      <ServicesShowcase />

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
