'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Video,
  Camera,
  Film,
  Eye,
  Shield,
  Zap,
  Play,
  Pause
} from "lucide-react"

const solutions = [
  {
    id: "aerial-videography",
    icon: Video,
    title: "Aerial Videography",
    description: "Professional cinematic drone videography for films, commercials, documentaries, and promotional content. Capture stunning aerial perspectives that elevate your storytelling.",
    features: [
      "4K/8K ultra-high definition video",
      "Smooth cinematic movements",
      "Professional color grading",
      "Multi-angle coverage",
      "Real-time monitoring"
    ]
  },
  {
    id: "aerial-photography",
    icon: Camera,
    title: "Aerial Photography",
    description: "High-resolution aerial photography for real estate, events, construction progress, and marketing materials. Showcase your projects from breathtaking perspectives.",
    features: [
      "High-resolution RAW images",
      "HDR photography",
      "Panoramic shots",
      "Professional editing",
      "Fast turnaround"
    ]
  },
  {
    id: "surveillance",
    icon: Eye,
    title: "Security Surveillance",
    description: "Advanced aerial surveillance solutions for security monitoring, perimeter inspection, and threat detection. Enhance your security infrastructure with drone technology.",
    features: [
      "Real-time video streaming",
      "Thermal imaging capability",
      "Night vision operations",
      "Automated patrol routes",
      "Incident documentation"
    ]
  },
  {
    id: "event-coverage",
    icon: Film,
    title: "Event Coverage",
    description: "Comprehensive aerial coverage for weddings, corporate events, sports, and festivals. Create memorable content that captures the scale and energy of your events.",
    features: [
      "Multi-drone coordination",
      "Live streaming capability",
      "Highlight reel production",
      "Same-day delivery options",
      "Experienced pilots"
    ]
  },
  {
    id: "inspection",
    icon: Shield,
    title: "Infrastructure Inspection",
    description: "Safe and efficient visual inspection of buildings, bridges, towers, and industrial facilities. Identify issues without putting personnel at risk.",
    features: [
      "Detailed visual documentation",
      "Zoom and close-up capabilities",
      "Defect identification",
      "Comparison reports",
      "Regulatory compliance"
    ]
  },
  {
    id: "live-streaming",
    icon: Zap,
    title: "Live Streaming",
    description: "Real-time aerial video streaming for broadcasts, events, and emergency response. Deliver live aerial perspectives to your audience instantly.",
    features: [
      "HD live video transmission",
      "Multi-platform streaming",
      "Low latency",
      "Backup recording",
      "Professional commentary integration"
    ]
  }
]

const industries = [
  { name: "Real Estate", icon: "🏢" },
  { name: "Media & Entertainment", icon: "🎬" },
  { name: "Security", icon: "🛡️" },
  { name: "Events", icon: "🎉" },
  { name: "Construction", icon: "🏗️" },
  { name: "Tourism", icon: "✈️" },
  { name: "Sports", icon: "⚽" },
  { name: "News & Broadcasting", icon: "📺" },
  { name: "Infrastructure", icon: "🌉" },
  { name: "Agriculture", icon: "🌾" },
  { name: "Energy", icon: "💡" },
  { name: "Insurance", icon: "📋" }
]

export default function DroneSurveillanceVideographyPage() {
  const [selectedSolution, setSelectedSolution] = useState(solutions[0])
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video autoplay prevented:", err))
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen min-h-[600px] bg-black text-white overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/Drone_Cinematic_Video.mp4" type="video/mp4" />
        </video>
        
        {/* Futuristic Overlay Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }} />
        </div>

        {/* Glowing Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                opacity: 0.6
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-purple-200 hover:text-white mb-8 transition-colors group absolute top-8 left-4">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            {/* Futuristic Badge */}
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-md rounded-full text-sm font-semibold mb-6 border border-purple-400/30 shadow-lg shadow-purple-500/20 animate-pulse-slow">
              <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                ✨ Next-Gen Aerial Excellence
              </span>
            </div>
            
            {/* Main Title with Glow Effect */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                Drone Surveillance
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                & Videography
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up">
              Experience the future of aerial cinematography with cutting-edge drone technology.
              From cinematic masterpieces to advanced surveillance systems, we deliver stunning
              results that push the boundaries of what's possible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 border-0"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <button
                onClick={toggleVideo}
                className="px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-lg transition-all duration-300 border border-white/20 flex items-center gap-2"
              >
                {isVideoPlaying ? (
                  <>
                    <Pause className="w-5 h-5" />
                    Pause Video
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Play Video
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll" />
          </div>
        </div>

        <style jsx>{`
          @keyframes grid-move {
            0% { transform: translateY(0); }
            100% { transform: translateY(50px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
          }
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes scroll {
            0% { transform: translateY(0); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(12px); opacity: 0; }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          .animate-float {
            animation: float linear infinite;
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          .animate-scroll {
            animation: scroll 2s ease-in-out infinite;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out 0.3s both;
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Key Benefits Section with Futuristic Design */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse shadow-lg shadow-purple-500/50">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Professional Quality</h3>
              <p className="text-gray-300">
                Cinema-grade equipment and experienced pilots ensure broadcast-quality results every time.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse shadow-lg shadow-blue-500/50">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Safety First</h3>
              <p className="text-gray-300">
                Fully licensed pilots with comprehensive insurance coverage for complete peace of mind.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse shadow-lg shadow-purple-500/50">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Fast Delivery</h3>
              <p className="text-gray-300">
                Quick turnaround times with same-day delivery options available for urgent projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cinematic Excellence in Action
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Watch our stunning aerial footage that showcases the power of professional drone videography
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border border-purple-500/20">
              <video
                controls
                className="w-full h-auto"
                poster="/drone-flying-over-farm-field-at-sunset.jpg"
              >
                <source src="/drone video 2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-purple-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

{/* Tech Stack Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powered by cutting-edge equipment and software for superior aerial solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Drone Hardware */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  DJI Enterprise
                </h3>
                <p className="text-gray-600 text-sm">
                  Professional-grade drones with 4K/8K cameras, thermal imaging, and advanced stabilization
                </p>
              </div>
            </div>

            {/* Camera Systems */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Cinema Cameras
                </h3>
                <p className="text-gray-600 text-sm">
                  High-resolution sensors with RAW capture, HDR, and professional color grading capabilities
                </p>
              </div>
            </div>

            {/* Flight Control */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Flight Control
                </h3>
                <p className="text-gray-600 text-sm">
                  Intelligent obstacle avoidance, automated flight paths, and precision positioning systems
                </p>
              </div>
            </div>

            {/* Post-Production */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  Pro Editing Suite
                </h3>
                <p className="text-gray-600 text-sm">
                  Adobe Premiere Pro, DaVinci Resolve, and custom color grading for cinematic results
                </p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                8K
              </div>
              <div className="text-sm text-gray-600 font-semibold">Video Resolution</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                360°
              </div>
              <div className="text-sm text-gray-600 font-semibold">Panoramic Capture</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                60fps
              </div>
              <div className="text-sm text-gray-600 font-semibold">Frame Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                5km
              </div>
              <div className="text-sm text-gray-600 font-semibold">Transmission Range</div>
            </div>
          </div>
        </div>
      </section>
      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Comprehensive Aerial Services
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge solutions powered by advanced drone technology
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
                    className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3 group ${
                      selectedSolution.id === solution.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50 border border-purple-400/50'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700/50 hover:border-purple-500/30'
                    }`}
                  >
                    <solution.icon className={`w-5 h-5 flex-shrink-0 ${
                      selectedSolution.id === solution.id ? 'animate-pulse' : 'group-hover:text-purple-400'
                    }`} />
                    <span className="font-semibold">{solution.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content - Solution Details */}
            <div className="lg:col-span-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1508614999368-9260051292e5?w=800&h=600&fit=crop"
                    alt={selectedSolution.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50 animate-pulse">
                        <selectedSolution.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{selectedSolution.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {selectedSolution.description}
                  </p>
                  
                  <div className="space-y-3">
                    {selectedSolution.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5 group-hover:text-blue-400 transition-colors" />
                        <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applicable Industries */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600 rounded-full filter blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Delivering cutting-edge aerial solutions across diverse sectors
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center hover:from-purple-900/30 hover:to-blue-900/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer group border border-gray-700/50 hover:border-purple-500/50 transform hover:scale-105 duration-300"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                <h3 className="font-semibold text-gray-300 group-hover:text-purple-300 transition-colors">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Capture Amazing Aerial Content?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Let's discuss your project and create stunning aerial footage that tells your story.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Link href="/contact">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}