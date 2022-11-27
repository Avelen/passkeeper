import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProjectItem from "../components/ProjectItem";
import { Button } from "@mui/material";
import { useAuth } from "../hook/useAuth";

function SinglePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ project, setProject ] = useState(null);
    const {isAuth} = useAuth();

    const goBack = () => navigate(-1);
    const goEdit = () => navigate(`/projects/${id}/edit`);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setProject(data))
    }, [id]);

    return isAuth ? (
        <>
            {project && (
                <>
                    <Button 
                        variant="contained" 
                        onClick={goBack}
                    >
                        Back
                    </Button>
                    <h1>{ project.id }</h1>
                    <p>{ project.title }</p>
                    <ProjectItem project={project}  />
                    <Button 
                        variant="contained"
                        onClick={goEdit}
                        sx={{
                            marginTop:"20px"
                        }}
                    >
                        Edit project
                    </Button>
                </>
            )}
        </>
    ) : (
        <Navigate to="/" />
    )
}

export default SinglePage;
