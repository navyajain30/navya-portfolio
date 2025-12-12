"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, FileText, Mail } from "lucide-react"

const floatingIcons = [
  {
    name: "React",
    color: "#61DAFB",
    path: "M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-9.82-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51-.29-.51m9.82-4.51.29-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.3-.51m-9.82.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51.29.51M16.62 20c.63-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9 1.59 1.5 2.97 2.08 3.59 1.7",
  },
  {
    name: "Python",
    color: "#3776AB",
    path: "M12 2C6.48 2 6 4.02 6 5.5v2.25h6V9H4.5C2.68 9 1 10.19 1 12.5s1.68 4.5 3.5 4.5h2v-2.62c0-1.96 1.69-3.63 3.65-3.63h5.7c1.76 0 3.15-1.43 3.15-3.15V5.5C19 3.46 17.37 2 12 2zm-2.25 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM12 22c5.52 0 6-2.02 6-3.5v-2.25h-6V15h7.5c1.82 0 3.5-1.19 3.5-3.5s-1.68-4.5-3.5-4.5h-2v2.62c0 1.96-1.69 3.63-3.65 3.63h-5.7c-1.76 0-3.15 1.43-3.15 3.15v2.1C5 20.54 6.63 22 12 22zm2.25-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
  },
  {
    name: "Node.js",
    color: "#339933",
    path: "M12 1.85c-.27 0-.55.07-.78.2L3.78 6.35c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.23.13.51.2.78.2s.55-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z",
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    path: "M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15z",
  },
]

function FloatingIcon({
  icon,
  delay,
  position,
}: { icon: (typeof floatingIcons)[0]; delay: number; position: { x: number; y: number } }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 1, duration: 0.5 }}
      className="absolute z-10"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4 + delay,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center shadow-lg"
        style={{ boxShadow: `0 0 20px ${icon.color}30` }}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill={icon.color}>
          <path d={icon.path} />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const iconPositions = [
    { x: -15, y: 10 },
    { x: 105, y: 20 },
    { x: -10, y: 75 },
    { x: 100, y: 80 },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-secondary mb-4 text-lg"
            >
              Hello, World!
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance"
            >
              {"Hi, I'm "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Navya Jain
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-6"
            >
              AI & Full-Stack Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              I build intelligent, responsive, and modern web apps using React, Node.js, and AI-powered tools.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                <a href="/resume" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <Button variant="outline" asChild className="border-primary/50 hover:bg-primary/10 bg-transparent">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Floating tech icons */}
              {floatingIcons.map((icon, index) => (
                <FloatingIcon key={icon.name} icon={icon} delay={index * 0.2} position={iconPositions[index]} />
              ))}

              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 bg-card">
                <img src="/navya-portrait.jpg" alt="Navya Jain" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
