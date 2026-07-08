const footerNav = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Tech Stack', href: '#techstack' },
  { name: 'Project', href: '#project' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
]
 
// Ikon dibuat manual pakai SVG (bukan dari @heroicons, karena heroicons cuma
// menyediakan ikon umum, bukan logo brand seperti Instagram/GitHub/dsb)
const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/Zakynovan18',
    hoverColor: 'hover:text-white',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-zaky-novananda-3567ab321?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    hoverColor: 'hover:text-blue-400',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.783 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-1.337-.024-3.059-1.865-3.059-1.868 0-2.155 1.459-2.155 2.964v5.699h-3v-11h2.881v1.503h.041c.401-.757 1.379-1.556 2.839-1.556 3.036 0 3.6 2 3.6 4.601v6.452z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/zakynovannd_?igsh=MWp0NGowNTBoeXo1eg==',
    hoverColor: 'hover:text-pink-400',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7">
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.945 2.525c.636-.247 1.363-.416 2.427-.465C9.396 2.013 9.75 2 12.18 2h.135zm-.081 1.802h-.169c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.169c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.098 3.098 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/6281358714035',
    hoverColor: 'hover:text-emerald-400',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path
          fillRule="evenodd"
          d="M12.004 2c-5.514 0-9.987 4.474-9.987 9.988 0 1.762.462 3.415 1.269 4.847L2 22l5.267-1.382a9.945 9.945 0 0 0 4.737 1.204h.004c5.514 0 9.987-4.474 9.987-9.987C21.995 6.474 17.522 2 12.004 2zm0 18.187a8.19 8.19 0 0 1-4.169-1.14l-.299-.177-3.126.82.834-3.05-.194-.312a8.184 8.184 0 0 1-1.256-4.34c0-4.522 3.68-8.201 8.214-8.201 2.194 0 4.256.854 5.808 2.407a8.157 8.157 0 0 1 2.405 5.806c0 4.523-3.68 8.187-8.417 8.187z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]
 
export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-y-8 sm:flex-row sm:items-start sm:justify-between sm:gap-y-0">
          {/* Logo & tagline */}
          <div className="text-center sm:text-left">
            <a href="#home" className="text-2xl font-bold tracking-tight text-white">
              Nanda.
            </a>
            <p className="mt-2 max-w-xs text-base text-gray-500">
              Web Developer &amp; Machine Learning Enthusiast. Membangun sesuatu yang bermanfaat, satu baris kode dalam satu waktu. <br /> Visca Barca Visca Catalunya.
            </p>
          </div>
 
          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start">
            {footerNav.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base text-gray-400 hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
 
          {/* Social icons */}
          <div className="flex items-center gap-x-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`text-gray-500 ${social.hoverColor} transition-colors`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
 
        {/* Divider + copyright */}
<div className="mt-10 border-t border-white/5 pt-6">
  <p className="text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} Novananda. All rights reserved.
  </p>
</div>
      </div>
    </footer>
  )
}