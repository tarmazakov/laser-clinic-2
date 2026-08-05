import clsx from "clsx";
import { IconImage } from "./Icons";

/**
 * Placeholder for a real client photo. The brief explicitly asks for
 * real client photography only (no stock images), so instead of a fake
 * stock photo this renders a clearly-labelled slot the clinic owner can
 * swap for an actual before/after or studio photo.
 */
export function PhotoPlaceholder({
  label,
  tone = "sage",
  className,
}: {
  label: string;
  tone?: "sage" | "canvas";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[1.4rem] border border-dashed p-6 text-center",
        tone === "sage"
          ? "border-sage/40 bg-sage-pale/60 text-sage-deep"
          : "border-ink/15 bg-canvas-soft text-ink-faint",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-sage/20 blur-2xl" />
        <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-sage/10 blur-2xl" />
      </div>
      <IconImage className="h-8 w-8" />
      <p className="relative max-w-[180px] text-[0.85rem] font-medium leading-snug">{label}</p>
    </div>
  );
}
