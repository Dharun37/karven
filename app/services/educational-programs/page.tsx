import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, GraduationCap, Users, Target, Lightbulb, Award, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function EducationalProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Educational Programs
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Hands-on workshops and awareness programs about drone technology, AI, and emerging technologies for schools, colleges, and professionals.
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
                Awareness & Skill Development
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our educational programs are designed to bridge the gap between theoretical knowledge and practical application. We offer comprehensive training in drone technology, artificial intelligence, and other emerging technologies through interactive workshops and hands-on sessions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From school students to working professionals, our programs cater to diverse audiences, providing them with the skills and knowledge needed to thrive in the technology-driven future. Each program includes practical demonstrations, project work, and certification opportunities.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800">
                <Link href="/contact">Enroll Now</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                alt="Educational Programs"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training programs designed for maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Drone Awareness Workshops",
                description: "Introduction to drone technology, regulations, and practical applications"
              },
              {
                icon: Users,
                title: "Practical Drone Operation Training",
                description: "Hands-on training in drone piloting, safety protocols, and flight operations"
              },
              {
                icon: Lightbulb,
                title: "AI & Technology Seminars",
                description: "Interactive sessions on artificial intelligence and emerging technologies"
              },
              {
                icon: BookOpen,
                title: "Career Guidance Programs",
                description: "Expert guidance on career opportunities in technology and innovation"
              },
              {
                icon: GraduationCap,
                title: "Hands-on Project Sessions",
                description: "Real-world projects to apply learned concepts and build portfolios"
              },
              {
                icon: Award,
                title: "Certification Courses",
                description: "Industry-recognized certifications to validate your skills and knowledge"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Tech Stack Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learning Tools & Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hands-on training with industry-standard equipment and cutting-edge educational platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Training Drones */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Training Drones
                </h3>
                <p className="text-gray-600 text-sm">
                  Educational drone kits with programmable features for hands-on learning experiences
                </p>
              </div>
            </div>

            {/* AI Platforms */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  AI Platforms
                </h3>
                <p className="text-gray-600 text-sm">
                  Machine learning tools and AI development environments for practical projects
                </p>
              </div>
            </div>

            {/* Simulation Software */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Simulation Tools
                </h3>
                <p className="text-gray-600 text-sm">
                  Virtual flight simulators and 3D modeling software for safe practice environments
                </p>
              </div>
            </div>

            {/* Learning Management */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-pink-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  LMS Platform
                </h3>
                <p className="text-gray-600 text-sm">
                  Interactive learning management system with progress tracking and assessments
                </p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-sm text-gray-600 font-semibold">Students Trained</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                20+
              </div>
              <div className="text-sm text-gray-600 font-semibold">Workshop Topics</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 font-semibold">Hands-on Training</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Certified
              </div>
              <div className="text-sm text-gray-600 font-semibold">Course Completion</div>
            </div>
          </div>
        </div>
      </section>
      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored programs for different audiences and skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "School Workshops",
              "College Programs",
              "Farmer Training",
              "Professional Development",
              "Corporate Training",
              "Government Initiatives",
              "Community Outreach",
              "Skill Enhancement"
            ].map((application, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">{application}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our Programs?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Expert Instructors",
                  description: "Learn from industry professionals with years of practical experience"
                },
                {
                  title: "Hands-On Learning",
                  description: "Practical sessions with real equipment and live demonstrations"
                },
                {
                  title: "Flexible Scheduling",
                  description: "Programs designed to fit your schedule and learning pace"
                },
                {
                  title: "Industry Recognition",
                  description: "Certifications valued by employers and industry leaders"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
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

      {/* Advanced Program Promotion */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-200 font-semibold text-sm mb-6">
                Premium Program Available
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Looking for Advanced Training?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Explore our Advanced Educational Programs designed for colleges and schools. Get comprehensive industry-grade training in Drone Technology, AI & Machine Learning, and Software Development with professional certifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  <Link href="/services/advanced-educational-programs">
                    View Advanced Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-indigo-600">
                  <Link href="/contact">Request Information</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join our educational programs and gain the skills you need for tomorrow
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            <Link href="/contact">Enroll Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}