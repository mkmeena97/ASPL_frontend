// src/features/accounts/CustomerDetailsTable.js
import React from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableRow, Paper, TableHead
} from '@mui/material';

const CustomerDetailsTable = ({ customer }) => {
  if (!customer) return null;

  // Extract sub-objects
  const { name, email, mobileNumber, accountsDto, loansDto, cardsDto } = customer;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>👤 Customer Basic Info</Typography>
      <TableContainer component={Paper} elevation={2} sx={{ mb: 2 }}>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell>{name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>Email</b></TableCell>
              <TableCell>{email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><b>Mobile Number</b></TableCell>
              <TableCell>{mobileNumber}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {accountsDto && (
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>🏦 Account Info</Typography>
          <TableContainer component={Paper} elevation={1} sx={{ mb: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Account Number</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Branch Address</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{accountsDto.accountNumber}</TableCell>
                  <TableCell>{accountsDto.accountType}</TableCell>
                  <TableCell>{accountsDto.branchAddress}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {loansDto && (
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>💳 Loan Info</Typography>
          <TableContainer component={Paper} elevation={1} sx={{ mb: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Loan Number</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Outstanding</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{loansDto.loanNumber}</TableCell>
                  <TableCell>{loansDto.loanType}</TableCell>
                  <TableCell>{loansDto.totalLoan}</TableCell>
                  <TableCell>{loansDto.amountPaid}</TableCell>
                  <TableCell>{loansDto.outstandingAmount}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {cardsDto && (
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>💳 Card Info</Typography>
          <TableContainer component={Paper} elevation={1}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Card Number</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Total Limit</TableCell>
                  <TableCell>Used</TableCell>
                  <TableCell>Available</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{cardsDto.cardNumber}</TableCell>
                  <TableCell>{cardsDto.cardType}</TableCell>
                  <TableCell>{cardsDto.totalLimit}</TableCell>
                  <TableCell>{cardsDto.amountUsed}</TableCell>
                  <TableCell>{cardsDto.availableAmount}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};

export default CustomerDetailsTable;
