import NavLink from "@/components/NavLink"

export const metadata = {
  title: 'GeniusGarage',
  description: 'Store your genius code snippets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main style={{ padding: '4rem 2rem', fontFamily: 'system-ui', maxWidth: '1200px', margin: '0 auto' }}>
          {/* TODO: Add navigation bar with logo and links */}

          <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
            <NavLink href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
              🧠 GeniusGarage
            </NavLink>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <NavLink href="/features" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>Features</NavLink>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
