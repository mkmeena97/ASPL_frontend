import { useLoaderData, useNavigate, Form } from 'react-router-dom';
import { Typography, Button, Box, Paper, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import db from '../utils/db'

export async function loader({ params }) {
  const post = await db.getPost(Number(params.postId));
  if (!post) throw new Error('Post not found');
  return { post };
}

export async function action({ params }) {
  await db.deletePost(params.postId);
  return redirect('/posts');
}

export default function PostDetail() {
  const { post } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">{post.title}</Typography>
        <Box>
          <IconButton onClick={() => navigate(`/posts/${post.id}/edit`)}>
            <Edit />
          </IconButton>
          <Form method="post">
            <IconButton type="submit">
              <Delete />
            </IconButton>
          </Form>
        </Box>
      </Box>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {new Date(post.createdAt).toLocaleString()}
      </Typography>
      <Typography variant="body1" paragraph>
        {post.content}
      </Typography>
      <Button 
        variant="outlined" 
        onClick={() => navigate(-1)}
        sx={{ mt: 2 }}
      >
        Back to Posts
      </Button>
    </Paper>
  );
}