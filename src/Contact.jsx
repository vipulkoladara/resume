import React from "react";
import "./css/Contact.css";

function Contact() {
  return (
    <div className="contact-main" id="contact">
      <div className="contact-section-main">
        <div className="contact-section">
          <div className="contact">contact</div>
          <hr width="100%;" color="#a6bbcc" size="3" />
        </div>
        <div className="contact-section-2">
          <div className="contact-section-2-top">
            I would love to hear about your project and how I can help. Please fill in the form, and i'll get back to you as soon as possible.
          </div>
        </div>
      </div>
      <div className="contact-form">
          <label htmlFor="">NAME</label> <br/>
          <input type="text" /><br/>
          <label htmlFor="">EMAIL</label> <br/>
          <input type="email" /><br/>
          <label htmlFor="">MESSAGE</label> <br/>
          <input type="text" /><br/>
          <button type="submit">SEND MESSAGE</button> <br/>
        </div>
    </div>
    
  );
}

export default Contact;
