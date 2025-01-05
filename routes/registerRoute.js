// routes/registration.js
import express from 'express';
import bcrypt from 'bcrypt';
import db from '../config/db.js';  // Import the database connection

const router = express.Router();

// Registration route
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if user already exists
        const [rows] = await db.promise().query('SELECT * FROM signup WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into the database
        await db.promise().query('INSERT INTO signup (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
