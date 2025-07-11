// GreetingCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button } from '@mui/material';

function GreetingCard({ name, message, buttonText, onButtonClick }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Hello, {name} 
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
          {message}
        </Typography>
        <Button variant="contained" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

GreetingCard.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default GreetingCard;
