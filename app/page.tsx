import { HeroSection } from "@/components/hero-section"
import { StatsBoxes } from "@/components/stats-boxes"
import { FeaturesSection } from "@/components/features-section"
import { ServicesGrid } from "@/components/services-grid"
import { ProcessSection } from "@/components/process-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ServicesGrid />
      <StatsBoxes />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
