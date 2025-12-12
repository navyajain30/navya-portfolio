"use client"

import { useState, useEffect } from "react"
import { Award, ExternalLink, GraduationCap, Building2, Brain, X, Maximize2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"

const certifications = [
    {
        title: "Introduction to HTML5",
        issuer: "University of Michigan",
        date: "2023",
        link: "/certificates/html5.pdf",
        icon: GraduationCap,
        color: "from-blue-600 to-yellow-400", // UMich colors approx
    },
    {
        title: "Programming for Everybody (Getting Started with Python)",
        issuer: "University of Michigan",
        date: "2023",
        link: "/certificates/python-basics.pdf",
        icon: GraduationCap,
        color: "from-blue-600 to-yellow-400",
    },
    {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "2024",
        link: "/certificates/python-data-science.pdf",
        icon: Building2, // IBM
        color: "from-blue-600 to-cyan-400",
    },
    {
        title: "Data Visualization with Python",
        issuer: "IBM",
        date: "2024",
        link: "/certificates/data-visualisation.pdf",
        icon: Building2,
        color: "from-purple-500 to-blue-500",
    },
    {
        title: "Generative AI: Elevate Your Data Science Career",
        issuer: "IBM",
        date: "2024",
        link: "/certificates/generative-ai.pdf",
        icon: Brain, // AI specific
        color: "from-indigo-500 to-purple-500",
    },
    {
        title: "What is Data Science?",
        issuer: "IBM",
        date: "2024",
        link: "/certificates/what-is-data-science.pdf",
        icon: Building2,
        color: "from-blue-500 to-sky-400",
    },
    {
        title: "Data Scientist Career Guide and Interview Preparation",
        issuer: "IBM",
        date: "2024",
        link: "/certificates/career-guide.pdf",
        icon: Building2,
        color: "from-emerald-500 to-teal-500",
    },
    {
        title: "Introduction to Applied Machine Learning",
        issuer: "AMII (University of Alberta)",
        date: "2023",
        link: "/certificates/applied-ml.pdf",
        icon: Brain, // ML
        color: "from-yellow-500 to-red-500", // Alberta colors approx
    },
]

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<string | null>(null)

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedCert(null)
        }
        window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [])

    return (
        <section id="certifications" className="py-20 px-4 bg-secondary/5">
            <div className="max-w-7xl mx-auto">
                <SectionHeader title="Certifications" />

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <StaggerItem
                            key={index}
                            className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg transition-all duration-300 group relative flex flex-col"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} p-2.5 group-hover:scale-110 transition-transform shadow-md`}>
                                    <cert.icon className="w-full h-full text-white" />
                                </div>
                                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50">
                                    {cert.date}
                                </span>
                            </div>

                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                                {cert.title}
                            </h3>

                            <p className="text-secondary font-medium text-sm mb-6 flex-grow">{cert.issuer}</p>

                            <div className="flex justify-end pt-4 border-t border-border/50 mt-auto">
                                <button
                                    onClick={() => setSelectedCert(cert.link)}
                                    className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 group-hover:scale-110 cursor-pointer"
                                    title="View Certificate"
                                >
                                    <Maximize2 className="w-5 h-5" />
                                </button>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* PDF Modal */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                            onClick={() => setSelectedCert(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-5xl h-[85vh] bg-background rounded-2xl shadow-2xl overflow-hidden border border-border"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Header */}
                                <div className="absolute top-0 left-0 right-0 h-12 bg-card/90 backdrop-blur border-b border-border flex items-center justify-end px-4 z-10">
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 rounded-full hover:bg-secondary transition-colors"
                                    >
                                        <X className="w-6 h-6 text-foreground" />
                                    </button>
                                </div>

                                {/* PDF Viewer */}
                                <iframe
                                    src={selectedCert}
                                    className="w-full h-full pt-12"
                                    title="Certificate PDF"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}



