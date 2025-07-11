import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper 
} from '@mui/material';
import db from '../utils/db';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('Title and content are required');
      return;
    }

    const newPost = await db.savePost({
      title,
      content
    });

    navigate(`/posts`);
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Create New Post
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
          margin="normal"
        />

        <TextField
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          rows={6}
          fullWidth
          required
          margin="normal"
        />

        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Save Post
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
