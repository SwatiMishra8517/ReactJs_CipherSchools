import React from 'react'

function TrustedBy({name,desc,icon}) {
    return (
        <div class="col-md-6 py-3">
        <img src={`${icon}`} style={{width:"100%",height:"200px",objectFit:"cover"}} />
        <p style={{fontSize:"90%"}}>{desc}</p>
        </div>
    )
}

export default TrustedBy