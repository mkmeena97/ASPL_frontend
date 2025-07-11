import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../utils/db';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <Box sx={{ maxWidth: 600, m: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Stored Users
      </Typography>

      <Stack spacing={2}>
        {users.length === 0 ? (
          <Typography>No data found.</Typography>
        ) : (
          users.map((user) => (
            <Card key={user.id} variant="outlined">
              <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography>Email: {user.email}</Typography>
                <Typography>Age: {user.age}</Typography>
                <Typography>Comments: {user.comments}</Typography>
                <Typography>Image: {user.profileImageName}</Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Stack>
    </Box>
  );
}

export default UserList;
