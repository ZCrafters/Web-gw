"use client"

type SkillsMarqueeProps = {
  items: string[]
}

export function SkillsMarquee({ items }: SkillsMarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-border/40 py-4">
      <div className="marquee-track">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center border border-white/20 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-foreground/80 clipped-btn"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

