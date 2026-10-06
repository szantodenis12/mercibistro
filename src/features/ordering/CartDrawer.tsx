"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Close } from "@/components/ui/Icons";
import { lockScroll } from "@/lib/motion";
import { business } from "@/lib/content";
import { useCart } from "./CartProvider";
import { QuantityStepper } from "./QuantityStepper";
import { formatLei } from "./format";
import { ORDERING_ENABLED } from "./config";

/** Slide-in cart drawer (right). Keyboard: Esc closes, Tab is trapped while open, focus returns to the trigger. */
export function CartDrawer() {
  const { lines, subtotal, count, isOpen, close, setQuantity, remove } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    lockScroll(true);
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      lockScroll(false);
    };
  }, [isOpen, close]);

  return (
    <div className={clsx("fixed inset-0 z-[80]", isOpen ? "pointer-events-auto" : "pointer-events-none")} inert={!isOpen}>
      <div
        className={clsx("absolute inset-0 bg-ink/50 backdrop-blur-[2px] transition-opacity duration-500 ease-merci", isOpen ? "opacity-100" : "opacity-0")}
        onClick={close}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        id="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className={clsx(
          "absolute inset-y-0 right-0 flex w-full max-w-[30rem] flex-col bg-paper text-ink shadow-2xl transition-transform duration-700 ease-merci",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <header className="flex items-center justify-between border-b border-stone px-[1.5rem] py-[1.25rem]">
          <div>
            <p className="eyebrow-mini text-gold-deep">Comanda ta</p>
            <h2 id="cart-title" className="title-xs mt-[0.4rem]">
              Coș {count > 0 ? `(${count})` : ""}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="grid h-[2.5rem] w-[2.5rem] place-items-center border border-ink/20 transition-colors hover:bg-ink hover:text-paper"
            aria-label="Închide coșul"
          >
            <Close className="text-[1.2rem]" />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-start justify-center gap-[1.25rem] px-[1.5rem]">
            <p className="title-sm">Coșul tău e gol.</p>
            <p className="paragraph-m max-w-[22rem] text-muted">Răsfoiește meniul și adaugă preparatele preferate — le găsești pe toate, de la mic dejun la desert.</p>
            <Link href="/meniu" className="btn btn-ink" onClick={close}>
              Vezi meniul
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-stone overflow-y-auto px-[1.5rem]" data-lenis-prevent>
              {lines.map((l) => (
                <li key={l.itemId} className="flex gap-[1rem] py-[1.1rem]">
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-[0.95rem] uppercase leading-[1.15] tracking-[0.025em]">{l.name}</p>
                    <p className="mt-[0.35rem] text-[0.85rem] text-muted">
                      {formatLei(l.unitPrice)}
                      {l.weight ? ` · ${l.weight} g` : ""}
                    </p>
                    <div className="mt-[0.75rem] flex items-center gap-[1rem]">
                      <QuantityStepper value={l.quantity} onChange={(n) => setQuantity(l.itemId, n)} label={l.name.toLocaleLowerCase("ro-RO")} />
                      <button type="button" onClick={() => remove(l.itemId)} className="text-[0.8rem] text-muted underline underline-offset-4 hover:text-ink">
                        Elimină
                      </button>
                    </div>
                  </div>
                  <p className="shrink-0 font-sans text-[1rem] font-semibold tabular-nums">{formatLei(l.unitPrice * l.quantity)}</p>
                </li>
              ))}
            </ul>
            <footer className="border-t border-stone bg-paper-2 px-[1.5rem] py-[1.25rem]">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow">Subtotal</span>
                <span className="font-sans text-[1.35rem] font-semibold tabular-nums">{formatLei(subtotal)}</span>
              </div>
              <p className="mt-[0.4rem] text-[0.8rem] text-muted">Taxa de livrare (dacă e cazul) se confirmă la finalizarea comenzii.</p>
              <Link href="/comanda" onClick={close} className="btn btn-ink mt-[1rem] w-full">
                Finalizează comanda
              </Link>
              {!ORDERING_ENABLED && (
                <p className="mt-[0.75rem] text-center text-[0.8rem] text-muted">
                  Comenzile online se lansează în curând. Până atunci, sună-ne la{" "}
                  <a href={business.phoneHref} className="font-semibold text-ink underline underline-offset-4">
                    {business.phone}
                  </a>
                  .
                </p>
              )}
            </footer>
          </>
        )}
      </div>
    </div>
  );
}
