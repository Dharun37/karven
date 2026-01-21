"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, Users, Award, CheckCircle2 } from "lucide-react"

const stats = [
  { icon: Users, value: 150, suffix: "+", label: "Clients Worldwide", color: "blue" },
  { icon: CheckCircle2, value: 500, suffix: "+", label: "Projects Completed", color: "green" },
  { icon: Award, value: 25, suffix: "+", label: "Industry Awards", color: "yellow" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Client Satisfaction", color: "purple" }
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` : "none",
                  opacity: isVisible ? 1 : 0
                }}
              >
                <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  <Counter target={stat.value} isVisible={isVisible} duration={2000} />
                  {stat.suffix}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Counter({ target, isVisible, duration }: { target: number; isVisible: boolean; duration: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return <span>{count}</span>
}
