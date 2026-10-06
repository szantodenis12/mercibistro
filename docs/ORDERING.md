# Online ordering — plan for finishing it

Status: **front-end shell only** ("pin in it"). The cart works (persisted in `localStorage`), `/comanda` shows a full
checkout form, but submission is blocked while `NEXT_PUBLIC_ORDERING_ENABLED` is not `"true"`, with the notice
„Comenzile online se lansează în curând — până atunci, sună-ne la +40 771 216 743".

## What exists (`src/features/ordering/`)
| File | Role |
|---|---|
| `types.ts` | `MenuItemRef`, `CartLine`, `FulfillmentType` (`delivery` / `pickup`), `CustomerDetails`, `Order`, `OrderResult` |
| `config.ts` | `ORDERING_ENABLED` flag, storage key, max qty |
| `cart-store.ts` | external store (useSyncExternalStore) + localStorage persistence, all storage access in try/catch, cross-tab sync |
| `CartProvider.tsx` / `useCart.ts` | context: lines, count, subtotal, add / setQuantity / remove / clear, drawer open state, aria-live announcements |
| `CartDrawer.tsx`, `CartButton.tsx`, `AddToCartButton.tsx`, `QuantityStepper.tsx` | UI (keyboard accessible, focus trap, Esc) |
| `Checkout.tsx` | `/comanda` summary + form (name, phone, address, delivery/pickup, time slot, notes) |
| `api.ts` | **`submitOrder(order)` stub — the single place the backend plugs in** |

Menu data is static in `src/data/menu.ts` (typed by `menu-types.ts`). Item ids are stable slugs (`category--dish-name`).

## Remaining work

### 1. Data & backend
- **DB: Supabase (Postgres)** — tables `menu_items` (id, category, name, description, price, weight, nutrition jsonb,
  allergens, `available` bool, sort), `orders` (id, status, fulfillment, slot, customer jsonb, totals, payment_status,
  created_at), `order_lines`, `delivery_zones`, `settings` (opening hours, kitchen lead time, pause switch).
- Seed `menu_items` from `src/data/menu.ts`; switch the menu page to read from DB with ISR/`revalidateTag('menu')`.
- `app/api/orders/route.ts` (or a Server Action) called by `submitOrder`. **Server must re-price every line by id**
  and reject unknown/unavailable items — never trust `unitPrice` from the client.
- Validation with zod (phone RO format, address required for delivery), rate limiting + honeypot / Turnstile.

### 2. Payment
- Phase 1: **cash / card on delivery** only (`paymentMethod: "cash" | "card-on-delivery"`) — fastest to launch.
- Phase 2: online card via **Netopia Payments** (RO, lei, common with local restaurants) or **Stripe** (better DX,
  supports RON, Apple/Google Pay). Flow: create order `pending_payment` → redirect/checkout → webhook marks `paid`.
- Fiscal: confirm with the client's accountant how online payments map to the fiscal receipt (bon fiscal / e-Factura).

### 3. Notifying the restaurant
- Email to `contact@mercioradea.ro` (Resend/Postmark) with the order summary — baseline.
- Plus one real-time channel: **SMS** (Twilio / SMSLink.ro), **WhatsApp Business API**, or **Telegram bot** to a staff
  group (cheapest, instant). Best long-term: a **tablet dashboard** (`/admin/comenzi`, Supabase realtime) with sound
  alert, accept/reject with ETA, status updates → customer gets SMS/email „Comanda ta a fost confirmată, ETA 40 min".

### 4. Admin
- `/admin` behind Supabase Auth (staff accounts): mark items **unavailable** (sold out today), edit prices, pause
  ordering, view/accept orders, daily report.

### 5. Business rules
- **Opening-hours guard**: reuse `openingHours` from `src/lib/content.ts`; block or switch to „comandă programată"
  outside hours; time slots = now + kitchen lead time, rounded to 15/30 min, until closing − 30 min.
  (Currently `Checkout.tsx` lists static 11:00–22:30 slots — replace.)
- **Delivery zones & fees**: polygons or radius from the restaurant (47.0570508, 21.933196); fee + minimum order per
  zone (`delivery.fee` / `delivery.minimumOrder` in `content.ts` are `null` = TODO_CLIENT). Address autocomplete
  (Google Places) → geocode → zone lookup server-side.
- Allergens per dish (missing in source data) — required for online food sales.
- Legal: update Termeni și condiții for distance selling (OUG 34/2014), return/complaint policy, ANPC links (present).

## Where the stubs plug in
1. `api.ts → submitOrder()` — replace body with `fetch('/api/orders', …)` / server action call.
2. `config.ts → ORDERING_ENABLED` — set `NEXT_PUBLIC_ORDERING_ENABLED=true` in the hosting env when live.
3. `Checkout.tsx → SLOTS` and fee display — read from `settings` / zone lookup.
4. `src/data/menu.ts` — becomes DB seed; `MenuItem.unavailable` already exists and should disable `AddToCartButton`.
5. `cart-store.ts` — on load, re-validate lines against current menu (drop removed items, refresh prices).
