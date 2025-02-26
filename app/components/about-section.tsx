import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none">
            <Card className="relative w-full h-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
            </Card>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hi, I'm John! I'm a passionate Full Stack Developer with over 5 years of experience in building web
                applications and digital experiences.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-xl mb-2">What I Do</h3>
                <p className="text-muted-foreground">
                  I specialize in building modern, responsive, and scalable web applications using cutting-edge
                  technologies. My expertise spans both frontend and backend development, with a strong focus on
                  creating exceptional user experiences.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">Experience</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 5+ years of professional development experience</li>
                  <li>• Led multiple successful projects from concept to deployment</li>
                  <li>• Worked with startups and enterprise clients</li>
                  <li>• Strong background in cloud architecture and DevOps</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="#contact">
                <Button variant="default">Get in Touch</Button>
              </Link>
              <Link href="#projects">
                <Button variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

