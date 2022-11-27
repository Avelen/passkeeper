import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from "react";

function FormComponent({title, handleSubmit}) {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');

    return (
        <Box 
            sx={{
                maxWidth: 400,
                width: '100%',
                margin: 'auto',
            }}
        >
        <Typography component="h1" variant="h5">
                {title}
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
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button variant="contained"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                {title}
            </Button>
        </Box>
        </Box>
    )
}

export default FormComponent;
