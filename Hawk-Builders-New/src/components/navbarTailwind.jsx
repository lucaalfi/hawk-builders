import React, { useEffect } from "react";
import "../styles/css/masterout.css";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

function Navbar(props)
{
  useEffect(function(){
    window.onscroll = () => {
      const nav = document.getElementById("navContainer");
      if(!(nav===null)){
        if((window).scrollY <= 50){
          nav.classList.remove("scroll");
        }
        else{ 
          nav.classList.add("scroll");
        }
      }
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
  
  return(
    <nav className="fixed w-full z-20 pt-2 pb-1 top-0 start-0 bg-transparent" id="navContainer">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Fade triggerOnce keyframes={down} delay="5">
            <div>
              <a href="" className="text-5xl hidden sm:block py-2 px-3 md:p-0 border-none bg-transparent text-white hover:font-bold">{props.name}</a>
              <a href="" className="text-5xl block sm:hidden nav-brand-mobile text-5xl block py-2 px-3 rounded bg-transparent md:p-0 text-white hover:font-bold">{props.name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}</a>
            </div>
        </Fade>
      <div className="items-center justify-between w-full md:flex md:w-auto">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-white bg-opacity-25 md:bg-transparent">
              <Fade triggerOnce keyframes={down} delay="20">
                <li>
                  <a className="text-3xl block py-2 px-3 rounded bg-transparent md:p-0 text-white hover:font-bold" href="#about-us-page-container">About Us</a>
                </li>
              </Fade>
              <Fade triggerOnce keyframes={down} delay="50">
                <li>
                  <a className="text-3xl block py-2 px-3 rounded bg-transparent md:p-0 text-white hover:font-bold" href="#Projects">Projects</a>
                </li>
              </Fade>
              <Fade triggerOnce keyframes={down} delay="80">
                <li>
                  <a className="text-3xl block py-2 px-3 rounded bg-transparent md:p-0 text-white hover:font-bold" href="#contact-container">Contact</a>
                </li>
              </Fade>
              <div id="bg-nav-link-container"></div>
        </ul>
      </div>
      </div>
    </nav> 
  );
}


export default Navbar;