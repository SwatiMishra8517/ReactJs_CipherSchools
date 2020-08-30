import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div style={{display:"block"}}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Portfolio</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <Link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
      <Link class="nav-link" to="/contact">Contact</Link>
      <Link class="nav-link" to="/resume">Resume</Link>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
