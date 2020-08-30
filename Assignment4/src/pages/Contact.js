import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import './contact.css'
function Contact({setMessages}) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const submitRequest = (e)=>{
    e.preventDefault()
    setName("");
    setEmail("");
    setMessage("")
    setMessages(prev=>[...prev,{name,email,message}]);
    history.push("/messages#MessagesTable");
  }
    return (
      <div className="py-5">
      <h1 className="container"><u>Contact me</u></h1>
      <div className="container" style={{display:"flex"}}>
            <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName">Name</label>
      <input onChange={e=>setName(e.target.value)} type="text" class="form-control" id="inputName" placeholder="username"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail">Email</label>
      <input onChange={e=>setEmail(e.target.value)} type="email" class="form-control" id="inputEmail" placeholder="username@gmail.com"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">How can I help?</label>
    <textarea onChange={e=>setMessage(e.target.value)} rows="8" cols="10" class="form-control" id="inputAddress" placeholder="type..."></textarea>
  </div>
  <button type="submit" onClick={submitRequest} class="btn btn-primary">Submit</button>
</form>
<div style={{fontFamily:"sans-serif !important",marginLeft:"20px",background:"#C3D3FB",borderRadius:"5px",borderLeft:"5px solid #0A53A4",flex:"1",padding:"20px 0 0 20px"}}>
    <p>Name: <b>{name}</b></p>
    <p>Email: <b>{email}</b></p>
    <p>Message: {message}</p>
</div>
        </div>
        </div>
    )

}

export default Contact
