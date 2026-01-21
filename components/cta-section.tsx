"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import { useEffect, useRef } from "react"

export function CTASection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let playPromise: Promise<void> | undefined

    // Handle play attempts with proper promise handling
    const playVideo = () => {
      if (playPromise !== undefined) {
        playPromise.then(() => {
          playPromise = video.play()
        }).catch(() => {
          playPromise = video.play()
        })
      } else {
        playPromise = video.play()
        playPromise.catch((error) => {
          // Silently handle interruption errors - they're expected for background videos
          if (error.name !== 'AbortError' && error.name !== 'NotAllowedError') {
            console.log("Video play error:", error.name)
          }
        })
      }
    }

    // Play when video is ready
    video.addEventListener('loadeddata', playVideo)
    
    // Resume play if paused (handles power-saving pause)
    video.addEventListener('pause', () => {
      if (!document.hidden) {
        playVideo()
      }
    })

    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideo()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Initial play attempt
    playVideo()

    return () => {
      video.removeEventListener('loadeddata', playVideo)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-800 text-white relative overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: 'none' }}
      >
        <source src="/drone%20video%202.mp4" type="video/mp4" />
        <source src="/drone video 2.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto px-4 py-12 text-center relative z-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Ready to Innovate with Karvensen?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
          Let's discuss how our AI-driven solutions and drone technology can transform your operations. 
          Join the future of intelligent automation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 group">
            <Link href="/contact">
              <MessageSquare className="mr-2 h-4 w-4" />
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
