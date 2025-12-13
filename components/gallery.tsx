"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { SectionHeader, FadeIn } from "@/components/ui/scroll-animation"
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

// Enhanced collection with storytelling content
const galleryImages = [
    {
        id: 1,
        src: "/gallery-1.jpg",
        title: "Hack India Finals",
        caption: "The moment we realized we made the Top 11 out of 1000+ teams. Exhausted, fueled by caffeine, but absolutely buzzing with adrenaline before the final pitch."
    },
    {
        id: 2,
        src: "/gallery-2.jpg",
        title: "A Moment of Pride",
        caption: "Receiving a special award from Dr. Ashok Chitkara Sir. A perfect score, a cash prize, and a Carvaan speaker—grateful for the mentorship and the appreciation of my hard work."
    },
    {
        id: 3,
        src: "/gallery-3.jpg",
        title: "Campus Workshop",
        caption: "Mentoring juniors on the fundamentals of React and modern web development."
    },
    {
        id: 4,
        src: "/gallery-4.jpg",
        title: "Commanding the Stage",
        caption: "The defining moment as Team Lead: breaking down our system architecture for the judges. Nervous energy turned into pure focus as I defended our vision."
    },
    {
        id: 5,
        src: "/gallery-5.jpg",
        title: "Leading the Finalists",
        caption: "The exact moment we realized we survived the biggest elimination. Leading this team from a sea of 100+ entries down to the final 24 felt like absolute victory."
    },
    {
        id: 6,
        src: "/gallery-6.jpg",
        title: "Project Demo",
        caption: "Showcasing the project real-time capabilities to faculty."
    },
    {
        id: 7,
        src: "/gallery-7.jpg",
        title: "Community Meetup",
        caption: "Connecting with fellow developers at the finale Group meet."
    },
    {
        id: 8,
        src: "/gallery-8.jpg",
        title: "Roots of Innovation",
        caption: "Field visit to Karnal Agro Research Centre. Stepping away from the IDE to understand the real-world variables of agriculture"
    },
    {
        id: 9,
        src: "/gallery-9.jpg",
        title: "Planting Happiness",
        caption: "Planting Trees at the yellow point farm with my friends."
    },
    {
        id: 10,
        src: "/gallery-10.jpg",
        title: "The Speed Run",
        caption: "Secured the win at the Blockchain Bootcamp for being the fastest to deploy the smart contract. Time was ticking, but the logic held up perfectly."
    },
    {
        id: 11,
        src: "/gallery-11.jpg",
        title: "Research Symposium",
        caption: "Poster presentation of my paper on AI-driven climate forecasting."
    },
    {
        id: 12,
        src: "/gallery-12.jpg",
        title: "The Winning Shot",
        caption: "Won 'Best Photograph' at the Telos Bootcamp. This candid moment captured the energy perfectly—even Twitter agreed."
    },
    {
        id: 13,
        src: "/gallery-13.jpg",
        title: "The Hackathon Haul",
        caption: "Received so many tokens of appreciation for our project. The validation (and the swag) makes the sleepless nights worth it."
    },
    {
        id: 14,
        src: "/gallery-14.jpg",
        title: "Milestone Celebration",
        caption: "Celebrating the successful completion of the hackathon."
    },
]

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

    return (
        <section id="gallery" className="py-24 px-4 bg-secondary/5">
            <div className="max-w-[1600px] mx-auto">
                <SectionHeader
                    title="Gallery"
                    subtitle="Highlights from my journey in tech, hackathons, and community events."
                    className="mb-12"
                />

                <FadeIn direction="up">
                    {/* CSS Masonry Layout */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 mx-auto">
                        {galleryImages.map((image, idx) => (
                            <motion.div
                                key={image.id}
                                layoutId={`gallery-card-${image.id}`}
                                className="break-inside-avoid relative group overflow-hidden rounded-xl bg-muted cursor-zoom-in"
                                onClick={() => setSelectedImage(image)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                            >
                                <div className="relative w-full">
                                    <Image
                                        src={image.src}
                                        alt={image.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Modern Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {image.title}
                                    </h3>
                                    <p className="text-white/80 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {image.caption}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </FadeIn>

                {/* Shadcn Dialog Lightbox */}
                <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                    <DialogContent className="max-w-5xl bg-black/95 border-none text-white p-0 overflow-hidden w-[95vw] h-[90vh] max-h-[90vh]">
                        <VisuallyHidden>
                            <DialogTitle>{selectedImage?.title}</DialogTitle>
                            <DialogDescription>{selectedImage?.caption}</DialogDescription>
                        </VisuallyHidden>

                        <div className="relative w-full h-full flex flex-col">
                            {/* Close Button styling override */}
                            <DialogClose className="absolute right-4 top-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors">
                                <X className="w-6 h-6" />
                            </DialogClose>

                            <div className="flex-1 relative flex items-center justify-center bg-black min-h-0">
                                {selectedImage && (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={selectedImage.src}
                                            alt={selectedImage.title}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="p-6 bg-black/50 backdrop-blur-md absolute bottom-0 left-0 right-0">
                                <h3 className="text-2xl font-bold mb-2">{selectedImage?.title}</h3>
                                <p className="text-gray-300">{selectedImage?.caption}</p>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}
