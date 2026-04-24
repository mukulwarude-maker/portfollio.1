import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Card className="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/20 transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a DevOps Engineer with strong fundamentals in cloud
                  infrastructure, automation, and continuous delivery. My
                  approach centers on project-based learning and hands-on
                  implementation, building practical solutions that solve
                  real-world problems.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Through focused practice and experimentation, I've developed
                  expertise in Linux system administration, AWS cloud services,
                  containerization with Docker and Kubernetes, infrastructure as
                  code using Terraform, and building robust CI/CD pipelines with
                  Jenkins. I believe in learning by doing — every project is an
                  opportunity to deepen understanding and refine best practices.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My toolkit includes Linux, AWS (EC2, VPC, S3, RDS, Lambda,
                  and more), Docker, Kubernetes, Terraform, Git, Jenkins, and
                  monitoring solutions like Datadog. I'm passionate about
                  automation, scalability, and creating infrastructure that
                  empowers development teams to ship faster and more reliably.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

