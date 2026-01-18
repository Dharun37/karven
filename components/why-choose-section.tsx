"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Target, Zap, Shield, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Founded on Innovation",
    description: "Established in 2023 by Karthika Venkatesan with a vision to revolutionize industries through AI and drone technology.",
  },
  {
    icon: Zap,
    title: "Make in India",
    description: "Proudly assembling drones in India with carefully sourced components, supporting local manufacturing and innovation.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Quality",
    description: "Delivering reliable, scalable solutions backed by rigorous testing and industry-leading security standards.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Empowering farmers with drone technology and educating youth through workshops in schools and colleges nationwide.",
  },
]

const highlights = [
  "AI-first approach to problem solving",
  "Specialized in agricultural drone solutions",
  "Proven track record in enterprise systems",
  "Comprehensive training and support programs",
  "Cloud-native architecture expertise",
  "Commitment to indigenous manufacturing",
]

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-muted/30 border-b">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Why Choose Karvensen?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're not just another IT company. Karvensen combines cutting-edge AI technology with a deep understanding 
              of real-world challenges - from helping farmers optimize crops with drones to building enterprise systems 
              that scale.
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
