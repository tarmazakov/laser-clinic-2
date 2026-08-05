import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { TechExplainer } from "@/components/how-it-works/TechExplainer";
import { StepsDetailed } from "@/components/how-it-works/StepsDetailed";
import { CandidateChecklist } from "@/components/how-it-works/CandidateChecklist";
import { Faq } from "@/components/home/Faq";

export const metadata: Metadata = {
  title: "Как это работает",
  description:
    "Как медицинский лазер сводит тату и татуаж без ожогов и рубцов: технология простыми словами, этапы процедуры и чек-лист «подхожу ли я».",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Технология и процесс"
        title="Как мы сводим тату и татуаж без следа"
        description="От первой консультации до чистой кожи — прозрачно, по шагам, без сложных терминов."
      />
      <TechExplainer />
      <StepsDetailed />
      <CandidateChecklist />
      <Faq />
    </>
  );
}
