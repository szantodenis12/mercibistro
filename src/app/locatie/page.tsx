import type { Metadata } from "next";
import { Eyebrow, PageHero, SplitText } from "@/components/ui/blocks";
import { ArrowCircle, Clock, MapPin, Phone } from "@/components/ui/Icons";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { business, formatHour, openingHours } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Locație și contact",
  description:
    "Merci Bistro & Coffee: Str. Aurel Lazăr nr. 1, Oradea. Program: L–Mi 9–23, J–V 9–24, S 11–24, D 11–23. Telefon +40 771 216 743 pentru rezervări și comenzi.",
  path: "/locatie",
});

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Locație & contact"
        title="Ne găsești în Oradea"
        intro="Strada Aurel Lazăr nr. 1 — pentru o cafea, o masă în oraș sau o comandă ridicată din bistro."
        image="/images/oradea-noaptea.jpg"
        imageAlt="Oradea noaptea, cu reflexia luminilor în Crișul Repede"
        imagePosition="center 60%"
      />

      <section className="py-[5rem] md:py-[7rem]">
        <div className="container-x grid gap-[3rem] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow className="text-gold-deep">Merci Bistro &amp; Coffee</Eyebrow>
            <SplitText text="Hai pe la noi" className="title-l mt-[1.5rem]" />

            <dl className="mt-[3rem] divide-y divide-ink/15 border-y border-ink/15">
              <div className="flex gap-[1.25rem] py-[1.5rem]" data-fade>
                <dt>
                  <MapPin className="mt-[0.15rem] text-[1.4rem] text-gold-deep" />
                  <span className="sr-only">Adresă</span>
                </dt>
                <dd>
                  <address className="paragraph-l not-italic">
                    {business.address.street}
                    <br />
                    {business.address.postalCode} {business.address.city}, jud. {business.address.region}
                  </address>
                  <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="arrow-link mt-[1rem]">
                    Deschide în Google Maps <ArrowCircle />
                  </a>
                </dd>
              </div>
              <div className="flex gap-[1.25rem] py-[1.5rem]" data-fade>
                <dt>
                  <Phone className="mt-[0.15rem] text-[1.4rem] text-gold-deep" />
                  <span className="sr-only">Telefon și e-mail</span>
                </dt>
                <dd className="space-y-[0.35rem]">
                  <a href={business.phoneHref} className="block text-[1.35rem] font-semibold hover:text-gold-deep">
                    {business.phone}
                  </a>
                  <a href={`mailto:${business.email}`} className="block text-muted underline underline-offset-4 hover:text-ink">
                    {business.email}
                  </a>
                  <p className="pt-[0.35rem] text-[0.9rem] text-muted">Rezervări și comenzi telefonice, în timpul programului.</p>
                </dd>
              </div>
              <div className="flex gap-[1.25rem] py-[1.5rem]" data-fade>
                <dt>
                  <Clock className="mt-[0.15rem] text-[1.4rem] text-gold-deep" />
                  <span className="sr-only">Program</span>
                </dt>
                <dd className="w-full">
                  <table className="w-full max-w-[24rem]">
                    <caption className="sr-only">Program de funcționare</caption>
                    <tbody>
                      {openingHours.map((h) => (
                        <tr key={h.label}>
                          <th scope="row" className="py-[0.3rem] text-left font-medium text-muted">
                            {h.label}
                          </th>
                          <td className="py-[0.3rem] text-right font-semibold tabular-nums">
                            {formatHour(h.opens)} – {formatHour(h.closes)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>

          <div className="min-h-[26rem] lg:col-span-7">
            <MapEmbed src={business.mapsEmbedUrl} title="Harta: Merci Bistro & Coffee, Str. Aurel Lazăr nr. 1, Oradea" />
          </div>
        </div>
      </section>
    </>
  );
}
