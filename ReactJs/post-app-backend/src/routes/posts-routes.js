import express from 'express';
import pool from '../config/db.js';
import authenticateToken from '../middleware/authMiddleware.js';
import upload from '../middleware/upload.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Create a post
router.post('/', authenticateToken, upload.single('media_file'), async (req, res) => {
  const { title, media_type, caption } = req.body;
  const user_id = req.user.id;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const media_url = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;

  try {
    const result = await pool.query(
      `INSERT INTO posts (user_id, title, media_url, media_type, caption)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [user_id, title, media_url, media_type, caption]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all posts for logged-in user
router.get('/', authenticateToken, async (req, res) => {
  const user_id = req.user.id;

  try {
    const result = await pool.query(
      `SELECT * FROM posts WHERE user_id = $1 ORDER BY created_at DESC`,
      [user_id]
    );

    const postsWithFullUrl = result.rows.map(post => ({
      ...post,
      media_url: post.media_url
        ? `${req.protocol}://${req.get('host')}/uploads/${path.basename(post.media_url)}`
        : null,
    }));

    res.json(postsWithFullUrl);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single post
router.get('/:id', authenticateToken, async (req, res) => {
  const postId = req.params.id;
  const user_id = req.user.id;

  try {
    const result = await pool.query(
      `SELECT * FROM posts WHERE id = $1 AND user_id = $2`,
      [postId, user_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found or unauthorized' });
    }

    const post = result.rows[0];
    post.media_url = post.media_url
      ? `${req.protocol}://${req.get('host')}/uploads/${path.basename(post.media_url)}`
      : null;

    res.json(post);
  } catch (err) {
    console.error('Error fetching post:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a post
router.patch('/:id', authenticateToken, upload.single('media_file'), async (req, res) => {
  const postId = req.params.id;
  const user_id = req.user.id;
  const { title, media_type, caption } = req.body;
  const newMedia = req.file?.filename;

  try {
    const existing = await pool.query(
      `SELECT * FROM posts WHERE id = $1 AND user_id = $2`,
      [postId, user_id]
    );

    if (existing.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found or unauthorized' });
    }

    const oldMediaUrl = existing.rows[0].media_url;

    // Delete old media file if new one is uploaded
    if (newMedia && oldMediaUrl) {
      const oldFileName = path.basename(oldMediaUrl);
      const oldPath = path.join(__dirname, '..', 'uploads', oldFileName);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }

    const updatedUrl = newMedia
      ? `${req.protocol}://${req.get('host')}/uploads/${newMedia}`
      : oldMediaUrl;

    const result = await pool.query(
      `UPDATE posts SET 
        title = $1,
        media_url = $2,
        media_type = $3,
        caption = $4,
        updated_at = CURRENT_TIMESTAMP
       WHERE id = $5 AND user_id = $6
       RETURNING *`,
      [title, updatedUrl, media_type, caption, postId, user_id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating post:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a post
router.delete('/:id', authenticateToken, async (req, res) => {
  const postId = req.params.id;
  const user_id = req.user.id;

  try {
    const existing = await pool.query(
      `SELECT media_url FROM posts WHERE id = $1 AND user_id = $2`,
      [postId, user_id]
    );

    if (existing.rows.length === 0) {
      return res.status(404).json({ message: 'Post not found or unauthorized' });
    }

    const fullMediaUrl = existing.rows[0].media_url;
    const fileName = path.basename(fullMediaUrl);
    const filePath = path.join(__dirname, '..', 'uploads', fileName);

    await pool.query(
      `DELETE FROM posts WHERE id = $1 AND user_id = $2`,
      [postId, user_id]
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log('Deleted file:', filePath);
    } else {
      console.warn('File not found at:', filePath);
    }

    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error('Error deleting post:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
