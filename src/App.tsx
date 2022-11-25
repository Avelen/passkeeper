import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';

import ProjectPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import AuthPage from './pages/AuthPage';
import SinglePage from './pages/SinglePage';
import CreateProjectPage from './pages/CreateProjectPage';
import EditProjectPage from './pages/EditProjectPage';

import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  const [ isAuth, setIsAuth ] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true);
    }
  }, [isAuth]);

  return (
    <AuthProvider>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={
              <RequireAuth>
                <ProjectPage />
              </RequireAuth>
            } />
            <Route path="projects/:id" element={<SinglePage />} />
            <Route path="projects/:id/edit" element={<EditProjectPage/>} />
            <Route path="projects/new" element={<CreateProjectPage />} />
            <Route path="login" element={<AuthPage />} />
            <Route path="*" element={<AuthPage />} />
          </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
