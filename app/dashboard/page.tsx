'use client'

import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  const handleLogout = () => {
    // Clear the auth cookie
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    router.push('/login')
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>
      
      <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', borderRadius: '8px', marginBottom: '2rem' }}>
        <h2>Welcome to your Dashboard!</h2>
        <p>This is a protected route. You can only access this page when authenticated.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
        <div style={{ padding: '1.5rem', backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px' }}>
          <h3>User Statistics</h3>
          <p>Total Visits: 42</p>
          <p>Last Login: Today</p>
          <p>Account Status: Active</p>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px' }}>
          <h3>Quick Actions</h3>
          <button
            onClick={() => router.push('/profile')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '0.5rem'
            }}
          >
            View Profile
          </button>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px' }}>
          <h3>Recent Activity</h3>
          <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
            <li>Logged in successfully</li>
            <li>Accessed dashboard</li>
            <li>Updated profile settings</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
