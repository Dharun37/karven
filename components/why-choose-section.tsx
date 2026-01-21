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
    <section className="min-h-screen flex items-center justify-center bg-gray-900 border-b border-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Why Choose Karvensen?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We're not just another IT company. Karvensen combines cutting-edge AI technology with a deep understanding 
              of real-world challenges - from helping farmers optimize crops with drones to building enterprise systems 
              that scale.
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="border-2 border-gray-700 hover:border-green-400 transition-all bg-gray-800 hover:bg-gray-750 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-400">
                    <value.icon className="h-5 w-5 text-gray-900" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg text-white">{value.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
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
