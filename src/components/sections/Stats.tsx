import { stats } from "@/data/content";
import { CountUp } from "../CountUp";

export function Stats() {
  return (
    <section aria-label="Highlights" className="border-t border-rule">
      <dl
        className={`grid grid-cols-1 gap-px bg-rule sm:grid-cols-2 ${
          stats.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        }`}
      >
        {stats.map((stat) => (
          <div
            key={stat.caption}
            className="flex flex-col-reverse justify-end gap-4 bg-paper px-5 py-9 md:px-10 lg:py-12 2xl:px-16"
          >
            <dt className="max-w-[28ch] text-base leading-snug text-muted">{stat.caption}</dt>
            <dd className="font-mono text-[clamp(2.25rem,4.2vw,5rem)] leading-[1.05] font-medium tracking-[-0.04em] [text-wrap:balance]">
              {stat.count ? <CountUp value={stat.value} /> : stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
