import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Ready to Innovate with Karvensen?
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
          Let's discuss how our AI-driven solutions and drone technology can transform your operations. 
          Join the future of intelligent automation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/contact">
              <MessageSquare className="mr-2 h-4 w-4" />
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
