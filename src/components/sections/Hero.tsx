import Image from "next/image";
import { hero, heroButtons, site } from "@/data/content";
import { heroCutout, heroPhoto } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "../icons";

export function Hero() {
  const lastLine = site.nameLines.length - 1;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="page-x grid grid-cols-1 gap-12 pt-14 pb-16 md:py-16 lg:min-h-[min(calc(100svh-4rem),68rem)] lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] lg:gap-[max(4vw,3rem)] lg:py-14"
    >
      <div className="flex flex-col justify-center">
        {site.status && (
          <p className="label flex items-center gap-2.5 text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            {site.status}
          </p>
        )}

        <div className="mt-6 flex items-center justify-between gap-[clamp(1.5rem,7vw,2.25rem)]">
          <h1
            id="hero-title"
            className="min-w-0 font-display text-[clamp(3rem,14vw,7rem)] leading-[0.86] font-bold tracking-[-0.05em] lg:text-[clamp(5rem,7.4vw,13rem)]"
          >
            {site.nameLines.map((line, i) => (
              <span key={line} className="block">
                {i === lastLine ? <LastWordWithSquare line={line} /> : line}
              </span>
            ))}
          </h1>
          <MobilePortrait />
        </div>

        <p className="text-lead mt-8 max-w-[44ch]">
          <strong className="font-display font-semibold">{site.role}.</strong>{" "}
          <span className="text-muted">{site.description}</span>
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={site.cv} target="_blank" rel="noopener" className="btn btn-primary">
            {heroButtons.cv}
            <ArrowUpRight className="size-4" />
            <span className="sr-only">(PDF, opens in a new tab)</span>
          </a>
          <a href="#projects" className="btn">
            {heroButtons.work}
            <ArrowRight className="size-4" />
          </a>
          <a href="#contact" className="btn">
            {heroButtons.contact}
          </a>
        </div>
      </div>

      {/* Right column: vertically centered on desktop, stacked and centered on mobile. */}
      <div className="hidden items-center justify-center lg:flex lg:justify-end">
        {heroCutout ? <CutoutComposition size={heroCutout} /> : <LeafComposition />}
      </div>
    </section>
  );
}

/**
 * Below the desktop breakpoint the large composition is hidden and this
 * portrait sits beside the name instead (the name wraps to three lines): a
 * circular photo over an offset accent circle. It uses the same image and
 * `sizes` as the large one, so the browser reuses the preloaded file.
 */
function MobilePortrait() {
  const size = heroCutout ?? heroPhoto;
  return (
    // Sized to roughly the height of the three-line mobile name.
    <div className="relative size-[min(calc(clamp(3rem,14vw,7rem)*2.2),12rem)] shrink-0 lg:hidden">
      <div className="absolute inset-[0_9%_9%_0]">
        {!heroCutout && (
          <div
            aria-hidden="true"
            className="hero-shape absolute inset-0 translate-x-[9%] translate-y-[9%] rounded-full bg-accent"
          />
        )}
        <div
          className={`hero-figure relative size-full overflow-hidden rounded-full ${heroCutout ? "bg-accent" : "bg-paper"} ${size ? "" : "grid place-items-center border border-rule"}`}
        >
          {size ? (
            <Image
              src={heroCutout ? hero.cutout.src : hero.image.src}
              alt={heroCutout ? hero.cutout.alt : hero.image.alt}
              width={size.width}
              height={size.height}
              sizes={heroCutout ? CUTOUT_SIZES : PHOTO_SIZES}
              className={`size-full dark:brightness-95 ${heroCutout ? "object-contain object-bottom" : "object-cover"}`}
              style={
                heroCutout
                  ? undefined
                  : {
                      objectPosition: hero.avatar.position,
                      transform: `scale(${hero.avatar.zoom})`,
                      transformOrigin: hero.avatar.position,
                    }
              }
            />
          ) : (
            <span
              role="img"
              aria-label={hero.image.alt}
              className="font-display text-[clamp(1.75rem,8vw,2.5rem)] font-bold tracking-[-0.04em]"
            >
              {hero.initials}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const CUTOUT_SIZES = "(min-width: 1024px) 560px, min(100vw, 560px)";
const PHOTO_SIZES = "(min-width: 1024px) 520px, min(100vw, 520px)";

/** Design A: transparent cutout rising out of a flat accent circle. */
function CutoutComposition({ size }: { size: { width: number; height: number } }) {
  return (
    <figure className="w-full max-w-[560px] lg:w-[min(100%,560px,calc((100svh-12rem)/1.1))]">
      <div className="relative aspect-[1/1.1]">
        <div aria-hidden="true" className="hero-shape absolute bottom-0 left-[6%] aspect-square w-[88%] rounded-full bg-accent" />
        <Image
          src={hero.cutout.src}
          alt={hero.cutout.alt}
          width={size.width}
          height={size.height}
          preload
          sizes={CUTOUT_SIZES}
          className="hero-figure absolute inset-x-0 bottom-0 h-[89%] w-full object-contain object-bottom dark:brightness-95"
        />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-ink" />
      </div>
      <figcaption className="label mt-6 text-[0.6875rem] text-muted">{hero.caption}</figcaption>
    </figure>
  );
}

/** Design B: photo (or initials placeholder) in a rectangular frame over an offset accent block. */
function LeafComposition() {
  return (
    <figure className="w-full max-w-[520px] lg:w-[min(100%,520px,calc((100svh-13rem)*0.8))]">
      <div className="relative pr-[var(--frame-offset)] pb-[var(--frame-offset)]">
        <div className="relative aspect-[4/5]">
          <div
            aria-hidden="true"
            className="hero-shape absolute top-[var(--frame-offset)] left-[var(--frame-offset)] size-full bg-accent"
          />
          {heroPhoto ? (
            <div className="relative size-full overflow-hidden bg-paper">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                width={heroPhoto.width}
                height={heroPhoto.height}
                preload
                sizes={PHOTO_SIZES}
                className="hero-figure size-full object-cover dark:brightness-95"
                style={{ objectPosition: hero.image.position }}
              />
            </div>
          ) : (
            <div
              role="img"
              aria-label={hero.image.alt}
              className="relative grid size-full place-items-center border border-rule bg-paper"
            >
              <span
                aria-hidden="true"
                className="font-display text-[clamp(3.5rem,18vw,7rem)] leading-none font-bold tracking-[-0.05em] lg:text-[clamp(4.5rem,7vw,9rem)]"
              >
                {hero.initials}
              </span>
            </div>
          )}
        </div>
      </div>
      <figcaption className="label mt-6 text-[0.6875rem] text-muted">{hero.caption}</figcaption>
    </figure>
  );
}

/** Keeps the accent square on the same line as the final word. */
function LastWordWithSquare({ line }: { line: string }) {
  const cut = line.lastIndexOf(" ") + 1;
  return (
    <>
      {line.slice(0, cut)}
      <span className="whitespace-nowrap">
        {line.slice(cut)}
        <span aria-hidden="true" className="ml-[0.06em] inline-block size-[0.15em] bg-accent align-baseline" />
      </span>
    </>
  );
}
