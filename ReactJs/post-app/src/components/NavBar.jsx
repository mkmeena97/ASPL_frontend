import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Article, Person, Settings } from '@mui/icons-material';

export default function NavBar() {
  return (
    <BottomNavigation showLabels sx={{ position: 'fixed', bottom: 0, width: '100%' }}>
      <BottomNavigationAction label="Home" icon={<Home />} component={Link} to="/" />
      <BottomNavigationAction label="Posts" icon={<Article />} component={Link} to="/posts" />
      <BottomNavigationAction label="Profile" icon={<Person />} component={Link} to="/profile" />
      <BottomNavigationAction label="Settings" icon={<Settings />} component={Link} to="/settings" />
    </BottomNavigation>
  );
}