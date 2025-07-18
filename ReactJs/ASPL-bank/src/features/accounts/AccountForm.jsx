// src/features/accounts/AccountForm.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount, clearStatus } from './accountSlice';
import {
  Button,
  TextField,
  Typography,
  CircularProgress,
  Alert,
  Stack,
  Paper,
} from '@mui/material';

const AccountForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
  });

  const dispatch = useDispatch();
  const { loading, statusMsg, error } = useSelector((state) => state.account);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearStatus());

    // Basic form validation
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      alert('Enter a valid 10-digit mobile number');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Enter a valid email address');
      return;
    }

    dispatch(createAccount(formData));
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={2}>
          <Typography variant="h6">Create New Account</Typography>

          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
            fullWidth
          />
          <TextField
            label="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            inputProps={{ maxLength: 10, pattern: "\\d{10}" }}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            size="large"
            sx={{ alignSelf: 'flex-start' }}
          >
            {loading ? <CircularProgress size={24} /> : 'Create Account'}
          </Button>

          {statusMsg && <Alert severity="success">{statusMsg}</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
        </Stack>
      </form>
    </Paper>
  );
};

export default AccountForm;
