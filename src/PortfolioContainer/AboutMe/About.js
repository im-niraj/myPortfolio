import React from 'react';
import "./About.css";
import profilePic from "../../assets/profilephoto1.jpg"

export default function About() {
    
  return (
    <div className='about-container' id='About'>
        <div className='about-header'>
            <h3>About Me</h3>
            <p>Why Choose Me?</p>
            <span className='header-underline'>
                <span className='header-underline1'></span>
            </span>
        </div>

        <div className="about-content-box">
            <div className="aboutCard">
                <div className="profilePic">
                    <img src={profilePic} alt="" />
                </div>
                <div className="profile-content">
                    <div className="profilesummary">
                        Full Stack web and Java backend developer with background knowledge of MERN stack, along with building application with utmost efficiency. Strong professional to be an asset for an organization.
                    </div>
                    <div>
                        <h3>Here are a Few Highlights</h3>
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
                        <a href="https://drive.google.com/file/d/13hk007jZ1deVY4uMwbyc5K3Q-VeUwAcG/view" target="_blank" download="resume.pdf">
                            <button className='resumeButton2'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
