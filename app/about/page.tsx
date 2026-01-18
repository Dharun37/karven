import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, Plane, Lightbulb, Shield, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Karvensen",
  description:
    "Learn about Karvensen - Founded in 2023 by Karthika Venkatesan, pioneering AI software development, agricultural drone technology, and educational programs across India.",
}

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Pioneering AI and drone solutions that solve real-world challenges for farmers, businesses, and educational institutions.",
  },
  {
    icon: Shield,
    title: "Quality & Reliability",
    description: "Enterprise-grade solutions with rigorous testing. Make in India quality with global standards.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Committed to empowering farmers and educating youth about emerging technologies through hands-on programs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering exceptional results in every project - from AI software to drone deployments and training workshops.",
  },
]

const milestones = [
  { year: "2023", event: "Karvensen founded by Karthika Venkatesan with a vision for AI-driven innovation" },
  { year: "2023", event: "Launched agricultural drone technology program with Make in India initiative" },
  { year: "2023", event: "Began educational workshops in schools and colleges across India" },
  { year: "2024", event: "Expanded to LMS and ERP solutions for enterprise clients" },
  { year: "2024", event: "Deployed 500+ drones for agricultural monitoring" },
  { year: "2025", event: "Reached 100+ workshops conducted and 50+ enterprise clients" },
]

const impactStats = [
  { value: "500+", label: "Drones Deployed", icon: Plane },
  { value: "100+", label: "Workshops Conducted", icon: Users },
  { value: "50+", label: "Enterprise Clients", icon: Award },
  { value: "1000+", label: "People Trained", icon: Target },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 border-b bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium shadow-sm mb-6">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>Innovating Since 2023</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              About <span className="text-primary">Karvensen</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Founded by <strong>Karthika Venkatesan</strong> in 2023, Karvensen is pioneering the future of AI software development, 
              agricultural drone technology, and enterprise solutions. We're on a mission to make cutting-edge technology 
              accessible and impactful across India.
            </p>
            <div className="inline-flex items-center gap-6 flex-wrap justify-center text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Make in India</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>AI-First Approach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Community Focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses, farmers, and educational institutions with AI-driven technology and drone solutions. 
                  We're committed to building in India, creating local opportunities, and making advanced technology 
                  accessible to those who need it most.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be India's leading technology partner, recognized for transforming agriculture through drones, 
                  revolutionizing education with awareness programs, and delivering enterprise-grade AI solutions that 
                  drive real business value and societal impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at KarVenSen
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="text-center bg-card">
                <CardContent className="pt-8">
                  <div className="mb-4 mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Key milestones in our growth story</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 mb-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <Card className="bg-card">
                      <CardContent className="py-4 px-6">
                        <span className="text-primary font-bold">{milestone.year}</span>
                        <p className="text-muted-foreground mt-1">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Impact</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Making a difference through technology and education
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/10">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI and drone solutions are transforming multiple sectors
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Agriculture",
                description:
                  "Precision farming with drone monitoring, crop analytics, and AI-powered yield optimization.",
              },
              {
                title: "Education",
                description: "Modern LMS platforms, technical workshops, and skill development programs for students.",
              },
              {
                title: "Enterprise",
                description: "Custom ERP solutions, process automation, and AI-driven business intelligence tools.",
              },
              {
                title: "Infrastructure",
                description: "Drone-based surveying, inspection services, and smart monitoring solutions.",
              },
              {
                title: "Healthcare",
                description: "AI diagnostic tools, telemedicine platforms, and healthcare management systems.",
              },
              {
                title: "Government",
                description: "Smart city solutions, public service automation, and citizen engagement platforms.",
              },
            ].map((industry) => (
              <Card key={industry.title} className="bg-card hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
