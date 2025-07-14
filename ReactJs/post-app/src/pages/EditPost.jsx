import { useLoaderData, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';
import { useState } from 'react';

// 🔁 Loader: fetch single post
export async function loader({ params }) {
  const token = localStorage.getItem('token');
  const res = await fetch(`http://localhost:5000/api/posts/${params.postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }

  const post = await res.json();
  return { post };
}

export default function EditPost() {
  const { post } = useLoaderData();
  const [title, setTitle] = useState(post.title);
  const [caption, setCaption] = useState(post.caption || '');
  const [mediaType, setMediaType] = useState(post.media_type || 'image');
  const [mediaFile, setMediaFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setMediaFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title || !caption || !mediaType) {
      setError('All fields except media file are required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('caption', caption);
    formData.append('media_type', mediaType);
    if (mediaFile) {
      formData.append('media_file', mediaFile); // Optional
    }

    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`http://localhost:5000/api/posts/${post.id}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to update post');
      }

      navigate(`/posts`);
    } catch (err) {
      console.error(err);
      setError('Something went wrong while updating');
    }
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Edit Post
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
          Upload New File (optional)
          <input
            type="file"
            hidden
            accept="image/*,video/*,audio/*"
            onChange={handleFileChange}
          />
        </Button>

        {mediaFile && (
          <Typography variant="body2" mt={1}>
            New File Selected: {mediaFile.name}
          </Typography>
        )}

        {error && (
          <Typography color="error" mt={2}>
            {error}
          </Typography>
        )}

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Update Post
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
