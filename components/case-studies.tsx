"use client"

import { motion } from "framer-motion"
import { ArrowRight, Lightbulb, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
    {
        title: "Human Scream Detection System",
        category: "AI & Public Safety",
        description: "Developing a highly accurate audio analysis system for public safety monitoring in real-time.",
        stats: [
            { label: "Accuracy", value: "95%", icon: Zap },
            { label: "Latency", value: "<100ms", icon: TrendingUp },
        ],
        content: {
            problem: "Traditional surveillance systems rely heavily on visual data, which can be obstructed or delayed. Audio distress signals often go unnoticed.",
            solution: "Built a lightweight deep learning model (CNN) combined with MFCC feature extraction to classify human screams from background noise in real-time.",
        },
        image: "/audio-waveform-analysis-ai-detection-dashboard.jpg"
    },
    {
        title: "HerCare360+ Platform",
        category: "HealthTech",
        description: "A comprehensive women's wellness platform focusing on data privacy and accessible health tracking.",
        stats: [
            { label: "Users", value: "15k+", icon: Lightbulb },
            { label: "Retention", value: "+40%", icon: TrendingUp },
        ],
        content: {
            problem: "Women's health data is often fragmented or insecurely stored. Users lacked a unified platform for tracking cycles, symptoms, and medical history.",
            solution: "Architected a secure, encrypted NoSQL database schema and built a modular React frontend to ensure data privacy while delivering personalized health insights.",
        },
        image: "/women-health-app-dashboard-pink-purple-gradient.jpg" // Reusing placeholder
    }
]

export default function CaseStudies() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold mb-4"
                    >
                        Featured <span className="text-primary">Case Studies</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </div>

                <div className="space-y-24">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group">
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px] transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div>
                                    <span className="text-primary font-bold tracking-wider text-sm uppercase">{study.category}</span>
                                    <h3 className="text-3xl font-bold mt-2 mb-4">{study.title}</h3>
                                    <p className="text-xl text-muted-foreground leading-relaxed">
                                        {study.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    {study.stats.map((stat) => (
                                        <div key={stat.label} className="p-4 rounded-xl bg-card border border-border">
                                            <stat.icon className="w-6 h-6 text-primary mb-2" />
                                            <div className="text-2xl font-bold">{stat.value}</div>
                                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4 pt-4 border-t border-border">
                                    <div>
                                        <h4 className="font-semibold mb-1">The Challenge</h4>
                                        <p className="text-muted-foreground text-sm">{study.content.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">The Solution</h4>
                                        <p className="text-muted-foreground text-sm">{study.content.solution}</p>
                                    </div>
                                </div>

                                <Button variant="link" className="px-0 text-primary group-hover:text-primary/80">
                                    Read Full Case Study <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
