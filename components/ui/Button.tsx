import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-canvas hover:bg-sage-deep hover:-translate-y-0.5 active:translate-y-0 shadow-[0_10px_30px_-12px_rgba(1,33,55,0.45)]",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-sage hover:text-sage-deep hover:-translate-y-0.5 active:translate-y-0",
  ghost: "bg-sage-pale text-sage-deep hover:bg-sage hover:text-canvas",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button({ variant = "primary", size = "md", className, children, ...props }, ref) {
    const classes = clsx(base, variants[variant], sizes[size], className);

    if ("href" in props && props.href) {
      const { href, ...rest } = props;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);
