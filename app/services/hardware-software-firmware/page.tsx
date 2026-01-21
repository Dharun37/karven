'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  CheckCircle2,
  Microchip,
  Code,
  Cpu,
  Settings,
  Wrench,
  Zap
} from "lucide-react"

const solutions = [
  {
    id: "custom-hardware",
    icon: Microchip,
    title: "Custom Drone Hardware",
    description: "Design and manufacture custom drone hardware tailored to your specific requirements. From payload systems to specialized sensors, we build solutions that meet your unique needs.",
    features: [
      "Custom frame design",
      "Payload integration",
      "Sensor mounting systems",
      "Power management solutions",
      "Weatherproofing options"
    ]
  },
  {
    id: "software-development",
    icon: Code,
    title: "Software Development",
    description: "Comprehensive software solutions for drone operations, data processing, and fleet management. Build custom applications that integrate seamlessly with your workflow.",
    features: [
      "Flight control software",
      "Mission planning tools",
      "Data processing pipelines",
      "Fleet management systems",
      "API development"
    ]
  },
  {
    id: "firmware",
    icon: Cpu,
    title: "Firmware Development",
    description: "Low-level firmware development and optimization for drone systems. Enhance performance, add features, and ensure reliable operation of your drone fleet.",
    features: [
      "Flight controller firmware",
      "Sensor integration",
      "Communication protocols",
      "Performance optimization",
      "OTA updates"
    ]
  },
  {
    id: "system-integration",
    icon: Settings,
    title: "System Integration",
    description: "Integrate drones with existing systems and infrastructure. Connect your drone operations with enterprise software, databases, and third-party services.",
    features: [
      "Enterprise system integration",
      "Database connectivity",
      "Cloud platform integration",
      "Third-party API integration",
      "Legacy system compatibility"
    ]
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Comprehensive maintenance and technical support services for your drone hardware and software. Keep your systems running smoothly with our expert support.",
    features: [
      "Preventive maintenance",
      "Hardware repairs",
      "Software updates",
      "Technical support",
      "Training programs"
    ]
  },
  {
    id: "optimization",
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimize your drone systems for maximum efficiency, reliability, and performance. Fine-tune hardware and software for your specific use cases.",
    features: [
      "Flight time optimization",
      "Payload capacity enhancement",
      "Communication range improvement",
      "Battery management",
      "Thermal management"
    ]
  }
]

const capabilities = [
  {
    title: "Hardware Expertise",
    description: "Deep knowledge of drone components, sensors, and mechanical systems.",
    icon: "🔧"
  },
  {
    title: "Software Proficiency",
    description: "Expert developers skilled in multiple programming languages and frameworks.",
    icon: "💻"
  },
  {
    title: "Firmware Mastery",
    description: "Low-level programming expertise for embedded systems and real-time operations.",
    icon: "⚙️"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and validation processes ensure reliable solutions.",
    icon: "✅"
  }
]

const technologies = [
  { name: "C/C++", icon: "💾" },
  { name: "Python", icon: "🐍" },
  { name: "ROS", icon: "🤖" },
  { name: "PX4", icon: "🚁" },
  { name: "ArduPilot", icon: "✈️" },
  { name: "React/Node.js", icon: "⚛️" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "OpenCV", icon: "👁️" },
  { name: "MQTT", icon: "📡" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS/Azure", icon: "☁️" },
  { name: "Git", icon: "📝" }
]

export default function HardwareSoftwareFirmwarePage() {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-indigo-900/40 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Engineering Excellence!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hardware, Software & Firmware
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Transform your drone vision into reality with KarVenSen's comprehensive hardware, software, 
              and firmware development services. From custom hardware design to advanced software solutions, 
              we deliver end-to-end engineering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive expertise across the entire drone technology stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
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
              Comprehensive Development Services
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
                        ? 'bg-indigo-600 text-white shadow-lg'
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
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
                    alt={selectedSolution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
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
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Technologies We Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-indigo-50 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured approach from concept to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Requirements", desc: "Understand your needs and objectives" },
              { step: "02", title: "Design", desc: "Create detailed specifications and architecture" },
              { step: "03", title: "Development", desc: "Build and integrate components" },
              { step: "04", title: "Testing", desc: "Rigorous validation and quality assurance" },
              { step: "05", title: "Deployment", desc: "Launch and ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Let's discuss your project and create innovative drone technology solutions together.
          </p>
          <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}