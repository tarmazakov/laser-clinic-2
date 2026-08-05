import { Container } from "../ui/Container";
import { IconStar } from "../ui/Icons";
import { reviews } from "@/lib/content";

export function ReviewsList() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.id} className="flex flex-col gap-5 rounded-[1.6rem] border border-line bg-surface-raised p-7">
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
      </Container>
    </section>
  );
}
