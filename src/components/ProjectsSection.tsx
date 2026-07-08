import Reveal from './Reveal'
 
const projects = [
  {
    title: 'Questify',
    description:
      'Platform edukasi interaktif berbasis kuis dengan tantangan tingkat level untuk meningkatkan motivasi belajar dan berpikir kritis.',
    tags: ['Python', 'Django', 'MySQL', 'Bootstrap'],
    status: 'Completed',
    color: 'from-blue-600 to-indigo-600',
    image: '/projects/questify.png',
  },
  {
    title: 'Vanshop',
    description:
      'Platform toko online dengan keranjang belanja, manajemen produk, dan penyimpanan gambar berbasis cloud.',
    tags: ['Laravel', 'Cloudinary', 'MySQL', 'Railway'],
    status: 'Completed',
    color: 'from-blue-600 to-indigo-600',
    image: '/projects/vanshop.jpeg',
  },
  {
    title: 'DuitSaku',
    description:
      'Duitsaku merupakan aplikasi berbasis web yang dibuat untuk membantu mahasiswa terutama dalam manajemen keuangan selama berkuliah atau ngekost.',
    tags: ['Laravel', 'Blade', 'MySQL', 'Bootstrap'],
    status: 'Completed',
    color: 'from-blue-600 to-indigo-600',
    image: '/projects/duitsaku.jpeg',
  },
  {
    title: 'RentalKu',
    description:
      'Website rental mobil untuk client, lengkap dengan alur pemesanan dan panel pengelolaan armada',
    tags: ['Next.js', 'Vercel', 'Supabase',],
    status: 'Completed',
    color: 'from-blue-600 to-indigo-600',
    image: '/projects/rentalku.jpeg',
  },
  {
    title: 'RedSco Perfume',
    description:
      'Website penjualana yang dibuat untuk membantu umkm lokal dengan mempromosikan beberapa varian parfum dari toko nya',
    tags: ['Laravel', 'Mysql', 'Bootstrap'],
    status: 'Completed',
    color: 'from-blue-600 to-indigo-600',
    image: '/projects/redsco.jpeg',
  },
  {
    title: 'Basne',
    description:
      'Website yang saya buat karena permasalahan di pedesaan yaitusulitnya dalam menjual dan mencari pengepul panenan hasil petani saat musim panen',
    tags: ['Laravel', 'Blade', 'Mysql', 'Cloudinary', 'Railway'],
    status: 'Completed',
    color: 'from-blue-600 to-indigo-600',
    image: '/projects/basne.jpeg',
  },
]
 
export default function ProjectsSection() {
  return (
    <section id="project" className="relative pt-20 pb-32" style={{ scrollMarginTop: '80px' }}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div
          style={{ clipPath: 'polygon(0 0,100% 20%,100% 80%,0 100%)' }}
          className="relative left-[calc(50%-20rem)] w-[60rem] aspect-[2/1] bg-gradient-to-r from-blue-700 to-indigo-700 opacity-10"
        />
      </div>
 
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        <div className="flex items-center gap-x-3 mb-4">
          <span className="h-px flex-1 max-w-[3rem] bg-blue-500/60" />
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Projects</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-3">
          Things I've <span className="text-blue-400">Built</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mb-12">
          Kumpulan proyek nyata yang pernah saya kerjakan — dari web app hingga machine learning.
        </p>
        </Reveal>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
            <div
              className="group relative flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-blue-500/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Preview gambar UI/halaman project */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={`Tampilan UI project ${project.title}`}
                  className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-transparent" />
                <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${project.color}`} />
              </div>
 
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <span
                    className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      project.status === 'Completed'
                        ? 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30'
                        : 'bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
 
                <p className="text-sm text-gray-400 leading-relaxed flex-1">
                  {project.description}
                </p>
 
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20"
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
 
        {/* Link ke arsip project lengkap di GitHub */}
        <Reveal delay={projects.length * 100}>
          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/Zakynovan18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-1 text-sm font-semibold text-white hover:text-blue-400 transition"
            >
              View Archive Project <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}