import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SplitText } from "@/components/ui/blocks";
import { MenuNav } from "@/components/menu/MenuNav";
import { DishRow } from "@/components/menu/DishRow";
import { menu } from "@/data/menu";
import { itemCount } from "@/data/menu-utils";
import { business, SITE_URL } from "@/lib/content";
import { jsonLdScript, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Meniu",
  description: `Meniul complet Merci Bistro & Coffee Oradea: ${itemCount} de preparate — mic dejun, pizza, paste de casă, burgeri, preparate la smoker și deserturi. Prețuri, gramaje și valori nutriționale.`,
  path: "/meniu",
});

function menuJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Meniu Merci Bistro & Coffee",
    url: `${SITE_URL}/meniu`,
    inLanguage: "ro",
    hasMenuSection: menu.map((c) => ({
      "@type": "MenuSection",
      name: c.name,
      hasMenuItem: c.sections.flatMap((s) =>
        s.items.map((i) => ({
          "@type": "MenuItem",
          name: i.name,
          description: i.description,
          offers: { "@type": "Offer", price: i.price, priceCurrency: "RON" },
          ...(i.nutrition ? { nutrition: { "@type": "NutritionInformation", calories: `${Math.round(i.nutrition.kcal)} kcal`, servingSize: "100 g" } } : {}),
        })),
      ),
    })),
  };
}

export default function MenuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(menuJsonLd())} />
      <PageHero
        eyebrow="Meniu · Merci Bistro & Coffee"
        title="Meniul nostru"
        intro={`${menu.length} categorii și ${itemCount} de preparate, de la mic dejun la desert. Adaugă în coș ce îți face poftă — sau sună-ne și comandăm împreună.`}
        image="/images/garlic-bread.jpg"
        imageAlt="Garlic bread cu prosciutto și brânzeturi topite, servit în tigaie de fontă"
      />

      <MenuNav categories={menu.map((c) => ({ slug: c.slug, name: c.name }))} />

      <div className="container-x py-[3rem] md:py-[5rem]">
        {menu.map((cat, ci) => (
          <section key={cat.slug} id={cat.slug} aria-labelledby={`${cat.slug}-title`} className="grid scroll-mt-[9rem] gap-[2rem] border-t border-ink/15 pb-[3.5rem] pt-[2.5rem] first:border-t-0 first:pt-0 lg:grid-cols-12">
            <header className="lg:col-span-4">
              <div className="lg:sticky lg:top-[10rem]">
                <p className="eyebrow text-gold-deep tabular-nums">{String(ci + 1).padStart(2, "0")}</p>
                <SplitText id={`${cat.slug}-title`} text={cat.name} className="title-m mt-[0.9rem]" />
                {cat.intro && <p className="paragraph-m mt-[1rem] max-w-[22rem] text-muted">{cat.intro}</p>}
              </div>
            </header>
            <div className="lg:col-span-8">
              {cat.sections.map((sec, si) => (
                <div key={si} className={si > 0 ? "mt-[2.5rem]" : undefined}>
                  {sec.title && <h3 className="eyebrow-l border-b border-ink pb-[0.75rem] text-ink">{sec.title}</h3>}
                  <ul>
                    {sec.items.map((item) => (
                      <DishRow key={item.id} item={item} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}

        <aside className="mt-[2rem] grid gap-[1.5rem] bg-navy p-[2rem] text-paper md:grid-cols-12 md:p-[3rem]">
          <div className="md:col-span-7">
            <p className="eyebrow text-gold">Bine de știut</p>
            <p className="paragraph-m mt-[1rem] text-mist">
              Prețurile sunt exprimate în lei. Valorile nutriționale sunt calculate la 100 g de produs. Pentru informații despre alergeni sau preferințe alimentare, te rugăm să ne întrebi — îți răspundem cu drag.
            </p>
          </div>
          <div className="flex flex-col items-start gap-[0.75rem] md:col-span-4 md:col-start-9 md:items-end md:justify-center">
            <a href={business.phoneHref} className="btn btn-gold">
              Sună: {business.phone}
            </a>
            <Link href="/comanda" className="link-caps text-paper underline underline-offset-4 hover:text-gold">
              Vezi coșul / comandă
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
