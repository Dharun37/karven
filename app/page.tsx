import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HowWeWorkSection } from "@/components/how-we-work-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
