import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow, RevealImage, SplitText } from "@/components/ui/blocks";
import { ArrowCircle, Phone, Star } from "@/components/ui/Icons";
import { MenuTeaser, type TeaserSlide } from "@/components/home/MenuTeaser";
import { DishCarousel, type CarouselDish } from "@/components/home/DishCarousel";
import { featuredCategories, featuredDishes } from "@/data/featured";
import { getCategory, getItem, itemCount } from "@/data/menu-utils";
import { menu } from "@/data/menu";
import { business } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { ORDERING_ENABLED } from "@/features/ordering/config";

export const metadata: Metadata = pageMetadata({
  description:
    "Merci Bistro & Coffee, Oradea — mic dejun, pizza, paste de casă, burgeri și preparate la smoker, cu mirodenii „de prin lume adunate”. Livrăm la domiciliu, în Oradea.",
  path: "/",
});

export default function HomePage() {
  const slides: TeaserSlide[] = featuredCategories.map((c) => ({
    ...c,
    highlights: c.highlights.map((id) => {
      const it = getItem(id);
      return { name: it.name, price: it.price };
    }),
  }));

  const dishes: CarouselDish[] = featuredDishes.map((f) => {
    const it = getItem(f.id);
    const cat = getCategory(f.id.split("--")[0]);
    return { id: it.id, name: it.name, description: it.description, price: it.price, weight: it.weight, category: cat.name, image: f.image, alt: f.alt };
  });

  return (
    <>
      {/* 1 — Full-bleed hero */}
      <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0 -z-20" data-hero-bg>
          <Image
            src="/images/hero-frigarui-de-pui.jpg"
            alt="Frigărui de pui cu cartofi copți, servite pe o farfurie verde-albăstruie, cu tacâmuri aurii"
            fill
            preload
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgb(3_6_18/0.5),rgb(3_6_18/0.78))]" aria-hidden="true" />

        <div className="container-x flex max-w-[62rem] flex-col items-center pt-[5rem] text-center">
          <p className="script text-[1.35rem] text-gold md:text-[1.75rem]" data-hero-fade>
            „De prin lume adunate”
          </p>
          <SplitText as="h1" hero text="Bistro & coffee cu gust de călătorie" className="title-xl mt-[1.25rem]" />
          <p className="eyebrow-l mt-[1.75rem] text-paper/90" data-hero-fade>
            Livrăm la domiciliu, în Oradea!
          </p>
          <div className="mt-[2.5rem] flex w-full flex-col gap-[0.75rem] sm:w-auto sm:flex-row" data-hero-fade>
            <Link href="/meniu" className="btn btn-gold">
              Vezi meniul
            </Link>
            <Link href="/comanda" className="btn btn-ghost-light">
              Comandă online
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 hidden md:block" data-hero-fade>
          <div className="container-x flex items-end justify-between pb-[1.75rem] text-[0.85rem] text-paper/80">
            <p>
              {business.address.street}, {business.address.city}
            </p>
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[0.5rem] hover:text-paper">
              <span className="flex text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="text-[0.8rem]" />
                ))}
              </span>
              {business.reviews.label} · {business.reviews.count} recenzii Google
            </a>
          </div>
        </div>
      </section>

      {/* 2 — Text + image intro */}
      <section className="py-[5rem] md:py-[8rem]">
        <div className="container-x">
          <div className="grid gap-[2rem] lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow className="text-gold-deep">Merci Oradea · Bistro &amp; Coffee</Eyebrow>
            </div>
            <div className="lg:col-span-8">
              <SplitText text="Dorința noastră este să te răsfățăm" className="title-l" />
              <div className="mt-[2rem] grid gap-[2rem] md:grid-cols-2">
                <p className="paragraph-l" data-fade>
                  Cu mirodenii și condimente „de prin lume adunate”, gătim un meniu care trece firesc din Italia în Asia și înapoi acasă, la gusturile pe care le știm cu toții.
                </p>
                <div data-fade>
                  <p className="paragraph-m text-muted">
                    Mic dejun fără grabă, paste făcute în casă, pizza, burgeri și carne gătită încet la smoker — peste {Math.floor(itemCount / 10) * 10} de preparate, de la prima cafea până seara târziu.
                  </p>
                  <Link href="/despre-noi" className="arrow-link mt-[1.5rem]">
                    Povestea noastră <ArrowCircle />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <RevealImage
            src="/images/interior-merci.jpg"
            alt="Interiorul bistroului Merci: bar din lemn închis, mese negre, scaune verzi și lumină caldă"
            sizes="(min-width: 1920px) 1880px, 100vw"
            className="mt-[3.5rem] aspect-[4/3] md:mt-[5rem] md:aspect-[16/8]"
            parallax
          />
        </div>
      </section>

      {/* 3 — Split content (gold block) */}
      <MenuTeaser slides={slides} />

      {/* 4 — Content intro statement */}
      <section className="bg-paper-2 py-[5rem] md:py-[8rem]">
        <div className="container-x grid gap-[2.5rem] lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow className="text-gold-deep">Take a break</Eyebrow>
            <SplitText text="Fă o pauză. Restul lumii poate să aștepte." className="title-m mt-[1.5rem]" />
          </div>
          <div className="flex flex-col justify-end gap-[1.5rem] lg:col-span-4 lg:col-start-9" data-fade>
            <p className="paragraph-l">
              De la prima cafea a dimineții până la ultima felie de pizza din noapte, Merci e locul în care te oprești din alergat. Te așteptăm în timpul săptămânii de la 9:00, iar în weekend de la 11:00.
            </p>
            <Link href="/locatie" className="arrow-link">
              Locația noastră <ArrowCircle />
            </Link>
          </div>
        </div>
      </section>

      {/* 5 — Dish carousel */}
      <section className="bg-paper-2 pb-[5rem] md:pb-[8rem]">
        <div className="container-x">
          <div className="mb-[2.5rem] flex flex-col justify-between gap-[1.5rem] border-t border-ink/15 pt-[3rem] md:flex-row md:items-end">
            <SplitText text="Din bucătăria noastră" className="title-s" />
            <Link href="/meniu" className="arrow-link shrink-0" data-fade>
              Tot meniul · {menu.length} categorii <ArrowCircle />
            </Link>
          </div>
          <DishCarousel dishes={dishes} />
        </div>
      </section>

      {/* 6 — Three-column media */}
      <section className="py-[5rem] md:py-[8rem]">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-[0.75rem] md:grid-cols-12 md:gap-[1rem]">
            <RevealImage
              src="/images/somon-cu-midii.jpg"
              alt="File de somon cu midii, servit pe farfurie neagră cu tacâmuri aurii"
              sizes="(min-width: 768px) 33vw, 50vw"
              className="aspect-[3/4] md:col-span-4 md:mt-[6rem]"
            />
            <RevealImage
              src="/images/steak-la-grill.jpg"
              alt="Carne la grill cu ciuperci, morcovi, porumb copt și sos alb"
              sizes="(min-width: 768px) 42vw, 50vw"
              className="aspect-[3/4] md:col-span-5"
            />
            <RevealImage
              src="/images/adana-kebab.jpg"
              alt="Adana kebab cu roșii coapte și lipie"
              sizes="(min-width: 768px) 25vw, 100vw"
              className="col-span-2 aspect-[16/10] md:col-span-3 md:mt-[12rem] md:aspect-[3/4]"
            />
          </div>
          <div className="mt-[3rem] grid gap-[1.5rem] md:grid-cols-12">
            <p className="eyebrow text-gold-deep md:col-span-3" data-fade>
              Farfurii cu poveste
            </p>
            <p className="title-sm !leading-[1.08] md:col-span-8 md:col-start-5" data-fade>
              Fiecare farfurie e o mică călătorie: ingrediente atent alese, condimente de prin lume și grija de a găti totul ca pentru prieteni.
            </p>
          </div>
        </div>
      </section>

      {/* 7 — CTA card (navy block) */}
      <section className="bg-navy text-paper">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-[var(--gutter)] py-[4.5rem] md:px-[3rem] lg:px-[4.5rem] lg:py-[6rem]">
            <Eyebrow className="text-gold">Rezervări &amp; comenzi</Eyebrow>
            <SplitText text="Te așteptăm la masă sau acasă la tine" className="title-l mt-[1.5rem]" />
            <p className="paragraph-l mt-[1.75rem] max-w-[32rem] text-mist" data-fade>
              Rezervă o masă cu un simplu telefon sau comandă preparatele preferate cu livrare la domiciliu, în Oradea.
            </p>
            <div className="mt-[2.5rem] grid gap-[1rem] sm:grid-cols-2" data-fade>
              <a href={business.phoneHref} className="group flex flex-col gap-[1.5rem] border border-paper/20 p-[1.5rem] transition-colors duration-300 ease-merci hover:border-gold hover:bg-gold hover:text-ink">
                <Phone className="text-[1.5rem] text-gold group-hover:text-ink" />
                <span>
                  <span className="eyebrow-mini block opacity-80">Rezervă telefonic</span>
                  <span className="mt-[0.5rem] block font-sans text-[1.25rem] font-semibold">{business.phone}</span>
                </span>
              </a>
              <Link href="/comanda" className="arrow-link group !flex flex-col !items-stretch !gap-[1.5rem] border border-paper/20 p-[1.5rem] transition-colors duration-300 ease-merci hover:border-paper hover:bg-paper hover:text-ink">
                <span className="flex items-center justify-between">
                  <ArrowCircle />
                  {!ORDERING_ENABLED && <span className="eyebrow-mini bg-gold px-[0.6rem] pb-[0.3rem] pt-[0.45rem] text-ink">În curând</span>}
                </span>
                <span className="normal-case">
                  <span className="eyebrow-mini block opacity-80">Livrare la domiciliu</span>
                  <span className="mt-[0.5rem] block font-display text-[1.25rem] uppercase tracking-[0.025em]">Comandă online</span>
                </span>
              </Link>
            </div>
          </div>
          <RevealImage
            src="/images/oradea-noaptea.jpg"
            alt="Oradea noaptea: malul Crișului Repede și turlele luminate ale orașului"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] lg:aspect-auto lg:min-h-[44rem]"
            parallax
          />
        </div>
      </section>
    </>
  );
}
