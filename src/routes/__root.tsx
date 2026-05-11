import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: '<Berat Turan Computer Engineer/>' },
      { name: 'description', content: 'Berat Turan — Mobile & Full-Stack Developer Portfolio' },
    ],
    links: [
      { rel: 'icon', type: 'image/png', href: '/png/nav-avatar.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="portfolio-bg">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
