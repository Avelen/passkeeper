import { Typography, Grid, Input, Alert } from "@mui/material";
import React, { useState } from "react";

export default function ProjectItem(props) {
    // const { project } = props.project;
    const [ isCopyed, setCopyed ] = useState(false);

    function CopyValue(element) {
        navigator.clipboard.writeText(element.target.value);
        setCopyed(true);
        setTimeout( function () {
            setCopyed(false);
        }, 1000);
    }
    
    const project = [
        {
            passType: 'CMS',
            access: {
                projectLink: 'viamond.ru/admin',
                login: 'admin',
                password: '1234',
            }
        },
        {
            passType: 'FTP',
            access: {
                projectLink: 'viamond.ru/admin',
                login: 'admin',
                password: '1234',
            }
        },
        {
            passType: 'SSH',
            access: {
                projectLink: 'viamond.ru/admin',
                login: 'admin',
                password: '1234',
            }
        },
    ]

    return(
        <>
            {isCopyed ? 
                <Alert 
                    severity="success"
                    sx={{
                        position: 'fixed',
                        right: '10px',
                        top: '10px',
                    }}
                >
                    Copyed to clipboard!
                </Alert> 
            : ''}
            <Grid container spacing={6}>
                {project.map((item) => 
                    <Grid item xs={4} key={item.passType}>
                        <Typography 
                            component="h1" 
                            variant="h5" 
                            sx={{
                                marginBottom: '20px',
                                textAlign: 'center',
                            }}
                        >
                            { item.passType }
                        </Typography>
                        <Input 
                            value={item.access.projectLink}
                            readOnly={true}
                            onClick={CopyValue}
                        />
                        <Input 
                            value={item.access.login}
                            readOnly={true}
                            onClick={CopyValue}
                        />
                        <Input 
                            value={item.access.password}
                            readOnly={true}
                            onClick={CopyValue}
                        />
                    </Grid>
                )}
            </Grid>
        </>
    )
}