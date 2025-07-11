import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function UserCard({ name, age }) {
  return (
    <Card sx={{ margin: '1rem', padding: '0.5rem' }}>
      <CardContent>
        <Typography variant="h6">👤 {name}</Typography>
        <Typography color="text.secondary">Age: {age}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;