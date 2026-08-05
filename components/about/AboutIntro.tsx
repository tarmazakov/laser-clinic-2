import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/SectionHeading";
import { PhotoPlaceholder } from "../ui/PhotoPlaceholder";

export function AboutIntro() {
  return (
    <section className="py-6 sm:py-10">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <PhotoPlaceholder label="Фото специалиста в кабинете" tone="canvas" className="lg:max-w-[380px]" />

        <div className="flex flex-col gap-5">
          <Eyebrow>Обо мне</Eyebrow>
          <h2 className="font-display text-[1.9rem] leading-[1.15] sm:text-[2.3rem]">
            Медицинский подход к тому, что кажется чисто эстетическим вопросом
          </h2>
          <p className="text-[1rem] leading-relaxed text-ink-soft">
            Я специализируюсь на лазерном сведении тату и перманентного макияжа больше [X] лет.
            За это время я убедилась: результат зависит не от мощности лазера самой по себе, а от
            того, насколько точно настройки подобраны под конкретную кожу и конкретный пигмент.
          </p>
          <p className="text-[1rem] leading-relaxed text-ink-soft">
            Поэтому в клинике нет универсального протокола «на всех». Каждый план строится
            заново — с осмотра, тестового патча и честного разговора о том, сколько сеансов
            реально потребуется.
          </p>

          <div className="mt-2 grid grid-cols-2 gap-4 border-t border-line pt-6 sm:grid-cols-3">
            {[
              { value: "[X]+", label: "лет практики" },
              { value: "[X]", label: "сертификатов" },
              { value: "0", label: "случаев ожогов" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-[1.8rem] text-sage-deep">{stat.value}</span>
                <span className="text-[0.85rem] text-ink-faint">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
