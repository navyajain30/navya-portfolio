"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"

const projects = [
  {
    title: "HerCare360+",
    description:
      "Women's health analytics platform adopted by 15,000+ users. Features secure auth + modular NoSQL architecture. Improved user retention by 40%.",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    image: "/women-health-app-dashboard-pink-purple-gradient.jpg",
    highlights: ["15,000+ Users", "40% Retention Boost"],
  },
  {
    title: "Human Scream Detection",
    description:
      "Real-time scream detection system with 95% accuracy. Designed CNN + MFCC pipeline with WebSocket-based detection under 100ms. Reduced false alerts by 30%.",
    tech: ["Python", "TensorFlow", "MFCC", "Flask"],
    image: "/audio-waveform-analysis-ai-detection-dashboard.jpg",
    highlights: ["95% Accuracy", "<100ms Latency"],
  },
  {
    title: "Manzil – AI Travel Planner",
    description:
      "Intelligent travel planning application with integrated APIs for flight, hotel, and weather data. Optimized state management for faster responsiveness.",
    tech: ["React", "REST APIs", "Node.js"],
    image: "/travel-planner-app-map-interface-modern-ui.jpg",
    highlights: ["Multi-API Integration", "Smart Planning"],
  },
  {
    title: "StudyGuru 2.0",
    description:
      "AI-assisted study companion featuring notes generator, flashcards, and topic analyzer. Built with secure login and personalized dashboard using Gemini API.",
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    image: "/study-app-ai-flashcards-dashboard-modern-dark-them.jpg",
    highlights: ["AI-Powered", "Personalized Learning"],
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateX((y - centerY) / 10)
    setRotateY((centerX - x) / 10)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  return (
    <StaggerItem>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="group cursor-pointer"
      >
        <div className="relative rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 h-full">
          {/* Glow effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`}
          />

          {/* Image with skeleton loader */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-muted animate-pulse" />
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onLoad={(e) => {
                const target = e.target as HTMLImageElement
                target.previousElementSibling?.classList.add("hidden")
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          </div>

          {/* Content */}
          <div className="relative p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10 bg-transparent">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-muted">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="A showcase of my work in AI, machine learning, and full-stack development"
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

