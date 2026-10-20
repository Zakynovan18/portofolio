import Reveal from './Reveal'

const interests = ['Web development', 'Machine learning', 'AI research', 'New frameworks']

export default function InterestsSection() {
  return (
    <section className="relative py-12 sm:py-16" aria-labelledby="interests-title">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden bg-white/5 px-7 py-8 ring-1 ring-white/10 sm:px-10 sm:py-12">
            <div aria-hidden="true" className="absolute -right-8 -top-12 select-none text-[7rem] font-black leading-none tracking-[-0.08em] text-white/[0.035] sm:text-[10rem]">
              IDEAS
            </div>
            <p className="relative max-w-md text-2xl font-bold leading-snug text-white sm:text-3xl">
              I’m most curious about
            </p>
            <ul className="relative mt-7 grid grid-cols-1 gap-y-3 sm:grid-cols-2">
              {interests.map((interest) => (
                <li key={interest} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div>
            <div className="mb-4 flex items-center gap-x-3">
              <span className="h-px max-w-[3rem] flex-1 bg-green-500/60" />
              <span className="text-xs font-semibold uppercase tracking-widest text-green-400">
                Beyond the projects
              </span>
            </div>
            <h2 id="interests-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Curiosity keeps me building.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
              I enjoy exploring how the web can make everyday tasks simpler, and how machine learning can unlock new possibilities. I spend my time reading about AI research and experimenting with frameworks to keep learning by building.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
