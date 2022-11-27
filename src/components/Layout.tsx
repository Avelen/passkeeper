import { 
    Container, 
    CssBaseline,
    Box, 
    AppBar, 
} from '@mui/material';
import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useAuth } from "../hook/useAuth";

const theme = createTheme();

function Layout(){
    const {isAuth} = useAuth();

    return (
        <>  
            {isAuth &&
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <div className='heading-menu'>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/projects">Projects</NavLink>
                        </div>
                    </Container>
                </AppBar>
            }

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