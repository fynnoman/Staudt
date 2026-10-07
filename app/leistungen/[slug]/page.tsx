import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/business";
import { SERVICE_CONTENT } from "@/lib/service-content";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd
} from "@/components/JsonLd";
import ContactCTA from "@/components/ContactCTA";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = SERVICE_CONTENT[slug as keyof typeof SERVICE_CONTENT];
  if (!content) return {};
  return {
    title: `${content.title} in Saarlouis`,
    description: content.lead,
    alternates: { canonical: `/leistungen/${content.slug}` },
    openGraph: {
      title: `${content.title} · Fahrzeugtechnik Staudt Saarlouis`,
      description: content.lead,
      url: `https://www.fzgtechstaudt.de/leistungen/${content.slug}`,
      images: [{ url: content.heroImage, width: 1600, height: 900, alt: content.heroImageAlt }]
    }
  };
}

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = SERVICE_CONTENT[slug as keyof typeof SERVICE_CONTENT];
  if (!content) notFound();

  const service = SERVICES.find((s) => s.slug === content.slug)!;

  return (
    <>
      <ServiceJsonLd
        slug={content.slug}
        name={content.title}
        description={service.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Werkstatt", url: "/" },
          { name: "Leistungen", url: "/portfolio" },
          { name: content.title, url: `/leistungen/${content.slug}` }
        ]}
      />
      {content.faqs && content.faqs.length > 0 && <FaqJsonLd items={content.faqs} />}

      <article>
        <section className="relative pb-6 pt-28 md:pb-10 md:pt-56">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <nav aria-label="Breadcrumb" className="mb-5 text-[12px] text-white/50">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white/80">
                    Werkstatt
                  </Link>
                </li>
                <li aria-hidden>›</li>
                <li>
                  <Link href="/portfolio" className="hover:text-white/80">
                    Leistungen
                  </Link>
                </li>
                <li aria-hidden>›</li>
                <li className="text-white/80">{content.title}</li>
              </ol>
            </nav>

            <p className="mb-5 inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Leistung · Saarlouis
            </p>
            <h1 className="max-w-4xl text-[clamp(2rem,6.6vw,5.4rem)] font-semibold leading-[1] tracking-tightest">
              {content.title}
              <span className="text-white/50"> in Saarlouis.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/70">
              {content.lead}
            </p>
          </div>
        </section>

        <section className="relative py-10 md:py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <div className="glass overflow-hidden rounded-3xl">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={content.heroImage}
                      alt={content.heroImageAlt}
                      fill
                      priority
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="prose prose-invert max-w-none">
                  {content.intro.map((p, i) => (
                    <p
                      key={i}
                      className="mb-5 text-[16px] leading-relaxed text-white/80"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-10 md:py-16">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="glass rounded-3xl p-6 md:p-10">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <p className="inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  Umfang
                </p>
              </div>
              <h2 className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-tight tracking-tight text-white">
                {content.scope.title}
              </h2>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {content.scope.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3 text-[15.5px] text-white/85"
                  >
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-signal/15 text-signal">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {content.faqs && content.faqs.length > 0 && (
          <section className="relative py-10 md:py-16">
            <div className="mx-auto max-w-4xl px-5 md:px-8">
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <p className="inline-flex items-center gap-2 rounded-full glass-chip px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  Häufige Fragen
                </p>
              </div>
              <h2 className="text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-tight tracking-tight text-white">
                Fragen zu {content.title}
              </h2>
              <div className="mt-8 space-y-4">
                {content.faqs.map((f) => (
                  <details
                    key={f.q}
                    className="glass group rounded-2xl p-5 md:p-6"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[16px] font-medium text-white marker:hidden">
                      <span>{f.q}</span>
                      <span
                        aria-hidden
                        className="mt-1 shrink-0 text-white/50 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-[15.5px] leading-relaxed text-white/75">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactCTA />
      </article>
    </>
  );
}
