import { GITHUB_URL, LINKEDIN_URL } from './site.js'

export const contactIntro = {
  kicker: '05. Open Channel // Contact',
  title: "Let's Build Intelligent Systems",
  subtitle: 'Hiring for AI/ML, agentic systems or production RAG? Send a message — I usually reply within a day.',
}

/** Copyable contact details. `key` identifies which copy button shows the check mark. */
export const contactDetails = [
  { key: 'phone', label: 'Phone', value: '+91-9315222516', icon: 'call' },
  { key: 'personal', label: 'Personal Email', value: 'vkkumar1763@gmail.com', icon: 'mail' },
  { key: 'university', label: 'University Email', value: 'Vickey21299@iiitd.ac.in', icon: 'school' },
]

export const contactSocials = [
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
  { label: 'X / Twitter', href: 'https://x.com/Vickey21299' },
]
