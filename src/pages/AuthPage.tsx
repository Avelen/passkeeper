import React from "react";
import SignIn from "../components/Singin";
import { Container, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function AuthPage() {
    
    return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md">
            <CssBaseline />
                <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            ></Box>
            <SignIn />
        </Container>
    </ThemeProvider>
    )
}

export default AuthPage;
