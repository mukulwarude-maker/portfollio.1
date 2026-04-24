import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { ArchitectureSection } from "./components/architecture-section";
import { TrainingSection } from "./components/training-section";
import { CertificationsSection } from "./components/certifications-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ArchitectureSection />
        <TrainingSection />
        <CertificationsSection />
        <BlogSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}
