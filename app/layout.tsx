import type React from "react"
import type { Metadata } from "next"
import { Outfit, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import NotificationButton from "@/components/notification-button"
import "./globals.css"

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap"
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
})

export const metadata: Metadata = {
  title: "KarVenSen | AI-Driven Drone & Software Solutions",
  description:
    "KarVenSen is an AI-first IT software services company specializing in Artificial Intelligence, Drone-based solutions, LMS, ERP, Cloud services, and technical awareness programs.",
  keywords: ["AI", "Drone Technology", "Software Development", "LMS", "ERP", "Cloud Services", "Machine Learning"],
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased bg-white overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen bg-white dark:bg-gray-950">{children}</main>
          <Footer />
          <NotificationButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
