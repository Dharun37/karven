import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Plane, BookOpen, Server, Cloud, GraduationCap } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Cpu,
    title: "AI Software Development",
    description:
      "Custom AI solutions, machine learning models, and intelligent automation systems designed for enterprise-grade performance.",
    href: "/services",
  },
  {
    icon: Plane,
    title: "Agricultural Drone Systems",
    description:
      "Smart drone technology for farmers - crop monitoring, spraying, and analytics. Make in India initiative with quality components.",
    href: "/services",
  },
  {
    icon: BookOpen,
    title: "LMS Solutions",
    description: "Modern learning management systems for educational institutions and corporate training programs.",
    href: "/services",
  },
  {
    icon: Server,
    title: "ERP Systems",
    description: "Comprehensive enterprise resource planning platforms to streamline business operations and boost efficiency.",
    href: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions, migration services, and DevOps implementation for modern businesses.",
    href: "/services",
  },
  {
    icon: GraduationCap,
    title: "Educational Programs",
    description: "Hands-on workshops and awareness programs about drone technology for schools, colleges, and professionals.",
    href: "/training",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 border-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Comprehensive Technology Solutions</h2>
          <p className="text-muted-foreground text-lg">
            From AI-powered software to drone technology and enterprise systems - we deliver end-to-end digital transformation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Link key={feature.title} href={feature.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
