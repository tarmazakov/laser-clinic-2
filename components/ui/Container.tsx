import clsx from "clsx";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-[1180px] px-5 sm:px-8", className)}>
      {children}
    </Tag>
  );
}
