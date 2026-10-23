import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProgressBar from './components/ProgressBar.jsx'
import ImpactMetrics from './components/professional/ImpactMetrics.jsx'
import Professional from './components/professional/Professional.jsx'
import Projects from './components/projects/Projects.jsx'

export default function App() {
  return (
    <>
      <a
        href="#trajectory"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:px-3 focus:py-2 focus:rounded-lg focus:bg-emerald-500 focus:text-black focus:font-mono focus:text-xs"
      >
        Skip to content
      </a>
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <Professional />
        <Projects />
        <ImpactMetrics />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
