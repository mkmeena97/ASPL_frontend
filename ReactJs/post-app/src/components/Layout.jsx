import { Outlet, Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Home, PostAdd, AccountCircle, Settings, Login as LoginIcon, Logout } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText,
  DialogActions, IconButton
} from '@mui/material';

import { useState } from 'react'; // for dialog state

export default function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleLogoutConfirm = async () => {
    setLogoutDialogOpen(false);
    await logout();
    navigate('/');
  };

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

          {user ? (
            <>
              <Button color="inherit" component={Link} to="/profile" startIcon={<AccountCircle />}>
                Profile
              </Button>
              <Button
                color="inherit"
                onClick={() => setLogoutDialogOpen(true)}
                startIcon={<Logout />}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login" startIcon={<LoginIcon />}>
              Login
            </Button>
          )}

          <Button color="inherit" component={Link} to="/settings" startIcon={<Settings />}>
            Settings
          </Button>
        </Toolbar>
      </AppBar>

      {/* Stylish logout confirmation dialog */}
      <Dialog
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
      >
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out? You'll need to sign in again to access your profile and posts.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogoutConfirm} color="error" variant="contained">
            Logout
          </Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}
