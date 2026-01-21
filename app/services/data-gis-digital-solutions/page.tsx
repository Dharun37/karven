'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  BarChart3,
  Map,
  Database,
  Globe,
  Layers,
  TrendingUp
} from "lucide-react"

const solutions = [
  {
    id: "data-processing",
    icon: Database,
    title: "Data Processing & Analysis",
    description: "Transform raw drone data into actionable insights with our advanced processing capabilities. We handle large datasets efficiently, ensuring accurate and timely results for your projects.",
    features: [
      "High-resolution orthomosaic generation",
      "Point cloud processing",
      "3D model reconstruction",
      "Multi-spectral data analysis",
      "Automated quality control"
    ]
  },
  {
    id: "gis-mapping",
    icon: Map,
    title: "GIS Mapping & Integration",
    description: "Comprehensive GIS services that integrate seamlessly with your existing systems. Create detailed maps, perform spatial analysis, and make data-driven decisions.",
    features: [
      "Custom GIS database development",
      "Spatial data analysis",
      "Map production and cartography",
      "GIS system integration",
      "Web-based GIS applications"
    ]
  },
  {
    id: "digital-twin",
    icon: Globe,
    title: "Digital Twin Solutions",
    description: "Create accurate digital replicas of physical assets and environments. Monitor, analyze, and optimize operations with real-time digital twin technology.",
    features: [
      "3D digital twin creation",
      "Real-time data integration",
      "Asset lifecycle management",
      "Predictive maintenance",
      "Virtual simulation and testing"
    ]
  },
  {
    id: "visualization",
    icon: Layers,
    title: "Data Visualization",
    description: "Present complex data in intuitive, interactive formats. Our visualization solutions help stakeholders understand and act on critical information.",
    features: [
      "Interactive 3D visualizations",
      "Custom dashboards",
      "Real-time data displays",
      "Mobile-responsive interfaces",
      "Export and reporting tools"
    ]
  },
  {
    id: "analytics",
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Leverage AI and machine learning for deeper insights. Identify patterns, predict trends, and optimize operations with advanced analytics.",
    features: [
      "Predictive analytics",
      "Change detection analysis",
      "Volume calculations",
      "Vegetation analysis",
      "Custom algorithm development"
    ]
  },
  {
    id: "cloud-solutions",
    icon: BarChart3,
    title: "Cloud-Based Solutions",
    description: "Access your data anywhere, anytime with secure cloud infrastructure. Collaborate seamlessly and scale your operations effortlessly.",
    features: [
      "Secure cloud storage",
      "Real-time collaboration",
      "Automated backups",
      "API integration",
      "Scalable infrastructure"
    ]
  }
]

const industries = [
  { name: "Agriculture", icon: "🌾" },
  { name: "Infrastructure", icon: "🏗️" },
  { name: "Mining", icon: "⛏️" },
  { name: "Energy", icon: "💡" },
  { name: "Urban Planning", icon: "🏙️" },
  { name: "Environment", icon: "🌍" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Construction", icon: "🏗️" },
  { name: "Utilities", icon: "⚡" },
  { name: "Transportation", icon: "🚗" },
  { name: "Forestry", icon: "🌲" },
  { name: "Water Resources", icon: "💧" }
]

const benefits = [
  {
    title: "Accuracy & Precision",
    description: "Industry-leading accuracy with centimeter-level precision in all deliverables.",
    icon: "🎯"
  },
  {
    title: "Fast Turnaround",
    description: "Efficient processing pipelines ensure quick delivery without compromising quality.",
    icon: "⚡"
  },
  {
    title: "Scalable Solutions",
    description: "From small projects to enterprise-level deployments, we scale to your needs.",
    icon: "📈"
  },
  {
    title: "Expert Support",
    description: "Dedicated team of GIS and data specialists available throughout your project.",
    icon: "👥"
  }
]

export default function DataGISDigitalSolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-blue-900/40 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Digital Innovation!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Data, GIS & Digital Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Transform your drone data into powerful insights with KarVenSen's comprehensive data processing, 
              GIS mapping, and digital solutions. We combine cutting-edge technology with expert analysis to 
              deliver actionable intelligence for your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Data Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry-leading expertise in data processing and GIS analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
{/* Tech Stack Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced GIS Technology Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade software and tools for comprehensive spatial data solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* GIS Software */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  ArcGIS Pro
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional GIS software for advanced spatial analysis and cartographic production
                </p>
              </div>
            </div>

            {/* Processing Tools */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  Pix4D Suite
                </h3>
                <p className="text-gray-600 text-sm">
                  Photogrammetry software for drone data processing and 3D modeling
                </p>
              </div>
            </div>

            {/* Cloud Platform */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Cloud GIS
                </h3>
                <p className="text-gray-600 text-sm">
                  ArcGIS Online and cloud-based platforms for data sharing and collaboration
                </p>
              </div>
            </div>

            {/* Analytics */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  AI Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  Machine learning and AI-powered spatial analysis for predictive insights
                </p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                TB+
              </div>
              <div className="text-sm text-gray-600 font-semibold">Data Processing</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-sm text-gray-600 font-semibold">Data Layers</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600 font-semibold">Cloud Access</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                API
              </div>
              <div className="text-sm text-gray-600 font-semibold">Integration Ready</div>
            </div>
          </div>
        </div>
      </section>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Data & GIS Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions for all your data processing and analysis needs
            </p>
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
                        ? 'bg-blue-600 text-white shadow-lg'
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
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                    alt={selectedSolution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
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
                  
                  <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
                  <div className="space-y-3">
                    {selectedSolution.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamlined workflow from data collection to final deliverables
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Data Collection", desc: "Capture high-quality drone data" },
              { step: "02", title: "Processing", desc: "Advanced algorithms process raw data" },
              { step: "03", title: "Analysis", desc: "Expert analysis and quality control" },
              { step: "04", title: "Delivery", desc: "Final deliverables in your format" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applicable Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Let's discuss how our data and GIS solutions can help you make better decisions 
            and achieve your project goals.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}