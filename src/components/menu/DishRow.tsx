import type { MenuItem } from "@/data/menu-types";
import { AddToCartButton } from "@/features/ordering/AddToCartButton";
import { formatLei } from "@/features/ordering/format";
import { ChevronDown } from "@/components/ui/Icons";

const fmt = new Intl.NumberFormat("ro-RO", { maximumFractionDigits: 1 });

export function DishRow({ item }: { item: MenuItem }) {
  const n = item.nutrition;
  return (
    <li className="grid gap-x-[2rem] gap-y-[0.75rem] border-b border-ink/12 py-[1.5rem] md:grid-cols-[1fr_auto]">
      <div className="min-w-0">
        <h3 className="font-display text-[1.2rem] uppercase leading-[1.1] tracking-[0.025em] md:text-[1.35rem]">{item.name}</h3>
        {item.description && <p className="mt-[0.5rem] max-w-[46rem] text-[0.95rem] leading-[1.5] text-muted">{item.description}</p>}
        <div className="mt-[0.6rem] flex flex-wrap items-center gap-x-[1rem] gap-y-[0.35rem] text-[0.8rem] text-muted">
          {item.weight ? <span>{item.weight} g</span> : null}
          {item.tags?.map((t) => (
            <span key={t} className="eyebrow-mini rounded-full border border-gold-deep/40 px-[0.55rem] pb-[0.25rem] pt-[0.4rem] text-gold-deep">
              {t}
            </span>
          ))}
        </div>
        {n && (
          <details className="group mt-[0.75rem]">
            <summary className="inline-flex cursor-pointer items-center gap-[0.35rem] text-[0.8rem] font-semibold text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
              Valori nutriționale
              <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
            </summary>
            <table className="mt-[0.75rem] w-full max-w-[26rem] text-[0.82rem]">
              <caption className="sr-only">Valori nutriționale pentru {item.name}, la 100 g</caption>
              <thead>
                <tr className="text-left text-muted">
                  <th scope="col" className="pb-[0.35rem] font-medium">
                    Per 100 g
                  </th>
                  <th scope="col" className="pb-[0.35rem] text-right font-medium">
                    Valoare
                  </th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {[
                  ["Valoare energetică", `${fmt.format(n.kcal * 4.184)} kJ / ${fmt.format(n.kcal)} kcal`],
                  ["Grăsimi", `${fmt.format(n.fat)} g`],
                  ["din care acizi grași saturați", `${fmt.format(n.saturates)} g`],
                  ["Glucide", `${fmt.format(n.carbs)} g`],
                  ["din care zaharuri", `${fmt.format(n.sugars)} g`],
                  ["Proteine", `${fmt.format(n.protein)} g`],
                  ["Sare", `${fmt.format(n.salt)} g`],
                ].map(([k, v]) => (
                  <tr key={k} className="border-t border-ink/10">
                    <th scope="row" className={`py-[0.35rem] text-left font-medium ${k.startsWith("din") ? "pl-[1rem] text-muted" : ""}`}>
                      {k}
                    </th>
                    <td className="py-[0.35rem] text-right">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </details>
        )}
      </div>
      <div className="flex items-center justify-between gap-[1.25rem] md:flex-col md:items-end md:justify-start">
        <p className="font-sans text-[1.2rem] font-semibold tabular-nums">{formatLei(item.price)}</p>
        <AddToCartButton item={{ id: item.id, name: item.name, price: item.price, weight: item.weight }} />
      </div>
    </li>
  );
}
