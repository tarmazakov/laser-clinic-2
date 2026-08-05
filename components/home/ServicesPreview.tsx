import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { services } from "@/lib/content";

export function ServicesPreview() {
  return (
    <section className="bg-canvas-soft py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-14">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Услуги и цены"
              title="Стоимость сеанса зависит от размера и типа пигмента"
              className="max-w-[560px]"
            />
            <Button href="/services" variant="secondary" className="shrink-0">
              Все цены и план
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col gap-5 rounded-[1.6rem] border border-line bg-surface-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage/50"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-[1.1rem] leading-snug">{service.title}</h3>
                  <span className="text-[0.85rem] text-ink-faint">{service.subtitle}</span>
                </div>
                <div className="mt-auto flex items-baseline gap-1.5">
                  <span className="font-display text-[1.5rem] text-sage-deep">{service.price}</span>
                  <span className="text-[0.8rem] text-ink-faint">{service.unit}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[0.9rem] text-ink-faint">
            Итоговая стоимость всего курса рассчитывается индивидуально на бесплатной консультации.
          </p>
        </div>
      </Container>
    </section>
  );
}
