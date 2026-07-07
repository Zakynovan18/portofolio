import { useState } from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Reveal from './Reveal'
 
const contactInfo = [
  { icon: EnvelopeIcon, label: 'Email', value: 'novanandazaky@gmail.com' },
  { icon: PhoneIcon, label: 'Phone', value: '+62 813-5871-4035' },
  { icon: MapPinIcon, label: 'Location', value: 'Nganjuk, East Java, Indonesia' },
]
 
export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
 
    try {
      const res = await fetch('https://formspree.io/f/mykqvoag', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target as HTMLFormElement),
      })
 
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
 
    setTimeout(() => {
      setSent(false)
      setError(false)
    }, 4000)
  }
 
  return (
    <section id="contact" className="relative pt-20 pb-32" style={{ scrollMarginTop: '100px' }}>
      {/* blur bg */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{ clipPath: 'polygon(0 0,100% 20%,100% 80%,0 100%)' }}
          className="relative left-[calc(50%-20rem)] w-[60rem] aspect-[2/1] bg-gradient-to-r from-blue-700 to-indigo-700 opacity-10"
        />
      </div>
 
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <Reveal>
        <div className="flex items-center gap-x-3 mb-4">
          <span className="h-px flex-1 max-w-[3rem] bg-blue-500/60" />
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Contact</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
          Let's <span className="text-blue-400">Work Together</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mb-8">
          Punya proyek atau ide yang mau didiskusikan? Jangan ragu untuk menghubungi saya.
        </p>
        </Reveal>
 
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
          {/* Left: Contact Info */}
          <Reveal>
          <div className="flex flex-col gap-y-6 lg:mt-11">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-x-4">
                <div className="flex-shrink-0 rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20 p-3">
                  <Icon className="size-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</div>
                  <div className="mt-1 text-base text-white">{value}</div>
                </div>
              </div>
            ))}
          </div>
          </Reveal>
 
          {/* Right: Contact Form */}
          <Reveal delay={150}>
          <div className="mt-12 lg:mt-0">
            <h3 className="text-lg font-bold text-white mb-6">
              Send a <span className="text-blue-400">Message</span>
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama kamu"
                  className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition"
                />
              </div>
 
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@kamu.com"
                  className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition"
                />
              </div>
 
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tulis pesanmu disini."
                  className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-blue-500 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none transition resize-none"
                />
              </div>
 
              <button
                type="submit"
                className={`mt-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 transition ${
                  error
                    ? 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600'
                    : 'bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600'
                }`}
              >
                {sent ? 'Pesan Terkirim ✓' : error ? 'Gagal, coba lagi' : 'Kirim Pesan'}
              </button>
            </form>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}