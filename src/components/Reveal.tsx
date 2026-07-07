import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Delay animasi dalam milidetik, berguna untuk efek staggered pada grid/list */
  delay?: number
  /** Class tambahan untuk wrapper div */
  className?: string
}

/**
 * Membungkus children dengan efek fade-in + slide-up
 * yang muncul otomatis saat elemen masuk ke viewport (scroll reveal).
 *
 * Contoh pemakaian:
 *   <Reveal delay={100}>
 *     <div>Konten card</div>
 *   </Reveal>
 */
export default function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el) // animasi cukup sekali, tidak berulang tiap scroll
        }
      },
      { threshold: 0.15 } // trigger saat 15% elemen terlihat
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
