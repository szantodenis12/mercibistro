"use client";

import clsx from "clsx";
import { Minus, Plus } from "@/components/ui/Icons";
import { MAX_QTY_PER_LINE } from "./config";

type Props = {
  value: number;
  onChange: (next: number) => void;
  label: string;
  tone?: "light" | "dark";
  className?: string;
};

export function QuantityStepper({ value, onChange, label, tone = "light", className }: Props) {
  const btn = clsx(
    "grid h-[2.25rem] w-[2.25rem] place-items-center transition-colors duration-300 ease-merci disabled:opacity-40",
    tone === "light" ? "hover:bg-ink hover:text-paper" : "hover:bg-paper hover:text-ink",
  );
  return (
    <div
      role="group"
      aria-label={`Cantitate ${label}`}
      className={clsx(
        "inline-flex items-center border",
        tone === "light" ? "border-ink/30 text-ink" : "border-paper/40 text-paper",
        className,
      )}
    >
      <button type="button" className={btn} onClick={() => onChange(value - 1)} aria-label={value === 1 ? `Elimină ${label}` : `Scade cantitatea pentru ${label}`}>
        <Minus />
      </button>
      <span className="min-w-[2rem] text-center font-sans text-[0.95rem] font-semibold tabular-nums" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        className={btn}
        onClick={() => onChange(value + 1)}
        disabled={value >= MAX_QTY_PER_LINE}
        aria-label={`Crește cantitatea pentru ${label}`}
      >
        <Plus />
      </button>
    </div>
  );
}
