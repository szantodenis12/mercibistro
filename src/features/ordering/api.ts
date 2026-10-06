import { ORDERING_ENABLED } from "./config";
import type { Order, OrderResult } from "./types";

/**
 * STUB — the single place the real backend plugs in (see docs/ORDERING.md):
 *  1. POST the order to a server action / route handler (`app/api/orders/route.ts`)
 *  2. server re-prices lines from the menu DB, checks opening hours + delivery zone + availability
 *  3. persists the order (Supabase/Postgres), starts payment (Netopia/Stripe) or marks cash on delivery
 *  4. notifies the restaurant (email + SMS/WhatsApp/Telegram or tablet dashboard)
 */
export async function submitOrder(order: Order): Promise<OrderResult> {
  void order;
  if (!ORDERING_ENABLED) {
    return { ok: false, reason: "disabled", message: "Comenzile online nu sunt încă active." };
  }
  return { ok: false, reason: "error", message: "Backend-ul de comenzi nu este încă implementat." };
}
