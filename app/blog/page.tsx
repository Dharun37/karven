import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Karvensen",
  description:
    "Insights on AI, drone technology, enterprise solutions, and digital transformation. Expert perspectives from the Karvensen team.",
}

// Sample blog posts - Replace with CMS data later
const blogPosts = [
  {
    id: "ai-agriculture",
    title: "How AI is Revolutionizing Agriculture in India",
    excerpt:
      "Exploring the impact of artificial intelligence and drone technology on modern farming practices, crop monitoring, and yield optimization.",
    category: "AI & Agriculture",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "Karvensen Team",
  },
  {
    id: "drone-adoption",
    title: "The Rise of Drone Technology in Precision Farming",
    excerpt:
      "Understanding how agricultural drones are transforming crop management, pest control, and irrigation planning for farmers across the country.",
    category: "Drone Technology",
    date: "2024-01-10",
    readTime: "6 min read",
    author: "Karvensen Team",
  },
  {
    id: "make-in-india",
    title: "Building Drones in India: Quality Meets Innovation",
    excerpt:
      "An inside look at our Make in India initiative - sourcing components responsibly and assembling high-quality drones locally.",
    category: "Innovation",
    date: "2024-01-05",
    readTime: "4 min read",
    author: "Karvensen Team",
  },
  {
    id: "enterprise-digital-transformation",
    title: "Digital Transformation: Why ERP and LMS Matter",
    excerpt:
      "How modern ERP and LMS solutions are helping Indian enterprises streamline operations, improve efficiency, and scale faster.",
    category: "Enterprise Solutions",
    date: "2023-12-28",
    readTime: "7 min read",
    author: "Karvensen Team",
  },
  {
    id: "cloud-security",
    title: "Cloud Security Best Practices for Growing Businesses",
    excerpt:
      "Essential security measures and best practices for businesses moving to the cloud, ensuring data protection and compliance.",
    category: "Cloud & Security",
    date: "2023-12-20",
    readTime: "5 min read",
    author: "Karvensen Team",
  },
  {
    id: "education-technology",
    title: "Empowering Youth Through Technology Education",
    excerpt:
      "Our experience conducting drone awareness workshops in schools and colleges, and why early tech education matters.",
    category: "Education",
    date: "2023-12-15",
    readTime: "4 min read",
    author: "Karvensen Team",
  },
]

const categories = ["All", "AI & Agriculture", "Drone Technology", "Enterprise Solutions", "Innovation", "Cloud & Security", "Education"]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 border-b bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium shadow-sm mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>Insights & Updates</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              The Karvensen <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore the latest insights on AI, drone technology, enterprise solutions, and digital transformation. 
              Expert perspectives from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="mb-4 leading-relaxed flex-1">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="text-center mt-16 p-8 bg-muted/30 rounded-lg border max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">More Content Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              We're working on publishing more in-depth articles, case studies, and technical guides. 
              Check back regularly for updates!
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Subscribe to Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
