import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import AboutSection from "./components/about-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient-xy" />
      <div className="relative">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <Link className="mr-6 flex items-center space-x-2" href="/">
                <span className="hidden font-bold sm:inline-block">John.dev</span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link href="/#about" className="transition-colors hover:text-foreground/80">
                  About
                </Link>
                <Link href="/#projects" className="transition-colors hover:text-foreground/80">
                  Projects
                </Link>
                <Link href="/#tech-stack" className="transition-colors hover:text-foreground/80">
                  Tech Stack
                </Link>
                <Link href="/#contact" className="transition-colors hover:text-foreground/80">
                  Contact
                </Link>
              </nav>
            </div>
            <Button variant="outline" className="ml-auto">
              Resume
            </Button>
          </div>
        </header>

        <main className="container px-4 md:px-6 mx-auto">
          <section className="py-12 md:py-24 lg:py-32 xl:py-40">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient">
                    Full Stack Developer & <br className="hidden sm:inline" />
                    Software Architect
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                    Crafting innovative digital solutions with cutting-edge technologies. Specialized in building
                    scalable applications, cloud architecture, and creating exceptional user experiences.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <Link href="#projects">
                      <Button variant="default" size="lg">
                        View Projects
                      </Button>
                    </Link>
                    <Link href="#contact">
                      <Button variant="outline" size="lg">
                        Contact Me
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  <Link href="https://github.com" target="_blank">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:hello@example.com">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <AboutSection />

          <section id="projects" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce Platform"
                  description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                  image="/ecom.webp"
                  link="https://github.com"
                  tags={["Next.js", "Prisma", "Stripe"]}
                />
                <ProjectCard
                  title="Task Management App"
                  description="A real-time task management application with team collaboration features."
                  image="/Task.webp"
                  link="https://github.com"
                  tags={["React", "Node.js", "Socket.io"]}
                />
                <ProjectCard
                  title="AI Chat Interface"
                  description="An AI-powered chat interface with natural language processing capabilities."
                  image="/chat.jpg"
                  link="https://github.com"
                  tags={["OpenAI", "Next.js", "TailwindCSS"]}
                />
              </div>
            </div>
          </section>

          <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Tech Stack
              </h2>
              <TechStack />
            </div>
          </section>

          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                  Get in Touch
                </h2>
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">About</h3>
                <p className="text-sm text-muted-foreground">
                  Building the future of web applications with modern technologies and best practices.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="https://github.com" className="text-sm text-muted-foreground hover:text-primary">
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link href="https://linkedin.com" className="text-sm text-muted-foreground hover:text-primary">
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com" className="text-sm text-muted-foreground hover:text-primary">
                      Twitter
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground">Email: hello@example.com</li>
                  <li className="text-sm text-muted-foreground">Location: San Francisco, CA</li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} CrysoLabs. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
