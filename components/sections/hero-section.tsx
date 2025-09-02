"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { AuroraBackground } from "@/components/effects/aurora-background"

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/archives/CV/Daniel-Ignacio-Uribe-Pulgar-CV.pdf"
    link.download = "Daniel-Ignacio-Uribe-Pulgar-CV.pdf"
    link.click()
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-balance">
              <span className="text-foreground">Hola, soy </span>
              <span className="text-primary animate-glow">Daniel Uribe</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6 text-pretty">
              Full-Stack Developer Junior
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Especializado en crear soluciones web modernas con React, JavaScript, Java y Spring Boot. Transformo ideas
              en experiencias digitales funcionales y atractivas.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" onClick={scrollToProjects} className="text-lg px-8 py-6 animate-glow">
              Ver Mi Trabajo
            </Button>
            <Button variant="outline" size="lg" onClick={handleDownloadCV} className="text-lg px-8 py-6 bg-transparent">
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="https://github.com/FoTrix" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="https://linkedin.com/in/daniel-uribe-pulgar" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12" asChild>
              <a href="mailto:duribepulgar@gmail.com" aria-label="Enviar email a duribepulgar@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
