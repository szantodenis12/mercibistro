"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { scrollToElement } from "@/lib/motion";

/** Sticky category nav with scroll-spy — keeps the active chip in view. */
export function MenuNav({ categories }: { categories: { slug: string; name: string }[] }) {
  const [active, setActive] = useState(categories[0]?.slug);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = categories.map((c) => document.getElementById(c.slug)).filter((el): el is HTMLElement => !!el);
    // Active = last category whose top has passed the sticky nav line (robust at both ends of the page).
    let raf = 0;
    const compute = () => {
      raf = 0;
      const line = 180;
      let current = sections[0]?.id;
      for (const s of sections) {
        if (s.getBoundingClientRect().top - line <= 0) current = s.id;
        else break;
      }
      if (current) setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Deep link (/meniu#pizza) — wait a frame so layout and Lenis are ready.
    const hash = decodeURIComponent(window.location.hash.slice(1));
    const target = hash ? document.getElementById(hash) : null;
    let t: number | undefined;
    if (target) t = window.setTimeout(() => scrollToElement(target, 140), 300);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (t) window.clearTimeout(t);
    };
  }, [categories]);

  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector<HTMLElement>(`[data-slug="${active}"]`);
    if (list && chip) {
      list.scrollTo({ left: chip.offsetLeft - list.clientWidth / 2 + chip.clientWidth / 2, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav aria-label="Categorii meniu" className="sticky top-[4.5rem] z-40 border-y border-ink/10 bg-paper/90 backdrop-blur-md md:top-[5.25rem]">
      <ul ref={listRef} className="no-scrollbar container-x flex gap-[0.4rem] overflow-x-auto py-[0.6rem]">
        {categories.map((c) => (
          <li key={c.slug} className="shrink-0">
            <a
              href={`#${c.slug}`}
              data-slug={c.slug}
              aria-current={active === c.slug ? "true" : undefined}
              onClick={(e) => {
                const el = document.getElementById(c.slug);
                if (!el) return;
                e.preventDefault();
                history.replaceState(null, "", `#${c.slug}`);
                scrollToElement(el, 140);
                setActive(c.slug);
              }}
              className={clsx(
                "block whitespace-nowrap rounded-full border px-[1rem] pb-[0.45rem] pt-[0.6rem] font-display text-[0.8rem] uppercase leading-none tracking-[0.04375em] transition-colors duration-300 ease-merci",
                active === c.slug ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink hover:border-ink",
              )}
            >
              {c.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
