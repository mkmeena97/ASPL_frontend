import { Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        About This App
      </Typography>
      <Typography variant="body1" paragraph>
        This application demonstrates modern React Router features including:
      </Typography>
      <ul>
        <li>Nested routing</li>
        <li>Data loading</li>
        <li>Lazy loading</li>
        <li>Protected routes</li>
        <li>Client-side storage with IndexedDB</li>
      </ul>
    </Box>
  );
}