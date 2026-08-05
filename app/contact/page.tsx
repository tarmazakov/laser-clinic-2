import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faq } from "@/lib/content";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Запишитесь на бесплатную консультацию по лазерному сведению тату и перманентного макияжа. Телефон, WhatsApp, Telegram и адрес студии.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Запишитесь на бесплатную консультацию"
        description="Расскажите немного о тату или татуаже, который хотите свести, — и мы предложим удобное время для встречи."
      />

      <section className="pb-20 sm:pb-28">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="rounded-[1.8rem] border border-line bg-surface-raised p-7 sm:p-10">
            <ContactForm />
          </div>
          <ContactInfo />
        </Container>
      </section>

      <section className="bg-canvas-soft py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="Частые вопросы" title="Ещё немного деталей перед встречей" />
          <FaqAccordion items={faq} />
        </Container>
      </section>
    </>
  );
}
