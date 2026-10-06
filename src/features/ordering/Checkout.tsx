"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import clsx from "clsx";
import { business, delivery } from "@/lib/content";
import { useCart } from "./CartProvider";
import { QuantityStepper } from "./QuantityStepper";
import { formatLei } from "./format";
import { ORDERING_ENABLED } from "./config";
import { submitOrder } from "./api";
import type { FulfillmentType, Order } from "./types";

/** Half-hour slots for "today". TODO: derive from opening hours + kitchen lead time (see docs/ORDERING.md). */
const SLOTS = Array.from({ length: 24 }, (_, i) => {
  const mins = 11 * 60 + i * 30;
  return `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}`;
});

const field =
  "mt-[0.5rem] block w-full border border-ink/25 bg-paper px-[1rem] py-[0.85rem] text-[1rem] text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-gold";
const label = "eyebrow-mini text-ink";

export function Checkout() {
  const { lines, subtotal, setQuantity, remove } = useCart();
  const [fulfillment, setFulfillment] = useState<FulfillmentType>("delivery");
  const [message, setMessage] = useState<string | null>(null);
  const id = useId();
  const fee = fulfillment === "delivery" ? (delivery.fee ?? 0) : 0;
  const total = subtotal + fee;
  const blocked = !ORDERING_ENABLED;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (blocked || lines.length === 0) return;
    const fd = new FormData(e.currentTarget);
    const order: Order = {
      lines,
      fulfillment,
      timeSlot: String(fd.get("slot") ?? "asap"),
      customer: {
        name: String(fd.get("name") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        address: fulfillment === "delivery" ? String(fd.get("address") ?? "") : undefined,
        notes: String(fd.get("notes") ?? "") || undefined,
      },
      subtotal,
      deliveryFee: fee,
      total,
      paymentMethod: "cash",
      createdAt: new Date().toISOString(),
    };
    const res = await submitOrder(order);
    setMessage(res.ok ? `Comanda #${res.orderId} a fost trimisă. Mulțumim!` : res.message);
  }

  return (
    <div className="grid gap-[3rem] lg:grid-cols-12">
      {/* Summary */}
      <section aria-labelledby={`${id}-summary`} className="lg:order-2 lg:col-span-5">
        <div className="bg-paper-2 p-[1.5rem] md:p-[2rem] lg:sticky lg:top-[7rem]">
          <h2 id={`${id}-summary`} className="title-xs">
            Comanda ta
          </h2>
          {lines.length === 0 ? (
            <div className="mt-[1.25rem]">
              <p className="text-muted">Coșul este gol. Adaugă preparate din meniu pentru a vedea sumarul comenzii.</p>
              <Link href="/meniu" className="btn btn-ink mt-[1.25rem]">
                Vezi meniul
              </Link>
            </div>
          ) : (
            <>
              <ul className="mt-[1.25rem] divide-y divide-ink/10 border-y border-ink/10">
                {lines.map((l) => (
                  <li key={l.itemId} className="flex items-start justify-between gap-[1rem] py-[1rem]">
                    <div className="min-w-0">
                      <p className="font-display text-[0.95rem] uppercase leading-[1.15] tracking-[0.025em]">{l.name}</p>
                      <div className="mt-[0.6rem] flex items-center gap-[0.75rem]">
                        <QuantityStepper value={l.quantity} onChange={(n) => setQuantity(l.itemId, n)} label={l.name.toLocaleLowerCase("ro-RO")} />
                        <button type="button" onClick={() => remove(l.itemId)} className="text-[0.8rem] text-muted underline underline-offset-4 hover:text-ink">
                          Elimină
                        </button>
                      </div>
                    </div>
                    <p className="shrink-0 font-semibold tabular-nums">{formatLei(l.unitPrice * l.quantity)}</p>
                  </li>
                ))}
              </ul>
              <dl className="mt-[1.25rem] space-y-[0.5rem] tabular-nums">
                <div className="flex justify-between">
                  <dt className="text-muted">Subtotal</dt>
                  <dd className="font-semibold">{formatLei(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Livrare</dt>
                  <dd className="font-semibold">{fulfillment === "pickup" ? "Gratuit — ridici din bistro" : delivery.fee === null ? "Se confirmă telefonic" : formatLei(fee)}</dd>
                </div>
                <div className="flex items-baseline justify-between border-t border-ink/15 pt-[0.75rem]">
                  <dt className="eyebrow">Total</dt>
                  <dd className="text-[1.5rem] font-semibold">{formatLei(total)}</dd>
                </div>
              </dl>
            </>
          )}
        </div>
      </section>

      {/* Form */}
      <section aria-labelledby={`${id}-form`} className="lg:order-1 lg:col-span-7">
        {blocked && (
          <div role="status" className="mb-[2rem] border-l-[3px] border-gold bg-navy p-[1.5rem] text-paper md:p-[2rem]">
            <p className="eyebrow text-gold">În curând</p>
            <p className="title-xs mt-[0.75rem] !normal-case !leading-[1.25] !tracking-normal">
              Comenzile online se lansează în curând — până atunci, sună-ne la{" "}
              <a href={business.phoneHref} className="whitespace-nowrap text-gold underline underline-offset-4">
                {business.phone}
              </a>
              .
            </p>
            <p className="mt-[0.75rem] text-[0.9rem] text-mist">Poți folosi coșul pentru a-ți pregăti comanda; o dictezi apoi la telefon, în câteva secunde.</p>
          </div>
        )}

        <h2 id={`${id}-form`} className="title-s">
          Detalii comandă
        </h2>
        <form onSubmit={onSubmit} className="mt-[2rem] space-y-[1.5rem]" aria-describedby={blocked ? `${id}-blocked` : undefined}>
          <fieldset>
            <legend className={label}>Cum vrei să primești comanda?</legend>
            <div className="mt-[0.75rem] grid grid-cols-2 gap-[0.75rem]">
              {(
                [
                  ["delivery", "Livrare la domiciliu"],
                  ["pickup", "Ridic din bistro"],
                ] as const
              ).map(([value, text]) => (
                <label
                  key={value}
                  className={clsx(
                    "flex cursor-pointer items-center gap-[0.75rem] border px-[1rem] py-[1rem] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold",
                    fulfillment === value ? "border-ink bg-ink text-paper" : "border-ink/25 hover:border-ink",
                  )}
                >
                  <input type="radio" name="fulfillment" value={value} checked={fulfillment === value} onChange={() => setFulfillment(value)} className="sr-only" />
                  <span className={clsx("grid h-[1rem] w-[1rem] place-items-center rounded-full border", fulfillment === value ? "border-paper" : "border-ink/50")} aria-hidden="true">
                    {fulfillment === value && <span className="h-[0.45rem] w-[0.45rem] rounded-full bg-gold" />}
                  </span>
                  <span className="text-[0.95rem] font-semibold">{text}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-[1.5rem] sm:grid-cols-2">
            <label className="block">
              <span className={label}>Nume</span>
              <input name="name" required autoComplete="name" className={field} placeholder="Numele tău" />
            </label>
            <label className="block">
              <span className={label}>Telefon</span>
              <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} placeholder="07xx xxx xxx" />
            </label>
          </div>

          {fulfillment === "delivery" && (
            <label className="block">
              <span className={label}>Adresa de livrare (Oradea)</span>
              <input name="address" required autoComplete="street-address" className={field} placeholder="Stradă, număr, bloc, scară, apartament" />
            </label>
          )}

          <label className="block">
            <span className={label}>Când?</span>
            <select name="slot" className={field} defaultValue="asap">
              <option value="asap">Cât mai curând</option>
              {SLOTS.map((s) => (
                <option key={s} value={s}>
                  Azi, la {s}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className={label}>Observații</span>
            <textarea name="notes" rows={3} className={field} placeholder="Interfon, alergii, tacâmuri…" />
          </label>

          <div className="pt-[0.5rem]">
            <button type="submit" disabled={blocked || lines.length === 0} className="btn btn-ink w-full sm:w-auto">
              Trimite comanda · {formatLei(total)}
            </button>
            {blocked && (
              <p id={`${id}-blocked`} className="mt-[0.75rem] text-[0.9rem] text-muted">
                Trimiterea online nu este încă activă. Sună la{" "}
                <a href={business.phoneHref} className="font-semibold text-ink underline underline-offset-4">
                  {business.phone}
                </a>{" "}
                pentru a comanda.
              </p>
            )}
            {message && (
              <p role="alert" className="mt-[0.75rem] text-[0.95rem] font-semibold">
                {message}
              </p>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
