import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StickyScaleImage from "@/components/StickyScaleImage";
import ServicesShowcase from "@/components/ServicesShowcase";
import Trust from "@/components/Trust";
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
        eyebrow="Werkstatt · Saarlouis"
        headline={
          <>
            Willkommen in unserer<br />
            <span className="text-signal">Werkstatt.</span>
          </>
        }
        body={
          <>
            Schneller, umfassender Service an Ihrem Auto. Saubere Bühnen, kompetentes
            Team, klare Absprachen. Wir kümmern uns um Ihr Fahrzeug wie um unser
            eigenes.
          </>
        }
      />

      <ServicesShowcase />

      <Trust />

      <ProcessSteps />

      <WerkstattGallery />

      <Standort />

      <ContactCTA />
    </>
  );
}
