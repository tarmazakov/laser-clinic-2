import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { PhotoPlaceholder } from "../ui/PhotoPlaceholder";

const shots = ["Кабинет и оборудование", "Зона консультации", "Лазерный аппарат крупным планом"];

export function ClinicStrip() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-14">
          <SectionHeading eyebrow="Клиника" title="Пространство, где проходит курс" />
          <div className="grid gap-4 sm:grid-cols-3">
            {shots.map((label) => (
              <PhotoPlaceholder key={label} label={label} tone="canvas" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
