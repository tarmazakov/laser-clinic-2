import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { FaqAccordion } from "../ui/FaqAccordion";
import { faq } from "@/lib/content";

export function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="Частые вопросы"
          title="Отвечаем честно, без общих фраз"
          description="Если не нашли ответ здесь — задайте вопрос в мессенджере, ответим лично."
        />
        <FaqAccordion items={faq.slice(0, 3)} />
      </Container>
    </section>
  );
}
