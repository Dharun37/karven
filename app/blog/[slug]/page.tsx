import type { Metadata } from "next"
import { Calendar, ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"
import { blogContentMap, generateDefaultContent } from "@/lib/blog-content"
import { notFound } from "next/navigation"
import BlogSubtitleAnimator from "@/components/blog-subtitle-animator"
import ScrollToTop from "@/components/scroll-to-top"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.id === slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found | Karvensen",
    }
  }

  return {
    title: `${post.title} | Karvensen Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.id === slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll to Top on Page Load */}
      <ScrollToTop />
      
      {/* Subtitle Animation Controller */}
      <BlogSubtitleAnimator />
      
      {/* AI Video Hero Section */}
      <section className="relative w-full bg-gray-900">
        {post.heroVideo ? (
          <div className="relative w-full aspect-video max-h-[600px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={post.heroVideo} type="video/mp4" />
              {/* Fallback to image if video not available */}
              {post.heroImage && (
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.heroImage})` }}
                />
              )}
            </video>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
          </div>
        ) : (
          // Fallback: Featured image with gradient overlay
          <div className="relative w-full aspect-video max-h-[600px] bg-gradient-to-br from-gray-800 to-gray-900">
            {post.heroImage && (
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${post.heroImage})` }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          </div>
        )}
      </section>

      {/* Premium Content Section */}
      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button with enhanced styling */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-10 transition-all duration-300 font-medium group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>

          {/* Category & Branch Badges with Premium Design */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 to-black text-white text-sm font-bold shadow-lg shadow-gray-400">
              {post.category}
            </span>
            <span className="inline-flex items-center px-4 py-2 rounded-full border-2 border-gray-300 text-gray-900 text-sm font-semibold bg-gray-50">
              {post.branch}
            </span>
          </div>

          {/* Premium Title with Better Typography */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info with Premium Styling */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-8 mb-12 border-b-2 border-gray-100">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gray-100 rounded-full">
                <Calendar className="h-4 w-4 text-gray-900" />
              </div>
              <span className="text-sm font-medium">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">By <span className="text-gray-900">{post.author}</span></span>
            </div>
          </div>

          {/* Article Content with Enhanced Reading Experience */}
          <div className="prose prose-lg prose-gray max-w-none">
            {/* Introduction with Premium Typography */}
            <p className="text-2xl text-gray-700 leading-relaxed mb-12 font-light border-l-4 border-gray-900 pl-6 italic">
              {post.excerpt}
            </p>

            {/* Main Content - Detailed Information based on Branch */}
            <div className="space-y-10 text-gray-800 leading-relaxed">
              <ContentSection post={post} />
            </div>

            {/* Premium Key Takeaways Box */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-gray-900 rounded-r-xl p-8 my-12 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                Key Takeaways
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <span>Advanced {post.branch.toLowerCase()} implementation strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <span>Real-world applications and use cases in Indian context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <span>Best practices for deployment and scaling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-900 font-bold mt-1">•</span>
                  <span>Future trends and emerging technologies</span>
                </li>
              </ul>
            </div>

            {/* Premium CTA Section - Modern Split Design */}
            <div className="relative overflow-hidden rounded-3xl my-16 shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-12 md:p-16">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight" style={{ color: '#FFFFFF' }}>
                    Interested in {post.branch}?
                  </h3>
                  
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                    Learn how Karvensen can help you implement cutting-edge solutions for your business.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                      <span>Contact Our Experts</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <Link
                      href="/services"
                      className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                      <span>Explore Our Services</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Premium Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white border-t-2 border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-3 bg-gray-100 rounded-xl">
                <BookOpen className="h-6 w-6 text-gray-900" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Related Articles</h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    {relatedPost.heroImage ? (
                      <Image
                        src={relatedPost.heroImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 via-gray-700/20 to-gray-800/20 group-hover:scale-110 transition-transform duration-700"></div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 shadow-lg z-10">
                      {relatedPost.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(relatedPost.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="text-gray-900 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

// Content Section Component - Generates detailed content based on post branch
function ContentSection({ post }: { post: typeof blogPosts[0] }) {
  // Check if we have specific content for this branch
  const contentGenerator = blogContentMap[post.branch]
  
  if (contentGenerator) {
    // Use detailed branch-specific content
    return <div className="space-y-8">{contentGenerator()}</div>
  }
  
  // Fall back to default content generator
  return <div className="space-y-8">{generateDefaultContent(post.branch, post.category)}</div>
}
