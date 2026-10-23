/* Inline brand-ish SVG marks used by the constellation chips (copied from the Stitch design). */

const PYTHON = (
  <>
    <path d="M63.7 3.5c-29.2 0-27.4 12.7-27.4 12.7l.1 13.1h27.9v4H25s-14.7 1.7-14.7 27.5c0 25.9 12.8 25.1 12.8 25.1h7.6v-10.7s-.4-12.8 12.6-12.8h21.4s12.2-.2 12.2-11.9V15.7S78.7 3.5 63.7 3.5zm-15.2 8.3c2.5 0 4.6 2.1 4.6 4.6s-2.1 4.6-4.6 4.6-4.6-2.1-4.6-4.6 2.1-4.6 4.6-4.6z" fill="#3776AB" />
    <path d="M64.3 124.5c29.2 0 27.4-12.7 27.4-12.7l-.1-13.1H63.7v-4h39.3s14.7-1.7 14.7-27.5c0-25.9-12.8-25.1-12.8-25.1h-7.6v10.7s.4 12.8-12.6 12.8H69.3s-12.2.2-12.2 11.9v17.5s-1.8 12.2 13.2 12.2zm15.2-8.3c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2-4.6-4.6 4.6z" fill="#FFD438" />
  </>
)

const LANGGRAPH = (
  <>
    <circle cx="6" cy="12" fill="#22c55e" r="3.5" />
    <circle cx="18" cy="6" fill="#3b82f6" r="3.5" />
    <circle cx="18" cy="18" fill="#a855f7" r="3.5" />
    <path d="M9 12h6M8 10.5l8-3M8 13.5l8 3" stroke="#94a3b8" strokeWidth="2" />
  </>
)

const FASTAPI = (
  <>
    <circle cx="12" cy="12" fill="#059669" r="10" />
    <path d="M12 4l-5 8h4v8l5-8h-4z" fill="#fff" />
  </>
)

const DOCKER = (
  <path
    d="M13 3h-2v2h2V3zm3 0h-2v2h2V3zM8 5h2v2H8V5zm3 0h2v2h-2V5zm3 0h2v2h-2V5zm3 0h2v2h-2V5zM5 7h2v2H5V7zm3 0h2v2H8V7zm3 0h2v2h-2V7zm3 0h2v2h-2V7zm3 0h2v2h-2V7zm3 0h2v2h-2V7zM2 10.5C2 14.6 5.4 18 9.5 18H18c2.8 0 5-2.2 5-5 0-.4 0-.8-.1-1.2-.6.2-1.3.2-1.9.2-1.5 0-2.8-.6-3.8-1.5H2.4c-.2.5-.4 1-.4 1.5z"
    fill="#2496ED"
  />
)

const PYTORCH = <path d="M12 2l1.5 3.5L17 7l-2.5 3 1.5 4.5-4-2-4 2 1.5-4.5L8 7l3.5-1.5L12 2z" fill="#EE4C2C" />

/** key -> { viewBox, body } */
const ICONS = {
  python: { viewBox: '0 0 128 128', body: PYTHON },
  langgraph: { viewBox: '0 0 24 24', body: LANGGRAPH },
  fastapi: { viewBox: '0 0 24 24', body: FASTAPI },
  ansible: {
    viewBox: '0 0 24 24',
    body: (
      <>
        <circle cx="12" cy="12" fill="#1e1e1e" r="10" />
        <path d="M12 4L4 20h3.5l2-4.5h5l2 4.5H20L12 4zm0 6l1.8 4h-3.6L12 10z" fill="#EE0000" />
      </>
    ),
  },
  docker: { viewBox: '0 0 24 24', body: DOCKER },
  postgres: {
    viewBox: '0 0 24 24',
    body: (
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93c-2.83.48-5.3-1.39-5.78-4.22-.48-2.83 1.39-5.3 4.22-5.78 2.83-.48 5.3 1.39 5.78 4.22.48 2.83-1.39 5.3-4.22 5.78z"
        fill="#336791"
      />
    ),
  },
  whisper: { viewBox: '0 0 24 24', body: <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 14.5v-9l6 4.5-6 4.5z" fill="#10a37f" /> },
  gemini: { viewBox: '0 0 24 24', body: <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" fill="#1a73e8" /> },
  redis: { viewBox: '0 0 24 24', body: <path d="M3 13.5l9 5.2 9-5.2-9-5.2-9 5.2zm9-9L3 9.7l9 5.2 9-5.2L12 4.5z" fill="#D82C20" /> },
  elasticsearch: {
    viewBox: '0 0 24 24',
    body: (
      <>
        <circle cx="12" cy="12" fill="#005571" r="10" />
        <path d="M12 5a7 7 0 00-7 7h14a7 7 0 00-7-7z" fill="#FED10A" />
        <path d="M5 12a7 7 0 007 7 7 7 0 007-7H5z" fill="#00BFB3" />
      </>
    ),
  },
  pytorch: { viewBox: '0 0 24 24', body: PYTORCH },
  ocr: { viewBox: '0 0 24 24', body: <path d="M4 4h16v3H4V4zm0 6h16v3H4v-3zm0 6h16v3H4v-3z" fill="#5C3EE8" /> },
  pinns: { viewBox: '0 0 24 24', body: <path d="M12 3a9 9 0 00-9 9h3a6 6 0 016-6V3zm0 18a9 9 0 009-9h-3a6 6 0 01-6 6v3z" fill="#00878F" /> },
  cuda: { viewBox: '0 0 24 24', body: <path d="M12 4a8 8 0 108 8h-4a4 4 0 11-4-4V4z" fill="#76B900" /> },
  tflite: { viewBox: '0 0 24 24', body: <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 3.2L17.5 8 12 11.2 6.5 8 12 5.2z" fill="#FF6F00" /> },
  lora: {
    viewBox: '0 0 24 24',
    body: (
      <>
        <circle cx="12" cy="12" fill="#38bdf8" r="2" />
        <path d="M8.5 8.5a5 5 0 017 0m-9-2a8 8 0 0111 0" fill="none" stroke="#38bdf8" strokeWidth="2" />
      </>
    ),
  },
  react: {
    viewBox: '0 0 24 24',
    body: (
      <>
        <ellipse cx="12" cy="12" fill="none" rx="9" ry="3.6" stroke="#61DAFB" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" fill="none" rx="9" ry="3.6" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" fill="none" rx="9" ry="3.6" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" fill="#61DAFB" r="2" />
      </>
    ),
  },
  node: { viewBox: '0 0 24 24', body: <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="#5FA04E" /> },
  nginx: { viewBox: '0 0 24 24', body: <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm-1 14H8V8h3v8zm5 0h-3V8h3v8z" fill="#009639" /> },
  js: {
    viewBox: '0 0 24 24',
    body: (
      <>
        <path d="M3 3h18v18H3V3z" fill="#F7DF1E" />
        <path d="M12 17h-2v-4h2c1.1 0 2 .9 2 2s-.9 2-2 2zm6-1c0 1.1-.9 2-2 2h-4v-8h4c1.1 0 2 .9 2 2v4z" fill="#000" />
      </>
    ),
  },
  websocket: {
    viewBox: '0 0 24 24',
    body: (
      <>
        <circle cx="6" cy="12" fill="#10b981" r="3" />
        <circle cx="18" cy="12" fill="#10b981" r="3" />
        <path d="M8.5 12h7" stroke="#10b981" strokeDasharray="2 2" strokeWidth="2" />
      </>
    ),
  },
}

export default function TechIcon({ name, className = 'w-8 h-8 shrink-0' }) {
  const icon = ICONS[name]
  if (!icon) return null
  return (
    <svg className={className} viewBox={icon.viewBox} aria-hidden="true" focusable="false">
      {icon.body}
    </svg>
  )
}
