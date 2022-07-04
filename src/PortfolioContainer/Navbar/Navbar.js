import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [flag, setFlag] = useState(false);
   const toggleButton = () => {
        if(flag){
            document.getElementById("toggleMenu").style.display = 'block';
            setFlag(!flag);
        }
        else{
            document.getElementById("toggleMenu").style.display = 'none';
            setFlag(!flag);
        }
   }

    window.addEventListener('scroll', () =>{
        let navbar = document.querySelector('.navbar-header');
        if(window.pageYOffset > 470){
            navbar.classList.add('sticky');
        }
        else{
            navbar.classList.remove('sticky');
        }
    })
  return (
    <div className="navbar-header">
        <div className="nav-logo">
            <Link to="Home" spy={true} smooth={true} offset={0} duration={500} >
                 NIRAJ
            </Link>
        </div>
        <div className="nav-menu-sec">
            <div className="nav-menu">
                <Link to="Home" spy={true} smooth={true} offset={0} duration={500} >
                    Home
                </Link>
                <Link to="About" spy={true} smooth={true} offset={0} duration={500} >
                    About
                </Link>
                <Link to="Projects" spy={true} smooth={true} offset={0} duration={500}>
                    Projects
                </Link>
                <Link to="Skills" spy={true} smooth={true} offset={0} duration={500}>
                    Skills
                </Link>
                <Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>
                    Contact
                </Link>
                
            </div>

            <button className="navbar-toggler" data-toggle="open-navbar1" onClick={toggleButton}>
            <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
        </div>
        <div id="toggleMenu" className="hiddenMenu">
                <li><Link to="Home" spy={true} smooth={true} offset={0} duration={500} >
                    Home
                </Link></li>
                <li><Link to="About" spy={true} smooth={true} offset={0} duration={500} >
                    About
                </Link></li>
                <li><Link to="Projects" spy={true} smooth={true} offset={0} duration={500}>
                    Projects
                </Link></li>
                <li><Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>
                    Contact
                </Link></li>

        </div>
    </div>
  );
}
