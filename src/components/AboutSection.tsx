import { Download } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { Translations } from '../data/translations'

export function AboutSection({ t }: { t: Translations }) {
  const [photoVisible, setPhotoVisible] = useState(false)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setPhotoVisible(entry.isIntersecting)
      },
      { threshold: 0.15 },
    )
    if (photoRef.current) observer.observe(photoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      style={{ padding: '100px 5%', background: 'var(--background)', transition: 'background 0.4s' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 className="section-title">{t.about.title}</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '60px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Text */}
          <div
            style={{
              color: 'var(--muted)',
              fontSize: '1rem',
              lineHeight: 1.8,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            <p>{t.about.paragraph3}</p>

            {/* Resume button */}
            <div style={{ marginTop: '24px' }}>
              <a
                href="/pdf/Berat_Turan_CV.pdf"
                download
                className="resume-btn"
                title="Download Resume"
              >
                <Download size={18} />
                <span className="resume-label">{t.about.resume}</span>
              </a>
            </div>
          </div>

          {/* Right: Photo with scroll-trigger + L-corner frame */}
          <div
            ref={photoRef}
            className={`about-photo-wrapper ${photoVisible ? 'visible' : ''}`}
            style={{
              width: '300px',
              height: '380px',
              flexShrink: 0,
              opacity: photoVisible ? 1 : 0,
              transform: photoVisible
                ? 'translateY(0) scale(1)'
                : 'translateY(60px) scale(0.92)',
              transition: 'opacity 1.2s cubic-bezier(0.22,1,0.36,1), transform 1.2s cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            {/* L-corner borders */}
            <span className="corner-border top-left" />
            <span className="corner-border top-right" />
            <span className="corner-border bottom-left" />
            <span className="corner-border bottom-right" />

            <div className="about-photo">
              <img
                src="/png/Ben.jpg"
                alt="Berat Turan"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
