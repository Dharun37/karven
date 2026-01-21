"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts, blogCategories } from "@/lib/blog-data"

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <>
      {/* Premium Category Filter Pills */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white shadow-lg shadow-gray-400"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-900 hover:text-gray-900 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Blog Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No blog posts found in this category.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Image Section with Category Badge Overlay */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                    {post.heroImage ? (
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <span className="text-sm">Image loading...</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20" />
                    {/* Category Badge Overlay */}
                    <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 shadow-lg z-10">
                      {post.category}
                    </div>
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    
                    {/* Footer with Date */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="text-gray-900 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read more →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
