import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { contactDetails, contactIntro, contactSocials } from '../data/contact.js'
import { useReveal } from '../hooks/useReveal.js'
import { ExternalIcon, Symbol } from './Icons.jsx'

const EMPTY_FORM = { name: '', email: '', message: '' }

const inputClass =
  'w-full rounded-lg border border-neutral-800 bg-black/70 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 font-mono outline-none transition-colors focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/40'

/** Contact section (#contact): copyable details + EmailJS message form, ported from the v1 site. */
export default function Contact() {
  const [ref, revealed] = useReveal()
  const [formData, setFormData] = useState(EMPTY_FORM)
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState('')
  const copyTimer = useRef(null)

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  const handleCopy = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(key)
      clearTimeout(copyTimer.current)
      copyTimer.current = setTimeout(() => setCopied(''), 1200)
    } catch {
      // Clipboard can be blocked (insecure context / permissions); the value is still visible to copy by hand.
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setFormData(EMPTY_FORM)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="cyber-grid-bg cyber-grid-bg--soft relative isolate overflow-hidden border-t border-neutral-800/60" aria-labelledby="contact-title">
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -z-10" aria-hidden="true" />

      <div
        ref={ref}
        className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <header className="max-w-3xl mx-auto mb-10 text-center flex flex-col items-center">
          <div className="px-3 py-1 rounded-full text-xs font-mono tracking-wider border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 inline-flex items-center gap-2 mb-3 shadow-[0_0_15px_rgba(34,197,94,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span className="font-bold uppercase tracking-wider">{contactIntro.kicker}</span>
          </div>
          <h2 id="contact-title" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            {contactIntro.title}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-neutral-400 leading-relaxed">{contactIntro.subtitle}</p>
        </header>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Details */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {contactDetails.map((item) => (
              <div key={item.key} className="flex items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-950/80 p-4 transition-colors hover:border-emerald-500/40">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-950/30 text-emerald-400">
                  <Symbol name={item.icon} size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">{item.label}</p>
                  <p className="truncate text-sm font-mono text-neutral-100">{item.value}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(item.value, item.key)}
                  className="shrink-0 rounded-md p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-emerald-400"
                  aria-label={`Copy ${item.label}`}
                  title={`Copy ${item.label}`}
                >
                  <Symbol name={copied === item.key ? 'check' : 'content_copy'} size={18} className={copied === item.key ? 'text-emerald-400' : ''} />
                </button>
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-1">
              {contactSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-neutral-800 bg-black px-3 py-2 text-xs font-mono text-neutral-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
                >
                  {social.label}
                  <ExternalIcon />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-3 rounded-xl border border-neutral-800 bg-neutral-950/80 p-5 sm:p-6">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800/80 mb-1">
              <span className="text-xs font-mono text-emerald-400">send_message.ts</span>
              <span className="text-[11px] font-mono text-neutral-500">via EmailJS</span>
            </div>
            <label htmlFor="contact-name" className="sr-only">Your name</label>
            <input id="contact-name" type="text" name="name" placeholder="Your name..." required autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} />
            <label htmlFor="contact-email" className="sr-only">Your email</label>
            <input id="contact-email" type="email" name="email" placeholder="Your email..." required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} />
            <label htmlFor="contact-message" className="sr-only">Your message</label>
            <textarea id="contact-message" name="message" placeholder="Your message..." required rows={6} value={formData.message} onChange={handleChange} className={`${inputClass} resize-y min-h-32`} />

            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <p className="text-xs font-mono min-h-4" role="status" aria-live="polite">
                {status === 'sent' && <span className="text-emerald-400">Message sent! I will contact you shortly.</span>}
                {status === 'error' && <span className="text-rose-400">Failed to send message. Please try again.</span>}
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-mono font-bold text-black transition-all hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Symbol name={status === 'sending' ? 'progress_activity' : 'send'} size={18} className={status === 'sending' ? 'animate-spin' : ''} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
