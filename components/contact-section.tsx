"use client"

import { Linkedin, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontak" className="relative w-full py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30">
      <div className="mx-auto max-w-4xl liquid-glass p-10 md:p-16 text-center">
        <h2 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          LET&apos;S <span className="text-accent">COLLABORATE</span>
        </h2>
        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          Open for internships, projects, and creative collaboration
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-10 text-sm text-foreground/80">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-accent" />
            <span>South Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-accent" />
            <span>zefanyawilliamszero@gmail.com</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:zefanyawilliamszero@gmail.com"
            className="clipped-btn border border-white/25 bg-white text-black px-8 py-3 text-xs uppercase tracking-[0.25em]"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/zefanya-williams-272415261/"
            target="_blank"
            rel="noreferrer"
            className="clipped-btn inline-flex items-center gap-2 border border-accent/40 bg-accent/90 px-8 py-3 text-xs uppercase tracking-[0.25em] text-accent-foreground"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

