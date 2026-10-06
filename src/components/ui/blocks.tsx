import Image, { type StaticImageData } from "next/image";
import clsx from "clsx";
import type { ReactNode } from "react";
import { SplitText } from "@/components/motion/SplitText";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={clsx("eyebrow flex items-center gap-[0.75em]", className)} data-fade>
      <span className="inline-block h-px w-[2.25em] bg-current opacity-60" aria-hidden="true" />
      <span className="pt-[0.15em]">{children}</span>
    </p>
  );
}

type ImgSrc = string | StaticImageData;

/** Media with Ballena "zoom-settle" reveal (scale 1.05→1). Parent controls aspect ratio. */
export function RevealImage({
  src,
  alt,
  sizes,
  className,
  imgClassName,
  parallax,
}: {
  src: ImgSrc;
  alt: string;
  sizes: string;
  className?: string;
  imgClassName?: string;
  parallax?: boolean;
}) {
  return (
    <div className={clsx("relative overflow-hidden bg-navy", className)} data-parallax-root={parallax ? "" : undefined}>
      <div className="absolute inset-0" {...(parallax ? { "data-parallax": "" } : { "data-zoom": "" })}>
        <Image src={src} alt={alt} fill sizes={sizes} className={clsx("object-cover", imgClassName)} />
      </div>
    </div>
  );
}

/** Ballena "hero-simple": dark full-width banner for inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  imagePosition = "center",
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: ImgSrc;
  imageAlt?: string;
  imagePosition?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden bg-navy text-paper md:min-h-[70svh]">
      {image ? (
        <>
          <div className="absolute inset-0 -z-20" data-hero-bg>
            <Image src={image} alt={imageAlt} fill preload sizes="100vw" className="object-cover" style={{ objectPosition: imagePosition }} />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/45 to-ink/30" aria-hidden="true" />
        </>
      ) : (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-2),var(--color-navy-3)_60%,var(--color-ink))]" aria-hidden="true" />
      )}
      <div className="container-x w-full pb-[3rem] pt-[8rem] md:pb-[4.5rem]">
        <p className="eyebrow text-gold" data-hero-fade>
          {eyebrow}
        </p>
        <SplitText as="h1" hero text={title} className="title-xl mt-[1.25rem] max-w-[16ch]" />
        {intro && (
          <p className="paragraph-l mt-[1.5rem] max-w-[36rem] text-paper/85" data-hero-fade>
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export { SplitText };
