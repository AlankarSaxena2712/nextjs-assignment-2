# 🎯 Next.js Assignment - COMPLETED ✅

## Assignment Requirements Fulfilled

### ✅ Part 1: Next.js App with Middleware

**Requirements Met:**
- ✅ Routes: `/`, `/login`, `/dashboard`, `/profile`
- ✅ Middleware redirects unauthenticated users to `/login`
- ✅ Authenticated users can access protected routes
- ✅ Logged-in users cannot access `/login` again (redirected to `/dashboard`)

**Implementation Details:**
- **Middleware Location**: `middleware.ts` (Next.js 13+ App Router)
- **Authentication**: Cookie-based with token validation
- **Route Protection**: `/dashboard` and `/profile` are protected
- **Login API**: `/api/auth/login` with demo credentials
- **UI**: Modern, responsive design with navigation

### ✅ Part 2: Custom Express Server

**Requirements Met:**
- ✅ Custom Express server with middleware
- ✅ Logging middleware (logs requests with timestamps)
- ✅ Authentication middleware (Bearer token)
- ✅ Custom routing (`/dashboard` and `/profile`)
- ✅ API route `/api/health` returning JSON
- ✅ Error page for unknown routes (404)

**Implementation Details:**
- **Server Location**: `custom-server/server.js`
- **Middleware**: Modular structure in `custom-server/middleware/`
- **Authentication**: Bearer token validation
- **Logging**: Request/response logging with timestamps
- **Error Handling**: Custom 401, 403, and 404 pages

## 🚀 How to Run

### Prerequisites
```bash
cd "/Users/alankarsaxena/Documents/Next Assignment/nextjs-assignment-2"
npm install
```

### Start Both Applications
```bash
# Terminal 1: Next.js App
npm run dev
# Access: http://localhost:3000

# Terminal 2: Custom Express Server  
npm run custom-server
# Access: http://localhost:3001
```

## 🧪 Testing

### Next.js App (Port 3000)
1. **Home Page**: Visit `http://localhost:3000`
2. **Protected Routes**: Try accessing `/dashboard` or `/profile` (should redirect to login)
3. **Login**: Use credentials `admin` / `password`
4. **Post-Login**: Access protected routes, try visiting `/login` again

### Custom Express Server (Port 3001)
1. **Home Page**: Visit `http://localhost:3001`
2. **Unauthorized Access**: Try `curl http://localhost:3001/dashboard`
3. **Authorized Access**: Try `curl -H "Authorization: Bearer valid-token" http://localhost:3001/dashboard`
4. **Health API**: Try `curl http://localhost:3001/api/health`
5. **404 Error**: Try `curl http://localhost:3001/nonexistent`

### Automated Testing
```bash
./test-assignment.sh
```

## 🏗️ Architecture

### Next.js App Structure
```
app/
├── layout.tsx              # Root layout with navigation
├── page.tsx                # Home page
├── middleware.ts           # Authentication middleware
├── login/page.tsx          # Login form
├── dashboard/page.tsx      # Protected dashboard
├── profile/page.tsx        # Protected profile
└── api/auth/login/route.ts # Login API endpoint
```

### Custom Express Server Structure
```
custom-server/
├── server.js               # Main server file
├── middleware/
│   ├── auth.js             # Bearer token authentication
│   └── logging.js          # Request/response logging
└── routes/
    └── dashboard.js        # Dashboard route (unused - simplified)
```

## 🔐 Authentication

### Next.js App
- **Method**: Cookie-based authentication
- **Demo Credentials**: 
  - Username: `admin`
  - Password: `password`
- **Flow**: Login → Set cookie → Access protected routes

### Express Server
- **Method**: Bearer token authentication
- **Demo Token**: `valid-token`
- **Header**: `Authorization: Bearer valid-token`
- **Flow**: Send header → Validate token → Access protected routes

## 🎨 Features

### Middleware Functionality
- **Route Protection**: Automatic redirects for unauthenticated users
- **Login Prevention**: Logged-in users can't access login page
- **Logging**: All requests logged with timestamps and response times
- **Error Handling**: Custom error pages with beautiful UI

### UI/UX
- **Responsive Design**: Works on all screen sizes
- **Navigation**: Consistent navigation across all pages
- **Error Pages**: Beautiful, informative error pages
- **Forms**: Interactive login form with validation

### API Endpoints
- **Next.js**: `/api/auth/login` for authentication
- **Express**: `/api/health` for server status monitoring

## 📊 Server Monitoring

### Express Server Logs
The custom server logs all requests with:
- Timestamp
- HTTP method and URL
- Client IP address
- User-Agent
- Response status code
- Response time

### Health Monitoring
The `/api/health` endpoint provides:
- Server status
- Uptime
- Memory usage
- Environment info
- Timestamp

## ✨ Bonus Features

- **TypeScript Support**: Full TypeScript configuration
- **Modern UI**: Clean, professional design
- **Error Handling**: Comprehensive error management
- **Documentation**: Complete README and testing scripts
- **Modular Code**: Well-organized, maintainable structure

---

## 🎉 Assignment Complete!

Both parts of the assignment have been successfully implemented with all required features and additional enhancements. The applications are ready for testing and demonstration.
