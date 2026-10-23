import { useEffect, useState } from 'react'
import { navItems, site } from '../data/site.js'
import { useScrollSpy } from '../hooks/useScrollSpy.js'
import { ExternalIcon, LinkedInIcon, MenuIcon } from './Icons.jsx'

const NAV_IDS = navItems.map((item) => item.id)

function LinkedInButton({ className = '' }) {
  return (
    <a
      className={`items-center space-x-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-medium text-xs px-3.5 py-1.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-[0_0_18px_rgba(74,222,128,0.4)] ${className}`}
      href={site.linkedin}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedInIcon />
      <span>LinkedIn</span>
      <ExternalIcon />
    </a>
  )
}

export default function Header() {
  const active = useScrollSpy(NAV_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the drawer on Escape or once the desktop nav becomes visible.
  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const mql = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    mql.addEventListener('change', onChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      mql.removeEventListener('change', onChange)
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-neutral-800/80" data-purpose="site-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand & status beacon */}
        <a href="#overview" className="flex items-center space-x-3 min-w-0" aria-label={`${site.brand.primary} ${site.brand.secondary} — back to top`}>
          <div className="relative flex items-center justify-center w-3 h-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-mono text-sm font-bold tracking-widest text-white uppercase flex items-center gap-1.5">
              {site.brand.primary} {site.brand.secondary}
              <span className="hidden sm:inline text-[10px] py-0.5 px-1.5 rounded bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20 normal-case tracking-normal">
                {site.brandBadge}
              </span>
            </span>
            <span className="text-[11px] text-neutral-400 font-mono -mt-0.5 truncate">{site.brandTagline}</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono tracking-wider uppercase text-neutral-400" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`border-b-2 pb-0.5 transition-colors ${
                  isActive ? 'text-emerald-400 font-semibold border-emerald-500' : 'border-transparent hover:text-emerald-400'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center space-x-3 shrink-0" data-purpose="header-actions">
          <LinkedInButton className="hidden sm:inline-flex" />
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 transition-colors"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      <div
        id="mobile-nav"
        className={`lg:hidden absolute inset-x-0 top-full border-b border-neutral-800/80 bg-black/95 backdrop-blur-md transition-all duration-200 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        inert={!menuOpen}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1 font-mono text-xs tracking-wider uppercase" aria-label="Mobile">
          {navItems.map((item) => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? 'location' : undefined}
                className={`px-3 py-2.5 rounded-lg border-l-2 transition-colors ${
                  isActive
                    ? 'text-emerald-400 font-semibold border-emerald-500 bg-emerald-500/10'
                    : 'text-neutral-400 border-transparent hover:text-emerald-400 hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            )
          })}
          <LinkedInButton className="inline-flex self-start mt-3 sm:hidden" />
        </nav>
      </div>
    </header>
  )
}
