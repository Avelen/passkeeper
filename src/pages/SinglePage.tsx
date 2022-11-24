import React from "react";
import { Container, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProjectItem from '../components/ProjectItem';

const theme = createTheme();

function SinglePage() {
    
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
            <ProjectItem />
        </Container>
    </ThemeProvider>
    )
}

export default SinglePage;
