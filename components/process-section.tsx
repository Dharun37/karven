"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column - Content - Sticky */}
          <div 
            className={`lg:w-1/2 lg:sticky lg:top-24 lg:self-start transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-lg">
              <div className="inline-block mb-6">
                <span className="text-gray-400 text-sm font-semibold tracking-wider uppercase">
                  Who We Are
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                About Karvensen
              </h2>
              <div className="h-1 w-20 bg-white mb-8"></div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Founded in 2023, pioneering AI software development, agricultural drone technology, and enterprise solutions across India. Make in India, powered by innovation.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Innovation First</h4>
                    <p className="text-gray-400 text-sm">Cutting-edge technology driving business transformation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Made in India</h4>
                    <p className="text-gray-400 text-sm">Proudly developing solutions for India and the world</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Client Focused</h4>
                    <p className="text-gray-400 text-sm">Delivering results that exceed expectations</p>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                  Discover more
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - 5 Image Cards with White Buttons + Rotated Text */}
          <div className="lg:w-1/2 space-y-4">
            {/* Card 1 - Team/Listing Photo */}
            <div 
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                  alt="Karvensen Team"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="bg-white text-black p-4 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                <span className="font-semibold text-gray-800">Investor Relations</span>
                <ArrowRight className="h-5 w-5 text-gray-600" />
              </div>
            </div>

            {/* Card 2 - Field Operations */}
            <div 
              className={`transition-all duration-1000 delay-100 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&auto=format&fit=crop"
                  alt="Field Operations"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="bg-white text-black p-4 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                <span className="font-semibold text-gray-800">About Us</span>
                <ArrowRight className="h-5 w-5 text-gray-600" />
              </div>
            </div>

            {/* Card 3 - Group Company / Team */}
            <div 
              className={`transition-all duration-1000 delay-200 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop"
                  alt="Group Company"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="bg-white text-black p-4 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                <span className="font-semibold text-gray-800">Group Company: Visit Drone Entry</span>
                <ArrowRight className="h-5 w-5 text-gray-600" />
              </div>
            </div>

            {/* Card 4 - Partnership/Collaboration */}
            <div 
              className={`transition-all duration-1000 delay-300 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop"
                  alt="Partnerships"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="bg-white text-black p-4 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                <span className="font-semibold text-gray-800">Group Company: visit PYI Technologies</span>
                <ArrowRight className="h-5 w-5 text-gray-600" />
              </div>
            </div>

            {/* Card 5 - Life at Company */}
            <div 
              className={`transition-all duration-1000 delay-[400ms] ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop"
                  alt="Life at Karvensen"
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="bg-white text-black p-4 rounded-xl shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                <span className="font-semibold text-gray-800">Life at Karvensen</span>
                <ArrowRight className="h-5 w-5 text-gray-600" />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
