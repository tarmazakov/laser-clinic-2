import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { PhotoPlaceholder } from "../ui/PhotoPlaceholder";

const items = [
  "Фото клиента: рука, до / после 4 сеансов",
  "Фото клиента: татуаж бровей, до / после",
  "Фото клиента: щиколотка, до / после 6 сеансов",
  "Фото клиента: татуаж губ, до / после",
  "Фото клиента: спина, до / после 8 сеансов",
];

export function GalleryPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-14">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Реальные результаты"
              title="До и после — только фото наших клиентов"
              description="Без стоковых изображений: каждое фото — реальный случай из клиники, с согласия клиента."
              className="max-w-[560px]"
            />
            <Button href="/gallery" variant="secondary" className="shrink-0">
              Вся галерея
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {items.map((label) => (
              <PhotoPlaceholder key={label} label={label} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
