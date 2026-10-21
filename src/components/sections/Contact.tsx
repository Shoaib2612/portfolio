import { contact } from "@/data/content";
import { socialLinks, telHref } from "@/lib/site";
import { CopyEmail } from "../CopyEmail";

export function Contact() {
  const linkLabels = { LinkedIn: contact.labels.linkedin, GitHub: contact.labels.github };
  const details = [
    contact.phone && { label: contact.labels.phone, value: contact.phone, href: telHref(contact.phone) },
    contact.location && { label: contact.labels.location, value: contact.location },
  ].filter((item): item is { label: string; value: string; href?: string } => Boolean(item));

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="page-x scroll-mt-[var(--header-h)] border-t border-rule py-[clamp(5rem,11vw,11rem)]"
    >
      <div className="editorial-grid gap-y-5">
        <p className="label pt-[0.6em] text-[0.875rem] md:text-[1rem]">
          <span className="text-accent">05</span>
          <span className="ml-3">{contact.label}</span>
        </p>

        <div className="min-w-0">
          <h2
            id="contact-title"
            className="reveal font-display text-[clamp(2.75rem,13vw,7rem)] leading-[0.92] font-bold tracking-[-0.045em] lg:text-[clamp(5rem,9vw,11rem)]"
          >
            <span className="block">{contact.heading}</span>
            <span className="block font-serif font-normal tracking-[-0.01em] text-accent italic">
              {contact.accentWord}.
            </span>
          </h2>

          <p className="text-lead mt-8 max-w-[45ch] text-muted">
            {contact.blurb}
          </p>

          <div className="mt-[clamp(3rem,6vw,5rem)]">
            <p className="label text-muted">{contact.labels.email}</p>
            <div className="mt-3 flex flex-wrap items-end gap-x-5 gap-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="min-w-0 font-display text-[clamp(1.5rem,7vw,3rem)] leading-[1.05] font-bold tracking-[-0.04em] [overflow-wrap:anywhere] lg:text-[clamp(2rem,3.6vw,6rem)]"
              >
                <span className="email-underline">{contact.email}</span>
              </a>
              <CopyEmail email={contact.email} label={contact.labels.copy} copiedLabel={contact.labels.copied} />
            </div>
          </div>

          {details.length > 0 && (
            <dl className="mt-12 grid border-t border-rule sm:grid-cols-2 lg:max-w-[48rem]">
              {details.map((item) => (
                <div key={item.label} className="border-b border-rule py-5 sm:border-b-0 sm:py-6">
                  <dt className="label text-muted">{item.label}</dt>
                  <dd className="text-body mt-2">
                    {item.href ? (
                      <a href={item.href} className="underline-offset-4 hover:text-accent hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {socialLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-heavy justify-center ${i === 0 ? "btn-primary" : ""}`}
              >
                {linkLabels[link.label]} <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
            <a href={contact.cvPath} download className="btn btn-heavy justify-center">
              {contact.labels.cv}
              <span className="sr-only">(PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
