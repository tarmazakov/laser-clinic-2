import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PriceTable } from "@/components/services/PriceTable";
import { PriceFactors } from "@/components/services/PriceFactors";
import { CandidateChecklist } from "@/components/how-it-works/CandidateChecklist";

export const metadata: Metadata = {
  title: "Услуги и цены",
  description:
    "Цены на лазерное сведение тату и перманентного макияжа: от 3 500 ₽ за сеанс. Точный план и итоговая стоимость курса — на бесплатной консультации.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Услуги и цены"
        title="Прозрачные цены за сеанс, честный план на весь курс"
        description="Ниже — стартовые цены на каждый тип услуги. Итоговую стоимость курса и число сеансов мы фиксируем письменно после консультации."
      />
      <PriceTable />
      <PriceFactors />
      <CandidateChecklist />
    </>
  );
}
