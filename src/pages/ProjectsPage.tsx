import React from "react";
import { Container, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProjectsComponent from "../components/ProjectsComponent";

const theme = createTheme();

function ProjectPage() {
    
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
          <ProjectsComponent />
        </Container>
    </ThemeProvider>
    )
}

export default ProjectPage;
