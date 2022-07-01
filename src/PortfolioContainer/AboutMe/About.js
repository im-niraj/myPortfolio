import React from 'react';
import "./About.css";
import profilePic from "../../assets/profilephoto1.jpg"

export default function About() {
    
  return (
    <div className='about-container'>
        <div className='about-header'>
            <h3>About Me</h3>
            <p>Why Choose Me?</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>

        <div className="aboutDetails">
            <div className="aboutCard">
                <div className="profilePic">
                    <img src={profilePic} alt="" />
                </div>
                <div className="profileDetails">
                    Full Stack web and Java backend developer with background knowledge of MERN stack, along with building application with utmost efficiency. Strong professional to be an asset for an organization.
                    <div>
                        <h4>Here are a Few Highlights</h4>
                        <ul className='keyHighlights'>
                            <li>Full Stack web development</li>
                            <li>Java Backend Development</li>
                            <li>Spring Boot</li>
                            <li>Building REST API</li>
                            <li>Managing Database</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="profile-optins resumeBtn">
                    <a href="https://drive.google.com/file/d/1MEY3bfr14zx4oCrw6evXhElsYBQjlO68/view?usp=sharing" target="_blank" download="resume.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}