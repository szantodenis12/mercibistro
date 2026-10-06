"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Logo } from "@/components/brand/Logo";
import { getLenis, PRELOADER_DONE, PRELOADER_KEY } from "@/lib/motion";

/**
 * Curtain preloader (Ballena template-parts/preloader), shortened to ~1.2s.
 * Rendered on the server but hidden by CSS unless the inline head script added
 * `html.show-preloader` (first visit of the session, motion allowed) → no layout shift.
 */
export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const el = ref.current;
    if (!el || !root.classList.contains("show-preloader")) return;

    try {
      sessionStorage.setItem(PRELOADER_KEY, "1");
    } catch {
      /* storage unavailable — preloader simply shows again next time */
    }

    const logo = el.querySelector("[data-pl-logo]");
    const phrases = el.querySelectorAll("[data-pl-phrase]");
    let released = false;
    // Fired as the curtain starts lifting, so the hero animates in underneath it (Ballena behaviour).
    const release = () => {
      if (released) return;
      released = true;
      getLenis()?.start();
      document.dispatchEvent(new CustomEvent(PRELOADER_DONE));
    };
    const done = () => {
      release();
      root.classList.remove("show-preloader");
    };

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.fromTo(logo, { yPercent: 110 }, { yPercent: 0, duration: 0.55, ease: "power3.out" }, 0.05)
      .fromTo(phrases, { yPercent: 120 }, { yPercent: 0, duration: 0.5, ease: "power3.out", stagger: 0.05 }, 0.12)
      .to(logo, { yPercent: -110, duration: 0.4, ease: "power3.in" }, 0.7)
      .to(phrases, { yPercent: -120, duration: 0.35, ease: "power3.in" }, 0.72)
      .add(release, 0.85)
      .to(el, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.6 }, 0.85)
      .add(done);

    // Failsafe
    const t = window.setTimeout(done, 3000);
    tl.eventCallback("onComplete", () => window.clearTimeout(t));

    return () => {
      tl.kill();
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="preloader fixed inset-0 z-[100] flex-col items-center justify-center gap-6 bg-navy text-gold"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
      aria-hidden="true"
    >
      <div className="overflow-hidden">
        <div data-pl-logo>
          <Logo className="w-[12rem] md:w-[15rem]" title="" />
        </div>
      </div>
      <div className="flex gap-6 overflow-hidden py-1 text-paper/80">
        <span data-pl-phrase className="eyebrow-mini inline-block">Bistro</span>
        <span data-pl-phrase className="eyebrow-mini inline-block">&amp;</span>
        <span data-pl-phrase className="eyebrow-mini inline-block">Coffee</span>
      </div>
    </div>
  );
}
