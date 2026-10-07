import type { ServiceSlug } from "./business";

type Faq = { q: string; a: string };

export type ServiceContent = {
  slug: ServiceSlug;
  title: string;
  heroImage: string;
  heroImageAlt: string;
  lead: string;
  intro: string[];
  scope: { title: string; items: string[] };
  faqs?: Faq[];
};

export const SERVICE_CONTENT: Record<ServiceSlug, ServiceContent> = {
  inspektion: {
    slug: "inspektion",
    title: "Inspektion",
    heroImage:
      "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Fahrzeug auf der Hebebühne während der Inspektion",
    lead:
      "Regelmäßige Inspektionen helfen dabei, Verschleiß frühzeitig zu erkennen und Ihr Fahrzeug zuverlässig zu erhalten. Wir führen die Inspektion nach den Vorgaben Ihres Fahrzeugherstellers durch.",
    intro: [
      "Dabei kontrollieren wir die für Ihr Fahrzeug vorgesehenen Prüfpunkte. Sollte uns etwas auffallen, besprechen wir notwendige Arbeiten zuerst mit Ihnen."
    ],
    scope: {
      title: "Unsere Leistungen",
      items: [
        "Inspektion nach Herstellervorgabe",
        "Für Neu- und Gebrauchtwagen",
        "Prüfung der vorgesehenen Bauteile und Flüssigkeiten",
        "Persönliche Rücksprache bei zusätzlichen Arbeiten"
      ]
    }
  },
  "hu-au": {
    slug: "hu-au",
    title: "HU & AU",
    heroImage:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Hauptuntersuchung in der Kfz-Werkstatt",
    lead:
      "Die Hauptuntersuchung ist für Fahrzeuge regelmäßig gesetzlich vorgeschrieben. Bei uns können Sie Ihr Fahrzeug bequem auf die Prüfung vorbereiten und untersuchen lassen.",
    intro: [
      "Jeden Donnerstag führt DEKRA die Hauptuntersuchung direkt bei uns in der Werkstatt durch."
    ],
    scope: {
      title: "Das bieten wir",
      items: [
        "Vorbereitung auf die Hauptuntersuchung",
        "HU durch DEKRA bei uns vor Ort",
        "Jeden Donnerstag",
        "Abgasuntersuchung im Rahmen der HU"
      ]
    },
    faqs: [
      {
        q: "Wann ist DEKRA bei Ihnen vor Ort?",
        a: "Jeden Donnerstag. An diesem Tag führt DEKRA die Hauptuntersuchung direkt bei uns in der Werkstatt durch."
      },
      {
        q: "Ist die AU in der HU enthalten?",
        a: "Ja. Die Abgasuntersuchung ist Teil der Hauptuntersuchung."
      },
      {
        q: "Wer nimmt die Prüfung ab?",
        a: "DEKRA. Wir bereiten Ihr Fahrzeug vor und begleiten den Termin."
      }
    ]
  },
  glasservice: {
    slug: "glasservice",
    title: "Glasservice",
    heroImage: "/images/leistungen/glasservice.jpg",
    heroImageAlt: "Autoglas-Reparatur in der Meisterwerkstatt",
    lead:
      "Bei einem Steinschlag oder Riss in der Windschutzscheibe sollten Sie den Schaden möglichst schnell prüfen lassen.",
    intro: [
      "Wir kümmern uns um den Scheibentausch und vereinbaren mit Ihnen einen passenden Termin."
    ],
    scope: {
      title: "Unser Glasservice",
      items: [
        "Scheibentausch bei Steinschlag",
        "Scheibentausch bei Rissen",
        "Fachgerechter Einbau",
        "Schnelle Terminvereinbarung"
      ]
    }
  },
  "reifenwechsel-lagerung": {
    slug: "reifenwechsel-lagerung",
    title: "Reifenwechsel & Lagerung",
    heroImage: "/images/leistungen/reifenwechsel-lagerung.jpg",
    heroImageAlt: "Reifenservice in der Meisterwerkstatt",
    lead:
      "Wir wechseln Ihre Räder passend zur Saison. Auf Wunsch können Sie Ihre nicht benötigten Räder bis zum nächsten Wechsel bei uns einlagern.",
    intro: [
      "Gerade im Frühjahr und Herbst empfehlen wir eine frühzeitige Terminvereinbarung."
    ],
    scope: {
      title: "Unsere Leistungen",
      items: [
        "Wechsel von Sommer- und Winterrädern",
        "Einlagerung Ihrer Räder",
        "Geschützte Lagerung",
        "Terminvereinbarung für den nächsten Saisonwechsel"
      ]
    }
  },
  "kfz-service": {
    slug: "kfz-service",
    title: "KFZ-Service",
    heroImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Kfz-Service in der Meisterwerkstatt",
    lead:
      "Von Bremsen über Fahrwerk bis zur Klimaanlage: Wir übernehmen Wartungen und Reparaturen an zahlreichen Bauteilen Ihres Fahrzeugs.",
    intro: [
      "Bei Fragen zu einer bestimmten Reparatur können Sie uns jederzeit kontaktieren."
    ],
    scope: {
      title: "Unter anderem kümmern wir uns um",
      items: [
        "Bremsen und Bremsflüssigkeit",
        "Stoßdämpfer",
        "Zahnriemen",
        "Motor und Getriebe",
        "Fahrwerk",
        "Klimaanlage"
      ]
    }
  },
  oelwechsel: {
    slug: "oelwechsel",
    title: "Ölwechsel",
    heroImage: "/images/leistungen/oelwechsel.jpg",
    heroImageAlt: "Ölwechsel in der Meisterwerkstatt",
    lead:
      "Regelmäßige Ölwechsel sind wichtig für die Schmierung und den Schutz Ihres Motors.",
    intro: [
      "Wir verwenden das für Ihr Fahrzeug vorgesehene Motoröl und wechseln auf Wunsch auch den Ölfilter."
    ],
    scope: {
      title: "Unser Ölservice",
      items: [
        "Motorölwechsel",
        "Ölfilterwechsel",
        "Motoröl passend zum Fahrzeug",
        "MOTUL Öl-Station"
      ]
    }
  },
  motorrad: {
    slug: "motorrad",
    title: "Motorrad-Service",
    heroImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Motorrad in der Meisterwerkstatt",
    lead:
      "Neben Autos kümmern wir uns auch um Motorräder.",
    intro: [
      "Für Wartungen und Reparaturen können Sie uns gerne kontaktieren. Wir klären vorab, welche Arbeiten notwendig sind, und vereinbaren einen passenden Termin."
    ],
    scope: {
      title: "Unsere Leistungen",
      items: [
        "Wartung",
        "Reparaturen",
        "Persönliche Terminvereinbarung"
      ]
    }
  }
};
