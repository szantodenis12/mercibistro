import { CART_STORAGE_KEY, MAX_QTY_PER_LINE } from "./config";
import type { CartLine, MenuItemRef } from "./types";

/**
 * Tiny external store for the cart (consumed via useSyncExternalStore), persisted to
 * localStorage. Every storage access is wrapped in try/catch (private mode, quota, disabled storage).
 */
const EMPTY: CartLine[] = [];
let lines: CartLine[] | null = null;
const listeners = new Set<() => void>();

function read(): CartLine[] {
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (l): l is CartLine =>
        typeof l === "object" && l !== null && typeof l.itemId === "string" && typeof l.quantity === "number" && typeof l.unitPrice === "number",
    );
  } catch {
    return [];
  }
}

function write(next: CartLine[]) {
  lines = next;
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(next));
  } catch {
    /* ignore — cart still works in memory */
  }
  listeners.forEach((l) => l());
}

export const cartStore = {
  getSnapshot(): CartLine[] {
    if (lines === null) lines = read();
    return lines;
  },
  getServerSnapshot(): CartLine[] {
    return EMPTY;
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    const onStorage = (e: StorageEvent) => {
      if (e.key !== CART_STORAGE_KEY) return;
      lines = read();
      listeners.forEach((l) => l());
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
    };
  },
  add(item: MenuItemRef, quantity = 1) {
    const current = cartStore.getSnapshot();
    const existing = current.find((l) => l.itemId === item.id);
    if (existing) {
      cartStore.setQuantity(item.id, existing.quantity + quantity);
      return;
    }
    write([...current, { itemId: item.id, name: item.name, unitPrice: item.price, weight: item.weight, quantity: Math.min(quantity, MAX_QTY_PER_LINE) }]);
  },
  setQuantity(itemId: string, quantity: number) {
    const current = cartStore.getSnapshot();
    if (quantity <= 0) {
      write(current.filter((l) => l.itemId !== itemId));
      return;
    }
    write(current.map((l) => (l.itemId === itemId ? { ...l, quantity: Math.min(quantity, MAX_QTY_PER_LINE) } : l)));
  },
  remove(itemId: string) {
    write(cartStore.getSnapshot().filter((l) => l.itemId !== itemId));
  },
  clear() {
    write([]);
  },
};
