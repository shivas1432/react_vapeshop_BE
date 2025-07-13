# VapeShop Backend API

A secure Node.js backend API for the VapeShop e-commerce application with user authentication and password management.

##  Quick Start

```bash
# Clone the repository
git clone <repository-url>

# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run dev
```

Server runs at: `http://localhost:8081`

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MySQL2** - Database driver
- **JWT** - Token-based authentication
- **bcrypt** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## 🔧 Configuration

Create a `.env` file in the root directory:

```env
PORT=8081
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret_key
```

## 📡 API Endpoints

### Authentication
```
POST /api/register          # User registration
POST /api/login             # User login
POST /api/forgot-password   # Password reset request
```

### General
```
GET /                       # API welcome message
```

## ✨ Features

### 🔐 Security
- JWT token authentication
- Password hashing with bcrypt
- Helmet security headers
- CORS configuration
- Cookie parsing support

### 🛡️ Error Handling
- Global error middleware
- 404 route handling
- Comprehensive error logging

### 🔧 Middleware Stack
- JSON body parsing
- Cookie parser
- CORS enabled
- Security headers (Helmet)

## 🗂️ Project Structure

```
backend/
├── routes/
│   ├── loginRoute.js       # Login endpoints
│   ├── registerRoute.js    # Registration endpoints
│   └── forgotPasswordRoute.js # Password reset
├── server.js               # Main server file
├── package.json           # Dependencies
└── .env                   # Environment variables
```

## 🔗 Frontend Integration

This backend is designed to work with the VapeShop React frontend:
- Frontend URL: `http://localhost:3000`
- CORS enabled for cross-origin requests
- Cookie-based session management

## 🚀 Scripts

```bash
npm run dev    # Start development server with nodemon
npm test       # Run tests (not configured yet)
```

## 📋 Dependencies

### Core
- `express` - Web framework
- `mysql2` - MySQL database driver
- `jsonwebtoken` - JWT handling
- `bcrypt` - Password hashing

### Security & Middleware
- `helmet` - Security headers
- `cors` - Cross-origin requests
- `cookie-parser` - Cookie handling
- `dotenv` - Environment variables

### Development
- `nodemon` - Auto-restart server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

---

**Note**: Ensure your MySQL database is running and properly configured before starting the server.
