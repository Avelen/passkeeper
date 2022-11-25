import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProjectItem from "../components/ProjectItem";
import { Button } from "@mui/material";

function SinglePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ project, setProject ] = useState(null);

    const goBack = () => navigate(-1);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setProject(data))
    }, [id]);

    return (
        <>
            {project && (
                <>
                    <Button onClick={goBack}>Back</Button>
                    <h1>{ project.id }</h1>
                    <p>{ project.title }</p>
                    <ProjectItem project={project}  />
                    <Link to={`/projects/${id}/edit`}>Edit project</Link>
                </>
            )}
        </>
    )
}

export default SinglePage;
