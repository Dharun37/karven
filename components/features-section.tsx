"use client"

import Link from "next/link"
import { Zap, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "AI-Powered Solutions",
    description: "Cutting-edge AI and machine learning that solve real-world problems",
  },
  {
    icon: Shield,
    title: "Make in India Quality",
    description: "Indigenous drone manufacturing with global standards",
  },
  {
    icon: Users,
    title: "End-to-End Support",
    description: "From development to deployment and training programs",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-white border-b border-gray-200 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between mb-16 gap-8">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 animate-slide-in-left">
              Built in India.
              <br />
              <span className="text-gray-600">Powered by Innovation.</span>
            </h2>
          </div>

          <div className="flex-shrink-0">
            <Link href="/about">
              <div className="group inline-flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-all">
                <span className="text-base font-medium animate-slide-in-right">Learn about us</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform animate-slide-in-right" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
