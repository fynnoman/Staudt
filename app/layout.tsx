import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { BusinessJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

export const viewport: Viewport = {
  themeColor: "#26282a",
  colorScheme: "dark",
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
    "Kfz-Meisterwerkstatt in Saarlouis: Inspektion, HU/AU, Glasservice, Reifenwechsel und -lagerung, kompletter KFZ-Service und Ölwechsel. TÜV donnerstags vor Ort durch Dekra. Termin unter 06831 9618905.",
  alternates: { canonical: "/" },
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
        url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Fahrzeugtechnik Staudt · Meisterwerkstatt Saarlouis"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahrzeugtechnik Staudt · Die Meisterwerkstatt in Saarlouis",
    description:
      "Meisterbetrieb für Inspektion, HU/AU, Glasservice, Reifenservice und Ölwechsel in Saarlouis.",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&h=630&q=80"
    ]
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
        <BusinessJsonLd sameAs={["https://share.google/CpZQKZfrVUtYwIeUi"]} />
        <WebSiteJsonLd />
        <MotionProvider>
          <div className="fixed inset-0 -z-10 bg-radial-glow" />
          <div className="fixed inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:56px_56px]" />
          <Nav />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
