import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Home, PostAdd, AccountCircle, Settings } from '@mui/icons-material';

export default function Layout() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Router Demo
          </Typography>
          <Button color="inherit" component={Link} to="/" startIcon={<Home />}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/posts" startIcon={<PostAdd />}>
            Posts
          </Button>
          <Button color="inherit" component={Link} to="/profile" startIcon={<AccountCircle />}>
            Profile
          </Button>
          <Button color="inherit" component={Link} to="/settings" startIcon={<Settings />}>
            Settings
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Outlet /> {/* This renders matched child routes */}
      </Container>
    </>
  );
}