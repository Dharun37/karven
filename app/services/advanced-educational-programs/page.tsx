import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, GraduationCap, Award, Users, BookOpen, Cpu, Zap, Target, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AdvancedEducationalProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-400/30 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services/educational-programs" className="inline-flex items-center gap-2 text-indigo-100 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Educational Programs
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                <Award className="w-8 h-8 text-white" />
              </div>
              <span className="px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-200 font-semibold text-sm">
                Premium Program
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Advanced Educational Programs
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              Comprehensive advanced training programs in drone technology, AI, and software development for colleges and schools. Industry-grade curriculum with hands-on projects, expert mentorship, and professional certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold text-sm mb-4">
                Premium Training
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Industry-Grade Education for Future Innovators
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Advanced Educational Programs go beyond basic awareness to provide comprehensive, industry-standard training in cutting-edge technologies. Designed specifically for colleges and schools, these programs prepare students for real-world careers in drone technology, artificial intelligence, and software development.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With expert instructors, state-of-the-art equipment, hands-on projects, and industry partnerships, students gain practical experience and professional certifications that give them a competitive edge in the job market.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800">
                <Link href="/contact">Enroll Your Institution</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Advanced Educational Programs"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl border-2 border-indigo-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Students Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tracks */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Program Tracks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive curriculum designed for different technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Advanced Drone Technology",
                duration: "6 Months",
                topics: [
                  "Drone Design & Engineering",
                  "Advanced Flight Operations",
                  "Autonomous Navigation Systems",
                  "Drone Programming & Automation",
                  "Commercial Applications",
                  "DGCA Certification Preparation"
                ],
                color: "from-red-600 to-red-700"
              },
              {
                icon: Cpu,
                title: "AI & Machine Learning",
                duration: "8 Months",
                topics: [
                  "Python Programming for AI",
                  "Machine Learning Algorithms",
                  "Deep Learning & Neural Networks",
                  "Computer Vision Applications",
                  "Natural Language Processing",
                  "AI Project Development"
                ],
                color: "from-blue-600 to-blue-700"
              },
              {
                icon: BookOpen,
                title: "Software Development",
                duration: "10 Months",
                topics: [
                  "Full-Stack Web Development",
                  "Mobile App Development",
                  "Cloud Computing & DevOps",
                  "Database Management",
                  "Software Architecture",
                  "Industry Best Practices"
                ],
                color: "from-green-600 to-green-700"
              }
            ].map((track, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-indigo-100 hover:border-indigo-300">
                <div className={`bg-gradient-to-br ${track.color} p-6 text-white`}>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <track.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{track.title}</h3>
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                    {track.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Curriculum Highlights:</h4>
                  <ul className="space-y-3">
                    {track.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Program Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for world-class technical education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Instructors",
                description: "Industry professionals with 10+ years of experience"
              },
              {
                icon: Target,
                title: "Hands-On Projects",
                description: "Real-world projects and case studies from industry"
              },
              {
                icon: Award,
                title: "Professional Certifications",
                description: "Industry-recognized certificates upon completion"
              },
              {
                icon: TrendingUp,
                title: "Career Support",
                description: "Job placement assistance and career guidance"
              },
              {
                icon: Zap,
                title: "State-of-Art Labs",
                description: "Access to latest equipment and technology"
              },
              {
                icon: BookOpen,
                title: "Comprehensive Materials",
                description: "Detailed study materials and resources"
              },
              {
                icon: Users,
                title: "Industry Partnerships",
                description: "Collaborations with leading tech companies"
              },
              {
                icon: GraduationCap,
                title: "Flexible Learning",
                description: "Weekend and online options available"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-xl border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Institutions */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ideal For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed for educational institutions seeking excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Engineering Colleges",
              "Polytechnic Institutes",
              "Science & Technology Schools",
              "Computer Science Departments",
              "Technical Universities",
              "Research Institutions",
              "Innovation Centers",
              "Skill Development Centers"
            ].map((institution, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">{institution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Program Success Metrics
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Students Trained" },
                { number: "50+", label: "Partner Institutions" },
                { number: "95%", label: "Placement Rate" },
                { number: "100+", label: "Industry Projects" }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{metric.number}</div>
                  <div className="text-indigo-200">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Institution's Tech Education
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Partner with us to provide world-class technology education to your students
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-indigo-600">
              <Link href="/services/educational-programs">View Basic Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}