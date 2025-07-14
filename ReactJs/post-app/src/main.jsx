import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ThemeProviderCustom, { useThemeMode } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

const AppWithMuiTheme = () => {
  const { darkMode } = useThemeMode();

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    }), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

const Root = () => {
  return (
    <ThemeProviderCustom>
      <AuthProvider>
        <AppWithMuiTheme />
      </AuthProvider>
    </ThemeProviderCustom>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
