export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ 
          padding: '1rem', 
          backgroundColor: '#f0f0f0', 
          borderBottom: '1px solid #ccc',
          marginBottom: '2rem'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '1rem' }}>
            <a href="/" style={{ textDecoration: 'none', color: '#0070f3' }}>Home</a>
            <a href="/login" style={{ textDecoration: 'none', color: '#0070f3' }}>Login</a>
            <a href="/dashboard" style={{ textDecoration: 'none', color: '#0070f3' }}>Dashboard</a>
            <a href="/profile" style={{ textDecoration: 'none', color: '#0070f3' }}>Profile</a>
          </div>
        </nav>
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
