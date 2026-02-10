import Image from "next/image"
import { ArrowDown, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:gap-16 lg:py-0">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Welcome
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            {"Hi, I'm "}
            <span className="text-primary">Jaypal Patel</span>
          </h1>
          <p className="mt-4 font-heading text-lg font-medium text-muted-foreground sm:text-xl">
            Data Scientist and Economist
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            I analyze data, build models, and turn economic insights into actionable decisions.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4" />
                View My Work
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Photo */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-card shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Image
              src="/hero-photo.jpg"
              alt="Jaypal Patel, Data Scientist and Economist"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
        </div>
      </div>
    </section>
  )
}
