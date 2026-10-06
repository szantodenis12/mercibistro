"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@/components/ui/Icons";
import { AddToCartButton } from "@/features/ordering/AddToCartButton";
import { formatLei } from "@/features/ordering/format";

export type CarouselDish = {
  id: string;
  name: string;
  description?: string;
  price: number;
  weight?: number;
  category: string;
  image?: string;
  alt?: string;
};

/**
 * Ballena "slider": 1 → 2 (768px) → 3 (1024px) cards, 16px gap, custom prev/next and a
 * progress bar driven by scroll position. Native scroll-snap = touch/trackpad friendly.
 */
export function DishCarousel({ dishes }: { dishes: CarouselDish[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const p = max > 0 ? el.scrollLeft / max : 1;
    setProgress(p);
    setAtStart(el.scrollLeft < 4);
    setAtEnd(el.scrollLeft > max - 4);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const w = card ? card.getBoundingClientRect().width + 16 : el.clientWidth;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const visible = 0.12 + progress * 0.88;

  return (
    <div>
      <ul
        ref={track}
        className="no-scrollbar -mx-[var(--gutter)] flex snap-x snap-mandatory gap-[16px] overflow-x-auto scroll-px-[var(--gutter)] px-[var(--gutter)] pb-[0.5rem]"
        aria-label="Preparate din meniu"
      >
        {dishes.map((d) => (
          <li key={d.id} className="w-[82%] shrink-0 snap-start sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-32px)/3)]">
            <article className="flex h-full flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                {d.image ? (
                  <div className="absolute inset-0" data-zoom>
                    <Image src={d.image} alt={d.alt ?? d.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 82vw" className="object-cover transition-transform duration-[1200ms] ease-merci hover:scale-[1.04]" />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-between bg-[radial-gradient(circle_at_30%_20%,var(--color-navy-2),var(--color-navy-3)_55%,var(--color-ink))] p-[1.75rem] text-paper">
                    <p className="eyebrow-mini text-gold">{d.category}</p>
                    <p className="title-s text-gold-soft" aria-hidden="true">
                      {d.name}
                    </p>
                    <p className="script text-[1.1rem] text-paper/70">Merci</p>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col pt-[1.25rem]">
                <p className="eyebrow-mini text-gold-deep">{d.category}</p>
                <h3 className="mt-[0.6rem] font-display text-[1.25rem] uppercase leading-[1.05] tracking-[0.025em]">{d.name}</h3>
                {d.description && <p className="mt-[0.6rem] line-clamp-2 text-[0.92rem] text-muted">{d.description}</p>}
                <div className="mt-auto flex items-center justify-between gap-[1rem] pt-[1.1rem]">
                  <p className="font-sans text-[1.1rem] font-semibold tabular-nums">
                    {formatLei(d.price)}
                    {d.weight ? <span className="ml-[0.5rem] text-[0.8rem] font-medium text-muted">{d.weight} g</span> : null}
                  </p>
                  <AddToCartButton item={{ id: d.id, name: d.name, price: d.price, weight: d.weight }} />
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-[2.5rem] flex items-center gap-[1.5rem]">
        <div className="h-px flex-1 bg-ink/20" aria-hidden="true">
          <div className="h-px origin-left bg-ink transition-transform duration-300 ease-merci" style={{ transform: `scaleX(${visible})` }} />
        </div>
        <div className="flex gap-[0.5rem]">
          <button type="button" onClick={() => step(-1)} disabled={atStart} aria-label="Preparatul anterior" className="grid h-[2.75rem] w-[2.75rem] place-items-center rounded-full border border-ink/40 transition-colors hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30">
            <ArrowLeft className="text-[1.2rem]" />
          </button>
          <button type="button" onClick={() => step(1)} disabled={atEnd} aria-label="Preparatul următor" className="grid h-[2.75rem] w-[2.75rem] place-items-center rounded-full border border-ink/40 transition-colors hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30">
            <ArrowRight className="text-[1.2rem]" />
          </button>
        </div>
      </div>
    </div>
  );
}
