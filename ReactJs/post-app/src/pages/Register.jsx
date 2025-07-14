import { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    full_name: '',
    phone_number: '',
    user_bio: '',
    gender: '',
    date_of_birth: null,
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === 'email' ? value.toLowerCase() : value,
    }));
  };

  const handleDateChange = (date) => {
    setForm((prev) => ({
      ...prev,
      date_of_birth: date,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.username) newErrors.username = 'Username is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Valid email is required';
    if (!form.password || form.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
    if (!form.full_name) newErrors.full_name = 'Full name is required';
    if (!form.phone_number || !/^\d{10}$/.test(form.phone_number))
      newErrors.phone_number = 'Valid 10-digit phone number required';
    if (!form.gender) newErrors.gender = 'Gender is required';
    if (!form.date_of_birth) newErrors.date_of_birth = 'Date of birth required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setLoading(true);

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    const payload = {
      ...form,
      date_of_birth: form.date_of_birth
        ? new Intl.DateTimeFormat('en-GB').format(form.date_of_birth) // dd-mm-yyyy
        : null,
      profile_picture: null, // still null for now
    };

    try {
      const response = await fetch(
        'http://localhost:5000/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const data = await response.json();
      console.log('Registration successful:', data);
      navigate('/login');
    } catch (err) {
      console.error(err);
      setSubmitError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>

        {submitError && <Alert severity="error">{submitError}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.username}
            helperText={errors.username}
            required
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password}
            required
          />
          <TextField
            label="Full Name"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.full_name}
            helperText={errors.full_name}
            required
          />
          <TextField
            label="Phone Number"
            name="phone_number"
            value={form.phone_number}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.phone_number}
            helperText={errors.phone_number}
            required
          />
          <TextField
            label="Bio"
            name="user_bio"
            value={form.user_bio}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />
          <FormControl fullWidth margin="normal" required error={!!errors.gender}>
            <InputLabel>Gender</InputLabel>
            <Select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              label="Gender"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          <Box mt={2}>
            <DatePicker
              label="Date of Birth"
              value={form.date_of_birth}
              onChange={handleDateChange}
              textField={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={!!errors.date_of_birth}
                  helperText={errors.date_of_birth}
                />
              )}
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
            disabled={loading}
            startIcon={loading && <CircularProgress size={18} />}
          >
            {loading ? 'Registering...' : 'Register'}
          </Button>
        </form>
      </Container>
    </LocalizationProvider>
  );
}
