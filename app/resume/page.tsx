"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
    const resumeUrl = "/navyaajain_resume.pdf"

    return (
        <main className="min-h-screen flex flex-col bg-background">
            {/* Header / Toolbar */}
            <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between mx-auto px-4">
                    <Button variant="ghost" asChild className="gap-2">
                        <Link href="/">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Portfolio
                        </Link>
                    </Button>

                    <Button asChild className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                        <a href={resumeUrl} download="navyaajain_resume.pdf">
                            <Download className="h-4 w-4" />
                            Download Resume
                        </a>
                    </Button>
                </div>
            </header>

            {/* PDF View Area */}
            <div className="flex-1 w-full bg-muted/30 p-4 md:p-8 flex items-center justify-center">
                <div className="w-full max-w-5xl h-[calc(100vh-8rem)] rounded-xl shadow-2xl overflow-hidden border border-border bg-white">
                    <iframe
                        src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full"
                        title="Navya Jain Resume"
                    />
                </div>
            </div>
        </main>
    )
}
