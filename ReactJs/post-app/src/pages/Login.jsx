import { useAuth } from '../context/AuthContext';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  IconButton,
  InputAdornment,
  Link,
  Box
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(form);
      navigate('/');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          value={form.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {error && <Typography color="error" sx={{ mt: 1 }}>{error}</Typography>}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Link component={RouterLink} to="/forgot-password" variant="body2">
            Forgot Password?
          </Link>
          <Link component={RouterLink} to="/register" variant="body2">
            Don’t have an account? Register
          </Link>
        </Box>

        <Button variant="contained" type="submit" fullWidth sx={{ mt: 3 }}>
          Login
        </Button>
      </form>
    </Container>
  );
}
