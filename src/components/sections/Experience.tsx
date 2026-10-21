import { experience, sections } from "@/data/content";
import { Section } from "../Section";

export function Experience() {
  return (
    <Section id="experience" index={2} copy={sections.experience}>
      <ol className="border-b border-rule">
        {experience.map((role) => (
          <li
            key={role.company}
            className="editorial-grid reveal gap-y-4 border-t border-rule py-10 lg:py-14"
          >
            <p className="label text-muted">
              {role.period}
              <br />
              {role.location}
            </p>
            <div>
              <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.5rem)] leading-tight font-semibold tracking-[-0.03em]">
                {role.title}
              </h3>
              <p className="mt-1 text-xl font-medium text-accent">{role.company}</p>
              <ul className="text-body mt-6 max-w-[75ch] space-y-3">
                {role.highlights.map((h) => (
                  <li key={h.slice(0, 32)} className="relative pl-6">
                    <span
                      aria-hidden="true"
                      className="absolute top-[0.62em] left-0 size-1.5 rounded-full bg-accent"
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
