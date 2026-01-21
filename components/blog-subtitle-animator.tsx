"use client"

import { useEffect } from "react"

export default function BlogSubtitleAnimator() {
  useEffect(() => {
    // Wait for DOM to be fully loaded
    const initAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains('animate-slide-left') && !entry.target.classList.contains('animate-slide-right')) {
              const element = entry.target as HTMLElement
              const allElements = Array.from(document.querySelectorAll('.prose h2, .prose h3, .prose p, .prose ul, .prose ol, .prose > div, .prose section'))
              const index = allElements.indexOf(element)
              
              // Alternate between left and right based on index
              if (index % 2 === 0) {
                element.classList.add('animate-slide-left')
              } else {
                element.classList.add('animate-slide-right')
              }
              
              // Stop observing after animation is added
              observer.unobserve(element)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        }
      )

      // Observe all content elements in prose
      const elements = document.querySelectorAll('.prose h2, .prose h3, .prose p, .prose ul, .prose ol, .prose > div, .prose section')
      elements.forEach((element) => {
        // Make sure element starts invisible
        if (!element.classList.contains('animate-slide-left') && !element.classList.contains('animate-slide-right')) {
          observer.observe(element)
        }
      })

      return () => {
        elements.forEach((element) => observer.unobserve(element))
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100)
    return () => clearTimeout(timer)
  }, [])

  return null
}
