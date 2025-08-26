const express = require('express')
const path = require('path')
const loggingMiddleware = require('./middleware/logging')
const authMiddleware = require('./middleware/auth')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Custom middleware
app.use(loggingMiddleware)

// Serve static files
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Custom Express Server</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .container { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .nav { background: #333; padding: 10px; margin-bottom: 20px; }
        .nav a { color: white; text-decoration: none; margin-right: 20px; }
        .nav a:hover { text-decoration: underline; }
        .error { color: red; }
        .success { color: green; }
      </style>
    </head>
    <body>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        <a href="/api/health">Health Check</a>
      </div>
      <h1>Custom Express Server</h1>
      <div class="container">
        <h2>Welcome to the Custom Express Server!</h2>
        <p>This server demonstrates:</p>
        <ul>
          <li>Custom Express server setup</li>
          <li>Logging middleware</li>
          <li>Authentication middleware</li>
          <li>Custom routing</li>
          <li>API endpoints</li>
          <li>Error handling</li>
        </ul>
      </div>
      <div class="container">
        <h3>Available Routes:</h3>
        <ul>
          <li><strong>/</strong> - Home page</li>
          <li><strong>/dashboard</strong> - Protected dashboard (requires auth)</li>
          <li><strong>/profile</strong> - Protected profile page (requires auth)</li>
          <li><strong>/api/health</strong> - Health check API</li>
        </ul>
      </div>
      <div class="container">
        <h3>Authentication:</h3>
        <p>To access protected routes, add the header: <code>Authorization: Bearer valid-token</code></p>
        <p>You can test this using curl or any HTTP client.</p>
      </div>
    </body>
    </html>
  `)
})

// Protected routes with authentication middleware
app.get('/dashboard', authMiddleware, (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Dashboard - Custom Express Server</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .container { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .nav { background: #333; padding: 10px; margin-bottom: 20px; }
        .nav a { color: white; text-decoration: none; margin-right: 20px; }
        .nav a:hover { text-decoration: underline; }
        .card { background: white; padding: 20px; border-radius: 8px; margin: 10px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        .stat { text-align: center; padding: 20px; background: #e3f2fd; border-radius: 8px; }
        .stat h3 { margin: 0; color: #1976d2; }
        .stat p { margin: 10px 0 0 0; font-size: 24px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        <a href="/api/health">Health Check</a>
      </div>
      <h1>Dashboard</h1>
      <div class="container">
        <h2>Welcome, ${req.user ? req.user.name : 'User'}!</h2>
        <p>You have successfully authenticated and can access this protected dashboard.</p>
        <p><strong>User ID:</strong> ${req.user ? req.user.id : 'N/A'}</p>
        <p><strong>Email:</strong> ${req.user ? req.user.email : 'N/A'}</p>
        <p><strong>Access Time:</strong> ${new Date().toISOString()}</p>
      </div>
      
      <div class="stats">
        <div class="stat">
          <h3>Total Users</h3>
          <p>1,234</p>
        </div>
        <div class="stat">
          <h3>Active Sessions</h3>
          <p>42</p>
        </div>
        <div class="stat">
          <h3>Server Uptime</h3>
          <p>${Math.floor(process.uptime())}s</p>
        </div>
      </div>
      
      <div class="card">
        <h3>Recent Activity</h3>
        <ul>
          <li>User logged in successfully</li>
          <li>Dashboard accessed</li>
          <li>Authentication middleware executed</li>
          <li>Logging middleware recorded request</li>
        </ul>
      </div>
      
      <div class="card">
        <h3>System Information</h3>
        <p><strong>Node.js Version:</strong> ${process.version}</p>
        <p><strong>Platform:</strong> ${process.platform}</p>
        <p><strong>Memory Usage:</strong> ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB</p>
      </div>
    </body>
    </html>
  `)
})
app.use('/profile', authMiddleware, (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Profile - Custom Express Server</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .container { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .nav { background: #333; padding: 10px; margin-bottom: 20px; }
        .nav a { color: white; text-decoration: none; margin-right: 20px; }
        .nav a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        <a href="/api/health">Health Check</a>
      </div>
      <h1>Profile Page</h1>
      <div class="container">
        <h2>User Profile</h2>
        <p><strong>Authenticated User:</strong> ${req.user ? req.user.name : 'Unknown'}</p>
        <p><strong>Access Time:</strong> ${new Date().toISOString()}</p>
        <p>This is a protected route that requires authentication.</p>
      </div>
    </body>
    </html>
  `)
})

// API route for health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development'
  })
})

// Error handling for unknown routes
app.use('*', (req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>404 - Page Not Found</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          max-width: 800px; 
          margin: 0 auto; 
          padding: 20px; 
          text-align: center; 
        }
        .error-container { 
          background: #ffebee; 
          padding: 40px; 
          border-radius: 8px; 
          margin: 40px 0; 
          border-left: 5px solid #f44336;
        }
        .nav { background: #333; padding: 10px; margin-bottom: 20px; }
        .nav a { color: white; text-decoration: none; margin-right: 20px; }
        .nav a:hover { text-decoration: underline; }
        h1 { color: #f44336; font-size: 72px; margin: 0; }
        h2 { color: #333; }
      </style>
    </head>
    <body>
      <div class="nav">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        <a href="/api/health">Health Check</a>
      </div>
      <div class="error-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The requested URL <strong>${req.originalUrl}</strong> was not found on this server.</p>
        <p><a href="/" style="color: #0070f3; text-decoration: none;">← Go back to home</a></p>
      </div>
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
        <h3>Available Routes:</h3>
        <ul style="text-align: left; display: inline-block;">
          <li><strong>/</strong> - Home page</li>
          <li><strong>/dashboard</strong> - Protected dashboard</li>
          <li><strong>/profile</strong> - Protected profile page</li>
          <li><strong>/api/health</strong> - Health check API</li>
        </ul>
      </div>
    </body>
    </html>
  `)
})

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack)
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message,
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Custom Express server running on http://localhost:${PORT}`)
  console.log(`📊 Health check available at http://localhost:${PORT}/api/health`)
})
