import { useLoaderData, Link } from 'react-router-dom';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Button,
  Typography,
  Box 
} from '@mui/material';
import { Add } from '@mui/icons-material';
import db from '../utils/db';

export async function loader() {
  const posts = await db.getPosts();
  return { posts };
}

export default function Posts() {
  const { posts } = useLoaderData();

  console.log("Posts:", posts); 

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      
      <Button 
        variant="contained" 
        component={Link} 
        to="/posts/new"
        startIcon={<Add />}
        sx={{ mb: 2 }}
      >
        New Post
      </Button>
      
      <List>
        {posts.map((post, index) => (
          post?.id ? (
            <ListItem 
              key={post.id} 
              component={Link} 
              to={`/posts/${post.id}`}
              sx={{ 
                '&:hover': { backgroundColor: 'action.hover' },
                border: '1px solid #ccc',
                borderRadius: 1,
                mb: 1
              }}
            >
              <ListItemText 
                primary={post.title || `Untitled Post #${index + 1}`} 
                secondary={post.createdAt 
                  ? new Date(post.createdAt).toLocaleString() 
                  : "No timestamp"} 
              />
            </ListItem>
          ) : (
            <ListItem key={`invalid-${index}`}>
              <ListItemText primary="⚠️ Invalid post: Missing ID" />
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );
}
