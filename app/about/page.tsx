"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, Plane, Lightbulb, Shield, TrendingUp, Building2, GraduationCap, Cloud, Cpu, ChevronDown, Linkedin, X, Send, Home, MessageCircle } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pioneering AI and drone solutions that solve real-world challenges for farmers, businesses, and educational institutions.",
  },
  {
    icon: Shield,
    title: "Quality & Reliability",
    description: "Enterprise-grade solutions with rigorous testing. Make in India quality with global standards.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Committed to empowering farmers and educating youth about emerging technologies through hands-on programs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering exceptional results in every project - from AI software to drone deployments and training workshops.",
  },
]

const milestones = [
  { year: "2023", event: "Karvensen founded by Karthika Venkatesan with a vision for AI-driven innovation" },
  { year: "2023", event: "Launched agricultural drone technology program with Make in India initiative" },
  { year: "2023", event: "Began educational workshops in schools and colleges across India" },
  { year: "2024", event: "Expanded to LMS and ERP solutions for enterprise clients" },
  { year: "2024", event: "Deployed 500+ drones for agricultural monitoring" },
  { year: "2025", event: "Reached 100+ workshops conducted and 50+ enterprise clients" },
]

const impactStats = [
  { value: 53, label: "DGCA Pilots Trained", icon: Users, suffix: "+" },
  { value: 1, label: "UAV Surveys", icon: Cpu, suffix: "+" },
  { value: 9, label: "Countries", icon: Target, suffix: "+" },
  { value: 60, label: "Partners", icon: Award, suffix: "+" },
]

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, isVisible: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * (end - startValue) + startValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return count
}

// Custom hook for intersection observer
function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return { ref, isVisible }
}

// Animated stat component
function AnimatedStat({ stat }: { stat: typeof impactStats[0] }) {
  const { ref, isVisible } = useInView()
  const count = useCountUp(stat.value, 2000, isVisible)

  return (
    <div ref={ref} className="text-center">
      <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <stat.icon className="h-8 w-8 text-gray-700" />
      </div>
      <div className="text-4xl font-bold mb-2 text-gray-900">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-600 text-sm">{stat.label}</div>
    </div>
  )
}

export default function AboutPage() {
  const [playAnimation, setPlayAnimation] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const heroRef = useInView()
  const purposeRef = useInView()
  const valuesRef = useInView()
  const journeyRef = useInView()
  const industriesRef = useInView()
  const galleryRef = useInView()
  const awardsRef = useInView()
  const videoSectionRef = useRef<HTMLElement>(null)

  // Gallery images array
  const galleryImages = [
    { src: "/indian-professional-man.png", alt: "KarVenSen Team - Drone Training" },
    { src: "/indian-woman-professional.png", alt: "KarVenSen Team - Software Development" },
    { src: "/indian-professor-man.jpg", alt: "KarVenSen Team - AI Research" },
    { src: "/students-using-ai-learning-platform.jpg", alt: "KarVenSen Team - Education" },
    { src: "/drone-flying-over-farm-field-at-sunset.jpg", alt: "KarVenSen - Drone Operations" },
    { src: "/precision-agriculture-drone-mapping.jpg", alt: "KarVenSen - Agriculture Solutions" },
  ]

  useEffect(() => {
    // Trigger animation on page load
    const timer = setTimeout(() => {
      setPlayAnimation(true)
      // Reset after animation completes
      setTimeout(() => setPlayAnimation(false), 1000)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [galleryImages.length])

  const scrollToSection = () => {
    galleryRef.ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
    // In a real implementation, you would trigger actual video playback here
    alert('Video player would open here. You can integrate with YouTube, Vimeo, or a custom video player.')
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen">
      {/* Fixed Send Message Button - Bottom Right */}
      <button
        onClick={() => setIsContactFormOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        Send message
      </button>

      {/* Tagline Section */}
      <section className="relative py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl font-medium animate-fade-in">
            Trusted by Industry Leaders
          </p>
          <p className="text-sm md:text-base text-gray-300 mt-2 animate-fade-in-delay">
            Our clientele includes government agencies, defense forces, and leading enterprises that rely on our drone solutions and software services for innovation, efficiency, and mission-critical success.
          </p>
        </div>
      </section>

      {/* Hero Section with Large Title */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">
              Bringing AI & Technology
              <br />
              Closer to You!
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-in-delay">
              Unlocking the Skies, Transforming Industries
            </p>
            <button
              onClick={scrollToSection}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors animate-fade-in-delay-2 cursor-pointer"
            >
              <span>Discover our story</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Image Gallery Section - Auto-Rotating Carousel */}
      <section
        ref={galleryRef.ref}
        className={`py-12 bg-white transition-all duration-1000 ${
          galleryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Carousel */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
              {/* Images */}
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    index === currentImageIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{image.alt}</h3>
                    <div className="h-1 w-20 bg-red-600"></div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous image"
              >
                <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next image"
              >
                <svg className="h-6 w-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'w-8 bg-red-600'
                        : 'w-2 bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-6 grid grid-cols-6 gap-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`relative h-20 rounded-lg overflow-hidden transition-all ${
                    index === currentImageIndex
                      ? 'ring-4 ring-red-600 scale-105'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section with Icon */}
      <section 
        ref={heroRef.ref}
        className={`relative py-20 border-y border-gray-200 bg-gray-50 overflow-hidden transition-all duration-1000 ${
          heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Vertical Side Text - Far Left Side */}
        <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
          <div className="flex items-center gap-8">
            <span className="text-7xl font-bold text-gray-200 tracking-wider">Aerial Innovations</span>
            <span className="text-3xl text-gray-300 tracking-widest">listed</span>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Center Content */}
            <div className="space-y-6">
              {/* Icon and Tagline */}
              <div className="flex items-center gap-3 justify-center">
                <div className="h-12 w-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Unlocking the Skies, Transforming Industries
                </p>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Welcome to
                <br />
                <span className="text-red-600">KarVenSen</span> Aerial Innovations
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Established in 2023, KarVenSen is a distinguished AI-First IT Software Services Company, standing at the
                forefront of innovation in Artificial Intelligence, Drone Technology, Learning Management Systems (LMS),
                Enterprise Resource Planning (ERP), Cloud Services, and Information Technology. Our core team comprises
                seasoned professionals with expertise in cutting-edge technologies, including AI specialists, certified
                drone pilots, and enterprise software architects.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Founded by <strong>Karthika Venkatesan</strong>, we are driven by a passion for leveraging technology
                to solve real-world challenges. From precision agriculture using drones to enterprise-grade software
                solutions and technical awareness programs, we are committed to making advanced technology accessible
                and impactful across India and beyond.
              </p>
            </div>
          </div>

          {/* Right Stats - Absolute positioned */}
          <div className="hidden lg:block absolute right-8 top-8 space-y-12">
            <div className="text-right">
              <div className="text-7xl font-bold text-gray-200 mb-2">1500+</div>
              <div className="text-gray-500 text-sm">DGCA Pilots Trained</div>
            </div>
            <div className="text-right">
              <div className="text-7xl font-bold text-gray-200 mb-2">40+</div>
              <div className="text-gray-500 text-sm">UAV Surveys</div>
            </div>
            <div className="text-right">
              <div className="text-7xl font-bold text-gray-200 mb-2">9+</div>
              <div className="text-gray-500 text-sm">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats with Animated Counters */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {impactStats.map((stat) => (
              <AnimatedStat key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Shaping Future Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 animate-fade-in">
              Shaping a Smarter, Sustainable Future with Technology
            </h2>
          </div>
        </div>
      </section>

      {/* Purpose, Vision & Mission */}
      <section 
        ref={purposeRef.ref}
        className={`py-20 border-b border-gray-200 bg-white transition-all duration-1000 ${
          purposeRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Purpose */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-xl hover:border-gray-400 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">PURPOSE</h2>
              <p className="text-gray-600 leading-relaxed">
                Building an Efficient & Sustainable World With Drone Technology, AI-Powered Software Solutions, 
                and Cloud Services.
              </p>
            </div>
            
            {/* Vision */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-xl hover:border-gray-400 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-100">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Eye className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">VISION</h2>
              <p className="text-gray-600 leading-relaxed">
                We Aspire To Be The Most Trusted Global Technology & Services Company, delivering innovative 
                drone solutions, enterprise software, and AI-driven platforms.
              </p>
            </div>
            
            {/* Mission */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-xl hover:border-gray-400 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-200">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">MISSION</h2>
              <p className="text-gray-600 leading-relaxed">
                Continuously Thriving To Up-Skill And Empower The World Through Drones, AI Software, 
                LMS Platforms, ERP Systems, and Cloud Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section 
        ref={valuesRef.ref}
        className={`py-20 bg-gray-50 border-t border-gray-200 transition-all duration-1000 ${
          valuesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at KarVenSen
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="text-center bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-gray-400 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100 group-hover:bg-red-200 transition-colors">
                  <value.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section 
        ref={journeyRef.ref}
        className={`py-20 bg-white transition-all duration-1000 ${
          journeyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Key milestones in our growth story</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="bg-white border border-gray-200 rounded-lg py-4 px-6 hover:shadow-lg hover:border-red-400 transition-all duration-300">
                      <span className="text-red-600 font-bold text-lg">{milestone.year}</span>
                      <p className="text-gray-600 mt-1">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-red-600 rounded-full -translate-x-1/2 ring-4 ring-white animate-pulse-slow" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Cater To */}
      <section
        ref={industriesRef.ref}
        className={`py-20 bg-gray-900 text-white relative overflow-hidden transition-all duration-1000 ${
          industriesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Industries We Cater To</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Complete UAV Hardware, Software and Service Solution. Expert level Data Analysis, Training & Consultancy.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
            {/* Row 1 - 5 cards */}
            {/* Defence */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/dron in agri land.png"
                alt="Defence"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Defence</h3>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/infrastructure drone.png"
                alt="Infrastructure"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Infrastructure</h3>
              </div>
            </div>

            {/* Energy */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/erp drone.png"
                alt="Energy"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Energy</h3>
              </div>
            </div>

            {/* Utilities */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/erp drone.png"
                alt="Utilities"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Utilities</h3>
              </div>
            </div>

            {/* Agriculture */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/dron in agri land.png"
                alt="Agriculture"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Agriculture</h3>
              </div>
            </div>

            {/* Row 2 - 5 cards */}
            {/* Education */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/edu drone.png"
                alt="Education"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Education</h3>
              </div>
            </div>

            {/* Urban Planning */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/infrastructure drone.png"
                alt="Urban Planning"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Urban Planning</h3>
              </div>
            </div>

            {/* Mining */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/erp drone.png"
                alt="Mining"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Mining</h3>
              </div>
            </div>

            {/* Security */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/dron in agri land.png"
                alt="Security"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Security</h3>
              </div>
            </div>

            {/* Oil & Gas */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/erp drone.png"
                alt="Oil & Gas"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Oil & Gas</h3>
              </div>
            </div>

            {/* Row 3 - 5 cards */}
            {/* Water Bodies */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/infrastructure drone.png"
                alt="Water Bodies"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Water Bodies</h3>
              </div>
            </div>

            {/* Insurance */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/edu drone.png"
                alt="Insurance"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Insurance</h3>
              </div>
            </div>

            {/* Environment */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/dron in agri land.png"
                alt="Environment"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Environment</h3>
              </div>
            </div>

            {/* Forest */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/erp drone.png"
                alt="Forest"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Forest</h3>
              </div>
            </div>

            {/* Disaster Management */}
            <div className="group relative h-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <img
                src="/infrastructure drone.png"
                alt="Disaster Management"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold mb-2">Disaster Management</h3>
              </div>
            </div>
          </div>
        </div>
</section>

      {/* Large Text Banner Section - Aerial Innovations with Scrolling Animation */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
        <div className="animate-scroll-x-fast whitespace-nowrap">
          <div className="inline-flex items-center gap-8 px-8">
            {/* First set */}
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Aerial Innovations
            </h2>
            <div className="flex gap-4 inline-flex">
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight inline-block bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              A new Revolution
            </h2>
            
            {/* Second set for seamless loop */}
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Aerial Innovations
            </h2>
            <div className="flex gap-4 inline-flex">
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight inline-block bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
              A new Revolution
            </h2>
          </div>
        </div>
      </section>

      {/* Aerial Innovations Video Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Bringing AI Technology Closer to You!</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  We aspire to make the Indian skies more accessible and future generations more skillful.
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Driven by a mission to shape aerial excellence, we focus on providing comprehensive drone solutions and AI-powered software across diverse sectors. 
                  From industrial and enterprise applications to educational initiatives, KarVenSen aims to be a catalyst for positive change, 
                  fostering innovation and skill development in the evolving landscape of technology.
                </p>
              </div>

              {/* Right Video */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden group bg-gray-900">
                <Image
                  src="/indian-professional-man.png"
                  alt="KarVenSen Team"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handleVideoPlay}
                    className="h-20 w-20 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group"
                    aria-label="Play video"
                  >
                    <svg className="h-8 w-8 text-gray-900 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders - Client Logos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our growing clientele includes government agencies, defense forces, and leading enterprises that rely on our drone solutions for innovation, efficiency, and mission-critical success.
            </p>
          </div>

          {/* Client Logos Grid - 6 columns layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {/* Row 1 */}
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-600 font-bold text-xl">Capgemini</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-gray-800 font-bold text-xl">CYBAGE</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-700 font-semibold text-sm">TATA COMMUNICATIONS</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-600 font-bold text-lg">TATA STRIVE</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-purple-700 font-bold text-xl">Peregrine</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 font-bold text-2xl">EXIDE</span>
              </div>

              {/* Row 2 */}
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-700 font-bold text-2xl">adani</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-yellow-400 text-xs font-bold">INDIAN ARMY</span>
                </div>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-600 font-semibold text-sm">AIB TECH INDIA</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-700 font-bold text-lg">Mahindra DEFENCE</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-gray-800 font-bold text-xl">R FLY</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 font-bold text-lg">Shell ENERGY</span>
              </div>

              {/* Row 3 */}
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-600 font-bold text-sm">THE WORLD BANK</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-gray-900 font-bold text-xl">JGI JAIN</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-700 font-bold text-xl">JSW Steel</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-600 font-bold text-xl">seit</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-500 font-semibold text-sm">PrecisionAerial</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-900 font-bold text-lg">Reliance Industries</span>
              </div>

              {/* Row 4 */}
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-700 font-bold text-xl">HAL</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 font-bold text-lg">RAVIRAJ ENGINEERS</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-600 font-bold text-xl">ARAI</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-500 font-bold text-sm">BLUE OCEAN INFO TECHNOLOGIES</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 font-bold text-lg">DBA DRONE</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-blue-700 font-semibold text-sm">KALPA-TARU POWER</span>
              </div>

              {/* Row 5 - Last 4 logos centered */}
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 lg:col-start-2">
                <span className="text-blue-600 font-bold text-xl">ManoIT</span>
              </div>
              <div className="h-20 w-full flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 font-bold text-xl">schnell</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Awards and Recognitions Section - Scrolling Carousel */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 mb-12">
          {/* Header */}
          <div className="text-center">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold mb-6">
              Accolades
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Awards and Recognitions: A Testament to Excellence
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              KarVenSen proudly holds prestigious recognitions. Our accolades include:
            </p>
          </div>
        </div>

        {/* Scrolling Awards Carousel */}
        <div className="relative">
          <div className="animate-scroll-x-awards whitespace-nowrap py-8">
            <div className="inline-flex items-center gap-8">
              {/* First Set of Awards */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="inline-flex items-center gap-8">
                  {/* Award 1 - Asia Book of Records */}
                  <div className="inline-block w-[500px] h-[350px] relative group rounded-2xl overflow-hidden border-2 border-red-600 hover:border-yellow-500 transition-all duration-300 hover:scale-105 shadow-2xl">
                    <Image
                      src="/indian-professional-man.png"
                      alt="Asia Book of Records Recognition"
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-bold text-center leading-tight">ASIA<br/>RECORD</span>
                        </div>
                        <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs font-bold text-center leading-tight">INDIA<br/>RECORD</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        ASIA & INDIA BOOK OF RECORDS
                      </h3>
                    </div>
                  </div>

                  {/* Award 2 - PMA Excellence */}
                  <div className="inline-block w-[500px] h-[350px] relative group rounded-2xl overflow-hidden border-2 border-red-600 hover:border-yellow-500 transition-all duration-300 hover:scale-105 shadow-2xl">
                    <Image
                      src="/indian-woman-professional.png"
                      alt="PMA Excellence Award"
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-4">
                        <div className="inline-block bg-white px-4 py-2 rounded shadow-lg">
                          <span className="text-gray-900 text-xl font-bold">PMA</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        47th FOUNDATION DAY AWARD
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Pune Management Association
                      </p>
                    </div>
                  </div>

                  {/* Award 3 - Innovation Excellence */}
                  <div className="inline-block w-[500px] h-[350px] relative group rounded-2xl overflow-hidden border-2 border-red-600 hover:border-yellow-500 transition-all duration-300 hover:scale-105 shadow-2xl">
                    <Image
                      src="/indian-professor-man.jpg"
                      alt="Innovation Excellence Award"
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-4">
                        <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded shadow-lg">
                          <span className="text-white text-xl font-bold">★</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        INNOVATION EXCELLENCE AWARD
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Technology Leadership Recognition
                      </p>
                    </div>
                  </div>

                  {/* Award 4 - Drone Technology Pioneer */}
                  <div className="inline-block w-[500px] h-[350px] relative group rounded-2xl overflow-hidden border-2 border-red-600 hover:border-yellow-500 transition-all duration-300 hover:scale-105 shadow-2xl">
                    <Image
                      src="/drone-flying-over-farm-field-at-sunset.jpg"
                      alt="Drone Technology Pioneer Award"
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-4">
                        <div className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded shadow-lg">
                          <span className="text-white text-xl font-bold">🚁</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        DRONE TECHNOLOGY PIONEER
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Make in India Excellence
                      </p>
                    </div>
                  </div>

                  {/* Award 5 - AI Innovation */}
                  <div className="inline-block w-[500px] h-[350px] relative group rounded-2xl overflow-hidden border-2 border-red-600 hover:border-yellow-500 transition-all duration-300 hover:scale-105 shadow-2xl">
                    <Image
                      src="/students-using-ai-learning-platform.jpg"
                      alt="AI Innovation Award"
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-4">
                        <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded shadow-lg">
                          <span className="text-white text-xl font-bold">AI</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        AI INNOVATION AWARD
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Educational Technology Excellence
                      </p>
                    </div>
                  </div>

                  {/* Award 6 - Enterprise Solutions */}
                  <div className="inline-block w-[500px] h-[350px] relative group rounded-2xl overflow-hidden border-2 border-red-600 hover:border-yellow-500 transition-all duration-300 hover:scale-105 shadow-2xl">
                    <Image
                      src="/precision-agriculture-drone-mapping.jpg"
                      alt="Enterprise Solutions Award"
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-4">
                        <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded shadow-lg">
                          <span className="text-white text-xl font-bold">⚡</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        ENTERPRISE SOLUTIONS AWARD
                      </h3>
                      <p className="text-gray-300 text-sm mt-1">
                        Digital Transformation Leader
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Recognition Text */}
        <div className="container mx-auto px-4 mt-12">
          <div className="text-center">
            <p className="text-gray-400 text-lg">
              These prestigious recognitions validate our commitment to innovation, excellence, and leadership in the drone technology sector.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold mb-6">
              Pioneers & Innovators
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the innovators & leaders shaping and driving growth for the fastest growing industrial drone company.
            </p>
          </div>

          {/* Team Grid */}
          <div className="max-w-7xl mx-auto">
            {/* Row 1 - Top 3 Leaders */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {/* Leader 1 - Prateek Srivastava */}
              <div className="group text-center">
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Image
                    src="/indian-professional-man.png"
                    alt="Prateek Srivastava"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Prateek Srivastava</h3>
                <p className="text-gray-600 mb-4">Founder & Managing Director</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Leader 2 - Amit Takte */}
              <div className="group text-center">
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Image
                    src="/indian-professor-man.jpg"
                    alt="Amit Takte"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Amit Takte</h3>
                <p className="text-gray-600 mb-4">CTO</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Leader 3 - Major General */}
              <div className="group text-center">
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Image
                    src="/indian-professional-man.png"
                    alt="Major General (Dr) Mandip Singh"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Major General (Dr) Mandip Singh, SM, VSM (Retd)</h3>
                <p className="text-gray-600 mb-4">President – Strategic Alliances</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Row 2 - Bottom 4 Team Members */}
            <div className="grid md:grid-cols-4 gap-8">
              {/* Team Member 4 */}
              <div className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Image
                    src="/indian-woman-professional.png"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Karthika Venkatesan</h3>
                <p className="text-gray-600 text-sm mb-3">Chief Innovation Officer</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-9 h-9 bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Team Member 5 */}
              <div className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Image
                    src="/indian-professional-man.png"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rajesh Kumar</h3>
                <p className="text-gray-600 text-sm mb-3">VP Engineering</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-9 h-9 bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Team Member 6 */}
              <div className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Image
                    src="/indian-professor-man.jpg"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Suresh Patel</h3>
                <p className="text-gray-600 text-sm mb-3">Head of Research</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-9 h-9 bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              {/* Team Member 7 */}
              <div className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Image
                    src="/indian-woman-professional.png"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Sharma</h3>
                <p className="text-gray-600 text-sm mb-3">Director of Operations</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-9 h-9 bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Board of Directors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold mb-6">
              Catalysts of Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Board of Directors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our Board of Directors, the guiding force behind our trajectory, shaping the future of industrial drone innovation and driving unparalleled growth.
            </p>
          </div>

          {/* Directors Grid - 3 Members */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Director 1 - Prateek Srivastava */}
              <div className="group text-center">
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Image
                    src="/indian-professional-man.png"
                    alt="Prateek Srivastava"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Prateek Srivastava</h3>
                <p className="text-gray-600 mb-4">Founder & Managing Director</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Director 2 - Nikita Srivastava */}
              <div className="group text-center">
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Image
                    src="/indian-woman-professional.png"
                    alt="Nikita Srivastava"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nikita Srivastava</h3>
                <p className="text-gray-600 mb-4">Director & CFO</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Director 3 - Mangina Srinivas Rao */}
              <div className="group text-center">
                <div className="relative w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Image
                    src="/indian-professor-man.jpg"
                    alt="Mangina Srinivas Rao"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mangina Srinivas Rao</h3>
                <p className="text-gray-600 mb-4">Independent Director</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Join Us on the Journey: Explore, Learn, Soar
                </h2>
                <p className="text-gray-600 text-lg">
                  Explore the endless potential of drone technology, learn from the best in the field, and together, let's soar to new heights.
                </p>
              </div>

              {/* Right Button */}
              <div className="flex-shrink-0">
                <a
                  href="/careers"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Join our team</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Companies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              KarVenSen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Group Companies
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Collaborations & integrations to make our skies more accessible and the future generations more skillful.
            </p>
          </div>

          {/* Companies Grid */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Company 1 - KarVenSen Aerospace */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-10 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    KarVenSen Aerospace Private Limited
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Powering aerial intelligence worldwide
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold group/link"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Right Image */}
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/gov karvensen.png"
                    alt="KarVenSen Aerospace Team"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Company 2 - KarVenSen Technologies */}
            <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-10 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    KarVenSen Technologies
                  </h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Drone training, manufacturing & analytics
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 hover:bg-red-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-fit"
                  >
                    <span>Visit Website</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Right Image */}
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/indian-woman-professional.png"
                    alt="KarVenSen Technologies"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-red-600 rounded-2xl shadow-2xl animate-scale-in overflow-hidden">
            {/* Red Header */}
            <div className="bg-red-600 text-white p-6 relative">
              <button
                onClick={() => setIsContactFormOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>
              <p className="text-lg font-normal text-center pr-8">
                Please fill out the form below and we will get back to you as soon as possible.
              </p>
            </div>

            {/* Form Content - White Background */}
            <div className="bg-white rounded-t-3xl p-8">
              <form onSubmit={(e) => {
                e.preventDefault()
                // Handle form submission here
                alert('Form submitted! We will get back to you soon.')
                setIsContactFormOpen(false)
              }}>
                {/* Name Field */}
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="* Name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="* Email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent bg-gray-50"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-6">
                  <textarea
                    placeholder="* Message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none bg-gray-50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mb-6"
                >
                  <Send className="h-5 w-5" />
                  Submit
                </button>

                {/* Footer Icons */}
                <div className="flex items-center justify-center gap-8 mb-4">
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-700 transition-colors"
                    aria-label="Home"
                  >
                    <Home className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Messages"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </button>
                </div>

                {/* Powered by tawk.to */}
                <div className="text-center">
                  <a
                    href="https://www.tawk.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <span className="text-green-600">🔒</span>
                    <span>Powered by tawk.to</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scrollX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }

        .animate-slide-down {
          animation: slideDown 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-scroll-x {
          animation: scrollX 30s linear infinite;
        }

        .animate-scroll-x-fast {
          animation: scrollX 15s linear infinite;
        }

        .animate-scroll-x-awards {
          animation: scrollX 40s linear infinite;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
