"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center border-b border-gray-200">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/drone_cinematic_video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="container relative z-10 mx-auto px-4 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up">
            Transforming Industries with{" "}
            <span className="text-green-400">AI & Drone Technology</span>
          </h1>

          {/* Subtext */}
          <p className="mb-10 text-lg text-gray-200 sm:text-xl max-w-2xl mx-auto animate-fade-up">
            Pioneering intelligent solutions in AI software, agricultural drones, enterprise systems, and cloud infrastructure. 
            Built in India, powered by innovation.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center animate-fade-up">
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-white rounded-md px-8 py-3 text-base font-medium hover:opacity-90 transition-opacity"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Key highlights */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300 animate-fade-up">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>Drone Technology for Farmers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>Make in India Initiative</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
