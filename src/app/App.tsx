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
    <div className="min-h-screen bg-white">
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
  );
}
