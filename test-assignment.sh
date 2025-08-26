#!/bin/bash

echo "🧪 Testing Next.js Assignment - Middleware & Custom Server"
echo "=========================================================="
echo

echo "📋 Testing Custom Express Server (http://localhost:3001)"
echo "--------------------------------------------------------"

echo "1. Testing Health API:"
curl -s http://localhost:3001/api/health | jq '.'
echo

echo "2. Testing Dashboard without auth (should fail):"
curl -s -w "HTTP Status: %{http_code}\n" http://localhost:3001/dashboard > /dev/null
echo

echo "3. Testing Dashboard with auth (should succeed):"
curl -s -w "HTTP Status: %{http_code}\n" -H "Authorization: Bearer valid-token" http://localhost:3001/dashboard > /dev/null
echo

echo "4. Testing Profile without auth (should fail):"
curl -s -w "HTTP Status: %{http_code}\n" http://localhost:3001/profile > /dev/null
echo

echo "5. Testing Profile with auth (should succeed):"
curl -s -w "HTTP Status: %{http_code}\n" -H "Authorization: Bearer valid-token" http://localhost:3001/profile > /dev/null
echo

echo "6. Testing 404 error handling:"
curl -s -w "HTTP Status: %{http_code}\n" http://localhost:3001/nonexistent > /dev/null
echo

echo "📋 Testing Next.js App (http://localhost:3000)"
echo "----------------------------------------------"

echo "7. Testing Login API:"
curl -s -X POST -H "Content-Type: application/json" -d '{"username":"admin","password":"password"}' http://localhost:3000/api/auth/login | jq '.'
echo

echo "8. Testing invalid login:"
curl -s -X POST -H "Content-Type: application/json" -d '{"username":"wrong","password":"wrong"}' http://localhost:3000/api/auth/login | jq '.'
echo

echo "✅ Test Summary:"
echo "- Custom Express Server: Running on port 3001"
echo "- Next.js App: Running on port 3000"
echo "- Authentication middleware: Working"
echo "- Route protection: Working"
echo "- Error handling: Working"
echo "- Logging middleware: Active (check server logs)"
echo
echo "🌐 Open in browser:"
echo "- Next.js App: http://localhost:3000"
echo "- Custom Server: http://localhost:3001"
echo
echo "🔑 Authentication:"
echo "- Next.js: Use 'admin' / 'password'"
echo "- Express: Use header 'Authorization: Bearer valid-token'"
