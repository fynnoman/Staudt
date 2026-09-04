import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
    "Kfz-Meisterwerkstatt in Saarlouis: Inspektion, HU/AU, Glasservice, Reifenservice, Ölwechsel und kompletter KFZ-Service. Termin unter 06831 9618905.",
  openGraph: {
    title: "Fahrzeugtechnik Staudt · Die Meisterwerkstatt in Saarlouis",
    description:
      "Meisterbetrieb für Inspektion, HU/AU, Glasservice, Reifenservice und Ölwechsel in Saarlouis.",
    url: "https://www.fzgtechstaudt.de",
    siteName: "Fahrzeugtechnik Staudt",
    locale: "de_DE",
    type: "website"
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-ink-950 text-white antialiased">
        <div className="fixed inset-0 -z-10 bg-radial-glow" />
        <div className="fixed inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:56px_56px]" />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
