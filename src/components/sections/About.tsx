import { about, sections } from "@/data/content";
import { Section } from "../Section";

export function About() {
  return (
    <Section id="about" index={1} copy={sections.about}>
      <div className="editorial-grid">
        <div className="lg:col-start-2">
          <p className="reveal max-w-[30ch] font-display text-[clamp(1.6rem,3.2vw,3.25rem)] leading-[1.12] font-medium tracking-[-0.025em]">
            {about.statement}
          </p>
          <div className="reveal mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-body max-w-[65ch] text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
