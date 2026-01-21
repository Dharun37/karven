"use client"

import { useState, useEffect, useRef } from "react"

function AnimatedCounter({ end, suffix = "", shouldAnimate = false }: { end: number; suffix?: string; shouldAnimate?: boolean }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!shouldAnimate || hasAnimated || count >= end) return
    
    const duration = 2000
    const steps = 60
    const increment = end / steps
    const stepDuration = duration / steps
    
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment
        if (next >= end) {
          setHasAnimated(true)
          return end
        }
        return next
      })
    }, stepDuration)
    
    return () => clearInterval(timer)
  }, [end, count, hasAnimated, shouldAnimate])

  return (
    <>
      {Math.floor(count)}{suffix}
    </>
  )
}

export function StatsBoxes() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-gray-900 shadow-lg">
            <div className="text-4xl font-bold text-white">
              <AnimatedCounter end={2023} shouldAnimate={isVisible} />
            </div>
            <div className="mt-2 text-sm text-gray-300">Founded</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-900 shadow-lg">
            <div className="text-4xl font-bold text-white">
              <AnimatedCounter end={150} suffix="+" shouldAnimate={isVisible} />
            </div>
            <div className="mt-2 text-sm text-gray-300">Drones Deployed</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-900 shadow-lg">
            <div className="text-4xl font-bold text-white">
              <AnimatedCounter end={100} suffix="+" shouldAnimate={isVisible} />
            </div>
            <div className="mt-2 text-sm text-gray-300">Workshops Conducted</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-900 shadow-lg">
            <div className="text-4xl font-bold text-white">
              <AnimatedCounter end={25} suffix="+" shouldAnimate={isVisible} />
            </div>
            <div className="mt-2 text-sm text-gray-300">Enterprise Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
