import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary">Sobre Mí</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Desarrollador apasionado por crear soluciones innovadoras
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-0">
                  <div className="relative w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20">
                    <Image
                      src="/images/about/About.webp"
                      alt="Daniel Uribe - Full-Stack Developer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  ¡Hola! ✌🏼 Soy <strong className="text-primary">Daniel Uribe</strong>, un Desarrollador Full Stack
                  Junior formado en la Fundación Forge. Desde que conocí la programación, supe que quería dedicarme a
                  realizar soluciones que no solo funcionen, sino que supongan, además, un verdadero valor para los
                  usuarios finales.
                </p>

                <p className="text-lg leading-relaxed">
                  Soy una persona que le gusta aprender, estar en constante movimiento y experimentar con nuevas
                  tecnologías. Me gusta enfrentarme a retos que exigen análisis, lógica y creatividad; siempre estoy
                  buscando mejorar el resultado de lo que desarrolle.
                </p>

                <p className="text-lg leading-relaxed">
                  Me enfoco en el <strong className="text-primary">frontend</strong> para poder ofrecer experiencias
                  limpias e intuitivas, y en el <strong className="text-primary">backend</strong> para poder desarrollar
                  código eficiente, seguro y claro.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <Card className="border-primary/20">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">🎯 Enfoque</h3>
                    <p className="text-sm text-muted-foreground">
                      Experiencias de usuario excepcionales con código limpio y eficiente
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">🚀 Pasión</h3>
                    <p className="text-sm text-muted-foreground">
                      Aprendizaje continuo y experimentación con nuevas tecnologías
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
