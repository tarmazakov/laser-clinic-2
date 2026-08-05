import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { IconClock, IconPhone, IconPin, IconTelegram, IconWhatsapp } from "../ui/Icons";
import { ctaLabel, site } from "@/lib/content";

export function ContactBlock() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-4 overflow-hidden rounded-[2rem] border border-line bg-surface-raised sm:grid-cols-2">
          <div className="flex flex-col gap-6 p-8 sm:p-12">
            <Eyebrow>Свяжитесь с нами</Eyebrow>
            <h2 className="font-display text-[1.9rem] leading-[1.15] sm:text-[2.2rem]">
              Задайте вопрос или запишитесь на бесплатную консультацию
            </h2>
            <p className="text-[0.98rem] leading-relaxed text-ink-soft">
              Ответим в мессенджере в течение рабочего дня и предложим удобное время для
              первой встречи.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/contact">{ctaLabel}</Button>
              <Button href={site.telegram} variant="secondary">
                <IconTelegram className="h-4 w-4" />
                Telegram
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-t border-line bg-canvas-soft p-8 sm:border-l sm:border-t-0 sm:p-12">
            <a href={site.phoneHref} className="flex items-start gap-3 text-ink transition-colors hover:text-sage-deep">
              <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
              <div className="flex flex-col">
                <span className="text-[0.8rem] text-ink-faint">Телефон</span>
                <span className="text-[1.02rem] font-semibold">{site.phone}</span>
              </div>
            </a>

            <div className="flex items-start gap-3">
              <IconWhatsapp className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
              <div className="flex flex-col">
                <span className="text-[0.8rem] text-ink-faint">WhatsApp / Telegram</span>
                <span className="text-[1.02rem] font-semibold">Быстрые вопросы 24/7</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
              <div className="flex flex-col">
                <span className="text-[0.8rem] text-ink-faint">Адрес</span>
                <span className="text-[1.02rem] font-semibold">{site.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.8rem] text-ink-faint">Часы работы</span>
                {site.hours.map((h) => (
                  <span key={h.days} className="text-[0.95rem] font-medium">
                    {h.days}: {h.time}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
