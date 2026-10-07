import { BUSINESS, SERVICES, SITE_URL } from "@/lib/business";

const BUSINESS_ID = `${SITE_URL}/#business`;

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "12:00"
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "13:00",
    closes: "17:00"
  }
];

const address = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.street,
  postalCode: BUSINESS.postalCode,
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.region,
  addressCountry: BUSINESS.country
};

export function BusinessJsonLd({ sameAs = [] as string[] }: { sameAs?: string[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": BUSINESS_ID,
    name: BUSINESS.shortName,
    legalName: BUSINESS.legalName,
    alternateName: ["Die Meisterwerkstatt Staudt", "Meisterwerkstatt Staudt"],
    description:
      "Kfz-Meisterwerkstatt in Saarlouis für Inspektion, HU/AU, Glasservice, Reifenwechsel und -lagerung, KFZ-Service und Ölwechsel.",
    url: SITE_URL,
    image: BUSINESS.logo,
    logo: BUSINESS.logo,
    telephone: BUSINESS.phone,
    faxNumber: BUSINESS.fax,
    email: BUSINESS.email,
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude
    },
    openingHoursSpecification: openingHours,
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
      jobTitle: "Kfz-Meister · Inhaber"
    },
    areaServed: [
      { "@type": "City", name: "Saarlouis" },
      { "@type": "AdministrativeArea", name: "Landkreis Saarlouis" },
      { "@type": "State", name: "Saarland" }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Kfz-Leistungen",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.short,
          url: `${SITE_URL}/leistungen/${s.slug}`,
          provider: { "@id": BUSINESS_ID }
        }
      }))
    },
    ...(sameAs.length > 0 ? { sameAs } : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS.legalName,
    url: SITE_URL,
    inLanguage: "de-DE",
    publisher: { "@id": BUSINESS_ID }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  slug,
  name,
  description
}: {
  slug: string;
  name: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/leistungen/${slug}#service`,
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}/leistungen/${slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "Saarlouis" },
      { "@type": "AdministrativeArea", name: "Landkreis Saarlouis" }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a }
    }))
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
