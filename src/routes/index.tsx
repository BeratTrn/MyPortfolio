import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

import { AboutSection } from '../components/AboutSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { HeroSection } from '../components/HeroSection'
import { Navbar } from '../components/Navbar'
import { ProjectsSection } from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'
import { TRANSLATIONS } from '../data/translations'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const [lang, setLang] = useState<'tr' | 'en'>('tr')
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const t = TRANSLATIONS[lang]

  // ── Active section tracking ─────────────────────────────────────────────────
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // ── Theme sync ──────────────────────────────────────────────────────────────
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  // ── Sound toggle ────────────────────────────────────────────────────────────
  const toggleSound = () => {
    if (!soundOn) {
      try {
        const audio = new Audio('/mp3/preloader.mp3')
        audio.loop = true
        audio.volume = 0.3
        audio.play()
        audioRef.current = audio
        setSoundOn(true)
      } catch {
        setSoundOn(false)
      }
    } else {
      try {
        audioRef.current?.pause()
      } catch {
        /* ignore */
      }
      audioRef.current = null
      setSoundOn(false)
    }
  }

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', transition: 'background 0.4s' }}>
      <Navbar active={activeSection} t={t} lang={lang} setLang={setLang} />
      <HeroSection
        theme={theme}
        toggleTheme={toggleTheme}
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
        soundOn={soundOn}
        toggleSound={toggleSound}
        t={t}
      />
      <AboutSection t={t} />
      <SkillsSection t={t} />
      <ProjectsSection t={t} />
      <ContactSection t={t} />
      <Footer />
    </div>
  )
}
