export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Next.js App</h1>
      <p>This is the home page. You can access this without authentication.</p>
      <div style={{ marginTop: '2rem' }}>
        <h2>Available Routes:</h2>
        <ul>
          <li><strong>/login</strong> - Login page (accessible when not authenticated)</li>
          <li><strong>/dashboard</strong> - Protected route (requires authentication)</li>
          <li><strong>/profile</strong> - Protected route (requires authentication)</li>
        </ul>
      </div>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
        <h3>How it works:</h3>
        <ol>
          <li>Visit /login to authenticate yourself</li>
          <li>Once logged in, you can access /dashboard and /profile</li>
          <li>If you try to access protected routes without login, you'll be redirected to /login</li>
          <li>If you're already logged in and try to visit /login, you'll be redirected to /dashboard</li>
        </ol>
      </div>
    </div>
  )
}
