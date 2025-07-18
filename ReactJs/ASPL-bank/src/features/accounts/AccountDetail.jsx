// src/features/accounts/AccountDetail.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountByMobile } from './accountSlice';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Stack,
  Paper,
  Box,
} from '@mui/material';

const AccountDetail = () => {
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState('');

  const { account, loading, error } = useSelector((state) => state.account);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\d{10}$/.test(mobileNumber.trim())) {
      dispatch(fetchAccountByMobile(mobileNumber));
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h6" gutterBottom>
          🔎 Fetch Account Details
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2 }}>
          <TextField
            label="Mobile Number"
            variant="outlined"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            inputProps={{ maxLength: 10, pattern: '\\d{10}' }}
            required
            fullWidth
            autoFocus
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ minWidth: 110 }}
          >
            {loading ? <CircularProgress size={24} /> : 'Fetch'}
          </Button>
        </Box>

        {error && <Alert severity="error">{error}</Alert>}

        {account && account.accountNumber ? (
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Account Information
              </Typography>
              <Stack spacing={1}>
                <Typography><strong>Name:</strong> {account.name}</Typography>
                <Typography><strong>Email:</strong> {account.email}</Typography>
                <Typography><strong>Mobile:</strong> {account.mobileNumber}</Typography>
                <Typography><strong>Account Number:</strong> {account.accountNumber}</Typography>
                <Typography><strong>Account Type:</strong> {account.accountType}</Typography>
                <Typography><strong>Branch:</strong> {account.branchAddress}</Typography>
              </Stack>
            </CardContent>
          </Card>
        ) : null}
      </Stack>
    </Paper>
  );
};

export default AccountDetail;
