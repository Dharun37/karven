import type { Metadata } from "next"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"

export const metadata: Metadata = {
  title: "Blog | Karvensen",
  description:
    "Insights on AI, drone technology, enterprise solutions, and digital transformation.",
}

// GROQ Query to fetch blog posts from Sanity
const POSTS_QUERY = `*[_type == "blog"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  "category": category->title,
  publishedAt,
  "author": author->name,
  readTime
}`

async function getBlogPosts() {
  const posts = await client.fetch(POSTS_QUERY)
  return posts
}

export default async function BlogPage() {
  // Fetch data from Sanity
  const blogPosts = await getBlogPosts()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
              Karvensen <span className="text-gray-900">Insights</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Expert perspectives on AI, drones, technology, and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post: any) => (
              <article
                key={post._id}
                className="group border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug.current}`}
                    className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
