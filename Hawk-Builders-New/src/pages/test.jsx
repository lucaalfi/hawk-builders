import React, { Component } from "react";
import "../styles/css/masterout.css";
// import "../styles/css/back.css";
// import "../styles/css/colors.css";
// import "../styles/css/houseImage.css";

import Navbar from "../components/navbarTailwind.jsx";
import LandingPageVideo from "../components/LandingPageVideo.jsx";
import AboutUs from "../components/infoPic.jsx";
import RAboutUs from "../components/picInfo.jsx";
import Facts from "../components/facts.jsx";
import Card from "../components/card.jsx";
import Contact from "../components/fullContact.jsx";
import Footer from "../components/footer.jsx";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';

import favicon from "../public/favicon.png"

import contractImg from "../public/contract.png"
import cuttingImg from "../public/cutting.png"

import buildImg from "../public/build.jpeg"
import modelImg from "../public/model.png"
import kitchenImg from "../public/kitchen.jpg"
import livingroomImg from "../public/livingroom.jpg"
import washroomImg from "../public/washroom.jpg"
import loungeImg from "../public/lounge.jpg"


export default class Test extends Component{
  render(){
    return(
      <div>
        <Navbar name="Hawk Builders"/>
        <LandingPageVideo url="vyIh46Xawyo" name="Hawk Builders" desc="Strive To Serve Your Dream" /> 
        <AboutUs  name="What is Hawk Builders"  desc="We have been in the industry striving to serve your dreams since 2005. 
        Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, 
        or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality." image={cuttingImg} />
        <Facts message1="Your experience with us will be seamless" message2="We will make your Dream a Reality" message3="We serve you in numerous ways"/>
        
        {/* <RAboutUs  name="How We Serve You"  desc="
            Contacting us, you can let us take care of all your stress, you can lean on us for all support. Our experienced team handle it all, starting from:
            Creating Rough sketch of your vision;
            Getting land surveys conducted;
            Developing geological drawings;
            Getting soil sampling;
            Developing Engineering drawings;
            3D sketch of the House;
            HVAC drawings;
            Truss Drawing;
            Obtaining all required permits from the concerned governmental agencies;
            And finally Construction to bring your vision to life.
        " image={contractImg}  />


        <Facts message1="Your experience with us will be seamless" message2="We will make your Dream a Reality" message3="We serve you in numerous ways"/>
        
        
        <div id="Projects">
          <h1> Projects </h1> 
          <Fade triggerOnce keyframes={up} delay="0">
            <div className="containerContainer">         
              <div className="container">
                <div className="cards">
                  <Card id="1" name="Build"                        desc="We build houses to your taste. Just contact us to get a quote on the price."                                      img={buildImg} />
                  <Card id="2" name="Model"                        desc="We model the ultimate dream house that you would want us to build for you."                                       img={modelImg} />
                  <Card id="3" name="Kitchen"                      desc="Have a kitchen to Great Gordan's Standards."                                                                      img={kitchenImg} />
                  <Card id="4" name="Living Room"                  desc="Grab popcorn on a Friday nigh and enjoy a warm cozy room."                                                        img={livingroomImg} />
                  <Card id="5" name="Washroom"                     desc="No matter your budget, experience the washroom of a king."                                                        img={washroomImg}/>
                  <Card id="6" name="Lounge"                       desc="Call your friends over and enjoy the day by showing off your new lounge created by the 'Hawk Builders'."          img={loungeImg} />
                </div>
              </div>
            </div>

            <a className="viewMoreProjects" href="/projects"> View More </a> 
          </Fade>
        </div>
        

        <Contact />

        <Footer />
        <Fade triggerOnce keyframes={up} delay="0">
          
        </Fade> */}
        
      

      </div>
    )
  }
};