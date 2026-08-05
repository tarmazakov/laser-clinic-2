import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { IconStar } from "../ui/Icons";
import { reviews } from "@/lib/content";

export function ReviewsPreview() {
  const featured = reviews.slice(0, 3);

  return (
    <section className="bg-canvas-soft py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-14">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Отзывы клиентов"
              title="Что говорят те, кто уже проходит курс"
              className="max-w-[560px]"
            />
            <Button href="/reviews" variant="secondary" className="shrink-0">
              Все отзывы
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {featured.map((r) => (
              <div
                key={r.id}
                className="flex flex-col gap-5 rounded-[1.6rem] border border-line bg-surface-raised p-7"
              >
                <div className="flex gap-0.5 text-sage">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">«{r.quote}»</p>
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-pale text-[0.85rem] font-semibold text-sage-deep">
                    {r.initials}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[0.9rem] font-semibold text-ink">{r.name}</span>
                    <span className="text-[0.8rem] text-ink-faint">{r.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
