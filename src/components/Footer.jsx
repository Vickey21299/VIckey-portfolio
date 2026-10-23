import { site } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-neutral-900" data-purpose="footer-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="font-mono text-sm font-semibold tracking-wider text-neutral-200">
            {site.name.toUpperCase()} • {site.brand.primary} {site.brand.secondary}
          </span>
        </div>
        <p className="text-xs text-neutral-400 font-mono text-center md:text-left">{site.footerNote}</p>
        <div className="flex items-center space-x-6 text-sm font-mono">
          <a
            className="text-emerald-400 hover:underline flex items-center gap-1.5 transition-colors group"
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="group-hover:translate-x-0.5 transition-transform">Connect via LinkedIn</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
