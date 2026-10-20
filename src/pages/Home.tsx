import { useState, useEffect, type PointerEvent } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import './Home.css'

import AboutSection from '../components/AboutSection'
import TechStackSection from '../components/TechStackSection'
import ProjectsSection from '../components/ProjectsSection'
import InterestsSection from '../components/InterestsSection'
import CertificatesSection from '../components/CertificatesSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
 
const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Tech Stack', href: '#techstack' },
  { name: 'Project', href: '#project' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
]

function ThemeToggle({ isLightTheme, onToggle }: { isLightTheme: boolean; onToggle: () => void }) {
  const nextTheme = isLightTheme ? 'dark' : 'light'
  const Icon = isLightTheme ? MoonIcon : SunIcon

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={isLightTheme}
      title={`Switch to ${nextTheme} theme`}
      className="theme-toggle inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2.5 text-gray-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
    >
      <Icon aria-hidden="true" className="size-5" />
    </button>
  )
}
 
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(
    () => window.localStorage.getItem('portfolio-theme') === 'light',
  )
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) 

  useEffect(() => {
    const theme = isLightTheme ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [isLightTheme])
 
  return (
    <div className="site-shell min-h-screen text-white relative overflow-hidden">
      <header
        className={`site-header fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'is-scrolled'
            : ''
        }`}
      >
        <nav aria-label="Global" className="site-nav">
          <a href="#home" className="site-wordmark">
            <span className="wordmark-mark">
              <img src="/profil.png" alt="" />
            </span>
            <span>Nanda.</span>
          </a>
          <div className="site-nav-links">
            {navigation.map((item) => (
              <a key={item.name} href={item.href}>{item.name}</a>
            ))}
          </div>
          <div className="site-nav-actions">
            <ThemeToggle
              isLightTheme={isLightTheme}
              onToggle={() => setIsLightTheme(theme => !theme)}
            />
          </div>
          <div className="site-mobile-actions">
            <ThemeToggle
              isLightTheme={isLightTheme}
              onToggle={() => setIsLightTheme(theme => !theme)}
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-950 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#home" className="-m-1.5 p-1.5 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold tracking-tight text-white">Nanda.</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-green-400 transition"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
 
      <main id="home" className="home-main">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-greeting">Hi, I’m Nanda</p>
            <h1 id="hero-title" className="hero-title">
              Web developer building thoughtful digital experiences.
            </h1>
            <p className="hero-description">
              I’m an Informatics Engineering graduate who enjoys creating useful web
              applications and exploring the possibilities of machine learning.
            </p>

            <div className="hero-actions">
              <a className="hero-email" href="mailto:novanandazaky@gmail.com">
                <EnvelopeIcon aria-hidden="true" className="size-4" />
                Email me
              </a>
              <div className="hero-socials" aria-label="Social links">
                <a href="https://github.com/Zakynovan18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.59c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-zaky-novananda-3567ab321" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.43c.99 0 1.79-.77 1.79-1.72V1.72C24 .77 23.2 0 22.22 0Z" /></svg>
                </a>
                <a href="https://www.instagram.com/zakynovannd_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" /></svg>
                </a>
                <a href="https://wa.me/6281358714035" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <ChatBubbleLeftRightIcon aria-hidden="true" className="size-6" />
                </a>
              </div>
            </div>
            <a
              className="hero-cv"
              href="/cv/CV_Muhammad Zaky Novananda.pdf"
              download="CV_Muhammad Zaky Novananda.pdf"
            >
              <ArrowDownTrayIcon aria-hidden="true" className="size-4" />
              Download CV
            </a>
          </div>

          <div
            className="hero-portrait"
            onPointerMove={(event: PointerEvent<HTMLDivElement>) => {
              if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

              const bounds = event.currentTarget.getBoundingClientRect()
              const x = (event.clientX - bounds.left) / bounds.width * 2 - 1
              const y = (event.clientY - bounds.top) / bounds.height * 2 - 1
              event.currentTarget.style.setProperty('--tilt-x', `${-y * 9}deg`)
              event.currentTarget.style.setProperty('--tilt-y', `${x * 11}deg`)
              event.currentTarget.style.setProperty('--shift-x', `${x * 8}px`)
              event.currentTarget.style.setProperty('--shift-y', `${y * 8}px`)
            }}
            onPointerLeave={(event: PointerEvent<HTMLDivElement>) => {
              event.currentTarget.style.setProperty('--tilt-x', '0deg')
              event.currentTarget.style.setProperty('--tilt-y', '0deg')
              event.currentTarget.style.setProperty('--shift-x', '0px')
              event.currentTarget.style.setProperty('--shift-y', '0px')
            }}
          >
            <span className="portrait-circle" aria-hidden="true" />
            <span className="portrait-lines" aria-hidden="true" />
            <span className="portrait-outline" aria-hidden="true" />
            <span className="portrait-triangle" aria-hidden="true" />
            <img src="/profil.png" alt="Muhammad Zaky Novananda" />
          </div>
        </section>
      </main>
 
      {/* ── ABOUT SECTION ── */}
      <AboutSection />
 
      {/* ── TECH STACK SECTION ── */}
      <TechStackSection />
 
      {/* ── PROJECTS SECTION ── */}
      <ProjectsSection />
 
      {/* ── INTERESTS SECTION ── */}
      <InterestsSection />

      {/* ── CERTIFICATES SECTION ── */}
      <CertificatesSection />
 
      {/* ── CONTACT SECTION ── */}
      <ContactSection />
 
      {/* ── FOOTER ── */}
      <Footer />
    </div>
  )
}