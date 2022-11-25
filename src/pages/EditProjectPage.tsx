import React from "react";
import { useParams } from "react-router-dom";

function EditProjectPage() {
    const { id } = useParams();

    return (
        <h1>Edit project {id}</h1>
    )
}

export default EditProjectPage;