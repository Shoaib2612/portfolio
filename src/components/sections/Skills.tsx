import { education, sections, skills } from "@/data/content";
import { Section } from "../Section";

export function Skills() {
  return (
    <Section id="skills" index={4} copy={sections.skills}>
      <dl className="border-b border-rule">
        {skills.map((group) => (
          <div key={group.name} className="editorial-grid reveal gap-y-3 border-t border-rule py-6 lg:py-7">
            <dt className="label pt-[0.45em] text-muted">{group.name}</dt>
            <dd>
              <ul className="flex flex-wrap items-baseline font-display text-[clamp(1.25rem,2vw,1.875rem)] leading-snug font-medium tracking-[-0.02em]">
                {group.items.map((item, i) => (
                  <li key={item} className="flex items-baseline">
                    {i > 0 && (
                      <span aria-hidden="true" className="mx-[0.4em] font-normal text-muted">
                        /
                      </span>
                    )}
                    <span className="decoration-accent decoration-2 underline-offset-[0.2em] hover:underline">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
        <div className="editorial-grid reveal gap-y-3 border-t border-rule py-6 lg:py-7">
          <dt className="label pt-[0.45em] text-muted">{education.label}</dt>
          <dd>
            <p className="font-display text-[clamp(1.25rem,2vw,1.875rem)] leading-snug font-medium tracking-[-0.02em]">
              {education.degree}
            </p>
            <p className="text-body mt-1 text-muted">
              {education.school}, {education.location}
              <span className="label ml-3 whitespace-nowrap">{education.period}</span>
            </p>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
