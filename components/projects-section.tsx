"use client"

import { Award, Code, Users } from "lucide-react"

const projects = [
  {
    title: "DECOMPE UI/UX Int. Competition",
    role: "Vice Committee",
    description:
      "Led media marketing and sponsorship direction, managed event publication, and coordinated brand collaborations.",
    icon: Award,
  },
  {
    title: "UTP Malaysia FinTech Project",
    role: "Student Exchange",
    description:
      "Co-developed Maza Finance, a Gen-Z focused financial literacy and investment learning prototype with an international team.",
    icon: Code,
  },
  {
    title: "Cyber University Student Org.",
    role: "Leadership Roles",
    description:
      "Contributed across media and information teams, music club leadership, and programming content initiatives.",
    icon: Users,
  },
]

export function ProjectsSection() {
  return (
    <section id="proyek" className="relative w-full py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30 overflow-hidden">
      <div className="absolute inset-0 z-0 hidden lg:block">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-35">
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95" />

      <div className="relative z-10">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">06 / Projects</span>
            <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">ORGANIZATION & PROJECTS</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Active involvement in international collaboration, student leadership, and creative initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <article key={project.title} className="liquid-glass p-8 flex h-full flex-col">
                <Icon className="mb-4 h-10 w-10 text-accent" />
                <h3 className="text-2xl font-[var(--font-bebas)] tracking-wide text-foreground">{project.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-accent">{project.role}</p>
                <p className="mt-6 text-sm leading-relaxed text-foreground/75">{project.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

