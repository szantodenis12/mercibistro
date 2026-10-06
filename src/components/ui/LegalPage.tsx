import type { ReactNode } from "react";
import { PageHero } from "./blocks";

/** Shared layout for legal / policy pages: dark simple hero + readable prose column. */
export function LegalPage({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated?: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <div className="container-x py-[4rem] md:py-[6rem]">
        <article
          className="mx-auto max-w-[46rem] text-[1.02rem] leading-[1.7] text-ink/90 [&_a]:text-gold-deep [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-[1rem] [&_h2]:mt-[3rem] [&_h2]:font-display [&_h2]:text-[1.35rem] [&_h2]:uppercase [&_h2]:leading-[1.1] [&_h2]:tracking-[0.025em] [&_h2]:text-ink [&_li]:mt-[0.5rem] [&_p]:mt-[1rem] [&_ul]:mt-[1rem] [&_ul]:list-disc [&_ul]:pl-[1.25rem]"
        >
          {updated && <p className="eyebrow !mt-0 text-muted">{updated}</p>}
          {children}
        </article>
      </div>
    </>
  );
}
