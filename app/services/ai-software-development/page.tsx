import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Cpu, Brain, Code, Database, Zap, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AISoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Software Development
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Custom AI and machine learning solutions tailored to your business needs. From predictive analytics to natural language processing, we build AI systems that drive real business value.
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
                Intelligent Solutions for Modern Challenges
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our AI software development services leverage cutting-edge machine learning algorithms and deep learning techniques to solve complex business problems. We specialize in creating custom AI solutions that integrate seamlessly with your existing systems.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From computer vision applications to natural language processing systems, our team of AI experts delivers solutions that are not only technically advanced but also practical and scalable for real-world deployment.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
                alt="AI Software Development"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI capabilities to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Custom Machine Learning Models",
                description: "Tailored ML models designed specifically for your business needs and data patterns"
              },
              {
                icon: Code,
                title: "Computer Vision & Image Processing",
                description: "Advanced image recognition, object detection, and visual analysis capabilities"
              },
              {
                icon: Cpu,
                title: "Natural Language Processing",
                description: "Text analysis, sentiment detection, and language understanding systems"
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Forecast trends and make data-driven decisions with advanced analytics"
              },
              {
                icon: Database,
                title: "AI Integration & Deployment",
                description: "Seamless integration with existing systems and cloud deployment"
              },
              {
                icon: Zap,
                title: "Model Training & Optimization",
                description: "Continuous improvement and optimization of AI models for peak performance"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
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
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Development Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge frameworks and tools for building intelligent applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Machine Learning */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  TensorFlow & PyTorch
                </h3>
                <p className="text-gray-600 text-sm">
                  Deep learning frameworks for building and training neural networks
                </p>
              </div>
            </div>

            {/* NLP Tools */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  NLP Libraries
                </h3>
                <p className="text-gray-600 text-sm">
                  NLTK, spaCy, and Transformers for natural language processing tasks
                </p>
              </div>
            </div>

            {/* Computer Vision */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  OpenCV & YOLO
                </h3>
                <p className="text-gray-600 text-sm">
                  Computer vision libraries for image processing and object detection
                </p>
              </div>
            </div>

            {/* Cloud AI */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  Cloud AI Services
                </h3>
                <p className="text-gray-600 text-sm">
                  AWS SageMaker, Google AI, Azure ML for scalable AI deployment
                </p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                99%
              </div>
              <div className="text-sm text-gray-600 font-semibold">Model Accuracy</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600 font-semibold">AI Models Deployed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                Real-time
              </div>
              <div className="text-sm text-gray-600 font-semibold">Inference Speed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Custom
              </div>
              <div className="text-sm text-gray-600 font-semibold">AI Solutions</div>
            </div>
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
              Our AI solutions serve diverse industries and applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Manufacturing Quality Control",
              "Customer Behavior Analysis",
              "Process Automation",
              "Risk Assessment",
              "Fraud Detection",
              "Recommendation Systems",
              "Chatbots & Virtual Assistants",
              "Document Processing"
            ].map((application, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">{application}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can help you achieve your goals
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}