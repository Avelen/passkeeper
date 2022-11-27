import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import SignUp from './components/SingUp';
import SignIn from './components/SingIn';

import ProjectPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import SinglePage from './pages/SinglePage';
import CreateProjectPage from './pages/CreateProjectPage';
import EditProjectPage from './pages/EditProjectPage';

import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="projects/:id" element={<SinglePage />} />
            <Route path="projects/:id/edit" element={<EditProjectPage/>} />
            <Route path="projects/new" element={<CreateProjectPage />} />
          </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
