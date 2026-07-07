import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline'
import Reveal from './Reveal'
 
const certificates = [
  {
    title: 'Platform Web Developer',
    issuer: 'Educourse.id',
    date: '2024',
    image: '/certificates/educourse.png',
  },
  {
    title: 'STEM.org ENDORSED™ - EXEMPLARY STUDENT',
    issuer: 'STEM.org',
    date: '2025',
    image: '/certificates/stem.png',
  },
  {
    title: 'MSIB BatcH 7',
    issuer: 'Pelaksana Kampus Merdeka',
    date: '2024',
    image: '/certificates/MSIB.png',
  },
  {
    title: 'Junior Data Scientist',
    issuer: 'Vinix Seven Aurum ',
    date: '2025',
    image: '/certificates/vinix7.png',
  },
]
 
export default function CertificatesSection() {
  const [selected, setSelected] = useState<number | null>(null)
 
  return (
    <section id="certificates" className="relative pt-20 pb-32" style={{ scrollMarginTop: '80px' }}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{ clipPath: 'polygon(0 20%,100% 0,100% 100%,0 80%)' }}
          className="relative right-[calc(50%-20rem)] w-[60rem] aspect-[2/1] bg-gradient-to-l from-blue-700 to-indigo-700 opacity-10"
        />
      </div>
 
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        <div className="flex items-center gap-x-3 mb-4">
          <span className="h-px flex-1 max-w-[3rem] bg-blue-500/60" />
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Certificates</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
          Certifications & <span className="text-blue-400">Achievements</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mb-12">
          Beberapa sertifikat yang telah saya peroleh dari pelatihan dan kursus. Klik gambar untuk melihat lebih besar.
        </p>
        </Reveal>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 100}>
            <button
              onClick={() => setSelected(i)}
              className="group relative flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-blue-500/40 hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer w-full"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/50 transition-colors duration-300 flex items-center justify-center">
                  <ArrowsPointingOutIcon className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
 
              <div className="p-5 flex flex-col gap-1">
                <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-400">
                  {cert.issuer} &middot; {cert.date}
                </p>
              </div>
            </button>
            </Reveal>
          ))}
        </div>
      </div>
 
      <Dialog open={selected !== null} onClose={() => setSelected(null)} className="relative z-50">
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
          <DialogPanel className="relative w-full max-w-3xl rounded-2xl bg-slate-900 ring-1 ring-white/10 overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-slate-950/70 p-2 text-gray-300 hover:text-white hover:bg-slate-950 transition"
            >
              <XMarkIcon className="size-5" />
            </button>
 
            {selected !== null && (
              <>
                <img
                  src={certificates[selected].image}
                  alt={certificates[selected].title}
                  className="w-full max-h-[70vh] object-contain bg-slate-950"
                />
                <div className="p-6 border-t border-white/5">
                  <h3 className="text-lg font-bold text-white">{certificates[selected].title}</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {certificates[selected].issuer} &middot; {certificates[selected].date}
                  </p>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  )
}