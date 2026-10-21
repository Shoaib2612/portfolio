"use client";

import { useEffect, useRef, useState } from "react";

export function CopyEmail({ email, label, copiedLabel }: { email: string; label: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email address ${email}`}
      className="label inline-flex h-9 min-w-[5.5rem] shrink-0 items-center justify-center border-2 border-ink px-3 transition-colors hover:bg-ink hover:text-paper"
    >
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
