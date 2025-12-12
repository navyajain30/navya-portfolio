"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let orbs: Orb[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // --- Floating Orbs for "Magic" Depth ---
    class Orb {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.radius = Math.random() * 100 + 50 // Large blurred orbs

        // Random primary/secondary colors
        const colors = [
          "rgba(168, 85, 247, 0.05)", // Primary low opacity
          "rgba(45, 212, 191, 0.05)", // Secondary low opacity
          "rgba(56, 189, 248, 0.05)"  // Blue accented
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]

        this.speedX = (Math.random() - 0.5) * 0.2
        this.speedY = (Math.random() - 0.5) * 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x < -this.radius) this.x = canvas!.width + this.radius
        if (this.x > canvas!.width + this.radius) this.x = -this.radius
        if (this.y < -this.radius) this.y = canvas!.height + this.radius
        if (this.y > canvas!.height + this.radius) this.y = -this.radius
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // --- Network Particles ---
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.4 - 0.2
        this.speedY = Math.random() * 0.4 - 0.2
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Mouse interaction could be added here for more "magic"

        if (canvas) {
          if (this.x > canvas.width) this.x = 0
          if (this.x < 0) this.x = canvas.width
          if (this.y > canvas.height) this.y = 0
          if (this.y < 0) this.y = canvas.height
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(168, 85, 247, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      orbs = []

      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }

      const numberOfOrbs = 5
      for (let i = 0; i < numberOfOrbs; i++) {
        orbs.push(new Orb())
      }
    }

    const connectParticles = () => {
      if (!ctx) return
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = 0.1 * (1 - distance / 100)
            ctx.strokeStyle = `rgba(45, 212, 191, ${opacity})` // Teal connection
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw Orbs first (background layer)
      for (const orb of orbs) {
        orb.update()
        orb.draw()
      }

      // Draw Particles and connections
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }
      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    init()
    animate()

    window.addEventListener("resize", () => {
      resizeCanvas()
      init()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-black pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />
    </div>
  )
}
