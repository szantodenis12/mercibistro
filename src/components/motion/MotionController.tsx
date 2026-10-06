"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { afterPreloader } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global scroll-reveal system (Ballena assets/js/animations.js), re-initialised per route
 * and scoped to <main>. Opt-in through data attributes:
 *  - [data-split="hero"]  hero title words  → yPercent 115→0, 1.2s power4.out, stagger {amount .4}
 *  - [data-split=""]      headings          → yPercent 115→0, 1s power3.out, stagger .04 @ top 92%
 *  - [data-hero-bg]       hero media        → scale 1.15→1, 2s power2.out
 *  - [data-parallax]      full-bleed media  → scale 1.15, yPercent -6→6 scrubbed (stays inside the 7.5% scale overscan)
 *  - [data-zoom]          content media     → scale 1.05→1, 1.4s power2.out @ top 95%
 *  - [data-fade]          copy / buttons    → opacity 0→1, y 20→0, .9s power3.out @ top 92%
 * Nothing runs when html lacks .has-anim (reduced motion).
 */
export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("has-anim")) return;
    const main = document.getElementById("main");
    if (!main) return;

    let ctx: gsap.Context | null = null;

    const init = () => {
      ctx = gsap.context(() => {
        // Hero
        const heroWords = main.querySelectorAll<HTMLElement>('[data-split="hero"] .split-inner');
        const heroBg = main.querySelectorAll<HTMLElement>("[data-hero-bg]");
        const heroFade = main.querySelectorAll<HTMLElement>("[data-hero-fade]");
        gsap.set(heroWords, { yPercent: 115, y: 0 });
        gsap.set(heroBg, { scale: 1.15 });
        gsap.set(heroFade, { opacity: 0, y: 20 });
        const tl = gsap.timeline({ delay: 0.15 });
        tl.to(heroBg, { scale: 1, duration: 2, ease: "power2.out" }, 0);
        tl.to(heroWords, { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: { amount: 0.4, from: "start" } }, 0.1);
        tl.to(heroFade, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 }, 0.55);

        // Headings
        main.querySelectorAll<HTMLElement>('[data-split=""]').forEach((title) => {
          const words = title.querySelectorAll(".split-inner");
          gsap.set(words, { yPercent: 115, y: 0 });
          ScrollTrigger.create({
            trigger: title,
            start: "top 92%",
            once: true,
            onEnter: () => gsap.to(words, { yPercent: 0, duration: 1, ease: "power3.out", stagger: 0.04 }),
          });
        });

        // Fades
        main.querySelectorAll<HTMLElement>("[data-fade]").forEach((el) => {
          gsap.set(el, { opacity: 0, y: 20 });
          ScrollTrigger.create({
            trigger: el,
            start: "top 92%",
            once: true,
            onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: Number(el.dataset.fade) || 0 }),
          });
        });

        // Parallax drift
        main.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const block = el.closest<HTMLElement>("[data-parallax-root]") ?? el.parentElement ?? el;
          gsap.set(el, { scale: 1.15 });
          gsap.fromTo(
            el,
            { yPercent: -6 },
            { yPercent: 6, ease: "none", scrollTrigger: { trigger: block, start: "top bottom", end: "bottom top", scrub: true } },
          );
        });

        // Zoom-settle
        main.querySelectorAll<HTMLElement>("[data-zoom]").forEach((el) => {
          gsap.set(el, { scale: 1.05 });
          ScrollTrigger.create({
            trigger: el,
            start: "top 95%",
            once: true,
            onEnter: () => gsap.to(el, { scale: 1, duration: 1.4, ease: "power2.out" }),
          });
        });
      }, main);

      requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const cancel = afterPreloader(init);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      cancel();
      window.removeEventListener("load", refresh);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
