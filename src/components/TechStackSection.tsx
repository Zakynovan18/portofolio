import Reveal from './Reveal'
 
const techStacks = [
  { name: 'HTML5',       color: '#E34F26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',        color: '#1572B6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', color: '#F7DF1E', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', color: '#3178C6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React',       color: '#61DAFB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js',     color: '#FFFFFF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'VS Code', color: '#007ACC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Tailwind',   color: '#06B6D4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js',    color: '#339933', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python',      color: '#3776AB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Laravel',     color: '#FF2D20', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'MySQL',       color: '#4479A1', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git',         color: '#F05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker',      color: '#2496ED', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
]
 
// Bagi jadi 2 baris — separuh pertama & separuh kedua
const half = Math.ceil(techStacks.length / 2)
const row1 = techStacks.slice(0, half)
const row2 = techStacks.slice(half)
 
// Duplikasi tiap baris biar animasi marquee-nya nyambung mulus (seamless loop)
const scrollRow1 = [...row1, ...row1]
const scrollRow2 = [...row2, ...row2]
 
function TechRow({
  items,
  reverse = false,
  duration = '22s',
}: {
  items: typeof techStacks
  reverse?: boolean
  duration?: string
}) {
  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%' }}>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-slate-950 to-transparent" />
 
      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          width: 'max-content',
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${duration} linear infinite`,
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            className="group flex flex-col items-center gap-y-3 rounded-2xl bg-white/5 ring-1 ring-white/10 px-6 pt-7 pb-5 flex-shrink-0 hover:bg-white/10 hover:ring-blue-500/40 transition-all duration-300 cursor-default"
            style={{ width: '160px' }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="h-14 w-14 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              style={{ filter: tech.name === 'Next.js' ? 'invert(1)' : undefined }}
            />
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors text-center leading-tight">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
 
export default function TechStackSection() {
  return (
    <section id="techstack" className="relative pt-20 pb-24 sm:pb-32" style={{ scrollMarginTop: '80px' }}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{ clipPath: 'polygon(0 20%,100% 0,100% 100%,0 80%)' }}
          className="relative right-[calc(50%-20rem)] w-[60rem] aspect-[2/1] bg-gradient-to-l from-blue-700 to-indigo-700 opacity-10"
        />
      </div>
 
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <Reveal>
        <div className="flex items-center gap-x-3 mb-4">
          <span className="h-px flex-1 max-w-[3rem] bg-blue-500/60" />
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Tech Stack</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
          Tools & Technologies I <span className="text-blue-400">Work With</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          A collection of languages, frameworks, and tools I use to build modern, scalable applications.
        </p>
        </Reveal>
      </div>
 
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
 
      <div className="flex flex-col gap-y-6">
        {/* Baris 1: bergerak kanan → kiri */}
        <TechRow items={scrollRow1} duration="24s" />
 
        {/* Baris 2: bergerak kiri → kanan */}
        <TechRow items={scrollRow2} reverse duration="24s" />
      </div>
    </section>
  )
}