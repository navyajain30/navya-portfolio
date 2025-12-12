"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Professor, Chitkara University",
        content: "Navya is an exceptional student with a rare ability to bridge the gap between theoretical AI concepts and practical application. Her research on climate grid forecasting was impressive.",
        image: "/placeholder-user.jpg"
    },
    {
        name: "Sarah Williams",
        role: "Product Manager, TechCorp",
        content: "Working with Navya on the HerCare360+ project was a delight. She writes clean, maintainable code and always keeps the user experience at the forefront of her development decisions.",
        image: "/placeholder-user.jpg"
    },
    {
        name: "Amit Patel",
        role: "Hackathon Teammate",
        content: "Navya's leadership and quick problem-solving skills were crucial to our success at Hack India. She stays calm under pressure and delivers high-quality work efficiently.",
        image: "/placeholder-user.jpg"
    }
]

export default function Testimonials() {
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
                        What People <span className="text-primary">Say</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative p-8 rounded-2xl bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300"
                        >
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10" />

                            <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-secondary font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
