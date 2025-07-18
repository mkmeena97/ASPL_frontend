import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccountByMobile, clearStatus } from './accountSlice';
import {
  TextField, Button, Card, CardContent, Typography, CircularProgress, Stack, Paper
} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';

const AccountDetail = () => {
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState('');
  const { account, loading, error } = useSelector((state) => state.account);

  useEffect(() => {
    // Only show fetch-related errors in this form
    if (error) {
      toast.error(error, { autoClose: 3000 });
      setTimeout(() => dispatch(clearStatus()), 3000);
    }
  }, [error, dispatch]);

  useEffect(() => {
    // Clean up when component unmounts or on new open
    return () => dispatch(clearStatus());
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^\d{10}$/.test(mobileNumber.trim())) {
      dispatch(fetchAccountByMobile(mobileNumber));
    } else {
      toast.error('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <ToastContainer />
      <Stack spacing={2}>
        <Typography variant="h6" gutterBottom>🔎 Fetch Account Details</Typography>
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              label="Mobile Number"
              variant="outlined"
              value={mobileNumber}
              onChange={e => setMobileNumber(e.target.value)}
              inputProps={{ maxLength: 10, pattern: '\\d{10}' }}
              required fullWidth autoFocus
              disabled={loading}
            />
            <Button type="submit" variant="contained" disabled={loading} sx={{ minWidth: 120 }}>
              {loading ? <CircularProgress size={24} /> : "Fetch"}
            </Button>
          </Stack>
        </form>
        {account && account.accountNumber && (
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Account Information</Typography>
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
        )}
      </Stack>
    </Paper>
  );
};

export default AccountDetail;
