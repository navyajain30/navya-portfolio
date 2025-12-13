"use client"

import { motion } from "framer-motion"
import { Code2, Layout, Database, Brain, Wrench, Users } from "lucide-react"
import { SectionHeader, StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/scroll-animation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    skills: ["PyTorch", "TensorFlow", "Pandas", "Scikit-learn", "RAG", "LLMs", "NLP", "Computer Vision"]
  },
  {
    title: "Frontend Development",
    icon: Layout,
    color: "from-purple-500 to-pink-500",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"]
  },
  {
    title: "Backend & Databases",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    color: "from-gray-500 to-slate-500",
    skills: ["Git", "Docker", "VS Code", "Vercel", "Postman"]
  },
  {
    title: "Soft Skills & Leadership",
    icon: Users,
    color: "from-pink-500 to-rose-500",
    skills: ["Leadership", "Communication", "Problem Solving", "Team Management", "Public Speaking", "Agile/Scrum"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Technical Proficiency"
          subtitle="A breakdown of my technical skills and tools."
        />

        <FadeIn direction="up">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <StaggerItem
                key={category.title}
                className="h-full"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-sm py-1 px-3 cursor-default hover:bg-primary/20 hover:text-primary transition-colors duration-300 border border-transparent hover:border-primary/20"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  )
}

