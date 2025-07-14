import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Article, Person, Settings, Login as LoginIcon } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext'; 


export default function NavBar() {
  const { user, loading } = useAuth();
  console.log("NavBar user:", user);
  if (loading) return null;

  return (
    <BottomNavigation showLabels sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <BottomNavigationAction label="Home" icon={<Home />} component={Link} to="/" />
      <BottomNavigationAction label="Posts" icon={<Article />} component={Link} to="/posts" />

      {user ? (
        <BottomNavigationAction label="Profile" icon={<Person />} component={Link} to="/profile" />
      ) : (
        <BottomNavigationAction label="Login" icon={<LoginIcon />} component={Link} to="/login" />
      )}

      <BottomNavigationAction label="Settings" icon={<Settings />} component={Link} to="/settings" />
    </BottomNavigation>
  );
}
