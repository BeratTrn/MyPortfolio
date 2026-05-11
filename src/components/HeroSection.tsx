import type { Translations } from '../data/translations'

interface HeroProps {
  theme: 'dark' | 'light'
  toggleTheme: () => void
  settingsOpen: boolean
  setSettingsOpen: (v: boolean) => void
  soundOn: boolean
  toggleSound: () => void
  t: Translations
}

export function HeroSection({
  theme,
  toggleTheme,
  settingsOpen,
  setSettingsOpen,
  soundOn,
  toggleSound,
  t,
}: HeroProps) {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="hero-gradient"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '64px 5% 80px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <p
          style={{
            fontFamily: 'monospace',
            fontSize: '1.1rem',
            color: 'var(--muted)',
            marginBottom: '16px',
          }}
        >
          {t.hero.greeting}
        </p>
        <h1
          className="gradient-text"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          {t.hero.name}
        </h1>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: 'var(--foreground)',
            marginBottom: '24px',
            lineHeight: 1.2,
            transition: 'color 0.4s',
          }}
        >
          {t.hero.title}
        </h2>
        <p
          style={{
            color: 'var(--muted)',
            fontSize: '1rem',
            maxWidth: '700px',
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          {t.hero.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta-button"
          >
            {t.hero.projectsBtn}
          </button>
          <button
            onClick={scrollToContact}
            className="cta-button"
            style={{ background: 'transparent', border: '1px solid var(--primary)' }}
          >
            {t.hero.contactBtn}
          </button>
          <div style={{ position: 'relative', display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setSettingsOpen(!settingsOpen)}
              className="icon-btn"
              title="Settings"
              aria-label="Toggle settings"
            >
              <img src="/svg/settings-svgrepo-com.svg" alt="Settings" style={{ width: '20px', height: '20px' }} />
            </button>
            {settingsOpen && (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => {
                    toggleTheme()
                    setSettingsOpen(false)
                  }}
                  className="icon-btn"
                  title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <img src="/png/sun.png" alt="Sun" style={{ width: '20px', height: '20px' }} />
                  ) : (
                    <img src="/png/crescent-moon.png" alt="Moon" style={{ width: '20px', height: '20px' }} />
                  )}
                </button>
                <button
                  onClick={() => {
                    toggleSound()
                    setSettingsOpen(false)
                  }}
                  className="icon-btn"
                  title={soundOn ? 'Mute sound' : 'Play ambient sound'}
                  aria-label="Toggle sound"
                >
                  {soundOn ? (
                    <img src="/svg/Mute_Icon.svg" alt="Mute" style={{ width: '20px', height: '20px' }} />
                  ) : (
                    <img src="/svg/Speaker_Icon.svg" alt="Speaker" style={{ width: '20px', height: '20px' }} />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
