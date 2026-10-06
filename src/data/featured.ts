/** Curated selections for the home page (photos matched by hand to the dishes they show). */

export type FeaturedCategory = {
  slug: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  highlights: string[]; // menu item ids
};

export const featuredCategories: FeaturedCategory[] = [
  {
    slug: "main-course",
    title: "Main course",
    text: "Felurile principale poartă amprenta tuturor locurilor din care ne-am adunat rețetele: rață cu sos de cireșe, somon cu legume la tigaie, tagliata de vită sau mici cu muștar.",
    image: "/images/pulpa-de-rata.jpg",
    alt: "Pulpă de rață la cuptor cu piure de cartofi și sos de cireșe, pe o farfurie verde-albăstruie",
    highlights: [
      "main-course--pulpa-de-rata-la-cuptor-piure-de-cartofi-cu-trufe-si-sos-de-cirese",
      "main-course--frigarui-de-pui-cu-cartofi-copti-cremolada-de-usturoi-si-telemea",
      "main-course--quesadilla-de-pui-a-la-merci",
    ],
  },
  {
    slug: "fum-si-foc",
    title: "Povești din fum și foc",
    text: "Coaste, porchetta și aripioare gătite încet, la smoker, până când carnea se desprinde singură de pe os.",
    image: "/images/coaste-de-porc-smoker.jpg",
    alt: "Coaste de porc la smoker, glazurate, cu cartofi și sosuri",
    highlights: ["fum-si-foc--coaste-de-porc-la-smoker", "fum-si-foc--coaste-de-vita-la-smoker"],
  },
  {
    slug: "startere",
    title: "Startere",
    text: "Bruschete, humus libanez, fritto misto sau garlic bread cu brânzeturi — începutul perfect pentru o masă lungă.",
    image: "/images/garlic-bread.jpg",
    alt: "Garlic bread cu prosciutto și brânzeturi topite, servit în tigaie de fontă",
    highlights: ["startere--garlic-bread-butter-cheese", "startere--fritto-misto"],
  },
  {
    slug: "supe",
    title: "Supe & ciorbe",
    text: "Ciorbă de burtă, ciorbă de legume și gulaș de vită — rețete calde, gătite ca acasă.",
    image: "/images/gulas-de-vita.jpg",
    alt: "Gulaș de vită cu cartofi și morcovi într-o tigaie de fontă",
    highlights: ["supe--gulas-de-vita", "supe--ciorba-de-burta"],
  },
];

export type FeaturedDish = { id: string; image?: string; alt?: string };

export const featuredDishes: FeaturedDish[] = [
  {
    id: "main-course--frigarui-de-pui-cu-cartofi-copti-cremolada-de-usturoi-si-telemea",
    image: "/images/hero-frigarui-de-pui.jpg",
    alt: "Frigărui de pui cu cartofi copți și telemea",
  },
  { id: "paste--paste-de-casa-cu-branza-de-capra-prosciutto-praz-si-merisoare", image: "/images/paste-prosciutto-merisoare.jpg", alt: "Paste de casă cu prosciutto crocant și merișoare" },
  { id: "pizza--nduja-calabrese-e-bufala" },
  { id: "mic-dejun--mic-dejun-traditional", image: "/images/mic-dejun-traditional.jpg", alt: "Mic dejun tradițional cu ochiuri, slănină și ceapă verde" },
  { id: "salate--salata-thera", image: "/images/salata-thera.jpg", alt: "Salata Thera cu feta, năut și cremă de oțet balsamic" },
  { id: "main-course--quesadilla-de-pui-a-la-merci", image: "/images/quesadilla-de-pui.jpg", alt: "Quesadilla de pui cu salată mixtă" },
  { id: "street-food--smash-burger-in-baie-de-sos-cheddar" },
  { id: "fum-si-foc--coaste-de-porc-la-smoker", image: "/images/coaste-de-porc-smoker.jpg", alt: "Coaste de porc la smoker cu cartofi" },
  { id: "desert--lava-cake-cu-inghetata-de-vanilie", image: "/images/lava-cake.jpg", alt: "Lava cake cu ciocolată, servit pe terasă" },
  { id: "pizza--margherita" },
];
