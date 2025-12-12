"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2, X } from "lucide-react"
import { SectionHeader } from "@/components/ui/scroll-animation"

// Complete collection of 14 images
const galleryImages = [
    { id: 1, src: "/gallery-1.jpg", span: "md:col-span-2 md:row-span-2", title: "Achievement" },
    { id: 2, src: "/gallery-2.jpg", span: "md:col-span-1 md:row-span-1", title: "Teamwork" },
    { id: 3, src: "/gallery-3.jpg", span: "md:col-span-1 md:row-span-2", title: "Impact" },
    { id: 4, src: "/gallery-4.jpg", span: "md:col-span-1 md:row-span-1", title: "Focus" },
    { id: 5, src: "/gallery-5.jpg", span: "md:col-span-2 md:row-span-1", title: "Vision" },
    { id: 6, src: "/gallery-6.jpg", span: "md:col-span-1 md:row-span-1", title: "Unity" },
    { id: 7, src: "/gallery-7.jpg", span: "md:col-span-1 md:row-span-2", title: "Leadership" },
    { id: 8, src: "/gallery-8.jpg", span: "md:col-span-2 md:row-span-2", title: "Innovation" },
    { id: 9, src: "/gallery-9.jpg", span: "md:col-span-1 md:row-span-1", title: "Dedication" },
    { id: 10, src: "/gallery-10.jpg", span: "md:col-span-2 md:row-span-1", title: "Success" },
    { id: 11, src: "/gallery-11.jpg", span: "md:col-span-1 md:row-span-1", title: "Collaboration" },
    { id: 12, src: "/gallery-12.jpg", span: "md:col-span-1 md:row-span-2", title: "Growth" },
    { id: 13, src: "/gallery-13.jpg", span: "md:col-span-1 md:row-span-1", title: "Community" },
    { id: 14, src: "/gallery-14.jpg", span: "md:col-span-2 md:row-span-1", title: "Excellence" },
]

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    return (
        <section id="gallery" className="py-24 px-4 bg-background">
            <div className="max-w-[1400px] mx-auto">
                {/* Clean Header */}
                <SectionHeader
                    title="Portfolio"
                    subtitle="A curated selection of moments, achievements, and creative endeavors."
                    className="flex flex-col md:flex-row justify-between items-end gap-6 md:text-left"
                    centered={false}
                />

                {/* Modern Masonry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {galleryImages.map((image, idx) => (
                        <motion.div
                            key={image.id}
                            layoutId={`card-${image.id}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                            className={`relative group overflow-hidden rounded-xl bg-muted ${image.span}`}
                            onClick={() => setSelectedImage(image.id)}
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                loading="lazy"
                            />

                            {/* Minimal Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                                <Maximize2 className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 delay-100" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors">
                                <X className="w-8 h-8" />
                            </button>

                            <motion.div
                                layoutId={`card-${selectedImage}`}
                                className="relative max-w-5xl max-h-[90vh] rounded-lg overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={galleryImages.find(img => img.id === selectedImage)?.src}
                                    alt="Full view"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
