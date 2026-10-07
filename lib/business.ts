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
  phone: "+4968319618905",
  phoneDisplay: "06831 9618905",
  fax: "+4968319618904",
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
    short: "Inspektionen nach Herstellervorgabe",
    description:
      "Wir führen Inspektionen nach den Vorgaben des Fahrzeugherstellers durch und prüfen Ihr Fahrzeug sorgfältig."
  },
  {
    slug: "hu-au",
    name: "HU & AU",
    short: "Hauptuntersuchung durch DEKRA bei uns vor Ort",
    description:
      "Wir bereiten Ihr Fahrzeug auf die Hauptuntersuchung vor. Jeden Donnerstag wird die HU durch DEKRA direkt bei uns in der Werkstatt durchgeführt."
  },
  {
    slug: "glasservice",
    name: "Glasservice",
    short: "Scheibentausch bei Steinschlag oder Riss",
    description:
      "Steinschlag oder Riss in der Scheibe? Wir kümmern uns um den Austausch Ihrer Fahrzeugscheibe und vereinbaren schnellstmöglich einen Termin."
  },
  {
    slug: "reifenwechsel-lagerung",
    name: "Reifenwechsel & Lagerung",
    short: "Reifenwechsel und Einlagerung Ihrer Räder",
    description:
      "Wir wechseln Ihre Räder passend zur Saison und können Ihre Reifen auf Wunsch bis zum nächsten Wechsel bei uns einlagern."
  },
  {
    slug: "kfz-service",
    name: "KFZ-Service",
    short: "Reparaturen an Bremsen, Fahrwerk, Motor, Getriebe und mehr",
    description:
      "Wir übernehmen Wartungen und Reparaturen an vielen wichtigen Bauteilen Ihres Fahrzeugs."
  },
  {
    slug: "oelwechsel",
    name: "Ölwechsel",
    short: "Ölwechsel passend zu Ihrem Fahrzeug",
    description:
      "Wir führen den Ölwechsel passend zu Ihrem Fahrzeug nach Herstellervorgaben durch und verwenden hochwertige Motoröle."
  },
  {
    slug: "motorrad",
    name: "Motorrad-Service",
    short: "Wartung und Reparatur von Motorrädern",
    description:
      "Auch Motorräder sind bei uns willkommen. Für Wartungen und Reparaturen sprechen Sie uns einfach an."
  }
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
