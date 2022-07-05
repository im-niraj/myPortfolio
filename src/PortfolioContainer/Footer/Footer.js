import React from 'react'
import './Footer.css';
import {ImHeart} from 'react-icons/im';
export default function Footer() {
    let date = new Date().getFullYear();
  return (
    <footer className="site-footer">
        <div className="container-footer">
                <div className="">
                    <div className=" footer-toop">
                        <h3 id='NameFooter'>NIRAJ KUMAR</h3>
                        <p>I'm a Java Backend Developer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        <div className='footer-social'>
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
                </div>
            </div>


            <div className="container-footer-text">
                <p>©{date}. Design with {<ImHeart color='red'/>} by Niraj.</p>
            </div>
    </footer>
  )
}
