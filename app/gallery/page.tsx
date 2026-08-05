import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "До и после",
  description:
    "Реальные результаты сведения тату и перманентного макияжа — фото клиентов до и после курса лазерных сеансов.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="До / После"
        title="Только реальные фотографии клиентов"
        description="Никаких стоковых изображений — каждый случай ниже прошёл через нашу клинику."
      />
      <GalleryGrid />
    </>
  );
}
