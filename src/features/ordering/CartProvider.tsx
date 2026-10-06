"use client";

import { createContext, useCallback, useContext, useMemo, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { cartStore } from "./cart-store";
import type { CartLine, MenuItemRef } from "./types";

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  quantityOf: (itemId: string) => number;
  add: (item: MenuItemRef, quantity?: number) => void;
  setQuantity: (itemId: string, quantity: number) => void;
  remove: (itemId: string) => void;
  clear: () => void;
  isOpen: boolean;
  open: (trigger?: HTMLElement | null) => void;
  close: () => void;
  /** Last change, announced through an aria-live region. */
  announcement: string;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const lines = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, cartStore.getServerSnapshot);
  const [isOpen, setOpen] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const triggerRef = useRef<HTMLElement | null>(null);

  const add = useCallback((item: MenuItemRef, quantity = 1) => {
    cartStore.add(item, quantity);
    setAnnouncement(`${item.name} a fost adăugat în coș.`);
  }, []);
  const setQuantity = useCallback((itemId: string, quantity: number) => {
    cartStore.setQuantity(itemId, quantity);
    setAnnouncement(quantity > 0 ? `Cantitate actualizată: ${quantity}.` : "Produs eliminat din coș.");
  }, []);
  const remove = useCallback((itemId: string) => {
    cartStore.remove(itemId);
    setAnnouncement("Produs eliminat din coș.");
  }, []);
  const clear = useCallback(() => cartStore.clear(), []);

  const open = useCallback((trigger?: HTMLElement | null) => {
    triggerRef.current = trigger ?? (document.activeElement as HTMLElement | null);
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
    const t = triggerRef.current;
    if (t) requestAnimationFrame(() => t.focus());
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((n, l) => n + l.quantity, 0);
    const subtotal = lines.reduce((n, l) => n + l.quantity * l.unitPrice, 0);
    return {
      lines,
      count,
      subtotal,
      quantityOf: (id) => lines.find((l) => l.itemId === id)?.quantity ?? 0,
      add,
      setQuantity,
      remove,
      clear,
      isOpen,
      open,
      close,
      announcement,
    };
  }, [lines, add, setQuantity, remove, clear, isOpen, open, close, announcement]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <p className="sr-only" aria-live="polite" role="status">
        {announcement}
      </p>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
