import { useEffect, useRef, useState } from 'react'
import '../styles/components/animations.css'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimateOnScroll({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const extraStyle = { transitionDelay: `${delay}ms` }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      ref={ref as any}
      className={`${className} aos ${inView ? 'in-view' : ''}`}
      style={extraStyle}
    >
      {children}
    </div>
  )
}
