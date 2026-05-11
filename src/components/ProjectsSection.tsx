import { ArrowUpRight, ExternalLink, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PROJECTS } from '../data/constants'
import type { Translations } from '../data/translations'

// ─── Project Modal ─────────────────────────────────────────────────────────────

interface ProjectModalProps {
  project: (typeof PROJECTS)[number]
  onClose: () => void
  t: Translations
}

function ProjectModal({ project, onClose, t }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const details = project.details

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % details.gorseller.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + details.gorseller.length) % details.gorseller.length)
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--background)',
          borderRadius: '24px',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(168,85,247,0.1)',
            border: '1px solid rgba(168,85,247,0.2)',
            color: 'var(--foreground)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(168,85,247,0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(168,85,247,0.1)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ padding: '40px' }}>
          {/* Header */}
          <div style={{ marginBottom: '40px' }}>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--foreground)',
                marginBottom: '16px',
              }}
            >
              {details.baslik}
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              {details.aciklama}
            </p>
          </div>

          {/* Özellikler */}
          <div style={{ marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--foreground)',
                marginBottom: '16px',
              }}
            >
              {t.projects.modal.ozellikler}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {details.ozellikler.map((ozellik: string, i: number) => (
                <li
                  key={i}
                  style={{
                    color: 'var(--muted)',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>•</span>
                  {ozellik}
                </li>
              ))}
            </ul>
          </div>

          {/* Kullanılan Teknolojiler */}
          <div style={{ marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--foreground)',
                marginBottom: '16px',
              }}
            >
              {t.projects.modal.teknolojiler}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {details.teknolojiler.map((tech: string, i: number) => (
                <li key={i} style={{ color: 'var(--muted)', fontSize: '1rem' }}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Amaç */}
          <div style={{ marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--foreground)',
                marginBottom: '16px',
              }}
            >
              {t.projects.modal.amac}
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              {details.amac}
            </p>
          </div>

          {/* Projeye Ait Görseller */}
          <div>
            <h2
              style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: 'var(--foreground)',
                marginBottom: '24px',
              }}
            >
              {t.projects.modal.gorseller}
            </h2>

            {/* Gallery */}
            <div
              style={{
                position: 'relative',
                background: 'linear-gradient(to right, rgba(168,85,247,0.15), rgba(124,58,237,0.15))',
                borderRadius: '24px',
                padding: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',
              }}
            >
              {/* Previous button */}
              <button
                onClick={prevImage}
                style={{
                  position: 'absolute',
                  left: '20px',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(168,85,247,0.8)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0,0,0,0.5)'
                }}
              >
                ‹
              </button>

              {/* Main image */}
              <img
                src={details.gorseller[currentImageIndex]}
                alt={`Ekran görüntüsü ${currentImageIndex + 1}`}
                style={{
                  maxHeight: '350px',
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                }}
              />

              {/* Next button */}
              <button
                onClick={nextImage}
                style={{
                  position: 'absolute',
                  right: '20px',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(168,85,247,0.8)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0,0,0,0.5)'
                }}
              >
                ›
              </button>
            </div>

            {/* Thumbnails */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '12px',
                marginTop: '20px',
                flexWrap: 'wrap',
              }}
            >
              {details.gorseller.map((gorsel: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  style={{
                    width: '60px',
                    height: '100px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: i === currentImageIndex ? '2px solid var(--primary)' : '2px solid transparent',
                    background: 'transparent',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <img
                    src={gorsel}
                    alt={`Küçük resim ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Projects Section ─────────────────────────────────────────────────────────

export function ProjectsSection({ t }: { t: Translations }) {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[number] | null>(null)

  const getProjects = () => {
    if (!t.projects?.list) return PROJECTS
    return PROJECTS.map((p, i) => ({
      ...p,
      title: t.projects.list[i]?.title || p.title,
      description: t.projects.list[i]?.description || p.description,
      details: {
        ...p.details,
        baslik: t.projects.list[i]?.details?.baslik || p.details.baslik,
        aciklama: t.projects.list[i]?.details?.aciklama || p.details.aciklama,
        ozellikler: t.projects.list[i]?.details?.ozellikler || p.details.ozellikler,
        teknolojiler: t.projects.list[i]?.details?.teknolojiler || p.details.teknolojiler,
        amac: t.projects.list[i]?.details?.amac || p.details.amac,
      },
    }))
  }

  const projects = getProjects()

  return (
    <>
      <section
        id="projects"
        style={{ padding: '100px 5%', background: 'var(--background)', transition: 'background 0.4s' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 className="section-title">{t.projects.title}</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                {/* Left: text */}
                <div
                  style={{
                    padding: '36px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '12px',
                  }}
                >
                  {project.icon && (
                    <img
                      src={project.icon}
                      alt=""
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'rgba(168,85,247,0.1)',
                        border: '1px solid rgba(168,85,247,0.2)',
                      }}
                    />
                  )}
                  <h3
                    style={{
                      color: 'var(--foreground)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      transition: 'color 0.4s',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7 }}>
                    {project.description}
                  </p>
                  <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: 'rgba(168,85,247,0.15)',
                          color: 'var(--primary)',
                          border: '1px solid rgba(168,85,247,0.3)',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(168,85,247,0.25)'
                          e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(168,85,247,0.15)'
                          e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)'
                        }}
                      >
                        <img
                          src="/png/githublogo.png"
                          alt="GitHub"
                          style={{
                            width: '24px',
                            height: '24px',
                            filter:
                              'brightness(0) saturate(100%) invert(57%) sepia(55%) saturate(2726%) hue-rotate(238deg) brightness(101%) contrast(96%)',
                          }}
                        />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(168,85,247,0.15)',
                        color: 'var(--primary)',
                        border: '1px solid rgba(168,85,247,0.3)',
                        padding: '10px 20px',
                        borderRadius: '50px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(168,85,247,0.25)'
                        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(168,85,247,0.15)'
                        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)'
                      }}
                    >
                      {t.projects.liveView} <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Right: preview */}
                <div
                  style={{
                    background: '#14142a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderLeft: '1px solid #1e1e35',
                    minHeight: '200px',
                    maxHeight: '400px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        maxHeight: '350px',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px',
                        color: '#334155',
                      }}
                    >
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '12px',
                          background: 'rgba(168,85,247,0.1)',
                          border: '1px solid rgba(168,85,247,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ExternalLink size={24} color="#a855f7" />
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#475569' }}>{project.title}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && selectedProject.details && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          t={t}
        />
      )}
    </>
  )
}
