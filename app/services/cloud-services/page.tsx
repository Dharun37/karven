import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Cloud, Server, Shield, Zap, Database, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CloudServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-cyan-100 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                <Cloud className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Comprehensive cloud computing solutions for businesses of all sizes. From cloud migration to infrastructure management, we provide secure, scalable, and cost-effective cloud services.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Scalable Infrastructure for Modern Business
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our cloud services empower businesses to leverage the full potential of cloud computing. Whether you're looking to migrate existing infrastructure, build cloud-native applications, or optimize your current cloud setup, we provide end-to-end solutions tailored to your needs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With expertise across major cloud platforms including AWS, Azure, and Google Cloud, we ensure your infrastructure is secure, scalable, and optimized for performance. Our 24/7 monitoring and support guarantee maximum uptime and reliability.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Cloud Services"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete cloud solutions to power your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: "Cloud Migration & Strategy",
                description: "Seamless migration of your applications and data to the cloud with minimal downtime"
              },
              {
                icon: Server,
                title: "Infrastructure as a Service (IaaS)",
                description: "Scalable computing resources on-demand with flexible pricing models"
              },
              {
                icon: Globe,
                title: "Platform as a Service (PaaS)",
                description: "Complete development and deployment platforms for your applications"
              },
              {
                icon: Shield,
                title: "Cloud Security & Compliance",
                description: "Enterprise-grade security measures and compliance with industry standards"
              },
              {
                icon: Database,
                title: "Disaster Recovery Solutions",
                description: "Automated backup and recovery systems to protect your critical data"
              },
              {
                icon: Zap,
                title: "24/7 Monitoring & Support",
                description: "Round-the-clock monitoring and expert support to ensure optimal performance"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-cyan-100 hover:border-cyan-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Applications & Use Cases
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Versatile cloud solutions for diverse business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Enterprise Applications",
              "Data Storage & Backup",
              "Web Hosting",
              "DevOps & CI/CD",
              "Big Data Analytics",
              "Machine Learning Workloads",
              "Content Delivery",
              "Hybrid Cloud Solutions"
            ].map((application, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">{application}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our Cloud Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Cost Optimization",
                  description: "Pay only for what you use with flexible pricing and resource optimization"
                },
                {
                  title: "Scalability",
                  description: "Scale resources up or down instantly based on your business demands"
                },
                {
                  title: "High Availability",
                  description: "99.9% uptime SLA with redundant infrastructure and failover systems"
                },
                {
                  title: "Expert Support",
                  description: "Certified cloud architects and engineers available 24/7 for assistance"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-600 to-cyan-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our cloud services can transform your business infrastructure
          </p>
          <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}