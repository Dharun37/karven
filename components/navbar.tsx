"use client"

import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Cpu, Plane, BookOpen, Cloud, Server, GraduationCap } from "lucide-react"

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
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
              <div className="relative h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Karvensen
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                  {services.map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={service.href}
                          className="flex items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <service.icon className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Training</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  {training.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="flex items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/blog" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/careers" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  Careers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden sm:inline-flex"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/contact">Book a Demo</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/training"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Training
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Contact
                </Link>
                <div className="flex items-center gap-2 pt-4 border-t">
                  <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                  <Button asChild className="flex-1">
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Book a Demo
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
