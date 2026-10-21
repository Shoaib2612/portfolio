import type { ReactNode } from "react";
import { projects, sections, type Project } from "@/data/content";
import { Section } from "../Section";

/*
 * Desktop: 4 columns (index / title + role / description / link).
 * The link sits outside <summary> so it is never nested inside the toggle,
 * which is why the row is a grid with the <details> spanning columns 1–3.
 */
const ROW = "lg:grid-cols-[minmax(0,1fr)_9rem]";
const SUMMARY = "md:grid-cols-[3.5rem_minmax(0,1fr)] lg:grid-cols-[3.5rem_minmax(0,1.25fr)_minmax(0,1fr)]";

export function Projects() {
  return (
    <Section id="projects" index={3} copy={sections.projects}>
      <div className="border-b border-rule">
        {projects
          .filter((project) => project.published)
          .map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
      </div>
    </Section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const hasCaseStudy = Boolean(project.problem || project.result || project.built.length);
  return (
    <div
      className={`group/row reveal grid gap-x-8 border-t border-rule transition-colors hover:bg-accent/[0.05] ${ROW}`}
    >
      {/* `name` makes the rows a one-open-at-a-time accordion; native details is keyboard accessible. */}
      <details name="projects" id={project.slug} className="group min-w-0">
        <summary
          className={`grid cursor-pointer gap-x-8 gap-y-3 py-8 md:py-10 ${SUMMARY}`}
        >
          <span className="flex items-center justify-between font-mono text-sm text-muted md:flex-col md:items-start md:justify-start md:gap-3 md:pt-[0.35em]">
            <span>{number}</span>
            <Toggle />
          </span>
          <div className="transition-transform duration-300 group-hover/row:translate-x-1.5">
            <h3 className="font-display text-[clamp(1.6rem,3vw,3rem)] leading-[1.02] font-bold tracking-[-0.035em]">
              {project.title}
            </h3>
            <span className="label mt-3 block text-[0.6875rem] tracking-[0.2em] text-accent">{project.role}</span>
          </div>
          <span className="text-body block max-w-[60ch] text-muted md:col-start-2 lg:col-start-auto lg:pt-[0.35em]">
            {project.description}
          </span>
        </summary>

        <div className={`text-body grid gap-x-8 pb-12 ${SUMMARY}`}>
          <div className="grid gap-10 border-t border-rule pt-10 md:col-[2/3] md:grid-cols-2 lg:col-[2/4]">
            {/* Each part is hidden while its field is empty; with no case study yet, show a one-line summary. */}
            {!hasCaseStudy && (
              <Part title="Summary">
                <p>{project.description}</p>
              </Part>
            )}
            {project.problem && (
              <Part title="Problem">
                <p>{project.problem}</p>
              </Part>
            )}
            {project.result && (
              <Part title="Result">
                <p className="font-display text-2xl leading-snug font-medium tracking-tight">{project.result}</p>
              </Part>
            )}
            {project.built.length > 0 && (
              <Part title="What I built">
                <ul className="space-y-2">
                  {project.built.map((b) => (
                    <li key={b} className="relative pl-5">
                      <span aria-hidden="true" className="absolute top-[0.62em] left-0 size-1.5 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Part>
            )}
            {project.tech.length > 0 && (
              <Part title="Tech">
                <p className="font-mono text-sm leading-relaxed">{project.tech.join(" / ")}</p>
              </Part>
            )}
          </div>
        </div>
      </details>

      {/* Column 4: kept even when empty so rows stay aligned. */}
      <div className="pb-8 md:pl-[calc(3.5rem+2rem)] lg:pt-[calc(2.5rem+0.35em)] lg:pb-0 lg:pl-0 lg:text-right empty:hidden lg:empty:block">
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="label inline-flex items-center gap-1.5 underline-offset-4 hover:text-accent hover:underline"
          >
            {project.link.label} <span aria-hidden="true">↗</span>
            <span className="sr-only">{project.title} (opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <span
      aria-hidden="true"
      className="relative size-4 before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:bg-accent after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:bg-accent after:transition-transform group-open:after:scale-y-0"
    />
  );
}

function Part({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="label mb-3 text-muted">{title}</h4>
      <div className="max-w-[60ch] leading-relaxed">{children}</div>
    </div>
  );
}
