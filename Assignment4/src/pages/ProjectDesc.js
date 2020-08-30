import React from 'react'
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"

function ProjectDesc(props) {
    let { path } = useParams();
    let {projects} = props;
    let project = projects.find(project=>project.path==path);
    return (
            <div className="container" style={{width: "100%"}}>
               <div class="card">
                <div class="card-header">
                    Project
                </div>
                <div class="card-body">
                    <h5 class="card-title">{project.name}</h5>
                    <img src={`${project.image}`} style={{width:"70%"}}  /> 
                    <p class="card-text">{project.description}</p>
                    <p class="card-text">Technologies used: {project.tech.toString()}</p>
                    <Link className="btn btn-primary" to="/resume">Go back</Link>
                </div>
                </div>
        </div>
    )
}

export default ProjectDesc
