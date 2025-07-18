// src/pages/Accounts.js
import { Grid, Container, Typography, Box } from '@mui/material';
import AccountForm from '../features/accounts/AccountForm';
import AccountDetail from '../features/accounts/AccountDetail';

const Accounts = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
        Account Management
      </Typography>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <AccountForm />
          </Grid>
          <Grid item xs={12} md={6}>
            <AccountDetail />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Accounts;
