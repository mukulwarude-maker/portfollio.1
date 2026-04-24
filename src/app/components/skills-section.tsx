import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";
import {
  Terminal,
  Cloud,
  GitBranch,
  Container,
  FileCode,
  Workflow,
  Activity,
} from "lucide-react";

const skillCategories = [
  {
    title: "Operating Systems & Scripting",
    icon: Terminal,
    skills: ["Linux", "Bash", "Cron", "Shell Scripting"],
    color:
      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Cloud (AWS)",
    icon: Cloud,
    skills: [
      "EC2, VPC, S3, EBS, EFS, RDS",
      "IAM, CloudWatch",
      "Route 53, CloudFront, Lambda",
    ],
    color:
      "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab"],
    color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Docker Compose", "Kubernetes", "EKS"],
    color:
      "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Infrastructure as Code",
    icon: FileCode,
    skills: ["Terraform", "Modules", "State Management", "Workspaces"],
    color:
      "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "CI/CD",
    icon: Workflow,
    skills: [
      "Jenkins, Maven, SonarQube",
      "Blue-Green Deployments",
      "Canary Deployments",
      "Rolling Deployments",
    ],
    color:
      "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    skills: ["Datadog", "Logs & Metrics", "Alerts", "Dashboards"],
    color:
      "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800",
    iconColor: "text-teal-600 dark:text-teal-400",
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900 dark:text-white">
            Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <Card
                  className={`rounded-2xl border-2 ${category.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg bg-white/60 dark:bg-black/20 ${category.iconColor}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-lg text-gray-800 dark:text-gray-100">
                        {category.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIdx) => (
                        <li
                          key={skillIdx}
                          className="text-gray-700 dark:text-gray-300 flex items-start"
                        >
                          <span className={`mr-2 ${category.iconColor}`}>
                            •
                          </span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

