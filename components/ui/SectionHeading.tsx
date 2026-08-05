import clsx from "clsx";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-sage-deep",
        className
      )}
    >
      <span className="h-[6px] w-[6px] rounded-full bg-sage" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-[2rem] leading-[1.15] sm:text-[2.5rem]">{title}</h2>
      {description && (
        <p
          className={clsx(
            "max-w-[560px] text-[1.05rem] leading-relaxed text-ink-soft",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
