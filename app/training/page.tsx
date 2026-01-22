"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tractor, GraduationCap, Award, Users, CheckCircle, ArrowRight, Clock, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"

const programs = [
  {
    id: "farmers",
    icon: Tractor,
    title: "Farmer Drone Awareness Programs",
    description:
      "Empowering farmers with knowledge of drone technology for precision agriculture, crop monitoring, and sustainable farming practices.",
    features: [
      "Introduction to agricultural drones",
      "Crop health monitoring basics",
      "Precision spraying techniques",
      "Data interpretation for farming decisions",
      "Government schemes and subsidies",
      "Hands-on drone operation experience",
    ],
    duration: "2-3 Days",
    format: "On-site / Field Training",
    certification: "Certificate of Completion",
    audience: "Farmers, Agricultural Officers, Farm Managers",
  },
  {
    id: "schools",
    icon: GraduationCap,
    title: "School & College Technical Workshops",
    description:
      "Inspiring the next generation with practical exposure to AI, drones, and emerging technologies through interactive workshops.",
    features: [
      "Introduction to AI and Machine Learning",
      "Drone basics and flight principles",
      "Hands-on coding exercises",
      "Project-based learning activities",
      "Career guidance in technology",
      "Interactive demonstrations",
    ],
    duration: "1-5 Days",
    format: "On-campus Workshops",
    certification: "Participation Certificate",
    audience: "Students (Class 8-12), College Students, Teachers",
  },
  {
    id: "skills",
    icon: Award,
    title: "Skill Development & Certification",
    description:
      "Professional certification programs to build expertise in drone piloting, AI development, and enterprise software systems.",
    features: [
      "DGCA drone pilot certification prep",
      "AI/ML fundamentals and applications",
      "Cloud computing and DevOps",
      "Enterprise software development",
      "Project management methodologies",
      "Industry placement assistance",
    ],
    duration: "4-12 Weeks",
    format: "Hybrid (Online + Practical)",
    certification: "Professional Certification",
    audience: "Working Professionals, Graduates, Career Changers",
  },
]

const stats = [
  { value: "500+", label: "Farmers Trained" },
  { value: "50+", label: "Schools Reached" },
  { value: "200+", label: "Certified Professionals" },
  { value: "30+", label: "Districts Covered" },
]

const faqs = [
  {
    question: "Who can enroll in the training programs?",
    answer:
      "Our programs are designed for various audiences - farmers for agriculture programs, students from class 8 onwards for school workshops, and graduates or working professionals for skill development courses. Each program has specific eligibility criteria mentioned in the details.",
  },
  {
    question: "Are the certifications recognized?",
    answer:
      "Yes, our certifications are industry-recognized. For drone pilot certification, we prepare candidates for DGCA (Directorate General of Civil Aviation) examinations. Our technical certifications are valued by employers in the IT industry.",
  },
  {
    question: "Do you conduct programs at our location?",
    answer:
      "We offer on-site training for farmer awareness programs and school workshops. For larger groups or organizations, we can customize programs and conduct them at your preferred location.",
  },
  {
    question: "What is the cost of the programs?",
    answer:
      "Program costs vary based on duration, content, and format. We also partner with government bodies and CSR initiatives to offer subsidized or free programs for certain communities. Contact us for detailed pricing.",
  },
  {
    question: "Is financial assistance available?",
    answer:
      "We work with various government schemes and NGOs to provide subsidized training for eligible participants. We also offer flexible payment options for our professional certification programs.",
  },
]

export default function TrainingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const mediaItems = [
    {
      type: 'image',
      src: '/edu drone.png',
      caption: 'Educational Workshops for Students'
    },
    {
      type: 'video',
      src: '/drone video 2.mp4',
      caption: 'Live Drone Demonstration'
    },
  ]

  // Ensure currentSlide is within bounds
  useEffect(() => {
    if (currentSlide >= mediaItems.length) {
      setCurrentSlide(0)
    }
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }
// Auto-scroll animation for partners
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition
        
        // Reset to start when reaching halfway (because we duplicated the logos)
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center border-b border-gray-200">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/training-drone.png')" }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-4 inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
              Training Programs
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Drone Awareness & <span className="text-white">Technical Training</span>
            </h1>
            <p className="text-lg text-white/90">
              Empowering communities with knowledge and skills in AI and drone technology. From farmers to students to
              professionals, we have programs designed for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* On-Field Action Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">On-Field Action</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
              {/* Media Container */}
              <div className="relative aspect-video bg-gray-900">
                {mediaItems[currentSlide].type === 'image' ? (
                  <img
                    src={mediaItems[currentSlide].src}
                    alt={mediaItems[currentSlide].caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video
                    src={mediaItems[currentSlide].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 text-white p-3 rounded-lg transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-800 text-white p-3 rounded-lg transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 py-4 bg-white">
                {mediaItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Training Courses</h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Course A */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/train-1.jpeg"
                  alt="Small Class Drone Pilot Training"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Course A | Small Class Drone Pilot Training
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-3">Introduction to Drone Flying</p>
                <p className="text-gray-600 mb-4">
                  A comprehensive program designed to offer a blend of theoretical education and hands-on practical experience.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-700">
                    <span className="font-semibold">Duration:</span> 8 Days
                  </p>
                  <Link 
                    href="/training/courses/course-a"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Course B */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/train-2.jpeg"
                  alt="Small and Medium Class Drone Training"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Course B | Small and Medium Class Drone Training
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-3">Mastery in Drone Flying</p>
                <p className="text-gray-600 mb-4">
                  For those looking to master both small and medium drones, this course offers in-depth training in both theory and practice.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-700">
                    <span className="font-semibold">Duration:</span> 13 days
                  </p>
                  <Link 
                    href="/training/courses/course-b"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Course C */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/edu drone.png"
                  alt="Educational Drone Workshop"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Course C | Educational Drone Workshop
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-3">STEM & Robotics for Students</p>
                <p className="text-gray-600 mb-4">
                  Designed for schools and colleges, this workshop introduces students to drone technology, coding, and practical applications.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-700">
                    <span className="font-semibold">Duration:</span> 3-5 Days
                  </p>
                  <Link 
                    href="/training/courses/course-c"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Course D */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/dron in agri land.png"
                  alt="Agricultural Drone Training"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Course D | Agricultural Drone Operations
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-3">Precision Agriculture Training</p>
                <p className="text-gray-600 mb-4">
                  Specialized training for farmers and agriculture professionals on using drones for crop monitoring, spraying, and field analysis.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-700">
                    <span className="font-semibold">Duration:</span> 6 Days
                  </p>
                  <Link 
                    href="/training/courses/course-d"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-20 bg-white border-t border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our training programs are recognized and trusted by top companies and institutions across India</p>
          </div>
        </div>
        
        {/* Full-width dark background container for logos */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-12 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-16 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* First set of logos */}
            {[
              { name: 'TCS' },
              { name: 'Infosys' },
              { name: 'Wipro' },
              { name: 'Cognizant' },
              { name: 'Tech Mahindra' },
              { name: 'HCL Technologies' },
              { name: 'Microsoft' },
              { name: 'Google' },
              { name: 'Amazon' },
              { name: 'IBM' },
            ].map((partner, index) => (
              <div
                key={`partner-1-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border-2 border-gray-200 p-6 flex items-center justify-center hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-gray-800 font-bold text-lg">{partner.name}</span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[
              { name: 'TCS' },
              { name: 'Infosys' },
              { name: 'Wipro' },
              { name: 'Cognizant' },
              { name: 'Tech Mahindra' },
              { name: 'HCL Technologies' },
              { name: 'Microsoft' },
              { name: 'Google' },
              { name: 'Amazon' },
              { name: 'IBM' },
            ].map((partner, index) => (
              <div
                key={`partner-2-${index}`}
                className="flex-shrink-0 w-48 h-24 bg-white rounded-xl border-2 border-gray-200 p-6 flex items-center justify-center hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-gray-800 font-bold text-lg">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn with KarVenSen Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Learn with KarVenSen
            </h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* First Row - Text Left, Image Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 pr-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Train With Us?</h3>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">DGCA Certification</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Industry-Leading Instructors</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Comprehensive Support System</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Tractor className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Focus on Entrepreneurship</h4>
                  </div>
                </div>
              
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  Join Today
                </Link>
              </div>
              
              <div className="relative pl-6">
                <img
                  src="/train-2.jpeg"
                  alt="Training with KarVenSen"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Second Row - Image Left, Text Right */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative pr-6">
                <img
                  src="/train-1.jpeg"
                  alt="What sets us apart"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              
              <div className="space-y-4 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Sets Us Apart?</h3>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Expert Guidance</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Real-World Experience</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Industry Recognition</h4>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Career Support</h4>
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities After Training */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Career Opportunities After Training
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Career Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tailored Job Placement Support</h3>
                  <p className="text-gray-600 text-sm">
                    Connect with top agricultural and tech companies actively hiring certified drone pilots and AI specialists.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Exclusive Drone Pilot Opportunities</h3>
                  <p className="text-gray-600 text-sm">
                    Access to exclusive job openings in precision agriculture, infrastructure inspection, and aerial surveying.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Mentorship Programs</h3>
                  <p className="text-gray-600 text-sm">
                    Ongoing guidance from industry experts to help you launch your career or start your own drone business.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-base font-medium transition-colors shadow-lg"
                >
                  Join Today
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <img
                src="/train-3.jpeg"
                alt="Career opportunities in drone technology"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Upcoming Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Register for our upcoming training sessions and workshops
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Farmer Drone Workshop",
                location: "Warangal, Telangana",
                date: "Feb 15-17, 2026",
                spots: "30 spots available",
              },
              {
                title: "AI/ML Bootcamp",
                location: "Online + Hyderabad",
                date: "Mar 1 - Apr 30, 2026",
                spots: "50 spots available",
              },
              {
                title: "School Tech Festival",
                location: "Multiple Schools, AP",
                date: "Feb 20-28, 2026",
                spots: "Open registration",
              },
            ].map((event) => (
              <div key={event.title} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-700">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{event.location}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 text-gray-900 text-xs rounded">
                        {event.date}
                      </span>
                      <span className="px-2 py-1 bg-white border border-gray-300 text-gray-700 text-xs rounded">
                        {event.spots}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded hover:bg-gray-100 transition-colors font-medium">
              Request Custom Training
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Common questions about our training programs</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-gray-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
