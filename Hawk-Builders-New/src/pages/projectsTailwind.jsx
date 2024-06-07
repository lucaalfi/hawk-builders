import React, { Component } from "react";

import BackBtn from "../components/backTailwind.jsx";
import Image from "../components/houseImageTailwind.jsx";
import Footer from "../components/footerTailwind.jsx";
import Reveal, { Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {up, left, right, down} from '../styles/anim.js';


import favicon from "../public/favicon.png";
import buildImg from "../public/build.jpeg";
import modelImg from "../public/model.png";
import kitchenImg from "../public/kitchen.jpg";
import kitchen2Img from "../public/kitchen2.jpg";
import kitchen3Img from "../public/kitchen3.jpg";
import livingroomImg from "../public/livingroom.jpg";
import washroomImg from "../public/washroom.jpg";
import wardrobeImg from "../public/wardrobe.jpg";
import stairsImg from "../public/stairs.jpg";
import marbleImg from "../public/marble.jpg";
import closetImg from "../public/closet.jpg";
import loungeImg from "../public/lounge.jpg";

import photo1 from "../public/photo1.png";
import photo2 from "../public/photo2.png";
import photo3 from "../public/photo3.png";
import photo4 from "../public/photo4.png";
import photo5 from "../public/photo5.png";

import bedroom1 from "../public/bedroom1.jpg";
import bedroom2 from "../public/bedroom2.jpg";
import bedroom3 from "../public/bedroom3.jpg";

import basement1 from "../public/basement1.png";
import basement2 from "../public/basement2.png";
import basement3 from "../public/basement3.png";
import basement4 from "../public/basement4.png";
import basement5 from "../public/basement5.png";
import basement6 from "../public/basement6.png";

import washroom1 from "../public/washroom1.jpg";
import washroom2 from "../public/washroom2.jpg";
import washroom3 from "../public/washroom3.png";
import washroom4 from "../public/washroom4.png";

export default class ProjectsTailwind extends Component{
  render(){
    return(
      <div>

        <BackBtn />

        <div className="container-project flex flex-col justify-center items-center">


          {/* House Container */}
          <div className="w-9/12 mb-[5%] text-left">
            <Fade triggerOnce keyframes={right}>
              <h1 className="text-4xl">Houses</h1>
            </Fade>
            <div className="flex justify-left items-left justify-start flex-wrap">
              <Image id="1" link={buildImg} />
              <Image id="2" link={modelImg} />
            </div>
          </div>


          {/* Interior Container */}
          <div className="w-9/12 mb-[5%] text-left">
            <Fade triggerOnce keyframes={right}>
              <h1 className="text-4xl">Interior</h1>
            </Fade>
            <div className="flex justify-left items-left justify-start flex-wrap">
              <Image id="1" link={livingroomImg} />
              <Image id="2" link={wardrobeImg} />
              <Image id="3" link={stairsImg} />
              <Image id="4" link={marbleImg} />
              <Image id="5" link={stairsImg} />
              <Image id="6" link={closetImg} />
              <Image id="7" link={photo1}/>
              <Image id="8" link={photo2} />
              <Image id="9" link={photo3} />
              <Image id="10" link={photo4} />
              <Image id="11" link={photo5} />
            </div>
          </div>


          {/* Bedroom Container */}
          <div className="w-9/12 mb-[5%] text-left">
            <Fade triggerOnce keyframes={right}>
              <h1 className="text-4xl">Bedroom</h1>
            </Fade>
            <div className="flex justify-left items-left justify-start flex-wrap">
              <Image id="1" link={bedroom1} />
              <Image id="2" link={bedroom2} />
              <Image id="3" link={bedroom3} />
            </div>
          </div>


          {/* Kitchen Container */}
          <div className="w-9/12 mb-[5%] text-left">
            <Fade triggerOnce keyframes={right}>
              <h1 className="text-4xl">Kitchens</h1>
            </Fade>
            <div className="flex justify-left items-left justify-start flex-wrap">
              <Image id="1" link={kitchenImg} />
              <Image id="2" link={kitchen2Img} />
              <Image id="3" link={kitchen3Img} />
            </div>
          </div>


        {/* Basement Container */}
          <div className="w-9/12 mb-[5%] text-left">
            <Fade triggerOnce keyframes={right}>
              <h1 className="text-4xl">Basements</h1>
            </Fade>
            <div className="flex justify-left items-left justify-start flex-wrap">
              <Image id="1" link={basement1} />
              <Image id="2" link={basement2} />
              <Image id="3" link={basement3} />
              <Image id="4" link={basement4} />
              <Image id="5" link={basement5} />
              <Image id="6" link={basement6} />
            </div>
          </div>


          {/* Washroom Container */}
          <div className="w-9/12 mb-[5%] text-left">
            <Fade triggerOnce keyframes={right}>
              <h1 className="text-4xl">Washrooms</h1>
            </Fade>
            <div className="flex justify-left items-left justify-start flex-wrap">
              <Image id="1" link={washroom1} />
              <Image id="2" link={washroom2} />
              <Image id="3" link={washroom3} />
              <Image id="4" link={washroom4} />
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
