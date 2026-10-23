import { projects, projectsIntro } from '../../data/projects.js'
import ProjectDeck from './ProjectDeck.jsx'

/** "Autonomous Agents & AI Systems Queue" — interactive stacked project deck. */
export default function Projects() {
  return (
    <section id="projects" className="cyber-grid-bg cyber-grid-bg--soft relative isolate overflow-hidden border-t border-neutral-800/60" aria-labelledby="projects-title">
      {/* Ambient emerald glows (fixed to the page in Stitch, scoped to the section here) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -z-10" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-600/8 rounded-full blur-[160px] pointer-events-none -z-10" aria-hidden="true" />

      <div className="pt-12 pb-14 px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto w-full flex flex-col justify-center">
        <header className="max-w-4xl mx-auto mb-6 text-center flex flex-col items-center">
          <div className="px-3 py-1 rounded-full text-xs font-mono tracking-wider border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 inline-flex items-center gap-2 mb-3 shadow-[0_0_15px_rgba(34,197,94,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span className="font-bold uppercase tracking-wider">{projectsIntro.kicker}</span>
          </div>
          <h2 id="projects-title" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            {projectsIntro.title}
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">{projectsIntro.subtitle}</p>
        </header>

        <ProjectDeck projects={projects} />
      </div>
    </section>
  )
}
