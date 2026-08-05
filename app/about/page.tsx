import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutIntro } from "@/components/about/AboutIntro";
import { Values } from "@/components/about/Values";
import { ClinicStrip } from "@/components/about/ClinicStrip";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Медицинский специалист по лазерному сведению тату и перманентного макияжа: опыт, сертификаты и принципы работы с кожей.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Специалист клиники"
        title="Врач, для которой безопасность кожи важнее скорости результата"
      />
      <AboutIntro />
      <Values />
      <ClinicStrip />
    </>
  );
}
