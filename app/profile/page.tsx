'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ProfilePage() {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Administrator',
    joinDate: '2024-01-15'
  })

  const handleLogout = () => {
    // Clear the auth cookie
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    router.push('/login')
  }

  const handleSave = () => {
    setIsEditing(false)
    // In a real app, you would save to a backend here
    alert('Profile updated successfully!')
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Profile</h1>
        <div>
          <button
            onClick={() => router.push('/dashboard')}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '0.5rem'
            }}
          >
            Back to Dashboard
          </button>
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
      </div>

      <div style={{ maxWidth: '600px' }}>
        <div style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid #dee2e6', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2>User Information</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: isEditing ? '#28a745' : '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Name:
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              ) : (
                <p style={{ margin: 0, padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                  {profile.name}
                </p>
              )}
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Email:
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              ) : (
                <p style={{ margin: 0, padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                  {profile.email}
                </p>
              )}
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Role:
              </label>
              <p style={{ margin: 0, padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                {profile.role}
              </p>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                Join Date:
              </label>
              <p style={{ margin: 0, padding: '0.5rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
                {profile.joinDate}
              </p>
            </div>
          </div>

          {isEditing && (
            <div style={{ marginTop: '2rem' }}>
              <button
                onClick={handleSave}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
