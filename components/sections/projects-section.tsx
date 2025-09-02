import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Full-Stack",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.",
    tech: ["React", "Spring Boot", "MySQL", "TailwindCSS"],
    status: "En desarrollo",
    github: "#",
    demo: "#",
  },
  {
    title: "Task Manager API",
    description: "API REST para gestión de tareas con autenticación JWT, CRUD completo y documentación con Swagger.",
    tech: ["Java", "Spring Boot", "JWT", "MySQL"],
    status: "Completado",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Personal",
    description:
      "Sitio web personal desarrollado con Astro y migrado a Next.js, con efectos visuales avanzados y formulario de contacto.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    status: "Completado",
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">Proyectos Destacados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Algunos de los proyectos en los que he trabajado, demostrando mis habilidades técnicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant={project.status === "Completado" ? "default" : "secondary"}
                      className={project.status === "Completado" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">¿Interesado en ver más proyectos o colaborar conmigo?</p>
            <Button size="lg" asChild>
              <a href="https://github.com/FoTrix" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Ver más en GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
