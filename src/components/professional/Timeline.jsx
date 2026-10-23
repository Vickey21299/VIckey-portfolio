import { useEffect, useRef, useState } from 'react'
import Constellation from './Constellation.jsx'
import TimelineCard from './TimelineCard.jsx'

/** Laser track + scroll-driven beam (desktop centre / mobile left rail). */
function LaserSpine({ beamRef, className }) {
  return (
    <div className={`absolute top-4 bottom-12 w-[3px] timeline-laser-track z-0 pointer-events-none rounded-full ${className}`} aria-hidden="true">
      <div ref={beamRef} className="w-full timeline-laser-active rounded-full relative" style={{ height: '4%' }}>
        <div className="absolute -bottom-1 -left-[3.5px] w-3 h-3 rounded-full bg-emerald-300 timeline-laser-head" />
      </div>
    </div>
  )
}

/**
 * Filter transitions from the Stitch script: fade/slide out then display:none
 * after 220ms; display:flex then fade in after 30ms.
 */
function useFilterPresence(visible) {
  const [mounted, setMounted] = useState(visible)
  const [shown, setShown] = useState(visible)

  useEffect(() => {
    const timers = visible
      ? [setTimeout(() => setMounted(true), 0), setTimeout(() => setShown(true), 30)]
      : [setTimeout(() => setShown(false), 0), setTimeout(() => setMounted(false), 220)]
    return () => timers.forEach(clearTimeout)
  }, [visible])

  return { mounted, shown }
}

function TimelineRow({ item, index, visible, active, nodeRef }) {
  const { mounted, shown } = useFilterPresence(visible)
  const side = index % 2 === 0 ? 'left' : 'right'

  const node = (
    <div
      ref={nodeRef}
      className={`timeline-node absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-emerald-400 shadow-node-pulse z-20 order-1 md:order-2 cursor-pointer ${active ? 'active-node' : ''}`}
      aria-hidden="true"
    >
      <div className="pulse-halo absolute inset-0 rounded-full border border-emerald-400 pointer-events-none" />
      <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#4ade80]" />
    </div>
  )

  return (
    <article
      className="timeline-row relative flex flex-col md:flex-row items-center justify-between group"
      data-category={item.category}
      aria-label={`${item.company} — ${item.role}`}
      style={{
        display: mounted ? 'flex' : 'none',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(15px)',
      }}
    >
      {side === 'left' ? (
        <>
          <div className="w-full md:w-[46%] md:text-right pl-12 md:pl-0 pr-0 md:pr-10 order-2 md:order-1">
            <TimelineCard item={item} side="left" />
          </div>
          {node}
          <div className="hidden md:block w-[46%] order-3 pl-10">
            <Constellation data={item.constellation} />
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:block w-[46%] text-left pr-10 order-1">
            <Constellation data={item.constellation} />
          </div>
          {node}
          <div className="w-full md:w-[46%] text-left pl-12 md:pl-10 order-2 md:order-3">
            <TimelineCard item={item} side="right" />
          </div>
        </>
      )}
    </article>
  )
}

export default function Timeline({ items, filter }) {
  const containerRef = useRef(null)
  const desktopBeamRef = useRef(null)
  const mobileBeamRef = useRef(null)
  const nodeRefs = useRef([])
  const [activeNodes, setActiveNodes] = useState(() => items.map(() => false))

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const container = containerRef.current
      if (!container) return
      const rect = container.getBoundingClientRect()
      // Beam tip follows a line 60% down the viewport (same maths as Stitch).
      let progress = (window.innerHeight * 0.6 - rect.top) / rect.height
      progress = Math.max(0.04, Math.min(progress, 1))
      const height = `${progress * 100}%`
      if (desktopBeamRef.current) desktopBeamRef.current.style.height = height
      if (mobileBeamRef.current) mobileBeamRef.current.style.height = height

      const threshold = window.innerHeight * 0.65
      const next = items.map((_, i) => {
        const el = nodeRefs.current[i]
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.height > 0 && r.top + r.height / 2 <= threshold
      })
      setActiveNodes((prev) => (prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    // Re-measure once filtered rows have finished collapsing/expanding.
    const settle = setTimeout(update, 260)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      clearTimeout(settle)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [items, filter])

  return (
    <div
      ref={containerRef}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden"
      data-purpose="timeline-spine-container"
    >
      <LaserSpine beamRef={desktopBeamRef} className="hidden md:block left-1/2 -translate-x-1/2" />
      {/* Mobile rail sits under the nodes: container padding + the nodes' left-6. */}
      <LaserSpine beamRef={mobileBeamRef} className="md:hidden left-10 sm:left-12 -translate-x-1/2" />

      <div className="relative z-10 space-y-20 lg:space-y-28">
        {items.map((item, index) => (
          <TimelineRow
            key={item.id}
            item={item}
            index={index}
            visible={filter === 'all' || item.category === filter}
            active={activeNodes[index]}
            nodeRef={(el) => {
              nodeRefs.current[index] = el
            }}
          />
        ))}
      </div>
    </div>
  )
}
