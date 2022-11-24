import React, { useEffect, useState } from 'react';
import AuthPage from './pages/AuthPage';
import { Routes, Route } from "react-router-dom";

import ProjectPage from "./pages/ProjectsPage";

function App() {
  const [ isAuth, setIsAuth ] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <>
        {isAuth
          ?
            <Routes>
                <Route path="/projects" element={<ProjectPage />}>Projets</Route>
            </Routes>
          :
          <AuthPage />
        }
    </>
  );
}

export default App;
