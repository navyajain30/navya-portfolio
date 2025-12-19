"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const greetings = [
    "Hola 👋",
    "Namaste 🙏",
    "Hello 🌍",
    "Bonjour 🌞",
    "Ciao 👋",
    "こんにちは 🇯🇵",
]

export function LoadingIntro() {
    const [index, setIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev === greetings.length - 1) {
                    clearInterval(interval)
                    // Start exit animation after the last greeting
                    setTimeout(() => setIsVisible(false), 800)
                    return prev
                }
                return prev + 1
            })
        }, 500) // Rotate every 500ms

        return () => clearInterval(interval)
    }, [])

    if (!isVisible) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-3xl"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Ambient Background Glow */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[120px]" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px]" />
                    </div>

                    <div className="relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={greetings[index]}
                                initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, scale: 1.1, filter: "blur(10px)" }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight text-center px-4"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                    {greetings[index]}
                                </span>
                            </motion.h1>
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
