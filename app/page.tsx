import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ServicesCards } from "@/components/services-cards"
import { StatsBoxes } from "@/components/stats-boxes"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesCards />
      <StatsBoxes />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
