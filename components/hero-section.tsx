"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center border-b">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative z-10 mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium shadow-sm animate-fade-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>AI-Driven Innovation Since 2023</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up animation-delay-100">
            Transforming Industries with{" "}
            <span className="text-primary">AI & Drone Technology</span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Pioneering intelligent solutions in AI software, agricultural drones, enterprise systems, and cloud infrastructure. 
            Built in India, powered by innovation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <Button asChild size="lg" className="w-full sm:w-auto group">
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto group">
              <Link href="/contact">
                <Play className="mr-2 h-4 w-4" />
                Schedule a Demo
              </Link>
            </Button>
          </div>

          {/* Key highlights */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-up animation-delay-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Drone Technology for Farmers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Make in India Initiative</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-4xl mx-auto animate-fade-up animation-delay-500">
          {[
            { value: "2023", label: "Founded" },
            { value: "500+", label: "Drones Deployed" },
            { value: "100+", label: "Workshops Conducted" },
            { value: "50+", label: "Enterprise Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg bg-card border">
              <div className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
