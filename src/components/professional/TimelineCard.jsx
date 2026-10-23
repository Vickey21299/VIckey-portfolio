import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import { useReveal } from '../../hooks/useReveal.js'
import RichText from '../RichText.jsx'

function TechPill({ pill }) {
  if (pill.accent) {
    return (
      <li className="tech-pill px-2.5 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 font-bold">
        {pill.label}
      </li>
    )
  }
  return (
    <li className={`tech-pill px-2.5 py-1 text-xs font-mono bg-neutral-800/90 text-neutral-300 rounded-md border border-neutral-700/60 ${pill.bold ? 'font-bold' : ''}`}>
      {pill.label}
    </li>
  )
}

/**
 * Experience card. `side="left"` mirrors the design's right-aligned layout on md+,
 * `side="right"` is left-aligned. Reveals on scroll and tilts in 3D under the cursor.
 */
export default function TimelineCard({ item, side }) {
  const [ref, revealed] = useReveal()
  const reduceMotion = usePrefersReducedMotion()
  const left = side === 'left'

  const handleMove = (e) => {
    const card = ref.current
    if (reduceMotion || !card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -4
    const rotateY = ((x - cx) / cx) * 4
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`
  }
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  const endAlign = left ? 'md:justify-end' : ''

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`timeline-card reveal-card ${left ? 'reveal-left' : 'reveal-right'} ${revealed ? 'is-revealed' : ''} bg-[#0c110e] border border-emerald-500/30 rounded-2xl p-6 lg:p-7 hover:border-emerald-500 transition-all duration-300`}
    >
      {/* Date / location badges */}
      <div className={`stagger-item stagger-1 flex flex-wrap items-center ${endAlign} gap-2 mb-3`}>
        {item.badges.map((badge) =>
          badge.tone === 'amber' ? (
            <span key={badge.label} className="inline-flex items-center px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-mono">
              {badge.label}
            </span>
          ) : (
            <span key={badge.label} className="inline-flex items-center px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold tracking-tight">
              {badge.label}
            </span>
          ),
        )}
        {item.location && <span className="text-xs font-mono text-neutral-400">{item.location}</span>}
      </div>

      {/* Logo + company */}
      <div className={`stagger-item stagger-2 flex items-center ${endAlign} gap-4 mb-2`}>
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ${item.logo.frame} border-2 border-emerald-500/40 flex-shrink-0 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_24px_rgba(34,197,94,0.4)] transition-all duration-300`}
        >
          <img alt={item.logo.alt} className={`w-full h-full ${item.logo.img}`} src={item.logo.src} width="80" height="80" loading="lazy" decoding="async" />
        </div>
        <div className={left ? 'text-left md:text-right' : ''}>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{item.company}</h3>
          <div className="text-xs font-mono text-emerald-500">{item.tagline}</div>
        </div>
      </div>

      <div className="stagger-item stagger-2 text-sm font-semibold font-mono text-emerald-400 mb-4">{item.role}</div>

      <ul className={`stagger-item stagger-3 text-sm text-neutral-300 space-y-2.5 leading-relaxed ${left ? 'md:text-right' : ''}`}>
        {item.bullets.map((bullet) => (
          <li key={bullet} className={`flex items-start ${left ? 'md:flex-row-reverse' : ''} gap-2`}>
            <span className="text-emerald-500 font-bold shrink-0" aria-hidden="true">
              •
            </span>
            <span>
              <RichText text={bullet} />
            </span>
          </li>
        ))}
      </ul>

      <ul className={`stagger-item stagger-4 mt-5 pt-4 border-t border-neutral-800/80 flex flex-wrap ${endAlign} gap-1.5`} aria-label="Tech stack">
        {item.tech.map((pill) => (
          <TechPill key={pill.label} pill={pill} />
        ))}
      </ul>
    </div>
  )
}
