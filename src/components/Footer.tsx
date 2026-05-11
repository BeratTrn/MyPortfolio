export function Footer() {
  return (
    <footer
      style={{
        background: '#05050c',
        padding: '20px 5%',
        textAlign: 'center',
        borderTop: 'none',
        transition: 'background 0.4s',
      }}
    >
      <p style={{ color: 'var(--muted)', fontSize: '0.8rem', fontFamily: 'monospace' }}>
        Design &amp; Built by <span style={{ color: 'var(--primary)' }}>Berat Turan</span> © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
