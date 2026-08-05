import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Консультация",
    description: "Осматриваем тату или татуаж, определяем фототип кожи и делаем тестовый патч.",
  },
  {
    n: "02",
    title: "Индивидуальный план",
    description: "Рассчитываем количество сеансов, сроки и итоговую стоимость — фиксируем всё письменно.",
  },
  {
    n: "03",
    title: "Курс сеансов",
    description: "Проводим процедуры с интервалом 6–8 недель, отслеживая, как светлеет пигмент.",
  },
];

export function HowItWorksPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-14">
          <SectionHeading
            eyebrow="Как это устроено"
            title="Три шага от тревожного тату до чистой кожи"
            description="Никаких сюрпризов в процессе — каждый шаг понятен и обсуждён заранее."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.n} className="relative flex flex-col gap-4 pl-1">
                <div className="flex items-center gap-4">
                  <span className="font-display text-[2.2rem] leading-none text-sage/50">
                    {step.n}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-line sm:block" aria-hidden />
                  )}
                </div>
                <h3 className="font-display text-[1.3rem]">{step.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            ))}
          </div>

          <div>
            <Button href="/how-it-works" variant="secondary">
              Подробнее о технологии
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
