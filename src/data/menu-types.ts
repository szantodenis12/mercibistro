export type Nutrition = {
  /** Toate valorile sunt per 100 g. */
  kcal: number;
  fat: number;
  saturates: number;
  carbs: number;
  sugars: number;
  protein: number;
  salt: number;
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  /** Gramaj porție (g). */
  weight?: number;
  /** Preț în lei (RON). */
  price: number;
  tags?: string[];
  allergens?: string[];
  nutrition?: Nutrition;
  unavailable?: boolean;
};

export type MenuSection = { title?: string; items: MenuItem[] };

export type MenuCategory = {
  slug: string;
  name: string;
  intro?: string;
  sections: MenuSection[];
};
