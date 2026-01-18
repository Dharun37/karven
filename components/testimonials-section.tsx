import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Karvensen's drone technology revolutionized our farm operations. Real-time crop monitoring and precise spraying increased our yield by 35%. The team's support has been outstanding.",
    author: "Rajesh Kumar",
    role: "Agricultural Enterprise Owner, Maharashtra",
    avatar: "/placeholder.svg",
  },
  {
    quote:
      "Their LMS platform transformed our online education delivery. The AI-powered features and intuitive design made virtual learning engaging and effective for thousands of students.",
    author: "Dr. Priya Sharma",
    role: "Dean of Education Technology",
    avatar: "/placeholder.svg",
  },
  {
    quote:
      "The drone awareness workshop at our college was exceptional. Students gained hands-on experience and practical knowledge that will shape their careers in emerging technologies.",
    author: "Prof. Venkat Rao",
    role: "Engineering College Principal",
    avatar: "/placeholder.svg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 border-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Trusted by Organizations Nationwide</h2>
          <p className="text-muted-foreground text-lg">
            Real results from real clients - see how Karvensen is making an impact across industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="relative hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
                <p className="mb-6 text-muted-foreground relative z-10 pl-4 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center gap-3 border-t pt-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/10 text-primary">{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
