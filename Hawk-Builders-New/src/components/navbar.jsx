import React, { useEffect } from "react";
import "../styles/css/master.css";
// import $ from 'jquery';
// import Reveal, { Fade } from "react-awesome-reveal";
// import { keyframes } from "@emotion/react";
// import {up, left, right, down} from '../styles/anim.js';


// Input - "name"
function Navbar(props)
{
  useEffect(function(){
    window.onscroll = () => {
      const nav = document.getElementById("navbar-container");
      // const nav = document.querySelector('#navbar-container');
      if(!(nav===null))if((window).scrollY <= 50) nav.className = ''; else nav.className = 'scroll';
      // if(!(nav===null))if((window).scrollTop() <= 50) nav.className = ''; else nav.className = 'scroll';
    };

    var navLinksCollection = document.getElementsByClassName('nav-link');

    var navLinksArray = Array.from(navLinksCollection); 

    navLinksArray.forEach(navLink => {
      navLink.addEventListener("click", function() {
        preventDefault();

        document.getElementById(navLink.href).scrollIntoView();
      });
    });
  });
  
  function navMenuToggle(){
    document.getElementById("1").toggleClass("toggle-div-btn-1");
    document.getElementById("2").toggleClass("toggle-div-btn-2");
    document.getElementById("3").toggleClass("toggle-div-btn-3");
    document.getElementById("nav-link-container").toggleClass("nav-link-move");
  }
  





  return(
    <nav id="navbar-container" className="">
        <ul id="navbar">
            <li className="push nav-brand"><a href="">{props.name}</a></li>
            <li className="push nav-brand nav-brand-mobile"><a href="">{props.name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}</a></li>
            {/* <Fade triggerOnce keyframes={down} delay="5">

            </Fade> */}
            <div id="nav-link-container">
            {/* <Fade triggerOnce keyframes={down} delay="20"></Fade> */}<li><a className="nav-link" href="#about-us-page-container">About Us</a></li>
            {/* <Fade triggerOnce keyframes={down} delay="50"></Fade> */}<li><a className="nav-link" href="#Projects">Projects</a></li>
            {/* <Fade triggerOnce keyframes={down} delay="80"></Fade> */}<li><a className="nav-link" href="#contact-container">Contact</a></li>
              <div id="bg-nav-link-container"></div>
            </div>

            <button id="toggle-container-btn" onClick={navMenuToggle}>
              <div id="toggle-container">
                <div id="1"></div>
                <div id="2"></div>
                <div id="3"></div>
              </div>
            </button>
        </ul>
    </nav>
  );
}


export default Navbar;