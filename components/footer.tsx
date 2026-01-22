import Link from "next/link"
import { Linkedin, Youtube, Facebook, Twitter, Instagram } from "lucide-react"

const footerLinks = {
  products: [
    { label: "AI & Machine Learning", href: "/products/ai" },
    { label: "Drone Technology", href: "/products/drones" },
    { label: "Agricultural Drones", href: "/products/agri-drones" },
    { label: "Surveillance Systems", href: "/products/surveillance" },
    { label: "Enterprise Software", href: "/products/enterprise" },
    { label: "LMS Platforms", href: "/products/lms" },
    { label: "ERP Systems", href: "/products/erp" },
    { label: "Cloud Solutions", href: "/products/cloud" },
  ],
  solutions: [
    { label: "Agriculture & Farming", href: "/solutions/agriculture" },
    { label: "Education & E-Learning", href: "/solutions/education" },
    { label: "Healthcare", href: "/solutions/healthcare" },
    { label: "Smart Cities", href: "/solutions/smart-cities" },
    { label: "Defense & Security", href: "/solutions/defense" },
    { label: "Industrial Automation", href: "/solutions/industrial" },
    { label: "Retail & E-Commerce", href: "/solutions/retail" },
  ],
  learn: [
    { label: "Farmer Training Programs", href: "/training/farmers" },
    { label: "School Workshops", href: "/training/schools" },
    { label: "Corporate Training", href: "/training/corporate" },
    { label: "Drone Pilot Certification", href: "/training/drone-pilot" },
    { label: "Technical Blog", href: "/blog" },
    { label: "Success Stories", href: "/case-studies" },
    { label: "Documentation", href: "/docs" },
    { label: "Developer API", href: "/api-docs" },
  ],
  company: [
    { label: "About Karvensen", href: "/about" },
    { label: "Our Mission", href: "/about/mission" },
    { label: "Leadership Team", href: "/about/team" },
    { label: "Careers", href: "/careers" },
    { label: "Press & Media", href: "/press" },
    { label: "Events & Webinars", href: "/events" },
    { label: "Partner With Us", href: "/partners" },
    { label: "Investor Relations", href: "/investors" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-5">
          {/* Products & Services */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-base">Products & Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-base">Solutions</h3>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn & Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-base">Learn & Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.learn.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-base">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Sales */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 text-base">Contact Sales</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Phone</p>
                <a href="tel:+911234567890" className="text-sm text-gray-600 hover:text-blue-600 hover:underline block transition-colors">
                  +91 123 456 7890
                </a>
                <a href="tel:+919876543210" className="text-sm text-gray-600 hover:text-blue-600 hover:underline block mt-1 transition-colors">
                  +91 987 654 3210
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Email</p>
                <a href="mailto:sales@karvensen.com" className="text-sm text-gray-600 hover:text-blue-600 hover:underline block transition-colors">
                  sales@karvensen.com
                </a>
                <a href="mailto:info@karvensen.com" className="text-sm text-gray-600 hover:text-blue-600 hover:underline block mt-1 transition-colors">
                  info@karvensen.com
                </a>
              </div>
              <div className="pt-2">
                <Link href="/support" className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 transition-colors">
                  Technical Support →
                </Link>
                <Link href="/contact" className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 mt-2 transition-colors">
                  Request a Demo →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Centered */}
        <div className="flex items-center justify-center gap-4 mt-12 pt-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#CD201F] transition-colors" aria-label="YouTube">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#316FF6] transition-colors" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-600 hover:text-[#E1306C] transition-colors" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        {/* Bottom Links - Group Companies, Legal, Policies */}
        <div className="mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs text-gray-600">
            <span className="font-medium text-gray-900">Group Companies:</span>
            <Link href="https://droneentry.com" className="hover:text-blue-600 transition-colors">
              Drone Entry
            </Link>
            <Link href="https://pyitechnologies.com" className="hover:text-blue-600 transition-colors">
              PYI Technologies
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
            <Link href="/security" className="hover:text-blue-600 transition-colors">
              Security
            </Link>
            <Link href="/compliance" className="hover:text-blue-600 transition-colors">
              Compliance
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-blue-600 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/gdpr" className="hover:text-blue-600 transition-colors">
              GDPR Compliance
            </Link>
          </div>
          <p className="text-center text-xs text-gray-500 mt-6">
            © {new Date().getFullYear()} KarVenSen. All rights reserved. Made in India.
          </p>
        </div>
      </div>
    </footer>
  )
}
