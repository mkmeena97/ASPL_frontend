// Settings.jsx
import { Typography, Box, Switch, FormControlLabel } from '@mui/material';
import { useThemeMode } from '../context/ThemeContext';

export default function Settings() {
  const { darkMode, toggleDarkMode } = useThemeMode();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        }
        label="Dark Mode"
      />
    </Box>
  );
}
