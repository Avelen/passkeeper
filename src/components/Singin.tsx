import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from '../hook/useAuth';

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const {logIn} = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = data.get('login');

    logIn(user, () => navigate(fromPage, {replace: true}));
  };

  return (
    <Box 
      sx={{
        maxWidth: 400,
        width: '100%',
        margin: 'auto',
      }}
    >
      <Typography component="h1" variant="h5">
        Passkeeper
      </Typography>
      <Box 
          component="form" 
          onSubmit={handleSubmit} 
          noValidate sx={{ mt: 1 }}
        >
        <TextField
          margin="normal"
          required
          fullWidth
          id="login"
          label="Login"
          name="login"
          autoComplete="login"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
}
