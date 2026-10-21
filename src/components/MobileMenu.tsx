"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { nav } from "@/data/content";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>("a[href], button") ?? []);
    focusables()[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      // Keep focus inside the overlay while it is open.
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="label flex h-10 items-center border border-rule px-3 lg:hidden"
      >
        Menu
      </button>
      {open &&
        // Portaled: the header's backdrop-filter would otherwise trap position: fixed.
        createPortal(
          <div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="page-x fixed inset-0 z-[90] flex flex-col bg-paper lg:hidden"
          >
            <div className="flex h-16 shrink-0 items-center justify-end border-b border-rule">
              <button
                type="button"
                onClick={() => {
                  close();
                  buttonRef.current?.focus();
                }}
                className="label flex h-10 items-center border border-rule px-3"
              >
                Close
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center">
              <ol>
                {nav.map((item, i) => (
                  <li key={item.href} className="border-b border-rule">
                    <a
                      href={item.href}
                      onClick={close}
                      className="flex items-baseline gap-4 py-4 font-display text-[clamp(2.5rem,13vw,4.5rem)] leading-none font-semibold tracking-tight"
                    >
                      <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
