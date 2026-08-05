import { Container } from "./Container";
import { Eyebrow } from "./SectionHeading";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sage/10 blur-3xl"
        aria-hidden
      />
      <Container className="flex flex-col gap-5 animate-fade-up">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-[720px] font-display text-[2.2rem] leading-[1.15] sm:text-[3rem]">
          {title}
        </h1>
        {description && (
          <p className="max-w-[600px] text-[1.05rem] leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
