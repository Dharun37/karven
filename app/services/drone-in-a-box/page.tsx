'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  CheckCircle2,
  Box,
  Radio,
  Shield,
  Eye,
  Zap,
  Clock
} from "lucide-react"

const solutions = [
  {
    id: "autonomous-diab",
    icon: Box,
    title: "Autonomous Drone-In-A-Box",
    description: "Fully automated drone deployment system for continuous monitoring and surveillance. Deploy drones on-demand without human intervention, perfect for 24/7 operations.",
    features: [
      "Automated takeoff and landing",
      "Weather-resistant housing",
      "Autonomous charging",
      "Remote mission planning",
      "Multi-drone coordination"
    ]
  },
  {
    id: "tethered-systems",
    icon: Radio,
    title: "Tethered Drone Systems",
    description: "Continuous flight capability with unlimited power through tethered connections. Ideal for persistent surveillance, communications relay, and long-duration monitoring.",
    features: [
      "Unlimited flight time",
      "Stable hovering capability",
      "High-bandwidth data transmission",
      "Weather-resistant design",
      "Quick deployment"
    ]
  },
  {
    id: "security-surveillance",
    icon: Shield,
    title: "Security & Surveillance",
    description: "Automated security solutions for perimeter monitoring, facility protection, and threat detection. Enhance your security infrastructure with autonomous drone patrols.",
    features: [
      "Automated patrol routes",
      "Intrusion detection",
      "Real-time alerts",
      "Night vision capability",
      "Integration with security systems"
    ]
  },
  {
    id: "inspection",
    icon: Eye,
    title: "Infrastructure Inspection",
    description: "Automated inspection systems for continuous monitoring of critical infrastructure. Detect issues early and maintain asset integrity with regular automated inspections.",
    features: [
      "Scheduled inspections",
      "Defect detection AI",
      "Comparison analysis",
      "Automated reporting",
      "Predictive maintenance"
    ]
  },
  {
    id: "emergency-response",
    icon: Zap,
    title: "Emergency Response",
    description: "Rapid deployment systems for emergency situations. Provide immediate aerial perspective and situational awareness when every second counts.",
    features: [
      "Instant deployment",
      "Live video streaming",
      "Thermal imaging",
      "Search and rescue support",
      "Disaster assessment"
    ]
  },
  {
    id: "continuous-monitoring",
    icon: Clock,
    title: "Continuous Monitoring",
    description: "24/7 monitoring solutions for construction sites, events, and critical facilities. Maintain constant aerial oversight with minimal human intervention.",
    features: [
      "Round-the-clock operation",
      "Automated data collection",
      "Cloud storage integration",
      "Multi-site management",
      "Customizable alerts"
    ]
  }
]

const benefits = [
  {
    title: "24/7 Operations",
    description: "Continuous monitoring capability without human intervention.",
    icon: "🕐"
  },
  {
    title: "Cost Effective",
    description: "Reduce operational costs with automated systems.",
    icon: "💰"
  },
  {
    title: "Rapid Response",
    description: "Deploy drones instantly when needed.",
    icon: "⚡"
  },
  {
    title: "Scalable",
    description: "Easily expand to multiple locations and drones.",
    icon: "📈"
  }
]

const applications = [
  { name: "Critical Infrastructure", icon: "🏭" },
  { name: "Border Security", icon: "🛡️" },
  { name: "Construction Sites", icon: "🏗️" },
  { name: "Oil & Gas", icon: "⛽" },
  { name: "Power Plants", icon: "💡" },
  { name: "Ports & Harbors", icon: "⚓" },
  { name: "Smart Cities", icon: "🏙️" },
  { name: "Events & Venues", icon: "🎪" },
  { name: "Mining Operations", icon: "⛏️" },
  { name: "Agriculture", icon: "🌾" },
  { name: "Emergency Services", icon: "🚨" },
  { name: "Military & Defense", icon: "🎖️" }
]

export default function DroneInABoxPage() {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-cyan-900/40 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Autonomous Operations!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Drone-In-A-Box & Tethered Systems
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Experience the future of autonomous drone operations with KarVenSen's Drone-In-A-Box and 
              Tethered Systems. From continuous surveillance to emergency response, our automated solutions 
              provide 24/7 capabilities without human intervention.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Automated Systems?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Revolutionize your operations with autonomous drone technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-cyan-50 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-cyan-600 mb-3">{benefit.title}</h3>
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
              Comprehensive Automated Solutions
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
                        ? 'bg-cyan-600 text-white shadow-lg'
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
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                    alt={selectedSolution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
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
                        <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
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

      {/* System Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              System Features
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automated Operations",
                desc: "Fully autonomous flight operations with minimal human intervention",
                icon: "🤖"
              },
              {
                title: "Weather Protection",
                desc: "Ruggedized housing protects drones in harsh environmental conditions",
                icon: "🌦️"
              },
              {
                title: "Smart Charging",
                desc: "Automated battery management and charging systems",
                icon: "🔋"
              },
              {
                title: "Remote Management",
                desc: "Control and monitor systems from anywhere in the world",
                icon: "🌐"
              },
              {
                title: "AI Integration",
                desc: "Advanced AI for object detection, tracking, and analysis",
                icon: "🧠"
              },
              {
                title: "Scalable Platform",
                desc: "Easily expand to multiple drones and locations",
                icon: "📊"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Applications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:bg-cyan-50 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-3">{app.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  {app.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover how our Drone-In-A-Box and Tethered Systems can transform your operations with 24/7 autonomous capabilities.
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            <Link href="/contact">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}