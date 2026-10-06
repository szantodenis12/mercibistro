import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, PageHero, RevealImage, SplitText } from "@/components/ui/blocks";
import { ArrowCircle } from "@/components/ui/Icons";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Despre noi",
  description:
    "Merci Bistro & Coffee Oradea: dorința noastră este să te răsfățăm. Mirodenii și condimente „de prin lume adunate”, paste și pâine de casă, preparate la smoker.",
  path: "/despre-noi",
});

const pillars = [
  {
    n: "01",
    title: "De prin lume adunate",
    text: "Mirodenii și condimente din bucătării diferite, puse împreună într-un meniu care călătorește din Italia până în Asia.",
  },
  {
    n: "02",
    title: "Făcut în casă",
    text: "Paste de casă, pâine de casă, papanași de casă. Lucrurile simple, făcute cum trebuie, fac diferența.",
  },
  {
    n: "03",
    title: "Fum și foc",
    text: "Coaste, porchetta și aripioare gătite încet la smoker — rețete care cer răbdare și se simt la prima îmbucătură.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Despre noi"
        title="Dorința noastră este să te răsfățăm"
        image="/images/steak-la-grill.jpg"
        imageAlt="Carne la grill cu ciuperci, morcovi, porumb copt și sos alb, pe farfurie neagră"
      />

      <section className="py-[5rem] md:py-[8rem]">
        <div className="container-x grid gap-[2.5rem] lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="text-gold-deep">Povestea Merci</Eyebrow>
          </div>
          <div className="lg:col-span-8">
            <p className="title-xs leading-[1.15]" data-fade>
              Dorința noastră este să îi răsfățăm pe toți cei care ne calcă pragul. Iar cu ajutorul mirodeniilor și condimentelor „de prin lume adunate”, ne propunem să îți oferim meniul de vis.
            </p>
            <p className="paragraph-l mt-[2rem] max-w-[40rem] text-muted" data-fade>
              Merci e un bistro & coffee pentru toate momentele zilei: o cafea și un mic dejun fără grabă, un prânz rapid între două întâlniri, o cină lungă cu prietenii sau o comandă acasă, într-o seară liniștită.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-[5rem] text-paper md:py-[7rem]">
        <div className="container-x">
          <SplitText text="Ce ne definește" className="title-l max-w-[14ch]" />
          <ul className="mt-[3.5rem] grid gap-[1px] bg-paper/15 md:grid-cols-3">
            {pillars.map((p) => (
              <li key={p.n} className="flex min-h-[20rem] flex-col justify-between bg-navy p-[1.75rem] md:p-[2.25rem]" data-fade>
                <p className="eyebrow tabular-nums text-gold">{p.n}</p>
                <div>
                  <h3 className="title-sm text-gold-soft">{p.title}</h3>
                  <p className="paragraph-m mt-[1rem] text-mist">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-[5rem] md:py-[8rem]">
        <div className="container-x grid items-end gap-[2.5rem] lg:grid-cols-12">
          <RevealImage
            src="/images/interior-merci.jpg"
            alt="Interiorul bistroului Merci, cu bar din lemn și lumină caldă"
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="aspect-[4/3] lg:col-span-7"
            parallax
          />
          <div className="lg:col-span-4 lg:col-start-9">
            <Eyebrow className="text-gold-deep">Bistro &amp; Coffee</Eyebrow>
            <SplitText text="Un loc în care te întorci cu drag" className="title-m mt-[1.5rem]" />
            <p className="paragraph-l mt-[1.5rem] text-muted" data-fade>
              Te așteptăm pe strada Aurel Lazăr, în Oradea — sau aducem noi Merci la tine, cu livrare la domiciliu.
            </p>
            <div className="mt-[2rem] flex flex-wrap gap-[1.25rem]" data-fade>
              <Link href="/meniu" className="btn btn-ink">
                Meniul nostru
              </Link>
              <Link href="/locatie" className="arrow-link">
                Cum ajungi <ArrowCircle />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
