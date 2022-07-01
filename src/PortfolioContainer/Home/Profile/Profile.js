import React from 'react'
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className="profile-details">
                <div className="colz">
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
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        Hello I'm <span className='highlighted-text'>Niraj Kumar</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1>
                        <Typical
                            loop={Infinity}
                            steps ={[
                                "Enthusiatic Dev 🔴",
                                1000,
                                "Full Stack developer 🖥",
                                1000,
                                "MERN Stack Dev",
                                1000,
                                "React Dev",
                                1000,
                                "Java Backend Developer 🚀",
                                1000,
                            ]}
                        />
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building application with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className="profile-optins">
                    <a href="https://drive.google.com/file/d/1MEY3bfr14zx4oCrw6evXhElsYBQjlO68/view?usp=sharing" target="_blank" download="resume.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}
