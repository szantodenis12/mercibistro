const lei = new Intl.NumberFormat("ro-RO", { minimumFractionDigits: 0, maximumFractionDigits: 2 });

/** 42 → "42 lei" */
export const formatLei = (value: number) => `${lei.format(value)} lei`;
