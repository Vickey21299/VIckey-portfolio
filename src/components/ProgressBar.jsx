import { useEffect, useRef } from 'react'

/** Whole-page reading progress bar (fixed, 3px, above the header). */
export default function ProgressBar() {
  const barRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const doc = document.documentElement
      const height = doc.scrollHeight - doc.clientHeight
      const pct = height > 0 ? (window.scrollY / height) * 100 : 0
      if (barRef.current) barRef.current.style.width = `${pct}%`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div aria-hidden="true" className="fixed top-0 left-0 right-0 h-[3px] bg-emerald-500/10 z-[60] pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 shadow-[0_0_10px_rgba(74,222,128,0.8)] transition-all duration-75"
      />
    </div>
  )
}
