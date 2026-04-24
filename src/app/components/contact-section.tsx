import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, Download } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl mb-4">Let's Connect</h2>
        <p className="text-xl text-blue-100 mb-12">
          Interested in discussing DevOps, cloud infrastructure, or collaboration opportunities?
        </p>
        
        <Card className="rounded-2xl border-2 bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:mhprasanna@gmail.com"
                className="flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/20"
              >
                <Mail className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-sm text-blue-100">Email</div>
                  <div className="text-sm">mhprasanna@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/mhprasanna-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/20"
              >
                <Github className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-sm text-blue-100">GitHub</div>
                  <div className="text-sm">@mhprasanna-spec</div>
                </div>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="rounded-2xl px-8 bg-white text-blue-600 hover:bg-blue-50"
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
                className="rounded-2xl px-8 bg-transparent text-white border-white hover:bg-white/10"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-sm text-blue-200 mt-8">
          © 2026 Prasanna Waghmare. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
}