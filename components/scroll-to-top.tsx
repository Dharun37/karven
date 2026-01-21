"use client"

import { useEffect } from "react"

export default function ScrollToTop() {
  useEffect(() => {
    // Instant scroll to top without animation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // Also set scroll position directly as backup
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return null
}
