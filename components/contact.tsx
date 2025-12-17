"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Mail, Github, Linkedin, Send, CheckCircle, Loader2, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionHeader, FadeIn } from "@/components/ui/scroll-animation"

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:navya30jain2005@gmail.com",
    value: "navya30jain2005@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/navyajain30",
    value: "github.com/navyajain30",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/navya-jain-09b366279",
    value: "navya-jain-09b366279",
    color: "from-blue-500 to-blue-700",
  },

]

function RippleButton({ children, className, ...props }: React.ComponentProps<typeof Button>) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
  }

  return (
    <Button {...props} className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
      {children}
    </Button>
  )
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formState.name.trim()) newErrors.name = "Name is required"
    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Invalid email address"
    }
    if (!formState.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    // Send data to API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", message: "" })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error(error)
      alert("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />

        <FadeIn direction="up" className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your name"
                  className="mt-2 bg-card/50 border-border focus:border-primary transition-colors"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your@email.com"
                  className="mt-2 bg-card/50 border-border focus:border-primary transition-colors"
                />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="mt-2 bg-card/50 border-border focus:border-primary resize-none transition-colors"
                />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
              </div>

              <RippleButton
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/20"
                disabled={isSubmitting || isSubmitted}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </motion.span>
                  ) : isSubmitted ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Message Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </RippleButton>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card/30 backdrop-blur-md border border-primary/20 mb-6 shadow-md hover:shadow-primary/10 transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-secondary">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">Chandigarh, India</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-card/30 backdrop-blur-md border border-primary/20 shadow-md hover:shadow-primary/10 transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-foreground">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Phone" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group border border-transparent hover:border-primary/30"
                    whileHover={{ x: 8, scale: 1.02 }}
                  >
                    <motion.div className={`p-2 rounded-lg bg-gradient-to-r ${link.color}`} whileHover={{ rotate: 10 }}>
                      <link.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 shadow-lg shadow-primary/5">
              <h3 className="text-lg font-bold mb-2 text-foreground">{"Let's Build Something Amazing"}</h3>
              <p className="text-muted-foreground text-sm">
                {
                  "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                }
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

