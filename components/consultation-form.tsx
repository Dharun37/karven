"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import emailjs from "@emailjs/browser"

interface ConsultationFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationForm({ isOpen, onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sector: "",
    service: "",
    requirements: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          sector: formData.sector,
          service: formData.service,
          requirements: formData.requirements,
          to_email: "info@karvensen.com", // Your email
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )

      setSubmitMessage("Thank you for your time! We'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        sector: "",
        service: "",
        requirements: "",
      })
      setTimeout(() => {
        onClose()
        setSubmitMessage("")
      }, 3000)
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitMessage("Failed to send. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Form Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Schedule a Consultation</h2>
          <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you shortly.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Sector */}
            <div>
              <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                Sector *
              </label>
              <select
                id="sector"
                required
                value={formData.sector}
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900"
              >
                <option value="" className="text-gray-400">Select your sector</option>
                <option value="Agriculture / Farming" className="text-gray-900">Agriculture / Farming</option>
                <option value="Defense & Security" className="text-gray-900">Defense & Security</option>
                <option value="Enterprise / Industrial Inspection" className="text-gray-900">Enterprise / Industrial Inspection</option>
                <option value="Student / Training" className="text-gray-900">Student / Training</option>
              </select>
            </div>

            {/* Service Interest */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Service Interest *
              </label>
              <select
                id="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900"
              >
                <option value="" className="text-gray-400">Select service interest</option>
                <option value="Drone Services (Spraying, Surveillance)" className="text-gray-900">Drone Services (Spraying, Surveillance)</option>
                <option value="AI & Data Solutions" className="text-gray-900">AI & Data Solutions</option>
                <option value="Custom Development" className="text-gray-900">Custom Development</option>
                <option value="Pilot Training" className="text-gray-900">Pilot Training</option>
              </select>
            </div>

            {/* Requirements */}
            <div>
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                Requirements *
              </label>
              <textarea
                id="requirements"
                required
                rows={4}
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none text-gray-900 placeholder:text-gray-400"
                placeholder="Briefly describe your requirements (e.g., 'We need to survey 500 acres of paddy' or 'Looking for perimeter security')."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-base font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {/* Success/Error Message */}
            {submitMessage && (
              <div
                className={`text-center py-2 px-4 rounded-lg ${
                  submitMessage.includes("Thank you")
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
