import { BUSINESS, SERVICES, SITE_URL } from "@/lib/business";
import { REVIEWS } from "@/lib/reviews";

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

const germanHolidays2026 = [
  "2026-01-01", // Neujahr
  "2026-04-03", // Karfreitag
  "2026-04-06", // Ostermontag
  "2026-05-01", // Tag der Arbeit
  "2026-05-14", // Christi Himmelfahrt
  "2026-05-25", // Pfingstmontag
  "2026-06-04", // Fronleichnam
  "2026-10-03", // Tag der Deutschen Einheit
  "2026-11-01", // Allerheiligen
  "2026-12-24", // Heiligabend
  "2026-12-25", // 1. Weihnachtstag
  "2026-12-26", // 2. Weihnachtstag
  "2026-12-31"  // Silvester
];

const specialHours = germanHolidays2026.map((d) => ({
  "@type": "OpeningHoursSpecification",
  validFrom: d,
  validThrough: d,
  opens: "00:00",
  closes: "00:00"
}));

const address = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.street,
  postalCode: BUSINESS.postalCode,
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.region,
  addressCountry: BUSINESS.country
};

const areaServed = [
  { "@type": "City", name: "Saarlouis" },
  { "@type": "City", name: "Dillingen (Saar)" },
  { "@type": "City", name: "Wallerfangen" },
  { "@type": "City", name: "Saarwellingen" },
  { "@type": "City", name: "Rehlingen-Siersburg" },
  { "@type": "City", name: "Bous" },
  { "@type": "City", name: "Lebach" },
  { "@type": "AdministrativeArea", name: "Landkreis Saarlouis" }
];

export function BusinessJsonLd({ sameAs = [] as string[] }: { sameAs?: string[] }) {
  const reviewObjects = REVIEWS.map((r) => ({
    "@type": "Review",
    "@id": `${SITE_URL}/#${r.id}`,
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewBody: r.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1
    }
  }));

  const ratings = REVIEWS.map((r) => r.rating);
  const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;

  const data = {
    "@context": "https://schema.org",
    "@type": ["AutoRepair", "MotorcycleRepair"],
    "@id": BUSINESS_ID,
    name: BUSINESS.shortName,
    legalName: BUSINESS.legalName,
    alternateName: ["Die Meisterwerkstatt Staudt", "Meisterwerkstatt Staudt"],
    description:
      "Kfz-Meisterwerkstatt in Saarlouis für Inspektion, HU/AU, Glasservice, Reifenwechsel und -lagerung, KFZ-Service, Ölwechsel und Motorrad-Service. Dekra-Prüfstelle, MOTUL Öl-Station.",
    url: SITE_URL,
    image: BUSINESS.logo,
    logo: {
      "@type": "ImageObject",
      url: BUSINESS.logo,
      width: 600,
      height: 600
    },
    telephone: BUSINESS.phone,
    faxNumber: BUSINESS.fax,
    email: BUSINESS.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude
    },
    hasMap: "https://maps.app.goo.gl/y6GiJg1HSyMW4H8X9",
    openingHoursSpecification: openingHours,
    specialOpeningHoursSpecification: specialHours,
    founder: {
      "@type": "Person",
      name: BUSINESS.owner,
      jobTitle: "Kfz-Meister · Inhaber"
    },
    employee: [
      {
        "@type": "Person",
        name: BUSINESS.owner,
        jobTitle: "Kfz-Meister · Inhaber"
      }
    ],
    areaServed,
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(avg.toFixed(1)),
      bestRating: 5,
      worstRating: 1,
      reviewCount: REVIEWS.length,
      ratingCount: REVIEWS.length
    },
    review: reviewObjects,
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
    url: `${SITE_URL}/leistungen/${slug}`,
    provider: { "@id": BUSINESS_ID },
    availableAtOrFrom: { "@id": BUSINESS_ID },
    hoursAvailable: openingHours,
    areaServed
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
