/**
 * Date de business + texte centrale pentru site-ul Merci Bistro & Coffee.
 * Orice valoare marcată cu TODO_CLIENT trebuie confirmată de client înainte de lansare.
 */

export const SITE_URL = "https://mercioradea.ro";

export const business = {
  name: "Merci Bistro & Coffee",
  shortName: "Merci",
  legalName: "ZIADOM S.R.L.",
  tagline: "De prin lume adunate",
  description:
    "Bistro & coffee în centrul Oradiei: mic dejun, pizza, paste de casă, burgeri și preparate la smoker. Livrăm la domiciliu, în Oradea.",
  phone: "+40 771 216 743",
  phoneHref: "tel:+40771216743",
  email: "contact@mercioradea.ro",
  address: {
    street: "Str. Aurel Lazăr nr. 1",
    city: "Oradea",
    postalCode: "410043",
    region: "Bihor",
    country: "RO",
  },
  geo: { lat: 47.0570508, lng: 21.933196 },
  /** TODO_CLIENT: pe site-ul vechi apar trei link-uri Google Maps diferite — confirmați care este cel corect. */
  mapsUrl: "https://maps.app.goo.gl/TkqpHGRDjUcMa2CTA",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Merci+Bistro+%26+Coffee,+Strada+Aurel+Laz%C4%83r+1,+Oradea&ll=47.0570508,21.933196&z=17&output=embed",
  socials: {
    facebook: "https://www.facebook.com/MerciOradea",
    instagram: "https://www.instagram.com/mercioradea/",
    tiktok: "https://www.tiktok.com/@mercibistro.oradea",
  },
  reviews: {
    /** Preluat din widgetul Google (Trustindex) la data analizei. TODO_CLIENT: actualizați periodic sau conectați API-ul Google. */
    label: "Excelent",
    count: 394,
    source: "Google",
  },
  /** TODO_CLIENT: interval de preț estimativ pentru schema.org — confirmați. */
  priceRange: "$$",
  servesCuisine: ["Internațională", "Italiană", "Românească", "Street food", "Grill & smoker"],
} as const;

export type OpeningHours = {
  label: string;
  days: ("Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su")[];
  opens: string;
  closes: string;
};

export const openingHours: OpeningHours[] = [
  { label: "Luni – Miercuri", days: ["Mo", "Tu", "We"], opens: "09:00", closes: "23:00" },
  { label: "Joi – Vineri", days: ["Th", "Fr"], opens: "09:00", closes: "00:00" },
  { label: "Sâmbătă", days: ["Sa"], opens: "11:00", closes: "00:00" },
  { label: "Duminică", days: ["Su"], opens: "11:00", closes: "23:00" },
];

export const formatHour = (h: string) => h.replace(/^0(\d)/, "$1");

export const nav = [
  { href: "/meniu", label: "Meniu" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/locatie", label: "Locație" },
  { href: "/comanda", label: "Comandă" },
] as const;

export const usefulLinks = [
  { href: "https://anpc.ro/", label: "A.N.P.C." },
  { href: "http://bihor.dsvsa.ro/", label: "D.S.V.S.A. Bihor" },
  { href: "http://www.oradea.ro/", label: "Primăria Oradea" },
] as const;

/**
 * Funcționalități încă nedefinite de client.
 * TODO_CLIENT: livrare — zone, taxă de livrare, comandă minimă, prezență pe Glovo / Tazz / Bolt Food.
 * TODO_CLIENT: rezervări — doar telefonic sau și online (widget)?
 * TODO_CLIENT: oferta „Business Lunch" (meniu + preț) — pagina a fost omisă până la primirea conținutului.
 * TODO_CLIENT: fotografii de interior / terasă / echipă de calitate (avem o singură poză de interior).
 */
export const delivery = {
  /** TODO_CLIENT: taxa de livrare reală (lei). */
  fee: null as number | null,
  /** TODO_CLIENT: comanda minimă (lei). */
  minimumOrder: null as number | null,
};
