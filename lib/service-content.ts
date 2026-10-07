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
      "Regelmäßige Service-Termine sind der einfachste Weg, Ihr Auto sicher und werterhaltend im Betrieb zu halten. Wir inspizieren nach Herstellervorgabe.",
    intro: [
      "Egal ob Neu-, Jahres- oder Gebrauchtwagen: Mit regelmäßigen Inspektionen sind Sie auf der sicheren Seite. Die Inspektion nach Herstellervorgabe gewährleistet den einwandfreien Betrieb Ihres Fahrzeugs und damit Ihre eigene Sicherheit sowie die anderer Verkehrsteilnehmer.",
      "Wir folgen den vom Hersteller vorgesehenen Prüfpunkten für Ihr Modell und sprechen auffällige Befunde offen mit Ihnen durch, bevor etwas repariert wird."
    ],
    scope: {
      title: "Was zur Inspektion gehört",
      items: [
        "Prüfung nach Herstellervorgabe",
        "Für Neu-, Jahres- und Gebrauchtwagen",
        "Regelmäßige Service-Termine",
        "Werterhaltender Betrieb"
      ]
    },
    faqs: [
      {
        q: "Nach welchem Standard wird inspiziert?",
        a: "Nach den Vorgaben Ihres Fahrzeugherstellers. Dadurch bleibt Ihr Auto so im Betrieb, wie es vorgesehen ist."
      },
      {
        q: "Für welche Fahrzeuge ist die Inspektion geeignet?",
        a: "Für Neu-, Jahres- und Gebrauchtwagen aller gängigen Marken."
      }
    ]
  },
  "hu-au": {
    slug: "hu-au",
    title: "HU · AU",
    heroImage:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Hauptuntersuchung in der Kfz-Werkstatt",
    lead:
      "Die Hauptuntersuchung nach § 29 StVZO stellt die Mängelfreiheit Ihres Fahrzeugs sicher. Wir bereiten Ihr Auto vor, der TÜV wird regelmäßig donnerstags durch die Dekra vor Ort abgenommen.",
    intro: [
      "Die wiederkehrende Hauptuntersuchung (HU) ist nach § 29 StVZO gesetzlich vorgeschrieben. Die Abgasuntersuchung (AU) ist fester Bestandteil der HU.",
      "In unserer Werkstatt inspizieren wir Ihr Auto vorab und machen es prüfbereit. Der TÜV wird dann donnerstags von der Dekra bei uns vor Ort abgenommen — Sie müssen keinen weiteren Termin bei einer separaten Prüfstelle organisieren."
    ],
    scope: {
      title: "Was bei der HU abläuft",
      items: [
        "Hauptuntersuchung nach § 29 StVZO",
        "Abgasuntersuchung als fester Teil der HU",
        "TÜV vor Ort donnerstags",
        "Prüfung durch die Dekra"
      ]
    },
    faqs: [
      {
        q: "Wann ist der TÜV bei Ihnen vor Ort?",
        a: "Donnerstags. An diesem Tag nimmt die Dekra die Hauptuntersuchung in unserer Werkstatt ab."
      },
      {
        q: "Ist die AU in der HU enthalten?",
        a: "Ja. Die Abgasuntersuchung ist fester Bestandteil der Hauptuntersuchung nach § 29 StVZO."
      },
      {
        q: "Wer nimmt die Prüfung ab?",
        a: "Die Dekra. Wir bereiten Ihr Fahrzeug vor und begleiten den Termin."
      }
    ]
  },
  glasservice: {
    slug: "glasservice",
    title: "Glasservice",
    heroImage: "/images/leistungen/glasservice.png",
    heroImageAlt: "Autoglas-Reparatur in der Meisterwerkstatt",
    lead:
      "Steinschlag in der Scheibe oder Riss? Sichern Sie sich schnell einen Termin. Wir tauschen Ihre Scheibe direkt und sauber aus, sodass Sie sicher weiterfahren können.",
    intro: [
      "Haben Sie einen Steinschlag in der Scheibe oder ist die Scheibe gerissen? Wir tauschen Ihre Scheibe direkt aus — als Partner eines Autoglas-Spezialisten mit festen Abläufen für Austausch und Kalibrierung.",
      "Je früher ein Steinschlag versorgt wird, desto geringer das Risiko, dass sich ein Riss ausbreitet. Rufen Sie uns an, wir vereinbaren einen zeitnahen Termin."
    ],
    scope: {
      title: "Was wir im Glasservice machen",
      items: [
        "Scheibentausch nach Steinschlag",
        "Scheibentausch bei Riss",
        "Autoglas-Spezialist Partner",
        "Schnelle Termine"
      ]
    },
    faqs: [
      {
        q: "Was soll ich bei einem Steinschlag tun?",
        a: "Rufen Sie uns zeitnah an. Ein Steinschlag kann sich bei Temperaturwechsel oder Erschütterung ausbreiten. Wir prüfen den Schaden und tauschen die Scheibe aus, damit Sie sicher weiterfahren können."
      },
      {
        q: "Sind Sie Autoglas-Spezialist?",
        a: "Wir arbeiten als Partner eines Autoglas-Spezialisten und haben die Abläufe für Scheibentausch und Kalibrierung fest im Griff."
      }
    ]
  },
  "reifenwechsel-lagerung": {
    slug: "reifenwechsel-lagerung",
    title: "Reifenwechsel & Lagerung",
    heroImage: "/images/leistungen/reifenwechsel-lagerung.png",
    heroImageAlt: "Reifenservice in der Meisterwerkstatt",
    lead:
      "Rechtzeitig den Termin für den Reifenwechsel sichern — besonders vor Wintereinbruch. Wir wechseln Ihre Räder und lagern die gewechselten Reifen auf großräumigen, geschützten Flächen bei uns ein.",
    intro: [
      "Reifenwechsel vor dem Wintereinbruch oder zum Saisonstart: Sichern Sie sich rechtzeitig einen Termin. In den Herbstwochen sind die Werkstätten der Region traditionell am stärksten gefragt.",
      "Nach dem Wechsel brauchen Ihre eingelagerten Reifen Platz. Wir bieten großräumige, geschützte Flächen für die Lagerung — Sie geben die Räder bei uns ab und holen sie zur nächsten Saison einfach wieder."
    ],
    scope: {
      title: "Was wir übernehmen",
      items: [
        "Reifenwechsel vor Wintereinbruch",
        "Reifenlagerung auf geschützten Flächen",
        "Großräumige Lagerflächen",
        "Zuverlässige Saisonwechsel"
      ]
    },
    faqs: [
      {
        q: "Lagern Sie meine Reifen ein?",
        a: "Ja. Wir haben großräumige, geschützte Flächen für die Lagerung Ihrer gewechselten Reifen."
      },
      {
        q: "Wann sollte ich den Reifenwechsel-Termin machen?",
        a: "Rechtzeitig vor dem Wintereinbruch. In den Herbstwochen sind die Termine erfahrungsgemäß am stärksten nachgefragt."
      }
    ]
  },
  "kfz-service": {
    slug: "kfz-service",
    title: "KFZ-Service",
    heroImage:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80",
    heroImageAlt: "Kfz-Service in der Meisterwerkstatt",
    lead:
      "Umfassender KFZ-Service unter einem Dach: Bremsen und Bremsflüssigkeit, Stoßdämpfer, Zahnriemen, Motor, Getriebe, Fahrwerk bis zur Klimaanlage. Ein Ansprechpartner für alles.",
    intro: [
      "Mit unserem umfassenden KFZ-Service kümmern wir uns um alle wichtigen Baugruppen Ihres Fahrzeugs: von den Bremsen und Stoßdämpfern über Zahnriemen, Motor, Getriebe und Fahrwerk bis zur Klimaanlage.",
      "Für Sie bedeutet das einen Ansprechpartner — statt für jede Reparatur eine andere Werkstatt."
    ],
    scope: {
      title: "Was zum KFZ-Service gehört",
      items: [
        "Bremsen und Bremsflüssigkeit",
        "Stoßdämpfer",
        "Zahnriemen",
        "Motor und Getriebe",
        "Fahrwerk",
        "Klimaanlage"
      ]
    },
    faqs: [
      {
        q: "Was gehört zum KFZ-Service?",
        a: "Bremsen und Bremsflüssigkeit, Stoßdämpfer, Zahnriemen, Motor, Getriebe, Fahrwerk und Klimaanlage."
      },
      {
        q: "Machen Sie auch Klimaanlagen?",
        a: "Ja, die Klimaanlage ist Teil unseres KFZ-Service."
      },
      {
        q: "Tauschen Sie Stoßdämpfer?",
        a: "Ja, Stoßdämpfer gehören fest zu unserem KFZ-Service."
      }
    ]
  },
  oelwechsel: {
    slug: "oelwechsel",
    title: "Ölwechsel",
    heroImage: "/images/leistungen/oelwechsel.png",
    heroImageAlt: "Ölwechsel in der Meisterwerkstatt",
    lead:
      "Damit Ihr Fahrzeug wie geschmiert läuft, einen niedrigen Verbrauch hält und ohne Geräuschentwicklung lange lebt: regelmäßiger Ölwechsel.",
    intro: [
      "Der Ölwechsel gehört zu den wichtigsten regelmäßigen Service-Arbeiten. Ein Fahrzeug, dessen Öl in sauberem Zustand ist, läuft ruhiger, verbraucht weniger und hält länger.",
      "Wir übernehmen den Wechsel für Ihr Fahrzeug — passend zu Ihrem Fahrzeugmodell und Fahrprofil. Als autorisierte MOTUL Öl-Station arbeiten wir mit entsprechend geprüften Produkten."
    ],
    scope: {
      title: "Warum regelmäßig",
      items: [
        "Niedriger Verbrauch",
        "Ruhiger, geräuscharmer Lauf",
        "Langer Motorlauf",
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
      "Auch Motorräder bringen wir in unserer Werkstatt wieder auf die Straße. Sprechen Sie uns an für Termin und Umfang.",
    intro: [
      "Neben PKW und Transportern nehmen wir in unserer Werkstatt auch Motorräder an. Rufen Sie uns am besten vorab an, dann klären wir Umfang und Termin direkt."
    ],
    scope: {
      title: "Was wir am Motorrad machen",
      items: [
        "Wartung und Reparatur",
        "Terminabsprache direkt",
        "In unserer Werkstatt in Saarlouis"
      ]
    }
  }
};
