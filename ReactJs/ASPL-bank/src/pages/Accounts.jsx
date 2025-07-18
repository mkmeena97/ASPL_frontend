import { useState } from 'react';
import { Container, Typography, Box, Stack, Button } from '@mui/material';
import AccountMetaInfo from '../features/accounts/AccountMetaInfo';
import AccountFormDialog from '../features/accounts/AccountFormDialog';
import AccountFetchDialog from '../features/accounts/AccountFetchDialog';
import CustomerDetailsDialog from '../features/accounts/CustomerDetailsDialog';

const Accounts = () => {
  const [openForm, setOpenForm] = useState(false);
  const [openFetch, setOpenFetch] = useState(false);
  const [openCustomer, setOpenCustomer] = useState(false);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center" sx={{ fontWeight: 'bold' }}>
        Account Management
      </Typography>
      <AccountMetaInfo />
      <Box sx={{ textAlign: 'center', my: 3 }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="inherit" onClick={() => setOpenForm(true)}>
            ➕ Create Account
          </Button>
          <Button variant="contained" color="inherit" onClick={() => setOpenFetch(true)}>
            🔍 Fetch Account
          </Button>
          <Button variant="outlined" color="inherit" onClick={() => setOpenCustomer(true)}>
            👤 Fetch Customer Details
          </Button>
        </Stack>
      </Box>
      <AccountFormDialog open={openForm} handleClose={() => setOpenForm(false)} />
      <AccountFetchDialog open={openFetch} handleClose={() => setOpenFetch(false)} />
      <CustomerDetailsDialog open={openCustomer} handleClose={() => setOpenCustomer(false)} />
    </Container>
  );
};
export default Accounts;
