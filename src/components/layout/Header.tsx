"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Logo } from "@/components/brand/Logo";
import { Facebook, Instagram, TikTok } from "@/components/ui/Icons";
import { CartButton } from "@/features/ordering/CartButton";
import { business, nav } from "@/lib/content";
import { lockScroll } from "@/lib/motion";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Floating glass pill header — Ballena's `.block-header` reproduced exactly:
 * fixed, top .5em (1em ≥1024px), max-width 45em, height 2.875em (3.75em
 * ≥1024px), padding .5625em (.1875em ≥1024px), rounded .375em, blur 25px,
 * bg #03090D30 translucent → solid cream when the menu is open. Ballena has
 * no separate "scrolled" state and does not hide on scroll — only these two.
 * The nav is a toggle-opened dropdown on every breakpoint (no inline desktop
 * links), same as Ballena's `.block-header__toggle` + `.block-header__menu`.
 */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the menu on navigation (state derived during render, no effect needed).
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    if (!menuOpen) return;
    lockScroll(true);

    const panel = panelRef.current;
    const first = panel?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const focusables = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusables.length === 0) return;
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const toggleEl = toggleRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      lockScroll(false);
      toggleEl?.focus();
    };
  }, [menuOpen]);

  const light = menuOpen;
  const navItems = [{ href: "/", label: "Acasă" }, ...nav];

  return (
    <>
      <a
        href="#main"
        className="fixed left-[1rem] top-[1rem] z-[90] -translate-y-[200%] bg-gold px-[1rem] py-[0.75rem] font-display text-[0.85rem] uppercase text-ink focus:translate-y-0"
      >
        Sari la conținut
      </a>
      <header className="pointer-events-none fixed inset-x-0 top-[0.5rem] z-[70] px-[var(--gutter)] lg:top-[1rem]">
        <div
          className={clsx(
            "pointer-events-auto relative mx-auto max-w-[45rem] overflow-hidden rounded-[0.375rem] p-[0.5625rem] backdrop-blur-[25px] transition-colors duration-500 ease-merci lg:p-[0.1875rem]",
            "shadow-[0_12px_40px_-18px_rgb(3_6_18/0.55)]",
            light ? "bg-paper text-ink" : "bg-ink/[0.19] text-paper",
          )}
        >
          <div className="relative flex h-[1.75rem] items-center justify-between lg:h-[3.375rem]">
            {/* Left: primary CTA (Ballena's bordered "Book" button) */}
            <Link
              href="/comanda"
              className={clsx(
                "hidden h-full items-center rounded-[0.25rem] border px-[1rem] font-display text-[0.75rem] font-medium uppercase tracking-[0.04375em] transition-colors duration-300 ease-merci sm:inline-flex",
                light ? "border-ink/25 hover:bg-ink hover:text-paper" : "border-paper/25 hover:border-gold hover:bg-gold hover:text-ink",
              )}
            >
              Comandă online
            </Link>

            {/* Center: logo, absolutely centered (Ballena's `.block-header__logo`) */}
            <Link
              href="/"
              aria-label="Merci Bistro & Coffee — acasă"
              className={clsx(
                "absolute left-1/2 top-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 items-center transition-colors",
                light ? "text-gold-deep" : "text-gold",
              )}
            >
              <Logo className="h-[1.375rem] w-auto lg:h-[1.75rem]" title="" aria-hidden="true" />
            </Link>

            {/* Right: cart + menu toggle */}
            <div className="ml-auto flex items-center gap-[0.35rem]">
              <CartButton className={light ? "hover:bg-ink/10" : "hover:bg-paper/10"} />
              <button
                ref={toggleRef}
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
                className={clsx("grid h-[2.5rem] w-[2.5rem] place-items-center rounded-[0.25rem]", light ? "hover:bg-ink/10" : "hover:bg-paper/10")}
              >
                <span className="flex flex-col items-center gap-[0.25rem]">
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "h-[1.5px] w-[1.125rem] bg-current transition-transform duration-300 ease-merci",
                      menuOpen && "translate-y-[0.3125rem] rotate-45",
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "h-[1.5px] w-[1.125rem] bg-current transition-[opacity,transform] duration-300 ease-merci",
                      menuOpen && "scale-x-0 opacity-0",
                    )}
                  />
                  <span
                    aria-hidden="true"
                    className={clsx(
                      "h-[1.5px] w-[1.125rem] bg-current transition-transform duration-300 ease-merci",
                      menuOpen && "-translate-y-[0.3125rem] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Drop-down panel — toggle-opened on every breakpoint (Ballena's `.block-header__menu`) */}
          <div
            ref={panelRef}
            id="site-menu"
            className={clsx("grid transition-[grid-template-rows,opacity] duration-500 ease-merci", menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
            inert={!menuOpen}
          >
            <div className="overflow-hidden">
              <nav aria-label="Navigație principală" className="px-[1.25rem] pb-[1.5rem] pt-[1rem]">
                <ul className="flex flex-col items-center gap-[0.25rem] border-t border-ink/10 pt-[0.5rem]">
                  {navItems.map((item, i) => (
                    <li
                      key={item.href}
                      className={clsx("w-full text-center transition-[opacity,transform] duration-500 ease-merci", menuOpen ? "translate-y-0 opacity-100" : "translate-y-[1.25rem] opacity-0")}
                      style={{ transitionDelay: menuOpen ? `${150 + i * 50}ms` : "0ms" }}
                    >
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className="title-sm inline-block py-[0.6rem] aria-[current=page]:text-gold-deep"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  className={clsx("mt-[1.25rem] flex flex-col items-center gap-[0.75rem] transition-opacity duration-500 sm:flex-row sm:justify-between", menuOpen ? "opacity-100" : "opacity-0")}
                  style={{ transitionDelay: menuOpen ? "350ms" : "0ms" }}
                >
                  <a href={business.phoneHref} className="font-sans text-[1rem] font-semibold">
                    {business.phone}
                  </a>
                  <div className="flex gap-[0.25rem] text-[1.25rem]">
                    <a href={business.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram Merci" className="grid h-[2.5rem] w-[2.5rem] place-items-center">
                      <Instagram />
                    </a>
                    <a href={business.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Merci" className="grid h-[2.5rem] w-[2.5rem] place-items-center">
                      <Facebook />
                    </a>
                    <a href={business.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok Merci" className="grid h-[2.5rem] w-[2.5rem] place-items-center">
                      <TikTok />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* backdrop for the open menu */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={clsx("fixed inset-0 z-[65] bg-ink/40 transition-opacity duration-500", menuOpen ? "opacity-100" : "pointer-events-none opacity-0")}
      />
    </>
  );
}
