import React, { Component } from "react";
import Link from 'next/link';
import Navbar from "../components/navbar";
import LandingPageVideo from "../components/LandingPageVideo";
import AboutUs from "../components/infoPic";
import RAboutUs from "../components/picInfo";
import Facts from "../components/facts";
import Card from "../components/card";
import Contact from "../components/fullContact";
import Footer from "../components/footer";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';
import Head from 'next/head';

import buildImg from "../public/build.jpeg"
import modelImg from "../public/model.png"
import kitchedImg from "../public/kitched.jpg"
import livingroomImg from "../public/livingroom.jpg"
import washroomImg from "../public/washroom.jpg"
import loungeImg from "../public/lounge.jpg"


export default class Index extends Component{
  render(){
    return(
      <div>
        <Head>
          <title>Home - Hawk Builders</title>
          <link rel="icon" href="https://i.ibb.co/PN3RFY5/favicon.png" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="UTF-8" />
          <meta name="description" content="Hawk Builders has been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality." />
          <meta name="keywords" content="Hawk, Builders, Hawk Builders, H, B, HB, House, Construction, Basement, Washroom, Kitchen, Renovation, Upgrade, Living, Home, Construction" />
          <meta name="author" content="Site 4 u" />
        </Head>
        <Navbar name="Hawk Builders"/>
        <LandingPageVideo url="vyIh46Xawyo" name="Hawk Builders" desc="Strive To Serve Your Dream" /> 
        <AboutUs  name="What is Hawk Builders"  desc="We have been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality." image="https://i.ibb.co/nzdqgWr/download.png"  />
        <Facts message1="Your experience with us will be seamless" message2="We will make your Dream a Reality" message3="We serve you in numerous ways"/>
        
        <RAboutUs  name="How We Serve You"  desc="
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
        " image="https://i.ibb.co/qJQNTSH/pexels-burst-544965-1-1.jpg"  />


        <Facts message1="Your experience with us will be seamless" message2="We will make your Dream a Reality" message3="We serve you in numerous ways"/>
        
        
        <div id="Projects">
        <Fade triggerOnce keyframes={up} delay="0">
          <h1> Projects </h1>
        </Fade>
          <div className="container">
            <div className="cards">
              <Card id="1" name="Build"                        desc="We build houses to your taste. Just contact us to get a quote on the price."                                      img={buildImg} />
              <Card id="2" name="Model"                        desc="We model the ultimate dream house that you would want us to build for you."                                       img={modelImg} />
              <Card id="3" name="Kitchen"                      desc="Have a kitchen to Great Gordan's Standards."                                                                      img={kitchedImg} />
              <Card id="4" name="Living Room"                  desc="Grab popcorn on a Friday nigh and enjoy a warm cozy room."                                                        img={livingroomImg} />
              <Card id="5" name="Washroom"                     desc="No matter your budget, experience the washroom of a king."                                                        img={washroomImg}/>
              <Card id="6" name="Lounge"                       desc="Call your friends over and enjoy the day by showing off your new lounge created by the 'Hawk Builders'."          img={loungeImg} />
            </div>
          </div>

          <Link legacyBehavior href="/projects"> 
            <a className="viewMoreProjects"> View More </a> 
          </Link>

        </div>
        

        <Contact />

        <Fade triggerOnce keyframes={up} delay="0">
          <Footer />
        </Fade>
        
      

      </div>
    )
  }
};
