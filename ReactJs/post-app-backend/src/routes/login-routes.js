// src/routes/login-routes.js
import express from 'express';
import bcrypt from 'bcrypt';
import pool from '../config/db.js';
import generateToken  from '../config/auth.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', async (req, res) => {
  const {
    username,
    email,
    password,
    full_name,
    phone_number = null,
    profile_picture = null,
    user_bio = null,
    gender = null,
    date_of_birth = null
  } = req.body;

  // Required fields validation
  if (!username || !email || !password || !full_name) {
    return res.status(400).json({ message: 'All required fields must be filled' });
  }

  // Format date_of_birth if provided
  let dobFormatted = null;
  if (date_of_birth) {
    try {
      const [day, month, year] = date_of_birth.split('/');
      if (!day || !month || !year) throw new Error('Invalid date format');
      dobFormatted = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`; // YYYY-MM-DD
    } catch (error) {
      return res.status(400).json({ message: 'Invalid date_of_birth format. Use DD/MM/YYYY.' });
    }
  }

  try {
    // Check if user already exists
    const userExists = await pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    if (userExists.rows.length > 0) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into DB including optional fields
    const result = await pool.query(
      `INSERT INTO users 
        (username, email, password, full_name, phone_number, profile_picture, user_bio, gender, date_of_birth)
       VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [username, email, hashedPassword, full_name, phone_number, profile_picture, user_bio, gender, dobFormatted]
    );

    const token = generateToken(result.rows[0]);

    res.status(201).json({ token, user: result.rows[0] });

  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
});


// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    const user = result.rows[0];

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user);
    res.status(200).json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during login' });
  }
});




//get all users
//for development purpose only
router.get('/users', async (req, res) => {  
  try {
    const result = await pool.query(`SELECT id, username, email, full_name FROM users`);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error' });
  }   
});

export default  router;
