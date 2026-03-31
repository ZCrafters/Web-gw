"use client"

import { Calendar, ChevronRight } from "lucide-react"

const experiences = [
  {
    role: "Intern / Magang",
    company: "Astra",
    period: "Completed",
    points: [
      "Supported day-to-day business operations and digital initiatives.",
      "Helped process operational data and efficiency reporting.",
      "Collaborated on practical corporate marketing execution.",
    ],
    featured: true,
  },
  {
    role: "Partner & Operations Manager",
    company: "Gegaiaan, Cakra Labs",
    period: "2025 - Present",
    points: [
      "Managed production, inventory, and fulfillment workflows.",
      "Produced product video and visual content for catalog and social channels.",
      "Built early-stage brand positioning and practical campaign direction.",
    ],
  },
  {
    role: "Data Entry Specialist",
    company: "Amartha Greentech Consultant",
    period: "2022 - Present",
    points: [
      "Handled freelance data-entry support for consulting research needs.",
      "Transferred field survey questionnaire data accurately into spreadsheet systems.",
    ],
  },
  {
    role: "Campus Ambassador",
    company: "Cyber University",
    period: "2023 - Present",
    points: [
      "Created short-form campus promotional content and interactive feeds.",
      "Presented campus marketing in schools to support new student acquisition.",
      "Documented key campus events and public activities.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="pengalaman" className="relative w-full py-24 pl-6 md:pl-28 pr-6 md:pr-12 overflow-hidden">
      <div className="absolute inset-0 z-0 hidden md:block">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover opacity-45">
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/65 to-black/90" />

      <div className="relative z-10">
        <div className="mb-16 md:mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Experience</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">PROFESSIONAL JOURNEY</h2>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
            A practical path across operations, content, data handling, and campus-led communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.company}`}
              className={`liquid-glass p-8 border-l-4 transition-transform hover:-translate-y-1 ${
                experience.featured ? "border-l-accent" : "border-l-white/30"
              }`}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-[var(--font-bebas)] tracking-wide text-foreground">{experience.role}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-accent">{experience.company}</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <Calendar size={12} /> {experience.period}
                </span>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-foreground/80">
                {experience.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <ChevronRight size={16} className="mt-1 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

