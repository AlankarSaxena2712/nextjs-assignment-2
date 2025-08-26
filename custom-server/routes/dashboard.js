const express = require('express')
const router = express.Router()

// Dashboard route
router.get('/', (req, res) => {
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
        <h2>Welcome, \${req.user ? req.user.name : 'User'}!</h2>
        <p>You have successfully authenticated and can access this protected dashboard.</p>
        <p><strong>User ID:</strong> \${req.user ? req.user.id : 'N/A'}</p>
        <p><strong>Email:</strong> \${req.user ? req.user.email : 'N/A'}</p>
        <p><strong>Access Time:</strong> \${new Date().toISOString()}</p>
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
          <p>\${Math.floor(process.uptime())}s</p>
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
        <p><strong>Node.js Version:</strong> \${process.version}</p>
        <p><strong>Platform:</strong> \${process.platform}</p>
        <p><strong>Memory Usage:</strong> \${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB</p>
      </div>
    </body>
    </html>
  `)
})

module.exports = router
