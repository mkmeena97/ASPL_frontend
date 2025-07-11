
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, Divider } from '@mui/material';

function CardWrapper({ title, children }) {
  return (
    <Card sx={{ maxWidth: 350, m: 2, boxShadow: 3 }}>
      {title && <CardHeader title={title} />}
      <Divider />
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

CardWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default CardWrapper;

//or

// function Wrapper({children}) {
//   return (
//     <div style={{ border: "2px dashed red", padding: "10px" }}>
//       {children}
//     </div>
//   );
// }

