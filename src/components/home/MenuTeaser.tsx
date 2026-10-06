"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ArrowCircle, ArrowLeft, ArrowRight } from "@/components/ui/Icons";
import { formatLei } from "@/features/ordering/format";

export type TeaserSlide = {
  slug: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  highlights: { name: string; price: number }[];
};

/**
 * Ballena "split-content": colored block with a hand-rolled gallery (dots, prev/next, 50px swipe)
 * synced to a text panel. Background: Merci gold (Ballena terracotta slot).
 */
export function MenuTeaser({ slides }: { slides: TeaserSlide[] }) {
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);
  const go = (i: number) => setActive((i + slides.length) % slides.length);
  const slide = slides[active];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="bg-gold text-ink" aria-roledescription="carusel" aria-label="Categorii din meniu">
      <div className="grid lg:grid-cols-2">
        <div
          className="relative aspect-[4/5] overflow-hidden bg-navy sm:aspect-[4/3] lg:aspect-auto lg:min-h-[48rem]"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          {slides.map((s, i) => (
            <div
              key={s.slug}
              className={clsx(
                "absolute inset-0 transition-[opacity,transform] duration-[1200ms] ease-merci",
                i === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0",
              )}
              aria-hidden={i !== active}
            >
              <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          ))}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink/70 to-transparent p-[1.25rem] pt-[4rem] text-paper">
            <div className="flex gap-[0.5rem]" role="tablist" aria-label="Alege categoria">
              {slides.map((s, i) => (
                <button
                  key={s.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={s.title}
                  onClick={() => go(i)}
                  className="group grid h-[1.75rem] w-[1.75rem] place-items-center"
                >
                  <span className={clsx("block h-[0.5rem] w-[0.5rem] rounded-full border border-paper transition-colors", i === active ? "bg-paper" : "group-hover:bg-paper/60")} />
                </button>
              ))}
            </div>
            <div className="flex gap-[0.5rem]">
              <button type="button" onClick={() => go(active - 1)} aria-label="Categoria anterioară" className="grid h-[2.75rem] w-[2.75rem] place-items-center rounded-full border border-paper/60 transition-colors hover:bg-paper hover:text-ink">
                <ArrowLeft className="text-[1.2rem]" />
              </button>
              <button type="button" onClick={() => go(active + 1)} aria-label="Categoria următoare" className="grid h-[2.75rem] w-[2.75rem] place-items-center rounded-full border border-paper/60 transition-colors hover:bg-paper hover:text-ink">
                <ArrowRight className="text-[1.2rem]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-[3rem] px-[var(--gutter)] py-[3.5rem] md:px-[3rem] lg:px-[4.5rem] lg:py-[5rem]">
          <div className="flex items-center justify-between">
            <p className="eyebrow">Din meniul nostru</p>
            <p className="eyebrow tabular-nums" aria-live="polite">
              {pad(active + 1)} / {pad(slides.length)}
            </p>
          </div>

          <div key={slide.slug} className="animate-[page-in_0.8s_var(--ease-merci)_both]">
            <h2 className="title-l">{slide.title}</h2>
            <p className="paragraph-l mt-[1.5rem] max-w-[30rem]">{slide.text}</p>
            <ul className="mt-[2rem] max-w-[30rem] border-t border-ink/25">
              {slide.highlights.map((h) => (
                <li key={h.name} className="flex items-baseline justify-between gap-[1.5rem] border-b border-ink/25 py-[0.9rem]">
                  <span className="font-display text-[0.95rem] uppercase leading-[1.2] tracking-[0.025em]">{h.name}</span>
                  <span className="shrink-0 font-sans font-semibold tabular-nums">{formatLei(h.price)}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link href={`/meniu#${slide.slug}`} className="arrow-link self-start [--arrow-hover:var(--color-gold)]">
            Vezi toată categoria <ArrowCircle />
          </Link>
        </div>
      </div>
    </section>
  );
}
