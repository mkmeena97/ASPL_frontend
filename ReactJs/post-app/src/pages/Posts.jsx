import {
  useLoaderData,
  redirect,
  Link,
} from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  CardMedia,
} from '@mui/material';
import { Add } from '@mui/icons-material';

const API_BASE = 'http://localhost:5000/api';
const FALLBACK_IMAGE = 'https://via.placeholder.com/300x200?text=No+Image';

// 🔐 Protected Loader
export async function loader() {
  const token = localStorage.getItem('token');
  if (!token) return redirect('/login');

  const response = await fetch(`${API_BASE}/posts/`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts = await response.json();
  return { posts };
}

// 🔄 Fix malformed media URLs
function fixUrl(url) {
  if (!url) return FALLBACK_IMAGE;

  const match = url.match(/(http:\/\/localhost:5000\/uploads\/)(.+)$/);
  if (!match) return url;

  const filename = match[2].split('/').pop();
  return `${match[1]}${filename}`;
}

export default function Posts() {
  const { posts } = useLoaderData();

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 4, px: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">All Posts</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          component={Link}
          to="/posts/new"
        >
          New Post
        </Button>
      </Box>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              component={Link}
              to={`/posts/${post.id}`}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 3,
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <CardMedia
                component="img"
                image={fixUrl(post.media_url)}
                onError={(e) => (e.target.src = FALLBACK_IMAGE)}
                alt={post.title}
                sx={{
                  width: '300px',
                  height: '200px',
                  objectFit: 'scale-down',
                  backgroundColor: '#f0f0f0',
                }}
              />
              <CardContent sx={{ py: 2 }}>
                <Typography variant="h6" align="center" noWrap>
                  {post.title || `Untitled Post #${index + 1}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
