import { menu } from "./menu";
import type { MenuCategory, MenuItem } from "./menu-types";

const index = new Map<string, { item: MenuItem; category: MenuCategory }>();
for (const category of menu) {
  for (const section of category.sections) {
    for (const item of section.items) index.set(item.id, { item, category });
  }
}

export function getItem(id: string): MenuItem {
  const hit = index.get(id);
  if (!hit) throw new Error(`Unknown menu item id: ${id}`);
  return hit.item;
}

export function getCategory(slug: string): MenuCategory {
  const c = menu.find((m) => m.slug === slug);
  if (!c) throw new Error(`Unknown menu category: ${slug}`);
  return c;
}

export const itemCount = index.size;

/** "PASTE DE CASĂ CARBONARA" → "Paste de casă carbonara" (for running text / alt). */
export function sentenceCase(name: string) {
  const lower = name.toLocaleLowerCase("ro-RO");
  return lower.charAt(0).toLocaleUpperCase("ro-RO") + lower.slice(1);
}
