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
                        hello
                    </div>
                </div>
            </div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laborum, reprehenderit a eaque blanditiis quae quia delectus nesciunt minima architecto, expedita magni illum rerum consectetur facere eius error autem aut vitae ea. Id magni laboriosam, voluptatibus iste odio assumenda quas aspernatur tempora molestias deleniti? Reprehenderit facilis nisi eaque eligendi quos.</p>
    </div>
  )
}
