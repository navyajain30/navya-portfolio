"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Download, FileText, Eye, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showPreview, setShowPreview] = useState(false)

  const resumeUrl = "/navyaajain_resume.pdf"

  return (
    <section id="resume" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

          <div className="relative p-8 sm:p-12 rounded-2xl bg-card/50 backdrop-blur-md border border-primary/20">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Resume Preview Thumbnail */}
              <motion.div
                className="relative w-full sm:w-48 h-64 rounded-lg overflow-hidden border border-primary/30 bg-muted shrink-0 cursor-pointer group/preview"
                whileHover={{ scale: 1.02 }}
                onClick={() => setShowPreview(true)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-primary/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-muted-foreground">navyaajain_resume.pdf</p>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Download My Resume</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Get a comprehensive overview of my skills, experience, projects, and achievements. My resume
                  highlights my journey in AI development and full-stack engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25"
                  >
                    <a href={resumeUrl} download="navyaajain_resume.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 bg-transparent"
                    onClick={() => setShowPreview(true)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[80vh] bg-card rounded-2xl border border-border overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <Button size="icon" variant="outline" asChild className="bg-card/80 backdrop-blur-sm">
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setShowPreview(false)}
                  className="bg-card/80 backdrop-blur-sm"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <iframe src={resumeUrl} className="w-full h-full" title="Resume Preview" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
