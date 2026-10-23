import { impactMetrics } from '../../data/experience.js'

/** Impact metrics band (#impact). */
export default function ImpactMetrics() {
  return (
    <section className="border-y border-neutral-800/80 bg-neutral-950/60 py-12" data-purpose="metrics-summary" id="impact" aria-label="Impact metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {impactMetrics.map((metric) => (
            <div key={metric.label} className="metric-card p-4 rounded-xl border border-neutral-800 bg-black group cursor-default flex flex-col-reverse">
              <dt className="text-xs text-neutral-400 font-mono mt-1">{metric.label}</dt>
              <dd className="text-3xl lg:text-4xl font-extrabold text-emerald-400 font-mono group-hover:scale-105 transition-transform duration-200">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
