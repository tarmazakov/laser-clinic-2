import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  {
    n: "01",
    title: "Бесплатная консультация",
    description:
      "Осматриваем тату или татуаж, узнаём историю: когда сделано, перекрывалось ли, какими красками. Определяем тип и глубину пигмента, оцениваем фототип кожи.",
    details: ["Осмотр и фото на старте", "Оценка пигмента и глубины", "Ответы на все вопросы"],
  },
  {
    n: "02",
    title: "Тестовый патч",
    description:
      "Наносим один короткий импульс лазера на небольшой участок, чтобы увидеть, как именно ваша кожа и пигмент реагируют на энергию — это исключает сюрпризы в основном курсе.",
    details: ["Занимает 5–10 минут", "Подбор безопасной мощности", "Реакция кожи видна через 48 часов"],
  },
  {
    n: "03",
    title: "Индивидуальный план",
    description:
      "На основе патча и осмотра составляем письменный план: количество сеансов, интервалы между ними и итоговую стоимость курса — без скрытых доплат.",
    details: ["Фиксированная смета", "Реалистичные сроки", "План можно скорректировать позже"],
  },
  {
    n: "04",
    title: "Курс сеансов",
    description:
      "Каждый сеанс длится 15–40 минут в зависимости от размера. Между сеансами — 6–8 недель: коже нужно время, чтобы вывести разрушенный пигмент естественным путём.",
    details: ["Без анестезии в большинстве случаев", "Лёгкое покраснение до суток", "Фотофиксация прогресса"],
  },
];

export function StepsDetailed() {
  return (
    <section className="py-6 sm:py-10">
      <Container>
        <div className="flex flex-col gap-12 sm:gap-16">
          <SectionHeading
            eyebrow="Процесс"
            title="Что происходит на каждом этапе"
            description="Полный путь от первой встречи до чистой кожи — подробно и без медицинского жаргона."
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="grid gap-6 rounded-[1.8rem] border border-line bg-surface-raised p-7 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10 sm:p-9"
              >
                <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-6">
                  <span className="font-display text-[2.6rem] leading-none text-sage/45">
                    {step.n}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden h-16 w-px bg-line sm:block" aria-hidden />
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-[1.4rem]">{step.title}</h3>
                  <p className="max-w-[640px] text-[0.98rem] leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {step.details.map((d) => (
                      <li
                        key={d}
                        className="rounded-full bg-canvas-soft px-3.5 py-1.5 text-[0.82rem] text-ink-soft"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
