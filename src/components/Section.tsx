import type { ReactNode } from "react";
import type { SectionCopy } from "@/data/content";
import { splitAccent } from "@/lib/site";

export function Section({
  id,
  index,
  copy,
  children,
}: {
  id: string;
  index: number;
  copy: SectionCopy;
  children: ReactNode;
}) {
  const { before, accent, after } = splitAccent(copy.heading);
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="page-x border-t border-rule py-[clamp(5rem,11vw,11rem)]"
    >
      <header className="editorial-grid reveal mb-[clamp(3rem,7vw,7rem)] gap-y-5">
        <p className="label pt-[0.6em] text-[0.875rem] md:text-[1rem]">
          <span className="text-accent">{String(index).padStart(2, "0")}</span>
          <span className="ml-3">{copy.label}</span>
        </p>
        <h2
          id={`${id}-title`}
          className="font-display text-[clamp(2.75rem,8vw,8.5rem)] leading-[0.92] font-bold tracking-[-0.045em]"
        >
          {before}
          {accent && (
            <em className="pr-[0.05em] font-serif font-normal tracking-[-0.01em] text-accent">{accent}</em>
          )}
          {after}
        </h2>
      </header>
      {children}
    </section>
  );
}
