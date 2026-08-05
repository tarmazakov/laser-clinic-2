import { Container } from "../ui/Container";
import { IconDroplet, IconShield, IconSparkline } from "../ui/Icons";

const items = [
  {
    icon: IconDroplet,
    title: "0 корочек и ожогов",
    description:
      "Протокол настроен так, чтобы кожа заживала ровно — без реабилитации, перевязок и заметных следов.",
  },
  {
    icon: IconSparkline,
    title: "План уже с первого сеанса",
    description:
      "После консультации и тестового патча вы точно знаете, сколько сеансов понадобится и сколько это будет стоить.",
  },
  {
    icon: IconShield,
    title: "Медицинский лазер и опыт",
    description:
      "Сертифицированное оборудование и обученный специалист — настройки подбираются под ваш тип кожи и пигмент.",
  },
];

export function Advantages() {
  return (
    <section className="py-4 sm:py-8">
      <Container className="grid gap-4 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group flex flex-col gap-4 rounded-[1.6rem] border border-line bg-surface-raised p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(1,33,55,0.35)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-pale text-sage-deep transition-colors duration-300 group-hover:bg-sage group-hover:text-canvas">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-[1.25rem] leading-snug">{title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-ink-soft">{description}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
