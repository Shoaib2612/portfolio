import { ticker } from "@/data/content";

/** Decorative: the same technologies are listed in Skills, so it's hidden from screen readers. */
export function Ticker() {
  return (
    <div aria-hidden="true" className="marquee edge-fade overflow-hidden border-y border-rule py-5 select-none">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {ticker.map((item) => (
              <li
                key={item}
                className="flex items-center font-mono text-[clamp(1.25rem,1.9vw,1.75rem)] leading-none tracking-[0.04em] whitespace-nowrap text-muted uppercase"
              >
                {item}
                <span className="mx-[0.9em] text-accent">/</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
