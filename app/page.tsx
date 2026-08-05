import { Hero } from "@/components/home/Hero";
import { Advantages } from "@/components/home/Advantages";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { ContactBlock } from "@/components/home/ContactBlock";
import { Faq } from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <HowItWorksPreview />
      <ServicesPreview />
      <GalleryPreview />
      <ReviewsPreview />
      <ContactBlock />
      <Faq />
    </>
  );
}
