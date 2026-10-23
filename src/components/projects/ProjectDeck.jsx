import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Symbol } from '../Icons.jsx'
import ProjectCard from './ProjectCard.jsx'

/* Stack positions from the Stitch deck controller. */
const STACK = [
  { transform: 'translateY(0px) scale(1)', opacity: 1, zIndex: 30, filter: 'blur(0px)' },
  { transform: 'translateY(22px) scale(0.97)', opacity: 0.7, zIndex: 20, filter: 'blur(0.5px)' },
  { transform: 'translateY(44px) scale(0.94)', opacity: 0.4, zIndex: 10, filter: 'blur(1px)' },
]
const DEEP = { transform: 'translateY(66px) scale(0.91)', opacity: 0, zIndex: 1, filter: 'blur(2px)' }
const PASSED = { transform: 'translateY(-130%) scale(0.95) rotate(-3deg)', opacity: 0, zIndex: 40, filter: 'blur(2px)' }

const WHEEL_THRESHOLD = 25
const WHEEL_THROTTLE_MS = 600
const PEEK_SPACE = 48 // room for the two peeking cards below the active one

function positionFor(diff) {
  const base = diff < 0 ? PASSED : (STACK[diff] ?? DEEP)
  return { ...base, pointerEvents: diff === 0 ? 'auto' : 'none' }
}

const pad = (n) => String(n).padStart(2, '0')

function isTypingTarget(el) {
  if (!el) return false
  const tag = el.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable
}

export default function ProjectDeck({ projects }) {
  const total = projects.length
  const [active, setActive] = useState(0)
  const [deckHeight, setDeckHeight] = useState(null)
  const viewportRef = useRef(null)
  const cardRefs = useRef([])
  const activeRef = useRef(0)
  const inViewRef = useRef(false)
  const throttleRef = useRef(0)

  useEffect(() => {
    activeRef.current = active
  }, [active])

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= total) return
      activeRef.current = index
      setActive(index)
    },
    [total],
  )

  // Size the absolute-positioned deck to its tallest card (cards get much
  // taller on narrow screens), never smaller than the design's 640/600px.
  useLayoutEffect(() => {
    const measure = () => {
      const tallest = Math.max(0, ...cardRefs.current.map((el) => (el ? el.offsetHeight : 0)))
      const base = window.matchMedia('(min-width: 768px)').matches ? 600 : 640
      setDeckHeight(Math.max(base, tallest + PEEK_SPACE))
    }
    measure()
    const ro = new ResizeObserver(measure)
    cardRefs.current.forEach((el) => el && ro.observe(el))
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [total])

  // Track whether the deck occupies most of the screen (gates wheel + arrow keys).
  useEffect(() => {
    const el = viewportRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        const needed = Math.min(entry.boundingClientRect.height, window.innerHeight) * 0.6
        inViewRef.current = entry.isIntersecting && entry.intersectionRect.height >= needed
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Wheel / trackpad on the deck: step one card per gesture (600ms throttle,
  // |deltaY| > 25). At either end of the deck the page scrolls normally.
  useEffect(() => {
    const el = viewportRef.current
    if (!el) return undefined
    const onWheel = (e) => {
      if (!inViewRef.current) return
      const dir = Math.sign(e.deltaY)
      const current = activeRef.current
      const canMove = dir > 0 ? current < total - 1 : dir < 0 ? current > 0 : false
      if (!canMove) return
      e.preventDefault()
      const now = Date.now()
      if (now < throttleRef.current || Math.abs(e.deltaY) <= WHEEL_THRESHOLD) return
      throttleRef.current = now + WHEEL_THROTTLE_MS
      goTo(current + dir)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [goTo, total])

  // Arrow keys — only while the deck is in view or has focus, never while typing.
  useEffect(() => {
    const onKey = (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || isTypingTarget(e.target)) return
      const el = viewportRef.current
      const focused = el && el.contains(document.activeElement)
      if (!focused && !inViewRef.current) return
      const current = activeRef.current
      if ((e.key === 'ArrowDown' || e.key === 'ArrowRight') && current < total - 1) {
        e.preventDefault()
        goTo(current + 1)
      } else if ((e.key === 'ArrowUp' || e.key === 'ArrowLeft') && current > 0) {
        e.preventDefault()
        goTo(current - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goTo, total])

  return (
    <>
      <div
        ref={viewportRef}
        id="deck-viewport"
        className={`max-w-5xl mx-auto w-full relative select-none rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 ${
          deckHeight ? '' : 'h-[640px] md:h-[600px]'
        }`}
        style={deckHeight ? { height: deckHeight } : undefined}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Project deck. Use arrow keys, mouse wheel or the controls below to cycle systems."
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            project={project}
            index={index}
            total={total}
            isActive={index === active}
            style={positionFor(index - active)}
          />
        ))}
      </div>

      {/* Deck HUD & navigation */}
      <div className="max-w-5xl mx-auto w-full mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-2 text-neutral-400" aria-live="polite">
          <span className="text-emerald-400 font-bold">{pad(active + 1)}</span>
          <span>/</span>
          <span>{pad(total)} systems loaded</span>
        </div>

        <div className="order-3 w-full sm:order-none sm:w-auto flex items-center justify-center gap-1.5">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show system ${i + 1} of ${total}`}
              aria-current={i === active ? 'true' : undefined}
              className="p-1 -m-1 rounded-full"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-emerald-500' : 'w-1.5 bg-neutral-700'}`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => goTo(activeRef.current - 1)}
            disabled={active === 0}
            aria-label="Previous system"
            className="px-3 py-1 rounded-lg border border-neutral-800 bg-neutral-900 hover:border-emerald-500/50 text-neutral-300 flex items-center gap-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Symbol name="arrow_upward" size={14} />
            <span>Prev</span>
          </button>
          <button
            type="button"
            onClick={() => goTo(activeRef.current + 1)}
            disabled={active === total - 1}
            aria-label="Next system"
            className="px-3 py-1 rounded-lg border border-neutral-800 bg-neutral-900 hover:border-emerald-500/50 text-neutral-300 flex items-center gap-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span>Next</span>
            <Symbol name="arrow_downward" size={14} />
          </button>
        </div>
      </div>
    </>
  )
}
