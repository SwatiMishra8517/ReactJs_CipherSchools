import React from 'react'

function Service({heading,secondary,desc,icon}) {
    return (
        <div class="col-sm-6">
              <div class="card" style={{padding:"50px 0"}}>
                <div class="card-body" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                  <i class={`fa ${icon}`} aria-hidden="true" style={{display:"flex",justifyContent:"center",alignItems:"center"}}></i>
                  <h5 class="card-title">{heading}</h5>
                  <p class="card-text">{secondary}</p>
                  <p>{desc}</p>
                </div>
              </div>
            </div>
    )
}

export default Service
