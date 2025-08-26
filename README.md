# Next.js Assignment - Middleware & Custom Server

This project implements two main components as per the assignment requirements:

## Part 1: Next.js App with Middleware

### Features Implemented:
- ✅ **Authentication Middleware**: Protects routes and manages user access
- ✅ **Route Protection**: `/dashboard` and `/profile` require authentication
- ✅ **Login Redirection**: Unauthenticated users are redirected to `/login`
- ✅ **Login Prevention**: Logged-in users can't access `/login` again
- ✅ **Beautiful UI**: Modern, responsive interface with navigation

### Routes:
- `/` - Home page (public)
- `/login` - Login page (public, redirects if authenticated)
- `/dashboard` - Protected dashboard (requires authentication)
- `/profile` - Protected profile page (requires authentication)

### How to Test:
1. Start the Next.js app: `npm run dev`
2. Visit `http://localhost:3000`
3. Try accessing `/dashboard` or `/profile` without logging in (should redirect to `/login`)
4. Login with credentials: `admin` / `password`
5. After login, try visiting `/login` again (should redirect to `/dashboard`)

## Part 2: Custom Express Server

### Features Implemented:
- ✅ **Custom Express Server**: Independent server with middleware
- ✅ **Logging Middleware**: Logs all requests with timestamps and response times
- ✅ **Authentication Middleware**: Protects specific routes
- ✅ **Custom Routing**: `/dashboard` and `/profile` routes
- ✅ **Health API**: `/api/health` returns JSON status
- ✅ **Error Handling**: 404 page for unknown routes
- ✅ **Beautiful Error Pages**: Custom styled error pages

### Routes:
- `/` - Home page
- `/dashboard` - Protected route (requires auth header)
- `/profile` - Protected route (requires auth header)
- `/api/health` - Health check API (returns JSON)
- `*` - 404 error page for unknown routes

### Authentication:
Protected routes require the header: `Authorization: Bearer valid-token`

### How to Test:
1. Start the custom server: `npm run custom-server`
2. Visit `http://localhost:3001`
3. Test protected routes with curl:
   ```bash
   # Without auth (should return 401)
   curl http://localhost:3001/dashboard
   
   # With auth (should work)
   curl -H "Authorization: Bearer valid-token" http://localhost:3001/dashboard
   ```
4. Test health API: `curl http://localhost:3001/api/health`

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation
```bash
# Install dependencies
npm install

# Start Next.js app
npm run dev

# Start custom Express server (in another terminal)
npm run custom-server
```

### Demo Credentials (Next.js App)
- Username: `admin`
- Password: `password`

### Demo Token (Express Server)
- Token: `valid-token`

## Project Structure

```
├── app/                     # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── login/              # Login page
│   ├── dashboard/          # Protected dashboard
│   ├── profile/            # Protected profile
│   └── api/auth/login/     # Authentication API
├── middleware.ts           # Next.js middleware for route protection
├── custom-server/          # Express custom server
│   ├── server.js          # Main server file
│   ├── middleware/        # Custom middleware
│   │   ├── auth.js        # Authentication middleware
│   │   └── logging.js     # Logging middleware
│   └── routes/            # Custom routes
│       └── dashboard.js   # Dashboard route handler
└── package.json           # Dependencies and scripts
```

## Key Features Demonstrated

### Next.js Middleware:
- Cookie-based authentication
- Route protection
- Automatic redirections
- Path matching configuration

### Express Server:
- Custom middleware implementation
- Request logging with timestamps
- Bearer token authentication
- JSON API responses
- Custom error pages
- Static file serving

## Testing Both Applications

1. **Start Next.js App**: 
   ```bash
   npm run dev
   # Visit: http://localhost:3000
   ```

2. **Start Custom Express Server**:
   ```bash
   npm run custom-server
   # Visit: http://localhost:3001
   ```

Both servers can run simultaneously on different ports for testing.
