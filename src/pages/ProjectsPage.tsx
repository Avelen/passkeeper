import React from "react";
import ProjectsComponent from "../components/ProjectsComponent";
import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

function ProjectPage() {
    const {isAuth} = useAuth();

    return isAuth ? (
        <ProjectsComponent />
    ) : (
        <Navigate to="/" />
    )
}

export default ProjectPage;
