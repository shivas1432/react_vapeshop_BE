import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import loginRoute from './routes/loginRoute.js';
import registerRoute from './routes/registerRoute.js';
import forgotPasswordRoute from './routes/forgotPasswordRoute.js';

// Load environment variables
dotenv.config();

const app = express(); 

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(helmet());

// Use the routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api', forgotPasswordRoute);



// Root route for the home page
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Error handling for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
