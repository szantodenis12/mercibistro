import type Lenis from "lenis";

/** Shared Lenis instance (set by <SmoothScroll />). Null when reduced motion is on. */
let lenisInstance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  lenisInstance = l;
};
export const getLenis = () => lenisInstance;

export const PRELOADER_DONE = "merci:preloader-done";
export const PRELOADER_KEY = "merci-intro-seen";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Runs `cb` once the first-visit preloader has cleared (or immediately if there is none). */
export function afterPreloader(cb: () => void) {
  if (!document.documentElement.classList.contains("show-preloader")) {
    cb();
    return () => {};
  }
  const handler = () => cb();
  document.addEventListener(PRELOADER_DONE, handler, { once: true });
  return () => document.removeEventListener(PRELOADER_DONE, handler);
}

/** Lock / unlock page scroll (drawers, mobile menu). */
export function lockScroll(locked: boolean) {
  const l = getLenis();
  if (locked) {
    l?.stop();
    document.documentElement.style.overflow = "hidden";
  } else {
    l?.start();
    document.documentElement.style.overflow = "";
  }
}

/** Smooth-scroll to an element (Lenis when available, native otherwise). */
export function scrollToElement(el: HTMLElement, offset = 0) {
  const l = getLenis();
  if (l) {
    l.scrollTo(el, { offset: -offset, duration: 1.2 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }
}
