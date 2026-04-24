import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Award, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    status: "Preparation Phase",
    icon: Award,
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    status: "Preparation Phase",
    icon: Award,
  },
];

const completedCourses = [
  "Linux System Administration Fundamentals",
  "AWS Cloud Practitioner Essentials",
  "Docker and Containerization Mastery",
  "Kubernetes for DevOps Engineers",
  "Terraform Infrastructure as Code",
  "Jenkins CI/CD Pipeline Development",
  "Git and Version Control Workflows",
  "Monitoring and Observability with Datadog",
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-center text-gray-900 dark:text-white">
            Certifications & Learning Milestones
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4" />
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Continuous learning journey in DevOps technologies and practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <Award className="h-7 w-7 text-blue-500" />
              Target Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 hover:shadow-md transition-all"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">
                      {cert.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-medium">
                      {cert.status}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-gray-900 dark:text-white">
              <BookOpen className="h-7 w-7 text-green-500" />
              Completed Training
            </h3>
            <Card className="rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {completedCourses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 mt-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {course}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
