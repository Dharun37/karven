import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, BookOpen, Users, BarChart3, Award, Video, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LearningManagementSystemsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-green-400/30 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-green-100 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Learning Management Systems
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Comprehensive LMS solutions for educational institutions and corporate training. Engage learners with interactive content, assessments, and progress tracking.
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
                Modern Education Platforms
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Learning Management Systems provide a complete solution for delivering, tracking, and managing educational content. Whether you're running a corporate training program or an academic institution, our LMS platforms offer the tools you need to succeed.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With features like interactive assessments, progress analytics, mobile responsiveness, and seamless integration capabilities, our LMS solutions make learning accessible, engaging, and measurable.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop"
                alt="Learning Management Systems"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to deliver exceptional learning experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Course Management & Delivery",
                description: "Create, organize, and deliver courses with ease using our intuitive platform"
              },
              {
                icon: FileText,
                title: "Interactive Assessments",
                description: "Build engaging quizzes, tests, and assignments with automated grading"
              },
              {
                icon: BarChart3,
                title: "Progress Tracking & Analytics",
                description: "Monitor learner progress with detailed analytics and reporting tools"
              },
              {
                icon: Video,
                title: "Mobile-Responsive Design",
                description: "Access learning materials anytime, anywhere on any device"
              },
              {
                icon: Users,
                title: "Integration with Existing Systems",
                description: "Seamlessly connect with your current tools and workflows"
              },
              {
                icon: Award,
                title: "Certification Management",
                description: "Issue and track certificates and credentials automatically"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-4">
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
              Versatile solutions for various learning environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Corporate Training",
              "Academic Courses",
              "Skill Development",
              "Compliance Training",
              "Onboarding Programs",
              "Professional Certification",
              "Continuing Education",
              "Employee Development"
            ].map((application, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">{application}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our LMS can help you achieve your educational goals
          </p>
          <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}