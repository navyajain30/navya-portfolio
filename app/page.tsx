import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Gallery from "@/components/gallery"
import CaseStudies from "@/components/case-studies"
import Certifications from "@/components/certifications"
import Achievements from "@/components/achievements"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import ParticleBackground from "@/components/particle-background"
import ChatBot from "@/components/chat-bot"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Gallery />
      <Achievements />
      <Contact />
      <Footer />
      <BackToTop />
      <ChatBot />
    </main>
  )
}
