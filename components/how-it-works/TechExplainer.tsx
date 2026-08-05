import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { IconDroplet, IconShield, IconSparkline } from "../ui/Icons";

const points = [
  {
    icon: IconSparkline,
    title: "Импульс, а не ожог",
    description:
      "Лазер посылает очень короткую вспышку света, которая дробит частицы пигмента на мельчайшие фрагменты, не нагревая и не повреждая саму кожу вокруг.",
  },
  {
    icon: IconShield,
    title: "Настройки под вашу кожу",
    description:
      "Мощность и длина волны каждый раз подбираются под фототип кожи и цвет пигмента — это и есть разница между чистым сведением и риском ожога.",
  },
  {
    icon: IconDroplet,
    title: "Организм убирает остальное",
    description:
      "Раздробленные частицы пигмента естественным образом выводятся лимфатической системой в течение нескольких недель после сеанса — отсюда и нужен перерыв между процедурами.",
  },
];

export function TechExplainer() {
  return (
    <section className="bg-canvas-soft py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-12 sm:gap-16">
          <SectionHeading
            eyebrow="Технология"
            title="Как лазер убирает пигмент, не трогая кожу"
            description="Никакого сложного медицинского языка — только то, что действительно важно понимать перед курсом."
            align="center"
          />

          <div className="grid gap-5 sm:grid-cols-3">
            {points.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-[1.6rem] border border-line bg-surface-raised p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-pale text-sage-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-[1.15rem] leading-snug">{title}</h3>
                <p className="text-[0.93rem] leading-relaxed text-ink-soft">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
