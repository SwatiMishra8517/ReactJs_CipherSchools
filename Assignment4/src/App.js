import React,{useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Requests from "./pages/Requests"
import ProjectDesc from "./pages/ProjectDesc"

let store = {
    name:"Swati Mishra",
    age:21,
    email:"swatimishra@gmail.com",
    mobile:87663535353,
}

function App() {
    const [messages, setMessages] = useState([]);
    let projects = [
    {name:"Quiz",
    path:"project-1",
    title:"Website for organizing exams",
    description:`PROJECT: Website for organizing exams. 
                 ROLE: In technical part my role was to deal with frontend logic using JavaScript.`,
    image:"https://i.ytimg.com/vi/5-OE4X9ZkkA/hqdefault.jpg",
    tech:["PHP","JS"]
    },
    {name:"Ecommerce",
    path:"project-2",
    title:"website for selling electronic items",
    description:`PROJECT: website for selling electronic items. A very userfriendly and attractive website with all the basic functionalities
                 ROLE: Frontend designing and logic using JavaScript, html and css , and backend using SQL and PHP                
    `,
    image:"https://www.seoclerk.com/pics/000/621/953/601ac3d6e81ae9d0a5e09d7c4d07db3c.png",
    tech:["JavaScript","MYSQL","PHP"]
    },
    {name:"Chatbot",
    path:"project-3",
    title:"website for bank related conversation with user ",
    description:`PROJECT:  frontend of a software that can simulate a conversation (or a chat) with a user in natural language through messaging  websites about bank related query and informations
                ROLE: Frontend part using javaScript, HTML,Bootstrap,CSS         
    `,
    image:"https://hackernoon.com/hn-images/1*5zQ_G4mZhB-4q-V9PhI0xQ.jpeg",
    tech:["Node","React"]
    },
    {name:"NGO Website",
    path:"project-4",
    title:"Website for a NGO BRING SMILE",
    description:`PROJECT: This website i made in team for an organization which helps poor people by making connection and talking donation for poor children's bright future.
                ROLE: Frontend logic and design using Angular and backend using Mongodb.
                    `,
    image:"https://i.pinimg.com/originals/96/5d/95/965d95d0efa1eb1c800bb070e4b01de5.png",
    tech:["Angular","Mongodb"]
    }
    ]
    return (
        <div>
            <Router>
            <Navbar/>
            <Switch>
            <Route path="/contact">
               <Contact data={store} messages={messages} setMessages={setMessages} />
            </Route>
            <Route path="/resume">
               <Resume projects={projects} />
            </Route>
            <Route path="/messages">
               <Requests messages={messages}/>
            </Route>
            <Route path="/project/:path">
               <ProjectDesc projects={projects} />
            </Route>
            <Route path="/">
                <Home />
            </Route>
            </Switch>
            <Footer/>
        </Router>
        </div>
    )
}

export default App
