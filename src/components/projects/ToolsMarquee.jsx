import { Symbol } from '../Icons.jsx'

function ToolChip({ tool }) {
  return (
    <div className="tech-chip inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-emerald-500/30 flex-shrink-0">
      <Symbol name={tool.icon} className={tool.color} size={18} />
      <div className="font-mono text-xs leading-none">
        <span className="font-semibold block text-white">{tool.name}</span>
        <span className="text-[9px] text-emerald-400">{tool.sub}</span>
      </div>
    </div>
  )
}

/** Per-card "Tools & Platforms" ticker: 20s loop, pauses on hover. */
export default function ToolsMarquee({ tools }) {
  return (
    <div className="pt-2.5 border-t border-neutral-800/80">
      <div className="flex items-center justify-between gap-2 mb-1.5 px-0.5">
        <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span>TOOLS &amp; PLATFORMS ECOSYSTEM</span>
        </div>
        <span className="hidden sm:inline font-mono text-[10px] text-neutral-500">Auto-scrolling • Hover to pause</span>
      </div>
      <div className="marquee-container relative overflow-hidden rounded-xl bg-black/50 border border-emerald-500/20 py-1.5 px-1">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" aria-hidden="true" />
        {/* Two identical halves so the -50% keyframe loops seamlessly. */}
        <div className="marquee-track flex items-center">
          <ul className="flex items-center gap-2 pr-2" aria-label="Tools and platforms">
            {tools.map((tool) => (
              <li key={tool.name}>
                <ToolChip tool={tool} />
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 pr-2" aria-hidden="true">
            {tools.map((tool) => (
              <ToolChip key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
