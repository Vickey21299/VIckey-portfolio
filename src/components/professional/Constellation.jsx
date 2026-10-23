import { useRef } from 'react'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js'
import TechIcon from './TechIcons.jsx'

const FLOAT = { a: 'anim-float-a', b: 'anim-float-b', c: 'anim-float-c' }

function OrbitItem({ item }) {
  const large = item.size === 'lg'
  return (
    <div
      className={`floating-orbit-item ${FLOAT[item.float]} flex items-center gap-3 px-4 ${large ? 'py-2.5' : 'py-2'} rounded-xl bg-neutral-900/90 border border-emerald-500/30 shadow-md cursor-pointer`}
      style={{ transform: item.tilt }}
    >
      <TechIcon name={item.icon} className={large ? 'w-8 h-8 shrink-0' : 'w-7 h-7 shrink-0'} />
      <div>
        <span className={`block font-mono ${large ? 'text-sm' : 'text-xs'} font-bold text-white`}>{item.name}</span>
        {item.sub && <span className={`text-[10px] font-mono ${item.subAccent ? 'text-emerald-400' : 'text-neutral-400'}`}>{item.sub}</span>}
      </div>
    </div>
  )
}

/** Floating tech "constellation" beside each timeline card, with mouse parallax. */
export default function Constellation({ data }) {
  const ref = useRef(null)
  const reduceMotion = usePrefersReducedMotion()

  const handleMove = (e) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--px', ((e.clientX - rect.left) / rect.width - 0.5).toFixed(3))
    ref.current.style.setProperty('--py', ((e.clientY - rect.top) / rect.height - 0.5).toFixed(3))
  }
  const handleLeave = () => {
    if (!ref.current) return
    ref.current.style.setProperty('--px', '0')
    ref.current.style.setProperty('--py', '0')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="p-6 rounded-2xl border border-emerald-500/25 bg-black/60 backdrop-blur-md hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.18)] transition-all duration-300 relative overflow-hidden constellation-cluster"
    >
      <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="font-mono text-xs font-bold tracking-wider text-emerald-400 uppercase">{data.title}</span>
        </div>
        <span className="font-mono text-[10px] text-neutral-400 px-2 py-0.5 rounded bg-white/5 border border-white/10 whitespace-nowrap">{data.badge}</span>
      </div>
      <ul className="relative min-h-[190px] p-2 flex flex-wrap items-center justify-around gap-4" aria-label={`${data.title} technologies`}>
        {data.items.map((item, index) => (
          <li key={item.name} className="constellation-parallax" style={{ '--depth': ((index % 3) + 1) * 8 }}>
            <OrbitItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
