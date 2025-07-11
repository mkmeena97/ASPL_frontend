import React from 'react';
import { Button } from '@mui/material';

function FuncProp({ onClick, label }) {
  return (
    <Button variant="contained" color="primary" onClick={onClick} sx={{ margin: '1rem' }}>
      {label}
    </Button>
  );
}

export default FuncProp;