import { useRouteError, Link } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';
import { Home } from '@mui/icons-material';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h5" color="error" gutterBottom>
        {error.statusText || error.message}
      </Typography>
      <Typography variant="body1" paragraph>
        Sorry, an unexpected error has occurred.
      </Typography>
      {error.status === 404 && (
        <Typography variant="body2" paragraph>
          The page you're looking for doesn't exist.
        </Typography>
      )}
      <Button
        variant="contained"
        component={Link}
        to="/"
        startIcon={<Home />}
        sx={{ mt: 3 }}
      >
        Return Home
      </Button>
    </Container>
  );
}