import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import db from './utils/db';
import ThemeProviderCustom from './context/ThemeContext'; 
import { useThemeMode } from './context/ThemeContext';

async function initApp() {
  const posts = await db.getPosts();
  if (posts.length === 0) {
    await db.savePost({
      id: Date.now(),
      title: 'First Post',
      content: 'This is a sample post created automatically when the app loads.',
      createdAt: new Date().toISOString()
    });
  }
}

initApp().then(() => {
  const Root = () => {
    return (
      <ThemeProviderCustom>
        <AppWithMuiTheme />
      </ThemeProviderCustom>
    );
  };

  const AppWithMuiTheme = () => {
    const { darkMode } = useThemeMode(); // Now this will work

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

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
});
