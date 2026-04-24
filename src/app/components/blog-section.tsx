import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const blogPosts = [
  {
    title: "Essential Linux Commands Every DevOps Engineer Should Know",
    description:
      "A comprehensive guide to the most useful Linux commands for daily DevOps tasks, including file management, process monitoring, and system administration.",
    category: "Linux",
    tags: ["Linux", "Shell", "Best Practices"],
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    title: "Debugging Kubernetes Pod Failures: A Step-by-Step Guide",
    description:
      "Common Kubernetes pod issues and how to troubleshoot them using kubectl commands, logs analysis, and debugging techniques.",
    category: "Kubernetes",
    tags: ["Kubernetes", "Troubleshooting", "DevOps"],
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    title: "AWS VPC Best Practices for Multi-Tier Applications",
    description:
      "Design patterns and security best practices for creating VPCs with proper subnet segmentation, routing, and security groups.",
    category: "AWS",
    tags: ["AWS", "VPC", "Networking", "Security"],
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    title: "Optimizing Docker Images: From 1GB to 100MB",
    description:
      "Practical techniques for reducing Docker image sizes using multi-stage builds, Alpine base images, and layer optimization.",
    category: "Docker",
    tags: ["Docker", "Optimization", "Best Practices"],
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
  },
  {
    title: "Terraform State Management: Remote Backends and Locking",
    description:
      "Understanding Terraform state files, implementing remote backends with S3, and preventing state corruption with DynamoDB locking.",
    category: "Terraform",
    tags: ["Terraform", "IaC", "State Management"],
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    title: "Building Resilient CI/CD Pipelines with Jenkins",
    description:
      "Best practices for creating reliable Jenkins pipelines with proper error handling, retry logic, and notification strategies.",
    category: "CI/CD",
    tags: ["Jenkins", "CI/CD", "Automation"],
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900 dark:text-white">
            DevOps Learnings & Notes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4" />
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Documented learnings, troubleshooting guides, and best practices
            from hands-on experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
            >
              <Card className="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-300 group h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className={`h-4 w-4 ${post.color}`} />
                    <span
                      className={`text-xs uppercase tracking-widest font-semibold ${post.color}`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIdx) => (
                      <Badge
                        key={tagIdx}
                        variant="outline"
                        className={`rounded-lg text-xs border-gray-200 dark:border-gray-700 ${post.bg} ${post.color} border-0`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full rounded-xl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all cursor-pointer"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
