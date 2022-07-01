import React from 'react'
import './Contact.css'
import emailBanner from '../../assets/mailz.jpeg';

export default function Contact() {
  return (
    <div className='contact-container' id='Contact'>
        <div className='contact-header'>
            <h3>Contact Me</h3>
            <p>Let's Keep In Touch</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>

        <div className="contactDetails">
            <div className="contactCard">
                <div className='getInTouch'>
                    <div className="topHead">
                        <h1>Get In Touch 📧</h1>
                        <div className="colz-icon">
                            <a href="https://github.com/im-niraj/" target="_blank">
                                <i class="fa fa-github" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/imniraj/" target="_blank">
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.instagram.com/n1r4jkumar/" target="_blank">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCMj15TEUdhEjr2YHL-qO7uQ" target="_blank">
                                <i className='fa fa-youtube-play'></i>
                            </a>
                            <a href="https://twitter.com/n1r4jkumar" target="_blank">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    

                    <div className='sendEmail'>
                        Send Your Email Here!
                        <img src={emailBanner} alt="" />
                    </div>
                </div>
                <div className='messageForm'>

                    <div className='formInput'>
                        <p>Name</p>
                        <input type="text" name="name" id="name" />
                        <p>Email</p>
                        <input type="email" name="email" id="email" />
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
