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
                                "Enthusiastic Dev 🔴",
                                1500,
                                "Full Stack developer 🖥",
                                1500,
                                "Java Backend Developer 🚀",
                                1500,
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
                        <button className='resumeButton'>Get Resume</button>
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
