import portrait from '../assets/portrait.webp'
import { hero, site } from '../data/site.js'
import { useRoleTicker } from '../hooks/useRoleTicker.js'

const WATERMARK_SETS = [0, 1]
const WATERMARK_ITEMS = [0, 1, 2]

function Watermark() {
  return (
    <div
      className="absolute inset-x-0 top-1/2 -translate-y-[58%] pointer-events-none select-none z-0 overflow-hidden flex items-center opacity-80"
      data-purpose="watermark-marquee"
      aria-hidden="true"
    >
      <div className="hero-marquee whitespace-nowrap will-change-transform flex items-center">
        {WATERMARK_SETS.map((set) => (
          <div key={set} className="flex items-center">
            {WATERMARK_ITEMS.map((item) => (
              <div
                key={item}
                className="inline-flex items-center mx-6 sm:mx-10 text-7xl sm:text-[140px] tracking-wider leading-none select-none text-white/[0.18]"
              >
                <span className="font-extrabold tracking-widest">{site.brand.primary}</span>
                <span className="ml-2 sm:ml-4 font-light text-neonGreen/30">{site.brand.secondary}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const role = useRoleTicker(hero.roles, hero.timing)

  return (
    <section
      id="overview"
      className="font-grotesk relative flex flex-col items-center justify-center min-h-[calc(100svh-4rem)] px-4 pb-12 text-center bg-black text-white overflow-hidden"
      data-purpose="hero-content"
    >
      <Watermark />

      {/* Portrait */}
      <div className="relative w-full max-w-[620px] h-[580px] sm:h-[640px] flex items-center justify-center pointer-events-none" data-purpose="hero-avatar">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 rounded-full bg-neonGreen/5 blur-3xl" />
        <img
          alt="Portrait of Vickey Kumar"
          className="hero-portrait-mask w-full h-full object-cover object-top contrast-125"
          src={portrait}
          width="800"
          height="800"
          fetchPriority="high"
        />
      </div>

      {/* Name, role ticker, tagline, status pill */}
      <div className="relative z-20 flex flex-col items-center -mt-36 sm:-mt-44 text-center px-4">
        <div
          className="relative z-20 mb-3 tracking-[0.25em] text-neonGreen text-xs font-semibold uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          data-purpose="name-badge"
        >
          {site.name.toUpperCase()}
        </div>
        <h1
          className="relative z-20 text-4xl sm:text-6xl font-bold tracking-tight mb-3 text-white flex items-center justify-center min-h-[1.3em] px-2 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          data-purpose="main-headline"
        >
          <span className="sr-only">
            {site.name} — {hero.roles.join(', ')}
          </span>
          <span className="inline-block transition-all duration-200" aria-hidden="true">
            {role}
          </span>
          <span className="inline-block ml-1 text-neonGreen hero-caret font-light select-none" aria-hidden="true">
            |
          </span>
        </h1>
        <p
          className="relative z-20 text-xs sm:text-sm tracking-wider text-zinc-300 mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          data-purpose="subtitle"
        >
          I SHIP AI INTO <span className="text-neonGreen font-semibold">PRODUCTION</span>.
        </p>
        <div className="relative z-20" data-purpose="status-badge">
          <a
            className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 py-2 rounded-full bg-zinc-900/90 hero-badge-border text-[11px] tracking-wide text-zinc-300 hover:text-white transition-all shadow-xl backdrop-blur-sm"
            href={hero.statusTarget}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neonGreen" aria-hidden="true" />
            {hero.statusLead} <span className="text-white font-semibold">{hero.statusCompany}</span>
            <span className="text-neonGreen" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* Soft hand-off into the cyber-grid sections below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black z-10" aria-hidden="true" />
    </section>
  )
}
