'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  CheckCircle2,
  Package,
  Zap,
  Heart,
  ShoppingBag,
  Truck,
  MapPin
} from "lucide-react"

const solutions = [
  {
    id: "medical-delivery",
    icon: Heart,
    title: "Medical & Emergency Delivery",
    description: "Life-saving drone delivery of medical supplies, blood samples, vaccines, and emergency medications. Reach remote areas and save critical time in emergencies.",
    features: [
      "Temperature-controlled cargo",
      "Priority routing",
      "Real-time tracking",
      "Regulatory compliance",
      "24/7 availability"
    ]
  },
  {
    id: "last-mile",
    icon: Package,
    title: "Last-Mile Delivery",
    description: "Efficient last-mile delivery solutions for e-commerce, retail, and logistics. Reduce delivery times and costs while improving customer satisfaction.",
    features: [
      "Autonomous navigation",
      "Multiple drop-off points",
      "Contactless delivery",
      "Real-time notifications",
      "Flexible scheduling"
    ]
  },
  {
    id: "food-delivery",
    icon: ShoppingBag,
    title: "Food & Grocery Delivery",
    description: "Fast and fresh delivery of food and groceries directly to customers. Maintain product quality with temperature-controlled compartments.",
    features: [
      "Insulated cargo bay",
      "Quick delivery times",
      "GPS tracking",
      "Safe landing zones",
      "Weather monitoring"
    ]
  },
  {
    id: "industrial",
    icon: Truck,
    title: "Industrial & B2B Delivery",
    description: "Reliable delivery of parts, tools, and supplies to industrial sites, construction zones, and remote facilities. Minimize downtime and improve efficiency.",
    features: [
      "Heavy payload capacity",
      "Secure cargo handling",
      "Site-to-site delivery",
      "Scheduled deliveries",
      "Proof of delivery"
    ]
  },
  {
    id: "rural-delivery",
    icon: MapPin,
    title: "Rural & Remote Delivery",
    description: "Connect remote and rural areas with reliable delivery services. Overcome geographical barriers and provide equal access to goods and services.",
    features: [
      "Long-range capability",
      "Terrain navigation",
      "Weather adaptation",
      "Community hubs",
      "Cost-effective operations"
    ]
  },
  {
    id: "express-delivery",
    icon: Zap,
    title: "Express & On-Demand",
    description: "Ultra-fast delivery for urgent shipments and time-sensitive items. Get your packages delivered in minutes, not hours.",
    features: [
      "Instant dispatch",
      "Priority handling",
      "Live tracking",
      "Flexible pickup",
      "Same-day guarantee"
    ]
  }
]

const benefits = [
  {
    title: "10x Faster",
    description: "Deliver packages up to 10 times faster than traditional methods.",
    icon: "⚡"
  },
  {
    title: "60% Cost Savings",
    description: "Reduce delivery costs significantly with autonomous operations.",
    icon: "💰"
  },
  {
    title: "Zero Emissions",
    description: "Eco-friendly electric drones with zero carbon emissions.",
    icon: "🌱"
  },
  {
    title: "24/7 Operations",
    description: "Round-the-clock delivery capability for urgent needs.",
    icon: "🕐"
  }
]

const industries = [
  { name: "Healthcare", icon: "🏥" },
  { name: "E-commerce", icon: "🛒" },
  { name: "Food & Beverage", icon: "🍔" },
  { name: "Retail", icon: "🏪" },
  { name: "Logistics", icon: "📦" },
  { name: "Pharmaceuticals", icon: "💊" },
  { name: "Agriculture", icon: "🌾" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Construction", icon: "🏗️" },
  { name: "Mining", icon: "⛏️" },
  { name: "Energy", icon: "💡" },
  { name: "Emergency Services", icon: "🚨" }
]

export default function DroneDeliveryPage() {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-600 to-orange-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-orange-900/40 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Future of Logistics!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Drone Delivery
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Revolutionize your delivery operations with KarVenSen's advanced drone delivery solutions. 
              From medical emergencies to e-commerce, we provide fast, reliable, and cost-effective 
              delivery services that overcome traditional logistics challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Drone Delivery?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the future of logistics today
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-orange-50 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-orange-600 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Delivery Solutions
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
                        ? 'bg-orange-600 text-white shadow-lg'
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
                    src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&h=600&fit=crop"
                    alt={selectedSolution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
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
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
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

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, fast, and reliable delivery process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Place Order", desc: "Submit delivery request through our platform" },
              { step: "02", title: "Drone Dispatch", desc: "Automated drone selection and route planning" },
              { step: "03", title: "In Transit", desc: "Real-time tracking and monitoring" },
              { step: "04", title: "Delivered", desc: "Safe delivery with confirmation" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:bg-orange-50 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Delivery Operations?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Join the delivery revolution and provide your customers with faster, more reliable service.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
            <Link href="/contact">
              Start Delivering
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}