import { nav, site } from "@/data/content";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/80 backdrop-blur-md">
      <div className="page-x flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight whitespace-nowrap">
          {site.name}
          <span aria-hidden="true" className="ml-1 inline-block size-[0.3em] bg-accent" />
        </a>
        <div className="flex items-center gap-2 lg:gap-8">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-10">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="label text-[0.875rem] underline-offset-[6px] transition-colors hover:text-accent hover:underline xl:text-[0.9375rem]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
