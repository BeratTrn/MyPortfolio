import { SOCIALS } from '../data/constants'
import type { Translations } from '../data/translations'

export function ContactSection({ t }: { t: Translations }) {
  return (
    <section
      id="contact"
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 5% 0px',
        position: 'relative',
        background: 'linear-gradient(to bottom, var(--background), #05050c)',
      }}
    >
      <div style={{ textAlign: 'center', zIndex: 1, width: '100%' }}>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: 'clamp(1rem, 3vw, 1.5rem)',
            color: 'var(--muted)',
            marginBottom: '32px',
            letterSpacing: '0.05em',
            transition: 'color 0.4s',
          }}
        >
          {t.contact.quote}
        </p>
        <a
          href="mailto:turanberatr@gmail.com"
          style={{
            fontFamily: 'monospace',
            fontSize: '1.1rem',
            textDecoration: 'none',
            display: 'inline-block',
            marginBottom: '40px',
            background: 'linear-gradient(90deg, #c084fc, #a855f7, #7c3aed, #a855f7, #c084fc)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'textGradientShift 4s ease infinite',
          }}
        >
          {t.contact.getInTouch}
        </a>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '60px',
          }}
        >
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                border: '2px solid var(--muted)',
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--foreground)',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)'
                e.currentTarget.style.color = 'var(--primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--muted)'
                e.currentTarget.style.color = 'var(--foreground)'
              }}
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Decorative avatar area */}
        <div
          style={{
            width: '100%',
            maxWidth: '300px',
            margin: '0 auto',
            background: 'linear-gradient(to top, rgba(168,85,247,0.3), transparent 60%)',
            borderRadius: '200px 200px 0 0',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingTop: '40px',
          }}
        >
          <img src="/png/nav-avatar.png" alt="Avatar" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
        className="back-to-top"
        style={{
          position: 'absolute',
          right: '24px',
          bottom: '120px',
          background: 'none',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        ↑ BACK TO TOP
      </button>
    </section>
  )
}
