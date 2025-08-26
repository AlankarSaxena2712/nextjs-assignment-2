// Logging middleware
const loggingMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString()
  const method = req.method
  const url = req.originalUrl
  const userAgent = req.get('User-Agent') || 'Unknown'
  const ip = req.ip || req.connection.remoteAddress || 'Unknown'
  
  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip} - User-Agent: ${userAgent}`)
  
  // Log response time
  const startTime = Date.now()
  
  res.on('finish', () => {
    const duration = Date.now() - startTime
    const statusCode = res.statusCode
    console.log(`[${timestamp}] ${method} ${url} - ${statusCode} - ${duration}ms`)
  })
  
  next()
}

module.exports = loggingMiddleware
