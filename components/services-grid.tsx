"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, Plane, BookOpen, GraduationCap, Shield, Zap, 
  Camera, Users as UsersIcon, ArrowRight, Cpu, Network, BarChart3, Globe
} from "lucide-react"

const categories = [
  {
    id: "ai",
    label: "AI Solutions",
    icon: Brain,
    services: [
      {
        title: "AI Software Development",
        description: "Custom AI solutions, machine learning models, and intelligent automation systems.",
        features: ["Machine Learning", "Deep Learning", "Computer Vision"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop"
      },
      {
        title: "Predictive Analytics",
        description: "Advanced analytics solutions for forecasting and data-driven decision making.",
        features: ["Forecasting", "Pattern Recognition", "Business Intelligence"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop"
      },
      {
        title: "Natural Language Processing",
        description: "NLP solutions for chatbots, sentiment analysis, and text processing.",
        features: ["Chatbots", "Text Analysis", "Language Models"],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&auto=format&fit=crop"
      },
      {
        title: "Computer Vision Systems",
        description: "Image recognition, object detection, and visual analytics solutions.",
        features: ["Object Detection", "Image Recognition", "Video Analytics"],
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "drone",
    label: "Drone Tech",
    icon: Plane,
    services: [
      {
        title: "Agricultural Drone Systems",
        description: "Smart drone technology for farmers - crop monitoring, spraying, and analytics.",
        features: ["Precision Agriculture", "Crop Monitoring", "Analytics"],
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&auto=format&fit=crop"
      },
      {
        title: "Surveillance & Reconnaissance",
        description: "Advanced aerial surveillance solutions for security and monitoring.",
        features: ["Real-time Monitoring", "HD Recording", "GPS Tracking"],
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&auto=format&fit=crop"
      },
      {
        title: "Crowd Monitoring Drone",
        description: "Real-time aerial intelligence for event and crowd safety management.",
        features: ["Live Streaming", "Crowd Analysis", "Event Coverage"],
        image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&auto=format&fit=crop"
      },
      {
        title: "Industrial Inspection",
        description: "Drone-based inspection solutions for infrastructure and industrial sites.",
        features: ["Infrastructure Inspection", "Thermal Imaging", "3D Mapping"],
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&auto=format&fit=crop"
      }
    ]
  },
  {
    id: "education",
    label: "Education & Training",
    icon: GraduationCap,
    services: [
      {
        title: "LMS Solutions",
        description: "Modern learning management systems for educational institutions.",
        features: ["Course Management", "Live Classes", "Assessments"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop"
      },
      {
        title: "Educational Programs",
        description: "Hands-on workshops about drone technology for schools and colleges.",
        features: ["Drone Workshops", "Technical Training", "Certifications"],
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop"
      },
      {
        title: "Corporate Training",
        description: "Professional skill development and corporate training programs.",
        features: ["Skills Training", "Leadership Programs", "Tech Workshops"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop"
      },
      {
        title: "E-Learning Platforms",
        description: "Custom e-learning solutions with interactive content and assessments.",
        features: ["Video Courses", "Interactive Content", "Progress Tracking"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop"
      }
    ]
  }
]

export function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("ai")
  
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Category Tabs - Left Side - Vertical Pills */}
          <div className="lg:w-1/5">
            <div className="lg:sticky lg:top-24 space-y-1">
              {categories.map((category) => {
                const Icon = category.icon
                const isActive = activeCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-2.5 transition-all ${
                      isActive 
                        ? 'bg-gray-900 text-white' 
                        : 'bg-transparent text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                      <span className="text-sm font-medium">{category.label}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Services Grid - Right Side - 2x2 with overlay text */}
          <div className="lg:w-4/5">
            {/* Category Description */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentCategory.label}</h2>
              <p className="text-gray-600">
                {currentCategory.id === 'ai' && 'Power Your Operations with Our AI Products and End-to-End Solutions, Transforming Intelligence, Analytics, and Automation.'}
                {currentCategory.id === 'drone' && 'Power Your Operations with Our Drone Products and End-to-End Solutions, Transforming Surveillance, Mapping, and Industrial Applications.'}
                {currentCategory.id === 'education' && 'Comprehensive Education and Training Solutions with Modern Learning Management Systems and Professional Development Programs.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategory.services.map((service, index) => (
                <div
                  key={index}
                  className="group relative h-64 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Background Image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                      {service.features[0]}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-2">
                      {service.title}
                    </h3>
                    <button className="text-white text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Learn more 
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
