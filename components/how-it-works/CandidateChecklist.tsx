import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { IconCheck } from "../ui/Icons";
import { candidateChecklist, ctaLabel } from "@/lib/content";

export function CandidateChecklist() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-line bg-surface-raised p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <Eyebrow>Проверьте себя</Eyebrow>
            <h2 className="font-display text-[1.9rem] leading-[1.15] sm:text-[2.2rem]">
              Подхожу ли я для процедуры?
            </h2>
            <p className="max-w-[440px] text-[0.98rem] leading-relaxed text-ink-soft">
              В большинстве случаев — да. Быстро проверьте по списку, а точный ответ и план
              получите на бесплатной консультации.
            </p>
            <div>
              <Button href="/contact" className="mt-2">
                {ctaLabel}
              </Button>
            </div>
          </div>

          <ul className="flex flex-col gap-4">
            {candidateChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-pale text-sage-deep">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-[0.98rem] leading-relaxed text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
