// backend/routes/forgotPasswordRoute.js
import express from 'express';
import db from '../config/db.js'; // Assuming db connection is already set up


const router = express.Router();

// Route to handle forgot password
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    // Check if email exists in the database
    const [rows] = await db.promise().query('SELECT * FROM signup WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(400).json({ message: 'Email not found' });
    }

    // Here you would generate a password reset token and send an email
    // For now, let's just send a success message

    res.json({ message: 'Password reset link sent to your email' });
  } catch (error) {
    console.error('Error sending reset link:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
