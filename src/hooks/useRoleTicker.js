import { useEffect, useState } from 'react'

/**
 * Typewriter cycle over `roles` (port of the Stitch hero script):
 * holds the first role, erases it, then types the next one, forever.
 */
export function useRoleTicker(roles, { type = 90, erase = 45, hold = 2200, gap = 350 } = {}) {
  const [text, setText] = useState(roles[0] ?? '')

  useEffect(() => {
    if (!roles.length) return undefined
    let roleIndex = 0
    let charIndex = roles[0].length
    let deleting = true
    let timer

    const tick = () => {
      const current = roles[roleIndex]
      if (deleting) {
        charIndex -= 1
        setText(current.substring(0, charIndex))
        if (charIndex <= 0) {
          deleting = false
          roleIndex = (roleIndex + 1) % roles.length
          timer = setTimeout(tick, gap)
          return
        }
        timer = setTimeout(tick, erase)
      } else {
        const next = roles[roleIndex]
        charIndex += 1
        setText(next.substring(0, charIndex))
        if (charIndex === next.length) {
          deleting = true
          timer = setTimeout(tick, hold)
          return
        }
        timer = setTimeout(tick, type)
      }
    }

    timer = setTimeout(tick, hold)
    return () => clearTimeout(timer)
  }, [roles, type, erase, hold, gap])

  return text
}
