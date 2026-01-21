'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sprout,
  Droplets,
  Target,
  Leaf,
  TrendingUp,
  Shield
} from "lucide-react"

const solutions = [
  {
    id: "crop-spraying",
    icon: Sprout,
    title: "Crop Protection Spraying",
    description: "Precision pesticide and herbicide application for effective crop protection. Our drones ensure uniform coverage while minimizing chemical usage and environmental impact.",
    features: [
      "Variable rate application",
      "Precise droplet size control",
      "Reduced chemical waste",
      "Minimal crop damage",
      "Weather-adaptive spraying"
    ]
  },
  {
    id: "fertilizer",
    icon: Leaf,
    title: "Fertilizer Application",
    description: "Efficient nutrient delivery to crops with precision fertilizer spraying. Optimize plant health and yield while reducing fertilizer costs and runoff.",
    features: [
      "Customized nutrient mixes",
      "Targeted application zones",
      "Reduced fertilizer usage",
      "Improved nutrient uptake",
      "Soil health monitoring"
    ]
  },
  {
    id: "precision-agriculture",
    icon: Target,
    title: "Precision Agriculture",
    description: "Data-driven spraying solutions that combine drone technology with advanced analytics. Make informed decisions based on crop health data and field conditions.",
    features: [
      "NDVI mapping integration",
      "Variable rate technology",
      "Prescription maps",
      "Real-time adjustments",
      "Yield optimization"
    ]
  },
  {
    id: "spot-treatment",
    icon: Droplets,
    title: "Spot Treatment",
    description: "Targeted treatment of specific problem areas in your fields. Address pest infestations, disease outbreaks, or weed patches with surgical precision.",
    features: [
      "GPS-guided precision",
      "Minimal chemical use",
      "Quick response capability",
      "Cost-effective treatment",
      "Reduced environmental impact"
    ]
  },
  {
    id: "orchard-spraying",
    icon: TrendingUp,
    title: "Orchard & Vineyard Spraying",
    description: "Specialized spraying solutions for orchards, vineyards, and specialty crops. Navigate complex terrain and reach difficult areas with ease.",
    features: [
      "Vertical spraying capability",
      "Terrain-following technology",
      "Canopy penetration",
      "Reduced drift",
      "Worker safety"
    ]
  },
  {
    id: "organic-farming",
    icon: Shield,
    title: "Organic Farming Solutions",
    description: "Eco-friendly spraying options for organic and sustainable farming. Apply organic pesticides and bio-fertilizers with precision and care.",
    features: [
      "Organic-certified products",
      "Minimal soil disturbance",
      "Pollinator-safe timing",
      "Certification compliance",
      "Sustainable practices"
    ]
  }
]

const benefits = [
  {
    title: "80% Water Savings",
    description: "Significantly reduce water usage compared to traditional spraying methods.",
    icon: "💧"
  },
  {
    title: "90% Time Efficiency",
    description: "Cover large areas quickly with autonomous drone operations.",
    icon: "⚡"
  },
  {
    title: "30% Cost Reduction",
    description: "Lower operational costs through reduced chemical and labor expenses.",
    icon: "💰"
  },
  {
    title: "Eco-Friendly",
    description: "Minimize environmental impact with precise application and reduced runoff.",
    icon: "🌱"
  }
]

const crops = [
  { name: "Rice", icon: "🌾" },
  { name: "Wheat", icon: "🌾" },
  { name: "Cotton", icon: "🌸" },
  { name: "Sugarcane", icon: "🎋" },
  { name: "Corn", icon: "🌽" },
  { name: "Soybeans", icon: "🫘" },
  { name: "Vegetables", icon: "🥬" },
  { name: "Fruits", icon: "🍎" },
  { name: "Vineyards", icon: "🍇" },
  { name: "Tea", icon: "🍵" },
  { name: "Coffee", icon: "☕" },
  { name: "Orchards", icon: "🌳" }
]

export default function PrecisionSprayingPage() {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-green-900/40 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-green-100 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Smart Agriculture!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Precision Spraying
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Transform your agricultural operations with KarVenSen's advanced drone spraying technology. 
              Achieve superior crop protection, reduce costs, and promote sustainable farming practices 
              with our precision agriculture solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Drone Spraying?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the advantages of modern precision agriculture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-green-600 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Tech Stack Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Spraying Technology
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Precision agriculture equipment for efficient and sustainable crop protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Agricultural Drones */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Agri Drones
                </h3>
                <p className="text-gray-600 text-sm">
                  High-capacity spraying drones with 10-20L tanks and precision nozzle systems
                </p>
              </div>
            </div>

            {/* Smart Spraying */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-emerald-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Smart Nozzles
                </h3>
                <p className="text-gray-600 text-sm">
                  Variable rate technology with adjustable droplet size and flow control systems
                </p>
              </div>
            </div>

            {/* GPS Guidance */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  GPS Guidance
                </h3>
                <p className="text-gray-600 text-sm">
                  RTK-enabled navigation for precise flight paths and complete field coverage
                </p>
              </div>
            </div>

            {/* AI Analytics */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-teal-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  AI Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Crop health monitoring and prescription mapping for targeted application
                </p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                90%
              </div>
              <div className="text-sm text-gray-600 font-semibold">Water Savings</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
                40x
              </div>
              <div className="text-sm text-gray-600 font-semibold">Faster Coverage</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                30%
              </div>
              <div className="text-sm text-gray-600 font-semibold">Cost Reduction</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl border border-teal-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-2">
                15L
              </div>
              <div className="text-sm text-gray-600 font-semibold">Tank Capacity</div>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Spraying Solutions
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Solution Tabs */}
            <div className="lg:col-span-4">
              <div className="space-y-2 sticky top-24">
                {solutions.map((solution) => (
                  <button
                    key={solution.id}
                    onClick={() => setSelectedSolution(solution)}
                    className={`w-full text-left p-4 rounded-lg transition-all flex items-center gap-3 ${
                      selectedSolution.id === solution.id
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <solution.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold">{solution.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content - Solution Details */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"
                    alt={selectedSolution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                        <selectedSolution.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{selectedSolution.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {selectedSolution.description}
                  </p>
                  
                  <div className="space-y-3">
                    {selectedSolution.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crops We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Crops We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {crops.map((crop, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-green-50 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-3">{crop.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  {crop.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Modernize Your Farming?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join thousands of farmers who have improved their yields and reduced costs with our precision spraying solutions.
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/contact">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}