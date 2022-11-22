import React, { useEffect, useState } from 'react';
import SignIn from './components/Singin';
import ProjectsComponent from './components/ProjectsComponent';
import ProjectItem from './components/ProjectItem';
import { Container, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  const [ isAuth, setIsAuth ] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
  }, []);

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
        {isAuth
          ?
          <ProjectsComponent />
          :
          <SignIn />
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;
