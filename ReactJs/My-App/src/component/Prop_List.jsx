import React from 'react';
import { Card, ListItem, Typography } from '@mui/material';

function TodoItem({ task }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3, borderRadius: 3 }}>
        <ListItem sx={{ py: 0.5 }}>
        <Typography variant="body1"> {task}</Typography>
        </ListItem>
    </Card>
  );
}

export default TodoItem;