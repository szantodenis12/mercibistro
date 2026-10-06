"use client";

import clsx from "clsx";
import { Bag } from "@/components/ui/Icons";
import { useCart } from "./CartProvider";

export function CartButton({ className }: { className?: string }) {
  const { count, open, isOpen } = useCart();
  return (
    <button
      type="button"
      onClick={(e) => open(e.currentTarget)}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-controls="cart-drawer"
      aria-label={count > 0 ? `Deschide coșul (${count} produse)` : "Deschide coșul (gol)"}
      className={clsx("relative inline-grid h-[2.5rem] w-[2.5rem] place-items-center rounded-[0.25rem] transition-colors duration-300 ease-merci", className)}
    >
      <Bag className="text-[1.25rem]" />
      <span
        aria-hidden="true"
        className={clsx(
          "absolute -right-[0.15rem] -top-[0.15rem] grid h-[1.15rem] min-w-[1.15rem] place-items-center rounded-full bg-gold px-[0.25rem] font-sans text-[0.65rem] font-bold leading-none text-ink transition-transform duration-300 ease-merci",
          count > 0 ? "scale-100" : "scale-0",
        )}
      >
        {count}
      </span>
    </button>
  );
}
