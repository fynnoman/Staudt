export const SITE_URL = "https://www.fzgtechstaudt.de";

export const BUSINESS = {
  legalName: "Fahrzeugtechnik Staudt · Die Meisterwerkstatt",
  shortName: "Fahrzeugtechnik Staudt",
  tagline: "Die Meisterwerkstatt in Saarlouis",
  owner: "Eric Staudt",
  street: "Kohlbrunnenstraße 20",
  postalCode: "66740",
  city: "Saarlouis",
  region: "Saarland",
  country: "DE",
  countryName: "Deutschland",
  phone: "+49-6831-9618905",
  phoneDisplay: "06831 9618905",
  fax: "+49-6831-9618904",
  faxDisplay: "06831 9618904",
  email: "info@fzgtechstaudt.de",
  latitude: 49.3226,
  longitude: 6.7755,
  logo: `${SITE_URL}/images/logo.png`
} as const;

export const SERVICES = [
  {
    slug: "inspektion",
    name: "Inspektion",
    short: "Inspektion nach Herstellervorgabe",
    description:
      "Regelmäßige Inspektion nach Herstellervorgabe für Neu-, Jahres- und Gebrauchtwagen. Hält Ihr Auto im sicheren, werterhaltenden Betrieb."
  },
  {
    slug: "hu-au",
    name: "HU · AU",
    short: "Hauptuntersuchung mit Abgasuntersuchung",
    description:
      "Hauptuntersuchung nach § 29 StVZO, Abgasuntersuchung ist fester Bestandteil. TÜV wird regelmäßig donnerstags durch die Dekra vor Ort abgenommen."
  },
  {
    slug: "glasservice",
    name: "Glasservice",
    short: "Scheibentausch bei Steinschlag und Riss",
    description:
      "Steinschlag in der Scheibe oder Riss? Wir tauschen Ihre Scheibe direkt und sauber aus, sodass Sie sicher weiterfahren können. Autoglas-Spezialist Partner."
  },
  {
    slug: "reifenwechsel-lagerung",
    name: "Reifenwechsel & Lagerung",
    short: "Reifenwechsel vor Wintereinbruch, geschützte Reifenlagerung",
    description:
      "Rechtzeitig Termin für den Reifenwechsel vor Wintereinbruch. Großräumige, geschützte Flächen für die Lagerung Ihrer gewechselten Reifen."
  },
  {
    slug: "kfz-service",
    name: "KFZ-Service",
    short: "Bremsen, Stoßdämpfer, Motor, Getriebe, Fahrwerk, Klimaanlage",
    description:
      "Umfassender KFZ-Service: Bremsen und Bremsflüssigkeit, Stoßdämpfer, Zahnriemen, Motor, Getriebe, Fahrwerk bis zur Klimaanlage. Ein Ansprechpartner für alles."
  },
  {
    slug: "oelwechsel",
    name: "Ölwechsel",
    short: "Regelmäßiger Ölwechsel für langen Motorlauf",
    description:
      "Damit Ihr Fahrzeug wie geschmiert läuft, einen niedrigen Verbrauch hält und ohne Geräuschentwicklung lange lebt: regelmäßiger Ölwechsel."
  },
  {
    slug: "motorrad",
    name: "Motorrad-Service",
    short: "Wartung und Reparatur für Motorräder",
    description:
      "Auch Motorräder bringen wir in unserer Werkstatt wieder auf die Straße. Sprechen Sie uns an für Termin und Umfang."
  }
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
