import React from "react";
import { Link } from 'react-router-dom';

import HomePage from "../pages/HomePage";
import ProjectsComponent from "./ProjectsComponent";


function HeaderComponent() {

    return(
        <header>
            <Link to="/" element={<HomePage />}>Home</Link>
            <Link to="/projects" element={<ProjectsComponent />}></Link>
        </header>
    )
    
}

export default HeaderComponent;
