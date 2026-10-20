import Reveal from './Reveal'

function AboutPortrait() {
  return (
    <div className="about-portrait" aria-label="Portrait of Muhammad Zaky Novananda">
      <span className="about-portrait-ring" aria-hidden="true" />
      <img src="/about/foto1.png" alt="Muhammad Zaky Novananda" />
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
    <section id="about" className="relative pt-14 pb-8 sm:pb-12 overflow-hidden" style={{ scrollMarginTop: '80px' }}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{ clipPath: 'polygon(0 0,100% 20%,100% 80%,0 100%)' }}
          className="relative left-[calc(50%-20rem)] w-[60rem] aspect-[2/1] bg-gradient-to-r from-green-700 to-emerald-700 opacity-10"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-x-3 mb-4">
          <span className="h-px flex-1 max-w-[3rem] bg-green-500/60" />
          <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">About Me</span>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
          <Reveal>
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Passionate about building things <span className="text-green-400">for the web</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
                Hi! I'm <span className="text-white font-semibold">Muhammad Zaky Novananda</span>, a recent Informatics Engineering graduate. I enjoy building clean,
                performant web applications and exploring the intersection of <span className="text-green-400">web development</span> and{' '}
                <span className="text-green-400">machine learning</span>.
              </p>
              <p className="mt-4 max-w-xl text-base leading-7 text-gray-400">
                I enjoy turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding,
                you'll find me reading about AI research or experimenting with new frameworks.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {stats.map(s => (
                  <div key={s.label} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center hover:bg-white/8 transition">
                    <div className="text-2xl font-bold text-green-400">{s.value}</div>
                    <div className="mt-1 text-xs text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-16 flex justify-center lg:mt-0 lg:justify-end">
              <AboutPortrait />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}