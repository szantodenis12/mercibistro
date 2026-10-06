import type { MenuItem } from "@/data/menu-types";

/** Reference to a dish in `src/data/menu.ts` (the backend must re-price by id — never trust client prices). */
export type MenuItemRef = Pick<MenuItem, "id" | "name" | "price" | "weight">;

export type CartLine = {
  itemId: MenuItem["id"];
  name: string;
  /** Snapshot of the unit price in lei at the time it was added. */
  unitPrice: number;
  weight?: number;
  quantity: number;
  note?: string;
};

export type FulfillmentType = "delivery" | "pickup";

export type CustomerDetails = {
  name: string;
  phone: string;
  email?: string;
  address?: string;
  notes?: string;
};

export type Order = {
  lines: CartLine[];
  fulfillment: FulfillmentType;
  /** "asap" or an ISO-like "HH:mm" slot for today. */
  timeSlot: "asap" | string;
  customer: CustomerDetails;
  subtotal: number;
  deliveryFee: number;
  total: number;
  paymentMethod: "cash" | "card-on-delivery" | "online";
  createdAt: string;
};

export type OrderResult =
  | { ok: true; orderId: string }
  | { ok: false; reason: "disabled" | "closed" | "unavailable-items" | "out-of-zone" | "error"; message: string };
