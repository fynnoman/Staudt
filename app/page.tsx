import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StickyScaleImage from "@/components/StickyScaleImage";
import ServicesShowcase from "@/components/ServicesShowcase";
import Trust from "@/components/Trust";
import Reviews from "@/components/Reviews";
import ProcessSteps from "@/components/ProcessSteps";
import WerkstattGallery from "@/components/WerkstattGallery";
import Standort from "@/components/Standort";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      <StickyScaleImage
        image="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=2400&q=80"
        eyebrow="Über uns"
        headline={
          <>
            Ihre Meisterwerkstatt<br />
            <span className="text-signal">in Saarlouis.</span>
          </>
        }
        body={
          <>
            Ob Inspektion, Reparatur oder Reifenwechsel: Wir kümmern uns
            zuverlässig um Ihr Fahrzeug. Bei uns erhalten Sie persönliche
            Beratung, klare Absprachen und fachgerechte Arbeit.
          </>
        }
      />

      <ServicesShowcase />

      <Trust />

      <Reviews />

      <ProcessSteps />

      <WerkstattGallery />

      <Standort />

      <ContactCTA />
    </>
  );
}
