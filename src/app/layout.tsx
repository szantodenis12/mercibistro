import type { Metadata, Viewport } from "next";
import { Figtree, Homemade_Apple, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { MotionController } from "@/components/motion/MotionController";
import { Preloader } from "@/components/motion/Preloader";
import { PRELOADER_KEY } from "@/lib/motion";
import { CartProvider } from "@/features/ordering/CartProvider";
import { CartDrawer } from "@/features/ordering/CartDrawer";
import { business, SITE_URL } from "@/lib/content";
import { jsonLdScript, restaurantJsonLd } from "@/lib/seo";

/** Display — closest free match to Sweet Sans Pro (engraved-geometric, classical uppercase). */
const josefin = Josefin_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-josefin",
  display: "swap",
});
/** Body — closest free match to TT Commons Pro. */
const figtree = Figtree({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});
/** Merci's own handwritten accent font (latin only — use for diacritic-free phrases). */
const homemade = Homemade_Apple({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-homemade",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Merci Bistro & Coffee Oradea — de prin lume adunate",
    template: "%s — Merci Bistro & Coffee Oradea",
  },
  description: business.description,
  applicationName: business.name,
  keywords: ["restaurant Oradea", "bistro Oradea", "livrare mâncare Oradea", "pizza Oradea", "mic dejun Oradea", "Merci Oradea"],
  openGraph: {
    siteName: business.name,
    locale: "ro_RO",
    type: "website",
    url: "/",
    title: "Merci Bistro & Coffee Oradea — de prin lume adunate",
    description: business.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#1a282e",
  width: "device-width",
  initialScale: 1,
};

/**
 * Runs before paint: enables reveal animations only when motion is allowed, and shows the
 * curtain preloader only on the first visit of the session.
 */
const bootScript = `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('has-anim');var s=null;try{s=sessionStorage.getItem('${PRELOADER_KEY}')}catch(e){}if(!s)d.classList.add('show-preloader')}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" suppressHydrationWarning className={`${josefin.variable} ${figtree.variable} ${homemade.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(restaurantJsonLd())} />
      </head>
      <body className="min-h-dvh">
        <CartProvider>
          <Preloader />
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
        <SmoothScroll />
        <MotionController />
      </body>
    </html>
  );
}
