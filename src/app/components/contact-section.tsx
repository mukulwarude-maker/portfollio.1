import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { motion } from "motion/react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-12">
            Interested in discussing DevOps, cloud infrastructure, or
            collaboration opportunities?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Card className="rounded-2xl border-2 bg-white/10 backdrop-blur-sm border-white/20 dark:bg-white/5 dark:border-white/10">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <a
                  href="mailto:mhprasanna@gmail.com"
                  className="flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/20 group"
                >
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-blue-100 dark:text-blue-300 uppercase tracking-widest font-medium">
                      Email
                    </div>
                    <div className="text-sm font-medium">
                      mhprasanna@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/mhprasanna-spec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/20 group"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-blue-100 dark:text-blue-300 uppercase tracking-widest font-medium">
                      GitHub
                    </div>
                    <div className="text-sm font-medium">@mhprasanna-spec</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-2xl px-8 bg-white text-blue-600 hover:bg-blue-50 dark:bg-white/90 dark:hover:bg-white font-semibold shadow-lg cursor-pointer"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/prasanna-waghmare-43794213a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl px-8 bg-transparent text-white border-2 border-white/50 hover:bg-white/10 dark:border-white/30 dark:hover:bg-white/10 cursor-pointer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <p className="text-sm text-blue-200 dark:text-blue-300 mt-8">
          © 2026 Prasanna Waghmare. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
