import React from 'react'
import './Footer.css';
import {Link} from "react-scroll";
export default function Footer() {
  return (
    <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">I am a Java Backend developer and also a Frontend developer, I build websites using HTML, CSS and JavaScript. </p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Tech Stack</h6>
          <ul className="footer-links">
            <li>Java</li>
            <li>SQL</li>
            <li>Spring Boot</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul className="footer-links">
                <li>
                <Link to="Home" spy={true} smooth={true} offset={0} duration={500} >
                    Home
                </Link>
                </li>
                <li>
                <Link to="About" spy={true} smooth={true} offset={0} duration={500} >
                    About
                </Link>
                </li>
                <li>
                <Link to="Projects" spy={true} smooth={true} offset={0} duration={500}>
                    Projects
                </Link>
                </li>
                <li>
                <Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>
                    Contact
                </Link>
                </li>
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by  &nbsp;
            <a  href="http://www.nirajkumar.in">Niraj Kumar</a>
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
                <a href="https://github.com/im-niraj/" target="_blank">
                    <i class="fa fa-github" aria-hidden="true"></i>
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/imniraj/" target="_blank">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                </li>
                <li>
                <a href="https://www.instagram.com/n1r4jkumar/" target="_blank">
                    <i className='fa fa-instagram'></i>
                </a>
                </li>
                <li>
                <a href="https://www.youtube.com/channel/UCMj15TEUdhEjr2YHL-qO7uQ" target="_blank">
                    <i className='fa fa-youtube-play'></i>
                </a>
                </li>
                <li>
                <a href="https://twitter.com/n1r4jkumar" target="_blank">
                    <i className='fa fa-twitter'></i>
                </a>  
                </li>
          </ul>
        </div>
      </div>
    </div>
    </footer>
  )
}
