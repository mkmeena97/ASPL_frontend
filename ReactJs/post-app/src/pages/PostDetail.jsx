import { useLoaderData, useNavigate, redirect } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useState } from 'react';

const API_BASE = 'http://localhost:5000/api';

export async function loader({ params }) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_BASE}/posts/${params.postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error('Post not found');

  const post = await res.json();
  return { post };
}

export async function action({ params }) {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_BASE}/posts/${params.postId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error('Failed to delete post');

  return redirect('/posts');
}

function fixUrl(url) {
  if (!url) return '';
  const match = url.match(/(http:\/\/localhost:5000\/uploads\/)(.+)$/);
  if (!match) return url;

  const filename = match[2].split('/').pop();
  return `${match[1]}${filename}`;
}

export default function PostDetail() {
  const { post } = useLoaderData();
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE}/posts/${post.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error('Delete failed');

      setSnackbar(true);
      setTimeout(() => navigate('/posts'), 1000);
    } catch (err) {
      console.error(err);
      alert('Failed to delete post');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{post.title}</Typography>
        <Box>
          <IconButton onClick={() => navigate(`/posts/${post.id}/edit`)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => setConfirmOpen(true)}>
            <Delete />
          </IconButton>
        </Box>
      </Box>

      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {post.created_at ? new Date(post.created_at).toLocaleString() : 'No Date'}
      </Typography>

      {post.caption && (
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          <strong>Caption:</strong> {post.caption}
        </Typography>
      )}

      {post.media_url && (
        <img
          src={fixUrl(post.media_url)}
          alt="media"
          style={{ maxWidth: '100%', borderRadius: 8, marginTop: 8 }}
        />
      )}

      {post.content && (
        <Typography variant="body1" paragraph mt={2}>
          {post.content}
        </Typography>
      )}

      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mt: 2 }}>
        Back to Posts
      </Button>

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
          <Button color="error" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar(false)}
          severity="success"
          variant="filled"
        >
          Post deleted successfully!
        </Alert>
      </Snackbar>
    </Paper>
  );
}
