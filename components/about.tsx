import { Coffee, BarChart3, TrendingUp, Code2 } from "lucide-react"

const interests = [
  { icon: Coffee, label: "Coffee", description: "Fueling late-night analysis sessions" },
  { icon: BarChart3, label: "Data Visualization", description: "Making data tell compelling stories" },
  { icon: TrendingUp, label: "Economic Research", description: "Uncovering patterns in markets" },
  { icon: Code2, label: "Coding", description: "Building tools that solve real problems" },
]

export function About() {
  return (
    <section id="about" className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Get to know me
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          About Me
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Bio */}
          <div className="flex flex-col gap-5">
            <p className="leading-relaxed text-muted-foreground">
              I&apos;m a data scientist and economist passionate about bridging
              the gap between complex data and real-world decision making.
              With a strong foundation in statistical modeling, machine learning,
              and economic theory, I bring a unique perspective to every project.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              My work focuses on applying quantitative methods to economic policy,
              market analysis, and predictive modeling. I believe that good data
              analysis is not just about numbers &mdash; it&apos;s about telling stories
              that drive meaningful action.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              When I&apos;m not crunching numbers, you&apos;ll find me exploring
              new datasets, reading about behavioral economics, or experimenting
              with the latest tools in the data science ecosystem.
            </p>
          </div>

          {/* Interests */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {interests.map((item) => (
              <div
                key={item.label}
                className="group flex flex-col gap-3 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
