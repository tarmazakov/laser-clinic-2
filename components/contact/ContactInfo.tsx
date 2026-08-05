import { IconClock, IconPhone, IconPin, IconTelegram, IconWhatsapp } from "../ui/Icons";
import { site } from "@/lib/content";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-[1.6rem] border border-dashed border-ink/15 bg-canvas-soft text-center">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute left-1/4 top-1/3 h-24 w-24 rounded-full bg-sage/15 blur-2xl" />
        </div>
        <IconPin className="relative h-7 w-7 text-sage-deep" />
        <p className="relative max-w-[220px] text-[0.85rem] font-medium text-ink-faint">
          Здесь будет карта проезда к студии
        </p>
      </div>

      <div className="flex flex-col gap-5 rounded-[1.6rem] border border-line bg-surface-raised p-7">
        <a href={site.phoneHref} className="flex items-start gap-3 text-ink transition-colors hover:text-sage-deep">
          <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
          <div className="flex flex-col">
            <span className="text-[0.8rem] text-ink-faint">Телефон</span>
            <span className="text-[1.02rem] font-semibold">{site.phone}</span>
          </div>
        </a>

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex items-start gap-3 text-ink transition-colors hover:text-sage-deep"
        >
          <IconWhatsapp className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
          <div className="flex flex-col">
            <span className="text-[0.8rem] text-ink-faint">WhatsApp</span>
            <span className="text-[1.02rem] font-semibold">Написать напрямую</span>
          </div>
        </a>

        <a
          href={site.telegram}
          target="_blank"
          rel="noreferrer"
          className="flex items-start gap-3 text-ink transition-colors hover:text-sage-deep"
        >
          <IconTelegram className="mt-0.5 h-5 w-5 shrink-0 text-sage-deep" />
          <div className="flex flex-col">
            <span className="text-[0.8rem] text-ink-faint">Telegram</span>
            <span className="text-[1.02rem] font-semibold">Написать напрямую</span>
          </div>
        </a>

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
  );
}
