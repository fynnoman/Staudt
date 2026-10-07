import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import CookieBanner from "@/components/CookieBanner";
import { BusinessJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#26282a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fzgtechstaudt.de"),
  title: {
    default: "Fahrzeugtechnik Staudt · Die Meisterwerkstatt in Saarlouis",
    template: "%s · Fahrzeugtechnik Staudt"
  },
  description:
    "Kfz-Meisterwerkstatt in Saarlouis: Inspektion, HU/AU, Glasservice, Reifenwechsel und -lagerung, kompletter KFZ-Service, Ölwechsel und Motorrad-Service. TÜV donnerstags vor Ort durch Dekra. Termin unter 06831 9618905.",
  alternates: {
    canonical: "/",
    languages: { "de-DE": "/" }
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png"
  },
  openGraph: {
    title: "Fahrzeugtechnik Staudt · Die Meisterwerkstatt in Saarlouis",
    description:
      "Meisterbetrieb für Inspektion, HU/AU, Glasservice, Reifenservice und Ölwechsel in Saarlouis.",
    url: "https://www.fzgtechstaudt.de",
    siteName: "Fahrzeugtechnik Staudt",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/leistungen/glasservice.jpg",
        width: 1448,
        height: 1086,
        alt: "Fahrzeugtechnik Staudt · Meisterwerkstatt Saarlouis"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahrzeugtechnik Staudt · Die Meisterwerkstatt in Saarlouis",
    description:
      "Meisterbetrieb für Inspektion, HU/AU, Glasservice, Reifenservice und Ölwechsel in Saarlouis.",
    images: ["/images/leistungen/glasservice.jpg"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-ink-950 text-white antialiased">
        <BusinessJsonLd sameAs={["https://maps.app.goo.gl/y6GiJg1HSyMW4H8X9"]} />
        <WebSiteJsonLd />
        <MotionProvider>
          <div className="fixed inset-0 -z-10 bg-radial-glow" />
          <div className="fixed inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:56px_56px]" />
          <Nav />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </MotionProvider>
      </body>
    </html>
  );
}
