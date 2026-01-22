"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, Cpu, Plane, BookOpen, Cloud, Server, GraduationCap } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "AI Software Development",
    href: "/services#ai-software",
    description: "Custom AI and machine learning solutions",
    icon: Cpu,
  },
  {
    title: "Drone Technology",
    href: "/services#drone-technology",
    description: "Agricultural drone systems for farmers",
    icon: Plane,
  },
  { 
    title: "LMS Solutions", 
    href: "/services#lms", 
    description: "Modern learning management systems", 
    icon: BookOpen 
  },
  { 
    title: "ERP Systems", 
    href: "/services#erp", 
    description: "Enterprise resource planning solutions", 
    icon: Server 
  },
  { 
    title: "Cloud Infrastructure", 
    href: "/services#cloud", 
    description: "Scalable cloud and DevOps solutions", 
    icon: Cloud 
  },
]

const training = [
  { 
    title: "Farmer Programs", 
    href: "/training#farmers", 
    description: "Drone awareness for agriculture", 
    icon: Plane 
  },
  {
    title: "School Workshops",
    href: "/training#schools",
    description: "Technical education for students",
    icon: GraduationCap,
  },
  {
    title: "Professional Training",
    href: "/training#professional",
    description: "Skill development programs",
    icon: BookOpen,
  },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-2">
            <Image 
              src="/logo karven.png" 
              alt="Karvensen Logo" 
              width={200} 
              height={70}
              className="h-36 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex bg-transparent">
          <NavigationMenuList className="bg-transparent [&>*]:bg-transparent">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/services" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent">
                  Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/training" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent">
                  Training
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/blog" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent">
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/careers" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent">
                  Careers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className="group inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-900 focus:outline-none relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 !bg-transparent">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          {/* Mobile Navigation */}
          {mounted && (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-gray-900">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-white p-6">            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>              <nav className="flex flex-col gap-6 mt-12">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Services
                </Link>
                <Link
                  href="/training"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Training
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Blog
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
