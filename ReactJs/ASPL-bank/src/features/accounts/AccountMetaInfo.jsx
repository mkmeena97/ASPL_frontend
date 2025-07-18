import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactInfo, getBuildVersion, getJavaVersion } from './accountSlice';
import {
  Paper, Typography, Stack, Divider, CircularProgress, Alert, Box, List, ListItem,
  ListItemIcon, ListItemText
} from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

const AccountMetaInfo = () => {
  const dispatch = useDispatch();
  const { contactInfo, buildVersion, javaVersion, metaLoading, metaError } = useSelector(state => state.account);

  useEffect(() => {
    dispatch(getContactInfo());
    dispatch(getBuildVersion());
    dispatch(getJavaVersion());
  }, [dispatch]);

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        <MessageIcon sx={{ mr: 1 }} /> Welcome Message
      </Typography>
      {metaLoading && <CircularProgress size={20} />}
      {metaError && <Alert severity="error">{metaError}</Alert>}
      {contactInfo && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>{contactInfo.message}</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" sx={{ mt: 1 }}>Contact Details</Typography>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <SupportAgentIcon color="primary" />
            <Typography>
              <strong>Name:</strong> {contactInfo.contactDetails?.name}
            </Typography>
            <EmailIcon sx={{ ml: 2, color: "grey.700" }} />
            <Typography>
              <strong>Email:</strong> {contactInfo.contactDetails?.email}
            </Typography>
          </Stack>
          <Typography variant="h6" sx={{ mt: 1 }}>On Call Support</Typography>
          <List dense>
            {contactInfo.onCallSupport?.map((phone, idx) => (
              <ListItem key={phone || idx}>
                <ListItemIcon><SupportAgentIcon color="secondary" /></ListItemIcon>
                <ListItemText primary={phone} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      <Divider sx={{ my: 2 }} />
      <Typography><strong>Build Version:</strong> {buildVersion}</Typography>
      <Typography><strong>Java Version:</strong> {javaVersion}</Typography>
    </Paper>
  );
};

export default AccountMetaInfo;
