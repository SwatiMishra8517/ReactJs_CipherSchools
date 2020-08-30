import React from 'react'
import ProjectItem from "../components/ProjectItem"

function Resume({projects}) {
    const images = projects.map(e=>e.image);
    return (
        <div className="container">
        <div id="carouselExampleControls" style={{height:"300px",overflow:"hidden"}} class="my-1 rounded carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src={images[0]} alt="First slide"/>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src={images[1]} alt="Second slide"/>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src={images[2]} alt="Third slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>

      
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Who I Am</h1>
                <p class="lead">
                    My name's Swati Mishra. I'm a Frontend Developer, who is a freelancer as well as a college student.
                        During the day I’m the lead developer at a local agency. During the evenings I spend my time working on freelance projects and building my own products.
                        My most recent project is called Treejective. It’s a simple yet informative website for dendrophile.
                    </p>
            </div>
        </div>
        <h1 class="display-4">MY PROJECTS</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gridGap:"20px"}} >
        {projects.map(project=><ProjectItem data={project} />)}
        </div>
    

        <div style={{margin:"70px 0"}} >
        <h3 style={{color:"skyblue"}}>Technical Skills</h3>
        <pre style={{fontSize:"120%"}}><b> JavaScript</b>   <b>Angular</b>   <b> ReactJS</b>  <b> PHP</b>   <b>Git</b> <b>UI Designing</b>  <b>c</b>  <b>c++</b>  <b>Java</b></pre> 
        </div>
        <div style={{margin:"70px 0"}} >
        <h3 style={{color:"skyblue"}}>Experiences</h3>
        <p> Getting SEO right is about more than just some well-optimised title tags and publishing a blog post once a month. Climbing the search ladder takes time, effort and a lot of patience. </p>
        <ol class="list-group list-group-flush">
            <li class="list-group-item"><b>Participated in Hackathon Contest - </b><span>Participated in Code Gladiators 2020, the world's biggest coding event</span></li>
            <li class="list-group-item"><b>Organized An Event -</b><span>Organised an event named <b>'A Day with Chotu and Guddi'</b> under the aegis of 'Bring Smile Organisation' distributed clothes, food to the poor children, on<b> Oct 2018</b></span></li>
            <li class="list-group-item"><b>Freelancing -</b> Made gym managment system software for <b>The Gym Hercules</b></li>
        </ol>
        </div>

        <div style={{margin:"70px 0"}} >
        <h3 style={{color:"skyblue"}}>Achievements</h3>
        <p> Getting SEO right is about more than just some well-optimised title tags and publishing a blog post once a month. Climbing the search ladder takes time, effort and a lot of patience. </p>
        <ol class="list-group list-group-flush">
            <li class="list-group-item">Participated in Bhangra World Record<b>(11/2018)</b></li>
            <li class="list-group-item">ARMY WELFARE EDUCATION MERIT CERTIFICATE<b>(01/2016)</b></li>
            <li class="list-group-item">2nd position in LASH (intra school)<b>(2016)</b></li>
            <li class="list-group-item">Appointed as Head of Discipline Committee, Kendriya Vidyalaya No.2 <b>(2014-2015)</b></li>
            <li class="list-group-item">Coordinator in Youth Parliament <b>(03/2015-07/2016)</b></li>
        </ol>
        </div>

        </div>
    )
}

export default Resume
