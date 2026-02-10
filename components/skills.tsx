const skillGroups = [
  {
    category: "Data Science",
    skills: ["Python", "R", "Pandas", "NumPy", "Machine Learning", "Deep Learning"],
  },
  {
    category: "Visualization & Analytics",
    skills: ["Data Visualization", "Tableau", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    category: "Economics",
    skills: ["Econometrics", "Statistical Modeling", "Time Series", "Causal Inference"],
  },
  {
    category: "Tools & Infrastructure",
    skills: ["SQL", "Git", "Docker", "Jupyter", "AWS", "Spark"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          What I work with
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          {"Skills & Technologies"}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
