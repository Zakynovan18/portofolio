import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
 
import Terminal from '../components/Terminal'
import AboutSection from '../components/AboutSection'
import TechStackSection from '../components/TechStackSection'
import ProjectsSection from '../components/ProjectsSection'
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
 
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
 
  return (
    <div className="bg-slate-950 min-h-screen text-white relative overflow-hidden">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav aria-label="Global" className="flex items-center justify-between p-4 sm:p-6 lg:px-8">
          <div className="flex flex-1">
            <a href="#home" className="-m-1.5 p-1.5 flex items-center">
              <span className="text-2xl font-bold tracking-tight text-white">
                Nanda.
              </span>
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-10 xl:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-white hover:text-blue-400 transition whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
          <div className="flex lg:hidden">
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
                <span className="text-xl font-bold tracking-tight text-white">
                 Nanda.
                </span>
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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-blue-400 transition"
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
 
      <div id="home" className="relative isolate px-6 pt-14 lg:px-8" style={{ scrollMarginTop: '0px' }}>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-blue-600 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
 
        <div className="mx-auto max-w-7xl pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:pt-12 lg:pb-24 items-center justify-between">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8 text-left">
            <div className="mt-16 sm:mt-24 lg:mt-8">
              <a href="#" className="inline-flex flex-wrap items-center gap-x-3 gap-y-2">
  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm/6 font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/20 whitespace-nowrap">
      Available for Hire
  </span>
</a>
            </div>

            {/* Foto profil bulat + sapaan */}
            <div className="mt-12 flex items-center gap-x-4">
              <img
                src="/profil.png"
                alt="Foto Muhammad Zaky Novananda"
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover ring-2 ring-blue-500/50"
              />
              <span className="text-lg font-medium text-gray-300">Hi, I'm Nanda</span>
            </div>

            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Web Developer
              </span>
            </h1>
 
            <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              i am fresh graduate, and i am passionate in web developer and machine learning.
            </p>
 
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/cv/CV_Muhammad Zaky Novananda.pdf"
                download="CV_Muhammad Zaky Novananda.pdf"
                className="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition"
              >
                <ArrowDownTrayIcon className="size-4" />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-x-2 rounded-md border-2 border-blue-500 px-4 py-2.5 text-sm font-semibold text-blue-400 hover:bg-blue-500/10 transition"
              >
                <EnvelopeIcon className="size-4" />
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
 
  <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-20">
    <div className="w-full max-w-md flex-none sm:max-w-xl lg:max-w-2xl">
      <Terminal />
    </div>
  </div>
</div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-blue-500 to-indigo-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
 
      {/* ── ABOUT SECTION ── */}
      <AboutSection />
 
      {/* ── TECH STACK SECTION ── */}
      <TechStackSection />
 
      {/* ── PROJECTS SECTION ── */}
      <ProjectsSection />
 
      {/* ── CERTIFICATES SECTION ── */}
      <CertificatesSection />
 
      {/* ── CONTACT SECTION ── */}
      <ContactSection />
 
      {/* ── FOOTER ── */}
      <Footer />
    </div>
  )
}