import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ArrowCircle, Facebook, Instagram, Star, TikTok } from "@/components/ui/Icons";
import { business, formatHour, nav, openingHours, usefulLinks } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden bg-ink text-paper">
      <Image
        src="/images/decor-muschi.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-navy-3/90 to-ink" aria-hidden="true" />

      <div className="container-x pb-[2rem] pt-[5rem] md:pt-[7rem]">
        <div className="grid gap-[3rem] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="h-auto w-[11rem] text-gold md:w-[14rem]" />
            <p className="script mt-[1.25rem] text-[1.35rem] text-gold-soft">„De prin lume adunate”</p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[2rem] inline-flex items-center gap-[0.75rem] border border-paper/15 bg-paper/5 px-[1rem] py-[0.75rem] backdrop-blur transition-colors hover:border-gold"
            >
              <span className="flex text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="text-[0.95rem]" />
                ))}
              </span>
              <span className="text-[0.9rem]">
                <strong className="font-display font-medium uppercase tracking-[0.04375em]">{business.reviews.label}</strong>
                <span className="text-mist"> · {business.reviews.count} recenzii pe Google</span>
              </span>
            </a>
          </div>

          <div className="grid gap-[2.5rem] sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="eyebrow text-gold">Vizitează-ne</h2>
              <address className="mt-[1.1rem] not-italic leading-[1.6] text-paper/90">
                {business.address.street}
                <br />
                {business.address.city}, jud. {business.address.region}
              </address>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="arrow-link mt-[1.1rem] text-paper [--arrow-hover:var(--color-ink)]">
                Indicații <ArrowCircle />
              </a>
            </div>
            <div>
              <h2 className="eyebrow text-gold">Program</h2>
              <dl className="mt-[1.1rem] space-y-[0.45rem] text-[0.95rem]">
                {openingHours.map((h) => (
                  <div key={h.label} className="flex justify-between gap-[1rem] sm:block">
                    <dt className="text-mist">{h.label}</dt>
                    <dd className="text-paper/95">
                      {formatHour(h.opens)} – {formatHour(h.closes)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="eyebrow text-gold">Contact</h2>
              <ul className="mt-[1.1rem] space-y-[0.45rem]">
                <li>
                  <a href={business.phoneHref} className="text-[1.05rem] font-semibold hover:text-gold">
                    {business.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className="break-all text-paper/90 hover:text-gold">
                    {business.email}
                  </a>
                </li>
              </ul>
              <ul className="mt-[1.25rem] flex gap-[0.5rem] text-[1.2rem]" aria-label="Rețele sociale">
                {[
                  { href: business.socials.instagram, label: "Instagram", Icon: Instagram },
                  { href: business.socials.facebook, label: "Facebook", Icon: Facebook },
                  { href: business.socials.tiktok, label: "TikTok", Icon: TikTok },
                ].map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Merci pe ${label}`}
                      className="grid h-[2.6rem] w-[2.6rem] place-items-center rounded-full border border-paper/25 transition-colors duration-300 ease-merci hover:border-gold hover:bg-gold hover:text-ink"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <nav aria-label="Navigație subsol" className="mt-[4rem] border-t border-paper/15 pt-[2rem]">
          <ul className="flex flex-wrap gap-x-[2rem] gap-y-[0.75rem]">
            {[{ href: "/", label: "Acasă" }, ...nav].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-caps hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-[2.5rem] flex flex-col gap-[1.5rem] text-[0.8rem] text-mist lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-[0.6rem]">
            <ul className="flex flex-wrap gap-x-[1.25rem] gap-y-[0.4rem]">
              <li>
                <Link href="/termeni-si-conditii" className="hover:text-paper">
                  Termeni și condiții
                </Link>
              </li>
              <li>
                <Link href="/despre-cookies" className="hover:text-paper">
                  Politica cookies
                </Link>
              </li>
              {usefulLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              © {year} {business.legalName} — Oradea. Toate drepturile rezervate.
            </p>
          </div>
          <div className="flex gap-[0.75rem]">
            <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" aria-label="ANPC — Soluționarea alternativă a litigiilor">
              <Image src="/brand/decorative-sal.svg" alt="" width={175} height={50} className="h-[2.6rem] w-auto" unoptimized />
            </a>
            <a
              href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Soluționarea online a litigiilor (Comisia Europeană)"
            >
              <Image src="/brand/decorative-sol.svg" alt="" width={175} height={50} className="h-[2.6rem] w-auto" unoptimized />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
