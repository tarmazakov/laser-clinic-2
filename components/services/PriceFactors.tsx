import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const factors = [
  {
    title: "Размер и площадь",
    description: "Чем крупнее рисунок, тем больше проходов лазера нужно за один сеанс.",
  },
  {
    title: "Цвет и плотность пигмента",
    description: "Тёмные и профессиональные чернила обычно сводятся быстрее, чем яркие или самодельные.",
  },
  {
    title: "Глубина введения",
    description: "Татуаж и любительские тату часто расположены иначе, чем салонные работы — это влияет на число сеансов.",
  },
  {
    title: "Возраст и история тату",
    description: "Перекрытые или уже частично сведённые в другом месте тату могут потребовать больше времени.",
  },
];

export function PriceFactors() {
  return (
    <section className="bg-canvas-soft py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-14">
          <SectionHeading
            eyebrow="Из чего складывается цена"
            title="Что влияет на количество сеансов и итоговую сумму"
            description="Именно поэтому точную стоимость курса мы называем только после консультации и тестового патча."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {factors.map((f) => (
              <div key={f.title} className="flex flex-col gap-2 rounded-[1.4rem] border border-line bg-surface-raised p-6">
                <h3 className="font-display text-[1.1rem]">{f.title}</h3>
                <p className="text-[0.93rem] leading-relaxed text-ink-soft">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
