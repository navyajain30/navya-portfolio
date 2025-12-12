"use client"

import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion"
import { useRef, ReactNode } from "react"

// --- Animation Variants ---

const headerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for "premium" feel
        }
    }
}

const underlineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 1.0,
            delay: 0.2,
            ease: "circOut"
        }
    }
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 20
        }
    }
}

// --- Components ---

interface SectionHeaderProps {
    title: string
    subtitle?: string
    centered?: boolean
    className?: string
}

export function SectionHeader({ title, subtitle, centered = true, className = "" }: SectionHeaderProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    // Split title for coloring (optional logic, can be customized)
    const parts = title.split(" ")
    const mainTitle = parts.slice(0, -1).join(" ")
    const highlight = parts[parts.length - 1]

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headerVariants}
            className={`mb-16 ${centered ? "text-center" : "text-left"} ${className}`}
        >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {parts.length > 1 ? (
                    <>
                        {mainTitle} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{highlight}</span>
                    </>
                ) : (
                    title
                )}
            </h2>
            <motion.div
                variants={underlineVariants}
                className={`h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full ${centered ? "mx-auto" : ""}`}
            />
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </motion.div>
    )
}

export function StaggerContainer({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15,
                        delayChildren: delay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children, className = "" }: { children: ReactNode, className?: string }) {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    )
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: { children: ReactNode, delay?: number, direction?: "up" | "down" | "left" | "right", className?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    // direction = destination direction?
    // "up" -> moves up (starts down: y=40 -> y=0) ?? 
    // Wait, let's stick to standard "FadeInFrom..." naming if possible or stick to current logic.
    // Current logic:
    // up: { y: 40 } -> starts positive Y (down), moves 0. This moves UP.
    // down: { y: -40 } -> starts negative Y (up), moves 0. This moves DOWN.
    // left: { x: 40 } -> starts positive X (right), moves 0. This moves LEFT. ("From Right")
    // right: { x: -40 } -> starts negative X (left), moves 0. This moves RIGHT. ("From Left")

    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 }
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...directionOffset[direction] }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ZoomIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ParallaxImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    const yQuicker = useTransform(scrollYProgress, [0, 1], [0, -50])

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.img
                src={src}
                alt={alt}
                style={{ y: yQuicker }}
                className="w-full h-full object-cover scale-110"
            />
        </div>
    )
}
