import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory user store (in production, use a database)
const users = [
  { id: 1, username: 'admin', password: 'password' },
  { id: 2, username: 'user', password: '123456' }
]

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Find user
    const user = users.find(u => u.username === username && u.password === password)

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create a simple token (in production, use JWT with proper signing)
    const token = Buffer.from(`${user.id}:${user.username}:${Date.now()}`).toString('base64')

    return NextResponse.json(
      { 
        message: 'Login successful',
        token,
        user: { id: user.id, username: user.username }
      },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
