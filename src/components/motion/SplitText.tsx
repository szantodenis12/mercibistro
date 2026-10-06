import { createElement, type ElementType, type ReactNode } from "react";

type Props = {
  as?: ElementType;
  text: string;
  className?: string;
  id?: string;
  /** Extra content appended after the split words (not animated). */
  children?: ReactNode;
  /** Mark as hero title: animated by the hero timeline instead of on scroll. */
  hero?: boolean;
};

/**
 * Server-rendered word-mask heading (Ballena "heading mask-up reveal").
 * Words are wrapped in .split-word > .split-inner; <MotionController /> animates them.
 * The full text stays available to assistive tech via aria-label.
 */
export function SplitText({ as = "h2", text, className, id, children, hero }: Props) {
  const words = text.trim().split(/\s+/);
  return createElement(
    as,
    {
      className,
      id,
      "aria-label": text,
      "data-split": hero ? "hero" : "",
    },
    <>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="split-word">
            <span className="split-inner">{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
      {children}
    </>,
  );
}
