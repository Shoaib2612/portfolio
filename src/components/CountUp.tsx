"use client";

import { useEffect, useRef } from "react";

const DURATION = 1400;
const NUMBER = /^(\D*)(\d+(?:\.\d+)?)(.*)$/;

/**
 * Server-renders the final value (correct for SEO and no-JS). If the stat
 * starts below the fold, it resets to zero and counts up once when it scrolls
 * into view. Writes to the DOM directly to avoid re-rendering every frame.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const match = value.match(NUMBER);
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already visible

    const [, prefix, number, suffix] = match;
    const target = Number(number);
    const decimals = number.split(".")[1]?.length ?? 0;
    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;
    el.textContent = format(0);

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / DURATION);
          el.textContent = format(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
          else el.textContent = value;
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = value;
    };
  }, [value]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {value}
      </span>
      <span className="sr-only">{value}</span>
    </>
  );
}
