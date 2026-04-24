import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "motion/react";

const architectures = [
  {
    title: "Three-Tier AWS Architecture",
    description:
      "Highly available multi-tier application with load balancing and auto-scaling",
    components: [
      "Route 53 → CloudFront → ALB",
      "Web Tier: EC2 instances in public subnets",
      "App Tier: EC2 instances in private subnets",
      "Data Tier: RDS Multi-AZ with read replicas",
      "Auto Scaling Groups for web and app tiers",
      "NAT Gateway for private subnet internet access",
      "S3 for static assets and backups",
    ],
  },
  {
    title: "Kubernetes Cluster Architecture",
    description:
      "Container orchestration with EKS for scalable microservices",
    components: [
      "AWS EKS Control Plane (managed)",
      "Worker Nodes in private subnets",
      "Ingress Controller (ALB/NGINX)",
      "Horizontal Pod Autoscaler (HPA)",
      "Persistent Volumes with EBS/EFS",
      "Secrets and ConfigMaps for configuration",
      "Service mesh for inter-service communication",
    ],
  },
  {
    title: "CI/CD Pipeline Architecture",
    description: "Automated build, test, and deployment workflow",
    components: [
      "Git Repository (GitHub/GitLab) → Webhook trigger",
      "Jenkins: Build, test, code quality scan",
      "Maven: Dependency management and build",
      "SonarQube: Code quality and security analysis",
      "Docker: Container image creation",
      "Image registry (ECR/Docker Hub)",
      "Deployment to K8s/ECS with rolling updates",
    ],
  },
  {
    title: "Monitoring & Observability",
    description:
      "Full-stack monitoring with Datadog for metrics, logs, and traces",
    components: [
      "Datadog agents on all infrastructure",
      "Application Performance Monitoring (APM)",
      "Infrastructure metrics and logs",
      "Custom dashboards for KPIs",
      "Alert rules and notification channels",
      "Log aggregation and analysis",
      "Distributed tracing for microservices",
    ],
  },
];

export function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900 dark:text-white">
            Architecture Diagrams
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4" />
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Clean, interview-ready architecture patterns for AWS and Kubernetes
            deployments
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto bg-gray-100 dark:bg-gray-800/50 p-1 rounded-xl">
              {architectures.map((arch, idx) => (
                <TabsTrigger
                  key={idx}
                  value={idx.toString()}
                  className="rounded-lg py-2.5 px-4 text-sm data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:text-blue-600 dark:data-[state=active]:text-blue-400 data-[state=active]:shadow-sm transition-all"
                >
                  {arch.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {architectures.map((arch, idx) => (
              <TabsContent key={idx} value={idx.toString()}>
                <Card className="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">
                      {arch.title}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400">
                      {arch.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-8 min-h-[400px] flex flex-col justify-center">
                      <div className="space-y-3">
                        <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest font-semibold mb-4">
                          Architecture Components:
                        </p>
                        {arch.components.map((component, compIdx) => (
                          <motion.div
                            key={compIdx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: compIdx * 0.05 }}
                            className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">
                              {component}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-400 dark:text-gray-600 mt-6 text-center italic">
                        Visual diagram placeholder - In production, this would
                        display official AWS/Kubernetes architecture diagrams
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

