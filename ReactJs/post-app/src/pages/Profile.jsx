import { useLoaderData, redirect, useNavigate } from 'react-router-dom';
import { Typography, Box, Avatar, Button, Paper } from '@mui/material';
import { useAuth } from '../context/AuthContext';

export async function loader() {
  const token = localStorage.getItem('token');

  if (!token) {
    throw redirect('/login');
  }

  try {
    const res = await fetch('http://localhost:5000/api/profile/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw redirect('/login');
    }

    const user = await res.json();
    return { user };
  } catch (error) {
    console.error('Failed to load profile:', error);
    throw redirect('/login');
  }
}

export default function Profile() {
  const { user } = useLoaderData();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Box mt={5} display="flex" flexDirection="column" alignItems="center">
      <Avatar sx={{ width: 100, height: 100, fontSize: 40 }}>
        {user.full_name?.charAt(0).toUpperCase()}
      </Avatar>
      <Typography variant="h4" mt={2} gutterBottom>
        {user.full_name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        @{user.username}
      </Typography>

      <Paper elevation={3} sx={{ mt: 4, p: 3, width: '100%', maxWidth: 500 }}>
        <Typography variant="body1"><strong>Email:</strong> {user.email}</Typography>
        <Typography variant="body1"><strong>Phone:</strong> {user.phone_number}</Typography>
        <Typography variant="body1"><strong>Gender:</strong> {user.gender}</Typography>
        <Typography variant="body1"><strong>Date of Birth:</strong> {formatDate(user.date_of_birth)}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          <strong>Bio:</strong> {user.user_bio}
        </Typography>
      </Paper>

      <Button variant="outlined" color="error" onClick={handleLogout} sx={{ mt: 3 }}>
        Logout
      </Button>
    </Box>
  );
}
