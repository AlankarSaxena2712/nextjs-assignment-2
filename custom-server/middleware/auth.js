// Authentication middleware
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  
  if (!authHeader) {
    return res.status(401).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>401 - Unauthorized</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
            text-align: center; 
          }
          .error-container { 
            background: #fff3cd; 
            padding: 40px; 
            border-radius: 8px; 
            margin: 40px 0; 
            border-left: 5px solid #ffc107;
          }
          .nav { background: #333; padding: 10px; margin-bottom: 20px; }
          .nav a { color: white; text-decoration: none; margin-right: 20px; }
          .nav a:hover { text-decoration: underline; }
          h1 { color: #856404; font-size: 72px; margin: 0; }
          h2 { color: #333; }
          code { background: #f8f9fa; padding: 2px 4px; border-radius: 3px; }
        </style>
      </head>
      <body>
        <div class="nav">
          <a href="/">Home</a>
          <a href="/api/health">Health Check</a>
        </div>
        <div class="error-container">
          <h1>401</h1>
          <h2>Unauthorized</h2>
          <p>You need to provide authentication to access this resource.</p>
          <p>Please include the <code>Authorization</code> header with a valid token.</p>
          <p><strong>Example:</strong> <code>Authorization: Bearer valid-token</code></p>
        </div>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h3>How to authenticate:</h3>
          <p>Use curl or any HTTP client:</p>
          <pre style="background: #fff; padding: 10px; border-radius: 4px; text-align: left;">curl -H "Authorization: Bearer valid-token" http://localhost:3001/dashboard</pre>
        </div>
      </body>
      </html>
    `)
  }
  
  const token = authHeader.split(' ')[1] // Remove 'Bearer ' prefix
  
  // Simple token validation (in production, use proper JWT verification)
  if (token !== 'valid-token') {
    return res.status(403).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>403 - Forbidden</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
            text-align: center; 
          }
          .error-container { 
            background: #f8d7da; 
            padding: 40px; 
            border-radius: 8px; 
            margin: 40px 0; 
            border-left: 5px solid #dc3545;
          }
          .nav { background: #333; padding: 10px; margin-bottom: 20px; }
          .nav a { color: white; text-decoration: none; margin-right: 20px; }
          .nav a:hover { text-decoration: underline; }
          h1 { color: #721c24; font-size: 72px; margin: 0; }
          h2 { color: #333; }
          code { background: #f8f9fa; padding: 2px 4px; border-radius: 3px; }
        </style>
      </head>
      <body>
        <div class="nav">
          <a href="/">Home</a>
          <a href="/api/health">Health Check</a>
        </div>
        <div class="error-container">
          <h1>403</h1>
          <h2>Forbidden</h2>
          <p>Invalid authentication token provided.</p>
          <p>Please use the correct token: <code>valid-token</code></p>
        </div>
      </body>
      </html>
    `)
  }
  
  // Set user information (in production, decode from JWT)
  req.user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  }
  
  next()
}

module.exports = authMiddleware
