import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { IconCheck, IconShield, IconSparkline } from "../ui/Icons";

const values = [
  {
    icon: IconShield,
    title: "Безопасность прежде всего",
    description:
      "Тестовый патч перед каждым новым курсом — обязательный шаг, а не опция. Настройки лазера всегда соответствуют фототипу кожи.",
  },
  {
    icon: IconSparkline,
    title: "Честные ожидания",
    description:
      "Я никогда не обещаю «свести за 2 сеанса», если это не соответствует действительности. План строится на реальных данных, а не на желании продать курс.",
  },
  {
    icon: IconCheck,
    title: "Понятный язык",
    description:
      "Объясняю, что происходит с кожей, простыми словами — без сложных терминов, в которых легко потеряться.",
  },
];

export function Values() {
  return (
    <section className="bg-canvas-soft py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-12 sm:gap-16">
          <SectionHeading
            eyebrow="Принципы работы"
            title="То, чем я руководствуюсь на каждом сеансе"
            align="center"
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-4 rounded-[1.6rem] border border-line bg-surface-raised p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-pale text-sage-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-[1.1rem] leading-snug">{title}</h3>
                <p className="text-[0.93rem] leading-relaxed text-ink-soft">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
