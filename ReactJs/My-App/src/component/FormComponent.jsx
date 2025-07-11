import React, { useRef, useState } from 'react';
import { TextField, Button, Typography, Box, Stack } from '@mui/material';
import { openDB } from 'idb';

const DB_NAME = 'UserFormDB';
const STORE_NAME = 'users';

async function saveToIndexedDB(data) {
  const db = await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
  await db.add(STORE_NAME, data);
  console.log("Saved to IndexedDB:", data);
}

function FormComponent() {
  // Controlled fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  // Uncontrolled fields
  const ageRef = useRef();
  const fileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const age = ageRef.current.value;
    const file = fileRef.current.files[0];

    const userData = {
      name,
      email,
      age,
      comments,
      profileImageName: file?.name || 'No file'
    };

    await saveToIndexedDB(userData);
    alert("Form submitted and data stored in IndexedDB!");

    // Reset form
    setName('');
    setEmail('');
    setComments('');
    ageRef.current.value = '';
    fileRef.current.value = null;
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 500, m: 'auto', mt: 5, p: 3, border: '1px solid #ccc', borderRadius: 2, backgroundColor: 'lightblue' }}
    >
      <Typography variant="h5" gutterBottom>
        Mixed Form (Controlled + Uncontrolled)
      </Typography>

      <Stack spacing={2}>
        {/* Controlled Inputs */}
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Comments"
          multiline
          rows={3}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        {/* Uncontrolled Inputs */}
        <TextField
          label="Age"
          type="number"
          inputRef={ageRef}
        />
        <input
          type="file"
          ref={fileRef}
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default FormComponent;
