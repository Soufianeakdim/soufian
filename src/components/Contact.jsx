import React, { useState } from "react";
import './css/Contact.css';


function Contact(props) {

  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
  
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
  
    try {
      let response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to send message: ${response.status} ${response.statusText}`);
      }
  
      let result = await response.json();
      if (result.status === "Message Sent") {
        alert("Message sent successfully!");
      } else {
        throw new Error(`Unexpected response: ${JSON.stringify(result)}`);
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setStatus("Submit");
    }
  };
  

  return (
    <div className="contact-container">
      <section className="contact-form">
        <form onSubmit={handleSubmit}>
          <h1 className={!props.IsDarkmode ? 'whitep' : 'blackp'}>Send Me A Message :</h1>
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
          <label htmlFor="message"> Message :</label>
          <textarea id="message" name="message" placeholder="Your Message" required />
          <button type="submit">{status.toUpperCase()}</button>
        </form>
      </section>
      <section className="Getin">
        <h1 className='blackp'>Get in Touch </h1>
        <p className='blackp'> You would like to contact us, talk about a project collaboration, or just say hello, I'd love to hear from you just fill out the form and send me an email.</p>
      </section>
    </div>
  );

}
export default Contact;

