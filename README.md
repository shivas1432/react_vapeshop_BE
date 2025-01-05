# Vape Shop_react_backend

This is the backend API for the Vape Shop application. The server is built using Node.js, Express, and MySQL. The project provides routes for user registration, login, and password management.

## Setup

### Prerequisites

Node.js: Make sure you have Node.js installed on your machine. You can download it from here.
MySQL: You need to have MySQL running on your local machine or use a remote database. Make sure the database and tables are set up properly.
Environment Variables
Create a .env file in the root directory and add the following variables:

DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=your_password
DB_DATABASE=social
JWT_SECRET=your_jwt_secret_key
Replace your_password with the your actual MySQL password and your_jwt_secret_key with a random string for signing JWT tokens.

### Installing Dependencies
Clone the repository to your local machine:

git clone https://github.com/shivas1432/react_vapeshop_BE.git
Navigate to the backend folder:

cd backend
Install the dependencies:

npm install
Running the Server
Start the server:

npm run dev
This will start the server on http://localhost:8081.

Routes
POST /api/register: User registration
POST /api/login: User login
POST /api/forgot-password: Forgot password functionality

Error Handling 
[use POSTMAN]
Unknown routes will return a 404 status with the error message Route not found.
If an internal server error occurs, the server will return a 500 status with Internal Server Error.
Example Response
GET /:

{
  "message": "Welcome to the API"
}