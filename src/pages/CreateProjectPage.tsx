import React from "react";
import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

function CreateProjectPage() {
    const {isAuth} = useAuth();

    return isAuth ? (
        <h1>Create new project</h1>
    ) : (
        <Navigate to="/" />
    )
}

export default CreateProjectPage;