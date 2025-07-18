// src/features/accounts/CustomerDetailsDialog.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Stack, TextField, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerDetails, clearCustomer } from './accountSlice';
import { toast, ToastContainer } from 'react-toastify';
import CustomerDetailsTable from './CustomerDetailsTable';

const CustomerDetailsDialog = ({ open, handleClose }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const dispatch = useDispatch();

  const { customer, customerLoading, customerError } = useSelector(state => state.account);

  useEffect(() => {
    if (open) {
      dispatch(clearCustomer());
      setMobileNumber('');
    }
  }, [open, dispatch]);

  useEffect(() => {
    if (customerError) {
      toast.error(customerError, { autoClose: 2500 });
      setTimeout(() => dispatch(clearCustomer()), 2500);
    }
  }, [customerError, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobileNumber)) {
      toast.error('Enter a valid 10-digit mobile number');
      return;
    }
    dispatch(fetchCustomerDetails({ mobileNumber, correlationId: 'frontend-demo' }));
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Fetch Customer Details
        <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <TextField
              label="Mobile Number"
              value={mobileNumber}
              onChange={e => setMobileNumber(e.target.value)}
              inputProps={{ maxLength: 10, pattern: '\\d{10}' }}
              required
              autoFocus fullWidth
              disabled={customerLoading}
            />
            <Button type="submit" variant="contained" disabled={customerLoading}>
              {customerLoading ? <CircularProgress size={24} /> : "Fetch"}
            </Button>
          </Stack>
        </form>
        <CustomerDetailsTable customer={customer} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomerDetailsDialog;
