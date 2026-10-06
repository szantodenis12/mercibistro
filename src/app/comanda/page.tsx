import type { Metadata } from "next";
import { PageHero } from "@/components/ui/blocks";
import { Checkout } from "@/features/ordering/Checkout";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Comandă online",
    description: "Comandă de la Merci Bistro & Coffee cu livrare la domiciliu în Oradea sau ridicare din bistro.",
    path: "/comanda",
  }),
  // Checkout is a utility page — keep it out of the index until ordering goes live.
  robots: { index: false, follow: true },
};

export default function OrderPage() {
  return (
    <>
      <PageHero eyebrow="Comandă online" title="Livrăm la domiciliu, în Oradea" />
      <div className="container-x py-[3.5rem] md:py-[5rem]">
        <Checkout />
      </div>
    </>
  );
}
