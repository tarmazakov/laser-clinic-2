import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { services, ctaLabel } from "@/lib/content";

export function PriceTable() {
  return (
    <section className="py-6 sm:py-10">
      <Container>
        <div className="overflow-hidden rounded-[1.8rem] border border-line bg-surface-raised">
          <div className="hidden grid-cols-[1.6fr_1fr_1fr] gap-4 border-b border-line bg-canvas-soft px-8 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-ink-faint sm:grid">
            <span>Услуга</span>
            <span>Размер / зона</span>
            <span className="text-right">Цена за сеанс</span>
          </div>

          {services.map((service, i) => (
            <div
              key={service.id}
              className={`flex flex-col gap-2 px-6 py-6 sm:grid sm:grid-cols-[1.6fr_1fr_1fr] sm:items-center sm:gap-4 sm:px-8 ${
                i !== services.length - 1 ? "border-b border-line" : ""
              }`}
            >
              <span className="font-display text-[1.1rem]">{service.title}</span>
              <span className="text-[0.92rem] text-ink-soft">{service.subtitle}</span>
              <span className="text-left font-display text-[1.15rem] text-sage-deep sm:text-right">
                {service.price}{" "}
                <span className="font-body text-[0.78rem] font-normal text-ink-faint">
                  {service.unit}
                </span>
              </span>
              {service.note && (
                <span className="text-[0.85rem] text-ink-faint sm:col-span-3">{service.note}</span>
              )}
            </div>
          ))}

          <div className="flex flex-col items-start gap-4 bg-sage-pale/50 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex flex-col gap-1">
              <span className="font-display text-[1.1rem] text-sage-deep">
                Полный план курса и точная итоговая сумма
              </span>
              <span className="text-[0.9rem] text-ink-soft">
                Рассчитываются индивидуально на бесплатной консультации после осмотра и тестового патча.
              </span>
            </div>
            <Button href="/contact" className="shrink-0">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
