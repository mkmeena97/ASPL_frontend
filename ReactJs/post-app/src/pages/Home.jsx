import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box textAlign="center" mt={4}>
      <Typography variant="h3" gutterBottom>
        Welcome to the App
      </Typography>
      <Typography variant="body1" paragraph>
        This is a demo application showcasing React Router with IndexedDB.
      </Typography>
      <Button 
        variant="contained" 
        component={Link} 
        to="/posts"
        size="large"
      >
        View Posts
      </Button>
    </Box>
  );
}