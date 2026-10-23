/**
 * Material Symbols Outlined glyph (decorative). Size is set inline because the
 * Google Fonts stylesheet is unlayered and would beat Tailwind's text-[Npx].
 */
export function Symbol({ name, size = 24, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`} style={{ fontSize: size }} aria-hidden="true">
      {name}
    </span>
  )
}

export function LinkedInIcon({ className = 'w-3.5 h-3.5' }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  )
}

export function ExternalIcon({ className = 'w-3 h-3 ml-0.5 opacity-70' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}

export function MenuIcon({ open, className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeWidth="2" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeWidth="2" />
      )}
    </svg>
  )
}
