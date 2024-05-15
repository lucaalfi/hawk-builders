import React, { Component } from "react";
import Link from 'next/link';
import BackBtn from "../components/back";
import Image from "../components/houseImage";
import Footer from "../components/footer";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';
import Head from 'next/head'

import favicon from "../public/favicon.png"
import buildImg from "../public/build.jpeg"
import modelImg from "../public/model.png"
import kitchenImg from "../public/kitchen.jpg"
import kitchen2Img from "../public/kitchen2.jpg"
import kitchen3Img from "../public/kitchen3.jpg"
import livingroomImg from "../public/livingroom.jpg"
import washroomImg from "../public/washroom.jpg"
import wardrobeImg from "../public/wardrobe.jpg"
import stairsImg from "../public/stairs.jpg"
import marbleImg from "../public/marble.jpg"
import closetImg from "../public/closet.jpg"
import loungeImg from "../public/lounge.jpg"

import photo1 from "../public/photo1.png"
import photo2 from "../public/photo2.png"
import photo3 from "../public/photo3.png"
import photo4 from "../public/photo4.png"
import photo5 from "../public/photo5.png"

import bedroom1 from "../public/bedroom1.jpg"
import bedroom2 from "../public/bedroom2.jpg"
import bedroom3 from "../public/bedroom3.jpg"

import basement1 from "../public/basement1.png"
import basement2 from "../public/basement2.png"
import basement3 from "../public/basement3.png"
import basement4 from "../public/basement4.png"
import basement5 from "../public/basement5.png"
import basement6 from "../public/basement6.png"

import washroom1 from "../public/washroom1.jpg"
import washroom2 from "../public/washroom2.jpg"
import washroom3 from "../public/washroom3.png"
import washroom4 from "../public/washroom4.png"

export default class Index extends Component{
  render(){
    return(
      <div>
        <Head>
          <title>Projects - Hawk Builders</title>
          <link rel="shortcut icon" href={favicon.src} />
          <meta charet="UTF-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Take A look at our projects - Hawk Builders has been in the industry striving to serve your dreams since 2005. Whether it is renovating a part of your house, whole house, building new legal basement along with a separate entrance, or building brand new house from scratch in the City or in a country side, we are there to bring your vision to reality." />
          <meta name="author" content="Site 4 u" />
        </Head>

        <BackBtn />


        <div className="container-project">


          {/* House Container */}
          <div className="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Houses</h1>
            </Fade>
            <div className="imgContainerProjects">
              <Image id="1" link={buildImg.src} />
              <Image id="2" link={modelImg.src} />
            </div>
          </div>


          {/* Interior Container */}
          <div className="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Interior</h1>
            </Fade>
            <div className="imgContainerProjects">
              <Image id="1" link={livingroomImg.src} />
              <Image id="2" link={wardrobeImg.src} />
              <Image id="3" link={stairsImg.src} />
              <Image id="4" link={marbleImg.src} />
              <Image id="5" link={stairsImg.src} />
              <Image id="6" link={closetImg.src} />
              <Image id="7" link={photo1.src}/>
              <Image id="8" link={photo2.src} />
              <Image id="9" link={photo3.src} />
              <Image id="10" link={photo4.src} />
              <Image id="11" link={photo5.src} />
            </div>
          </div>


          {/* Bedroom Container */}
          <div className="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Bedroom</h1>
            </Fade>
            <div className="imgContainerProjects">
              <Image id="1" link={bedroom1.src} />
              <Image id="2" link={bedroom2.src} />
              <Image id="3" link={bedroom3.src} />
            </div>
          </div>


          {/* Kitchen Container */}
          <div className="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Kitchens</h1>
            </Fade>
            <div className="imgContainerProjects">
              <Image id="1" link={kitchenImg.src} />
              <Image id="2" link={kitchen2Img.src} />
              <Image id="3" link={kitchen3Img.src} />
            </div>
          </div>


        {/* Basement Container */}
          <div className="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Basements</h1>
            </Fade>
            <div className="imgContainerProjects">
              <Image id="1" link={basement1.src} />
              <Image id="2" link={basement2.src} />
              <Image id="3" link={basement3.src} />
              <Image id="4" link={basement4.src} />
              <Image id="5" link={basement5.src} />
              <Image id="6" link={basement6.src} />
            </div>
          </div>


          {/* Washroom Container */}
          <div className="container">
            <Fade triggerOnce keyframes={right}>
              <h1>Washrooms</h1>
            </Fade>
            <div className="imgContainerProjects">
              <Image id="1" link={washroom1.src} />
              <Image id="2" link={washroom2.src} />
              <Image id="3" link={washroom3.src} />
              <Image id="4" link={washroom4.src} />
            </div>
          </div>





        </div>

        <Fade triggerOnce keyframes={up}>
          <Footer />
        </Fade>
      

      </div>
    )
  }
};
