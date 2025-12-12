"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Trophy, Award, BookOpen, Blocks, Heart, Star, Code, Briefcase } from "lucide-react"
import { SectionHeader, StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/scroll-animation"

const achievementsData = [
  {
    year: "2023",
    items: [
      {
        title: "Tech Journey Begins",
        subtitle: "First Steps",
        description: "Started my tech journey by writing my first Python program and developing a static 2 page website.",
        icon: Code,
        color: "from-teal-400 to-emerald-500",
      },
      {
        title: "Research Conference",
        subtitle: "ICTAES-24",
        description: "Participated in a research paper conference on technology and sustainability.",
        icon: BookOpen,
        color: "from-blue-400 to-indigo-500",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Rapid Project Development",
        subtitle: "2nd Semester Milestone",
        description: "Began second semester and moved into dynamic full stack projects and hackathons.",
        icon: Code,
        color: "from-indigo-500 to-blue-500",
      },
      {
        title: "Human Scream Detection",
        subtitle: "AI Audio Project",
        description: "Built a Human Scream Detection project using AI and audio machine learning.",
        icon: Award,
        color: "from-red-500 to-orange-500",
      },
      {
        title: "Hack India 2024",
        subtitle: "Top 11 / 1000+ Teams",
        description: "Achieved Top 11 out of 1000 plus teams in Hack India 2024.",
        icon: Trophy,
        color: "from-yellow-400 to-amber-600",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "Completed Web3 Bootcamp",
        subtitle: "5-Day Advanced Program",
        description: "Completed a 5 day Web3 bootcamp learning blockchain, smart contracts, and dApps.",
        icon: Blocks,
        color: "from-blue-500 to-cyan-500",
      },
      {
        title: "HerCare360 Hackathon",
        subtitle: "Participant & Contributor",
        description: "Contributed to the HerCare360 hackathon focusing on womens health analytics.",
        icon: Heart,
        color: "from-pink-500 to-rose-500",
      },
      {
        title: "Software Development Internship",
        subtitle: "1-Month Paid Program",
        description: "Completed a one month paid internship with hands on development and AI workflow experience.",
        icon: Briefcase,
        color: "from-emerald-500 to-green-500",
      },
      {
        title: "Building Manzil",
        subtitle: "Ongoing Project",
        description: "Building Manzil using full MERN stack, MAS systems, and automated workflows.",
        icon: Code,
        color: "from-violet-500 to-purple-500",
      },
      {
        title: "Skill Enhancement",
        subtitle: "Continuous Learning",
        description: "Improving problem solving and becoming stronger in full stack and AI workflow design.",
        icon: Star,
        color: "from-amber-400 to-yellow-500",
      },
    ],
  },
]

const MilestoneExplosion = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center z-50">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
        animate={{
          opacity: 0,
          scale: 1.5,
          x: (Math.random() - 0.5) * 120,
          y: (Math.random() - 0.5) * 120,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute w-2 h-2 rounded-full bg-primary/80 blur-[1px]"
      />
    ))}
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute w-24 h-24 rounded-full border-2 border-primary/50"
    />
  </div>
)

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeYear, setActiveYear] = useState("2023")

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.95], ["0%", "100%"])

  return (
    <section id="achievements" className="py-24 px-4 overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto relative">
        <SectionHeader
          title="Achievements"
          subtitle="A timeline of my growth, milestones, and technical breakthroughs."
          className="mb-16"
        />

        <FadeIn direction="left" className="flex gap-8 lg:gap-16 relative">

          {/* Left Spacer for Traveling Year Label */}
          <div className="w-24 md:w-32 lg:w-48 shrink-0 relative transition-all duration-300" />

          <div className="flex-1 relative pl-6 md:pl-12">

            {/* Timeline Line Container */}
            <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-border/40 rounded-full">
              {/* Fill Line */}
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-primary"
                style={{ height: lineHeight }}
              />

              {/* Traveling Year Label (Attached to lineHeight) */}
              <motion.div
                style={{ top: lineHeight }}
                className="absolute -left-[6px] -translate-y-1/2 w-0.5 h-0 flex items-center justify-end z-40 pointer-events-none"
              >
                {/* Container for Year Text - Positioned to the left */}
                <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 pr-2 md:pr-4">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={activeYear}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: "spring", stiffness: 300, damping: 25 }
                      }}
                      exit={{
                        opacity: 0,
                        y: -50,
                        scale: 0.8,
                        transition: { duration: 0.3 }
                      }}
                      className="text-3xl md:text-6xl font-bold bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent whitespace-nowrap origin-right relative"
                    >
                      {activeYear}
                      <MilestoneExplosion />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Moving Glowing Circle */}
            <div className="absolute left-0 top-6 bottom-6 w-0.5 pointer-events-none">
              <motion.div
                style={{ top: lineHeight }}
                className="absolute -left-[6px] -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary z-50 shadow-[0_0_20px_2px_rgba(var(--primary),0.6)]"
              >
                <div className="absolute inset-0 bg-primary animate-ping opacity-50 rounded-full" />
              </motion.div>
            </div>

            <div className="space-y-32 pb-12">
              {achievementsData.map((yearGroup) => (
                <motion.div
                  key={yearGroup.year}
                  initial="hidden"
                  whileInView="visible"
                  // Trigger when content is in the center
                  viewport={{ margin: "-40% 0px -40% 0px" }}
                  onViewportEnter={() => setActiveYear(yearGroup.year)}
                  className="relative"
                >
                  {/* Mobile Year Header - Removed to use the main travelling label on mobile too */}

                  <StaggerContainer className="space-y-10">
                    {yearGroup.items.map((item, index) => (
                      <StaggerItem key={index} className="relative group">
                        {/* Card */}
                        <div className="p-6 md:p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_4px_30px_-4px_rgba(var(--primary),0.15)] group-hover:translate-x-2">
                          <div className="flex items-start gap-6">
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              {item.subtitle && (
                                <p className="text-primary/90 font-medium text-sm mb-3 uppercase tracking-wide">{item.subtitle}</p>
                              )}
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
