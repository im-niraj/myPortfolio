import React from "react";
import "./Navbar.css";

export default function Navbar() {
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
          <a href="#">NIRAJ
          </a>
        </div>
        <div className="nav-menu-sec">
            <div className="nav-menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact </a>
            </div>

            <button className="navbar-toggler" data-toggle="open-navbar1">
            <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
        </div>
    </div>
  );
}
