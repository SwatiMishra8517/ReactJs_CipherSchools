import React from 'react'
import {Link} from "react-router-dom"

function ProjectItem({data}) {
    let {name,title,tech,path,image} = data;
    return (
            <div className="card">
        <img className="card-img-top" src={`${image}`} alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{title}</p>
            <Link to={`/project/${path}`} className="btn btn-primary">Read more</Link>
        </div>
        </div>
    )
}

export default ProjectItem
