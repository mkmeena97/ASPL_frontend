// src/features/accounts/AccountFormDialog.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AccountForm from './AccountForm';
import { clearStatus } from './accountSlice';

const AccountFormDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  useEffect(() => { if (open) dispatch(clearStatus()); }, [open, dispatch]);
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Create Account
        <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, color: 'grey.500' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <AccountForm />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};
export default AccountFormDialog;
