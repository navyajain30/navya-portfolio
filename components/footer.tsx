"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm flex items-center gap-2"
          >
            © 2025 Navya Jain. Crafted with <Heart className="w-4 h-4 text-pink-500 inline" /> &{" "}
            <Coffee className="w-4 h-4 text-amber-500 inline" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/navyajain30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/navya-jain-09b366279"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:navyajain@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
