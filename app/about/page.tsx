"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, Plane, Lightbulb, Shield, TrendingUp, Building2, GraduationCap, Cloud, Cpu, ChevronDown } from "lucide-react"
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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const heroRef = useInView()
  const purposeRef = useInView()
  const valuesRef = useInView()
  const journeyRef = useInView()
  const industriesRef = useInView()
  const galleryRef = useInView()
  const awardsRef = useInView()
  const leadershipRef = useInView()
  const boardRef = useInView()
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here (e.g., send to API)
    console.log('Form submitted:', formData)
    alert('Thank you! We will get back to you soon.')
    setIsContactFormOpen(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen relative">
      {/* Floating Send Message Button */}
      <button
        onClick={() => setIsContactFormOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <span>Send message</span>
      </button>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsContactFormOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-red-600 text-white w-full max-w-md h-full shadow-2xl animate-slide-in-right flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setIsContactFormOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="p-8 pb-6">
              <h2 className="text-2xl font-bold mb-4">
                Please fill out the form below and we will get back to you as soon as possible.
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="flex-1 px-8 pb-8 flex flex-col">
              <div className="flex-1 space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="* Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="* Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="* Message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mt-6"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                Submit
              </button>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-white/80">
                <button type="button" className="hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </button>
                <button type="button" className="hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
      {/* Awards and Recognitions Section */}
      <section
        ref={awardsRef.ref}
        className={`py-20 bg-gray-900 text-white transition-all duration-1000 ${
          awardsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ${
            awardsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-md text-sm font-semibold mb-6">
              Accolades
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Awards and Recognitions: A Testament to Excellence
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl">
              KarVenSen proudly holds the title of a leading AI and Drone Technology Company. Our accolades include:
            </p>
          </div>

          {/* Awards Carousel */}
          <div className="relative overflow-hidden max-w-6xl mx-auto">
            <div className="animate-slide-awards flex gap-8">
              {/* Award 1 - Asia Book of Records */}
              <div className="relative group flex-shrink-0 w-full md:w-[calc(50%-1rem)] overflow-hidden rounded-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <Image
                    src="/indian-professional-man.png"
                    alt="Asia Book of Records Recognition"
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Award Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold text-center">ASIA<br/>RECORD</span>
                      </div>
                      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold text-center">INDIA<br/>RECORD</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      RECOGNITION BY THE ASIA BOOK OF RECORDS AND INDIA BOOK OF RECORDS
                    </h3>
                  </div>
                </div>
              </div>

              {/* Award 2 - PMA Excellence Award */}
              <div className="relative group flex-shrink-0 w-full md:w-[calc(50%-1rem)] overflow-hidden rounded-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <Image
                    src="/indian-woman-professional.png"
                    alt="PMA Excellence Award"
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Award Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-4">
                      <div className="inline-block bg-white px-4 py-2 rounded">
                        <span className="text-gray-900 text-xl font-bold">PMA</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      47th FOUNDATION DAY MANAGEMENT AWARD
                    </h3>
                    <p className="text-gray-300 mt-2">
                      Pune Management Association Excellence Recognition
                    </p>
                  </div>
                </div>
              </div>

              {/* Duplicate cards for seamless loop */}
              {/* Award 1 - Duplicate */}
              <div className="relative group flex-shrink-0 w-full md:w-[calc(50%-1rem)] overflow-hidden rounded-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <Image
                    src="/indian-professional-man.png"
                    alt="Asia Book of Records Recognition"
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Award Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold text-center">ASIA<br/>RECORD</span>
                      </div>
                      <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold text-center">INDIA<br/>RECORD</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      RECOGNITION BY THE ASIA BOOK OF RECORDS AND INDIA BOOK OF RECORDS
                    </h3>
                  </div>
                </div>
              </div>

              {/* Award 2 - Duplicate */}
              <div className="relative group flex-shrink-0 w-full md:w-[calc(50%-1rem)] overflow-hidden rounded-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
                <div className="aspect-video bg-gray-800 relative overflow-hidden">
                  <Image
                    src="/indian-woman-professional.png"
                    alt="PMA Excellence Award"
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                  
                  {/* Award Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="mb-4">
                      <div className="inline-block bg-white px-4 py-2 rounded">
                        <span className="text-gray-900 text-xl font-bold">PMA</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      47th FOUNDATION DAY MANAGEMENT AWARD
                    </h3>
                    <p className="text-gray-300 mt-2">
                      Pune Management Association Excellence Recognition
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Recognition Text */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg">
              These prestigious recognitions validate our commitment to innovation, excellence, and leadership in the drone technology sector.
            </p>
          </div>
        </div>
      </section>
      {/* Leadership Team Section */}
      <section
        ref={leadershipRef.ref}
        className={`py-20 bg-white transition-all duration-1000 ${
          leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and excellence at KarVenSen
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Leader 1 - Founder & CEO */}
            <div className={`group text-center transition-all duration-1000 delay-300 ${
              leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/indian-professional-man.png"
                        alt="Karthika Venkatesan - Founder & CEO"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Karthika Venkatesan</h3>
              <p className="text-red-600 font-semibold mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Visionary leader with expertise in AI, drone technology, and enterprise solutions. Driving KarVenSen's mission to revolutionize industries through innovation.
              </p>
            </div>

            {/* Leader 2 - CTO */}
            <div className={`group text-center transition-all duration-1000 delay-400 ${
              leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/indian-professor-man.jpg"
                        alt="Chief Technology Officer"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Technology Head</h3>
              <p className="text-red-600 font-semibold mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Leading our technical innovation with deep expertise in AI, cloud computing, and drone systems integration.
              </p>
            </div>

            {/* Leader 3 - Head of Operations */}
            <div className={`group text-center transition-all duration-1000 delay-500 ${
              leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/indian-woman-professional.png"
                        alt="Head of Operations"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Operations Lead</h3>
              <p className="text-red-600 font-semibold mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Ensuring operational excellence and seamless delivery of our AI-powered solutions and drone services across all sectors.
              </p>
            </div>

            {/* Leader 4 - Head of Product */}
            <div className={`group text-center transition-all duration-1000 delay-600 ${
              leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/indian-professional-man.png"
                        alt="Head of Product"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Product Director</h3>
              <p className="text-red-600 font-semibold mb-3">Head of Product</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Driving product strategy and innovation, ensuring our solutions meet market needs and exceed customer expectations.
              </p>
            </div>

            {/* Leader 5 - Head of Marketing */}
            <div className={`group text-center transition-all duration-1000 delay-700 ${
              leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/indian-woman-professional.png"
                        alt="Head of Marketing"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Marketing Director</h3>
              <p className="text-red-600 font-semibold mb-3">Head of Marketing</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Leading brand strategy and market expansion, connecting our innovative solutions with businesses worldwide.
              </p>
            </div>

            {/* Leader 6 - Head of Engineering */}
            <div className={`group text-center transition-all duration-1000 delay-800 ${
              leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/indian-professor-man.jpg"
                        alt="Head of Engineering"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Engineering Lead</h3>
              <p className="text-red-600 font-semibold mb-3">Head of Engineering</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Overseeing software development and system architecture, building scalable and robust technology solutions.
              </p>
            </div>

            {/* Leader 7 - Head of Customer Success */}
            <div className={`group text-center transition-all duration-1000 delay-900 ${
              leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/indian-woman-professional.png"
                        alt="Head of Customer Success"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Customer Success Lead</h3>
              <p className="text-red-600 font-semibold mb-3">Head of Customer Success</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Ensuring client satisfaction and success through dedicated support and strategic partnership management.
              </p>
            </div>

            {/* Leader 8 - Head of Sales */}
            <div className={`group text-center transition-all duration-1000 delay-1000 ${
              leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/indian-professional-man.png"
                        alt="Head of Sales"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sales Director</h3>
              <p className="text-red-600 font-semibold mb-3">Head of Sales</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Driving revenue growth and building strategic partnerships across enterprise, government, and commercial sectors.
              </p>
            </div>

            {/* Leader 9 - Head of Research & Development */}
            <div className={`group text-center transition-all duration-1000 delay-1000 ${
              leadershipRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/indian-professor-man.jpg"
                        alt="Head of Research & Development"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">R&D Director</h3>
              <p className="text-red-600 font-semibold mb-3">Head of Research & Development</p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                Leading cutting-edge research in AI, machine learning, and drone technology to drive next-generation innovations.
              </p>
            </div>
          </div>

          {/* Join Our Team CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Want to be part of our innovative team?
            </p>
            <a
              href="/careers"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
{/* Board of Directors Section */}
<section
  ref={boardRef.ref}
  className={`py-20 bg-gray-50 transition-all duration-1000 ${
    boardRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
      boardRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Catalysts of Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Board of Directors
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our Board of Directors, the guiding force behind our trajectory, shaping the future of industrial drone innovation and driving unparalleled growth.
            </p>
          </div>

          {/* Directors Grid */}
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
            {/* Director 1 */}
            <div className={`group text-center transition-all duration-1000 delay-400 ${
              boardRef.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/indian-professional-man.png"
                    alt="Prateek Srivastava"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Prateek Srivastava</h3>
              <p className="text-gray-600 mb-4">Founder & Managing Director</p>
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-red-600 text-white rounded transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Director 2 */}
            <div className={`group text-center transition-all duration-1000 delay-600 ${
              boardRef.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/indian-woman-professional.png"
                    alt="Nikita Srivastava"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Nikita Srivastava</h3>
              <p className="text-gray-600 mb-4">Director & CFO</p>
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-red-600 text-white rounded transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            {/* Director 3 */}
            <div className={`group text-center transition-all duration-1000 delay-800 ${
              boardRef.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/indian-professor-man.jpg"
                    alt="Mangina Srinivas Rao"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Mangina Srinivas Rao</h3>
              <p className="text-gray-600 mb-4">Independent Director</p>
              <a 
                href="#" 
                className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-red-600 text-white rounded transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Join Us CTA */}
          <div className={`bg-white rounded-2xl p-12 max-w-4xl mx-auto text-center shadow-lg transition-all duration-1000 delay-1000 ${
            boardRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join Us on the Journey: Explore, Learn, Soar
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Explore the endless potential of drone technology, learn from the best in the field, and together, let's soar to new heights.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Join our team
            </a>
          </div>
        </div>
      </section>
{/* Group Companies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-200 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
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
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Company 1 - KarVenSen AI Solutions */}
            <div className="group relative bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    KarVenSen AI Solutions
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Powering intelligent automation worldwide with cutting-edge AI and machine learning solutions.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-64 h-48 relative rounded-2xl overflow-hidden">
                  <Image
                    src="/enterprise-ai-dashboard.png"
                    alt="KarVenSen AI Solutions"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Company 2 - KarVenSen Cloud Services */}
            <div className="group relative bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    KarVenSen Cloud Services
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Enterprise cloud infrastructure, data analytics, and scalable solutions for modern businesses.
                  </p>
                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300"
                  >
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="flex-shrink-0 w-full md:w-64 h-48 relative rounded-2xl overflow-hidden">
                  <Image
                    src="/cloud-computing-infrastructure.png"
                    alt="KarVenSen Cloud Services"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Service 1 */}
            <a
              href="/services"
              className="group bg-gradient-to-br from-red-50 to-white border-2 border-red-100 rounded-2xl p-6 hover:shadow-xl hover:border-red-300 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-bold text-gray-900">
                  Enterprise LMS Platform
                </h4>
                <svg className="w-6 h-6 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Service 2 */}
            <a
              href="/services"
              className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-gray-400 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-bold text-gray-900">
                  Custom Cloud Solutions
                </h4>
                <svg className="w-6 h-6 text-gray-900 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Service 3 */}
            <a
              href="/training"
              className="group bg-gradient-to-br from-red-50 to-white border-2 border-red-100 rounded-2xl p-6 hover:shadow-xl hover:border-red-300 transition-all duration-300 cursor-pointer block"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-bold text-gray-900">
                  Drone Technology Training
                </h4>
                <svg className="w-6 h-6 text-red-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

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

        .animate-slide-awards {
          animation: slideAwards 20s linear infinite;
        }

        @keyframes slideAwards {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  )
}
