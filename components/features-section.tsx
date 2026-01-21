"use client"

import { useEffect, useRef } from "react"
import { Cpu, Plane, BookOpen, GraduationCap } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Cpu,
    title: "AI Software Development",
    description:
      "Custom AI solutions, machine learning models, and intelligent automation systems designed for enterprise-grade performance.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
  },
  {
    icon: Plane,
    title: "Agricultural Drone Systems",
    description:
      "Smart drone technology for farmers - crop monitoring, spraying, and analytics. Make in India initiative with quality components.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=300&fit=crop",
  },
  {
    icon: BookOpen,
    title: "LMS Solutions",
    description: "Modern learning management systems for educational institutions and corporate training programs.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=300&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "Educational Programs",
    description: "Hands-on workshops and awareness programs about drone technology for schools, colleges, and professionals.",
    href: "/training",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=300&fit=crop",
  },
]

export function FeaturesSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

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

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Link 
              key={feature.title} 
              href={feature.href} 
              className="group"
            >
              <div 
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className="h-full scroll-fade-in transition-all duration-300 hover:shadow-2xl border border-gray-200 hover:border-gray-400 rounded-xl overflow-hidden bg-white hover:-translate-y-2"
              >
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                  <div className="absolute bottom-3 left-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/95 backdrop-blur-sm shadow-lg">
                    <feature.icon className="h-6 w-6 text-gray-900" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors group-hover:text-gray-700">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
