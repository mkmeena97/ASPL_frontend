import { useLoaderData } from 'react-router-dom';
import { Typography, Box, Avatar, Button } from '@mui/material';
import  auth  from '../utils/auth';

export async function loader() {
  const user = await auth.getCurrentUser();
  if (!user) throw redirect('/login');
  return { user };
}

export default function Profile() {
  const { user } = useLoaderData();

  return (
    <Box textAlign="center" mt={4}>
      <Avatar sx={{ width: 100, height: 100, margin: '0 auto 20px' }}>
        {user.name.charAt(0)}
      </Avatar>
      <Typography variant="h4" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="body1" paragraph>
        Email: {user.email}
      </Typography>
      <Button 
        variant="outlined" 
        onClick={() => auth.logout().then(() => window.location.reload())}
      >
        Logout
      </Button>
    </Box>
  );
}