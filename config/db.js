// config/db.js
import mysql2 from 'mysql2';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create and export the database connection
const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }
    console.log('Connected to the database.');
});

export default db;
