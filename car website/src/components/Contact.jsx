import { useState } from "react";
import "../CSS/Contact.css"
import { Header ,Footer } from "../components";





export const Contact = () => {

const[name,setName] = useState('') 
const[email,setEmail] = useState('') 
const[message,setMessage] = useState('') 


const nameHandler = (e) => {
  setName(e.target.value)
} 

const emailHandler = (e) => {
  setEmail(e.target.value)
} 
  const messageHandler = (e) => {
    setMessage(e.target.value)
  } 

  const submitHandler = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('')

  }
    return (
        <div> 
            
            <div className="contact-container"> 
            <div className="contact-image-container">
            <img
            className="contact-image"
            src="../src/images/contactus.jpg"
          ></img>
          </div>
          <div className="contact-message">
            <h1 className="contact-title">CONTACT US</h1>
            <form className="contact-form" onSubmit={submitHandler}>
            <input value={name} onChange={nameHandler} className="contact-input" placeholder="Enter Your Name" type="text"/>
            <input value={email} onChange={emailHandler} className="contact-input" placeholder="Eenter Your Email" type="text"/>
            <textarea value={message} onChange={messageHandler} className="contact-input" placeholder="Enter Your message"></textarea>
            <button className="contact-btn" onSubmit={submitHandler} type="submit">Send message</button>
            </form>
          </div>
          </div>
           
        </div>


    )
}