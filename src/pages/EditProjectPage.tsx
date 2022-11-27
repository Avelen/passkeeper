import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

function EditProjectPage() {
    const {isAuth} = useAuth();
    const { id } = useParams();

    return isAuth ? (
        <h1>Edit project {id}</h1>
    ) : (
        <Navigate to="/" />
    )
}

export default EditProjectPage;