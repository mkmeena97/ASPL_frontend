import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount, clearStatus } from './accountSlice';
import {
  Button, TextField, Typography, CircularProgress, Stack, Paper
} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
  });

  const dispatch = useDispatch();
  const { loading, statusMsg, error } = useSelector((state) => state.account);

  useEffect(() => {
    if (statusMsg) {
      toast.success(statusMsg, { autoClose: 2000 });
      setTimeout(() => dispatch(clearStatus()), 2000);
    }
  }, [statusMsg, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 3000 });
      setTimeout(() => dispatch(clearStatus()), 3000);
    }
  }, [error, dispatch]);

  useEffect(() => {
    // Clean up toast and status when unmounting or opening form anew
    return () => dispatch(clearStatus());
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearStatus());
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      toast.error('Enter a valid 10-digit mobile number');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Enter a valid email address');
      return;
    }
    dispatch(createAccount(formData));
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <ToastContainer />
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={2}>
          <Typography variant="h6">Create New Account</Typography>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required type="email" fullWidth
          />
          <TextField
            label="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required inputProps={{ maxLength: 10, pattern: "\\d{10}" }} fullWidth
          />
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Create Account"}
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default AccountForm;
