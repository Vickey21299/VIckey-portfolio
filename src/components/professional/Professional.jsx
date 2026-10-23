import { useState } from 'react'
import { experienceFilters, experiences, journeyIntro } from '../../data/experience.js'
import Timeline from './Timeline.jsx'

const ACTIVE_FILTER = 'bg-emerald-500 text-black font-semibold shadow-[0_0_15px_rgba(74,222,128,0.35)] scale-100'
const IDLE_FILTER =
  'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:border-emerald-500/60 hover:text-emerald-500 hover:shadow-[0_0_10px_rgba(34,197,94,0.15)]'

function countFor(filterId) {
  return filterId === 'all' ? experiences.length : experiences.filter((e) => e.category === filterId).length
}

/** "Professional Journey" intro + milestone filters + alternating timeline. */
export default function Professional() {
  const [filter, setFilter] = useState('all')

  return (
    <>
      <section className="cyber-grid-bg cyber-fade-top relative pt-12 pb-10 border-b border-neutral-800/60 overflow-hidden" id="trajectory" aria-labelledby="trajectory-title">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 mb-4 shadow-[0_0_15px_rgba(34,197,94,0.12)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            {journeyIntro.kicker}
          </div>
          <h2 id="trajectory-title" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            {journeyIntro.title}
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">{journeyIntro.subtitle}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs font-mono" role="group" aria-label="Filter milestones" data-purpose="timeline-filters">
            {experienceFilters.map((f) => {
              const isActive = filter === f.id
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(f.id)}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-200 ${isActive ? ACTIVE_FILTER : IDLE_FILTER}`}
                >
                  {f.label} ({countFor(f.id)})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <Timeline items={experiences} filter={filter} />
    </>
  )
}
