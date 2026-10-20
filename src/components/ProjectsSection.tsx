import Reveal from './Reveal'
 
const projects = [
  {
    title: 'Questify',
    description:
      'An interactive, quiz-based learning platform featuring level-based challenges to boost learning motivation and critical thinking.',
    tags: ['Python', 'Django', 'MySQL', 'Bootstrap'],
    image: '/projects/questify.png',
  },
  {
    title: 'Vanshop',
    description:
      'An online store with a shopping cart, product management, and cloud-based image storage.',
    tags: ['Laravel', 'Cloudinary', 'MySQL', 'Railway'],
    image: '/projects/vanshop.jpeg',
  },
  {
    title: 'DuitSaku',
    description:
      'A web application that helps university students manage their finances while studying or living away from home.',
    tags: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
    image: '/projects/duitsaku.jpeg',
  },
  {
    title: 'RentalKu',
    description:
      'A car rental website featuring a booking workflow and a fleet management dashboard.',
    tags: ['Next.js', 'Vercel', 'Supabase',],
    image: '/projects/rentalku.jpeg',
  },
  {
    title: 'RedSco Perfume',
    description:
      'A website that helps a local small business promote its range of perfumes.',
    tags: ['Laravel', 'Mysql', 'Bootstrap'],
    image: '/projects/redsco.jpeg',
  },
  {
    title: 'Basne',
    description:
      'A website that helps rural farmers sell their harvest and connect with produce buyers during harvest season.',
    tags: ['Laravel', 'Blade', 'Mysql', 'Cloudinary', 'Railway'],
    image: '/projects/basne.jpeg',
  },
]
 
export default function ProjectsSection() {
  return (
    <section id="project" className="relative pt-8 pb-12 sm:pb-16" style={{ scrollMarginTop: '80px' }}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{ clipPath: 'polygon(0 0,100% 20%,100% 80%,0 100%)' }}
          className="relative left-[calc(50%-20rem)] w-[60rem] aspect-[2/1] bg-gradient-to-r from-green-700 to-emerald-700 opacity-10"
        />
      </div>
 
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        <div className="flex items-center gap-x-3 mb-4">
          <span className="h-px flex-1 max-w-[3rem] bg-green-500/60" />
          <span className="text-xs font-semibold tracking-widest text-green-400 uppercase">Projects</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
          Selected Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mb-12">
          A selection of web applications built to solve practical problems.
        </p>
        </Reveal>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
            <div
              className="group flex min-w-0 flex-col"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} project interface`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
 
              <div className="flex flex-1 flex-col gap-3 pt-5">
                <h3 className="text-xl font-bold leading-snug text-white transition-colors group-hover:text-green-300">
                  {project.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>
 
                <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-green-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
 
        {/* Link to the full project archive on GitHub */}
        <Reveal delay={projects.length * 100}>
          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/Zakynovan18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-1 text-sm font-semibold text-white transition hover:text-green-400"
            >
              View project archive <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}