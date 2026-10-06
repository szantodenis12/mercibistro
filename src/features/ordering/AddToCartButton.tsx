"use client";

import clsx from "clsx";
import { Plus } from "@/components/ui/Icons";
import { useCart } from "./CartProvider";
import { QuantityStepper } from "./QuantityStepper";
import type { MenuItemRef } from "./types";

/** „Adaugă" button; turns into a quantity stepper once the dish is in the cart. */
export function AddToCartButton({ item, className, tone = "light" }: { item: MenuItemRef; className?: string; tone?: "light" | "dark" }) {
  const { quantityOf, add, setQuantity } = useCart();
  const qty = quantityOf(item.id);
  const label = item.name.toLocaleLowerCase("ro-RO");

  if (qty > 0) {
    return <QuantityStepper value={qty} onChange={(n) => setQuantity(item.id, n)} label={label} tone={tone} className={className} />;
  }

  return (
    <button
      type="button"
      onClick={() => add(item)}
      aria-label={`Adaugă ${label} în coș`}
      className={clsx(
        "inline-flex h-[2.35rem] items-center gap-[0.5em] border px-[1em] font-display text-[0.8rem] font-medium uppercase leading-none tracking-[0.04375em] transition-colors duration-300 ease-merci",
        tone === "light" ? "border-ink/35 text-ink hover:border-ink hover:bg-ink hover:text-paper" : "border-paper/40 text-paper hover:bg-paper hover:text-ink",
        className,
      )}
    >
      <Plus className="-mt-[0.1em] text-[1.05em]" />
      <span className="pt-[0.15em]">Adaugă</span>
    </button>
  );
}
