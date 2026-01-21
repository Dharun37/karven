"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    quote:
      "Karvensen's drone technology revolutionized our farm operations. Real-time crop monitoring and precise spraying increased our yield by 35%. The team's support has been outstanding.",
    author: "Rajesh Kumar",
    role: "Agricultural Enterprise Owner, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Their LMS platform transformed our online education delivery. The AI-powered features and intuitive design made virtual learning engaging and effective for thousands of students.",
    author: "Dr. Priya Sharma",
    role: "Dean of Education Technology",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
  },
  {
    quote:
      "The drone awareness workshop at our college was exceptional. Students gained hands-on experience and practical knowledge that will shape their careers in emerging technologies.",
    author: "Prof. Venkat Rao",
    role: "Engineering College Principal",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
  {
    quote:
      "The AI-powered analytics solution provided invaluable insights into our business operations. We've seen a 40% improvement in decision-making speed and accuracy.",
    author: "Amit Patel",
    role: "CTO, Tech Solutions Pvt Ltd",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Their industrial drone inspection services saved us significant time and costs. The detailed 3D mapping and thermal imaging capabilities are game-changing.",
    author: "Sarah Menon",
    role: "Operations Manager, Infrastructure Corp",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    quote:
      "The crowd monitoring drone solution for our events has been remarkable. Real-time aerial intelligence helps us ensure safety and manage large gatherings efficiently.",
    author: "Vikram Singh",
    role: "Event Management Director",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Working with Karvensen on our smart city project was a pleasure. Their geospatial expertise and innovative approach delivered results beyond our expectations.",
    author: "Anjali Reddy",
    role: "Urban Planning Consultant",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
  },
  {
    quote:
      "The drone training program equipped our team with essential skills. Professional instructors and hands-on practice made learning both effective and enjoyable.",
    author: "Karthik Iyer",
    role: "Training Head, Aviation Academy",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition
        
        // Reset to start when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-16 bg-white border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Trusted by Organizations Nationwide
          </h2>
          <p className="text-gray-600 text-lg">
            Real results from real clients - see how Karvensen is making an impact across industries.
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicate testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card 
              key={`${testimonial.author}-${index}`} 
              className="relative flex-shrink-0 w-[380px] hover:shadow-lg transition-shadow bg-white border-gray-200"
            >
              <CardContent className="pt-8">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-gray-200" />
                <p className="mb-6 text-gray-600 relative z-10 pl-4 leading-relaxed text-sm">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-gray-100 text-gray-900">
                      {testimonial.author[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{testimonial.author}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
