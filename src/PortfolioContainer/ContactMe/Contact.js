import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
        <div className='contact-header'>
            <h3>Contact Me</h3>
            <p>Lets Keep In Touch</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>

        <div className="contactDetails">
            <div className="contactCard">
                <div className='getInTouch'>
                    <h1>Get In Touch 📧</h1>
                    <div className="colz-icon">
                        <a href="#">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href="#">
                            <i className='fa fa-twitter'></i>
                        </a>
                    </div>

                    <div>
                        Send Your Email Here!
                    </div>
                </div>
                <div className='messageForm'>

                    <div className='formInput'>
                        <p>Name</p>
                        <input type="text" name="name" id="name" />
                        <p>Email</p>
                        <input type="text" name="name" id="name" />
                        <p>Message</p>
                        <textarea name="message" id="message" cols="30" rows="3" ></textarea>
                        <div>
                        <button>Send <i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>

    
    </div>
  )
}
