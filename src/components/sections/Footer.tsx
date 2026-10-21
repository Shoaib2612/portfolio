import { cacheLife } from "next/cache";
import { footer, site } from "@/data/content";

async function currentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await currentYear();
  return (
    <footer className="page-x border-t border-ink">
      <div className="label flex flex-col gap-3 py-8 text-muted sm:grid sm:grid-cols-3 sm:items-center sm:gap-4">
        <p>
          © {year} {site.name}
        </p>
        {footer.location && <p className="hidden sm:block sm:text-center">{footer.location}</p>}
        <a href="#top" className="self-start hover:text-accent sm:col-start-3 sm:justify-self-end">
          {footer.backToTop} <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
