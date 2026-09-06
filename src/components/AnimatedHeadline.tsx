import type { CSSProperties } from "react";

/**
 * Splits `text` into characters and reveals each one from the left
 * (opacity 0 → 1, translateX(-18px) → 0, 500ms, ~30ms apart, starting 200ms
 * after paint). Driven by the .headline-char CSS animation in globals.css, so
 * this stays a Server Component: the text ships in the HTML and starts
 * animating at first paint rather than waiting for hydration.
 *
 * Words are kept in non-wrapping spans so the split never breaks a word across
 * lines. The whole string is exposed to assistive tech via aria-label; the
 * per-character spans are hidden from it. prefers-reduced-motion is handled by
 * the global media query, which zeroes both duration and delay.
 */
export default function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span aria-label={text}>
      {words.map((word, wordIndex) => (
        <span
          key={`${word}-${wordIndex}`}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {Array.from(word).map((char, i) => (
            <span
              key={`${char}-${i}`}
              className="headline-char"
              style={{ "--char-index": charIndex++ } as CSSProperties}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 ? (
            <span className="inline-block">&nbsp;</span>
          ) : null}
        </span>
      ))}
    </span>
  );
}
