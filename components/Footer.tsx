import Link from "next/link";
import { Container } from "./ui/Container";
import { IconInstagram, IconPhone, IconTelegram, IconYoutube } from "./ui/Icons";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-soft">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-canvas font-display text-base">
              С
            </span>
            <span className="font-display text-[1.1rem]">{site.shortName}</span>
          </Link>
          <p className="max-w-[280px] text-[0.95rem] leading-relaxed text-ink-soft">
            Медицинский лазерный центр по сведению татуировок и перманентного макияжа —
            без ожогов, шрамов и долгого восстановления.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-sage hover:text-sage-deep"
            >
              <IconInstagram className="h-[18px] w-[18px]" />
            </a>
            <a
              href={site.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-sage hover:text-sage-deep"
            >
              <IconYoutube className="h-[18px] w-[18px]" />
            </a>
            <a
              href={site.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-sage hover:text-sage-deep"
            >
              <IconTelegram className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Навигация
          </span>
          {nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="text-[0.95rem] text-ink-soft transition-colors hover:text-sage-deep">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Контакты
          </span>
          <a href={site.phoneHref} className="flex items-center gap-2 text-[0.95rem] text-ink-soft transition-colors hover:text-sage-deep">
            <IconPhone className="h-4 w-4 shrink-0" />
            {site.phone}
          </a>
          <span className="text-[0.95rem] text-ink-soft">{site.address}</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-faint">
            Часы работы
          </span>
          {site.hours.map((h) => (
            <div key={h.days} className="flex justify-between gap-4 text-[0.95rem] text-ink-soft">
              <span>{h.days}</span>
              <span>{h.time}</span>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col-reverse items-center gap-3 py-6 text-[0.85rem] text-ink-faint sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Сделано с заботой о вашей коже</span>
        </Container>
      </div>
    </footer>
  );
}
