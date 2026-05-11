import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { Translations } from '../data/translations'

interface NavbarProps {
  active: string
  t: Translations
  lang: 'tr' | 'en'
  setLang: (l: 'tr' | 'en') => void
}

export function Navbar({ active, t, lang, setLang }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
      }}
    >
      <div className="nav-card">
        {/* Avatar */}
        <img
          src="/png/nav-avatar.png"
          alt="Profile"
          className="nav-avatar"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex" style={{ gap: '24px', alignItems: 'center' }}>
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`nav-link mono ${isActive ? 'active' : ''}`}
              >
                {isActive && (
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      display: 'inline-block',
                    }}
                  />
                )}
                {item.label}
              </button>
            )
          })}
        </div>

        {/* Language Toggle */}
        <button
          onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
          className="icon-btn"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '1px solid rgba(168,85,247,0.25)',
            background: 'rgba(168,85,247,0.08)',
            color: lang === 'tr' ? 'var(--primary)' : 'var(--muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.85rem',
            fontWeight: 700,
            fontFamily: 'monospace',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(168,85,247,0.2)'
            e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(168,85,247,0.08)'
            e.currentTarget.style.borderColor = 'rgba(168,85,247,0.25)'
          }}
        >
          {lang === 'tr' ? 'TR' : 'EN'}
        </button>

        {/* Mobile menu toggle */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--muted)',
            cursor: 'pointer',
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            marginTop: '12px',
            background: 'rgba(10,10,20,0.97)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(168,85,247,0.15)',
            borderRadius: '16px',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            minWidth: '200px',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              style={{
                background: 'none',
                border: 'none',
                color: '#e2e8f0',
                fontFamily: 'monospace',
                fontSize: '1rem',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
