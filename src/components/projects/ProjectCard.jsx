import { Symbol } from '../Icons.jsx'
import ToolsMarquee from './ToolsMarquee.jsx'

const BADGE = {
  accentBold: 'px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold',
  accent: 'px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  muted: 'px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-neutral-700/60',
}

const PRIMARY_BTN =
  'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-semibold shadow-sm transition-all'
const SECONDARY_BTN =
  'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-mono text-xs font-semibold transition-all border border-neutral-700'

const BODY_BOX = 'p-2.5 rounded bg-black/60 border border-neutral-800 mb-2 font-mono text-[11px] space-y-1'

function CodeLine({ tokens }) {
  return tokens.map((token, i) =>
    typeof token === 'string' ? (
      token
    ) : (
      <span key={i} className={token[0]}>
        {token[1]}
      </span>
    ),
  )
}

function TerminalBody({ body }) {
  switch (body.kind) {
    case 'code':
      return (
        <pre className="text-neutral-200 text-[11px] leading-relaxed p-2.5 rounded bg-black/60 border border-neutral-800/80 mb-2 font-mono overflow-x-auto">
          <code>
            {body.lines.map((line, i) => (
              <span key={i} className="block">
                <CodeLine tokens={line} />
              </span>
            ))}
          </code>
        </pre>
      )
    case 'trace':
      return (
        <div className={BODY_BOX}>
          <div className="text-neutral-400 text-[10px] uppercase font-bold">{body.title}</div>
          {body.rows.map((row) => (
            <div key={row.tag} className={`flex items-center gap-1.5 ${row.tone}`}>
              <span className={`px-1 rounded ${row.tagBg}`}>{row.tag}</span>
              <span>{row.text}</span>
            </div>
          ))}
        </div>
      )
    case 'stream':
      return (
        <div className={BODY_BOX}>
          <div className="flex items-center justify-between gap-2 text-[10px] text-neutral-400 pb-1 border-b border-neutral-800">
            <span>{body.channel}</span>
            <span className="text-emerald-400 animate-pulse">{body.status}</span>
          </div>
          <div className="text-emerald-300 leading-relaxed pl-2 border-l-2 border-emerald-500/40">
            <span className="text-emerald-400 font-bold">{body.speaker}</span> {body.text}
          </div>
        </div>
      )
    case 'bbox':
      return (
        <div className={BODY_BOX}>
          <div className="text-neutral-400 text-[10px] uppercase font-bold">{body.title}</div>
          {body.rows.map((row) => (
            <div key={row.left} className={`p-1 rounded bg-white/[0.03] border ${row.border} flex justify-between items-center gap-2 text-[10px]`}>
              <span className={row.leftTone}>{row.left}</span>
              <span className={row.rightTone}>{row.right}</span>
            </div>
          ))}
        </div>
      )
    case 'list':
      return (
        <div className={BODY_BOX}>
          <div className="text-neutral-400 text-[10px] uppercase font-bold">{body.title}</div>
          {body.lines.map((line) => (
            <div key={line.text} className={line.strong ? 'text-emerald-400 font-bold' : 'text-neutral-300'}>
              {line.text}
            </div>
          ))}
        </div>
      )
    default:
      return null
  }
}

function Terminal({ terminal }) {
  return (
    <div className="lg:col-span-5 rounded-xl bg-[#070b09] border border-emerald-500/25 p-3.5 font-mono flex flex-col justify-between text-xs shadow-inner min-w-0">
      <div>
        <div className="flex items-center justify-between gap-2 pb-1 mb-2 border-b border-neutral-800 text-neutral-400">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shrink-0" aria-hidden="true" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" aria-hidden="true" />
            <span className="ml-2 text-neutral-300 text-[11px] truncate">{terminal.file}</span>
          </div>
          <span className={`text-emerald-400 text-[11px] whitespace-nowrap ${terminal.tagBold ? 'font-bold' : 'font-semibold'}`}>{terminal.tag}</span>
        </div>
        <TerminalBody body={terminal.body} />
        <div className="space-y-1 text-[11px] text-neutral-400">
          {terminal.metrics.map((m) => (
            <div key={m.label} className="flex justify-between gap-2">
              <span>{m.label}</span>
              <span className={`${m.tone} font-bold`}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 pt-2 border-t border-neutral-800 flex items-center justify-between gap-2 text-[11px] text-neutral-400">
        <span>{terminal.footer.label}</span>
        <span className={`text-emerald-400 ${terminal.footer.strong ? 'font-bold' : 'font-mono'}`}>{terminal.footer.value}</span>
      </div>
    </div>
  )
}

function SystemCard({ project }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-neutral-800/80 font-mono text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {project.badges.map((b) => (
            <span key={b.label} className={BADGE[b.variant]}>
              {b.label}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />
          <span>{project.module}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-3">
        <div className="lg:col-span-7 flex flex-col justify-between min-w-0">
          <div>
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-1 font-semibold">
              <Symbol name={project.icon} size={15} />
              <span>{project.kicker}</span>
            </div>
            <h3
              className={`font-mono ${project.nameSmall ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} font-extrabold text-white tracking-tight mb-2 break-words`}
            >
              {project.name}
            </h3>
            <p className="font-sans text-xs md:text-sm text-neutral-300 mb-2 leading-relaxed">{project.description}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-[#070b09] border border-neutral-800 font-mono text-xs mb-3">
            <span className="text-emerald-400 block font-semibold uppercase tracking-wide text-[11px]">{project.spec.label}</span>
            <span className="text-neutral-400 text-[11px]">{project.spec.text}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {project.links.map((link) => (
              <a key={link.href} className={link.secondary ? SECONDARY_BTN : PRIMARY_BTN} href={link.href} target="_blank" rel="noopener noreferrer">
                <Symbol name={link.icon} size={15} />
                <span>{link.label}</span>
                <Symbol name="north_east" size={13} />
              </a>
            ))}
            {project.stat && (
              <div className={`font-mono text-xs flex items-center gap-1.5 ${project.stat.accent ? 'text-emerald-400 font-semibold' : 'text-neutral-400'}`}>
                <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${project.stat.ping ? 'animate-ping' : ''}`} aria-hidden="true" />
                <span>{project.stat.text}</span>
              </div>
            )}
          </div>
        </div>
        <Terminal terminal={project.terminal} />
      </div>

      <ToolsMarquee tools={project.tools} />
    </>
  )
}

function ArchiveCard({ project }) {
  return (
    <>
      <div className="font-mono text-xs text-neutral-400 pb-2 border-b border-neutral-800 flex flex-wrap justify-between items-center gap-2">
        <span className="text-emerald-400 font-bold">{project.command}</span>
        <span>{project.indexLabel}</span>
      </div>
      <div className="py-6 max-w-xl mx-auto">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          <Symbol name="terminal" size={30} />
        </div>
        <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">{project.kicker}</div>
        <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3">{project.title}</h3>
        <p className="text-xs md:text-sm text-neutral-300 mb-6">{project.description}</p>
        <dl className="grid grid-cols-3 gap-3 mb-6 font-mono">
          {project.stats.map((s) => (
            <div key={s.label} className="p-3 rounded-xl bg-black/60 border border-neutral-800 flex flex-col-reverse">
              <dt className="text-[11px] text-neutral-400 uppercase">{s.label}</dt>
              <dd className={`text-xl md:text-2xl font-bold ${s.tone}`}>{s.value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(34,197,94,0.35)]"
            href={project.primary.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Symbol name="code" size={16} />
            <span>{project.primary.label}</span>
            <Symbol name="north_east" size={14} />
          </a>
          <a
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-mono text-xs font-semibold border border-neutral-700 transition-all"
            href={project.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{project.secondary.label}</span>
            <Symbol name="north_east" size={14} />
          </a>
        </div>
      </div>
      <div className="font-mono text-[11px] text-neutral-500 border-t border-neutral-800/80 pt-2 flex flex-wrap justify-between gap-2">
        <span>{project.footerLeft}</span>
        <span>{project.footerRight}</span>
      </div>
    </>
  )
}

/** One card of the stacked deck. Position/opacity/blur come from the deck controller. */
export default function ProjectCard({ project, index, total, isActive, style, ref }) {
  const archive = project.kind === 'archive'
  return (
    <article
      ref={ref}
      className={`stack-card rounded-2xl bg-[#0c110e] border border-emerald-500/30 terminal-glow-emerald ${
        archive ? 'p-6 md:p-8 text-center flex flex-col justify-between' : 'p-5 md:p-6'
      }`}
      style={style}
      data-index={index}
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}`}
      aria-hidden={!isActive}
      inert={!isActive}
    >
      {archive ? <ArchiveCard project={project} /> : <SystemCard project={project} />}
    </article>
  )
}
