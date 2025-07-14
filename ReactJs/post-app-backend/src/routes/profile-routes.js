// src/routes/profile-routes.js
import express from 'express';
import pool from '../config/db.js';
import authenticateToken from '../middleware/authMiddleware.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Get user profile
//for development purpose only
router.get('/me', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await pool.query(`SELECT id, username, email, full_name, phone_number, profile_picture, user_bio, gender, date_of_birth FROM users WHERE id = $1`, [decoded.id]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(403).json({ message: 'Invalid token' });
  }
});

// Update user's profile
router.put('/update', authenticateToken, async (req, res) => {
  const userId = req.user.id;
  const {
    full_name,
    phone_number,
    profile_picture,
    user_bio,
    gender,
    date_of_birth,
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE users
       SET full_name = $1,
           phone_number = $2,
           profile_picture = $3,
           user_bio = $4,
           gender = $5,
           date_of_birth = $6,
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $7
       RETURNING *`,
      [
        full_name,
        phone_number,
        profile_picture,
        user_bio,
        gender,
        date_of_birth,
        userId,
      ]
    );

    res.json({ message: 'Profile updated', user: result.rows[0] });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
