export const LINKEDIN_URL = 'https://www.linkedin.com/in/vickey-kumar-593b7b284/'
export const GITHUB_URL = 'https://github.com/Vickey21299'

export const site = {
  name: 'Vickey Kumar',
  brand: { primary: 'TICVIC', secondary: 'LAB' },
  brandBadge: 'AI/ML solution',
  brandTagline: 'Vickey Kumar • Production Footprint',
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
  footerNote: 'Designed for high-throughput AI engineering evaluation • Noida & Delhi, India',
}

/** Global navigation. Every href must match a section id rendered in App. */
export const navItems = [
  { id: 'overview', label: '01. Overview' },
  { id: 'trajectory', label: '02. Trajectory' },
  { id: 'projects', label: '03. Projects' },
  { id: 'impact', label: '04. Metrics' },
  { id: 'contact', label: '05. Contact' },
]

export const hero = {
  roles: ['AI Engineer', 'ML Engineer', 'GenAI Engineer'],
  timing: { type: 110, erase: 60, hold: 3500, gap: 500 },
  statusLead: 'CURRENTLY BUILDING AT',
  statusCompany: 'GENERAL MACHINES',
  statusTarget: '#trajectory',
}
