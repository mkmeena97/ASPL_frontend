import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  InputLabel,
  Select,
  FormControl
} from '@mui/material';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [mediaType, setMediaType] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setMediaFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title || !caption || !mediaFile || !mediaType) {
      setError('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('caption', caption);
    formData.append('media_type', mediaType);
    formData.append('media_file', mediaFile);

    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });

      if (!res.ok) {
        throw new Error('Failed to create post');
      }

      navigate('/posts');
    } catch (err) {
      console.error(err);
      setError('Error creating post. Try again.');
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Create New Post
      </Typography>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
          margin="normal"
        />

        <TextField
          label="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          fullWidth
          required
          margin="normal"
        />

        <FormControl fullWidth margin="normal" required>
          <InputLabel>Media Type</InputLabel>
          <Select
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
            label="Media Type"
          >
            <MenuItem value="image">Image</MenuItem>
            <MenuItem value="video">Video</MenuItem>
            <MenuItem value="audio">Audio</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="outlined"
          component="label"
          fullWidth
          sx={{ mt: 2 }}
        >
          Upload File
          <input
            type="file"
            hidden
            accept="image/*,video/*,audio/*"
            onChange={handleFileChange}
          />
        </Button>

        {mediaFile && (
          <Typography variant="body2" mt={1}>
            Selected: {mediaFile.name}
          </Typography>
        )}

        {error && (
          <Typography color="error" mt={2}>
            {error}
          </Typography>
        )}

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Save Post
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
