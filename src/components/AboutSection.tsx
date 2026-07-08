import { useState, useEffect, useRef } from 'react'
import Reveal from './Reveal'
 
const aboutImages = [
  {
    src: '/about/foto1.jpeg',
    alt: 'Deskripsi foto pertama',
  },
  {
    src: '/about/foto2.jpeg',
    alt: 'Deskripsi foto kedua',
  },
]
 
function ImageCarousel() {
  const [index, setIndex] = useState(0)
  const startX = useRef(0)
  const dragging = useRef(false)
 
  useEffect(() => {
    const t = setInterval(() => setIndex(p => (p + 1) % aboutImages.length), 4000)
    return () => clearInterval(t)
  }, [])
 
  const goTo = (i: number) => setIndex((i + aboutImages.length) % aboutImages.length)
 
  return (
    <div className="w-full max-w-sm">
      <div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 select-none cursor-grab active:cursor-grabbing"
        onMouseDown={e => { dragging.current = true; startX.current = e.clientX }}
        onMouseUp={e => {
          if (!dragging.current) return
          dragging.current = false
          const d = e.clientX - startX.current
          if (d > 50) goTo(index - 1)
          else if (d < -50) goTo(index + 1)
        }}
        onTouchStart={e => { dragging.current = true; startX.current = e.touches[0].clientX }}
        onTouchEnd={e => {
          if (!dragging.current) return
          dragging.current = false
          const d = e.changedTouches[0].clientX - startX.current
          if (d > 50) goTo(index - 1)
          else if (d < -50) goTo(index + 1)
        }}
      >
        {aboutImages.map((img, i) => (
          <img
            key={i} src={img.src} alt={img.alt} draggable={false}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
      </div>
      <div className="mt-4 flex justify-center gap-x-2">
        {aboutImages.map((_, i) => (
          <button
            key={i} onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  )
}
 
export default function AboutSection() {
  const stats = [
    { label: 'Projects Built', value: '10+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Cups of Coffee', value: '∞' },
  ]
 
  return (
    <section id="about" className="relative pt-14 pb-24 sm:pb-32 overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{ clipPath: 'polygon(0 0,100% 20%,100% 80%,0 100%)' }}
          className="relative left-[calc(50%-20rem)] w-[60rem] aspect-[2/1] bg-gradient-to-r from-blue-700 to-indigo-700 opacity-10"
        />
      </div>
 
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-x-3 mb-4">
          <span className="h-px flex-1 max-w-[3rem] bg-blue-500/60" />
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">About Me</span>
        </div>
 
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
          <Reveal>
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Passionate about building things <span className="text-blue-400">for the web</span>
            </h2>
            <p className="mt-6 text-lg text-gray-400 leading-8">
              Hi! I'm <span className="text-white font-semibold">Muhammad Zaky Novananda</span>, a final-year Informatics Engineering student. I enjoy building clean,
              performant web applications and exploring the intersection of <span className="text-blue-400">web development</span> and{' '}
              <span className="text-blue-400">machine learning</span>.
            </p>
            <p className="mt-4 text-base text-gray-500 leading-7">
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, 
              you'll find me reading about AI research or experimenting with new frameworks.
            </p>
 
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map(s => (
                <div key={s.label} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center hover:bg-white/8 transition">
                  <div className="text-2xl font-bold text-blue-400">{s.value}</div>
                  <div className="mt-1 text-xs text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
 
          <Reveal delay={150}>
          <div className="mt-16 lg:mt-0 flex justify-center lg:justify-end">
            <ImageCarousel />
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}