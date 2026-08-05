import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { IconArrow, IconShield, IconSparkline } from "../ui/Icons";
import { ctaLabel } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      <Container className="grid items-center gap-12 pb-16 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="flex flex-col items-start gap-6 animate-fade-up">
          <Eyebrow>Медицинский лазерный центр</Eyebrow>
          <h1 className="font-display text-[2.5rem] leading-[1.08] sm:text-[3.4rem]">
            Сведение тату и татуажа{" "}
            <span className="relative inline-block text-sage-deep">
              без следа на коже
              <svg
                className="absolute -bottom-2 left-0 w-full text-sage/60"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 9c60-8 180-8 296 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="max-w-[520px] text-[1.1rem] leading-relaxed text-ink-soft">
            Медицинский лазер и точные протоколы без корочек, ожогов и рубцов. Уже на первой
            консультации вы получите честный план: сколько сеансов понадобится и сколько это
            будет стоить.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button href="/contact" size="lg">
              {ctaLabel}
              <IconArrow className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Смотреть цены
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-[0.88rem] text-ink-soft">
            <span className="flex items-center gap-2">
              <IconShield className="h-4 w-4 text-sage-deep" />
              Сертифицированный медицинский лазер
            </span>
            <span className="flex items-center gap-2">
              <IconSparkline className="h-4 w-4 text-sage-deep" />
              0 корочек и ожогов
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] animate-fade-up [animation-delay:150ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-surface-raised to-canvas-soft shadow-[0_30px_70px_-30px_rgba(1,33,55,0.35)]">
            {/* Abstract skin-tone field standing in for a treatment-area close-up */}
            <div className="absolute inset-0">
              <div className="absolute left-[8%] top-[12%] h-[62%] w-[78%] rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-gradient-to-br from-[#F6DFC0] via-[#F2D3AE] to-[#E9C39A] opacity-90 animate-drift dark:from-[#3A2A20] dark:via-[#2E2018] dark:to-[#241811]" />
              <div className="absolute bottom-[10%] right-[10%] h-24 w-24 rounded-full bg-sage/25 blur-2xl" />
            </div>

            {/* Laser sweep signature */}
            <div className="absolute inset-x-[10%] top-0 h-full">
              <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-sage to-transparent opacity-70 animate-sweep" />
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-line/70 bg-surface-raised/80 px-5 py-4 backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="text-[0.72rem] uppercase tracking-[0.1em] text-ink-faint">
                  Тестовый патч
                </span>
                <span className="text-[0.95rem] font-semibold text-ink">на первой встрече</span>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-pale text-sage-deep">
                <IconShield className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div className="absolute -left-6 top-8 hidden rounded-2xl border border-line bg-surface-raised px-4 py-3 shadow-[0_16px_40px_-20px_rgba(1,33,55,0.4)] sm:flex sm:flex-col">
            <span className="text-[0.72rem] uppercase tracking-[0.08em] text-ink-faint">Восстановление</span>
            <span className="font-display text-[1.3rem] leading-none text-sage-deep">0 дней</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
