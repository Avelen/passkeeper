import { Box, Grid, Link, Typography } from '@mui/material';
import * as React from 'react';

export default function ProjectsComponent() {

    const projects = [
        {   
            id: '1',
            title: 'mediapanda.ru',
            link: '#',
        },
        {
            id: '2',
            title: 'viamond',
            link: '#',
        },
        {
            id: '3',
            title: 'test',
            link: '#',
        },
        {
            id: '4',
            title: 'lorem ipsun',
            link: '#',
        }
    ]

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
                    <Link href={ item.link }>
                        {item.title}
                    </Link>
                </Grid>
                )}
            </Grid>
        </Box>
    )
}