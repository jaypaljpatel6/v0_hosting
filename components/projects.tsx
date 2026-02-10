import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Economic Policy Analysis",
    description:
      "Comprehensive analysis of fiscal and monetary policy impacts on regional economies using advanced econometric methods.",
    image: "/project-economic.jpg",
    tags: ["Python", "Econometrics", "Policy"],
  },
  {
    title: "Predictive Modeling",
    description:
      "Machine learning pipeline for forecasting economic indicators with high accuracy using ensemble methods.",
    image: "/project-predictive.jpg",
    tags: ["ML", "Scikit-learn", "Forecasting"],
  },
  {
    title: "Interactive Data Dashboard",
    description:
      "Real-time dashboard visualizing key economic metrics and trends for stakeholder decision-making.",
    image: "/project-dashboard.jpg",
    tags: ["React", "D3.js", "API"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Selected work
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          My Projects
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/5" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <Button variant="ghost" className="mt-4 w-fit gap-2 px-0 text-primary hover:bg-transparent hover:text-primary/80">
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
