import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ConnectSection } from "@/components/connect-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ScrollIndicator } from "@/components/scroll-indicator"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ScrollIndicator />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ConnectSection />
      <Footer />
    </main>
  )
}
