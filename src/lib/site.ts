import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { contact, hero, type SocialLink } from "@/data/content";

type ImageSize = { width: number; height: number };

/** Reads pixel dimensions from a PNG or JPEG header; undefined for anything else. */
function readImageSize(file: string): ImageSize | undefined {
  try {
    const b = readFileSync(file);
    if (b.readUInt32BE(0) === 0x89504e47) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
    if (b[0] === 0xff && b[1] === 0xd8) {
      let i = 2;
      while (i + 9 < b.length) {
        if (b[i] !== 0xff) return undefined;
        const marker = b[i + 1];
        // SOF0–SOF15, excluding DHT (C4), JPG (C8) and DAC (CC).
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
          return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
        }
        i += 2 + b.readUInt16BE(i + 2);
      }
    }
  } catch {}
  return undefined;
}

/**
 * Size of a file in /public, or null if it is missing. Evaluated at build time
 * (the page is statically prerendered), so a missing file never fails the build.
 */
function publicImage(src: string, fallback: ImageSize): ImageSize | null {
  const file = join(process.cwd(), "public", src);
  return existsSync(file) ? (readImageSize(file) ?? fallback) : null;
}

export const heroCutout = publicImage(hero.cutout.src, { width: 1200, height: 1500 });
export const heroPhoto = publicImage(hero.image.src, { width: 1600, height: 2000 });

const isPlaceholder = (href: string) => !href || href.includes("your-handle");

/** LinkedIn / GitHub links that have been filled in (placeholders are hidden). */
export const socialLinks: SocialLink[] = (
  [
    { label: "LinkedIn", href: contact.links.linkedin },
    { label: "GitHub", href: contact.links.github },
  ] satisfies SocialLink[]
).filter((link) => !isPlaceholder(link.href));

/** "+971-507099378" → "tel:+971507099378". */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

/** Splits "Systems that *talk*" into plain text and the accent word. */
export function splitAccent(heading: string) {
  const match = heading.match(/^(.*?)\*(.+?)\*(.*)$/);
  return match
    ? { before: match[1], accent: match[2], after: match[3] }
    : { before: heading, accent: "", after: "" };
}
