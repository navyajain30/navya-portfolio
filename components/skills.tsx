"use client"

import { motion } from "framer-motion"
import { Code, Layout, Server, Database, Brain } from "lucide-react"
import { SectionHeader, StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/scroll-animation"

const skillCategories = [
  {
    title: "Proficient Languages",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Java", level: 80 }
    ]
  },
  {
    title: "Frontend Development",
    icon: Layout,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "React.js / Next.js", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 / CSS3", level: 98 },
      { name: "Framer Motion", level: 85 }
    ]
  },
  {
    title: "Backend & Database",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "MongoDB", level: 90 },
      { name: "MySQL / SQL", level: 85 },
      { name: "REST APIs", level: 92 }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "TensorFlow / Keras", level: 85 },
      { name: "Scikit-Learn", level: 90 },
      { name: "OpenCV", level: 80 },
      { name: "NLP / Large Language Models", level: 82 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Technical Proficiency" />

        <FadeIn direction="right">
          <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {skillCategories.map((category, index) => (
              <StaggerItem
                key={category.title}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-foreground/90">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
      </div>
    </section>
  )
}

