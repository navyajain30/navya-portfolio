"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const responses: Record<string, string> = {
  hello: "Hi there! I'm Navya's portfolio assistant. How can I help you today?",
  hi: "Hello! Nice to meet you. Feel free to ask me about Navya's skills, projects, or experience!",
  hey: "Hey! Welcome to Navya's portfolio. What would you like to know?",
  skills:
    "Navya is skilled in Python, JavaScript, React, Node.js, TensorFlow, and more. She specializes in AI/ML and full-stack development!",
  projects:
    "Navya has built amazing projects like HerCare360+ (women's health platform), Human Scream Detection (real-time ML), Manzil (AI Travel Planner), and StudyGuru 2.0!",
  experience:
    "Navya is a B.Tech AI student at Chitkara University with hands-on experience in hackathons, research publications, and building production-ready applications.",
  contact:
    "You can reach Navya at navya30jain2005@gmail.com or connect on LinkedIn at linkedin.com/in/navya-jain-09b366279",
  education:
    "Navya is pursuing B.Tech in Artificial Intelligence at Chitkara University with a CGPA of 8.67. She completed her senior secondary at St. Mary's Convent Sr. Sec. School, Panipat.",
  achievements:
    "Navya achieved Top 11 at Hack India 2024, Top 50 at HackWithHer 2024, and has published research at ICTAES-24 conference!",
  resume:
    "You can download Navya's resume from the Resume section of this portfolio. Just scroll down or click on Resume in the navigation!",
  hercare:
    "HerCare360+ is a women's health analytics platform adopted by 15,000+ users. It features secure JWT authentication and improved user retention by 40%!",
  default:
    "I'm not sure about that, but feel free to explore the portfolio or contact Navya directly at navya30jain2005@gmail.com!",
}

function getResponse(message: string): string {
  const lowerMessage = message.toLowerCase()
  for (const [key, value] of Object.entries(responses)) {
    if (key !== "default" && lowerMessage.includes(key)) {
      return value
    }
  }
  return responses.default
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! I'm Navya Bot. Ask me anything about Navya's skills, projects, or experience!", isUser: false },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }])
    setInput("")

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(userMessage)
      setMessages((prev) => [...prev, { text: response, isUser: false }])
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/25"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[450px] rounded-2xl bg-card/95 backdrop-blur-lg border border-primary/30 shadow-2xl shadow-primary/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-secondary flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Ask Navya Bot</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.isUser
                        ? "bg-gradient-to-r from-primary to-secondary text-white rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-muted border-0"
                />
                <Button type="submit" size="icon" className="bg-gradient-to-r from-primary to-secondary">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
