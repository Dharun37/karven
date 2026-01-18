import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Solutions", href: "/services#ai" },
    { label: "Drone Technology", href: "/services#drone" },
    { label: "LMS & ERP", href: "/services#lms" },
    { label: "Cloud Services", href: "/services#cloud" },
  ],
  training: [
    { label: "Farmer Programs", href: "/training#farmers" },
    { label: "School Workshops", href: "/training#schools" },
    { label: "Skill Development", href: "/training#skills" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">K</span>
                </div>
                <span className="text-2xl font-bold">Karvensen</span>
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              Founded in 2023, pioneering AI software development, agricultural drone technology, and enterprise solutions 
              across India. Make in India, powered by innovation.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@karvensen.com" className="hover:text-primary transition-colors">
                  contact@karvensen.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">
                  +91 123 456 7890
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training Links */}
          <div>
            <h3 className="font-semibold mb-4">Training</h3>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} KarVenSen. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
