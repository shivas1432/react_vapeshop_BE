// routes/login.js
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';  // Import the database connection

const router = express.Router();

// Login route
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if user exists
        const [rows] = await db.promise().query('SELECT * FROM signup WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = rows[0];

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Set token in cookie (if you want to use cookies for session management)
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        // Respond with user info and token
        res.json({
            message: 'Login successful',
            token,
            userName: user.name // Include user's name in response
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
