import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

function ProjectsComponent() {

    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, []);

    return (
        <Box>
            <Typography 
                component="h1" 
                variant="h5" 
                sx={{
                    marginBottom: '30px',
                    textAlign: 'center',
                }}
            >
                Projects
            </Typography>
            <Grid container spacing={4}>
                {projects.map((item) => 
                <Grid item xs={4}
                    key={item.id}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Link to={`/projects/${item.id}` }>
                        {item.title}
                    </Link>
                </Grid>
                )}
            </Grid>
        </Box>
    )
}

export default ProjectsComponent;