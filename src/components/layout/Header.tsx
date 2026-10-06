"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Logo } from "@/components/brand/Logo";
import { Close, Facebook, Instagram, MenuIcon, TikTok } from "@/components/ui/Icons";
import { CartButton } from "@/features/ordering/CartButton";
import { business, nav } from "@/lib/content";
import { lockScroll } from "@/lib/motion";

/** Floating glass pill header (Ballena header): fixed, max-width 45rem, rounded .375em, blur 25px. */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu on navigation (state derived during render, no effect needed).
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const light = menuOpen;

  return (
    <>
      <a
        href="#main"
        className="fixed left-[1rem] top-[1rem] z-[90] -translate-y-[200%] bg-gold px-[1rem] py-[0.75rem] font-display text-[0.85rem] uppercase text-ink focus:translate-y-0"
      >
        Sari la conținut
      </a>
      <header className="pointer-events-none fixed inset-x-0 top-[0.75rem] z-[70] px-[var(--gutter)] md:top-[1rem]">
        <div
          className={clsx(
            "pointer-events-auto mx-auto max-w-[47rem] overflow-hidden rounded-[0.375rem] backdrop-blur-[25px] transition-[background-color,color,box-shadow] duration-500 ease-merci",
            light
              ? "bg-paper text-ink shadow-[0_20px_60px_-20px_rgb(3_6_18/0.45)]"
              : scrolled
                ? "bg-navy/90 text-paper shadow-[0_12px_40px_-18px_rgb(3_6_18/0.6)]"
                : "bg-ink/30 text-paper",
          )}
        >
          <div className="flex h-[3.25rem] items-center gap-[0.75rem] pl-[1rem] pr-[0.5rem] md:h-[3.75rem] md:pl-[1.25rem]">
            <Link href="/" aria-label="Merci Bistro & Coffee — acasă" className={clsx("shrink-0 transition-colors", light ? "text-gold-deep" : "text-gold")}>
              <Logo className="h-[1.6rem] w-auto md:h-[1.9rem]" title="" aria-hidden="true" />
            </Link>

            <nav aria-label="Navigație principală" className="mx-auto hidden lg:block">
              <ul className="flex items-center gap-[1.75rem]">
                {nav.slice(0, 3).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={clsx(
                        "link-caps relative py-[0.5rem] transition-colors duration-300 ease-merci hover:text-gold",
                        "after:absolute after:inset-x-0 after:-bottom-[0.1rem] after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-merci",
                        isActive(item.href) && "after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-auto flex items-center gap-[0.35rem] lg:ml-0">
              <CartButton className={light ? "hover:bg-ink/10" : "hover:bg-paper/10"} />
              <Link
                href="/comanda"
                className={clsx(
                  "hidden h-[2.5rem] items-center rounded-[0.25rem] border px-[1rem] pt-[0.1rem] font-display text-[0.8rem] font-medium uppercase tracking-[0.04375em] transition-colors duration-300 ease-merci sm:inline-flex",
                  light ? "border-ink/30 hover:bg-ink hover:text-paper" : "border-paper/25 hover:bg-paper hover:text-ink",
                )}
              >
                Comandă online
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
                className={clsx("grid h-[2.5rem] w-[2.5rem] place-items-center rounded-[0.25rem] lg:hidden", light ? "hover:bg-ink/10" : "hover:bg-paper/10")}
              >
                {menuOpen ? <Close className="text-[1.3rem]" /> : <MenuIcon className="text-[1.3rem]" />}
              </button>
            </div>
          </div>

          {/* Drop-down panel (mobile/tablet) */}
          <div
            id="mobile-menu"
            className={clsx("grid transition-[grid-template-rows,opacity] duration-500 ease-merci lg:hidden", menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
            inert={!menuOpen}
          >
            <div className="overflow-hidden">
              <nav aria-label="Navigație mobilă" className="px-[1.25rem] pb-[1.5rem] pt-[0.75rem]">
                <ul className="border-t border-ink/10">
                  {[{ href: "/", label: "Acasă" }, ...nav].map((item, i) => (
                    <li
                      key={item.href}
                      className={clsx("border-b border-ink/10 transition-[opacity,transform] duration-500 ease-merci", menuOpen ? "translate-y-0 opacity-100" : "translate-y-[1.25rem] opacity-0")}
                      style={{ transitionDelay: menuOpen ? `${150 + i * 50}ms` : "0ms" }}
                    >
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className="title-sm flex items-center justify-between py-[1rem] aria-[current=page]:text-gold-deep"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  className={clsx("mt-[1.25rem] flex items-center justify-between transition-opacity duration-500", menuOpen ? "opacity-100" : "opacity-0")}
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
      {/* backdrop for open mobile menu */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={clsx("fixed inset-0 z-[65] bg-ink/40 transition-opacity duration-500 lg:hidden", menuOpen ? "opacity-100" : "pointer-events-none opacity-0")}
      />
    </>
  );
}
