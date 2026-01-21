import type { Metadata } from "next"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import BlogGrid from "./BlogGrid"

export const metadata: Metadata = {
  title: "Blog | Karvensen",
  description:
    "Explore deep insights, innovations, and real-world applications across AI, Drone Technology, Cloud Computing, LMS platforms, and next-generation digital solutions.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        >
          <source src="/ai-background.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/40 to-black/50 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md border border-gray-300 text-gray-900 rounded-full text-sm font-semibold mb-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 hover:scale-105 transition-all duration-300">
              <BookOpen className="h-4 w-4" />
              <span>Insights & Updates</span>
            </div>
            
            {/* Main Heading with Green & Black */}
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">The KarVenSen </span>
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
              Explore cutting-edge insights on{' '}
              <span className="font-semibold text-emerald-400">Artificial Intelligence</span>,{' '}
              <span className="font-semibold text-green-400">Drone Technology</span>,{' '}
              <span className="font-semibold text-teal-400">Cloud Computing</span>,{' '}
              <span className="font-semibold text-emerald-300">LMS & EdTech</span>,{' '}
              and the future of enterprise innovation.
            </p>
          </div>
        </div>
      </section>

      <BlogGrid />
    </div>
  )
}
