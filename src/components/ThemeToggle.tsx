"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="grid size-10 place-items-center border border-transparent text-ink transition-colors hover:border-rule"
    >
      {/* Icon is chosen by CSS from data-theme, so server and client markup match. */}
      <Moon className="size-[18px] dark:hidden" strokeWidth={1.5} aria-hidden="true" />
      <Sun className="hidden size-[18px] dark:block" strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
