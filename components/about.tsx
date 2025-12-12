"use client"

import { GraduationCap, Trophy, Code2, Brain } from "lucide-react"
import { SectionHeader, StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/scroll-animation"

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech in Artificial Intelligence, Chitkara University",
  },
  {
    icon: Trophy,
    title: "Hackathon Finalist",
    description: "Top 11 in Hack India 2024 among 1000+ teams",
  },
  {
    icon: Brain,
    title: "ML Researcher",
    description: "Published research on AI-driven climate grid forecast",
  },
  {
    icon: Code2,
    title: "Full-Stack Developer",
    description: "React web apps, automation, conversational AI",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="About Me" />

        <FadeIn direction="left" className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              {"I'm a passionate "}
              <span className="text-primary font-medium">AI Developer</span> and{" "}
              <span className="text-secondary font-medium">Full-Stack Engineer</span> with a strong foundation in
              machine learning and modern web technologies. Currently pursuing my B.Tech in Artificial Intelligence at
              Chitkara University.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              My focus areas include <span className="text-foreground">real-time ML inference</span>,{" "}
              <span className="text-foreground">React web applications</span>,{" "}
              <span className="text-foreground">automation</span>,{" "}
              <span className="text-foreground">conversational AI</span>, and{" "}
              <span className="text-foreground">model optimization</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {"I'm driven by the challenge of building intelligent systems that solve real-world problems "}
              while maintaining exceptional user experiences and performance.
            </p>
          </div>

          {/* Highlight Cards */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <StaggerItem key={item.title}>
                <div className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  )
}

