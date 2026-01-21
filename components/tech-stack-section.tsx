"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const techCategories = [
  {
    category: "Frontend",
    technologies: [
      "React", "Next.js", "Vue.js", "Angular", "TypeScript", 
      "Tailwind CSS", "React Native", "Flutter"
    ],
    color: "blue"
  },
  {
    category: "Backend",
    technologies: [
      "Node.js", "Python", "Java", "Go", ".NET", 
      "PHP", "Ruby on Rails", "Express"
    ],
    color: "green"
  },
  {
    category: "Database",
    technologies: [
      "PostgreSQL", "MongoDB", "MySQL", "Redis", 
      "Elasticsearch", "DynamoDB", "Cassandra"
    ],
    color: "purple"
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      "AWS", "Azure", "Google Cloud", "Docker", 
      "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"
    ],
    color: "orange"
  },
  {
    category: "AI & Data",
    technologies: [
      "TensorFlow", "PyTorch", "Scikit-learn", "Apache Spark",
      "Pandas", "OpenAI", "LangChain", "Hugging Face"
    ],
    color: "pink"
  },
  {
    category: "Mobile & IoT",
    technologies: [
      "iOS", "Android", "React Native", "Flutter",
      "Arduino", "Raspberry Pi", "MQTT", "Edge Computing"
    ],
    color: "teal"
  }
]

export function TechStackSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Technology Stack
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4 dark:text-white">
            Powered by Modern Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We leverage the latest and most reliable technologies to build scalable, secure, and high-performance solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-sm font-medium hover:scale-105 transition-transform cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
