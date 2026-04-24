import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const trainingAreas = [
  {
    title: "Linux & System Administration",
    topics: [
      "File system hierarchy and management",
      "User and permission management",
      "Process management and systemd",
      "Shell scripting and automation",
      "Package management (apt, yum)",
      "Network configuration and troubleshooting",
      "Log management and monitoring",
    ],
  },
  {
    title: "AWS Cloud Services",
    topics: [
      "Compute: EC2, Lambda, ECS, EKS",
      "Storage: S3, EBS, EFS, Glacier",
      "Networking: VPC, Route 53, CloudFront, ALB/NLB",
      "Database: RDS, DynamoDB, ElastiCache",
      "Security: IAM, Security Groups, ACM",
      "Monitoring: CloudWatch, CloudTrail",
      "Well-Architected Framework principles",
    ],
  },
  {
    title: "Git & Source Control",
    topics: [
      "Git fundamentals and workflows",
      "Branching strategies (GitFlow, trunk-based)",
      "Merge vs rebase strategies",
      "Pull requests and code reviews",
      "GitHub/GitLab CI integration",
      "Repository management best practices",
    ],
  },
  {
    title: "Containers & Orchestration",
    topics: [
      "Docker fundamentals and image creation",
      "Multi-stage builds and optimization",
      "Docker Compose for local development",
      "Kubernetes architecture and components",
      "Deployments, Services, and Ingress",
      "ConfigMaps, Secrets, and Volumes",
      "Helm charts and package management",
    ],
  },
  {
    title: "Infrastructure as Code",
    topics: [
      "Terraform configuration language (HCL)",
      "Resource and data source management",
      "Terraform modules for reusability",
      "State management and locking",
      "Workspaces for multi-environment",
      "Variables, outputs, and locals",
      "Best practices and code organization",
    ],
  },
  {
    title: "CI/CD Pipelines",
    topics: [
      "Jenkins pipeline as code (Jenkinsfile)",
      "Build automation with Maven",
      "Code quality gates with SonarQube",
      "Automated testing integration",
      "Blue-green deployment strategy",
      "Canary and rolling deployments",
      "Pipeline optimization and best practices",
    ],
  },
  {
    title: "Monitoring & Observability",
    topics: [
      "Metrics collection and analysis",
      "Log aggregation and parsing",
      "Distributed tracing concepts",
      "Dashboard creation and KPIs",
      "Alert configuration and management",
      "SLIs, SLOs, and SLAs",
      "Incident response workflows",
    ],
  },
];

export function TrainingSection() {
  return (
    <section id="training" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900 dark:text-white">
            Training & Learning Highlights
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4" />
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Comprehensive learning path focused on practical DevOps skills and
            implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainingAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
            >
              <Card className="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-blue-900/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl text-gray-900 dark:text-white">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
