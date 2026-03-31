"use client"

import { SkillsMarquee } from "@/components/skills-marquee"

const skillGroups = [
  {
    title: "Data & Analysis",
    accent: false,
    skills: ["Data Visualization", "Basic Data Analysis", "Statistical Understanding", "Reporting", "Google Sheets"],
  },
  {
    title: "Digital Marketing & Creative",
    accent: true,
    skills: ["Social Media Management", "Content Planning", "Copywriting", "Photography", "Video Editing", "Design"],
  },
  {
    title: "Programming & Tools",
    accent: false,
    skills: ["Python", "C++", "HTML/CSS", "Tableau", "Google Colab", "Jupyter", "VS Code", "GitHub"],
  },
]

export function SkillsSection() {
  return (
    <section id="keahlian" className="relative w-full py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30">
      <div className="mb-14">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">07 / Skills</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">EDUCATION & SKILLS</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        <div>
          <h3 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight">EDUCATION TIMELINE</h3>
          <div className="mt-8 border-l border-border/70 pl-8 space-y-8">
            <div className="relative">
              <div className="absolute -left-[38px] top-1 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
              <h4 className="text-xl font-[var(--font-bebas)] tracking-wide">Bachelor of Digital Business</h4>
              <p className="text-sm text-muted-foreground">Cyber University • 2023 - Present</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] top-2 h-2 w-2 rounded-full bg-white/40" />
              <h4 className="text-lg font-[var(--font-bebas)] tracking-wide">Digital Marketing & Content Creation</h4>
              <p className="text-sm text-accent">Mentorbox Indonesia (BNSP Certified) • 2024</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] top-2 h-2 w-2 rounded-full bg-white/40" />
              <h4 className="text-lg font-[var(--font-bebas)] tracking-wide">Certificate in Data Science</h4>
              <p className="text-sm text-muted-foreground">Green Academy • 2023</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h4
                className={`mb-4 text-xs uppercase tracking-[0.3em] ${
                  group.accent ? "text-accent/80" : "text-muted-foreground"
                }`}
              >
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`clipped-btn px-4 py-2 text-[11px] uppercase tracking-[0.2em] border ${
                      group.accent
                        ? "border-accent/40 bg-accent/15 text-accent"
                        : "border-white/20 bg-white/5 text-foreground/80"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <SkillsMarquee
          items={["portfolio", "content strategy", "brand system", "analytics", "video editing", "ui/ux", "web flow"]}
        />
      </div>
    </section>
  )
}

