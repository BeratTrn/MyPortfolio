import { useEffect, useRef, useState } from 'react'
import { TECH_STACK } from '../data/constants'
import type { Translations } from '../data/translations'

function TechGrid() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="tech-grid">
      {TECH_STACK.map((tech, i) => (
        <div
          key={tech.name}
          className={`tech-card ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          <div className="tech-icon">{tech.icon}</div>
          <span className="tech-label">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}

export function SkillsSection({ t }: { t: Translations }) {
  return (
    <section
      id="skills"
      style={{
        padding: '100px 5%',
        background: 'var(--background)',
        transition: 'background 0.4s',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 className="section-title">{t.skills.title}</h2>

        <p
          style={{
            textAlign: 'center',
            color: 'var(--foreground)',
            marginBottom: '60px',
            fontFamily: 'monospace',
            letterSpacing: '0.2em',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}
        >
          {t.skills.techStack}
        </p>

        <TechGrid />
      </div>
    </section>
  )
}
