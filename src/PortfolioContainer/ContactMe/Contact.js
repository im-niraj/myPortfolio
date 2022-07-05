import React from "react";
import "./Contact.css";
import {MdEmail} from 'react-icons/md';
import {FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-container" id="Contact">
      <div className="contact-header">
        <h3>Contact Me</h3>
        <p>Let's Keep In Touch</p>
        <span className="header-underline">
          <span className="header-underline1"></span>
        </span>
      </div>

      <div className="contactDetails">
        <div className="contactForm">
            <div className="topCtn">
                <div className="callBtn btnTp">
                    <FaPhoneAlt/>
                    <p>PHONE</p>
                    <span>My personal number </span>
                    <p className="contactNo">+919453800108</p>
                </div>
                <div className="emailBtn btnTp">
                    <MdEmail />
                    <p>EMAIL</p>
                    <span>Contact me on email address</span>
                    <p className="contactNo">n1r4jkumar@gmail.com</p>
                </div>
                <div className="addrBtn btnTp">
                    <FaMapMarkerAlt />
                    <p>LOCATION</p>
                    <span>Dist-Mirzapur, Uttar Pradesh 231304 </span>
                    <p className="contactNo">View on Google Map</p>
                </div>
                
            </div>
          <div className="leftForm">
            <div className="row">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name: "
              />
            </div>
            <div className="row">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email:"
              />
            </div>
            <div className="row">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your Subject:"
              />
            </div>
          </div>
          <div className="rightForm">
            <div className="row">
              <textarea
                name="message"
                id="inputMessage"
                cols="0"
                rows="9"
                placeholder="Your Message:"
                spellcheck="false"
              ></textarea>
            </div>
          </div>
          <div className="sendButton" colspan='2'>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
