import { Container, CssBaseline, Box, AppBar, Toolbar, Menu, MenuItem, Typography, Button } from '@mui/material';
import React from 'react';
import {NavLink, Outlet, useNavigate} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuth } from '../hook/useAuth';

const theme = createTheme();

function Layout(){
    const {logOut} = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <Button 
                            onClick={() => logOut(() => navigate("/", {replace: true}))}
                            sx={{
                                color: 'white'
                            }}
                            >
                                Logout
                            </Button>
                    </Toolbar>
                </Container>
            </AppBar>

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

                    <Outlet /> 

                    </Container>
            </ThemeProvider>
        </>
    );
}

export default Layout;