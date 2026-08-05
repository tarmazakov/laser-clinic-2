import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { StatsStrip } from "@/components/reviews/StatsStrip";
import { ReviewsList } from "@/components/reviews/ReviewsList";

export const metadata: Metadata = {
  title: "Отзывы",
  description:
    "Отзывы клиентов о лазерном сведении тату и перманентного макияжа — честные истории о сеансах, сроках и результатах.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Отзывы клиентов"
        title="Истории тех, кто уже проходит или прошёл курс"
      />
      <StatsStrip />
      <ReviewsList />
    </>
  );
}
