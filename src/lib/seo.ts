import type { Metadata } from "next";
import { business, openingHours, SITE_URL } from "./content";

/** Per-page metadata helper: title, description, canonical, OG + Twitter (image comes from app/opengraph-image.jpg). */
export function pageMetadata({ title, description, path }: { title?: string; description: string; path: string }): Metadata {
  const fullTitle = title ? `${title} — Merci Bistro & Coffee Oradea` : "Merci Bistro & Coffee Oradea — de prin lume adunate";
  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: business.name,
      locale: "ro_RO",
      type: "website",
      // Explicit, because a page-level `openGraph` object replaces the file-based app/opengraph-image.jpg.
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Merci Bistro & Coffee Oradea" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/twitter-image.jpg"] },
  };
}

const dayMap = { Mo: "Monday", Tu: "Tuesday", We: "Wednesday", Th: "Thursday", Fr: "Friday", Sa: "Saturday", Su: "Sunday" } as const;

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: business.name,
    alternateName: "Merci Oradea",
    description: business.description,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.jpg`,
    logo: `${SITE_URL}/brand/logo-merci-gold.svg`,
    telephone: business.phone.replace(/\s/g, ""),
    email: business.email,
    priceRange: business.priceRange,
    servesCuisine: business.servesCuisine,
    menu: `${SITE_URL}/meniu`,
    hasMenu: `${SITE_URL}/meniu`,
    acceptsReservations: "True",
    currenciesAccepted: "RON",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Aurel Lazăr nr. 1",
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
    hasMap: business.mapsUrl,
    openingHoursSpecification: openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${dayMap[d]}`),
      opens: h.opens,
      closes: h.closes === "00:00" ? "23:59" : h.closes,
    })),
    sameAs: Object.values(business.socials),
    // TODO_CLIENT: aggregateRating trebuie să reflecte nota reală Google (ex. 4.8). Nu o inventăm — se adaugă când e confirmată.
  };
}

export const jsonLdScript = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
